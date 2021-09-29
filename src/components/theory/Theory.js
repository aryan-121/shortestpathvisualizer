import './Theory.css';
const Theory = () => {
    return(
        <div className='container'>
            <div className='row'>
                <div className='column'>Node A</div>
                <input id='ab' type='number' placeholder='Distance between A and B'/>
                <div className='column'>Node B</div>
                <input id='bc' type='number' placeholder='Distance between B and C'/>
                <div className='column'>Node C</div>
            </div>
            
            <div className='row'>
                
                <input id='ad' type='number' placeholder='Distance between A and D'/>
                <div style={{color: 'white'}}></div>
                <input id='' type='number' placeholder='Distance between B and E'/>
                <div style={{color: 'white'}}></div>
                <input type='number' placeholder='Distance between C and F'/>
            </div>

            <div className='row'>
                <div className='column'>Node D</div>
                <input type='number' placeholder='Distance between D and E'/>
                <div className='column'>Node E</div>
                <input type='number' placeholder='Distance between E and F'/>
                <div className='column'>Node F</div>
            </div>
            <div className='row'>
                
                <input type='number' placeholder='Distance between D and G'/>
                <div style={{color: 'white'}}></div>
                <input type='number' placeholder='Distance between E and H'/>
                <div style={{color: 'white'}}></div>
                <input type='number' placeholder='Distance between F and I'/>
            </div>
            <div className='row'>
                <div className='column'>Node G</div>
                <input type='number' placeholder='Distance between G and H'/>
                <div className='column'>Node H</div>
                <input type='number' placeholder='Distance between H and I'/>
                <div className='column'>Node I</div>
            </div>
        </div>
    );
}

export default Theory;