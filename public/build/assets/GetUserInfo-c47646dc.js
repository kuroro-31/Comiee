function r(){return localStorage.getItem("user_first_visit")===null?(localStorage.setItem("user_first_visit",new Date),!0):!1}function i(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)?"mobile":"desktop"}function s(e){return e.indexOf("Chrome")>-1?"Chrome":e.indexOf("Safari")>-1?"Safari":e.indexOf("Firefox")>-1?"Firefox":e.indexOf("MSIE")>-1||e.indexOf("Trident/")>-1?"Internet Explorer":e.indexOf("Edge")>-1?"Edge":"unknown"}function a(e,t){return/Win/i.test(t)?"Windows":/Mac/i.test(t)?"MacOS":/Linux/i.test(t)?"Linux":/iPhone|iPad|iPod/i.test(t)?"iOS":/Android/i.test(e)?"Android":"unknown"}function c(){const e=window.navigator.userAgent,t=window.navigator.platform;return{type:i(e),browser:s(e),os:a(e,t)}}async function u(){try{const e=await fetch("https://ipapi.co/json/");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();return{country:t.country_name,city:t.city}}catch(e){return console.error("Error fetching location info:",e),{}}}function f(){const e=localStorage.getItem("session_start");if(e===null)return localStorage.setItem("session_start",new Date),0;{const t=new Date(e);return Math.floor((new Date-t)/1e3)}}function d(e){const t=["google.com","bing.com","yahoo.com","baidu.com","yandex.com","duckduckgo.com","ask.com"],n=new URL(e).hostname;return t.some(o=>n.includes(o))}function l(e){const t=["facebook.com","twitter.com","instagram.com","linkedin.com","pinterest.com","youtube.com"],n=new URL(e).hostname;return t.some(o=>n.includes(o))}function m(){const e=document.referrer;return e?d(e)?"search engine":l(e)?"social media":"other":"direct"}async function h(e,t){try{const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify(t)});if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const o=await n.json();console.log(o)}catch(n){console.error("Error submitting analytics data:",n)}}const w={props:{endpoint:{type:String,required:!0}},data(){return{isNewUser:!1,deviceInfo:{},locationInfo:{},sessionDuration:0,trafficSource:""}},async mounted(){this.isNewUser=r(),this.deviceInfo=c(),this.locationInfo=await u(),this.sessionDuration=f(),this.trafficSource=m(),await h(this.endpoint,{isNewUser:this.isNewUser,deviceInfo:this.deviceInfo,locationInfo:this.locationInfo,sessionDuration:this.sessionDuration,trafficSource:this.trafficSource})}};export{w as default};