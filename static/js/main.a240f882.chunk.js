(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(10),i=c.n(a),d=(c(17),c(18),c(8)),o=c(12),l=c(7),r=c(0);var j=function(e){return Object(r.jsx)("div",{className:"item-list",children:Object(r.jsxs)("div",{className:"form-check ",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",checked:e.task.completed,onChange:function(){return e.updateStatus(e.task.id)}}),e.task.completed?Object(r.jsx)("strike",{children:e.task.task}):Object(r.jsx)("label",{children:e.task.task})]})})},u=c(24),p=c(25),b=[{id:1,task:"Item1",completed:!1},{id:2,task:"Item2",completed:!1},{id:3,task:"Item3",completed:!1},{id:4,task:"Item4",completed:!1},{id:5,task:"Item5",completed:!0}];var m=function(){var e=Object(n.useState)(b),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(l.a)(a,2),m=i[0],h=i[1],O=Object(n.useState)(!1),k=Object(l.a)(O,2),x=k[0],f=k[1],g=function(e){for(var t=[],n=0;n<c.length;n++)c[n].id===e?t.push(Object(d.a)(Object(d.a)({},c[n]),{},{completed:!c[n].completed})):t.push(Object(d.a)({},c[n]));s(t)};return Object(r.jsxs)("div",{className:"main-div",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{className:"task-heading",children:"Pending Tasks"}),c.map((function(e){if(!e.completed)return Object(r.jsx)(j,{task:e,type:"pending",updateStatus:g},e.id)})),Object(r.jsxs)("div",{className:"input-group input-group-sm mb-3",children:[Object(r.jsx)("input",{type:"text",className:"form-control","aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",placeholder:"Add a new task",onChange:function(e){return h(e.target.value)},value:m}),Object(r.jsx)("div",{className:"input-group-prepend",children:Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){s([].concat(Object(o.a)(c),[{id:c.length+1,task:m,completed:!1}])),h("")},children:"Add"})})]})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{class:"dropdown",onClick:function(){return f(!x)},children:[x?Object(r.jsx)(p.a,{className:"icon",style:{fontSize:"13px"}}):Object(r.jsx)(u.a,{className:"icon",style:{fontSize:"13px"}}),Object(r.jsx)("h5",{className:"task-heading",children:"Completed Tasks"})]}),x&&c.map((function(e){if(e.completed)return Object(r.jsx)(j,{task:e,type:"pending",updateStatus:g},e.id)}))]})]})};c(20);var h=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{className:"main-heading",children:"Todo list"}),Object(r.jsx)(m,{})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.a240f882.chunk.js.map