import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
        
    // }
    // constructor(){ //use if you dont use arrow function with handleIncrement
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // handleIncrement = () =>{
        
    //     this.setState({value:this.state.value +1});
    // }
    // styles ={
    //     fontSize: 25,
    //     fontSizeweight:"bold",
    //     fontFamily:"Courier New"
    // }
    
    render() { 
        //console.log('props',this.props); //used for testing in console
            //<span style={{fontSize:25}} className="badge  badge-primary m-2">{this.formatCount()}</span>
        return (
        <div>
            <span className={this.getBadgeClasses()}>
            {this.formatValue()}
            </span> 
            <button onClick={()=> this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm">
            Increment
            </button>
            <button onClick={ ()=>this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2" >
            Delete
            </button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatValue(){
        const {value} = this.props.counter;
        return value === 0 ? 'zero' : value;
    }
}
 
export default Counter;