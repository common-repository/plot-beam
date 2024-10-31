(()=>{"use strict";var e,t={669:()=>{const e=window.React,t=window.wp.blocks,a=window.wp.components,r=window.wp.i18n,s=window.wp.blockEditor,l=JSON.parse('{"u2":"create-block/plot-beam"}');(0,t.registerBlockType)(l.u2,{icon:(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("g",{"clip-path":"url(#clip0_1_2)"},(0,e.createElement)("path",{d:"M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z",fill:"#010101"}),(0,e.createElement)("path",{d:"M12.3095 13.7996C12.2287 13.7244 12.2352 13.6186 12.2053 13.5265C12.0241 12.9465 11.726 12.4099 11.3294 11.9497C10.9327 11.4895 10.4459 11.1156 9.89902 10.8509C9.86028 10.8282 9.81621 10.8163 9.77134 10.8163C9.72646 10.8163 9.6824 10.8282 9.64366 10.8509C8.43154 11.4642 7.65013 12.4267 7.28164 13.7301C7.26952 13.7721 7.28164 13.8246 7.23396 13.8529C7.22378 13.831 7.21618 13.8079 7.21134 13.7842C7.15316 13.2452 6.87275 12.8719 6.37821 12.6529C6.18588 12.5665 5.97901 12.5721 5.77942 12.5309C5.77942 12.4751 5.83356 12.4759 5.86588 12.4606C7.15073 11.8583 7.98386 10.8743 8.36528 9.50867C8.37336 9.48039 8.37255 9.44726 8.41053 9.43756C8.42427 9.48524 8.44205 9.53292 8.45093 9.5814C8.50442 9.88708 8.66211 10.1648 8.89719 10.3674C9.13228 10.5699 9.43026 10.6848 9.74049 10.6925C10.0507 10.7003 10.354 10.6003 10.5989 10.4097C10.8438 10.219 11.0151 9.9495 11.0837 9.64686C11.1047 9.55878 11.0837 9.46504 11.1305 9.38181C11.2113 9.61534 11.2776 9.85292 11.373 10.08C11.7863 11.0996 12.564 11.9291 13.5548 12.4073C13.589 12.4271 13.6279 12.4376 13.6675 12.4376C13.7071 12.4376 13.746 12.4271 13.7802 12.4073C14.9654 11.8098 15.7493 10.877 16.1317 9.60888C16.1455 9.56201 16.1317 9.49332 16.1996 9.4715C16.2376 9.49817 16.2352 9.541 16.2425 9.58059C16.2874 9.84925 16.4135 10.0977 16.6037 10.2927C16.7939 10.4877 17.0392 10.6199 17.3067 10.6715C17.4424 10.7006 17.579 10.6715 17.7107 10.7079C17.6994 10.7426 17.6671 10.7458 17.6404 10.758C16.3006 11.3624 15.4387 12.3741 15.0546 13.7931C15.0481 13.8174 15.0473 13.8432 15.0214 13.857C14.9932 13.8351 14.9988 13.8028 14.9956 13.7761C14.9664 13.4557 14.8231 13.1564 14.5917 12.9329C14.3603 12.7094 14.0562 12.5764 13.735 12.5584C13.116 12.5115 12.5172 12.9527 12.3572 13.5725C12.3483 13.6444 12.362 13.7309 12.3095 13.7996Z",fill:"#7F7F7F"}),(0,e.createElement)("path",{d:"M5.78265 12.5317C5.98225 12.5721 6.18669 12.5673 6.38144 12.6537C6.87598 12.8735 7.15639 13.2469 7.21457 13.785C7.21942 13.8087 7.22701 13.8318 7.2372 13.8537C7.19679 14.4743 6.92366 14.939 6.32326 15.1604C5.98528 15.2729 5.61645 15.2466 5.2979 15.0871C4.97936 14.9277 4.73719 14.6483 4.62467 14.3103C4.51216 13.9723 4.53851 13.6035 4.69793 13.2849C4.85736 12.9664 5.1368 12.7242 5.47477 12.6117C5.57578 12.5802 5.68003 12.5584 5.78265 12.5317Z",fill:"white"}),(0,e.createElement)("path",{d:"M12.3094 13.7996C12.362 13.7309 12.3482 13.6444 12.3684 13.5677C12.5301 12.9479 13.1272 12.5067 13.7462 12.5535C14.0675 12.5716 14.3715 12.7045 14.6029 12.928C14.8343 13.1516 14.9777 13.4509 15.0068 13.7713C15.0068 13.8012 15.0068 13.8335 15.0327 13.8521C15.0012 14.3749 14.7959 14.8 14.3272 15.0642C13.4828 15.5434 12.4323 14.9834 12.328 14.0073C12.3232 13.9394 12.3159 13.8699 12.3094 13.7996Z",fill:"white"}),(0,e.createElement)("path",{d:"M11.1338 9.38263C11.0885 9.46344 11.1079 9.5596 11.0869 9.64768C11.0183 9.95032 10.847 10.2199 10.6021 10.4105C10.3573 10.6011 10.0539 10.7011 9.74371 10.6934C9.43349 10.6857 9.13551 10.5708 8.90042 10.3682C8.66533 10.1656 8.50765 9.88791 8.45416 9.58223C8.44527 9.53374 8.42749 9.48607 8.41376 9.43839C8.43396 8.95354 8.59638 8.53819 9.00931 8.25132C9.19915 8.11895 9.41998 8.03788 9.65037 8.01598C9.88076 7.99407 10.1129 8.03208 10.3243 8.12631C10.5357 8.22053 10.7191 8.36779 10.8568 8.55378C10.9946 8.73978 11.0819 8.95821 11.1103 9.18789C11.1168 9.25253 11.1257 9.31799 11.1338 9.38263Z",fill:"white"}),(0,e.createElement)("path",{d:"M17.7187 10.7071C17.5854 10.6731 17.4488 10.6998 17.3147 10.6707C17.0464 10.6191 16.8003 10.4865 16.6097 10.2907C16.4191 10.0949 16.2932 9.84537 16.2488 9.57576C16.2415 9.53616 16.244 9.49495 16.206 9.46667C16.2222 9.00041 16.3571 8.58344 16.7442 8.29334C17.204 7.94828 17.7082 7.89818 18.2125 8.17536C18.7296 8.45899 18.964 8.92041 18.8985 9.50707C18.8355 10.0679 18.5066 10.4347 17.9813 10.6287C17.8989 10.6634 17.806 10.682 17.7187 10.7071Z",fill:"white"})),(0,e.createElement)("defs",null,(0,e.createElement)("clipPath",{id:"clip0_1_2"},(0,e.createElement)("rect",{width:"24",height:"24",fill:"white"})))),attributes:{appID:{type:"string"},objectID:{type:"string"},objectTitle:{type:"string"},description:{type:"string"},dataType:{type:"string"},objectSlug:{type:"string"}},example:{attributes:{objectTitle:"Sales",appID:"0d40467d-e362-4d74-b445-4166a1b32cc9",objectID:"MkcvQD",description:"A chart to show case sales in detail",dataType:"userData",objectSlug:"0gnriLVVas7CxY0Q-cZ77OKLLeEwNoumk/aBGkzz"}},edit:function(t){const l=(0,s.useBlockProps)(),i=e=>{window.open(e,"_blank","noopener,noreferrer")};return(0,e.createElement)("div",{className:"wp-block-create-block-plot-beam",...l},(0,r.__)((0,e.createElement)("div",{className:"admin-form"},(0,e.createElement)(a.SelectControl,{className:"select first",label:"Select data type",value:t.attributes.dataType,required:!0,options:[{label:"Select Options",value:null},{label:"Your Organisation Data",value:"userData"},{label:"Example data-Bar chart",value:"bar"},{label:"Example data-Line chart",value:"line"},{label:"Example data-Scatterplot chart",value:"scatterplot"},{label:"Example data-Gauge chart",value:"gauge"}],onChange:e=>(e=>{switch(t.setAttributes({dataType:e}),e){case"userData":t.setAttributes({appID:""}),t.setAttributes({objectID:""}),t.setAttributes({description:"This contains organisational data"});break;case"bar":t.setAttributes({appID:"da8c91fe-88fd-45ef-b573-596621f7ec6f"}),t.setAttributes({objectID:"aBGkzz"}),t.setAttributes({objectTitle:"Example bar plot"}),t.setAttributes({description:"This contains test data"});break;case"line":t.setAttributes({appID:"da8c91fe-88fd-45ef-b573-596621f7ec6f"}),t.setAttributes({objectID:"ec48858d-b158-432d-b60c-da7344d8bc9a"}),t.setAttributes({objectTitle:"Example line plot"}),t.setAttributes({description:"This contains test data"});break;case"scatterplot":t.setAttributes({appID:"da8c91fe-88fd-45ef-b573-596621f7ec6f"}),t.setAttributes({objectID:"e3ed1aa7-a066-4358-a64e-0beb1c433317"}),t.setAttributes({objectTitle:"Example scatterplot"}),t.setAttributes({description:"This contains test data"});break;case"gauge":t.setAttributes({appID:"da8c91fe-88fd-45ef-b573-596621f7ec6f"}),t.setAttributes({objectID:"576c5fc2-e038-4c90-b682-4e17b2fd846e"}),t.setAttributes({objectTitle:"Example gauge plot "}),t.setAttributes({description:"This contains test data"});break;default:t.setAttributes({appID:""}),t.setAttributes({objectID:""}),t.setAttributes({description:""})}})(e)}),"userData"===t.attributes.dataType&&(0,e.createElement)("div",{className:"button-group"},(0,e.createElement)(a.Button,{className:"button",onClick:()=>i("https://plot-beam.azurewebsites.net/register")},"Create a new Plot Beam page",(0,e.createElement)("br",null),"Connect my QlikSense data and create new visualisation"),(0,e.createElement)(a.Button,{className:"button",onClick:()=>i("https://plot-beam.azurewebsites.net/return")},"Go to my Plot Beam page",(0,e.createElement)("br",null),"I have already created a Plot Beam site for my organisation")),(0,e.createElement)(a.TextControl,{className:"form-text",label:"Visualisation Title",type:"text",help:"Short title for the chart, 5 words max",value:t.attributes.objectTitle,onChange:e=>t.setAttributes({objectTitle:e})}),"userData"===t.attributes.dataType?(0,e.createElement)(a.TextControl,{className:"form-text",label:"Visualisation ID",type:"text",help:"Object Slug Example:0gnriLVVas7CxY0Q-cZ77OKLLeEwNoumk/aBGkzz ",value:t.attributes.objectSlug,onChange:e=>t.setAttributes({objectSlug:e})}):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.TextControl,{className:"form-text",label:"App ID",type:"text",help:"Demo App ID: da8c91fe-88fd-45ef-b573-596621f7ec6f",value:t.attributes.appID,onChange:e=>t.setAttributes({appID:e})}),(0,e.createElement)(a.TextControl,{className:"form-text",label:"Object ID",type:"text",help:"Demo Object ID: aBGkzz",value:t.attributes.objectID,onChange:e=>t.setAttributes({objectID:e})})),(0,e.createElement)(a.TextControl,{className:"form-text",label:"Visualisation Description",type:"text",help:"Short description for the chart, 100 words max",value:t.attributes.description,onChange:e=>t.setAttributes({description:e})}),(0,e.createElement)(a.__experimentalText,{className:"support"},"For assistance, please visit our Support Portal at"," ",(0,e.createElement)("a",{className:"notitia",src:"https://notitia.atlassian.net/servicedesk/customer/portals"},"Notitia Support")))))},save:function(){return null}})}},a={};function r(e){var s=a[e];if(void 0!==s)return s.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,a,s,l)=>{if(!a){var i=1/0;for(p=0;p<e.length;p++){for(var[a,s,l]=e[p],o=!0,n=0;n<a.length;n++)(!1&l||i>=l)&&Object.keys(r.O).every((e=>r.O[e](a[n])))?a.splice(n--,1):(o=!1,l<i&&(i=l));if(o){e.splice(p--,1);var c=s();void 0!==c&&(t=c)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[a,s,l]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var s,l,[i,o,n]=a,c=0;if(i.some((t=>0!==e[t]))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(n)var p=n(r)}for(t&&t(a);c<i.length;c++)l=i[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(p)},a=globalThis.webpackChunkplot_beam=globalThis.webpackChunkplot_beam||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var s=r.O(void 0,[431],(()=>r(669)));s=r.O(s)})();