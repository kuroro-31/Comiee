import{a as p,o as a,b as n,e as t,j as f,w as c,m as h,D as x,t as i,F as _,r as m,f as u,p as v,h as w}from"./vendor-d069af5c.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const g={data(){return{show:!1,result:!1,state:{search:"",array:[]}}},computed:{filter(){return this.state.search?Object.values(this.state.array).filter(e=>{let s=e.title.concat(e.name);return this.state.search.toLowerCase().split(" ").every(d=>s.toLowerCase().includes(d))}):this.state.array}},mounted(){this.getData()},methods:{async getData(){let e=await p.get("/api/search-words");this.state.array=e.data},locate(e){location.href="/b/"+e.title},reset(){this.state.search=""},openSearchForm(){this.show=!0,this.$nextTick(()=>{this.$refs.inputToFocus.focus()})}}},k=e=>(v("data-v-6d471463"),e=e(),w(),e),b={class:"relative flex items-center mx-auto"},S={class:"search-form"},F={class:"flex items-center w-full"},C={class:"flex items-center w-full"},j=k(()=>t("div",{class:"text-gray absolute pl-8 py-2 flex-shrink-0"},[t("svg",{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),D=["placeholder"],B={key:0,class:"flex flex-col justify-start mt-4 bg-dark shadow-lg overflow-y-auto max-h-[500px] scroll-none"},I=["onClick"],T={class:""},L=["src"],V={class:"ml-4 text-left"},M={class:"text-xl text-ddd font-bold"},N={class:"text-ddd mt-1"},z={key:1,class:"text-ddd text-base"};function A(e,s,d,E,o,l){return a(),n("div",b,[t("div",{class:"",onClick:s[0]||(s[0]=(...r)=>l.openSearchForm&&l.openSearchForm(...r))},[f(e.$slots,"trigger",{},void 0,!0)]),c(t("div",null,[t("div",S,[t("div",F,[t("div",C,[j,c(t("input",{ref:"inputToFocus","onUpdate:modelValue":s[1]||(s[1]=r=>o.state.search=r),type:"text",placeholder:e.t("検索する"),class:"my-2 mx-6 w-full py-2 pl-10 pr-10 bg-dark-1 text-white rounded-2xl",onFocus:s[2]||(s[2]=r=>o.result=!0)},null,40,D),[[x,o.state.search]])]),c(t("button",{class:"pr-4 whitespace-nowrap text-f5 text-[14px]",onClick:s[3]||(s[3]=r=>l.reset())},i(e.t("キャンセル")),513),[[h,o.result&&o.state.search.length>0]])]),o.result&&o.state.search.length>1?(a(),n("div",B,[(a(!0),n(_,null,m(l.filter,r=>(a(),n("a",{key:r,class:"w-full flex justify-start items-center p-4 cursor-pointer mb-2",onClick:O=>l.locate(r)},[t("div",T,[t("img",{src:r.thumbnail,alt:"",class:"w-[50px] h-[50px] object-cover rounded-xl"},null,8,L)]),t("div",V,[t("div",M,i(r.title),1),t("div",N,i(r.name),1)])],8,I))),128))])):u("",!0),o.state.search.length>1&&l.filter.length===0?(a(),n("div",z,i(e.t("検索結果がありません")),1)):u("",!0),t("div",{class:"flex justify-center text-gray text-base py-8",onClick:s[4]||(s[4]=r=>o.show=!1)},i(e.t("閉じる")),1)])],512),[[h,o.show]])])}const G=y(g,[["render",A],["__scopeId","data-v-6d471463"]]);export{G as default};
