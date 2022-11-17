import React from "react";

class Messanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRead: false,

      message: {
        user: "Bot",
        text: "Hello what is your name?",
      },
    };
  }

  messageDisplayer() {
    const {
      message: { user, text },
    } = this.state;
    return (
      <>
        <p>Message from {user}</p>
        <p>Message is: {text}</p>
      </>
    );
  }

  clickerReader =()=> {
    this.setState({isRead: !this.state.isRead });
  }

  render = () => {
    const {isRead} = this.state
    return (
      <article>
        <p>{this.messageDisplayer()}</p>
        <button hidden={isRead} onClick={this.clickerReader}>
          Read message
        </button>
      </article>
    );
  };
}

export default Messanger;
