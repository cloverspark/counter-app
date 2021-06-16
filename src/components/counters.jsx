import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {
        counters:[
            
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
      }
      handleDelete =(key)=>{
        console.log('was called',key) 
 }
    render() { 
        return (<div>
            {this.state.counters.map(counter =>(
            <Counter id={counter.id} onDelete={this.handleDelete} value={counter.value}/>
               
            
            ))}
        </div> 
        );
    }
}
 
export default Counters ;