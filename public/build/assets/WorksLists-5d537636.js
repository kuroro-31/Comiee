import{e as a,F as p,f as s,m as c,u,t as l,x as h,y as d,i as _,o,n as g,p as y,q as b}from"./vendor-66ba3070.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const w={props:{authUser:{type:Object,default:{}},bookUser:{type:Object,default:{}},books:{type:Array,default:[]}},data(){return{filters:[{label:this.t("完結"),prop:"is_complete",active:!1},{label:this.t("休載"),prop:"is_suspend",active:!1},{label:this.t("非公開"),prop:"is_hidden",active:!1},{label:this.t("カラー"),prop:"is_color",active:!1},{label:this.t("今日の新作"),prop:"is_new",active:!1}],language:"",screen_type:""}},computed:{filteredManga(){return this.books.filter(e=>e.is_hidden&&this.authUser.id!==this.bookUser.id?!1:this.applyFilters(e))},shouldShowHiddenFilter(){return this.authUser.id===this.bookUser.id}},methods:{applyFilters(e){for(const i of this.filters)if(i.active&&!e[i.prop])return!1;return!(this.language&&e.lang!==this.language||this.screen_type&&e.screen_type!==this.screen_type)},filterClasses(e){return{"active bg-primary hover:bg-primary hover:bg-opacity-100 dark:border-primary":e.active}},toggleFilter(e){e.active=!e.active}}},v=e=>(y("data-v-fe61e420"),e=e(),b(),e),x={class:"w-full"},F={class:"text-[14px] flex lg:flex-wrap whitespace-nowrap overflow-x-scroll scroll-none items-center mb-4"},S={class:"mb-4"},U={value:""},j=_('<option value="ja" data-v-fe61e420>日本語</option><option value="en" data-v-fe61e420>English</option><option value="tw" data-v-fe61e420>繁體中文</option><option value="cn" data-v-fe61e420>中国語</option><option value="es" data-v-fe61e420>Español</option><option value="fr" data-v-fe61e420>Français</option><option value="it" data-v-fe61e420>Italiano</option><option value="id" data-v-fe61e420>Bahasa Indonesia</option><option value="th" data-v-fe61e420>ภาษาไทย</option><option value="ko" data-v-fe61e420>한국어</option><option value="de" data-v-fe61e420>Deutsch</option><option value="pr" data-v-fe61e420>Português</option><option value="ar" data-v-fe61e420>العربية</option>',13),C={class:"mb-4"},I={value:""},E={value:"horizontal"},V={value:"vertical"},B=["onClick"],M={class:"flex flex-wrap"},D=["href"],L=["src"],N=v(()=>s("img",{src:"/img/noimage.svg",alt:"",class:"block dark:hidden min-h-[200px] max-h-[200px] w-full md:min-w-[200px] md:max-w-[200px] object-cover"},null,-1)),z=v(()=>s("img",{src:"/img/noimage-dark.svg",alt:"thumbnail",class:"hidden dark:block h-[200px] w-full md:w-[200px] object-cover"},null,-1)),H={class:"thumbnail-title"},O={key:1,class:"p-4"};function W(e,i,f,q,r,n){return o(),a("div",x,[e.isEmpty(f.books)?d("",!0):(o(),a(p,{key:0},[s("div",F,[s("div",S,[c(s("select",{"onUpdate:modelValue":i[0]||(i[0]=t=>r.language=t),class:"select-menu"},[s("option",U,l(e.t("作品の言語")),1),j],512),[[u,r.language]])]),s("div",C,[c(s("select",{"onUpdate:modelValue":i[1]||(i[1]=t=>r.screen_type=t),class:"select-menu"},[s("option",I,l(e.t("画面タイプ")),1),s("option",E,l(e.t("横読み")),1),s("option",V,l(e.t("縦スクロール")),1)],512),[[u,r.screen_type]])]),(o(!0),a(p,null,h(r.filters,(t,m)=>(o(),a(p,{key:m},[t.label!==e.t("非公開")||t.label===e.t("非公開")&&n.shouldShowHiddenFilter?(o(),a("div",{key:0,class:g([n.filterClasses(t),"mb-4 cursor-pointer py-1 px-2 flex justify-center items-center border border-primary rounded-full mr-4 text-primary hover:bg-primary hover:bg-opacity-10 dark:text-[#8ab4f8] dark:border-[#626262]"]),onClick:A=>n.toggleFilter(t)},l(t.label),11,B)):d("",!0)],64))),128))]),s("div",M,[(o(!0),a(p,null,h(n.filteredManga,t=>(o(),a("div",{key:t.id,class:"list-item"},[s("a",{href:`/b/${t.title}`},[t.thumbnail?(o(),a("img",{key:0,src:t.thumbnail,alt:"thumbnail",class:"w-full md:w-[200px] h-[200px] object-cover"},null,8,L)):(o(),a(p,{key:1},[N,z],64)),s("span",H,l(t.title),1)],8,D)]))),128))])],64)),e.isEmpty(n.filteredManga)?(o(),a("div",O,l(e.t("表示する作品がまだありません")),1)):d("",!0)])}const J=k(w,[["render",W],["__scopeId","data-v-fe61e420"]]);export{J as default};