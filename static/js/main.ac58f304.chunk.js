(this.webpackJsonptube_api_test=this.webpackJsonptube_api_test||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/window_logo.18aaeece.png"},35:function(e,t,n){e.exports=n(73)},40:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),c=n.n(i),o=(n(40),n(5)),l=n(24),u=n(27),s=n(4),m=n(29),d=n.n(m),p=n(3);n(9);function h(){var e=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    margin: 0 20px 0 10px;\n    height: 80px;\n    width: 200px;\n"]);return h=function(){return e},e}function f(){var e=Object(s.a)(["\n    width: 250px;\n    height: inherit;\n    margin-left: 2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]);return f=function(){return e},e}function v(){var e=Object(s.a)(["\n    height: 80px;\n    width: auto;\n"]);return v=function(){return e},e}function b(){var e=Object(s.a)(["\n    height: 100px;\n    width: 100vw;\n    background-color: whitesmoke;\n    box-shadow: .5px .1px 5px .1px gray;\n    margin-bottom: 10px;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]);return b=function(){return e},e}function g(e){return r.a.createElement(y,null,r.a.createElement(w,{onClick:e.popnav},r.a.createElement(E,{alt:"window",src:d.a}),r.a.createElement("span",{className:"header-title"},"Tower Window")),r.a.createElement(x,null,r.a.createElement("span",{className:"nav-buttons"},"Introduction"),r.a.createElement("span",{className:"nav-buttons"},"User")))}var y=p.a.nav(b()),E=p.a.img(v()),w=p.a.div(f()),x=p.a.div(h()),j=n(6),O=n(32),k=n.n(O);function S(){return r.a.createElement("div",null,r.a.createElement("p",null,"Subjects here."))}function N(){return r.a.createElement("div",null,r.a.createElement("p",null,"Research here..."))}function C(){var e=Object(s.a)(["\n    height: 40px;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    top: 30px;\n"]);return C=function(){return e},e}function I(){var e=Object(s.a)(["\n    padding: 2rem;\n    font-family: Helvetica, sans-serif;\n"]);return I=function(){return e},e}function _(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1rem;\n"]);return _=function(){return e},e}function z(){var e=Object(s.a)(["\n    width: 90%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n    border-bottom: 8px solid white;\n"]);return z=function(){return e},e}function P(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),i=n[0],c=n[1],l=Object(a.useState)([]),u=Object(o.a)(l,2),s=u[0],m=u[1],d=function(e){e.preventDefault(),k.a.get("http://ec2-3-15-11-97.us-east-2.compute.amazonaws.com:8000/?q=".concat(i)).then((function(e){return m(Object(j.a)(e.data))}))},p=Object(a.useState)(0),h=Object(o.a)(p,2),f=h[0],v=h[1],b=function(e){0===e?v(0):1===e?v(1):2===e&&v(2)};return r.a.createElement("div",{className:"navmenu"},r.a.createElement(H,null,r.a.createElement("span",{className:"menu-tab",onClick:function(){return b(0)}},"Search"),r.a.createElement("span",{className:"menu-tab",onClick:function(){return b(1)}},"Subjects"),r.a.createElement("span",{className:"menu-tab",onClick:function(){return b(2)}},"Research")),0===f?r.a.createElement("div",{className:"search-tab"}," ",r.a.createElement("form",{onSubmit:d},r.a.createElement("input",{placeholder:"Search for content by keywords...",className:"search-input",onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"search-results"},!s.length>0?r.a.createElement("h1",null,"Search results will show here"):s.map((function(t,n){return r.a.createElement(R,{key:n,onClick:function(){e.sendSelection(t.resId,t.vid_player)}},r.a.createElement("h4",null,t.title),r.a.createElement("hr",{width:"100%"}),r.a.createElement(W,null,r.a.createElement("img",{alt:t.title,src:"http://img.youtube.com/vi/".concat(t.resId,"/0.jpg"),height:"220"}),r.a.createElement(B,null,t.description)))})))):1===f?r.a.createElement(S,null):2===f?r.a.createElement(N,null):void 0)}var R=p.a.div(z()),W=p.a.div(_()),B=p.a.p(I()),H=p.a.div(C()),J=n(13);var L=function(){var e,t=Object(a.useState)({vid:"",player:""}),n=Object(o.a)(t,2),i=n[0],c=i.vid,s=i.player,m=n[1],d=Object(a.useState)({hide:!1}),p=Object(o.a)(d,2),h=p[0],f=(p[1],Object(a.useState)(!1)),v=Object(o.a)(f,2),b=v[0],y=v[1],E=Object(J.b)({opacity:b?1:.5,marginLeft:b?0:-1200});function w(e){e.target.playVideo()}function x(e){m(""),y((function(e){return!e}))}function j(e){var t=document.styleSheets;console.log(t)}return e=h?r.a.createElement("div",null,("youtube"===s?r.a.createElement("div",{style:T,id:"player"},r.a.createElement(l.a,{videoId:c,opts:q,onReady:w,onEnd:x,onPause:j})):"vimeo"===s?r.a.createElement("div",{style:T,id:"player"},r.a.createElement(u.a,{video:c,onEnd:x,width:"640",height:"390",autoplay:!0})):"national archives"===s?r.a.createElement("div",{style:T,id:"player"},r.a.createElement("video",{width:"640",autoPlay:!0,controls:!0},r.a.createElement("source",{src:c,type:"video/mp4"}),r.a.createElement("source",{src:c,type:"video/ogg"}),"Your browser does not support HTML5 video.")):void 0)||r.a.createElement("div",{style:T},"Open the menu to search for content...")):r.a.createElement("div",{style:V},"Paused"),r.a.createElement("div",null,r.a.createElement(g,{popnav:function(){return y((function(e){return!e}))}}),b?r.a.createElement(J.a.div,{className:"navmenu",style:E},r.a.createElement(P,{sendSelection:function(e,t){m({vid:e,player:t}),y((function(e){return!e}))}})):null,e)},T={height:"500px",width:"700px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white"},V={height:"500px",width:"725px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"blue",zIndex:"1",position:"absolute",right:"350px",top:"0"},q={height:"390",width:"640",playerVars:{modestbranding:1,rel:0,iv_load_policy:3,"ytp-pause-overlay":"0"}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){}},[[35,1,2]]]);
//# sourceMappingURL=main.ac58f304.chunk.js.map