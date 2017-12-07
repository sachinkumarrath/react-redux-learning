import React, {Component} from 'react';

export default class MessageBoard extends React.Component{
    constructor(props){
        super(props);
        this._sendBackMessage = this._sendBackMessage.bind(this);
    }

    _sendBackMessage(){
        //   console.log('inside _sendBackMessage');
        //   console.log(this.props.placeHolder);
        let textBoxContent = this.commentBox.value;
        this.props.calculateMessgaeLength(textBoxContent);
    }

    render(){
        return (<div className="message-board">
            <textarea id="message" rows="4" cols="50" ref={commentBox => this.commentBox = commentBox}
                placeholder={this.props.placeHolder} onKeyUp={this._sendBackMessage}/>
        </div>);
    }
}

// MessageBoard.propTypes = {
//   calculateMessgaeLength: React.PropTypes.func,
// };
