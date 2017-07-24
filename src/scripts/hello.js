import React, {Component} from 'react';

export default class Hello extends React.Component{
  constructor(){
    super();
  }

  render(){
      console.log('age is : '+this.props.age);
      return (<h1>Hello, {this.props.name}!</h1>);
  }

  componentDidUpdate(prevProps, prevState){
      console.log('age inside componentDidUpdate : ');
  }

  shouldComponentUpdate(nextProps, nextState){
      if(this.props.name === nextProps.name){
          return false;
      }
      return true;
  }
}
