"use strict";(self.webpackChunkclad_ui=self.webpackChunkclad_ui||[]).push([[560],{6560(G,m,b){b.r(m),b.d(m,{ColorControl:()=>bl,"default":()=>bl}),b(19601),b(47941),b(69600),b(57327),b(41539),b(9653),b(74916),b(39714),b(15306),b(66992),b(51532),b(78783),b(33948),b(4723),b(21249),b(23123),b(54747),b(47042),b(92222),b(26833),b(23157),b(68309),b(82526),b(41817),b(32165),b(91038);var i,j,d,e=b(75578),h=b(67294),f=b(65316);function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function H(a){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function I(a,b){return N(a)||M(a,b)||K(a,b)||J()}function J(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function K(a,c){if(a){if("string"==typeof a)return L(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(a);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return L(a,c)}}function L(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function M(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}function N(a){if(Array.isArray(a))return a}function O(){return(O=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function P(b,f){if(null==b)return{};var c,a,d={},e=Object.keys(b);for(a=0;a<e.length;a++)f.indexOf(c=e[a])>=0||(d[c]=b[c]);return d}function Q(a){var b=(0,h.useRef)(a),c=(0,h.useRef)(function(a){b.current&&b.current(a)});return b.current=a,c.current}b(35032);var R=function(c,a,b){return void 0===a&&(a=0),void 0===b&&(b=1),c>b?b:c<a?a:c},S=function(a){return"touches"in a},T=function(a){return a&&a.ownerDocument.defaultView||self},U=function(b,c,e){var a=b.getBoundingClientRect(),d=S(c)?function(a,c){for(var b=0;b<a.length;b++)if(a[b].identifier===c)return a[b];return a[0]}(c.touches,e):c;return{left:R((d.pageX-(a.left+T(b).pageXOffset))/a.width),top:R((d.pageY-(a.top+T(b).pageYOffset))/a.height)}},V=function(a){S(a)||a.preventDefault()},W=h.memo(function(a){var d=a.onMove,e=a.onKey,f=P(a,["onMove","onKey"]),g=(0,h.useRef)(null),i=Q(d),j=Q(e),m=(0,h.useRef)(null),n=(0,h.useRef)(!1),b=(0,h.useMemo)(function(){var b=function(b){V(b),(S(b)?b.touches.length>0:b.buttons>0)&&g.current?i(U(g.current,b,m.current)):a(!1)},c=function(){return a(!1)};function a(f){var a=n.current,d=T(g.current),e=f?d.addEventListener:d.removeEventListener;e(a?"touchmove":"mousemove",b),e(a?"touchend":"mouseup",c)}return[function(e){var b=e.nativeEvent,c=g.current;if(c&&(V(b),!function(a,b){return b&&!S(a)}(b,n.current)&&c)){if(S(b)){n.current=!0;var d=b.changedTouches||[];d.length&&(m.current=d[0].identifier)}c.focus(),i(U(c,b,m.current)),a(!0)}},function(b){var a=b.which||b.keyCode;a<37||a>40||(b.preventDefault(),j({left:39===a?.05:37===a?-0.05:0,top:40===a?.05:38===a?-0.05:0}))},a]},[j,i]),c=b[0],k=b[1],l=b[2];return(0,h.useEffect)(function(){return l},[l]),h.createElement("div",O({},f,{onTouchStart:c,onMouseDown:c,className:"react-colorful__interactive",ref:g,onKeyDown:k,tabIndex:0,role:"slider"}))}),X=function(a){return a.filter(Boolean).join(" ")},Y=function(a){var c=a.color,d=a.left,b=a.top,e=X(["react-colorful__pointer",a.className]);return h.createElement("div",{className:e,style:{top:100*(void 0===b?.5:b)+"%",left:100*d+"%"}},h.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:c}}))},Z=function(c,b,a){return void 0===b&&(b=0),void 0===a&&(a=Math.pow(10,b)),Math.round(a*c)/a},$={grad:.9,turn:360,rad:360/(2*Math.PI)},_=function(a){return"#"===a[0]&&(a=a.substr(1)),a.length<6?{r:parseInt(a[0]+a[0],16),g:parseInt(a[1]+a[1],16),b:parseInt(a[2]+a[2],16),a:1}:{r:parseInt(a.substr(0,2),16),g:parseInt(a.substr(2,2),16),b:parseInt(a.substr(4,2),16),a:1}},aa=function(b){var c=b.s,a=b.l;return{h:b.h,s:(c*=(a<50?a:100-a)/100)>0?2*c/(a+c)*100:0,v:a+c,a:b.a}},ab=function(b){var c=b.s,d=b.v,e=b.a,a=(200-c)*d/100;return{h:Z(b.h),s:Z(a>0&&a<200?c*d/100/(a<=100?a:200-a)*100:0),l:Z(a/2),a:Z(e,2)}},ac=function(b){var a=ab(b);return"hsl("+a.h+", "+a.s+"%, "+a.l+"%)"},u=function(b){var a=ab(b);return"hsla("+a.h+", "+a.s+"%, "+a.l+"%, "+a.a+")"},ad=function(c){var d=c.h,e=c.s,a=c.v,j=c.a;e/=100,a/=100;var f=Math.floor(d=d/360*6),b=a*(1-e),g=a*(1-(d-f)*e),h=a*(1-(1-d+f)*e),i=f%6;return{r:Z(255*[a,g,b,b,h,a][i]),g:Z(255*[h,a,a,g,b,b][i]),b:Z(255*[b,b,h,a,a,g][i]),a:Z(j,2)}},ae=function(b){var a=b.toString(16);return a.length<2?"0"+a:a},af=function(e){var b=e.r,c=e.g,f=e.b,h=e.a,a=Math.max(b,c,f),d=a-Math.min(b,c,f),g=d?a===b?(c-f)/d:a===c?2+(f-b)/d:4+(b-c)/d:0;return{h:Z(60*(g<0?g+6:g)),s:Z(a?d/a*100:0),v:Z(a/255*100),a:h}},ag=h.memo(function(a){var b=a.hue,d=a.onChange,c=X(["react-colorful__hue",a.className]);return h.createElement("div",{className:c},h.createElement(W,{onMove:function(a){d({h:360*a.left})},onKey:function(a){d({h:R(b+360*a.left,0,360)})},"aria-label":"Hue","aria-valuetext":Z(b)},h.createElement(Y,{className:"react-colorful__hue-pointer",left:b/360,color:ac({h:b,s:100,v:100,a:1})})))}),ah=h.memo(function(b){var a=b.hsva,d=b.onChange,c={backgroundColor:ac({h:a.h,s:100,v:100,a:1})};return h.createElement("div",{className:"react-colorful__saturation",style:c},h.createElement(W,{onMove:function(a){d({s:100*a.left,v:100-100*a.top})},onKey:function(b){d({s:R(a.s+100*b.left,0,100),v:R(a.v-100*b.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Z(a.s)+"%, Brightness "+Z(a.v)+"%"},h.createElement(Y,{className:"react-colorful__saturation-pointer",top:1-a.v/100,left:a.s/100,color:ac(a)})))}),ai=function(a,b){if(a===b)return!0;for(var c in a)if(a[c]!==b[c])return!1;return!0},n=function(a,b){return a.replace(/\s/g,"")===b.replace(/\s/g,"")};function aj(b,c,e){var f=Q(e),d=(0,h.useState)(function(){return b.toHsva(c)}),a=d[0],g=d[1],i=(0,h.useRef)({color:c,hsva:a});return(0,h.useEffect)(function(){if(!b.equal(c,i.current.color)){var a=b.toHsva(c);i.current={hsva:a,color:c},g(a)}},[c,b]),(0,h.useEffect)(function(){var c;ai(a,i.current.hsva)||b.equal(c=b.fromHsva(a),i.current.color)||(i.current={hsva:a,color:c},f(c))},[a,b,f]),[a,(0,h.useCallback)(function(a){g(function(b){return Object.assign({},b,a)})},[])]}for(var ak="undefined"!=typeof window?h.useLayoutEffect:h.useEffect,al=new Map,am=function(a){ak(function(){var c=a.current?a.current.ownerDocument:document;if(void 0!==c&&!al.has(c)){var d=c.createElement("style");d.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',al.set(c,d);var e=function(){return b.nc}();e&&d.setAttribute("nonce",e),c.head.appendChild(d)}},[])},an=function(a){var i=a.className,b=a.colorModel,c=a.color,j=void 0===c?b.defaultColor:c,k=a.onChange,l=P(a,["className","colorModel","color","onChange"]),d=(0,h.useRef)(null);am(d);var e=aj(b,j,k),f=e[0],g=e[1],m=X(["react-colorful",i]);return h.createElement("div",O({},l,{ref:d,className:m}),h.createElement(ah,{hsva:f,onChange:g}),h.createElement(ag,{hue:f.h,onChange:g,className:"react-colorful__last-control"}))},ao={defaultColor:"000",toHsva:function(a){return af(_(a))},fromHsva:function(d){var a,b,c;return b=(a=ad(d)).g,c=a.b,"#"+ae(a.r)+ae(b)+ae(c)},equal:function(a,b){return a.toLowerCase()===b.toLowerCase()||ai(_(a),_(b))}},ap=function(b){var c=b.className,a=b.hsva,f=b.onChange,d={backgroundImage:"linear-gradient(90deg, "+u(Object.assign({},a,{a:0}))+", "+u(Object.assign({},a,{a:1}))+")"},e=X(["react-colorful__alpha",c]);return h.createElement("div",{className:e},h.createElement("div",{className:"react-colorful__alpha-gradient",style:d}),h.createElement(W,{onMove:function(a){f({a:a.left})},onKey:function(b){f({a:R(a.a+b.left)})},"aria-label":"Alpha","aria-valuetext":Z(100*a.a)+"%"},h.createElement(Y,{className:"react-colorful__alpha-pointer",left:a.a,color:u(a)})))},aq=function(a){var i=a.className,d=a.colorModel,e=a.color,j=void 0===e?d.defaultColor:e,k=a.onChange,l=P(a,["className","colorModel","color","onChange"]),f=(0,h.useRef)(null);am(f);var g=aj(d,j,k),b=g[0],c=g[1],m=X(["react-colorful",i]);return h.createElement("div",O({},l,{ref:f,className:m}),h.createElement(ah,{hsva:b,onChange:c}),h.createElement(ag,{hue:b.h,onChange:c}),h.createElement(ap,{hsva:b,onChange:c,className:"react-colorful__last-control"}))},ar={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:function(b){var a=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(b);return a?aa({h:function(b,a){return void 0===a&&(a="deg"),Number(b)*($[a]||1)}(a[1],a[2]),s:Number(a[3]),l:Number(a[4]),a:void 0===a[5]?1:Number(a[5])/(a[6]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:u,equal:n},as={defaultColor:"rgba(0, 0, 0, 1)",toHsva:function(b){var a=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(b);return a?af({r:Number(a[1])/(a[2]?100/255:1),g:Number(a[3])/(a[4]?100/255:1),b:Number(a[5])/(a[6]?100/255:1),a:void 0===a[7]?1:Number(a[7])/(a[8]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:function(b){var a=ad(b);return"rgba("+a.r+", "+a.g+", "+a.b+", "+a.a+")"},equal:n},o={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},v={},k=0,p=Object.keys(o);k<p.length;k++){var q=p[k];v[o[q]]=q}for(var a={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},r=a,l=0,s=Object.keys(a);l<s.length;l++){var c=s[l];if(!("channels"in a[c]))throw new Error("missing channels property: "+c);if(!("labels"in a[c]))throw new Error("missing channel labels property: "+c);if(a[c].labels.length!==a[c].channels)throw new Error("channel and label counts mismatch: "+c);var t=a[c],w=t.channels,x=t.labels;delete a[c].channels,delete a[c].labels,Object.defineProperty(a[c],"channels",{value:w}),Object.defineProperty(a[c],"labels",{value:x})}function at(a,b){return Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2)+Math.pow(a[2]-b[2],2)}a.rgb.hsl=function(h){var b,d=h[0]/255,e=h[1]/255,f=h[2]/255,c=Math.min(d,e,f),a=Math.max(d,e,f),g=a-c;a===c?b=0:d===a?b=(e-f)/g:e===a?b=2+(f-d)/g:f===a&&(b=4+(d-e)/g),(b=Math.min(60*b,360))<0&&(b+=360);var i=(c+a)/2;return[b,100*(a===c?0:i<=.5?g/(a+c):g/(2-a-c)),100*i]},a.rgb.hsv=function(f){var g,h,i,a,j,c=f[0]/255,d=f[1]/255,e=f[2]/255,b=Math.max(c,d,e),l=b-Math.min(c,d,e),k=function(a){return(b-a)/6/l+.5};return 0===l?(a=0,j=0):(j=l/b,g=k(c),h=k(d),i=k(e),c===b?a=i-h:d===b?a=1/3+g-i:e===b&&(a=2/3+h-g),a<0?a+=1:a>1&&(a-=1)),[360*a,100*j,100*b]},a.rgb.hwb=function(b){var d=b[0],e=b[1],c=b[2];return[a.rgb.hsl(b)[0],100*(1/255*Math.min(d,Math.min(e,c))),100*(c=1-1/255*Math.max(d,Math.max(e,c)))]},a.rgb.cmyk=function(b){var c=b[0]/255,d=b[1]/255,e=b[2]/255,a=Math.min(1-c,1-d,1-e);return[100*((1-c-a)/(1-a)||0),100*((1-d-a)/(1-a)||0),100*((1-e-a)/(1-a)||0),100*a]},a.rgb.keyword=function(b){var c,d=v[b];if(d)return d;for(var e=1/0,a=0,f=Object.keys(o);a<f.length;a++){var g=f[a],h=at(b,o[g]);h<e&&(e=h,c=g)}return c},a.keyword.rgb=function(a){return o[a]},a.rgb.xyz=function(d){var a=d[0]/255,b=d[1]/255,c=d[2]/255;return[100*(.4124*(a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92)+.3576*(b=b>.04045?Math.pow((b+.055)/1.055,2.4):b/12.92)+.1805*(c=c>.04045?Math.pow((c+.055)/1.055,2.4):c/12.92)),100*(.2126*a+.7152*b+.0722*c),100*(.0193*a+.1192*b+.9505*c)]},a.rgb.lab=function(f){var e=a.rgb.xyz(f),c=e[0],b=e[1],d=e[2];return c/=95.047,b/=100,d/=108.883,c=c>.008856?Math.pow(c,1/3):7.787*c+16/116,[116*(b=b>.008856?Math.pow(b,1/3):7.787*b+16/116)-16,500*(c-b),200*(b-(d=d>.008856?Math.pow(d,1/3):7.787*d+16/116))]},a.hsl.rgb=function(h){var c,a,d,j=h[0]/360,f=h[1]/100,b=h[2]/100;if(0===f)return[d=255*b,d,d];c=b<.5?b*(1+f):b+f-b*f;for(var e=2*b-c,i=[0,0,0],g=0;g<3;g++)(a=j+ -(1/3*(g-1)))<0&&a++,a>1&&a--,d=6*a<1?e+(c-e)*6*a:2*a<1?c:3*a<2?e+(c-e)*(2/3-a)*6:e,i[g]=255*d;return i},a.hsl.hsv=function(d){var f=d[0],b=d[1]/100,a=d[2]/100,e=b,c=Math.max(a,.01);return a*=2,b*=a<=1?a:2-a,e*=c<=1?c:2-c,[f,100*(0===a?2*e/(c+e):2*b/(a+b)),100*((a+b)/2)]},a.hsv.rgb=function(c){var d=c[0]/60,e=c[1]/100,a=c[2]/100,i=Math.floor(d)%6,h=d-Math.floor(d),b=255*a*(1-e),f=255*a*(1-e*h),g=255*a*(1-e*(1-h));switch(a*=255,i){case 0:return[a,g,b];case 1:return[f,a,b];case 2:return[b,a,g];case 3:return[b,f,a];case 4:return[g,b,a];case 5:return[a,b,f]}},a.hsv.hsl=function(b){var a,e,h=b[0],c=b[1]/100,f=b[2]/100,g=Math.max(f,.01);e=(2-c)*f;var d=(2-c)*g;return a=c*g,a/=d<=1?d:2-d,[h,100*(a=a||0),100*(e/=2)]},a.hwb.rgb=function(g){var h,b,c,d,l=g[0]/360,a=g[1]/100,i=g[2]/100,j=a+i;j>1&&(a/=j,i/=j);var k=Math.floor(6*l),e=1-i;(1&k)!=0&&(h=1-h);var f=a+(h=6*l-k)*(e-a);switch(k){default:case 6:case 0:b=e,c=f,d=a;break;case 1:b=f,c=e,d=a;break;case 2:b=a,c=e,d=f;break;case 3:b=a,c=f,d=e;break;case 4:b=f,c=a,d=e;break;case 5:b=e,c=a,d=f;break}return[255*b,255*c,255*d]},a.cmyk.rgb=function(b){var c=b[0]/100,d=b[1]/100,e=b[2]/100,a=b[3]/100;return[255*(1-Math.min(1,c*(1-a)+a)),255*(1-Math.min(1,d*(1-a)+a)),255*(1-Math.min(1,e*(1-a)+a))]},a.xyz.rgb=function(d){var a,b,c,e=d[0]/100,f=d[1]/100,g=d[2]/100;return a=3.2406*e+ -1.5372*f+ -0.4986*g,b=-0.9689*e+1.8758*f+.0415*g,c=.0557*e+ -0.204*f+1.057*g,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:12.92*a,b=b>.0031308?1.055*Math.pow(b,1/2.4)-.055:12.92*b,c=c>.0031308?1.055*Math.pow(c,1/2.4)-.055:12.92*c,a=Math.min(Math.max(0,a),1),b=Math.min(Math.max(0,b),1),c=Math.min(Math.max(0,c),1),[255*a,255*b,255*c]},a.xyz.lab=function(d){var b=d[0],a=d[1],c=d[2];return b/=95.047,a/=100,c/=108.883,b=b>.008856?Math.pow(b,1/3):7.787*b+16/116,[116*(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116)-16,500*(b-a),200*(a-(c=c>.008856?Math.pow(c,1/3):7.787*c+16/116))]},a.lab.xyz=function(d){var b,a,c,h=d[0],i=d[1],j=d[2];b=i/500+(a=(h+16)/116),c=a-j/200;var e=Math.pow(a,3),f=Math.pow(b,3),g=Math.pow(c,3);return a=e>.008856?e:(a-16/116)/7.787,b=f>.008856?f:(b-16/116)/7.787,c=g>.008856?g:(c-16/116)/7.787,[b*=95.047,a*=100,c*=108.883]},a.lab.lch=function(a){var b,e=a[0],c=a[1],d=a[2];return(b=360*Math.atan2(d,c)/2/Math.PI)<0&&(b+=360),[e,Math.sqrt(c*c+d*d),b]},a.lch.lab=function(a){var d=a[0],b=a[1],e=a[2],c=e/360*2*Math.PI;return[d,b*Math.cos(c),b*Math.sin(c)]},a.rgb.ansi16=function(d){var e=arguments.length>1&& void 0!==arguments[1]?arguments[1]:null,b=I(d,3),g=b[0],h=b[1],i=b[2],c=null===e?a.rgb.hsv(d)[2]:e;if(0===(c=Math.round(c/50)))return 30;var f=30+(Math.round(i/255)<<2|Math.round(h/255)<<1|Math.round(g/255));return 2===c&&(f+=60),f},a.hsv.ansi16=function(b){return a.rgb.ansi16(a.hsv.rgb(b),b[2])},a.rgb.ansi256=function(b){var a=b[0],c=b[1],d=b[2];return a===c&&c===d?a<8?16:a>248?231:Math.round((a-8)/247*24)+232:16+36*Math.round(a/255*5)+6*Math.round(c/255*5)+Math.round(d/255*5)},a.ansi16.rgb=function(b){var a=b%10;if(0===a||7===a)return b>50&&(a+=3.5),[a=a/10.5*255,a,a];var c=(~~(b>50)+1)*.5;return[(1&a)*c*255,(a>>1&1)*c*255,(a>>2&1)*c*255]},a.ansi256.rgb=function(a){if(a>=232){var c,b=(a-232)*10+8;return[b,b,b]}a-=16;var d=Math.floor((c=a%36)/6)/5*255;return[Math.floor(a/36)/5*255,d,c%6/5*255]},a.rgb.hex=function(a){var b=(((255&Math.round(a[0]))<<16)+((255&Math.round(a[1]))<<8)+(255&Math.round(a[2]))).toString(16).toUpperCase();return"000000".substring(b.length)+b},a.hex.rgb=function(d){var a=d.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!a)return[0,0,0];var b=a[0];3===a[0].length&&(b=b.split("").map(function(a){return a+a}).join(""));var c=parseInt(b,16);return[c>>16&255,c>>8&255,255&c]},a.rgb.hcg=function(f){var h,d,b=f[0]/255,c=f[1]/255,e=f[2]/255,g=Math.max(Math.max(b,c),e),i=Math.min(Math.min(b,c),e),a=g-i;return h=a<1?i/(1-a):0,d=a<=0?0:g===b?(c-e)/a%6:g===c?2+(e-b)/a:4+(b-c)/a,d/=6,d%=1,[360*d,100*a,100*h]},a.hsl.hcg=function(c){var d=c[1]/100,a=c[2]/100,b=a<.5?2*d*a:2*d*(1-a),e=0;return b<1&&(e=(a-.5*b)/(1-b)),[c[0],100*b,100*e]},a.hsv.hcg=function(b){var e=b[1]/100,c=b[2]/100,a=e*c,d=0;return a<1&&(d=(c-a)/(1-a)),[b[0],100*a,100*d]},a.hcg.rgb=function(f){var i=f[0]/360,b=f[1]/100,c=f[2]/100;if(0===b)return[255*c,255*c,255*c];var a=[0,0,0],h=i%1*6,d=h%1,g=1-d,e=0;switch(Math.floor(h)){case 0:a[0]=1,a[1]=d,a[2]=0;break;case 1:a[0]=g,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=d;break;case 3:a[0]=0,a[1]=g,a[2]=1;break;case 4:a[0]=d,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=g}return e=(1-b)*c,[(b*a[0]+e)*255,(b*a[1]+e)*255,(b*a[2]+e)*255]},a.hcg.hsv=function(a){var b=a[1]/100,c=b+a[2]/100*(1-b),d=0;return c>0&&(d=b/c),[a[0],100*d,100*c]},a.hcg.hsl=function(c){var b=c[1]/100,a=c[2]/100*(1-b)+.5*b,d=0;return a>0&&a<.5?d=b/(2*a):a>=.5&&a<1&&(d=b/(2*(1-a))),[c[0],100*d,100*a]},a.hcg.hwb=function(a){var b=a[1]/100,c=b+a[2]/100*(1-b);return[a[0],(c-b)*100,(1-c)*100]},a.hwb.hcg=function(b){var e=b[1]/100,f=b[2]/100,c=1-f,a=c-e,d=0;return a<1&&(d=(c-a)/(1-a)),[b[0],100*a,100*d]},a.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]},a.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]},a.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]},a.gray.hsl=function(a){return[0,0,a[0]]},a.gray.hsv=a.gray.hsl,a.gray.hwb=function(a){return[0,100,a[0]]},a.gray.cmyk=function(a){return[0,0,0,a[0]]},a.gray.lab=function(a){return[a[0],0,0]},a.gray.hex=function(c){var a=255&Math.round(c[0]/100*255),b=((a<<16)+(a<<8)+a).toString(16).toUpperCase();return"000000".substring(b.length)+b},a.rgb.gray=function(a){return[(a[0]+a[1]+a[2])/3/255*100]};var au=r;function av(){for(var b={},c=Object.keys(au),d=c.length,a=0;a<d;a++)b[c[a]]={distance:-1,parent:null};return b}function aw(f){var a=av(),b=[f];for(a[f].distance=0;b.length;)for(var c=b.pop(),g=Object.keys(au[c]),i=g.length,d=0;d<i;d++){var h=g[d],e=a[h];-1===e.distance&&(e.distance=a[c].distance+1,e.parent=c,b.unshift(h))}return a}function ax(a,b){return function(c){return b(a(c))}}function ay(c,a){for(var e=[a[c].parent,c],d=au[a[c].parent][c],b=a[c].parent;a[b].parent;)e.unshift(a[b].parent),d=ax(au[a[b].parent][b],d),b=a[b].parent;return d.conversion=e,d}var y=r,az=function(f){for(var a=aw(f),d={},e=Object.keys(a),g=e.length,b=0;b<g;b++){var c=e[b];null!==a[c].parent&&(d[c]=ay(c,a))}return d},z={},A=Object.keys(y);function aA(a){var b=function(){for(var e=arguments.length,b=new Array(e),c=0;c<e;c++)b[c]=arguments[c];var d=b[0];return null==d?d:(d.length>1&&(b=d),a(b))};return"conversion"in a&&(b.conversion=a.conversion),b}function aB(a){var b=function(){for(var g=arguments.length,c=new Array(g),d=0;d<g;d++)c[d]=arguments[d];var e=c[0];if(null==e)return e;e.length>1&&(c=e);var b=a(c);if("object"===H(b))for(var h=b.length,f=0;f<h;f++)b[f]=Math.round(b[f]);return b};return"conversion"in a&&(b.conversion=a.conversion),b}A.forEach(function(a){z[a]={},Object.defineProperty(z[a],"channels",{value:y[a].channels}),Object.defineProperty(z[a],"labels",{value:y[a].labels});var b=az(a);Object.keys(b).forEach(function(c){var d=b[c];z[a][c]=aB(d),z[a][c].raw=aA(d)})});var aC=z,aD=e.y,aE=/\s/;function B(b){for(var a=b.length;a-- &&aE.test(b.charAt(a)););return a}var aF=B,aG=/^\s+/;function C(a){return a?a.slice(0,aF(a)+1).replace(aG,""):a}var aH=C,aI=e.z,aJ=e.B,aK=0/0,aL=/^[-+]0x[0-9a-f]+$/i,aM=/^0b[01]+$/i,aN=/^0o[0-7]+$/i,aO=parseInt;function D(a){if("number"==typeof a)return a;if(aJ(a))return aK;if(aI(a)){var b="function"==typeof a.valueOf?a.valueOf():a;a=aI(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=aH(a);var c=aM.test(a);return c||aN.test(a)?aO(a.slice(2),c?2:8):aL.test(a)?aK:+a}var aP=e.z,aQ=function(){return aD.Date.now()},aR=D,aS="Expected a function",aT=Math.max,aU=Math.min;function E(g,b,a){var k,l,d,m,n,o,p=0,h=!1,e=!1,f=!0;if("function"!=typeof g)throw new TypeError(aS);function q(a){var b=k,c=l;return k=l=void 0,p=a,m=g.apply(c,b)}function r(a){return p=a,n=setTimeout(u,b),h?q(a):m}function s(a){var c=b-(a-o);return e?aU(c,d-(a-p)):c}function t(a){var c=a-o;return void 0===o||c>=b||c<0||e&&a-p>=d}function u(){var a=aQ();if(t(a))return v(a);n=setTimeout(u,s(a))}function v(a){return(n=void 0,f&&k)?q(a):(k=l=void 0,m)}function i(){void 0!==n&&clearTimeout(n),p=0,k=o=l=n=void 0}function j(){return void 0===n?m:v(aQ())}function c(){var a=aQ(),c=t(a);if(k=arguments,l=this,o=a,c){if(void 0===n)return r(o);if(e)return clearTimeout(n),n=setTimeout(u,b),q(o)}return void 0===n&&(n=setTimeout(u,b)),m}return b=aR(b)||0,aP(a)&&(h=!!a.leading,e="maxWait"in a,d=e?aT(aR(a.maxWait)||0,b):d,f="trailing"in a?!!a.trailing:f),c.cancel=i,c.flush=j,c}var aV=E,aW=e.z,aX="Expected a function";function F(d,e,a){var b=!0,c=!0;if("function"!=typeof d)throw new TypeError(aX);return aW(a)&&(b="leading"in a?!!a.leading:b,c="trailing"in a?!!a.trailing:c),aV(d,e,{leading:b,maxWait:e,trailing:c})}var aY=F,aZ=f.zo.div({position:"relative",maxWidth:250}),a$=(0,f.zo)(e.W)({position:"absolute",zIndex:1,top:4,left:4}),a_=f.zo.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),a0=(0,f.zo)(e.T)(function(a){return{fontFamily:a.theme.typography.fonts.base}}),a1=f.zo.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),a2=f.zo.div(function(b){var a=b.theme;return{width:16,height:16,boxShadow:b.active?"".concat(a.appBorderColor," 0 0 0 1px inset, ").concat(a.color.mediumdark,"50 0 0 0 4px"):"".concat(a.appBorderColor," 0 0 0 1px inset"),borderRadius:a.appBorderRadius}}),a3='url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',a4=function(a){var b=a.value,c=a.active,d=a.onClick,f=a.style,g=(0,e.d)(a,["value","active","onClick","style"]),i="linear-gradient(".concat(b,", ").concat(b,"), ").concat(a3,", linear-gradient(#fff, #fff)");return h.createElement(a2,Object.assign({},g,{active:c,onClick:d},{style:Object.assign(Object.assign({},f),{backgroundImage:i})}))},a5=(0,f.zo)(e.F.Input)(function(a){return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:a.theme.typography.fonts.base}}),a6=(0,f.zo)(e.I)(function(a){return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:a.theme.input.color}});!function(a){a.RGB="rgb",a.HSL="hsl",a.HEX="hex"}(d||(d={}));var a7=Object.values(d),a8=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,a9=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,ba=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,bb=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,bc=/^\s*#?([0-9a-f]{3})\s*$/i,bd=(g(i={},d.HEX,function(a){return h.createElement(an,O({},a,{colorModel:ao}))}),g(i,d.RGB,function(a){return h.createElement(aq,O({},a,{colorModel:as}))}),g(i,d.HSL,function(a){return h.createElement(aq,O({},a,{colorModel:ar}))}),i),be=(g(j={},d.HEX,"transparent"),g(j,d.RGB,"rgba(0, 0, 0, 0)"),g(j,d.HSL,"hsla(0, 0%, 0%, 0)"),j),bf=function(b){var c=null==b?void 0:b.match(a8);if(!c)return[0,0,0,1];var a=I(c,5),e=a[1],f=a[2],g=a[3],d=a[4],h=void 0===d?1:d;return[e,f,g,h].map(Number)},bg=function(a){if(a){var c=!0;if(a9.test(a)){var f,h,i=I(bf(a),4),m=i[0],n=i[1],o=i[2],v=i[3],p=I(aC.rgb.hsl([m,n,o])||[0,0,0],3),w=p[0],x=p[1],y=p[2];return g(h={valid:c,value:a,keyword:aC.rgb.keyword([m,n,o]),colorSpace:d.RGB},d.RGB,a),g(h,d.HSL,"hsla(".concat(w,", ").concat(x,"%, ").concat(y,"%, ").concat(v,")")),g(h,d.HEX,"#".concat(aC.rgb.hex([m,n,o]).toLowerCase())),h}if(ba.test(a)){var j,k=I(bf(a),4),q=k[0],r=k[1],s=k[2],z=k[3],t=I(aC.hsl.rgb([q,r,s])||[0,0,0],3),A=t[0],B=t[1],C=t[2];return g(j={valid:c,value:a,keyword:aC.hsl.keyword([q,r,s]),colorSpace:d.HSL},d.RGB,"rgba(".concat(A,", ").concat(B,", ").concat(C,", ").concat(z,")")),g(j,d.HSL,a),g(j,d.HEX,"#".concat(aC.hsl.hex([q,r,s]).toLowerCase())),j}var l=a.replace("#",""),e=aC.keyword.rgb(l)||aC.hex.rgb(l),u=aC.rgb.hsl(e),b=a;if(/[^#a-f0-9]/i.test(a)?b=l:bb.test(a)&&(b="#".concat(l)),b.startsWith("#"))c=bb.test(b);else try{aC.keyword.hex(b)}catch(D){c=!1}return g(f={valid:c,value:b,keyword:aC.rgb.keyword(e),colorSpace:d.HEX},d.RGB,"rgba(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", 1)")),g(f,d.HSL,"hsla(".concat(u[0],", ").concat(u[1],"%, ").concat(u[2],"%, 1)")),g(f,d.HEX,b),f}},bh=function(i,a,b){if(!i||!(null==a?void 0:a.valid))return be[b];if(b!==d.HEX)return(null==a?void 0:a[b])||be[b];if(!a.hex.startsWith("#"))try{return"#".concat(aC.keyword.hex(a.hex))}catch(j){return be.hex}var e=a.hex.match(bc);if(!e)return bb.test(a.hex)?a.hex:be.hex;var c=I(e[1].split(""),3),f=c[0],g=c[1],h=c[2];return"#".concat(f).concat(f).concat(g).concat(g).concat(h).concat(h)},bi=function(c,e){var f=I((0,h.useState)(c||""),2),g=f[0],n=f[1],i=I((0,h.useState)(function(){return bg(g)}),2),a=i[0],o=i[1],j=I((0,h.useState)((null==a?void 0:a.colorSpace)||d.HEX),2),b=j[0],p=j[1];(0,h.useEffect)(function(){void 0===c&&(n(""),o(void 0),p(d.HEX))},[c]);var k=(0,h.useMemo)(function(){return bh(g,a,b).toLowerCase()},[g,a,b]),l=(0,h.useCallback)(function(b){var a=bg(b);n((null==a?void 0:a.value)||b||""),a&&(o(a),p(a.colorSpace),e(a.value))},[e]),m=(0,h.useCallback)(function(){var c=a7.indexOf(b)+1;c>=a7.length&&(c=0),p(a7[c]);var d=(null==a?void 0:a[a7[c]])||"";n(d),e(d)},[a,b,e]);return{value:g,realValue:k,updateValue:l,color:a,colorSpace:b,cycleColorSpace:m}},bj=function(a){return a.replace(/\s*/,"").toLowerCase()},bk=function(d,a,e){var b=I((0,h.useState)((null==a?void 0:a.valid)?[a]:[]),2),f=b[0],i=b[1];(0,h.useEffect)(function(){void 0===a&&i([])},[a]);var c=(0,h.useMemo)(function(){return(d||[]).map(function(a){return"string"==typeof a?bg(a):a.title?Object.assign(Object.assign({},bg(a.color)),{keyword:a.title}):bg(a.color)}).concat(f).filter(Boolean).slice(-27)},[d,f]),g=(0,h.useCallback)(function(a){(null==a?void 0:a.valid)&&(c.some(function(b){return bj(b[e])===bj(a[e])})||i(function(b){return b.concat(a)}))},[e,c]);return{presets:c,addPreset:g}},bl=function(a){var j=a.name,k=a.value,l=a.onChange,m=a.onFocus,n=a.onBlur,o=a.presetColors,p=a.startOpen,b=bi(k,aY(l,200)),d=b.value,c=b.realValue,q=b.updateValue,r=b.color,f=b.colorSpace,s=b.cycleColorSpace,g=bk(o,r,f),i=g.presets,u=g.addPreset,t=bd[f];return h.createElement(aZ,null,h.createElement(a$,{trigger:"click",startOpen:p,closeOnClick:!0,onVisibilityChange:function(){return u(r)},tooltip:h.createElement(a_,null,h.createElement(t,Object.assign({color:"transparent"===c?"#000000":c},{onChange:q,onFocus:m,onBlur:n})),i.length>0&&h.createElement(a1,null,i.map(function(a,b){return h.createElement(e.W,{key:"".concat(a.value,"-").concat(b),hasChrome:!1,tooltip:h.createElement(a0,{note:a.keyword||a.value})},h.createElement(a4,{value:a[f],active:r&&bj(a[f])===bj(r[f]),onClick:function(){return q(a.value)}}))})))},h.createElement(a4,{value:c,style:{margin:4}})),h.createElement(a5,{id:(0,e.C)(j),value:d,onChange:function(a){return q(a.target.value)},onFocus:function(a){return a.target.select()},placeholder:"Choose color..."}),d?h.createElement(a6,{icon:"markup",onClick:s}):null)}}}])