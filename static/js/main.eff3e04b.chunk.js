(this["webpackJsonpjisc-urlshortner"]=this["webpackJsonpjisc-urlshortner"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n.n(r),o=n(8),s=n.n(o),a=(n(25),n(3)),u=n(4),i=n(6),l=n(5),h=(n(26),n(10)),d=n.n(h),j=n(19),b=n(7),p=(n(28),n(29),n(0));console.log("updated1");var O=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).copyCodeToClipboard=function(){r.textArea.select(),document.execCommand("copy"),r.setState({copySuccess:!0})},r.state={copySuccess:!1},r}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:"UrlResults",children:[Object(p.jsx)("div",{className:"LongURL",children:this.props.longURL}),Object(p.jsxs)("div",{className:"ShortURL",children:[" ",Object(p.jsx)("textarea",{ref:function(e){return t.textArea=e},value:this.props.shortURL})]}),Object(p.jsx)("button",{className:"copyButton",onClick:function(){return t.copyCodeToClipboard()},children:"COPY"})]})}}]),n}(c.a.Component),f=n(20),v=n.n(f).a.create({baseURL:"https://api.shrtco.de/v2/"}),x=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).state={longUrl:"",shortUrl:""},r.updateInput=r.updateInput.bind(Object(b.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(b.a)(r)),r}return Object(u.a)(n,[{key:"updateInput",value:function(t){this.setState({longUrl:t.target.value})}},{key:"handleSubmit",value:function(){var t=this;return console.log(this.state.longUrl),console.log("Loading..."),function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("shorten?url=".concat(t.state.longUrl)).then((function(e){t.setState({shortUrl:e.data.result.short_link2}),s.a.render(Object(p.jsx)(O,{longURL:t.state.longUrl,shortURL:t.state.shortUrl}),document.getElementById("resultsDiv")),console.log(t.state.shortUrl)})).catch((function(t){console.error(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"SearchBox",children:[Object(p.jsx)("input",{placeholder:"Enter your URL...",type:"url",onChange:this.updateInput}),Object(p.jsx)("button",{className:"SearchButton",onClick:this.handleSubmit,children:"SEARCH"})]}),Object(p.jsx)("div",{id:"resultsDiv"})]})}}]),n}(c.a.Component),m=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"AppHeader",children:"URL Shortener"}),Object(p.jsx)("i",{children:Object(p.jsx)("p",{className:"IntroText",children:"Our tool allows you to seamlessly convert your long URL to a short, quick and user friendly one."})}),Object(p.jsx)(x,{})]})}}]),n}(c.a.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),o(t),s(t)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),g()}},[[49,1,2]]]);
//# sourceMappingURL=main.eff3e04b.chunk.js.map