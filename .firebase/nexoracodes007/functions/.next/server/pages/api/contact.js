"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 9282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/contact.js

async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method Not Allowed"
        });
    }
    const { name , email , subject , message  } = req.body || {};
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            error: "Missing required fields"
        });
    }
    try {
        const transporter = external_nodemailer_default().createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "khichihuzaifa@gmail.com",
                pass: "uggv jonu vybp wkvo"
            }
        });
        const toAddress = "khichihuzaifa@gmail.com";
        const info = await transporter.sendMail({
            from: `${name} `,
            to: toAddress,
            subject,
            replyTo: email,
            text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
            html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, "<br/>")}</p>`
        });
        return res.status(200).json({
            ok: true,
            messageId: info?.messageId || null
        });
    } catch (err) {
        console.error("Nodemailer error:", err);
        return res.status(500).json({
            error: "Failed to send email"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9282));
module.exports = __webpack_exports__;

})();