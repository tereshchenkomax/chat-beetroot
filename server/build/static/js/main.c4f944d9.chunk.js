(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(75)},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},70:function(e,t){},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(26),r=n.n(c),i=(n(39),n(31)),u=n(27),o=n(28),m=n(32),l=n(29),g=n(33),d=(n(41),function(e){var t=e.item;return s.a.createElement("div",{className:"message-container"},s.a.createElement("span",{className:"message"},t.user),s.a.createElement("span",{className:"message end"},t.text))}),f=(n(43),function(e){var t=e.value,n=e.onChange,a=e.onSend;return s.a.createElement("form",{onSubmit:a,className:"send-block"},s.a.createElement("input",{value:t,onChange:n,className:"input-message"}),s.a.createElement("button",{type:"submit",className:"send"},"Send"))}),p=n(30),v=n.n(p),h=(n(73),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(l.a)(t).call(this,e))).setListeners=function(){n.socket=v()("localhost:5000"),n.socket.on("connect",function(){n.socket.emit("addUser",n.state.currentUser)}),n.socket.on("message",function(e){n.state.isLogin&&n.addMessage(e)}),n.socket.on("updateUsers",function(e){console.log(e)})},n.changeMessage=function(e){n.setState({inputMsg:e.target.value})},n.validName=function(e){return""!==e&&"Anonim"!==e},n.inputName=function(){var e=n.div.current.value;n.validName(e)&&(n.setState({currentUser:e,isLogin:!0}),n.setListeners())},n.addMessage=function(e){n.setState(function(t){var n=t.messages;return{inputMsg:"",messages:[].concat(Object(i.a)(n),[{user:e.name,text:e.message}])}})},n.sendMessage=function(e){e.preventDefault();var t=n.state,a=t.currentUser,s=t.inputMsg;s.trim().length&&(n.socket.emit("message",{name:a,message:s}),n.setState({inputMsg:""}))},n.div=s.a.createRef(),n.state={currentUser:"Anonim",messages:[],inputMsg:"",isLogin:!1,users:{}},n.socket=null,n}return Object(g.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.messages,n=e.inputMsg,a=e.currentUser,c=e.isLogin;e.users;return c?s.a.createElement("div",{className:"chat"},s.a.createElement("div",{className:"message-list"},s.a.createElement("div",{className:"messages"},t.map(function(e,t){return s.a.createElement(d,{item:e,key:t})}))),s.a.createElement(f,{value:n,onChange:this.changeMessage,onSend:this.sendMessage})):s.a.createElement("div",{className:"login"},s.a.createElement("span",null,"Welcome"),s.a.createElement("input",{ref:this.div,defaultValue:a}),s.a.createElement("button",{onClick:this.inputName},"Ok"))}}]),t}(a.Component));r.a.render(s.a.createElement(h,null),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.c4f944d9.chunk.js.map