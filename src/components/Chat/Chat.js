import React, { Component } from "react";
import Message from "../Message";
import Send from "../Send";
import io from "socket.io-client";
import "./Chat.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.div = React.createRef();
    this.state = {
      currentUser: "Anonim",
      messages: [],
      inputMsg: "",
      isLogin: false,
      users: {}
    };
    this.socket = null;
  }
  setListeners = () => {
    this.socket = io("localhost:5000");
    this.socket.on("connect", () => {
      this.socket.emit("addUser", this.state.currentUser);
    });
    this.socket.on("message", data => {
      if (this.state.isLogin) this.addMessage(data);
    });
    this.socket.on("updateUsers", data => {
      console.log(data);
    });
  };
  changeMessage = event => {
    this.setState({ inputMsg: event.target.value });
  };
  validName = user => {
    return user !== "" && user !== "Anonim";
  };
  inputName = () => {
    const user = this.div.current.value;
    if (this.validName(user)) {
      this.setState({ currentUser: user, isLogin: true });
      this.setListeners();
    }
  };
  addMessage = data => {
    this.setState(({ messages }) => ({
      inputMsg: "",
      messages: [...messages, { user: data.name, text: data.message }]
    }));
  };
  sendMessage = event => {
    event.preventDefault();
    const { currentUser, inputMsg } = this.state;
    if (inputMsg.trim().length) {
      this.socket.emit("message", {
        name: currentUser,
        message: inputMsg
      });
      this.setState({ inputMsg: "" });
    }
  };
  render() {
    const { messages, inputMsg, currentUser, isLogin, users } = this.state;
    if (!isLogin) {
      return (
        <div className="login">
          <span>Welcome</span>
          <input ref={this.div} defaultValue={currentUser} />
          <button onClick={this.inputName}>Ok</button>
        </div>
      );
    }
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((item, key) => (
              <Message item={item} key={key} />
            ))}
          </div>
        </div>
        <Send
          value={inputMsg}
          onChange={this.changeMessage}
          onSend={this.sendMessage}
        />
      </div>
    );
  }
}

export default Chat;
