(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),o=n(12),a=n.n(o),r=(n(21),n(13)),i=n(14),l=n(16),h=n(15),u=(n(22),n(23),n(24),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set1&size=180x180"),alt:"monster"}),Object(u.jsxs)("h2",{children:[" ",e.monster.name," "]}),Object(u.jsxs)("p",{children:[" ",e.monster.email," "]})]})},j=function(e){return console.log(e),Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})},m=(n(26),function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=n(27).default,f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.get("https://jsonplaceholder.typicode.com/users").then((function(t){console.log(t),e.setState({monsters:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monsters Roladex"}),Object(u.jsx)(m,{placeholder:"search monsters",handleChange:this.handleChange}),Object(u.jsx)(j,{monsters:s})]})}}]),n}(s.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),b()}},[[46,1,2]]]);
//# sourceMappingURL=main.e29b3996.chunk.js.map