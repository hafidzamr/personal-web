(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},0:function(e,t,n){n("ho59"),e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var l=d[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=o.props[l],f=r[l]||new Set;f.has(s)?a=!1:(f.add(s),r[l]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var p=a.default();function h(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}h.rewind=p.rewind,t.default=h},"9d8Q":function(e,t,n){},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},NRc9:function(e,t,n){},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||a()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),l=n("RIqP");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(l,u);var c=s(l);function l(e){var a;return r(this,l),a=c.call(this,e),f&&(t.add(o(a)),n(o(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(d.Component))}},cha2:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=(n("9d8Q"),n("NRc9"),n("8Kt/")),i=n.n(a),u=o.a.createElement;function c(e){var t=e.charSet,n=void 0===t?"UTF-8":t,r=e.title,o=void 0===r?"":r,a=e.description,c=void 0===a?"":a,l=e.keywords,s=void 0===l?[]:l,d=e.og,f=void 0===d?[]:d;return u(i.a,null,u("meta",{charSet:n}),u("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),u("title",null,o),u("meta",{name:"description",content:c}),u("meta",{name:"keywords",content:s.concat().toString()}),f.map((function(e,t){return u("meta",{property:e.property,content:e.content,key:t})})))}var l=o.a.createElement;t.default=function(e){var t=e.Component,n=e.pageProps;return l(o.a.Fragment,null,l(c,{title:"hafidzamr - Personal Website",description:"this is my personal website",keywords:["Hafidz Amrulloh","Personal Web","Front End Engineer","Front-End Engineer","Front End Developer","Front-End Developer","Javascript","React.Js"],og:[{property:"og:title",content:"Hafidz Amrulloh"},{property:"og:description",content:"this is my personal website"},{property:"og:type",content:"Website"}]}),l(t,n))}},ho59:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})}},[[0,0,1,2]]]);