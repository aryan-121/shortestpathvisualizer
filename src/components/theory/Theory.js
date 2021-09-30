import React, { Component } from 'react';
import './Theory.css';
class Theory extends Component {
        render(){
            return(
                <div>
                    <div className='heading'>
                        Instructions : 
                    </div>
                    <ol>
                        <li>Enter the distance between Nodes inside the given Dialog boxes</li>
                        <li>All the Edges represents uni-directional Path either:
                            <ul>
                                <li>Left to Right</li>
                                <li>Top to Bottom</li>
                            </ul>
                            </li>
                        <li>Click on the Node to set it as the Starting Point</li>
                        <li>Click on another Node to set it as Ending Point</li>
                    </ol>
                </div>
            );
        }
}

export default Theory;