module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/Downloads/ai-summarizer-saas/frontend/firebase.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "login",
    ()=>login
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$node_modules$2f$firebase$29$__ = __turbopack_context__.i("[externals]/firebase/app [external] (firebase/app, esm_import, [project]/Downloads/ai-summarizer-saas/frontend/node_modules/firebase)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$node_modules$2f$firebase$29$__ = __turbopack_context__.i("[externals]/firebase/auth [external] (firebase/auth, esm_import, [project]/Downloads/ai-summarizer-saas/frontend/node_modules/firebase)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$node_modules$2f$firebase$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$node_modules$2f$firebase$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$node_modules$2f$firebase$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$node_modules$2f$firebase$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const app = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$node_modules$2f$firebase$29$__["initializeApp"])({
    apiKey: "AIzaSyANoC_rGJOUS9PJHmUT1q77Tpy5gmBhs9Q",
    authDomain: "aisummarizer-a901f.firebaseapp.com",
    projectId: "aisummarizer-a901f",
    storageBucket: "aisummarizer-a901f.firebasestorage.app",
    messagingSenderId: "894635171048",
    appId: "1:894635171048:web:a222b230065f3c3cbb7d5d",
    measurementId: "G-ZWSDRR85DQ"
});
const auth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$node_modules$2f$firebase$29$__["getAuth"])(app);
const provider = new __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$node_modules$2f$firebase$29$__["GoogleAuthProvider"]();
const login = async ()=>{
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$node_modules$2f$firebase$29$__["signInWithPopup"])(auth, provider);
    return result.user;
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ai-summarizer-saas/frontend/firebase.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
/* 🔝 Minimal Top Bar */ function TopBar({ onSignup }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 60px",
            borderBottom: "1px solid #eee",
            background: "white",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            boxSizing: "border-box"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "22px",
                    fontWeight: "700"
                },
                children: "AI Summarizer"
            }, void 0, false, {
                fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    marginRight: "10px"
                },
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: onSignup,
                        style: {
                            background: "#ff4d4f",
                            color: "white",
                            border: "none",
                            padding: "10px 22px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "500"
                        },
                        children: "Sign Up"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function Home() {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isYearly, setIsYearly] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const price = isYearly ? 12 : 1;
    /* 🔐 Signup/Login */ const handleSignup = async ()=>{
        try {
            const loggedInUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["login"])();
            setUser(loggedInUser);
            const token = await loggedInUser.getIdToken(true);
            await fetch("http://localhost:5050/auth/sync-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("✅ User synced");
        } catch (err) {
            console.error("Signup error:", err);
        }
    };
    /* 💳 Payment */ const handlePay = async ()=>{
        try {
            setLoading(true);
            let currentUser = user;
            if (!currentUser) {
                currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ai$2d$summarizer$2d$saas$2f$frontend$2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["login"])();
                setUser(currentUser);
            }
            const token = await currentUser.getIdToken();
            const res = await fetch("http://localhost:5050/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    plan: isYearly ? "yearly" : "monthly"
                })
            });
            const text = await res.text();
            try {
                const data = JSON.parse(text);
                window.location.href = data.url;
            } catch (err) {
                console.error("❌ Not JSON:", text);
            }
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TopBar, {
                onSignup: handleSignup
            }, void 0, false, {
                fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    padding: "60px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: "AI Summarizer"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#FFD700",
                            padding: "40px",
                            borderRadius: "12px",
                            display: "inline-block",
                            minWidth: "320px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    marginBottom: "20px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "inline-flex",
                                        background: "#f5f5f5",
                                        borderRadius: "30px",
                                        padding: "4px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setIsYearly(false),
                                            style: {
                                                padding: "8px 18px",
                                                borderRadius: "20px",
                                                cursor: "pointer",
                                                background: !isYearly ? "white" : "transparent",
                                                fontWeight: !isYearly ? "600" : "400"
                                            },
                                            children: "Monthly"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setIsYearly(true),
                                            style: {
                                                padding: "8px 18px",
                                                borderRadius: "20px",
                                                cursor: "pointer",
                                                background: isYearly ? "white" : "transparent",
                                                fontWeight: isYearly ? "600" : "400"
                                            },
                                            children: "Yearly"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                children: "Flexible User Pricing"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: "60px",
                                    margin: "10px 0"
                                },
                                children: [
                                    "$",
                                    price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: isYearly ? "/year (billed annually)" : "/month (billed monthly)"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: handlePay,
                                disabled: loading,
                                style: {
                                    background: "#ff4d4f",
                                    color: "white",
                                    padding: "12px 30px",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    marginTop: "20px"
                                },
                                children: loading ? "Loading..." : "Signup and Pay"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/ai-summarizer-saas/frontend/pages/index.js",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0grr7.6._.js.map