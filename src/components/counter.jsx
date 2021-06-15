import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags:['tag1','tag2','tag3']
    }
    // constructor(){ //use if you dont use arrow function with handleIncrement
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    handleIncrement = () =>{
        console.log("increment clicked",this)
    }
    styles ={
        fontSize: 25,
        fontSizeweight:"bold",
        fontFamily:"Courier New"
    }

    render() { 
            //<span style={{fontSize:25}} className="badge  badge-primary m-2">{this.formatCount()}</span>
        return (
        <div>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button onClick={this.handleIncrement()} 
            className="btn btn-secondary btn-sm">
            Increment
            </button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
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