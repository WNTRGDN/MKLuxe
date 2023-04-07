"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-bootstrap/Container"
const Container_namespaceObject = require("react-bootstrap/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
;// CONCATENATED MODULE: ./components/navigation/index.tsx






const Navigation = (navigation)=>{
    console.log(navigation.children);
    return /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
        bg: "light",
        expand: "lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Brand, {
                    href: "#home",
                    children: "React-Bootstrap"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Collapse, {
                    id: "basic-navbar-nav",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                        className: "me-auto",
                        children: [
                            navigation.children.map((child, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `${encodeURIComponent(child.slug)}`,
                                    children: child.name
                                }, index);
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                href: "#home",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                href: "#link",
                                children: "Link"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const navigation = (Navigation);

;// CONCATENATED MODULE: ./components/index.ts



;// CONCATENATED MODULE: external "react-bootstrap"
const external_react_bootstrap_namespaceObject = require("react-bootstrap");
;// CONCATENATED MODULE: ./structures/main.tsx





const Main = (main)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navigation, {
                ...main
            }),
            main.blocks.map((block, index)=>/*#__PURE__*/ jsx_runtime_.jsx(structures_block, {
                    ...block
                }, index))
        ]
    });
};
/* harmony default export */ const main = (Main);

;// CONCATENATED MODULE: ./controls/alert/index.tsx



const Alert = (alert)=>{
    const [show, setShow] = (0,external_react_.useState)(true);
    if (show) {
        return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Alert, {
            variant: alert.variant.toLowerCase(),
            onClose: ()=>setShow(false),
            dismissible: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                dangerouslySetInnerHTML: {
                    __html: alert.content
                }
            })
        });
    }
    return null;
};
/* harmony default export */ const controls_alert = (Alert);

;// CONCATENATED MODULE: ./controls/carousel/index.tsx



const Carousel = (carousel)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Carousel, {
        fade: true,
        children: carousel.slides.map((slide, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Carousel.Item, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "d-block w-100",
                        src: slide.image
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Carousel.Caption, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: slide.label
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: slide.content
                            })
                        ]
                    })
                ]
            }, index);
        })
    });
};
/* harmony default export */ const carousel = (Carousel);

;// CONCATENATED MODULE: ./controls/index.ts




;// CONCATENATED MODULE: ./structures/block.tsx




var controls = {
    alert: controls_alert,
    carousel: carousel
};
const Block = (block)=>{
    const ControlComponent = controls[block.type];
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Row, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Col, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(ControlComponent, {
                ...block
            })
        })
    });
};
/* harmony default export */ const structures_block = (Block);

;// CONCATENATED MODULE: ./structures/index.ts




;// CONCATENATED MODULE: ./pages/index.tsx



function Index({ website  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Home | " + website.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: website.keywords
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: website.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "Home | " + website.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: process.env.SITE_URL
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://www.unrefugees.org.au/media/tqohcgsg/our-work-er-syria-unhcr-staff-and-child-on-lesvos-big.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "site_name",
                        property: "og:site_name",
                        content: website.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "fb:admins",
                        property: "fb:admins",
                        content: "100000426992447"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "UNrefugees"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site:id",
                        content: "UNrefugees"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: "Home | " + website.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: website.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: "https://www.unrefugees.org.au/media/pr1duw4w/unhcr-twitter-card-png.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: process.env.SITE_URL
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(main, {
                ...website
            })
        ]
    });
}
async function getServerSideProps() {
    var headers = new Headers();
    headers.append("WntrID", String(process.env.WNTR_ID));
    headers.append("ApiKey", String(process.env.API_KEY));
    const data = await fetch(process.env.API_HOST + "/page/get?id=" + process.env.SITE_ID, {
        method: "GET",
        headers: headers,
        redirect: "follow"
    });
    const website = await data.json();
    return {
        props: {
            website
        }
    };
}


/***/ }),

/***/ 280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(226)));
module.exports = __webpack_exports__;

})();