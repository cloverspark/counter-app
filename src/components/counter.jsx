import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        
    }
    // constructor(){ //use if you dont use arrow function with handleIncrement
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    handleIncrement = () =>{
        
        this.setState({count:this.state.count +1});
    }
    // styles ={
    //     fontSize: 25,
    //     fontSizeweight:"bold",
    //     fontFamily:"Courier New"
    // }

    render() { 
        console.log('props',this.props);
            //<span style={{fontSize:25}} className="badge  badge-primary m-2">{this.formatCount()}</span>
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button onClick={ product => this.handleIncrement} 
            className="btn btn-secondary btn-sm">
            Increment
            </button>
            
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'zero' : count;
    }
}
 
export default Counter;