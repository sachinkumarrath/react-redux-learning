import React, {Component} from 'react';
import Hello from './hello.js';

import indexStyle from '../styles/index.css';

export default class Base extends React.Component{
  constructor(){
    super();
    this.state = {
        name : "sachin1",
        messageBox : "",
        charLeft : 500
    };
    // this.props = {placeHolder : "Write your thoughts"};
    this.calculateMessgaeLength = this.calculateMessgaeLength.bind(this);
  }

  calculateMessgaeLength(textBoxContent){
        // console.log('hello',textBoxContent);
        this.setState({
            charLeft : textBoxContent ? 500-textBoxContent.length : 500,
            messageBox : textBoxContent
        });
  }

  render(){
      const flagStyleProps = {background : "url('./images/us.png')"};
      return (<div className="base-container">
                <Hello name={this.state.name} age="30"/>
            </div>);
  }
}
