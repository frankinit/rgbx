"use strict";var _slicedToArray=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();!function(a,b,c,d){function e(a){return function(b){for(var c=a[0][0],d=a[0][1],e=a[0][2],f=a[1][0],g=a[1][1],h=a[1][2],i=a[2][0],j=a[2][1],k=a[2][2],l=0;l<b.length;l+=4){var m=b[l],n=b[l+1],o=b[l+2];b[l]=c*m+d*n+e*o,b[l+1]=f*m+g*n+h*o,b[l+2]=i*m+j*n+k*o}}}function f(a,b,c){a/=255,b/=255,c/=255;var d=Math.max(a,b,c),e=Math.min(a,b,c),f=void 0,g=void 0,h=d,i=d-e;if(g=0==d?0:i/d,d==e)f=0;else{switch(d){case a:f=(b-c)/i+(c>b?6:0);break;case b:f=(c-a)/i+2;break;case c:f=(a-b)/i+4}f/=6}return[f,g,h]}function g(a,b,c){var d,e,f,g=Math.floor(6*a),h=6*a-g,i=c*(1-b),j=c*(1-h*b),k=c*(1-(1-h)*b);switch(g%6){case 0:d=c,e=k,f=i;break;case 1:d=j,e=c,f=i;break;case 2:d=i,e=c,f=k;break;case 3:d=i,e=j,f=c;break;case 4:d=k,e=i,f=c;break;case 5:d=c,e=i,f=j}return[255*d,255*e,255*f]}function h(a){return function(b){for(var c=void 0,d=void 0,e=void 0,h=void 0,i=void 0,j=void 0,k=0;k<b.length;k+=4){c=b[k],d=b[k+1],e=b[k+2];var l=f(c,d,e),m=_slicedToArray(l,3);h=m[0],i=m[1],j=m[2],h=Math.pow(h,a);var n=g(h,i,j),o=_slicedToArray(n,3);c=o[0],d=o[1],e=o[2],b[k]=c,b[k+1]=d,b[k+2]=e}}}function i(){var a=arguments.length<=0||void 0===arguments[0]?"Deuteranope":arguments[0],b={Protanope:[0,2.02344,-2.52581,0,1,0,0,0,1],Deuteranope:[1,0,0,.494207,0,1.24827,0,0,1],Tritanope:[1,0,0,0,1,0,-.395913,.801109,0]},c=b[a],d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],i=c[5],j=c[6],k=c[7],l=c[8];return function(a){for(var b=void 0,c=void 0,m=void 0,n=void 0,o=void 0,p=void 0,q=void 0,r=void 0,s=void 0,t=void 0,u=void 0,v=void 0,w=0,x=a.length;x>w;w+=4){var y=a[w],z=a[w+1],A=a[w+2];b=17.8824*y+43.5161*z+4.11935*A,c=3.45565*y+27.1554*z+3.86714*A,m=.0299566*y+.184309*z+1.46709*A,n=d*b+e*c+f*m,o=g*b+h*c+i*m,p=j*b+k*c+l*m,q=.0809444479*n+-.130504409*o+.116721066*p,r=-.0102485335*n+.0540193266*o+-.113614708*p,s=-.000365296938*n+-.00412161469*o+.693511405*p,q=y-q,r=z-r,s=A-s,t=0,u=.7*q+1*r,v=.7*q+s,q=t+y,r=u+z,s=v+A,0>q&&(q=0),q>255&&(q=255),0>r&&(r=0),r>255&&(r=255),0>s&&(s=0),s>255&&(s=255),a[w]=q>>0,a[w+1]=r>>0,a[w+2]=s>>0}}}var j=640,k=480,l=.7,m=[[1,0,0],[0,1,0],[0,0,1]],n=[[.43,.72,-.15],[.34,.57,-.09],[-.02,.03,.8]],o=e(m),p=function(a){return d.log("Video capture error: ",a)},q=function(a,b){return function(c){a.src=null===b?c:b(c),a.play()}},r=c.getElementById("video"),s={video:!0,audio:!1},t=void 0,u=void 0;b.getUserMedia?(t=b.getUserMedia.bind(b),u=null,d.log("Using standard getUserMedia")):b.webkitGetUserMedia?(t=b.webkitGetUserMedia.bind(b),u=a.URL.createObjectURL,d.log("Using Webkit getUserMedia")):b.mozGetUserMedia&&(t=b.mozGetUserMedia.bind(b),u=a.URL.createObjectURL,d.log("Using Mozilla getUserMedia"));var v=q(r,u);t(s,v,p);var w=c.getElementById("display"),x=w.getContext("2d"),y=!1,z=function B(b,c,e,f){!y&&b.videoWidth>0&&(c.canvas.style.width=b.videoWidth+"px",c.canvas.style.height=b.videoHeight+"px",y=!0,d.log("set",b.videoWidth,b.videoHeight));var g=0,h=0;if(!b.paused&&!b.ended){c.drawImage(b,g,h,e,f);var i=c.getImageData(g,h,e,f);o(i.data),c.putImageData(i,g,h),a.requestAnimationFrame(function(){B(b,c,e,f)})}};r.addEventListener("play",function(){z(r,x,j,k)});var A=c.getElementById("modeSelect");A.addEventListener("change",function(a){var b=a.target.value;"3toDeuteranopia"===b?o=e(n):"3toTetrachromacy"===b?o=h(l):"3"===b?o=e(m):"2to3"===b&&(o=i()),z(r,x,j,k),d.log(b)})}(window,window.navigator,window.document,window.console);