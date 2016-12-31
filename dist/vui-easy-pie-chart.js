/*!
 * VueEasyPieChart v1.0.1 (https://github.com/dotnetage/vue-easy-pie-chart)
 * (c) 2016 Ray
 * Released under the MIT License.
 */
!function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){var a,i;n(3),a=n(1);var r=n(4);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,i._scopeId="data-v-8087077e",e.exports=a},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=a(i);t.default={name:"VueEasyPieChat",data:function(){return{pieChart:void 0}},props:{barColor:{type:String,default:"#ef1e25"},fontSize:{type:String,default:"20px"},trackColor:{type:String,default:"#f2f2f2"},scaleColor:{type:String,default:"#dfe0e0"},scaleLength:{type:Number,default:5},lineCap:{type:String,default:"round"},lineWidth:{type:Number,default:3},size:{type:Number,default:110},rotate:{type:Number,default:0},duration:{type:Number,default:1e3},animated:{type:Boolean,default:!0},percent:{type:Number,default:0}},watch:{percent:function(e){this.update(e)},duration:function(e){this.pieChart.options.animate.duration=e,this.update(this.percent)},animated:function(e){this.pieChart.options.animate.enabled=e,this.update(this.percent)}},methods:{update:function(e){this.pieChart.update(e)},getOptions:function(){}},mounted:function(){var e=this,t=this;this.pieChart=new r.default(this.$refs.chart,{barColor:this.barColor,trackColor:this.trackColor,scaleColor:this.scaleColor,scaleLength:this.scaleLength,lineCap:this.lineCap,lineWidth:this.lineWidth,size:this.size,rotate:this.rotate,animate:{duration:this.duration,enabled:this.animated},onStart:function(){t.$emit("start")},onStop:function(){t.$emit("stop")},onStep:function(){t.$emit("step")}});var n=function(t){e.$watch(t,function(n){e.pieChart.options[t]=n,e.update(e.percent)})};["barColor","trackColor","scaleColor","scaleLength","lineCap","lineWidth","size","rotate"].forEach(n)}}},function(e,t,n){var a,i;/**!
	 * easy-pie-chart
	 * Lightweight plugin to render simple, animated and retina optimized pie charts
	 *
	 * @license 
	 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
	 * @version 2.1.7
	 **/
!function(n,r){a=[],i=function(){return n.EasyPieChart=r()}.apply(t,a),!(void 0!==i&&(e.exports=i))}(this,function(){var e=function(e,t){var n,a=document.createElement("canvas");e.appendChild(a),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(a);var i=a.getContext("2d");a.width=a.height=t.size;var r=1;window.devicePixelRatio>1&&(r=window.devicePixelRatio,a.style.width=a.style.height=[t.size,"px"].join(""),a.width=a.height=t.size*r,i.scale(r,r)),i.translate(t.size/2,t.size/2),i.rotate((-.5+t.rotate/180)*Math.PI);var o=(t.size-t.lineWidth)/2;t.scaleColor&&t.scaleLength&&(o-=t.scaleLength+2),Date.now=Date.now||function(){return+new Date};var s=function(e,t,n){n=Math.min(Math.max(-1,n||0),1);var a=n<=0;i.beginPath(),i.arc(0,0,o,0,2*Math.PI*n,a),i.strokeStyle=e,i.lineWidth=t,i.stroke()},d=function(){var e,n;i.lineWidth=1,i.fillStyle=t.scaleColor,i.save();for(var a=24;a>0;--a)a%6===0?(n=t.scaleLength,e=0):(n=.6*t.scaleLength,e=t.scaleLength-n),i.fillRect(-t.size/2+e,0,n,1),i.rotate(Math.PI/12);i.restore()},u=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),l=function(){t.scaleColor&&d(),t.trackColor&&s(t.trackColor,t.trackWidth||t.lineWidth,1)};this.getCanvas=function(){return a},this.getCtx=function(){return i},this.clear=function(){i.clearRect(t.size/-2,t.size/-2,t.size,t.size)},this.draw=function(e){t.scaleColor||t.trackColor?i.getImageData&&i.putImageData?n?i.putImageData(n,0,0):(l(),n=i.getImageData(0,0,t.size*r,t.size*r)):(this.clear(),l()):this.clear(),i.lineCap=t.lineCap;var a;a="function"==typeof t.barColor?t.barColor(e):t.barColor,s(a,t.lineWidth,e/100)}.bind(this),this.animate=function(e,n){var a=Date.now();t.onStart(e,n);var i=function(){var r=Math.min(Date.now()-a,t.animate.duration),o=t.easing(this,r,e,n-e,t.animate.duration);this.draw(o),t.onStep(e,n,o),r>=t.animate.duration?t.onStop(e,n):u(i)}.bind(this);u(i)}.bind(this)},t=function(t,n){var a={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,t,n,a,i){return t/=i/2,t<1?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n},onStart:function(e,t){},onStep:function(e,t,n){},onStop:function(e,t){}};if("undefined"!=typeof e)a.renderer=e;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");a.renderer=SVGRenderer}var i={},r=0,o=function(){this.el=t,this.options=i;for(var e in a)a.hasOwnProperty(e)&&(i[e]=n&&"undefined"!=typeof n[e]?n[e]:a[e],"function"==typeof i[e]&&(i[e]=i[e].bind(this)));"string"==typeof i.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[i.easing])?i.easing=jQuery.easing[i.easing]:i.easing=a.easing,"number"==typeof i.animate&&(i.animate={duration:i.animate,enabled:!0}),"boolean"!=typeof i.animate||i.animate||(i.animate={duration:1e3,enabled:i.animate}),this.renderer=new i.renderer(t,i),this.renderer.draw(r),t.dataset&&t.dataset.percent?this.update(parseFloat(t.dataset.percent)):t.getAttribute&&t.getAttribute("data-percent")&&this.update(parseFloat(t.getAttribute("data-percent")))}.bind(this);this.update=function(e){return e=parseFloat(e),i.animate.enabled?this.renderer.animate(r,e):this.renderer.draw(e),r=e,this}.bind(this),this.disableAnimation=function(){return i.animate.enabled=!1,this},this.enableAnimation=function(){return i.animate.enabled=!0,this},o()};return t})},function(e,t){},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"chart",staticClass:"vue-easy-pie-chart",attrs:{"data-percent":e.percent}},[n("div",{staticClass:"inner-text",style:{fontSize:e.fontSize,lineHeight:e.size+"px"}},[e._t("default",[e._v("\n      "+e._s(e.percent)+"%\n    ")])],2)])},staticRenderFns:[]}}]);
//# sourceMappingURL=vui-easy-pie-chart.js.map