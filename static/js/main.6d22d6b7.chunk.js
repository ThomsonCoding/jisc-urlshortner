(this["webpackJsonpjisc-urlshortner"]=this["webpackJsonpjisc-urlshortner"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),s=n.n(a),o=(n(25),n(3)),i=n(4),u=n(6),l=n(5),d=(n(26),n(10)),j=n.n(d),h=n(19),b=n(8),p=(n(28),n(29),n(30),n(0)),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"CopiedMessage",children:Object(p.jsx)("p",{children:"COPIED!"})})}}]),n}(c.a.Component);console.log("updated1");var f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).copyCodeToClipboard=function(){s.a.render(Object(p.jsx)(O,{}),document.getElementById("copiedMessage")),r.forceUpdate(),r.textArea.select(),document.execCommand("copy"),r.setState({copySuccess:!0})},r.state={copySuccess:!1},r}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"UrlResults",children:[Object(p.jsx)("div",{id:"copiedMessage"}),Object(p.jsx)("div",{className:"LongURL",children:this.props.longURL}),Object(p.jsxs)("div",{className:"ShortURL",children:[" ",Object(p.jsx)("textarea",{ref:function(t){return e.textArea=t},value:this.props.shortURL})]}),Object(p.jsx)("button",{className:"copyButton",onClick:function(){return e.copyCodeToClipboard()},children:"COPY"})]})}}]),n}(c.a.Component),v=n(20),m=n.n(v).a.create({baseURL:"https://api.shrtco.de/v2/"}),x=(n(50),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"LoadingMessage",children:Object(p.jsx)("p",{children:"Loading..."})})}}]),n}(c.a.Component)),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={longUrl:"",shortUrl:""},r.updateInput=r.updateInput.bind(Object(b.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(b.a)(r)),r}return Object(i.a)(n,[{key:"updateInput",value:function(e){this.setState({longUrl:e.target.value})}},{key:"handleSubmit",value:function(){var e=this;return console.log(this.state.longUrl),s.a.render(Object(p.jsx)(x,{}),document.getElementById("resultsDiv")),function(){var t=Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get("shorten?url=".concat(e.state.longUrl)).then((function(t){e.setState({shortUrl:t.data.result.short_link2}),s.a.render(Object(p.jsx)(f,{longURL:e.state.longUrl,shortURL:e.state.shortUrl}),document.getElementById("resultsDiv")),console.log(e.state.shortUrl)})).catch((function(e){console.error(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"SearchBox",children:[Object(p.jsx)("input",{placeholder:"Enter your URL...",type:"url",onChange:this.updateInput}),Object(p.jsx)("button",{className:"SearchButton",onClick:this.handleSubmit,children:"SEARCH"})]}),Object(p.jsx)("div",{id:"resultsDiv"})]})}}]),n}(c.a.Component),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"AppHeader",children:"URL Shortener"}),Object(p.jsx)("i",{children:Object(p.jsx)("p",{className:"IntroText",children:"Our tool allows you to seamlessly convert your long URL to a short, quick and user friendly one."})}),Object(p.jsx)(g,{})]})}}]),n}(c.a.Component),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),U()}},[[51,1,2]]]);
//# sourceMappingURL=main.6d22d6b7.chunk.js.map