import React, {Component} from 'react';

export default class Hello extends React.Component{
    constructor(){
        super();
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.name === nextProps.name){
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        console.log('age inside componentDidUpdate : ');
    }

    render(){
        console.log('age is : '+this.props.age);
        return (<h1>Hello, {this.props.name}!</h1>);
    }
}
