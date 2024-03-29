/* https://github.com/d3/d3-voronoi Copyright 2015 Mike Bostock */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.voronoi = {})
}(this, function (e) {
    "use strict";

    function t(e) {
        return function () {
            return e
        }
    }

    function n(e, t, n) {
        return (e.x - n.x) * (t.y - e.y) - (e.x - t.x) * (n.y - e.y)
    }

    function i(e, t) {
        return t.angle - e.angle
    }

    function r(e, t) {
        this.l = e, this.r = t, this.a = this.b = null
    }

    function s(e, t, n) {
        var i = new r(e, null);
        return i.a = t, i.b = n, D.push(i), i
    }

    function u(e, t, n) {
        this.edge = e, this.site = t, this.angle = n
    }

    function f(e, t, n) {
        var i = e.a, r = e.b;
        return new u(e, t, n ? Math.atan2(n.y - t.y, n.x - t.x) : e.l === t ? Math.atan2(r.x - i.x, i.y - r.y) : Math.atan2(i.x - r.x, r.y - i.y))
    }

    function a(e, t, n, i) {
        for (var r, u, a, l, o, c, h, y, x, v, g = B.length; g--;) if (o = B[g], o && o.prepare()) for (h = o.edges, y = h.length, c = 0; y > c;) v = h[c].end(), a = v.x, l = v.y, x = h[++c % y].start(), r = x.x, u = x.y, (Math.abs(a - r) > I || Math.abs(l - u) > I) && (h.splice(c, 0, f(s(o.site, v, Math.abs(a - e) < I && i - l > I ? {
            x: e,
            y: Math.abs(r - e) < I ? u : i
        } : Math.abs(l - i) < I && n - a > I ? {
            x: Math.abs(u - i) < I ? r : n,
            y: i
        } : Math.abs(a - n) < I && l - t > I ? {
            x: n,
            y: Math.abs(r - n) < I ? u : t
        } : Math.abs(l - t) < I && a - e > I ? {x: Math.abs(u - t) < I ? r : e, y: t} : null), o.site, null)), ++y)
    }

    function l(e, t, n, i, r) {
        var s, u = e.a, f = e.b, a = u.x, l = u.y, o = f.x, c = f.y, h = 0, y = 1, x = o - a, v = c - l;
        if (s = t - a, x || !(s > 0)) {
            if (s /= x, 0 > x) {
                if (h > s) return;
                y > s && (y = s)
            } else if (x > 0) {
                if (s > y) return;
                s > h && (h = s)
            }
            if (s = i - a, x || !(0 > s)) {
                if (s /= x, 0 > x) {
                    if (s > y) return;
                    s > h && (h = s)
                } else if (x > 0) {
                    if (h > s) return;
                    y > s && (y = s)
                }
                if (s = n - l, v || !(s > 0)) {
                    if (s /= v, 0 > v) {
                        if (h > s) return;
                        y > s && (y = s)
                    } else if (v > 0) {
                        if (s > y) return;
                        s > h && (h = s)
                    }
                    if (s = r - l, v || !(0 > s)) {
                        if (s /= v, 0 > v) {
                            if (s > y) return;
                            s > h && (h = s)
                        } else if (v > 0) {
                            if (h > s) return;
                            y > s && (y = s)
                        }
                        return h > 0 && (e.a = {x: a + h * x, y: l + h * v}), 1 > y && (e.b = {
                            x: a + y * x,
                            y: l + y * v
                        }), e
                    }
                }
            }
        }
    }

    function o(e, t, n, i, r) {
        var s = e.b;
        if (s) return !0;
        var u, f, a = e.a, l = e.l, o = e.r, c = l.x, h = l.y, y = o.x, x = o.y, v = (c + y) / 2, g = (h + x) / 2;
        if (x === h) {
            if (t > v || v >= i) return;
            if (c > y) {
                if (a) {
                    if (a.y >= r) return
                } else a = {x: v, y: n};
                s = {x: v, y: r}
            } else {
                if (a) {
                    if (a.y < n) return
                } else a = {x: v, y: r};
                s = {x: v, y: n}
            }
        } else if (u = (c - y) / (x - h), f = g - u * v, -1 > u || u > 1) if (c > y) {
            if (a) {
                if (a.y >= r) return
            } else a = {x: (n - f) / u, y: n};
            s = {x: (r - f) / u, y: r}
        } else {
            if (a) {
                if (a.y < n) return
            } else a = {x: (r - f) / u, y: r};
            s = {x: (n - f) / u, y: n}
        } else if (x > h) {
            if (a) {
                if (a.x >= i) return
            } else a = {x: t, y: u * t + f};
            s = {x: i, y: u * i + f}
        } else {
            if (a) {
                if (a.x < t) return
            } else a = {x: i, y: u * i + f};
            s = {x: t, y: u * t + f}
        }
        return e.a = a, e.b = s, !0
    }

    function c(e, t, n, i) {
        for (var r, s = D.length; s--;) r = D[s], (!o(r, e, t, n, i) || !l(r, e, t, n, i) || Math.abs(r.a.x - r.b.x) < I && Math.abs(r.a.y - r.b.y) < I) && (r.a = r.b = null, D.splice(s, 1))
    }

    function h(e) {
        e.U = e.C = e.L = e.R = e.P = e.N = null
    }

    function y(e) {
        var t = e.circle;
        t && (t.P || (J = t.N), F.remove(t), K.push(t), h(t), e.circle = null)
    }

    function x() {
        h(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function v(e) {
        var t = e.P, n = e.N;
        if (t && n) {
            var i = t.site, r = e.site, s = n.site;
            if (i !== s) {
                var u = r.x, f = r.y, a = i.x - u, l = i.y - f, o = s.x - u, c = s.y - f, h = 2 * (a * c - l * o);
                if (!(h >= -O)) {
                    var y = a * a + l * l, v = o * o + c * c, g = (c * y - l * v) / h, C = (a * v - o * y) / h,
                        c = C + f, d = K.pop() || new x;
                    d.arc = e, d.site = r, d.x = g + u, d.y = c + Math.sqrt(g * g + C * C), d.cy = c, e.circle = d;
                    for (var p = null, L = F._; L;) if (d.y < L.y || d.y === L.y && d.x <= L.x) {
                        if (!L.L) {
                            p = L.P;
                            break
                        }
                        L = L.L
                    } else {
                        if (!L.R) {
                            p = L;
                            break
                        }
                        L = L.R
                    }
                    F.insert(p, d), p || (J = d)
                }
            }
        }
    }

    function g(e, t, n, i) {
        e.a || e.b ? e.l === n ? e.b = i : e.a = i : (e.a = i, e.l = t, e.r = n)
    }

    function C(e, t, n, i) {
        var s = new r(e, t);
        return D.push(s), n && g(s, e, t, n), i && g(s, t, e, i), B[e.i].edges.push(f(s, e, t)), B[t.i].edges.push(f(s, t, e)), s
    }

    function d() {
        h(this), this.edge = this.site = this.circle = null
    }

    function p(e) {
        var t = Q.pop() || new d;
        return t.site = e, t
    }

    function L(e) {
        y(e), G.remove(e), Q.push(e), h(e)
    }

    function b(e) {
        var t = e.circle, n = t.x, i = t.cy, r = {x: n, y: i}, s = e.P, u = e.N, f = [e];
        L(e);
        for (var a = s; a.circle && Math.abs(n - a.circle.x) < I && Math.abs(i - a.circle.cy) < I;) s = a.P, f.unshift(a), L(a), a = s;
        f.unshift(a), y(a);
        for (var l = u; l.circle && Math.abs(n - l.circle.x) < I && Math.abs(i - l.circle.cy) < I;) u = l.N, f.push(l), L(l), l = u;
        f.push(l), y(l);
        var o, c = f.length;
        for (o = 1; c > o; ++o) l = f[o], a = f[o - 1], g(l.edge, a.site, l.site, r);
        a = f[0], l = f[c - 1], l.edge = C(a.site, l.site, null, r), v(a), v(l)
    }

    function R(e) {
        this.site = e, this.edges = []
    }

    function M(e) {
        return B[e.i] = new R(e)
    }

    function U(e, t) {
        var n = e.site, i = n.x, r = n.y, s = r - t;
        if (!s) return i;
        var u = e.P;
        if (!u) return -(1 / 0);
        n = u.site;
        var f = n.x, a = n.y, l = a - t;
        if (!l) return f;
        var o = f - i, c = 1 / s - 1 / l, h = o / l;
        return c ? (-h + Math.sqrt(h * h - 2 * c * (o * o / (-2 * l) - a + l / 2 + r - s / 2))) / c + i : (i + f) / 2
    }

    function N(e, t) {
        var n = e.N;
        if (n) return U(n, t);
        var i = e.site;
        return i.y === t ? i.x : 1 / 0
    }

    function P(e) {
        for (var t, n, i, r, s = e.x, u = e.y, f = G._; f;) if (i = U(f, u) - s, i > I) f = f.L; else {
            if (r = s - N(f, u), !(r > I)) {
                i > -I ? (t = f.P, n = f) : r > -I ? (t = f, n = f.N) : t = n = f;
                break
            }
            if (!f.R) {
                t = f;
                break
            }
            f = f.R
        }
        M(e);
        var a = p(e);
        if (G.insert(t, a), t || n) {
            if (t === n) return y(t), n = p(t.site), G.insert(a, n), a.edge = n.edge = C(t.site, a.site), v(t), void v(n);
            if (!n) return void (a.edge = C(t.site, a.site));
            y(t), y(n);
            var l = t.site, o = l.x, c = l.y, h = e.x - o, x = e.y - c, d = n.site, L = d.x - o, b = d.y - c,
                R = 2 * (h * b - x * L), P = h * h + x * x, _ = L * L + b * b,
                m = {x: (b * P - x * _) / R + o, y: (h * _ - L * P) / R + c};
            g(n.edge, l, d, m), a.edge = C(l, e, null, m), n.edge = C(e, d, null, m), v(t), v(n)
        }
    }

    function _() {
        this._ = null
    }

    function m(e, t) {
        var n = t, i = t.L, r = n.U;
        r ? r.L === n ? r.L = i : r.R = i : e._ = i, i.U = r, n.U = i, n.L = i.R, n.L && (n.L.U = n), i.R = n
    }

    function w(e, t) {
        var n = t, i = t.R, r = n.U;
        r ? r.L === n ? r.L = i : r.R = i : e._ = i, i.U = r, n.U = i, n.R = i.L, n.R && (n.R.U = n), i.L = n
    }

    function k(e) {
        for (; e.L;) e = e.L;
        return e
    }

    function q(e, t) {
        return t.y - e.y || t.x - e.x
    }

    function A(e, t) {
        var n, i, r, s = e.sort(q).pop();
        for (D = [], B = new Array(e.length), G = new _, F = new _; ;) if (r = J, s && (!r || s.y < r.y || s.y === r.y && s.x < r.x)) (s.x !== n || s.y !== i) && (P(s), n = s.x, i = s.y), s = e.pop(); else {
            if (!r) break;
            b(r.arc)
        }
        if (t) {
            var n = t[0][0], i = t[0][1], u = t[1][0], f = t[1][1];
            c(n, i, u, f), a(n, i, u, f)
        }
        var l = {cells: B, edges: D};
        return G = F = D = B = null, l
    }

    function E(e) {
        return e[1]
    }

    function j(e) {
        return e[0]
    }

    function z() {
        function e(e) {
            var t = new Array(e.length), n = l[0][0], i = l[0][1], s = l[1][0], u = l[1][1];
            return A(r(e), l).cells.forEach(function (r, f) {
                var a = r.edges, l = r.site, o = t[f] = a.length ? a.map(function (e) {
                    var t = e.start();
                    return [t.x, t.y]
                }) : l.x >= n && l.x <= s && l.y >= i && l.y <= u ? [[n, u], [s, u], [s, i], [n, i]] : [];
                o.point = e[f]
            }), t
        }

        function r(e) {
            return e.map(function (e, t) {
                return {x: Math.round(f(e, t) / I) * I, y: Math.round(a(e, t) / I) * I, i: t}
            })
        }

        var s = j, u = E, f = s, a = u, l = H;
        return e.links = function (e) {
            return A(r(e)).edges.filter(function (e) {
                return e.l && e.r
            }).map(function (t) {
                return {source: e[t.l.i], target: e[t.r.i]}
            })
        }, e.triangles = function (e) {
            var t = [];
            return A(r(e)).cells.forEach(function (r, s) {
                for (var u, f, a = r.site, l = r.edges.sort(i), o = -1, c = l.length, h = l[c - 1].edge, y = h.l === a ? h.r : h.l; ++o < c;) u = h, f = y, h = l[o].edge, y = h.l === a ? h.r : h.l, s < f.i && s < y.i && n(a, f, y) < 0 && t.push([e[s], e[f.i], e[y.i]])
            }), t
        }, e.x = function (n) {
            return arguments.length ? (s = n, f = "function" == typeof n ? s : t(s), e) : s
        }, e.y = function (n) {
            return arguments.length ? (u = n, a = "function" == typeof n ? u : t(u), e) : u
        }, e.extent = function (t) {
            return arguments.length ? (l = null == t ? H : t, e) : l === H ? null : l
        }, e.size = function (t) {
            return arguments.length ? e.extent(t && [[0, 0], t]) : l === H ? null : l && l[1]
        }, e
    }

    var B, D, F, G, H = [[-1e6, -1e6], [1e6, 1e6]], I = 1e-6;
    u.prototype = {
        start: function () {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        }, end: function () {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    };
    var J, K = [], O = 1e-12, Q = [];
    R.prototype.prepare = function () {
        for (var e, t = this.edges, n = t.length; n--;) e = t[n].edge, e.b && e.a || t.splice(n, 1);
        return t.sort(i), t.length
    }, _.prototype = {
        insert: function (e, t) {
            var n, i, r;
            if (e) {
                if (t.P = e, t.N = e.N, e.N && (e.N.P = t), e.N = t, e.R) {
                    for (e = e.R; e.L;) e = e.L;
                    e.L = t
                } else e.R = t;
                n = e
            } else this._ ? (e = k(this._), t.P = null, t.N = e, e.P = e.L = t, n = e) : (t.P = t.N = null, this._ = t, n = null);
            for (t.L = t.R = null, t.U = n, t.C = !0, e = t; n && n.C;) i = n.U, n === i.L ? (r = i.R, r && r.C ? (n.C = r.C = !1, i.C = !0, e = i) : (e === n.R && (w(this, n), e = n, n = e.U), n.C = !1, i.C = !0, m(this, i))) : (r = i.L, r && r.C ? (n.C = r.C = !1, i.C = !0, e = i) : (e === n.L && (m(this, n), e = n, n = e.U), n.C = !1, i.C = !0, w(this, i))), n = e.U;
            this._.C = !1
        }, remove: function (e) {
            e.N && (e.N.P = e.P), e.P && (e.P.N = e.N), e.N = e.P = null;
            var t, n, i, r = e.U, s = e.L, u = e.R;
            if (n = s ? u ? k(u) : s : u, r ? r.L === e ? r.L = n : r.R = n : this._ = n, s && u ? (i = n.C, n.C = e.C, n.L = s, s.U = n, n !== u ? (r = n.U, n.U = e.U, e = n.R, r.L = e, n.R = u, u.U = n) : (n.U = r, r = n, e = n.R)) : (i = e.C, e = n), e && (e.U = r), !i) {
                if (e && e.C) return void (e.C = !1);
                do {
                    if (e === this._) break;
                    if (e === r.L) {
                        if (t = r.R, t.C && (t.C = !1, r.C = !0, w(this, r), t = r.R), t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1, t.C = !0, m(this, t), t = r.R), t.C = r.C, r.C = t.R.C = !1, w(this, r), e = this._;
                            break
                        }
                    } else if (t = r.L, t.C && (t.C = !1, r.C = !0, m(this, r), t = r.L), t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1, t.C = !0, w(this, t), t = r.L), t.C = r.C, r.C = t.L.C = !1, m(this, r), e = this._;
                        break
                    }
                    t.C = !0, e = r, r = r.U
                } while (!e.C);
                e && (e.C = !1)
            }
        }
    }, e.voronoi = z
});

/* https://github.com/d3/d3-timer Copyright 2015 Mike Bostock */
"undefined" == typeof requestAnimationFrame && (requestAnimationFrame = "undefined" != typeof window && (window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame) || function (e) {
    return setTimeout(e, 17)
}), function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(e.timer = {})
}(this, function (e) {
    "use strict";

    function n() {
        r = m = 0, c = 1 / 0, t(u())
    }

    function t(e) {
        if (!r) {
            var t = e - Date.now();
            t > 24 ? c > e && (m && clearTimeout(m), m = setTimeout(n, t), c = e) : (m && (m = clearTimeout(m), c = 1 / 0), r = requestAnimationFrame(n))
        }
    }

    function i(e, n, i) {
        i = null == i ? Date.now() : +i, null != n && (i += +n);
        var o = {callback: e, time: i, flush: !1, next: null};
        a ? a.next = o : f = o, a = o, t(i)
    }

    function o(e, n, t) {
        t = null == t ? Date.now() : +t, null != n && (t += +n), l.callback = e, l.time = t
    }

    function u(e) {
        e = null == e ? Date.now() : +e;
        var n = l;
        for (l = f; l;) e >= l.time && (l.flush = l.callback(e - l.time, e)), l = l.next;
        l = n, e = 1 / 0;
        for (var t, i = f; i;) i.flush ? i = t ? t.next = i.next : f = i.next : (i.time < e && (e = i.time), i = (t = i).next);
        return a = t, e
    }

    var a, m, r, f, l, c = 1 / 0;
    e.timer = i, e.timerReplace = o, e.timerFlush = u
});