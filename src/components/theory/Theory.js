import React, { Component } from 'react';
import './Theory.css';
class Theory extends Component {
        constructor(){
            super();
            this.state = {
                click : 0,
                start: undefined,
                end:undefined
            }
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

        settingPoints = (event) => {
            let id = event.target.id;
            if(!this.state.click){
                this.setState({start: id, click: 1});
                this.green(id);
            } else if(this.state.click === 1){
                if(id === this.state.start){
                    this.setState({start: undefined, click: 0});
                    this.red(id);
                }else{
                    this.setState({click: 2, end: id});
                }
            }
            setTimeout(() => {
                console.log(id);
                console.log("Start: " + this.state.start);
                console.log("End: " + this.state.end);
                console.log("Click: " + this.state.click);
            }, 1000);
        }

        render(){
            return(
                <div className='container'>
                    <div className='row'>
                        <div id = 'a' className='column' onClick = {this.settingPoints}>Node A</div>
                        <input id='ab' type='number' placeholder='Distance between A and B'/>
                        <div id = 'b' className='column' onClick = {this.settingPoints}>Node B</div>
                        <input id='bc' type='number' placeholder='Distance between B and C'/>
                        <div id = 'c' className='column' onClick = {this.settingPoints}>Node C</div>
                    </div>
                    
                    <div className='row'>
                        
                        <input id='ad' type='number' placeholder='Distance between A and D'/>
                        <div style={{color: 'white'}}></div>
                        <input id='be' type='number' placeholder='Distance between B and E'/>
                        <div style={{color: 'white'}}></div>
                        <input id='cf' type='number' placeholder='Distance between C and F'/>
                    </div>

                    <div className='row'>
                        <div id = 'd' className='column' onClick = {this.settingPoints}>Node D</div>
                        <input id='de' type='number' placeholder='Distance between D and E'/>
                        <div id = 'e' className='column' onClick = {this.settingPoints}>Node E</div>
                        <input id='ef' type='number' placeholder='Distance between E and F'/>
                        <div id = 'f' className='column' onClick = {this.settingPoints}>Node F</div>
                    </div>
                    <div className='row'>
                        
                        <input id='dg' type='number' placeholder='Distance between D and G'/>
                        <div style={{color: 'white'}}></div>
                        <input id='eh' type='number' placeholder='Distance between E and H'/>
                        <div style={{color: 'white'}}></div>
                        <input id='fi' type='number' placeholder='Distance between F and I'/>
                    </div>
                    <div className='row'>
                        <div id = 'g' className='column' onClick = {this.settingPoints}>Node G</div>
                        <input id='gh' type='number' placeholder='Distance between G and H'/>
                        <div id = 'h' className='column' onClick = {this.settingPoints}>Node H</div>
                        <input id='hi' type='number' placeholder='Distance between H and I'/>
                        <div id = 'i' className='column' onClick = {this.settingPoints}>Node I</div>
                    </div>
                </div>
            );
    }
}

export default Theory;