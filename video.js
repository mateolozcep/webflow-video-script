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
                var s = { addCSS: !0, thumbWidth: 15, watch: !0 },
                    a = function (r) {
                        return r != null ? r.constructor : null;
                    },
                    c = function (r, u) {
                        return !!(r && u && r instanceof u);
                    },
                    d = function (r) {
                        return r == null;
                    },
                    g = function (r) {
                        return a(r) === Object;
                    },
                    y = function (r) {
                        return a(r) === String;
                    },
                    T = function (r) {
                        return Array.isArray(r);
                    },
                    b = function (r) {
                        return c(r, NodeList);
                    },
                    _ = {
                        nullOrUndefined: d,
                        object: g,
                        number: function (r) {
                            return a(r) === Number && !Number.isNaN(r);
                        },
                        string: y,
                        boolean: function (r) {
                            return a(r) === Boolean;
                        },
                        function: function (r) {
                            return a(r) === Function;
                        },
                        array: T,
                        nodeList: b,
                        element: function (r) {
                            return c(r, Element);
                        },
                        event: function (r) {
                            return c(r, Event);
                        },
                        empty: function (r) {
                            return d(r) || ((y(r) || T(r) || b(r)) && !r.length) || (g(r) && !Object.keys(r).length);
                        },
                    };
                function k(r, u) {
                    if (1 > u) {
                        var o = (function (h) {
                            var m = "".concat(h).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                            return m ? Math.max(0, (m[1] ? m[1].length : 0) - (m[2] ? +m[2] : 0)) : 0;
                        })(u);
                        return parseFloat(r.toFixed(o));
                    }
                    return Math.round(r / u) * u;
                }
                var w = (function () {
                    function r(u, o) {
                        (function (h, m) {
                            if (!(h instanceof m)) throw new TypeError("Cannot call a class as a function");
                        })(this, r),
                            _.element(u)
                                ? (this.element = u)
                                : _.string(u) && (this.element = document.querySelector(u)),
                            _.element(this.element) &&
                                _.empty(this.element.rangeTouch) &&
                                ((this.config = n({}, s, {}, o)), this.init());
                    }
                    return (
                        (function (u, o, h) {
                            o && e(u.prototype, o), h && e(u, h);
                        })(
                            r,
                            [
                                {
                                    key: "init",
                                    value: function () {
                                        r.enabled &&
                                            (this.config.addCSS &&
                                                ((this.element.style.userSelect = "none"),
                                                (this.element.style.webKitUserSelect = "none"),
                                                (this.element.style.touchAction = "manipulation")),
                                            this.listeners(!0),
                                            (this.element.rangeTouch = this));
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        r.enabled &&
                                            (this.config.addCSS &&
                                                ((this.element.style.userSelect = ""),
                                                (this.element.style.webKitUserSelect = ""),
                                                (this.element.style.touchAction = "")),
                                            this.listeners(!1),
                                            (this.element.rangeTouch = null));
                                    },
                                },
                                {
                                    key: "listeners",
                                    value: function (u) {
                                        var o = this,
                                            h = u ? "addEventListener" : "removeEventListener";
                                        ["touchstart", "touchmove", "touchend"].forEach(function (m) {
                                            o.element[h](
                                                m,
                                                function (p) {
                                                    return o.set(p);
                                                },
                                                !1
                                            );
                                        });
                                    },
                                },
                                {
                                    key: "get",
                                    value: function (u) {
                                        if (!r.enabled || !_.event(u)) return null;
                                        var o,
                                            h = u.target,
                                            m = u.changedTouches[0],
                                            p = parseFloat(h.getAttribute("min")) || 0,
                                            v = parseFloat(h.getAttribute("max")) || 100,
                                            x = parseFloat(h.getAttribute("step")) || 1,
                                            E = h.getBoundingClientRect(),
                                            N = ((100 / E.width) * (this.config.thumbWidth / 2)) / 100;
                                        return (
                                            0 > (o = (100 / E.width) * (m.clientX - E.left))
                                                ? (o = 0)
                                                : 100 < o && (o = 100),
                                            50 > o ? (o -= (100 - 2 * o) * N) : 50 < o && (o += 2 * (o - 50) * N),
                                            p + k((o / 100) * (v - p), x)
                                        );
                                    },
                                },
                                {
                                    key: "set",
                                    value: function (u) {
                                        r.enabled &&
                                            _.event(u) &&
                                            !u.target.disabled &&
                                            (u.preventDefault(),
                                            (u.target.value = this.get(u)),
                                            (function (o, h) {
                                                if (o && h) {
                                                    var m = new Event(h, { bubbles: !0 });
                                                    o.dispatchEvent(m);
                                                }
                                            })(u.target, u.type === "touchend" ? "change" : "input"));
                                    },
                                },
                            ],
                            [
                                {
                                    key: "setup",
                                    value: function (u) {
                                        var o = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
                                            h = null;
                                        if (
                                            (_.empty(u) || _.string(u)
                                                ? (h = Array.from(
                                                      document.querySelectorAll(_.string(u) ? u : 'input[type="range"]')
                                                  ))
                                                : _.element(u)
                                                  ? (h = [u])
                                                  : _.nodeList(u)
                                                    ? (h = Array.from(u))
                                                    : _.array(u) && (h = u.filter(_.element)),
                                            _.empty(h))
                                        )
                                            return null;
                                        var m = n({}, s, {}, o);
                                        if (_.string(u) && m.watch) {
                                            var p = new MutationObserver(function (v) {
                                                Array.from(v).forEach(function (x) {
                                                    Array.from(x.addedNodes).forEach(function (E) {
                                                        _.element(E) &&
                                                            (function (N, j) {
                                                                return function () {
                                                                    return Array.from(
                                                                        document.querySelectorAll(j)
                                                                    ).includes(this);
                                                                }.call(N, j);
                                                            })(E, u) &&
                                                            new r(E, m);
                                                    });
                                                });
                                            });
                                            p.observe(document.body, { childList: !0, subtree: !0 });
                                        }
                                        return h.map(function (v) {
                                            return new r(v, o);
                                        });
                                    },
                                },
                                {
                                    key: "enabled",
                                    get: function () {
                                        return "ontouchstart" in document.documentElement;
                                    },
                                },
                            ]
                        ),
                        r
                    );
                })();
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
                        return (this.elements.inputs[r] = o), B.updateRangeFill.call(this, o), w.setup(o), o;
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
                        ie(this.elements.container, this.config.classNames.playing, this.playing),
                            ie(this.elements.container, this.config.classNames.paused, this.paused),
                            ie(this.elements.container, this.config.classNames.stopped, this.stopped),
                            Array.from(this.elements.buttons.play || []).forEach((u) => {
                                Object.assign(u, { pressed: this.playing }),
                                    u.setAttribute("aria-label", Z.get(this.playing ? "pause" : "play", this.config));
                            }),
                            (f.event(r) && r.type === "timeupdate") || re.toggleControls.call(this);
                    },
                    checkLoading(r) {
                        (this.loading = ["stalled", "waiting"].includes(r.type)),
                            clearTimeout(this.timers.loading),
                            (this.timers.loading = setTimeout(
                                () => {
                                    ie(this.elements.container, this.config.classNames.loading, this.loading),
                                        re.toggleControls.call(this);
                                },
                                this.loading ? 250 : 0
                            ));
                    },
                    toggleControls(r) {
                        let { controls: u } = this.elements;
                        if (u && this.config.hideControls) {
                            let o = this.touch && this.lastSeekTime + 2e3 > Date.now();
                            this.toggleControls(!!(r || this.loading || this.paused || u.pressed || u.hover || o));
                        }
                    },
                    migrateStyles() {
                        Object.values({ ...this.media.style })
                            .filter((r) => !f.empty(r) && f.string(r) && r.startsWith("--plyr"))
                            .forEach((r) => {
                                this.elements.container.style.setProperty(r, this.media.style.getPropertyValue(r)),
                                    this.media.style.removeProperty(r);
                            }),
                            f.empty(this.media.style) && this.media.removeAttribute("style");
                    },
                };
                class Ut {
                    constructor(u) {
                        l(this, "firstTouch", () => {
                            let { player: o } = this,
                                { elements: h } = o;
                            (o.touch = !0), ie(h.container, o.config.classNames.isTouch, !0);
                        }),
                            l(this, "global", (o = !0) => {
                                let { player: h } = this;
                                h.config.keyboard.global && He.call(h, window, "keydown keyup", this.handleKey, o, !1),
                                    He.call(h, document.body, "click", this.toggleMenu, o),
                                    ot.call(h, document.body, "touchstart", this.firstTouch);
                            }),
                            l(this, "container", () => {
                                let { player: o } = this,
                                    { config: h, elements: m, timers: p } = o;
                                !h.keyboard.global &&
                                    h.keyboard.focused &&
                                    ne.call(o, m.container, "keydown keyup", this.handleKey, !1),
                                    ne.call(
                                        o,
                                        m.container,
                                        "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                                        (E) => {
                                            let { controls: N } = m;
                                            N && E.type === "enterfullscreen" && ((N.pressed = !1), (N.hover = !1));
                                            let j = 0;
                                            ["touchstart", "touchmove", "mousemove"].includes(E.type) &&
                                                (re.toggleControls.call(o, !0), (j = o.touch ? 3e3 : 2e3)),
                                                clearTimeout(p.controls),
                                                (p.controls = setTimeout(() => re.toggleControls.call(o, !1), j));
                                        }
                                    );
                                let v = () => {
                                        if (!o.isVimeo || o.config.vimeo.premium) return;
                                        let E = m.wrapper,
                                            { active: N } = o.fullscreen,
                                            [j, te] = dt.call(o),
                                            $ = ut(`aspect-ratio: ${j} / ${te}`);
                                        if (!N)
                                            return void ($
                                                ? ((E.style.width = null), (E.style.height = null))
                                                : ((E.style.maxWidth = null), (E.style.margin = null)));
                                        let [se, Te] = [
                                                Math.max(
                                                    document.documentElement.clientWidth || 0,
                                                    window.innerWidth || 0
                                                ),
                                                Math.max(
                                                    document.documentElement.clientHeight || 0,
                                                    window.innerHeight || 0
                                                ),
                                            ],
                                            ke = se / Te > j / te;
                                        $
                                            ? ((E.style.width = ke ? "auto" : "100%"),
                                              (E.style.height = ke ? "100%" : "auto"))
                                            : ((E.style.maxWidth = ke ? (Te / te) * j + "px" : null),
                                              (E.style.margin = ke ? "0 auto" : null));
                                    },
                                    x = () => {
                                        clearTimeout(p.resized), (p.resized = setTimeout(v, 50));
                                    };
                                ne.call(o, m.container, "enterfullscreen exitfullscreen", (E) => {
                                    let { target: N } = o.fullscreen;
                                    N === m.container &&
                                        ((!o.isEmbed && f.empty(o.config.ratio)) ||
                                            (v(),
                                            (E.type === "enterfullscreen" ? ne : St).call(o, window, "resize", x)));
                                });
                            }),
                            l(this, "media", () => {
                                let { player: o } = this,
                                    { elements: h } = o;
                                if (
                                    (ne.call(o, o.media, "timeupdate seeking seeked", (p) => B.timeUpdate.call(o, p)),
                                    ne.call(o, o.media, "durationchange loadeddata loadedmetadata", (p) =>
                                        B.durationUpdate.call(o, p)
                                    ),
                                    ne.call(o, o.media, "ended", () => {
                                        o.isHTML5 && o.isVideo && o.config.resetOnEnd && (o.restart(), o.pause());
                                    }),
                                    ne.call(o, o.media, "progress playing seeking seeked", (p) =>
                                        B.updateProgress.call(o, p)
                                    ),
                                    ne.call(o, o.media, "volumechange", (p) => B.updateVolume.call(o, p)),
                                    ne.call(o, o.media, "playing play pause ended emptied timeupdate", (p) =>
                                        re.checkPlaying.call(o, p)
                                    ),
                                    ne.call(o, o.media, "waiting canplay seeked playing", (p) =>
                                        re.checkLoading.call(o, p)
                                    ),
                                    o.supported.ui && o.config.clickToPlay && !o.isAudio)
                                ) {
                                    let p = ge.call(o, `.${o.config.classNames.video}`);
                                    if (!f.element(p)) return;
                                    ne.call(o, h.container, "click", (v) => {
                                        ([h.container, p].includes(v.target) || p.contains(v.target)) &&
                                            ((o.touch && o.config.hideControls) ||
                                                (o.ended
                                                    ? (this.proxy(v, o.restart, "restart"),
                                                      this.proxy(
                                                          v,
                                                          () => {
                                                              at(o.play());
                                                          },
                                                          "play"
                                                      ))
                                                    : this.proxy(
                                                          v,
                                                          () => {
                                                              at(o.togglePlay());
                                                          },
                                                          "play"
                                                      )));
                                    });
                                }
                                o.supported.ui &&
                                    o.config.disableContextMenu &&
                                    ne.call(
                                        o,
                                        h.wrapper,
                                        "contextmenu",
                                        (p) => {
                                            p.preventDefault();
                                        },
                                        !1
                                    ),
                                    ne.call(o, o.media, "volumechange", () => {
                                        o.storage.set({ volume: o.volume, muted: o.muted });
                                    }),
                                    ne.call(o, o.media, "ratechange", () => {
                                        B.updateSetting.call(o, "speed"), o.storage.set({ speed: o.speed });
                                    }),
                                    ne.call(o, o.media, "qualitychange", (p) => {
                                        B.updateSetting.call(o, "quality", null, p.detail.quality);
                                    }),
                                    ne.call(o, o.media, "ready qualitychange", () => {
                                        B.setDownloadUrl.call(o);
                                    });
                                let m = o.config.events.concat(["keyup", "keydown"]).join(" ");
                                ne.call(o, o.media, m, (p) => {
                                    let { detail: v = {} } = p;
                                    p.type === "error" && (v = o.media.error), S.call(o, h.container, p.type, !0, v);
                                });
                            }),
                            l(this, "proxy", (o, h, m) => {
                                let { player: p } = this,
                                    v = p.config.listeners[m],
                                    x = !0;
                                f.function(v) && (x = v.call(p, o)), x !== !1 && f.function(h) && h.call(p, o);
                            }),
                            l(this, "bind", (o, h, m, p, v = !0) => {
                                let { player: x } = this,
                                    E = x.config.listeners[p],
                                    N = f.function(E);
                                ne.call(x, o, h, (j) => this.proxy(j, m, p), v && !N);
                            }),
                            l(this, "controls", () => {
                                let { player: o } = this,
                                    { elements: h } = o,
                                    m = U.isIE ? "change" : "input";
                                if (
                                    (h.buttons.play &&
                                        Array.from(h.buttons.play).forEach((p) => {
                                            this.bind(
                                                p,
                                                "click",
                                                () => {
                                                    at(o.togglePlay());
                                                },
                                                "play"
                                            );
                                        }),
                                    this.bind(h.buttons.restart, "click", o.restart, "restart"),
                                    this.bind(
                                        h.buttons.rewind,
                                        "click",
                                        () => {
                                            (o.lastSeekTime = Date.now()), o.rewind();
                                        },
                                        "rewind"
                                    ),
                                    this.bind(
                                        h.buttons.fastForward,
                                        "click",
                                        () => {
                                            (o.lastSeekTime = Date.now()), o.forward();
                                        },
                                        "fastForward"
                                    ),
                                    this.bind(
                                        h.buttons.mute,
                                        "click",
                                        () => {
                                            o.muted = !o.muted;
                                        },
                                        "mute"
                                    ),
                                    this.bind(h.buttons.captions, "click", () => o.toggleCaptions()),
                                    this.bind(
                                        h.buttons.download,
                                        "click",
                                        () => {
                                            S.call(o, o.media, "download");
                                        },
                                        "download"
                                    ),
                                    this.bind(
                                        h.buttons.fullscreen,
                                        "click",
                                        () => {
                                            o.fullscreen.toggle();
                                        },
                                        "fullscreen"
                                    ),
                                    this.bind(
                                        h.buttons.pip,
                                        "click",
                                        () => {
                                            o.pip = "toggle";
                                        },
                                        "pip"
                                    ),
                                    this.bind(h.buttons.airplay, "click", o.airplay, "airplay"),
                                    this.bind(
                                        h.buttons.settings,
                                        "click",
                                        (p) => {
                                            p.stopPropagation(), p.preventDefault(), B.toggleMenu.call(o, p);
                                        },
                                        null,
                                        !1
                                    ),
                                    this.bind(
                                        h.buttons.settings,
                                        "keyup",
                                        (p) => {
                                            [" ", "Enter"].includes(p.key) &&
                                                (p.key !== "Enter"
                                                    ? (p.preventDefault(), p.stopPropagation(), B.toggleMenu.call(o, p))
                                                    : B.focusFirstMenuItem.call(o, null, !0));
                                        },
                                        null,
                                        !1
                                    ),
                                    this.bind(h.settings.menu, "keydown", (p) => {
                                        p.key === "Escape" && B.toggleMenu.call(o, p);
                                    }),
                                    this.bind(h.inputs.seek, "mousedown mousemove", (p) => {
                                        let v = h.progress.getBoundingClientRect(),
                                            x = (100 / v.width) * (p.pageX - v.left);
                                        p.currentTarget.setAttribute("seek-value", x);
                                    }),
                                    this.bind(
                                        h.inputs.seek,
                                        "mousedown mouseup keydown keyup touchstart touchend",
                                        (p) => {
                                            let v = p.currentTarget,
                                                x = "play-on-seeked";
                                            if (f.keyboardEvent(p) && !["ArrowLeft", "ArrowRight"].includes(p.key))
                                                return;
                                            o.lastSeekTime = Date.now();
                                            let E = v.hasAttribute(x),
                                                N = ["mouseup", "touchend", "keyup"].includes(p.type);
                                            E && N
                                                ? (v.removeAttribute(x), at(o.play()))
                                                : !N && o.playing && (v.setAttribute(x, ""), o.pause());
                                        }
                                    ),
                                    U.isIos)
                                ) {
                                    let p = $e.call(o, 'input[type="range"]');
                                    Array.from(p).forEach((v) => this.bind(v, m, (x) => W(x.target)));
                                }
                                this.bind(
                                    h.inputs.seek,
                                    m,
                                    (p) => {
                                        let v = p.currentTarget,
                                            x = v.getAttribute("seek-value");
                                        f.empty(x) && (x = v.value),
                                            v.removeAttribute("seek-value"),
                                            (o.currentTime = (x / v.max) * o.duration);
                                    },
                                    "seek"
                                ),
                                    this.bind(h.progress, "mouseenter mouseleave mousemove", (p) =>
                                        B.updateSeekTooltip.call(o, p)
                                    ),
                                    this.bind(h.progress, "mousemove touchmove", (p) => {
                                        let { previewThumbnails: v } = o;
                                        v && v.loaded && v.startMove(p);
                                    }),
                                    this.bind(h.progress, "mouseleave touchend click", () => {
                                        let { previewThumbnails: p } = o;
                                        p && p.loaded && p.endMove(!1, !0);
                                    }),
                                    this.bind(h.progress, "mousedown touchstart", (p) => {
                                        let { previewThumbnails: v } = o;
                                        v && v.loaded && v.startScrubbing(p);
                                    }),
                                    this.bind(h.progress, "mouseup touchend", (p) => {
                                        let { previewThumbnails: v } = o;
                                        v && v.loaded && v.endScrubbing(p);
                                    }),
                                    U.isWebKit &&
                                        Array.from($e.call(o, 'input[type="range"]')).forEach((p) => {
                                            this.bind(p, "input", (v) => B.updateRangeFill.call(o, v.target));
                                        }),
                                    o.config.toggleInvert &&
                                        !f.element(h.display.duration) &&
                                        this.bind(h.display.currentTime, "click", () => {
                                            o.currentTime !== 0 &&
                                                ((o.config.invertTime = !o.config.invertTime), B.timeUpdate.call(o));
                                        }),
                                    this.bind(
                                        h.inputs.volume,
                                        m,
                                        (p) => {
                                            o.volume = p.target.value;
                                        },
                                        "volume"
                                    ),
                                    this.bind(h.controls, "mouseenter mouseleave", (p) => {
                                        h.controls.hover = !o.touch && p.type === "mouseenter";
                                    }),
                                    h.fullscreen &&
                                        Array.from(h.fullscreen.children)
                                            .filter((p) => !p.contains(h.container))
                                            .forEach((p) => {
                                                this.bind(p, "mouseenter mouseleave", (v) => {
                                                    h.controls &&
                                                        (h.controls.hover = !o.touch && v.type === "mouseenter");
                                                });
                                            }),
                                    this.bind(h.controls, "mousedown mouseup touchstart touchend touchcancel", (p) => {
                                        h.controls.pressed = ["mousedown", "touchstart"].includes(p.type);
                                    }),
                                    this.bind(h.controls, "focusin", () => {
                                        let { config: p, timers: v } = o;
                                        ie(h.controls, p.classNames.noTransition, !0),
                                            re.toggleControls.call(o, !0),
                                            setTimeout(() => {
                                                ie(h.controls, p.classNames.noTransition, !1);
                                            }, 0);
                                        let x = this.touch ? 3e3 : 4e3;
                                        clearTimeout(v.controls),
                                            (v.controls = setTimeout(() => re.toggleControls.call(o, !1), x));
                                    }),
                                    this.bind(
                                        h.inputs.volume,
                                        "wheel",
                                        (p) => {
                                            let v = p.webkitDirectionInvertedFromDevice,
                                                [x, E] = [p.deltaX, -p.deltaY].map((te) => (v ? -te : te)),
                                                N = Math.sign(Math.abs(x) > Math.abs(E) ? x : E);
                                            o.increaseVolume(N / 50);
                                            let { volume: j } = o.media;
                                            ((N === 1 && j < 1) || (N === -1 && j > 0)) && p.preventDefault();
                                        },
                                        "volume",
                                        !1
                                    );
                            }),
                            (this.player = u),
                            (this.lastKey = null),
                            (this.focusTimer = null),
                            (this.lastKeyDown = null),
                            (this.handleKey = this.handleKey.bind(this)),
                            (this.toggleMenu = this.toggleMenu.bind(this)),
                            (this.firstTouch = this.firstTouch.bind(this));
                    }
                    handleKey(u) {
                        let { player: o } = this,
                            { elements: h } = o,
                            { key: m, type: p, altKey: v, ctrlKey: x, metaKey: E, shiftKey: N } = u,
                            j = p === "keydown",
                            te = j && m === this.lastKey;
                        if (!(v || x || E || N) && m) {
                            if (j) {
                                let se = document.activeElement;
                                if (f.element(se)) {
                                    let { editable: Te } = o.config.selectors,
                                        { seek: ke } = h.inputs;
                                    if (
                                        (se !== ke && xe(se, Te)) ||
                                        (u.key === " " && xe(se, 'button, [role^="menuitem"]'))
                                    )
                                        return;
                                }
                                switch (
                                    ([
                                        " ",
                                        "ArrowLeft",
                                        "ArrowUp",
                                        "ArrowRight",
                                        "ArrowDown",
                                        "0",
                                        "1",
                                        "2",
                                        "3",
                                        "4",
                                        "5",
                                        "6",
                                        "7",
                                        "8",
                                        "9",
                                        "c",
                                        "f",
                                        "k",
                                        "l",
                                        "m",
                                    ].includes(m) && (u.preventDefault(), u.stopPropagation()),
                                    m)
                                ) {
                                    case "0":
                                    case "1":
                                    case "2":
                                    case "3":
                                    case "4":
                                    case "5":
                                    case "6":
                                    case "7":
                                    case "8":
                                    case "9":
                                        te || (($ = parseInt(m, 10)), (o.currentTime = (o.duration / 10) * $));
                                        break;
                                    case " ":
                                    case "k":
                                        te || at(o.togglePlay());
                                        break;
                                    case "ArrowUp":
                                        o.increaseVolume(0.1);
                                        break;
                                    case "ArrowDown":
                                        o.decreaseVolume(0.1);
                                        break;
                                    case "m":
                                        te || (o.muted = !o.muted);
                                        break;
                                    case "ArrowRight":
                                        o.forward();
                                        break;
                                    case "ArrowLeft":
                                        o.rewind();
                                        break;
                                    case "f":
                                        o.fullscreen.toggle();
                                        break;
                                    case "c":
                                        te || o.toggleCaptions();
                                        break;
                                    case "l":
                                        o.loop = !o.loop;
                                }
                                m === "Escape" &&
                                    !o.fullscreen.usingNative &&
                                    o.fullscreen.active &&
                                    o.fullscreen.toggle(),
                                    (this.lastKey = m);
                            } else this.lastKey = null;
                            var $;
                        }
                    }
                    toggleMenu(u) {
                        B.toggleMenu.call(this.player, u);
                    }
                }
                typeof globalThis != "undefined" ||
                    typeof window != "undefined" ||
                    (typeof global != "undefined" && global);
                var Fe = (function (r, u) {
                    return r((u = { exports: {} }), u.exports), u.exports;
                })(function (r, u) {
                    r.exports = (function () {
                        var o = function () {},
                            h = {},
                            m = {},
                            p = {};
                        function v($, se) {
                            $ = $.push ? $ : [$];
                            var Te,
                                ke,
                                Ye,
                                ce = [],
                                We = $.length,
                                Y = We;
                            for (
                                Te = function (pe, lt) {
                                    lt.length && ce.push(pe), --Y || se(ce);
                                };
                                We--;

                            )
                                (ke = $[We]), (Ye = m[ke]) ? Te(ke, Ye) : (p[ke] = p[ke] || []).push(Te);
                        }
                        function x($, se) {
                            if ($) {
                                var Te = p[$];
                                if (((m[$] = se), Te)) for (; Te.length; ) Te[0]($, se), Te.splice(0, 1);
                            }
                        }
                        function E($, se) {
                            $.call && ($ = { success: $ }), se.length ? ($.error || o)(se) : ($.success || o)($);
                        }
                        function N($, se, Te, ke) {
                            var Ye,
                                ce,
                                We = document,
                                Y = Te.async,
                                pe = (Te.numRetries || 0) + 1,
                                lt = Te.before || o,
                                Wt = $.replace(/[\?|#].*$/, ""),
                                pi = $.replace(/^(css|img)!/, "");
                            (ke = ke || 0),
                                /(^css!|\.css$)/.test(Wt)
                                    ? (((ce = We.createElement("link")).rel = "stylesheet"),
                                      (ce.href = pi),
                                      (Ye = "hideFocus" in ce) &&
                                          ce.relList &&
                                          ((Ye = 0), (ce.rel = "preload"), (ce.as = "style")))
                                    : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(Wt)
                                      ? ((ce = We.createElement("img")).src = pi)
                                      : (((ce = We.createElement("script")).src = $), (ce.async = Y === void 0 || Y)),
                                (ce.onload =
                                    ce.onerror =
                                    ce.onbeforeload =
                                        function (Li) {
                                            var xr = Li.type[0];
                                            if (Ye)
                                                try {
                                                    ce.sheet.cssText.length || (xr = "e");
                                                } catch (Ol) {
                                                    Ol.code != 18 && (xr = "e");
                                                }
                                            if (xr == "e") {
                                                if ((ke += 1) < pe) return N($, se, Te, ke);
                                            } else if (ce.rel == "preload" && ce.as == "style")
                                                return (ce.rel = "stylesheet");
                                            se($, xr, Li.defaultPrevented);
                                        }),
                                lt($, ce) !== !1 && We.head.appendChild(ce);
                        }
                        function j($, se, Te) {
                            var ke,
                                Ye,
                                ce = ($ = $.push ? $ : [$]).length,
                                We = ce,
                                Y = [];
                            for (
                                ke = function (pe, lt, Wt) {
                                    if ((lt == "e" && Y.push(pe), lt == "b")) {
                                        if (!Wt) return;
                                        Y.push(pe);
                                    }
                                    --ce || se(Y);
                                },
                                    Ye = 0;
                                Ye < We;
                                Ye++
                            )
                                N($[Ye], ke, Te);
                        }
                        function te($, se, Te) {
                            var ke, Ye;
                            if ((se && se.trim && (ke = se), (Ye = (ke ? Te : se) || {}), ke)) {
                                if (ke in h) throw "LoadJS";
                                h[ke] = !0;
                            }
                            function ce(We, Y) {
                                j(
                                    $,
                                    function (pe) {
                                        E(Ye, pe), We && E({ success: We, error: Y }, pe), x(ke, pe);
                                    },
                                    Ye
                                );
                            }
                            if (Ye.returnPromise) return new Promise(ce);
                            ce();
                        }
                        return (
                            (te.ready = function ($, se) {
                                return (
                                    v($, function (Te) {
                                        E(se, Te);
                                    }),
                                    te
                                );
                            }),
                            (te.done = function ($) {
                                x($, []);
                            }),
                            (te.reset = function () {
                                (h = {}), (m = {}), (p = {});
                            }),
                            (te.isDefined = function ($) {
                                return $ in h;
                            }),
                            te
                        );
                    })();
                });
                function Oe(r) {
                    return new Promise((u, o) => {
                        Fe(r, { success: u, error: o });
                    });
                }
                function De(r) {
                    r && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                        this.media.paused === r &&
                            ((this.media.paused = !r), S.call(this, this.media, r ? "play" : "pause"));
                }
                let ki = {
                    setup() {
                        let r = this;
                        ie(r.elements.wrapper, r.config.classNames.embed, !0),
                            (r.options.speed = r.config.speed.options),
                            Ue.call(r),
                            f.object(window.Vimeo)
                                ? ki.ready.call(r)
                                : Oe(r.config.urls.vimeo.sdk)
                                      .then(() => {
                                          ki.ready.call(r);
                                      })
                                      .catch((u) => {
                                          r.debug.warn("Vimeo SDK (player.js) failed to load", u);
                                      });
                    },
                    ready() {
                        let r = this,
                            u = r.config.vimeo,
                            { premium: o, referrerPolicy: h, ...m } = u,
                            p = r.media.getAttribute("src"),
                            v = "";
                        f.empty(p)
                            ? ((p = r.media.getAttribute(r.config.attributes.embed.id)),
                              (v = r.media.getAttribute(r.config.attributes.embed.hash)))
                            : (v = (function (Y) {
                                  let pe = Y.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
                                  return pe && pe.length === 5 ? pe[4] : null;
                              })(p));
                        let x = v ? { h: v } : {};
                        o && Object.assign(m, { controls: !1, sidedock: !1 });
                        let E = fe({
                                loop: r.config.loop.active,
                                autoplay: r.autoplay,
                                muted: r.muted,
                                gesture: "media",
                                playsinline: r.config.playsinline,
                                ...x,
                                ...m,
                            }),
                            N =
                                ((j = p),
                                f.empty(j)
                                    ? null
                                    : f.number(Number(j))
                                      ? j
                                      : j.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
                                        ? RegExp.$2
                                        : j);
                        var j;
                        let te = q("iframe"),
                            $ = It(r.config.urls.vimeo.iframe, N, E);
                        if (
                            (te.setAttribute("src", $),
                            te.setAttribute("allowfullscreen", ""),
                            te.setAttribute(
                                "allow",
                                [
                                    "autoplay",
                                    "fullscreen",
                                    "picture-in-picture",
                                    "encrypted-media",
                                    "accelerometer",
                                    "gyroscope",
                                ].join("; ")
                            ),
                            f.empty(h) || te.setAttribute("referrerPolicy", h),
                            o || !u.customControls)
                        )
                            te.setAttribute("data-poster", r.poster), (r.media = ze(te, r.media));
                        else {
                            let Y = q("div", { class: r.config.classNames.embedContainer, "data-poster": r.poster });
                            Y.appendChild(te), (r.media = ze(Y, r.media));
                        }
                        u.customControls ||
                            ft(It(r.config.urls.vimeo.api, $)).then((Y) => {
                                !f.empty(Y) && Y.thumbnail_url && re.setPoster.call(r, Y.thumbnail_url).catch(() => {});
                            }),
                            (r.embed = new window.Vimeo.Player(te, { autopause: r.config.autopause, muted: r.muted })),
                            (r.media.paused = !0),
                            (r.media.currentTime = 0),
                            r.supported.ui && r.embed.disableTextTrack(),
                            (r.media.play = () => (De.call(r, !0), r.embed.play())),
                            (r.media.pause = () => (De.call(r, !1), r.embed.pause())),
                            (r.media.stop = () => {
                                r.pause(), (r.currentTime = 0);
                            });
                        let { currentTime: se } = r.media;
                        Object.defineProperty(r.media, "currentTime", {
                            get: () => se,
                            set(Y) {
                                let { embed: pe, media: lt, paused: Wt, volume: pi } = r,
                                    Li = Wt && !pe.hasPlayed;
                                (lt.seeking = !0),
                                    S.call(r, lt, "seeking"),
                                    Promise.resolve(Li && pe.setVolume(0))
                                        .then(() => pe.setCurrentTime(Y))
                                        .then(() => Li && pe.pause())
                                        .then(() => Li && pe.setVolume(pi))
                                        .catch(() => {});
                            },
                        });
                        let Te = r.config.speed.selected;
                        Object.defineProperty(r.media, "playbackRate", {
                            get: () => Te,
                            set(Y) {
                                r.embed
                                    .setPlaybackRate(Y)
                                    .then(() => {
                                        (Te = Y), S.call(r, r.media, "ratechange");
                                    })
                                    .catch(() => {
                                        r.options.speed = [1];
                                    });
                            },
                        });
                        let { volume: ke } = r.config;
                        Object.defineProperty(r.media, "volume", {
                            get: () => ke,
                            set(Y) {
                                r.embed.setVolume(Y).then(() => {
                                    (ke = Y), S.call(r, r.media, "volumechange");
                                });
                            },
                        });
                        let { muted: Ye } = r.config;
                        Object.defineProperty(r.media, "muted", {
                            get: () => Ye,
                            set(Y) {
                                let pe = !!f.boolean(Y) && Y;
                                r.embed.setMuted(!!pe || r.config.muted).then(() => {
                                    (Ye = pe), S.call(r, r.media, "volumechange");
                                });
                            },
                        });
                        let ce,
                            { loop: We } = r.config;
                        Object.defineProperty(r.media, "loop", {
                            get: () => We,
                            set(Y) {
                                let pe = f.boolean(Y) ? Y : r.config.loop.active;
                                r.embed.setLoop(pe).then(() => {
                                    We = pe;
                                });
                            },
                        }),
                            r.embed
                                .getVideoUrl()
                                .then((Y) => {
                                    (ce = Y), B.setDownloadUrl.call(r);
                                })
                                .catch((Y) => {
                                    this.debug.warn(Y);
                                }),
                            Object.defineProperty(r.media, "currentSrc", { get: () => ce }),
                            Object.defineProperty(r.media, "ended", { get: () => r.currentTime === r.duration }),
                            Promise.all([r.embed.getVideoWidth(), r.embed.getVideoHeight()]).then((Y) => {
                                let [pe, lt] = Y;
                                (r.embed.ratio = ji(pe, lt)), Ue.call(this);
                            }),
                            r.embed.setAutopause(r.config.autopause).then((Y) => {
                                r.config.autopause = Y;
                            }),
                            r.embed.getVideoTitle().then((Y) => {
                                (r.config.title = Y), re.setTitle.call(this);
                            }),
                            r.embed.getCurrentTime().then((Y) => {
                                (se = Y), S.call(r, r.media, "timeupdate");
                            }),
                            r.embed.getDuration().then((Y) => {
                                (r.media.duration = Y), S.call(r, r.media, "durationchange");
                            }),
                            r.embed.getTextTracks().then((Y) => {
                                (r.media.textTracks = Y), z.setup.call(r);
                            }),
                            r.embed.on("cuechange", ({ cues: Y = [] }) => {
                                let pe = Y.map((lt) =>
                                    (function (Wt) {
                                        let pi = document.createDocumentFragment(),
                                            Li = document.createElement("div");
                                        return pi.appendChild(Li), (Li.innerHTML = Wt), pi.firstChild.innerText;
                                    })(lt.text)
                                );
                                z.updateCues.call(r, pe);
                            }),
                            r.embed.on("loaded", () => {
                                r.embed.getPaused().then((Y) => {
                                    De.call(r, !Y), Y || S.call(r, r.media, "playing");
                                }),
                                    f.element(r.embed.element) &&
                                        r.supported.ui &&
                                        r.embed.element.setAttribute("tabindex", -1);
                            }),
                            r.embed.on("bufferstart", () => {
                                S.call(r, r.media, "waiting");
                            }),
                            r.embed.on("bufferend", () => {
                                S.call(r, r.media, "playing");
                            }),
                            r.embed.on("play", () => {
                                De.call(r, !0), S.call(r, r.media, "playing");
                            }),
                            r.embed.on("pause", () => {
                                De.call(r, !1);
                            }),
                            r.embed.on("timeupdate", (Y) => {
                                (r.media.seeking = !1), (se = Y.seconds), S.call(r, r.media, "timeupdate");
                            }),
                            r.embed.on("progress", (Y) => {
                                (r.media.buffered = Y.percent),
                                    S.call(r, r.media, "progress"),
                                    parseInt(Y.percent, 10) === 1 && S.call(r, r.media, "canplaythrough"),
                                    r.embed.getDuration().then((pe) => {
                                        pe !== r.media.duration &&
                                            ((r.media.duration = pe), S.call(r, r.media, "durationchange"));
                                    });
                            }),
                            r.embed.on("seeked", () => {
                                (r.media.seeking = !1), S.call(r, r.media, "seeked");
                            }),
                            r.embed.on("ended", () => {
                                (r.media.paused = !0), S.call(r, r.media, "ended");
                            }),
                            r.embed.on("error", (Y) => {
                                (r.media.error = Y), S.call(r, r.media, "error");
                            }),
                            u.customControls && setTimeout(() => re.build.call(r), 0);
                    },
                };
                function jt(r) {
                    r && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                        this.media.paused === r &&
                            ((this.media.paused = !r), S.call(this, this.media, r ? "play" : "pause"));
                }
                function Je(r) {
                    return r.noCookie
                        ? "https://www.youtube-nocookie.com"
                        : window.location.protocol === "http:"
                          ? "http://www.youtube.com"
                          : void 0;
                }
                let Pe = {
                        setup() {
                            if (
                                (ie(this.elements.wrapper, this.config.classNames.embed, !0),
                                f.object(window.YT) && f.function(window.YT.Player))
                            )
                                Pe.ready.call(this);
                            else {
                                let r = window.onYouTubeIframeAPIReady;
                                (window.onYouTubeIframeAPIReady = () => {
                                    f.function(r) && r(), Pe.ready.call(this);
                                }),
                                    Oe(this.config.urls.youtube.sdk).catch((u) => {
                                        this.debug.warn("YouTube API failed to load", u);
                                    });
                            }
                        },
                        getTitle(r) {
                            ft(It(this.config.urls.youtube.api, r))
                                .then((u) => {
                                    if (f.object(u)) {
                                        let { title: o, height: h, width: m } = u;
                                        (this.config.title = o), re.setTitle.call(this), (this.embed.ratio = ji(m, h));
                                    }
                                    Ue.call(this);
                                })
                                .catch(() => {
                                    Ue.call(this);
                                });
                        },
                        ready() {
                            let r = this,
                                u = r.config.youtube,
                                o = r.media && r.media.getAttribute("id");
                            if (!f.empty(o) && o.startsWith("youtube-")) return;
                            let h = r.media.getAttribute("src");
                            f.empty(h) && (h = r.media.getAttribute(this.config.attributes.embed.id));
                            let m =
                                ((p = h),
                                f.empty(p)
                                    ? null
                                    : p.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)
                                      ? RegExp.$2
                                      : p);
                            var p;
                            let v = q("div", {
                                id: `${r.provider}-${Math.floor(1e4 * Math.random())}`,
                                "data-poster": u.customControls ? r.poster : void 0,
                            });
                            if (((r.media = ze(v, r.media)), u.customControls)) {
                                let x = (E) => `https://i.ytimg.com/vi/${m}/${E}default.jpg`;
                                Se(x("maxres"), 121)
                                    .catch(() => Se(x("sd"), 121))
                                    .catch(() => Se(x("hq")))
                                    .then((E) => re.setPoster.call(r, E.src))
                                    .then((E) => {
                                        E.includes("maxres") || (r.elements.poster.style.backgroundSize = "cover");
                                    })
                                    .catch(() => {});
                            }
                            r.embed = new window.YT.Player(r.media, {
                                videoId: m,
                                host: Je(u),
                                playerVars: X(
                                    {},
                                    {
                                        autoplay: r.config.autoplay ? 1 : 0,
                                        hl: r.config.hl,
                                        controls: r.supported.ui && u.customControls ? 0 : 1,
                                        disablekb: 1,
                                        playsinline: r.config.playsinline && !r.config.fullscreen.iosNative ? 1 : 0,
                                        cc_load_policy: r.captions.active ? 1 : 0,
                                        cc_lang_pref: r.config.captions.language,
                                        widget_referrer: window ? window.location.href : null,
                                    },
                                    u
                                ),
                                events: {
                                    onError(x) {
                                        if (!r.media.error) {
                                            let E = x.data,
                                                N =
                                                    {
                                                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                                                        150: "The owner of the requested video does not allow it to be played in embedded players.",
                                                    }[E] || "An unknown error occurred";
                                            (r.media.error = { code: E, message: N }), S.call(r, r.media, "error");
                                        }
                                    },
                                    onPlaybackRateChange(x) {
                                        let E = x.target;
                                        (r.media.playbackRate = E.getPlaybackRate()), S.call(r, r.media, "ratechange");
                                    },
                                    onReady(x) {
                                        if (f.function(r.media.play)) return;
                                        let E = x.target;
                                        Pe.getTitle.call(r, m),
                                            (r.media.play = () => {
                                                jt.call(r, !0), E.playVideo();
                                            }),
                                            (r.media.pause = () => {
                                                jt.call(r, !1), E.pauseVideo();
                                            }),
                                            (r.media.stop = () => {
                                                E.stopVideo();
                                            }),
                                            (r.media.duration = E.getDuration()),
                                            (r.media.paused = !0),
                                            (r.media.currentTime = 0),
                                            Object.defineProperty(r.media, "currentTime", {
                                                get: () => Number(E.getCurrentTime()),
                                                set($) {
                                                    r.paused && !r.embed.hasPlayed && r.embed.mute(),
                                                        (r.media.seeking = !0),
                                                        S.call(r, r.media, "seeking"),
                                                        E.seekTo($);
                                                },
                                            }),
                                            Object.defineProperty(r.media, "playbackRate", {
                                                get: () => E.getPlaybackRate(),
                                                set($) {
                                                    E.setPlaybackRate($);
                                                },
                                            });
                                        let { volume: N } = r.config;
                                        Object.defineProperty(r.media, "volume", {
                                            get: () => N,
                                            set($) {
                                                (N = $), E.setVolume(100 * N), S.call(r, r.media, "volumechange");
                                            },
                                        });
                                        let { muted: j } = r.config;
                                        Object.defineProperty(r.media, "muted", {
                                            get: () => j,
                                            set($) {
                                                let se = f.boolean($) ? $ : j;
                                                (j = se),
                                                    E[se ? "mute" : "unMute"](),
                                                    E.setVolume(100 * N),
                                                    S.call(r, r.media, "volumechange");
                                            },
                                        }),
                                            Object.defineProperty(r.media, "currentSrc", {
                                                get: () => E.getVideoUrl(),
                                            }),
                                            Object.defineProperty(r.media, "ended", {
                                                get: () => r.currentTime === r.duration,
                                            });
                                        let te = E.getAvailablePlaybackRates();
                                        (r.options.speed = te.filter(($) => r.config.speed.options.includes($))),
                                            r.supported.ui && u.customControls && r.media.setAttribute("tabindex", -1),
                                            S.call(r, r.media, "timeupdate"),
                                            S.call(r, r.media, "durationchange"),
                                            clearInterval(r.timers.buffering),
                                            (r.timers.buffering = setInterval(() => {
                                                (r.media.buffered = E.getVideoLoadedFraction()),
                                                    (r.media.lastBuffered === null ||
                                                        r.media.lastBuffered < r.media.buffered) &&
                                                        S.call(r, r.media, "progress"),
                                                    (r.media.lastBuffered = r.media.buffered),
                                                    r.media.buffered === 1 &&
                                                        (clearInterval(r.timers.buffering),
                                                        S.call(r, r.media, "canplaythrough"));
                                            }, 200)),
                                            u.customControls && setTimeout(() => re.build.call(r), 50);
                                    },
                                    onStateChange(x) {
                                        let E = x.target;
                                        switch (
                                            (clearInterval(r.timers.playing),
                                            r.media.seeking &&
                                                [1, 2].includes(x.data) &&
                                                ((r.media.seeking = !1), S.call(r, r.media, "seeked")),
                                            x.data)
                                        ) {
                                            case -1:
                                                S.call(r, r.media, "timeupdate"),
                                                    (r.media.buffered = E.getVideoLoadedFraction()),
                                                    S.call(r, r.media, "progress");
                                                break;
                                            case 0:
                                                jt.call(r, !1),
                                                    r.media.loop
                                                        ? (E.stopVideo(), E.playVideo())
                                                        : S.call(r, r.media, "ended");
                                                break;
                                            case 1:
                                                u.customControls &&
                                                !r.config.autoplay &&
                                                r.media.paused &&
                                                !r.embed.hasPlayed
                                                    ? r.media.pause()
                                                    : (jt.call(r, !0),
                                                      S.call(r, r.media, "playing"),
                                                      (r.timers.playing = setInterval(() => {
                                                          S.call(r, r.media, "timeupdate");
                                                      }, 50)),
                                                      r.media.duration !== E.getDuration() &&
                                                          ((r.media.duration = E.getDuration()),
                                                          S.call(r, r.media, "durationchange")));
                                                break;
                                            case 2:
                                                r.muted || r.embed.unMute(), jt.call(r, !1);
                                                break;
                                            case 3:
                                                S.call(r, r.media, "waiting");
                                        }
                                        S.call(r, r.elements.container, "statechange", !1, { code: x.data });
                                    },
                                },
                            });
                        },
                    },
                    ei = {
                        setup() {
                            this.media
                                ? (ie(
                                      this.elements.container,
                                      this.config.classNames.type.replace("{0}", this.type),
                                      !0
                                  ),
                                  ie(
                                      this.elements.container,
                                      this.config.classNames.provider.replace("{0}", this.provider),
                                      !0
                                  ),
                                  this.isEmbed &&
                                      ie(
                                          this.elements.container,
                                          this.config.classNames.type.replace("{0}", "video"),
                                          !0
                                      ),
                                  this.isVideo &&
                                      ((this.elements.wrapper = q("div", { class: this.config.classNames.video })),
                                      oe(this.media, this.elements.wrapper),
                                      (this.elements.poster = q("div", { class: this.config.classNames.poster })),
                                      this.elements.wrapper.appendChild(this.elements.poster)),
                                  this.isHTML5
                                      ? Ne.setup.call(this)
                                      : this.isYouTube
                                        ? Pe.setup.call(this)
                                        : this.isVimeo && ki.setup.call(this))
                                : this.debug.warn("No media element found!");
                        },
                    };
                class Xn {
                    constructor(u) {
                        l(this, "load", () => {
                            this.enabled &&
                                (f.object(window.google) && f.object(window.google.ima)
                                    ? this.ready()
                                    : Oe(this.player.config.urls.googleIMA.sdk)
                                          .then(() => {
                                              this.ready();
                                          })
                                          .catch(() => {
                                              this.trigger("error", new Error("Google IMA SDK failed to load"));
                                          }));
                        }),
                            l(this, "ready", () => {
                                var o;
                                this.enabled ||
                                    ((o = this).manager && o.manager.destroy(),
                                    o.elements.displayContainer && o.elements.displayContainer.destroy(),
                                    o.elements.container.remove()),
                                    this.startSafetyTimer(12e3, "ready()"),
                                    this.managerPromise.then(() => {
                                        this.clearSafetyTimer("onAdsManagerLoaded()");
                                    }),
                                    this.listeners(),
                                    this.setupIMA();
                            }),
                            l(this, "setupIMA", () => {
                                (this.elements.container = q("div", { class: this.player.config.classNames.ads })),
                                    this.player.elements.container.appendChild(this.elements.container),
                                    google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
                                    google.ima.settings.setLocale(this.player.config.ads.language),
                                    google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                                        this.player.config.playsinline
                                    ),
                                    (this.elements.displayContainer = new google.ima.AdDisplayContainer(
                                        this.elements.container,
                                        this.player.media
                                    )),
                                    (this.loader = new google.ima.AdsLoader(this.elements.displayContainer)),
                                    this.loader.addEventListener(
                                        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                                        (o) => this.onAdsManagerLoaded(o),
                                        !1
                                    ),
                                    this.loader.addEventListener(
                                        google.ima.AdErrorEvent.Type.AD_ERROR,
                                        (o) => this.onAdError(o),
                                        !1
                                    ),
                                    this.requestAds();
                            }),
                            l(this, "requestAds", () => {
                                let { container: o } = this.player.elements;
                                try {
                                    let h = new google.ima.AdsRequest();
                                    (h.adTagUrl = this.tagUrl),
                                        (h.linearAdSlotWidth = o.offsetWidth),
                                        (h.linearAdSlotHeight = o.offsetHeight),
                                        (h.nonLinearAdSlotWidth = o.offsetWidth),
                                        (h.nonLinearAdSlotHeight = o.offsetHeight),
                                        (h.forceNonLinearFullSlot = !1),
                                        h.setAdWillPlayMuted(!this.player.muted),
                                        this.loader.requestAds(h);
                                } catch (h) {
                                    this.onAdError(h);
                                }
                            }),
                            l(this, "pollCountdown", (o = !1) => {
                                if (!o)
                                    return (
                                        clearInterval(this.countdownTimer),
                                        void this.elements.container.removeAttribute("data-badge-text")
                                    );
                                this.countdownTimer = setInterval(() => {
                                    let h = fi(Math.max(this.manager.getRemainingTime(), 0)),
                                        m = `${Z.get("advertisement", this.player.config)} - ${h}`;
                                    this.elements.container.setAttribute("data-badge-text", m);
                                }, 100);
                            }),
                            l(this, "onAdsManagerLoaded", (o) => {
                                if (!this.enabled) return;
                                let h = new google.ima.AdsRenderingSettings();
                                (h.restoreCustomPlaybackStateOnAdBreakComplete = !0),
                                    (h.enablePreloading = !0),
                                    (this.manager = o.getAdsManager(this.player, h)),
                                    (this.cuePoints = this.manager.getCuePoints()),
                                    this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (m) =>
                                        this.onAdError(m)
                                    ),
                                    Object.keys(google.ima.AdEvent.Type).forEach((m) => {
                                        this.manager.addEventListener(google.ima.AdEvent.Type[m], (p) =>
                                            this.onAdEvent(p)
                                        );
                                    }),
                                    this.trigger("loaded");
                            }),
                            l(this, "addCuePoints", () => {
                                f.empty(this.cuePoints) ||
                                    this.cuePoints.forEach((o) => {
                                        if (o !== 0 && o !== -1 && o < this.player.duration) {
                                            let h = this.player.elements.progress;
                                            if (f.element(h)) {
                                                let m = (100 / this.player.duration) * o,
                                                    p = q("span", { class: this.player.config.classNames.cues });
                                                (p.style.left = `${m.toString()}%`), h.appendChild(p);
                                            }
                                        }
                                    });
                            }),
                            l(this, "onAdEvent", (o) => {
                                let { container: h } = this.player.elements,
                                    m = o.getAd(),
                                    p = o.getAdData();
                                switch (
                                    (((v) => {
                                        S.call(
                                            this.player,
                                            this.player.media,
                                            `ads${v.replace(/_/g, "").toLowerCase()}`
                                        );
                                    })(o.type),
                                    o.type)
                                ) {
                                    case google.ima.AdEvent.Type.LOADED:
                                        this.trigger("loaded"),
                                            this.pollCountdown(!0),
                                            m.isLinear() || ((m.width = h.offsetWidth), (m.height = h.offsetHeight));
                                        break;
                                    case google.ima.AdEvent.Type.STARTED:
                                        this.manager.setVolume(this.player.volume);
                                        break;
                                    case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                        this.player.ended ? this.loadAds() : this.loader.contentComplete();
                                        break;
                                    case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                        this.pauseContent();
                                        break;
                                    case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                        this.pollCountdown(), this.resumeContent();
                                        break;
                                    case google.ima.AdEvent.Type.LOG:
                                        p.adError &&
                                            this.player.debug.warn(`Non-fatal ad error: ${p.adError.getMessage()}`);
                                }
                            }),
                            l(this, "onAdError", (o) => {
                                this.cancel(), this.player.debug.warn("Ads error", o);
                            }),
                            l(this, "listeners", () => {
                                let { container: o } = this.player.elements,
                                    h;
                                this.player.on("canplay", () => {
                                    this.addCuePoints();
                                }),
                                    this.player.on("ended", () => {
                                        this.loader.contentComplete();
                                    }),
                                    this.player.on("timeupdate", () => {
                                        h = this.player.currentTime;
                                    }),
                                    this.player.on("seeked", () => {
                                        let m = this.player.currentTime;
                                        f.empty(this.cuePoints) ||
                                            this.cuePoints.forEach((p, v) => {
                                                h < p &&
                                                    p < m &&
                                                    (this.manager.discardAdBreak(), this.cuePoints.splice(v, 1));
                                            });
                                    }),
                                    window.addEventListener("resize", () => {
                                        this.manager &&
                                            this.manager.resize(
                                                o.offsetWidth,
                                                o.offsetHeight,
                                                google.ima.ViewMode.NORMAL
                                            );
                                    });
                            }),
                            l(this, "play", () => {
                                let { container: o } = this.player.elements;
                                this.managerPromise || this.resumeContent(),
                                    this.managerPromise
                                        .then(() => {
                                            this.manager.setVolume(this.player.volume),
                                                this.elements.displayContainer.initialize();
                                            try {
                                                this.initialized ||
                                                    (this.manager.init(
                                                        o.offsetWidth,
                                                        o.offsetHeight,
                                                        google.ima.ViewMode.NORMAL
                                                    ),
                                                    this.manager.start()),
                                                    (this.initialized = !0);
                                            } catch (h) {
                                                this.onAdError(h);
                                            }
                                        })
                                        .catch(() => {});
                            }),
                            l(this, "resumeContent", () => {
                                (this.elements.container.style.zIndex = ""),
                                    (this.playing = !1),
                                    at(this.player.media.play());
                            }),
                            l(this, "pauseContent", () => {
                                (this.elements.container.style.zIndex = 3),
                                    (this.playing = !0),
                                    this.player.media.pause();
                            }),
                            l(this, "cancel", () => {
                                this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
                            }),
                            l(this, "loadAds", () => {
                                this.managerPromise
                                    .then(() => {
                                        this.manager && this.manager.destroy(),
                                            (this.managerPromise = new Promise((o) => {
                                                this.on("loaded", o), this.player.debug.log(this.manager);
                                            })),
                                            (this.initialized = !1),
                                            this.requestAds();
                                    })
                                    .catch(() => {});
                            }),
                            l(this, "trigger", (o, ...h) => {
                                let m = this.events[o];
                                f.array(m) &&
                                    m.forEach((p) => {
                                        f.function(p) && p.apply(this, h);
                                    });
                            }),
                            l(
                                this,
                                "on",
                                (o, h) => (
                                    f.array(this.events[o]) || (this.events[o] = []), this.events[o].push(h), this
                                )
                            ),
                            l(this, "startSafetyTimer", (o, h) => {
                                this.player.debug.log(`Safety timer invoked from: ${h}`),
                                    (this.safetyTimer = setTimeout(() => {
                                        this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
                                    }, o));
                            }),
                            l(this, "clearSafetyTimer", (o) => {
                                f.nullOrUndefined(this.safetyTimer) ||
                                    (this.player.debug.log(`Safety timer cleared from: ${o}`),
                                    clearTimeout(this.safetyTimer),
                                    (this.safetyTimer = null));
                            }),
                            (this.player = u),
                            (this.config = u.config.ads),
                            (this.playing = !1),
                            (this.initialized = !1),
                            (this.elements = { container: null, displayContainer: null }),
                            (this.manager = null),
                            (this.loader = null),
                            (this.cuePoints = null),
                            (this.events = {}),
                            (this.safetyTimer = null),
                            (this.countdownTimer = null),
                            (this.managerPromise = new Promise((o, h) => {
                                this.on("loaded", o), this.on("error", h);
                            })),
                            this.load();
                    }
                    get enabled() {
                        let { config: u } = this;
                        return (
                            this.player.isHTML5 &&
                            this.player.isVideo &&
                            u.enabled &&
                            (!f.empty(u.publisherId) || f.url(u.tagUrl))
                        );
                    }
                    get tagUrl() {
                        let { config: u } = this;
                        return f.url(u.tagUrl)
                            ? u.tagUrl
                            : `https://go.aniview.com/api/adserver6/vast/?${fe({ AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: u.publisherId })}`;
                    }
                }
                function Gn(r = 0, u = 0, o = 255) {
                    return Math.min(Math.max(r, u), o);
                }
                let ln = (r) => {
                        let u = [];
                        return (
                            r.split(/\r\n\r\n|\n\n|\r\r/).forEach((o) => {
                                let h = {};
                                o.split(/\r\n|\n|\r/).forEach((m) => {
                                    if (f.number(h.startTime)) {
                                        if (!f.empty(m.trim()) && f.empty(h.text)) {
                                            let p = m.trim().split("#xywh=");
                                            ([h.text] = p), p[1] && ([h.x, h.y, h.w, h.h] = p[1].split(","));
                                        }
                                    } else {
                                        let p = m.match(
                                            /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                                        );
                                        p &&
                                            ((h.startTime =
                                                60 * Number(p[1] || 0) * 60 +
                                                60 * Number(p[2]) +
                                                Number(p[3]) +
                                                +`0.${p[4]}`),
                                            (h.endTime =
                                                60 * Number(p[6] || 0) * 60 +
                                                60 * Number(p[7]) +
                                                Number(p[8]) +
                                                +`0.${p[9]}`));
                                    }
                                }),
                                    h.text && u.push(h);
                            }),
                            u
                        );
                    },
                    Yt = (r, u) => {
                        let o = {};
                        return (
                            r > u.width / u.height
                                ? ((o.width = u.width), (o.height = (1 / r) * u.width))
                                : ((o.height = u.height), (o.width = r * u.height)),
                            o
                        );
                    };
                class Di {
                    constructor(u) {
                        l(this, "load", () => {
                            this.player.elements.display.seekTooltip &&
                                (this.player.elements.display.seekTooltip.hidden = this.enabled),
                                this.enabled &&
                                    this.getThumbnails().then(() => {
                                        this.enabled &&
                                            (this.render(),
                                            this.determineContainerAutoSizing(),
                                            this.listeners(),
                                            (this.loaded = !0));
                                    });
                        }),
                            l(
                                this,
                                "getThumbnails",
                                () =>
                                    new Promise((o) => {
                                        let { src: h } = this.player.config.previewThumbnails;
                                        if (f.empty(h))
                                            throw new Error("Missing previewThumbnails.src config attribute");
                                        let m = () => {
                                            this.thumbnails.sort((p, v) => p.height - v.height),
                                                this.player.debug.log("Preview thumbnails", this.thumbnails),
                                                o();
                                        };
                                        if (f.function(h))
                                            h((p) => {
                                                (this.thumbnails = p), m();
                                            });
                                        else {
                                            let p = (f.string(h) ? [h] : h).map((v) => this.getThumbnail(v));
                                            Promise.all(p).then(m);
                                        }
                                    })
                            ),
                            l(
                                this,
                                "getThumbnail",
                                (o) =>
                                    new Promise((h) => {
                                        ft(o).then((m) => {
                                            let p = { frames: ln(m), height: null, urlPrefix: "" };
                                            p.frames[0].text.startsWith("/") ||
                                                p.frames[0].text.startsWith("http://") ||
                                                p.frames[0].text.startsWith("https://") ||
                                                (p.urlPrefix = o.substring(0, o.lastIndexOf("/") + 1));
                                            let v = new Image();
                                            (v.onload = () => {
                                                (p.height = v.naturalHeight),
                                                    (p.width = v.naturalWidth),
                                                    this.thumbnails.push(p),
                                                    h();
                                            }),
                                                (v.src = p.urlPrefix + p.frames[0].text);
                                        });
                                    })
                            ),
                            l(this, "startMove", (o) => {
                                if (
                                    this.loaded &&
                                    f.event(o) &&
                                    ["touchmove", "mousemove"].includes(o.type) &&
                                    this.player.media.duration
                                ) {
                                    if (o.type === "touchmove")
                                        this.seekTime =
                                            this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                                    else {
                                        var h, m;
                                        let p = this.player.elements.progress.getBoundingClientRect(),
                                            v = (100 / p.width) * (o.pageX - p.left);
                                        (this.seekTime = this.player.media.duration * (v / 100)),
                                            this.seekTime < 0 && (this.seekTime = 0),
                                            this.seekTime > this.player.media.duration - 1 &&
                                                (this.seekTime = this.player.media.duration - 1),
                                            (this.mousePosX = o.pageX),
                                            (this.elements.thumb.time.innerText = fi(this.seekTime));
                                        let x =
                                            (h = this.player.config.markers) === null ||
                                            h === void 0 ||
                                            (m = h.points) === null ||
                                            m === void 0
                                                ? void 0
                                                : m.find(({ time: E }) => E === Math.round(this.seekTime));
                                        x &&
                                            this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${x.label}<br>`);
                                    }
                                    this.showImageAtCurrentTime();
                                }
                            }),
                            l(this, "endMove", () => {
                                this.toggleThumbContainer(!1, !0);
                            }),
                            l(this, "startScrubbing", (o) => {
                                (f.nullOrUndefined(o.button) || o.button === !1 || o.button === 0) &&
                                    ((this.mouseDown = !0),
                                    this.player.media.duration &&
                                        (this.toggleScrubbingContainer(!0),
                                        this.toggleThumbContainer(!1, !0),
                                        this.showImageAtCurrentTime()));
                            }),
                            l(this, "endScrubbing", () => {
                                (this.mouseDown = !1),
                                    Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime)
                                        ? this.toggleScrubbingContainer(!1)
                                        : ot.call(this.player, this.player.media, "timeupdate", () => {
                                              this.mouseDown || this.toggleScrubbingContainer(!1);
                                          });
                            }),
                            l(this, "listeners", () => {
                                this.player.on("play", () => {
                                    this.toggleThumbContainer(!1, !0);
                                }),
                                    this.player.on("seeked", () => {
                                        this.toggleThumbContainer(!1);
                                    }),
                                    this.player.on("timeupdate", () => {
                                        this.lastTime = this.player.media.currentTime;
                                    });
                            }),
                            l(this, "render", () => {
                                (this.elements.thumb.container = q("div", {
                                    class: this.player.config.classNames.previewThumbnails.thumbContainer,
                                })),
                                    (this.elements.thumb.imageContainer = q("div", {
                                        class: this.player.config.classNames.previewThumbnails.imageContainer,
                                    })),
                                    this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                                let o = q("div", {
                                    class: this.player.config.classNames.previewThumbnails.timeContainer,
                                });
                                (this.elements.thumb.time = q("span", {}, "00:00")),
                                    o.appendChild(this.elements.thumb.time),
                                    this.elements.thumb.imageContainer.appendChild(o),
                                    f.element(this.player.elements.progress) &&
                                        this.player.elements.progress.appendChild(this.elements.thumb.container),
                                    (this.elements.scrubbing.container = q("div", {
                                        class: this.player.config.classNames.previewThumbnails.scrubbingContainer,
                                    })),
                                    this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
                            }),
                            l(this, "destroy", () => {
                                this.elements.thumb.container && this.elements.thumb.container.remove(),
                                    this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
                            }),
                            l(this, "showImageAtCurrentTime", () => {
                                this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                                let o = this.thumbnails[0].frames.findIndex(
                                        (p) => this.seekTime >= p.startTime && this.seekTime <= p.endTime
                                    ),
                                    h = o >= 0,
                                    m = 0;
                                this.mouseDown || this.toggleThumbContainer(h),
                                    h &&
                                        (this.thumbnails.forEach((p, v) => {
                                            this.loadedImages.includes(p.frames[o].text) && (m = v);
                                        }),
                                        o !== this.showingThumb && ((this.showingThumb = o), this.loadImage(m)));
                            }),
                            l(this, "loadImage", (o = 0) => {
                                let h = this.showingThumb,
                                    m = this.thumbnails[o],
                                    { urlPrefix: p } = m,
                                    v = m.frames[h],
                                    x = m.frames[h].text,
                                    E = p + x;
                                if (this.currentImageElement && this.currentImageElement.dataset.filename === x)
                                    this.showImage(this.currentImageElement, v, o, h, x, !1),
                                        (this.currentImageElement.dataset.index = h),
                                        this.removeOldImages(this.currentImageElement);
                                else {
                                    this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                    let N = new Image();
                                    (N.src = E),
                                        (N.dataset.index = h),
                                        (N.dataset.filename = x),
                                        (this.showingThumbFilename = x),
                                        this.player.debug.log(`Loading image: ${E}`),
                                        (N.onload = () => this.showImage(N, v, o, h, x, !0)),
                                        (this.loadingImage = N),
                                        this.removeOldImages(N);
                                }
                            }),
                            l(this, "showImage", (o, h, m, p, v, x = !0) => {
                                this.player.debug.log(`Showing thumb: ${v}. num: ${p}. qual: ${m}. newimg: ${x}`),
                                    this.setImageSizeAndOffset(o, h),
                                    x &&
                                        (this.currentImageContainer.appendChild(o),
                                        (this.currentImageElement = o),
                                        this.loadedImages.includes(v) || this.loadedImages.push(v)),
                                    this.preloadNearby(p, !0)
                                        .then(this.preloadNearby(p, !1))
                                        .then(this.getHigherQuality(m, o, h, v));
                            }),
                            l(this, "removeOldImages", (o) => {
                                Array.from(this.currentImageContainer.children).forEach((h) => {
                                    if (h.tagName.toLowerCase() !== "img") return;
                                    let m = this.usingSprites ? 500 : 1e3;
                                    if (h.dataset.index !== o.dataset.index && !h.dataset.deleting) {
                                        h.dataset.deleting = !0;
                                        let { currentImageContainer: p } = this;
                                        setTimeout(() => {
                                            p.removeChild(h),
                                                this.player.debug.log(`Removing thumb: ${h.dataset.filename}`);
                                        }, m);
                                    }
                                });
                            }),
                            l(
                                this,
                                "preloadNearby",
                                (o, h = !0) =>
                                    new Promise((m) => {
                                        setTimeout(() => {
                                            let p = this.thumbnails[0].frames[o].text;
                                            if (this.showingThumbFilename === p) {
                                                let v;
                                                v = h
                                                    ? this.thumbnails[0].frames.slice(o)
                                                    : this.thumbnails[0].frames.slice(0, o).reverse();
                                                let x = !1;
                                                v.forEach((E) => {
                                                    let N = E.text;
                                                    if (N !== p && !this.loadedImages.includes(N)) {
                                                        (x = !0),
                                                            this.player.debug.log(`Preloading thumb filename: ${N}`);
                                                        let { urlPrefix: j } = this.thumbnails[0],
                                                            te = j + N,
                                                            $ = new Image();
                                                        ($.src = te),
                                                            ($.onload = () => {
                                                                this.player.debug.log(`Preloaded thumb filename: ${N}`),
                                                                    this.loadedImages.includes(N) ||
                                                                        this.loadedImages.push(N),
                                                                    m();
                                                            });
                                                    }
                                                }),
                                                    x || m();
                                            }
                                        }, 300);
                                    })
                            ),
                            l(this, "getHigherQuality", (o, h, m, p) => {
                                if (o < this.thumbnails.length - 1) {
                                    let v = h.naturalHeight;
                                    this.usingSprites && (v = m.h),
                                        v < this.thumbContainerHeight &&
                                            setTimeout(() => {
                                                this.showingThumbFilename === p &&
                                                    (this.player.debug.log(`Showing higher quality thumb for: ${p}`),
                                                    this.loadImage(o + 1));
                                            }, 300);
                                }
                            }),
                            l(this, "toggleThumbContainer", (o = !1, h = !1) => {
                                let m = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                                this.elements.thumb.container.classList.toggle(m, o),
                                    !o && h && ((this.showingThumb = null), (this.showingThumbFilename = null));
                            }),
                            l(this, "toggleScrubbingContainer", (o = !1) => {
                                let h = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                                this.elements.scrubbing.container.classList.toggle(h, o),
                                    o || ((this.showingThumb = null), (this.showingThumbFilename = null));
                            }),
                            l(this, "determineContainerAutoSizing", () => {
                                (this.elements.thumb.imageContainer.clientHeight > 20 ||
                                    this.elements.thumb.imageContainer.clientWidth > 20) &&
                                    (this.sizeSpecifiedInCSS = !0);
                            }),
                            l(this, "setThumbContainerSizeAndPos", () => {
                                let { imageContainer: o } = this.elements.thumb;
                                if (this.sizeSpecifiedInCSS) {
                                    if (o.clientHeight > 20 && o.clientWidth < 20) {
                                        let h = Math.floor(o.clientHeight * this.thumbAspectRatio);
                                        o.style.width = `${h}px`;
                                    } else if (o.clientHeight < 20 && o.clientWidth > 20) {
                                        let h = Math.floor(o.clientWidth / this.thumbAspectRatio);
                                        o.style.height = `${h}px`;
                                    }
                                } else {
                                    let h = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                    (o.style.height = `${this.thumbContainerHeight}px`), (o.style.width = `${h}px`);
                                }
                                this.setThumbContainerPos();
                            }),
                            l(this, "setThumbContainerPos", () => {
                                let o = this.player.elements.progress.getBoundingClientRect(),
                                    h = this.player.elements.container.getBoundingClientRect(),
                                    { container: m } = this.elements.thumb,
                                    p = h.left - o.left + 10,
                                    v = h.right - o.left - m.clientWidth - 10,
                                    x = this.mousePosX - o.left - m.clientWidth / 2,
                                    E = Gn(x, p, v);
                                (m.style.left = `${E}px`), m.style.setProperty("--preview-arrow-offset", x - E + "px");
                            }),
                            l(this, "setScrubbingContainerSize", () => {
                                let { width: o, height: h } = Yt(this.thumbAspectRatio, {
                                    width: this.player.media.clientWidth,
                                    height: this.player.media.clientHeight,
                                });
                                (this.elements.scrubbing.container.style.width = `${o}px`),
                                    (this.elements.scrubbing.container.style.height = `${h}px`);
                            }),
                            l(this, "setImageSizeAndOffset", (o, h) => {
                                if (!this.usingSprites) return;
                                let m = this.thumbContainerHeight / h.h;
                                (o.style.height = o.naturalHeight * m + "px"),
                                    (o.style.width = o.naturalWidth * m + "px"),
                                    (o.style.left = `-${h.x * m}px`),
                                    (o.style.top = `-${h.y * m}px`);
                            }),
                            (this.player = u),
                            (this.thumbnails = []),
                            (this.loaded = !1),
                            (this.lastMouseMoveTime = Date.now()),
                            (this.mouseDown = !1),
                            (this.loadedImages = []),
                            (this.elements = { thumb: {}, scrubbing: {} }),
                            this.load();
                    }
                    get enabled() {
                        return (
                            this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                        );
                    }
                    get currentImageContainer() {
                        return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
                    }
                    get usingSprites() {
                        return Object.keys(this.thumbnails[0].frames[0]).includes("w");
                    }
                    get thumbAspectRatio() {
                        return this.usingSprites
                            ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h
                            : this.thumbnails[0].width / this.thumbnails[0].height;
                    }
                    get thumbContainerHeight() {
                        if (this.mouseDown) {
                            let { height: u } = Yt(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight,
                            });
                            return u;
                        }
                        return this.sizeSpecifiedInCSS
                            ? this.elements.thumb.imageContainer.clientHeight
                            : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
                    }
                    get currentImageElement() {
                        return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
                    }
                    set currentImageElement(u) {
                        this.mouseDown
                            ? (this.currentScrubbingImageElement = u)
                            : (this.currentThumbnailImageElement = u);
                    }
                }
                let ps = {
                    insertElements(r, u) {
                        f.string(u)
                            ? ae(r, this.media, { src: u })
                            : f.array(u) &&
                              u.forEach((o) => {
                                  ae(r, this.media, o);
                              });
                    },
                    change(r) {
                        be(r, "sources.length")
                            ? (Ne.cancelRequests.call(this),
                              this.destroy.call(
                                  this,
                                  () => {
                                      (this.options.quality = []),
                                          de(this.media),
                                          (this.media = null),
                                          f.element(this.elements.container) &&
                                              this.elements.container.removeAttribute("class");
                                      let { sources: u, type: o } = r,
                                          [{ provider: h = ee.html5, src: m }] = u,
                                          p = h === "html5" ? o : "div",
                                          v = h === "html5" ? {} : { src: m };
                                      Object.assign(this, {
                                          provider: h,
                                          type: o,
                                          supported: ve.check(o, h, this.config.playsinline),
                                          media: q(p, v),
                                      }),
                                          this.elements.container.appendChild(this.media),
                                          f.boolean(r.autoplay) && (this.config.autoplay = r.autoplay),
                                          this.isHTML5 &&
                                              (this.config.crossorigin && this.media.setAttribute("crossorigin", ""),
                                              this.config.autoplay && this.media.setAttribute("autoplay", ""),
                                              f.empty(r.poster) || (this.poster = r.poster),
                                              this.config.loop.active && this.media.setAttribute("loop", ""),
                                              this.config.muted && this.media.setAttribute("muted", ""),
                                              this.config.playsinline && this.media.setAttribute("playsinline", "")),
                                          re.addStyleHook.call(this),
                                          this.isHTML5 && ps.insertElements.call(this, "source", u),
                                          (this.config.title = r.title),
                                          ei.setup.call(this),
                                          this.isHTML5 &&
                                              Object.keys(r).includes("tracks") &&
                                              ps.insertElements.call(this, "track", r.tracks),
                                          (this.isHTML5 || (this.isEmbed && !this.supported.ui)) && re.build.call(this),
                                          this.isHTML5 && this.media.load(),
                                          f.empty(r.previewThumbnails) ||
                                              (Object.assign(this.config.previewThumbnails, r.previewThumbnails),
                                              this.previewThumbnails &&
                                                  this.previewThumbnails.loaded &&
                                                  (this.previewThumbnails.destroy(), (this.previewThumbnails = null)),
                                              this.config.previewThumbnails.enabled &&
                                                  (this.previewThumbnails = new Di(this))),
                                          this.fullscreen.update();
                                  },
                                  !0
                              ))
                            : this.debug.warn("Invalid source format");
                    },
                };
                class Kn {
                    constructor(u, o) {
                        if (
                            (l(this, "play", () =>
                                f.function(this.media.play)
                                    ? (this.ads &&
                                          this.ads.enabled &&
                                          this.ads.managerPromise
                                              .then(() => this.ads.play())
                                              .catch(() => at(this.media.play())),
                                      this.media.play())
                                    : null
                            ),
                            l(this, "pause", () =>
                                this.playing && f.function(this.media.pause) ? this.media.pause() : null
                            ),
                            l(this, "togglePlay", (x) =>
                                (f.boolean(x) ? x : !this.playing) ? this.play() : this.pause()
                            ),
                            l(this, "stop", () => {
                                this.isHTML5
                                    ? (this.pause(), this.restart())
                                    : f.function(this.media.stop) && this.media.stop();
                            }),
                            l(this, "restart", () => {
                                this.currentTime = 0;
                            }),
                            l(this, "rewind", (x) => {
                                this.currentTime -= f.number(x) ? x : this.config.seekTime;
                            }),
                            l(this, "forward", (x) => {
                                this.currentTime += f.number(x) ? x : this.config.seekTime;
                            }),
                            l(this, "increaseVolume", (x) => {
                                let E = this.media.muted ? 0 : this.volume;
                                this.volume = E + (f.number(x) ? x : 0);
                            }),
                            l(this, "decreaseVolume", (x) => {
                                this.increaseVolume(-x);
                            }),
                            l(this, "airplay", () => {
                                ve.airplay && this.media.webkitShowPlaybackTargetPicker();
                            }),
                            l(this, "toggleControls", (x) => {
                                if (this.supported.ui && !this.isAudio) {
                                    let E = Qe(this.elements.container, this.config.classNames.hideControls),
                                        N = x === void 0 ? void 0 : !x,
                                        j = ie(this.elements.container, this.config.classNames.hideControls, N);
                                    if (
                                        (j &&
                                            f.array(this.config.controls) &&
                                            this.config.controls.includes("settings") &&
                                            !f.empty(this.config.settings) &&
                                            B.toggleMenu.call(this, !1),
                                        j !== E)
                                    ) {
                                        let te = j ? "controlshidden" : "controlsshown";
                                        S.call(this, this.media, te);
                                    }
                                    return !j;
                                }
                                return !1;
                            }),
                            l(this, "on", (x, E) => {
                                ne.call(this, this.elements.container, x, E);
                            }),
                            l(this, "once", (x, E) => {
                                ot.call(this, this.elements.container, x, E);
                            }),
                            l(this, "off", (x, E) => {
                                St(this.elements.container, x, E);
                            }),
                            l(this, "destroy", (x, E = !1) => {
                                if (!this.ready) return;
                                let N = () => {
                                    (document.body.style.overflow = ""),
                                        (this.embed = null),
                                        E
                                            ? (Object.keys(this.elements).length &&
                                                  (de(this.elements.buttons.play),
                                                  de(this.elements.captions),
                                                  de(this.elements.controls),
                                                  de(this.elements.wrapper),
                                                  (this.elements.buttons.play = null),
                                                  (this.elements.captions = null),
                                                  (this.elements.controls = null),
                                                  (this.elements.wrapper = null)),
                                              f.function(x) && x())
                                            : (ci.call(this),
                                              Ne.cancelRequests.call(this),
                                              ze(this.elements.original, this.elements.container),
                                              S.call(this, this.elements.original, "destroyed", !0),
                                              f.function(x) && x.call(this.elements.original),
                                              (this.ready = !1),
                                              setTimeout(() => {
                                                  (this.elements = null), (this.media = null);
                                              }, 200));
                                };
                                this.stop(),
                                    clearTimeout(this.timers.loading),
                                    clearTimeout(this.timers.controls),
                                    clearTimeout(this.timers.resized),
                                    this.isHTML5
                                        ? (re.toggleNativeControls.call(this, !0), N())
                                        : this.isYouTube
                                          ? (clearInterval(this.timers.buffering),
                                            clearInterval(this.timers.playing),
                                            this.embed !== null &&
                                                f.function(this.embed.destroy) &&
                                                this.embed.destroy(),
                                            N())
                                          : this.isVimeo &&
                                            (this.embed !== null && this.embed.unload().then(N), setTimeout(N, 200));
                            }),
                            l(this, "supports", (x) => ve.mime.call(this, x)),
                            (this.timers = {}),
                            (this.ready = !1),
                            (this.loading = !1),
                            (this.failed = !1),
                            (this.touch = ve.touch),
                            (this.media = u),
                            f.string(this.media) && (this.media = document.querySelectorAll(this.media)),
                            ((window.jQuery && this.media instanceof jQuery) ||
                                f.nodeList(this.media) ||
                                f.array(this.media)) &&
                                (this.media = this.media[0]),
                            (this.config = X(
                                {},
                                V,
                                Kn.defaults,
                                o || {},
                                (() => {
                                    try {
                                        return JSON.parse(this.media.getAttribute("data-plyr-config"));
                                    } catch {
                                        return {};
                                    }
                                })()
                            )),
                            (this.elements = {
                                container: null,
                                fullscreen: null,
                                captions: null,
                                buttons: {},
                                display: {},
                                progress: {},
                                inputs: {},
                                settings: { popup: null, menu: null, panels: {}, buttons: {} },
                            }),
                            (this.captions = { active: null, currentTrack: -1, meta: new WeakMap() }),
                            (this.fullscreen = { active: !1 }),
                            (this.options = { speed: [], quality: [] }),
                            (this.debug = new Ie(this.config.debug)),
                            this.debug.log("Config", this.config),
                            this.debug.log("Support", ve),
                            f.nullOrUndefined(this.media) || !f.element(this.media))
                        )
                            return void this.debug.error("Setup failed: no suitable element passed");
                        if (this.media.plyr) return void this.debug.warn("Target already setup");
                        if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
                        if (!ve.check().api) return void this.debug.error("Setup failed: no support");
                        let h = this.media.cloneNode(!0);
                        (h.autoplay = !1), (this.elements.original = h);
                        let m = this.media.tagName.toLowerCase(),
                            p = null,
                            v = null;
                        switch (m) {
                            case "div":
                                if (((p = this.media.querySelector("iframe")), f.element(p))) {
                                    if (
                                        ((v = Wi(p.getAttribute("src"))),
                                        (this.provider = (function (x) {
                                            return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                                                x
                                            )
                                                ? ee.youtube
                                                : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(x)
                                                  ? ee.vimeo
                                                  : null;
                                        })(v.toString())),
                                        (this.elements.container = this.media),
                                        (this.media = p),
                                        (this.elements.container.className = ""),
                                        v.search.length)
                                    ) {
                                        let x = ["1", "true"];
                                        x.includes(v.searchParams.get("autoplay")) && (this.config.autoplay = !0),
                                            x.includes(v.searchParams.get("loop")) && (this.config.loop.active = !0),
                                            this.isYouTube
                                                ? ((this.config.playsinline = x.includes(
                                                      v.searchParams.get("playsinline")
                                                  )),
                                                  (this.config.youtube.hl = v.searchParams.get("hl")))
                                                : (this.config.playsinline = !0);
                                    }
                                } else
                                    (this.provider = this.media.getAttribute(this.config.attributes.embed.provider)),
                                        this.media.removeAttribute(this.config.attributes.embed.provider);
                                if (f.empty(this.provider) || !Object.values(ee).includes(this.provider))
                                    return void this.debug.error("Setup failed: Invalid provider");
                                this.type = le;
                                break;
                            case "video":
                            case "audio":
                                (this.type = m),
                                    (this.provider = ee.html5),
                                    this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0),
                                    this.media.hasAttribute("autoplay") && (this.config.autoplay = !0),
                                    (this.media.hasAttribute("playsinline") ||
                                        this.media.hasAttribute("webkit-playsinline")) &&
                                        (this.config.playsinline = !0),
                                    this.media.hasAttribute("muted") && (this.config.muted = !0),
                                    this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                break;
                            default:
                                return void this.debug.error("Setup failed: unsupported type");
                        }
                        (this.supported = ve.check(this.type, this.provider)),
                            this.supported.api
                                ? ((this.eventListeners = []),
                                  (this.listeners = new Ut(this)),
                                  (this.storage = new Ct(this)),
                                  (this.media.plyr = this),
                                  f.element(this.elements.container) ||
                                      ((this.elements.container = q("div")), oe(this.media, this.elements.container)),
                                  re.migrateStyles.call(this),
                                  re.addStyleHook.call(this),
                                  ei.setup.call(this),
                                  this.config.debug &&
                                      ne.call(this, this.elements.container, this.config.events.join(" "), (x) => {
                                          this.debug.log(`event: ${x.type}`);
                                      }),
                                  (this.fullscreen = new je(this)),
                                  (this.isHTML5 || (this.isEmbed && !this.supported.ui)) && re.build.call(this),
                                  this.listeners.container(),
                                  this.listeners.global(),
                                  this.config.ads.enabled && (this.ads = new Xn(this)),
                                  this.isHTML5 && this.config.autoplay && this.once("canplay", () => at(this.play())),
                                  (this.lastSeekTime = 0),
                                  this.config.previewThumbnails.enabled && (this.previewThumbnails = new Di(this)))
                                : this.debug.error("Setup failed: no support");
                    }
                    get isHTML5() {
                        return this.provider === ee.html5;
                    }
                    get isEmbed() {
                        return this.isYouTube || this.isVimeo;
                    }
                    get isYouTube() {
                        return this.provider === ee.youtube;
                    }
                    get isVimeo() {
                        return this.provider === ee.vimeo;
                    }
                    get isVideo() {
                        return this.type === le;
                    }
                    get isAudio() {
                        return this.type === tt;
                    }
                    get playing() {
                        return !!(this.ready && !this.paused && !this.ended);
                    }
                    get paused() {
                        return !!this.media.paused;
                    }
                    get stopped() {
                        return !!(this.paused && this.currentTime === 0);
                    }
                    get ended() {
                        return !!this.media.ended;
                    }
                    set currentTime(u) {
                        if (!this.duration) return;
                        let o = f.number(u) && u > 0;
                        (this.media.currentTime = o ? Math.min(u, this.duration) : 0),
                            this.debug.log(`Seeking to ${this.currentTime} seconds`);
                    }
                    get currentTime() {
                        return Number(this.media.currentTime);
                    }
                    get buffered() {
                        let { buffered: u } = this.media;
                        return f.number(u) ? u : u && u.length && this.duration > 0 ? u.end(0) / this.duration : 0;
                    }
                    get seeking() {
                        return !!this.media.seeking;
                    }
                    get duration() {
                        let u = parseFloat(this.config.duration),
                            o = (this.media || {}).duration,
                            h = f.number(o) && o !== 1 / 0 ? o : 0;
                        return u || h;
                    }
                    set volume(u) {
                        let o = u;
                        f.string(o) && (o = Number(o)),
                            f.number(o) || (o = this.storage.get("volume")),
                            f.number(o) || ({ volume: o } = this.config),
                            o > 1 && (o = 1),
                            o < 0 && (o = 0),
                            (this.config.volume = o),
                            (this.media.volume = o),
                            !f.empty(u) && this.muted && o > 0 && (this.muted = !1);
                    }
                    get volume() {
                        return Number(this.media.volume);
                    }
                    set muted(u) {
                        let o = u;
                        f.boolean(o) || (o = this.storage.get("muted")),
                            f.boolean(o) || (o = this.config.muted),
                            (this.config.muted = o),
                            (this.media.muted = o);
                    }
                    get muted() {
                        return !!this.media.muted;
                    }
                    get hasAudio() {
                        return (
                            !this.isHTML5 ||
                            !!this.isAudio ||
                            !!this.media.mozHasAudio ||
                            !!this.media.webkitAudioDecodedByteCount ||
                            !!(this.media.audioTracks && this.media.audioTracks.length)
                        );
                    }
                    set speed(u) {
                        let o = null;
                        f.number(u) && (o = u),
                            f.number(o) || (o = this.storage.get("speed")),
                            f.number(o) || (o = this.config.speed.selected);
                        let { minimumSpeed: h, maximumSpeed: m } = this;
                        (o = Gn(o, h, m)),
                            (this.config.speed.selected = o),
                            setTimeout(() => {
                                this.media && (this.media.playbackRate = o);
                            }, 0);
                    }
                    get speed() {
                        return Number(this.media.playbackRate);
                    }
                    get minimumSpeed() {
                        return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? 0.5 : 0.0625;
                    }
                    get maximumSpeed() {
                        return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
                    }
                    set quality(u) {
                        let o = this.config.quality,
                            h = this.options.quality;
                        if (!h.length) return;
                        let m = [!f.empty(u) && Number(u), this.storage.get("quality"), o.selected, o.default].find(
                                f.number
                            ),
                            p = !0;
                        if (!h.includes(m)) {
                            let v = Ai(h, m);
                            this.debug.warn(`Unsupported quality option: ${m}, using ${v} instead`), (m = v), (p = !1);
                        }
                        (o.selected = m), (this.media.quality = m), p && this.storage.set({ quality: m });
                    }
                    get quality() {
                        return this.media.quality;
                    }
                    set loop(u) {
                        let o = f.boolean(u) ? u : this.config.loop.active;
                        (this.config.loop.active = o), (this.media.loop = o);
                    }
                    get loop() {
                        return !!this.media.loop;
                    }
                    set source(u) {
                        ps.change.call(this, u);
                    }
                    get source() {
                        return this.media.currentSrc;
                    }
                    get download() {
                        let { download: u } = this.config.urls;
                        return f.url(u) ? u : this.source;
                    }
                    set download(u) {
                        f.url(u) && ((this.config.urls.download = u), B.setDownloadUrl.call(this));
                    }
                    set poster(u) {
                        this.isVideo
                            ? re.setPoster.call(this, u, !1).catch(() => {})
                            : this.debug.warn("Poster can only be set for video");
                    }
                    get poster() {
                        return this.isVideo
                            ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster")
                            : null;
                    }
                    get ratio() {
                        if (!this.isVideo) return null;
                        let u = Me(dt.call(this));
                        return f.array(u) ? u.join(":") : u;
                    }
                    set ratio(u) {
                        this.isVideo
                            ? f.string(u) && ui(u)
                                ? ((this.config.ratio = Me(u)), Ue.call(this))
                                : this.debug.error(`Invalid aspect ratio specified (${u})`)
                            : this.debug.warn("Aspect ratio can only be set for video");
                    }
                    set autoplay(u) {
                        this.config.autoplay = f.boolean(u) ? u : this.config.autoplay;
                    }
                    get autoplay() {
                        return !!this.config.autoplay;
                    }
                    toggleCaptions(u) {
                        z.toggle.call(this, u, !1);
                    }
                    set currentTrack(u) {
                        z.set.call(this, u, !1), z.setup.call(this);
                    }
                    get currentTrack() {
                        let { toggled: u, currentTrack: o } = this.captions;
                        return u ? o : -1;
                    }
                    set language(u) {
                        z.setLanguage.call(this, u, !1);
                    }
                    get language() {
                        return (z.getCurrentTrack.call(this) || {}).language;
                    }
                    set pip(u) {
                        if (!ve.pip) return;
                        let o = f.boolean(u) ? u : !this.pip;
                        f.function(this.media.webkitSetPresentationMode) &&
                            this.media.webkitSetPresentationMode(o ? Q : J),
                            f.function(this.media.requestPictureInPicture) &&
                                (!this.pip && o
                                    ? this.media.requestPictureInPicture()
                                    : this.pip && !o && document.exitPictureInPicture());
                    }
                    get pip() {
                        return ve.pip
                            ? f.empty(this.media.webkitPresentationMode)
                                ? this.media === document.pictureInPictureElement
                                : this.media.webkitPresentationMode === Q
                            : null;
                    }
                    setPreviewThumbnails(u) {
                        this.previewThumbnails &&
                            this.previewThumbnails.loaded &&
                            (this.previewThumbnails.destroy(), (this.previewThumbnails = null)),
                            Object.assign(this.config.previewThumbnails, u),
                            this.config.previewThumbnails.enabled && (this.previewThumbnails = new Di(this));
                    }
                    static supported(u, o) {
                        return ve.check(u, o);
                    }
                    static loadSprite(u, o) {
                        return Ft(u, o);
                    }
                    static setup(u, o = {}) {
                        let h = null;
                        return (
                            f.string(u)
                                ? (h = Array.from(document.querySelectorAll(u)))
                                : f.nodeList(u)
                                  ? (h = Array.from(u))
                                  : f.array(u) && (h = u.filter(f.element)),
                            f.empty(h) ? null : h.map((m) => new Kn(m, o))
                        );
                    }
                }
                var No;
                return (Kn.defaults = ((No = V), JSON.parse(JSON.stringify(No)))), Kn;
            });
    });
    document.querySelectorAll("[all-components]").forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("TEIKPIK4", 0);
        });
    });
    document.querySelectorAll("[social-instagram]").forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("X6MFX2N6", 0);
        });
    });
    document.querySelectorAll("[lemon]").forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("NFNDFKCX", 0);
        });
    });
    document.querySelectorAll("[clone]").forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("BQSDQDKJ", 0);
        });
    });
    document.querySelectorAll("[social-patreon]").forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("CYFZHBRQ", 0);
        });
    });
    document.querySelectorAll("[prev-component]").forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("YUMQ2FZV", 0);
        });
    });
    document.querySelectorAll("[patreon]").forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("9UQAJRBO", 0);
        });
    });
    document.querySelectorAll("[social-twitter]").forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("UUPXVDTP", 0);
        });
    });
    document.querySelectorAll("[vibrand-logo]").forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("XJA4TZHQ", 0);
        });
    });
    document.querySelectorAll("[social-webflow]").forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("LBS5JQW6", 0);
        });
    });
    document.querySelectorAll('[video-component="load-video"]').forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("3FWHCFQC", 0);
        });
    });
    document.querySelectorAll('[video-component="load-video"]').forEach((l) => {
        l.addEventListener("click", () => {
            fathom.trackGoal("5RF7GIDB", 0);
        });
    });
    function Ni(l) {
        if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l;
    }
    function Ho(l, e) {
        (l.prototype = Object.create(e.prototype)), (l.prototype.constructor = l), (l.__proto__ = e);
    }
    var Vt = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
        En = { duration: 0.5, overwrite: !1, delay: 0 },
        Ls,
        wt,
        nt,
        ni = 1e8,
        Ae = 1 / ni,
        Ts = Math.PI * 2,
        ql = Ts / 4,
        Vl = 0,
        Uo = Math.sqrt,
        $l = Math.cos,
        Hl = Math.sin,
        ct = function (e) {
            return typeof e == "string";
        },
        Xe = function (e) {
            return typeof e == "function";
        },
        Ii = function (e) {
            return typeof e == "number";
        },
        Rr = function (e) {
            return typeof e == "undefined";
        },
        Si = function (e) {
            return typeof e == "object";
        },
        qt = function (e) {
            return e !== !1;
        },
        jo = function () {
            return typeof window != "undefined";
        },
        Sr = function (e) {
            return Xe(e) || ct(e);
        },
        Yo = (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
        Tt = Array.isArray,
        ks = /(?:-?\.?\d|\.)+/gi,
        Ns = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        dn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        ms = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        Rs = /[+-]=-?[.\d]+/,
        Wo = /[^,'"\[\]\s]+/gi,
        Ul = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        qe,
        ii,
        xs,
        Is,
        Xt = {},
        Ar = {},
        Xo,
        Go = function (e) {
            return (Ar = hn(e, Xt)) && Pt;
        },
        Ir = function (e, i) {
            return console.warn("Invalid property", e, "set to", i, "Missing plugin? gsap.registerPlugin()");
        },
        Mr = function (e, i) {
            return !i && console.warn(e);
        },
        Ko = function (e, i) {
            return (e && (Xt[e] = i) && Ar && (Ar[e] = i)) || Xt;
        },
        ir = function () {
            return 0;
        },
        jl = { suppressEvents: !0, isStart: !0, kill: !1 },
        Cr = { suppressEvents: !0, kill: !1 },
        Yl = { suppressEvents: !0 },
        Fs = {},
        Gi = [],
        Ss = {},
        Qo,
        Bt = {},
        gs = {},
        Io = 30,
        Pr = [],
        Bs = "",
        zs = function (e) {
            var i = e[0],
                t,
                n;
            if ((Si(i) || Xe(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
                for (n = Pr.length; n-- && !Pr[n].targetTest(i); );
                t = Pr[n];
            }
            for (n = e.length; n--; ) (e[n] && (e[n]._gsap || (e[n]._gsap = new $s(e[n], t)))) || e.splice(n, 1);
            return e;
        },
        Ki = function (e) {
            return e._gsap || zs(ri(e))[0]._gsap;
        },
        qs = function (e, i, t) {
            return (t = e[i]) && Xe(t) ? e[i]() : (Rr(t) && e.getAttribute && e.getAttribute(i)) || t;
        },
        Et = function (e, i) {
            return (e = e.split(",")).forEach(i) || e;
        },
        Ge = function (e) {
            return Math.round(e * 1e5) / 1e5 || 0;
        },
        pt = function (e) {
            return Math.round(e * 1e7) / 1e7 || 0;
        },
        fn = function (e, i) {
            var t = i.charAt(0),
                n = parseFloat(i.substr(2));
            return (e = parseFloat(e)), t === "+" ? e + n : t === "-" ? e - n : t === "*" ? e * n : e / n;
        },
        Wl = function (e, i) {
            for (var t = i.length, n = 0; e.indexOf(i[n]) < 0 && ++n < t; );
            return n < t;
        },
        Or = function () {
            var e = Gi.length,
                i = Gi.slice(0),
                t,
                n;
            for (Ss = {}, Gi.length = 0, t = 0; t < e; t++)
                (n = i[t]), n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
        },
        Jo = function (e, i, t, n) {
            Gi.length && !wt && Or(),
                e.render(i, t, n || (wt && i < 0 && (e._initted || e._startAt))),
                Gi.length && !wt && Or();
        },
        Zo = function (e) {
            var i = parseFloat(e);
            return (i || i === 0) && (e + "").match(Wo).length < 2 ? i : ct(e) ? e.trim() : e;
        },
        ea = function (e) {
            return e;
        },
        oi = function (e, i) {
            for (var t in i) t in e || (e[t] = i[t]);
            return e;
        },
        Xl = function (e) {
            return function (i, t) {
                for (var n in t) n in i || (n === "duration" && e) || n === "ease" || (i[n] = t[n]);
            };
        },
        hn = function (e, i) {
            for (var t in i) e[t] = i[t];
            return e;
        },
        Fo = function l(e, i) {
            for (var t in i)
                t !== "__proto__" &&
                    t !== "constructor" &&
                    t !== "prototype" &&
                    (e[t] = Si(i[t]) ? l(e[t] || (e[t] = {}), i[t]) : i[t]);
            return e;
        },
        Dr = function (e, i) {
            var t = {},
                n;
            for (n in e) n in i || (t[n] = e[n]);
            return t;
        },
        Zn = function (e) {
            var i = e.parent || qe,
                t = e.keyframes ? Xl(Tt(e.keyframes)) : oi;
            if (qt(e.inherit)) for (; i; ) t(e, i.vars.defaults), (i = i.parent || i._dp);
            return e;
        },
        Gl = function (e, i) {
            for (var t = e.length, n = t === i.length; n && t-- && e[t] === i[t]; );
            return t < 0;
        },
        ta = function (e, i, t, n, s) {
            t === void 0 && (t = "_first"), n === void 0 && (n = "_last");
            var a = e[n],
                c;
            if (s) for (c = i[s]; a && a[s] > c; ) a = a._prev;
            return (
                a ? ((i._next = a._next), (a._next = i)) : ((i._next = e[t]), (e[t] = i)),
                i._next ? (i._next._prev = i) : (e[n] = i),
                (i._prev = a),
                (i.parent = i._dp = e),
                i
            );
        },
        Fr = function (e, i, t, n) {
            t === void 0 && (t = "_first"), n === void 0 && (n = "_last");
            var s = i._prev,
                a = i._next;
            s ? (s._next = a) : e[t] === i && (e[t] = a),
                a ? (a._prev = s) : e[n] === i && (e[n] = s),
                (i._next = i._prev = i.parent = null);
        },
        Qi = function (e, i) {
            e.parent && (!i || e.parent.autoRemoveChildren) && e.parent.remove(e), (e._act = 0);
        },
        cn = function (e, i) {
            if (e && (!i || i._end > e._dur || i._start < 0)) for (var t = e; t; ) (t._dirty = 1), (t = t.parent);
            return e;
        },
        Kl = function (e) {
            for (var i = e.parent; i && i.parent; ) (i._dirty = 1), i.totalDuration(), (i = i.parent);
            return e;
        },
        Cs = function (e, i, t, n) {
            return (
                e._startAt &&
                (wt
                    ? e._startAt.revert(Cr)
                    : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(i, !0, n))
            );
        },
        Ql = function l(e) {
            return !e || (e._ts && l(e.parent));
        },
        Bo = function (e) {
            return e._repeat ? An(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
        },
        An = function (e, i) {
            var t = Math.floor((e /= i));
            return e && t === e ? t - 1 : t;
        },
        Lr = function (e, i) {
            return (e - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
        },
        Br = function (e) {
            return (e._end = pt(e._start + (e._tDur / Math.abs(e._ts || e._rts || Ae) || 0)));
        },
        zr = function (e, i) {
            var t = e._dp;
            return (
                t &&
                    t.smoothChildTiming &&
                    e._ts &&
                    ((e._start = pt(
                        t._time - (e._ts > 0 ? i / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - i) / -e._ts)
                    )),
                    Br(e),
                    t._dirty || cn(t, e)),
                e
            );
        },
        ia = function (e, i) {
            var t;
            if (
                ((i._time || (i._initted && !i._dur)) &&
                    ((t = Lr(e.rawTime(), i)),
                    (!i._dur || rr(0, i.totalDuration(), t) - i._tTime > Ae) && i.render(t, !0)),
                cn(e, i)._dp && e._initted && e._time >= e._dur && e._ts)
            ) {
                if (e._dur < e.duration()) for (t = e; t._dp; ) t.rawTime() >= 0 && t.totalTime(t._tTime), (t = t._dp);
                e._zTime = -Ae;
            }
        },
        xi = function (e, i, t, n) {
            return (
                i.parent && Qi(i),
                (i._start = pt((Ii(t) ? t : t || e !== qe ? ti(e, t, i) : e._time) + i._delay)),
                (i._end = pt(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0))),
                ta(e, i, "_first", "_last", e._sort ? "_start" : 0),
                Ps(i) || (e._recent = i),
                n || ia(e, i),
                e._ts < 0 && zr(e, e._tTime),
                e
            );
        },
        na = function (e, i) {
            return (Xt.ScrollTrigger || Ir("scrollTrigger", i)) && Xt.ScrollTrigger.create(i, e);
        },
        ra = function (e, i, t, n, s) {
            if ((js(e, i, s), !e._initted)) return 1;
            if (!t && e._pt && !wt && ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) && Qo !== zt.frame)
                return Gi.push(e), (e._lazy = [s, n]), 1;
        },
        Jl = function l(e) {
            var i = e.parent;
            return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || l(i));
        },
        Ps = function (e) {
            var i = e.data;
            return i === "isFromStart" || i === "isStart";
        },
        Zl = function (e, i, t, n) {
            var s = e.ratio,
                a =
                    i < 0 ||
                    (!i &&
                        ((!e._start && Jl(e) && !(!e._initted && Ps(e))) || ((e._ts < 0 || e._dp._ts < 0) && !Ps(e))))
                        ? 0
                        : 1,
                c = e._rDelay,
                d = 0,
                g,
                y,
                T;
            if (
                (c &&
                    e._repeat &&
                    ((d = rr(0, e._tDur, i)),
                    (y = An(d, c)),
                    e._yoyo && y & 1 && (a = 1 - a),
                    y !== An(e._tTime, c) && ((s = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
                a !== s || wt || n || e._zTime === Ae || (!i && e._zTime))
            ) {
                if (!e._initted && ra(e, i, n, t, d)) return;
                for (
                    T = e._zTime,
                        e._zTime = i || (t ? Ae : 0),
                        t || (t = i && !T),
                        e.ratio = a,
                        e._from && (a = 1 - a),
                        e._time = 0,
                        e._tTime = d,
                        g = e._pt;
                    g;

                )
                    g.r(a, g.d), (g = g._next);
                i < 0 && Cs(e, i, t, !0),
                    e._onUpdate && !t && si(e, "onUpdate"),
                    d && e._repeat && !t && e.parent && si(e, "onRepeat"),
                    (i >= e._tDur || i < 0) &&
                        e.ratio === a &&
                        (a && Qi(e, 1),
                        !t && !wt && (si(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
            } else e._zTime || (e._zTime = i);
        },
        ec = function (e, i, t) {
            var n;
            if (t > i)
                for (n = e._first; n && n._start <= t; ) {
                    if (n.data === "isPause" && n._start > i) return n;
                    n = n._next;
                }
            else
                for (n = e._last; n && n._start >= t; ) {
                    if (n.data === "isPause" && n._start < i) return n;
                    n = n._prev;
                }
        },
        Mn = function (e, i, t, n) {
            var s = e._repeat,
                a = pt(i) || 0,
                c = e._tTime / e._tDur;
            return (
                c && !n && (e._time *= a / e._dur),
                (e._dur = a),
                (e._tDur = s ? (s < 0 ? 1e10 : pt(a * (s + 1) + e._rDelay * s)) : a),
                c > 0 && !n && zr(e, (e._tTime = e._tDur * c)),
                e.parent && Br(e),
                t || cn(e.parent, e),
                e
            );
        },
        zo = function (e) {
            return e instanceof vt ? cn(e) : Mn(e, e._dur);
        },
        tc = { _start: 0, endTime: ir, totalDuration: ir },
        ti = function l(e, i, t) {
            var n = e.labels,
                s = e._recent || tc,
                a = e.duration() >= ni ? s.endTime(!1) : e._dur,
                c,
                d,
                g;
            return ct(i) && (isNaN(i) || i in n)
                ? ((d = i.charAt(0)),
                  (g = i.substr(-1) === "%"),
                  (c = i.indexOf("=")),
                  d === "<" || d === ">"
                      ? (c >= 0 && (i = i.replace(/=/, "")),
                        (d === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                            (parseFloat(i.substr(1)) || 0) * (g ? (c < 0 ? s : t).totalDuration() / 100 : 1))
                      : c < 0
                        ? (i in n || (n[i] = a), n[i])
                        : ((d = parseFloat(i.charAt(c - 1) + i.substr(c + 1))),
                          g && t && (d = (d / 100) * (Tt(t) ? t[0] : t).totalDuration()),
                          c > 1 ? l(e, i.substr(0, c - 1), t) + d : a + d))
                : i == null
                  ? a
                  : +i;
        },
        er = function (e, i, t) {
            var n = Ii(i[1]),
                s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
                a = i[s],
                c,
                d;
            if ((n && (a.duration = i[1]), (a.parent = t), e)) {
                for (c = a, d = t; d && !("immediateRender" in c); )
                    (c = d.vars.defaults || {}), (d = qt(d.vars.inherit) && d.parent);
                (a.immediateRender = qt(c.immediateRender)), e < 2 ? (a.runBackwards = 1) : (a.startAt = i[s - 1]);
            }
            return new it(i[0], a, i[s + 1]);
        },
        Ji = function (e, i) {
            return e || e === 0 ? i(e) : i;
        },
        rr = function (e, i, t) {
            return t < e ? e : t > i ? i : t;
        },
        mt = function (e, i) {
            return !ct(e) || !(i = Ul.exec(e)) ? "" : i[1];
        },
        ic = function (e, i, t) {
            return Ji(t, function (n) {
                return rr(e, i, n);
            });
        },
        Es = [].slice,
        sa = function (e, i) {
            return (
                e &&
                Si(e) &&
                "length" in e &&
                ((!i && !e.length) || (e.length - 1 in e && Si(e[0]))) &&
                !e.nodeType &&
                e !== ii
            );
        },
        nc = function (e, i, t) {
            return (
                t === void 0 && (t = []),
                e.forEach(function (n) {
                    var s;
                    return (ct(n) && !i) || sa(n, 1) ? (s = t).push.apply(s, ri(n)) : t.push(n);
                }) || t
            );
        },
        ri = function (e, i, t) {
            return nt && !i && nt.selector
                ? nt.selector(e)
                : ct(e) && !t && (xs || !On())
                  ? Es.call((i || Is).querySelectorAll(e), 0)
                  : Tt(e)
                    ? nc(e, t)
                    : sa(e)
                      ? Es.call(e, 0)
                      : e
                        ? [e]
                        : [];
        },
        As = function (e) {
            return (
                (e = ri(e)[0] || Mr("Invalid scope") || {}),
                function (i) {
                    var t = e.current || e.nativeElement || e;
                    return ri(i, t.querySelectorAll ? t : t === e ? Mr("Invalid scope") || Is.createElement("div") : e);
                }
            );
        },
        oa = function (e) {
            return e.sort(function () {
                return 0.5 - Math.random();
            });
        },
        aa = function (e) {
            if (Xe(e)) return e;
            var i = Si(e) ? e : { each: e },
                t = un(i.ease),
                n = i.from || 0,
                s = parseFloat(i.base) || 0,
                a = {},
                c = n > 0 && n < 1,
                d = isNaN(n) || c,
                g = i.axis,
                y = n,
                T = n;
            return (
                ct(n) ? (y = T = { center: 0.5, edges: 0.5, end: 1 }[n] || 0) : !c && d && ((y = n[0]), (T = n[1])),
                function (b, _, k) {
                    var w = (k || i).length,
                        P = a[w],
                        A,
                        O,
                        D,
                        M,
                        R,
                        I,
                        L,
                        F,
                        f;
                    if (!P) {
                        if (((f = i.grid === "auto" ? 0 : (i.grid || [1, ni])[1]), !f)) {
                            for (L = -ni; L < (L = k[f++].getBoundingClientRect().left) && f < w; );
                            f--;
                        }
                        for (
                            P = a[w] = [],
                                A = d ? Math.min(f, w) * y - 0.5 : n % f,
                                O = f === ni ? 0 : d ? (w * T) / f - 0.5 : (n / f) | 0,
                                L = 0,
                                F = ni,
                                I = 0;
                            I < w;
                            I++
                        )
                            (D = (I % f) - A),
                                (M = O - ((I / f) | 0)),
                                (P[I] = R = g ? Math.abs(g === "y" ? M : D) : Uo(D * D + M * M)),
                                R > L && (L = R),
                                R < F && (F = R);
                        n === "random" && oa(P),
                            (P.max = L - F),
                            (P.min = F),
                            (P.v = w =
                                (parseFloat(i.amount) ||
                                    parseFloat(i.each) *
                                        (f > w ? w - 1 : g ? (g === "y" ? w / f : f) : Math.max(f, w / f)) ||
                                    0) * (n === "edges" ? -1 : 1)),
                            (P.b = w < 0 ? s - w : s),
                            (P.u = mt(i.amount || i.each) || 0),
                            (t = t && w < 0 ? pa(t) : t);
                    }
                    return (w = (P[b] - P.min) / P.max || 0), pt(P.b + (t ? t(w) : w) * P.v) + P.u;
                }
            );
        },
        Ms = function (e) {
            var i = Math.pow(10, ((e + "").split(".")[1] || "").length);
            return function (t) {
                var n = pt(Math.round(parseFloat(t) / e) * e * i);
                return (n - (n % 1)) / i + (Ii(t) ? 0 : mt(t));
            };
        },
        la = function (e, i) {
            var t = Tt(e),
                n,
                s;
            return (
                !t &&
                    Si(e) &&
                    ((n = t = e.radius || ni),
                    e.values ? ((e = ri(e.values)), (s = !Ii(e[0])) && (n *= n)) : (e = Ms(e.increment))),
                Ji(
                    i,
                    t
                        ? Xe(e)
                            ? function (a) {
                                  return (s = e(a)), Math.abs(s - a) <= n ? s : a;
                              }
                            : function (a) {
                                  for (
                                      var c = parseFloat(s ? a.x : a),
                                          d = parseFloat(s ? a.y : 0),
                                          g = ni,
                                          y = 0,
                                          T = e.length,
                                          b,
                                          _;
                                      T--;

                                  )
                                      s
                                          ? ((b = e[T].x - c), (_ = e[T].y - d), (b = b * b + _ * _))
                                          : (b = Math.abs(e[T] - c)),
                                          b < g && ((g = b), (y = T));
                                  return (y = !n || g <= n ? e[y] : a), s || y === a || Ii(a) ? y : y + mt(a);
                              }
                        : Ms(e)
                )
            );
        },
        ca = function (e, i, t, n) {
            return Ji(Tt(e) ? !i : t === !0 ? !!(t = 0) : !n, function () {
                return Tt(e)
                    ? e[~~(Math.random() * e.length)]
                    : (t = t || 1e-5) &&
                          (n = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) &&
                          Math.floor(Math.round((e - t / 2 + Math.random() * (i - e + t * 0.99)) / t) * t * n) / n;
            });
        },
        rc = function () {
            for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) i[t] = arguments[t];
            return function (n) {
                return i.reduce(function (s, a) {
                    return a(s);
                }, n);
            };
        },
        sc = function (e, i) {
            return function (t) {
                return e(parseFloat(t)) + (i || mt(t));
            };
        },
        oc = function (e, i, t) {
            return ha(e, i, 0, 1, t);
        },
        ua = function (e, i, t) {
            return Ji(t, function (n) {
                return e[~~i(n)];
            });
        },
        ac = function l(e, i, t) {
            var n = i - e;
            return Tt(e)
                ? ua(e, l(0, e.length), i)
                : Ji(t, function (s) {
                      return ((n + ((s - e) % n)) % n) + e;
                  });
        },
        lc = function l(e, i, t) {
            var n = i - e,
                s = n * 2;
            return Tt(e)
                ? ua(e, l(0, e.length - 1), i)
                : Ji(t, function (a) {
                      return (a = (s + ((a - e) % s)) % s || 0), e + (a > n ? s - a : a);
                  });
        },
        Nn = function (e) {
            for (var i = 0, t = "", n, s, a, c; ~(n = e.indexOf("random(", i)); )
                (a = e.indexOf(")", n)),
                    (c = e.charAt(n + 7) === "["),
                    (s = e.substr(n + 7, a - n - 7).match(c ? Wo : ks)),
                    (t += e.substr(i, n - i) + ca(c ? s : +s[0], c ? 0 : +s[1], +s[2] || 1e-5)),
                    (i = a + 1);
            return t + e.substr(i, e.length - i);
        },
        ha = function (e, i, t, n, s) {
            var a = i - e,
                c = n - t;
            return Ji(s, function (d) {
                return t + (((d - e) / a) * c || 0);
            });
        },
        cc = function l(e, i, t, n) {
            var s = isNaN(e + i)
                ? 0
                : function (_) {
                      return (1 - _) * e + _ * i;
                  };
            if (!s) {
                var a = ct(e),
                    c = {},
                    d,
                    g,
                    y,
                    T,
                    b;
                if ((t === !0 && (n = 1) && (t = null), a)) (e = { p: e }), (i = { p: i });
                else if (Tt(e) && !Tt(i)) {
                    for (y = [], T = e.length, b = T - 2, g = 1; g < T; g++) y.push(l(e[g - 1], e[g]));
                    T--,
                        (s = function (k) {
                            k *= T;
                            var w = Math.min(b, ~~k);
                            return y[w](k - w);
                        }),
                        (t = i);
                } else n || (e = hn(Tt(e) ? [] : {}, e));
                if (!y) {
                    for (d in i) Hs.call(c, e, d, "get", i[d]);
                    s = function (k) {
                        return Xs(k, c) || (a ? e.p : e);
                    };
                }
            }
            return Ji(t, s);
        },
        qo = function (e, i, t) {
            var n = e.labels,
                s = ni,
                a,
                c,
                d;
            for (a in n) (c = n[a] - i), c < 0 == !!t && c && s > (c = Math.abs(c)) && ((d = a), (s = c));
            return d;
        },
        si = function (e, i, t) {
            var n = e.vars,
                s = n[i],
                a = nt,
                c = e._ctx,
                d,
                g,
                y;
            if (s)
                return (
                    (d = n[i + "Params"]),
                    (g = n.callbackScope || e),
                    t && Gi.length && Or(),
                    c && (nt = c),
                    (y = d ? s.apply(g, d) : s.call(g)),
                    (nt = a),
                    y
                );
        },
        Qn = function (e) {
            return Qi(e), e.scrollTrigger && e.scrollTrigger.kill(!!wt), e.progress() < 1 && si(e, "onInterrupt"), e;
        },
        Pn,
        uc = function (e) {
            e = (!e.name && e.default) || e;
            var i = e.name,
                t = Xe(e),
                n =
                    i && !t && e.init
                        ? function () {
                              this._props = [];
                          }
                        : e,
                s = { init: ir, render: Xs, add: Hs, kill: Cc, modifier: Sc, rawVars: 0 },
                a = { targetTest: 0, get: 0, getSetter: qr, aliases: {}, register: 0 };
            if ((On(), e !== n)) {
                if (Bt[i]) return;
                oi(n, oi(Dr(e, s), a)),
                    hn(n.prototype, hn(s, Dr(e, a))),
                    (Bt[(n.prop = i)] = n),
                    e.targetTest && (Pr.push(n), (Fs[i] = 1)),
                    (i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin");
            }
            Ko(i, n), e.register && e.register(Pt, n, At);
        },
        Ee = 255,
        Jn = {
            aqua: [0, Ee, Ee],
            lime: [0, Ee, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Ee],
            navy: [0, 0, 128],
            white: [Ee, Ee, Ee],
            olive: [128, 128, 0],
            yellow: [Ee, Ee, 0],
            orange: [Ee, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Ee, 0, 0],
            pink: [Ee, 192, 203],
            cyan: [0, Ee, Ee],
            transparent: [Ee, Ee, Ee, 0],
        },
        ys = function (e, i, t) {
            return (
                (e += e < 0 ? 1 : e > 1 ? -1 : 0),
                ((e * 6 < 1 ? i + (t - i) * e * 6 : e < 0.5 ? t : e * 3 < 2 ? i + (t - i) * (2 / 3 - e) * 6 : i) * Ee +
                    0.5) |
                    0
            );
        },
        da = function (e, i, t) {
            var n = e ? (Ii(e) ? [e >> 16, (e >> 8) & Ee, e & Ee] : 0) : Jn.black,
                s,
                a,
                c,
                d,
                g,
                y,
                T,
                b,
                _,
                k;
            if (!n) {
                if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Jn[e])) n = Jn[e];
                else if (e.charAt(0) === "#") {
                    if (
                        (e.length < 6 &&
                            ((s = e.charAt(1)),
                            (a = e.charAt(2)),
                            (c = e.charAt(3)),
                            (e = "#" + s + s + a + a + c + c + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
                        e.length === 9)
                    )
                        return (
                            (n = parseInt(e.substr(1, 6), 16)),
                            [n >> 16, (n >> 8) & Ee, n & Ee, parseInt(e.substr(7), 16) / 255]
                        );
                    (e = parseInt(e.substr(1), 16)), (n = [e >> 16, (e >> 8) & Ee, e & Ee]);
                } else if (e.substr(0, 3) === "hsl") {
                    if (((n = k = e.match(ks)), !i))
                        (d = (+n[0] % 360) / 360),
                            (g = +n[1] / 100),
                            (y = +n[2] / 100),
                            (a = y <= 0.5 ? y * (g + 1) : y + g - y * g),
                            (s = y * 2 - a),
                            n.length > 3 && (n[3] *= 1),
                            (n[0] = ys(d + 1 / 3, s, a)),
                            (n[1] = ys(d, s, a)),
                            (n[2] = ys(d - 1 / 3, s, a));
                    else if (~e.indexOf("=")) return (n = e.match(Ns)), t && n.length < 4 && (n[3] = 1), n;
                } else n = e.match(ks) || Jn.transparent;
                n = n.map(Number);
            }
            return (
                i &&
                    !k &&
                    ((s = n[0] / Ee),
                    (a = n[1] / Ee),
                    (c = n[2] / Ee),
                    (T = Math.max(s, a, c)),
                    (b = Math.min(s, a, c)),
                    (y = (T + b) / 2),
                    T === b
                        ? (d = g = 0)
                        : ((_ = T - b),
                          (g = y > 0.5 ? _ / (2 - T - b) : _ / (T + b)),
                          (d = T === s ? (a - c) / _ + (a < c ? 6 : 0) : T === a ? (c - s) / _ + 2 : (s - a) / _ + 4),
                          (d *= 60)),
                    (n[0] = ~~(d + 0.5)),
                    (n[1] = ~~(g * 100 + 0.5)),
                    (n[2] = ~~(y * 100 + 0.5))),
                t && n.length < 4 && (n[3] = 1),
                n
            );
        },
        fa = function (e) {
            var i = [],
                t = [],
                n = -1;
            return (
                e.split(Ri).forEach(function (s) {
                    var a = s.match(dn) || [];
                    i.push.apply(i, a), t.push((n += a.length + 1));
                }),
                (i.c = t),
                i
            );
        },
        Vo = function (e, i, t) {
            var n = "",
                s = (e + n).match(Ri),
                a = i ? "hsla(" : "rgba(",
                c = 0,
                d,
                g,
                y,
                T;
            if (!s) return e;
            if (
                ((s = s.map(function (b) {
                    return (
                        (b = da(b, i, 1)) && a + (i ? b[0] + "," + b[1] + "%," + b[2] + "%," + b[3] : b.join(",")) + ")"
                    );
                })),
                t && ((y = fa(e)), (d = t.c), d.join(n) !== y.c.join(n)))
            )
                for (g = e.replace(Ri, "1").split(dn), T = g.length - 1; c < T; c++)
                    n +=
                        g[c] +
                        (~d.indexOf(c) ? s.shift() || a + "0,0,0,0)" : (y.length ? y : s.length ? s : t).shift());
            if (!g) for (g = e.split(Ri), T = g.length - 1; c < T; c++) n += g[c] + s[c];
            return n + g[T];
        },
        Ri = (function () {
            var l = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
                e;
            for (e in Jn) l += "|" + e + "\\b";
            return new RegExp(l + ")", "gi");
        })(),
        hc = /hsl[a]?\(/,
        Vs = function (e) {
            var i = e.join(" "),
                t;
            if (((Ri.lastIndex = 0), Ri.test(i)))
                return (t = hc.test(i)), (e[1] = Vo(e[1], t)), (e[0] = Vo(e[0], t, fa(e[1]))), !0;
        },
        nr,
        zt = (function () {
            var l = Date.now,
                e = 500,
                i = 33,
                t = l(),
                n = t,
                s = 1e3 / 240,
                a = s,
                c = [],
                d,
                g,
                y,
                T,
                b,
                _,
                k = function w(P) {
                    var A = l() - n,
                        O = P === !0,
                        D,
                        M,
                        R,
                        I;
                    if (
                        (A > e && (t += A - i),
                        (n += A),
                        (R = n - t),
                        (D = R - a),
                        (D > 0 || O) &&
                            ((I = ++T.frame),
                            (b = R - T.time * 1e3),
                            (T.time = R = R / 1e3),
                            (a += D + (D >= s ? 4 : s - D)),
                            (M = 1)),
                        O || (d = g(w)),
                        M)
                    )
                        for (_ = 0; _ < c.length; _++) c[_](R, b, I, P);
                };
            return (
                (T = {
                    time: 0,
                    frame: 0,
                    tick: function () {
                        k(!0);
                    },
                    deltaRatio: function (P) {
                        return b / (1e3 / (P || 60));
                    },
                    wake: function () {
                        Xo &&
                            (!xs &&
                                jo() &&
                                ((ii = xs = window),
                                (Is = ii.document || {}),
                                (Xt.gsap = Pt),
                                (ii.gsapVersions || (ii.gsapVersions = [])).push(Pt.version),
                                Go(Ar || ii.GreenSockGlobals || (!ii.gsap && ii) || {}),
                                (y = ii.requestAnimationFrame)),
                            d && T.sleep(),
                            (g =
                                y ||
                                function (P) {
                                    return setTimeout(P, (a - T.time * 1e3 + 1) | 0);
                                }),
                            (nr = 1),
                            k(2));
                    },
                    sleep: function () {
                        (y ? ii.cancelAnimationFrame : clearTimeout)(d), (nr = 0), (g = ir);
                    },
                    lagSmoothing: function (P, A) {
                        (e = P || 1 / 0), (i = Math.min(A || 33, e));
                    },
                    fps: function (P) {
                        (s = 1e3 / (P || 240)), (a = T.time * 1e3 + s);
                    },
                    add: function (P, A, O) {
                        var D = A
                            ? function (M, R, I, L) {
                                  P(M, R, I, L), T.remove(D);
                              }
                            : P;
                        return T.remove(P), c[O ? "unshift" : "push"](D), On(), D;
                    },
                    remove: function (P, A) {
                        ~(A = c.indexOf(P)) && c.splice(A, 1) && _ >= A && _--;
                    },
                    _listeners: c,
                }),
                T
            );
        })(),
        On = function () {
            return !nr && zt.wake();
        },
        ye = {},
        dc = /^[\d.\-M][\d.\-,\s]/,
        fc = /["']/g,
        pc = function (e) {
            for (
                var i = {}, t = e.substr(1, e.length - 3).split(":"), n = t[0], s = 1, a = t.length, c, d, g;
                s < a;
                s++
            )
                (d = t[s]),
                    (c = s !== a - 1 ? d.lastIndexOf(",") : d.length),
                    (g = d.substr(0, c)),
                    (i[n] = isNaN(g) ? g.replace(fc, "").trim() : +g),
                    (n = d.substr(c + 1).trim());
            return i;
        },
        mc = function (e) {
            var i = e.indexOf("(") + 1,
                t = e.indexOf(")"),
                n = e.indexOf("(", i);
            return e.substring(i, ~n && n < t ? e.indexOf(")", t + 1) : t);
        },
        gc = function (e) {
            var i = (e + "").split("("),
                t = ye[i[0]];
            return t && i.length > 1 && t.config
                ? t.config.apply(null, ~e.indexOf("{") ? [pc(i[1])] : mc(e).split(",").map(Zo))
                : ye._CE && dc.test(e)
                  ? ye._CE("", e)
                  : t;
        },
        pa = function (e) {
            return function (i) {
                return 1 - e(1 - i);
            };
        },
        ma = function l(e, i) {
            for (var t = e._first, n; t; )
                t instanceof vt
                    ? l(t, i)
                    : t.vars.yoyoEase &&
                      (!t._yoyo || !t._repeat) &&
                      t._yoyo !== i &&
                      (t.timeline
                          ? l(t.timeline, i)
                          : ((n = t._ease), (t._ease = t._yEase), (t._yEase = n), (t._yoyo = i))),
                    (t = t._next);
        },
        un = function (e, i) {
            return (e && (Xe(e) ? e : ye[e] || gc(e))) || i;
        },
        pn = function (e, i, t, n) {
            t === void 0 &&
                (t = function (d) {
                    return 1 - i(1 - d);
                }),
                n === void 0 &&
                    (n = function (d) {
                        return d < 0.5 ? i(d * 2) / 2 : 1 - i((1 - d) * 2) / 2;
                    });
            var s = { easeIn: i, easeOut: t, easeInOut: n },
                a;
            return (
                Et(e, function (c) {
                    (ye[c] = Xt[c] = s), (ye[(a = c.toLowerCase())] = t);
                    for (var d in s)
                        ye[a + (d === "easeIn" ? ".in" : d === "easeOut" ? ".out" : ".inOut")] = ye[c + "." + d] = s[d];
                }),
                s
            );
        },
        ga = function (e) {
            return function (i) {
                return i < 0.5 ? (1 - e(1 - i * 2)) / 2 : 0.5 + e((i - 0.5) * 2) / 2;
            };
        },
        _s = function l(e, i, t) {
            var n = i >= 1 ? i : 1,
                s = (t || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
                a = (s / Ts) * (Math.asin(1 / n) || 0),
                c = function (y) {
                    return y === 1 ? 1 : n * Math.pow(2, -10 * y) * Hl((y - a) * s) + 1;
                },
                d =
                    e === "out"
                        ? c
                        : e === "in"
                          ? function (g) {
                                return 1 - c(1 - g);
                            }
                          : ga(c);
            return (
                (s = Ts / s),
                (d.config = function (g, y) {
                    return l(e, g, y);
                }),
                d
            );
        },
        bs = function l(e, i) {
            i === void 0 && (i = 1.70158);
            var t = function (a) {
                    return a ? --a * a * ((i + 1) * a + i) + 1 : 0;
                },
                n =
                    e === "out"
                        ? t
                        : e === "in"
                          ? function (s) {
                                return 1 - t(1 - s);
                            }
                          : ga(t);
            return (
                (n.config = function (s) {
                    return l(e, s);
                }),
                n
            );
        };
    Et("Linear,Quad,Cubic,Quart,Quint,Strong", function (l, e) {
        var i = e < 5 ? e + 1 : e;
        pn(
            l + ",Power" + (i - 1),
            e
                ? function (t) {
                      return Math.pow(t, i);
                  }
                : function (t) {
                      return t;
                  },
            function (t) {
                return 1 - Math.pow(1 - t, i);
            },
            function (t) {
                return t < 0.5 ? Math.pow(t * 2, i) / 2 : 1 - Math.pow((1 - t) * 2, i) / 2;
            }
        );
    });
    ye.Linear.easeNone = ye.none = ye.Linear.easeIn;
    pn("Elastic", _s("in"), _s("out"), _s());
    (function (l, e) {
        var i = 1 / e,
            t = 2 * i,
            n = 2.5 * i,
            s = function (c) {
                return c < i
                    ? l * c * c
                    : c < t
                      ? l * Math.pow(c - 1.5 / e, 2) + 0.75
                      : c < n
                        ? l * (c -= 2.25 / e) * c + 0.9375
                        : l * Math.pow(c - 2.625 / e, 2) + 0.984375;
            };
        pn(
            "Bounce",
            function (a) {
                return 1 - s(1 - a);
            },
            s
        );
    })(7.5625, 2.75);
    pn("Expo", function (l) {
        return l ? Math.pow(2, 10 * (l - 1)) : 0;
    });
    pn("Circ", function (l) {
        return -(Uo(1 - l * l) - 1);
    });
    pn("Sine", function (l) {
        return l === 1 ? 1 : -$l(l * ql) + 1;
    });
    pn("Back", bs("in"), bs("out"), bs());
    ye.SteppedEase =
        ye.steps =
        Xt.SteppedEase =
            {
                config: function (e, i) {
                    e === void 0 && (e = 1);
                    var t = 1 / e,
                        n = e + (i ? 0 : 1),
                        s = i ? 1 : 0,
                        a = 1 - Ae;
                    return function (c) {
                        return (((n * rr(0, a, c)) | 0) + s) * t;
                    };
                },
            };
    En.ease = ye["quad.out"];
    Et("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (l) {
        return (Bs += l + "," + l + "Params,");
    });
    var $s = function (e, i) {
            (this.id = Vl++),
                (e._gsap = this),
                (this.target = e),
                (this.harness = i),
                (this.get = i ? i.get : qs),
                (this.set = i ? i.getSetter : qr);
        },
        Dn = (function () {
            function l(i) {
                (this.vars = i),
                    (this._delay = +i.delay || 0),
                    (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
                        ((this._rDelay = i.repeatDelay || 0), (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
                    (this._ts = 1),
                    Mn(this, +i.duration, 1, 1),
                    (this.data = i.data),
                    nt && ((this._ctx = nt), nt.data.push(this)),
                    nr || zt.wake();
            }
            var e = l.prototype;
            return (
                (e.delay = function (t) {
                    return t || t === 0
                        ? (this.parent &&
                              this.parent.smoothChildTiming &&
                              this.startTime(this._start + t - this._delay),
                          (this._delay = t),
                          this)
                        : this._delay;
                }),
                (e.duration = function (t) {
                    return arguments.length
                        ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t)
                        : this.totalDuration() && this._dur;
                }),
                (e.totalDuration = function (t) {
                    return arguments.length
                        ? ((this._dirty = 0),
                          Mn(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1)))
                        : this._tDur;
                }),
                (e.totalTime = function (t, n) {
                    if ((On(), !arguments.length)) return this._tTime;
                    var s = this._dp;
                    if (s && s.smoothChildTiming && this._ts) {
                        for (zr(this, t), !s._dp || s.parent || ia(s, this); s && s.parent; )
                            s.parent._time !==
                                s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) &&
                                s.totalTime(s._tTime, !0),
                                (s = s.parent);
                        !this.parent &&
                            this._dp.autoRemoveChildren &&
                            ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) &&
                            xi(this._dp, this, this._start - this._delay);
                    }
                    return (
                        (this._tTime !== t ||
                            (!this._dur && !n) ||
                            (this._initted && Math.abs(this._zTime) === Ae) ||
                            (!t && !this._initted && (this.add || this._ptLookup))) &&
                            (this._ts || (this._pTime = t), Jo(this, t, n)),
                        this
                    );
                }),
                (e.time = function (t, n) {
                    return arguments.length
                        ? this.totalTime(
                              Math.min(this.totalDuration(), t + Bo(this)) % (this._dur + this._rDelay) ||
                                  (t ? this._dur : 0),
                              n
                          )
                        : this._time;
                }),
                (e.totalProgress = function (t, n) {
                    return arguments.length
                        ? this.totalTime(this.totalDuration() * t, n)
                        : this.totalDuration()
                          ? Math.min(1, this._tTime / this._tDur)
                          : this.ratio;
                }),
                (e.progress = function (t, n) {
                    return arguments.length
                        ? this.totalTime(
                              this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + Bo(this),
                              n
                          )
                        : this.duration()
                          ? Math.min(1, this._time / this._dur)
                          : this.ratio;
                }),
                (e.iteration = function (t, n) {
                    var s = this.duration() + this._rDelay;
                    return arguments.length
                        ? this.totalTime(this._time + (t - 1) * s, n)
                        : this._repeat
                          ? An(this._tTime, s) + 1
                          : 1;
                }),
                (e.timeScale = function (t) {
                    if (!arguments.length) return this._rts === -Ae ? 0 : this._rts;
                    if (this._rts === t) return this;
                    var n = this.parent && this._ts ? Lr(this.parent._time, this) : this._tTime;
                    return (
                        (this._rts = +t || 0),
                        (this._ts = this._ps || t === -Ae ? 0 : this._rts),
                        this.totalTime(rr(-this._delay, this._tDur, n), !0),
                        Br(this),
                        Kl(this)
                    );
                }),
                (e.paused = function (t) {
                    return arguments.length
                        ? (this._ps !== t &&
                              ((this._ps = t),
                              t
                                  ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                                    (this._ts = this._act = 0))
                                  : (On(),
                                    (this._ts = this._rts),
                                    this.totalTime(
                                        this.parent && !this.parent.smoothChildTiming
                                            ? this.rawTime()
                                            : this._tTime || this._pTime,
                                        this.progress() === 1 && Math.abs(this._zTime) !== Ae && (this._tTime -= Ae)
                                    ))),
                          this)
                        : this._ps;
                }),
                (e.startTime = function (t) {
                    if (arguments.length) {
                        this._start = t;
                        var n = this.parent || this._dp;
                        return n && (n._sort || !this.parent) && xi(n, this, t - this._delay), this;
                    }
                    return this._start;
                }),
                (e.endTime = function (t) {
                    return this._start + (qt(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
                }),
                (e.rawTime = function (t) {
                    var n = this.parent || this._dp;
                    return n
                        ? t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                            ? this._tTime % (this._dur + this._rDelay)
                            : this._ts
                              ? Lr(n.rawTime(t), this)
                              : this._tTime
                        : this._tTime;
                }),
                (e.revert = function (t) {
                    t === void 0 && (t = Yl);
                    var n = wt;
                    return (
                        (wt = t),
                        (this._initted || this._startAt) &&
                            (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)),
                        this.data !== "nested" && t.kill !== !1 && this.kill(),
                        (wt = n),
                        this
                    );
                }),
                (e.globalTime = function (t) {
                    for (var n = this, s = arguments.length ? t : n.rawTime(); n; )
                        (s = n._start + s / (n._ts || 1)), (n = n._dp);
                    return !this.parent && this._sat
                        ? this._sat.vars.immediateRender
                            ? -1
                            : this._sat.globalTime(t)
                        : s;
                }),
                (e.repeat = function (t) {
                    return arguments.length
                        ? ((this._repeat = t === 1 / 0 ? -2 : t), zo(this))
                        : this._repeat === -2
                          ? 1 / 0
                          : this._repeat;
                }),
                (e.repeatDelay = function (t) {
                    if (arguments.length) {
                        var n = this._time;
                        return (this._rDelay = t), zo(this), n ? this.time(n) : this;
                    }
                    return this._rDelay;
                }),
                (e.yoyo = function (t) {
                    return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                }),
                (e.seek = function (t, n) {
                    return this.totalTime(ti(this, t), qt(n));
                }),
                (e.restart = function (t, n) {
                    return this.play().totalTime(t ? -this._delay : 0, qt(n));
                }),
                (e.play = function (t, n) {
                    return t != null && this.seek(t, n), this.reversed(!1).paused(!1);
                }),
                (e.reverse = function (t, n) {
                    return t != null && this.seek(t || this.totalDuration(), n), this.reversed(!0).paused(!1);
                }),
                (e.pause = function (t, n) {
                    return t != null && this.seek(t, n), this.paused(!0);
                }),
                (e.resume = function () {
                    return this.paused(!1);
                }),
                (e.reversed = function (t) {
                    return arguments.length
                        ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Ae : 0)), this)
                        : this._rts < 0;
                }),
                (e.invalidate = function () {
                    return (this._initted = this._act = 0), (this._zTime = -Ae), this;
                }),
                (e.isActive = function () {
                    var t = this.parent || this._dp,
                        n = this._start,
                        s;
                    return !!(
                        !t ||
                        (this._ts &&
                            this._initted &&
                            t.isActive() &&
                            (s = t.rawTime(!0)) >= n &&
                            s < this.endTime(!0) - Ae)
                    );
                }),
                (e.eventCallback = function (t, n, s) {
                    var a = this.vars;
                    return arguments.length > 1
                        ? (n
                              ? ((a[t] = n), s && (a[t + "Params"] = s), t === "onUpdate" && (this._onUpdate = n))
                              : delete a[t],
                          this)
                        : a[t];
                }),
                (e.then = function (t) {
                    var n = this;
                    return new Promise(function (s) {
                        var a = Xe(t) ? t : ea,
                            c = function () {
                                var g = n.then;
                                (n.then = null),
                                    Xe(a) && (a = a(n)) && (a.then || a === n) && (n.then = g),
                                    s(a),
                                    (n.then = g);
                            };
                        (n._initted && n.totalProgress() === 1 && n._ts >= 0) || (!n._tTime && n._ts < 0)
                            ? c()
                            : (n._prom = c);
                    });
                }),
                (e.kill = function () {
                    Qn(this);
                }),
                l
            );
        })();
    oi(Dn.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Ae,
        _prom: 0,
        _ps: !1,
        _rts: 1,
    });
    var vt = (function (l) {
        Ho(e, l);
        function e(t, n) {
            var s;
            return (
                t === void 0 && (t = {}),
                (s = l.call(this, t) || this),
                (s.labels = {}),
                (s.smoothChildTiming = !!t.smoothChildTiming),
                (s.autoRemoveChildren = !!t.autoRemoveChildren),
                (s._sort = qt(t.sortChildren)),
                qe && xi(t.parent || qe, Ni(s), n),
                t.reversed && s.reverse(),
                t.paused && s.paused(!0),
                t.scrollTrigger && na(Ni(s), t.scrollTrigger),
                s
            );
        }
        var i = e.prototype;
        return (
            (i.to = function (n, s, a) {
                return er(0, arguments, this), this;
            }),
            (i.from = function (n, s, a) {
                return er(1, arguments, this), this;
            }),
            (i.fromTo = function (n, s, a, c) {
                return er(2, arguments, this), this;
            }),
            (i.set = function (n, s, a) {
                return (
                    (s.duration = 0),
                    (s.parent = this),
                    Zn(s).repeatDelay || (s.repeat = 0),
                    (s.immediateRender = !!s.immediateRender),
                    new it(n, s, ti(this, a), 1),
                    this
                );
            }),
            (i.call = function (n, s, a) {
                return xi(this, it.delayedCall(0, n, s), a);
            }),
            (i.staggerTo = function (n, s, a, c, d, g, y) {
                return (
                    (a.duration = s),
                    (a.stagger = a.stagger || c),
                    (a.onComplete = g),
                    (a.onCompleteParams = y),
                    (a.parent = this),
                    new it(n, a, ti(this, d)),
                    this
                );
            }),
            (i.staggerFrom = function (n, s, a, c, d, g, y) {
                return (
                    (a.runBackwards = 1),
                    (Zn(a).immediateRender = qt(a.immediateRender)),
                    this.staggerTo(n, s, a, c, d, g, y)
                );
            }),
            (i.staggerFromTo = function (n, s, a, c, d, g, y, T) {
                return (
                    (c.startAt = a),
                    (Zn(c).immediateRender = qt(c.immediateRender)),
                    this.staggerTo(n, s, c, d, g, y, T)
                );
            }),
            (i.render = function (n, s, a) {
                var c = this._time,
                    d = this._dirty ? this.totalDuration() : this._tDur,
                    g = this._dur,
                    y = n <= 0 ? 0 : pt(n),
                    T = this._zTime < 0 != n < 0 && (this._initted || !g),
                    b,
                    _,
                    k,
                    w,
                    P,
                    A,
                    O,
                    D,
                    M,
                    R,
                    I,
                    L;
                if ((this !== qe && y > d && n >= 0 && (y = d), y !== this._tTime || a || T)) {
                    if (
                        (c !== this._time && g && ((y += this._time - c), (n += this._time - c)),
                        (b = y),
                        (M = this._start),
                        (D = this._ts),
                        (A = !D),
                        T && (g || (c = this._zTime), (n || !s) && (this._zTime = n)),
                        this._repeat)
                    ) {
                        if (((I = this._yoyo), (P = g + this._rDelay), this._repeat < -1 && n < 0))
                            return this.totalTime(P * 100 + n, s, a);
                        if (
                            ((b = pt(y % P)),
                            y === d
                                ? ((w = this._repeat), (b = g))
                                : ((w = ~~(y / P)), w && w === y / P && ((b = g), w--), b > g && (b = g)),
                            (R = An(this._tTime, P)),
                            !c && this._tTime && R !== w && (R = w),
                            I && w & 1 && ((b = g - b), (L = 1)),
                            w !== R && !this._lock)
                        ) {
                            var F = I && R & 1,
                                f = F === (I && w & 1);
                            if (
                                (w < R && (F = !F),
                                (c = F ? 0 : g),
                                (this._lock = 1),
                                (this.render(c || (L ? 0 : pt(w * P)), s, !g)._lock = 0),
                                (this._tTime = y),
                                !s && this.parent && si(this, "onRepeat"),
                                this.vars.repeatRefresh && !L && (this.invalidate()._lock = 1),
                                (c && c !== this._time) ||
                                    A !== !this._ts ||
                                    (this.vars.onRepeat && !this.parent && !this._act))
                            )
                                return this;
                            if (
                                ((g = this._dur),
                                (d = this._tDur),
                                f &&
                                    ((this._lock = 2),
                                    (c = F ? g : -1e-4),
                                    this.render(c, !0),
                                    this.vars.repeatRefresh && !L && this.invalidate()),
                                (this._lock = 0),
                                !this._ts && !A)
                            )
                                return this;
                            ma(this, L);
                        }
                    }
                    if (
                        (this._hasPause &&
                            !this._forcing &&
                            this._lock < 2 &&
                            ((O = ec(this, pt(c), pt(b))), O && (y -= b - (b = O._start))),
                        (this._tTime = y),
                        (this._time = b),
                        (this._act = !D),
                        this._initted ||
                            ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = n), (c = 0)),
                        !c && b && !s && (si(this, "onStart"), this._tTime !== y))
                    )
                        return this;
                    if (b >= c && n >= 0)
                        for (_ = this._first; _; ) {
                            if (((k = _._next), (_._act || b >= _._start) && _._ts && O !== _)) {
                                if (_.parent !== this) return this.render(n, s, a);
                                if (
                                    (_.render(
                                        _._ts > 0
                                            ? (b - _._start) * _._ts
                                            : (_._dirty ? _.totalDuration() : _._tDur) + (b - _._start) * _._ts,
                                        s,
                                        a
                                    ),
                                    b !== this._time || (!this._ts && !A))
                                ) {
                                    (O = 0), k && (y += this._zTime = -Ae);
                                    break;
                                }
                            }
                            _ = k;
                        }
                    else {
                        _ = this._last;
                        for (var H = n < 0 ? n : b; _; ) {
                            if (((k = _._prev), (_._act || H <= _._end) && _._ts && O !== _)) {
                                if (_.parent !== this) return this.render(n, s, a);
                                if (
                                    (_.render(
                                        _._ts > 0
                                            ? (H - _._start) * _._ts
                                            : (_._dirty ? _.totalDuration() : _._tDur) + (H - _._start) * _._ts,
                                        s,
                                        a || (wt && (_._initted || _._startAt))
                                    ),
                                    b !== this._time || (!this._ts && !A))
                                ) {
                                    (O = 0), k && (y += this._zTime = H ? -Ae : Ae);
                                    break;
                                }
                            }
                            _ = k;
                        }
                    }
                    if (O && !s && (this.pause(), (O.render(b >= c ? 0 : -Ae)._zTime = b >= c ? 1 : -1), this._ts))
                        return (this._start = M), Br(this), this.render(n, s, a);
                    this._onUpdate && !s && si(this, "onUpdate", !0),
                        ((y === d && this._tTime >= this.totalDuration()) || (!y && c)) &&
                            (M === this._start || Math.abs(D) !== Math.abs(this._ts)) &&
                            (this._lock ||
                                ((n || !g) && ((y === d && this._ts > 0) || (!y && this._ts < 0)) && Qi(this, 1),
                                !s &&
                                    !(n < 0 && !c) &&
                                    (y || c || !d) &&
                                    (si(this, y === d && n >= 0 ? "onComplete" : "onReverseComplete", !0),
                                    this._prom && !(y < d && this.timeScale() > 0) && this._prom())));
                }
                return this;
            }),
            (i.add = function (n, s) {
                var a = this;
                if ((Ii(s) || (s = ti(this, s, n)), !(n instanceof Dn))) {
                    if (Tt(n))
                        return (
                            n.forEach(function (c) {
                                return a.add(c, s);
                            }),
                            this
                        );
                    if (ct(n)) return this.addLabel(n, s);
                    if (Xe(n)) n = it.delayedCall(0, n);
                    else return this;
                }
                return this !== n ? xi(this, n, s) : this;
            }),
            (i.getChildren = function (n, s, a, c) {
                n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = !0), c === void 0 && (c = -ni);
                for (var d = [], g = this._first; g; )
                    g._start >= c &&
                        (g instanceof it
                            ? s && d.push(g)
                            : (a && d.push(g), n && d.push.apply(d, g.getChildren(!0, s, a)))),
                        (g = g._next);
                return d;
            }),
            (i.getById = function (n) {
                for (var s = this.getChildren(1, 1, 1), a = s.length; a--; ) if (s[a].vars.id === n) return s[a];
            }),
            (i.remove = function (n) {
                return ct(n)
                    ? this.removeLabel(n)
                    : Xe(n)
                      ? this.killTweensOf(n)
                      : (Fr(this, n), n === this._recent && (this._recent = this._last), cn(this));
            }),
            (i.totalTime = function (n, s) {
                return arguments.length
                    ? ((this._forcing = 1),
                      !this._dp &&
                          this._ts &&
                          (this._start = pt(
                              zt.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts)
                          )),
                      l.prototype.totalTime.call(this, n, s),
                      (this._forcing = 0),
                      this)
                    : this._tTime;
            }),
            (i.addLabel = function (n, s) {
                return (this.labels[n] = ti(this, s)), this;
            }),
            (i.removeLabel = function (n) {
                return delete this.labels[n], this;
            }),
            (i.addPause = function (n, s, a) {
                var c = it.delayedCall(0, s || ir, a);
                return (c.data = "isPause"), (this._hasPause = 1), xi(this, c, ti(this, n));
            }),
            (i.removePause = function (n) {
                var s = this._first;
                for (n = ti(this, n); s; ) s._start === n && s.data === "isPause" && Qi(s), (s = s._next);
            }),
            (i.killTweensOf = function (n, s, a) {
                for (var c = this.getTweensOf(n, a), d = c.length; d--; ) Xi !== c[d] && c[d].kill(n, s);
                return this;
            }),
            (i.getTweensOf = function (n, s) {
                for (var a = [], c = ri(n), d = this._first, g = Ii(s), y; d; )
                    d instanceof it
                        ? Wl(d._targets, c) &&
                          (g
                              ? (!Xi || (d._initted && d._ts)) &&
                                d.globalTime(0) <= s &&
                                d.globalTime(d.totalDuration()) > s
                              : !s || d.isActive()) &&
                          a.push(d)
                        : (y = d.getTweensOf(c, s)).length && a.push.apply(a, y),
                        (d = d._next);
                return a;
            }),
            (i.tweenTo = function (n, s) {
                s = s || {};
                var a = this,
                    c = ti(a, n),
                    d = s,
                    g = d.startAt,
                    y = d.onStart,
                    T = d.onStartParams,
                    b = d.immediateRender,
                    _,
                    k = it.to(
                        a,
                        oi(
                            {
                                ease: s.ease || "none",
                                lazy: !1,
                                immediateRender: !1,
                                time: c,
                                overwrite: "auto",
                                duration:
                                    s.duration ||
                                    Math.abs((c - (g && "time" in g ? g.time : a._time)) / a.timeScale()) ||
                                    Ae,
                                onStart: function () {
                                    if ((a.pause(), !_)) {
                                        var P =
                                            s.duration ||
                                            Math.abs((c - (g && "time" in g ? g.time : a._time)) / a.timeScale());
                                        k._dur !== P && Mn(k, P, 0, 1).render(k._time, !0, !0), (_ = 1);
                                    }
                                    y && y.apply(k, T || []);
                                },
                            },
                            s
                        )
                    );
                return b ? k.render(0) : k;
            }),
            (i.tweenFromTo = function (n, s, a) {
                return this.tweenTo(s, oi({ startAt: { time: ti(this, n) } }, a));
            }),
            (i.recent = function () {
                return this._recent;
            }),
            (i.nextLabel = function (n) {
                return n === void 0 && (n = this._time), qo(this, ti(this, n));
            }),
            (i.previousLabel = function (n) {
                return n === void 0 && (n = this._time), qo(this, ti(this, n), 1);
            }),
            (i.currentLabel = function (n) {
                return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + Ae);
            }),
            (i.shiftChildren = function (n, s, a) {
                a === void 0 && (a = 0);
                for (var c = this._first, d = this.labels, g; c; )
                    c._start >= a && ((c._start += n), (c._end += n)), (c = c._next);
                if (s) for (g in d) d[g] >= a && (d[g] += n);
                return cn(this);
            }),
            (i.invalidate = function (n) {
                var s = this._first;
                for (this._lock = 0; s; ) s.invalidate(n), (s = s._next);
                return l.prototype.invalidate.call(this, n);
            }),
            (i.clear = function (n) {
                n === void 0 && (n = !0);
                for (var s = this._first, a; s; ) (a = s._next), this.remove(s), (s = a);
                return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), cn(this);
            }),
            (i.totalDuration = function (n) {
                var s = 0,
                    a = this,
                    c = a._last,
                    d = ni,
                    g,
                    y,
                    T;
                if (arguments.length)
                    return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -n : n));
                if (a._dirty) {
                    for (T = a.parent; c; )
                        (g = c._prev),
                            c._dirty && c.totalDuration(),
                            (y = c._start),
                            y > d && a._sort && c._ts && !a._lock
                                ? ((a._lock = 1), (xi(a, c, y - c._delay, 1)._lock = 0))
                                : (d = y),
                            y < 0 &&
                                c._ts &&
                                ((s -= y),
                                ((!T && !a._dp) || (T && T.smoothChildTiming)) &&
                                    ((a._start += y / a._ts), (a._time -= y), (a._tTime -= y)),
                                a.shiftChildren(-y, !1, -1 / 0),
                                (d = 0)),
                            c._end > s && c._ts && (s = c._end),
                            (c = g);
                    Mn(a, a === qe && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
                }
                return a._tDur;
            }),
            (e.updateRoot = function (n) {
                if ((qe._ts && (Jo(qe, Lr(n, qe)), (Qo = zt.frame)), zt.frame >= Io)) {
                    Io += Vt.autoSleep || 120;
                    var s = qe._first;
                    if ((!s || !s._ts) && Vt.autoSleep && zt._listeners.length < 2) {
                        for (; s && !s._ts; ) s = s._next;
                        s || zt.sleep();
                    }
                }
            }),
            e
        );
    })(Dn);
    oi(vt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var yc = function (e, i, t, n, s, a, c) {
            var d = new At(this._pt, e, i, 0, 1, Ws, null, s),
                g = 0,
                y = 0,
                T,
                b,
                _,
                k,
                w,
                P,
                A,
                O;
            for (
                d.b = t,
                    d.e = n,
                    t += "",
                    n += "",
                    (A = ~n.indexOf("random(")) && (n = Nn(n)),
                    a && ((O = [t, n]), a(O, e, i), (t = O[0]), (n = O[1])),
                    b = t.match(ms) || [];
                (T = ms.exec(n));

            )
                (k = T[0]),
                    (w = n.substring(g, T.index)),
                    _ ? (_ = (_ + 1) % 5) : w.substr(-5) === "rgba(" && (_ = 1),
                    k !== b[y++] &&
                        ((P = parseFloat(b[y - 1]) || 0),
                        (d._pt = {
                            _next: d._pt,
                            p: w || y === 1 ? w : ",",
                            s: P,
                            c: k.charAt(1) === "=" ? fn(P, k) - P : parseFloat(k) - P,
                            m: _ && _ < 4 ? Math.round : 0,
                        }),
                        (g = ms.lastIndex));
            return (
                (d.c = g < n.length ? n.substring(g, n.length) : ""),
                (d.fp = c),
                (Rs.test(n) || A) && (d.e = 0),
                (this._pt = d),
                d
            );
        },
        Hs = function (e, i, t, n, s, a, c, d, g, y) {
            Xe(n) && (n = n(s || 0, e, a));
            var T = e[i],
                b =
                    t !== "get"
                        ? t
                        : Xe(T)
                          ? g
                              ? e[i.indexOf("set") || !Xe(e["get" + i.substr(3)]) ? i : "get" + i.substr(3)](g)
                              : e[i]()
                          : T,
                _ = Xe(T) ? (g ? Tc : ba) : Ys,
                k;
            if (
                (ct(n) &&
                    (~n.indexOf("random(") && (n = Nn(n)),
                    n.charAt(1) === "=" && ((k = fn(b, n) + (mt(b) || 0)), (k || k === 0) && (n = k))),
                !y || b !== n || Os)
            )
                return !isNaN(b * n) && n !== ""
                    ? ((k = new At(this._pt, e, i, +b || 0, n - (b || 0), typeof T == "boolean" ? xc : va, 0, _)),
                      g && (k.fp = g),
                      c && k.modifier(c, this, e),
                      (this._pt = k))
                    : (!T && !(i in e) && Ir(i, n), yc.call(this, e, i, b, n, _, d || Vt.stringFilter, g));
        },
        _c = function (e, i, t, n, s) {
            if ((Xe(e) && (e = tr(e, s, i, t, n)), !Si(e) || (e.style && e.nodeType) || Tt(e) || Yo(e)))
                return ct(e) ? tr(e, s, i, t, n) : e;
            var a = {},
                c;
            for (c in e) a[c] = tr(e[c], s, i, t, n);
            return a;
        },
        Us = function (e, i, t, n, s, a) {
            var c, d, g, y;
            if (
                Bt[e] &&
                (c = new Bt[e]()).init(s, c.rawVars ? i[e] : _c(i[e], n, s, a, t), t, n, a) !== !1 &&
                ((t._pt = d = new At(t._pt, s, e, 0, 1, c.render, c, 0, c.priority)), t !== Pn)
            )
                for (g = t._ptLookup[t._targets.indexOf(s)], y = c._props.length; y--; ) g[c._props[y]] = d;
            return c;
        },
        Xi,
        Os,
        js = function l(e, i, t) {
            var n = e.vars,
                s = n.ease,
                a = n.startAt,
                c = n.immediateRender,
                d = n.lazy,
                g = n.onUpdate,
                y = n.onUpdateParams,
                T = n.callbackScope,
                b = n.runBackwards,
                _ = n.yoyoEase,
                k = n.keyframes,
                w = n.autoRevert,
                P = e._dur,
                A = e._startAt,
                O = e._targets,
                D = e.parent,
                M = D && D.data === "nested" ? D.vars.targets : O,
                R = e._overwrite === "auto" && !Ls,
                I = e.timeline,
                L,
                F,
                f,
                H,
                W,
                U,
                be,
                X,
                oe,
                K,
                q,
                ae,
                de;
            if (
                (I && (!k || !s) && (s = "none"),
                (e._ease = un(s, En.ease)),
                (e._yEase = _ ? pa(un(_ === !0 ? s : _, En.ease)) : 0),
                _ && e._yoyo && !e._repeat && ((_ = e._yEase), (e._yEase = e._ease), (e._ease = _)),
                (e._from = !I && !!n.runBackwards),
                !I || (k && !n.stagger))
            ) {
                if (
                    ((X = O[0] ? Ki(O[0]).harness : 0),
                    (ae = X && n[X.prop]),
                    (L = Dr(n, Fs)),
                    A &&
                        (A._zTime < 0 && A.progress(1),
                        i < 0 && b && c && !w ? A.render(-1, !0) : A.revert(b && P ? Cr : jl),
                        (A._lazy = 0)),
                    a)
                ) {
                    if (
                        (Qi(
                            (e._startAt = it.set(
                                O,
                                oi(
                                    {
                                        data: "isStart",
                                        overwrite: !1,
                                        parent: D,
                                        immediateRender: !0,
                                        lazy: !A && qt(d),
                                        startAt: null,
                                        delay: 0,
                                        onUpdate: g,
                                        onUpdateParams: y,
                                        callbackScope: T,
                                        stagger: 0,
                                    },
                                    a
                                )
                            ))
                        ),
                        (e._startAt._dp = 0),
                        (e._startAt._sat = e),
                        i < 0 && (wt || (!c && !w)) && e._startAt.revert(Cr),
                        c && P && i <= 0 && t <= 0)
                    ) {
                        i && (e._zTime = i);
                        return;
                    }
                } else if (b && P && !A) {
                    if (
                        (i && (c = !1),
                        (f = oi(
                            {
                                overwrite: !1,
                                data: "isFromStart",
                                lazy: c && !A && qt(d),
                                immediateRender: c,
                                stagger: 0,
                                parent: D,
                            },
                            L
                        )),
                        ae && (f[X.prop] = ae),
                        Qi((e._startAt = it.set(O, f))),
                        (e._startAt._dp = 0),
                        (e._startAt._sat = e),
                        i < 0 && (wt ? e._startAt.revert(Cr) : e._startAt.render(-1, !0)),
                        (e._zTime = i),
                        !c)
                    )
                        l(e._startAt, Ae, Ae);
                    else if (!i) return;
                }
                for (e._pt = e._ptCache = 0, d = (P && qt(d)) || (d && !P), F = 0; F < O.length; F++) {
                    if (
                        ((W = O[F]),
                        (be = W._gsap || zs(O)[F]._gsap),
                        (e._ptLookup[F] = K = {}),
                        Ss[be.id] && Gi.length && Or(),
                        (q = M === O ? F : M.indexOf(W)),
                        X &&
                            (oe = new X()).init(W, ae || L, e, q, M) !== !1 &&
                            ((e._pt = H = new At(e._pt, W, oe.name, 0, 1, oe.render, oe, 0, oe.priority)),
                            oe._props.forEach(function (C) {
                                K[C] = H;
                            }),
                            oe.priority && (U = 1)),
                        !X || ae)
                    )
                        for (f in L)
                            Bt[f] && (oe = Us(f, L, e, q, W, M))
                                ? oe.priority && (U = 1)
                                : (K[f] = H = Hs.call(e, W, f, "get", L[f], q, M, 0, n.stringFilter));
                    e._op && e._op[F] && e.kill(W, e._op[F]),
                        R && e._pt && ((Xi = e), qe.killTweensOf(W, K, e.globalTime(i)), (de = !e.parent), (Xi = 0)),
                        e._pt && d && (Ss[be.id] = 1);
                }
                U && Gs(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = g), (e._initted = (!e._op || e._pt) && !de), k && i <= 0 && I.render(ni, !0, !0);
        },
        bc = function (e, i, t, n, s, a, c) {
            var d = ((e._pt && e._ptCache) || (e._ptCache = {}))[i],
                g,
                y,
                T,
                b;
            if (!d)
                for (d = e._ptCache[i] = [], T = e._ptLookup, b = e._targets.length; b--; ) {
                    if (((g = T[b][i]), g && g.d && g.d._pt))
                        for (g = g.d._pt; g && g.p !== i && g.fp !== i; ) g = g._next;
                    if (!g) return (Os = 1), (e.vars[i] = "+=0"), js(e, c), (Os = 0), 1;
                    d.push(g);
                }
            for (b = d.length; b--; )
                (y = d[b]),
                    (g = y._pt || y),
                    (g.s = (n || n === 0) && !s ? n : g.s + (n || 0) + a * g.c),
                    (g.c = t - g.s),
                    y.e && (y.e = Ge(t) + mt(y.e)),
                    y.b && (y.b = g.s + mt(y.b));
        },
        vc = function (e, i) {
            var t = e[0] ? Ki(e[0]).harness : 0,
                n = t && t.aliases,
                s,
                a,
                c,
                d;
            if (!n) return i;
            s = hn({}, i);
            for (a in n) if (a in s) for (d = n[a].split(","), c = d.length; c--; ) s[d[c]] = s[a];
            return s;
        },
        wc = function (e, i, t, n) {
            var s = i.ease || n || "power1.inOut",
                a,
                c;
            if (Tt(i))
                (c = t[e] || (t[e] = [])),
                    i.forEach(function (d, g) {
                        return c.push({ t: (g / (i.length - 1)) * 100, v: d, e: s });
                    });
            else for (a in i) (c = t[a] || (t[a] = [])), a === "ease" || c.push({ t: parseFloat(e), v: i[a], e: s });
        },
        tr = function (e, i, t, n, s) {
            return Xe(e) ? e.call(i, t, n, s) : ct(e) && ~e.indexOf("random(") ? Nn(e) : e;
        },
        ya = Bs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        _a = {};
    Et(ya + ",id,stagger,delay,duration,paused,scrollTrigger", function (l) {
        return (_a[l] = 1);
    });
    var it = (function (l) {
        Ho(e, l);
        function e(t, n, s, a) {
            var c;
            typeof n == "number" && ((s.duration = n), (n = s), (s = null)), (c = l.call(this, a ? n : Zn(n)) || this);
            var d = c.vars,
                g = d.duration,
                y = d.delay,
                T = d.immediateRender,
                b = d.stagger,
                _ = d.overwrite,
                k = d.keyframes,
                w = d.defaults,
                P = d.scrollTrigger,
                A = d.yoyoEase,
                O = n.parent || qe,
                D = (Tt(t) || Yo(t) ? Ii(t[0]) : "length" in n) ? [t] : ri(t),
                M,
                R,
                I,
                L,
                F,
                f,
                H,
                W;
            if (
                ((c._targets = D.length
                    ? zs(D)
                    : Mr("GSAP target " + t + " not found. https://greensock.com", !Vt.nullTargetWarn) || []),
                (c._ptLookup = []),
                (c._overwrite = _),
                k || b || Sr(g) || Sr(y))
            ) {
                if (
                    ((n = c.vars),
                    (M = c.timeline =
                        new vt({
                            data: "nested",
                            defaults: w || {},
                            targets: O && O.data === "nested" ? O.vars.targets : D,
                        })),
                    M.kill(),
                    (M.parent = M._dp = Ni(c)),
                    (M._start = 0),
                    b || Sr(g) || Sr(y))
                ) {
                    if (((L = D.length), (H = b && aa(b)), Si(b)))
                        for (F in b) ~ya.indexOf(F) && (W || (W = {}), (W[F] = b[F]));
                    for (R = 0; R < L; R++)
                        (I = Dr(n, _a)),
                            (I.stagger = 0),
                            A && (I.yoyoEase = A),
                            W && hn(I, W),
                            (f = D[R]),
                            (I.duration = +tr(g, Ni(c), R, f, D)),
                            (I.delay = (+tr(y, Ni(c), R, f, D) || 0) - c._delay),
                            !b && L === 1 && I.delay && ((c._delay = y = I.delay), (c._start += y), (I.delay = 0)),
                            M.to(f, I, H ? H(R, f, D) : 0),
                            (M._ease = ye.none);
                    M.duration() ? (g = y = 0) : (c.timeline = 0);
                } else if (k) {
                    Zn(oi(M.vars.defaults, { ease: "none" })), (M._ease = un(k.ease || n.ease || "none"));
                    var U = 0,
                        be,
                        X,
                        oe;
                    if (Tt(k))
                        k.forEach(function (K) {
                            return M.to(D, K, ">");
                        }),
                            M.duration();
                    else {
                        I = {};
                        for (F in k) F === "ease" || F === "easeEach" || wc(F, k[F], I, k.easeEach);
                        for (F in I)
                            for (
                                be = I[F].sort(function (K, q) {
                                    return K.t - q.t;
                                }),
                                    U = 0,
                                    R = 0;
                                R < be.length;
                                R++
                            )
                                (X = be[R]),
                                    (oe = { ease: X.e, duration: ((X.t - (R ? be[R - 1].t : 0)) / 100) * g }),
                                    (oe[F] = X.v),
                                    M.to(D, oe, U),
                                    (U += oe.duration);
                        M.duration() < g && M.to({}, { duration: g - M.duration() });
                    }
                }
                g || c.duration((g = M.duration()));
            } else c.timeline = 0;
            return (
                _ === !0 && !Ls && ((Xi = Ni(c)), qe.killTweensOf(D), (Xi = 0)),
                xi(O, Ni(c), s),
                n.reversed && c.reverse(),
                n.paused && c.paused(!0),
                (T || (!g && !k && c._start === pt(O._time) && qt(T) && Ql(Ni(c)) && O.data !== "nested")) &&
                    ((c._tTime = -Ae), c.render(Math.max(0, -y) || 0)),
                P && na(Ni(c), P),
                c
            );
        }
        var i = e.prototype;
        return (
            (i.render = function (n, s, a) {
                var c = this._time,
                    d = this._tDur,
                    g = this._dur,
                    y = n < 0,
                    T = n > d - Ae && !y ? d : n < Ae ? 0 : n,
                    b,
                    _,
                    k,
                    w,
                    P,
                    A,
                    O,
                    D,
                    M;
                if (!g) Zl(this, n, s, a);
                else if (
                    T !== this._tTime ||
                    !n ||
                    a ||
                    (!this._initted && this._tTime) ||
                    (this._startAt && this._zTime < 0 !== y)
                ) {
                    if (((b = T), (D = this.timeline), this._repeat)) {
                        if (((w = g + this._rDelay), this._repeat < -1 && y)) return this.totalTime(w * 100 + n, s, a);
                        if (
                            ((b = pt(T % w)),
                            T === d
                                ? ((k = this._repeat), (b = g))
                                : ((k = ~~(T / w)), k && k === T / w && ((b = g), k--), b > g && (b = g)),
                            (A = this._yoyo && k & 1),
                            A && ((M = this._yEase), (b = g - b)),
                            (P = An(this._tTime, w)),
                            b === c && !a && this._initted)
                        )
                            return (this._tTime = T), this;
                        k !== P &&
                            (D && this._yEase && ma(D, A),
                            this.vars.repeatRefresh &&
                                !A &&
                                !this._lock &&
                                ((this._lock = a = 1), (this.render(pt(w * k), !0).invalidate()._lock = 0)));
                    }
                    if (!this._initted) {
                        if (ra(this, y ? n : b, a, s, T)) return (this._tTime = 0), this;
                        if (c !== this._time) return this;
                        if (g !== this._dur) return this.render(n, s, a);
                    }
                    if (
                        ((this._tTime = T),
                        (this._time = b),
                        !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                        (this.ratio = O = (M || this._ease)(b / g)),
                        this._from && (this.ratio = O = 1 - O),
                        b && !c && !s && (si(this, "onStart"), this._tTime !== T))
                    )
                        return this;
                    for (_ = this._pt; _; ) _.r(O, _.d), (_ = _._next);
                    (D && D.render(n < 0 ? n : !b && A ? -Ae : D._dur * D._ease(b / this._dur), s, a)) ||
                        (this._startAt && (this._zTime = n)),
                        this._onUpdate && !s && (y && Cs(this, n, s, a), si(this, "onUpdate")),
                        this._repeat && k !== P && this.vars.onRepeat && !s && this.parent && si(this, "onRepeat"),
                        (T === this._tDur || !T) &&
                            this._tTime === T &&
                            (y && !this._onUpdate && Cs(this, n, !0, !0),
                            (n || !g) && ((T === this._tDur && this._ts > 0) || (!T && this._ts < 0)) && Qi(this, 1),
                            !s &&
                                !(y && !c) &&
                                (T || c || A) &&
                                (si(this, T === d ? "onComplete" : "onReverseComplete", !0),
                                this._prom && !(T < d && this.timeScale() > 0) && this._prom()));
                }
                return this;
            }),
            (i.targets = function () {
                return this._targets;
            }),
            (i.invalidate = function (n) {
                return (
                    (!n || !this.vars.runBackwards) && (this._startAt = 0),
                    (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
                    (this._ptLookup = []),
                    this.timeline && this.timeline.invalidate(n),
                    l.prototype.invalidate.call(this, n)
                );
            }),
            (i.resetTo = function (n, s, a, c) {
                nr || zt.wake(), this._ts || this.play();
                var d = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
                    g;
                return (
                    this._initted || js(this, d),
                    (g = this._ease(d / this._dur)),
                    bc(this, n, s, a, c, g, d)
                        ? this.resetTo(n, s, a, c)
                        : (zr(this, 0),
                          this.parent || ta(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                          this.render(0))
                );
            }),
            (i.kill = function (n, s) {
                if ((s === void 0 && (s = "all"), !n && (!s || s === "all")))
                    return (this._lazy = this._pt = 0), this.parent ? Qn(this) : this;
                if (this.timeline) {
                    var a = this.timeline.totalDuration();
                    return (
                        this.timeline.killTweensOf(n, s, Xi && Xi.vars.overwrite !== !0)._first || Qn(this),
                        this.parent &&
                            a !== this.timeline.totalDuration() &&
                            Mn(this, (this._dur * this.timeline._tDur) / a, 0, 1),
                        this
                    );
                }
                var c = this._targets,
                    d = n ? ri(n) : c,
                    g = this._ptLookup,
                    y = this._pt,
                    T,
                    b,
                    _,
                    k,
                    w,
                    P,
                    A;
                if ((!s || s === "all") && Gl(c, d)) return s === "all" && (this._pt = 0), Qn(this);
                for (
                    T = this._op = this._op || [],
                        s !== "all" &&
                            (ct(s) &&
                                ((w = {}),
                                Et(s, function (O) {
                                    return (w[O] = 1);
                                }),
                                (s = w)),
                            (s = vc(c, s))),
                        A = c.length;
                    A--;

                )
                    if (~d.indexOf(c[A])) {
                        (b = g[A]), s === "all" ? ((T[A] = s), (k = b), (_ = {})) : ((_ = T[A] = T[A] || {}), (k = s));
                        for (w in k)
                            (P = b && b[w]),
                                P && ((!("kill" in P.d) || P.d.kill(w) === !0) && Fr(this, P, "_pt"), delete b[w]),
                                _ !== "all" && (_[w] = 1);
                    }
                return this._initted && !this._pt && y && Qn(this), this;
            }),
            (e.to = function (n, s) {
                return new e(n, s, arguments[2]);
            }),
            (e.from = function (n, s) {
                return er(1, arguments);
            }),
            (e.delayedCall = function (n, s, a, c) {
                return new e(s, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: n,
                    onComplete: s,
                    onReverseComplete: s,
                    onCompleteParams: a,
                    onReverseCompleteParams: a,
                    callbackScope: c,
                });
            }),
            (e.fromTo = function (n, s, a) {
                return er(2, arguments);
            }),
            (e.set = function (n, s) {
                return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(n, s);
            }),
            (e.killTweensOf = function (n, s, a) {
                return qe.killTweensOf(n, s, a);
            }),
            e
        );
    })(Dn);
    oi(it.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
    Et("staggerTo,staggerFrom,staggerFromTo", function (l) {
        it[l] = function () {
            var e = new vt(),
                i = Es.call(arguments, 0);
            return i.splice(l === "staggerFromTo" ? 5 : 4, 0, 0), e[l].apply(e, i);
        };
    });
    var Ys = function (e, i, t) {
            return (e[i] = t);
        },
        ba = function (e, i, t) {
            return e[i](t);
        },
        Tc = function (e, i, t, n) {
            return e[i](n.fp, t);
        },
        kc = function (e, i, t) {
            return e.setAttribute(i, t);
        },
        qr = function (e, i) {
            return Xe(e[i]) ? ba : Rr(e[i]) && e.setAttribute ? kc : Ys;
        },
        va = function (e, i) {
            return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e6) / 1e6, i);
        },
        xc = function (e, i) {
            return i.set(i.t, i.p, !!(i.s + i.c * e), i);
        },
        Ws = function (e, i) {
            var t = i._pt,
                n = "";
            if (!e && i.b) n = i.b;
            else if (e === 1 && i.e) n = i.e;
            else {
                for (; t; )
                    (n = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + n), (t = t._next);
                n += i.c;
            }
            i.set(i.t, i.p, n, i);
        },
        Xs = function (e, i) {
            for (var t = i._pt; t; ) t.r(e, t.d), (t = t._next);
        },
        Sc = function (e, i, t, n) {
            for (var s = this._pt, a; s; ) (a = s._next), s.p === n && s.modifier(e, i, t), (s = a);
        },
        Cc = function (e) {
            for (var i = this._pt, t, n; i; )
                (n = i._next), (i.p === e && !i.op) || i.op === e ? Fr(this, i, "_pt") : i.dep || (t = 1), (i = n);
            return !t;
        },
        Pc = function (e, i, t, n) {
            n.mSet(e, i, n.m.call(n.tween, t, n.mt), n);
        },
        Gs = function (e) {
            for (var i = e._pt, t, n, s, a; i; ) {
                for (t = i._next, n = s; n && n.pr > i.pr; ) n = n._next;
                (i._prev = n ? n._prev : a) ? (i._prev._next = i) : (s = i),
                    (i._next = n) ? (n._prev = i) : (a = i),
                    (i = t);
            }
            e._pt = s;
        },
        At = (function () {
            function l(i, t, n, s, a, c, d, g, y) {
                (this.t = t),
                    (this.s = s),
                    (this.c = a),
                    (this.p = n),
                    (this.r = c || va),
                    (this.d = d || this),
                    (this.set = g || Ys),
                    (this.pr = y || 0),
                    (this._next = i),
                    i && (i._prev = this);
            }
            var e = l.prototype;
            return (
                (e.modifier = function (t, n, s) {
                    (this.mSet = this.mSet || this.set), (this.set = Pc), (this.m = t), (this.mt = s), (this.tween = n);
                }),
                l
            );
        })();
    Et(
        Bs +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (l) {
            return (Fs[l] = 1);
        }
    );
    Xt.TweenMax = Xt.TweenLite = it;
    Xt.TimelineLite = Xt.TimelineMax = vt;
    qe = new vt({ sortChildren: !1, defaults: En, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 });
    Vt.stringFilter = Vs;
    var Ln = [],
        Er = {},
        Ec = [],
        $o = 0,
        vs = function (e) {
            return (Er[e] || Ec).map(function (i) {
                return i();
            });
        },
        Ds = function () {
            var e = Date.now(),
                i = [];
            e - $o > 2 &&
                (vs("matchMediaInit"),
                Ln.forEach(function (t) {
                    var n = t.queries,
                        s = t.conditions,
                        a,
                        c,
                        d,
                        g;
                    for (c in n) (a = ii.matchMedia(n[c]).matches), a && (d = 1), a !== s[c] && ((s[c] = a), (g = 1));
                    g && (t.revert(), d && i.push(t));
                }),
                vs("matchMediaRevert"),
                i.forEach(function (t) {
                    return t.onMatch(t);
                }),
                ($o = e),
                vs("matchMedia"));
        },
        wa = (function () {
            function l(i, t) {
                (this.selector = t && As(t)),
                    (this.data = []),
                    (this._r = []),
                    (this.isReverted = !1),
                    i && this.add(i);
            }
            var e = l.prototype;
            return (
                (e.add = function (t, n, s) {
                    Xe(t) && ((s = n), (n = t), (t = Xe));
                    var a = this,
                        c = function () {
                            var g = nt,
                                y = a.selector,
                                T;
                            return (
                                g && g !== a && g.data.push(a),
                                s && (a.selector = As(s)),
                                (nt = a),
                                (T = n.apply(a, arguments)),
                                Xe(T) && a._r.push(T),
                                (nt = g),
                                (a.selector = y),
                                (a.isReverted = !1),
                                T
                            );
                        };
                    return (a.last = c), t === Xe ? c(a) : t ? (a[t] = c) : c;
                }),
                (e.ignore = function (t) {
                    var n = nt;
                    (nt = null), t(this), (nt = n);
                }),
                (e.getTweens = function () {
                    var t = [];
                    return (
                        this.data.forEach(function (n) {
                            return n instanceof l
                                ? t.push.apply(t, n.getTweens())
                                : n instanceof it && !(n.parent && n.parent.data === "nested") && t.push(n);
                        }),
                        t
                    );
                }),
                (e.clear = function () {
                    this._r.length = this.data.length = 0;
                }),
                (e.kill = function (t, n) {
                    var s = this;
                    if (t) {
                        var a = this.getTweens();
                        this.data.forEach(function (d) {
                            d.data === "isFlip" &&
                                (d.revert(),
                                d.getChildren(!0, !0, !1).forEach(function (g) {
                                    return a.splice(a.indexOf(g), 1);
                                }));
                        }),
                            a
                                .map(function (d) {
                                    return { g: d.globalTime(0), t: d };
                                })
                                .sort(function (d, g) {
                                    return g.g - d.g || -1;
                                })
                                .forEach(function (d) {
                                    return d.t.revert(t);
                                }),
                            this.data.forEach(function (d) {
                                return !(d instanceof Dn) && d.revert && d.revert(t);
                            }),
                            this._r.forEach(function (d) {
                                return d(t, s);
                            }),
                            (this.isReverted = !0);
                    } else
                        this.data.forEach(function (d) {
                            return d.kill && d.kill();
                        });
                    if ((this.clear(), n)) {
                        var c = Ln.indexOf(this);
                        ~c && Ln.splice(c, 1);
                    }
                }),
                (e.revert = function (t) {
                    this.kill(t || {});
                }),
                l
            );
        })(),
        Ac = (function () {
            function l(i) {
                (this.contexts = []), (this.scope = i);
            }
            var e = l.prototype;
            return (
                (e.add = function (t, n, s) {
                    Si(t) || (t = { matches: t });
                    var a = new wa(0, s || this.scope),
                        c = (a.conditions = {}),
                        d,
                        g,
                        y;
                    this.contexts.push(a), (n = a.add("onMatch", n)), (a.queries = t);
                    for (g in t)
                        g === "all"
                            ? (y = 1)
                            : ((d = ii.matchMedia(t[g])),
                              d &&
                                  (Ln.indexOf(a) < 0 && Ln.push(a),
                                  (c[g] = d.matches) && (y = 1),
                                  d.addListener ? d.addListener(Ds) : d.addEventListener("change", Ds)));
                    return y && n(a), this;
                }),
                (e.revert = function (t) {
                    this.kill(t || {});
                }),
                (e.kill = function (t) {
                    this.contexts.forEach(function (n) {
                        return n.kill(t, !0);
                    });
                }),
                l
            );
        })(),
        Nr = {
            registerPlugin: function () {
                for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) i[t] = arguments[t];
                i.forEach(function (n) {
                    return uc(n);
                });
            },
            timeline: function (e) {
                return new vt(e);
            },
            getTweensOf: function (e, i) {
                return qe.getTweensOf(e, i);
            },
            getProperty: function (e, i, t, n) {
                ct(e) && (e = ri(e)[0]);
                var s = Ki(e || {}).get,
                    a = t ? ea : Zo;
                return (
                    t === "native" && (t = ""),
                    e &&
                        (i
                            ? a(((Bt[i] && Bt[i].get) || s)(e, i, t, n))
                            : function (c, d, g) {
                                  return a(((Bt[c] && Bt[c].get) || s)(e, c, d, g));
                              })
                );
            },
            quickSetter: function (e, i, t) {
                if (((e = ri(e)), e.length > 1)) {
                    var n = e.map(function (y) {
                            return Pt.quickSetter(y, i, t);
                        }),
                        s = n.length;
                    return function (y) {
                        for (var T = s; T--; ) n[T](y);
                    };
                }
                e = e[0] || {};
                var a = Bt[i],
                    c = Ki(e),
                    d = (c.harness && (c.harness.aliases || {})[i]) || i,
                    g = a
                        ? function (y) {
                              var T = new a();
                              (Pn._pt = 0), T.init(e, t ? y + t : y, Pn, 0, [e]), T.render(1, T), Pn._pt && Xs(1, Pn);
                          }
                        : c.set(e, d);
                return a
                    ? g
                    : function (y) {
                          return g(e, d, t ? y + t : y, c, 1);
                      };
            },
            quickTo: function (e, i, t) {
                var n,
                    s = Pt.to(e, hn(((n = {}), (n[i] = "+=0.1"), (n.paused = !0), n), t || {})),
                    a = function (d, g, y) {
                        return s.resetTo(i, d, g, y);
                    };
                return (a.tween = s), a;
            },
            isTweening: function (e) {
                return qe.getTweensOf(e, !0).length > 0;
            },
            defaults: function (e) {
                return e && e.ease && (e.ease = un(e.ease, En.ease)), Fo(En, e || {});
            },
            config: function (e) {
                return Fo(Vt, e || {});
            },
            registerEffect: function (e) {
                var i = e.name,
                    t = e.effect,
                    n = e.plugins,
                    s = e.defaults,
                    a = e.extendTimeline;
                (n || "").split(",").forEach(function (c) {
                    return c && !Bt[c] && !Xt[c] && Mr(i + " effect requires " + c + " plugin.");
                }),
                    (gs[i] = function (c, d, g) {
                        return t(ri(c), oi(d || {}, s), g);
                    }),
                    a &&
                        (vt.prototype[i] = function (c, d, g) {
                            return this.add(gs[i](c, Si(d) ? d : (g = d) && {}, this), g);
                        });
            },
            registerEase: function (e, i) {
                ye[e] = un(i);
            },
            parseEase: function (e, i) {
                return arguments.length ? un(e, i) : ye;
            },
            getById: function (e) {
                return qe.getById(e);
            },
            exportRoot: function (e, i) {
                e === void 0 && (e = {});
                var t = new vt(e),
                    n,
                    s;
                for (
                    t.smoothChildTiming = qt(e.smoothChildTiming),
                        qe.remove(t),
                        t._dp = 0,
                        t._time = t._tTime = qe._time,
                        n = qe._first;
                    n;

                )
                    (s = n._next),
                        (i || !(!n._dur && n instanceof it && n.vars.onComplete === n._targets[0])) &&
                            xi(t, n, n._start - n._delay),
                        (n = s);
                return xi(qe, t, 0), t;
            },
            context: function (e, i) {
                return e ? new wa(e, i) : nt;
            },
            matchMedia: function (e) {
                return new Ac(e);
            },
            matchMediaRefresh: function () {
                return (
                    Ln.forEach(function (e) {
                        var i = e.conditions,
                            t,
                            n;
                        for (n in i) i[n] && ((i[n] = !1), (t = 1));
                        t && e.revert();
                    }) || Ds()
                );
            },
            addEventListener: function (e, i) {
                var t = Er[e] || (Er[e] = []);
                ~t.indexOf(i) || t.push(i);
            },
            removeEventListener: function (e, i) {
                var t = Er[e],
                    n = t && t.indexOf(i);
                n >= 0 && t.splice(n, 1);
            },
            utils: {
                wrap: ac,
                wrapYoyo: lc,
                distribute: aa,
                random: ca,
                snap: la,
                normalize: oc,
                getUnit: mt,
                clamp: ic,
                splitColor: da,
                toArray: ri,
                selector: As,
                mapRange: ha,
                pipe: rc,
                unitize: sc,
                interpolate: cc,
                shuffle: oa,
            },
            install: Go,
            effects: gs,
            ticker: zt,
            updateRoot: vt.updateRoot,
            plugins: Bt,
            globalTimeline: qe,
            core: {
                PropTween: At,
                globals: Ko,
                Tween: it,
                Timeline: vt,
                Animation: Dn,
                getCache: Ki,
                _removeLinkedListItem: Fr,
                reverting: function () {
                    return wt;
                },
                context: function (e) {
                    return e && nt && (nt.data.push(e), (e._ctx = nt)), nt;
                },
                suppressOverwrites: function (e) {
                    return (Ls = e);
                },
            },
        };
    Et("to,from,fromTo,delayedCall,set,killTweensOf", function (l) {
        return (Nr[l] = it[l]);
    });
    zt.add(vt.updateRoot);
    Pn = Nr.to({}, { duration: 0 });
    var Mc = function (e, i) {
            for (var t = e._pt; t && t.p !== i && t.op !== i && t.fp !== i; ) t = t._next;
            return t;
        },
        Oc = function (e, i) {
            var t = e._targets,
                n,
                s,
                a;
            for (n in i)
                for (s = t.length; s--; )
                    (a = e._ptLookup[s][n]),
                        a && (a = a.d) && (a._pt && (a = Mc(a, n)), a && a.modifier && a.modifier(i[n], e, t[s], n));
        },
        ws = function (e, i) {
            return {
                name: e,
                rawVars: 1,
                init: function (n, s, a) {
                    a._onInit = function (c) {
                        var d, g;
                        if (
                            (ct(s) &&
                                ((d = {}),
                                Et(s, function (y) {
                                    return (d[y] = 1);
                                }),
                                (s = d)),
                            i)
                        ) {
                            d = {};
                            for (g in s) d[g] = i(s[g]);
                            s = d;
                        }
                        Oc(c, s);
                    };
                },
            };
        },
        Pt =
            Nr.registerPlugin(
                {
                    name: "attr",
                    init: function (e, i, t, n, s) {
                        var a, c, d;
                        this.tween = t;
                        for (a in i)
                            (d = e.getAttribute(a) || ""),
                                (c = this.add(e, "setAttribute", (d || 0) + "", i[a], n, s, 0, 0, a)),
                                (c.op = a),
                                (c.b = d),
                                this._props.push(a);
                    },
                    render: function (e, i) {
                        for (var t = i._pt; t; ) wt ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), (t = t._next);
                    },
                },
                {
                    name: "endArray",
                    init: function (e, i) {
                        for (var t = i.length; t--; ) this.add(e, t, e[t] || 0, i[t], 0, 0, 0, 0, 0, 1);
                    },
                },
                ws("roundProps", Ms),
                ws("modifiers"),
                ws("snap", la)
            ) || Nr;
    it.version = vt.version = Pt.version = "3.11.4";
    Xo = 1;
    jo() && On();
    var Dc = ye.Power0,
        Lc = ye.Power1,
        Nc = ye.Power2,
        Rc = ye.Power3,
        Ic = ye.Power4,
        Fc = ye.Linear,
        Bc = ye.Quad,
        zc = ye.Cubic,
        qc = ye.Quart,
        Vc = ye.Quint,
        $c = ye.Strong,
        Hc = ye.Elastic,
        Uc = ye.Back,
        jc = ye.SteppedEase,
        Yc = ye.Bounce,
        Wc = ye.Sine,
        Xc = ye.Expo,
        Gc = ye.Circ;
    var Ta,
        Zi,
        In,
        io,
        _n,
        Kc,
        ka,
        no,
        Qc = function () {
            return typeof window != "undefined";
        },
        zi = {},
        yn = 180 / Math.PI,
        Fn = Math.PI / 180,
        Rn = Math.atan2,
        xa = 1e8,
        ro = /([A-Z])/g,
        Jc = /(left|right|width|margin|padding|x)/i,
        Zc = /[\s,\(]\S/,
        Bi = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
        Js = function (e, i) {
            return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i);
        },
        eu = function (e, i) {
            return i.set(i.t, i.p, e === 1 ? i.e : Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i);
        },
        tu = function (e, i) {
            return i.set(i.t, i.p, e ? Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u : i.b, i);
        },
        iu = function (e, i) {
            var t = i.s + i.c * e;
            i.set(i.t, i.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + i.u, i);
        },
        Oa = function (e, i) {
            return i.set(i.t, i.p, e ? i.e : i.b, i);
        },
        Da = function (e, i) {
            return i.set(i.t, i.p, e !== 1 ? i.b : i.e, i);
        },
        nu = function (e, i, t) {
            return (e.style[i] = t);
        },
        ru = function (e, i, t) {
            return e.style.setProperty(i, t);
        },
        su = function (e, i, t) {
            return (e._gsap[i] = t);
        },
        ou = function (e, i, t) {
            return (e._gsap.scaleX = e._gsap.scaleY = t);
        },
        au = function (e, i, t, n, s) {
            var a = e._gsap;
            (a.scaleX = a.scaleY = t), a.renderTransform(s, a);
        },
        lu = function (e, i, t, n, s) {
            var a = e._gsap;
            (a[i] = t), a.renderTransform(s, a);
        },
        Ve = "transform",
        mi = Ve + "Origin",
        cu = function (e, i) {
            var t = this,
                n = this.target,
                s = n.style;
            if (e in zi) {
                if (
                    ((this.tfm = this.tfm || {}),
                    e !== "transform" &&
                        ((e = Bi[e] || e),
                        ~e.indexOf(",")
                            ? e.split(",").forEach(function (a) {
                                  return (t.tfm[a] = Fi(n, a));
                              })
                            : (this.tfm[e] = n._gsap.x ? n._gsap[e] : Fi(n, e))),
                    this.props.indexOf(Ve) >= 0)
                )
                    return;
                n._gsap.svg && ((this.svgo = n.getAttribute("data-svg-origin")), this.props.push(mi, i, "")), (e = Ve);
            }
            (s || i) && this.props.push(e, i, s[e]);
        },
        La = function (e) {
            e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
        },
        uu = function () {
            var e = this.props,
                i = this.target,
                t = i.style,
                n = i._gsap,
                s,
                a;
            for (s = 0; s < e.length; s += 3)
                e[s + 1]
                    ? (i[e[s]] = e[s + 2])
                    : e[s + 2]
                      ? (t[e[s]] = e[s + 2])
                      : t.removeProperty(e[s].replace(ro, "-$1").toLowerCase());
            if (this.tfm) {
                for (a in this.tfm) n[a] = this.tfm[a];
                n.svg && (n.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")),
                    (s = no()),
                    s && !s.isStart && !t[Ve] && (La(t), (n.uncache = 1));
            }
        },
        Na = function (e, i) {
            var t = { target: e, props: [], revert: uu, save: cu };
            return (
                i &&
                    i.split(",").forEach(function (n) {
                        return t.save(n);
                    }),
                t
            );
        },
        Ra,
        Zs = function (e, i) {
            var t = Zi.createElementNS
                ? Zi.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e)
                : Zi.createElement(e);
            return t.style ? t : Zi.createElement(e);
        },
        Ci = function l(e, i, t) {
            var n = getComputedStyle(e);
            return (
                n[i] ||
                n.getPropertyValue(i.replace(ro, "-$1").toLowerCase()) ||
                n.getPropertyValue(i) ||
                (!t && l(e, Bn(i) || i, 1)) ||
                ""
            );
        },
        Sa = "O,Moz,ms,Ms,Webkit".split(","),
        Bn = function (e, i, t) {
            var n = i || _n,
                s = n.style,
                a = 5;
            if (e in s && !t) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(Sa[a] + e in s); );
            return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Sa[a] : "") + e;
        },
        eo = function () {
            Qc() &&
                window.document &&
                ((Ta = window),
                (Zi = Ta.document),
                (In = Zi.documentElement),
                (_n = Zs("div") || { style: {} }),
                (Kc = Zs("div")),
                (Ve = Bn(Ve)),
                (mi = Ve + "Origin"),
                (_n.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                (Ra = !!Bn("perspective")),
                (no = Pt.core.reverting),
                (io = 1));
        },
        Ks = function l(e) {
            var i = Zs(
                    "svg",
                    (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
                ),
                t = this.parentNode,
                n = this.nextSibling,
                s = this.style.cssText,
                a;
            if ((In.appendChild(i), i.appendChild(this), (this.style.display = "block"), e))
                try {
                    (a = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = l);
                } catch {}
            else this._gsapBBox && (a = this._gsapBBox());
            return (
                t && (n ? t.insertBefore(this, n) : t.appendChild(this)), In.removeChild(i), (this.style.cssText = s), a
            );
        },
        Ca = function (e, i) {
            for (var t = i.length; t--; ) if (e.hasAttribute(i[t])) return e.getAttribute(i[t]);
        },
        Ia = function (e) {
            var i;
            try {
                i = e.getBBox();
            } catch {
                i = Ks.call(e, !0);
            }
            return (
                (i && (i.width || i.height)) || e.getBBox === Ks || (i = Ks.call(e, !0)),
                i && !i.width && !i.x && !i.y
                    ? { x: +Ca(e, ["x", "cx", "x1"]) || 0, y: +Ca(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 }
                    : i
            );
        },
        Fa = function (e) {
            return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ia(e));
        },
        or = function (e, i) {
            if (i) {
                var t = e.style;
                i in zi && i !== mi && (i = Ve),
                    t.removeProperty
                        ? ((i.substr(0, 2) === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
                          t.removeProperty(i.replace(ro, "-$1").toLowerCase()))
                        : t.removeAttribute(i);
            }
        },
        en = function (e, i, t, n, s, a) {
            var c = new At(e._pt, i, t, 0, 1, a ? Da : Oa);
            return (e._pt = c), (c.b = n), (c.e = s), e._props.push(t), c;
        },
        Pa = { deg: 1, rad: 1, turn: 1 },
        hu = { grid: 1, flex: 1 },
        tn = function l(e, i, t, n) {
            var s = parseFloat(t) || 0,
                a = (t + "").trim().substr((s + "").length) || "px",
                c = _n.style,
                d = Jc.test(i),
                g = e.tagName.toLowerCase() === "svg",
                y = (g ? "client" : "offset") + (d ? "Width" : "Height"),
                T = 100,
                b = n === "px",
                _ = n === "%",
                k,
                w,
                P,
                A;
            return n === a || !s || Pa[n] || Pa[a]
                ? s
                : (a !== "px" && !b && (s = l(e, i, t, "px")),
                  (A = e.getCTM && Fa(e)),
                  (_ || a === "%") && (zi[i] || ~i.indexOf("adius"))
                      ? ((k = A ? e.getBBox()[d ? "width" : "height"] : e[y]), Ge(_ ? (s / k) * T : (s / 100) * k))
                      : ((c[d ? "width" : "height"] = T + (b ? a : n)),
                        (w = ~i.indexOf("adius") || (n === "em" && e.appendChild && !g) ? e : e.parentNode),
                        A && (w = (e.ownerSVGElement || {}).parentNode),
                        (!w || w === Zi || !w.appendChild) && (w = Zi.body),
                        (P = w._gsap),
                        P && _ && P.width && d && P.time === zt.time && !P.uncache
                            ? Ge((s / P.width) * T)
                            : ((_ || a === "%") && !hu[Ci(w, "display")] && (c.position = Ci(e, "position")),
                              w === e && (c.position = "static"),
                              w.appendChild(_n),
                              (k = _n[y]),
                              w.removeChild(_n),
                              (c.position = "absolute"),
                              d && _ && ((P = Ki(w)), (P.time = zt.time), (P.width = w[y])),
                              Ge(b ? (k * s) / T : k && s ? (T / k) * s : 0))));
        },
        Fi = function (e, i, t, n) {
            var s;
            return (
                io || eo(),
                i in Bi && i !== "transform" && ((i = Bi[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
                zi[i] && i !== "transform"
                    ? ((s = lr(e, n)),
                      (s = i !== "transformOrigin" ? s[i] : s.svg ? s.origin : $r(Ci(e, mi)) + " " + s.zOrigin + "px"))
                    : ((s = e.style[i]),
                      (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) &&
                          (s = (Vr[i] && Vr[i](e, i, t)) || Ci(e, i) || qs(e, i) || (i === "opacity" ? 1 : 0))),
                t && !~(s + "").trim().indexOf(" ") ? tn(e, i, s, t) + t : s
            );
        },
        du = function (e, i, t, n) {
            if (!t || t === "none") {
                var s = Bn(i, e, 1),
                    a = s && Ci(e, s, 1);
                a && a !== t ? ((i = s), (t = a)) : i === "borderColor" && (t = Ci(e, "borderTopColor"));
            }
            var c = new At(this._pt, e.style, i, 0, 1, Ws),
                d = 0,
                g = 0,
                y,
                T,
                b,
                _,
                k,
                w,
                P,
                A,
                O,
                D,
                M,
                R;
            if (
                ((c.b = t),
                (c.e = n),
                (t += ""),
                (n += ""),
                n === "auto" && ((e.style[i] = n), (n = Ci(e, i) || n), (e.style[i] = t)),
                (y = [t, n]),
                Vs(y),
                (t = y[0]),
                (n = y[1]),
                (b = t.match(dn) || []),
                (R = n.match(dn) || []),
                R.length)
            ) {
                for (; (T = dn.exec(n)); )
                    (P = T[0]),
                        (O = n.substring(d, T.index)),
                        k ? (k = (k + 1) % 5) : (O.substr(-5) === "rgba(" || O.substr(-5) === "hsla(") && (k = 1),
                        P !== (w = b[g++] || "") &&
                            ((_ = parseFloat(w) || 0),
                            (M = w.substr((_ + "").length)),
                            P.charAt(1) === "=" && (P = fn(_, P) + M),
                            (A = parseFloat(P)),
                            (D = P.substr((A + "").length)),
                            (d = dn.lastIndex - D.length),
                            D || ((D = D || Vt.units[i] || M), d === n.length && ((n += D), (c.e += D))),
                            M !== D && (_ = tn(e, i, w, D) || 0),
                            (c._pt = {
                                _next: c._pt,
                                p: O || g === 1 ? O : ",",
                                s: _,
                                c: A - _,
                                m: (k && k < 4) || i === "zIndex" ? Math.round : 0,
                            }));
                c.c = d < n.length ? n.substring(d, n.length) : "";
            } else c.r = i === "display" && n === "none" ? Da : Oa;
            return Rs.test(n) && (c.e = 0), (this._pt = c), c;
        },
        Ea = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
        fu = function (e) {
            var i = e.split(" "),
                t = i[0],
                n = i[1] || "50%";
            return (
                (t === "top" || t === "bottom" || n === "left" || n === "right") && ((e = t), (t = n), (n = e)),
                (i[0] = Ea[t] || t),
                (i[1] = Ea[n] || n),
                i.join(" ")
            );
        },
        pu = function (e, i) {
            if (i.tween && i.tween._time === i.tween._dur) {
                var t = i.t,
                    n = t.style,
                    s = i.u,
                    a = t._gsap,
                    c,
                    d,
                    g;
                if (s === "all" || s === !0) (n.cssText = ""), (d = 1);
                else
                    for (s = s.split(","), g = s.length; --g > -1; )
                        (c = s[g]), zi[c] && ((d = 1), (c = c === "transformOrigin" ? mi : Ve)), or(t, c);
                d && (or(t, Ve), a && (a.svg && t.removeAttribute("transform"), lr(t, 1), (a.uncache = 1), La(n)));
            }
        },
        Vr = {
            clearProps: function (e, i, t, n, s) {
                if (s.data !== "isFromStart") {
                    var a = (e._pt = new At(e._pt, i, t, 0, 0, pu));
                    return (a.u = n), (a.pr = -10), (a.tween = s), e._props.push(t), 1;
                }
            },
        },
        ar = [1, 0, 0, 1, 0, 0],
        Ba = {},
        za = function (e) {
            return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
        },
        Aa = function (e) {
            var i = Ci(e, Ve);
            return za(i) ? ar : i.substr(7).match(Ns).map(Ge);
        },
        so = function (e, i) {
            var t = e._gsap || Ki(e),
                n = e.style,
                s = Aa(e),
                a,
                c,
                d,
                g;
            return t.svg && e.getAttribute("transform")
                ? ((d = e.transform.baseVal.consolidate().matrix),
                  (s = [d.a, d.b, d.c, d.d, d.e, d.f]),
                  s.join(",") === "1,0,0,1,0,0" ? ar : s)
                : (s === ar &&
                      !e.offsetParent &&
                      e !== In &&
                      !t.svg &&
                      ((d = n.display),
                      (n.display = "block"),
                      (a = e.parentNode),
                      (!a || !e.offsetParent) && ((g = 1), (c = e.nextElementSibling), In.appendChild(e)),
                      (s = Aa(e)),
                      d ? (n.display = d) : or(e, "display"),
                      g && (c ? a.insertBefore(e, c) : a ? a.appendChild(e) : In.removeChild(e))),
                  i && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
        },
        to = function (e, i, t, n, s, a) {
            var c = e._gsap,
                d = s || so(e, !0),
                g = c.xOrigin || 0,
                y = c.yOrigin || 0,
                T = c.xOffset || 0,
                b = c.yOffset || 0,
                _ = d[0],
                k = d[1],
                w = d[2],
                P = d[3],
                A = d[4],
                O = d[5],
                D = i.split(" "),
                M = parseFloat(D[0]) || 0,
                R = parseFloat(D[1]) || 0,
                I,
                L,
                F,
                f;
            t
                ? d !== ar &&
                  (L = _ * P - k * w) &&
                  ((F = M * (P / L) + R * (-w / L) + (w * O - P * A) / L),
                  (f = M * (-k / L) + R * (_ / L) - (_ * O - k * A) / L),
                  (M = F),
                  (R = f))
                : ((I = Ia(e)),
                  (M = I.x + (~D[0].indexOf("%") ? (M / 100) * I.width : M)),
                  (R = I.y + (~(D[1] || D[0]).indexOf("%") ? (R / 100) * I.height : R))),
                n || (n !== !1 && c.smooth)
                    ? ((A = M - g),
                      (O = R - y),
                      (c.xOffset = T + (A * _ + O * w) - A),
                      (c.yOffset = b + (A * k + O * P) - O))
                    : (c.xOffset = c.yOffset = 0),
                (c.xOrigin = M),
                (c.yOrigin = R),
                (c.smooth = !!n),
                (c.origin = i),
                (c.originIsAbsolute = !!t),
                (e.style[mi] = "0px 0px"),
                a &&
                    (en(a, c, "xOrigin", g, M),
                    en(a, c, "yOrigin", y, R),
                    en(a, c, "xOffset", T, c.xOffset),
                    en(a, c, "yOffset", b, c.yOffset)),
                e.setAttribute("data-svg-origin", M + " " + R);
        },
        lr = function (e, i) {
            var t = e._gsap || new $s(e);
            if ("x" in t && !i && !t.uncache) return t;
            var n = e.style,
                s = t.scaleX < 0,
                a = "px",
                c = "deg",
                d = getComputedStyle(e),
                g = Ci(e, mi) || "0",
                y,
                T,
                b,
                _,
                k,
                w,
                P,
                A,
                O,
                D,
                M,
                R,
                I,
                L,
                F,
                f,
                H,
                W,
                U,
                be,
                X,
                oe,
                K,
                q,
                ae,
                de,
                C,
                ze,
                Ce,
                st,
                ie,
                Qe;
            return (
                (y = T = b = w = P = A = O = D = M = 0),
                (_ = k = 1),
                (t.svg = !!(e.getCTM && Fa(e))),
                d.translate &&
                    ((d.translate !== "none" || d.scale !== "none" || d.rotate !== "none") &&
                        (n[Ve] =
                            (d.translate !== "none"
                                ? "translate3d(" + (d.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") "
                                : "") +
                            (d.rotate !== "none" ? "rotate(" + d.rotate + ") " : "") +
                            (d.scale !== "none" ? "scale(" + d.scale.split(" ").join(",") + ") " : "") +
                            (d[Ve] !== "none" ? d[Ve] : "")),
                    (n.scale = n.rotate = n.translate = "none")),
                (L = so(e, t.svg)),
                t.svg &&
                    (t.uncache
                        ? ((ae = e.getBBox()), (g = t.xOrigin - ae.x + "px " + (t.yOrigin - ae.y) + "px"), (q = ""))
                        : (q = !i && e.getAttribute("data-svg-origin")),
                    to(e, q || g, !!q || t.originIsAbsolute, t.smooth !== !1, L)),
                (R = t.xOrigin || 0),
                (I = t.yOrigin || 0),
                L !== ar &&
                    ((W = L[0]),
                    (U = L[1]),
                    (be = L[2]),
                    (X = L[3]),
                    (y = oe = L[4]),
                    (T = K = L[5]),
                    L.length === 6
                        ? ((_ = Math.sqrt(W * W + U * U)),
                          (k = Math.sqrt(X * X + be * be)),
                          (w = W || U ? Rn(U, W) * yn : 0),
                          (O = be || X ? Rn(be, X) * yn + w : 0),
                          O && (k *= Math.abs(Math.cos(O * Fn))),
                          t.svg && ((y -= R - (R * W + I * be)), (T -= I - (R * U + I * X))))
                        : ((Qe = L[6]),
                          (st = L[7]),
                          (C = L[8]),
                          (ze = L[9]),
                          (Ce = L[10]),
                          (ie = L[11]),
                          (y = L[12]),
                          (T = L[13]),
                          (b = L[14]),
                          (F = Rn(Qe, Ce)),
                          (P = F * yn),
                          F &&
                              ((f = Math.cos(-F)),
                              (H = Math.sin(-F)),
                              (q = oe * f + C * H),
                              (ae = K * f + ze * H),
                              (de = Qe * f + Ce * H),
                              (C = oe * -H + C * f),
                              (ze = K * -H + ze * f),
                              (Ce = Qe * -H + Ce * f),
                              (ie = st * -H + ie * f),
                              (oe = q),
                              (K = ae),
                              (Qe = de)),
                          (F = Rn(-be, Ce)),
                          (A = F * yn),
                          F &&
                              ((f = Math.cos(-F)),
                              (H = Math.sin(-F)),
                              (q = W * f - C * H),
                              (ae = U * f - ze * H),
                              (de = be * f - Ce * H),
                              (ie = X * H + ie * f),
                              (W = q),
                              (U = ae),
                              (be = de)),
                          (F = Rn(U, W)),
                          (w = F * yn),
                          F &&
                              ((f = Math.cos(F)),
                              (H = Math.sin(F)),
                              (q = W * f + U * H),
                              (ae = oe * f + K * H),
                              (U = U * f - W * H),
                              (K = K * f - oe * H),
                              (W = q),
                              (oe = ae)),
                          P && Math.abs(P) + Math.abs(w) > 359.9 && ((P = w = 0), (A = 180 - A)),
                          (_ = Ge(Math.sqrt(W * W + U * U + be * be))),
                          (k = Ge(Math.sqrt(K * K + Qe * Qe))),
                          (F = Rn(oe, K)),
                          (O = Math.abs(F) > 2e-4 ? F * yn : 0),
                          (M = ie ? 1 / (ie < 0 ? -ie : ie) : 0)),
                    t.svg &&
                        ((q = e.getAttribute("transform")),
                        (t.forceCSS = e.setAttribute("transform", "") || !za(Ci(e, Ve))),
                        q && e.setAttribute("transform", q))),
                Math.abs(O) > 90 &&
                    Math.abs(O) < 270 &&
                    (s
                        ? ((_ *= -1), (O += w <= 0 ? 180 : -180), (w += w <= 0 ? 180 : -180))
                        : ((k *= -1), (O += O <= 0 ? 180 : -180))),
                (i = i || t.uncache),
                (t.x =
                    y -
                    ((t.xPercent =
                        y && ((!i && t.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-y) ? -50 : 0)))
                        ? (e.offsetWidth * t.xPercent) / 100
                        : 0) +
                    a),
                (t.y =
                    T -
                    ((t.yPercent =
                        T && ((!i && t.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-T) ? -50 : 0)))
                        ? (e.offsetHeight * t.yPercent) / 100
                        : 0) +
                    a),
                (t.z = b + a),
                (t.scaleX = Ge(_)),
                (t.scaleY = Ge(k)),
                (t.rotation = Ge(w) + c),
                (t.rotationX = Ge(P) + c),
                (t.rotationY = Ge(A) + c),
                (t.skewX = O + c),
                (t.skewY = D + c),
                (t.transformPerspective = M + a),
                (t.zOrigin = parseFloat(g.split(" ")[2]) || 0) && (n[mi] = $r(g)),
                (t.xOffset = t.yOffset = 0),
                (t.force3D = Vt.force3D),
                (t.renderTransform = t.svg ? gu : Ra ? qa : mu),
                (t.uncache = 0),
                t
            );
        },
        $r = function (e) {
            return (e = e.split(" "))[0] + " " + e[1];
        },
        Qs = function (e, i, t) {
            var n = mt(i);
            return Ge(parseFloat(i) + parseFloat(tn(e, "x", t + "px", n))) + n;
        },
        mu = function (e, i) {
            (i.z = "0px"), (i.rotationY = i.rotationX = "0deg"), (i.force3D = 0), qa(e, i);
        },
        mn = "0deg",
        sr = "0px",
        gn = ") ",
        qa = function (e, i) {
            var t = i || this,
                n = t.xPercent,
                s = t.yPercent,
                a = t.x,
                c = t.y,
                d = t.z,
                g = t.rotation,
                y = t.rotationY,
                T = t.rotationX,
                b = t.skewX,
                _ = t.skewY,
                k = t.scaleX,
                w = t.scaleY,
                P = t.transformPerspective,
                A = t.force3D,
                O = t.target,
                D = t.zOrigin,
                M = "",
                R = (A === "auto" && e && e !== 1) || A === !0;
            if (D && (T !== mn || y !== mn)) {
                var I = parseFloat(y) * Fn,
                    L = Math.sin(I),
                    F = Math.cos(I),
                    f;
                (I = parseFloat(T) * Fn),
                    (f = Math.cos(I)),
                    (a = Qs(O, a, L * f * -D)),
                    (c = Qs(O, c, -Math.sin(I) * -D)),
                    (d = Qs(O, d, F * f * -D + D));
            }
            P !== sr && (M += "perspective(" + P + gn),
                (n || s) && (M += "translate(" + n + "%, " + s + "%) "),
                (R || a !== sr || c !== sr || d !== sr) &&
                    (M +=
                        d !== sr || R
                            ? "translate3d(" + a + ", " + c + ", " + d + ") "
                            : "translate(" + a + ", " + c + gn),
                g !== mn && (M += "rotate(" + g + gn),
                y !== mn && (M += "rotateY(" + y + gn),
                T !== mn && (M += "rotateX(" + T + gn),
                (b !== mn || _ !== mn) && (M += "skew(" + b + ", " + _ + gn),
                (k !== 1 || w !== 1) && (M += "scale(" + k + ", " + w + gn),
                (O.style[Ve] = M || "translate(0, 0)");
        },
        gu = function (e, i) {
            var t = i || this,
                n = t.xPercent,
                s = t.yPercent,
                a = t.x,
                c = t.y,
                d = t.rotation,
                g = t.skewX,
                y = t.skewY,
                T = t.scaleX,
                b = t.scaleY,
                _ = t.target,
                k = t.xOrigin,
                w = t.yOrigin,
                P = t.xOffset,
                A = t.yOffset,
                O = t.forceCSS,
                D = parseFloat(a),
                M = parseFloat(c),
                R,
                I,
                L,
                F,
                f;
            (d = parseFloat(d)),
                (g = parseFloat(g)),
                (y = parseFloat(y)),
                y && ((y = parseFloat(y)), (g += y), (d += y)),
                d || g
                    ? ((d *= Fn),
                      (g *= Fn),
                      (R = Math.cos(d) * T),
                      (I = Math.sin(d) * T),
                      (L = Math.sin(d - g) * -b),
                      (F = Math.cos(d - g) * b),
                      g &&
                          ((y *= Fn),
                          (f = Math.tan(g - y)),
                          (f = Math.sqrt(1 + f * f)),
                          (L *= f),
                          (F *= f),
                          y && ((f = Math.tan(y)), (f = Math.sqrt(1 + f * f)), (R *= f), (I *= f))),
                      (R = Ge(R)),
                      (I = Ge(I)),
                      (L = Ge(L)),
                      (F = Ge(F)))
                    : ((R = T), (F = b), (I = L = 0)),
                ((D && !~(a + "").indexOf("px")) || (M && !~(c + "").indexOf("px"))) &&
                    ((D = tn(_, "x", a, "px")), (M = tn(_, "y", c, "px"))),
                (k || w || P || A) && ((D = Ge(D + k - (k * R + w * L) + P)), (M = Ge(M + w - (k * I + w * F) + A))),
                (n || s) && ((f = _.getBBox()), (D = Ge(D + (n / 100) * f.width)), (M = Ge(M + (s / 100) * f.height))),
                (f = "matrix(" + R + "," + I + "," + L + "," + F + "," + D + "," + M + ")"),
                _.setAttribute("transform", f),
                O && (_.style[Ve] = f);
        },
        yu = function (e, i, t, n, s) {
            var a = 360,
                c = ct(s),
                d = parseFloat(s) * (c && ~s.indexOf("rad") ? yn : 1),
                g = d - n,
                y = n + g + "deg",
                T,
                b;
            return (
                c &&
                    ((T = s.split("_")[1]),
                    T === "short" && ((g %= a), g !== g % (a / 2) && (g += g < 0 ? a : -a)),
                    T === "cw" && g < 0
                        ? (g = ((g + a * xa) % a) - ~~(g / a) * a)
                        : T === "ccw" && g > 0 && (g = ((g - a * xa) % a) - ~~(g / a) * a)),
                (e._pt = b = new At(e._pt, i, t, n, g, eu)),
                (b.e = y),
                (b.u = "deg"),
                e._props.push(t),
                b
            );
        },
        Ma = function (e, i) {
            for (var t in i) e[t] = i[t];
            return e;
        },
        _u = function (e, i, t) {
            var n = Ma({}, t._gsap),
                s = "perspective,force3D,transformOrigin,svgOrigin",
                a = t.style,
                c,
                d,
                g,
                y,
                T,
                b,
                _,
                k;
            n.svg
                ? ((g = t.getAttribute("transform")),
                  t.setAttribute("transform", ""),
                  (a[Ve] = i),
                  (c = lr(t, 1)),
                  or(t, Ve),
                  t.setAttribute("transform", g))
                : ((g = getComputedStyle(t)[Ve]), (a[Ve] = i), (c = lr(t, 1)), (a[Ve] = g));
            for (d in zi)
                (g = n[d]),
                    (y = c[d]),
                    g !== y &&
                        s.indexOf(d) < 0 &&
                        ((_ = mt(g)),
                        (k = mt(y)),
                        (T = _ !== k ? tn(t, d, g, k) : parseFloat(g)),
                        (b = parseFloat(y)),
                        (e._pt = new At(e._pt, c, d, T, b - T, Js)),
                        (e._pt.u = k || 0),
                        e._props.push(d));
            Ma(c, n);
        };
    Et("padding,margin,Width,Radius", function (l, e) {
        var i = "Top",
            t = "Right",
            n = "Bottom",
            s = "Left",
            a = (e < 3 ? [i, t, n, s] : [i + s, i + t, n + t, n + s]).map(function (c) {
                return e < 2 ? l + c : "border" + c + l;
            });
        Vr[e > 1 ? "border" + l : l] = function (c, d, g, y, T) {
            var b, _;
            if (arguments.length < 4)
                return (
                    (b = a.map(function (k) {
                        return Fi(c, k, g);
                    })),
                    (_ = b.join(" ")),
                    _.split(b[0]).length === 5 ? b[0] : _
                );
            (b = (y + "").split(" ")),
                (_ = {}),
                a.forEach(function (k, w) {
                    return (_[k] = b[w] = b[w] || b[((w - 1) / 2) | 0]);
                }),
                c.init(d, _, T);
        };
    });
    var oo = {
        name: "css",
        register: eo,
        targetTest: function (e) {
            return e.style && e.nodeType;
        },
        init: function (e, i, t, n, s) {
            var a = this._props,
                c = e.style,
                d = t.vars.startAt,
                g,
                y,
                T,
                b,
                _,
                k,
                w,
                P,
                A,
                O,
                D,
                M,
                R,
                I,
                L,
                F;
            io || eo(), (this.styles = this.styles || Na(e)), (F = this.styles.props), (this.tween = t);
            for (w in i)
                if (w !== "autoRound" && ((y = i[w]), !(Bt[w] && Us(w, i, t, n, e, s)))) {
                    if (
                        ((_ = typeof y),
                        (k = Vr[w]),
                        _ === "function" && ((y = y.call(t, n, e, s)), (_ = typeof y)),
                        _ === "string" && ~y.indexOf("random(") && (y = Nn(y)),
                        k)
                    )
                        k(this, e, w, y, t) && (L = 1);
                    else if (w.substr(0, 2) === "--")
                        (g = (getComputedStyle(e).getPropertyValue(w) + "").trim()),
                            (y += ""),
                            (Ri.lastIndex = 0),
                            Ri.test(g) || ((P = mt(g)), (A = mt(y))),
                            A ? P !== A && (g = tn(e, w, g, A) + A) : P && (y += P),
                            this.add(c, "setProperty", g, y, n, s, 0, 0, w),
                            a.push(w),
                            F.push(w, 0, c[w]);
                    else if (_ !== "undefined") {
                        if (
                            (d && w in d
                                ? ((g = typeof d[w] == "function" ? d[w].call(t, n, e, s) : d[w]),
                                  ct(g) && ~g.indexOf("random(") && (g = Nn(g)),
                                  mt(g + "") || (g += Vt.units[w] || mt(Fi(e, w)) || ""),
                                  (g + "").charAt(1) === "=" && (g = Fi(e, w)))
                                : (g = Fi(e, w)),
                            (b = parseFloat(g)),
                            (O = _ === "string" && y.charAt(1) === "=" && y.substr(0, 2)),
                            O && (y = y.substr(2)),
                            (T = parseFloat(y)),
                            w in Bi &&
                                (w === "autoAlpha" &&
                                    (b === 1 && Fi(e, "visibility") === "hidden" && T && (b = 0),
                                    F.push("visibility", 0, c.visibility),
                                    en(this, c, "visibility", b ? "inherit" : "hidden", T ? "inherit" : "hidden", !T)),
                                w !== "scale" &&
                                    w !== "transform" &&
                                    ((w = Bi[w]), ~w.indexOf(",") && (w = w.split(",")[0]))),
                            (D = w in zi),
                            D)
                        ) {
                            if (
                                (this.styles.save(w),
                                M ||
                                    ((R = e._gsap),
                                    (R.renderTransform && !i.parseTransform) || lr(e, i.parseTransform),
                                    (I = i.smoothOrigin !== !1 && R.smooth),
                                    (M = this._pt = new At(this._pt, c, Ve, 0, 1, R.renderTransform, R, 0, -1)),
                                    (M.dep = 1)),
                                w === "scale")
                            )
                                (this._pt = new At(
                                    this._pt,
                                    R,
                                    "scaleY",
                                    R.scaleY,
                                    (O ? fn(R.scaleY, O + T) : T) - R.scaleY || 0,
                                    Js
                                )),
                                    (this._pt.u = 0),
                                    a.push("scaleY", w),
                                    (w += "X");
                            else if (w === "transformOrigin") {
                                F.push(mi, 0, c[mi]),
                                    (y = fu(y)),
                                    R.svg
                                        ? to(e, y, 0, I, 0, this)
                                        : ((A = parseFloat(y.split(" ")[2]) || 0),
                                          A !== R.zOrigin && en(this, R, "zOrigin", R.zOrigin, A),
                                          en(this, c, w, $r(g), $r(y)));
                                continue;
                            } else if (w === "svgOrigin") {
                                to(e, y, 1, I, 0, this);
                                continue;
                            } else if (w in Ba) {
                                yu(this, R, w, b, O ? fn(b, O + y) : y);
                                continue;
                            } else if (w === "smoothOrigin") {
                                en(this, R, "smooth", R.smooth, y);
                                continue;
                            } else if (w === "force3D") {
                                R[w] = y;
                                continue;
                            } else if (w === "transform") {
                                _u(this, y, e);
                                continue;
                            }
                        } else w in c || (w = Bn(w) || w);
                        if (D || ((T || T === 0) && (b || b === 0) && !Zc.test(y) && w in c))
                            (P = (g + "").substr((b + "").length)),
                                T || (T = 0),
                                (A = mt(y) || (w in Vt.units ? Vt.units[w] : P)),
                                P !== A && (b = tn(e, w, g, A)),
                                (this._pt = new At(
                                    this._pt,
                                    D ? R : c,
                                    w,
                                    b,
                                    (O ? fn(b, O + T) : T) - b,
                                    !D && (A === "px" || w === "zIndex") && i.autoRound !== !1 ? iu : Js
                                )),
                                (this._pt.u = A || 0),
                                P !== A && A !== "%" && ((this._pt.b = g), (this._pt.r = tu));
                        else if (w in c) du.call(this, e, w, g, O ? O + y : y);
                        else if (w in e) this.add(e, w, g || e[w], O ? O + y : y, n, s);
                        else if (w !== "parseTransform") {
                            Ir(w, y);
                            continue;
                        }
                        D || (w in c ? F.push(w, 0, c[w]) : F.push(w, 1, g || e[w])), a.push(w);
                    }
                }
            L && Gs(this);
        },
        render: function (e, i) {
            if (i.tween._time || !no()) for (var t = i._pt; t; ) t.r(e, t.d), (t = t._next);
            else i.styles.revert();
        },
        get: Fi,
        aliases: Bi,
        getSetter: function (e, i, t) {
            var n = Bi[i];
            return (
                n && n.indexOf(",") < 0 && (i = n),
                i in zi && i !== mi && (e._gsap.x || Fi(e, "x"))
                    ? t && ka === t
                        ? i === "scale"
                            ? ou
                            : su
                        : (ka = t || {}) && (i === "scale" ? au : lu)
                    : e.style && !Rr(e.style[i])
                      ? nu
                      : ~i.indexOf("-")
                        ? ru
                        : qr(e, i)
            );
        },
        core: { _removeProperty: or, _getMatrix: so },
    };
    Pt.utils.checkPrefix = Bn;
    Pt.core.getStyleSaver = Na;
    (function (l, e, i, t) {
        var n = Et(l + "," + e + "," + i, function (s) {
            zi[s] = 1;
        });
        Et(e, function (s) {
            (Vt.units[s] = "deg"), (Ba[s] = 1);
        }),
            (Bi[n[13]] = l + "," + e),
            Et(t, function (s) {
                var a = s.split(":");
                Bi[a[1]] = n[a[0]];
            });
    })(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
        "rotation,rotationX,rotationY,skewX,skewY",
        "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    );
    Et("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (l) {
        Vt.units[l] = "px";
    });
    Pt.registerPlugin(oo);
    var Mt = Pt.registerPlugin(oo) || Pt,
        Gu = Mt.core.Tween;
    function Va(l, e) {
        for (var i = 0; i < e.length; i++) {
            var t = e[i];
            (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                "value" in t && (t.writable = !0),
                Object.defineProperty(l, t.key, t);
        }
    }
    function bu(l, e, i) {
        return e && Va(l.prototype, e), i && Va(l, i), l;
    }
    var gt,
        ao,
        vu,
        Gt,
        nn,
        rn,
        qn,
        Ha,
        bn,
        ur,
        Ua,
        qi,
        gi,
        ja,
        Ya = function () {
            return gt || (typeof window != "undefined" && (gt = window.gsap) && gt.registerPlugin && gt);
        };
    var Wa = 1,
        zn = [],
        ue = [],
        yi = [],
        hr = Date.now,
        lo = function (e, i) {
            return i;
        },
        wu = function () {
            var e = ur.core,
                i = e.bridge || {},
                t = e._scrollers,
                n = e._proxies;
            t.push.apply(t, ue),
                n.push.apply(n, yi),
                (ue = t),
                (yi = n),
                (lo = function (a, c) {
                    return i[a](c);
                });
        },
        $i = function (e, i) {
            return ~yi.indexOf(e) && yi[yi.indexOf(e) + 1][i];
        },
        dr = function (e) {
            return !!~Ua.indexOf(e);
        },
        $t = function (e, i, t, n, s) {
            return e.addEventListener(i, t, { passive: !n, capture: !!s });
        },
        Ot = function (e, i, t, n) {
            return e.removeEventListener(i, t, !!n);
        },
        Hr = "scrollLeft",
        Ur = "scrollTop",
        co = function () {
            return (qi && qi.isPressed) || ue.cache++;
        },
        jr = function (e, i) {
            var t = function n(s) {
                if (s || s === 0) {
                    Wa && (Gt.history.scrollRestoration = "manual");
                    var a = qi && qi.isPressed;
                    (s = n.v = Math.round(s) || (qi && qi.iOS ? 1 : 0)), e(s), (n.cacheID = ue.cache), a && lo("ss", s);
                } else (i || ue.cache !== n.cacheID || lo("ref")) && ((n.cacheID = ue.cache), (n.v = e()));
                return n.v + n.offset;
            };
            return (t.offset = 0), e && t;
        },
        kt = {
            s: Hr,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: jr(function (l) {
                return arguments.length ? Gt.scrollTo(l, rt.sc()) : Gt.pageXOffset || nn[Hr] || rn[Hr] || qn[Hr] || 0;
            }),
        },
        rt = {
            s: Ur,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: kt,
            sc: jr(function (l) {
                return arguments.length ? Gt.scrollTo(kt.sc(), l) : Gt.pageYOffset || nn[Ur] || rn[Ur] || qn[Ur] || 0;
            }),
        },
        Dt = function (e) {
            return (
                gt.utils.toArray(e)[0] ||
                (typeof e == "string" && gt.config().nullTargetWarn !== !1
                    ? console.warn("Element not found:", e)
                    : null)
            );
        },
        Vi = function (e, i) {
            var t = i.s,
                n = i.sc;
            dr(e) && (e = nn.scrollingElement || rn);
            var s = ue.indexOf(e),
                a = n === rt.sc ? 1 : 2;
            !~s && (s = ue.push(e) - 1), ue[s + a] || e.addEventListener("scroll", co);
            var c = ue[s + a],
                d =
                    c ||
                    (ue[s + a] =
                        jr($i(e, t), !0) ||
                        (dr(e)
                            ? n
                            : jr(function (g) {
                                  return arguments.length ? (e[t] = g) : e[t];
                              })));
            return (d.target = e), c || (d.smooth = gt.getProperty(e, "scrollBehavior") === "smooth"), d;
        },
        Yr = function (e, i, t) {
            var n = e,
                s = e,
                a = hr(),
                c = a,
                d = i || 50,
                g = Math.max(500, d * 3),
                y = function (k, w) {
                    var P = hr();
                    w || P - a > d
                        ? ((s = n), (n = k), (c = a), (a = P))
                        : t
                          ? (n += k)
                          : (n = s + ((k - s) / (P - c)) * (a - c));
                },
                T = function () {
                    (s = n = t ? 0 : n), (c = a = 0);
                },
                b = function (k) {
                    var w = c,
                        P = s,
                        A = hr();
                    return (
                        (k || k === 0) && k !== n && y(k),
                        a === c || A - c > g ? 0 : ((n + (t ? P : -P)) / ((t ? A : a) - w)) * 1e3
                    );
                };
            return { update: y, reset: T, getVelocity: b };
        },
        cr = function (e, i) {
            return i && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
        },
        $a = function (e) {
            var i = Math.max.apply(Math, e),
                t = Math.min.apply(Math, e);
            return Math.abs(i) >= Math.abs(t) ? i : t;
        },
        Xa = function () {
            (ur = gt.core.globals().ScrollTrigger), ur && ur.core && wu();
        },
        Ga = function (e) {
            return (
                (gt = e || Ya()),
                gt &&
                    typeof document != "undefined" &&
                    document.body &&
                    ((Gt = window),
                    (nn = document),
                    (rn = nn.documentElement),
                    (qn = nn.body),
                    (Ua = [Gt, nn, rn, qn]),
                    (vu = gt.utils.clamp),
                    (ja = gt.core.context || function () {}),
                    (bn = "onpointerenter" in qn ? "pointer" : "mouse"),
                    (Ha = Ze.isTouch =
                        Gt.matchMedia && Gt.matchMedia("(hover: none), (pointer: coarse)").matches
                            ? 1
                            : "ontouchstart" in Gt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
                              ? 2
                              : 0),
                    (gi = Ze.eventTypes =
                        (
                            "ontouchstart" in rn
                                ? "touchstart,touchmove,touchcancel,touchend"
                                : "onpointerdown" in rn
                                  ? "pointerdown,pointermove,pointercancel,pointerup"
                                  : "mousedown,mousemove,mouseup,mouseup"
                        ).split(",")),
                    setTimeout(function () {
                        return (Wa = 0);
                    }, 500),
                    Xa(),
                    (ao = 1)),
                ao
            );
        };
    kt.op = rt;
    ue.cache = 0;
    var Ze = (function () {
        function l(i) {
            this.init(i);
        }
        var e = l.prototype;
        return (
            (e.init = function (t) {
                ao || Ga(gt) || console.warn("Please gsap.registerPlugin(Observer)"), ur || Xa();
                var n = t.tolerance,
                    s = t.dragMinimum,
                    a = t.type,
                    c = t.target,
                    d = t.lineHeight,
                    g = t.debounce,
                    y = t.preventDefault,
                    T = t.onStop,
                    b = t.onStopDelay,
                    _ = t.ignore,
                    k = t.wheelSpeed,
                    w = t.event,
                    P = t.onDragStart,
                    A = t.onDragEnd,
                    O = t.onDrag,
                    D = t.onPress,
                    M = t.onRelease,
                    R = t.onRight,
                    I = t.onLeft,
                    L = t.onUp,
                    F = t.onDown,
                    f = t.onChangeX,
                    H = t.onChangeY,
                    W = t.onChange,
                    U = t.onToggleX,
                    be = t.onToggleY,
                    X = t.onHover,
                    oe = t.onHoverEnd,
                    K = t.onMove,
                    q = t.ignoreCheck,
                    ae = t.isNormalizer,
                    de = t.onGestureStart,
                    C = t.onGestureEnd,
                    ze = t.onWheel,
                    Ce = t.onEnable,
                    st = t.onDisable,
                    ie = t.onClick,
                    Qe = t.scrollSpeed,
                    xe = t.capture,
                    $e = t.allowClicks,
                    ge = t.lockAxis,
                    Ei = t.onLockAxis;
                (this.target = c = Dt(c) || rn),
                    (this.vars = t),
                    _ && (_ = gt.utils.toArray(_)),
                    (n = n || 1e-9),
                    (s = s || 0),
                    (k = k || 1),
                    (Qe = Qe || 1),
                    (a = a || "wheel,touch,pointer"),
                    (g = g !== !1),
                    d || (d = parseFloat(Gt.getComputedStyle(qn).lineHeight) || 22);
                var bt,
                    ve,
                    we,
                    He,
                    ne,
                    St,
                    ot,
                    S = this,
                    ci = 0,
                    Le = 0,
                    at = Vi(c, kt),
                    Jt = Vi(c, rt),
                    Ai = at(),
                    ut = Jt(),
                    Ui = ~a.indexOf("touch") && !~a.indexOf("pointer") && gi[0] === "pointerdown",
                    ui = dr(c),
                    Me = c.ownerDocument || nn,
                    dt = [0, 0, 0],
                    Ue = [0, 0, 0],
                    ji = 0,
                    Ne = function () {
                        return (ji = hr());
                    },
                    It = function (z, V) {
                        return (
                            ((S.event = z) && _ && ~_.indexOf(z.target)) ||
                            (V && Ui && z.pointerType !== "touch") ||
                            (q && q(z, V))
                        );
                    },
                    hi = function () {
                        S._vx.reset(), S._vy.reset(), ve.pause(), T && T(S);
                    },
                    di = function () {
                        var z = (S.deltaX = $a(dt)),
                            V = (S.deltaY = $a(Ue)),
                            Q = Math.abs(z) >= n,
                            J = Math.abs(V) >= n;
                        W && (Q || J) && W(S, z, V, dt, Ue),
                            Q &&
                                (R && S.deltaX > 0 && R(S),
                                I && S.deltaX < 0 && I(S),
                                f && f(S),
                                U && S.deltaX < 0 != ci < 0 && U(S),
                                (ci = S.deltaX),
                                (dt[0] = dt[1] = dt[2] = 0)),
                            J &&
                                (F && S.deltaY > 0 && F(S),
                                L && S.deltaY < 0 && L(S),
                                H && H(S),
                                be && S.deltaY < 0 != Le < 0 && be(S),
                                (Le = S.deltaY),
                                (Ue[0] = Ue[1] = Ue[2] = 0)),
                            (He || we) && (K && K(S), we && (O(S), (we = !1)), (He = !1)),
                            St && !(St = !1) && Ei && Ei(S),
                            ne && (ze(S), (ne = !1)),
                            (bt = 0);
                    },
                    Yi = function (z, V, Q) {
                        (dt[Q] += z),
                            (Ue[Q] += V),
                            S._vx.update(z),
                            S._vy.update(V),
                            g ? bt || (bt = requestAnimationFrame(di)) : di();
                    },
                    Mi = function (z, V) {
                        ge && !ot && ((S.axis = ot = Math.abs(z) > Math.abs(V) ? "x" : "y"), (St = !0)),
                            ot !== "y" && ((dt[2] += z), S._vx.update(z, !0)),
                            ot !== "x" && ((Ue[2] += V), S._vy.update(V, !0)),
                            g ? bt || (bt = requestAnimationFrame(di)) : di();
                    },
                    Ti = function (z) {
                        if (!It(z, 1)) {
                            z = cr(z, y);
                            var V = z.clientX,
                                Q = z.clientY,
                                J = V - S.x,
                                ee = Q - S.y,
                                tt = S.isDragging;
                            (S.x = V),
                                (S.y = Q),
                                (tt || Math.abs(S.startX - V) >= s || Math.abs(S.startY - Q) >= s) &&
                                    (O && (we = !0), tt || (S.isDragging = !0), Mi(J, ee), tt || (P && P(S)));
                        }
                    },
                    Z = (S.onPress = function (fe) {
                        It(fe, 1) ||
                            ((S.axis = ot = null),
                            ve.pause(),
                            (S.isPressed = !0),
                            (fe = cr(fe)),
                            (ci = Le = 0),
                            (S.startX = S.x = fe.clientX),
                            (S.startY = S.y = fe.clientY),
                            S._vx.reset(),
                            S._vy.reset(),
                            $t(ae ? c : Me, gi[1], Ti, y, !0),
                            (S.deltaX = S.deltaY = 0),
                            D && D(S));
                    }),
                    Ct = function (z) {
                        if (!It(z, 1)) {
                            Ot(ae ? c : Me, gi[1], Ti, !0);
                            var V = !isNaN(S.y - S.startY),
                                Q = S.isDragging && (Math.abs(S.x - S.startX) > 3 || Math.abs(S.y - S.startY) > 3),
                                J = cr(z);
                            !Q &&
                                V &&
                                (S._vx.reset(),
                                S._vy.reset(),
                                y &&
                                    $e &&
                                    gt.delayedCall(0.08, function () {
                                        if (hr() - ji > 300 && !z.defaultPrevented) {
                                            if (z.target.click) z.target.click();
                                            else if (Me.createEvent) {
                                                var ee = Me.createEvent("MouseEvents");
                                                ee.initMouseEvent(
                                                    "click",
                                                    !0,
                                                    !0,
                                                    Gt,
                                                    1,
                                                    J.screenX,
                                                    J.screenY,
                                                    J.clientX,
                                                    J.clientY,
                                                    !1,
                                                    !1,
                                                    !1,
                                                    !1,
                                                    0,
                                                    null
                                                ),
                                                    z.target.dispatchEvent(ee);
                                            }
                                        }
                                    })),
                                (S.isDragging = S.isGesturing = S.isPressed = !1),
                                T && !ae && ve.restart(!0),
                                A && Q && A(S),
                                M && M(S, Q);
                        }
                    },
                    ft = function (z) {
                        return z.touches && z.touches.length > 1 && (S.isGesturing = !0) && de(z, S.isDragging);
                    },
                    Ft = function () {
                        return (S.isGesturing = !1) || C(S);
                    },
                    Ht = function (z) {
                        if (!It(z)) {
                            var V = at(),
                                Q = Jt();
                            Yi((V - Ai) * Qe, (Q - ut) * Qe, 1), (Ai = V), (ut = Q), T && ve.restart(!0);
                        }
                    },
                    Zt = function (z) {
                        if (!It(z)) {
                            (z = cr(z, y)), ze && (ne = !0);
                            var V = (z.deltaMode === 1 ? d : z.deltaMode === 2 ? Gt.innerHeight : 1) * k;
                            Yi(z.deltaX * V, z.deltaY * V, 0), T && !ae && ve.restart(!0);
                        }
                    },
                    Oi = function (z) {
                        if (!It(z)) {
                            var V = z.clientX,
                                Q = z.clientY,
                                J = V - S.x,
                                ee = Q - S.y;
                            (S.x = V), (S.y = Q), (He = !0), (J || ee) && Mi(J, ee);
                        }
                    },
                    fi = function (z) {
                        (S.event = z), X(S);
                    },
                    B = function (z) {
                        (S.event = z), oe(S);
                    },
                    Wi = function (z) {
                        return It(z) || (cr(z, y) && ie(S));
                    };
                (ve = S._dc = gt.delayedCall(b || 0.25, hi).pause()),
                    (S.deltaX = S.deltaY = 0),
                    (S._vx = Yr(0, 50, !0)),
                    (S._vy = Yr(0, 50, !0)),
                    (S.scrollX = at),
                    (S.scrollY = Jt),
                    (S.isDragging = S.isGesturing = S.isPressed = !1),
                    ja(this),
                    (S.enable = function (fe) {
                        return (
                            S.isEnabled ||
                                ($t(ui ? Me : c, "scroll", co),
                                a.indexOf("scroll") >= 0 && $t(ui ? Me : c, "scroll", Ht, y, xe),
                                a.indexOf("wheel") >= 0 && $t(c, "wheel", Zt, y, xe),
                                ((a.indexOf("touch") >= 0 && Ha) || a.indexOf("pointer") >= 0) &&
                                    ($t(c, gi[0], Z, y, xe),
                                    $t(Me, gi[2], Ct),
                                    $t(Me, gi[3], Ct),
                                    $e && $t(c, "click", Ne, !1, !0),
                                    ie && $t(c, "click", Wi),
                                    de && $t(Me, "gesturestart", ft),
                                    C && $t(Me, "gestureend", Ft),
                                    X && $t(c, bn + "enter", fi),
                                    oe && $t(c, bn + "leave", B),
                                    K && $t(c, bn + "move", Oi)),
                                (S.isEnabled = !0),
                                fe && fe.type && Z(fe),
                                Ce && Ce(S)),
                            S
                        );
                    }),
                    (S.disable = function () {
                        S.isEnabled &&
                            (zn.filter(function (fe) {
                                return fe !== S && dr(fe.target);
                            }).length || Ot(ui ? Me : c, "scroll", co),
                            S.isPressed && (S._vx.reset(), S._vy.reset(), Ot(ae ? c : Me, gi[1], Ti, !0)),
                            Ot(ui ? Me : c, "scroll", Ht, xe),
                            Ot(c, "wheel", Zt, xe),
                            Ot(c, gi[0], Z, xe),
                            Ot(Me, gi[2], Ct),
                            Ot(Me, gi[3], Ct),
                            Ot(c, "click", Ne, !0),
                            Ot(c, "click", Wi),
                            Ot(Me, "gesturestart", ft),
                            Ot(Me, "gestureend", Ft),
                            Ot(c, bn + "enter", fi),
                            Ot(c, bn + "leave", B),
                            Ot(c, bn + "move", Oi),
                            (S.isEnabled = S.isPressed = S.isDragging = !1),
                            st && st(S));
                    }),
                    (S.kill = S.revert =
                        function () {
                            S.disable();
                            var fe = zn.indexOf(S);
                            fe >= 0 && zn.splice(fe, 1), qi === S && (qi = 0);
                        }),
                    zn.push(S),
                    ae && dr(c) && (qi = S),
                    S.enable(w);
            }),
            bu(l, [
                {
                    key: "velocityX",
                    get: function () {
                        return this._vx.getVelocity();
                    },
                },
                {
                    key: "velocityY",
                    get: function () {
                        return this._vy.getVelocity();
                    },
                },
            ]),
            l
        );
    })();
    Ze.version = "3.11.4";
    Ze.create = function (l) {
        return new Ze(l);
    };
    Ze.register = Ga;
    Ze.getAll = function () {
        return zn.slice();
    };
    Ze.getById = function (l) {
        return zn.filter(function (e) {
            return e.vars.id === l;
        })[0];
    };
    Ya() && gt.registerPlugin(Ze);
    var G,
        Hn,
        _e,
        Be,
        vi,
        Ke,
        hl,
        us,
        hs,
        jn,
        ns,
        Wr,
        xt,
        fs,
        _o,
        Lt,
        Ka,
        Qa,
        Un,
        dl,
        uo,
        fl,
        Kt,
        pl,
        ml,
        gl,
        sn,
        bo,
        ko,
        ho,
        Xr = 1,
        Nt = Date.now,
        fo = Nt(),
        li = 0,
        Gr = 0,
        Ja = function () {
            return (fs = 1);
        },
        Za = function () {
            return (fs = 0);
        },
        Pi = function (e) {
            return e;
        },
        pr = function (e) {
            return Math.round(e * 1e5) / 1e5 || 0;
        },
        yl = function () {
            return typeof window != "undefined";
        },
        _l = function () {
            return G || (yl() && (G = window.gsap) && G.registerPlugin && G);
        },
        xn = function (e) {
            return !!~hl.indexOf(e);
        },
        bl = function (e) {
            return (
                $i(e, "getBoundingClientRect") ||
                (xn(e)
                    ? function () {
                          return (cs.width = _e.innerWidth), (cs.height = _e.innerHeight), cs;
                      }
                    : function () {
                          return Hi(e);
                      })
            );
        },
        Tu = function (e, i, t) {
            var n = t.d,
                s = t.d2,
                a = t.a;
            return (a = $i(e, "getBoundingClientRect"))
                ? function () {
                      return a()[n];
                  }
                : function () {
                      return (i ? _e["inner" + s] : e["client" + s]) || 0;
                  };
        },
        ku = function (e, i) {
            return !i || ~yi.indexOf(e)
                ? bl(e)
                : function () {
                      return cs;
                  };
        },
        on = function (e, i) {
            var t = i.s,
                n = i.d2,
                s = i.d,
                a = i.a;
            return (t = "scroll" + n) && (a = $i(e, t))
                ? a() - bl(e)()[s]
                : xn(e)
                  ? (vi[t] || Ke[t]) - (_e["inner" + n] || vi["client" + n] || Ke["client" + n])
                  : e[t] - e["offset" + n];
        },
        Kr = function (e, i) {
            for (var t = 0; t < Un.length; t += 3) (!i || ~i.indexOf(Un[t + 1])) && e(Un[t], Un[t + 1], Un[t + 2]);
        },
        _i = function (e) {
            return typeof e == "string";
        },
        Rt = function (e) {
            return typeof e == "function";
        },
        mr = function (e) {
            return typeof e == "number";
        },
        rs = function (e) {
            return typeof e == "object";
        };
    var fr = function (e, i, t) {
            return e && e.progress(i ? 0 : 1) && t && e.pause();
        },
        po = function (e, i) {
            if (e.enabled) {
                var t = i(e);
                t && t.totalTime && (e.callbackAnimation = t);
            }
        },
        Vn = Math.abs;
    var vl = "left",
        wl = "top",
        xo = "right",
        So = "bottom",
        wn = "width",
        Tn = "height",
        yr = "Right",
        _r = "Left",
        br = "Top",
        vr = "Bottom",
        et = "padding",
        ai = "margin",
        Wn = "Width",
        Co = "Height",
        yt = "px",
        wi = function (e) {
            return _e.getComputedStyle(e);
        },
        xu = function (e) {
            var i = wi(e).position;
            e.style.position = i === "absolute" || i === "fixed" ? i : "relative";
        },
        el = function (e, i) {
            for (var t in i) t in e || (e[t] = i[t]);
            return e;
        },
        Hi = function (e, i) {
            var t =
                    i &&
                    wi(e)[_o] !== "matrix(1, 0, 0, 1, 0, 0)" &&
                    G.to(e, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                    }).progress(1),
                n = e.getBoundingClientRect();
            return t && t.progress(0).kill(), n;
        },
        vo = function (e, i) {
            var t = i.d2;
            return e["offset" + t] || e["client" + t] || 0;
        },
        Tl = function (e) {
            var i = [],
                t = e.labels,
                n = e.duration(),
                s;
            for (s in t) i.push(t[s] / n);
            return i;
        },
        Su = function (e) {
            return function (i) {
                return G.utils.snap(Tl(e), i);
            };
        },
        Po = function (e) {
            var i = G.utils.snap(e),
                t =
                    Array.isArray(e) &&
                    e.slice(0).sort(function (n, s) {
                        return n - s;
                    });
            return t
                ? function (n, s, a) {
                      a === void 0 && (a = 0.001);
                      var c;
                      if (!s) return i(n);
                      if (s > 0) {
                          for (n -= a, c = 0; c < t.length; c++) if (t[c] >= n) return t[c];
                          return t[c - 1];
                      } else for (c = t.length, n += a; c--; ) if (t[c] <= n) return t[c];
                      return t[0];
                  }
                : function (n, s, a) {
                      a === void 0 && (a = 0.001);
                      var c = i(n);
                      return !s || Math.abs(c - n) < a || c - n < 0 == s < 0 ? c : i(s < 0 ? n - e : n + e);
                  };
        },
        Cu = function (e) {
            return function (i, t) {
                return Po(Tl(e))(i, t.direction);
            };
        },
        Qr = function (e, i, t, n) {
            return t.split(",").forEach(function (s) {
                return e(i, s, n);
            });
        },
        _t = function (e, i, t, n, s) {
            return e.addEventListener(i, t, { passive: !n, capture: !!s });
        },
        ht = function (e, i, t, n) {
            return e.removeEventListener(i, t, !!n);
        },
        Jr = function (e, i, t) {
            return t && t.wheelHandler && e(i, "wheel", t);
        },
        tl = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
        Zr = { toggleActions: "play", anticipatePin: 0 },
        ds = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        ss = function (e, i) {
            if (_i(e)) {
                var t = e.indexOf("="),
                    n = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
                ~t && (e.indexOf("%") > t && (n *= i / 100), (e = e.substr(0, t - 1))),
                    (e = n + (e in ds ? ds[e] * i : ~e.indexOf("%") ? (parseFloat(e) * i) / 100 : parseFloat(e) || 0));
            }
            return e;
        },
        es = function (e, i, t, n, s, a, c, d) {
            var g = s.startColor,
                y = s.endColor,
                T = s.fontSize,
                b = s.indent,
                _ = s.fontWeight,
                k = Be.createElement("div"),
                w = xn(t) || $i(t, "pinType") === "fixed",
                P = e.indexOf("scroller") !== -1,
                A = w ? Ke : t,
                O = e.indexOf("start") !== -1,
                D = O ? g : y,
                M =
                    "border-color:" +
                    D +
                    ";font-size:" +
                    T +
                    ";color:" +
                    D +
                    ";font-weight:" +
                    _ +
                    ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
                (M += "position:" + ((P || d) && w ? "fixed;" : "absolute;")),
                (P || d || !w) && (M += (n === rt ? xo : So) + ":" + (a + parseFloat(b)) + "px;"),
                c && (M += "box-sizing:border-box;text-align:left;width:" + c.offsetWidth + "px;"),
                (k._isStart = O),
                k.setAttribute("class", "gsap-marker-" + e + (i ? " marker-" + i : "")),
                (k.style.cssText = M),
                (k.innerText = i || i === 0 ? e + "-" + i : e),
                A.children[0] ? A.insertBefore(k, A.children[0]) : A.appendChild(k),
                (k._offset = k["offset" + n.op.d2]),
                os(k, 0, n, O),
                k
            );
        },
        os = function (e, i, t, n) {
            var s = { display: "block" },
                a = t[n ? "os2" : "p2"],
                c = t[n ? "p2" : "os2"];
            (e._isFlipped = n),
                (s[t.a + "Percent"] = n ? -100 : 0),
                (s[t.a] = n ? "1px" : 0),
                (s["border" + a + Wn] = 1),
                (s["border" + c + Wn] = 0),
                (s[t.p] = i + "px"),
                G.set(e, s);
        },
        he = [],
        wo = {},
        Tr,
        il = function () {
            return Nt() - li > 34 && (Tr || (Tr = requestAnimationFrame(an)));
        },
        $n = function () {
            (!Kt || !Kt.isPressed || Kt.startX > Ke.clientWidth) &&
                (ue.cache++, Kt ? Tr || (Tr = requestAnimationFrame(an)) : an(), li || Cn("scrollStart"), (li = Nt()));
        },
        mo = function () {
            (gl = _e.innerWidth), (ml = _e.innerHeight);
        },
        gr = function () {
            ue.cache++,
                !xt &&
                    !fl &&
                    !Be.fullscreenElement &&
                    !Be.webkitFullscreenElement &&
                    (!pl || gl !== _e.innerWidth || Math.abs(_e.innerHeight - ml) > _e.innerHeight * 0.25) &&
                    us.restart(!0);
        },
        Sn = {},
        Pu = [],
        kl = function l() {
            return ht(me, "scrollEnd", l) || vn(!0);
        },
        Cn = function (e) {
            return (
                (Sn[e] &&
                    Sn[e].map(function (i) {
                        return i();
                    })) ||
                Pu
            );
        },
        Qt = [],
        xl = function (e) {
            for (var i = 0; i < Qt.length; i += 5)
                (!e || (Qt[i + 4] && Qt[i + 4].query === e)) &&
                    ((Qt[i].style.cssText = Qt[i + 1]),
                    Qt[i].getBBox && Qt[i].setAttribute("transform", Qt[i + 2] || ""),
                    (Qt[i + 3].uncache = 1));
        },
        Eo = function (e, i) {
            var t;
            for (Lt = 0; Lt < he.length; Lt++)
                (t = he[Lt]), t && (!i || t._ctx === i) && (e ? t.kill(1) : t.revert(!0, !0));
            i && xl(i), i || Cn("revert");
        },
        Sl = function (e, i) {
            ue.cache++,
                (i || !bi) &&
                    ue.forEach(function (t) {
                        return Rt(t) && t.cacheID++ && (t.rec = 0);
                    }),
                _i(e) && (_e.history.scrollRestoration = ko = e);
        },
        bi,
        kn = 0,
        nl,
        Eu = function () {
            if (nl !== kn) {
                var e = (nl = kn);
                requestAnimationFrame(function () {
                    return e === kn && vn(!0);
                });
            }
        },
        vn = function (e, i) {
            if (li && !e) {
                _t(me, "scrollEnd", kl);
                return;
            }
            (bi = me.isRefreshing = !0),
                ue.forEach(function (n) {
                    return Rt(n) && n.cacheID++ && (n.rec = n());
                });
            var t = Cn("refreshInit");
            dl && me.sort(),
                i || Eo(),
                ue.forEach(function (n) {
                    Rt(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
                }),
                he.slice(0).forEach(function (n) {
                    return n.refresh();
                }),
                he.forEach(function (n, s) {
                    if (n._subPinOffset && n.pin) {
                        var a = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            c = n.pin[a];
                        n.revert(!0, 1), n.adjustPinSpacing(n.pin[a] - c), n.revert(!1, 1);
                    }
                }),
                he.forEach(function (n) {
                    return (
                        n.vars.end === "max" && n.setPositions(n.start, Math.max(n.start + 1, on(n.scroller, n._dir)))
                    );
                }),
                t.forEach(function (n) {
                    return n && n.render && n.render(-1);
                }),
                ue.forEach(function (n) {
                    Rt(n) &&
                        (n.smooth &&
                            requestAnimationFrame(function () {
                                return (n.target.style.scrollBehavior = "smooth");
                            }),
                        n.rec && n(n.rec));
                }),
                Sl(ko, 1),
                us.pause(),
                kn++,
                an(2),
                he.forEach(function (n) {
                    return Rt(n.vars.onRefresh) && n.vars.onRefresh(n);
                }),
                (bi = me.isRefreshing = !1),
                Cn("refresh");
        },
        rl = 0,
        as = 1,
        wr,
        an = function (e) {
            if (!bi || e === 2) {
                (me.isUpdating = !0), wr && wr.update(0);
                var i = he.length,
                    t = Nt(),
                    n = t - fo >= 50,
                    s = i && he[0].scroll();
                if (
                    ((as = rl > s ? -1 : 1),
                    (rl = s),
                    n && (li && !fs && t - li > 200 && ((li = 0), Cn("scrollEnd")), (ns = fo), (fo = t)),
                    as < 0)
                ) {
                    for (Lt = i; Lt-- > 0; ) he[Lt] && he[Lt].update(0, n);
                    as = 1;
                } else for (Lt = 0; Lt < i; Lt++) he[Lt] && he[Lt].update(0, n);
                me.isUpdating = !1;
            }
            Tr = 0;
        },
        To = [
            vl,
            wl,
            So,
            xo,
            ai + vr,
            ai + yr,
            ai + br,
            ai + _r,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
        ],
        ls = To.concat([
            wn,
            Tn,
            "boxSizing",
            "max" + Wn,
            "max" + Co,
            "position",
            ai,
            et,
            et + br,
            et + yr,
            et + vr,
            et + _r,
        ]),
        Au = function (e, i, t) {
            Yn(t);
            var n = e._gsap;
            if (n.spacerIsNative) Yn(n.spacerState);
            else if (e._gsap.swappedIn) {
                var s = i.parentNode;
                s && (s.insertBefore(e, i), s.removeChild(i));
            }
            e._gsap.swappedIn = !1;
        },
        go = function (e, i, t, n) {
            if (!e._gsap.swappedIn) {
                for (var s = To.length, a = i.style, c = e.style, d; s--; ) (d = To[s]), (a[d] = t[d]);
                (a.position = t.position === "absolute" ? "absolute" : "relative"),
                    t.display === "inline" && (a.display = "inline-block"),
                    (c[So] = c[xo] = "auto"),
                    (a.flexBasis = t.flexBasis || "auto"),
                    (a.overflow = "visible"),
                    (a.boxSizing = "border-box"),
                    (a[wn] = vo(e, kt) + yt),
                    (a[Tn] = vo(e, rt) + yt),
                    (a[et] = c[ai] = c[wl] = c[vl] = "0"),
                    Yn(n),
                    (c[wn] = c["max" + Wn] = t[wn]),
                    (c[Tn] = c["max" + Co] = t[Tn]),
                    (c[et] = t[et]),
                    e.parentNode !== i && (e.parentNode.insertBefore(i, e), i.appendChild(e)),
                    (e._gsap.swappedIn = !0);
            }
        },
        Mu = /([A-Z])/g,
        Yn = function (e) {
            if (e) {
                var i = e.t.style,
                    t = e.length,
                    n = 0,
                    s,
                    a;
                for ((e.t._gsap || G.core.getCache(e.t)).uncache = 1; n < t; n += 2)
                    (a = e[n + 1]),
                        (s = e[n]),
                        a ? (i[s] = a) : i[s] && i.removeProperty(s.replace(Mu, "-$1").toLowerCase());
            }
        },
        ts = function (e) {
            for (var i = ls.length, t = e.style, n = [], s = 0; s < i; s++) n.push(ls[s], t[ls[s]]);
            return (n.t = e), n;
        },
        Ou = function (e, i, t) {
            for (var n = [], s = e.length, a = t ? 8 : 0, c; a < s; a += 2)
                (c = e[a]), n.push(c, c in i ? i[c] : e[a + 1]);
            return (n.t = e.t), n;
        },
        cs = { left: 0, top: 0 },
        sl = function (e, i, t, n, s, a, c, d, g, y, T, b, _) {
            Rt(e) && (e = e(d)),
                _i(e) && e.substr(0, 3) === "max" && (e = b + (e.charAt(4) === "=" ? ss("0" + e.substr(3), t) : 0));
            var k = _ ? _.time() : 0,
                w,
                P,
                A;
            if ((_ && _.seek(0), mr(e))) c && os(c, t, n, !0);
            else {
                Rt(i) && (i = i(d));
                var O = (e || "0").split(" "),
                    D,
                    M,
                    R,
                    I;
                (A = Dt(i) || Ke),
                    (D = Hi(A) || {}),
                    (!D || (!D.left && !D.top)) &&
                        wi(A).display === "none" &&
                        ((I = A.style.display),
                        (A.style.display = "block"),
                        (D = Hi(A)),
                        I ? (A.style.display = I) : A.style.removeProperty("display")),
                    (M = ss(O[0], D[n.d])),
                    (R = ss(O[1] || "0", t)),
                    (e = D[n.p] - g[n.p] - y + M + s - R),
                    c && os(c, R, n, t - R < 20 || (c._isStart && R > 20)),
                    (t -= t - R);
            }
            if (a) {
                var L = e + t,
                    F = a._isStart;
                (w = "scroll" + n.d2),
                    os(a, L, n, (F && L > 20) || (!F && (T ? Math.max(Ke[w], vi[w]) : a.parentNode[w]) <= L + 1)),
                    T && ((g = Hi(c)), T && (a.style[n.op.p] = g[n.op.p] - n.op.m - a._offset + yt));
            }
            return (
                _ &&
                    A &&
                    ((w = Hi(A)),
                    _.seek(b),
                    (P = Hi(A)),
                    (_._caScrollDist = w[n.p] - P[n.p]),
                    (e = (e / _._caScrollDist) * b)),
                _ && _.seek(k),
                _ ? e : Math.round(e)
            );
        },
        Du = /(webkit|moz|length|cssText|inset)/i,
        ol = function (e, i, t, n) {
            if (e.parentNode !== i) {
                var s = e.style,
                    a,
                    c;
                if (i === Ke) {
                    (e._stOrig = s.cssText), (c = wi(e));
                    for (a in c) !+a && !Du.test(a) && c[a] && typeof s[a] == "string" && a !== "0" && (s[a] = c[a]);
                    (s.top = t), (s.left = n);
                } else s.cssText = e._stOrig;
                (G.core.getCache(e).uncache = 1), i.appendChild(e);
            }
        },
        al = function (e, i) {
            var t = Vi(e, i),
                n = "_scroll" + i.p2,
                s,
                a,
                c = function d(g, y, T, b, _) {
                    var k = d.tween,
                        w = y.onComplete,
                        P = {};
                    return (
                        (T = T || t()),
                        (_ = (b && _) || 0),
                        (b = b || g - T),
                        k && k.kill(),
                        (s = Math.round(T)),
                        (y[n] = g),
                        (y.modifiers = P),
                        (P[n] = function (A) {
                            return (
                                (A = Math.round(t())),
                                A !== s && A !== a && Math.abs(A - s) > 3 && Math.abs(A - a) > 3
                                    ? (k.kill(), (d.tween = 0))
                                    : (A = T + b * k.ratio + _ * k.ratio * k.ratio),
                                (a = s),
                                (s = Math.round(A))
                            );
                        }),
                        (y.onUpdate = function () {
                            ue.cache++, an();
                        }),
                        (y.onComplete = function () {
                            (d.tween = 0), w && w.call(k);
                        }),
                        (k = d.tween = G.to(e, y)),
                        k
                    );
                };
            return (
                (e[n] = t),
                (t.wheelHandler = function () {
                    return c.tween && c.tween.kill() && (c.tween = 0);
                }),
                _t(e, "wheel", t.wheelHandler),
                c
            );
        },
        me = (function () {
            function l(i, t) {
                Hn || l.register(G) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(i, t);
            }
            var e = l.prototype;
            return (
                (e.init = function (t, n) {
                    if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !Gr)) {
                        this.update = this.refresh = this.kill = Pi;
                        return;
                    }
                    t = el(_i(t) || mr(t) || t.nodeType ? { trigger: t } : t, Zr);
                    var s = t,
                        a = s.onUpdate,
                        c = s.toggleClass,
                        d = s.id,
                        g = s.onToggle,
                        y = s.onRefresh,
                        T = s.scrub,
                        b = s.trigger,
                        _ = s.pin,
                        k = s.pinSpacing,
                        w = s.invalidateOnRefresh,
                        P = s.anticipatePin,
                        A = s.onScrubComplete,
                        O = s.onSnapComplete,
                        D = s.once,
                        M = s.snap,
                        R = s.pinReparent,
                        I = s.pinSpacer,
                        L = s.containerAnimation,
                        F = s.fastScrollEnd,
                        f = s.preventOverlaps,
                        H = t.horizontal || (t.containerAnimation && t.horizontal !== !1) ? kt : rt,
                        W = !T && T !== 0,
                        U = Dt(t.scroller || _e),
                        be = G.core.getCache(U),
                        X = xn(U),
                        oe = ("pinType" in t ? t.pinType : $i(U, "pinType") || (X && "fixed")) === "fixed",
                        K = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                        q = W && t.toggleActions.split(" "),
                        ae = "markers" in t ? t.markers : Zr.markers,
                        de = X ? 0 : parseFloat(wi(U)["border" + H.p2 + Wn]) || 0,
                        C = this,
                        ze =
                            t.onRefreshInit &&
                            function () {
                                return t.onRefreshInit(C);
                            },
                        Ce = Tu(U, X, H),
                        st = ku(U, X),
                        ie = 0,
                        Qe = 0,
                        xe = Vi(U, H),
                        $e,
                        ge,
                        Ei,
                        bt,
                        ve,
                        we,
                        He,
                        ne,
                        St,
                        ot,
                        S,
                        ci,
                        Le,
                        at,
                        Jt,
                        Ai,
                        ut,
                        Ui,
                        ui,
                        Me,
                        dt,
                        Ue,
                        ji,
                        Ne,
                        It,
                        hi,
                        di,
                        Yi,
                        Mi,
                        Ti,
                        Z,
                        Ct,
                        ft,
                        Ft,
                        Ht,
                        Zt,
                        Oi,
                        fi,
                        B;
                    if (
                        (bo(C),
                        (C._dir = H),
                        (P *= 45),
                        (C.scroller = U),
                        (C.scroll = L ? L.time.bind(L) : xe),
                        (bt = xe()),
                        (C.vars = t),
                        (n = n || t.animation),
                        "refreshPriority" in t && ((dl = 1), t.refreshPriority === -9999 && (wr = C)),
                        (be.tweenScroll = be.tweenScroll || { top: al(U, rt), left: al(U, kt) }),
                        (C.tweenTo = $e = be.tweenScroll[H.p]),
                        (C.scrubDuration = function (V) {
                            (Ct = mr(V) && V),
                                Ct
                                    ? Z
                                        ? Z.duration(V)
                                        : (Z = G.to(n, {
                                              ease: "expo",
                                              totalProgress: "+=0.001",
                                              duration: Ct,
                                              paused: !0,
                                              onComplete: function () {
                                                  return A && A(C);
                                              },
                                          }))
                                    : (Z && Z.progress(1).kill(), (Z = 0));
                        }),
                        n &&
                            ((n.vars.lazy = !1),
                            n._initted ||
                                (n.vars.immediateRender !== !1 &&
                                    t.immediateRender !== !1 &&
                                    n.duration() &&
                                    n.render(0, !0, !0)),
                            (C.animation = n.pause()),
                            (n.scrollTrigger = C),
                            C.scrubDuration(T),
                            (Mi = 0),
                            d || (d = n.vars.id)),
                        he.push(C),
                        M &&
                            ((!rs(M) || M.push) && (M = { snapTo: M }),
                            "scrollBehavior" in Ke.style && G.set(X ? [Ke, vi] : U, { scrollBehavior: "auto" }),
                            ue.forEach(function (V) {
                                return Rt(V) && V.target === (X ? Be.scrollingElement || vi : U) && (V.smooth = !1);
                            }),
                            (Ei = Rt(M.snapTo)
                                ? M.snapTo
                                : M.snapTo === "labels"
                                  ? Su(n)
                                  : M.snapTo === "labelsDirectional"
                                    ? Cu(n)
                                    : M.directional !== !1
                                      ? function (V, Q) {
                                            return Po(M.snapTo)(V, Nt() - Qe < 500 ? 0 : Q.direction);
                                        }
                                      : G.utils.snap(M.snapTo)),
                            (ft = M.duration || { min: 0.1, max: 2 }),
                            (ft = rs(ft) ? jn(ft.min, ft.max) : jn(ft, ft)),
                            (Ft = G.delayedCall(M.delay || Ct / 2 || 0.1, function () {
                                var V = xe(),
                                    Q = Nt() - Qe < 500,
                                    J = $e.tween;
                                if ((Q || Math.abs(C.getVelocity()) < 10) && !J && !fs && ie !== V) {
                                    var ee = (V - we) / Le,
                                        tt = n && !W ? n.totalProgress() : ee,
                                        le = Q ? 0 : ((tt - Ti) / (Nt() - ns)) * 1e3 || 0,
                                        Re = G.utils.clamp(-ee, 1 - ee, (Vn(le / 2) * le) / 0.185),
                                        Ie = ee + (M.inertia === !1 ? 0 : Re),
                                        je = jn(0, 1, Ei(Ie, C)),
                                        Se = Math.round(we + je * Le),
                                        re = M,
                                        Ut = re.onStart,
                                        Fe = re.onInterrupt,
                                        Oe = re.onComplete;
                                    if (V <= He && V >= we && Se !== V) {
                                        if (J && !J._initted && J.data <= Vn(Se - V)) return;
                                        M.inertia === !1 && (Re = je - ee),
                                            $e(
                                                Se,
                                                {
                                                    duration: ft(
                                                        Vn(
                                                            (Math.max(Vn(Ie - tt), Vn(je - tt)) * 0.185) / le / 0.05 ||
                                                                0
                                                        )
                                                    ),
                                                    ease: M.ease || "power3",
                                                    data: Vn(Se - V),
                                                    onInterrupt: function () {
                                                        return Ft.restart(!0) && Fe && Fe(C);
                                                    },
                                                    onComplete: function () {
                                                        C.update(),
                                                            (ie = xe()),
                                                            (Mi = Ti = n && !W ? n.totalProgress() : C.progress),
                                                            O && O(C),
                                                            Oe && Oe(C);
                                                    },
                                                },
                                                V,
                                                Re * Le,
                                                Se - V - Re * Le
                                            ),
                                            Ut && Ut(C, $e.tween);
                                    }
                                } else C.isActive && ie !== V && Ft.restart(!0);
                            }).pause())),
                        d && (wo[d] = C),
                        (b = C.trigger = Dt(b || _)),
                        (B = b && b._gsap && b._gsap.stRevert),
                        B && (B = B(C)),
                        (_ = _ === !0 ? b : Dt(_)),
                        _i(c) && (c = { targets: b, className: c }),
                        _ &&
                            (k === !1 ||
                                k === ai ||
                                (k =
                                    !k && _.parentNode && _.parentNode.style && wi(_.parentNode).display === "flex"
                                        ? !1
                                        : et),
                            (C.pin = _),
                            (ge = G.core.getCache(_)),
                            ge.spacer
                                ? (at = ge.pinState)
                                : (I &&
                                      ((I = Dt(I)),
                                      I && !I.nodeType && (I = I.current || I.nativeElement),
                                      (ge.spacerIsNative = !!I),
                                      I && (ge.spacerState = ts(I))),
                                  (ge.spacer = ut = I || Be.createElement("div")),
                                  ut.classList.add("pin-spacer"),
                                  d && ut.classList.add("pin-spacer-" + d),
                                  (ge.pinState = at = ts(_))),
                            t.force3D !== !1 && G.set(_, { force3D: !0 }),
                            (C.spacer = ut = ge.spacer),
                            (Yi = wi(_)),
                            (ji = Yi[k + H.os2]),
                            (ui = G.getProperty(_)),
                            (Me = G.quickSetter(_, H.a, yt)),
                            go(_, ut, Yi),
                            (Ai = ts(_))),
                        ae)
                    ) {
                        (ci = rs(ae) ? el(ae, tl) : tl),
                            (ot = es("scroller-start", d, U, H, ci, 0)),
                            (S = es("scroller-end", d, U, H, ci, 0, ot)),
                            (Ui = ot["offset" + H.op.d2]);
                        var Wi = Dt($i(U, "content") || U);
                        (ne = this.markerStart = es("start", d, Wi, H, ci, Ui, 0, L)),
                            (St = this.markerEnd = es("end", d, Wi, H, ci, Ui, 0, L)),
                            L && (fi = G.quickSetter([ne, St], H.a, yt)),
                            !oe &&
                                !(yi.length && $i(U, "fixedMarkers") === !0) &&
                                (xu(X ? Ke : U),
                                G.set([ot, S], { force3D: !0 }),
                                (It = G.quickSetter(ot, H.a, yt)),
                                (di = G.quickSetter(S, H.a, yt)));
                    }
                    if (L) {
                        var fe = L.vars.onUpdate,
                            z = L.vars.onUpdateParams;
                        L.eventCallback("onUpdate", function () {
                            C.update(0, 0, 1), fe && fe.apply(z || []);
                        });
                    }
                    (C.previous = function () {
                        return he[he.indexOf(C) - 1];
                    }),
                        (C.next = function () {
                            return he[he.indexOf(C) + 1];
                        }),
                        (C.revert = function (V, Q) {
                            if (!Q) return C.kill(!0);
                            var J = V !== !1 || !C.enabled,
                                ee = xt;
                            J !== C.isReverted &&
                                (J &&
                                    ((Zt = Math.max(xe(), C.scroll.rec || 0)),
                                    (Ht = C.progress),
                                    (Oi = n && n.progress())),
                                ne &&
                                    [ne, St, ot, S].forEach(function (tt) {
                                        return (tt.style.display = J ? "none" : "block");
                                    }),
                                J && ((xt = 1), C.update(J)),
                                _ && (!R || !C.isActive) && (J ? Au(_, ut, at) : go(_, ut, wi(_), Ne)),
                                J || C.update(J),
                                (xt = ee),
                                (C.isReverted = J));
                        }),
                        (C.refresh = function (V, Q) {
                            if (!((xt || !C.enabled) && !Q)) {
                                if (_ && V && li) {
                                    _t(l, "scrollEnd", kl);
                                    return;
                                }
                                !bi && ze && ze(C),
                                    (xt = 1),
                                    (Qe = Nt()),
                                    $e.tween && ($e.tween.kill(), ($e.tween = 0)),
                                    Z && Z.pause(),
                                    w && n && n.revert({ kill: !1 }).invalidate(),
                                    C.isReverted || C.revert(!0, !0),
                                    (C._subPinOffset = !1);
                                for (
                                    var J = Ce(),
                                        ee = st(),
                                        tt = L ? L.duration() : on(U, H),
                                        le = 0,
                                        Re = 0,
                                        Ie = t.end,
                                        je = t.endTrigger || b,
                                        Se = t.start || (t.start === 0 || !b ? 0 : _ ? "0 0" : "0 100%"),
                                        re = (C.pinnedContainer = t.pinnedContainer && Dt(t.pinnedContainer)),
                                        Ut = (b && Math.max(0, he.indexOf(C))) || 0,
                                        Fe = Ut,
                                        Oe,
                                        De,
                                        ki,
                                        jt,
                                        Je,
                                        Pe,
                                        ei,
                                        Xn,
                                        Gn,
                                        ln,
                                        Yt;
                                    Fe--;

                                )
                                    (Pe = he[Fe]),
                                        Pe.end || Pe.refresh(0, 1) || (xt = 1),
                                        (ei = Pe.pin),
                                        ei &&
                                            (ei === b || ei === _) &&
                                            !Pe.isReverted &&
                                            (ln || (ln = []), ln.unshift(Pe), Pe.revert(!0, !0)),
                                        Pe !== he[Fe] && (Ut--, Fe--);
                                for (
                                    Rt(Se) && (Se = Se(C)),
                                        we = sl(Se, b, J, H, xe(), ne, ot, C, ee, de, oe, tt, L) || (_ ? -0.001 : 0),
                                        Rt(Ie) && (Ie = Ie(C)),
                                        _i(Ie) &&
                                            !Ie.indexOf("+=") &&
                                            (~Ie.indexOf(" ")
                                                ? (Ie = (_i(Se) ? Se.split(" ")[0] : "") + Ie)
                                                : ((le = ss(Ie.substr(2), J)), (Ie = _i(Se) ? Se : we + le), (je = b))),
                                        He =
                                            Math.max(
                                                we,
                                                sl(
                                                    Ie || (je ? "100% 0" : tt),
                                                    je,
                                                    J,
                                                    H,
                                                    xe() + le,
                                                    St,
                                                    S,
                                                    C,
                                                    ee,
                                                    de,
                                                    oe,
                                                    tt,
                                                    L
                                                )
                                            ) || -0.001,
                                        Le = He - we || ((we -= 0.01) && 0.001),
                                        le = 0,
                                        Fe = Ut;
                                    Fe--;

                                )
                                    (Pe = he[Fe]),
                                        (ei = Pe.pin),
                                        ei &&
                                            Pe.start - Pe._pinPush <= we &&
                                            !L &&
                                            Pe.end > 0 &&
                                            ((Oe = Pe.end - Pe.start),
                                            ((ei === b && Pe.start - Pe._pinPush < we) || ei === re) &&
                                                !mr(Se) &&
                                                (le += Oe * (1 - Pe.progress)),
                                            ei === _ && (Re += Oe));
                                if (
                                    ((we += le),
                                    (He += le),
                                    (C._pinPush = Re),
                                    ne &&
                                        le &&
                                        ((Oe = {}),
                                        (Oe[H.a] = "+=" + le),
                                        re && (Oe[H.p] = "-=" + xe()),
                                        G.set([ne, St], Oe)),
                                    _)
                                )
                                    (Oe = wi(_)),
                                        (jt = H === rt),
                                        (ki = xe()),
                                        (dt = parseFloat(ui(H.a)) + Re),
                                        !tt &&
                                            He > 1 &&
                                            ((Yt = (X ? Be.scrollingElement || vi : U).style),
                                            (Yt = { style: Yt, value: Yt["overflow" + H.a.toUpperCase()] }),
                                            (Yt["overflow" + H.a.toUpperCase()] = "scroll")),
                                        go(_, ut, Oe),
                                        (Ai = ts(_)),
                                        (De = Hi(_, !0)),
                                        (Xn = oe && Vi(U, jt ? kt : rt)()),
                                        k &&
                                            ((Ne = [k + H.os2, Le + Re + yt]),
                                            (Ne.t = ut),
                                            (Fe = k === et ? vo(_, H) + Le + Re : 0),
                                            Fe && Ne.push(H.d, Fe + yt),
                                            Yn(Ne),
                                            re &&
                                                he.forEach(function (Di) {
                                                    Di.pin === re &&
                                                        Di.vars.pinSpacing !== !1 &&
                                                        (Di._subPinOffset = !0);
                                                }),
                                            oe && xe(Zt)),
                                        oe &&
                                            ((Je = {
                                                top: De.top + (jt ? ki - we : Xn) + yt,
                                                left: De.left + (jt ? Xn : ki - we) + yt,
                                                boxSizing: "border-box",
                                                position: "fixed",
                                            }),
                                            (Je[wn] = Je["max" + Wn] = Math.ceil(De.width) + yt),
                                            (Je[Tn] = Je["max" + Co] = Math.ceil(De.height) + yt),
                                            (Je[ai] = Je[ai + br] = Je[ai + yr] = Je[ai + vr] = Je[ai + _r] = "0"),
                                            (Je[et] = Oe[et]),
                                            (Je[et + br] = Oe[et + br]),
                                            (Je[et + yr] = Oe[et + yr]),
                                            (Je[et + vr] = Oe[et + vr]),
                                            (Je[et + _r] = Oe[et + _r]),
                                            (Jt = Ou(at, Je, R)),
                                            bi && xe(0)),
                                        n
                                            ? ((Gn = n._initted),
                                              uo(1),
                                              n.render(n.duration(), !0, !0),
                                              (Ue = ui(H.a) - dt + Le + Re),
                                              (hi = Math.abs(Le - Ue) > 1),
                                              oe && hi && Jt.splice(Jt.length - 2, 2),
                                              n.render(0, !0, !0),
                                              Gn || n.invalidate(!0),
                                              n.parent || n.totalTime(n.totalTime()),
                                              uo(0))
                                            : (Ue = Le),
                                        Yt &&
                                            (Yt.value
                                                ? (Yt.style["overflow" + H.a.toUpperCase()] = Yt.value)
                                                : Yt.style.removeProperty("overflow-" + H.a));
                                else if (b && xe() && !L)
                                    for (De = b.parentNode; De && De !== Ke; )
                                        De._pinOffset && ((we -= De._pinOffset), (He -= De._pinOffset)),
                                            (De = De.parentNode);
                                ln &&
                                    ln.forEach(function (Di) {
                                        return Di.revert(!1, !0);
                                    }),
                                    (C.start = we),
                                    (C.end = He),
                                    (bt = ve = bi ? Zt : xe()),
                                    !L && !bi && (bt < Zt && xe(Zt), (C.scroll.rec = 0)),
                                    C.revert(!1, !0),
                                    Ft && ((ie = -1), C.isActive && xe(we + Le * Ht), Ft.restart(!0)),
                                    (xt = 0),
                                    n &&
                                        W &&
                                        (n._initted || Oi) &&
                                        n.progress() !== Oi &&
                                        n.progress(Oi, !0).render(n.time(), !0, !0),
                                    (Ht !== C.progress || L) &&
                                        (n && !W && n.totalProgress(Ht, !0),
                                        (C.progress = (bt - we) / Le === Ht ? 0 : Ht)),
                                    _ && k && (ut._pinOffset = Math.round(C.progress * Ue)),
                                    y && !bi && y(C);
                            }
                        }),
                        (C.getVelocity = function () {
                            return ((xe() - ve) / (Nt() - ns)) * 1e3 || 0;
                        }),
                        (C.endAnimation = function () {
                            fr(C.callbackAnimation),
                                n &&
                                    (Z
                                        ? Z.progress(1)
                                        : n.paused()
                                          ? W || fr(n, C.direction < 0, 1)
                                          : fr(n, n.reversed()));
                        }),
                        (C.labelToScroll = function (V) {
                            return (
                                (n && n.labels && (we || C.refresh() || we) + (n.labels[V] / n.duration()) * Le) || 0
                            );
                        }),
                        (C.getTrailing = function (V) {
                            var Q = he.indexOf(C),
                                J = C.direction > 0 ? he.slice(0, Q).reverse() : he.slice(Q + 1);
                            return (
                                _i(V)
                                    ? J.filter(function (ee) {
                                          return ee.vars.preventOverlaps === V;
                                      })
                                    : J
                            ).filter(function (ee) {
                                return C.direction > 0 ? ee.end <= we : ee.start >= He;
                            });
                        }),
                        (C.update = function (V, Q, J) {
                            if (!(L && !J && !V)) {
                                var ee = bi ? Zt : C.scroll(),
                                    tt = V ? 0 : (ee - we) / Le,
                                    le = tt < 0 ? 0 : tt > 1 ? 1 : tt || 0,
                                    Re = C.progress,
                                    Ie,
                                    je,
                                    Se,
                                    re,
                                    Ut,
                                    Fe,
                                    Oe,
                                    De;
                                if (
                                    (Q &&
                                        ((ve = bt),
                                        (bt = L ? xe() : ee),
                                        M && ((Ti = Mi), (Mi = n && !W ? n.totalProgress() : le))),
                                    P &&
                                        !le &&
                                        _ &&
                                        !xt &&
                                        !Xr &&
                                        li &&
                                        we < ee + ((ee - ve) / (Nt() - ns)) * P &&
                                        (le = 1e-4),
                                    le !== Re && C.enabled)
                                ) {
                                    if (
                                        ((Ie = C.isActive = !!le && le < 1),
                                        (je = !!Re && Re < 1),
                                        (Fe = Ie !== je),
                                        (Ut = Fe || !!le != !!Re),
                                        (C.direction = le > Re ? 1 : -1),
                                        (C.progress = le),
                                        Ut &&
                                            !xt &&
                                            ((Se = le && !Re ? 0 : le === 1 ? 1 : Re === 1 ? 2 : 3),
                                            W &&
                                                ((re = (!Fe && q[Se + 1] !== "none" && q[Se + 1]) || q[Se]),
                                                (De = n && (re === "complete" || re === "reset" || re in n)))),
                                        f &&
                                            (Fe || De) &&
                                            (De || T || !n) &&
                                            (Rt(f)
                                                ? f(C)
                                                : C.getTrailing(f).forEach(function (Pe) {
                                                      return Pe.endAnimation();
                                                  })),
                                        W ||
                                            (Z && !xt && !Xr
                                                ? (Z._dp._time - Z._start !== Z._time &&
                                                      Z.render(Z._dp._time - Z._start),
                                                  Z.resetTo
                                                      ? Z.resetTo("totalProgress", le, n._tTime / n._tDur)
                                                      : ((Z.vars.totalProgress = le), Z.invalidate().restart()))
                                                : n && n.totalProgress(le, !!xt)),
                                        _)
                                    ) {
                                        if ((V && k && (ut.style[k + H.os2] = ji), !oe)) Me(pr(dt + Ue * le));
                                        else if (Ut) {
                                            if (((Oe = !V && le > Re && He + 1 > ee && ee + 1 >= on(U, H)), R))
                                                if (!V && (Ie || Oe)) {
                                                    var ki = Hi(_, !0),
                                                        jt = ee - we;
                                                    ol(
                                                        _,
                                                        Ke,
                                                        ki.top + (H === rt ? jt : 0) + yt,
                                                        ki.left + (H === rt ? 0 : jt) + yt
                                                    );
                                                } else ol(_, ut);
                                            Yn(Ie || Oe ? Jt : Ai),
                                                (hi && le < 1 && Ie) || Me(dt + (le === 1 && !Oe ? Ue : 0));
                                        }
                                    }
                                    M && !$e.tween && !xt && !Xr && Ft.restart(!0),
                                        c &&
                                            (Fe || (D && le && (le < 1 || !ho))) &&
                                            hs(c.targets).forEach(function (Pe) {
                                                return Pe.classList[Ie || D ? "add" : "remove"](c.className);
                                            }),
                                        a && !W && !V && a(C),
                                        Ut && !xt
                                            ? (W &&
                                                  (De &&
                                                      (re === "complete"
                                                          ? n.pause().totalProgress(1)
                                                          : re === "reset"
                                                            ? n.restart(!0).pause()
                                                            : re === "restart"
                                                              ? n.restart(!0)
                                                              : n[re]()),
                                                  a && a(C)),
                                              (Fe || !ho) &&
                                                  (g && Fe && po(C, g),
                                                  K[Se] && po(C, K[Se]),
                                                  D && (le === 1 ? C.kill(!1, 1) : (K[Se] = 0)),
                                                  Fe || ((Se = le === 1 ? 1 : 3), K[Se] && po(C, K[Se]))),
                                              F &&
                                                  !Ie &&
                                                  Math.abs(C.getVelocity()) > (mr(F) ? F : 2500) &&
                                                  (fr(C.callbackAnimation),
                                                  Z ? Z.progress(1) : fr(n, re === "reverse" ? 1 : !le, 1)))
                                            : W && a && !xt && a(C);
                                }
                                if (di) {
                                    var Je = L ? (ee / L.duration()) * (L._caScrollDist || 0) : ee;
                                    It(Je + (ot._isFlipped ? 1 : 0)), di(Je);
                                }
                                fi && fi((-ee / L.duration()) * (L._caScrollDist || 0));
                            }
                        }),
                        (C.enable = function (V, Q) {
                            C.enabled ||
                                ((C.enabled = !0),
                                _t(U, "resize", gr),
                                _t(X ? Be : U, "scroll", $n),
                                ze && _t(l, "refreshInit", ze),
                                V !== !1 && ((C.progress = Ht = 0), (bt = ve = ie = xe())),
                                Q !== !1 && C.refresh());
                        }),
                        (C.getTween = function (V) {
                            return V && $e ? $e.tween : Z;
                        }),
                        (C.setPositions = function (V, Q) {
                            _ && ((dt += V - we), (Ue += Q - V - Le), k === et && C.adjustPinSpacing(Q - V - Le)),
                                (C.start = we = V),
                                (C.end = He = Q),
                                (Le = Q - V),
                                C.update();
                        }),
                        (C.adjustPinSpacing = function (V) {
                            if (Ne) {
                                var Q = Ne.indexOf(H.d) + 1;
                                (Ne[Q] = parseFloat(Ne[Q]) + V + yt), (Ne[1] = parseFloat(Ne[1]) + V + yt), Yn(Ne);
                            }
                        }),
                        (C.disable = function (V, Q) {
                            if (
                                C.enabled &&
                                (V !== !1 && C.revert(!0, !0),
                                (C.enabled = C.isActive = !1),
                                Q || (Z && Z.pause()),
                                (Zt = 0),
                                ge && (ge.uncache = 1),
                                ze && ht(l, "refreshInit", ze),
                                Ft && (Ft.pause(), $e.tween && $e.tween.kill() && ($e.tween = 0)),
                                !X)
                            ) {
                                for (var J = he.length; J--; ) if (he[J].scroller === U && he[J] !== C) return;
                                ht(U, "resize", gr), ht(U, "scroll", $n);
                            }
                        }),
                        (C.kill = function (V, Q) {
                            C.disable(V, Q), Z && !Q && Z.kill(), d && delete wo[d];
                            var J = he.indexOf(C);
                            J >= 0 && he.splice(J, 1),
                                J === Lt && as > 0 && Lt--,
                                (J = 0),
                                he.forEach(function (ee) {
                                    return ee.scroller === C.scroller && (J = 1);
                                }),
                                J || bi || (C.scroll.rec = 0),
                                n && ((n.scrollTrigger = null), V && n.revert({ kill: !1 }), Q || n.kill()),
                                ne &&
                                    [ne, St, ot, S].forEach(function (ee) {
                                        return ee.parentNode && ee.parentNode.removeChild(ee);
                                    }),
                                wr === C && (wr = 0),
                                _ &&
                                    (ge && (ge.uncache = 1),
                                    (J = 0),
                                    he.forEach(function (ee) {
                                        return ee.pin === _ && J++;
                                    }),
                                    J || (ge.spacer = 0)),
                                t.onKill && t.onKill(C);
                        }),
                        C.enable(!1, !1),
                        B && B(C),
                        !n || !n.add || Le
                            ? C.refresh()
                            : G.delayedCall(0.01, function () {
                                  return we || He || C.refresh();
                              }) &&
                              (Le = 0.01) &&
                              (we = He = 0),
                        _ && Eu();
                }),
                (l.register = function (t) {
                    return Hn || ((G = t || _l()), yl() && window.document && l.enable(), (Hn = Gr)), Hn;
                }),
                (l.defaults = function (t) {
                    if (t) for (var n in t) Zr[n] = t[n];
                    return Zr;
                }),
                (l.disable = function (t, n) {
                    (Gr = 0),
                        he.forEach(function (a) {
                            return a[n ? "kill" : "disable"](t);
                        }),
                        ht(_e, "wheel", $n),
                        ht(Be, "scroll", $n),
                        clearInterval(Wr),
                        ht(Be, "touchcancel", Pi),
                        ht(Ke, "touchstart", Pi),
                        Qr(ht, Be, "pointerdown,touchstart,mousedown", Ja),
                        Qr(ht, Be, "pointerup,touchend,mouseup", Za),
                        us.kill(),
                        Kr(ht);
                    for (var s = 0; s < ue.length; s += 3) Jr(ht, ue[s], ue[s + 1]), Jr(ht, ue[s], ue[s + 2]);
                }),
                (l.enable = function () {
                    if (
                        ((_e = window),
                        (Be = document),
                        (vi = Be.documentElement),
                        (Ke = Be.body),
                        G &&
                            ((hs = G.utils.toArray),
                            (jn = G.utils.clamp),
                            (bo = G.core.context || Pi),
                            (uo = G.core.suppressOverwrites || Pi),
                            (ko = _e.history.scrollRestoration || "auto"),
                            G.core.globals("ScrollTrigger", l),
                            Ke))
                    ) {
                        (Gr = 1),
                            Ze.register(G),
                            (l.isTouch = Ze.isTouch),
                            (sn = Ze.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                            _t(_e, "wheel", $n),
                            (hl = [_e, Be, vi, Ke]),
                            G.matchMedia
                                ? ((l.matchMedia = function (d) {
                                      var g = G.matchMedia(),
                                          y;
                                      for (y in d) g.add(y, d[y]);
                                      return g;
                                  }),
                                  G.addEventListener("matchMediaInit", function () {
                                      return Eo();
                                  }),
                                  G.addEventListener("matchMediaRevert", function () {
                                      return xl();
                                  }),
                                  G.addEventListener("matchMedia", function () {
                                      vn(0, 1), Cn("matchMedia");
                                  }),
                                  G.matchMedia("(orientation: portrait)", function () {
                                      return mo(), mo;
                                  }))
                                : console.warn("Requires GSAP 3.11.0 or later"),
                            mo(),
                            _t(Be, "scroll", $n);
                        var t = Ke.style,
                            n = t.borderTopStyle,
                            s = G.core.Animation.prototype,
                            a,
                            c;
                        for (
                            s.revert ||
                                Object.defineProperty(s, "revert", {
                                    value: function () {
                                        return this.time(-0.01, !0);
                                    },
                                }),
                                t.borderTopStyle = "solid",
                                a = Hi(Ke),
                                rt.m = Math.round(a.top + rt.sc()) || 0,
                                kt.m = Math.round(a.left + kt.sc()) || 0,
                                n ? (t.borderTopStyle = n) : t.removeProperty("border-top-style"),
                                Wr = setInterval(il, 250),
                                G.delayedCall(0.5, function () {
                                    return (Xr = 0);
                                }),
                                _t(Be, "touchcancel", Pi),
                                _t(Ke, "touchstart", Pi),
                                Qr(_t, Be, "pointerdown,touchstart,mousedown", Ja),
                                Qr(_t, Be, "pointerup,touchend,mouseup", Za),
                                _o = G.utils.checkPrefix("transform"),
                                ls.push(_o),
                                Hn = Nt(),
                                us = G.delayedCall(0.2, vn).pause(),
                                Un = [
                                    Be,
                                    "visibilitychange",
                                    function () {
                                        var d = _e.innerWidth,
                                            g = _e.innerHeight;
                                        Be.hidden ? ((Ka = d), (Qa = g)) : (Ka !== d || Qa !== g) && gr();
                                    },
                                    Be,
                                    "DOMContentLoaded",
                                    vn,
                                    _e,
                                    "load",
                                    vn,
                                    _e,
                                    "resize",
                                    gr,
                                ],
                                Kr(_t),
                                he.forEach(function (d) {
                                    return d.enable(0, 1);
                                }),
                                c = 0;
                            c < ue.length;
                            c += 3
                        )
                            Jr(ht, ue[c], ue[c + 1]), Jr(ht, ue[c], ue[c + 2]);
                    }
                }),
                (l.config = function (t) {
                    "limitCallbacks" in t && (ho = !!t.limitCallbacks);
                    var n = t.syncInterval;
                    (n && clearInterval(Wr)) || ((Wr = n) && setInterval(il, n)),
                        "ignoreMobileResize" in t && (pl = l.isTouch === 1 && t.ignoreMobileResize),
                        "autoRefreshEvents" in t &&
                            (Kr(ht) || Kr(_t, t.autoRefreshEvents || "none"),
                            (fl = (t.autoRefreshEvents + "").indexOf("resize") === -1));
                }),
                (l.scrollerProxy = function (t, n) {
                    var s = Dt(t),
                        a = ue.indexOf(s),
                        c = xn(s);
                    ~a && ue.splice(a, c ? 6 : 2), n && (c ? yi.unshift(_e, n, Ke, n, vi, n) : yi.unshift(s, n));
                }),
                (l.clearMatchMedia = function (t) {
                    he.forEach(function (n) {
                        return n._ctx && n._ctx.query === t && n._ctx.kill(!0, !0);
                    });
                }),
                (l.isInViewport = function (t, n, s) {
                    var a = (_i(t) ? Dt(t) : t).getBoundingClientRect(),
                        c = a[s ? wn : Tn] * n || 0;
                    return s
                        ? a.right - c > 0 && a.left + c < _e.innerWidth
                        : a.bottom - c > 0 && a.top + c < _e.innerHeight;
                }),
                (l.positionInViewport = function (t, n, s) {
                    _i(t) && (t = Dt(t));
                    var a = t.getBoundingClientRect(),
                        c = a[s ? wn : Tn],
                        d =
                            n == null
                                ? c / 2
                                : n in ds
                                  ? ds[n] * c
                                  : ~n.indexOf("%")
                                    ? (parseFloat(n) * c) / 100
                                    : parseFloat(n) || 0;
                    return s ? (a.left + d) / _e.innerWidth : (a.top + d) / _e.innerHeight;
                }),
                (l.killAll = function (t) {
                    if (
                        (he.slice(0).forEach(function (s) {
                            return s.vars.id !== "ScrollSmoother" && s.kill();
                        }),
                        t !== !0)
                    ) {
                        var n = Sn.killAll || [];
                        (Sn = {}),
                            n.forEach(function (s) {
                                return s();
                            });
                    }
                }),
                l
            );
        })();
    me.version = "3.11.4";
    me.saveStyles = function (l) {
        return l
            ? hs(l).forEach(function (e) {
                  if (e && e.style) {
                      var i = Qt.indexOf(e);
                      i >= 0 && Qt.splice(i, 5),
                          Qt.push(
                              e,
                              e.style.cssText,
                              e.getBBox && e.getAttribute("transform"),
                              G.core.getCache(e),
                              bo()
                          );
                  }
              })
            : Qt;
    };
    me.revert = function (l, e) {
        return Eo(!l, e);
    };
    me.create = function (l, e) {
        return new me(l, e);
    };
    me.refresh = function (l) {
        return l ? gr() : (Hn || me.register()) && vn(!0);
    };
    me.update = function (l) {
        return ++ue.cache && an(l === !0 ? 2 : 0);
    };
    me.clearScrollMemory = Sl;
    me.maxScroll = function (l, e) {
        return on(l, e ? kt : rt);
    };
    me.getScrollFunc = function (l, e) {
        return Vi(Dt(l), e ? kt : rt);
    };
    me.getById = function (l) {
        return wo[l];
    };
    me.getAll = function () {
        return he.filter(function (l) {
            return l.vars.id !== "ScrollSmoother";
        });
    };
    me.isScrolling = function () {
        return !!li;
    };
    me.snapDirectional = Po;
    me.addEventListener = function (l, e) {
        var i = Sn[l] || (Sn[l] = []);
        ~i.indexOf(e) || i.push(e);
    };
    me.removeEventListener = function (l, e) {
        var i = Sn[l],
            t = i && i.indexOf(e);
        t >= 0 && i.splice(t, 1);
    };
    me.batch = function (l, e) {
        var i = [],
            t = {},
            n = e.interval || 0.016,
            s = e.batchMax || 1e9,
            a = function (g, y) {
                var T = [],
                    b = [],
                    _ = G.delayedCall(n, function () {
                        y(T, b), (T = []), (b = []);
                    }).pause();
                return function (k) {
                    T.length || _.restart(!0), T.push(k.trigger), b.push(k), s <= T.length && _.progress(1);
                };
            },
            c;
        for (c in e) t[c] = c.substr(0, 2) === "on" && Rt(e[c]) && c !== "onRefreshInit" ? a(c, e[c]) : e[c];
        return (
            Rt(s) &&
                ((s = s()),
                _t(me, "refresh", function () {
                    return (s = e.batchMax());
                })),
            hs(l).forEach(function (d) {
                var g = {};
                for (c in t) g[c] = t[c];
                (g.trigger = d), i.push(me.create(g));
            }),
            i
        );
    };
    var ll = function (e, i, t, n) {
            return i > n ? e(n) : i < 0 && e(0), t > n ? (n - i) / (t - i) : t < 0 ? i / (i - t) : 1;
        },
        yo = function l(e, i) {
            i === !0
                ? e.style.removeProperty("touch-action")
                : (e.style.touchAction =
                      i === !0 ? "auto" : i ? "pan-" + i + (Ze.isTouch ? " pinch-zoom" : "") : "none"),
                e === vi && l(Ke, i);
        },
        is = { auto: 1, scroll: 1 },
        Lu = function (e) {
            var i = e.event,
                t = e.target,
                n = e.axis,
                s = (i.changedTouches ? i.changedTouches[0] : i).target,
                a = s._gsap || G.core.getCache(s),
                c = Nt(),
                d;
            if (!a._isScrollT || c - a._isScrollT > 2e3) {
                for (
                    ;
                    s &&
                    s !== Ke &&
                    ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
                        !(is[(d = wi(s)).overflowY] || is[d.overflowX]));

                )
                    s = s.parentNode;
                (a._isScroll = s && s !== t && !xn(s) && (is[(d = wi(s)).overflowY] || is[d.overflowX])),
                    (a._isScrollT = c);
            }
            (a._isScroll || n === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
        },
        Cl = function (e, i, t, n) {
            return Ze.create({
                target: e,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: i,
                onWheel: (n = n && Lu),
                onPress: n,
                onDrag: n,
                onScroll: n,
                onEnable: function () {
                    return t && _t(Be, Ze.eventTypes[0], ul, !1, !0);
                },
                onDisable: function () {
                    return ht(Be, Ze.eventTypes[0], ul, !0);
                },
            });
        },
        Nu = /(input|label|select|textarea)/i,
        cl,
        ul = function (e) {
            var i = Nu.test(e.target.tagName);
            (i || cl) && ((e._gsapAllow = !0), (cl = i));
        },
        Ru = function (e) {
            rs(e) || (e = {}),
                (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
                e.type || (e.type = "wheel,touch"),
                (e.debounce = !!e.debounce),
                (e.id = e.id || "normalizer");
            var i = e,
                t = i.normalizeScrollX,
                n = i.momentum,
                s = i.allowNestedScroll,
                a,
                c,
                d = Dt(e.target) || vi,
                g = G.core.globals().ScrollSmoother,
                y = g && g.get(),
                T = sn && ((e.content && Dt(e.content)) || (y && e.content !== !1 && !y.smooth() && y.content())),
                b = Vi(d, rt),
                _ = Vi(d, kt),
                k = 1,
                w =
                    (Ze.isTouch && _e.visualViewport
                        ? _e.visualViewport.scale * _e.visualViewport.width
                        : _e.outerWidth) / _e.innerWidth,
                P = 0,
                A = Rt(n)
                    ? function () {
                          return n(a);
                      }
                    : function () {
                          return n || 2.8;
                      },
                O,
                D,
                M = Cl(d, e.type, !0, s),
                R = function () {
                    return (D = !1);
                },
                I = Pi,
                L = Pi,
                F = function () {
                    (c = on(d, rt)), (L = jn(sn ? 1 : 0, c)), t && (I = jn(0, on(d, kt))), (O = kn);
                },
                f = function () {
                    (T._gsap.y = pr(parseFloat(T._gsap.y) + b.offset) + "px"),
                        (T.style.transform =
                            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(T._gsap.y) + ", 0, 1)"),
                        (b.offset = b.cacheID = 0);
                },
                H = function () {
                    if (D) {
                        requestAnimationFrame(R);
                        var q = pr(a.deltaY / 2),
                            ae = L(b.v - q);
                        if (T && ae !== b.v + b.offset) {
                            b.offset = ae - b.v;
                            var de = pr((parseFloat(T && T._gsap.y) || 0) - b.offset);
                            (T.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + de + ", 0, 1)"),
                                (T._gsap.y = de + "px"),
                                (b.cacheID = ue.cache),
                                an();
                        }
                        return !0;
                    }
                    b.offset && f(), (D = !0);
                },
                W,
                U,
                be,
                X,
                oe = function () {
                    F(),
                        W.isActive() &&
                            W.vars.scrollY > c &&
                            (b() > c ? W.progress(1) && b(c) : W.resetTo("scrollY", c));
                };
            return (
                T && G.set(T, { y: "+=0" }),
                (e.ignoreCheck = function (K) {
                    return (
                        (sn && K.type === "touchmove" && H(K)) ||
                        (k > 1.05 && K.type !== "touchstart") ||
                        a.isGesturing ||
                        (K.touches && K.touches.length > 1)
                    );
                }),
                (e.onPress = function () {
                    var K = k;
                    (k = pr(((_e.visualViewport && _e.visualViewport.scale) || 1) / w)),
                        W.pause(),
                        K !== k && yo(d, k > 1.01 ? !0 : t ? !1 : "x"),
                        (U = _()),
                        (be = b()),
                        F(),
                        (O = kn);
                }),
                (e.onRelease = e.onGestureStart =
                    function (K, q) {
                        if ((b.offset && f(), !q)) X.restart(!0);
                        else {
                            ue.cache++;
                            var ae = A(),
                                de,
                                C;
                            t &&
                                ((de = _()),
                                (C = de + (ae * 0.05 * -K.velocityX) / 0.227),
                                (ae *= ll(_, de, C, on(d, kt))),
                                (W.vars.scrollX = I(C))),
                                (de = b()),
                                (C = de + (ae * 0.05 * -K.velocityY) / 0.227),
                                (ae *= ll(b, de, C, on(d, rt))),
                                (W.vars.scrollY = L(C)),
                                W.invalidate().duration(ae).play(0.01),
                                ((sn && W.vars.scrollY >= c) || de >= c - 1) &&
                                    G.to({}, { onUpdate: oe, duration: ae });
                        }
                    }),
                (e.onWheel = function () {
                    W._ts && W.pause(), Nt() - P > 1e3 && ((O = 0), (P = Nt()));
                }),
                (e.onChange = function (K, q, ae, de, C) {
                    if ((kn !== O && F(), q && t && _(I(de[2] === q ? U + (K.startX - K.x) : _() + q - de[1])), ae)) {
                        b.offset && f();
                        var ze = C[2] === ae,
                            Ce = ze ? be + K.startY - K.y : b() + ae - C[1],
                            st = L(Ce);
                        ze && Ce !== st && (be += st - Ce), b(st);
                    }
                    (ae || q) && an();
                }),
                (e.onEnable = function () {
                    yo(d, t ? !1 : "x"),
                        me.addEventListener("refresh", oe),
                        _t(_e, "resize", oe),
                        b.smooth && ((b.target.style.scrollBehavior = "auto"), (b.smooth = _.smooth = !1)),
                        M.enable();
                }),
                (e.onDisable = function () {
                    yo(d, !0), ht(_e, "resize", oe), me.removeEventListener("refresh", oe), M.kill();
                }),
                (e.lockAxis = e.lockAxis !== !1),
                (a = new Ze(e)),
                (a.iOS = sn),
                sn && !b() && b(1),
                sn && G.ticker.add(Pi),
                (X = a._dc),
                (W = G.to(a, {
                    ease: "power4",
                    paused: !0,
                    scrollX: t ? "+=0.1" : "+=0",
                    scrollY: "+=0.1",
                    onComplete: X.vars.onComplete,
                })),
                a
            );
        };
    me.sort = function (l) {
        return he.sort(
            l ||
                function (e, i) {
                    return (
                        (e.vars.refreshPriority || 0) * -1e6 +
                        e.start -
                        (i.start + (i.vars.refreshPriority || 0) * -1e6)
                    );
                }
        );
    };
    me.observe = function (l) {
        return new Ze(l);
    };
    me.normalizeScroll = function (l) {
        if (typeof l == "undefined") return Kt;
        if (l === !0 && Kt) return Kt.enable();
        if (l === !1) return Kt && Kt.kill();
        var e = l instanceof Ze ? l : Ru(l);
        return Kt && Kt.target === e.target && Kt.kill(), xn(e.target) && (Kt = e), e;
    };
    me.core = {
        _getVelocityProp: Yr,
        _inputObserver: Cl,
        _scrollers: ue,
        _proxies: yi,
        bridge: {
            ss: function () {
                li || Cn("scrollStart"), (li = Nt());
            },
            ref: function () {
                return xt;
            },
        },
    };
    _l() && G.registerPlugin(me);
    Mt.registerPlugin(me);
    var Iu = "(max-width: 767px)",
        Fu = Mt.matchMedia();
    Fu.add(Iu, () => {
        let l = document.querySelector("#vbrd-nav"),
            e = document.getElementById("vbrd-nav-trigger"),
            i = document.getElementById("vbrd-nav-trigger-icon"),
            t = document.getElementById("vbrd-nav-navbar"),
            n = document.getElementById("vbrd-nav-bg"),
            s = l.querySelector(".vbrd-nav_link-list"),
            a = 0.6,
            c = "Power4.easeInOut",
            d = Mt.timeline({ paused: !0, reversed: !0 });
        function g() {
            (document.getElementsByTagName("body")[0].style.overflow = "hidden"),
                e.setAttribute("aria-expanded", "true");
        }
        function y() {
            (document.getElementsByTagName("body")[0].style.overflow = "visible"),
                e.setAttribute("aria-expanded", "false");
        }
        d.fromTo(t, { height: 0 }, { height: "auto", ease: c, duration: a }),
            d.fromTo(s, { autoAlpha: 0 }, { autoAlpha: 1, ease: c, duration: a }, "<"),
            d.fromTo(i, { rotation: 0 }, { rotation: 45, ease: c, duration: a }, "<"),
            d.fromTo(n, { autoAlpha: 0 }, { autoAlpha: 1, ease: c, duration: a }, "<"),
            e.addEventListener("click", function () {
                d.reversed() ? (d.play(), g()) : (d.reverse(), y());
            }),
            document.addEventListener("click", function (T) {
                l.contains(T.target) || (d.reversed(!1) && (d.reverse(), y()));
            });
    });
    var Lo = zl(Pl(), 1);
    document.addEventListener("DOMContentLoaded", function () {
        let l = new Map(),
            e = localStorage.getItem("showVideos"),
            i = document.querySelectorAll('[video-component="placeholder"]'),
            t = Array.from(document.querySelectorAll('[video-component="container"]'));
        t.forEach(function (n, s) {
            n.querySelector('[video-component="placeholder"]') || Ml(n, l, s);
        }),
            e
                ? (Oo(t, l), Do(i))
                : document.querySelectorAll('[video-component="load-video"]').forEach(function (n) {
                      n.addEventListener("click", function () {
                          localStorage.setItem("showVideos", !0),
                              Oo(t, l),
                              i.forEach((c) => {
                                  c.style.position = "absolute";
                              }),
                              Do(i);
                          let s = n.closest('[video-component="container"]'),
                              a = t.indexOf(s);
                          El(l, a);
                      }),
                          n.addEventListener("keydown", function (s) {
                              if (s.key === "Enter") {
                                  localStorage.setItem("showVideos", !0),
                                      Oo(t, l),
                                      i.forEach((d) => {
                                          d.style.position = "absolute";
                                      }),
                                      Do(i);
                                  let a = n.closest('[video-component="container"]'),
                                      c = t.indexOf(a);
                                  El(l, c);
                              }
                          });
                  });
    });
    function Oo(l, e) {
        l.forEach(function (i, t) {
            Ml(i, e, t);
        });
    }
    function Ml(l, e, i) {
        let t = l.querySelector('[video-component="player"]');
        if (t && t.hasAttribute("data-plyr-provider")) {
            let n = t.getAttribute("data-plyr-provider"),
                s = t.getAttribute("data-plyr-embed-id"),
                a = new Lo.default(t, {
                    controls: ["play-large", "play", "progress", "current-time", "volume", "fullscreen"],
                    settings: ["captions", "quality"],
                    youtube: {
                        noCookie: !0,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        modestbranding: 1,
                        autoplay: 0,
                        playsinline: 0,
                        controls: 0,
                    },
                });
            (a.source = { type: "video", sources: [{ src: s, provider: n }] }), e.set(i, a);
        } else if (t) {
            let n = new Lo.default(t, {
                controls: ["play-large", "play", "progress", "current-time", "volume", "fullscreen"],
                settings: ["captions", "quality"],
            });
            e.set(i, n);
        }
    }
    function El(l, e) {
        let i = l.get(e);
        i.on("ready", function () {
            i.play();
        });
    }
    function Do(l) {
        l.forEach(function (e) {
            e.style.display = "none";
        });
    }
    function Bu() {
        let l = localStorage.getItem("showVideos"),
            e = document.querySelectorAll('[trigger="delete-local-storage"]');
        e.forEach((t) => {
            t.addEventListener("click", () => {
                localStorage.removeItem("showVideos"), location.reload();
            });
        });
        function i(t) {
            t.forEach((n) => {
                n.classList.add("show");
            });
        }
        document.querySelectorAll('[video-component="load-video"]').forEach(function (t) {
            t.addEventListener("click", function () {
                i(e);
            });
        }),
            l && i(e);
    }
    Bu();
    var zu = document.querySelectorAll('[magnetic-button="wrap"]'),
        Al = 1,
        qu = 0.4,
        kr = 2;
    zu.forEach((l) => {
        let e = l.querySelector('[magnetic-button="button"]'),
            i = l.querySelector('[magnetic-button="area"]'),
            t,
            n,
            s = { x: 0, y: 0 },
            a = () => {
                Mt.killTweensOf(e), Mt.set(i, { scale: kr, background: "transparent" }), g();
            },
            c = () => {
                Mt.killTweensOf(e),
                    Mt.to(e, { x: 0, y: 0, ease: "Power3.easeOut", duration: 1.2 }),
                    Mt.set(i, { scale: 1 });
            },
            d = (y) => {
                let T = y.clientX,
                    b = y.clientY,
                    _ = ((t.width - n.width) / 2) * Al,
                    k = ((t.height - n.height) / 2) * Al,
                    w = Mt.utils.mapRange(0, t.width * kr, -_, _, T - t.x + s.x),
                    P = Mt.utils.mapRange(0, t.height * kr, -k, k, b - t.y + s.y);
                Mt.killTweensOf(e), Mt.to(e, { x: w, y: P, ease: "power3.out", duration: qu });
            },
            g = () => {
                (t = l.getBoundingClientRect()),
                    (n = e.getBoundingClientRect()),
                    (s.x = (t.width * kr - t.width) / 2),
                    (s.y = (t.height * kr - t.height) / 2);
            };
        l.addEventListener("mouseenter", a),
            l.addEventListener("mousemove", d),
            l.addEventListener("mouseleave", c),
            window.addEventListener("scroll", g);
    });
})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.11.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.11.4
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.11.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.11.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
