(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){t.exports=n(24)},24:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(13),o=n.n(i),l=n(3),u=n(10),a=n(4),f=n(6),h=["top","right","bottom","left"],s=function(t){return new Array(t).fill(0).map(function(t,e){return e})},d=function(t){return t+1},m=function(t){return t-1},g=function(t){return t},v=[["top",m,g],["left",g,m],["right",g,d],["bottom",d,g]],b=function(t,e){return function(n){return n.x===t&&n.y===e}},w=function(t){return f.a.fromPath()(["walls",t])},y={top:w("top"),right:w("right"),bottom:w("bottom"),left:w("left")},x=function(t,e){return new f.a(function(n){return n.cells.find(b(t,e))},function(n){return function(r){return Object(a.a)({},r,{cells:r.cells.map(function(r){return b(t,e)(r)?n:r})})}})},p=f.a.fromProp()("currentCell"),O=f.a.fromProp()("visited"),j=function(t,e){var n=function(t,e,n){return s(t).reduce(function(t,r){return t.concat(s(e).map(function(t){return n(r,t)}))},[])}(t,e,function(t,e){return{x:t,y:e,walls:{top:!0,right:!0,bottom:!0,left:!0},visited:!1}});return{width:t,height:e,cells:n,stack:[],currentCell:[n[0].x,n[0].y]}},k=function(t){return t.cells.some(function(t){return!t.visited})},W=function(t){return function(t){return v.reduce(function(e,n){var r=Object(l.a)(n,3),c=r[0],i=r[1],o=r[2],u=function(t,e,n){if(!(e<0||e>t.height-1||n<0||n>t.width-1))return t.cells[t.width*e+n]}(t,i(t.currentCell[0]),o(t.currentCell[1]));return u?e.concat(Object(a.a)({},u,{location:c})):e},[])}(t).filter(function(t){return!t.visited})},C=function(t,e){return x(t.x,t.y).compose(y[e]).set(!1)},E=function(t){return function(e){var n,r=x.apply(void 0,Object(u.a)(e.currentCell)).get(e),c=C(r,t.location)(e);return C(t,(n=t.location,h[(h.indexOf(n)+2)%h.length]))(c)}},H=function(t){return function(e){var n=p.get(e),r=Object(l.a)(n,2),c=r[0],i=r[1];return t.x===c&&t.y===i}},I=function(t){var e,n,r,c=W(t);if(c.length){var i=(r=c)[Math.floor(Math.random()*r.length)],o=function(t){return Object(a.a)({},t,{stack:[t.currentCell].concat(Object(u.a)(t.stack))})}(t),l=E(i)(o),f=(e=i.x,n=i.y,p.set([e,n]))(l);return function(t,e){return x(t,e).compose(O).set(!0)}(i.x,i.y)(f)}return t.stack.length?function(t){return Object(a.a)({},t,{stack:t.stack.slice(1),currentCell:t.stack[0]})}(t):t},M=function(t){var e=t.width,n=t.height,c=t.animated,i=t.timeout,o=Object(r.useState)(void 0),u=Object(l.a)(o,2),a=u[0],f=u[1],h=Object(r.useState)(!1),s=Object(l.a)(h,2),d=s[0],m=s[1];return Object(r.useEffect)(function(){return function(t){var e=t.width,n=t.height,r=t.timeout,c=t.callback,i=j(e,n);c(i,!k(i));var o=setInterval(function(){k(i)?(i=I(i),c(i,!k(i))):clearInterval(o)},r);return function(){return clearInterval(o)}}({width:e,height:n,timeout:i,callback:function(t,e){f(t),m(e)}})},[e,n,c,i]),[a,d]},P=n(7),B=function(t){return t.y},J=function(t){return t.x},S=function(t){return t.y+1},A=function(t){return t.x+1},$={top:{x1:B,y1:J,x2:S,y2:J},right:{x1:S,y1:J,x2:S,y2:A},bottom:{x1:B,y1:A,x2:S,y2:A},left:{x1:B,y1:J,x2:B,y2:A}},q=function(t){return c.a.createElement("g",null,!t.cell.visited&&c.a.createElement("rect",{x:t.cell.y*t.cellWidth,y:t.cell.x*t.cellHeight,width:t.cellWidth,height:t.cellHeight,fill:t.isCurrent?"red":"#eee"}),t.isCurrent&&c.a.createElement("rect",{x:t.cell.y*t.cellWidth,y:t.cell.x*t.cellHeight,width:t.cellWidth,height:t.cellHeight,fill:"red"}),function(t){var e=t.cell,n=t.cellWidth,r=t.cellHeight;return h.filter(function(t){return e.walls[t]}).map(function(t){return Object.entries($[t]).reduce(function(t,c){var i=Object(l.a)(c,2),o=i[0],u=i[1];return Object(a.a)({},t,Object(P.a)({},o,u(e)*(o.startsWith("x")?n:r)))},{key:t})}).map(function(t){return c.a.createElement("line",Object.assign({},t,{stroke:"black",strokeWidth:"1"}))})}(t))},z=function(t){var e=t.width,n=void 0===e?300:e,r=t.height,i=void 0===r?300:r,o=t.cellWidth,u=void 0===o?20:o,a=t.cellHeight,f=void 0===a?20:a,h=M({width:Math.floor(n/u),height:Math.floor(i/f),timeout:100,animated:!0}),s=Object(l.a)(h,2),d=s[0],m=s[1];return c.a.createElement("svg",{width:n,height:i},d&&d.cells.map(function(t){return c.a.createElement(q,{cell:t,isCurrent:!m&&H(t)(d),cellWidth:u,cellHeight:f,key:"cell-".concat(t.x,"-").concat(t.y)})}))},D=function(){return c.a.createElement(z,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.150ac9cc.chunk.js.map