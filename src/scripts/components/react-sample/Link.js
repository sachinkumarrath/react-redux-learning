import React, {Component} from 'react';

export default class Link extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
      return (<div><a href={this.props.href}>{this.props.linkLabel}</a></div>);
  }
}

// PostMessage.propTypes = {
//   calculateMessgaeLength: React.PropTypes.func,
// };
