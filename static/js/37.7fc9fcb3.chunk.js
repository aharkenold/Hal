(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1108:function(e,a,t){"use strict";t.r(a);var s=t(227),n=t(228),o=t(230),r=t(229),c=t(231),l=t(3),u=t.n(l),i=t(889),f=t(890),d=t(892),m=t(891),b=t(893),p=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(i.a,null,u.a.createElement(f.a,{xs:"12"},u.a.createElement(d.a,null,u.a.createElement(m.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Lighting Room 2")),u.a.createElement(b.a,null,"LightRoom2")))))}}]),a}(l.Component);a.default=p},886:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},889:function(e,a,t){"use strict";var s=t(35),n=t(100),o=t(3),r=t.n(o),c=t(112),l=t.n(c),u=t(884),i=t.n(u),f=t(885),d={tag:f.p,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},m=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,c=e.tag,l=e.form,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(f.l)(i()(a,o?"no-gutters":null,l?"form-row":"row"),t);return r.a.createElement(c,Object(s.a)({},u,{className:d}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},890:function(e,a,t){"use strict";var s=t(35),n=t(100),o=t(886),r=t.n(o),c=t(3),l=t.n(c),u=t(112),i=t.n(u),f=t(884),d=t.n(f),m=t(885),b=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),g={tag:m.p,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,o=e.widths,c=e.tag,u=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach(function(a,s){var n=e[a];if(delete u[a],n||""===n){var o=!s;if(r()(n)){var c,l=o?"-":"-"+a+"-",f=v(o,a,n.size);i.push(Object(m.l)(d()(((c={})[f]=n.size||""===n.size,c["order"+l+n.order]=n.order||0===n.order,c["offset"+l+n.offset]=n.offset||0===n.offset,c)),t))}else{var b=v(o,a,n);i.push(b)}}}),i.length||i.push("col");var f=Object(m.l)(d()(a,i),t);return l.a.createElement(c,Object(s.a)({},u,{className:f}))};O.propTypes=g,O.defaultProps=j,a.a=O},891:function(e,a,t){"use strict";var s=t(35),n=t(100),o=t(3),r=t.n(o),c=t(112),l=t.n(c),u=t(884),i=t.n(u),f=t(885),d={tag:f.p,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),l=Object(f.l)(i()(a,"card-header"),t);return r.a.createElement(o,Object(s.a)({},c,{className:l}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},892:function(e,a,t){"use strict";var s=t(35),n=t(100),o=t(3),r=t.n(o),c=t(112),l=t.n(c),u=t(884),i=t.n(u),f=t(885),d={tag:f.p,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,o=e.color,c=e.body,l=e.inverse,u=e.outline,d=e.tag,m=e.innerRef,b=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(f.l)(i()(a,"card",!!l&&"text-white",!!c&&"card-body",!!o&&(u?"border":"bg")+"-"+o),t);return r.a.createElement(d,Object(s.a)({},b,{className:p,ref:m}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},893:function(e,a,t){"use strict";var s=t(35),n=t(100),o=t(3),r=t.n(o),c=t(112),l=t.n(c),u=t(884),i=t.n(u),f=t(885),d={tag:f.p,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,c=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),u=Object(f.l)(i()(a,"card-body"),t);return r.a.createElement(c,Object(s.a)({},l,{className:u,ref:o}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m}}]);
//# sourceMappingURL=37.7fc9fcb3.chunk.js.map