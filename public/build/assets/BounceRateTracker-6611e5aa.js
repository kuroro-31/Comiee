import{z as a,s as c,E as u,o as i,b as d,a as r}from"./vendor-d069af5c.js";const p={class:"hidden"},b=a({__name:"BounceRateTracker",props:{user:null,book:null,bounceRateEndpoint:null},setup(s){const e=s,t=()=>{var n;!e.user||!e.book||!e.bounceRateEndpoint||!r||r.post(e.bounceRateEndpoint,{user_id:e.user.id,book_id:e.book.id},{headers:{"Content-Type":"application/json","X-CSRF-TOKEN":((n=document.querySelector('meta[name="csrf-token"]'))==null?void 0:n.getAttribute("content"))??""}}).then(o=>{}).catch(o=>{console.error("Error sending bounce rate event:",o)})};return c(()=>{e.user&&window.addEventListener("beforeunload",t)}),u(()=>{e.user&&window.removeEventListener("beforeunload",t)}),(n,o)=>(i(),d("div",p))}});export{b as default};
