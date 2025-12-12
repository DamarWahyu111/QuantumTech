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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
                label: "Testimonials",
                href: "/testimonials"
            },
            {
                label: "Submit Testimonial",
                href: "/submit-testimonial"
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
        title: "Testimonials",
        description: "What our clients say about us",
        href: "/testimonials"
    },
    {
        title: "Submit Testimonial",
        description: "Share your experience with us",
        href: "/submit-testimonial"
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
    const [mobileActiveDropdown, setMobileActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mobileSearchQuery, setMobileSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mobileSearchResults, setMobileSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
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
            if (mobileSearchQuery.trim() === "") {
                setMobileSearchResults([]);
            } else {
                const filtered = searchData.filter({
                    "Header.useEffect.filtered": (item)=>item.title.toLowerCase().includes(mobileSearchQuery.toLowerCase()) || item.description.toLowerCase().includes(mobileSearchQuery.toLowerCase())
                }["Header.useEffect.filtered"]);
                setMobileSearchResults(filtered);
            }
        }
    }["Header.useEffect"], [
        mobileSearchQuery
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
    const handleMobileLinkClick = (href)=>{
        setMobileMenuOpen(false);
        setMobileActiveDropdown(null);
        setMobileSearchQuery("");
        setMobileSearchResults([]);
        router.push(href);
    };
    const handleMobileSearchClick = (href)=>{
        setMobileMenuOpen(false);
        setMobileSearchQuery("");
        setMobileSearchResults([]);
        router.push(href);
    };
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
                                        lineNumber: 141,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                            lineNumber: 139,
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
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 149,
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
                                                    lineNumber: 167,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                            lineNumber: 146,
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
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "Search"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 185,
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
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 195,
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
                                                                    lineNumber: 217,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-white/50 mt-0.5",
                                                                    children: result.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 21
                                                }, this),
                                                searchQuery && searchResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-6 text-center text-white/40 text-sm",
                                                    children: "No results found"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 text-white/80 hover:text-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "INDONESIA - ID"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden text-white p-2",
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                lineNumber: 239,
                                columnNumber: 31
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                lineNumber: 239,
                                columnNumber: 59
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("md:hidden bg-[#1a1f2e] border-t border-white/10 overflow-hidden transition-all duration-300", mobileMenuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-4 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pb-4 border-b border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search... (try 'website')",
                                            value: mobileSearchQuery,
                                            onChange: (e)=>setMobileSearchQuery(e.target.value),
                                            className: "w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#26a8a8]"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this),
                                mobileSearchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 bg-white/5 rounded-lg border border-white/10 overflow-hidden",
                                    children: mobileSearchResults.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleMobileSearchClick(result.href),
                                            className: "w-full text-left px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium text-white",
                                                    children: result.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-white/50 mt-0.5",
                                                    children: result.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this),
                                mobileSearchQuery && mobileSearchResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 px-4 py-4 text-center text-white/40 text-sm bg-white/5 rounded-lg",
                                    children: [
                                        'No results found for "',
                                        mobileSearchQuery,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this),
                        navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-white/5 last:border-b-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "flex items-center justify-between w-full text-white/80 hover:text-white text-sm font-medium py-3",
                                        onClick: ()=>setMobileActiveDropdown(mobileActiveDropdown === item.label ? null : item.label),
                                        children: [
                                            item.label,
                                            item.hasDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform duration-200", mobileActiveDropdown === item.label && "rotate-180")
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this),
                                    item.hasDropdown && mobileActiveDropdown === item.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pl-4 pb-3 space-y-1",
                                        children: item.items?.map((subItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleMobileLinkClick(subItem.href),
                                                className: "block w-full text-left py-2.5 px-3 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors",
                                                children: subItem.label
                                            }, subItem.label, false, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                                lineNumber: 308,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 border-t border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "flex items-center gap-2 text-white/60 hover:text-white transition-colors py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "INDONESIA - ID"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(Header, "X12wFLOyQWXXsu/+l176tQx+fVM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
;
;
;
const footerLinks = {
    company: [
        {
            label: "About Us",
            href: "/#about"
        },
        {
            label: "Our Team",
            href: "/our-team"
        },
        {
            label: "Careers",
            href: "/careers"
        },
        {
            label: "News",
            href: "/blog"
        }
    ],
    services: [
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
            label: "E-Commerce",
            href: "/#services"
        }
    ],
    resources: [
        {
            label: "Blog",
            href: "/blog"
        },
        {
            label: "Case Studies",
            href: "/case-studies"
        },
        {
            label: "Portfolio",
            href: "/case-studies"
        },
        {
            label: "Contact",
            href: "/#contact"
        }
    ]
};
const socialLinks = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        href: "#",
        label: "LinkedIn"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
        href: "#",
        label: "Twitter"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        href: "#",
        label: "Instagram"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
        href: "#",
        label: "Facebook"
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#1a1f2e] text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-5 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold tracking-tight",
                                        children: [
                                            "Quantum",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#86bc25]",
                                                children: "Tech"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                                lineNumber: 41,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-white/60 leading-relaxed max-w-sm",
                                    children: "Perusahaan teknologi jasa website yang menghadirkan solusi digital berkualitas tinggi untuk bisnis Anda di Indonesia."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mt-6",
                                    children: socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: social.href,
                                            className: "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#26a8a8] transition-colors duration-300",
                                            "aria-label": social.label,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this)
                                        }, social.label, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-white mb-4",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: footerLinks.company.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-white/60 hover:text-[#86bc25] transition-colors duration-300",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        }, link.label, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-white mb-4",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: footerLinks.services.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-white/60 hover:text-[#86bc25] transition-colors duration-300",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        }, link.label, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-white mb-4",
                                    children: "Resources"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: footerLinks.resources.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-white/60 hover:text-[#86bc25] transition-colors duration-300",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this)
                                        }, link.label, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/40 text-sm",
                            children: "© 2025 QuantumTech. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "text-white/40 hover:text-white/60 transition-colors",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "text-white/40 hover:text-white/60 transition-colors",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "text-white/40 hover:text-white/60 transition-colors",
                                    children: "Cookie Policy"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
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
        href: "https://wa.me/6282327686909",
        color: "#25D366",
        bgColor: "bg-[#25D366]"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        label: "Email",
        href: "damarwah13@gmail.com",
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
"[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubmitTesti
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/ui/textarea.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SubmitTesti() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        company: "",
        position: "",
        service: "",
        rating: 0,
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredStar, setHoveredStar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const emailTo = "damarwah13@gmail.com";
        const subject = `Testimonial Baru dari ${formData.name} - QuantumTech`;
        const emailBody = `
TESTIMONIAL BARU - QUANTUMTECH
${"=".repeat(50)}

INFORMASI CLIENT
${"-".repeat(50)}
Nama Lengkap    : ${formData.name}
Email           : ${formData.email}
Perusahaan      : ${formData.company || "-"}
Jabatan         : ${formData.position || "-"}
Layanan         : ${formData.service}
Rating          : ${"⭐".repeat(formData.rating)} (${formData.rating}/5)

TESTIMONIAL
${"-".repeat(50)}
${formData.message}

${"=".repeat(50)}
Dikirim pada: ${new Date().toLocaleString("id-ID", {
            dateStyle: "full",
            timeStyle: "short"
        })}

Catatan: Silakan review testimonial ini sebelum dipublikasikan di website.
    `.trim();
        // Buka email client dengan data yang sudah diformat
        const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
        // Reset form dan tampilkan sukses
        setIsSubmitted(true);
        setTimeout(()=>{
            setFormData({
                name: "",
                email: "",
                company: "",
                position: "",
                service: "",
                rating: 0,
                message: ""
            });
            setIsSubmitted(false);
        }, 3000);
    };
    if (isSubmitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "w-16 h-16 text-emerald-500 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-gray-900 mb-2",
                    children: "Terima Kasih!"
                }, void 0, false, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "Testimonial Anda telah dikirim. Tim kami akan segera meninjaunya."
                }, void 0, false, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-[#1a1f2e] via-[#26a8a8] to-[#86bc25] p-6 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold mb-2",
                            children: "Bagikan Pengalaman Anda"
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-200",
                            children: "Kami sangat menghargai feedback Anda untuk terus meningkatkan layanan kami"
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-8 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: [
                                        "Nama Lengkap ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 100,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "text",
                                    required: true,
                                    value: formData.name,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            name: e.target.value
                                        }),
                                    placeholder: "John Doe",
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: [
                                        "Email ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 115,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "email",
                                    required: true,
                                    value: formData.email,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            email: e.target.value
                                        }),
                                    placeholder: "john@company.com",
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Perusahaan"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "text",
                                            value: formData.company,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    company: e.target.value
                                                }),
                                            placeholder: "PT. Example",
                                            className: "w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Jabatan"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "text",
                                            value: formData.position,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    position: e.target.value
                                                }),
                                            placeholder: "CEO",
                                            className: "w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: [
                                        "Layanan yang Digunakan ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 154,
                                            columnNumber: 38
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    required: true,
                                    value: formData.service,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            service: e.target.value
                                        }),
                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26a8a8] focus:border-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Pilih Layanan"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Web Design",
                                            children: "Web Design"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Website Responsive",
                                            children: "Website Responsive"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Web Development",
                                            children: "Web Development"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: [
                                        "Rating ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 172,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5
                                        ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setFormData({
                                                        ...formData,
                                                        rating: star
                                                    }),
                                                onMouseEnter: ()=>setHoveredStar(star),
                                                onMouseLeave: ()=>setHoveredStar(0),
                                                className: "transition-transform hover:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: `w-8 h-8 ${star <= (hoveredStar || formData.rating) ? "fill-[#86bc25] text-[#86bc25]" : "text-gray-300"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this)
                                            }, star, false, {
                                                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-sm text-gray-600 self-center",
                                            children: formData.rating > 0 ? `${formData.rating}/5` : "Pilih rating"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: [
                                        "Testimonial Anda ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                            lineNumber: 200,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    required: true,
                                    value: formData.message,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            message: e.target.value
                                        }),
                                    placeholder: "Ceritakan pengalaman Anda menggunakan layanan kami...",
                                    rows: 6,
                                    className: "w-full resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: [
                                        "Minimal 50 karakter (",
                                        formData.message.length,
                                        "/50)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            disabled: formData.rating === 0 || formData.message.length < 50,
                            className: "w-full bg-gradient-to-r from-[#26a8a8] to-[#86bc25] hover:from-[#1f8888] hover:to-[#6fa01f] text-white py-6 text-lg font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-5 h-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                "Kirim Testimonial"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(SubmitTesti, "4qi9dk6zOfe/d6QWPvAiEf3IStQ=");
_c = SubmitTesti;
var _c;
__turbopack_context__.k.register(_c, "SubmitTesti");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubmitTestimonialPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$floating$2d$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/floating-chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$submitTesti$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/components/submitTesti.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function SubmitTestimonialPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#1a1f2e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-32 pb-12 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-light text-white mb-6",
                            children: [
                                "Bagikan ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#86bc25]",
                                    children: "Pengalaman"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 21
                                }, this),
                                " Anda"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 text-lg",
                            children: "Kami sangat menghargai feedback dari klien kami. Ceritakan pengalaman Anda bekerja sama dengan QuantumTech."
                        }, void 0, false, {
                            fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pb-20 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$submitTesti$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$OPENSTARTUP$2f$Company__Profile__$2d$__QuantumTech$2f$components$2f$floating$2d$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/OPENSTARTUP/Company Profile - QuantumTech/app/submit-testimonial/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = SubmitTestimonialPage;
var _c;
__turbopack_context__.k.register(_c, "SubmitTestimonialPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_OPENSTARTUP_Company%20Profile%20-%20QuantumTech_99e66760._.js.map