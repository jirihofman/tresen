(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),l=n.n(o),i=(n(65),n(27)),c=n.n(i),s=n(116),u=n(117),d=n(118),m=n(119),h=n(120),p=n(121),f=n(122),y=n(132),g=n(123),v=n(124),b=n(125),E=n(126),w=n(127),S=n(128),k=n(129),O=n(58),j=n(130),D=n(131),C=(n(73),n(115));function z(e){return(z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function T(e,t){return!t||"object"!==z(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,N(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,a["Component"]),n=t,(o=[{key:"renderTableRow",value:function(e){return console.log("renderuju radky:",e),e.map(function(e,t){return r.a.createElement("tr",{key:"j-".concat(t)},r.a.createElement("td",null,e.date.toLocaleDateString()),r.a.createElement("td",null,e.location.start.name),r.a.createElement("td",null,e.location.end.name),r.a.createElement("td",null,e.distance),r.a.createElement("td",null,e.note))})}},{key:"render",value:function(){return r.a.createElement(C.a,{id:"journeys"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Datum"),r.a.createElement("th",null,"Odkud"),r.a.createElement("th",null,"Kam"),r.a.createElement("th",null,"Vzd\xe1lenost v km"),r.a.createElement("th",null,"D\u016fvod cesty"))),r.a.createElement("tbody",null,this.renderTableRow(this.props.journeys)))}}])&&P(n.prototype,o),l&&P(n,l),t}();function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function U(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),e}var J=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};L(this,e),this.location=t,this.date=n,this.distance=a,this.note=r,this.mileage=o}return U(e,[{key:"describe",value:function(){return"The "+this.type+" is a "+this.occasion+"pastry, has a "+this.flavor+" flavor, "+this.levels+" layer(s), and costs "+this.price+"."}}]),e}(),K=function(){function e(t,n,a,r){L(this,e),this.code=n,this.insideDistance=this.insideDistance,this.name=t,this.zip=a}return U(e,[{key:"describe",value:function(){return"Misto ["+this.code+"]: "+this.name+", "+this.zip+"; Povolena jizda: "+this.insideDistance}}]),e}(),R=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];L(this,e),this.start=t,this.end=n,this.distance=a,this.roundTrip=r}return U(e,[{key:"describe",value:function(){return"Cesta ["+this.start.code+"] - ["+this.end.code+"]"}}]),e}(),Y=n(22),H=n.n(Y),B=n(55),G=n.n(B),M=n(28),V=n.n(M),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];console.group("Generovani cest");var n=[];if(console.log("obdobi"),console.log("vychozi lokace",e.startLocation),console.log("celkova vzdalenost",e.distance),console.log("mozna mista cesty",t),!I(e)||H()(t))return console.error("nemam data"),n;var a=function(e,t,n){if(!e||!t||e===t)return console.error("Neplatne parametry pro zjisteni pracovnich dnu"),[];if(e>t)return console.error("Datum zacatku je po datumu konce",e,t),[];var a=[],r=new Date(e),o=new Date(t),l=r;for(a=[];l<=o;l.setDate(l.getDate()+1))0!==l.getDay()&&6!==l.getDay()&&a.push(new Date(l));return a}(e.dateFrom,e.dateTo);return H()(a)?(console.error("nemam pracovni dny"),n):(360<e.distance/t.length?console.error("Moc velka vzdalenost na %s dnu",e.distance):console.log("KM denne",e.distance/a.length),(a=G()(a)).forEach(function(a,r){console.group("Workday",a);var o=H()(n)?0:n.reduce(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+(arguments.length>1?arguments[1]:void 0).distance},0);console.log("celkem zatim najeto",o);var l=V()(["Slu\u017eebn\xed cesta","N\xe1kup materi\xe1lu","Sch\u016fzka s klientem"]);if(o<e.distance){var i=V()(t);console.log("trip",i.describe()),n.push(new J({start:i.start,end:i.end},new Date(a),i.distance,l)),i.roundTrip&&n.push(new J({start:i.end,end:i.start},new Date(a),i.distance,l))}else console.log("Dosazeno cilove vzdalenosti, koncime. Celkem mame %i cest",n.length);console.groupEnd()}),console.log("radime zaznamy chronologicky"),n.sort(function(e,t){return e.date-t.date}),console.groupEnd(),n)};function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae;return Boolean(e&&e.dateFrom&&e.dateTo&&e.startLocation&&e.dateFrom.valueOf()<=e.dateTo.valueOf()&&e.distance&&e.distance>0)}function Z(e){return(Z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){X(e,t,n[t])})}else Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t]));return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function te(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ne(e,t,n){return t&&te(e.prototype,t),n&&te(e,n),e}var ae=function(){function e(t,n,a,r,o){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:K;ee(this,e),this.dateFrom=t,this.dateTo=n,this.distance=a,this.mileageStart=r,this.spz=o,this.startLocation=l}return ne(e,[{key:"describe",value:function(){return"STEP1: TODO"}}]),e}();function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];console.group("Update shrnuti"),console.log("step1",e),console.log("cesty",t);var n=t.reduce(function(e,t){return e+t.distance},0);return console.groupEnd(),{distance:n,odometerStart:Number(e.mileageStart)||0,odometerEnd:(Number(e.mileageStart)||0)+n}}var oe=function(e){function t(e){var n,a,r;ee(this,t),a=this,n=!(r=$(t).call(this,e))||"object"!==Z(r)&&"function"!==typeof r?A(a):r;var o=new K("P\u0159edm\u011b\u0159ice n. Labem","PnL","50302");return n.handleStep1Change=n.handleStep1Change.bind(A(n)),n.handleJourneyChange=n.handleJourneyChange.bind(A(n)),n.handleSubmit=n.handleSubmit.bind(A(n)),n.handleSetData=function(e){console.log("Nastavuju rok",e),this.setState({journeys:[],step1:{dateFrom:"".concat(e,"-01-01"),dateTo:"".concat(e,"-12-31"),distance:5e3,startLocation:"PnL"},summary:{distance:0,odometerEnd:0,odometerStart:0}})}.bind(A(n)),n.generateJourneys=W.bind(A(n)),n.handleUpdateSummary=n.handleUpdateSummary.bind(A(n)),n.state={collapsed:!0,journeys:[],trips:[new R(o,new K("Praha","PRG","10100"),120,!0),new R(o,new K("Hradec Kr\xe1lov\xe9","HK","50002"),9,!0)],step1:{dateFrom:"",dateTo:"",distance:0,mileageStart:"",spz:"",startLocation:"HK"},summary:{kmTraveled:0,mileageEnd:0}},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,r.a.Component),ne(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"handleSubmit",value:function(e){if(I(this.state.step1)){var t=this.generateJourneys(this.state.step1,this.state.trips);this.setState({journeys:t}),this.handleUpdateSummary()}else console.error("Spatne vyplnene vstupni udaje",this.state.step1)}},{key:"handleStep1Change",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState({step1:q({},this.state.step1,X({},a,n))})}},{key:"handleUpdateSummary",value:function(){this.setState({summary:re(this.state.step1,this.state.journeys)}),console.log("Nove shrnuti: ",this.state.summary)}},{key:"handleJourneyChange",value:function(e){this.setState({journeys:[new J({},null,e.target.value,null,null)]}),this.handleUpdateSummary()}},{key:"render",value:function(){var e=this,t=!I(this.state.step1);return r.a.createElement(s.a,null,r.a.createElement(u.a,{color:"light",light:!0,expand:"md"},r.a.createElement(d.a,null,r.a.createElement("span",{role:"img","aria-label":"logbook"},"\ud83d\ude97\ud83c\udf52")),r.a.createElement(m.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(h.a,{className:"ml-auto",navbar:!0},r.a.createElement(p.a,null,r.a.createElement(f.a,{href:"https://github.com/jirihofman/tresen/"},"GitHub")),r.a.createElement(y.a,{nav:!0,inNavbar:!0},r.a.createElement(g.a,{nav:!0,caret:!0},"Options"),r.a.createElement(v.a,{right:!0},r.a.createElement(b.a,null,"Option 1"),r.a.createElement(b.a,null,"Option 2"),r.a.createElement(b.a,{divider:!0}),r.a.createElement(b.a,{onClick:function(){return alert(222)}},"Reset")))))),r.a.createElement(E.a,null,r.a.createElement(w.a,{className:"col"},r.a.createElement(S.a,{className:"hidden-print",inline:!0},r.a.createElement(k.a,{hidden:!0,type:"text",name:"spz",id:"spz",placeholder:"SPZ vozidla",valid:this.state.step1.spz,invalid:!this.state.step1.spz,required:!0,onChange:this.handleStep1Change,value:this.state.step1.spz}),r.a.createElement(k.a,{hidden:!0,type:"number",name:"mileageStart",id:"mileageStart",placeholder:"Kilometry",step:100,onChange:this.handleStep1Change,value:this.state.step1.mileageStart}),r.a.createElement(O.a,{hidden:!0,onClick:function(){return e.handleUpdateSummary(e.state.step1,e.state.journeys)},color:"danger"},"Update summary"),r.a.createElement(j.a,{className:"mr-3 er bg-light"},r.a.createElement(D.a,{for:"distance",className:"p-3"},"Vzd\xe1lenost"),r.a.createElement(k.a,{type:"number",name:"distance",id:"distance",className:"col-4",placeholder:"Najeto",step:500,onChange:this.handleStep1Change,value:this.state.step1.distance})),r.a.createElement(j.a,{className:"mr-3 er bg-light"},r.a.createElement(O.a,{onClick:function(){return e.handleSetData((new Date).getFullYear()-1)},color:"primary"},(new Date).getFullYear()-1),r.a.createElement(O.a,{onClick:function(){return e.handleSetData((new Date).getFullYear())},color:"primary"},(new Date).getFullYear()),r.a.createElement(O.a,{onClick:function(){return e.handleSetData((new Date).getFullYear()+1)},color:"primary"},(new Date).getFullYear()+1)),r.a.createElement(O.a,{onClick:this.handleSubmit,color:"primary",style:{margin:"0.3em"},disabled:t}," Generuj"),r.a.createElement(O.a,{disabled:t,onClick:function(){var e=document.getElementById("journeys"),t=c.a.utils.table_to_book(e,{raw:!0});c.a.writeFile(t,"sheetjs.xlsx")}}," Export XLS")))),r.a.createElement(E.a,null,r.a.createElement(S.a,{className:"hidden-print",inline:!0},r.a.createElement(w.a,{xs:4},r.a.createElement(j.a,{className:"mr-1 er bg-light"},r.a.createElement(D.a,{for:"dateFrom",className:"p-3 col-2"},"Od"),r.a.createElement(k.a,{type:"date",name:"dateFrom",id:"dateFrom",placeholder:"Od",value:this.state.step1.dateFrom,onChange:this.handleStep1Change}))),r.a.createElement(w.a,{xs:4},r.a.createElement(j.a,{className:"mr-1 rder bg-light"},r.a.createElement(D.a,{for:"dateTo",className:"p-3 col-2"},"Do"),r.a.createElement(k.a,{type:"date",name:"dateTo",id:"dateTo",placeholder:"Do",value:this.state.step1.dateTo,onChange:this.handleStep1Change}))),r.a.createElement(w.a,{xs:4},r.a.createElement(j.a,{className:"mr-1 er bg-light"},r.a.createElement(D.a,{for:"startLocation",className:"p-3"},"V\xfdchoz\xed lokace"),r.a.createElement(k.a,{type:"select",name:"startLocation",id:"startLocation",placeholder:"Z",value:this.state.step1.startLocation,onChange:this.handleStep1Change},r.a.createElement("option",null,"PnL"),r.a.createElement("option",null,"HK")))))),r.a.createElement(E.a,null,r.a.createElement(F,{journeys:this.state.journeys})),r.a.createElement("style",null,"@media print {.hidden-print{display: none;}}"),r.a.createElement(E.a,null,"TODO"))}}]),t}();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t){},60:function(e,t,n){e.exports=n(114)},65:function(e,t,n){},71:function(e,t){},72:function(e,t){}},[[60,1,2]]]);
//# sourceMappingURL=main.a35b3aae.chunk.js.map