!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,o,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function j(e){return l=e,f=setTimeout(h,t),d?y(e):u}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function h(){var e=p();if(S(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?g(n,a-(e-l)):n}(e))}function O(e){return f=void 0,v&&r?y(e):(r=o=void 0,u)}function T(){var e=p(),n=S(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(h,t),y(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=w(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(w(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?u:O(p())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),S=j.querySelector('[name="email"]'),h=j.querySelector('[name="message"]'),O="feedback-form-state",T=e(t)((function(){var e={email:S.value,message:h.value};localStorage.setItem(O,JSON.stringify(e))}),1e3);window.addEventListener("load",(function(e){var t=localStorage.getItem(O);if(t){var n=JSON.parse(t);S.value=n.email,h.value=n.message}})),j.addEventListener("input",T),j.addEventListener("submit",(function(e){e.preventDefault(),new FormData(e.currentTarget).forEach((function(e,t){console.log(t,e)})),localStorage.removeItem("feedback-form-state"),j.reset()}))}();
//# sourceMappingURL=03-feedback.e378627c.js.map
