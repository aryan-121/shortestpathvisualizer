import { Component } from "react";
import './Simulation.css';

class Simulation extends Component{
    constructor(){
        super();
        this.state = {
            click : 0,
            start: undefined,
            end:undefined
        }
    }
    arr = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
    path = [[0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0]];
    valueCheck = () => {
        this.path[0][1]=document.getElementById('ab').value;
        this.path[0][2]=document.getElementById('bc').value;
        this.path[1][0]=document.getElementById('ad').value;
        this.path[1][1]=document.getElementById('be').value;
        this.path[1][2]=document.getElementById('cf').value;
        this.path[2][1]=document.getElementById('de').value;
        this.path[2][2]=document.getElementById('ef').value;
        this.path[3][0]=document.getElementById('dg').value;
        this.path[3][1]=document.getElementById('eh').value;
        this.path[3][2]=document.getElementById('fi').value;
        this.path[4][1]=document.getElementById('gh').value;
        this.path[4][2]=document.getElementById('hi').value;
        for(let i = 0 ; i < 5 ; i++){
            for(let j = 0 ; j < 3 ; j++){
                if(this.path[i][j] === ''){
                    return 0;
                }
            }
        }
        return 1;
    }

    

    pathFinder = (start, end) => {
        let ch1 = start.charCodeAt(0)-97;
        let ch2 = end.charCodeAt(0)-97;
        let r1 = Math.floor(ch1/3), r2 = Math.floor(ch2/3), c1 = ch1%3, c2 = ch2%3;
        this.shortestPath(r1, r2, c1, c2, -9999);
    }
    
    blue = (id) => {
        let point = document.getElementById(id);
        point.style.background = '#4081ec';
        point.style.border = '2px #4081ec solid';
        point.style.color = '#fff';
    }

    green = (id) => {
        let point = document.getElementById(id);
        point.style.background = '#01f702';
        point.style.border = '2px #01f702 solid';
        point.style.color = '#fff';
    }

    red = (id) => {
        let point = document.getElementById(id);
        point.style.background = '#ff4a4a';
        point.style.border = '2px #ff4a4a solid';
        point.style.color = '#f2f2f2';
    }

    shortestPath = (r1, r2, c1, c2, len) => {
        if(c1 === c2){
            if(r2-r1 > 1){
                this.blue(this.arr[1][c1]);
            }
        }
        else if(r1 === r2){
            if(c2-c1 > 1){
                this.blue(this.arr[r1][1]);
            }
        }
        else if(c2-c1 === 1){
            if(r2-r1 === 1){
                if((this.path[2*r1][c2] + this.path[2*r1 + 1][c2]) > (this.path[2*r1+1][c1] + this.path[2*r1+2][c2])){
                    this.blue(this.arr[r1][c2]);
                }
                else{
                    this.blue(this.arr[r2][c1]);
                }
            }
            else{
                let path1 = parseInt(this.path[2*r1][c2]) + parseInt(this.path[2*r1 + 1][c2]) + parseInt(this.path[2*r1 + 3][c2]);
                let path2 = parseInt(this.path[2*r1+1][c1]) + parseInt(this.path[2*r1+3][c1]) + parseInt(this.path[2*r1+4][c2]);
                let path3 = parseInt(this.path[2*r1+1][c1]) + parseInt(this.path[2*r1+2][c2]) + parseInt(this.path[2*r1+3][c2]);
                if(path1 < path2 && path1 < path3){
                    this.blue(this.arr[r1][c2]);
                    this.blue(this.arr[r1+1][c2]);
                }
                else if(path2 < path1 && path2 < path3){
                    this.blue(this.arr[r1+1][c1]);
                    this.blue(this.arr[r1+2][c1]);
                }
                else{
                    this.blue(this.arr[r1+1][c1]);
                    this.blue(this.arr[r1+1][c2]);
                }
            }
        }
        else{
            if(r2-r1 === 1){
                let path1 = parseInt(this.path[2*r1][c1+1]) + parseInt(this.path[2*r1][c2]) + parseInt(this.path[2*r1+1][c2]);
                let path2 = parseInt(this.path[2*r1+1][c1]) + parseInt(this.path[2*r1+2][c1+1]) + parseInt(this.path[2*r1+2][c2]);
                let path3 = parseInt(this.path[2*r1][c1+1]) + parseInt(this.path[2*r1+1][c1+1]) + parseInt(this.path[2*r1+2][c2]);
                if(path1 < path2 && path1 < path3){
                    this.blue(this.arr[r1][c1+1]);
                    this.blue(this.arr[r1][c2]);
                }
                else if(path2 < path1 && path2 < path3){
                    this.blue(this.arr[r1+1][c1]);
                    this.blue(this.arr[r1+1][c1+1]);
                }
                else{
                    this.blue(this.arr[r1][c1+1]);
                    this.blue(this.arr[r1+1][c1+1]);
                }
            }
            else{
                let p1 = parseInt(this.path[0][1]) + parseInt(this.path[0][2]) + parseInt(this.path[1][2]) + parseInt(this.path[3][2]);
                let p2 = parseInt(this.path[0][1]) + parseInt(this.path[1][1]) + parseInt(this.path[2][2]) + parseInt(this.path[3][2]);
                let p3 = parseInt(this.path[0][1]) + parseInt(this.path[1][1]) + parseInt(this.path[3][1]) + parseInt(this.path[4][2]);
                let p4 = parseInt(this.path[1][0]) + parseInt(this.path[2][1]) + parseInt(this.path[2][2]) + parseInt(this.path[3][2]);
                let p5 = parseInt(this.path[1][0]) + parseInt(this.path[2][1]) + parseInt(this.path[3][1]) + parseInt(this.path[4][2]);
                let p6 = parseInt(this.path[1][0]) + parseInt(this.path[3][0]) + parseInt(this.path[4][1]) + parseInt(this.path[4][2]);
                console.log('1 ', p1, '2 ', p2, '3 ', p3, '4 ', p4,  '5', p5, '6 ', p6);
                if(p1<=p2 && p1<=p3 && p1<=p4 && p1<=p5 && p1<=p6){
                    console.log("Working 1!");
                    this.blue(this.arr[0][1]);
                    this.blue(this.arr[0][2]);
                    this.blue(this.arr[1][2]);
                }
                else if(p2<=p1 && p2<=p3 && p2<=p4 && p2<=p5 && p2<=p6){
                    this.blue(this.arr[0][1]);
                    this.blue(this.arr[1][1]);
                    this.blue(this.arr[1][2]);
                }
                else if(p3<=p1 && p3<=p2 && p3<=p4 && p3<=p5 && p3<=p6){
                    this.blue(this.arr[0][1]);
                    this.blue(this.arr[1][1]);
                    this.blue(this.arr[2][1]);
                }
                else if(p4<=p1 && p4<=p3 && p4<=p2 && p4<=p5 && p4<=p6){
                    this.blue(this.arr[1][0]);
                    this.blue(this.arr[1][1]);
                    this.blue(this.arr[1][2]);
                }
                else if(p5<=p1 && p5<=p3 && p5<=p4 && p5<=p2 && p5<=p6){
                    this.blue(this.arr[1][0]);
                    this.blue(this.arr[1][1]);
                    this.blue(this.arr[2][1]);
                }
                else{
                    this.blue(this.arr[1][0]);
                    this.blue(this.arr[2][0]);
                    this.blue(this.arr[2][1]);
                }
            }
        }
        
    }

    settingPoints = (event) => {
        let id = event.target.id;
        if(!this.state.click){
            if(this.valueCheck()){
                this.setState({start: id, click: 1});
                this.green(id);
            }
            else{
                alert("First Enter the Distance between Nodes !!!")
            }
        } else if(this.state.click === 1){
            if(id === this.state.start){
                this.setState({start: undefined, click: 0});
                this.red(id);
            }else{
                this.setState({click: 2, end: id});
                this.green(id);
                setTimeout(() => {
                    this.pathFinder(this.state.start, this.state.end);
                }, 10);
            }
        }
        // setTimeout(() => {
        //     console.log(id);
        //     console.log("Start: " + this.state.start);
        //     console.log("End: " + this.state.end);
        //     console.log("Click: " + this.state.click);
        // }, 900);
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div id = 'a' className='column' onClick = {this.settingPoints}>Node A</div>
                    <input id='ab' type='number' placeholder='Distance between A and B' maxLength='9'/>
                    <div id = 'b' className='column' onClick = {this.settingPoints}>Node B</div>
                    <input id='bc' type='number' placeholder='Distance between B and C' maxLength='9'/>
                    <div id = 'c' className='column' onClick = {this.settingPoints}>Node C</div>
                </div>
                
                <div className='row'>
                    
                    <input id='ad' type='number' placeholder='Distance between A and D' maxLength='9'/>
                    <div style={{color: 'white'}}></div>
                    <input id='be' type='number' placeholder='Distance between B and E' maxLength='9'/>
                    <div style={{color: 'white'}}></div>
                    <input id='cf' type='number' placeholder='Distance between C and F' maxLength='9'/>
                </div>

                <div className='row'>
                    <div id = 'd' className='column' onClick = {this.settingPoints}>Node D</div>
                    <input id='de' type='number' placeholder='Distance between D and E' maxLength='9'/>
                    <div id = 'e' className='column' onClick = {this.settingPoints}>Node E</div>
                    <input id='ef' type='number' placeholder='Distance between E and F' maxLength='9'/>
                    <div id = 'f' className='column' onClick = {this.settingPoints}>Node F</div>
                </div>
                <div className='row'>
                    
                    <input id='dg' type='number' placeholder='Distance between D and G' maxLength='9'/>
                    <div style={{color: 'white'}}></div>
                    <input id='eh' type='number' placeholder='Distance between E and H' maxLength='9'/>
                    <div style={{color: 'white'}}></div>
                    <input id='fi' type='number' placeholder='Distance between F and I' maxLength='9'/>
                </div>
                <div className='row'>
                    <div id = 'g' className='column' onClick = {this.settingPoints}>Node G</div>
                    <input id='gh' type='number' placeholder='Distance between G and H' maxLength='9'/>
                    <div id = 'h' className='column' onClick = {this.settingPoints}>Node H</div>
                    <input id='hi' type='number' placeholder='Distance between H and I' maxLength='9'/>
                    <div id = 'i' className='column' onClick = {this.settingPoints}>Node I</div>
                </div>
            </div>
        );
}
}

export default Simulation;