(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{10:function(e,a,t){e.exports={login_container:"Login_login_container__8eE2X",container:"Login_container__145qN",Titulo:"Login_Titulo__wE0AM",Form:"Login_Form__1C1cI",Label:"Login_Label__2My94",Normal:"Login_Normal__3S-EB",InputName:"Login_InputName__1CF-5",Inputs:"Login_Inputs__3Vpe-",Errores:"Login_Errores__A-8At",Selec:"Login_Selec__2jYiU",Selec1:"Login_Selec1__jtDl-",ContBotones:"Login_ContBotones__yNqfG",Button:"Login_Button__2si-o",ButtonClose:"Login_ButtonClose__3a5M4"}},13:function(e,a,t){e.exports={container:"Nav_container___v42X",Nav:"Nav_Nav__1mBSI",Ul:"Nav_Ul__2dgeu",Li:"Nav_Li__1UemI",ContainerLogo:"Nav_ContainerLogo__2H650",Logo:"Nav_Logo__1Su4o",active:"Nav_active__YDSj0",Dat1:"Nav_Dat1__CIKgB",Dat:"Nav_Dat__2Gcz-",DatLab:"Nav_DatLab__3pFTf",DatImg:"Nav_DatImg__XQHZM",Dat3:"Nav_Dat3__3kx1y"}},16:function(e,a,t){e.exports={container:"CardDetail_container__2VpNK",container1:"CardDetail_container1__3P0-g",CardCentro:"CardDetail_CardCentro__19-_Z",Ima:"CardDetail_Ima__2ojnF",Img:"CardDetail_Img__3LDfS",Lec:"CardDetail_Lec__2cBdP",title:"CardDetail_title__3iHRi",dish_summary:"CardDetail_dish_summary__bXxX6",process:"CardDetail_process__30_Ou",CardBoton:"CardDetail_CardBoton__3T6j7",Button:"CardDetail_Button__-Ngva",CardCentroButton:"CardDetail_CardCentroButton__1FZ6G"}},17:function(e,a,t){e.exports={container:"Card_container__3lNyO",Ima:"Card_Ima__3pbut",Img:"Card_Img__1Ulp8",Lec:"Card_Lec__2T3ks",containerLec:"Card_containerLec__3-nHb",CardButton:"Card_CardButton__29XT9"}},18:function(e,a,t){e.exports={container:"FormSearch_container__RKZW8",Buscar:"FormSearch_Buscar__VJAzM",Buscar1:"FormSearch_Buscar1__nrbza",Select:"FormSearch_Select__3va5k"}},21:function(e,a,t){e.exports={ContenedorButton:"Paginator_ContenedorButton__2k3Ye",anteriorButton:"Paginator_anteriorButton__1p9Lf",numero:"Paginator_numero__SINcV",siguienteButton:"Paginator_siguienteButton__NPqkE"}},26:function(e,a,t){e.exports={container:"Meter_container__1DocR",container1:"Meter_container1__16Edl",container2:"Meter_container2__1lXeo"}},27:function(e,a,t){e.exports={loadin_container:"Loading_loadin_container__grR-4",container:"Loading_container__ZiAwD",containerImg:"Loading_containerImg__1XkDO"}},28:function(e,a,t){e.exports={container:"Cards_container__2OAj2",containerImg:"Cards_containerImg__3lKCO",containerImg2:"Cards_containerImg2__1-mQq"}},3:function(e,a,t){e.exports={login_container:"Register_login_container__1iRxO",container:"Register_container__qO1gr",Titulo:"Register_Titulo__352sf",Form:"Register_Form__1Sivc",Label:"Register_Label__3x0PC",Normal:"Register_Normal__1HKUr",InputName:"Register_InputName__3iGRU",Inputs:"Register_Inputs__2g67U",Errores:"Register_Errores__3yGRc",Selec:"Register_Selec__Dpvfv",Selec1:"Register_Selec1__32eEp",ContBotones:"Register_ContBotones__3dWkf",Button:"Register_Button__2qZ9Y",ButtonClose:"Register_ButtonClose__3tna2"}},31:function(e,a,t){e.exports={container:"Home_container__2bM5n",containerLogo:"Home_containerLogo__1Sk-f"}},4:function(e,a,t){e.exports={login_container:"Form_login_container__17ipF",container:"Form_container__3Lo2k",Titulo:"Form_Titulo__2TdWq",Form:"Form_Form__39plA",Label:"Form_Label__aaB1j",Normal:"Form_Normal__2oh2E",InputName:"Form_InputName__HVYtU",Inputs:"Form_Inputs__3NVCh",Errores:"Form_Errores__1o5Lg",Selec:"Form_Selec__Dq91N",Selec1:"Form_Selec1__2YOq5",ContBotones:"Form_ContBotones__3JNA8",Button:"Form_Button__3fpQ_",ButtonClose:"Form_ButtonClose__3tPFj"}},43:function(e,a,t){e.exports={container:"Create_container__20zNB"}},44:function(e,a,t){e.exports={container:"Favorites_container__HtPG8"}},45:function(e,a,t){e.exports={container:"Pokemones_container__2lz4_"}},57:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),o=t(24),r=t.n(o),s=t(6),i=t(25),l=t(42),j=t(41),u=t(2),d="https://pokemones-pro.herokuapp.com/api/pokemones/",m="POST_REGISTER",b="POST_LOGIN",p="GET_POKES_USER",O="OUTH_LOGIN",_="POST_POKEMON",h="GET_ALL_POKEMONES",g="GET_POKEMONES_BD",x="GET_POKEMON_ID",f="GET_POKEMON_NAME",v="GET_ALL_TYPES",N="BY_ORDER",y="BY_TYPE",k="LOADING",C={register:function(e,a){if(a.type===m)return Object(u.a)(Object(u.a)({},e),{},{register:a.payload,loading:!1})},login:function(e,a){if(a.type===b)return Object(u.a)(Object(u.a)({},e),{},{userLogin:a.payload,login:!0,loading:!1})},outhLogin:function(e,a){if(a.type===O)return Object(u.a)(Object(u.a)({},e),{},{userLogin:[],login:!1,loading:!1})},getPokesUser:function(e,a){if(a.type===p)return Object(u.a)(Object(u.a)({},e),{},{pokeFavorites:a.payload,loading:!1})}},L={getAllPokemones:function(e,a){if(a.type===h)return Object(u.a)(Object(u.a)({},e),{},{allPokemones:a.payload,loading:!1})},getPokemonesBd:function(e,a){if(a.type===g)return Object(u.a)(Object(u.a)({},e),{},{allPokemones:a.payload,loading:!1})},getPokemonId:function(e,a){if(a.type===x)return Object(u.a)(Object(u.a)({},e),{},{pokemonDetail:a.payload,loading:!1})},getPokemonName:function(e,a){if(a.type===f)return Object(u.a)(Object(u.a)({},e),{},{allPokemones:a.payload,loading:!1})},byType:function(e,a){if(a.type===y)return Object(u.a)(Object(u.a)({},e),{},{type:a.payload,loading:!1})},byOrder:function(e,a){if(a.type===N)return Object(u.a)(Object(u.a)({},e),{},{order:a.payload,loading:!1})},posPokemon:function(e,a){if(a.type===_)return Object(u.a)(Object(u.a)({},e),{},{response:a.payload,loading:!1})}},P={getAllTypes:function(e,a){if(a.type===v)return Object(u.a)(Object(u.a)({},e),{},{allTypes:a.payload,loading:!1})}},I={userLogin:[],register:"",pokeFavorites:[],allPokemones:[],pokemonDetail:[],type:"",order:"",response:"",allTypes:[],login:!1,loading:!1};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return C.register(e,a);case b:return C.login(e,a);case O:return C.outhLogin(e,a);case p:return C.getPokesUser(e,a);case h:return L.getAllPokemones(e,a);case g:return L.getPokemonesBd(e,a);case x:return L.getPokemonId(e,a);case f:return L.getPokemonName(e,a);case y:return L.byType(e,a);case N:return L.byOrder(e,a);case _:return L.posPokemon(e,a);case v:return P.getAllTypes(e,a);case k:return Object(u.a)(Object(u.a)({},e),{},{loading:a.payload});default:return e}},E=Object(i.createStore)(S,Object(j.composeWithDevTools)(Object(i.applyMiddleware)(l.a))),B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),o(e),r(e)}))},D=(t(57),t(8)),T=t(5),F=t(7),w=t(14),A=t.n(w),R={register:function(e){return function(a){a({type:k,payload:!0});var t=new FormData;t.append("username",e.username),t.append("name",e.name),t.append("second_name",e.second_name),t.append("last_name",e.last_name),t.append("second_last_name",e.second_last_name),t.append("phone",e.phone),t.append("email",e.email),t.append("image",e.image),t.append("password",e.password),A()({url:"https://pokemones-pro.herokuapp.com/api/users/register",method:"POST",data:t}).then((function(e){alert(e.data),a({type:m,payload:e.data})})).catch((function(e){return console.error(e)}))}},login:function(e){return function(a){a({type:k,payload:!0}),A.a.post("https://pokemones-pro.herokuapp.com/api/users/login",e).then((function(e){return e.data})).then((function(e){return a({type:b,payload:e})})).catch((function(e){return console.error(e)}))}},outhLogin:function(e){return function(a){return a(a({type:O,payload:e}))}},getPokesUser:function(e){return function(a){a(a({type:k,payload:!0})),A.a.get("".concat("https://pokemones-pro.herokuapp.com/api/users","/").concat(e,"/poke")).then((function(e){return e.data})).then((function(e){a({type:p,payload:e})})).catch((function(e){console.log(e)}))}}},z={getAllPokemones:function(){return function(e){e({type:k,payload:!0}),A.a.get(d).then((function(e){return e.data})).then((function(a){e({type:h,payload:a})})).catch((function(e){return console.log(e)}))}},getPokemonesBd:function(e){return function(a){a({type:k,payload:!0}),A.a.get("".concat(d,"?parameter=").concat(e)).then((function(e){return e.data})).then((function(e){a({type:g,payload:e})})).catch((function(e){return console.log(e)}))}},getPokemonId:function(e){return function(a){a({type:k,payload:!0}),A.a.get("".concat(d).concat(e)).then((function(e){return e.data})).then((function(e){a({type:x,payload:e})})).catch((function(e){return console.log(e)}))}},getPokemonName:function(e){return function(a){a({type:k,payload:!0}),A.a.get("".concat("https://pokemones-pro.herokuapp.com/api/pokemones/name/","?name=").concat(e)).then((function(e){return e.data})).then((function(e){a({type:f,payload:e})})).catch((function(e){return console.log(e)}))}},byType:function(e){return function(a){return a(a({type:y,payload:e}))}},byOrder:function(e){return function(a){return a(a({type:N,payload:e}))}},posPokemon:function(e){return function(a){a({type:k,payload:!0});var t=new FormData;t.append("name",e.name),t.append("vida",e.vida),t.append("fuerza",e.fuerza),t.append("defensa",e.defensa),t.append("velocidad",e.velocidad),t.append("altura",e.altura),t.append("peso",e.peso),t.append("image",e.image),t.append("tipos",e.tipos),t.append("user_id",e.user_id),A()({url:d,method:"POST",data:t}).then((function(e){alert(e.data),a({type:_,payload:e})})).catch((function(e){return console.error(e)}))}}},M={register:R.register,login:R.login,outhLogin:R.outhLogin,getPokesUser:R.getPokesUser,getAllPokemones:z.getAllPokemones,getPokemonesBd:z.getPokemonesBd,getPokemonId:z.getPokemonId,getPokemonName:z.getPokemonName,byType:z.byType,byOrder:z.byOrder,posPokemon:z.posPokemon,getAllTypes:{getAllTypes:function(){return function(e){e({type:k,payload:!0}),A.a.get("https://pokemones-pro.herokuapp.com/api/types/").then((function(e){return e.data})).then((function(a){e({type:v,payload:a})})).catch((function(e){return console.log(e)}))}}}.getAllTypes},U=t(16),q=t.n(U),G=t(26),H=t.n(G),K=t(0),Q=function(e){var a,t=e.valor,n=e.nombre;return t<25&&(a=H.a.container1),t>25&&t<60&&(a=H.a.container2),t>=60&&(a=H.a.container),Object(K.jsx)("div",{className:a,children:Object(K.jsxs)("p",{children:[n," ","=>",Object(K.jsx)("meter",{min:"0",max:"120",value:t,low:"25",high:"60",optimum:"100",children:"at 60/120"}),"=>"," ",t]})})},X=t.p+"static/media/loadingImg.a687be51.gif",V=t(27),Y=t.n(V),Z=function(){return Object(K.jsx)("div",{className:Y.a.loadin_container,children:Object(K.jsxs)("div",{className:Y.a.container,children:[Object(K.jsx)("div",{children:Object(K.jsx)("p",{children:"Picapica Pikachuu... "})}),Object(K.jsx)("img",{src:X,alt:"Loading",className:Y.a.containerImg})]})})},J=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.pokemonDetail})),t=Object(T.g)().id;Object(n.useEffect)((function(){e(M.getPokemonId(t))}),[e,t]);var c=Object(n.useState)(!1),o=Object(F.a)(c,2),r=o[0],i=o[1];return Object(n.useEffect)((function(){a.map((function(e){return e.id===t}))?i(!0):i(!1)}),[t,a]),Object(K.jsxs)("div",{className:q.a.container,children:[r&&a.map((function(e){return Object(K.jsx)("div",{className:q.a.container1,children:Object(K.jsxs)("div",{className:q.a.CardCentro,children:[Object(K.jsx)("div",{className:q.a.Ima,children:e.image&&Object(K.jsx)("img",{src:e.image,alt:"imagen",className:q.a.Img})}),Object(K.jsxs)("div",{className:q.a.Lec,children:[Object(K.jsx)("div",{className:q.a.title,children:e.id&&Object(K.jsxs)("p",{children:["#\xa0\xa0 ",e.id]})}),Object(K.jsx)("div",{className:q.a.title,children:e.name&&Object(K.jsxs)("h3",{children:["Nombre:  ",e.name]})}),Object(K.jsx)("div",{className:q.a.title}),Object(K.jsx)("h3",{children:"Tipo: "}),e.types.map((function(e){return Object(K.jsx)("p",{children:e},e)})),e.attack&&Object(K.jsx)(Q,{valor:e.attack,nombre:"Ataque"}),e.defense&&Object(K.jsx)(Q,{valor:e.defense,nombre:"Defensa"}),e.height&&Object(K.jsx)(Q,{valor:e.height,nombre:"Altura"}),e.special_attack&&Object(K.jsx)(Q,{valor:e.special_attack,nombre:"Ataque E."}),e.special_defense&&Object(K.jsx)(Q,{valor:e.special_defense,nombre:"Defensa E."}),e.speed&&Object(K.jsx)(Q,{valor:e.speed,nombre:"Velocidad"}),e.weight&&Object(K.jsx)(Q,{valor:e.weight,nombre:"Peso"})]},e.id)]},e.id)},e.id)})),Object(K.jsx)(D.b,{to:"/pokemones",children:Object(K.jsx)("button",{className:q.a.CardCentroButton,children:"Volver"})}),!r&&Object(K.jsx)("h1",{children:"no"})]})},W=t.p+"static/media/Logo.c4dda904.jpg",$=t(13),ee=t.n($),ae=function(){var e=Object(s.b)(),a=Object(T.f)(),t=Object(s.c)((function(e){return e.userLogin})),n=Object(s.c)((function(e){return e.login})),c=n?[{id:1,title:"Home",path:"/"},{id:2,title:"Pokemones",path:"/pokemones"},{id:3,title:"Crear",path:"/crear"},{id:4,title:"Mi Equipo",path:"/team"}]:[{id:1,title:"Home",path:"/"},{id:2,title:"Pokemones",path:"/pokemones"},{id:3,title:"Registrase",path:"/register"},{id:4,title:"Iniciar Sesion",path:"/login"}];return Object(K.jsxs)("div",{children:[Object(K.jsxs)("div",{className:ee.a.container,children:[Object(K.jsx)("div",{className:ee.a.ContainerLogo,children:Object(K.jsx)("img",{src:W,alt:"Pokemones",className:ee.a.Logo})}),Object(K.jsx)("nav",{className:ee.a.Nav,children:Object(K.jsx)("ul",{className:ee.a.Ul,children:c.map((function(e){return Object(K.jsx)(D.c,{to:e.path,className:function(e){return e.isActive?ee.a.active:""},children:Object(K.jsx)("div",{children:Object(K.jsxs)("li",{className:ee.a.Li,children:[" ",e.title]})})},e.id)}))})})]}),n&&Object(K.jsxs)("div",{className:ee.a.Dat1,children:[Object(K.jsxs)("div",{className:ee.a.Dat,children:[Object(K.jsxs)("label",{className:ee.a.DatLab,children:[t.user.username," "]}),Object(K.jsx)("img",{src:t.user.image,alt:"logo",className:ee.a.DatImg})]}),Object(K.jsx)("input",{type:"submit",name:"",value:"Cerrar",className:ee.a.Dat3,onClick:function(t){t.preventDefault(),e(M.outhLogin()),a("/")}})]})]})},te=t(46),ne=t(15),ce=t(4),oe=t.n(ce),re=function(){var e=Object(s.b)(),a=Object(T.f)(),t=Object(n.useRef)(),c=Object(s.c)((function(e){return e.allTypes})),o=Object(s.c)((function(e){return e.userLogin})),r=Object(n.useState)({}),i=Object(F.a)(r,2),l=i[0],j=i[1],d=Object(n.useState)({name:"",vida:0,fuerza:0,defensa:0,velocidad:0,altura:0,peso:0,image:"",tipos:[],user_id:o.user.id}),m=Object(F.a)(d,2),b=m[0],p=m[1],O=function(e){p(Object(u.a)(Object(u.a)({},b),{},Object(ne.a)({},e.target.name,e.target.value))),j(function(e){var a={};return e.name||(a.name="Campo Obligatorio"),/(?=[^0-9])/.test(e.vida)&&(a.vida="Solo n\xfameros"),/(?=[^0-9])/.test(e.fuerza)&&(a.fuerza="Solo n\xfameros"),/(?=[^0-9])/.test(e.defensa)&&(a.defensa="Solo n\xfameros"),/(?=[^0-9])/.test(e.velocidad)&&(a.velocidad="Solo n\xfameros"),/(?=[^0-9])/.test(e.altura)&&(a.altura="Solo n\xfameros"),/(?=[^0-9])/.test(e.peso)&&(a.peso="Solo n\xfameros"),a}(Object(u.a)(Object(u.a)({},b),{},Object(ne.a)({},e.target.name,e.target.value))))},_=function(e){p(Object(u.a)(Object(u.a)({},b),{},{tipos:[].concat(Object(te.a)(b.tipos),[e.target.value])}))};return Object(K.jsx)("div",{className:oe.a.login_container,children:Object(K.jsxs)("div",{className:oe.a.container,children:[Object(K.jsxs)("form",{className:oe.a.Form,onSubmit:function(t){t.preventDefault(),e(M.posPokemon(b)),p({name:"",vida:0,fuerza:0,defensa:0,velocidad:0,altura:0,peso:0,image:"",tipos:[],user_id:""}),a("/pokemones")},children:[Object(K.jsx)("div",{className:oe.a.Titulo,children:Object(K.jsx)("h4",{children:"Que vuele tu imaginaci\xf3n!"})}),Object(K.jsx)("p",{className:l.name?oe.a.Errores:oe.a.Normal,children:Object(K.jsxs)("div",{className:oe.a.Label,children:[l.name?Object(K.jsx)("label",{children:l.name}):Object(K.jsx)("label",{children:"Dale un nombre"}),Object(K.jsx)("input",{type:"tex",name:"name",value:b.name,className:oe.a.InputName,onChange:O,required:!0,placeholder:"Ingresa el nombre ..."})]})}),Object(K.jsx)("p",{className:l.vida?oe.a.Errores:oe.a.Normal,children:Object(K.jsxs)("div",{className:oe.a.Label,children:[l.vida?Object(K.jsx)("label",{children:l.vida}):Object(K.jsx)("label",{children:"Dale Vida"}),Object(K.jsx)("input",{className:oe.a.Inputs,type:"number",name:"vida",value:b.vida,onChange:O})]})}),Object(K.jsx)("p",{className:l.fuerza?oe.a.Errores:oe.a.Normal,children:Object(K.jsxs)("div",{className:oe.a.Label,children:[l.fuerza?Object(K.jsx)("label",{children:l.fuerza}):Object(K.jsx)("label",{children:"Qu\xe9 fuerza tiene?"}),Object(K.jsx)("input",{className:oe.a.Inputs,type:"number",name:"fuerza",value:b.fuerza,onChange:O})]})}),Object(K.jsx)("p",{className:l.defensa?oe.a.Errores:oe.a.Normal,children:Object(K.jsxs)("div",{className:oe.a.Label,children:[l.defensa?Object(K.jsx)("label",{children:l.defensa}):Object(K.jsx)("label",{children:"Qu\xe9 defensa tiene?"}),Object(K.jsx)("input",{className:oe.a.Inputs,type:"number",name:"defensa",value:b.defensa,onChange:O})]})}),Object(K.jsx)("p",{className:l.velocidad?oe.a.Errores:oe.a.Numero,children:Object(K.jsxs)("div",{className:oe.a.Label,children:[l.velocidad?Object(K.jsx)("label",{children:l.velocidad}):Object(K.jsx)("label",{children:"Qu\xe9 velocidad tiene?"}),Object(K.jsx)("input",{className:oe.a.Inputs,type:"number",name:"velocidad",value:b.velocidad,onChange:O})]})}),Object(K.jsx)("p",{className:l.altura?oe.a.Errores:oe.a.Normal,children:Object(K.jsxs)("div",{className:oe.a.Label,children:[l.altura?Object(K.jsx)("label",{children:l.altura}):Object(K.jsx)("label",{children:"Qu\xe9 altura tiene?"}),Object(K.jsx)("input",{className:oe.a.Inputs,type:"number",name:"altura",value:b.altura,onChange:O})]})}),Object(K.jsx)("p",{className:l.peso?oe.a.Errores:oe.a.Normal,children:Object(K.jsxs)("div",{className:oe.a.Label,children:[l.peso?Object(K.jsx)("label",{children:l.peso}):Object(K.jsx)("label",{children:"Qu\xe9 peso tiene?"}),Object(K.jsx)("input",{className:oe.a.Inputs,type:"number",name:"peso",value:b.peso,onChange:O})]})}),Object(K.jsx)("p",{className:oe.a.Normal,children:Object(K.jsxs)("div",{className:oe.a.Label,children:[Object(K.jsx)("label",{children:"Dale una imagen"}),Object(K.jsx)("input",{type:"file",ref:t,id:"image",accept:"image/*",onChange:function(){p(Object(u.a)(Object(u.a)({},b),{},{image:t.current.files[0]}))}})]})}),Object(K.jsx)("div",{className:oe.a.Label,children:Object(K.jsx)("label",{children:"Qu\xe1 tipo es?"})}),Object(K.jsx)("div",{className:oe.a.Selec,children:c.map((function(e){return Object(K.jsxs)("div",{className:oe.a.Selec1,children:[Object(K.jsxs)("label",{children:[e.name," "]},"Label ".concat(e.id)),Object(K.jsx)("input",{type:"checkbox",value:e.id,onChange:_},"Checkbox ".concat(e.id))]},"Div".concat(e.id))}))}),Object(K.jsx)("input",{type:"submit",value:"Crear",className:oe.a.Button})]}),Object(K.jsx)(D.b,{to:"/pokemones",children:Object(K.jsx)("button",{className:oe.a.ButtonClose,children:"X"})})]})})},se=t(43),ie=t.n(se),le=t(3),je=t.n(le),ue=function(){var e=Object(s.b)(),a=Object(T.f)(),t=Object(n.useRef)(),c=Object(n.useState)({}),o=Object(F.a)(c,2),r=o[0],i=o[1],l=Object(n.useState)({username:"",name:"",second_name:"",last_name:"",second_last_name:"",phone:"",email:"",image:"",password:""}),j=Object(F.a)(l,2),d=j[0],m=j[1],b=function(e){m(Object(u.a)(Object(u.a)({},d),{},Object(ne.a)({},e.target.name,e.target.value))),i(function(e){var a={};return e.username||(a.username="Campo obligatorio"),e.name?/(?=.*[0-9])/.test(e.name)&&(a.name="Solo letras"):a.name="Campo obligatorio",/(?=.*[0-9])/.test(e.second_name)&&(a.second_name="Solo letras"),e.last_name?/(?=.*[0-9])/.test(e.last_name)&&(a.last_name="Solo letras"):a.last_name="Campo obligatorio",/(?=.*[0-9])/.test(e.second_last_name)&&(a.second_last_name="Solo letras"),/(?=[^0-9])/.test(e.phone)&&(a.phone="Solo n\xfameros"),e.email||(a.email="Campo obligatorio"),e.password||(a.password="Campo obligatorio"),a}(Object(u.a)(Object(u.a)({},d),{},Object(ne.a)({},e.target.name,e.target.value))))};return Object(K.jsx)("div",{className:je.a.login_container,children:Object(K.jsxs)("div",{className:je.a.container,children:[Object(K.jsxs)("form",{className:je.a.Form,onSubmit:function(t){t.preventDefault(),e(M.register(d)),m({username:"",name:"",second_name:"",last_name:"",second_last_name:"",phone:"",email:"",image:"",password:""}),a(-1)},children:[Object(K.jsx)("div",{className:je.a.Titulo,children:Object(K.jsx)("h4",{children:"Bienvenido a nuestro equipo!"})}),Object(K.jsx)("p",{className:r.username?je.a.Errores:je.a.Normal,children:Object(K.jsxs)("div",{className:je.a.Label,children:[r.username?Object(K.jsx)("label",{children:r.username}):Object(K.jsx)("label",{children:"Username"}),Object(K.jsx)("input",{type:"tex",name:"username",value:d.username,className:je.a.InputName,onChange:b,required:!0,placeholder:"username ..."})]})}),Object(K.jsx)("p",{className:r.name?je.a.Errores:je.a.Normal,children:Object(K.jsxs)("div",{className:je.a.Label,children:[r.name?Object(K.jsx)("label",{children:r.name}):Object(K.jsx)("label",{children:"Nombre \xa0\xa0"}),Object(K.jsx)("input",{type:"tex",name:"name",value:d.name,className:je.a.InputName,onChange:b,required:!0,placeholder:"name ..."})]})}),Object(K.jsx)("p",{className:r.second_name?je.a.Errores:je.a.Normal,children:Object(K.jsxs)("div",{className:je.a.Label,children:[r.second_name?Object(K.jsx)("label",{children:r.second_name}):Object(K.jsx)("label",{children:"S. Nombre "}),Object(K.jsx)("input",{type:"tex",name:"second_name",value:d.second_name,className:je.a.InputName,onChange:b,placeholder:"second_name ..."})]})}),Object(K.jsx)("p",{className:r.last_name?je.a.Errores:je.a.Normal,children:Object(K.jsxs)("div",{className:je.a.Label,children:[r.last_name?Object(K.jsx)("label",{children:r.last_name}):Object(K.jsx)("label",{children:"Apellido \xa0\xa0"}),Object(K.jsx)("input",{type:"tex",name:"last_name",value:d.last_name,className:je.a.InputName,onChange:b,required:!0,placeholder:"last_name ..."})]})}),Object(K.jsx)("p",{className:r.second_last_name?je.a.Errores:je.a.Normal,children:Object(K.jsxs)("div",{className:je.a.Label,children:[r.second_last_name?Object(K.jsx)("label",{children:r.second_last_name}):Object(K.jsx)("label",{children:"S. Apellido "}),Object(K.jsx)("input",{type:"tex",name:"second_last_name",value:d.second_last_name,className:je.a.InputName,onChange:b,placeholder:"second_last_name ..."})]})}),Object(K.jsx)("p",{className:r.phone?je.a.Errores:je.a.Normal,children:Object(K.jsxs)("div",{className:je.a.Label,children:[r.phone?Object(K.jsx)("label",{children:r.phone}):Object(K.jsx)("label",{children:"Telefono \xa0\xa0 "}),Object(K.jsx)("input",{type:"tex",name:"phone",value:d.phone,className:je.a.InputName,onChange:b,placeholder:"phone ..."})]})}),Object(K.jsx)("p",{className:r.email?je.a.Errores:je.a.Normal,children:Object(K.jsxs)("div",{className:je.a.Label,children:[r.email?Object(K.jsx)("label",{children:r.email}):Object(K.jsx)("label",{children:"Email \xa0\xa0 \xa0\xa0 \xa0 "}),Object(K.jsx)("input",{type:"email",name:"email",value:d.email,className:je.a.InputName,onChange:b,placeholder:"email ..."})]})}),Object(K.jsx)("p",{className:r.password?je.a.Errores:je.a.Normal,children:Object(K.jsxs)("div",{className:je.a.Label,children:[r.password?Object(K.jsx)("label",{children:r.password}):Object(K.jsx)("label",{children:"Password \xa0\xa0 \xa0\xa0 \xa0 "}),Object(K.jsx)("input",{type:"password",name:"password",value:d.password,className:je.a.InputName,onChange:b,placeholder:"password ..."})]})}),Object(K.jsx)("p",{className:je.a.Normal,children:Object(K.jsxs)("div",{className:je.a.Label,children:[Object(K.jsx)("label",{children:"Imagen de perfiln"}),Object(K.jsx)("input",{type:"file",ref:t,id:"image",accept:"image/*",onChange:function(){m(Object(u.a)(Object(u.a)({},d),{},{image:t.current.files[0]}))}})]})}),Object(K.jsx)("input",{type:"submit",value:"Registrarse",className:je.a.Button})]}),Object(K.jsx)(D.b,{to:"/",children:Object(K.jsx)("button",{className:je.a.ButtonClose,children:"X"})})]})})},de=t(10),me=t.n(de),be=function(){var e=Object(s.b)(),a=Object(T.f)(),t=Object(n.useState)({}),c=Object(F.a)(t,2),o=c[0],r=c[1],i=Object(n.useState)({email:"",password:""}),l=Object(F.a)(i,2),j=l[0],d=l[1],m=function(e){d(Object(u.a)(Object(u.a)({},j),{},Object(ne.a)({},e.target.name,e.target.value))),r(function(e){var a={};return e.email||(a.email="Campo obligatorio"),e.password||(a.password="Campo obligatorio"),a}(Object(u.a)(Object(u.a)({},j),{},Object(ne.a)({},e.target.name,e.target.value))))};return Object(K.jsx)("div",{className:me.a.login_container,children:Object(K.jsxs)("div",{className:me.a.container,children:[Object(K.jsxs)("form",{className:me.a.Form,onSubmit:function(t){t.preventDefault(),e(M.login(j)),d({email:"",password:""}),a("/")},children:[Object(K.jsx)("div",{className:me.a.Titulo,children:Object(K.jsx)("h4",{children:"Que bueno tenerte de vuelta!"})}),Object(K.jsx)("p",{className:o.email?me.a.Errores:me.a.Normal,children:Object(K.jsxs)("div",{className:me.a.Label,children:[o.email?Object(K.jsx)("label",{children:o.email}):Object(K.jsx)("label",{children:"Email \xa0\xa0 \xa0\xa0 \xa0 "}),Object(K.jsx)("input",{type:"email",name:"email",value:j.email,className:me.a.InputName,onChange:m,placeholder:"email ..."})]})}),Object(K.jsx)("p",{className:o.password?me.a.Errores:me.a.Normal,children:Object(K.jsxs)("div",{className:me.a.Label,children:[o.password?Object(K.jsx)("label",{children:o.password}):Object(K.jsx)("label",{children:"Password \xa0\xa0 \xa0\xa0 \xa0 "}),Object(K.jsx)("input",{type:"password",name:"password",value:j.password,className:me.a.InputName,onChange:m,placeholder:"password ..."})]})}),Object(K.jsx)("input",{type:"submit",value:"Iniciar Sesion",className:me.a.Button})]}),Object(K.jsx)(D.b,{to:"/",children:Object(K.jsx)("button",{className:me.a.ButtonClose,children:"X"})})]})})},pe=function(){var e=Object(s.b)(),a=Object(T.e)().pathname;return Object(n.useEffect)((function(){e(M.getAllTypes())}),[e]),Object(K.jsxs)("div",{className:ie.a.container,children:["/crear"===a&&Object(K.jsx)(re,{}),"/register"===a&&Object(K.jsx)(ue,{}),"/login"===a&&Object(K.jsx)(be,{})]})},Oe=t(21),_e=t.n(Oe),he=function(e){for(var a=e.currentPage,t=e.totalPokes,n=e.pokemonPerPage,c=e.handlePaged,o=[],r=1;r<=Math.ceil(t/n);r++)o.push(r);return Object(K.jsxs)("div",{className:_e.a.ContenedorButton,children:[a>1&&Object(K.jsx)("button",{className:_e.a.anteriorButton,onClick:c,id:"back",children:"\u2190 Anterior "}),o.map((function(e){return a===e&&Object(K.jsx)("div",{className:_e.a.numero,id:e,children:"P"+e},"P"+e)})),a>o.length?"":Object(K.jsx)("button",{className:_e.a.siguienteButton,onClick:c,id:"next",children:" Siguiente \u2192"})]})},ge=t(17),xe=t.n(ge),fe=function(e){var a=e.pokesToShow;return Object(K.jsx)(K.Fragment,{children:a.map((function(e){return Object(K.jsxs)("div",{className:xe.a.container,children:[Object(K.jsx)("div",{className:xe.a.Ima,children:e.image&&Object(K.jsx)("img",{src:e.image,alt:"imagen",className:xe.a.Img})}),Object(K.jsxs)("div",{className:xe.a.Lec,children:[Object(K.jsxs)("h2",{children:["Nombre: ",e.name]}),Object(K.jsxs)("div",{className:xe.a.containerLec,children:[Object(K.jsx)("label",{children:"Tipo:\xa0\xa0 "}),1===e.types.length?Object(K.jsxs)("h4",{children:[e.types[0],"  "]}):2===e.types.length?Object(K.jsxs)("div",{children:[Object(K.jsxs)("h4",{children:[e.types[0],"  "]}),Object(K.jsxs)("h4",{children:[e.types[1],"  "]})]}):3===e.types.length?Object(K.jsxs)("div",{children:[Object(K.jsxs)("p",{children:[e.types[0],"  "]}),Object(K.jsxs)("p",{children:[e.types[1],"  "]}),Object(K.jsxs)("p",{children:[e.types[2],"  "]})]}):""]}),Object(K.jsx)(D.b,{to:"/pokemon/".concat(e.id),children:Object(K.jsx)("button",{className:xe.a.CardButton,children:"Visitar"})})]})]},e.id)}))})},ve={type:function(e,a){return a.length?a.filter((function(a){return a.types.includes(e)})):[]},order:function(e,a){var t=[];switch(e){case"a-z":return a.map((function(e){return e.name})).sort().forEach((function(e){a.forEach((function(a){e===a.name&&t.push(a)}))})),t;case"z-a":return a.map((function(e){return e.name})).sort().reverse().forEach((function(e){a.forEach((function(a){e===a.name&&t.push(a)}))})),t;case"fuerza+":return a.map((function(e){return e.attack})).sort((function(e,a){return a-e})).forEach((function(e){a.forEach((function(a){a.attack===e&&t.push(a)}))})),t=t.filter((function(e,a){return t.indexOf(e)===a}));case"fuerza-":return a.map((function(e){return e.attack})).sort((function(e,a){return e-a})).forEach((function(e){a.forEach((function(a){a.attack===e&&t.push(a)}))})),t=t.filter((function(e,a){return t.indexOf(e)===a}));default:return a}}},Ne=t.p+"static/media/noHaypokImg.6f19053f.gif",ye=t(28),ke=t.n(ye),Ce=function(e){var a=e.pokemons,t=Object(s.c)((function(e){return e.type})),c=Object(s.c)((function(e){return e.order})),o=a;t&&(o=ve.type(t,o)),c&&(o=ve.order(c,o));var r=Object(n.useState)(1),i=Object(F.a)(r,2),l=i[0],j=i[1],u=Object(n.useState)(12),d=Object(F.a)(u,1)[0],m=[];return o.length&&(m=o.slice((l-1)*d,l*d)),Object(K.jsxs)(K.Fragment,{children:[m.length?Object(K.jsx)("div",{className:ke.a.container,children:Object(K.jsx)(fe,{pokesToShow:m})}):Object(K.jsxs)("div",{className:ke.a.containerImg,children:[Object(K.jsx)("div",{children:Object(K.jsx)("p",{children:"No hay nada para mostrar"})}),Object(K.jsx)("img",{src:Ne,alt:"imagen",className:ke.a.containerImg2})]}),Object(K.jsx)(he,{currentPage:l,totalPokes:o.length,pokemonPerPage:d,handlePaged:function(e){"back"===e.target.id?l>=1&&1!==l&&j(l-1):"next"===e.target.id?m.length>=9&&j(l+1):j(Number(e.target.value))}})]})},Le=t(18),Pe=t.n(Le),Ie=function(){for(var e=Object(s.b)(),a=Object(n.useState)(""),t=Object(F.a)(a,2),c=t[0],o=t[1],r=Object(s.c)((function(e){return e.allPokemones})),i=[],l=0;l<r.length;l++)Array.prototype.push.apply(i,r[l].types);var j=i.filter((function(e,a){return i.indexOf(e)===a}));return Object(K.jsxs)("div",{className:Pe.a.container,children:[Object(K.jsx)("form",{onSubmit:function(a){a.preventDefault(),e(M.getPokemonName(c)),o("")},children:Object(K.jsxs)("div",{children:[Object(K.jsx)("input",{type:"text",id:"name",className:Pe.a.Buscar,value:c,onChange:function(e){return o(e.target.value)},placeholder:"Ingresa un nombre exacto..."}),Object(K.jsx)("input",{type:"submit",value:"Buscar",className:Pe.a.Buscar1})]})}),Object(K.jsx)("div",{children:Object(K.jsxs)("select",{id:"created",className:Pe.a.Select,onChange:function(a){return e(M.getPokemonesBd(a.target.value))},children:[Object(K.jsx)("option",{value:"",children:"Filtar por..."}),Object(K.jsx)("option",{value:"false",children:"La Api"}),Object(K.jsx)("option",{value:"true",children:"Creados"})]})}),Object(K.jsx)("div",{children:Object(K.jsxs)("select",{name:"type",className:Pe.a.Select,onChange:function(a){return e(M.byType(a.target.value))},children:[Object(K.jsx)("option",{value:"",children:"Filtar por tipo"}),null===j||void 0===j?void 0:j.map((function(e){return Object(K.jsx)("option",{value:e,children:e},e)}))]})}),Object(K.jsx)("div",{children:Object(K.jsxs)("select",{id:"ordenar",className:Pe.a.Select,onChange:function(a){return e(M.byOrder(a.target.value))},children:[Object(K.jsx)("option",{value:"",children:"Ordenar..."}),Object(K.jsxs)("option",{value:"a-z",children:["A ","=>"," Z"]}),Object(K.jsxs)("option",{value:"z-a",children:["Z ","=>"," A"]}),Object(K.jsx)("option",{value:"fuerza+",children:"Fuerza + "}),Object(K.jsx)("option",{value:"fuerza-",children:"Fuerza - "})]})})]})},Se=t(44),Ee=t.n(Se),Be=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.userLogin})),t=Object(s.c)((function(e){return e.pokeFavorites})),c=Object(s.c)((function(e){return e.loading}));return Object(n.useEffect)((function(){e(M.getPokesUser(a.user.id))}),[e,a.user.id]),Object(K.jsxs)("div",{className:Ee.a.container,children:[Object(K.jsx)(Ie,{}),c&&Object(K.jsx)(Z,{}),Object(K.jsx)(Ce,{pokemons:t})]})},De=t.p+"static/media/Boton.b089c295.gif",Te=t(31),Fe=t.n(Te),we=function(){return Object(K.jsx)("div",{className:Fe.a.container,children:Object(K.jsxs)("div",{className:Fe.a.containerLogo,children:[Object(K.jsx)("h2",{children:"Ingresar"}),Object(K.jsx)(D.b,{to:"/pokemones",children:Object(K.jsx)("img",{src:De,alt:"entrar"})})]})})},Ae=t(45),Re=t.n(Ae),ze=function(){var e=Object(s.c)((function(e){return e.allPokemones})),a=Object(s.b)(),t=Object(s.c)((function(e){return e.loading}));return Object(n.useEffect)((function(){a(M.getAllPokemones()),a(M.getAllTypes())}),[a]),Object(K.jsxs)("div",{className:Re.a.container,children:[Object(K.jsx)(Ie,{}),t&&Object(K.jsx)(Z,{}),!t&&Object(K.jsx)(Ce,{pokemons:e})]})},Me=function(){return Object(K.jsx)(c.a.Fragment,{children:Object(K.jsxs)(D.a,{children:[Object(K.jsx)(ae,{}),Object(K.jsxs)(T.c,{children:[Object(K.jsx)(T.a,{path:"/",element:Object(K.jsx)(we,{})}),Object(K.jsx)(T.a,{path:"/register",element:Object(K.jsx)(pe,{})}),Object(K.jsx)(T.a,{path:"/login",element:Object(K.jsx)(pe,{})}),Object(K.jsx)(T.a,{path:"/team",element:Object(K.jsx)(Be,{})}),Object(K.jsx)(T.a,{path:"/pokemones",element:Object(K.jsx)(ze,{})}),Object(K.jsx)(T.a,{path:"/pokemon/:id",element:Object(K.jsx)(J,{})}),Object(K.jsx)(T.a,{path:"/pokemon/name",element:Object(K.jsx)(J,{})}),Object(K.jsx)(T.a,{path:"/crear",element:Object(K.jsx)(pe,{})})]})]})})};r.a.render(Object(K.jsx)(s.a,{store:E,children:Object(K.jsx)(c.a.StrictMode,{children:Object(K.jsx)(Me,{})})}),document.getElementById("root")),B()}},[[77,1,2]]]);
//# sourceMappingURL=main.42fd6691.chunk.js.map