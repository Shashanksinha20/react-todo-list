(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),s=n.n(r),l=(n(14),n(2)),o=n(3),c=n(5),u=n(4),m=n(1),d=n(6),h=(n(15),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).makeTasks=n.makeTasks.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"makeTasks",value:function(e){var t=this;return i.a.createElement("li",{onClick:function(){return t.delete(e.key)},key:e.key}," ",e.text," ")}},{key:"delete",value:function(e){this.props.delete(e)}},{key:"render",value:function(){var e=this.props.tasks.map(this.makeTasks);return i.a.createElement("ul",{className:"theList"},i.a.createElement("strong",null,e))}}]),t}(i.a.Component)),f=(n(16),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={items:[]},n.addItemHandler=n.addItemHandler.bind(Object(m.a)(n)),n.deleteItemHandler=n.deleteItemHandler.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"addItemHandler",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(t)}}))}this._inputElement.value="",console.log(this.state.items),e.preventDefault()}},{key:"deleteItemHandler",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"todoListMain"},i.a.createElement("div",{className:"header"},i.a.createElement("form",{onSubmit:this.addItemHandler},i.a.createElement("input",{ref:function(t){return e._inputElement=t},type:"text",placeholder:"Enter TASK"}),i.a.createElement("button",{className:"button",type:"Submit"},i.a.createElement("strong",null,"ADD"))))),i.a.createElement(h,{tasks:this.state.items,delete:this.deleteItemHandler}))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.387f2d37.chunk.js.map