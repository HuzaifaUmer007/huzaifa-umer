exports.id = 66;
exports.ids = [66];
exports.modules = {

/***/ 7310:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__c9Enh",
	"container": "Footer_container__M8aBj",
	"content": "Footer_content__q01vR",
	"nav": "Footer_nav__DRzBL",
	"link": "Footer_link__QqHwT",
	"divider": "Footer_divider__xSb4R"
};


/***/ }),

/***/ 1059:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__mJzyZ",
	"logo": "Header_logo__XvlEU",
	"nav": "Header_nav__La52y",
	"active": "Header_active__jj25h",
	"menuButton": "Header_menuButton__TKqM6"
};


/***/ }),

/***/ 4275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cancel.25908147.svg","height":512,"width":512});

/***/ }),

/***/ 8212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Address = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "open-sans-font custom-span-contact position-relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fa fa-map position-absolute"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "d-block",
                        children: "Address Point"
                    }),
                    " 32A Gulfishan Colony, Gulshan-e-ravi Lahore, Pakistan."
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "open-sans-font custom-span-contact position-relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fa fa-envelope-open position-absolute"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "d-block",
                        children: "mail me"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "mailto:steve@mail.com",
                        children: "huzaifa@nexoracodes.com"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "open-sans-font custom-span-contact position-relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fa fa-phone-square position-absolute"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "d-block",
                        children: "call me"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "Tel: +216 21 184 010",
                        children: "+3090444094"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Address);


/***/ }),

/***/ 6047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Contact = ()=>{
    const [isSending, setIsSending] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (isSending) return; // prevent double submit
        const formEl = e.currentTarget; // cache before async
        const fd = new FormData(formEl);
        const payload = {
            name: fd.get("name") || "",
            email: fd.get("user_email") || "",
            subject: fd.get("subject") || "",
            message: fd.get("message") || ""
        };
        try {
            setIsSending(true);
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                const data = await res.json().catch(()=>({}));
                throw new Error(data?.error || `Request failed with ${res.status}`);
            }
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success("Message sent successfully!");
            if (formEl && typeof formEl.reset === "function") formEl.reset();
        } catch (err) {
            console.error("Contact send failed:", err);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Failed to send message. Please try again later.");
        } finally{
            setIsSending(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            id: "myForm",
            className: "contactform",
            onSubmit: handleSubmit,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 col-md-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "name",
                                placeholder: "YOUR NAME",
                                required: true
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 col-md-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                name: "user_email",
                                placeholder: "YOUR EMAIL",
                                required: true
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 col-md-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "subject",
                                placeholder: "YOUR SUBJECT",
                                required: true
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                name: "message",
                                placeholder: "YOUR MESSAGE",
                                required: true
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            type: "submit",
                            className: "button",
                            disabled: isSending,
                            "aria-busy": isSending,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "button-text",
                                    children: isSending ? "Sending..." : "Send Message"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `button-icon fa ${isSending ? "fa-spinner fa-spin" : "fa-send"}`
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const SEO = ({ pageTitle  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `Huzaifa Umer`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    httpEquiv: "x-ua-compatible",
                    content: "ie=edge"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: "Generated by create next app"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "robots",
                    content: "noindex, follow"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


/***/ }),

/***/ 9830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SocialShare = [
    {
        iconName: "fa fa-facebook",
        link: "https://www.facebook.com/"
    },
    {
        iconName: "fa fa-twitter",
        link: "https://twitter.com/"
    },
    {
        iconName: "fa fa-youtube",
        link: "https://www.youtube.com/"
    },
    {
        iconName: "fa fa-dribbble",
        link: "https://dribbble.com/"
    }
];
const Social = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "social list-unstyled pt-1 mb-5",
        children: SocialShare.map((val, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: val.link,
                    target: "_blank",
                    rel: "noreferrer",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: val.iconName
                    })
                })
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Social);


/***/ }),

/***/ 9615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/about/Achievements.jsx


const achievementsContent = [
    {
        title: "2",
        subTitle1: "years of",
        subTitle2: "experience"
    },
    {
        title: "10",
        subTitle1: "completed",
        subTitle2: "projects"
    }
];
const Achievements = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row",
        children: achievementsContent.map((val, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "box-stats with-margin",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "poppins-font position-relative",
                            children: val.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "open-sans-font m-0 position-relative text-uppercase",
                            children: [
                                val.subTitle1,
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "d-block",
                                    children: val.subTitle2
                                })
                            ]
                        })
                    ]
                })
            }, i))
    });
};
/* harmony default export */ const about_Achievements = (Achievements);

;// CONCATENATED MODULE: ./src/components/about/Education.jsx


const educationContent = [
    {
        year: "2022 - 2026",
        degree: "Bachelor of Computer Science",
        institute: "University of the Punjab",
        details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`
    },
    {
        year: "2019 - 2021",
        degree: "Intermediate",
        institute: "Reader Group of Colleges",
        details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`
    },
    {
        year: "2017 - 2019",
        degree: "Matriculation ",
        institute: "Govt. higher secondary school",
        details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`
    }
];
const Education = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: educationContent.map((val, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-briefcase"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "time open-sans-font text-uppercase",
                        children: val.year
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        className: "poppins-font text-uppercase",
                        children: [
                            val.degree,
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "place open-sans-font",
                                children: val.institute
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "open-sans-font",
                        children: val.details
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const about_Education = (Education);

;// CONCATENATED MODULE: ./src/components/about/Experience.jsx


const experienceContent = [
    {
        year: "May, 2025 - Present",
        position: "Frontend Web Developer",
        compnayName: "IT Genics",
        details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`
    },
    {
        year: "Nov, 2024 - Feb, 2025",
        position: "React & Next JS Developer (Intern)",
        compnayName: "Web Craft Limited solutions",
        details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`
    },
    {
        year: "Sep, 2024 - Nov, 2024",
        position: "MERN Stack Developer",
        compnayName: "Developers Hub Corporation",
        details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`
    }
];
const Experience = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: experienceContent.map((val, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-briefcase"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "time open-sans-font text-uppercase",
                        children: val.year
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        className: "poppins-font text-uppercase",
                        children: [
                            val.position,
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "place open-sans-font",
                                children: val.compnayName
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "open-sans-font",
                        children: val.details
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const about_Experience = (Experience);

;// CONCATENATED MODULE: ./src/components/about/PersonalInfo.jsx


const personalInfoContent = [
    {
        meta: "first name",
        metaInfo: "Huzaifa",
        hasColor: ""
    },
    {
        meta: "last name",
        metaInfo: "Umer",
        hasColor: ""
    },
    {
        meta: "Age",
        metaInfo: "22 Years",
        hasColor: ""
    },
    {
        meta: "Nationality",
        metaInfo: "Pakistan",
        hasColor: ""
    },
    {
        meta: "Freelance",
        metaInfo: "Available",
        hasColor: "green"
    },
    {
        meta: "Address",
        metaInfo: "Tunis",
        hasColor: ""
    },
    {
        meta: "phone",
        metaInfo: "+923090444094",
        hasColor: ""
    },
    {
        meta: "Email",
        metaInfo: "khichihuzaifa@gmail.com",
        hasColor: ""
    },
    {
        meta: "langages",
        metaInfo: "English, Urdu, Hindi",
        hasColor: ""
    }
];
const PersonalInfo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "about-list list-unstyled open-sans-font",
        children: personalInfoContent.map((val, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "title",
                        children: [
                            val.meta,
                            ": "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`,
                        children: val.metaInfo
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const about_PersonalInfo = (PersonalInfo);

;// CONCATENATED MODULE: ./src/components/about/Skills.jsx


const skillsContent = [
    {
        skillClass: "p95",
        skillPercent: "95",
        skillName: "HTML"
    },
    {
        skillClass: "p90",
        skillPercent: "90",
        skillName: "CSS"
    },
    {
        skillClass: "p85",
        skillPercent: "85",
        skillName: "Bootstrap"
    },
    {
        skillClass: "p95",
        skillPercent: "95",
        skillName: "Tailwind CSS"
    },
    {
        skillClass: "p80",
        skillPercent: "80",
        skillName: "JAVASCRIPT"
    },
    {
        skillClass: "p90",
        skillPercent: "90",
        skillName: "REACT"
    },
    {
        skillClass: "p90",
        skillPercent: "90",
        skillName: "NEXT JS"
    },
    {
        skillClass: "p80",
        skillPercent: "80",
        skillName: "MONGODB"
    },
    {
        skillClass: "p80",
        skillPercent: "80",
        skillName: "MySQL"
    },
    {
        skillClass: "p85",
        skillPercent: "85",
        skillName: "NODE JS"
    },
    {
        skillClass: "p85",
        skillPercent: "85",
        skillName: "GIT"
    },
    {
        skillClass: "p85",
        skillPercent: "85",
        skillName: "GITHub"
    }
];
const Skills = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: skillsContent.map((val, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-6 col-md-3 mb-3 mb-sm-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `c100 ${val.skillClass}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    val.skillPercent,
                                    "%"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "slice",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "bar"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "fill"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "text-uppercase open-sans-font text-center mt-2 mt-sm-4",
                        children: val.skillName
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const about_Skills = (Skills);

;// CONCATENATED MODULE: ./public/assets/img/hero/img-mobile.jpg
/* harmony default export */ const img_mobile = ({"src":"/_next/static/media/img-mobile.fb83fefe.jpg","height":300,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArQf/xAAXEAEAAwAAAAAAAAAAAAAAAAARACNC/9oACAEBAAE/ALHJP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/about/index.jsx









const index = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "main-content ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-6 col-lg-5 col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-uppercase custom-title mb-0 ft-wt-600",
                                            children: "personal infos"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 d-block d-sm-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: img_mobile,
                                            className: "img-fluid main-img-mobile",
                                            alt: "about avatar",
                                            width: 500,
                                            height: 500
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(about_PersonalInfo, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12 mt-1",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "button",
                                            href: "/assets/img/cv.pdf",
                                            download: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "button-text",
                                                    children: "Download CV"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "button-icon fa fa-download"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(about_Achievements, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "separator"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600",
                                children: "My Skills"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(about_Skills, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "separator mt-1"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                className: "text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600",
                                children: [
                                    "Experience ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "&"
                                    }),
                                    " Education"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 m-15px-tb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "resume-box",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(about_Experience, {})
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 m-15px-tb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "resume-box",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(about_Education, {})
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const about = (index);


/***/ }),

/***/ 4318:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9931);
// EXTERNAL MODULE: ./public/assets/img/cancel.svg
var cancel = __webpack_require__(4275);
;// CONCATENATED MODULE: ./public/assets/img/blog/quote.svg
/* harmony default export */ const quote = ({"src":"/_next/static/media/quote.11d91ddf.svg","height":349,"width":349});
// EXTERNAL MODULE: ./src/Context/ContextProvider.js + 7 modules
var ContextProvider = __webpack_require__(8443);
;// CONCATENATED MODULE: ./src/Hooks/UseData.js


const UseData_UseData = ()=>{
    return useContext(MyContext);
};
/* harmony default export */ const Hooks_UseData = ((/* unused pure expression or super */ null && (UseData_UseData)));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/blog/Blog.jsx







const Blog = ()=>{
    const { singleData , isOpen , setIsOpen , blogsData , handleBlogsData  } = UseData();
    const handleModle = (id)=>{
        handleBlogsData(id);
    };
    useEffect(()=>{
        Modal.setAppElement("#modal");
    }, []);
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "row",
            id: "modal",
            children: blogsData.map((item)=>/*#__PURE__*/ _jsxs("div", {
                    className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                    children: [
                        /*#__PURE__*/ _jsxs("article", {
                            className: "post-container",
                            onClick: ()=>handleModle(item?.id),
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "post-thumb",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            src: item?.img,
                                            className: "img-fluid",
                                            alt: "item.title"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "post-content",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "entry-header",
                                            children: /*#__PURE__*/ _jsx("h3", {
                                                children: item?.title
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "entry-content open-sans-font",
                                            children: /*#__PURE__*/ _jsx("p", {
                                                children: item?.description1.slice(0, 100)
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Modal, {
                            isOpen: isOpen,
                            onRequestClose: ()=>setIsOpen(false),
                            contentLabel: "My dialog",
                            className: "custom-modal dark",
                            overlayClassName: "custom-overlay dark",
                            closeTimeoutMS: 500,
                            children: /*#__PURE__*/ _jsxs("div", {
                                children: [
                                    /*#__PURE__*/ _jsx("button", {
                                        className: "close-modal",
                                        onClick: ()=>setIsOpen(false),
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            src: cancelImg,
                                            alt: "close icon"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "box_inner blog-post",
                                        children: /*#__PURE__*/ _jsxs("article", {
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "title-section text-start text-sm-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("h1", {
                                                            children: [
                                                                "Post ",
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: "Details"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "title-bg",
                                                            children: "posts"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "meta open-sans-font",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "fa fa-user"
                                                                }),
                                                                " ",
                                                                singleData.commentor
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "date",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "fa fa-calendar"
                                                                }),
                                                                " ",
                                                                singleData.date
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "fa fa-tags"
                                                                }),
                                                                " ",
                                                                singleData.tag
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("h1", {
                                                    children: singleData?.title
                                                }),
                                                /*#__PURE__*/ _jsx(Image, {
                                                    src: singleData?.img,
                                                    className: "img-fluid",
                                                    alt: "Blog"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "blog-excerpt open-sans-font pb-5",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("p", {
                                                            children: singleData?.description1
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "quotebox",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ _jsx(Image, {
                                                                        src: blogQuote,
                                                                        alt: "blog quote"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    children: singleData?.description2
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            children: singleData?.description3
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            children: singleData?.description4
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }, item.id))
        })
    });
};
/* harmony default export */ const blog_Blog = ((/* unused pure expression or super */ null && (Blog)));


/***/ }),

/***/ 8004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7310);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
// src/components/footer/Footer.jsx




const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "footer-color",
                        children: [
                            "\xa9 ",
                            currentYear,
                            " All Rights Reserved"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "#about",
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),
                                children: "About"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().divider),
                                children: "|"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "#portfolio",
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),
                                children: "Portfolio"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().divider),
                                children: "|"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "#contact",
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),
                                children: "Contact"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 2058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/header/Header.module.css
var Header_module = __webpack_require__(1059);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./src/components/switch/SwitchDark.jsx + 2 modules
var SwitchDark = __webpack_require__(1281);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.a94c7bc1.png","height":1024,"width":1536,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAWklEQVR42mNABn+2MzCD6N87GBgRgtsYxIA4BYj9gNgXiH2AOByIw4CYF6SABYgVgTjl7zaGEiBdBsQZQLYUkGZDNskAKGgIpC2B2BAu8WsrMyMDAiBpgIgDAOXCLaDiMO5PAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/header/Header.jsx








const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_module_default()).header,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Header_module_default()).container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Header_module_default()).logo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo,
                            alt: "",
                            width: 100,
                            height: 100,
                            className: "img-fluid w-100 h-75"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: `${(Header_module_default()).nav} ${isMenuOpen ? (Header_module_default()).active : ""}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: router.pathname === "/" ? (Header_module_default()).active : "",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#about",
                            className: router.pathname === "/about" ? (Header_module_default()).active : "",
                            children: "About"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#portfolio",
                            className: router.pathname === "/portfolio" ? (Header_module_default()).active : "",
                            children: "Portfolio"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#contact",
                            className: router.pathname === "/contact" ? (Header_module_default()).active : "",
                            children: "Contact"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: (Header_module_default()).menuButton,
                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                    "aria-label": "Toggle menu",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SwitchDark/* default */.Z, {})
            ]
        })
    });
};
/* harmony default export */ const header_Header = (Header);


/***/ }),

/***/ 3192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9615);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);





const heroContent = {
    heroImage: "/assets/img/hero/dark.jpg",
    heroMobileImage: "/assets/img/hero/img-mobile.jpg",
    heroTitleName: "Huzaifa Umer",
    heroDesignation: "MERN Stack Developer",
    heroDescriptions: `I'm a passionate MERN Stack Developer from Punjab, Pakistan. 
  With a strong foundation in React JS, Next JS, Tailwind CSS, MongoDB, Node js through professional experience, 
  I focus on building clean, scalable, and user-friendly web applications.  
  My goal is to create impactful software solutions.`,
    heroBtn: "more about me"
};
const Hero = ()=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function toggleModalOne() {
        setIsOpen(!isOpen);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row home-details-container align-items-center ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-4 bg position-fixed d-none d-lg-block",
                        style: {
                            backgroundImage: `url(${heroContent.heroImage})`
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: heroContent.heroMobileImage,
                                    className: "img-fluid main-img-mobile d-sm-block d-lg-none",
                                    alt: "hero man",
                                    width: 500,
                                    height: 500
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "text-uppercase poppins-font",
                                    children: [
                                        "I'm",
                                        " ",
                                        heroContent.heroTitleName,
                                        ".",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: heroContent.heroDesignation
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "open-sans-font",
                                    children: heroContent.heroDescriptions
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "button",
                                    onClick: toggleModalOne,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "button-text",
                                            children: heroContent.heroBtn
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "button-icon fa fa-arrow-right"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
                isOpen: isOpen,
                onRequestClose: toggleModalOne,
                contentLabel: "My dialog",
                className: "custom-modal dark hero",
                overlayClassName: "custom-overlay dark",
                closeTimeoutMS: 500,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "close-modal",
                            onClick: toggleModalOne,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: "/assets/img/cancel.svg",
                                alt: "close icon",
                                width: 20,
                                height: 20
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "box_inner about",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title-section text-start text-sm-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                children: [
                                                    "ABOUT ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "ME"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "title-bg",
                                                children: "Resume"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_about__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ portfolio_Portfolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(5973);
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-1.jpg
/* harmony default export */ const project_1 = ({"src":"/_next/static/media/project-1.05972025.jpg","height":885,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAsQD/xAAZEAABBQAAAAAAAAAAAAAAAAASAAIRIjL/2gAIAQEAAT8AG0k7S//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AI//2Q==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-2.jpg
/* harmony default export */ const project_2 = ({"src":"/_next/static/media/project-2.4e1e8649.jpg","height":938,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAALQSN//EABwQAAEDBQAAAAAAAAAAAAAAAAIABQYREhRCcv/aAAgBAQABPwAYewUswg73X//EABcRAQADAAAAAAAAAAAAAAAAAAEAIXH/2gAIAQIBAT8AVrJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-3.jpg
/* harmony default export */ const project_3 = ({"src":"/_next/static/media/project-3.2d04b703.jpg","height":945,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAsIT/xAAYEAACAwAAAAAAAAAAAAAAAAAAEgERYf/aAAgBAQABPwBYtsP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-4.jpg
/* harmony default export */ const project_4 = ({"src":"/_next/static/media/project-4.3c8aec8a.jpg","height":940,"width":1918,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAJiKP//EAB4QAAIBAwUAAAAAAAAAAAAAAAECEQADBBIhIkFR/9oACAEBAAE/AHuaMZeCEsAkkbrHYPtf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AKz/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-5.jpg
/* harmony default export */ const project_5 = ({"src":"/_next/static/media/project-5.72ca803f.jpg","height":926,"width":1907,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKmCn//EAB0QAAAFBQAAAAAAAAAAAAAAAAECBBETABIVM7H/2gAIAQEAAT8AxSYTRyqrRBt537X/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwAC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAgEAEf/aAAgBAwEBPwBpJdqt3//Z","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-6.jpg
/* harmony default export */ const project_6 = ({"src":"/_next/static/media/project-6.1c3c8b2c.jpg","height":949,"width":1918,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKyCv//EAB8QAAECBgMAAAAAAAAAAAAAAAIBAwAEERIiI0FCYf/aAAgBAQABPwCYBXSa2GFjiFj28WvEf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABYRAAMAAAAAAAAAAAAAAAAAAAABQf/aAAgBAwEBPwCI/9k=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-7.jpg
/* harmony default export */ const project_7 = ({"src":"/_next/static/media/project-7.4e15ffc0.jpg","height":937,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgb/2gAMAwEAAhADEAAAAJEVo//EABoQAQABBQAAAAAAAAAAAAAAAAIAISIxQWL/2gAIAQEAAT8Abq7Dl65n/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECwf/aAAgBAgEBPwCtZ//EABcRAAMBAAAAAAAAAAAAAAAAAAABAzL/2gAIAQMBAT8Ahln/2Q==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-8.jpg
/* harmony default export */ const project_8 = ({"src":"/_next/static/media/project-8.4ea490c2.jpg","height":941,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAlwf/xAAfEAABAAsAAAAAAAAAAAAAAAATAAMEERIUFRYjMlL/2gAIAQEAAT8AnldqApzFEFxxZtuk/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-9.jpg
/* harmony default export */ const project_9 = ({"src":"/_next/static/media/project-9.ef738fb7.jpg","height":937,"width":1910,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAAKwon//EABwQAAAGAwAAAAAAAAAAAAAAAAACAxETFRYzwv/aAAgBAQABPwCFLB9ZHp+B/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIABBETMv/aAAgBAgEBPwCsqnblR1P/xAAWEQADAAAAAAAAAAAAAAAAAAAAAkH/2gAIAQMBAT8AaH//2Q==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-10.jpg
/* harmony default export */ const project_10 = ({"src":"/_next/static/media/project-10.5f297b70.jpg","height":940,"width":1913,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJ8Cs//EABwQAQACAQUAAAAAAAAAAAAAAAECAxEABBITMf/aAAgBAQABPwCuqF1O3EB64ZQMpxfdf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhIx/9oACAEDAQE/AIpVw//Z","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-11.jpg
/* harmony default export */ const project_11 = ({"src":"/_next/static/media/project-11.74375101.jpg","height":938,"width":1913,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAr4T/xAAXEAEAAwAAAAAAAAAAAAAAAAARACJB/9oACAEBAAE/ACy5P//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/img/portfolio/project-12.jpg
/* harmony default export */ const project_12 = ({"src":"/_next/static/media/project-12.9d4c47ea.jpg","height":938,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAoQQv/8QAHBAAAQMFAAAAAAAAAAAAAAAAAgABEgMEBRZ0/9oACAEBAAE/ANQxIFBq1/HqNf/EABgRAAIDAAAAAAAAAAAAAAAAAAABAhJR/9oACAECAQE/ALS1n//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhJS/9oACAEDAQE/AKxyj//Z","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/components/portfolio/portfolioData.js












const PortfolioData = [
    {
        id: 1,
        type: "live project",
        image: project_1,
        tag: [
            "Live"
        ],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Website",
                status: "In Progress",
                language: "HTML, CSS, Javascript",
                preview: "reviewsite.reviwer.com",
                link: "https://reviewsite.reviwer.com/"
            }
        ]
    },
    {
        id: 2,
        type: "live project",
        image: project_2,
        tag: [
            "Live"
        ],
        delayAnimation: "100",
        modalDetails: [
            {
                project: "Website",
                status: "Completed",
                language: "Tailwind CSS, Nuxt JS",
                preview: "goodview-moving.com",
                link: "https://goodview-moving.com/"
            }
        ]
    },
    {
        id: 3,
        type: "Live Project",
        image: project_3,
        tag: [
            "Live"
        ],
        delayAnimation: "200",
        modalDetails: [
            {
                project: "Website",
                status: "Completed",
                language: "Next JS, Tailwind CSS, fireStore DB, Node js ",
                preview: "www.nexoracodes.com",
                link: "https://www.nexoracodes.com"
            }
        ]
    },
    {
        id: 4,
        type: "Live Project",
        image: project_5,
        tag: [
            "Live"
        ],
        delayAnimation: "100",
        modalDetails: [
            {
                project: "Website",
                status: "Completed",
                language: "Tailwind CSS, Next JS, Node js, MongoDB",
                preview: "www.hanzlamasood.com",
                link: "https://www.hanzlamasood.com"
            }
        ]
    },
    {
        id: 5,
        type: "live project",
        image: project_4,
        tag: [
            "logo"
        ],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Website",
                status: "Completed",
                language: "Next JS, Tailwind CSS, MongoDB, Node js ",
                preview: "www.chrometech.com",
                link: "https://www.chrometech.com"
            }
        ]
    },
    {
        id: 12,
        type: "live project",
        image: project_12,
        tag: [
            "Live"
        ],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Website",
                status: "Completed",
                language: "React JS, Bootstrap, MongoDB, Node js ",
                preview: "www.chrometech.com",
                link: "https://www.chrometech.com"
            }
        ]
    },
    {
        id: 6,
        type: "practice project",
        image: project_6,
        tag: [
            "practice"
        ],
        delayAnimation: "200",
        modalDetails: [
            {
                project: "Website",
                status: "Completed (Not live)",
                language: "HTML, CSS, Javascript",
                preview: "Not Deployed"
            }
        ]
    },
    {
        id: 7,
        type: "Practice Project",
        image: project_7,
        tag: [
            "practice"
        ],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Website",
                status: "Completed",
                language: "HTML, CSS, Javascript",
                preview: "www.30-js-projects.com",
                link: "https://30-js-projects.netlify.app/"
            }
        ]
    },
    {
        id: 8,
        type: "Practice Project",
        image: project_8,
        tag: [
            "practice"
        ],
        delayAnimation: "100",
        modalDetails: [
            {
                project: "Website",
                status: "Completed",
                language: "HTML, CSS, Javascript",
                preview: "www.quiz-app.com",
                link: "https://quiz-app-huzaifa-js.netlify.app/"
            }
        ]
    },
    {
        id: 9,
        type: "Practice Project",
        image: project_9,
        tag: [
            "practice"
        ],
        delayAnimation: "200",
        modalDetails: [
            {
                project: "Website",
                status: "Completed",
                language: "React JS",
                preview: "www.quiz-online.com",
                link: "https://hkhichi.netlify.app/"
            }
        ]
    },
    {
        id: 10,
        type: "First Project (Just UI)",
        image: project_10,
        tag: [
            "practice"
        ],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Website",
                status: "Completed",
                language: "React JS",
                preview: "www.kfcweb.com",
                link: "https://kfcweb.netlify.app/"
            }
        ]
    },
    {
        id: 11,
        type: "Practice Project",
        image: project_11,
        tag: [
            "practice"
        ],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Website",
                status: "Completed",
                language: "React JS",
                preview: "www.weather-world-web.netlify.app",
                link: "https://weather-world-web.netlify.app/"
            }
        ]
    }
];
/* harmony default export */ const portfolioData = (PortfolioData);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/assets/img/cancel.svg
var cancel = __webpack_require__(4275);
;// CONCATENATED MODULE: ./src/components/portfolio/modal/modal-by-id/ModalOne.jsx





const ModalOne = ({ modalId , setGetModal  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal_portfolio ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__outside",
                onClick: ()=>setGetModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__content",
                children: portfolioData.filter((item)=>item.id === modalId).map((item)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "heading mb-2",
                                children: item.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal__details",
                                children: item.modalDetails.map((details, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row open-sans-font",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-file-text-o pr-2"
                                                    }),
                                                    "Project:",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.project
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-user-o pr-2"
                                                    }),
                                                    "Status :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.status
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-code pr-2"
                                                    }),
                                                    "Language :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.language
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-external-link pr-2"
                                                    }),
                                                    "Preview :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "preview-link",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer nofollow",
                                                        href: details.link,
                                                        children: details.preview
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "modal__img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: item.image,
                                    alt: "portfolio project demo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "close-modal",
                                onClick: ()=>setGetModal(false),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: cancel/* default */.Z,
                                    alt: "portfolio project demo"
                                })
                            })
                        ]
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const modal_by_id_ModalOne = (ModalOne);

;// CONCATENATED MODULE: ./src/components/portfolio/modal/modal-by-id/ModalTwo.jsx





const ModalTwo = ({ modalId , setGetModal  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal_portfolio",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__outside",
                onClick: ()=>setGetModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__content",
                children: portfolioData.filter((item)=>item.id === modalId).map((item)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "heading mb-2",
                                children: item.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal__details",
                                children: item.modalDetails.map((details, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row open-sans-font",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-file-text-o pr-2"
                                                    }),
                                                    "Project:",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.project
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-user-o pr-2"
                                                    }),
                                                    "Status :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.status
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-code pr-2"
                                                    }),
                                                    "Language :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.language
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-external-link pr-2"
                                                    }),
                                                    "Preview :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "preview-link",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer nofollow",
                                                        href: details.link,
                                                        children: details.preview
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "modal__img videocontainer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    src: "https://www.youtube.com/embed/7e90gBu4pas",
                                    title: "YouTube video player",
                                    className: "youtube-video",
                                    allowFullScreen: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "close-modal",
                                onClick: ()=>setGetModal(false),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: cancel/* default */.Z,
                                    alt: "portfolio project demo"
                                })
                            })
                        ]
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const modal_by_id_ModalTwo = (ModalTwo);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(782);
;// CONCATENATED MODULE: ./src/components/portfolio/modal/modal-by-id/ModalThree.jsx
// external






// internal




const ModalThree = ({ modalId , setGetModal  })=>{
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal_portfolio",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__outside",
                onClick: ()=>setGetModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__content",
                children: portfolioData.filter((item)=>item.id === modalId).map((item)=>{
                    //
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "heading mb-2",
                                children: item.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal__details",
                                children: item.modalDetails.map((details, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row open-sans-font",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-file-text-o pr-2"
                                                    }),
                                                    "Project:",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.project
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-user-o pr-2"
                                                    }),
                                                    "Status :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.status
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-code pr-2"
                                                    }),
                                                    "Language :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.language
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-external-link pr-2"
                                                    }),
                                                    "Preview :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "preview-link",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer nofollow",
                                                        href: details.link,
                                                        children: details.preview
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "modal__img",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                    ...settings,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: item.image,
                                                alt: "portfolio project demo"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: project_1,
                                                alt: "portfolio project demo"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: project_2,
                                                alt: "portfolio project demo"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "close-modal",
                                onClick: ()=>setGetModal(false),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: cancel/* default */.Z,
                                    alt: "portfolio project demo"
                                })
                            })
                        ]
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const modal_by_id_ModalThree = (ModalThree);

;// CONCATENATED MODULE: ./src/components/portfolio/modal/modal-by-id/ModalFour.jsx





const ModalFour = ({ modalId , setGetModal  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal_portfolio",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__outside",
                onClick: ()=>setGetModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__content",
                children: portfolioData.filter((item)=>item.id === modalId).map((item)=>{
                    //
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "heading mb-2",
                                children: item.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal__details",
                                children: item.modalDetails.map((details, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row open-sans-font",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-file-text-o pr-2"
                                                    }),
                                                    "Project:",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.project
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-user-o pr-2"
                                                    }),
                                                    "Status :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.status
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-code pr-2"
                                                    }),
                                                    "Language :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.language
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-external-link pr-2"
                                                    }),
                                                    "Preview :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "preview-link",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer nofollow",
                                                        href: details.link,
                                                        children: details.preview
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "modal__img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                    id: "video",
                                    className: "responsive-video",
                                    controls: true,
                                    poster: item.image,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                        src: "/assets/img/portfolio/video.mp4",
                                        type: "video/mp4"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "close-modal",
                                onClick: ()=>setGetModal(false),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: cancel/* default */.Z,
                                    alt: "portfolio project demo"
                                })
                            })
                        ]
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const modal_by_id_ModalFour = (ModalFour);

;// CONCATENATED MODULE: ./src/components/portfolio/modal/modal-by-id/ModalFive.jsx





const ModalFive = ({ modalId , setGetModal  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal_portfolio",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__outside",
                onClick: ()=>setGetModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__content",
                children: portfolioData.filter((item)=>item.id === modalId).map((item)=>{
                    //
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "heading mb-2",
                                children: item.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal__details",
                                children: item.modalDetails.map((details, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row open-sans-font",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-file-text-o pr-2"
                                                    }),
                                                    "Project:",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.project
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-user-o pr-2"
                                                    }),
                                                    "Status :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.status
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-code pr-2"
                                                    }),
                                                    "Language :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.language
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-external-link pr-2"
                                                    }),
                                                    "Preview :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "preview-link",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer nofollow",
                                                        href: details.link,
                                                        children: details.preview
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "modal__img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: item.image,
                                    alt: "portfolio project demo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "close-modal",
                                onClick: ()=>setGetModal(false),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: cancel/* default */.Z,
                                    alt: "portfolio project demo"
                                })
                            })
                        ]
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const modal_by_id_ModalFive = (ModalFive);

;// CONCATENATED MODULE: ./src/components/portfolio/modal/modal-by-id/ModalSix.jsx





const ModalSix = ({ modalId , setGetModal  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal_portfolio",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__outside",
                onClick: ()=>setGetModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__content",
                children: portfolioData.filter((item)=>item.id === modalId).map((item)=>{
                    //
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "heading mb-2",
                                children: item.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal__details",
                                children: item.modalDetails.map((details, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row open-sans-font",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-file-text-o pr-2"
                                                    }),
                                                    "Project:",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.project
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-user-o pr-2"
                                                    }),
                                                    "Status :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.status
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-code pr-2"
                                                    }),
                                                    "Language :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.language
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-external-link pr-2"
                                                    }),
                                                    "Preview :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "preview-link",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer nofollow",
                                                        href: details.link,
                                                        children: details.preview
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "modal__img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: item.image,
                                    alt: "portfolio project demo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "close-modal",
                                onClick: ()=>setGetModal(false),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: cancel/* default */.Z,
                                    alt: "portfolio project demo"
                                })
                            })
                        ]
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const modal_by_id_ModalSix = (ModalSix);

;// CONCATENATED MODULE: ./src/components/portfolio/modal/modal-by-id/ModalSeven.jsx





const ModalSeven = ({ modalId , setGetModal  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal_portfolio",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__outside",
                onClick: ()=>setGetModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__content",
                children: portfolioData.filter((item)=>item.id === modalId).map((item)=>{
                    //
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "heading mb-2",
                                children: item.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal__details",
                                children: item.modalDetails.map((details, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row open-sans-font",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-file-text-o pr-2"
                                                    }),
                                                    "Project:",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.project
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-user-o pr-2"
                                                    }),
                                                    "Status :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.status
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-code pr-2"
                                                    }),
                                                    "Language :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.language
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-external-link pr-2"
                                                    }),
                                                    "Preview :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "preview-link",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer nofollow",
                                                        href: details.link,
                                                        children: details.preview
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "modal__img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: item.image,
                                    alt: "portfolio project demo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "close-modal",
                                onClick: ()=>setGetModal(false),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: cancel/* default */.Z,
                                    alt: "portfolio project demo"
                                })
                            })
                        ]
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const modal_by_id_ModalSeven = (ModalSeven);

;// CONCATENATED MODULE: ./src/components/portfolio/modal/modal-by-id/ModalEight.jsx





const ModalEight = ({ modalId , setGetModal  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal_portfolio",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__outside",
                onClick: ()=>setGetModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__content",
                children: portfolioData.filter((item)=>item.id === modalId).map((item)=>{
                    //
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "heading mb-2",
                                children: item.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal__details",
                                children: item.modalDetails.map((details, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row open-sans-font",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-file-text-o pr-2"
                                                    }),
                                                    "Project:",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.project
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-user-o pr-2"
                                                    }),
                                                    "Status :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.status
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-code pr-2"
                                                    }),
                                                    "Language :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.language
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-external-link pr-2"
                                                    }),
                                                    "Preview :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "preview-link",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer nofollow",
                                                        href: details.link,
                                                        children: details.preview
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "modal__img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: item.image,
                                    alt: "portfolio project demo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "close-modal",
                                onClick: ()=>setGetModal(false),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: cancel/* default */.Z,
                                    alt: "portfolio project demo"
                                })
                            })
                        ]
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const modal_by_id_ModalEight = (ModalEight);

;// CONCATENATED MODULE: ./src/components/portfolio/modal/modal-by-id/ModalNine.jsx





const ModalNine = ({ modalId , setGetModal  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal_portfolio",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__outside",
                onClick: ()=>setGetModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal__content",
                children: portfolioData.filter((item)=>item.id === modalId).map((item)=>{
                    //
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "heading mb-2",
                                children: item.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal__details",
                                children: item.modalDetails.map((details, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row open-sans-font",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-file-text-o pr-2"
                                                    }),
                                                    "Project:",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.project
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-user-o pr-2"
                                                    }),
                                                    "Status :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.status
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-code pr-2"
                                                    }),
                                                    "Language :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ft-wt-600 uppercase",
                                                        children: details.language
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-12 col-sm-6 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-external-link pr-2"
                                                    }),
                                                    "Preview :",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "preview-link",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer nofollow",
                                                        href: details.link,
                                                        children: details.preview
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "modal__img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: item.image,
                                    alt: "portfolio project demo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "close-modal",
                                onClick: ()=>setGetModal(false),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: cancel/* default */.Z,
                                    alt: "portfolio project demo"
                                })
                            })
                        ]
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const modal_by_id_ModalNine = (ModalNine);

;// CONCATENATED MODULE: ./src/components/portfolio/modal/ModalMain.jsx











const ModalMain = ({ modalId , setGetModal  })=>{
    if (modalId === 1) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalOne, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    } else if (modalId === 2) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalTwo, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    } else if (modalId === 3) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalThree, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    } else if (modalId === 4) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalFour, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    } else if (modalId === 5) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalFive, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    } else if (modalId === 6) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalSix, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    } else if (modalId === 7) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalSeven, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    } else if (modalId === 8) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalEight, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    } else if (modalId === 9) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalNine, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    } else if (modalId === 10) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalNine, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    } else if (modalId === 11) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalNine, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    } else if (modalId === 12) {
        return /*#__PURE__*/ jsx_runtime_.jsx(modal_by_id_ModalNine, {
            modalId: modalId,
            setGetModal: setGetModal
        });
    }
};
/* harmony default export */ const modal_ModalMain = (ModalMain);

;// CONCATENATED MODULE: ./src/components/portfolio/Portfolio.jsx






const Portfolio = ()=>{
    const [getModal, setGetModal] = (0,external_react_.useState)(false);
    const [modalId, setModalId] = (0,external_react_.useState)(1);
    const handleModal = (id)=>{
        setGetModal(true);
        setModalId(id);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "portfolio-main",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_tabs_.Tabs, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_tabs_.TabList, {
                            className: "portfolio-tab-list",
                            "data-aos": "fade-up",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.Tab, {
                                    children: "ALL"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.Tab, {
                                    children: "Live"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.Tab, {
                                    children: "Practice"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "tab-container",
                                        children: portfolioData.map((item)=>{
                                            const { id , type , image , delayAnimation  } = item;
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                "data-aos": "fade-right",
                                                "data-aos-delay": delayAnimation,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "tab-content",
                                                    onClick: ()=>handleModal(id),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: image,
                                                            alt: "portfolio project demo"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "conent-title",
                                                                children: type
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, id);
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "tab-container",
                                        children: portfolioData.filter((item)=>item.tag.includes("Live")).map((item)=>{
                                            const { id , type , image , delayAnimation  } = item;
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                "data-aos": "fade-right",
                                                "data-aos-delay": delayAnimation,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "tab-content",
                                                    onClick: ()=>handleModal(id),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: image,
                                                            alt: "portfolio project demo"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "conent-title",
                                                                children: type
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, id);
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "tab-container",
                                        children: portfolioData.filter((item)=>item.tag.includes("practice")).map((item)=>{
                                            const { id , type , image , delayAnimation  } = item;
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                "data-aos": "fade-right",
                                                "data-aos-delay": delayAnimation,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "tab-content",
                                                    onClick: ()=>handleModal(id),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: image,
                                                            alt: "portfolio project demo"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "conent-title",
                                                                children: type
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, id);
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            getModal && /*#__PURE__*/ jsx_runtime_.jsx(modal_ModalMain, {
                modalId: modalId,
                setGetModal: setGetModal
            }),
            " "
        ]
    });
};
/* harmony default export */ const portfolio_Portfolio = (Portfolio);


/***/ }),

/***/ 1281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ switch_SwitchDark)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/assets/img/sun.png
/* harmony default export */ const sun = ({"src":"/_next/static/media/sun.e8a19ea6.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASklEQVR42l2NwQ2AMAzEHB4VI5SVskI3yMrtLmCJRxFyHvFJl8BBACkQmlM0LmmUBpwMlgw3IOnKLcstv8HEYFfmW9lHu1oE/7cPkP0RT+u5jqgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./utils/theme.js
function handleSwitchValue(value) {
    if (value) {
        localStorage.setItem("theme-color", "dark");
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    } else {
        localStorage.setItem("theme-color", "light");
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
}
/* harmony default export */ const theme = (handleSwitchValue);

;// CONCATENATED MODULE: ./src/components/switch/SwitchDark.jsx





const SwitchDark = ()=>{
    const [isDark, setIsDark] = (0,external_react_.useState)(false);
    const handleLabelClick = ()=>{
        if (isDark) {
            theme(true);
            setIsDark(false);
        } else {
            theme(false);
            setIsDark(true);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        className: `theme-switcher-label d-flex  ${isDark ? "active" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "checkbox",
                onClick: handleLabelClick,
                className: "theme-switcher"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "switch-handle",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "light-text",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: sun,
                            alt: "swicher",
                            className: "filter_1",
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "dark-text",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-moon-o",
                            "aria-hidden": "true"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const switch_SwitchDark = (SwitchDark);


/***/ }),

/***/ 5532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Wrapper = ({ children  })=>{
    // Apply theme class to body when component mounts
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem("theme-color");
        if (savedTheme) {
            document.body.classList.add(savedTheme);
        } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            // If no saved preference, use system preference
            document.body.classList.add("dark");
            localStorage.setItem("theme-color", "dark");
        } else {
            document.body.classList.add("light");
            localStorage.setItem("theme-color", "light");
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "app-container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "main-content",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "colored"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7066:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3192);
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9615);
/* harmony import */ var _layout_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5532);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1690);
/* harmony import */ var _components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(275);
/* harmony import */ var _components_Address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8212);
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9830);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6047);
/* harmony import */ var _components_blog_Blog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4318);
/* harmony import */ var _components_switch_SwitchDark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1281);
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2058);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8004);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_wrapper__WEBPACK_IMPORTED_MODULE_4__, _components_Contact__WEBPACK_IMPORTED_MODULE_9__]);
([_layout_wrapper__WEBPACK_IMPORTED_MODULE_4__, _components_Contact__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const HomeDark = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.querySelector("body").classList.remove("rtl");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Seo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                pageTitle: "Home Dark"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "yellow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_Header__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tab-panel_list pt=0 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "home ",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "container-fluid main-container container-home p-0 g-0 overflow-hidden ",
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1200",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "color-block d-none d-lg-block"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_Hero__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "about",
                                id: "about",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1200",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "title-section text-start text-sm-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    children: [
                                                        "ABOUT ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "ME"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "title-bg",
                                                    children: "Resume"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_about__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "portfolio professional",
                                id: "portfolio",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title-section text-start text-sm-center",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                children: [
                                                    "my ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "portfolio"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "title-bg",
                                                children: "works"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "contact py-2",
                                id: "contact",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title-section text-start text-sm-center",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                children: [
                                                    "get in ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "touch"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "title-bg",
                                                children: "contact"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "container",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        style: {
                                            paddingBottom: "0"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "col-12 col-lg-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                            className: "text-uppercase custom-title mb-0 ft-wt-600 pb-3",
                                                            children: [
                                                                "Don't",
                                                                " be shy !"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "open-sans-font mb-4",
                                                            children: "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Address__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Social__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-12 col-lg-8",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeDark);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;