import React, {Component} from 'react';
import axios from 'axios';

export default class PostMessage extends React.Component{
  constructor(props){
    super(props);
    this._submitMessage = this._submitMessage.bind(this);
  }

  _submitMessage(){
      console.log("messageBox :" +this.props.messageBox);
      // Fetch returning an response object
      // fetch("http://localhost:1900/redux-sample", {
      //     method: "GET"
      // }).then(function(response) {
      //     console.log("response from express", response);
      // });

      axios.get("http://localhost:1900/redux-sample").then( response => {
          console.log("response from express axios", response);
      }).catch( (error) => {
          console.log(error);
      });
  }

  render(){
    //   console.log("messageBox :" +this.props.messageBox);
      return (<div><input type="button" value="Post" onClick={this._submitMessage}/></div>);
  }
}

// PostMessage.propTypes = {
//   calculateMessgaeLength: React.PropTypes.func,
// };
