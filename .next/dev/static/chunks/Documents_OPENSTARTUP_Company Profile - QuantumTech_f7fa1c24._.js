(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const navItems = [
    {
        label: "Who we are",
        hasDropdown: true,
        items: [
            {
                label: "About QuantumTech",
                href: "/#about"
            },
            {
                label: "Our Team",
                href: "/our-team"
            },
            {
                label: "Company Culture",
                href: "/company-culture"
            },
            {
                label: "Awards & Recognition",
                href: "/awards"
            }
        ]
    },
    {
        label: "What we do",
        hasDropdown: true,
        items: [
            {
                label: "Web Design",
                href: "/#services"
            },
            {
                label: "Web Development",
                href: "/#services"
            },
            {
                label: "Website Responsive",
                href: "/#services"
            },
            {
                label: "E-Commerce Solutions",
                href: "/#services"
            }
        ]
    },
    {
        label: "Our Thinking",
        hasDropdown: true,
        items: [
            {
                label: "Blog & Insights",
                href: "/blog"
            },
            {
                label: "Case Studies",
                href: "/case-studies"
            },
            {
                label: "Tech Trends",
                href: "/tech-trends"
            },
            {
                label: "Whitepapers",
                href: "/whitepapers"
            }
        ]
    },
    {
        label: "Careers",
        hasDropdown: true,
        items: [
            {
                label: "Open Positions",
                href: "/careers/open-positions"
            },
            {
                label: "Internship Program",
                href: "/careers/internship"
            },
            {
                label: "Life at QuantumTech",
                href: "/careers/life-at-quantumtech"
            }
        ]
    }
];
const searchData = [
    {
        title: "Web Design",
        description: "Creative and modern web design services",
        href: "/#services"
    },
    {
        title: "Web Development",
        description: "Full-stack website development solutions",
        href: "/#services"
    },
    {
        title: "Website Responsive",
        description: "Mobile-friendly responsive design",
        href: "/#services"
    },
    {
        title: "E-Commerce Website",
        description: "Online store development",
        href: "/#services"
    },
    {
        title: "About QuantumTech",
        description: "Learn more about our company",
        href: "/#about"
    },
    {
        title: "Our Team",
        description: "Meet our professional team",
        href: "/our-team"
    },
    {
        title: "Our Vision",
        description: "Building digital futures",
        href: "/#vision"
    },
    {
        title: "Contact Us",
        description: "Get in touch with our team",
        href: "/#contact"
    },
    {
        title: "Careers",
        description: "Join our team",
        href: "/careers"
    }
];
function Header() {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (searchQuery.trim() === "") {
                setSearchResults([]);
            } else {
                const filtered = searchData.filter({
                    "Header.useEffect.filtered": (item)=>item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase())
                }["Header.useEffect.filtered"]);
                setSearchResults(filtered);
            }
        }
    }["Header.useEffect"], [
        searchQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            function handleClickOutside(event) {
                if (searchRef.current && !searchRef.current.contains(event.target)) {
                    setSearchOpen(false);
                    setSearchQuery("");
                }
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setActiveDropdown(null);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Header.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-[#1a1f2e]/95 backdrop-blur-sm border-b border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-xl font-bold tracking-tight",
                                children: [
                                    "Quantum",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#86bc25]",
                                        children: "Tech"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                        lineNumber: 104,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-8",
                            ref: dropdownRef,
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors",
                                            onClick: ()=>setActiveDropdown(activeDropdown === item.label ? null : item.label),
                                            children: [
                                                item.label,
                                                item.hasDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform duration-200", activeDropdown === item.label && "rotate-180")
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        item.hasDropdown && activeDropdown === item.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 mt-2 w-56 bg-[#1a1f2e] border border-white/10 rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",
                                            children: item.items?.map((subItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: subItem.href,
                                                    className: "block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors",
                                                    onClick: ()=>setActiveDropdown(null),
                                                    children: subItem.label
                                                }, subItem.label, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    ref: searchRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-2 text-white/80 hover:text-white transition-colors",
                                            onClick: ()=>setSearchOpen(!searchOpen),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "Search"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        searchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full right-0 mt-2 w-80 bg-[#1a1f2e] border border-white/10 rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 border-b border-white/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Search... (try 'website')",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#26a8a8]",
                                                        autoFocus: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this),
                                                searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-64 overflow-y-auto",
                                                    children: searchResults.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: result.href,
                                                            className: "block px-4 py-3 hover:bg-white/5 transition-colors",
                                                            onClick: ()=>{
                                                                setSearchOpen(false);
                                                                setSearchQuery("");
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium text-white",
                                                                    children: result.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-white/50 mt-0.5",
                                                                    children: result.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, this),
                                                searchQuery && searchResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-6 text-center text-white/40 text-sm",
                                                    children: "No results found"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 text-white/80 hover:text-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "INDONESIA - ID"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden text-white p-2",
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                lineNumber: 202,
                                columnNumber: 31
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                lineNumber: 202,
                                columnNumber: 59
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("md:hidden bg-[#1a1f2e] border-t border-white/10 overflow-hidden transition-all duration-300", mobileMenuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-4 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pb-4 border-b border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#26a8a8]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center justify-between w-full text-white/80 hover:text-white text-sm font-medium py-2",
                                        onClick: ()=>setActiveDropdown(activeDropdown === item.label ? null : item.label),
                                        children: [
                                            item.label,
                                            item.hasDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform duration-200", activeDropdown === item.label && "rotate-180")
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    item.hasDropdown && activeDropdown === item.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pl-4 py-2 space-y-2",
                                        children: item.items?.map((subItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: subItem.href,
                                                className: "block py-2 text-sm text-white/60 hover:text-[#86bc25] transition-colors",
                                                onClick: ()=>setMobileMenuOpen(false),
                                                children: subItem.label
                                            }, subItem.label, false, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                lineNumber: 245,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                        lineNumber: 243,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(Header, "5ZcrCbQFAnubPhLW/boFflldSps=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const services = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        title: "Web Design",
        description: "Desain website modern dan kreatif yang menarik perhatian pengunjung dan meningkatkan brand awareness bisnis Anda.",
        color: "#26a8a8",
        hasDetail: true,
        detail: {
            fullDescription: "Layanan Web Design kami menghadirkan solusi desain website yang tidak hanya indah secara visual, tetapi juga fungsional dan user-friendly. Tim desainer kami yang berpengalaman akan bekerja sama dengan Anda untuk menciptakan identitas digital yang unik dan memorable.",
            features: [
                "UI/UX Design yang intuitive dan modern",
                "Custom graphics dan ilustrasi",
                "Brand identity integration",
                "Prototype dan mockup interaktif",
                "Design system yang konsisten",
                "Cross-browser compatibility design"
            ],
            process: [
                {
                    step: "Discovery",
                    desc: "Memahami kebutuhan dan visi bisnis Anda"
                },
                {
                    step: "Wireframing",
                    desc: "Membuat blueprint struktur website"
                },
                {
                    step: "Visual Design",
                    desc: "Mengembangkan desain visual yang menarik"
                },
                {
                    step: "Review & Revisi",
                    desc: "Penyempurnaan berdasarkan feedback"
                }
            ]
        }
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"],
        title: "Website Responsive",
        description: "Website yang tampil sempurna di semua perangkat, dari desktop hingga smartphone, memberikan pengalaman terbaik bagi pengguna.",
        color: "#86bc25",
        hasDetail: true,
        detail: {
            fullDescription: "Di era mobile-first, website responsive bukan lagi opsi tetapi keharusan. Kami memastikan website Anda tampil optimal di semua ukuran layar, memberikan pengalaman pengguna yang konsisten dan profesional di manapun pengunjung mengaksesnya.",
            features: [
                "Mobile-first development approach",
                "Fluid grid layouts",
                "Flexible images dan media",
                "Touch-friendly navigation",
                "Optimized performance untuk mobile",
                "Cross-device testing komprehensif"
            ],
            process: [
                {
                    step: "Analisis",
                    desc: "Mengidentifikasi kebutuhan responsif"
                },
                {
                    step: "Mobile Design",
                    desc: "Desain untuk layar terkecil terlebih dahulu"
                },
                {
                    step: "Progressive Enhancement",
                    desc: "Menambah fitur untuk layar lebih besar"
                },
                {
                    step: "Testing",
                    desc: "Pengujian di berbagai perangkat"
                }
            ]
        }
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
        title: "Web Development",
        description: "Pengembangan website full-stack dengan teknologi terkini untuk performa optimal dan skalabilitas bisnis Anda.",
        color: "#1a1f2e",
        hasDetail: true,
        detail: {
            fullDescription: "Layanan Web Development kami mencakup pengembangan website dari awal hingga deployment. Kami menggunakan teknologi terkini seperti Next.js, React, dan Node.js untuk memastikan website Anda cepat, aman, dan mudah dikembangkan di masa depan.",
            features: [
                "Full-stack development (Frontend & Backend)",
                "Database design dan integration",
                "API development dan integration",
                "CMS implementation",
                "E-commerce functionality",
                "Security implementation"
            ],
            process: [
                {
                    step: "Planning",
                    desc: "Perencanaan arsitektur dan teknologi"
                },
                {
                    step: "Development",
                    desc: "Pengembangan frontend dan backend"
                },
                {
                    step: "Integration",
                    desc: "Integrasi sistem dan third-party services"
                },
                {
                    step: "Deployment",
                    desc: "Launching dan monitoring"
                }
            ]
        }
    }
];
function ServicesSection() {
    _s();
    const [selectedService, setSelectedService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "services",
                className: "py-24 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#26a8a8] text-sm font-semibold tracking-wider uppercase",
                                    children: "What We Do"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-light text-[#1a1f2e] mt-4 text-balance",
                                    children: "Our Services"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#4a5568] mt-4 max-w-2xl mx-auto",
                                    children: "Layanan profesional website untuk memenuhi berbagai kebutuhan digital bisnis Anda"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 w-20 bg-gradient-to-r from-[#26a8a8] to-[#86bc25] mx-auto mt-6 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-8",
                            children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group relative bg-white rounded-2xl p-8 border border-[#e5e7eb] hover:border-transparent hover:shadow-2xl hover:shadow-[#1a1f2e]/10 transition-all duration-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                            style: {
                                                backgroundColor: `${service.color}05`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300",
                                                    style: {
                                                        backgroundColor: `${service.color}15`
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                                        className: "w-7 h-7 transition-colors duration-300",
                                                        style: {
                                                            color: service.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-[#1a1f2e] mb-3 group-hover:text-[#26a8a8] transition-colors duration-300",
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#4a5568] leading-relaxed",
                                                    children: service.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                service.hasDetail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedService(service),
                                                    className: "mt-6 flex items-center gap-2 text-[#26a8a8] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-[#1e8a8a]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Learn more"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            selectedService && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                        onClick: ()=>setSelectedService(null)
                    }, void 0, false, {
                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedService(null),
                                className: "absolute top-4 right-4 w-10 h-10 bg-[#1a1f2e]/10 hover:bg-[#1a1f2e]/20 rounded-full flex items-center justify-center transition-colors z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-[#1a1f2e]"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 pb-6",
                                style: {
                                    background: `linear-gradient(135deg, ${selectedService.color}10, ${selectedService.color}05)`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-xl flex items-center justify-center mb-4",
                                        style: {
                                            backgroundColor: `${selectedService.color}20`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(selectedService.icon, {
                                            className: "w-8 h-8",
                                            style: {
                                                color: selectedService.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-[#1a1f2e]",
                                        children: selectedService.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#4a5568] mt-2",
                                        children: selectedService.detail?.fullDescription
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-8 py-6 border-t border-[#e5e7eb]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-semibold text-[#1a1f2e] mb-4",
                                        children: "Fitur Layanan"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid sm:grid-cols-2 gap-3",
                                        children: selectedService.detail?.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                                        style: {
                                                            backgroundColor: `${selectedService.color}20`
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-3 h-3",
                                                            style: {
                                                                color: selectedService.color
                                                            },
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#4a5568] text-sm",
                                                        children: feature
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-8 py-6 border-t border-[#e5e7eb]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-semibold text-[#1a1f2e] mb-4",
                                        children: "Proses Kerja"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid sm:grid-cols-2 gap-4",
                                        children: selectedService.detail?.process.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm",
                                                        style: {
                                                            backgroundColor: selectedService.color
                                                        },
                                                        children: index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-[#1a1f2e]",
                                                                children: item.step
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-[#4a5568]",
                                                                children: item.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-8 py-6 border-t border-[#e5e7eb] bg-[#f5f7fa] rounded-b-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#4a5568] text-sm",
                                            children: "Tertarik dengan layanan ini?"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg",
                                            style: {
                                                backgroundColor: selectedService.color
                                            },
                                            children: "Hubungi Kami"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/services-section.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(ServicesSection, "RVFPamKAVs5WA/LmvTy27MbrF0M=");
_c = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/floating-chat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const contactOptions = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
        label: "WhatsApp",
        href: "https://wa.me/6281234567890",
        color: "#25D366",
        bgColor: "bg-[#25D366]"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        label: "Email",
        href: "mailto:contact@nexusadvisory.com",
        color: "#26a8a8",
        bgColor: "bg-[#26a8a8]"
    }
];
function FloatingChat() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3",
        children: [
            contactOptions.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: option.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform", option.bgColor, "hover:scale-110", isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"),
                    style: {
                        transitionDelay: isOpen ? `${(contactOptions.length - 1 - index) * 75}ms` : `${index * 50}ms`
                    },
                    "aria-label": option.label,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(option.icon, {
                        className: "w-5 h-5 text-white"
                    }, void 0, false, {
                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/floating-chat.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, option.label, false, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/floating-chat.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-105", isOpen ? "bg-[#1a1f2e] rotate-0" : "bg-gradient-to-r from-[#26a8a8] to-[#86bc25]"),
                "aria-label": isOpen ? "Close contact menu" : "Open contact menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-6 h-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 text-white absolute inset-0 transition-all duration-300", isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100")
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/floating-chat.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 text-white absolute inset-0 transition-all duration-300", isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0")
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/floating-chat.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/floating-chat.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/floating-chat.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-16 bottom-0 bg-[#1a1f2e] text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300", isOpen ? "opacity-0 pointer-events-none" : "opacity-100"),
                children: [
                    "Need help?",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-[#1a1f2e] rotate-45"
                    }, void 0, false, {
                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/floating-chat.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/floating-chat.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/floating-chat.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(FloatingChat, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = FloatingChat;
var _c;
__turbopack_context__.k.register(_c, "FloatingChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_OPENSTARTUP_Company%20Profile%20-%20QuantumTech_f7fa1c24._.js.map