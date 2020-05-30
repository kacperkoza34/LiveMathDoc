(this["webpackJsonplive-math-doc"]=this["webpackJsonplive-math-doc"]||[]).push([[0],{11:function(e,t,n){e.exports={App:"App_App__2LooC",mainWrapper:"App_mainWrapper__1BDRR",contentWrapper:"App_contentWrapper__lJYva"}},12:function(e,t,n){e.exports={root:"Article_root__xiRCf",article:"Article_article__2Ar1G"}},22:function(e,t,n){e.exports={navLinks:"Nav_navLinks__3fi1M"}},232:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(21),r=n.n(i),s=(n(33),n(11)),c=n.n(s),l=n(10),u=n(2),d=n(7),p=n(5),m=n.n(p),h=function(e){var t=e.children,n=Object(a.useState)(!1),i=Object(d.a)(n,2),r=i[0],s=i[1];return o.a.createElement("div",{className:m.a.aside},o.a.createElement("div",{className:r?[m.a.root,m.a.active].join(" "):m.a.root},o.a.createElement("div",{className:m.a.asideWrapper},o.a.createElement("div",{id:"list",className:m.a.list},t),o.a.createElement("div",{onClick:function(){return s(!r)},className:r?[m.a.control,m.a.controlActive].join(" "):m.a.control},o.a.createElement("span",null,">")))))},w=n(22),f=n.n(w),k=n(23),y=n(25),z=[{title:"LiveMath",link:"/1",dev:!1},{title:"Zadania otwarte",link:"/2",dev:!1},{title:"Zadanie zamkni\u0119te",link:"/3",dev:!1},{title:"Zadanie prawda/fa\u0142sz",link:"/4",dev:!1},{title:"Sprawdzanie zada\u0144",link:"/5",dev:!1},{title:" Tech Stack",link:"/6",dev:!0},{title:" Redux-Axios",link:"/7",dev:!0},{title:" Authorization",link:"/8",dev:!0},{title:" Security",link:"/9",dev:!0},{title:" RWD",link:"/10",dev:!0},{title:" Email verification",link:"/11",dev:!0}];var v=function(){return o.a.createElement("nav",null,z.map((function(e){var t=e.title,n=e.link,a=e.dev;return o.a.createElement(l.b,{key:n,className:f.a.navLinks,activeStyle:{background:"rgba(0, 0, 0, 0.5)"},to:n},a&&o.a.createElement(k.a,{icon:y.a}),t)})))},g={liveMath:[{title:"LiveMath",text:"LiveMath to aplikacja umo\u017cliwiaj\u0105ca zdaln\u0105 nauk\u0119 matemtyki"},{subtitle:"Jak to dzia\u0142a?",text:"Aplikacja pozwala na tworzenie klas do kt\xf3rych mo\u017cemy zaprosi\u0107 uczni\xf3w. Po stworzeniu klasy mamy mo\u017cliwo\u015b\u0107 dodawania do niej zada\u0144. Dost\u0119pne s\u0105 trzy rodzaje - zadania otwart\u0119, zadania zamkni\u0119te, zadania prawda/fa\u0142sz. Po dodaniu zada\u0144 mamy mo\u017cliwo\u015b\u0107 \u015bledzenia post\u0119p\xf3w u uczni\xf3w dzi\u0119ki prostej punktacji",photo:{src:"photo/1.png",minusX:10,plusX:10,fullView:!0}},{subtitle:"Widok ucznia",photo:{src:"photo/22.png",minusX:10,plusX:10,fullView:!0}}],openTask:[{title:"Zadanie otwarte",text:"Dodawanie zada\u0144 otwartych to jedna z najciekawszych funkcjonalnos\u0107i. G\u0142\xf3wnym za\u0142o\u017ceniem przy tworzeniu tej funkcji by\u0142o umo\u017cliwienie tworzenia zadania z wieloma zestawami danych. Efekt jest taki \u017ce w momencie dodania zadnia do klasy ka\u017cdy ucze\u0144 otrzyma zadnaie z losowym zestawem danych ",photo:{src:"photo/2.png",minusX:10,plusX:10,fullView:!0}},{subtitle:"Przyk\u0142ad dodawania zadania",text:"Ponizsze zdj\u0119cie obrazuje jak wygl\u0105da dodawanie zadania",photo:{src:"photo/3.png",minusX:10,plusX:10,fullView:!0}},{subtitle:"Przyk\u0142ad gotowego zadania",photo:{src:"photo/4.png",minusX:10,plusX:10,fullView:!0}}],closeTask:[{title:"Zadanie zamkni\u0119te",text:"Tworzenie nowych zada\u0144 zamkni\u0119tych przypomina funkcjonalno\u015b\u0107 kt\xf3r\u0105 oferuje Google Forms",photo:{src:"photo/5.png",minusX:10,plusX:10,fullView:!0}},{subtitle:"Przyk\u0142ad gotowego zadania",photo:{src:"photo/6.png",minusX:10,plusX:10,fullView:!0}}],booleanTask:[{title:"Zadanie prawda/fa\u0142sz",text:"Zadania prawda/fa\u0142sz to najprostsza forma sprawdzenia wiedzy",photo:{src:"photo/7.png",minusX:10,plusX:10,fullView:!0}},{subtitle:"Przyk\u0142ad gotowego zadania",photo:{src:"photo/8.png",minusX:10,plusX:10,fullView:!0}}],checkTask:[{title:"Sprawdzanie zada\u0144",text:"Je\u017celi na li\u015bcie uczni\xf3w pojawi si\u0119 znak zapytania oznacza \u017ce dany ucze\u0144 posiada na swoim koncie zadnaie przes\u0142ane do sprawdzenia",photo:{src:"photo/1.png",minusX:10,plusX:10,fullView:!0}},{subtitle:"Jak mo\u017cemy sprawdzi\u0107 zadanie?",text:"Je\u017celi wejdziemy w zadanie ze statusem 'Do sprawdzenia' uka\u017ce nam si\u0119 panel sprawdzaj\u0105cy, wy\u015bwietla on odpowiedzi ucznia i poprawne odpowiedzi. Mo\u017cemy napisa\u0107 uczniowi komentarz kt\xf3ry do\u0142\u0105czy do dyskusji i zmieni\u0107 status na 'Do rozwi\u0105zania'",photo:{src:"photo/9.png",minusX:10,plusX:10,fullView:!0}}],mern:[{title:"Tech stack"},{photo:{src:"photo/10.png",minusX:35,plusX:35}},{photo:{src:"photo/11.png",minusX:35,plusX:35}},{photo:{src:"photo/12.png",minusX:35,plusX:35}},{photo:{src:"photo/13.png",minusX:35,plusX:35}}],reduxAxios:[{title:"Redux-Axios",text:"In this project you can see implementation of redux middleware with axios ",code:"const apiRequest = ({ dispatch }) => (next) => (action) => { \n  next(action);\n  if (action.type === API_REQUEST) {\n    const { method, url, onSucces, onError, body, config } = action.meta; \n    Axios({\n      method: method,\n      url: url,\n      data: body,\n      config: config,\n      baseURL: PORT,\n    })\n      .then(({ data }) => {\n        dispatch(onSucces(data));\n      })\n      .catch(({ response }) => {\n        dispatch(onError(response));\n      });\n   }\n};\n"},{subtitle:"Easy to watch all actions and requests",photo:{src:"photo/14.png",minusX:10,plusX:10,fullView:!0}}],authorization:[{title:"Authorization",text:"If email and password are correct server return to client authorization token.",code:" const payload = {\n    user: {\n      id: user.id,\n      accountType,\n    },\n };\n\n jwt.sign(\n   payload,\n   config.get('jwtSecret'),\n   { expiresIn: 360000 },\n   (err, token) => {\n     if (err) throw err;\n     res.json({ token, accountType });\n   }\n );"},{text:"Token is stored in redux state and in localStorage",photo:{src:"photo/15.png",minusX:10,plusX:10,fullView:!0}},{text:"Token is also used as default header",code:"const setAuthToken = token => {\n  if(token) {\n    axios.defaults.headers.common['x-auth-token'] = token;\n  } else {\n    delete axios.defaults.headers.common['x-auth-token'];\n  }\n};\n"},{text:"On server side token is checking by middleware",code:"module.exports = async function (req, res, next) {\n  const token = req.header('x-auth-token');\n\n  if (!token) {\n    return res\n      .status(401)\n      .json({ err: [{ msg: 'No token, authorization denied' }] });\n  }\n\n  try {\n    const decoded = jwt.verify(token, config.get('jwtSecret'));\n    req.user = decoded.user;\n    next();\n  } catch (err) {\n    console.error(err.message);\n    res.status(401).json({ err: [{ msg: 'Token is not valid' }] });\n  }\n};\n"}],security:[{title:"Security"},{subtitle:"Requests are secured by middleware"},{photo:{src:"photo/20.png",minusX:25,plusX:25,fullView:!1}},{subtitle:"Some requests are available only if your account have permission:"},{code:"module.exports = async function (req, res, next) {\n  const token = req.header('x-auth-token');\n\n  if (!token) {\n    return res\n      .status(401)\n      .json({ err: [{ msg: 'No token, authorization denied' }] });\n  }\n\n  try {\n    const decoded = jwt.verify(token, config.get('jwtSecret'));\n    req.user = decoded.user;\n    let isStudent = await Student.findOne({ _id: req.user.id });\n    if (isStudent == null)\n      res.status(401).json({ err: [{ msg: 'Token is not valid' }] });\n    next();\n  } catch (err) {\n    res.status(401).json({ err: [{ msg: 'Token is not valid' }] });\n  }\n};\n"},{subtitle:"Express validator",text:"Express validator as basic middleware",code:"router.post(\n  '/',\n  sanitize,\n  [\n    check('name', 'Imi\u0119 jest wymagane').not().isEmpty(),\n    check('email', 'Email jest wymagany').isEmail(),\n    check('password', 'Has\u0142o powinno zwiera\u0107 wi\u0119cej ni\u017c 6 liter').isLength({\n      min: 6,\n    }),\n  ],\n  async (req, res) => {\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n      return res.status(400).json({ err: errors.array() });\n    }\n"},{subtitle:"Sanitize middleware",text:"Request are protected by mongo-sanitize and sanitize-html",code:"if (req.body.email) {\n  req.body.email = sanitize(req.body.email);\n}\n// ...\n\n\nif (req.body.groups) {\n  req.body.groups = req.body.groups.map((item) => {\n    for (let i in item) {\n      item[i] = sanitizeHtml(item[i]);\n    }\n    return item;\n  });\n}\n// ...\n"},{subtitle:"Helmet",code:"const express = require('express')\nconst helmet = require('helmet')\n\nconst app = express()\n\napp.use(helmet())\n"}],rwd:[{title:"See how it looks like on mobile device "},{photo:{src:"photo/21.png",minusX:35,plusX:35,fullView:!1}},{photo:{src:"photo/16.png",minusX:35,plusX:35,fullView:!1}},{photo:{src:"photo/17.png",minusX:35,plusX:35,fullView:!1}},{photo:{src:"photo/18.png",minusX:35,plusX:35,fullView:!1}}],emailVerification:[{title:"Email verification "},{text:"At this moment this functionality works only if you use gamil, otherwise verification is not required",link:{title:"Click to see ",src:"https://www.livemath.pl/register/5ec16ef14650950017e401cb"}},{text:"After registration (if you use gmail) you are suppose to confirm your email"},{photo:{src:"photo/19.png",minusX:25,plusX:25,fullView:!0}},{subtitle:"Some requests are available only if your account is verified"},{code:"module.exports = async function (req, res, next) {\n  try {\n    let teacher = await Teacher.findOne({ _id: req.user.id });\n    if (!teacher.verified)\n      return res.status(401).json({\n        err: [{ msg: 'Konto nie zweryfikowane, potwierd\u017a link w emailu' }],\n      });\n    next();\n  } catch (err) {\n    res.status(401).json({ err: [{ msg: 'Token is not valid' }] });\n  }\n};\n"},{subtitle:"But how it works? "},{code:"const tokenData = {\n  user: {\n    id: user.id,\n  },\n};\n\nlet verifyToken = await jwt.sign(\n    tokenData,\n    config.get('verifyJwtSecret'),\n    {\n      expiresIn: 360000,\n    }\n  );\n\n  const mailgun = require('mailgun-js')({\n    apiKey: config.get('api_key_mail_gun'),\n    domain: config.get('mail_gun_domain'),\n    host: config.get('host'),\n  });\n\n  const data = {\n    from: ''LiveMath' <no-reply@livemath.com>', // sender address\n    to: email, // list of receivers\n    subject: 'Potwierd\u017a wiadomo\u015b\u0107 \u2714', // Subject line\n    html: `<!DOCTYPE html>\n  <html lang='en' dir='ltr'>\n  <head>\n    <meta charset='utf-8'>\n    <title></title>\n  </head>  \n  <body>\n   \n    <h4>Witaj w LiveMath</h4>\n    <p>Kliknij w link aby potwierdzi\u0107 email</p>\n    <a href='${config.get(\n      domain\n    )}/verify/${verifyToken}' target='_blank'> Potwierd\u017a</a>  <====== here is token\n  </body>\n  </html>`,\n  };\n\n  await mailgun.messages().send(data);\n"},{subtitle:"If you click on this link you are redirected to LiveMath"},{code:"const VerifyEmail = ({ match, verifyEmail, auth: { isFetching, errors } }) => {\n  useEffect(() => {\n    verifyEmail(match.params.token);\n  }, [verifyEmail, match]);\n  return (\n    <div className={styles.root}>\n      {isFetching ? (\n        <BeatLoader size={30} />\n      ) : (\n        <div className={styles.wrapper}>\n          {errors ? (\n            <Errors errors={errors.data.err} />\n          ) : (\n            <>\n              <h2>Zweryfikowano</h2>\n              <Link to={'/login'}>Przejd\u017a do logowania</Link>\n            </>\n          )}\n        </div>\n      )}\n    </div>\n  );\n};\n"},{subtitle:"Below you can see endpoind responsible for verification"},{code:"router.post('/:token', sanitize, async (req, res) => {\n  try {\n    const decoded = jwt.verify(req.params.token, config.get('verifyJwtSecret'));\n    let user = await Teacher.findOneAndUpdate(\n      { _id: decoded.user.id },\n      { verified: true }\n    );\n    res.json(decoded);\n  } catch (err) {\n    console.error(err.message);\n    res.status(500).send({ err: [{ msg: 'B\u0142edny link' }] });\n  }\n});\n"}]},E=n(12),x=n.n(E),j=n(8),_=n.n(j),b=function(e){var t=e.photo,n=e.i,i=e.content,r=Object(a.useState)(i.map((function(){return!1}))),s=Object(d.a)(r,2),c=s[0],l=s[1],u=Object(a.useState)(!1),p=Object(d.a)(u,2),m=p[0],h=p[1];return Object(a.useEffect)((function(){window.innerWidth<768?h(!0):h(!1),window.addEventListener("resize",(function(){window.innerWidth<768?h(!0):h(!1)}))}),[]),o.a.createElement("div",{className:_.a.root},t&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:m?{padding:0}:{padding:"0 ".concat(t.plusX,"% 0 ").concat(t.minusX,"%")},className:_.a.photo},o.a.createElement("img",{onClick:function(){return t.fullView&&!m&&l(c.map((function(e,t){return t===n?!e:e})))},style:m||!t.fullView?{cursor:"auto"}:{},src:t.src,alt:"ups"})),!m&&t.fullView?o.a.createElement(o.a.Fragment,null," ",c[n]&&o.a.createElement("div",{className:_.a.wrapper},o.a.createElement("div",{className:_.a.photoFullView},o.a.createElement("img",{onClick:function(){return l(c.map((function(e,t){return t===n?!e:e})))},src:t.src,alt:"ups"})))):""))},X=n(236),A=n(235),q=function(e){var t=e.content;return o.a.createElement(X.a,{language:"javascript",style:A.a},t)},T=function(e){var t=e.content;return o.a.createElement("div",{className:x.a.root},t.map((function(e,n){var a=e.title,i=e.text,r=e.photo,s=e.subtitle,c=e.code,l=e.link;return o.a.createElement("div",{key:n,className:x.a.article},a&&o.a.createElement("h1",null,a),s&&o.a.createElement("h3",null,s),i&&o.a.createElement("p",null,i),l&&o.a.createElement("a",{href:"LiveMathDoc/"+l.src,target:"_blank"},l.title),c&&o.a.createElement("div",{className:x.a.code},o.a.createElement(q,{content:c})," "),r&&o.a.createElement(b,{photo:r,i:n,content:t}))})))};var V=function(){return o.a.createElement("div",{className:c.a.App},o.a.createElement("div",{className:c.a.mainWrapper},o.a.createElement(l.a,{basename:""},o.a.createElement(h,null,o.a.createElement(v,null)),o.a.createElement("div",{className:c.a.contentWrapper},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",component:function(){return o.a.createElement(T,{content:g.liveMath})}}),o.a.createElement(u.a,{exact:!0,path:"/1",component:function(){return o.a.createElement(T,{content:g.liveMath})}}),o.a.createElement(u.a,{exact:!0,path:"/2",component:function(){return o.a.createElement(T,{content:g.openTask})}}),o.a.createElement(u.a,{exact:!0,path:"/3",component:function(){return o.a.createElement(T,{content:g.closeTask})}}),o.a.createElement(u.a,{exact:!0,path:"/4",component:function(){return o.a.createElement(T,{content:g.booleanTask})}}),o.a.createElement(u.a,{exact:!0,path:"/5",component:function(){return o.a.createElement(T,{content:g.checkTask})}}),o.a.createElement(u.a,{exact:!0,path:"/6",component:function(){return o.a.createElement(T,{content:g.mern})}}),o.a.createElement(u.a,{exact:!0,path:"/7",component:function(){return o.a.createElement(T,{content:g.reduxAxios})}}),o.a.createElement(u.a,{exact:!0,path:"/8",component:function(){return o.a.createElement(T,{content:g.authorization})}}),o.a.createElement(u.a,{exact:!0,path:"/9",component:function(){return o.a.createElement(T,{content:g.security})}}),o.a.createElement(u.a,{exact:!0,path:"/10",component:function(){return o.a.createElement(T,{content:g.rwd})}}),o.a.createElement(u.a,{exact:!0,path:"/11",component:function(){return o.a.createElement(T,{content:g.emailVerification})}}),o.a.createElement(u.a,{exact:!0,path:"/*",component:function(){return o.a.createElement(T,{content:g.liveMath})}}))))))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(V,null)),document.getElementById("root"))},28:function(e,t,n){e.exports=n(232)},33:function(e,t,n){},5:function(e,t,n){e.exports={aside:"Aside_aside__1fpZ9",root:"Aside_root__2TGqt",asideWrapper:"Aside_asideWrapper__2Hsyo",list:"Aside_list__3Uk34",control:"Aside_control__1AOWs",controlActive:"Aside_controlActive__1vT6h",active:"Aside_active__1lhoa"}},8:function(e,t,n){e.exports={root:"Photo_root__vM7RD",photo:"Photo_photo__27B2w",photoFullView:"Photo_photoFullView__GK-VB",wrapper:"Photo_wrapper__3jAaE"}}},[[28,1,2]]]);
//# sourceMappingURL=main.a868c08a.chunk.js.map