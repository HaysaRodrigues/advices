(this.webpackJsonpadvices=this.webpackJsonpadvices||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),s=n(4),d=n.n(s),o=(n(14),n(5)),l=n(6),r=n(2),u=n(8),v=n(7),h=(n(15),function(e){Object(u.a)(n,e);var t=Object(v.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={randomAdvice:""},c.handleClick=c.handleClick.bind(Object(r.a)(c)),c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getAdvice()}},{key:"getAdvice",value:function(){var e=this;fetch("https://api.adviceslip.com/advice").then((function(e){return e.json()})).then((function(t){return e.setState({randomAdvice:t.slip.advice})}))}},{key:"handleClick",value:function(e){e.preventDefault(),this.getAdvice()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"line"}),Object(c.jsx)("div",{className:"advice",children:this.state.randomAdvice}),Object(c.jsx)("div",{className:"line"}),Object(c.jsx)("button",{className:"button",onClick:this.handleClick,children:"give me another advice"})]})}}]),n}(i.Component)),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};d.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.4a693f3e.chunk.js.map