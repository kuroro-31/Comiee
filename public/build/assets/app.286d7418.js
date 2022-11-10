import{_ as P,a as V,P as R,E as O,o as i,c as J,w as $,b as e,d,r as c,e as v,T as g,p as y,f as b,g as f,n as k,h as L,i as m,t as M,j as h,v as w,F as S,k as F,l as N,m as I,q as K,s as A,u as T,V as W,x as E,y as j,z as H,A as Z,B as G}from"./vendor.7bcae410.js";window._=P;window.axios=V;V.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";window.Pusher=R;window.Echo=new O({broadcaster:"pusher",key:"",cluster:"mt1",forceTLS:!0});window.csrf_token="{{ csrf_token() }}";window.addEventListener("load",window.scrollTo(0,0));const p=(o,t)=>{const n=o.__vccOpts||o;for(const[s,l]of t)n[s]=l;return n},X={},Q=o=>(y("data-v-a06fc130"),o=o(),b(),o),Y={class:"modal-window"},ee={class:"modal-header"},te={width:"24",height:"24",viewBox:"0 0 24 24",style:{fill:"rgba(0, 0, 0, 1)",transform:"",msfilter:""}},se=Q(()=>e("path",{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"},null,-1)),oe=[se],le={class:"title"},ne={class:"modal-content"},ae={class:"modal-footer"};function ie(o,t){return i(),J(g,{name:"modal",appear:""},{default:$(()=>[e("div",{class:"modal modal-overlay",onClick:t[1]||(t[1]=v(n=>o.$emit("close"),["self"]))},[e("div",Y,[e("header",ee,[e("button",{class:"close",onClick:t[0]||(t[0]=n=>o.$emit("close"))},[(i(),d("svg",te,oe))]),e("div",le,[c(o.$slots,"header",{},void 0,!0)])]),e("div",ne,[c(o.$slots,"default",{},void 0,!0)]),e("footer",ae,[c(o.$slots,"footer",{},void 0,!0)])])])]),_:3})}const de=p(X,[["render",ie],["__scopeId","data-v-a06fc130"]]);const re={class:"tab"},ce={class:"tabMenu"},ue={class:"tabContents"},_e={key:0},ve={key:1},pe={key:2},fe={__name:"BookTab",props:{isComment:Boolean},setup(o){const t=f(1);function n(s){this.isActive=s}return(s,l)=>(i(),d("div",re,[e("ul",ce,[e("li",{class:k({active:t.value===1}),onClick:l[0]||(l[0]=a=>n(1))}," \u30A8\u30D4\u30BD\u30FC\u30C9 ",2),e("li",{class:k({active:t.value===2}),onClick:l[1]||(l[1]=a=>n(2))},"\u4F5C\u54C1\u60C5\u5831",2),o.isComment?(i(),d("li",{key:0,class:k({active:t.value===3}),onClick:l[2]||(l[2]=a=>n(3))}," \u30B3\u30E1\u30F3\u30C8 ",2)):L("",!0)]),e("div",ue,[t.value===1?(i(),d("div",_e,[c(s.$slots,"episode",{},void 0,!0)])):t.value===2?(i(),d("div",ve,[c(s.$slots,"info",{},void 0,!0)])):t.value===3?(i(),d("div",pe,[c(s.$slots,"comment",{},void 0,!0)])):L("",!0)])]))}},he=p(fe,[["__scopeId","data-v-34702d6a"]]);const z=o=>(y("data-v-7c84d2b2"),o=o(),b(),o),me={class:"toast-wrapper"},ke={class:"toast rounded"},$e={key:0,class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ge=z(()=>e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)),we=[ge],ye={key:1,class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},be=z(()=>e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)),xe=[be],Ce={class:"mx-4 font-semibold"},Le=z(()=>e("svg",{class:"h-5 w-5",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)),Me=[Le],Be={__name:"ToastModal",props:{error:Boolean,success:Boolean,message:{type:String,default:""}},setup(o){const t=f(!0);return(n,s)=>(i(),d("div",me,[m(g,{name:"toast"},{default:$(()=>[e("div",{class:k([t.value&&o.success||t.value&&o.error?"block toast-enter-active":"toast-leave-to toast-leave-active"])},[e("div",ke,[e("div",{class:k(["check",{"check-success":t.value&&o.success,"check-danger":t.value&&o.error}])},[o.success?(i(),d("svg",$e,we)):(i(),d("svg",ye,xe))],2),e("div",Ce,M(o.message),1),e("div",{class:"cursor-pointer",onClick:s[0]||(s[0]=l=>t.value=!1)},Me)])],2)]),_:1})]))}},D=p(Be,[["__scopeId","data-v-7c84d2b2"]]);const Se={class:"window"},Ie={class:"w-full flex justify-between items-center"},Te={__name:"AuthModal",setup(o){const t=f(!1),n=f(!0);return(s,l)=>(i(),d("div",{onClick:l[4]||(l[4]=v(a=>t.value=!1,["self"]))},[e("span",{class:"btn-border",onClick:l[0]||(l[0]=a=>t.value=!0)},"\u30ED\u30B0\u30A4\u30F3"),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:l[3]||(l[3]=v(a=>t.value=!1,["self"]))},[e("div",Se,[n.value?(i(),d(S,{key:0},[c(s.$slots,"login",{},void 0,!0),e("div",Ie,[c(s.$slots,"login-footer",{},void 0,!0),e("span",{class:"text-xs cursor-pointer",onClick:l[1]||(l[1]=a=>n.value=!n.value)},"\u307E\u305F\u306F\u65B0\u898F\u767B\u9332")])],64)):(i(),d(S,{key:1},[c(s.$slots,"register",{},void 0,!0),e("span",{class:"w-full text-right text-xs cursor-pointer",onClick:l[2]||(l[2]=a=>n.value=!n.value)},"\u307E\u305F\u306F\u30ED\u30B0\u30A4\u30F3")],64))])],512),[[w,t.value]])]),_:3})]))}},Fe=p(Te,[["__scopeId","data-v-c9b8192f"]]);const Ee={props:{value:{type:Number,default:0},isLikedBy:{type:Boolean,default:!1}},data(){return{animated_number:0}},watch:{value(o,t){let n=0,s;const l=()=>{n++,n<=60?(this.animated_number=Math.floor((o-t)*n/60)+t,s=setTimeout(()=>{l()},10)):(clearTimeout(s),s=null,this.animated_number=o)};l()}},mounted(){this.animated_number=this.value}};function je(o,t,n,s,l,a){return i(),d("span",{class:k([{liked:n.isLikedBy},"text-sm text-aaa"])},M(l.animated_number),3)}const U=p(Ee,[["render",je],["__scopeId","data-v-68f5c34e"]]);const ze={components:{CountAnimation:U},props:{initialIsLikedBy:{type:Boolean,default:!1},initialCountLikes:{type:Number,default:0},authorized:{type:Boolean,default:!1},endpoint:{type:String,default:""},big:{type:Boolean,default:!1}},data(){return{isLikedBy:this.initialIsLikedBy,countLikes:this.initialCountLikes,gotToLike:!1}},computed:{iconClass(){return this.big?"h-10 w-10":"h-6 w-6"}},methods:{clickLike(){if(!this.authorized){alert("\u3044\u3044\u306D\u6A5F\u80FD\u306F\u30ED\u30B0\u30A4\u30F3\u4E2D\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059");return}this.isLikedBy?this.unlike():this.like()},async like(){const o=await axios.put(this.endpoint);this.isLikedBy=!0,this.countLikes=o.data.countLikes,this.gotToLike=!0},async unlike(){const o=await axios.delete(this.endpoint);this.isLikedBy=!1,this.countLikes=o.data.countLikes,this.gotToLike=!1}}},Ae=o=>(y("data-v-9c4ac630"),o=o(),b(),o),Ve=Ae(()=>e("path",{d:"M11.7299 1.50965L13.4899 5.02965C13.7299 5.51965 14.3699 5.98965 14.9099 6.07965L18.0999 6.60965C20.1399 6.94965 20.6199 8.42965 19.1499 9.88965L16.6699 12.3696C16.2499 12.7896 16.0199 13.5996 16.1499 14.1796L16.8599 17.2496C17.4199 19.6796 16.1299 20.6196 13.9799 19.3496L10.9899 17.5796C10.4499 17.2596 9.55991 17.2596 9.00991 17.5796L6.01991 19.3496C3.87991 20.6196 2.57991 19.6696 3.13991 17.2496L3.84991 14.1796C3.97991 13.5996 3.74991 12.7896 3.32991 12.3696L0.849909 9.88965C-0.610091 8.42965 -0.140091 6.94965 1.89991 6.60965L5.08991 6.07965C5.61991 5.98965 6.25991 5.51965 6.49991 5.02965L8.25991 1.50965C9.21991 -0.400352 10.7799 -0.400352 11.7299 1.50965Z"},null,-1)),Ne=[Ve];function He(o,t,n,s,l,a){const r=F("count-animation");return i(),d("div",{class:"book-like",onClick:t[0]||(t[0]=(...u)=>a.clickLike&&a.clickLike(...u))},[(i(),d("svg",{class:k([[{clicked:l.isLikedBy},a.iconClass],"w-[24px] h-[24px] mr-2"]),viewBox:"0 0 21 20",fill:"#c9cacc"},Ne,2)),m(r,{value:l.countLikes,"is-liked-by":l.isLikedBy},null,8,["value","is-liked-by"])])}const Ze=p(ze,[["render",He],["__scopeId","data-v-9c4ac630"]]);const De=o=>(y("data-v-b9c5512f"),o=o(),b(),o),Ue={class:"window"},qe={class:"header"},Pe=De(()=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#333"},[e("path",{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"})],-1)),Re=[Pe],Oe={class:"title"},Je={class:"p-6 max-h-[60vh] overflow-y-scroll scroll-none"},Ke={__name:"BookEditModal",setup(o){const t=f(!1);return(n,s)=>(i(),d("div",{onClick:s[3]||(s[3]=v(l=>t.value=!1,["self"]))},[e("button",{class:"w-full btn-border",onClick:s[0]||(s[0]=l=>t.value=!0)},[c(n.$slots,"trigger",{},void 0,!0)]),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:s[2]||(s[2]=v(l=>t.value=!1,["self"]))},[e("div",Ue,[e("div",qe,[e("button",{class:"close",onClick:s[1]||(s[1]=l=>t.value=!1)},Re),e("div",Oe,[c(n.$slots,"header",{},void 0,!0)])]),e("div",Je,[c(n.$slots,"default",{},void 0,!0)])])],512),[[w,t.value]])]),_:3})]))}},We=p(Ke,[["__scopeId","data-v-b9c5512f"]]);const Ge=o=>(y("data-v-4f1abd23"),o=o(),b(),o),Xe=N('<svg class="w-[28px] h-[28px] stroke-[#606060] dark:stroke-ddd" width="28" height="28" viewBox="0 0 24 24" fill="none" data-v-4f1abd23><path d="M8 12H16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4f1abd23></path><path d="M12 16V8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4f1abd23></path><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-4f1abd23></path></svg><span class="tooltip-item right-[-40px]" data-v-4f1abd23>\u65B0\u3057\u304F\u4F5C\u54C1\u3092\u8FFD\u52A0\u3059\u308B</span>',2),Qe=[Xe],Ye={class:"window"},et={class:"header"},tt=Ge(()=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#333"},[e("path",{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"})],-1)),st=[tt],ot={class:"title"},lt={class:"p-6 max-h-[60vh] overflow-y-scroll scroll-none"},nt={__name:"CreateModal",setup(o){const t=f(!1);return(n,s)=>(i(),d("div",{class:"",onClick:s[3]||(s[3]=v(l=>t.value=!1,["self"]))},[e("div",{class:"tooltip cursor-pointer",onClick:s[0]||(s[0]=l=>t.value=!0)},Qe),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:s[2]||(s[2]=v(l=>t.value=!1,["self"]))},[e("div",Ye,[e("div",et,[e("button",{class:"close",onClick:s[1]||(s[1]=l=>t.value=!1)},st),e("div",ot,[c(n.$slots,"header",{},void 0,!0)])]),e("div",lt,[c(n.$slots,"default",{},void 0,!0)])])],512),[[w,t.value]])]),_:3})]))}},at=p(nt,[["__scopeId","data-v-4f1abd23"]]);const it=o=>(y("data-v-3ed53a9c"),o=o(),b(),o),dt={class:"window"},rt={class:"header"},ct=it(()=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#333"},[e("path",{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"})],-1)),ut=[ct],_t={class:"title"},vt={class:"p-6 max-h-[60vh] overflow-y-scroll scroll-none"},pt={__name:"DeleteModal",setup(o){const t=f(!1);return(n,s)=>(i(),d("div",{onClick:s[3]||(s[3]=v(l=>t.value=!1,["self"]))},[e("button",{class:"",onClick:s[0]||(s[0]=l=>t.value=!0)},[c(n.$slots,"trigger",{},void 0,!0)]),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:s[2]||(s[2]=v(l=>t.value=!1,["self"]))},[e("div",dt,[e("div",rt,[e("button",{class:"close",onClick:s[1]||(s[1]=l=>t.value=!1)},ut),e("div",_t,[c(n.$slots,"header",{},void 0,!0)])]),e("div",vt,[c(n.$slots,"default",{},void 0,!0)])])],512),[[w,t.value]])]),_:3})]))}},ft=p(pt,[["__scopeId","data-v-3ed53a9c"]]),ht=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1),mt=[ht],kt={class:"window"},$t={__name:"EditModal",setup(o){const t=f(!1);return(n,s)=>(i(),d("div",{onClick:s[2]||(s[2]=v(l=>t.value=!1,["self"]))},[(i(),d("svg",{class:"h-5 w-5 cursor-pointer hover:text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",onClick:s[0]||(s[0]=l=>t.value=!0)},mt)),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:s[1]||(s[1]=v(l=>t.value=!1,["self"]))},[e("div",kt,[c(n.$slots,"default")])],512),[[w,t.value]])]),_:3})]))}};const gt=o=>(y("data-v-03237c04"),o=o(),b(),o),wt={class:"window"},yt={class:"header"},bt=gt(()=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#333"},[e("path",{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"})],-1)),xt=[bt],Ct={class:"title"},Lt={class:"p-6 max-h-[60vh] overflow-y-scroll scroll-none"},Mt={__name:"CommentPostModal",setup(o){const t=f(!1);return(n,s)=>(i(),d("div",{class:"flex items-center",onClick:s[3]||(s[3]=v(l=>t.value=!1,["self"]))},[e("button",{class:"text-xs",onClick:s[0]||(s[0]=l=>t.value=!0)},[c(n.$slots,"btn-trigger",{},void 0,!0),c(n.$slots,"trigger",{},void 0,!0)]),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:s[2]||(s[2]=v(l=>t.value=!1,["self"]))},[e("div",wt,[e("div",yt,[e("button",{class:"close",onClick:s[1]||(s[1]=l=>t.value=!1)},xt),e("div",Ct,[c(n.$slots,"header",{},void 0,!0)])]),e("div",Lt,[c(n.$slots,"default",{},void 0,!0)])])],512),[[w,t.value]])]),_:3})]))}},Bt=p(Mt,[["__scopeId","data-v-03237c04"]]);const St=o=>(y("data-v-925bafb5"),o=o(),b(),o),It={class:"window"},Tt={class:"header"},Ft=St(()=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#333"},[e("path",{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"})],-1)),Et=[Ft],jt={class:"title"},zt={class:"p-6 max-h-[60vh] overflow-y-scroll scroll-none"},At={__name:"EpisodeList",setup(o){const t=f(!1);return(n,s)=>(i(),d("div",{onClick:s[3]||(s[3]=v(l=>t.value=!1,["self"]))},[e("button",{class:"w-full flex justify-center py-4 mb-2 cursor-pointer hover:bg-f5 dark:hover:bg-dark-1 rounded-[3px] border-dotted border-2 dark:border-4 border-ccc hover:border-aaa dark:border-dark-1",onClick:s[0]||(s[0]=l=>t.value=!0)},[c(n.$slots,"trigger",{},void 0,!0)]),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:s[2]||(s[2]=v(l=>t.value=!1,["self"]))},[e("div",It,[e("div",Tt,[e("button",{class:"close",onClick:s[1]||(s[1]=l=>t.value=!1)},Et),e("div",jt,[c(n.$slots,"header",{},void 0,!0)])]),e("div",zt,[c(n.$slots,"default",{},void 0,!0)])])],512),[[w,t.value]])]),_:3})]))}},Vt=p(At,[["__scopeId","data-v-925bafb5"]]);const Nt={props:{title:{type:String,default:""},episodeNumber:{type:Number,default:0},contents:{type:String,default:""}},data(){return{test:"",images:[],setImages:[],fullScreen:!1}},computed:{isFullScreen(){return this.fullScreen?"max-h-[100vh]":"max-h-[85vh]"},isNormalScreen(){return this.fullScreen?"max-h-[85vh]":"max-h-[100vh]"}},created(){let o=this;document.addEventListener("keyup",function(t){t.keyCode===27&&o.clear_fullscreen()})},mounted(){this.images=JSON.parse(this.contents);const o=this.images,t=window.innerWidth,n=document.querySelector(".screen"),s=(l,a)=>{const r=Math.ceil(l.length/a);return new Array(r).fill().map((u,C)=>l.slice(C*a,(C+1)*a))};this.setImages=s(o,2),document.onkeydown=function(l){l.key==="ArrowRight"&&(n.scrollLeft+=t),l.key==="ArrowLeft"&&(n.scrollLeft-=t)}},methods:{scroll_next(){let o=window.innerWidth,t=document.querySelector(".screen");t.scrollLeft-=o},scroll_prev(){let o=window.innerWidth,t=document.querySelector(".screen");t.scrollLeft+=o},clear_fullscreen(){this.fullScreen=!1}}},B=o=>(y("data-v-bfad07f4"),o=o(),b(),o),Ht={class:"relative flex flex-col"},Zt=["src"],Dt=["src"],Ut=B(()=>e("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M15 19.92L8.47997 13.4C7.70997 12.63 7.70997 11.37 8.47997 10.6L15 4.08002",stroke:"#666","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),qt=[Ut],Pt=B(()=>e("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M8.91003 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91003 4.08002",stroke:"#666","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Rt=[Pt],Ot=B(()=>e("div",{id:"bg",style:{display:"none"}},[A(" \u3053\u306E\u30DA\u30FC\u30B8\u306E\u753B\u9762\u64CD\u4F5C\u306F\u3067\u304D\u307E\u305B\u3093"),e("br"),A(" \u30DA\u30FC\u30B8\u3092\u30EA\u30ED\u30FC\u30C9\u3057\u3066\u304F\u3060\u3055\u3044 ")],-1)),Jt={class:"hidden w-full bg-dark-1 px-4 py-2 lg:flex justify-between"},Kt=B(()=>e("div",{class:"text-eee"},null,-1)),Wt={class:"flex text-ccc"},Gt={x:"0px",y:"0px",width:"18px",height:"18px",viewBox:"-909 226 100 100",style:{"enable-background":"new -909 226 100 100"},"xml:space":"preserve"},Xt=B(()=>e("g",null,[e("path",{d:`M-902.5,259.5L-902.5,259.5c1.4,0,2.5-1.1,2.5-2.5v-22h22c1.4,0,2.5-1.1,2.5-2.5l0,0c0-1.4-1.1-2.5-2.5-2.5h-24.5
		c-1.4,0-2.5,1.1-2.5,2.5V257C-905,258.4-903.9,259.5-902.5,259.5z`,fill:"#ccc"}),e("path",{d:`M-818,317h-22c-1.4,0-2.5,1.1-2.5,2.5l0,0c0,1.4,1.1,2.5,2.5,2.5h24.5c1.4,0,2.5-1.1,2.5-2.5V295c0-1.4-1.1-2.5-2.5-2.5
		l0,0c-1.4,0-2.5,1.1-2.5,2.5V317z`,fill:"#ccc"}),e("path",{d:`M-842.5,232.5L-842.5,232.5c0,1.4,1.1,2.5,2.5,2.5h22v22c0,1.4,1.1,2.5,2.5,2.5l0,0c1.4,0,2.5-1.1,2.5-2.5v-24.5
		c0-1.4-1.1-2.5-2.5-2.5H-840C-841.4,230-842.5,231.1-842.5,232.5z`,fill:"#ccc"}),e("path",{d:`M-902.5,292.5L-902.5,292.5c-1.4,0-2.5,1.1-2.5,2.5v24.5c0,1.4,1.1,2.5,2.5,2.5h24.5c1.4,0,2.5-1.1,2.5-2.5l0,0
		c0-1.4-1.1-2.5-2.5-2.5h-22v-22C-900,293.6-901.1,292.5-902.5,292.5z`,fill:"#ccc"})],-1)),Qt=[Xt],Yt=B(()=>e("span",{class:"pl-2 text-xs"},"\u62E1\u5927",-1)),es=B(()=>e("svg",{x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 64 64","enable-background":"new 0 0 64 64","xml:space":"preserve"},[e("g",null,[e("polygon",{points:`1.707,36.293 0.293,37.707 26.293,63.707 27.707,62.293 15.414,50 28,37.414 28,46 30,46 30,35 29,34 18,34 18,36
		26.586,36 14,48.586 	`,fill:"#ccc"}),e("polygon",{points:`34,18 34,29 35,30 46,30 46,28 37.414,28 50,15.414 62.293,27.707 63.707,26.293 37.707,0.293 36.293,1.707
		48.586,14 36,26.586 36,18 	`,fill:"#ccc"})])],-1)),ts=B(()=>e("span",{class:"pl-2 text-xs"},"\u901A\u5E38",-1)),ss=[es,ts],os=B(()=>e("div",{class:"text-eee"},"SNS\u30B7\u30A7\u30A2",-1)),ls={class:"lg:hidden w-full flex flex-col"},ns=["src"];function as(o,t,n,s,l,a){return i(),d("div",Ht,[e("div",{class:k(["screen scroll-none",a.isFullScreen])},[(i(!0),d(S,null,I(l.setImages,r=>(i(),d("div",{key:r,class:"images"},[e("img",{class:k([a.isFullScreen,"image image-right"]),src:`/img/book/${n.title}/${n.episodeNumber}/${r[0]}`,alt:"image"},null,10,Zt),e("img",{class:k([a.isFullScreen,"image image-left"]),src:`/img/book/${n.title}/${n.episodeNumber}/${r[1]}`,alt:"image"},null,10,Dt)]))),128)),c(o.$slots,"contents",{},void 0,!0),e("button",{class:k([a.isFullScreen,"btn-next"]),onClick:t[0]||(t[0]=(...r)=>a.scroll_next&&a.scroll_next(...r)),onKeydown:t[1]||(t[1]=(...r)=>a.scroll_next&&a.scroll_next(...r))},qt,34),e("button",{class:k([a.isFullScreen,"btn-prev"]),onClick:t[2]||(t[2]=(...r)=>a.scroll_prev&&a.scroll_prev(...r)),onKeydown:t[3]||(t[3]=(...r)=>a.scroll_prev&&a.scroll_prev(...r))},Rt,34),Ot],2),e("div",Jt,[Kt,e("div",Wt,[l.fullScreen?L("",!0):(i(),d("div",{key:0,class:"cursor-pointer flex items-center",onClick:t[4]||(t[4]=r=>l.fullScreen=!0)},[(i(),d("svg",Gt,Qt)),Yt])),l.fullScreen?(i(),d("div",{key:1,class:"cursor-pointer flex items-center",onKeydown:t[5]||(t[5]=K(r=>l.fullScreen=!1,["esc"])),onClick:t[6]||(t[6]=r=>l.fullScreen=!1)},ss,32)):L("",!0)]),os]),e("div",ls,[(i(!0),d(S,null,I(l.images,r=>(i(),d("img",{key:r,class:k([a.isFullScreen,"w-full"]),src:`/img/book/${n.title}/${n.episodeNumber}/${r}`,alt:"image"},null,10,ns))),128))])])}const is=p(Nt,[["render",as],["__scopeId","data-v-bfad07f4"]]),ds={components:{ToastModal:D},props:{id:{type:Number,default:0},name:{type:String,default:""},body:{type:String,default:""}},data(){return{success:!1,error:!1,form:{id:this.id,name:this.name,body:this.body}}},watch:{name:{handler:_.debounce(function(){this.form.name=this.name},0),deep:!0},body:{handler:_.debounce(function(){this.form.body=this.body},0),deep:!0},form:{handler:_.debounce(function(){this.update()},2e3),deep:!0}},methods:{async update(){await axios.patch(`/api/episode/${this.id}`,this.form).then(()=>{this.success=!0,setTimeout(()=>this.success=!1,3e3)}).catch(()=>{this.error=!0,setTimeout(()=>this.error=!1,3e3)})}}},rs={class:"w-full flex flex-col my-8"},cs={key:0,class:"w-full flex items-center justify-end mt-2"},us={key:0,class:"slide-animation h-5 w-5 text-primary mr-1",viewBox:"0 0 20 20",fill:"currentColor"},_s=e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1),vs=[_s],ps={class:"w-full flex flex-col items-center"},fs={key:0,class:"w-full flex items-center justify-end mt-2"},hs={key:0,class:"slide-animation h-5 w-5 text-primary mr-1",viewBox:"0 0 20 20",fill:"currentColor"},ms=e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1),ks=[ms];function $s(o,t,n,s,l,a){const r=F("toast-modal");return i(),d("div",null,[m(r,{success:l.success,error:l.error},null,8,["success","error"]),e("div",rs,[h(e("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>n.name=u),type:"text",placeholder:"\u30BF\u30A4\u30C8\u30EB",class:"w-full text-3xl bg-white p-2 rounded",maxlength:"30",minlength:"5"},null,512),[[T,n.name,void 0,{trim:!0}]]),n.name?(i(),d("p",cs,[n.name.length<=30&&n.name.length>=5?(i(),d("svg",us,vs)):L("",!0),e("span",null,M(n.name.length)+"/30",1)])):L("",!0)]),e("div",ps,[h(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=u=>n.body=u),type:"text",minlength:"1000",placeholder:"\u672C\u6587",class:"w-full p-4 bg-white whitespace-pre-line rounded h-full text-lg leading-9"},null,512),[[T,n.body,void 0,{trim:!0}]]),n.body?(i(),d("p",fs,[n.body.length>=1e3?(i(),d("svg",hs,ks)):L("",!0),e("span",null,"1000/"+M(n.body.length),1)])):L("",!0)])])}const gs=p(ds,[["render",$s]]);const ws={components:{VueTagsInput:W},props:{initialTags:{type:Array,default:[]},autocompleteItems:{type:Array,default:[]}},data(){return{tag:"",tags:this.initialTags}},computed:{filteredItems(){return this.autocompleteItems.filter(o=>o.text.toLowerCase().indexOf(this.tag.toLowerCase())!==-1)},tagsJson(){return JSON.stringify(this.tags)}}},ys=["value"];function bs(o,t,n,s,l,a){const r=F("vue-tags-input");return i(),d("div",null,[e("input",{type:"hidden",name:"tags",value:a.tagsJson},null,8,ys),m(r,{modelValue:l.tag,"onUpdate:modelValue":t[0]||(t[0]=u=>l.tag=u),tags:l.tags,placeholder:"\u30BF\u30B0\u30925\u500B\u307E\u3067\u5165\u529B\u3067\u304D\u307E\u3059","add-on-key":[13,32],"autocomplete-items":a.filteredItems,onTagsChanged:t[1]||(t[1]=u=>l.tags=u)},null,8,["modelValue","tags","autocomplete-items"])])}const xs=p(ws,[["render",bs],["__scopeId","data-v-6cf516a6"]]),Cs={props:{initialIsFollowedBy:{type:Boolean,default:!1},authorized:{type:Boolean,default:!1},endpoint:{type:String,default:""}},data(){return{isFollowedBy:this.initialIsFollowedBy}},computed:{buttonColor(){return this.isFollowedBy?"btn-border":"btn-primary"},buttonText(){return this.isFollowedBy?"\u30D5\u30A9\u30ED\u30FC\u4E2D":"\u30D5\u30A9\u30ED\u30FC\u3059\u308B"}},methods:{clickFollow(){if(!this.authorized){alert("\u30D5\u30A9\u30ED\u30FC\u6A5F\u80FD\u306F\u30ED\u30B0\u30A4\u30F3\u4E2D\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059");return}this.isFollowedBy?this.unfollow():this.follow()},async follow(){await axios.put(this.endpoint),this.isFollowedBy=!0},async unfollow(){await axios.delete(this.endpoint),this.isFollowedBy=!1}}};function Ls(o,t,n,s,l,a){return i(),d("div",null,[e("button",{class:k([a.buttonColor,"text-xs"]),onClick:t[0]||(t[0]=(...r)=>a.clickFollow&&a.clickFollow(...r))},M(a.buttonText),3)])}const Ms=p(Cs,[["render",Ls]]);const Bs={class:"dropdown"},Ss={__name:"HeaderUserModal",setup(o){const t=f(!1);return(n,s)=>(i(),d("div",{class:"relative tracking-widest",onMouseleave:s[1]||(s[1]=l=>t.value=!1)},[e("button",{class:"flex items-center justify-between w-full pl-3 pr-4 font-medium md:p-0 md:w-auto shadow",onMouseover:s[0]||(s[0]=l=>t.value=!0)},[c(n.$slots,"avatar",{},void 0,!0)],32),m(g,null,{default:$(()=>[h(e("div",Bs,[c(n.$slots,"default",{},void 0,!0)],512),[[w,t.value]])]),_:3})],32))}},Is=p(Ss,[["__scopeId","data-v-e7a2e0a5"]]);const Ts={class:"dropdown"},Fs={__name:"HoverMenu",setup(o){const t=f(!1);return(n,s)=>(i(),d("div",{class:"absolute right-0 top-0",onMouseleave:s[1]||(s[1]=l=>t.value=!1)},[e("div",{class:"",onMouseover:s[0]||(s[0]=l=>t.value=!0)},[c(n.$slots,"avatar",{},void 0,!0)],32),m(g,null,{default:$(()=>[h(e("div",Ts,[c(n.$slots,"default",{},void 0,!0)],512),[[w,t.value]])]),_:3})],32))}},Es=p(Fs,[["__scopeId","data-v-4d85dedc"]]);const q=o=>(y("data-v-f391576e"),o=o(),b(),o),js={class:"window"},zs={class:"header"},As=q(()=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#333"},[e("path",{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"})],-1)),Vs=[As],Ns={class:"title"},Hs=q(()=>e("div",{class:"p-8 flex flex-wrap items-center"},[e("a",{class:"box my-4 ml-auto mr-4 text-[#901DF5] border-[#901DF5] hover:bg-[#901DF5] hover:bg-opacity-10"}," \u5C11\u5E74\u30FB\u9752\u5E74 "),e("a",{class:"box m-4 text-[#19A3FE] border-[#19A3FE] hover:bg-[#19A3FE] hover:bg-opacity-10"}," \u5C11\u5973\u30FB\u5973\u6027 "),e("a",{class:"box my-4 mr-auto ml-4 text-[#00AB8E] border-[#00AB8E] hover:bg-[#00AB8E] hover:bg-opacity-10"}," TL "),e("a",{class:"box my-4 ml-auto mr-4 text-[#F1C521] border-[#F1C521] hover:bg-[#F1C521] hover:bg-opacity-10"}," BL "),e("a",{class:"box m-4 text-[#FF0F77] border-[#FF0F77] hover:bg-[#FF0F77] hover:bg-opacity-10"}," \u30AA\u30C8\u30CA "),e("a",{class:"box my-4 mr-auto ml-4 border-none"})],-1)),Zs={__name:"GenreSearch",setup(o){const t=f(!1),n=E({search:null,array:[]}),s=async()=>{let l=await axios.get("/api/search-tags");n.array=l.data};return j(()=>{s()}),(l,a)=>(i(),d("div",{onClick:a[3]||(a[3]=v(r=>t.value=!1,["self"]))},[e("div",{class:"trigger",onClick:a[0]||(a[0]=r=>t.value=!0)},[c(l.$slots,"trigger",{},void 0,!0)]),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:a[2]||(a[2]=v(r=>t.value=!1,["self"]))},[e("div",js,[e("div",zs,[e("button",{class:"close",onClick:a[1]||(a[1]=r=>t.value=!1)},Vs),e("div",Ns,[c(l.$slots,"trigger",{},void 0,!0)])]),Hs])],512),[[w,t.value]])]),_:3})]))}},Ds=p(Zs,[["__scopeId","data-v-f391576e"]]);const Us=o=>(y("data-v-9b9eb589"),o=o(),b(),o),qs=Us(()=>e("svg",{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",class:"w-[20px] h-[20px] stroke-t-color dark:stroke-eee mr-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})],-1)),Ps={__name:"RankingSortModal",setup(o){const t=f(!1);return(n,s)=>(i(),d("div",{class:"relative",onMouseleave:s[2]||(s[2]=l=>t.value=!1)},[e("button",{class:"inline-flex items-center border rounded-[3px] px-2 py-1.5 font-semibold cursor-pointer",onMouseover:s[0]||(s[0]=l=>t.value=!0)},[qs,c(n.$slots,"trigger",{},void 0,!0)],32),m(g,{appear:""},{default:$(()=>[h(e("div",{class:"dropdown",onMouseover:s[1]||(s[1]=l=>t.value=!0)},[c(n.$slots,"default",{},void 0,!0)],544),[[w,t.value]])]),_:3})],32))}},Rs=p(Ps,[["__scopeId","data-v-9b9eb589"]]),Os={class:"header-search-input relative flex items-center mx-auto"},Js={class:"absolute right-2"},Ks=e("path",{d:"M5.00098 5L19 18.9991",stroke:"#aaa","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Ws=e("path",{d:"M4.99996 18.9991L18.999 5",stroke:"#aaa","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Gs=[Ks,Ws],Xs={key:0,class:"absolute dark:bg-dark top-[30px] bg-white shadow-lg z-[999] overflow-y-auto max-h-[500px] scroll-none rounded-[3px] p-2"},Qs=["onClick"],Ys={class:"flex items-center"},eo=["src"],to={key:1,src:"/img/bg.svg",class:"dark:fill-dark w-[70px] h-[70px] object-cover"},so={class:"ml-4 w-[200px]"},oo={class:"text-xl font-semibold"},lo={class:"text-666"},no={__name:"SearchForm",setup(o){const t=f(!1),n=E({search:null,array:[]}),s=H(()=>n.search?Object.values(n.array).filter(u=>{let C=u.title.concat(u.name);return n.search.toLowerCase().split(" ").every(x=>C.toLowerCase().includes(x))}):n.array),l=async()=>{let u=await axios.get("/api/search-words");n.array=u.data};j(()=>{l()});function a(u){location.href="/books/"+u.id}function r(){n.search=""}return(u,C)=>(i(),d("div",Os,[h(e("input",{ref:"anyName","onUpdate:modelValue":C[0]||(C[0]=x=>n.search=x),type:"text",placeholder:"\u691C\u7D22",class:"py-2 px-4 border border-ccc dark:bg-dark-1 dark:border-dark",onFocus:C[1]||(C[1]=x=>t.value=!0)},null,544),[[T,n.search]]),e("button",Js,[t.value&&n.search.length>0?(i(),d("svg",{key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",onClick:C[2]||(C[2]=x=>r())},Gs)):L("",!0)]),t.value&&n.search.length>0?(i(),d("div",Xs,[(i(!0),d(S,null,I(Z(s),x=>(i(),d("a",{key:x,class:"flex items-center p-4 cursor-pointer dark:hover:bg-dark-1 hover:bg-[#f5f5f5] rounded",onClick:dl=>a(x)},[e("div",Ys,[x.thumbnail?(i(),d("img",{key:0,src:"/img/book/thumbnail/"+x.thumbnail,class:"w-[80px] h-[80px] object-cover"},null,8,eo)):(i(),d("img",to)),e("div",so,[e("div",oo,M(x.title),1),e("div",lo,M(x.name),1)])])],8,Qs))),128))])):L("",!0)]))}};const ao=o=>(y("data-v-2250c641"),o=o(),b(),o),io={class:"window"},ro={class:"header"},co=ao(()=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#333"},[e("path",{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"})],-1)),uo=[co],_o={class:"title"},vo={class:"p-8 h-[60vh] overflow-y-scroll scroll-none"},po={class:"my-4"},fo=["href"],ho={__name:"TagSearchModal",setup(o){const t=f(!1),n=E({search:null,array:[]}),s=H(()=>n.search?n.array.filter(a=>n.search.toLowerCase().split(" ").every(r=>a.text.toLowerCase().includes(r))):n.array),l=async()=>{let a=await axios.get("/api/search-tags");n.array=a.data};return j(()=>{l()}),(a,r)=>(i(),d("div",{onClick:r[5]||(r[5]=v(u=>t.value=!1,["self"]))},[e("div",{class:"trigger",onClick:r[0]||(r[0]=u=>t.value=!0)},[c(a.$slots,"trigger",{},void 0,!0)]),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:r[4]||(r[4]=v(u=>t.value=!1,["self"]))},[e("div",io,[e("div",ro,[e("button",{class:"close",onClick:r[1]||(r[1]=u=>t.value=!1)},uo),e("div",_o,[c(a.$slots,"trigger",{},void 0,!0)])]),e("div",vo,[h(e("input",{"onUpdate:modelValue":r[2]||(r[2]=u=>n.search=u),type:"text",placeholder:"\u691C\u7D22",class:"py-2 px-4 border w-full border-bbb rounded dark:bg-dark-1 dark:border-dark",onFocus:r[3]||(r[3]=u=>t.value=!0)},null,544),[[T,n.search]]),e("div",po,[(i(!0),d(S,null,I(Z(s),u=>(i(),d("a",{key:u,href:`/tags/${u.text}`,class:"inline-flex m-1 items-center px-4 py-2 cursor-pointer bg-primary hover:bg-opacity-90 text-white rounded-full"},M(u.text),9,fo))),128))])])])],512),[[w,t.value]])]),_:3})]))}},mo=p(ho,[["__scopeId","data-v-2250c641"]]),ko=N('<label id="headlessui-listbox-label-3" class="sr-only"> Theme </label><button id="headlessui-listbox-button-4" type="button" aria-haspopup="true" aria-expanded="false" aria-labelledby="headlessui-listbox-label-3 headlessui-listbox-button-undefined"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="block dark:hidden"><path d="M2.03 12.42C2.39 17.57 6.76 21.76 11.99 21.99C15.68 22.15 18.98 20.43 20.96 17.72C21.78 16.61 21.34 15.87 19.97 16.12C19.3 16.24 18.61 16.29 17.89 16.26C13 16.06 9 11.97 8.98 7.13996C8.97 5.83996 9.24 4.60996 9.73 3.48996C10.27 2.24996 9.62 1.65996 8.37 2.18996C4.41 3.85996 1.7 7.84996 2.03 12.42Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="hidden dark:block"><path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><span class="pl-5">\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9</span>',3),$o=[ko],go={__name:"ThemeToggle",setup(o){function t(){localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.remove("dark"),localStorage.theme="light"):(document.documentElement.classList.add("dark"),localStorage.theme="dark")}return(n,s)=>(i(),d("div",{class:"flex items-center w-full h-full p-3",onClick:t},$o))}},wo={class:"window-avatar"},yo=["src"],bo={__name:"AvatarZoom",props:{avatar:{type:String,defalt:""}},setup(o){const t=f(!1);return(n,s)=>(i(),d("div",null,[e("span",{class:"cursor-pointer",onClick:s[0]||(s[0]=l=>t.value=!0)},[c(n.$slots,"avatar")]),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:s[1]||(s[1]=v(l=>t.value=!1,["self"]))},[e("div",wo,[e("img",{src:`/img/users/avatar/${o.avatar}`,alt:"user image"},null,8,yo)])],512),[[w,t.value]])]),_:1})]))}};const xo=o=>(y("data-v-3c2fc8e3"),o=o(),b(),o),Co={class:"window"},Lo={class:"header"},Mo=xo(()=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#333"},[e("path",{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"})],-1)),Bo=[Mo],So={class:"title"},Io={class:"p-6 max-h-[60vh] overflow-y-scroll scroll-none"},To={__name:"EditUserModal",setup(o){const t=f(!1);return(n,s)=>(i(),d("div",{onClick:s[3]||(s[3]=v(l=>t.value=!1,["self"]))},[e("div",{class:"btn-sub absolute top-4 md:top-auto md:bottom-4 right-4",onClick:s[0]||(s[0]=l=>t.value=!0)},[c(n.$slots,"trigger",{},void 0,!0)]),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:s[2]||(s[2]=v(l=>t.value=!1,["self"]))},[e("div",Co,[e("div",Lo,[e("button",{class:"close",onClick:s[1]||(s[1]=l=>t.value=!1)},Bo),e("div",So,[c(n.$slots,"header",{},void 0,!0)])]),e("div",Io,[c(n.$slots,"default",{},void 0,!0)])])],512),[[w,t.value]])]),_:3})]))}},Fo=p(To,[["__scopeId","data-v-3c2fc8e3"]]);const Eo=o=>(y("data-v-78a49d6f"),o=o(),b(),o),jo={class:"window"},zo={class:"header"},Ao=Eo(()=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#333"},[e("path",{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"})],-1)),Vo=[Ao],No={class:"title"},Ho={class:"p-6 max-h-[60vh] overflow-y-scroll scroll-none"},Zo={__name:"FollowModal",props:{userName:{type:String,default:""}},setup(o){const t=f(!0);function n(){this.open=!1,window.history.back()}return(s,l)=>(i(),d("div",{onClick:l[3]||(l[3]=v(a=>n(),["self"]))},[e("button",{onClick:l[0]||(l[0]=a=>t.value=!0)},[c(s.$slots,"trigger",{},void 0,!0)]),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:l[2]||(l[2]=v(a=>n(),["self"]))},[e("div",jo,[e("div",zo,[e("button",{class:"close",onClick:l[1]||(l[1]=a=>n())},Vo),e("div",No,[c(s.$slots,"header",{},void 0,!0)])]),e("div",Ho,[c(s.$slots,"default",{},void 0,!0)])])],512),[[w,t.value]])]),_:3})]))}},Do=p(Zo,[["__scopeId","data-v-78a49d6f"]]),Uo={class:"window-avatar"},qo=["src"],Po={__name:"ThumbnailZoom",props:{thumbnail:{type:String,default:""}},setup(o){const t=f(!1);return(n,s)=>(i(),d("div",null,[e("div",{class:"cursor-pointer",onClick:s[0]||(s[0]=l=>t.value=!0)},[c(n.$slots,"thumbnail")]),m(g,{name:"modal",appear:""},{default:$(()=>[h(e("div",{class:"overlay",onClick:s[1]||(s[1]=v(l=>t.value=!1,["self"]))},[e("div",Uo,[e("img",{src:`/img/users/thumbnail/${o.thumbnail}`,alt:"user image"},null,8,qo)])],512),[[w,t.value]])]),_:1})]))}};const Ro={props:{initialIsLikedBy:{type:Boolean,default:!1},initialCountLikes:{type:Number,default:0},authorized:{type:Boolean,default:!1},endpoint:{type:String,default:""},big:{type:Boolean,default:!1}},data(){return{isLikedBy:this.initialIsLikedBy,countLikes:this.initialCountLikes,gotToLike:!1}},methods:{clickLike(){if(!this.authorized){alert("\u3044\u3044\u306D\u6A5F\u80FD\u306F\u30ED\u30B0\u30A4\u30F3\u4E2D\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059");return}this.isLikedBy?this.unlike():this.like()},async like(){const o=await axios.put(this.endpoint);this.isLikedBy=!0,this.countLikes=o.data.countLikes,this.gotToLike=!0},async unlike(){const o=await axios.delete(this.endpoint);this.isLikedBy=!1,this.countLikes=o.data.countLikes,this.gotToLike=!1}}},Oo=o=>(y("data-v-586be82e"),o=o(),b(),o),Jo=Oo(()=>e("path",{d:"M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),Ko=[Jo],Wo={class:"ml-2"};function Go(o,t,n,s,l,a){return i(),d("div",{class:"comment-like",onClick:t[0]||(t[0]=(...r)=>a.clickLike&&a.clickLike(...r))},[(i(),d("svg",{class:k([{clicked:l.isLikedBy},"stroke-red"]),height:"16px",viewBox:"0 0 22 20",fill:"none"},Ko,2)),e("span",Wo,M(l.countLikes),1)])}const Xo=p(Ro,[["render",Go],["__scopeId","data-v-586be82e"]]);const Qo={class:"tab"},Yo={class:"tabMenu"},el={class:"tabContents"},tl={key:0},sl={key:1},ol={key:2},ll={__name:"SettingTab",setup(o){const t=f(1);function n(s){this.isActive=s}return(s,l)=>(i(),d("div",Qo,[e("ul",Yo,[e("li",{class:k({active:t.value===1}),onClick:l[0]||(l[0]=a=>n(1))}," \u30E1\u30FC\u30EB\u901A\u77E5 ",2),e("li",{class:k({active:t.value===2}),onClick:l[1]||(l[1]=a=>n(2))},"\u8CFC\u5165\u5C65\u6B74",2),e("li",{class:k({active:t.value===3}),onClick:l[2]||(l[2]=a=>n(3))}," \u8868\u793A\u3057\u306A\u3044\u4F5C\u54C1 ",2)]),e("div",el,[t.value===1?(i(),d("div",tl,[c(s.$slots,"1",{},void 0,!0)])):t.value===2?(i(),d("div",sl,[c(s.$slots,"2",{},void 0,!0)])):t.value===3?(i(),d("div",ol,[c(s.$slots,"3",{},void 0,!0)])):L("",!0)])]))}},nl=p(ll,[["__scopeId","data-v-59236999"]]),al={SettingTab:nl,CommentLike:Xo,BasicModal:de,TagSearchModal:mo,GenreSearch:Ds,SearchForm:no,RankingSortModal:Rs,BookTab:he,BookEditModal:We,CommentPostModal:Bt,ToastModal:D,EpisodeScreen:is,UpdateEpisode:gs,EpisodeList:Vt,ThumbnailZoom:Po,FollowModal:Do,AvatarZoom:bo,AuthModal:Fe,DeleteModal:ft,HoverMenu:Es,CreateModal:at,CountAnimation:U,HeaderUserModal:Is,ThemeToggle:go,EditModal:$t,EditUserModal:Fo,BookLike:Ze,BookTagsInput:xs,FollowButton:Ms};localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");const il=G({components:al});il.mount("#app");