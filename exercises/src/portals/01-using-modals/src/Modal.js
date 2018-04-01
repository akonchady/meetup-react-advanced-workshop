import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {

  render() {
    if(!this.props.show) {
      return null;
    }

     const modalStyle = {
        background: 'transparent',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: 0
      };


    /* return <div style={modalStyle} >
        {this.props.children}
      </div>; */
      return ReactDOM.createPortal((
        <div style={modalStyle} >
          {this.props.children}
        </div>
      ), document.getElementById('modal'));
  }
}

export default Modal;
