"use strict";
(() => {
    var Dl = Object.create;
    var Ro = Object.defineProperty;
    var Ll = Object.getOwnPropertyDescriptor;
    var Nl = Object.getOwnPropertyNames;
    var Rl = Object.getPrototypeOf,
        Il = Object.prototype.hasOwnProperty;
    var Fl = (l, e) => () => (e || l((e = { exports: {} }).exports, e), e.exports);
    var Bl = (l, e, i, t) => {
        if ((e && typeof e == "object") || typeof e == "function")
            for (let n of Nl(e))
                !Il.call(l, n) && n !== i && Ro(l, n, { get: () => e[n], enumerable: !(t = Ll(e, n)) || t.enumerable });
        return l;
    };
    var zl = (l, e, i) => (
        (i = l != null ? Dl(Rl(l)) : {}),
        Bl(e || !l || !l.__esModule ? Ro(i, "default", { value: l, enumerable: !0 }) : i, l)
    );
    var Pl = Fl((Ao, Mo) => {
        typeof navigator == "object" &&
            (function (l, e) {
                typeof Ao == "object" && typeof Mo != "undefined"
                    ? (Mo.exports = e())
                    : typeof define == "function" && define.amd
                      ? define("Plyr", e)
                      : ((l = typeof globalThis != "undefined" ? globalThis : l || self).Plyr = e());
            })(Ao, function () {
                "use strict";
                function l(r, u, o) {
                    return (
                        (u = (function (h) {
                            var m = (function (p, v) {
                                if (typeof p != "object" || p === null) return p;
                                var x = p[Symbol.toPrimitive];
                                if (x !== void 0) {
                                    var E = x.call(p, v || "default");
                                    if (typeof E != "object") return E;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return (v === "string" ? String : Number)(p);
                            })(h, "string");
                            return typeof m == "symbol" ? m : String(m);
                        })(u)) in r
                            ? Object.defineProperty(r, u, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                            : (r[u] = o),
                        r
                    );
                }
                function e(r, u) {
                    for (var o = 0; o < u.length; o++) {
                        var h = u[o];
                        (h.enumerable = h.enumerable || !1),
                            (h.configurable = !0),
                            "value" in h && (h.writable = !0),
                            Object.defineProperty(r, h.key, h);
                    }
                }
                function i(r, u, o) {
                    return (
                        u in r
                            ? Object.defineProperty(r, u, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                            : (r[u] = o),
                        r
                    );
                }
                function t(r, u) {
                    var o = Object.keys(r);
                    if (Object.getOwnPropertySymbols) {
                        var h = Object.getOwnPropertySymbols(r);
                        u &&
                            (h = h.filter(function (m) {
                                return Object.getOwnPropertyDescriptor(r, m).enumerable;
                            })),
                            o.push.apply(o, h);
                    }
                    return o;
                }
                function n(r) {
                    for (var u = 1; u < arguments.length; u++) {
                        var o = arguments[u] != null ? arguments[u] : {};
                        u % 2
                            ? t(Object(o), !0).forEach(function (h) {
                                  i(r, h, o[h]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                              : t(Object(o)).forEach(function (h) {
                                    Object.defineProperty(r, h, Object.getOwnPropertyDescriptor(o, h));
                                });
                    }
                    return r;
                }
                let P = (r) => (r != null ? r.constructor : null),
                    A = (r, u) => !!(r && u && r instanceof u),
                    O = (r) => r == null,
                    D = (r) => P(r) === Object,
                    M = (r) => P(r) === String,
                    R = (r) => typeof r == "function",
                    I = (r) => Array.isArray(r),
                    L = (r) => A(r, NodeList),
                    F = (r) => O(r) || ((M(r) || I(r) || L(r)) && !r.length) || (D(r) && !Object.keys(r).length);
                var f = {
                    nullOrUndefined: O,
                    object: D,
                    number: (r) => P(r) === Number && !Number.isNaN(r),
                    string: M,
                    boolean: (r) => P(r) === Boolean,
                    function: R,
                    array: I,
                    weakMap: (r) => A(r, WeakMap),
                    nodeList: L,
                    element: (r) =>
                        r !== null &&
                        typeof r == "object" &&
                        r.nodeType === 1 &&
                        typeof r.style == "object" &&
                        typeof r.ownerDocument == "object",
                    textNode: (r) => P(r) === Text,
                    event: (r) => A(r, Event),
                    keyboardEvent: (r) => A(r, KeyboardEvent),
                    cue: (r) => A(r, window.TextTrackCue) || A(r, window.VTTCue),
                    track: (r) => A(r, TextTrack) || (!O(r) && M(r.kind)),
                    promise: (r) => A(r, Promise) && R(r.then),
                    url: (r) => {
                        if (A(r, window.URL)) return !0;
                        if (!M(r)) return !1;
                        let u = r;
                        (r.startsWith("http://") && r.startsWith("https://")) || (u = `http://${r}`);
                        try {
                            return !F(new URL(u).hostname);
                        } catch {
                            return !1;
                        }
                    },
                    empty: F,
                };
                let H = (() => {
                    let r = document.createElement("span"),
                        u = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend",
                        },
                        o = Object.keys(u).find((h) => r.style[h] !== void 0);
                    return !!f.string(o) && u[o];
                })();
                function W(r, u) {
                    setTimeout(() => {
                        try {
                            (r.hidden = !0), r.offsetHeight, (r.hidden = !1);
                        } catch {}
                    }, u);
                }
                var U = {
                    isIE: !!window.document.documentMode,
                    isEdge: /Edge/g.test(navigator.userAgent),
                    isWebKit:
                        "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent),
                    isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1,
                    isIPadOS: navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1,
                    isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1,
                };
                function be(r, u) {
                    return u.split(".").reduce((o, h) => o && o[h], r);
                }
                function X(r = {}, ...u) {
                    if (!u.length) return r;
                    let o = u.shift();
                    return f.object(o)
                        ? (Object.keys(o).forEach((h) => {
                              f.object(o[h])
                                  ? (Object.keys(r).includes(h) || Object.assign(r, { [h]: {} }), X(r[h], o[h]))
                                  : Object.assign(r, { [h]: o[h] });
                          }),
                          X(r, ...u))
                        : r;
                }
                function oe(r, u) {
                    let o = r.length ? r : [r];
                    Array.from(o)
                        .reverse()
                        .forEach((h, m) => {
                            let p = m > 0 ? u.cloneNode(!0) : u,
                                v = h.parentNode,
                                x = h.nextSibling;
                            p.appendChild(h), x ? v.insertBefore(p, x) : v.appendChild(p);
                        });
                }
                function K(r, u) {
                    f.element(r) &&
                        !f.empty(u) &&
                        Object.entries(u)
                            .filter(([, o]) => !f.nullOrUndefined(o))
                            .forEach(([o, h]) => r.setAttribute(o, h));
                }
                function q(r, u, o) {
                    let h = document.createElement(r);
                    return f.object(u) && K(h, u), f.string(o) && (h.innerText = o), h;
                }
                function ae(r, u, o, h) {
                    f.element(u) && u.appendChild(q(r, o, h));
                }
                function de(r) {
                    f.nodeList(r) || f.array(r)
                        ? Array.from(r).forEach(de)
                        : f.element(r) && f.element(r.parentNode) && r.parentNode.removeChild(r);
                }
                function C(r) {
                    if (!f.element(r)) return;
                    let { length: u } = r.childNodes;
                    for (; u > 0; ) r.removeChild(r.lastChild), (u -= 1);
                }
                function ze(r, u) {
                    return f.element(u) && f.element(u.parentNode) && f.element(r)
                        ? (u.parentNode.replaceChild(r, u), r)
                        : null;
                }
                function Ce(r, u) {
                    if (!f.string(r) || f.empty(r)) return {};
                    let o = {},
                        h = X({}, u);
                    return (
                        r.split(",").forEach((m) => {
                            let p = m.trim(),
                                v = p.replace(".", ""),
                                x = p.replace(/[[\]]/g, "").split("="),
                                [E] = x,
                                N = x.length > 1 ? x[1].replace(/["']/g, "") : "";
                            switch (p.charAt(0)) {
                                case ".":
                                    f.string(h.class) ? (o.class = `${h.class} ${v}`) : (o.class = v);
                                    break;
                                case "#":
                                    o.id = p.replace("#", "");
                                    break;
                                case "[":
                                    o[E] = N;
                            }
                        }),
                        X(h, o)
                    );
                }
                function st(r, u) {
                    if (!f.element(r)) return;
                    let o = u;
                    f.boolean(o) || (o = !r.hidden), (r.hidden = o);
                }
                function ie(r, u, o) {
                    if (f.nodeList(r)) return Array.from(r).map((h) => ie(h, u, o));
                    if (f.element(r)) {
                        let h = "toggle";
                        return o !== void 0 && (h = o ? "add" : "remove"), r.classList[h](u), r.classList.contains(u);
                    }
                    return !1;
                }
                function Qe(r, u) {
                    return f.element(r) && r.classList.contains(u);
                }
                function xe(r, u) {
                    let { prototype: o } = Element;
                    return (
                        o.matches ||
                        o.webkitMatchesSelector ||
                        o.mozMatchesSelector ||
                        o.msMatchesSelector ||
                        function () {
                            return Array.from(document.querySelectorAll(u)).includes(this);
                        }
                    ).call(r, u);
                }
                function $e(r) {
                    return this.elements.container.querySelectorAll(r);
                }
                function ge(r) {
                    return this.elements.container.querySelector(r);
                }
                function Ei(r = null, u = !1) {
                    f.element(r) && r.focus({ preventScroll: !0, focusVisible: u });
                }
                let bt = {
                        "audio/ogg": "vorbis",
                        "audio/wav": "1",
                        "video/webm": "vp8, vorbis",
                        "video/mp4": "avc1.42E01E, mp4a.40.2",
                        "video/ogg": "theora",
                    },
                    ve = {
                        audio: "canPlayType" in document.createElement("audio"),
                        video: "canPlayType" in document.createElement("video"),
                        check(r, u) {
                            let o = ve[r] || u !== "html5";
                            return { api: o, ui: o && ve.rangeInput };
                        },
                        pip: !(
                            U.isIPhone ||
                            (!f.function(q("video").webkitSetPresentationMode) &&
                                (!document.pictureInPictureEnabled || q("video").disablePictureInPicture))
                        ),
                        airplay: f.function(window.WebKitPlaybackTargetAvailabilityEvent),
                        playsinline: "playsInline" in document.createElement("video"),
                        mime(r) {
                            if (f.empty(r)) return !1;
                            let [u] = r.split("/"),
                                o = r;
                            if (!this.isHTML5 || u !== this.type) return !1;
                            Object.keys(bt).includes(o) && (o += `; codecs="${bt[r]}"`);
                            try {
                                return !!(o && this.media.canPlayType(o).replace(/no/, ""));
                            } catch {
                                return !1;
                            }
                        },
                        textTracks: "textTracks" in document.createElement("video"),
                        rangeInput: (() => {
                            let r = document.createElement("input");
                            return (r.type = "range"), r.type === "range";
                        })(),
                        touch: "ontouchstart" in document.documentElement,
                        transitions: H !== !1,
                        reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches,
                    },
                    we = (() => {
                        let r = !1;
                        try {
                            let u = Object.defineProperty({}, "passive", { get: () => ((r = !0), null) });
                            window.addEventListener("test", null, u), window.removeEventListener("test", null, u);
                        } catch {}
                        return r;
                    })();
                function He(r, u, o, h = !1, m = !0, p = !1) {
                    if (!r || !("addEventListener" in r) || f.empty(u) || !f.function(o)) return;
                    let v = u.split(" "),
                        x = p;
                    we && (x = { passive: m, capture: p }),
                        v.forEach((E) => {
                            this &&
                                this.eventListeners &&
                                h &&
                                this.eventListeners.push({ element: r, type: E, callback: o, options: x }),
                                r[h ? "addEventListener" : "removeEventListener"](E, o, x);
                        });
                }
                function ne(r, u = "", o, h = !0, m = !1) {
                    He.call(this, r, u, o, !0, h, m);
                }
                function St(r, u = "", o, h = !0, m = !1) {
                    He.call(this, r, u, o, !1, h, m);
                }
                function ot(r, u = "", o, h = !0, m = !1) {
                    let p = (...v) => {
                        St(r, u, p, h, m), o.apply(this, v);
                    };
                    He.call(this, r, u, p, !0, h, m);
                }
                function S(r, u = "", o = !1, h = {}) {
                    if (!f.element(r) || f.empty(u)) return;
                    let m = new CustomEvent(u, { bubbles: o, detail: { ...h, plyr: this } });
                    r.dispatchEvent(m);
                }
                function ci() {
                    this &&
                        this.eventListeners &&
                        (this.eventListeners.forEach((r) => {
                            let { element: u, type: o, callback: h, options: m } = r;
                            u.removeEventListener(o, h, m);
                        }),
                        (this.eventListeners = []));
                }
                function Le() {
                    return new Promise((r) =>
                        this.ready ? setTimeout(r, 0) : ne.call(this, this.elements.container, "ready", r)
                    ).then(() => {});
                }
                function at(r) {
                    f.promise(r) && r.then(null, () => {});
                }
                function Jt(r) {
                    return f.array(r) ? r.filter((u, o) => r.indexOf(u) === o) : r;
                }
                function Ai(r, u) {
                    return f.array(r) && r.length
                        ? r.reduce((o, h) => (Math.abs(h - u) < Math.abs(o - u) ? h : o))
                        : null;
                }
                function ut(r) {
                    return !(!window || !window.CSS) && window.CSS.supports(r);
                }
                let Ui = [
                    [1, 1],
                    [4, 3],
                    [3, 4],
                    [5, 4],
                    [4, 5],
                    [3, 2],
                    [2, 3],
                    [16, 10],
                    [10, 16],
                    [16, 9],
                    [9, 16],
                    [21, 9],
                    [9, 21],
                    [32, 9],
                    [9, 32],
                ].reduce((r, [u, o]) => ({ ...r, [u / o]: [u, o] }), {});
                function ui(r) {
                    return f.array(r) || (f.string(r) && r.includes(":"))
                        ? (f.array(r) ? r : r.split(":")).map(Number).every(f.number)
                        : !1;
                }
                function Me(r) {
                    if (!f.array(r) || !r.every(f.number)) return null;
                    let [u, o] = r,
                        h = (p, v) => (v === 0 ? p : h(v, p % v)),
                        m = h(u, o);
                    return [u / m, o / m];
                }
                function dt(r) {
                    let u = (h) => (ui(h) ? h.split(":").map(Number) : null),
                        o = u(r);
                    if (
                        (o === null && (o = u(this.config.ratio)),
                        o === null && !f.empty(this.embed) && f.array(this.embed.ratio) && ({ ratio: o } = this.embed),
                        o === null && this.isHTML5)
                    ) {
                        let { videoWidth: h, videoHeight: m } = this.media;
                        o = [h, m];
                    }
                    return Me(o);
                }
                function Ue(r) {
                    if (!this.isVideo) return {};
                    let { wrapper: u } = this.elements,
                        o = dt.call(this, r);
                    if (!f.array(o)) return {};
                    let [h, m] = Me(o),
                        p = (100 / h) * m;
                    if (
                        (ut(`aspect-ratio: ${h}/${m}`)
                            ? (u.style.aspectRatio = `${h}/${m}`)
                            : (u.style.paddingBottom = `${p}%`),
                        this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
                    ) {
                        let v =
                                (100 / this.media.offsetWidth) *
                                parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                            x = (v - p) / (v / 50);
                        this.fullscreen.active
                            ? (u.style.paddingBottom = null)
                            : (this.media.style.transform = `translateY(-${x}%)`);
                    } else this.isHTML5 && u.classList.add(this.config.classNames.videoFixedRatio);
                    return { padding: p, ratio: o };
                }
                function ji(r, u, o = 0.05) {
                    let h = r / u,
                        m = Ai(Object.keys(Ui), h);
                    return Math.abs(m - h) <= o ? Ui[m] : [r, u];
                }
                let Ne = {
                    getSources() {
                        return this.isHTML5
                            ? Array.from(this.media.querySelectorAll("source")).filter((r) => {
                                  let u = r.getAttribute("type");
                                  return !!f.empty(u) || ve.mime.call(this, u);
                              })
                            : [];
                    },
                    getQualityOptions() {
                        return this.config.quality.forced
                            ? this.config.quality.options
                            : Ne.getSources
                                  .call(this)
                                  .map((r) => Number(r.getAttribute("size")))
                                  .filter(Boolean);
                    },
                    setup() {
                        if (!this.isHTML5) return;
                        let r = this;
                        (r.options.speed = r.config.speed.options),
                            f.empty(this.config.ratio) || Ue.call(r),
                            Object.defineProperty(r.media, "quality", {
                                get() {
                                    let u = Ne.getSources.call(r).find((o) => o.getAttribute("src") === r.source);
                                    return u && Number(u.getAttribute("size"));
                                },
                                set(u) {
                                    if (r.quality !== u) {
                                        if (r.config.quality.forced && f.function(r.config.quality.onChange))
                                            r.config.quality.onChange(u);
                                        else {
                                            let o = Ne.getSources
                                                .call(r)
                                                .find((E) => Number(E.getAttribute("size")) === u);
                                            if (!o) return;
                                            let {
                                                currentTime: h,
                                                paused: m,
                                                preload: p,
                                                readyState: v,
                                                playbackRate: x,
                                            } = r.media;
                                            (r.media.src = o.getAttribute("src")),
                                                (p !== "none" || v) &&
                                                    (r.once("loadedmetadata", () => {
                                                        (r.speed = x), (r.currentTime = h), m || at(r.play());
                                                    }),
                                                    r.media.load());
                                        }
                                        S.call(r, r.media, "qualitychange", !1, { quality: u });
                                    }
                                },
                            });
                    },
                    cancelRequests() {
                        this.isHTML5 &&
                            (de(Ne.getSources.call(this)),
                            this.media.setAttribute("src", this.config.blankVideo),
                            this.media.load(),
                            this.debug.log("Cancelled network requests"));
                    },
                };
                function It(r, ...u) {
                    return f.empty(r) ? r : r.toString().replace(/{(\d+)}/g, (o, h) => u[h].toString());
                }
                let hi = (r = "", u = "", o = "") =>
                        r.replace(
                            new RegExp(u.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"),
                            o.toString()
                        ),
                    di = (r = "") =>
                        r.toString().replace(/\w\S*/g, (u) => u.charAt(0).toUpperCase() + u.slice(1).toLowerCase());
                function Yi(r = "") {
                    let u = r.toString();
                    return (
                        (u = (function (o = "") {
                            let h = o.toString();
                            return (h = hi(h, "-", " ")), (h = hi(h, "_", " ")), (h = di(h)), hi(h, " ", "");
                        })(u)),
                        u.charAt(0).toLowerCase() + u.slice(1)
                    );
                }
                function Mi(r) {
                    let u = document.createElement("div");
                    return u.appendChild(r), u.innerHTML;
                }
                let Ti = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" },
                    Z = {
                        get(r = "", u = {}) {
                            if (f.empty(r) || f.empty(u)) return "";
                            let o = be(u.i18n, r);
                            if (f.empty(o)) return Object.keys(Ti).includes(r) ? Ti[r] : "";
                            let h = { "{seektime}": u.seekTime, "{title}": u.title };
                            return (
                                Object.entries(h).forEach(([m, p]) => {
                                    o = hi(o, m, p);
                                }),
                                o
                            );
                        },
                    };
                class Ct {
                    constructor(u) {
                        l(this, "get", (o) => {
                            if (!Ct.supported || !this.enabled) return null;
                            let h = window.localStorage.getItem(this.key);
                            if (f.empty(h)) return null;
                            let m = JSON.parse(h);
                            return f.string(o) && o.length ? m[o] : m;
                        }),
                            l(this, "set", (o) => {
                                if (!Ct.supported || !this.enabled || !f.object(o)) return;
                                let h = this.get();
                                f.empty(h) && (h = {}), X(h, o);
                                try {
                                    window.localStorage.setItem(this.key, JSON.stringify(h));
                                } catch {}
                            }),
                            (this.enabled = u.config.storage.enabled),
                            (this.key = u.config.storage.key);
                    }
                    static get supported() {
                        try {
                            if (!("localStorage" in window)) return !1;
                            let u = "___test";
                            return window.localStorage.setItem(u, u), window.localStorage.removeItem(u), !0;
                        } catch {
                            return !1;
                        }
                    }
                }
                function ft(r, u = "text") {
                    return new Promise((o, h) => {
                        try {
                            let m = new XMLHttpRequest();
                            if (!("withCredentials" in m)) return;
                            m.addEventListener("load", () => {
                                if (u === "text")
                                    try {
                                        o(JSON.parse(m.responseText));
                                    } catch {
                                        o(m.responseText);
                                    }
                                else o(m.response);
                            }),
                                m.addEventListener("error", () => {
                                    throw new Error(m.status);
                                }),
                                m.open("GET", r, !0),
                                (m.responseType = u),
                                m.send();
                        } catch (m) {
                            h(m);
                        }
                    });
                }
                function Ft(r, u) {
                    if (!f.string(r)) return;
                    let o = "cache",
                        h = f.string(u),
                        m = !1,
                        p = () => document.getElementById(u) !== null,
                        v = (x, E) => {
                            (x.innerHTML = E), (h && p()) || document.body.insertAdjacentElement("afterbegin", x);
                        };
                    if (!h || !p()) {
                        let x = Ct.supported,
                            E = document.createElement("div");
                        if ((E.setAttribute("hidden", ""), h && E.setAttribute("id", u), x)) {
                            let N = window.localStorage.getItem(`${o}-${u}`);
                            if (((m = N !== null), m)) {
                                let j = JSON.parse(N);
                                v(E, j.content);
                            }
                        }
                        ft(r)
                            .then((N) => {
                                if (!f.empty(N)) {
                                    if (x)
                                        try {
                                            window.localStorage.setItem(`${o}-${u}`, JSON.stringify({ content: N }));
                                        } catch {}
                                    v(E, N);
                                }
                            })
                            .catch(() => {});
                    }
                }
                let Ht = (r) => Math.trunc((r / 60 / 60) % 60, 10),
                    Zt = (r) => Math.trunc((r / 60) % 60, 10),
                    Oi = (r) => Math.trunc(r % 60, 10);
                function fi(r = 0, u = !1, o = !1) {
                    if (!f.number(r)) return fi(void 0, u, o);
                    let h = (x) => `0${x}`.slice(-2),
                        m = Ht(r),
                        p = Zt(r),
                        v = Oi(r);
                    return (m = u || m > 0 ? `${m}:` : ""), `${o && r > 0 ? "-" : ""}${m}${h(p)}:${h(v)}`;
                }
                let B = {
                    getIconUrl() {
                        let r = new URL(this.config.iconUrl, window.location),
                            u = window.location.host ? window.location.host : window.top.location.host,
                            o = r.host !== u || (U.isIE && !window.svg4everybody);
                        return { url: this.config.iconUrl, cors: o };
                    },
                    findElements() {
                        try {
                            return (
                                (this.elements.controls = ge.call(this, this.config.selectors.controls.wrapper)),
                                (this.elements.buttons = {
                                    play: $e.call(this, this.config.selectors.buttons.play),
                                    pause: ge.call(this, this.config.selectors.buttons.pause),
                                    restart: ge.call(this, this.config.selectors.buttons.restart),
                                    rewind: ge.call(this, this.config.selectors.buttons.rewind),
                                    fastForward: ge.call(this, this.config.selectors.buttons.fastForward),
                                    mute: ge.call(this, this.config.selectors.buttons.mute),
                                    pip: ge.call(this, this.config.selectors.buttons.pip),
                                    airplay: ge.call(this, this.config.selectors.buttons.airplay),
                                    settings: ge.call(this, this.config.selectors.buttons.settings),
                                    captions: ge.call(this, this.config.selectors.buttons.captions),
                                    fullscreen: ge.call(this, this.config.selectors.buttons.fullscreen),
                                }),
                                (this.elements.progress = ge.call(this, this.config.selectors.progress)),
                                (this.elements.inputs = {
                                    seek: ge.call(this, this.config.selectors.inputs.seek),
                                    volume: ge.call(this, this.config.selectors.inputs.volume),
                                }),
                                (this.elements.display = {
                                    buffer: ge.call(this, this.config.selectors.display.buffer),
                                    currentTime: ge.call(this, this.config.selectors.display.currentTime),
                                    duration: ge.call(this, this.config.selectors.display.duration),
                                }),
                                f.element(this.elements.progress) &&
                                    (this.elements.display.seekTooltip = this.elements.progress.querySelector(
                                        `.${this.config.classNames.tooltip}`
                                    )),
                                !0
                            );
                        } catch (r) {
                            return (
                                this.debug.warn("It looks like there is a problem with your custom controls HTML", r),
                                this.toggleNativeControls(!0),
                                !1
                            );
                        }
                    },
                    createIcon(r, u) {
                        let o = "http://www.w3.org/2000/svg",
                            h = B.getIconUrl.call(this),
                            m = `${h.cors ? "" : h.url}#${this.config.iconPrefix}`,
                            p = document.createElementNS(o, "svg");
                        K(p, X(u, { "aria-hidden": "true", focusable: "false" }));
                        let v = document.createElementNS(o, "use"),
                            x = `${m}-${r}`;
                        return (
                            "href" in v && v.setAttributeNS("http://www.w3.org/1999/xlink", "href", x),
                            v.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", x),
                            p.appendChild(v),
                            p
                        );
                    },
                    createLabel(r, u = {}) {
                        let o = Z.get(r, this.config);
                        return q(
                            "span",
                            { ...u, class: [u.class, this.config.classNames.hidden].filter(Boolean).join(" ") },
                            o
                        );
                    },
                    createBadge(r) {
                        if (f.empty(r)) return null;
                        let u = q("span", { class: this.config.classNames.menu.value });
                        return u.appendChild(q("span", { class: this.config.classNames.menu.badge }, r)), u;
                    },
                    createButton(r, u) {
                        let o = X({}, u),
                            h = Yi(r),
                            m = {
                                element: "button",
                                toggle: !1,
                                label: null,
                                icon: null,
                                labelPressed: null,
                                iconPressed: null,
                            };
                        switch (
                            (["element", "icon", "label"].forEach((v) => {
                                Object.keys(o).includes(v) && ((m[v] = o[v]), delete o[v]);
                            }),
                            m.element !== "button" || Object.keys(o).includes("type") || (o.type = "button"),
                            Object.keys(o).includes("class")
                                ? o.class.split(" ").some((v) => v === this.config.classNames.control) ||
                                  X(o, { class: `${o.class} ${this.config.classNames.control}` })
                                : (o.class = this.config.classNames.control),
                            r)
                        ) {
                            case "play":
                                (m.toggle = !0),
                                    (m.label = "play"),
                                    (m.labelPressed = "pause"),
                                    (m.icon = "play"),
                                    (m.iconPressed = "pause");
                                break;
                            case "mute":
                                (m.toggle = !0),
                                    (m.label = "mute"),
                                    (m.labelPressed = "unmute"),
                                    (m.icon = "volume"),
                                    (m.iconPressed = "muted");
                                break;
                            case "captions":
                                (m.toggle = !0),
                                    (m.label = "enableCaptions"),
                                    (m.labelPressed = "disableCaptions"),
                                    (m.icon = "captions-off"),
                                    (m.iconPressed = "captions-on");
                                break;
                            case "fullscreen":
                                (m.toggle = !0),
                                    (m.label = "enterFullscreen"),
                                    (m.labelPressed = "exitFullscreen"),
                                    (m.icon = "enter-fullscreen"),
                                    (m.iconPressed = "exit-fullscreen");
                                break;
                            case "play-large":
                                (o.class += ` ${this.config.classNames.control}--overlaid`),
                                    (h = "play"),
                                    (m.label = "play"),
                                    (m.icon = "play");
                                break;
                            default:
                                f.empty(m.label) && (m.label = h), f.empty(m.icon) && (m.icon = r);
                        }
                        let p = q(m.element);
                        return (
                            m.toggle
                                ? (p.appendChild(B.createIcon.call(this, m.iconPressed, { class: "icon--pressed" })),
                                  p.appendChild(B.createIcon.call(this, m.icon, { class: "icon--not-pressed" })),
                                  p.appendChild(B.createLabel.call(this, m.labelPressed, { class: "label--pressed" })),
                                  p.appendChild(B.createLabel.call(this, m.label, { class: "label--not-pressed" })))
                                : (p.appendChild(B.createIcon.call(this, m.icon)),
                                  p.appendChild(B.createLabel.call(this, m.label))),
                            X(o, Ce(this.config.selectors.buttons[h], o)),
                            K(p, o),
                            h === "play"
                                ? (f.array(this.elements.buttons[h]) || (this.elements.buttons[h] = []),
                                  this.elements.buttons[h].push(p))
                                : (this.elements.buttons[h] = p),
                            p
                        );
                    },
                    createRange(r, u) {
                        let o = q(
                            "input",
                            X(
                                Ce(this.config.selectors.inputs[r]),
                                {
                                    type: "range",
                                    min: 0,
                                    max: 100,
                                    step: 0.01,
                                    value: 0,
                                    autocomplete: "off",
                                    role: "slider",
                                    "aria-label": Z.get(r, this.config),
                                    "aria-valuemin": 0,
                                    "aria-valuemax": 100,
                                    "aria-valuenow": 0,
                                },
                                u
                            )
                        );
                        return (this.elements.inputs[r] = o), B.updateRangeFill.call(this, o), o;
                    },
                    createProgress(r, u) {
                        let o = q(
                            "progress",
                            X(
                                Ce(this.config.selectors.display[r]),
                                { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": !0 },
                                u
                            )
                        );
                        if (r !== "volume") {
                            o.appendChild(q("span", null, "0"));
                            let h = { played: "played", buffer: "buffered" }[r],
                                m = h ? Z.get(h, this.config) : "";
                            o.innerText = `% ${m.toLowerCase()}`;
                        }
                        return (this.elements.display[r] = o), o;
                    },
                    createTime(r, u) {
                        let o = Ce(this.config.selectors.display[r], u),
                            h = q(
                                "div",
                                X(o, {
                                    class: `${o.class ? o.class : ""} ${this.config.classNames.display.time} `.trim(),
                                    "aria-label": Z.get(r, this.config),
                                    role: "timer",
                                }),
                                "00:00"
                            );
                        return (this.elements.display[r] = h), h;
                    },
                    bindMenuItemShortcuts(r, u) {
                        ne.call(
                            this,
                            r,
                            "keydown keyup",
                            (o) => {
                                if (
                                    ![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(o.key) ||
                                    (o.preventDefault(), o.stopPropagation(), o.type === "keydown")
                                )
                                    return;
                                let h = xe(r, '[role="menuitemradio"]');
                                if (!h && [" ", "ArrowRight"].includes(o.key)) B.showMenuPanel.call(this, u, !0);
                                else {
                                    let m;
                                    o.key !== " " &&
                                        (o.key === "ArrowDown" || (h && o.key === "ArrowRight")
                                            ? ((m = r.nextElementSibling),
                                              f.element(m) || (m = r.parentNode.firstElementChild))
                                            : ((m = r.previousElementSibling),
                                              f.element(m) || (m = r.parentNode.lastElementChild)),
                                        Ei.call(this, m, !0));
                                }
                            },
                            !1
                        ),
                            ne.call(this, r, "keyup", (o) => {
                                o.key === "Return" && B.focusFirstMenuItem.call(this, null, !0);
                            });
                    },
                    createMenuItem({ value: r, list: u, type: o, title: h, badge: m = null, checked: p = !1 }) {
                        let v = Ce(this.config.selectors.inputs[o]),
                            x = q(
                                "button",
                                X(v, {
                                    type: "button",
                                    role: "menuitemradio",
                                    class: `${this.config.classNames.control} ${v.class ? v.class : ""}`.trim(),
                                    "aria-checked": p,
                                    value: r,
                                })
                            ),
                            E = q("span");
                        (E.innerHTML = h),
                            f.element(m) && E.appendChild(m),
                            x.appendChild(E),
                            Object.defineProperty(x, "checked", {
                                enumerable: !0,
                                get: () => x.getAttribute("aria-checked") === "true",
                                set(N) {
                                    N &&
                                        Array.from(x.parentNode.children)
                                            .filter((j) => xe(j, '[role="menuitemradio"]'))
                                            .forEach((j) => j.setAttribute("aria-checked", "false")),
                                        x.setAttribute("aria-checked", N ? "true" : "false");
                                },
                            }),
                            this.listeners.bind(
                                x,
                                "click keyup",
                                (N) => {
                                    if (!f.keyboardEvent(N) || N.key === " ") {
                                        switch ((N.preventDefault(), N.stopPropagation(), (x.checked = !0), o)) {
                                            case "language":
                                                this.currentTrack = Number(r);
                                                break;
                                            case "quality":
                                                this.quality = r;
                                                break;
                                            case "speed":
                                                this.speed = parseFloat(r);
                                        }
                                        B.showMenuPanel.call(this, "home", f.keyboardEvent(N));
                                    }
                                },
                                o,
                                !1
                            ),
                            B.bindMenuItemShortcuts.call(this, x, o),
                            u.appendChild(x);
                    },
                    formatTime(r = 0, u = !1) {
                        return f.number(r) ? fi(r, Ht(this.duration) > 0, u) : r;
                    },
                    updateTimeDisplay(r = null, u = 0, o = !1) {
                        f.element(r) && f.number(u) && (r.innerText = B.formatTime(u, o));
                    },
                    updateVolume() {
                        this.supported.ui &&
                            (f.element(this.elements.inputs.volume) &&
                                B.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume),
                            f.element(this.elements.buttons.mute) &&
                                (this.elements.buttons.mute.pressed = this.muted || this.volume === 0));
                    },
                    setRange(r, u = 0) {
                        f.element(r) && ((r.value = u), B.updateRangeFill.call(this, r));
                    },
                    updateProgress(r) {
                        if (!this.supported.ui || !f.event(r)) return;
                        let u = 0,
                            o = (p, v) => {
                                let x = f.number(v) ? v : 0,
                                    E = f.element(p) ? p : this.elements.display.buffer;
                                if (f.element(E)) {
                                    E.value = x;
                                    let N = E.getElementsByTagName("span")[0];
                                    f.element(N) && (N.childNodes[0].nodeValue = x);
                                }
                            };
                        if (r)
                            switch (r.type) {
                                case "timeupdate":
                                case "seeking":
                                case "seeked":
                                    (h = this.currentTime),
                                        (m = this.duration),
                                        (u =
                                            h === 0 || m === 0 || Number.isNaN(h) || Number.isNaN(m)
                                                ? 0
                                                : ((h / m) * 100).toFixed(2)),
                                        r.type === "timeupdate" && B.setRange.call(this, this.elements.inputs.seek, u);
                                    break;
                                case "playing":
                                case "progress":
                                    o(this.elements.display.buffer, 100 * this.buffered);
                            }
                        var h, m;
                    },
                    updateRangeFill(r) {
                        let u = f.event(r) ? r.target : r;
                        if (f.element(u) && u.getAttribute("type") === "range") {
                            if (xe(u, this.config.selectors.inputs.seek)) {
                                u.setAttribute("aria-valuenow", this.currentTime);
                                let o = B.formatTime(this.currentTime),
                                    h = B.formatTime(this.duration),
                                    m = Z.get("seekLabel", this.config);
                                u.setAttribute(
                                    "aria-valuetext",
                                    m.replace("{currentTime}", o).replace("{duration}", h)
                                );
                            } else if (xe(u, this.config.selectors.inputs.volume)) {
                                let o = 100 * u.value;
                                u.setAttribute("aria-valuenow", o),
                                    u.setAttribute("aria-valuetext", `${o.toFixed(1)}%`);
                            } else u.setAttribute("aria-valuenow", u.value);
                            (U.isWebKit || U.isIPadOS) && u.style.setProperty("--value", (u.value / u.max) * 100 + "%");
                        }
                    },
                    updateSeekTooltip(r) {
                        var u, o;
                        if (
                            !this.config.tooltips.seek ||
                            !f.element(this.elements.inputs.seek) ||
                            !f.element(this.elements.display.seekTooltip) ||
                            this.duration === 0
                        )
                            return;
                        let h = this.elements.display.seekTooltip,
                            m = `${this.config.classNames.tooltip}--visible`,
                            p = (j) => ie(h, m, j);
                        if (this.touch) return void p(!1);
                        let v = 0,
                            x = this.elements.progress.getBoundingClientRect();
                        if (f.event(r)) v = (100 / x.width) * (r.pageX - x.left);
                        else {
                            if (!Qe(h, m)) return;
                            v = parseFloat(h.style.left, 10);
                        }
                        v < 0 ? (v = 0) : v > 100 && (v = 100);
                        let E = (this.duration / 100) * v;
                        h.innerText = B.formatTime(E);
                        let N =
                            (u = this.config.markers) === null ||
                            u === void 0 ||
                            (o = u.points) === null ||
                            o === void 0
                                ? void 0
                                : o.find(({ time: j }) => j === Math.round(E));
                        N && h.insertAdjacentHTML("afterbegin", `${N.label}<br>`),
                            (h.style.left = `${v}%`),
                            f.event(r) && ["mouseenter", "mouseleave"].includes(r.type) && p(r.type === "mouseenter");
                    },
                    timeUpdate(r) {
                        let u = !f.element(this.elements.display.duration) && this.config.invertTime;
                        B.updateTimeDisplay.call(
                            this,
                            this.elements.display.currentTime,
                            u ? this.duration - this.currentTime : this.currentTime,
                            u
                        ),
                            (r && r.type === "timeupdate" && this.media.seeking) || B.updateProgress.call(this, r);
                    },
                    durationUpdate() {
                        if (!this.supported.ui || (!this.config.invertTime && this.currentTime)) return;
                        if (this.duration >= 2 ** 32)
                            return st(this.elements.display.currentTime, !0), void st(this.elements.progress, !0);
                        f.element(this.elements.inputs.seek) &&
                            this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                        let r = f.element(this.elements.display.duration);
                        !r &&
                            this.config.displayDuration &&
                            this.paused &&
                            B.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration),
                            r && B.updateTimeDisplay.call(this, this.elements.display.duration, this.duration),
                            this.config.markers.enabled && B.setMarkers.call(this),
                            B.updateSeekTooltip.call(this);
                    },
                    toggleMenuButton(r, u) {
                        st(this.elements.settings.buttons[r], !u);
                    },
                    updateSetting(r, u, o) {
                        let h = this.elements.settings.panels[r],
                            m = null,
                            p = u;
                        if (r === "captions") m = this.currentTrack;
                        else {
                            if (
                                ((m = f.empty(o) ? this[r] : o),
                                f.empty(m) && (m = this.config[r].default),
                                !f.empty(this.options[r]) && !this.options[r].includes(m))
                            )
                                return void this.debug.warn(`Unsupported value of '${m}' for ${r}`);
                            if (!this.config[r].options.includes(m))
                                return void this.debug.warn(`Disabled value of '${m}' for ${r}`);
                        }
                        if ((f.element(p) || (p = h && h.querySelector('[role="menu"]')), !f.element(p))) return;
                        this.elements.settings.buttons[r].querySelector(
                            `.${this.config.classNames.menu.value}`
                        ).innerHTML = B.getLabel.call(this, r, m);
                        let v = p && p.querySelector(`[value="${m}"]`);
                        f.element(v) && (v.checked = !0);
                    },
                    getLabel(r, u) {
                        switch (r) {
                            case "speed":
                                return u === 1 ? Z.get("normal", this.config) : `${u}&times;`;
                            case "quality":
                                if (f.number(u)) {
                                    let o = Z.get(`qualityLabel.${u}`, this.config);
                                    return o.length ? o : `${u}p`;
                                }
                                return di(u);
                            case "captions":
                                return z.getLabel.call(this);
                            default:
                                return null;
                        }
                    },
                    setQualityMenu(r) {
                        if (!f.element(this.elements.settings.panels.quality)) return;
                        let u = "quality",
                            o = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                        f.array(r) &&
                            (this.options.quality = Jt(r).filter((p) => this.config.quality.options.includes(p)));
                        let h = !f.empty(this.options.quality) && this.options.quality.length > 1;
                        if ((B.toggleMenuButton.call(this, u, h), C(o), B.checkMenu.call(this), !h)) return;
                        let m = (p) => {
                            let v = Z.get(`qualityBadge.${p}`, this.config);
                            return v.length ? B.createBadge.call(this, v) : null;
                        };
                        this.options.quality
                            .sort((p, v) => {
                                let x = this.config.quality.options;
                                return x.indexOf(p) > x.indexOf(v) ? 1 : -1;
                            })
                            .forEach((p) => {
                                B.createMenuItem.call(this, {
                                    value: p,
                                    list: o,
                                    type: u,
                                    title: B.getLabel.call(this, "quality", p),
                                    badge: m(p),
                                });
                            }),
                            B.updateSetting.call(this, u, o);
                    },
                    setCaptionsMenu() {
                        if (!f.element(this.elements.settings.panels.captions)) return;
                        let r = "captions",
                            u = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                            o = z.getTracks.call(this),
                            h = !!o.length;
                        if ((B.toggleMenuButton.call(this, r, h), C(u), B.checkMenu.call(this), !h)) return;
                        let m = o.map((p, v) => ({
                            value: v,
                            checked: this.captions.toggled && this.currentTrack === v,
                            title: z.getLabel.call(this, p),
                            badge: p.language && B.createBadge.call(this, p.language.toUpperCase()),
                            list: u,
                            type: "language",
                        }));
                        m.unshift({
                            value: -1,
                            checked: !this.captions.toggled,
                            title: Z.get("disabled", this.config),
                            list: u,
                            type: "language",
                        }),
                            m.forEach(B.createMenuItem.bind(this)),
                            B.updateSetting.call(this, r, u);
                    },
                    setSpeedMenu() {
                        if (!f.element(this.elements.settings.panels.speed)) return;
                        let r = "speed",
                            u = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                        this.options.speed = this.options.speed.filter(
                            (h) => h >= this.minimumSpeed && h <= this.maximumSpeed
                        );
                        let o = !f.empty(this.options.speed) && this.options.speed.length > 1;
                        B.toggleMenuButton.call(this, r, o),
                            C(u),
                            B.checkMenu.call(this),
                            o &&
                                (this.options.speed.forEach((h) => {
                                    B.createMenuItem.call(this, {
                                        value: h,
                                        list: u,
                                        type: r,
                                        title: B.getLabel.call(this, "speed", h),
                                    });
                                }),
                                B.updateSetting.call(this, r, u));
                    },
                    checkMenu() {
                        let { buttons: r } = this.elements.settings,
                            u = !f.empty(r) && Object.values(r).some((o) => !o.hidden);
                        st(this.elements.settings.menu, !u);
                    },
                    focusFirstMenuItem(r, u = !1) {
                        if (this.elements.settings.popup.hidden) return;
                        let o = r;
                        f.element(o) || (o = Object.values(this.elements.settings.panels).find((m) => !m.hidden));
                        let h = o.querySelector('[role^="menuitem"]');
                        Ei.call(this, h, u);
                    },
                    toggleMenu(r) {
                        let { popup: u } = this.elements.settings,
                            o = this.elements.buttons.settings;
                        if (!f.element(u) || !f.element(o)) return;
                        let { hidden: h } = u,
                            m = h;
                        if (f.boolean(r)) m = r;
                        else if (f.keyboardEvent(r) && r.key === "Escape") m = !1;
                        else if (f.event(r)) {
                            let p = f.function(r.composedPath) ? r.composedPath()[0] : r.target,
                                v = u.contains(p);
                            if (v || (!v && r.target !== o && m)) return;
                        }
                        o.setAttribute("aria-expanded", m),
                            st(u, !m),
                            ie(this.elements.container, this.config.classNames.menu.open, m),
                            m && f.keyboardEvent(r)
                                ? B.focusFirstMenuItem.call(this, null, !0)
                                : m || h || Ei.call(this, o, f.keyboardEvent(r));
                    },
                    getMenuSize(r) {
                        let u = r.cloneNode(!0);
                        (u.style.position = "absolute"),
                            (u.style.opacity = 0),
                            u.removeAttribute("hidden"),
                            r.parentNode.appendChild(u);
                        let o = u.scrollWidth,
                            h = u.scrollHeight;
                        return de(u), { width: o, height: h };
                    },
                    showMenuPanel(r = "", u = !1) {
                        let o = this.elements.container.querySelector(`#plyr-settings-${this.id}-${r}`);
                        if (!f.element(o)) return;
                        let h = o.parentNode,
                            m = Array.from(h.children).find((p) => !p.hidden);
                        if (ve.transitions && !ve.reducedMotion) {
                            (h.style.width = `${m.scrollWidth}px`), (h.style.height = `${m.scrollHeight}px`);
                            let p = B.getMenuSize.call(this, o),
                                v = (x) => {
                                    x.target === h &&
                                        ["width", "height"].includes(x.propertyName) &&
                                        ((h.style.width = ""), (h.style.height = ""), St.call(this, h, H, v));
                                };
                            ne.call(this, h, H, v),
                                (h.style.width = `${p.width}px`),
                                (h.style.height = `${p.height}px`);
                        }
                        st(m, !0), st(o, !1), B.focusFirstMenuItem.call(this, o, u);
                    },
                    setDownloadUrl() {
                        let r = this.elements.buttons.download;
                        f.element(r) && r.setAttribute("href", this.download);
                    },
                    create(r) {
                        let {
                            bindMenuItemShortcuts: u,
                            createButton: o,
                            createProgress: h,
                            createRange: m,
                            createTime: p,
                            setQualityMenu: v,
                            setSpeedMenu: x,
                            showMenuPanel: E,
                        } = B;
                        (this.elements.controls = null),
                            f.array(this.config.controls) &&
                                this.config.controls.includes("play-large") &&
                                this.elements.container.appendChild(o.call(this, "play-large"));
                        let N = q("div", Ce(this.config.selectors.controls.wrapper));
                        this.elements.controls = N;
                        let j = { class: "plyr__controls__item" };
                        return (
                            Jt(f.array(this.config.controls) ? this.config.controls : []).forEach((te) => {
                                if (
                                    (te === "restart" && N.appendChild(o.call(this, "restart", j)),
                                    te === "rewind" && N.appendChild(o.call(this, "rewind", j)),
                                    te === "play" && N.appendChild(o.call(this, "play", j)),
                                    te === "fast-forward" && N.appendChild(o.call(this, "fast-forward", j)),
                                    te === "progress")
                                ) {
                                    let $ = q("div", { class: `${j.class} plyr__progress__container` }),
                                        se = q("div", Ce(this.config.selectors.progress));
                                    if (
                                        (se.appendChild(m.call(this, "seek", { id: `plyr-seek-${r.id}` })),
                                        se.appendChild(h.call(this, "buffer")),
                                        this.config.tooltips.seek)
                                    ) {
                                        let Te = q("span", { class: this.config.classNames.tooltip }, "00:00");
                                        se.appendChild(Te), (this.elements.display.seekTooltip = Te);
                                    }
                                    (this.elements.progress = se),
                                        $.appendChild(this.elements.progress),
                                        N.appendChild($);
                                }
                                if (
                                    (te === "current-time" && N.appendChild(p.call(this, "currentTime", j)),
                                    te === "duration" && N.appendChild(p.call(this, "duration", j)),
                                    te === "mute" || te === "volume")
                                ) {
                                    let { volume: $ } = this.elements;
                                    if (
                                        ((f.element($) && N.contains($)) ||
                                            (($ = q("div", X({}, j, { class: `${j.class} plyr__volume`.trim() }))),
                                            (this.elements.volume = $),
                                            N.appendChild($)),
                                        te === "mute" && $.appendChild(o.call(this, "mute")),
                                        te === "volume" && !U.isIos && !U.isIPadOS)
                                    ) {
                                        let se = { max: 1, step: 0.05, value: this.config.volume };
                                        $.appendChild(m.call(this, "volume", X(se, { id: `plyr-volume-${r.id}` })));
                                    }
                                }
                                if (
                                    (te === "captions" && N.appendChild(o.call(this, "captions", j)),
                                    te === "settings" && !f.empty(this.config.settings))
                                ) {
                                    let $ = q("div", X({}, j, { class: `${j.class} plyr__menu`.trim(), hidden: "" }));
                                    $.appendChild(
                                        o.call(this, "settings", {
                                            "aria-haspopup": !0,
                                            "aria-controls": `plyr-settings-${r.id}`,
                                            "aria-expanded": !1,
                                        })
                                    );
                                    let se = q("div", {
                                            class: "plyr__menu__container",
                                            id: `plyr-settings-${r.id}`,
                                            hidden: "",
                                        }),
                                        Te = q("div"),
                                        ke = q("div", { id: `plyr-settings-${r.id}-home` }),
                                        Ye = q("div", { role: "menu" });
                                    ke.appendChild(Ye),
                                        Te.appendChild(ke),
                                        (this.elements.settings.panels.home = ke),
                                        this.config.settings.forEach((ce) => {
                                            let We = q(
                                                "button",
                                                X(Ce(this.config.selectors.buttons.settings), {
                                                    type: "button",
                                                    class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                                                    role: "menuitem",
                                                    "aria-haspopup": !0,
                                                    hidden: "",
                                                })
                                            );
                                            u.call(this, We, ce),
                                                ne.call(this, We, "click", () => {
                                                    E.call(this, ce, !1);
                                                });
                                            let Y = q("span", null, Z.get(ce, this.config)),
                                                pe = q("span", { class: this.config.classNames.menu.value });
                                            (pe.innerHTML = r[ce]),
                                                Y.appendChild(pe),
                                                We.appendChild(Y),
                                                Ye.appendChild(We);
                                            let lt = q("div", { id: `plyr-settings-${r.id}-${ce}`, hidden: "" }),
                                                Wt = q("button", {
                                                    type: "button",
                                                    class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
                                                });
                                            Wt.appendChild(q("span", { "aria-hidden": !0 }, Z.get(ce, this.config))),
                                                Wt.appendChild(
                                                    q(
                                                        "span",
                                                        { class: this.config.classNames.hidden },
                                                        Z.get("menuBack", this.config)
                                                    )
                                                ),
                                                ne.call(
                                                    this,
                                                    lt,
                                                    "keydown",
                                                    (pi) => {
                                                        pi.key === "ArrowLeft" &&
                                                            (pi.preventDefault(),
                                                            pi.stopPropagation(),
                                                            E.call(this, "home", !0));
                                                    },
                                                    !1
                                                ),
                                                ne.call(this, Wt, "click", () => {
                                                    E.call(this, "home", !1);
                                                }),
                                                lt.appendChild(Wt),
                                                lt.appendChild(q("div", { role: "menu" })),
                                                Te.appendChild(lt),
                                                (this.elements.settings.buttons[ce] = We),
                                                (this.elements.settings.panels[ce] = lt);
                                        }),
                                        se.appendChild(Te),
                                        $.appendChild(se),
                                        N.appendChild($),
                                        (this.elements.settings.popup = se),
                                        (this.elements.settings.menu = $);
                                }
                                if (
                                    (te === "pip" && ve.pip && N.appendChild(o.call(this, "pip", j)),
                                    te === "airplay" && ve.airplay && N.appendChild(o.call(this, "airplay", j)),
                                    te === "download")
                                ) {
                                    let $ = X({}, j, { element: "a", href: this.download, target: "_blank" });
                                    this.isHTML5 && ($.download = "");
                                    let { download: se } = this.config.urls;
                                    !f.url(se) &&
                                        this.isEmbed &&
                                        X($, { icon: `logo-${this.provider}`, label: this.provider }),
                                        N.appendChild(o.call(this, "download", $));
                                }
                                te === "fullscreen" && N.appendChild(o.call(this, "fullscreen", j));
                            }),
                            this.isHTML5 && v.call(this, Ne.getQualityOptions.call(this)),
                            x.call(this),
                            N
                        );
                    },
                    inject() {
                        if (this.config.loadSprite) {
                            let m = B.getIconUrl.call(this);
                            m.cors && Ft(m.url, "sprite-plyr");
                        }
                        this.id = Math.floor(1e4 * Math.random());
                        let r = null;
                        this.elements.controls = null;
                        let u = { id: this.id, seektime: this.config.seekTime, title: this.config.title },
                            o = !0;
                        f.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, u)),
                            this.config.controls || (this.config.controls = []),
                            f.element(this.config.controls) || f.string(this.config.controls)
                                ? (r = this.config.controls)
                                : ((r = B.create.call(this, {
                                      id: this.id,
                                      seektime: this.config.seekTime,
                                      speed: this.speed,
                                      quality: this.quality,
                                      captions: z.getLabel.call(this),
                                  })),
                                  (o = !1));
                        let h;
                        if (
                            (o &&
                                f.string(this.config.controls) &&
                                (r = ((m) => {
                                    let p = m;
                                    return (
                                        Object.entries(u).forEach(([v, x]) => {
                                            p = hi(p, `{${v}}`, x);
                                        }),
                                        p
                                    );
                                })(r)),
                            f.string(this.config.selectors.controls.container) &&
                                (h = document.querySelector(this.config.selectors.controls.container)),
                            f.element(h) || (h = this.elements.container),
                            h[f.element(r) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", r),
                            f.element(this.elements.controls) || B.findElements.call(this),
                            !f.empty(this.elements.buttons))
                        ) {
                            let m = (p) => {
                                let v = this.config.classNames.controlPressed;
                                p.setAttribute("aria-pressed", "false"),
                                    Object.defineProperty(p, "pressed", {
                                        configurable: !0,
                                        enumerable: !0,
                                        get: () => Qe(p, v),
                                        set(x = !1) {
                                            ie(p, v, x), p.setAttribute("aria-pressed", x ? "true" : "false");
                                        },
                                    });
                            };
                            Object.values(this.elements.buttons)
                                .filter(Boolean)
                                .forEach((p) => {
                                    f.array(p) || f.nodeList(p) ? Array.from(p).filter(Boolean).forEach(m) : m(p);
                                });
                        }
                        if ((U.isEdge && W(h), this.config.tooltips.controls)) {
                            let { classNames: m, selectors: p } = this.config,
                                v = `${p.controls.wrapper} ${p.labels} .${m.hidden}`,
                                x = $e.call(this, v);
                            Array.from(x).forEach((E) => {
                                ie(E, this.config.classNames.hidden, !1), ie(E, this.config.classNames.tooltip, !0);
                            });
                        }
                    },
                    setMediaMetadata() {
                        try {
                            "mediaSession" in navigator &&
                                (navigator.mediaSession.metadata = new window.MediaMetadata({
                                    title: this.config.mediaMetadata.title,
                                    artist: this.config.mediaMetadata.artist,
                                    album: this.config.mediaMetadata.album,
                                    artwork: this.config.mediaMetadata.artwork,
                                }));
                        } catch {}
                    },
                    setMarkers() {
                        var r, u;
                        if (!this.duration || this.elements.markers) return;
                        let o =
                            (r = this.config.markers) === null ||
                            r === void 0 ||
                            (u = r.points) === null ||
                            u === void 0
                                ? void 0
                                : u.filter(({ time: E }) => E > 0 && E < this.duration);
                        if (o == null || !o.length) return;
                        let h = document.createDocumentFragment(),
                            m = document.createDocumentFragment(),
                            p = null,
                            v = `${this.config.classNames.tooltip}--visible`,
                            x = (E) => ie(p, v, E);
                        o.forEach((E) => {
                            let N = q("span", { class: this.config.classNames.marker }, ""),
                                j = (E.time / this.duration) * 100 + "%";
                            p &&
                                (N.addEventListener("mouseenter", () => {
                                    E.label || ((p.style.left = j), (p.innerHTML = E.label), x(!0));
                                }),
                                N.addEventListener("mouseleave", () => {
                                    x(!1);
                                })),
                                N.addEventListener("click", () => {
                                    this.currentTime = E.time;
                                }),
                                (N.style.left = j),
                                m.appendChild(N);
                        }),
                            h.appendChild(m),
                            this.config.tooltips.seek ||
                                ((p = q("span", { class: this.config.classNames.tooltip }, "")), h.appendChild(p)),
                            (this.elements.markers = { points: m, tip: p }),
                            this.elements.progress.appendChild(h);
                    },
                };
                function Wi(r, u = !0) {
                    let o = r;
                    if (u) {
                        let h = document.createElement("a");
                        (h.href = o), (o = h.href);
                    }
                    try {
                        return new URL(o);
                    } catch {
                        return null;
                    }
                }
                function fe(r) {
                    let u = new URLSearchParams();
                    return (
                        f.object(r) &&
                            Object.entries(r).forEach(([o, h]) => {
                                u.set(o, h);
                            }),
                        u
                    );
                }
                let z = {
                        setup() {
                            if (!this.supported.ui) return;
                            if (!this.isVideo || this.isYouTube || (this.isHTML5 && !ve.textTracks))
                                return void (
                                    f.array(this.config.controls) &&
                                    this.config.controls.includes("settings") &&
                                    this.config.settings.includes("captions") &&
                                    B.setCaptionsMenu.call(this)
                                );
                            var r, u;
                            if (
                                (f.element(this.elements.captions) ||
                                    ((this.elements.captions = q("div", Ce(this.config.selectors.captions))),
                                    this.elements.captions.setAttribute("dir", "auto"),
                                    (r = this.elements.captions),
                                    (u = this.elements.wrapper),
                                    f.element(r) && f.element(u) && u.parentNode.insertBefore(r, u.nextSibling)),
                                U.isIE && window.URL)
                            ) {
                                let p = this.media.querySelectorAll("track");
                                Array.from(p).forEach((v) => {
                                    let x = v.getAttribute("src"),
                                        E = Wi(x);
                                    E !== null &&
                                        E.hostname !== window.location.href.hostname &&
                                        ["http:", "https:"].includes(E.protocol) &&
                                        ft(x, "blob")
                                            .then((N) => {
                                                v.setAttribute("src", window.URL.createObjectURL(N));
                                            })
                                            .catch(() => {
                                                de(v);
                                            });
                                });
                            }
                            let o = Jt(
                                    (navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(
                                        (p) => p.split("-")[0]
                                    )
                                ),
                                h = (
                                    this.storage.get("language") ||
                                    this.config.captions.language ||
                                    "auto"
                                ).toLowerCase();
                            h === "auto" && ([h] = o);
                            let m = this.storage.get("captions");
                            if (
                                (f.boolean(m) || ({ active: m } = this.config.captions),
                                Object.assign(this.captions, { toggled: !1, active: m, language: h, languages: o }),
                                this.isHTML5)
                            ) {
                                let p = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                                ne.call(this, this.media.textTracks, p, z.update.bind(this));
                            }
                            setTimeout(z.update.bind(this), 0);
                        },
                        update() {
                            let r = z.getTracks.call(this, !0),
                                { active: u, language: o, meta: h, currentTrackNode: m } = this.captions,
                                p = !!r.find((v) => v.language === o);
                            this.isHTML5 &&
                                this.isVideo &&
                                r
                                    .filter((v) => !h.get(v))
                                    .forEach((v) => {
                                        this.debug.log("Track added", v),
                                            h.set(v, { default: v.mode === "showing" }),
                                            v.mode === "showing" && (v.mode = "hidden"),
                                            ne.call(this, v, "cuechange", () => z.updateCues.call(this));
                                    }),
                                ((p && this.language !== o) || !r.includes(m)) &&
                                    (z.setLanguage.call(this, o), z.toggle.call(this, u && p)),
                                this.elements &&
                                    ie(this.elements.container, this.config.classNames.captions.enabled, !f.empty(r)),
                                f.array(this.config.controls) &&
                                    this.config.controls.includes("settings") &&
                                    this.config.settings.includes("captions") &&
                                    B.setCaptionsMenu.call(this);
                        },
                        toggle(r, u = !0) {
                            if (!this.supported.ui) return;
                            let { toggled: o } = this.captions,
                                h = this.config.classNames.captions.active,
                                m = f.nullOrUndefined(r) ? !o : r;
                            if (m !== o) {
                                if (
                                    (u || ((this.captions.active = m), this.storage.set({ captions: m })),
                                    !this.language && m && !u)
                                ) {
                                    let p = z.getTracks.call(this),
                                        v = z.findTrack.call(
                                            this,
                                            [this.captions.language, ...this.captions.languages],
                                            !0
                                        );
                                    return (this.captions.language = v.language), void z.set.call(this, p.indexOf(v));
                                }
                                this.elements.buttons.captions && (this.elements.buttons.captions.pressed = m),
                                    ie(this.elements.container, h, m),
                                    (this.captions.toggled = m),
                                    B.updateSetting.call(this, "captions"),
                                    S.call(this, this.media, m ? "captionsenabled" : "captionsdisabled");
                            }
                            setTimeout(() => {
                                m && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
                            });
                        },
                        set(r, u = !0) {
                            let o = z.getTracks.call(this);
                            if (r !== -1)
                                if (f.number(r))
                                    if (r in o) {
                                        if (this.captions.currentTrack !== r) {
                                            this.captions.currentTrack = r;
                                            let h = o[r],
                                                { language: m } = h || {};
                                            (this.captions.currentTrackNode = h),
                                                B.updateSetting.call(this, "captions"),
                                                u || ((this.captions.language = m), this.storage.set({ language: m })),
                                                this.isVimeo && this.embed.enableTextTrack(m),
                                                S.call(this, this.media, "languagechange");
                                        }
                                        z.toggle.call(this, !0, u),
                                            this.isHTML5 && this.isVideo && z.updateCues.call(this);
                                    } else this.debug.warn("Track not found", r);
                                else this.debug.warn("Invalid caption argument", r);
                            else z.toggle.call(this, !1, u);
                        },
                        setLanguage(r, u = !0) {
                            if (!f.string(r)) return void this.debug.warn("Invalid language argument", r);
                            let o = r.toLowerCase();
                            this.captions.language = o;
                            let h = z.getTracks.call(this),
                                m = z.findTrack.call(this, [o]);
                            z.set.call(this, h.indexOf(m), u);
                        },
                        getTracks(r = !1) {
                            return Array.from((this.media || {}).textTracks || [])
                                .filter((u) => !this.isHTML5 || r || this.captions.meta.has(u))
                                .filter((u) => ["captions", "subtitles"].includes(u.kind));
                        },
                        findTrack(r, u = !1) {
                            let o = z.getTracks.call(this),
                                h = (v) => Number((this.captions.meta.get(v) || {}).default),
                                m = Array.from(o).sort((v, x) => h(x) - h(v)),
                                p;
                            return (
                                r.every((v) => ((p = m.find((x) => x.language === v)), !p)), p || (u ? m[0] : void 0)
                            );
                        },
                        getCurrentTrack() {
                            return z.getTracks.call(this)[this.currentTrack];
                        },
                        getLabel(r) {
                            let u = r;
                            return (
                                !f.track(u) &&
                                    ve.textTracks &&
                                    this.captions.toggled &&
                                    (u = z.getCurrentTrack.call(this)),
                                f.track(u)
                                    ? f.empty(u.label)
                                        ? f.empty(u.language)
                                            ? Z.get("enabled", this.config)
                                            : r.language.toUpperCase()
                                        : u.label
                                    : Z.get("disabled", this.config)
                            );
                        },
                        updateCues(r) {
                            if (!this.supported.ui) return;
                            if (!f.element(this.elements.captions))
                                return void this.debug.warn("No captions element to render to");
                            if (!f.nullOrUndefined(r) && !Array.isArray(r))
                                return void this.debug.warn("updateCues: Invalid input", r);
                            let u = r;
                            if (!u) {
                                let h = z.getCurrentTrack.call(this);
                                u = Array.from((h || {}).activeCues || [])
                                    .map((m) => m.getCueAsHTML())
                                    .map(Mi);
                            }
                            let o = u.map((h) => h.trim()).join(`
`);
                            if (o !== this.elements.captions.innerHTML) {
                                C(this.elements.captions);
                                let h = q("span", Ce(this.config.selectors.caption));
                                (h.innerHTML = o),
                                    this.elements.captions.appendChild(h),
                                    S.call(this, this.media, "cuechange");
                            }
                        },
                    },
                    V = {
                        enabled: !0,
                        title: "",
                        debug: !1,
                        autoplay: !1,
                        autopause: !0,
                        playsinline: !0,
                        seekTime: 10,
                        volume: 1,
                        muted: !1,
                        duration: null,
                        displayDuration: !0,
                        invertTime: !0,
                        toggleInvert: !0,
                        ratio: null,
                        clickToPlay: !0,
                        hideControls: !0,
                        resetOnEnd: !1,
                        disableContextMenu: !0,
                        loadSprite: !0,
                        iconPrefix: "plyr",
                        iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
                        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                        quality: {
                            default: 576,
                            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                            forced: !1,
                            onChange: null,
                        },
                        loop: { active: !1 },
                        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
                        keyboard: { focused: !0, global: !1 },
                        tooltips: { controls: !1, seek: !0 },
                        captions: { active: !1, language: "auto", update: !1 },
                        fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
                        storage: { enabled: !0, key: "plyr" },
                        controls: [
                            "play-large",
                            "play",
                            "progress",
                            "current-time",
                            "mute",
                            "volume",
                            "captions",
                            "settings",
                            "pip",
                            "airplay",
                            "fullscreen",
                        ],
                        settings: ["captions", "quality", "speed"],
                        i18n: {
                            restart: "Restart",
                            rewind: "Rewind {seektime}s",
                            play: "Play",
                            pause: "Pause",
                            fastForward: "Forward {seektime}s",
                            seek: "Seek",
                            seekLabel: "{currentTime} of {duration}",
                            played: "Played",
                            buffered: "Buffered",
                            currentTime: "Current time",
                            duration: "Duration",
                            volume: "Volume",
                            mute: "Mute",
                            unmute: "Unmute",
                            enableCaptions: "Enable captions",
                            disableCaptions: "Disable captions",
                            download: "Download",
                            enterFullscreen: "Enter fullscreen",
                            exitFullscreen: "Exit fullscreen",
                            frameTitle: "Player for {title}",
                            captions: "Captions",
                            settings: "Settings",
                            pip: "PIP",
                            menuBack: "Go back to previous menu",
                            speed: "Speed",
                            normal: "Normal",
                            quality: "Quality",
                            loop: "Loop",
                            start: "Start",
                            end: "End",
                            all: "All",
                            reset: "Reset",
                            disabled: "Disabled",
                            enabled: "Enabled",
                            advertisement: "Ad",
                            qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" },
                        },
                        urls: {
                            download: null,
                            vimeo: {
                                sdk: "https://player.vimeo.com/api/player.js",
                                iframe: "https://player.vimeo.com/video/{0}?{1}",
                                api: "https://vimeo.com/api/oembed.json?url={0}",
                            },
                            youtube: {
                                sdk: "https://www.youtube.com/iframe_api",
                                api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
                            },
                            googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" },
                        },
                        listeners: {
                            seek: null,
                            play: null,
                            pause: null,
                            restart: null,
                            rewind: null,
                            fastForward: null,
                            mute: null,
                            volume: null,
                            captions: null,
                            download: null,
                            fullscreen: null,
                            pip: null,
                            airplay: null,
                            speed: null,
                            quality: null,
                            loop: null,
                            language: null,
                        },
                        events: [
                            "ended",
                            "progress",
                            "stalled",
                            "playing",
                            "waiting",
                            "canplay",
                            "canplaythrough",
                            "loadstart",
                            "loadeddata",
                            "loadedmetadata",
                            "timeupdate",
                            "volumechange",
                            "play",
                            "pause",
                            "error",
                            "seeking",
                            "seeked",
                            "emptied",
                            "ratechange",
                            "cuechange",
                            "download",
                            "enterfullscreen",
                            "exitfullscreen",
                            "captionsenabled",
                            "captionsdisabled",
                            "languagechange",
                            "controlshidden",
                            "controlsshown",
                            "ready",
                            "statechange",
                            "qualitychange",
                            "adsloaded",
                            "adscontentpause",
                            "adscontentresume",
                            "adstarted",
                            "adsmidpoint",
                            "adscomplete",
                            "adsallcomplete",
                            "adsimpression",
                            "adsclick",
                        ],
                        selectors: {
                            editable: "input, textarea, select, [contenteditable]",
                            container: ".plyr",
                            controls: { container: null, wrapper: ".plyr__controls" },
                            labels: "[data-plyr]",
                            buttons: {
                                play: '[data-plyr="play"]',
                                pause: '[data-plyr="pause"]',
                                restart: '[data-plyr="restart"]',
                                rewind: '[data-plyr="rewind"]',
                                fastForward: '[data-plyr="fast-forward"]',
                                mute: '[data-plyr="mute"]',
                                captions: '[data-plyr="captions"]',
                                download: '[data-plyr="download"]',
                                fullscreen: '[data-plyr="fullscreen"]',
                                pip: '[data-plyr="pip"]',
                                airplay: '[data-plyr="airplay"]',
                                settings: '[data-plyr="settings"]',
                                loop: '[data-plyr="loop"]',
                            },
                            inputs: {
                                seek: '[data-plyr="seek"]',
                                volume: '[data-plyr="volume"]',
                                speed: '[data-plyr="speed"]',
                                language: '[data-plyr="language"]',
                                quality: '[data-plyr="quality"]',
                            },
                            display: {
                                currentTime: ".plyr__time--current",
                                duration: ".plyr__time--duration",
                                buffer: ".plyr__progress__buffer",
                                loop: ".plyr__progress__loop",
                                volume: ".plyr__volume--display",
                            },
                            progress: ".plyr__progress",
                            captions: ".plyr__captions",
                            caption: ".plyr__caption",
                        },
                        classNames: {
                            type: "plyr--{0}",
                            provider: "plyr--{0}",
                            video: "plyr__video-wrapper",
                            embed: "plyr__video-embed",
                            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                            embedContainer: "plyr__video-embed__container",
                            poster: "plyr__poster",
                            posterEnabled: "plyr__poster-enabled",
                            ads: "plyr__ads",
                            control: "plyr__control",
                            controlPressed: "plyr__control--pressed",
                            playing: "plyr--playing",
                            paused: "plyr--paused",
                            stopped: "plyr--stopped",
                            loading: "plyr--loading",
                            hover: "plyr--hover",
                            tooltip: "plyr__tooltip",
                            cues: "plyr__cues",
                            marker: "plyr__progress__marker",
                            hidden: "plyr__sr-only",
                            hideControls: "plyr--hide-controls",
                            isTouch: "plyr--is-touch",
                            uiSupported: "plyr--full-ui",
                            noTransition: "plyr--no-transition",
                            display: { time: "plyr__time" },
                            menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" },
                            captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" },
                            fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" },
                            pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
                            airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" },
                            previewThumbnails: {
                                thumbContainer: "plyr__preview-thumb",
                                thumbContainerShown: "plyr__preview-thumb--is-shown",
                                imageContainer: "plyr__preview-thumb__image-container",
                                timeContainer: "plyr__preview-thumb__time-container",
                                scrubbingContainer: "plyr__preview-scrubbing",
                                scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
                            },
                        },
                        attributes: {
                            embed: {
                                provider: "data-plyr-provider",
                                id: "data-plyr-embed-id",
                                hash: "data-plyr-embed-hash",
                            },
                        },
                        ads: { enabled: !1, publisherId: "", tagUrl: "" },
                        previewThumbnails: { enabled: !1, src: "" },
                        vimeo: {
                            byline: !1,
                            portrait: !1,
                            title: !1,
                            speed: !0,
                            transparent: !1,
                            customControls: !0,
                            referrerPolicy: null,
                            premium: !1,
                        },
                        youtube: {
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3,
                            modestbranding: 1,
                            customControls: !0,
                            noCookie: !1,
                        },
                        mediaMetadata: { title: "", artist: "", album: "", artwork: [] },
                        markers: { enabled: !1, points: [] },
                    },
                    Q = "picture-in-picture",
                    J = "inline",
                    ee = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
                    tt = "audio",
                    le = "video",
                    Re = () => {};
                class Ie {
                    constructor(u = !1) {
                        (this.enabled = window.console && u), this.enabled && this.log("Debugging enabled");
                    }
                    get log() {
                        return this.enabled ? Function.prototype.bind.call(console.log, console) : Re;
                    }
                    get warn() {
                        return this.enabled ? Function.prototype.bind.call(console.warn, console) : Re;
                    }
                    get error() {
                        return this.enabled ? Function.prototype.bind.call(console.error, console) : Re;
                    }
                }
                class je {
                    constructor(u) {
                        l(this, "onChange", () => {
                            if (!this.supported) return;
                            let o = this.player.elements.buttons.fullscreen;
                            f.element(o) && (o.pressed = this.active);
                            let h = this.target === this.player.media ? this.target : this.player.elements.container;
                            S.call(this.player, h, this.active ? "enterfullscreen" : "exitfullscreen", !0);
                        }),
                            l(this, "toggleFallback", (o = !1) => {
                                var h, m;
                                if (
                                    (o
                                        ? (this.scrollPosition = {
                                              x: (h = window.scrollX) != null ? h : 0,
                                              y: (m = window.scrollY) != null ? m : 0,
                                          })
                                        : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
                                    (document.body.style.overflow = o ? "hidden" : ""),
                                    ie(this.target, this.player.config.classNames.fullscreen.fallback, o),
                                    U.isIos)
                                ) {
                                    let p = document.head.querySelector('meta[name="viewport"]'),
                                        v = "viewport-fit=cover";
                                    p || ((p = document.createElement("meta")), p.setAttribute("name", "viewport"));
                                    let x = f.string(p.content) && p.content.includes(v);
                                    o
                                        ? ((this.cleanupViewport = !x), x || (p.content += `,${v}`))
                                        : this.cleanupViewport &&
                                          (p.content = p.content
                                              .split(",")
                                              .filter((E) => E.trim() !== v)
                                              .join(","));
                                }
                                this.onChange();
                            }),
                            l(this, "trapFocus", (o) => {
                                if (U.isIos || U.isIPadOS || !this.active || o.key !== "Tab") return;
                                let h = document.activeElement,
                                    m = $e.call(
                                        this.player,
                                        "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
                                    ),
                                    [p] = m,
                                    v = m[m.length - 1];
                                h !== v || o.shiftKey
                                    ? h === p && o.shiftKey && (v.focus(), o.preventDefault())
                                    : (p.focus(), o.preventDefault());
                            }),
                            l(this, "update", () => {
                                if (this.supported) {
                                    let o;
                                    (o = this.forceFallback
                                        ? "Fallback (forced)"
                                        : je.nativeSupported
                                          ? "Native"
                                          : "Fallback"),
                                        this.player.debug.log(`${o} fullscreen enabled`);
                                } else this.player.debug.log("Fullscreen not supported and fallback disabled");
                                ie(
                                    this.player.elements.container,
                                    this.player.config.classNames.fullscreen.enabled,
                                    this.supported
                                );
                            }),
                            l(this, "enter", () => {
                                this.supported &&
                                    (U.isIos && this.player.config.fullscreen.iosNative
                                        ? this.player.isVimeo
                                            ? this.player.embed.requestFullscreen()
                                            : this.target.webkitEnterFullscreen()
                                        : !je.nativeSupported || this.forceFallback
                                          ? this.toggleFallback(!0)
                                          : this.prefix
                                            ? f.empty(this.prefix) ||
                                              this.target[`${this.prefix}Request${this.property}`]()
                                            : this.target.requestFullscreen({ navigationUI: "hide" }));
                            }),
                            l(this, "exit", () => {
                                if (this.supported)
                                    if (U.isIos && this.player.config.fullscreen.iosNative)
                                        this.player.isVimeo
                                            ? this.player.embed.exitFullscreen()
                                            : this.target.webkitEnterFullscreen(),
                                            at(this.player.play());
                                    else if (!je.nativeSupported || this.forceFallback) this.toggleFallback(!1);
                                    else if (this.prefix) {
                                        if (!f.empty(this.prefix)) {
                                            let o = this.prefix === "moz" ? "Cancel" : "Exit";
                                            document[`${this.prefix}${o}${this.property}`]();
                                        }
                                    } else (document.cancelFullScreen || document.exitFullscreen).call(document);
                            }),
                            l(this, "toggle", () => {
                                this.active ? this.exit() : this.enter();
                            }),
                            (this.player = u),
                            (this.prefix = je.prefix),
                            (this.property = je.property),
                            (this.scrollPosition = { x: 0, y: 0 }),
                            (this.forceFallback = u.config.fullscreen.fallback === "force"),
                            (this.player.elements.fullscreen =
                                u.config.fullscreen.container &&
                                (function (o, h) {
                                    let { prototype: m } = Element;
                                    return (
                                        m.closest ||
                                        function () {
                                            let p = this;
                                            do {
                                                if (xe.matches(p, h)) return p;
                                                p = p.parentElement || p.parentNode;
                                            } while (p !== null && p.nodeType === 1);
                                            return null;
                                        }
                                    ).call(o, h);
                                })(this.player.elements.container, u.config.fullscreen.container)),
                            ne.call(
                                this.player,
                                document,
                                this.prefix === "ms" ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`,
                                () => {
                                    this.onChange();
                                }
                            ),
                            ne.call(this.player, this.player.elements.container, "dblclick", (o) => {
                                (f.element(this.player.elements.controls) &&
                                    this.player.elements.controls.contains(o.target)) ||
                                    this.player.listeners.proxy(o, this.toggle, "fullscreen");
                            }),
                            ne.call(this, this.player.elements.container, "keydown", (o) => this.trapFocus(o)),
                            this.update();
                    }
                    static get nativeSupported() {
                        return !!(
                            document.fullscreenEnabled ||
                            document.webkitFullscreenEnabled ||
                            document.mozFullScreenEnabled ||
                            document.msFullscreenEnabled
                        );
                    }
                    get useNative() {
                        return je.nativeSupported && !this.forceFallback;
                    }
                    static get prefix() {
                        if (f.function(document.exitFullscreen)) return "";
                        let u = "";
                        return (
                            ["webkit", "moz", "ms"].some(
                                (o) =>
                                    !(
                                        !f.function(document[`${o}ExitFullscreen`]) &&
                                        !f.function(document[`${o}CancelFullScreen`])
                                    ) && ((u = o), !0)
                            ),
                            u
                        );
                    }
                    static get property() {
                        return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
                    }
                    get supported() {
                        return [
                            this.player.config.fullscreen.enabled,
                            this.player.isVideo,
                            je.nativeSupported || this.player.config.fullscreen.fallback,
                            !this.player.isYouTube ||
                                je.nativeSupported ||
                                !U.isIos ||
                                (this.player.config.playsinline && !this.player.config.fullscreen.iosNative),
                        ].every(Boolean);
                    }
                    get active() {
                        if (!this.supported) return !1;
                        if (!je.nativeSupported || this.forceFallback)
                            return Qe(this.target, this.player.config.classNames.fullscreen.fallback);
                        let u = this.prefix
                            ? this.target.getRootNode()[`${this.prefix}${this.property}Element`]
                            : this.target.getRootNode().fullscreenElement;
                        return u && u.shadowRoot ? u === this.target.getRootNode().host : u === this.target;
                    }
                    get target() {
                        var u;
                        return U.isIos && this.player.config.fullscreen.iosNative
                            ? this.player.media
                            : (u = this.player.elements.fullscreen) != null
                              ? u
                              : this.player.elements.container;
                    }
                }
                function Se(r, u = 1) {
                    return new Promise((o, h) => {
                        let m = new Image(),
                            p = () => {
                                delete m.onload, delete m.onerror, (m.naturalWidth >= u ? o : h)(m);
                            };
                        Object.assign(m, { onload: p, onerror: p, src: r });
                    });
                }
                let re = {
                    addStyleHook() {
                        ie(this.elements.container, this.config.selectors.container.replace(".", ""), !0),
                            ie(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
                    },
                    toggleNativeControls(r = !1) {
                        r && this.isHTML5
                            ? this.media.setAttribute("controls", "")
                            : this.media.removeAttribute("controls");
                    },
                    build() {
                        if ((this.listeners.media(), !this.supported.ui))
                            return (
                                this.debug.warn(`Basic support only for ${this.provider} ${this.type}`),
                                void re.toggleNativeControls.call(this, !0)
                            );
                        f.element(this.elements.controls) || (B.inject.call(this), this.listeners.controls()),
                            re.toggleNativeControls.call(this),
                            this.isHTML5 && z.setup.call(this),
                            (this.volume = null),
                            (this.muted = null),
                            (this.loop = null),
                            (this.quality = null),
                            (this.speed = null),
                            B.updateVolume.call(this),
                            B.timeUpdate.call(this),
                            B.durationUpdate.call(this),
                            re.checkPlaying.call(this),
                            ie(
                                this.elements.container,
                                this.config.classNames.pip.supported,
                                ve.pip && this.isHTML5 && this.isVideo
                            ),
                            ie(
                                this.elements.container,
                                this.config.classNames.airplay.supported,
                                ve.airplay && this.isHTML5
                            ),
                            ie(this.elements.container, this.config.classNames.isTouch, this.touch),
                            (this.ready = !0),
                            setTimeout(() => {
                                S.call(this, this.media, "ready");
                            }, 0),
                            re.setTitle.call(this),
                            this.poster && re.setPoster.call(this, this.poster, !1).catch(() => {}),
                            this.config.duration && B.durationUpdate.call(this),
                            this.config.mediaMetadata && B.setMediaMetadata.call(this);
                    },
                    setTitle() {
                        let r = Z.get("play", this.config);
                        if (
                            (f.string(this.config.title) &&
                                !f.empty(this.config.title) &&
                                (r += `, ${this.config.title}`),
                            Array.from(this.elements.buttons.play || []).forEach((u) => {
                                u.setAttribute("aria-label", r);
                            }),
                            this.isEmbed)
                        ) {
                            let u = ge.call(this, "iframe");
                            if (!f.element(u)) return;
                            let o = f.empty(this.config.title) ? "video" : this.config.title,
                                h = Z.get("frameTitle", this.config);
                            u.setAttribute("title", h.replace("{title}", o));
                        }
                    },
                    togglePoster(r) {
                        ie(this.elements.container, this.config.classNames.posterEnabled, r);
                    },
                    setPoster(r, u = !0) {
                        return u && this.poster
                            ? Promise.reject(new Error("Poster already set"))
                            : (this.media.setAttribute("data-poster", r),
                              this.elements.poster.removeAttribute("hidden"),
                              Le.call(this)
                                  .then(() => Se(r))
                                  .catch((o) => {
                                      throw (r === this.poster && re.togglePoster.call(this, !1), o);
                                  })
                                  .then(() => {
                                      if (r !== this.poster)
                                          throw new Error("setPoster cancelled by later call to setPoster");
                                  })
                                  .then(
                                      () => (
                                          Object.assign(this.elements.poster.style, {
                                              backgroundImage: `url('${r}')`,
                                              backgroundSize: "",
                                          }),
                                          re.togglePoster.call(this, !0),
                                          r
                                      )
                                  ));
                    },
                    checkPlaying(r) {
                        ie(this.elements.container, this.config.classNames.
