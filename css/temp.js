(function () {
    try {
        (function () {
            function af(a, c, b, d) {
                var e = this;
                return B(window, "c.i", function () {
                    function f(E) {
                        (E = bf(l, m, "", E)(l, m)) &&
                            (M(E.then) ? E.then(g) : g(E));
                        return E;
                    }
                    function g(E) {
                        E &&
                            (M(E)
                                ? p.push(E)
                                : ia(E) &&
                                  x(function (R) {
                                      var P = R[0];
                                      R = R[1];
                                      M(R) && ("u" === P ? p.push(R) : h(R, P));
                                  }, Ea(E)));
                    }
                    function h(E, R, P) {
                        e[R] = Ul(l, m, P || q, R, E);
                    }
                    var k,
                        l = window;
                    (!l || (isNaN(a) && !a)) && Ud();
                    var m = Vl(a, Vd, c, b, d),
                        p = [],
                        q = [kh, bf, lh];
                    q.unshift(Wl);
                    var r = z(Q, Va),
                        t = K(m);
                    m.id || Ta(Qa("Invalid Metrika id: " + m.id, !0));
                    var y = gd.C("counters", {});
                    if (y[t])
                        return Ib(l, t, "dc", ((k = {}), (k.key = t), k)), y[t];
                    Xl(l, t, mh(a, c, b, d));
                    y[t] = e;
                    gd.D("counters", y);
                    gd.Ga("counter", e);
                    x(function (E) {
                        E(l, m);
                    }, cf);
                    x(f, hd);
                    f(Yl);
                    h(Zl(l, m, p), "destruct", [kh, lh]);
                    Sb(l, D([l, r, f, 1, "a.i"], nh));
                    x(f, X);
                })();
            }
            function kh(a, c, b, d) {
                return B(a, "cm." + b, d);
            }
            function lh(a, c, b, d) {
                return function () {
                    var e = Oa(arguments);
                    e = d.apply(void 0, e);
                    return Y(e) ? Fa(a, c) : e;
                };
            }
            function $l(a, c) {
                delete J(a).C("cok", {})[c];
            }
            function Xl(a, c, b) {
                a = J(a);
                var d = a.C("cok", {});
                d[c] = b;
                a.D("cok", d);
            }
            function am(a, c) {
                var b = "" + c,
                    d = { id: 1, ca: "0" },
                    e = bm(b);
                e
                    ? (d.id = e)
                    : -1 === mb(b, ":")
                    ? ((b = Ga(b)), (d.id = b))
                    : ((b = b.split(":")),
                      (e = b[1]),
                      (d.id = Ga(b[0])),
                      (d.ca = Wd(e) ? "1" : "0"));
                return [Fa(a, d), d];
            }
            function oh(a, c, b, d) {
                var e;
                c =
                    ((e = {}),
                    (e.code = [
                        [
                            1,
                            "ym_debug",
                            [
                                18,
                                ["a", [37, [40, "require"], "loadScript"]],
                                ["b", [37, [40, "require"], "callFromWindow"]],
                            ],
                            [
                                2,
                                [
                                    37,
                                    [40, "a"],
                                    ph + "/" + c + ".js?ver=" + va.bb,
                                    [
                                        24,
                                        null,
                                        [],
                                        [
                                            3,
                                            [
                                                2,
                                                [
                                                    37,
                                                    [40, "b"],
                                                    "Ya._metrika.ytmm." +
                                                        c +
                                                        ".init",
                                                    b,
                                                    df(d),
                                                    va.bb,
                                                ],
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                        ],
                    ]),
                    e);
                qh(a)(c);
            }
            function df(a) {
                if (N(a)) return (a = z(df, a)), sc([22], a);
                if (ia(a))
                    return (
                        (a = z(function (c) {
                            return [c[0], df(c[1])];
                        }, Ea(a))),
                        sc([23], a)
                    );
                if (rh(a)) return a;
                Ta(Pa("npv"));
            }
            function cm(a) {
                return ia(a) && N(a.code);
            }
            function dm(a, c) {
                var b,
                    d = c.slice(2),
                    e = [
                        ((b = {}),
                        (b.require = { kind: 0, value: w(em, Kc([a, {}])) }),
                        b),
                    ];
                ef(e, sc([3], d));
            }
            function ef(a, c, b) {
                c = c.slice(1);
                a.push(b || {});
                x(function (d) {
                    N(d) && 3 === d[0]
                        ? ef(a, d)
                        : !N(d) || (18 !== d[0] && 19 !== d[0])
                        ? N(d) && 2 === d[0] && Tb(a, d[1])
                        : fm(a, d);
                }, c);
                a.pop();
            }
            function fm(a, c) {
                var b = 18 === c[0];
                x(function (d) {
                    var e = d[0],
                        f = d[1];
                    if (b && 1 === d.length) throw Qa("mca");
                    d = a[a.length - 1];
                    if (Jb(d, e)) throw Qa("vr");
                    f = Tb(a, f);
                    d[e] = { kind: b ? 0 : 1, value: f };
                }, c.slice(1));
            }
            function Tb(a, c) {
                if (rh(c)) return c;
                if (N(c) && 40 === c[0]) {
                    a: {
                        var b = c[1];
                        for (var d = a.length; 0 < d; ) {
                            var e = a[--d];
                            if (Jb(e, b)) {
                                b = e[b];
                                break a;
                            }
                        }
                        b = void 0;
                    }
                    if (!b) throw Qa("vnd");
                    return b.value;
                }
                if (N(c) && 37 === c[0]) {
                    d = c.slice(2);
                    b = Tb(a, c[1]);
                    if (!M(b)) throw Qa("tenf");
                    d = z(u(a, Tb), d);
                    return b.apply(null, d);
                }
                if (N(c) && 24 === c[0]) return gm(a, c);
                if (N(c) && 35 === c[0]) {
                    d = c[2];
                    b = Tb(a, c[1]);
                    d = Tb(a, d);
                    if (!b) throw Qa("noma");
                    return b["" + d];
                }
                if (N(c) && 23 === c[0]) return hm(a, c);
                if (N(c) && 22 === c[0]) return im(a, c);
            }
            function im(a, c) {
                return z(function (b) {
                    return Tb(a, b);
                }, c.slice(1));
            }
            function hm(a, c) {
                return O(
                    function (b, d) {
                        var e = d[1],
                            f = Tb(a, d[0]);
                        e = Tb(a, e);
                        b["" + f] = e;
                        return b;
                    },
                    {},
                    c.slice(1)
                );
            }
            function rh(a) {
                return (
                    fa(a) ||
                    "[object Number]" === Object.prototype.toString.call(a) ||
                    !!a === a ||
                    Z(a)
                );
            }
            function gm(a, c) {
                var b = c[1],
                    d = c[2],
                    e = c[3],
                    f = z(Q, a);
                return function () {
                    var g = arguments,
                        h = O(
                            function (k, l, m) {
                                if (k[l]) throw Qa("da");
                                k[l] = { kind: 1, value: g[m] };
                                return k;
                            },
                            {},
                            d
                        );
                    b && !G(b, d) && (h[b] = { kind: 0, value: b });
                    ef(f, e, h);
                };
            }
            function em(a) {
                return jm[a];
            }
            function ff(a, c) {
                return function () {
                    try {
                        return c.apply(null, arguments);
                    } catch (b) {
                        sh(a, b);
                    }
                };
            }
            function km(a, c, b, d) {
                function e() {
                    g.state = 1;
                    b();
                }
                function f() {
                    g.state = 2;
                    d && d();
                }
                var g = lm(a, c);
                c = g.ti;
                var h = g.state;
                c && 2 !== h
                    ? 1 === h
                        ? e()
                        : ((a = ja(a)),
                          a.F(c, ["load"], e),
                          a.F(c, ["error"], f))
                    : f();
            }
            function lm(a, c) {
                gf[c] || (gf[c] = { ti: Lc(a, { src: c }), state: 0 });
                return gf[c];
            }
            function th(a, c) {
                if (Z(a)) throw Qa("noma");
                if (1 === c.length) return a;
                var b = n(a, H(".", c.slice(0, -1)));
                if (!b) throw Qa("noma");
                return b;
            }
            function mm(a) {
                return O(
                    function (c, b) {
                        Jb(a, b) && (c[b] = a[b]);
                        return c;
                    },
                    {},
                    ea(a)
                );
            }
            function nm(a, c) {
                if ("*" === c) return !0;
                var b = S(a);
                return c === b.host + b.pathname;
            }
            function om(a, c) {
                var b = n(c, "target");
                b && a(b);
            }
            function pm(a, c, b) {
                var d = n(b, "submitter");
                d || ((b = n(b, "target")) && (d = hf(a, b)));
                d && c(d);
            }
            function qm(a, c, b, d) {
                var e = jf(a, d);
                e &&
                    x(function (f) {
                        var g,
                            h = null;
                        try {
                            var k = n(f, "css_selector"),
                                l = cc(k, a.document);
                            h = uh(l);
                        } catch (r) {}
                        k = null;
                        try {
                            var m = n(f, "xpath"),
                                p = rm(m);
                            var q = p
                                ? n(a, "document.evaluate")
                                    ? a.document.evaluate(
                                          p,
                                          a.document,
                                          null,
                                          a.XPathResult.FIRST_ORDERED_NODE_TYPE,
                                          null
                                      ).singleNodeValue
                                    : null
                                : null;
                            k = uh(q);
                        } catch (r) {}
                        f = ((g = {}), (g.s = [k, h]), (g.b = e), g);
                        c(f);
                    }, b);
            }
            function uh(a) {
                return (a = Kb(a)) ? id(Xd(a)) : null;
            }
            function rm(a) {
                if (!a) return "";
                a = a.match(sm);
                if (!a || 0 === a.length) return "";
                var c = tm();
                return (
                    "//HTML/BODY/" +
                    O(
                        function (b, d) {
                            var e = d[0],
                                f = Ga(d.slice(1));
                            return (
                                "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b
                            );
                        },
                        "",
                        a
                    )
                );
            }
            function um(a) {
                x(function (c) {
                    var b,
                        d = c.event;
                    if (G(d, vm)) {
                        var e = c.data;
                        c = e.auctionId || n(e, "bid.auctionId");
                        sa[c] || (sa[c] = ((b = {}), (b.auctionId = c), b));
                        b = "auctionInit" === d;
                        var f = G(d, vh);
                        f ||
                            (sa[c].startStamp && !b) ||
                            (sa[c].startStamp = b
                                ? e.auctionStart || e.timestamp
                                : e.auctionStart);
                        if (G(d, wh)) {
                            b = e.bidderCode;
                            if (!b) return;
                            sa[c][d] || (sa[c][d] = {});
                            if ("bidTimeout" === d) sa[c].bidTimeout[b] = !0;
                            else {
                                var g = {};
                                sa[c][d][b] = g;
                                x(function (h) {
                                    var k = e[h];
                                    Z(k) || (g[h] = k);
                                }, wm);
                                sa[c].endStamp && (sa[c].aa = !0);
                            }
                        }
                        f
                            ? ((b = e.bid.bidderCode),
                              sa[c].renderState || (sa[c].renderState = {}),
                              (d = "adRenderSucceeded" === d),
                              (f = { pe: d }),
                              d ||
                                  ((f.reason = e.reason),
                                  (f.message = e.message)),
                              (sa[c].renderState[b] = f))
                            : "auctionEnd" === d &&
                              ((sa[c].aa = !0),
                              (sa[c].endStamp = e.auctionEnd || e.timestamp),
                              (sa[c].requestedBidders = ha(function (h, k, l) {
                                  return kf(h, l) === k;
                              }, z(U("bidderCode"), e.bidderRequests))));
                    }
                }, a);
            }
            function xm(a, c) {
                x(function (b) {
                    b.aa && zm(a, c, b.auctionId);
                }, xh(sa));
            }
            function zm(a, c, b) {
                sa[b].aa = !1;
                sa[b].Ia && la(a, sa[b].Ia);
                sa[b].Ia = V(
                    a,
                    function () {
                        var d, e;
                        delete sa[b].Ia;
                        delete sa[b].aa;
                        c(
                            ((d = {}),
                            (d.__ym = ((e = {}), (e.pbjs = sa[b]), e)),
                            d)
                        );
                        delete sa[b];
                    },
                    2e3
                );
            }
            function Am(a) {
                var c = n(a, "featurePolicy");
                return c
                    ? "browsingTopics" in a &&
                          c.allowsFeature("browsing-topics")
                    : !1;
            }
            function Bm(a, c, b, d) {
                var e = n(d, "data");
                if (fa(e)) {
                    var f = e.split("*");
                    e = f[0];
                    var g = f[1];
                    f = f[2];
                    "sc.topics-response" === e
                        ? (g &&
                              ("1" === g && f
                                  ? ((a = Lb(a, f)), N(a) && c.D("cta", a))
                                  : c.D("cta.e", g)),
                          b())
                        : "sc.frame" === e &&
                          d.source &&
                          d.source.postMessage("sc.topics", "*");
                }
            }
            function Cm(a, c) {
                var b;
                if (
                    "https://oauth.yandex.ru" === n(c, "origin") &&
                    n(c, "source.window") &&
                    "_ym_uid_request" === n(c.data, "_ym")
                ) {
                    var d = c.source,
                        e = ((b = {}), (b._ym_uid = a), b);
                    d.postMessage(e, "https://oauth.yandex.ru");
                }
            }
            function yh(a, c) {
                void 0 === c && (c = !0);
                var b = cc("canvas", a.document);
                if (b && (b = Mc(b))) {
                    var d = Yd(a) || Nc(a),
                        e = d[0];
                    d = d[1];
                    if (0.3 <= zh(a, b, { h: d, w: e }) / (d * e)) {
                        J(a).D("hc", 1);
                        return;
                    }
                }
                c && V(a, D([a, !1], yh), 3e3);
            }
            function Ah(a) {
                return {
                    N: function (c, b) {
                        Dm(a).then(function (d) {
                            c.J || (c.J = {});
                            c.J.uah = d;
                            b();
                        }, b);
                    },
                };
            }
            function Em(a) {
                var c = O(
                    function (b, d) {
                        var e = d[1],
                            f = Fm(a[d[0]]);
                        f && b.push("" + e + "\n" + f);
                        return b;
                    },
                    [],
                    Ea(Gm)
                );
                return H("\n", c);
            }
            function Hm(a) {
                return "che\n" + a;
            }
            function Fm(a) {
                return fa(a)
                    ? a
                    : N(a)
                    ? H(
                          ",",
                          z(function (c) {
                              return '"' + c.brand + '";v="' + c.version + '"';
                          }, a)
                      )
                    : Z(a)
                    ? ""
                    : a
                    ? "?1"
                    : "?0";
            }
            function Im(a, c) {
                var b = Jm(a),
                    d = [Km(a) || Lm(a)];
                Bh(a) && d.push(b);
                var e = ka(a);
                b = Ua(a);
                var f = b.C("synced", {});
                d = ha(function (g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(nb);
                        h && delete f[g];
                        return h;
                    }
                }, d);
                b.D("synced", f);
                return z(function (g) {
                    return { Di: c[g], Rh: g };
                }, d);
            }
            function Lm(a) {
                a = Mm(a);
                return Nm[a] || a;
            }
            function Jm(a) {
                a = Ch(a);
                return Om[a] || "ru";
            }
            function Pm(a, c, b, d) {
                if (!b.K || Wd(c.ca)) d();
                else {
                    var e = Zd(a),
                        f = u(e, Qm),
                        g = $d(a, ""),
                        h = function () {
                            var q = H(",", z(Rm(lf), ae(e)));
                            q = "" + q + Sm(q, g);
                            be(b, "gdpr", q);
                            d();
                        };
                    if (c.Vi) f("31"), h();
                    else if (3 === c.id) h();
                    else {
                        var k = J(a),
                            l = k.C("f1");
                        if (l) l(h);
                        else if (((l = ae(e)), Za(tc(lf), l))) h();
                        else if (g.C("yandex_login"))
                            f("13"), g.D("gdpr", Oc, 525600), h();
                        else {
                            l = ce(a);
                            var m = S(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(
                                m.hostname
                            )
                                ? {
                                      url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                      version: 2,
                                      kf: Tm,
                                      sf: "_inversed_buttons",
                                  }
                                : void 0;
                            l || p
                                ? ((l = g.C("gdpr")),
                                  G(l, uc)
                                      ? (f(l === mf ? "12" : "3"), h())
                                      : nf(a) || Um(a)
                                      ? (f("17"), h())
                                      : Vm(a)
                                            .then(Q, F)
                                            .then(function (q) {
                                                q
                                                    ? (f("28"), h())
                                                    : (Dh(h),
                                                      k.D("f1", Dh),
                                                      (0, of[0])(a)
                                                          .then(U("params.eu"))
                                                          .then(function (r) {
                                                              if (
                                                                  r ||
                                                                  gb(
                                                                      m.href,
                                                                      "yagdprcheck=1"
                                                                  ) ||
                                                                  g.C(
                                                                      "yaGdprCheck"
                                                                  )
                                                              ) {
                                                                  g.D(
                                                                      "gdpr_popup",
                                                                      mf
                                                                  );
                                                                  Wm(a, c);
                                                                  if (ob(a))
                                                                      return Xm(
                                                                          a,
                                                                          f,
                                                                          c
                                                                      );
                                                                  var t = Eh(
                                                                      a,
                                                                      e
                                                                  );
                                                                  if (t)
                                                                      return (
                                                                          (r =
                                                                              Ym(
                                                                                  a,
                                                                                  f,
                                                                                  t,
                                                                                  c,
                                                                                  p
                                                                              )),
                                                                          r.then(
                                                                              D(
                                                                                  [
                                                                                      a,
                                                                                      c,
                                                                                  ],
                                                                                  Zm
                                                                              )
                                                                          ),
                                                                          r
                                                                      );
                                                              }
                                                              r || f("8");
                                                              return L.resolve({
                                                                  value: Oc,
                                                                  Gd: !0,
                                                              });
                                                          })
                                                          .then(function (r) {
                                                              g.dc(
                                                                  "gdpr_popup"
                                                              );
                                                              if (r) {
                                                                  var t =
                                                                      r.value;
                                                                  r = r.Gd;
                                                                  G(t, uc) &&
                                                                      g.D(
                                                                          "gdpr",
                                                                          t,
                                                                          r
                                                                              ? void 0
                                                                              : 525600
                                                                      );
                                                              }
                                                              t = dc(Fh, ta);
                                                              jd(
                                                                  a,
                                                                  t,
                                                                  20
                                                              )(
                                                                  $a(
                                                                      B(
                                                                          a,
                                                                          "gdr"
                                                                      ),
                                                                      F
                                                                  )
                                                              );
                                                              k.D("f1", ta);
                                                          })
                                                          ["catch"](
                                                              B(a, "gdp.a")
                                                          ));
                                            }))
                                : (f("14"), h());
                        }
                    }
                }
            }
            function Zm(a, c) {
                if (ce(a)) {
                    var b = Zd(a),
                        d = Fa(a, c);
                    d = d && d.params;
                    b = z(u($m, n), ae(b));
                    d && b.length && d("gdpr", Aa(b));
                }
            }
            function Xm(a, c, b) {
                var d = de(a, b);
                return new L(function (e) {
                    var f;
                    if (d) {
                        var g = d.$,
                            h = w(u("4", c), u(null, e)),
                            k = V(a, h, 2e3, "gdp.f.t");
                        d.Nf(((f = {}), (f.type = "isYandex"), f))
                            .then(function (l) {
                                l.isYandex
                                    ? (c("5"),
                                      g.F(Gh, function (m) {
                                          e({ value: Hh(m[1].type) });
                                      }))
                                    : (c("6"), e(null));
                            })
                            ["catch"](h)
                            .then(D([a, k], la));
                    } else e({ value: mf, Gd: !0 });
                });
            }
            function Wm(a, c) {
                var b = de(a, c);
                b &&
                    b.$.F(["isYandex"], function () {
                        var d;
                        return (
                            (d = { type: "isYandex" }), (d.isYandex = ce(a)), d
                        );
                    });
                return b;
            }
            function an(a, c, b) {
                a = b || Ch(a);
                return G(a, c) ? a : "en";
            }
            function Hh(a) {
                if (G(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"]))
                    return Oc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return G(a, uc) ? a : Oc;
            }
            function Ih(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e)
                    try {
                        I(e, d)(Mb(a, c));
                    } catch (f) {}
                else Jh = V(a, D([a, c, 2 * b], Ih), b, "ai.d");
                return function () {
                    return la(a, Jh);
                };
            }
            function Kh(a, c, b, d) {
                var e,
                    f,
                    g,
                    h = b.Lh,
                    k = b.Gh,
                    l = b.isTrusted;
                b = b.Hd;
                a = pf(a, k);
                k = k.readOnly;
                d =
                    ((e = {}),
                    (e.fi = qf(
                        ((f = {}),
                        (f.a = h ? 1 : 0),
                        (f.b = a),
                        (f.c = d || 0),
                        (f.d = k ? 1 : null),
                        f)
                    ).Fa()),
                    e);
                Z(l) || (d.ite = pb(l));
                b && (d.ifs = 1);
                c.params(((g = {}), (g.__ym = d), g));
            }
            function Lh(a, c) {
                var b = n(c, "target");
                if (b) {
                    var d = n(b, "value");
                    if ((d = ab(d)) && !(100 <= Ra(d))) {
                        var e = "tel" === n(b, "type"),
                            f = 0 < mb(d, "@") && !e,
                            g = ee(d),
                            h = Ra(g);
                        if (f || (!f && (e || h))) {
                            if (f) {
                                if (((d = Mh(d)), 5 > Ra(d) || 100 < Ra(d)))
                                    return;
                            } else {
                                if (
                                    bn(d) ||
                                    Ra(d) - h > h ||
                                    10 > Ra(g) ||
                                    16 < Ra(g)
                                )
                                    return;
                                e = g[0];
                                g = d[1];
                                if ("+" === d[0] && g !== e) return;
                                d = Nh(a, d);
                            }
                            e = n(c, "isTrusted");
                            return {
                                Gh: b,
                                Lh: f,
                                Hh: d,
                                isTrusted: e,
                                Hd: c.Hd,
                            };
                        }
                    }
                }
            }
            function Oh(a, c, b, d, e) {
                if (!fe(a)) return F;
                var f = [],
                    g = ja(a);
                vc(a)(
                    $a(F, function () {
                        var h = hb(c, a.document.body);
                        e && (h = ha(e, h));
                        x(function (l) {
                            f.push(g.F(l, b, d));
                        }, h);
                        if (Ha("MutationObserver", a.MutationObserver)) {
                            var k = c.toUpperCase();
                            h = new a.MutationObserver(
                                B(a, "de.m", function (l) {
                                    x(function (m) {
                                        var p = m.addedNodes;
                                        m = m.removedNodes;
                                        p &&
                                            p.length &&
                                            x(function (q) {
                                                ge(
                                                    a,
                                                    q,
                                                    function (r) {
                                                        r.nodeName !== k ||
                                                            (e && !e(r)) ||
                                                            f.push(
                                                                g.F(r, b, d)
                                                            );
                                                    },
                                                    void 0,
                                                    a.NodeFilter.SHOW_ELEMENT,
                                                    !0
                                                );
                                            }, p);
                                        m &&
                                            m.length &&
                                            x(function (q) {
                                                ge(
                                                    a,
                                                    q,
                                                    function (r) {
                                                        r.nodeName !== k ||
                                                            (e && !e(r)) ||
                                                            g.vb(r, b, d);
                                                    },
                                                    void 0,
                                                    a.NodeFilter.SHOW_ELEMENT,
                                                    !0
                                                );
                                            }, m);
                                    }, l);
                                })
                            );
                            h.observe(a.document.body, {
                                childList: !0,
                                subtree: !0,
                            });
                            f.push(I(h.disconnect, h));
                        }
                    })
                );
                return D([ta, f], x);
            }
            function cn(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (c)
                    return (
                        (a = I(c, a.speechSynthesis)),
                        wc(function (b) {
                            return z(u(b, n), dn);
                        }, a())
                    );
            }
            function en(a, c, b) {
                return H("x", z(w(Q, La("concat", "" + a), u(b, n)), c));
            }
            function fn(a, c) {
                var b = c.vg;
                if (!gn(a, b)) return "";
                var d = [];
                a: {
                    var e = hn(a, b);
                    try {
                        var f = D(e, w)()();
                        break a;
                    } catch (E) {
                        if ("ccf" === E.message) {
                            f = null;
                            break a;
                        }
                        Ta(E);
                    }
                    f = void 0;
                }
                if (Wa(f)) var g = "";
                else
                    try {
                        g = f.toDataURL();
                    } catch (E) {
                        g = "";
                    }
                (f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = ma(
                        b.getSupportedExtensions,
                        "getSupportedExtensions"
                    )
                        ? b.getSupportedExtensions() || []
                        : [];
                } catch (E) {
                    k = [];
                }
                k = H(";", k);
                f = rf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = rf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    q =
                        b.getExtension("EXT_texture_filter_anisotropic") ||
                        b.getExtension(
                            "WEBKIT_EXT_texture_filter_anisotropic"
                        ) ||
                        b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (q) {
                    var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r && (r = 2);
                }
                r = {
                    gj: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": q ? r : null,
                    "webgl max combined texture image units": b.getParameter(
                        b.MAX_COMBINED_TEXTURE_IMAGE_UNITS
                    ),
                    "webgl max cube map texture size": b.getParameter(
                        b.MAX_CUBE_MAP_TEXTURE_SIZE
                    ),
                    "webgl max fragment uniform vectors": b.getParameter(
                        b.MAX_FRAGMENT_UNIFORM_VECTORS
                    ),
                    "webgl max render buffer size": b.getParameter(
                        b.MAX_RENDERBUFFER_SIZE
                    ),
                    "webgl max texture image units": b.getParameter(
                        b.MAX_TEXTURE_IMAGE_UNITS
                    ),
                    "webgl max texture size": b.getParameter(
                        b.MAX_TEXTURE_SIZE
                    ),
                    "webgl max varying vectors": b.getParameter(
                        b.MAX_VARYING_VECTORS
                    ),
                    "webgl max vertex attribs": b.getParameter(
                        b.MAX_VERTEX_ATTRIBS
                    ),
                    "webgl max vertex texture image units": b.getParameter(
                        b.MAX_VERTEX_TEXTURE_IMAGE_UNITS
                    ),
                    "webgl max vertex uniform vectors": b.getParameter(
                        b.MAX_VERTEX_UNIFORM_VECTORS
                    ),
                    "webgl max viewport dims": rf(
                        b.getParameter(b.MAX_VIEWPORT_DIMS),
                        b
                    ),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(
                        b.SHADING_LANGUAGE_VERSION
                    ),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION),
                };
                sf(d, r, ": ");
                a: {
                    try {
                        var t = b.getExtension("WEBGL_debug_renderer_info");
                        if (t) {
                            var y = {
                                "webgl unmasked vendor": b.getParameter(
                                    t.UNMASKED_VENDOR_WEBGL
                                ),
                                "webgl unmasked renderer": b.getParameter(
                                    t.UNMASKED_RENDERER_WEBGL
                                ),
                            };
                            break a;
                        }
                    } catch (E) {}
                    y = {};
                }
                sf(d, y);
                if (!b.getShaderPrecisionFormat) return H("~", d);
                sf(d, jn(b));
                return H("~", d);
            }
            function sf(a, c, b) {
                void 0 === b && (b = ":");
                x(function (d) {
                    return a.push("" + d[0] + b + d[1]);
                }, Ea(c));
            }
            function kn(a, c, b, d) {
                c = d.C("cc");
                d = D(["cc", ""], d.D);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    (e = (e = e[1]) && Ga(e)) && 1440 < ka(a)(nb) - e
                        ? d()
                        : b.D("cc", c);
                } else Ba(0)(c) || d();
            }
            function ln(a, c, b, d) {
                return na(c, function (e) {
                    if (!he(e) && !ie(a))
                        if (((e = d.C("zzlc")), Y(e) || Wa(e) || "na" === e)) {
                            var f = qb(a);
                            if (f && (e = ec(a))) {
                                var g = f("iframe");
                                C(g.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden",
                                });
                                f = tf(a, 68);
                                var h = uf(a, 79);
                                g.src =
                                    "https://mc.yandex." +
                                    (f || h ? "md" : "ru") +
                                    Ph("L21ldHJpa2EvenpsYy5odG1s");
                                e.appendChild(g);
                                var k = 0,
                                    l = ja(a).F(
                                        a,
                                        ["message"],
                                        B(a, "zz.m", function (m) {
                                            (m = n(m, "data")) &&
                                                m.substr &&
                                                "__ym__zz" === m.substr(0, 8) &&
                                                (xc(g),
                                                (m = m.substr(8)),
                                                d.D("zzlc", m),
                                                b.D("zzlc", m),
                                                l(),
                                                la(a, k));
                                        })
                                    );
                                k = V(a, w(l, u(g, xc)), 3e3);
                            }
                        } else b.D("zzlc", e);
                });
            }
            function mn(a, c, b) {
                var d, e;
                c = rb(u(a, n), nn);
                c = Y(c) ? null : n(a, c);
                if (
                    n(a, "navigator.onLine") &&
                    c &&
                    c &&
                    n(c, "prototype.constructor.name")
                ) {
                    var f = new c(((d = {}), (d.iceServers = []), d));
                    a = n(f, "createDataChannel");
                    M(a) &&
                        (I(a, f, "y.metrika")(),
                        (a = n(f, "createOffer")),
                        M(a) &&
                            !a.length &&
                            ((a = I(a, f)()),
                            (d = n(a, "then")),
                            M(d) &&
                                I(d, a, function (g) {
                                    var h = n(f, "setLocalDescription");
                                    M(h) && I(h, f, g, F, F)();
                                })(),
                            C(
                                f,
                                ((e = {}),
                                (e.onicecandidate = function () {
                                    var g,
                                        h = n(f, "close");
                                    if (M(h)) {
                                        h = I(h, f);
                                        try {
                                            var k =
                                                (g = n(
                                                    f,
                                                    "localDescription.sdp"
                                                )) &&
                                                g.match(
                                                    /c=IN\s[\w\d]+\s([\w\d:.]+)/
                                                );
                                        } catch (l) {
                                            f.onicecandidate = F;
                                            "closed" !== f.iceConnectionState &&
                                                h();
                                            return;
                                        }
                                        k &&
                                            0 < k.length &&
                                            ((g = fc(k[1])), b.D("pp", g));
                                        f.onicecandidate = F;
                                        h();
                                    }
                                }),
                                e)
                            )));
                }
            }
            function on(a, c, b) {
                var d,
                    e = kd(a, c);
                if (e) {
                    e.$.F(["gpu-get"], function () {
                        var h;
                        return (
                            (h = {}),
                            (h.type = "gpu-get"),
                            (h.pu = b.C("pu")),
                            h
                        );
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = V(a, D([a, c, b], Qh), 200, "pu.m");
                        e.fe(
                            f,
                            ((d = {}), (d.type = "gpu-get"), d),
                            function (h, k) {
                                var l = n(k, "pu");
                                l && (la(a, g), b.D("pu", l));
                            }
                        );
                    } else Qh(a, c, b);
                }
            }
            function Qh(a, c, b) {
                var d = n(a, "location.host");
                a = ld(a, c);
                b.D("pu", "" + fc(d) + a);
            }
            function pn(a) {
                a = qb(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = La("canPlayType", a),
                        b = wc(function (d) {
                            return z(w(Q, La("concat", d + "; codecs=")), qn);
                        }, Rh);
                    return z(c, Rh.concat(b));
                } catch (d) {
                    return "canPlayType";
                }
            }
            function rn(a) {
                var c = n(a, "matchMedia");
                if (c && Ha("matchMedia", c)) {
                    var b = La("matchMedia", a);
                    return O(
                        function (d, e) {
                            d[e] = b("(" + e + ")");
                            return d;
                        },
                        {},
                        sn
                    );
                }
            }
            function jn(a) {
                return O(
                    function (c, b) {
                        var d = b[0],
                            e = b[1];
                        c[d + " precision"] = n(e, "precision") || "n";
                        c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                        c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                        return c;
                    },
                    {},
                    [
                        [
                            "webgl vertex shader high float",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.HIGH_FLOAT
                            ),
                        ],
                        [
                            "webgl vertex shader medium",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.MEDIUM_FLOAT
                            ),
                        ],
                        [
                            "webgl vertex shader low float",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.LOW_FLOAT
                            ),
                        ],
                        [
                            "webgl fragment shader high float",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.HIGH_FLOAT
                            ),
                        ],
                        [
                            "webgl fragment shader medium float",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.MEDIUM_FLOAT
                            ),
                        ],
                        [
                            "webgl fragment shader low float",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.LOW_FLOAT
                            ),
                        ],
                        [
                            "webgl vertex shader high int",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.HIGH_INT
                            ),
                        ],
                        [
                            "webgl vertex shader medium int",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.MEDIUM_INT
                            ),
                        ],
                        [
                            "webgl vertex shader low int",
                            a.getShaderPrecisionFormat(
                                a.VERTEX_SHADER,
                                a.LOW_INT
                            ),
                        ],
                        [
                            "webgl fragment shader high int",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.HIGH_INT
                            ),
                        ],
                        [
                            "webgl fragment shader medium int",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.MEDIUM_INT
                            ),
                        ],
                        [
                            "webgl fragment shader low int precision",
                            a.getShaderPrecisionFormat(
                                a.FRAGMENT_SHADER,
                                a.LOW_INT
                            ),
                        ],
                    ]
                );
            }
            function hn(a, c) {
                return [
                    function () {
                        var b = c.createBuffer();
                        (b &&
                            c.getParameter &&
                            Ha("getParameter", c.getParameter)) ||
                            vf();
                        c.bindBuffer(c.ARRAY_BUFFER, b);
                        var d = new a.Float32Array(tn);
                        c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                        b.Nh = 3;
                        b.Vh = 3;
                        d = c.createProgram();
                        var e = c.createShader(c.VERTEX_SHADER);
                        (d && e) || vf();
                        return { $d: d, Ui: e, Ti: b };
                    },
                    function (b) {
                        var d = b.$d,
                            e = b.Ui;
                        c.shaderSource(
                            e,
                            "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
                        );
                        c.compileShader(e);
                        c.attachShader(d, e);
                        (d = c.createShader(c.FRAGMENT_SHADER)) || vf();
                        return C(b, { bh: d });
                    },
                    function (b) {
                        var d = b.$d,
                            e = b.bh;
                        c.shaderSource(
                            e,
                            "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
                        );
                        c.compileShader(e);
                        c.attachShader(d, e);
                        c.linkProgram(d);
                        c.useProgram(d);
                        return b;
                    },
                    function (b) {
                        var d = b.$d;
                        b = b.Ti;
                        d.Si = c.getAttribLocation(d, "attrVertex");
                        d.Xh = c.getUniformLocation(d, "uniformOffset");
                        c.enableVertexAttribArray(d.Cj);
                        c.vertexAttribPointer(d.Si, b.Nh, c.FLOAT, !1, 0, 0);
                        c.uniform2f(d.Xh, 1, 1);
                        c.drawArrays(c.TRIANGLE_STRIP, 0, b.Vh);
                        return c.canvas;
                    },
                ];
            }
            function gn(a, c) {
                if (!M(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !Ha("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer();
                } catch (d) {
                    return !1;
                }
                return !0;
            }
            function rf(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]";
            }
            function un(a, c) {
                if (n(c, "settings.ins")) {
                    var b = J(a);
                    if (!b.C("scip")) {
                        var d = Ua(a),
                            e = ka(a)(nb),
                            f = je(d.C("sci"));
                        if (!(f && 1440 >= e - f)) {
                            f = pa(a, "ci");
                            var g = ["sync.cook.int"],
                                h = function (l) {
                                    l = b.C("scip", "") + l;
                                    b.D("scip", l);
                                },
                                k = u("a", h);
                            b.D("scip", "0");
                            return f({ Z: { ha: g, Oa: 3e3, yb: !0 } }, [
                                "https://an.yandex.ru/sync_cookie",
                            ])
                                .then(function (l) {
                                    l = n(l.Jc, "CookieMatchUrls");
                                    if (N(l) && Ra(l)) {
                                        h("1");
                                        var m = pa(a, "c");
                                        l = z(function (p, q) {
                                            return m(
                                                { Z: { ha: g, Oa: 3e3 } },
                                                ["https://" + p]
                                            )["catch"](
                                                w(u("b", h), u("" + q, h))
                                            );
                                        }, ha(fa, l));
                                        return L.all(l);
                                    }
                                    k();
                                }, k)
                                .then(function () {
                                    var l = b.C("scip");
                                    !l ||
                                        gb(l, "a") ||
                                        gb(l, "b") ||
                                        (d.D("sci", e), h("2"));
                                }, F);
                        }
                    }
                }
            }
            function Sh(a) {
                return {
                    N: function (c, b) {
                        if (!c.K) return b();
                        var d = J(a).C("fid");
                        !Th && d && (be(c, "fid", d), (Th = !0));
                        return b();
                    },
                };
            }
            function vn(a, c) {
                var b = a.document;
                if (G(b.readyState, ["interactive", "complete"])) Sb(a, c);
                else {
                    var d = ja(a),
                        e = d.F,
                        f = d.vb,
                        g = function () {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c();
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g);
                }
            }
            function wf(a) {
                return {
                    N: function (c, b) {
                        var d = c.K;
                        if (d) {
                            var e = J(a).C("adBlockEnabled");
                            e && d.D("adb", e);
                        }
                        b();
                    },
                };
            }
            function wn(a) {
                var c = B(a, "i.clch", xn);
                ja(a).F(a.document, ["click"], u(a, c), { passive: !1 });
                return function (b) {
                    var d = va.Qa,
                        e = a.Ya[va.Zb],
                        f = !!e._informer;
                    e._informer = C({ domain: "informer.yandex.ru" }, b);
                    f ||
                        Lc(a, {
                            src: d + "//informer.yandex.ru/metrika/informer.js",
                        });
                };
            }
            function yn(a, c) {
                var b = Ua(a),
                    d = b.C,
                    e = b.D;
                if ("" === d("cc")) {
                    e("cc", 0);
                    var f = ka(a),
                        g = J(a);
                    pa(
                        a,
                        "6",
                        c
                    )({ Z: { yb: !0, Ce: !1 } }, ["https://mc.yandex.md/cc"])
                        .then(function (h) {
                            h = n(h.Jc, "c");
                            e("cc", h + "&" + f(nb));
                            g.D("cc", h);
                        })
                        ["catch"](function (h) {
                            var k = f(nb);
                            e("cc", "&" + k);
                            Pc(a, "cc", h);
                        });
                }
            }
            function ke(a, c) {
                if (!c) return !1;
                var b = S(a);
                return new RegExp(c).test("" + b.pathname + b.hash + b.search);
            }
            function zn(a, c) {
                return na(c, function (b) {
                    var d = n(b, "settings.dr");
                    return {
                        Kg: An(a, d),
                        isEnabled: n(b, "settings.auto_goals"),
                    };
                });
            }
            function Bn(a, c, b, d, e) {
                b = xf(a.document.body, b);
                d = xf(a.document.body, d);
                G(e.target, [b, d]) && yf(a, c);
            }
            function Uh(a, c, b, d) {
                (b = Cn(a, d, b)) && yf(a, c, b);
            }
            function Vh(a, c) {
                var b = Wh(a, c);
                return Dn(a, b);
            }
            function Wh(a, c) {
                var b = xf(a.document.body, c);
                return b ? En(a, b) : "";
            }
            function yf(a, c, b) {
                if ((c = Fa(a, c)))
                    (a = le(["dr", b || "" + Xa(a, 10, 99)])),
                        c.params(le(["__ym", a]));
            }
            function xf(a, c) {
                var b = null;
                try {
                    b = c ? cc(c, a) : b;
                } catch (d) {}
                return b;
            }
            function Xh(a) {
                a = Ia(Ph(a));
                return z(function (c) {
                    c = c.charCodeAt(0).toString(2);
                    return Yh("0", 8, c);
                }, a);
            }
            function En(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                ge(a, c, function (e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else
                        e instanceof a.HTMLImageElement
                            ? (f = e.alt)
                            : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && ab(f)) && b.push(f);
                });
                return 0 === b.length ? "" : H(" ", b);
            }
            function Fn(a, c, b) {
                a = Oa(b);
                b = a[1];
                "track" === a[0] && c({ version: "0", fc: b });
            }
            function Gn(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(Hn, d + "." + b.fc)) &&
                        ((c && G(b, In)) || a("ym-" + b + "-" + d));
                }
            }
            function Jn(a, c, b) {
                if ("rt" === b)
                    return "https://" + Zh(a, c) + ".mc.yandex.ru/watch/3/1";
                if ("mf" === b) {
                    b = S(a);
                    b = me(b.protocol + "//" + b.hostname + b.pathname);
                    c = ld(a, c);
                    var d = "";
                    do d += Xa(a);
                    while (d.length < c.length);
                    d = d.slice(0, c.length);
                    a = "";
                    for (var e = 0; e < c.length; e += 1)
                        a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
                    a = [d, a];
                    return (
                        "https://adstat.yandex.ru/track?service=metrika&id=" +
                        a[1] +
                        "&mask=" +
                        a[0] +
                        "&ref=" +
                        b
                    );
                }
            }
            function Kn(a, c, b) {
                var d,
                    e = zf(c).Lb;
                return pa(
                    a,
                    "pi",
                    c
                )({ K: Ja(((d = {}), (d[e] = 1), d)) }, [b]);
            }
            function Ln(a, c, b) {
                return new L(function (d, e) {
                    if ($h(a, ne, "isp")) {
                        var f = F,
                            g = function (h) {
                                ("1" === h ? d : e)();
                                f();
                                ai(ne, "isp");
                            };
                        f = ja(a).F(
                            a,
                            ["message"],
                            D([b, g], B(a, "isp.stat.m", Mn))
                        );
                        V(a, g, 1500);
                    } else e();
                });
            }
            function Mn(a, c, b) {
                var d = n(b, "data");
                if (fa(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d && b.source
                        ? b.source.postMessage("sc.images*" + a, "*")
                        : "sc.image" === d && f === a && c(e);
                }
            }
            function Nn(a, c) {
                var b = Ua(a),
                    d = "wv2rf:" + K(c),
                    e = c.Xb,
                    f = Af(a),
                    g = b.C(d),
                    h = c.Li;
                return Y(f) || Wa(g)
                    ? Ca(function (k, l) {
                          na(c, function (m) {
                              var p = !!n(m, "settings.webvisor.forms");
                              p = !n(m, "settings.x3") && p;
                              f = Af(a) || n(m, "settings.eu");
                              b.D(d, pb(p));
                              l({ Xb: e, Fd: !!f, wf: p, Yf: h });
                          });
                      })
                    : Bf({ Xb: e, Fd: f, wf: !!Ga(g), Yf: h });
            }
            function On() {
                var a = O(
                    function (c, b) {
                        c[b[0]] = { Xc: 0, sg: 1 / b[1] };
                        return c;
                    },
                    {},
                    [
                        ["blur", 0.0034],
                        ["change", 0.0155],
                        ["click", 0.01095],
                        ["deviceRotation", 2e-4],
                        ["focus", 0.0061],
                        ["mousemove", 0.5132],
                        ["scroll", 0.4795],
                        ["selection", 0.0109],
                        ["touchcancel", 2e-4],
                        ["touchend", 0.0265],
                        ["touchforcechange", 0.0233],
                        ["touchmove", 0.1442],
                        ["touchstart", 0.027],
                        ["zoom", 0.0014],
                    ]
                );
                return {
                    og: function (c) {
                        if (c.length)
                            return {
                                type: "activity",
                                data: O(
                                    function (b, d) {
                                        var e = a[d];
                                        return Math.round(b + e.Xc * e.sg);
                                    },
                                    0,
                                    ea(a)
                                ),
                            };
                    },
                    Yh: function (c) {
                        c && (c = a[c.data.type || c.event]) && (c.Xc += 1);
                    },
                };
            }
            function Pn(a) {
                return {
                    eh: function () {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null;
                    },
                    gh: function () {
                        if (a.document.doctype) {
                            var c = C(
                                    {
                                        name: "html",
                                        publicId: "",
                                        systemId: "",
                                    },
                                    a.document.doctype
                                ),
                                b = c.publicId,
                                d = c.systemId;
                            return (
                                "<!DOCTYPE " +
                                H("", [
                                    c.name,
                                    b ? ' PUBLIC "' + b + '"' : "",
                                    !b && d ? " SYSTEM" : "",
                                    d ? ' "' + d + '"' : "",
                                ]) +
                                ">"
                            );
                        }
                        return null;
                    },
                };
            }
            function Qn(a, c, b) {
                var d = md(a),
                    e = ja(a),
                    f = ob(a),
                    g = c.qd(),
                    h =
                        !n(a, "postMessage") ||
                        (f && !n(a, "parent.postMessage")),
                    k = u(d, Q);
                if (h) {
                    if (!g)
                        return (
                            V(a, I(d.ba, d, "i", { ta: !1 }), 10),
                            { pd: k, Jf: F, stop: F }
                        );
                    Ta(Pa());
                }
                d.F(["sr"], function (r) {
                    var t,
                        y = bi(a, r.source);
                    y &&
                        Cf(
                            a,
                            r.source,
                            ((t = {}),
                            (t.type = "\u043d"),
                            (t.frameId = c.ra().Y(y)),
                            t)
                        );
                });
                d.F(["sd"], function (r) {
                    var t = r.data;
                    r = r.source;
                    (a === r || bi(a, r)) &&
                        d.ba("sdr", { data: t.data, frameId: t.frameId });
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function () {
                            var r;
                            Cf(a, a.parent, ((r = {}), (r.type = "sr"), r));
                            m = V(a, p, 100, "if.i");
                        };
                    p();
                    var q = function (r) {
                        d.ga(["\u043d"], q);
                        la(a, m);
                        var t = Qc(a, r.origin).host;
                        l ||
                            r.source !== a.parent ||
                            !r.data.frameId ||
                            ("about:blank" !== S(a).host && !G(t, b)) ||
                            ((l = !0),
                            d.ba("i", { frameId: r.data.frameId, ta: !0 }));
                    };
                    d.F(["\u043d"], q);
                    V(
                        a,
                        function () {
                            d.ga(["\u043d"], q);
                            la(a, m);
                            l || ((l = !0), d.ba("i", { ta: !1 }));
                        },
                        2e3,
                        "if.r"
                    );
                }
                e = e.F(a, ["message"], function (r) {
                    var t = Lb(a, r.data);
                    t &&
                        t.type &&
                        G(t.type, Rn) &&
                        d.ba(t.type, {
                            data: t,
                            source: r.source,
                            origin: r.origin,
                        });
                });
                return {
                    pd: k,
                    Jf: function (r) {
                        var t;
                        return Cf(
                            a,
                            a.parent,
                            ((t = {}),
                            (t.frameId = c.qd()),
                            (t.data = r),
                            (t.type = "sd"),
                            t)
                        );
                    },
                    stop: e,
                };
            }
            function bi(a, c) {
                try {
                    return rb(
                        w(U("contentWindow"), Ba(c)),
                        Ia(a.document.querySelectorAll("iframe"))
                    );
                } catch (b) {
                    return null;
                }
            }
            function Cf(a, c, b) {
                c || Ta(Pa());
                a = Mb(a, b);
                c.postMessage(a, "*");
            }
            function ci() {
                return (
                    gc() +
                    gc() +
                    "-" +
                    gc() +
                    "-" +
                    gc() +
                    "-" +
                    gc() +
                    "-" +
                    gc() +
                    gc() +
                    gc()
                );
            }
            function gc() {
                return Math.floor(65536 * (1 + Math.random()))
                    .toString(16)
                    .substring(1);
            }
            function Sn(a, c) {
                if (fa(c)) return c;
                var b = a.textContent;
                if (fa(b)) return b;
                b = a.data;
                if (fa(b)) return b;
                b = a.nodeValue;
                return fa(b) ? b : "";
            }
            function Tn(a, c, b, d, e) {
                void 0 === d && (d = {});
                void 0 === e && (e = Ma(c));
                var f = C(
                    O(
                        function (h, k) {
                            h[k.name] = k.value;
                            return h;
                        },
                        {},
                        Ia(c.attributes)
                    ),
                    d
                );
                C(f, Un(c, e, f));
                var g =
                    (d = zb(
                        function (h, k) {
                            var l = k[0],
                                m = oe(a, c, l, k[1], b, e),
                                p = m.value;
                            Z(p) ? delete f[l] : (f[l] = p);
                            return h || m.mb;
                        },
                        !1,
                        Ea(f)
                    )) && Mc(c);
                g && ((f.width = g.width), (f.height = g.height));
                return { mb: d, pg: f };
            }
            function Un(a, c, b) {
                var d = {};
                Df(a)
                    ? (d.value = a.value || b.value)
                    : "IMG" !== c || b.src || (d.src = "");
                return d;
            }
            function oe(a, c, b, d, e, f) {
                void 0 === f && (f = Ma(c));
                var g = { mb: !1, value: d };
                if (Df(c))
                    "value" === b
                        ? !Z(d) &&
                          "" !== d &&
                          ((b = e.Fd),
                          (f = e.wf),
                          (e = nd(a, c)),
                          f
                              ? ((b = Rc(a, c, b)),
                                (a = b.ob),
                                (c = b.fb),
                                (b = b.Va),
                                (g.mb = !c && (e || a)))
                              : ((g.mb = e),
                                (b = !(c && hc("ym-record-keys", c)))),
                          b || e) &&
                          ((d = "" + d),
                          (g.value =
                              0 < d.length ? di("\u2022", d.length) : ""))
                        : "checked" === b &&
                          G((c.getAttribute("type") || "").toLowerCase(), Vn)
                        ? (g.value = c.checked ? "checked" : null)
                        : Wn.test(b) && Ef(a, c) && (g.value = null);
                else if ("IMG" === f && "src" === b)
                    (e = nd(a, c))
                        ? ((g.mb = e),
                          (g.value =
                              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="))
                        : (g.value =
                              (c.getAttribute("srcset") ? c.currentSrc : "") ||
                              c.src);
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (
                    G(b, ["srcset", "integrity", "crossorigin", "password"]) ||
                    (2 < b.length && 0 === mb(b, "on")) ||
                    ("IFRAME" === f && "src" === b) ||
                    ("SCRIPT" === f && G(b, ["src", "type"]))
                )
                    g.value = null;
                return g;
            }
            function Ff(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    H: function (e, f) {
                        return B(a, d + "." + b + "." + f, e, void 0, c);
                    },
                };
            }
            function Xn(a, c, b, d, e) {
                function f() {
                    l && l.stop();
                }
                if (!c.xb) return L.resolve(F);
                var g = pa(a, "4", c),
                    h = { K: Ja() },
                    k = new Yn(a, b, function (m, p, q) {
                        if (!g) return L.resolve();
                        var r = "wv-data=" + id(m, !0),
                            t = B(a, "m.n.m.s");
                        p = {};
                        p["wv-part"] = "" + q;
                        q = m.length;
                        for (var y = 0, E = 255, R = 255, P, za, Da; q; ) {
                            P = 21 < q ? 21 : q;
                            q -= P;
                            do
                                (za =
                                    "string" === typeof m
                                        ? m.charCodeAt(y)
                                        : m[y]),
                                    (y += 1),
                                    255 < za &&
                                        ((Da = za >> 8),
                                        (za &= 255),
                                        (za ^= Da)),
                                    (E += za),
                                    (R += E);
                            while (--P);
                            E = (E & 255) + (E >> 8);
                            R = (R & 255) + (R >> 8);
                        }
                        m =
                            (((E & 255) + (E >> 8)) << 8) |
                            ((R & 255) + (R >> 8));
                        return g(
                            C({}, h, {
                                Z: { da: r },
                                J:
                                    ((p["wv-check"] =
                                        "" + (65535 === m ? 0 : m)),
                                    (p["wv-type"] = b.type),
                                    p),
                            }),
                            c
                        )["catch"](t);
                    }),
                    l = Zn(a, k, d, e);
                return na(c, function (m) {
                    m && J(a).D("isEU", n(m, "settings.eu"));
                    J(a).C("oo") || (l && ei(a, m) && l.start());
                    return f;
                });
            }
            function Zn(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = ja(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = I(c.flush, c),
                    m = qa(function (r, t) {
                        B(a, "hfv." + r, function () {
                            try {
                                var y = t.type;
                            } catch (E) {
                                return;
                            }
                            y = G(y, d);
                            c.push(t, { type: r });
                            y && l();
                        })();
                    }),
                    p = B(a, "sfv", function () {
                        var r = b(a),
                            t = $n(a);
                        x(function (y) {
                            f.push(g.F(y.target, [y.event], m(y.type)));
                        }, r);
                        x(function (y) {
                            f.push(
                                g.F(
                                    y.target,
                                    [y.event],
                                    B(
                                        a,
                                        "hff." + y.type + "." + y.event,
                                        function (E) {
                                            x(
                                                Ca({ l: a, na: E, flush: l }),
                                                y.O
                                            );
                                        }
                                    )
                                )
                            );
                        }, t);
                        k = fi(a, "form", e);
                        e.attachEvent &&
                            ((r = fi(a, "form *", e)),
                            x(function (y) {
                                f.push(g.F(y, ["submit"], m("form")));
                            }, k),
                            x(function (y) {
                                Gf(y) &&
                                    f.push(g.F(y, ["change"], m("formInput")));
                            }, r));
                        x(function (y) {
                            var E = y.submit;
                            if (
                                M(E) ||
                                ("object" === typeof E && ao.test("" + E))
                            )
                                (y[h] = E),
                                    (y.submit = B(a, "fv", function () {
                                        var R = { target: y, type: "submit" };
                                        m("document")(R);
                                        return y[h]();
                                    }));
                        }, k);
                    }),
                    q = B(a, "ufv", function () {
                        x(ta, f);
                        x(function (r) {
                            r && (r.submit = r[h]);
                        }, k);
                        c.flush();
                    });
                return { start: p, stop: q };
            }
            function bo(a, c) {
                var b = ha(function (e) {
                        return 0 < e.O.length;
                    }, c),
                    d = gi({ target: a.document, type: "document" });
                return z(w(Q, d, co(a)), b);
            }
            function hi(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Ya] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        pe(h) && !h[Ya] && wa(d, yc(b, h));
                    }
                } else wa(d, yc(b, c));
                return d;
            }
            function Hf(a) {
                if (od) {
                    od = !1;
                    var c = Ab(a.l),
                        b = [];
                    ib(a.l, b, 15) ? (a = []) : (T(b, c), (a = b));
                    return a;
                }
            }
            function ii(a) {
                if (!od) {
                    od = !0;
                    a = Ab(a.l);
                    var c = [];
                    Ub(c, 14);
                    T(c, a);
                    return c;
                }
            }
            function eo(a, c, b) {
                var d = c[Ya];
                if (d) {
                    a: {
                        var e = Ab(a),
                            f = c[Ya];
                        if (0 < f) {
                            var g = [];
                            c = If(a, c);
                            var h = zc[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.rf) {
                                h.rf = k;
                                if (ib(a, g, 9)) {
                                    a = [];
                                    break a;
                                }
                                T(g, e);
                                T(g, f);
                                T(g, c[0]);
                                T(g, c[1]);
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (ib(a, g, 10)) {
                                    a = [];
                                    break a;
                                }
                                T(g, e);
                                T(g, f);
                                T(g, c[2]);
                                T(g, c[3]);
                            }
                            if (g.length) {
                                a = g;
                                break a;
                            }
                        }
                        a = [];
                    }
                    wa(b, a);
                }
                return d;
            }
            function Rc(a, c, b) {
                void 0 === b && (b = !1);
                if (!c) return { Va: !1, fb: !1, ob: !1 };
                var d = c.getAttribute("type") || c.type;
                if ("button" === d) return { Va: !1, fb: !1, ob: !1 };
                var e = ha(ji, [c.className, c.id, c.name]),
                    f = c && hc("ym-record-keys", c);
                d = (d && G(d, ki)) || Za(db(fo), e);
                var g;
                (g = d) ||
                    ((g = c.placeholder),
                    (g = Za(db(go), e) || (ji(g) && ho.test(g || ""))));
                e = g;
                return {
                    Va: !f && (Jf(a, c) || (e && b) || (e && !d && !b)),
                    fb: f,
                    ob: e,
                };
            }
            function Jf(a, c) {
                return Ef(a, c) || pd(a, c) ? !0 : nd(a, c);
            }
            function ji(a) {
                return !!(a && 2 < a.length);
            }
            function Df(a) {
                try {
                    var c = Ma(a);
                    if (G(c, Kf)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || G(b.toLocaleLowerCase(), io);
                        }
                        return !0;
                    }
                } catch (d) {}
                return !1;
            }
            function li(a, c) {
                return c && hc("(ym-disable-submit|-metrika-noform)", c);
            }
            function jo(a, c) {
                return H(
                    "",
                    z(function (b) {
                        return a.isNaN(b)
                            ? ko.test(b)
                                ? ((b = b.toUpperCase() === b ? lo : mo),
                                  String.fromCharCode(Xa(a, b[0], b[1])))
                                : b
                            : "" + Xa(a, 0, 9);
                    }, c.split(""))
                );
            }
            function nd(a, c) {
                if (Z(c)) return !1;
                if (Lf(c)) {
                    var b = c.parentNode;
                    return (Z(b) ? 0 : 11 === b.nodeType)
                        ? !1
                        : nd(a, c.parentNode);
                }
                b = mi(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
                return d &&
                    b.call(
                        c,
                        ".ym-show-content,.ym-hide-content .ym-show-content *"
                    )
                    ? !1
                    : d;
            }
            function ei(a, c) {
                var b = Sc(a),
                    d = b.C("visorc");
                G(d, ["w", "b"]) || (d = "");
                (ni(a) && oi(a, qe, "visorc") && !no.test(sb(a) || "")) ||
                    (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = (J(a).C("hitId") % 1e4) / 1e4 < e ? "w" : "b");
                b.D("visorc", d, 30);
                return "w" === d;
            }
            function oo(a, c) {
                return {
                    N: function (b, d) {
                        b.K.Pb("we", Nb(c.xb));
                        pi(a, c, b, "rn");
                        d();
                    },
                };
            }
            function qi(a, c, b) {
                if (ri.isEnabled(a)) return new ri(a, c);
                if (si.isEnabled(a)) return new si(a, b);
            }
            function ti(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return dc([b], function (f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e;
                });
            }
            function ui(a, c, b) {
                a = c(b);
                c = [F, 0, 0];
                var d = [0, c, c, void 0];
                return dc(a, function (e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1)
                        Ac(d, W(l)),
                            (h = k(h)),
                            l & 2 && Ac(d, W(h[1])),
                            Ac(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g; ) {
                            var m = k(h[g]);
                            m.push([0, 0, Mf]);
                            m.push([0, W(l), Ac]);
                            m.unshift([0, 0, Nf]);
                            wa(f, m);
                            --g;
                        }
                    else if (g & 2) {
                        k = e[2];
                        var p = e[3],
                            q = e[4],
                            r = e[5],
                            t = ea(h);
                        for (g = t.length - 1; 0 <= g; )
                            (m = t[g]),
                                (m = [
                                    [0, 0, Nf],
                                    [q, h[m], r],
                                    [k, m, p],
                                    [0, 0, Mf],
                                    [0, W(l), Ac],
                                ]),
                                wa(f, m),
                                --g;
                    } else
                        (m = k(h)),
                            m.push([0, 0, Mf]),
                            m.push([0, W(l), Ac]),
                            m.unshift([0, 0, Nf]),
                            wa(f, m);
                    return d;
                });
            }
            function Nf(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3]
                    ? ((a[0] = a[3][0]),
                      (a[1] = a[3][1]),
                      (a[2] = a[3][2]),
                      (a[3] = a[3][3]))
                    : ((a[0] = 0), (a[1] = [F, 0, 0]), (a[2] = a[1]));
                Ac(a, W(b));
                b && ((a[2][3] = c[3]), (a[2] = d), (a[0] += b));
            }
            function Mf(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [F, 0, 0];
                a[2] = a[1];
                a[0] = 0;
            }
            function Ac(a, c) {
                a[0] += c[1];
                a[2][3] = c;
                a[2] = c;
            }
            function vi(a) {
                return [
                    [1857, a.partsTotal, W],
                    [1793, a.activity, W],
                    [1744, a.textChangeMutation, po],
                    [1680, a.removedNodesMutation, qo],
                    [1616, a.addedNodesMutation, ro],
                    [1552, a.attributesChangeMutation, so],
                    [1488, a.publishersHeader, to],
                    [1424, a.articleInfo, uo],
                    [1360, a.focusEvent, vo],
                    [1296, a.fatalErrorEvent, wo],
                    [1232, a.deviceRotationEvent, xo],
                    [1168, a.keystrokesEvent, yo],
                    [1104, a.resizeEvent, zo],
                    [1040, a.zoomEvent, Ao],
                    [976, a.touchEvent, Bo],
                    [912, a.changeEvent, Co],
                    [848, a.selectionEvent, Do],
                    [784, a.scrollEvent, Eo],
                    [720, a.mouseEvent, Fo],
                    [656, a.zj, Go],
                    [592, a.page, Ho],
                    [513, a.end, Bc],
                    [449, a.partNum, W],
                    [401, a.chunk, Io],
                    [257, a.frameId, ra],
                    [193, a.event, W],
                    [129, a.type, W],
                    [65, a.stamp, W],
                ];
            }
            function Jo(a) {
                return [[84, a.ni, vi]];
            }
            function Ko(a) {
                return [
                    [129, a.position, ra],
                    [81, a.name, ca],
                ];
            }
            function Lo(a) {
                return [[81, a.name, ca]];
            }
            function Mo(a) {
                return [[81, a.name, ca]];
            }
            function uo(a) {
                return [
                    [593, a.updateDate, ca],
                    [532, a.rubric, Ko],
                    [449, a.chars, ra],
                    [401, a.publicationDate, ca],
                    [340, a.topics, Lo],
                    [276, a.authors, Mo],
                    [209, a.pageTitle, ca],
                    [145, a.pageUrlCanonical, ca],
                    [65, a.id, W],
                ];
            }
            function No(a) {
                return [
                    [513, a.chars, ra],
                    [489, a.maxScrolled, qd],
                    [385, a.involvedTime, ra],
                    [321, a.height, ra],
                    [257, a.width, ra],
                    [193, a.y, ra],
                    [129, a.x, ra],
                    [65, a.id, W],
                ];
            }
            function to(a) {
                return [
                    [129, a.involvedTime, ra],
                    [84, a.articleMeta, No],
                ];
            }
            function vo(a) {
                return [[65, a.target, ra]];
            }
            function wo(a) {
                return [
                    [209, a.stack, ca],
                    [145, a.Pg, ca],
                    [81, a.code, ca],
                ];
            }
            function xo(a) {
                return [
                    [193, a.orientation, ra],
                    [129, a.height, W],
                    [65, a.width, W],
                ];
            }
            function yo(a) {
                return [[84, a.keystrokes, Oo]];
            }
            function Oo(a) {
                return [
                    [273, a.modifier, ca],
                    [193, a.isMeta, Bc],
                    [145, a.key, ca],
                    [65, a.id, W],
                ];
            }
            function zo(a) {
                return [
                    [257, a.pageHeight, W],
                    [193, a.pageWidth, W],
                    [129, a.height, W],
                    [65, a.width, W],
                ];
            }
            function Ao(a) {
                return [
                    [193, a.y, ra],
                    [129, a.x, ra],
                    [105, a.level, qd],
                ];
            }
            function Bo(a) {
                return [
                    [129, a.target, ra],
                    [84, a.touches, Po],
                ];
            }
            function Po(a) {
                return [
                    [297, a.force, qd],
                    [233, a.y, qd],
                    [169, a.x, qd],
                    [81, a.id, ca],
                ];
            }
            function Co(a) {
                return [
                    [257, a.target, ra],
                    [193, a.hidden, Bc],
                    [129, a.checked, Bc],
                    [81, a.value, ca],
                ];
            }
            function Do(a) {
                return [
                    [257, a.endNode, W],
                    [193, a.startNode, W],
                    [129, a.end, ra],
                    [65, a.start, ra],
                ];
            }
            function Eo(a) {
                return [
                    [257, a.target, ra],
                    [193, a.page, Bc],
                    [129, a.y, ra],
                    [65, a.x, ra],
                ];
            }
            function Fo(a) {
                return [
                    [193, a.target, ra],
                    [129, a.y, W],
                    [65, a.x, W],
                ];
            }
            function Go(a) {
                return [
                    [148, a.changes, Qo],
                    [65, a.target, ra],
                ];
            }
            function Qo(a) {
                return [
                    [193, a.index, W],
                    [145, a.op, ca],
                    [81, a.style, ca],
                ];
            }
            function po(a) {
                return [
                    [209, a.value, ca],
                    [129, a.index, W],
                    [65, a.target, W],
                ];
            }
            function qo(a) {
                return [
                    [129, a.index, W],
                    [69, a.nodes, ra],
                ];
            }
            function ro(a) {
                return [
                    [129, a.index, W],
                    [84, a.nodes, wi],
                ];
            }
            function so(a) {
                return [
                    [210, a.attributes, 81, ca, 145, ca],
                    [129, a.index, W],
                    [65, a.target, W],
                ];
            }
            function Ho(a) {
                return [
                    [852, a.content, wi],
                    [785, a.tabId, ca],
                    [705, a.recordStamp, Ro],
                    [656, a.location, So],
                    [592, a.viewport, xi],
                    [528, a.screen, xi],
                    [449, a.hasBase, Bc],
                    [401, a.base, ca],
                    [337, a.referrer, ca],
                    [273, a.ua, ca],
                    [209, a.address, ca],
                    [145, a.title, ca],
                    [81, a.doctype, ca],
                ];
            }
            function So(a) {
                return [
                    [209, a.path, ca],
                    [145, a.protocol, ca],
                    [81, a.host, ca],
                ];
            }
            function xi(a) {
                return [
                    [129, a.height, ra],
                    [65, a.width, ra],
                ];
            }
            function wi(a) {
                return [
                    [513, a.hidden, Bc],
                    [449, a.prev, W],
                    [385, a.next, W],
                    [337, a.content, ca],
                    [257, a.parent, W],
                    [210, a.attributes, 81, ca, 145, ca],
                    [145, a.name, ca],
                    [65, a.id, W],
                ];
            }
            function ca(a) {
                var c = To({}, a, [], 0);
                return c ? [Uo, c, a] : [yi, 0, 0];
            }
            function Io(a) {
                return [Vo, a.length, a];
            }
            function Bc(a) {
                return [yi, 1, a ? 1 : 0];
            }
            function Ro(a) {
                a = zi(a);
                var c = a[0],
                    b = a[1],
                    d = ((b >>> 28) | (c << 4)) >>> 0;
                c >>>= 24;
                return [
                    Ai,
                    0 === c
                        ? 0 === d
                            ? 16384 > b
                                ? 128 > b
                                    ? 1
                                    : 2
                                : 2097152 > b
                                ? 3
                                : 4
                            : 16384 > d
                            ? 128 > d
                                ? 5
                                : 6
                            : 2097152 > d
                            ? 7
                            : 8
                        : 128 > c
                        ? 9
                        : 10,
                    a,
                ];
            }
            function qd(a) {
                return [Wo, 4, a];
            }
            function ra(a) {
                return 0 > a ? [Ai, 10, zi(a)] : W(a);
            }
            function W(a) {
                return [
                    Xo,
                    128 > a
                        ? 1
                        : 16384 > a
                        ? 2
                        : 2097152 > a
                        ? 3
                        : 268435456 > a
                        ? 4
                        : 5,
                    a,
                ];
            }
            function Xo(a, c, b, d) {
                for (a = c; 127 < a; ) (b[d++] = (a & 127) | 128), (a >>>= 7);
                b[d] = a;
            }
            function yi(a, c, b, d) {
                b[d] = c;
            }
            function Vo(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a];
            }
            function Bi(a) {
                return function (c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (((c = b.charCodeAt(h)), 128 > c))
                            a ? (g += 1) : (d[e++] = c);
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue;
                                }
                                d[e++] = (c >> 6) | 192;
                            } else {
                                if (
                                    55296 === (c & 64512) &&
                                    56320 ===
                                        ((f = b.charCodeAt(h + 1)) & 64512)
                                ) {
                                    if (a) {
                                        g += 4;
                                        continue;
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = (c >> 18) | 240;
                                    d[e++] = ((c >> 12) & 63) | 128;
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue;
                                    }
                                    d[e++] = (c >> 12) | 224;
                                }
                                d[e++] = ((c >> 6) & 63) | 128;
                            }
                            d[e++] = (c & 63) | 128;
                        }
                    return a ? g : e;
                };
            }
            function Wo(a, c, b, d) {
                return Yo(a)(a, c, b, d);
            }
            function Zo(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) rd(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) rd(2143289344, b, d);
                else if (3.4028234663852886e38 < c)
                    rd(((e << 31) | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875e-38 > c)
                    rd(
                        ((e << 31) |
                            a.Math.round(c / 1.401298464324817e-45)) >>>
                            0,
                        b,
                        d
                    );
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    rd(
                        ((e << 31) |
                            ((f + 127) << 23) |
                            (Math.round(c * a.Math.pow(2, -f) * 8388608) &
                                8388607)) >>>
                            0,
                        b,
                        d
                    );
                }
            }
            function rd(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = (a >>> 8) & 255;
                c[b + 2] = (a >>> 16) & 255;
                c[b + 3] = a >>> 24;
            }
            function Ai(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a; )
                    (b[d++] = (c & 127) | 128),
                        (c = ((c >>> 7) | (a << 25)) >>> 0),
                        (a >>>= 7);
                for (; 127 < c; ) (b[d++] = (c & 127) | 128), (c >>>= 7);
                b[d++] = c;
            }
            function zi(a) {
                if (!a) return [0, 0];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = ((a - b) / 4294967296) >>> 0;
                c &&
                    ((a = ~a >>> 0),
                    (b = ~b >>> 0),
                    4294967295 < ++b && ((b = 0), 4294967295 < ++a && (a = 0)));
                return [a, b];
            }
            function pi(a, c, b, d) {
                var e,
                    f = b.J;
                f.wmode = "0";
                f["wv-hit"] = f["wv-hit"] || "" + Cc(a);
                f["page-url"] = f["page-url"] || S(a).href;
                d && (f[d] = f[d] || "" + Xa(a));
                a = {
                    ma: { za: "webvisor/" + c.id },
                    Z: C(b.Z || {}, {
                        Za: ((e = {}), (e["Content-Type"] = "text/plain"), e),
                        Rc: "POST",
                    }),
                    J: f,
                };
                C(b, a);
            }
            function $o(a, c) {
                return na(c, function (b) {
                    var d = J(a),
                        e = d.C,
                        f = u("dSync", d.D);
                    K(c);
                    if (e("dSync", !1)) f(1);
                    else
                        return (
                            f(!0),
                            Ci(a, b, {
                                cb: c,
                                Lb: "s",
                                Ld: "ds",
                                Oc: f,
                                Bi: function (g, h, k) {
                                    var l = g.Jc;
                                    g = g.host;
                                    if (n(l, "settings")) return Ta(Pa("ds.e"));
                                    h = h(da) - k;
                                    k = g[1];
                                    var m, p;
                                    l = Ja(
                                        ((m = {}),
                                        (m.di = l),
                                        (m.dit = h),
                                        (m.dip = k),
                                        m)
                                    );
                                    m =
                                        ((p = {}),
                                        (p["page-url"] = S(a).href),
                                        p);
                                    return pa(
                                        a,
                                        "S",
                                        Di
                                    )({ K: l, J: m }, Di).then(
                                        u(10, f),
                                        B(a, "ds.rs")
                                    );
                                },
                            })
                        );
                });
            }
            function Ci(a, c, b) {
                var d,
                    e = b.cb,
                    f = b.Oc;
                f = void 0 === f ? F : f;
                var g = ka(a),
                    h = ap(a, c.userData, e),
                    k = bp(a),
                    l = w(Ei, D([cp, dp], re))(a),
                    m = n(c, "settings.sbp");
                b.Oc = f;
                m && (b.data = C({}, m, ((d = {}), (d.c = e.id), d)));
                return k.length
                    ? ep(a, g, h, c, l, b).then(function () {
                          return fp(a, k, h, g, l, b);
                      }, F)
                    : (f(2), L.resolve());
            }
            function bp(a) {
                var c = se(a);
                a = w(Of, tc(["iPhone", "iPad"]))(a);
                return c ? gp : a ? hp : [];
            }
            function fp(a, c, b, d, e, f) {
                e = f.Bi;
                var g = void 0 === e ? F : e,
                    h = f.Ld;
                e = f.Oc;
                var k = void 0 === e ? F : e,
                    l = d(da);
                return ip(
                    a,
                    c,
                    f
                )(
                    $a(
                        function (m) {
                            k(6);
                            x(function (p) {
                                p && Pc(a, h + ".s", p);
                            }, m);
                            m = d(nb);
                            b.D(h, m).then(u(7, k));
                        },
                        function (m) {
                            k(8);
                            b.D(h, d(nb)).then(u(9, k));
                            g(m, d, l);
                        }
                    )
                );
            }
            function ep(a, c, b, d, e, f) {
                var g = f.Ld,
                    h = f.cb,
                    k = f.Oc;
                return new L(function (l, m) {
                    var p = b.C(g, 0);
                    p = parseInt("" + p, 10);
                    return c(nb) - p <= e.pe
                        ? (k(3), m())
                        : jp(a)
                        ? l(void 0)
                        : he(d)
                        ? (k(4), m())
                        : l(kp(a, h)["catch"](w(sd(u(5, k)), Ta)));
                });
            }
            function ip(a, c, b) {
                var d = b.Lb,
                    e = b.data,
                    f = pa(a, d, b.cb);
                a = C({}, Fi);
                e && C(a.J, e);
                return lp(
                    z(function (g) {
                        return mp(
                            f(
                                C({ Z: { Ce: !1, ce: !0 } }, Fi),
                                z(function (h) {
                                    var k = h[1],
                                        l = h[2];
                                    h = H(
                                        "",
                                        z(function (m) {
                                            return String.fromCharCode(
                                                m.charCodeAt(0) + 10
                                            );
                                        }, h[0].split(""))
                                    );
                                    return (
                                        "http" +
                                        (l ? "s" : "") +
                                        "://" +
                                        h +
                                        ":" +
                                        k +
                                        "/" +
                                        np[d]
                                    );
                                }, g)
                            ).then(function (h) {
                                return C({}, h, { host: g[h.$f] });
                            })
                        );
                    }, c)
                );
            }
            function ap(a, c, b) {
                var d = c || {},
                    e = pa(a, "u", b),
                    f = Ua(a);
                return {
                    C: function (g, h) {
                        return Y(d[g]) ? f.C(g, h) : d[g];
                    },
                    D: function (g, h) {
                        var k,
                            l = "" + h;
                        d[g] = l;
                        f.D(g, l);
                        return e(
                            { J: ((k = {}), (k.key = g), (k.value = l), k) },
                            [va.Qa + "//" + ic + "/user_storage_set"],
                            {}
                        )["catch"](B(a, "u.d.s.s"));
                    },
                };
            }
            function op(a) {
                return {
                    N: function (c, b) {
                        J(a).C("oo") || b();
                    },
                };
            }
            function pp(a, c) {
                try {
                    var b = c[0];
                    var d = b[1];
                } catch (e) {
                    return function () {
                        return L.resolve();
                    };
                }
                return function (e) {
                    var f,
                        g =
                            ((f = {}),
                            (f["browser-info"] = qp),
                            (f["page-url"] =
                                a.location && "" + a.location.href),
                            f);
                    return d && (e = Mb(a, e))
                        ? d(rp, { $a: g, ha: [], da: "site-info=" + me(e) })[
                              "catch"
                          ](F)
                        : L.resolve();
                };
            }
            function sp(a, c) {
                var b = te(function (d, e) {
                    return d[1].ea > e[1].ea ? 1 : -1;
                }, Ea(Vd));
                b = z(function (d) {
                    var e = d[0],
                        f = d[1].Na;
                    d = Jb(c, e) && !Z(c[e]);
                    e = c[e] !== (f || Q)(void 0);
                    return pb(d && e);
                }, b);
                return ue(H("", b));
            }
            function tp(a, c) {
                if (
                    n(a, "disableYaCounter" + c.id) ||
                    n(a, "Ya.disableMetrica")
                ) {
                    var b = K(c);
                    delete J(a).C("counters", {})[b];
                    Ta(Pa("oo.e"));
                }
            }
            function up(a) {
                if (td(a)) return null;
                var c = vp(a),
                    b = c.uf;
                Y(b) &&
                    ((c.uf = null),
                    wp(a).then(function (d) {
                        c.uf = d;
                    }));
                return b ? 1 : null;
            }
            function xp(a, c, b) {
                b = b.J;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = ud(a);
                if (!a) return null;
                var d = (b = null);
                n(a, "getEntriesByType") &&
                    (d = n(a.getEntriesByType("navigation"), "0")) &&
                    (b = yp);
                if (!b) {
                    var e = n(a, "timing");
                    e && ((b = zp), (d = e));
                }
                if (!b) return null;
                a = Ap(a, d, b);
                c = K(c);
                c = Bp(c);
                return (c = Cp(c, a)) && H(",", c);
            }
            function Cp(a, c) {
                var b = a.length
                    ? z(function (d, e) {
                          var f = c[e];
                          return f === d ? null : f;
                      }, a)
                    : c;
                a.length = 0;
                x(w(Q, La("push", a)), c);
                return ha(Ba(null), b).length === a.length ? null : b;
            }
            function Ap(a, c, b) {
                return z(function (d) {
                    var e = d[0],
                        f = d[1];
                    if (M(e)) return e(a, c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) &&
                        (g = 0 === c[e] && 0 === c[f]) &&
                        ((g = d[1]), (g = !(Gi[d[0]] || Gi[g])));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36e5 < d ? null : d;
                }, b);
            }
            function ve(a, c) {
                try {
                    var b = c.localStorage.getItem(a);
                    return b && id(Xd(b));
                } catch (d) {}
                return null;
            }
            function Xd(a) {
                for (var c = [], b = 0; b < a.length; b++) {
                    var d = a.charCodeAt(b);
                    128 > d
                        ? c.push(d)
                        : (127 < d && 2048 > d
                              ? c.push((d >> 6) | 192)
                              : (c.push((d >> 12) | 224),
                                c.push(((d >> 6) & 63) | 128)),
                          c.push((d & 63) | 128));
                }
                return c;
            }
            function id(a, c) {
                void 0 === c && (c = !1);
                for (
                    var b = a.length, d = b - (b % 3), e = [], f = 0;
                    f < d;
                    f += 3
                ) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push(
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                            (g >> 18) & 63
                        ],
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                            (g >> 12) & 63
                        ],
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                            (g >> 6) & 63
                        ],
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                            g & 63
                        ]
                    );
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push(
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                                (b >> 6) & 63
                            ],
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                                b & 63
                            ],
                            "=",
                            "="
                        );
                        break;
                    case 2:
                        (b = (a[d] << 10) + (a[d + 1] << 2)),
                            e.push(
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                                    (b >> 12) & 63
                                ],
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                                    (b >> 6) & 63
                                ],
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                                    b & 63
                                ],
                                "="
                            );
                }
                e = H("", e);
                return c ? Hi(e, !0) : e;
            }
            function Ph(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = Hi(b)); b.length % 4; ) b += "=";
                do {
                    var f = jc(
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            b.charAt(e++)
                        ),
                        g = jc(
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            b.charAt(e++)
                        ),
                        h = jc(
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            b.charAt(e++)
                        ),
                        k = jc(
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            b.charAt(e++)
                        );
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l = (f << 18) | (g << 12) | (h << 6) | k;
                    f = (l >> 16) & 255;
                    g = (l >> 8) & 255;
                    l &= 255;
                    d =
                        64 === h
                            ? d + String.fromCharCode(f)
                            : 64 === k
                            ? d + String.fromCharCode(f, g)
                            : d + String.fromCharCode(f, g, l);
                } while (e < b.length);
                return d;
            }
            function Hi(a, c) {
                void 0 === c && (c = !1);
                return a
                    ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
                          return Dp[b] || b;
                      })
                    : "";
            }
            function Ep(a) {
                try {
                    var c = Ra(a) ? a : [];
                    return H(",", [
                        a.name,
                        a.description,
                        w(Ia, Aa, Vb(Fp), we(","))(c),
                    ]);
                } catch (b) {
                    return "";
                }
            }
            function Fp(a) {
                return H(",", [a.description, a.suffixes, a.type]);
            }
            function Gp(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b;
            }
            function Hp(a, c, b, d, e, f, g, h) {
                var k = b.C(f);
                Z(k) && (b.D(f, g), e(a, c, b, d), (k = b.C(f, g)));
                Y(h) || h.Pb(f, "" + k);
                return k;
            }
            function Ip(a, c) {
                if (vd(a)) {
                    var b = sb(a).match(Jp);
                    if (b && b.length) return b[1] === c;
                }
                return !1;
            }
            function xe(a, c, b) {
                return function (d) {
                    var e,
                        f,
                        g = Fa(c, b);
                    g &&
                        Kp(a, d, c) &&
                        ((g = I(g.params, g)),
                        (d = Pf(
                            { event: a, Ja: "products", wa: kc, th: "goods" },
                            d
                        )) &&
                            g &&
                            g(
                                ((e = {}),
                                (e.__ym = ((f = {}), (f.ecommerce = [d]), f)),
                                e)
                            ));
                };
            }
            function Kp(a, c, b) {
                var d = !1,
                    e = "";
                if (!ia(c)) return Ib(b, "", "ecomeo"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        N(f) && f.length
                            ? (d = Ii(function (g) {
                                  return (
                                      ia(g) &&
                                      (fa(g.id) || lc(b, g.id) || fa(g.name))
                                  );
                              }, f)) || (e = "ecomgi")
                            : (e = "ecomgei");
                        break;
                    case "purchase":
                        lc(b, c.id) || fa(c.id) ? (d = !0) : (e = "ecompi");
                }
                Ib(b, "", e);
                return d;
            }
            function wd(a, c) {
                return {
                    N: function (b, d) {
                        Qf(b)
                            ? d()
                            : na(c, function (e) {
                                  var f;
                                  if ((e = n(e, "settings.hittoken")))
                                      (e = ((f = {}), (f.hittoken = e), f)),
                                          (b.J = C(b.J || {}, e));
                                  d();
                              });
                    },
                };
            }
            function Lp(a, c) {
                var b = n(c, "origin"),
                    d;
                if ((d = b)) d = Mp.test(b) || Np.test(b);
                d &&
                    ((b = Lb(a, c.data)),
                    "appendremote" === n(b, "action") && Op(a, c, b));
            }
            function Ji(a, c, b) {
                var d, e, f;
                void 0 === b && (b = "");
                var g = J(a),
                    h = {};
                h.getCachedTags = Rf;
                h.form =
                    ((d = {}),
                    (d.closest = u(a, Ki)),
                    (d.select = Pp),
                    (d.getData = u(a, Li)),
                    d);
                h.button =
                    ((e = {}),
                    (e.closest = u(a, hf)),
                    (e.select = Mi),
                    (e.getData = u(a, jf)),
                    e);
                h.status = ((f = {}), (f.checkStatus = D([a, Ga(b)], Qp)), f);
                g.D("_u", h);
                c && Lc(a, { src: c });
            }
            function Ni(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ? "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" : d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = H(".", Aa(z(w(Q, Ga), b.split("."))));
                if (!G(d, Rp) || !G(c, ["ru", "en", "tr"])) return "";
                c =
                    (a
                        ? "https://s3.mds.yandex.net/internal-metrika-betas"
                        : "https://yastatic.net/s3/metrika") +
                    (b ? "/" + b : "") +
                    "/form-selector/" +
                    (d + "_" + c + ".js");
                return Oi(c) ? c : "";
            }
            function Sp(a, c) {
                var b = qb(a);
                if (b) {
                    var d = b("div"),
                        e = ec(a);
                    if (e) {
                        d.innerHTML =
                            '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function () {
                            var h = b("meta");
                            h.setAttribute(
                                "http-equiv",
                                "Content-Security-Policy"
                            );
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            Lc(f.contentWindow, { src: c });
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow
                            ? (g = d.attachShadow({ mode: "open" }))
                            : d.createShadowRoot
                            ? (g = d.createShadowRoot())
                            : d.webkitCreateShadowRoot &&
                              (g = d.webkitCreateShadowRoot());
                        g
                            ? g.appendChild(f)
                            : (e.appendChild(f),
                              (a._ym__remoteIframeContainer = f));
                    }
                }
            }
            function Qp(a) {
                var c,
                    b = Pi(a);
                a = J(a).C("getCounters", xd)();
                a = z(U("id"), a);
                return (c = { id: b }), (c.counterFound = !!b && G(b, a)), c;
            }
            function Qi(a, c, b, d) {
                if (c) {
                    var e = [];
                    c &&
                        (a.document.documentElement.contains(c)
                            ? ge(a, c, La("push", e), d)
                            : wa(e, Ri(a, c, d)));
                    x(b, e);
                }
            }
            function ge(a, c, b, d, e, f) {
                function g(k) {
                    return M(d)
                        ? d(k)
                            ? a.NodeFilter.FILTER_ACCEPT
                            : a.NodeFilter.FILTER_REJECT
                        : a.NodeFilter.FILTER_ACCEPT;
                }
                void 0 === e && (e = -1);
                void 0 === f && (f = !1);
                var h = g(c);
                if (
                    M(b) &&
                    (f || h === a.NodeFilter.FILTER_ACCEPT) &&
                    (h && b(c), !Lf(c))
                )
                    for (
                        c = a.document.createTreeWalker(
                            c,
                            e,
                            d ? { acceptNode: g } : null,
                            !1
                        );
                        c.nextNode() && !1 !== b(c.currentNode);

                    );
            }
            function Ri(a, c, b) {
                var d = [],
                    e = w(Q, La("push", d));
                M(b)
                    ? ((b = b(c)),
                      (Z(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c))
                    : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = Ri(a, c[b]);
                        x(e, g);
                    }
                }
                return d;
            }
            function Si(a, c, b) {
                var d;
                a = [
                    Ti(a, c, function (e) {
                        d = e;
                        e.ya.F(b);
                    }),
                    function () {
                        d && d.unsubscribe();
                    },
                ];
                return D([ye, a], x);
            }
            function Tp(a, c, b, d) {
                var e, f, g;
                if (b) {
                    var h = n(d, "ecommerce") || {};
                    var k = n(d, "event") || "";
                    h = ia(h) && fa(k) ? Pf(k, h) : void 0;
                    if (!h)
                        a: {
                            var l = d;
                            !N(d) && lc(a, Ra(d)) && (l = Oa(l));
                            if (
                                N(l) &&
                                ((h = l[0]),
                                (k = l[1]),
                                (l = l[2]),
                                fa(k) && ia(l) && "event" === h)
                            ) {
                                h = Pf(k, l);
                                break a;
                            }
                            h = void 0;
                        }
                    if ((d = h || Up(d)))
                        tb(
                            a,
                            ((e = {}),
                            (e.counterKey = c),
                            (e.name = "ecommerce"),
                            (e.data = d),
                            e)
                        ),
                            b(
                                ((f = {}),
                                (f.__ym = ((g = {}), (g.ecommerce = [d]), g)),
                                f)
                            );
                }
            }
            function Up(a) {
                var c = n(a, "ecommerce");
                if (ia(c))
                    return (
                        (a = ha(tc(Vp), ea(c))),
                        (a = O(
                            function (b, d) {
                                b[d] = c[d];
                                return b;
                            },
                            {},
                            a
                        )),
                        0 === ea(a).length ? void 0 : a
                    );
            }
            function Pf(a, c) {
                var b,
                    d,
                    e = fa(a) ? Wp[a] : a;
                if (e) {
                    var f = e.event,
                        g = e.Ja,
                        h = e.th,
                        k = void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if ((h = l[k])) {
                        e = z(u(e.wa, Xp), h);
                        var m =
                            ((b = {}),
                            (b[f] = g ? ((d = {}), (d[g] = e), d) : e),
                            b);
                        b = ea(l);
                        g &&
                            1 < b.length &&
                            (m[f].actionField = zb(
                                function (p, q) {
                                    if (q === k) return p;
                                    if ("currency" === q)
                                        return (m.currencyCode = l.currency), p;
                                    p[Yp[q] || Sf[q] || q] = l[q];
                                    return p;
                                },
                                {},
                                b
                            ));
                        return m;
                    }
                }
            }
            function Xp(a, c) {
                var b = {};
                x(function (d) {
                    var e = a[d] || Sf[d] || d;
                    -1 !== mb(d, "item_category")
                        ? ((e = Sf.item_category),
                          (b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]))
                        : (b[e] = c[d]);
                }, ea(c));
                return b;
            }
            function Zp(a, c, b) {
                var d,
                    e,
                    f,
                    g = n(b, "target");
                if (g && ((g = hf(a, g)), (g = jf(a, g)))) {
                    g = "?" + Dc(g);
                    var h = mc(
                        a,
                        c,
                        "gbn",
                        ((d = {}), (d.id = c.id), (d.query = g), d)
                    );
                    b = n(b, "isTrusted");
                    b = Z(b)
                        ? void 0
                        : ((e = {}),
                          (e.__ym = ((f = {}), (f.ite = pb(b)), f)),
                          e);
                    ze(a, c, "btn", h).reachGoal(g, b);
                }
            }
            function bf(a, c, b, d) {
                return function () {
                    if (Fa(a, c)) {
                        var e = Oa(arguments);
                        return d.apply(void 0, e);
                    }
                };
            }
            function $p(a, c, b, d) {
                var e = n(d, "target");
                e &&
                    ((d = n(d, "isTrusted")),
                    (e = nc("button,input", a, e)) &&
                        "submit" === e.type &&
                        (e = Ki(a, e))) &&
                    (b.push(e), V(a, D([!1, a, c, b, e, d], Ui), 300));
            }
            function Ui(a, c, b, d, e, f) {
                var g,
                    h,
                    k,
                    l = Ob(c)(e, d),
                    m = -1 !== l;
                if (a || m)
                    m && d.splice(l, 1),
                        (a = Li(c, e)),
                        (a = "?" + Dc(a)),
                        (d = D(
                            [
                                c,
                                b,
                                "fg",
                                ((g = {}), (g.id = b.id), (g.query = a), g),
                            ],
                            Vi
                        )),
                        (f = Z(f)
                            ? void 0
                            : ((h = {}),
                              (h.__ym = ((k = {}), (k.ite = pb(f)), k)),
                              h)),
                        ze(c, b, "form", d).reachGoal(a, f);
            }
            function Vi(a, c, b, d) {
                return aq(a, c).then(w(D([mc(a, c, b, d), F], re), ta));
            }
            function Li(a, c, b) {
                return Wi(a, c, ["i", "n", "p"], void 0, b);
            }
            function bq(a, c) {
                var b;
                a(((b = {}), (b.clickmap = Y(c) ? !0 : c), b));
            }
            function cq(a, c, b, d, e) {
                var f,
                    g = "clmap/" + e.id;
                c =
                    ((f = {}),
                    (f["page-url"] = c),
                    (f["pointer-click"] = b),
                    f);
                f = { K: Ja(), J: c, ma: { za: g } };
                d(f, e)["catch"](B(a, "c.s.c"));
            }
            function dq(a, c, b, d, e) {
                if (Jb(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = Ma(c.element);
                if (
                    (e && !e(c.element, a)) ||
                    (G(c.button, [2, 3]) && "A" !== a) ||
                    Za(Ba(a), d)
                )
                    return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1e3 > c) return !1;
                }
                for (; d; ) {
                    if (eq(d)) return !1;
                    d = d.parentElement;
                }
                return !0;
            }
            function fq(a, c) {
                var b = null;
                try {
                    if ((b = c.target || c.srcElement))
                        !b.ownerDocument && b.documentElement
                            ? (b = b.documentElement)
                            : b.ownerDocument !== a.document && (b = null);
                } catch (d) {}
                return b;
            }
            function gq(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a
                    ? c
                    : 1 === a || 3 === a
                    ? 1
                    : 2 === a
                    ? 3
                    : 4 === a
                    ? 2
                    : 0;
            }
            function Xi(a, c) {
                var b = ec(a),
                    d = Tf(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0,
                };
            }
            function Ae(a, c) {
                return {
                    N: function (b, d) {
                        var e,
                            f = b.K,
                            g = b.Ha,
                            h = b.J,
                            k = b.Z;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = ka(a);
                            f.Pb("rqnl", 1);
                            for (var m = yd(a), p = 1; m[p]; ) p += 1;
                            b.M || (b.M = {});
                            b.M.Mb = p;
                            m[p] =
                                ((e = {}),
                                (e.protocol = va.Qa),
                                (e.host = ic),
                                (e.resource = b.ma.za),
                                (e.postParams = k.da),
                                (e.time = l(da)),
                                (e.counterType = c.ca),
                                (e.params = h),
                                (e.browserInfo = f.l()),
                                (e.counterId = c.id),
                                (e.ghid = Cc(a)),
                                e);
                            g && (m[p].telemetry = g.l());
                            Uf(a);
                        }
                        d();
                    },
                    Ba: function (b, d) {
                        Yi(a, b);
                        d();
                    },
                };
            }
            function Yi(a, c) {
                var b = yd(a);
                c.K && !Wa(b) && c.M && (delete b[c.M.Mb], Uf(a));
            }
            function Uf(a) {
                var c = yd(a);
                Ua(a).D("retryReqs", c);
            }
            function hq(a, c) {
                if (a.Ji()) {
                    var b = Zi(c);
                    if (b && !hc("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.Eg,
                            f = a.cb,
                            g = a.sender,
                            h = a.Sg,
                            k = f.lc,
                            l = b.href;
                        var m = ab(
                            b.innerHTML &&
                                b.innerHTML.replace(/<\/?[^>]+>/gi, "")
                        );
                        m ||
                            (m = (m = b.querySelector("img"))
                                ? ab(
                                      m.getAttribute("title") ||
                                          m.getAttribute("alt")
                                  )
                                : "");
                        m = l === m ? "" : m;
                        var p = n(c, "isTrusted");
                        if (hc("ym-external-link", b))
                            Be(d, f, {
                                url: l,
                                lb: !0,
                                title: m,
                                wc: p,
                                sender: g,
                            });
                        else {
                            k = k ? Qc(d, k).hostname : S(d).hostname;
                            h = RegExp("\\.(" + H("|", z(iq, h)) + ")$", "i");
                            var q = b.protocol + "//" + b.hostname + b.pathname;
                            h =
                                $i.test(q) ||
                                $i.test(l) ||
                                h.test(l) ||
                                h.test(q);
                            b = b.hostname;
                            Ce(k) === Ce(b)
                                ? h
                                    ? Be(d, f, {
                                          url: l,
                                          uc: !0,
                                          wc: p,
                                          title: m,
                                          sender: g,
                                      })
                                    : m && e.D("il", ab(m).slice(0, 100))
                                : (l && jq.test(l)) ||
                                  Be(d, f, {
                                      url: l,
                                      yc: !0,
                                      lb: !0,
                                      uc: h,
                                      wc: p,
                                      title: m,
                                      sender: g,
                                  });
                        }
                    }
                }
            }
            function Be(a, c, b) {
                var d,
                    e,
                    f,
                    g,
                    h = Ja();
                void 0 !== b.wc && h.D("ite", pb(b.wc));
                b.uc && h.D("dl", 1);
                b.lb && h.D("ln", 1);
                var k = b.bg || {};
                h = {
                    K: h,
                    M: { title: k.title || b.title, yc: !!b.yc, X: k.params },
                    J:
                        ((d = {}),
                        (d["page-url"] = b.url),
                        (d["page-ref"] = c.lc || S(a).href),
                        d),
                };
                d = "Link";
                b.uc
                    ? (d = b.lb ? "Ext link - File" : "File")
                    : b.lb && (d = "Ext link");
                tb(
                    a,
                    ((e = {}),
                    (e.counterKey = K(c)),
                    (e.name = "event"),
                    (e.data =
                        ((f = {}),
                        (f.schema = "Link click"),
                        (f.name =
                            (b.lb ? "external" : "internal") +
                            " url: " +
                            b.url),
                        f)),
                    e)
                );
                c = b
                    .sender(h, c)
                    .then(
                        mc(
                            a,
                            c,
                            "lcl",
                            ((g = {}),
                            (g.prefix = d),
                            (g.id = c.id),
                            (g.url = b.url),
                            g),
                            b.bg
                        )
                    );
                return Tc(a, "cl.p.s", c, k.callback || F, k.ctx);
            }
            function kq(a, c) {
                var b,
                    d,
                    e =
                        ((b = {}),
                        (b.string = !0),
                        (b.object = !0),
                        (b["boolean"] = c),
                        b)[typeof c] || !1;
                a(((d = {}), (d.trackLinks = e), d));
            }
            function lq(a, c, b, d) {
                var e = S(a),
                    f = e.hostname;
                e = e.href;
                if ((c = zd(c).url))
                    (a = Qc(a, c)), (f = a.hostname), (e = a.href);
                return [d + "://" + f + "/" + b, e || ""];
            }
            function aj(a) {
                return (a.split(":")[1] || "")
                    .replace(/^\/*/, "")
                    .replace(/^www\./, "")
                    .split("/")[0];
            }
            function mq(a, c, b, d) {
                var e;
                if ((a = Fa(a, b))) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    G(b, g) ||
                        !a.params ||
                        (d.counter && "" + d.counter !== b) ||
                        (a.params(f),
                        g.push(b),
                        d.parent &&
                            c.Nf(
                                ((e = {}), (e.type = "params"), (e.data = f), e)
                            ));
                }
            }
            function Eh(a, c, b) {
                void 0 === b && (b = Q);
                var d = md(a);
                b(d);
                var e = u(d, nq);
                De(a, c, function (f) {
                    f.ya.F(e);
                });
                return d;
            }
            function nq(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.ba(n(b, "type"), b);
            }
            function De(a, c, b, d) {
                void 0 === b && (b = F);
                void 0 === d && (d = !1);
                var e = bj(a);
                if (c && M(c.push)) {
                    var f = c.push;
                    c.push = function () {
                        var g = Oa(arguments),
                            h = g[0];
                        d && e.ba(h);
                        g = f.apply(c, g);
                        d || e.ba(h);
                        return g;
                    };
                    a = {
                        ya: e,
                        unsubscribe: function () {
                            c.push = f;
                        },
                    };
                    b(a);
                    x(e.ba, c);
                    return a;
                }
            }
            function Zd(a) {
                a = J(a);
                var c = a.C("dataLayer", []);
                a.D("dataLayer", c);
                return c;
            }
            function Qm(a, c) {
                var b, d;
                G(c, z(U("ymetrikaEvent.type"), a)) ||
                    a.push(
                        ((b = {}),
                        (b.ymetrikaEvent = ((d = {}), (d.type = c), d)),
                        b)
                    );
            }
            function cj(a, c) {
                var b = kd(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = D([a, b.fe], oq),
                    g = u(f, pq);
                b.$.F(["initToParent"], function (h) {
                    g(d, b.children[h[1].counterId]);
                }).F(["parentConnect"], function (h) {
                    g(e, b.Ea[h[1].counterId]);
                });
                return {
                    $: b.$,
                    yj: function (h, k) {
                        return new L(function (l, m) {
                            b.fe(h, k, function (p, q) {
                                l([p, q]);
                            });
                            V(a, u(Pa(), m), 5100, "is.o");
                        });
                    },
                    Mf: function (h) {
                        var k = { Pf: [], ve: [], data: h };
                        d.push(k);
                        return f(b.children, k, h);
                    },
                    Nf: function (h) {
                        var k = { Pf: [], ve: [], data: h };
                        e.push(k);
                        return f(b.Ea, k, h);
                    },
                };
            }
            function pq(a, c, b) {
                c = ha(function (d) {
                    return !G(b.info.counterId, d.ve);
                }, c);
                x(function (d) {
                    var e;
                    b.info.counterId &&
                        a(((e = {}), (e[b.info.counterId] = b), e), d, d.data);
                }, c);
            }
            function oq(a, c, b, d, e) {
                return new L(function (f, g) {
                    var h = ea(b),
                        k = w(d.resolve || Q, sd(f)),
                        l = w(d.reject || Q, sd(g));
                    d.resolve = k;
                    d.reject = l;
                    x(function (m) {
                        var p;
                        d.ve.push(+m);
                        var q = b[m],
                            r = V(a, u(Pa(), l), 5100, "is.m");
                        c(
                            q.window,
                            C(e, ((p = {}), (p.toCounter = Ga(m)), p)),
                            function (t, y) {
                                la(a, r);
                                d.Pf.push(m);
                                d.resolve && d.resolve(y);
                            }
                        );
                    }, h);
                })["catch"](B(a, "if.b"));
            }
            function qq(a) {
                var c = F,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    M(e) && ((c = e), (d = a.length + -1));
                    var f = a.slice(-2)[0];
                    M(f) && ((c = f), (b = e), (d = a.length + -2));
                    d = a.slice(0, d);
                    return { Gg: b, Ub: c, X: 1 === d.length ? a[0] : le(d) };
                }
            }
            function Tc(a, c, b, d, e) {
                var f = D([a, d, e], Vf);
                return b.then(f, function (g) {
                    f();
                    Pc(a, c, g);
                });
            }
            function Wf(a, c) {
                return {
                    N: function (b, d) {
                        var e,
                            f,
                            g = (b.M || {}).X,
                            h = b.Z;
                        h = void 0 === h ? {} : h;
                        if (g && (dj(c, g), !h.da && b.K && b.J)) {
                            var k = Mb(a, g),
                                l = ej(a),
                                m = b.K.C("pv");
                            k &&
                                !b.J.nohit &&
                                (tb(
                                    a,
                                    ((e = {}),
                                    (e.counterKey = K(c)),
                                    (e.name = "params"),
                                    (e.data = ((f = {}), (f.val = g), f)),
                                    e)
                                ),
                                m
                                    ? encodeURIComponent(k).length > va.gg
                                        ? l.push([b.K, g])
                                        : (b.J["site-info"] = k)
                                    : ((h.da = k),
                                      (b.Z = h),
                                      b.Gc || (b.Gc = {}),
                                      (b.Gc.Uh = !0)));
                        }
                        d();
                    },
                    Ba: function (b, d) {
                        var e = ej(a),
                            f = Fa(a, c),
                            g = f && f.params;
                        g &&
                            ((f = ha(w(Ad, Ba(b.K)), e)),
                            x(function (h) {
                                g(h[1]);
                                h = Ee(a)(h, e);
                                e.splice(h, 1);
                            }, f));
                        d();
                    },
                };
            }
            function Fe(a, c) {
                return function (b) {
                    Xf(a, c, b);
                };
            }
            function rq(a, c) {
                Yf(a)(function (b) {
                    delete b[c];
                });
            }
            function Xf(a, c, b) {
                Yf(a)(function (d) {
                    d[c] = C(d[c] || {}, b);
                });
            }
            function Yf(a) {
                a = J(a);
                var c = a.C("dsjf") || Ca({});
                a.Ga("dsjf", c);
                return c;
            }
            function sq(a, c) {
                return function (b) {
                    var d,
                        e,
                        f = Fa(a, c);
                    if (f) {
                        var g = oc(a, K(c));
                        ia(b)
                            ? Ra(ea(b))
                                ? (b = fj(a, b)) &&
                                  Ra(b) &&
                                  f.params(
                                      ((d = {}),
                                      (d.__ym = ((e = {}), (e.fpmh = b), e)),
                                      d)
                                  )
                                : g.log("fpeo")
                            : g.log("fpno");
                    }
                };
            }
            function fj(a, c) {
                return O(
                    function (b, d) {
                        var e = d[0],
                            f = d[1],
                            g = f;
                        f = ia(f);
                        if (!f && (lc(a, g) && (g = "" + g), !fa(g))) return b;
                        g = f ? fj(a, g) : g;
                        Ra(g) && b.push([e, g]);
                        return b;
                    },
                    [],
                    Ea(c)
                );
            }
            function gj(a, c, b) {
                void 0 === b && (b = 0);
                c = Ea(c);
                c = O(
                    function (d, e) {
                        var f = e[0],
                            g = e[1],
                            h = ia(g);
                        if (!h && (lc(a, g) && (g = "" + g), !fa(g))) return d;
                        h
                            ? (g = gj(a, g, b + 1))
                            : !b && G(f, tq)
                            ? (g = L.resolve(g))
                            : ("phone_number" === f
                                  ? (g = Nh(a, g))
                                  : "email" === f && (g = Mh(g)),
                              (g = hj(a, g)));
                        d.push(
                            g.then(function (k) {
                                return [f, k];
                            })
                        );
                        return d;
                    },
                    [],
                    c
                );
                return L.all(c);
            }
            function Mh(a) {
                var c = ab(a).replace(/^\++/gm, "").toLowerCase(),
                    b = c.lastIndexOf("@");
                if (-1 === b) return c;
                a = c.substr(0, b);
                b = c.substr(b + 1);
                if (!b || !uq(a)) return c;
                b = b.replace("googlemail.com", "gmail.com");
                ij(b) && (b = "yandex.ru");
                "yandex.ru" === b
                    ? (a = a.replace(Zf, "-"))
                    : "gmail.com" === b && (a = a.replace(Zf, ""));
                c = mb(a, "+");
                -1 !== c && (a = a.slice(0, c));
                return a + "@" + b;
            }
            function uq(a) {
                return 1 > a.length || 64 < a.length
                    ? !1
                    : Ii(function (c) {
                          if (1 > c.length) c = !1;
                          else if (
                              '"' === c[0] &&
                              '"' === c[c.length - 1] &&
                              2 < c.length
                          )
                              a: {
                                  for (var b = 1; b + 2 < c.length; b += 1) {
                                      var d = c.charCodeAt(b);
                                      if (32 > d || 34 === d || 126 < d) {
                                          c = !1;
                                          break a;
                                      }
                                      if (92 === d) {
                                          if (
                                              b + 2 === c.length ||
                                              32 > c.charCodeAt(b + 1)
                                          ) {
                                              c = !1;
                                              break a;
                                          }
                                          b += 1;
                                      }
                                  }
                                  c = !0;
                              }
                          else c = vq.test(c) ? !0 : !1;
                          return c;
                      }, a.split("."));
            }
            function Nh(a, c) {
                var b = wq(c),
                    d = ee(c);
                return 10 > d.length || 13 < d.length || b.startsWith("+8")
                    ? ab(c)
                    : "8" === b[0]
                    ? "7" + d.slice(1)
                    : "+" === b[0] || lc(a, +b[0])
                    ? d
                    : "7" + d;
            }
            function hj(a, c) {
                return new L(function (b, d) {
                    var e = new a.TextEncoder().encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function (f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary",
                        });
                        var g = new a.FileReader();
                        g.onload = function (h) {
                            h = n(h, "target.result") || "";
                            var k = mb(h, ",");
                            -1 !== k ? b(h.substring(k + 1)) : d(Qa("fpm.i"));
                        };
                        g.readAsDataURL(f);
                    }, d);
                });
            }
            function Wl(a, c, b, d) {
                var e = jj[b];
                return e
                    ? function () {
                          var f = Oa(arguments);
                          f = d.apply(void 0, f);
                          var g = J(a);
                          g.Ga("mt", {});
                          g = g.C("mt");
                          var h = g[e];
                          g[e] = h ? h + 1 : 1;
                          return f;
                      }
                    : d;
            }
            function Fa(a, c) {
                var b = J(a).C("counters", {}),
                    d = K(c);
                return b[d];
            }
            function mc(a, c, b, d, e) {
                return D([a, K(c), e ? [b + ".p", e] : b, d], Ib);
            }
            function Ib(a, c, b, d) {
                oc(a, c).log(b, d);
            }
            function xq(a, c) {
                function b(d, e, f) {
                    var g, h;
                    tb(
                        a,
                        ((g = {}),
                        (g.name = "log"),
                        (g.counterKey = c),
                        (g.data =
                            ((h = {}),
                            (h.args = N(e) ? e : [e]),
                            (h.type = d),
                            (h.variables = f),
                            h)),
                        g)
                    );
                }
                return {
                    log: u("log", b),
                    error: u("error", b),
                    warn: u("warn", b),
                };
            }
            function na(a, c) {
                var b = K(a);
                return kj()(yq(b)).then(c);
            }
            function zq(a, c, b) {
                var d, e;
                c = K(c);
                var f = $f(a);
                b = C({ Ug: f(da) }, b);
                tb(
                    a,
                    ((d = {}),
                    (d.counterKey = c),
                    (d.name = "counterSettings"),
                    (d.data = ((e = {}), (e.settings = b), e)),
                    d)
                );
                return kj()(Aq(c, b));
            }
            function Aq(a, c) {
                return function (b) {
                    var d = b[a];
                    d
                        ? ((d.Af = !0), d.zf(c))
                        : (b[a] = { promise: L.resolve(c), Af: !0, zf: F });
                };
            }
            function ag(a) {
                return !td(a) && bg(a);
            }
            function Bd(a) {
                return qb(a) ? u(a, Bq) : !1;
            }
            function Bb(a) {
                if (a.fetch) {
                    var c = n(a, "AbortController");
                    return D([a, c ? new c() : void 0], Cq);
                }
                return !1;
            }
            function bg(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Ha("sendBeacon", c)
                    ? D([a, I(c, n(a, "navigator"))], Dq)
                    : !1;
            }
            function Dq(a, c, b, d) {
                return new L(function (e, f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = C(d.$a, ((g = {}), (g["force-urlencoded"] = 1), g));
                    g = b + "?" + Dc(h) + (d.da ? "&" + d.da : "");
                    return 2e3 < g.length
                        ? f(Pa("sb.tlq"))
                        : c(g)
                        ? e("")
                        : f();
                });
            }
            function Bq(a, c, b) {
                return new L(function (d, e) {
                    var f,
                        g,
                        h = "_ymjsp" + Xa(a),
                        k = C(((f = {}), (f.callback = h), f), b.$a),
                        l = D([a, h], Eq);
                    a[h] = function (p) {
                        try {
                            l(), xc(m), d(p);
                        } catch (q) {
                            e(q);
                        }
                    };
                    k.wmode = "5";
                    var m = Lc(a, ((g = {}), (g.src = lj(c, b, k)), g));
                    if (!m) return l(), e(Qa("jp.s"));
                    f = u(m, xc);
                    f = w(f, u(Pa(b.ha), e));
                    g = Cd(a, f, b.Oa || 1e4);
                    g = D([a, g], la);
                    m.onload = g;
                    m.onerror = w(l, g, f);
                });
            }
            function Eq(a, c) {
                try {
                    delete a[c];
                } catch (b) {
                    a[c] = void 0;
                }
            }
            function Uc(a) {
                var c = qb(a);
                return c ? D([a, c], Fq) : !1;
            }
            function Fq(a, c, b, d) {
                return new L(function (e, f) {
                    var g = ec(a),
                        h = c("img"),
                        k = w(u(h, xc), u(Pa(d.ha), f)),
                        l = Cd(a, k, d.Oa || 3e3);
                    h.onerror = k;
                    h.onload = w(u(h, xc), u(null, e), D([a, l], la));
                    k = C({}, d.$a);
                    delete k.wmode;
                    h.src = lj(b, d, k);
                    vd(a) &&
                        (C(h.style, {
                            position: "absolute",
                            visibility: "hidden",
                            width: "0px",
                            height: "0px",
                        }),
                        g.appendChild(h));
                });
            }
            function Cq(a, c, b, d) {
                var e,
                    f = C(d.yb ? ((e = {}), (e.wmode = "7"), e) : {}, d.$a),
                    g = c || { signal: void 0, abort: F },
                    h = a.fetch(b + "?" + Dc(f), {
                        method: d.Rc,
                        body: d.da,
                        credentials: !1 === d.Ce ? "omit" : "include",
                        headers: d.Za,
                        signal: g.signal,
                    }),
                    k = u(d.ha, Pa);
                return new L(function (l, m) {
                    d.Oa &&
                        Cd(
                            a,
                            function () {
                                try {
                                    g.abort();
                                } catch (p) {}
                                m(k());
                            },
                            d.Oa
                        );
                    return h
                        .then(function (p) {
                            if (!p.ok) {
                                if (d.ce) return Ta(mj(p));
                                Ud(d.ha);
                            }
                            return d.ce ? p.text() : d.yb ? p.json() : null;
                        })
                        .then(l)
                        ["catch"](u(k(), m));
                });
            }
            function Cb(a) {
                var c;
                if ((c = n(a, "XMLHttpRequest")))
                    if ((c = "withCredentials" in new a.XMLHttpRequest())) {
                        a: {
                            if (
                                Gq.test(a.location.host) &&
                                a.opera &&
                                M(a.opera.version) &&
                                ((c = a.opera.version()),
                                "string" === typeof c &&
                                    "12" === c.split(".")[0])
                            ) {
                                c = !0;
                                break a;
                            }
                            c = !1;
                        }
                        c = !c;
                    }
                return c ? u(a, Hq) : !1;
            }
            function Hq(a, c, b) {
                var d,
                    e = new a.XMLHttpRequest(),
                    f = b.da,
                    g = C(b.yb ? ((d = {}), (d.wmode = "7"), d) : {}, b.$a);
                return new L(function (h, k) {
                    e.open(b.Rc || "GET", c + "?" + Dc(g), !0);
                    e.withCredentials = !1 !== b.Ce;
                    b.Oa && (e.timeout = b.Oa);
                    Iq(
                        Ea,
                        Vb(function (m) {
                            e.setRequestHeader(m[0], m[1]);
                        })
                    )(b.Za);
                    var l = D([a, e, Pa(b.ha), b.yb, b.ce, h, k], Jq);
                    e.onreadystatechange = l;
                    try {
                        e.send(f);
                    } catch (m) {}
                });
            }
            function Jq(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if ((200 === c.status || e || g(b), e))
                        200 === c.status ? f(c.responseText) : g(mj(c));
                    else {
                        e = null;
                        if (d)
                            try {
                                (e = Lb(a, c.responseText)) || g(b);
                            } catch (k) {
                                g(b);
                            }
                        f(e);
                    }
                return h;
            }
            function lj(a, c, b) {
                (b = Dc(b)) && (a += "?" + b);
                c.da && (a += (b ? "&" : "?") + c.da);
                return a;
            }
            function Kq(a, c, b) {
                var d = z(Ad, Wb[c] || Xb);
                x(function (e) {
                    return d.unshift(e);
                }, Ge);
                return z(w(Kc([a, b]), ta), d);
            }
            function nj(a) {
                return {
                    N: function (c, b) {
                        var d = c.J;
                        if (!c.K || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e
                            ? (d["page-ref"] = oj(a, e))
                            : delete d["page-ref"];
                        d["page-url"] = oj(a, f).slice(0, va.ig);
                        return b();
                    },
                };
            }
            function oj(a, c) {
                var b = S(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!fa(c) || Y(c)) return d;
                b = c.replace(pj, "");
                if (-1 !== b.search(Lq)) return b;
                var g = b.charAt(0);
                if (
                    ("?" === g && ((f = d.search(/\?/)), -1 === f)) ||
                    ("#" === g && ((f = d.search(/#/)), -1 === f))
                )
                    return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (((f = mb(d, e)), -1 !== f))
                        return d.substr(0, f + e.length) + b;
                } else
                    return (d = d.split("/")), (d[d.length - 1] = b), H("/", d);
                return "";
            }
            function He(a, c) {
                return {
                    N: function (b, d) {
                        var e = qj(c);
                        e = D([b, e, d], Mq);
                        Nq(a, c, e);
                    },
                    Ba: function (b, d) {
                        var e = b.K,
                            f = qj(c);
                        if (e) {
                            var g = f.sa;
                            f.Re === e && g && (x(ta, g), (f.sa = null));
                        }
                        d();
                    },
                };
            }
            function Mq(a, c, b) {
                var d = a.K;
                d
                    ? Qf(a)
                        ? ((c.Re = d), b())
                        : c.sa
                        ? c.sa.push(b)
                        : b()
                    : b();
            }
            function Qf(a) {
                return (a = a.K) && a.C("pv") && !a.C("ar");
            }
            function Nq(a, c, b) {
                if (Ie(a) && ob(a)) {
                    var d = Oq(c);
                    if (!d.Jh) {
                        d.Jh = !0;
                        c = kd(a, c);
                        if (!c) {
                            b();
                            return;
                        }
                        d.sa = [];
                        var e = function () {
                            d.sa && (x(ta, d.sa), (d.sa = null));
                        };
                        V(a, e, 3e3);
                        c.$.F(["initToChild"], e);
                    }
                    d.sa ? d.sa.push(b) : b();
                } else b();
            }
            function rj(a, c) {
                return {
                    N: function (b, d) {
                        var e = b.K;
                        if (e && (!c || c.Lf)) {
                            var f = a.document.title;
                            b.M && b.M.title && (f = b.M.title);
                            var g = Ec("getElementsByTagName", a.document);
                            "string" !== typeof f &&
                                g &&
                                ((f = g("title")),
                                (f = (f = n(f, "0.innerHtml")) ? f : ""));
                            f = f.slice(0, va.hg);
                            e.D("t", f);
                        }
                        d();
                    },
                };
            }
            function Pb(a) {
                return function (c, b) {
                    return {
                        N: function (d, e) {
                            var f = d.K,
                                g = d.J;
                            f &&
                                g &&
                                x(function (h) {
                                    var k = Dd[h],
                                        l = "bi",
                                        m = f;
                                    k ||
                                        ((k = cg[h]), (l = "tel"), (m = be(d)));
                                    k &&
                                        ((k = A(l + ":" + h, k, null)(c, b, d)),
                                        m.Pb(h, k));
                                }, a || Pq());
                            e();
                        },
                    };
                };
            }
            function Qq(a, c) {
                var b = Ed(a);
                c.F(["initToParent"], function (d) {
                    var e = d[0];
                    d = d[1];
                    window.window &&
                        (b.children[d.counterId] = {
                            info: d,
                            window: e.source,
                        });
                })
                    .F(["initToChild"], function (d) {
                        var e = d[0];
                        d = d[1];
                        e.source === a.parent && c.ba("parentConnect", [e, d]);
                    })
                    .F(["parentConnect"], function (d) {
                        var e = d[1];
                        e.counterId &&
                            (b.Ea[e.counterId] = {
                                info: e,
                                window: d[0].source,
                            });
                    });
            }
            function Rq(a) {
                if (Ha("MutationObserver", a.MutationObserver)) {
                    var c = Ed(a).children,
                        b = new a.MutationObserver(function () {
                            x(function (d) {
                                n(c[d], "window.window") || delete c[d];
                            }, ea(c));
                        });
                    vc(a)(
                        $a(F, function () {
                            b.observe(a.document.body, {
                                subtree: !0,
                                childList: !0,
                            });
                        })
                    );
                }
            }
            function Sq(a, c) {
                return function (b, d) {
                    var e,
                        f = { cc: ka(a)(da), key: a.Math.random(), dir: 0 };
                    b.length &&
                        ((f.cc = Ga(b[0])),
                        (f.key = parseFloat(b[1])),
                        (f.dir = Ga(b[2])));
                    C(d, c);
                    var g =
                        ((e = { data: d }),
                        (e.__yminfo = H(":", ["__yminfo", f.cc, f.key, f.dir])),
                        e);
                    return { meta: f, Sf: Mb(a, g) || "" };
                };
            }
            function vc(a, c) {
                function b(e) {
                    n(c, d) ? e() : V(a, u(e, b), 100);
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Ca(function (e, f) {
                    b(f);
                });
            }
            function Fd(a, c) {
                var b = c.Md,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = Sc(a),
                    f = Ua(a),
                    g = ka(a)(dg),
                    h = sj(a, c),
                    k = h[0];
                h = h[1];
                var l = e.C("d");
                tj(a, c);
                var m = !1;
                !h && k && ((h = k), (m = !0));
                if (!h) (h = H("", [g, Xa(a, 1e6, 999999999)])), (m = !0);
                else if (!l || 15768e3 < g - Ga(l)) m = !0;
                m &&
                    !c.Ua &&
                    (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
                f.D(d, h);
                return h;
            }
            function Tq(a, c) {
                return !c.Ua && tj(a, c);
            }
            function sj(a, c) {
                var b = Ua(a),
                    d = Sc(a),
                    e = c.Md || "uid";
                return [b.C(e), d.C(e)];
            }
            function Cc(a) {
                var c = J(a),
                    b = c.C("hitId");
                b || ((b = Xa(a)), c.D("hitId", b));
                return b;
            }
            function jf(a, c, b) {
                var d = Ma(c);
                return d && Wi(a, c, Aa(["p", Uq[d], "c"]), Mi, b);
            }
            function hf(a, c) {
                var b = nc(eg, a, c);
                if (!b) {
                    var d = nc("div", a, c);
                    d && (hb(eg + ",div", d).length || (b = d));
                }
                return b;
            }
            function Wi(a, c, b, d, e) {
                return O(
                    function (f, g) {
                        var h = null;
                        g in uj
                            ? (h = c.getAttribute && c.getAttribute(uj[g]))
                            : g in Vc &&
                              (h =
                                  "p" === g
                                      ? Vc[g](a, c, e)
                                      : "c" === g
                                      ? Vc[g](a, c, d)
                                      : Vc[g](a, c));
                        h &&
                            ((h = h.slice(0, vj[g] || 100)),
                            (f[g] = fg[g] ? "" + fc(h) : h));
                        return f;
                    },
                    {},
                    b
                );
            }
            function fi(a, c, b) {
                if (fe(a)) return Ia(b.querySelectorAll(c));
                var d = wj(c.split(" "), b);
                return ha(function (e, f) {
                    return Ob(a)(e, d) === f;
                }, d);
            }
            function wj(a, c) {
                var b = wa([], a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? wc(u(b, wj), Ia(d)) : Ia(d);
            }
            function cc(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = hb(a, c);
                return b && b.length ? b[0] : null;
            }
            function hb(a, c) {
                if (!c || !c.querySelectorAll) return [];
                var b = c.querySelectorAll(a);
                return b ? Ia(b) : [];
            }
            function Zi(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement;
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (
                        a = c && c.nodeName && ("" + c.nodeName).toLowerCase();
                        n(c, "parentNode.nodeName") &&
                        (("a" !== a && "area" !== a) ||
                            (!c.href && !c.getAttribute("xlink:href")));

                    )
                        a =
                            (c = c.parentNode) &&
                            c.nodeName &&
                            ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null;
                }
                return null;
            }
            function Lc(a, c) {
                var b = qb(a);
                if (b) {
                    var d = a.document,
                        e = b("script");
                    e.src = c.src;
                    e.type = c.type || "text/javascript";
                    e.charset = c.charset || "utf-8";
                    e.async = c.async || !0;
                    try {
                        var f = d.getElementsByTagName("head")[0];
                        if (!f) {
                            var g = d.getElementsByTagName("html")[0];
                            f = b("head");
                            g && g.appendChild(f);
                        }
                        f.insertBefore(e, f.firstChild);
                        return e;
                    } catch (h) {}
                }
            }
            function ai(a, c) {
                var b = xj(a);
                G(c, b.qb) &&
                    ((b.qb = ha(w(Ba(c), Fc), b.qb)),
                    b.qb.length || (xc(b.gb), (b.gb = null)));
            }
            function $h(a, c, b) {
                var d = xj(c);
                G(b, d.qb) || d.qb.push(b);
                if (Wa(d.gb)) {
                    b = qb(a);
                    if (!b) return null;
                    b = b("iframe");
                    C(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden",
                    });
                    b.src = c;
                    a = ec(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.gb = b;
                } else
                    (a = n(d.gb, "contentWindow")) &&
                        a.postMessage("frameReinit", "*");
                return d.gb;
            }
            function Vq(a, c) {
                var b = N(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = H(
                        ", ",
                        z(function (e) {
                            return "." + e;
                        }, b)
                    );
                    return Ia(c.querySelectorAll(d));
                }
                if (c.getElementsByClassName)
                    return wc(w(La("getElementsByClassName", c), Ia), b);
                d = c.getElementsByTagName("*");
                b = "(" + H("|", b) + ")";
                return ha(u(b, hc), Ia(d));
            }
            function pf(a, c, b) {
                for (
                    var d = "", e = Rf(), f = Ma(c) || "*";
                    c && c.parentNode && !G(f, ["BODY", "HTML"]);

                )
                    (d += e[f] || "*"),
                        (d += yj(a, c, b) || ""),
                        (c = c.parentElement),
                        (f = Ma(c) || "*");
                return ab(d, 128);
            }
            function yj(a, c, b) {
                if ((a = Je(a, c))) {
                    a = a.childNodes;
                    for (
                        var d = c && c.nodeName, e = 0, f = 0;
                        f < a.length;
                        f += 1
                    )
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            (b && a[f] === b) || (e += 1);
                        }
                }
                return 0;
            }
            function Je(a, c) {
                var b = n(a, "document");
                return c && c !== b.documentElement
                    ? c === Gc(a)
                        ? b.documentElement
                        : n(c, "parentNode")
                    : null;
            }
            function If(a, c) {
                var b = gg(a, c),
                    d = b.left;
                b = b.top;
                var e = Ke(a, c);
                return [d, b, e[0], e[1]];
            }
            function Ke(a, c) {
                var b = n(a, "document");
                if (c === Gc(a) || c === b.documentElement) {
                    b = ec(a);
                    var d = Nc(a);
                    return [
                        Math.max(b.scrollWidth, d[0]),
                        Math.max(b.scrollHeight, d[1]),
                    ];
                }
                return (b = Mc(c))
                    ? [b.width, b.height]
                    : [c.offsetWidth, c.offsetHeight];
            }
            function gg(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = Ma(b);
                if (
                    !b ||
                    !b.ownerDocument ||
                    "PARAM" === e ||
                    b === Gc(a) ||
                    b === d.documentElement
                )
                    return { left: 0, top: 0 };
                if ((d = Mc(b)))
                    return (
                        (b = Tf(a)),
                        {
                            left: Math.round(d.left + b.x),
                            top: Math.round(d.top + b.y),
                        }
                    );
                for (e = d = 0; b; )
                    (d += b.offsetLeft),
                        (e += b.offsetTop),
                        (b = b.offsetParent);
                return { left: d, top: e };
            }
            function nc(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b))
                    return null;
                if (
                    c.Element.prototype.closest &&
                    Ha("closest", c.Element.prototype.closest) &&
                    b.closest
                )
                    return b.closest(a);
                var d = mi(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a); )
                        b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null;
                }
                if (fe(c)) {
                    for (
                        a = Ia(
                            (c.document || c.ownerDocument).querySelectorAll(a)
                        );
                        b && 1 === b.nodeType && -1 === Ob(c)(b, a);

                    )
                        b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null;
                }
                return null;
            }
            function fe(a) {
                return !(
                    !Ha(
                        "querySelectorAll",
                        n(a, "Element.prototype.querySelectorAll")
                    ) || !a.document.querySelectorAll
                );
            }
            function zh(a, c, b) {
                var d = c.top,
                    e = c.bottom,
                    f = c.left,
                    g = b.w;
                b = b.h;
                a = a.Math;
                c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
                return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c;
            }
            function zj(a) {
                return Le(a) && !Za(Ba(a.type), Wq)
                    ? Me(a)
                        ? !a.checked
                        : !a.value
                    : Xq(a)
                    ? !a.value
                    : Yq(a)
                    ? 0 > a.selectedIndex
                    : !0;
            }
            function Ma(a) {
                if (a)
                    try {
                        var c = a.nodeName;
                        if (fa(c)) return c;
                        c = a.tagName;
                        if (fa(c)) return c;
                    } catch (b) {}
            }
            function Aj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Ob(a)(c, Ia(b));
            }
            function Zq(a, c, b) {
                b = Ec("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (
                    e &&
                    (Ha("(Event|Object|constructor)", e) ||
                        (hg(a) && "[object Event]" === "" + e))
                )
                    try {
                        d = new a.Event(c);
                    } catch (f) {
                        if ((a = Ec("createEvent", n(a, "document"))) && M(a)) {
                            try {
                                d = a(c);
                            } catch (g) {}
                            d && d.initEvent && d.initEvent(c, !1, !1);
                        }
                    }
                d && b(d);
            }
            function Mc(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect();
                } catch (c) {
                    return "object" === typeof c &&
                        null !== c &&
                        16389 === (c.pf && c.pf & 65535)
                        ? {
                              top: 0,
                              bottom: 0,
                              left: 0,
                              width: 0,
                              height: 0,
                              right: 0,
                          }
                        : null;
                }
            }
            function Tf(a) {
                var c = Gc(a),
                    b = n(a, "document");
                return {
                    x:
                        a.pageXOffset ||
                        (b.documentElement && b.documentElement.scrollLeft) ||
                        (c && c.scrollLeft) ||
                        0,
                    y:
                        a.pageYOffset ||
                        (b.documentElement && b.documentElement.scrollTop) ||
                        (c && c.scrollTop) ||
                        0,
                };
            }
            function Nc(a) {
                var c = Yd(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)];
                }
                c = ec(a);
                return [
                    n(c, "clientWidth") || a.innerWidth,
                    n(c, "clientHeight") || a.innerHeight,
                ];
            }
            function Yd(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return Z(c) || Z(b) ? null : [Math.floor(c), Math.floor(b), a];
            }
            function ec(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : Gc(a) || b;
            }
            function Gc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0];
                } catch (c) {
                    return null;
                }
            }
            function hc(a, c) {
                try {
                    return new RegExp("(?:^|\\s)" + a + "(?:\\s|$)").test(
                        c.className
                    );
                } catch (b) {
                    return !1;
                }
            }
            function Hc(a) {
                var c;
                try {
                    if ((c = a.target || a.srcElement))
                        !c.ownerDocument && c.documentElement
                            ? (c = c.documentElement)
                            : c.ownerDocument !== document && (c = null);
                } catch (b) {}
                return c;
            }
            function xc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a);
            }
            function Kb(a) {
                return a ? a.innerText || "" : "";
            }
            function Lf(a) {
                if (Z(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a;
            }
            function Bj(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c;
                d && (d += "_");
                return {
                    Ed: $q(a),
                    C: function (e, f) {
                        var g = Cj(a, "" + d + e);
                        return Wa(g) && !Y(f) ? f : g;
                    },
                    D: function (e, f) {
                        Dj(a, "" + d + e, f);
                        return this;
                    },
                    dc: function (e) {
                        Ej(a, "" + d + e);
                        return this;
                    },
                };
            }
            function Dj(a, c, b) {
                var d = ig(a);
                a = Mb(a, b);
                if (!Wa(a))
                    try {
                        d.setItem(c, a);
                    } catch (e) {}
            }
            function Cj(a, c) {
                var b = ig(a);
                try {
                    return Lb(a, b.getItem(c));
                } catch (d) {}
                return null;
            }
            function Ej(a, c) {
                var b = ig(a);
                try {
                    b.removeItem(c);
                } catch (d) {}
            }
            function ig(a) {
                try {
                    return a.localStorage;
                } catch (c) {}
                return null;
            }
            function Mb(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b);
                } catch (d) {
                    return null;
                }
            }
            function be(a, c, b) {
                void 0 === b && (b = null);
                a.Ha || (a.Ha = qf());
                c && a.Ha.Pb(c, b);
                return a.Ha;
            }
            function Ne(a) {
                return {
                    N: function (c, b) {
                        var d = a.document,
                            e = c.K;
                        if (e && jg(a)) {
                            var f = ja(a),
                                g = function (h) {
                                    jg(a) || (f.vb(d, Fj, g), b());
                                    return h;
                                };
                            f.F(d, Fj, g);
                            e.D("pr", "1");
                        } else b();
                    },
                };
            }
            function Gd(a) {
                return function (c, b, d) {
                    return function (e, f) {
                        var g = z(w(Ad, Kc([c, f]), ta), Gj[a] || []);
                        g = wa(g, d);
                        return Hj(c, b, g)(e);
                    };
                };
            }
            function Hj(a, c, b) {
                var d = Qb(a, c);
                return function (e) {
                    return Ij(b, e, !0)
                        .then(function () {
                            var f = e.ma || {},
                                g = f.Bh,
                                h = void 0 === g ? "" : g;
                            g = f.za;
                            var k = void 0 === g ? "" : g;
                            f = f.Ch;
                            f = z(
                                function (l) {
                                    return (
                                        va.Qa +
                                        "//" +
                                        ("" + h + l || ic) +
                                        "/" +
                                        k
                                    );
                                },
                                void 0 === f ? [ic] : f
                            );
                            return d(e, f);
                        })
                        .then(function (f) {
                            var g = f.Jc;
                            f = f.$f;
                            e.ri = g;
                            e.xj = f;
                            return Ij(b, e).then(u(g, Q));
                        });
                };
            }
            function Qb(a, c) {
                return function (b, d) {
                    return Jj(a, c, d, b);
                };
            }
            function Jj(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = C({ ha: [] }, d.Z),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                (h.Za && h.Za["Content-Type"]) ||
                    !h.da ||
                    ((h.Za = C(
                        {},
                        h.Za,
                        ((g = {}),
                        (g["Content-Type"] =
                            "application/x-www-form-urlencoded"),
                        g)
                    )),
                    (h.da = "site-info=" + me(h.da)));
                h.Rc = h.da ? "POST" : "GET";
                h.$a = ar(a, d, l);
                h.za = (d.ma || {}).za;
                h.ha.push(l);
                C(d.Z, h);
                g = "" + m + (d.Gc && d.Gc.Uh ? "/1" : "");
                var p = 0;
                p = br(a, g, h);
                return k(g, h)
                    .then(function (q) {
                        var r = p,
                            t,
                            y;
                        tb(
                            a,
                            ((t = {}),
                            (t.name = "requestSuccess"),
                            (t.data =
                                ((y = {}), (y.body = q), (y.requestId = r), y)),
                            t)
                        );
                        return { Jc: q, $f: e };
                    })
                    ["catch"](function (q) {
                        var r = p,
                            t,
                            y;
                        tb(
                            a,
                            ((t = {}),
                            (t.name = "requestFail"),
                            (t.data =
                                ((y = {}),
                                (y.error = q),
                                (y.requestId = r),
                                y)),
                            t)
                        );
                        r = f + 1 >= c.length;
                        t = e + 1 >= b.length;
                        r && t && Ta(q);
                        return Jj(
                            a,
                            c,
                            b,
                            d,
                            !t && r ? e + 1 : e,
                            r ? 0 : f + 1
                        );
                    });
            }
            function ar(a, c, b) {
                var d = C({}, c.J);
                a = ka(a);
                c.K && (d["browser-info"] = Ja(c.K.l()).D("st", a(dg)).Fa());
                !d.t && (c = c.Ha) && (c.D("ti", b), (d.t = c.Fa()));
                return d;
            }
            function br(a, c, b) {
                var d,
                    e,
                    f,
                    g = Xa(a),
                    h = b.ha,
                    k = b.da,
                    l = b.Za,
                    m = b.$a;
                b = b.Rc;
                tb(
                    a,
                    ((d = {}),
                    (d.name = "request"),
                    (d.data =
                        ((e = {}),
                        (e.url = c),
                        (e.requestId = g),
                        (e.senderParams =
                            ((f = {}),
                            (f.rBody = k),
                            (f.debugStack = h),
                            (f.rHeaders = l),
                            (f.rQuery = m),
                            (f.verb = b),
                            f)),
                        e)),
                    d)
                );
                return g;
            }
            function Kj(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !Z(d) && Lj(a[c], b, d);
            }
            function Lj(a, c, b) {
                for (var d = [c, b], e = -1e4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return;
                    }
                    e = g;
                }
                a.push(d);
            }
            function Ij(a, c, b) {
                void 0 === b && (b = !1);
                return new L(function (d, e) {
                    function f(k, l) {
                        l();
                        d();
                    }
                    var g = a.slice();
                    g.push({ N: f, Ba: f });
                    var h = dc(g, function (k, l) {
                        var m = b ? k.N : k.Ba;
                        if (m)
                            try {
                                m(c, l);
                            } catch (p) {
                                h(cr), e(p);
                            }
                        else l();
                    });
                    h(Mj);
                });
            }
            function Sb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ja(a);
                    var e = "__ym__promise_" + Xa(a) + "_" + Xa(a),
                        f = F;
                    d = B(a, d, function (g) {
                        try {
                            var h = g.data;
                        } catch (k) {
                            return;
                        }
                        h === e &&
                            (f(),
                            g.stopPropagation && g.stopPropagation(),
                            c());
                    });
                    f = b.F(a, ["message"], d);
                    a.postMessage(e, "*");
                } else V(a, c, 0, d);
            }
            function nh(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = dc(c, b);
                jd(a, c, d)($a(B(a, e), F));
            }
            function jd(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = Nj);
                kg = Infinity === b;
                return Ca(function (e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k);
                        } catch (l) {
                            return e(l);
                        }
                        c(dr);
                        if (c(Hd)) return f(h), Oj(a);
                        kg ? (c(d(a, 1e4)), f(h), Oj(a)) : V(a, g, 100);
                    }
                    var h = [];
                    er(g);
                });
            }
            function Oj(a) {
                if (lg.length) {
                    var c = lg.shift();
                    kg ? c() : V(a, c, 100);
                } else mg = !1;
            }
            function er(a) {
                mg ? lg.push(a) : ((mg = !0), a());
            }
            function Bf(a) {
                return Ca(function (c, b) {
                    b(a);
                });
            }
            function mp(a) {
                return Ca(function (c, b) {
                    a.then(b, c);
                });
            }
            function fr(a) {
                var c = [],
                    b = 0;
                return Ca(function (d, e) {
                    x(function (f, g) {
                        f(
                            $a(d, function (h) {
                                try {
                                    (c[g] = h),
                                        (b += 1),
                                        b === a.length && e(c);
                                } catch (k) {
                                    d(k);
                                }
                            })
                        );
                    }, a);
                });
            }
            function lp(a) {
                var c = [],
                    b = !1;
                return Ca(function (d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c);
                    }
                    x(function (g) {
                        g(
                            $a(f, function (h) {
                                if (!b)
                                    try {
                                        e(h), (b = !0);
                                    } catch (k) {
                                        f(k);
                                    }
                            })
                        );
                    }, a);
                });
            }
            function $a(a, c) {
                return function (b) {
                    return b(a, c);
                };
            }
            function dc(a, c) {
                return Ca({ Ta: a, Id: c || Q, ne: !1, va: 0 });
            }
            function Mj(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.va += 1;
                    }
                    b = !1;
                    a.Id(a.Ta[a.va], function () {
                        d();
                    });
                    b || ((a.va += 1), (d = u(a, Mj)));
                }
                for (var b = !0; !Hd(a) && b; ) c();
            }
            function Nj(a, c) {
                return function (b) {
                    var d = ka(a),
                        e = d(da);
                    return Pj(function (f, g) {
                        d(da) - e >= c && g(Qj);
                    })(b);
                };
            }
            function ng(a, c) {
                return function (b) {
                    var d = ka(a),
                        e = d(da);
                    return og(function (f) {
                        d(da) - e >= c && Qj(f);
                    })(b);
                };
            }
            function og(a) {
                return function (c) {
                    for (var b; c.Ta.length && !Hd(c); )
                        (b = c.Ta.pop()), (b = c.Id(b, c.Ta)), a(c);
                    return b;
                };
            }
            function gr(a) {
                Hd(a) && Ta(Qa("i"));
                var c = a.Id(a.Ta[a.va]);
                a.va += 1;
                return c;
            }
            function dr(a) {
                a.ne = !1;
            }
            function Qj(a) {
                a.ne = !0;
            }
            function cr(a) {
                a.va = a.Ta.length;
            }
            function Hd(a) {
                return a.ne || a.Ta.length <= a.va;
            }
            function Ab(a) {
                a = ka(a);
                return Math.round(a(Rj) / 50);
            }
            function Rj(a) {
                var c = a.Fc,
                    b = c[1];
                a = c[0] && b ? b() : da(a) - a.Dh;
                return Math.round(a);
            }
            function dg(a) {
                return Math.round(da(a) / 1e3);
            }
            function nb(a) {
                return Math.floor(da(a) / 1e3 / 60);
            }
            function da(a) {
                var c = a.xe;
                return 0 !== c ? c : pg(a.l, a.Fc);
            }
            function $f(a) {
                var c = ja(a),
                    b = Sj(a),
                    d = { l: a, xe: 0, Fc: b, Dh: pg(a, b) },
                    e = b[1];
                (b[0] && e) ||
                    c.F(a, ["beforeunload", "unload"], function () {
                        0 === d.xe && (d.xe = pg(a, d.Fc));
                    });
                return Ca(d);
            }
            function hr(a) {
                return (10 > a ? "0" : "") + a;
            }
            function ir(a, c) {
                return a.clearInterval(c);
            }
            function jr(a, c, b, d) {
                return a.setInterval(B(a, "i.err." + (d || "def"), c), b);
            }
            function V(a, c, b, d) {
                return Cd(a, B(a, "d.err." + (d || "def"), c), b);
            }
            function md(a) {
                var c = {};
                return {
                    F: function (b, d) {
                        x(function (e) {
                            n(c, e) || (c[e] = bj(a));
                            c[e].F(d);
                        }, b);
                        return this;
                    },
                    ga: function (b, d) {
                        x(function (e) {
                            n(c, e) && c[e].ga(d);
                        }, b);
                        return this;
                    },
                    ba: function (b, d) {
                        return n(c, b) ? B(a, "e." + d, c[b].ba)(d) : [];
                    },
                };
            }
            function bj(a) {
                var c = [],
                    b = {};
                b.qj = c;
                b.F = w(La("push", c), u(b, Q));
                b.ga = w(ub(Ob(a))(c), ub(La("splice", c))(1), u(b, Q));
                b.ba = w(Q, ub(ta), kr(c));
                return b;
            }
            function Tj(a, c, b, d, e, f) {
                a = lr(a);
                var g = a.F,
                    h = a.ga;
                f = f ? h : g;
                if (c[f])
                    if (a.Ci)
                        if (e) c[f](b, d, e);
                        else c[f](b, d);
                    else c[f]("on" + b, d);
            }
            function A(a, c, b) {
                return function () {
                    return B(arguments[0], a, c, b).apply(this, arguments);
                };
            }
            function B(a, c, b, d, e) {
                var f = b || Ta;
                return function () {
                    var g = d;
                    try {
                        g = f.apply(e || null, arguments);
                    } catch (h) {
                        Pc(a, c, h);
                    }
                    return g;
                };
            }
            function pg(a, c) {
                var b = c || Sj(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && M(b)
                    ? Math.round(b() + d)
                    : a.Date.now
                    ? a.Date.now()
                    : new a.Date().getTime();
            }
            function Sj(a) {
                a = ud(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = I(b, a));
                return [c, b];
            }
            function ud(a) {
                return n(a, "performance") || n(a, "webkitPerformance");
            }
            function Pc(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b &&
                    ("object" === typeof b
                        ? (b.unk && Ta(b),
                          (d = b.message),
                          (e =
                              ("string" === typeof b.stack &&
                                  b.stack.replace(/\n/g, "\\n")) ||
                              "n.s.e.s"))
                        : (d = "" + b));
                mr(d) ||
                    Za(u(d, gb), nr) ||
                    (or(d) && 0.1 <= a.Math.random()) ||
                    x(w(Q, Kc(["jserrs", d, c, e]), ta), Uj);
            }
            function Ud() {
                var a = Oa(arguments);
                return Ta(Pa(a));
            }
            function Pa(a) {
                var c = "";
                N(a) ? (c = H(".", a)) : fa(a) && (c = a);
                return Qa("err.kn(" + va.bb + ")" + c);
            }
            function mj(a) {
                return Qa(
                    "http." +
                        a.status +
                        ".st." +
                        a.statusText +
                        ".rt." +
                        ("" + a.responseText).substring(0, 50)
                );
            }
            function pr(a) {
                this.message = a;
            }
            function tb(a, c) {
                if (Oe(a)) {
                    var b = c.counterKey;
                    if (b) {
                        var d = b.split(":");
                        b = d[1];
                        d = qg(je(d[0]));
                        if ("1" === b || d) return;
                    }
                    b = qr(a);
                    1e3 === b.length && b.shift();
                    b.push(c);
                }
            }
            function ni(a, c, b) {
                rg(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = Vj(a);
                (d = d && d.metrika_enabled) &&
                    Wj(a, "metrika_enabled", c, b, !0);
                return !!d;
            }
            function rg(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (oi(a, qe, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + rr(a);
                    if (d) {
                        var k = new Date();
                        k.setTime(k.getTime() + 6e4 * d);
                        h += "expires=" + k.toUTCString() + ";";
                    }
                    e && ((d = e.replace(sr, "")), (h += "domain=" + d + ";"));
                    try {
                        (a.document.cookie = h + ("path=" + (f || "/"))),
                            g || (Xj(a)[c] = b);
                    } catch (l) {}
                }
            }
            function qe(a, c) {
                var b = Xj(a);
                return b ? b[c] || null : null;
            }
            function Vj(a) {
                try {
                    var c = a.document.cookie;
                    if (!Z(c)) {
                        var b = {};
                        x(function (d) {
                            d = d.split("=");
                            var e = d[1];
                            b[ab(d[0])] = ab(Yj(e));
                        }, (c || "").split(";"));
                        return b;
                    }
                } catch (d) {}
                return null;
            }
            function oi(a, c, b) {
                return !sg.length || G(b, Pe)
                    ? !0
                    : O(
                          function (d, e) {
                              return d && e(a, c, b);
                          },
                          !0,
                          sg
                      );
            }
            function Dc(a) {
                return a
                    ? w(
                          Ea,
                          Zj(function (c, b) {
                              var d = b[0],
                                  e = b[1];
                              Y(e) || Z(e) || c.push(d + "=" + me(e));
                              return c;
                          }, []),
                          we("&")
                      )(a)
                    : "";
            }
            function tr(a) {
                return a
                    ? w(
                          Vb(function (c) {
                              c = c.split("=");
                              var b = c[1];
                              return [c[0], Z(b) ? void 0 : Yj(b)];
                          }),
                          Zj(function (c, b) {
                              c[b[0]] = b[1];
                              return c;
                          }, {})
                      )(a.split("&"))
                    : {};
            }
            function Yj(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a);
                } catch (b) {}
                return c;
            }
            function me(a) {
                try {
                    return encodeURIComponent(a);
                } catch (c) {}
                a = H(
                    "",
                    ha(function (c) {
                        return 55296 >= c.charCodeAt(0);
                    }, a.split(""))
                );
                return encodeURIComponent(a);
            }
            function ab(a, c) {
                if (a) {
                    var b = ak ? ak.call(a) : ("" + a).replace(pj, "");
                    return c && b.length > c ? b.substring(0, c) : b;
                }
                return "";
            }
            function ij(a) {
                var c = a.match(bk);
                if (c) {
                    a = c[1];
                    if ((c = c[2])) return G(c, tg) ? c : !1;
                    if (a) return tg[0];
                }
                return !1;
            }
            function S(a) {
                return O(
                    function (c, b) {
                        var d = n(a, "location." + b);
                        c[b] = d ? "" + d : "";
                        return c;
                    },
                    {},
                    ur
                );
            }
            function ck(a) {
                return O(
                    function (c, b) {
                        c[Vd[b[0]].ea] = b[1];
                        return c;
                    },
                    {},
                    Ea(a)
                );
            }
            function pc(a) {
                x(function (c) {
                    var b = c[1];
                    Vd[c[0]] = { ea: b.ea, Na: b.Na };
                }, Ea(a));
            }
            function Vl(a, c, b, d, e) {
                var f = mh(a, b, d, e);
                a = O(
                    function (g, h) {
                        var k = h[1],
                            l = k.Na;
                        k = f[k.ea];
                        g[h[0]] = l ? l(k) : k;
                        return g;
                    },
                    {},
                    Ea(c)
                );
                dj(a, a.X || {});
                return a;
            }
            function mh(a, c, b, d) {
                var e;
                return ia(a)
                    ? a
                    : ((e = {}),
                      (e.id = a),
                      (e.type = b),
                      (e.defer = d),
                      (e.params = c),
                      e);
            }
            function vr(a) {
                a = K(a);
                return (qc[a] && qc[a].Ii) || null;
            }
            function dk(a) {
                a = K(a);
                return qc[a] && qc[a].Hi;
            }
            function dj(a, c) {
                var b = K(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                qc[b] || (qc[b] = {});
                if (d || e) (qc[b].Hi = d), (qc[b].Ii = e);
            }
            function tf(a, c) {
                if (Id(a) && c) {
                    var b = sb(a).match(ug);
                    if (b && b.length) return +b[1] >= c;
                }
                return !1;
            }
            function uf(a, c) {
                var b = sb(a);
                return b && (b = b.match(wr)) && 1 < b.length
                    ? Ga(b[1]) >= c
                    : !1;
            }
            function jg(a) {
                return G(
                    "prerender",
                    z(u(n(a, "document"), n), [
                        "webkitVisibilityState",
                        "visibilityState",
                    ])
                );
            }
            function Xa(a, c, b) {
                var d = Y(b);
                Y(c) && d
                    ? ((d = 1), (c = 1073741824))
                    : d
                    ? (d = 1)
                    : ((d = c), (c = b));
                return a.Math.floor(a.Math.random() * (c - d)) + d;
            }
            function xr() {
                var a = Oa(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length; ) {
                    var b = a.shift(),
                        d;
                    for (d in b) Jb(b, d) && (c[d] = b[d]);
                    Jb(b, "toString") && (c.toString = b.toString);
                }
                return c;
            }
            function yr(a) {
                return function (c) {
                    return c ? a(c) : [];
                };
            }
            function ek(a) {
                return Y(a)
                    ? []
                    : vg(
                          function (c, b) {
                              c.push([b, a[b]]);
                              return c;
                          },
                          [],
                          fk(a)
                      );
            }
            function fk(a) {
                var c = [],
                    b;
                for (b in a) Jb(a, b) && c.push(b);
                return c;
            }
            function je(a) {
                try {
                    return parseInt(a, 10);
                } catch (c) {
                    return null;
                }
            }
            function lc(a, c) {
                return (
                    a.isFinite(c) &&
                    !a.isNaN(c) &&
                    "[object Number]" === Object.prototype.toString.call(c)
                );
            }
            function zr(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b)
                    c[a.length - 1 - b] = a[b];
                return c;
            }
            function wa(a, c) {
                x(w(Q, La("push", a)), c);
                return a;
            }
            function te(a, c) {
                return Array.prototype.sort.call(c, a);
            }
            function Qe(a) {
                return a.splice(0, a.length);
            }
            function Ia(a) {
                return a
                    ? N(a)
                        ? a
                        : Jd
                        ? Jd(a)
                        : "number" === typeof a.length && 0 <= a.length
                        ? gk(a)
                        : []
                    : [];
            }
            function Ar(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (b in c && a.call(c, c[b], b)) return !0;
                return !1;
            }
            function Br(a, c) {
                return O(
                    function (b, d, e) {
                        d = a(d, e);
                        return b.concat(N(d) ? d : [d]);
                    },
                    [],
                    c
                );
            }
            function hk(a, c) {
                return O(
                    function (b, d, e) {
                        b.push(a(d, e));
                        return b;
                    },
                    [],
                    c
                );
            }
            function Cr(a, c) {
                if (!Id(a)) return !0;
                try {
                    c.call(
                        { 0: !0, length: -Math.pow(2, 32) + 1 },
                        function () {
                            throw 1;
                        }
                    );
                } catch (b) {
                    return !1;
                }
                return !0;
            }
            function Dr(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1)
                    b += "" + (d ? a : "") + c[d];
                return b;
            }
            function Er(a, c) {
                return 1 <= ik(Ba(a), c).length;
            }
            function Fr(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c, c[b], b)) return c[b];
            }
            function ik(a, c) {
                return vg(
                    function (b, d, e) {
                        a(d, e) && b.push(d);
                        return b;
                    },
                    [],
                    c
                );
            }
            function re(a, c, b) {
                return b ? a : c;
            }
            function Gr(a, c) {
                return O(
                    function (b, d, e) {
                        return b ? !!a(d, e) : !1;
                    },
                    !0,
                    c
                );
            }
            function Vf(a, c, b) {
                try {
                    if (M(c)) {
                        var d = Oa(arguments).slice(3);
                        Z(b) ? c.apply(null, d) : c.apply(b, d);
                    }
                } catch (e) {
                    Cd(a, u(e, Ta), 0);
                }
            }
            function Ta(a) {
                throw a;
            }
            function Cd(a, c, b) {
                return Ec("setTimeout", a)(c, b);
            }
            function la(a, c) {
                return Ec("clearTimeout", a)(c);
            }
            function xd() {
                return [];
            }
            function Ic() {
                return {};
            }
            function Ec(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply)
                        return function () {
                            return d.apply(c, arguments);
                        };
                } catch (e) {
                    return b;
                }
                return d;
            }
            function vb(a, c, b) {
                return function () {
                    var d = J(arguments[0]),
                        e = b ? "global" : "m1370",
                        f = d.C(e, {}),
                        g = n(f, a);
                    g || ((g = v(c)), (f[a] = g), d.D(e, f));
                    return g.apply(null, arguments);
                };
            }
            function le(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                zb(
                    function (b, d, e) {
                        if (e === a.length - 1) return b;
                        e === a.length - 2
                            ? (b[d] = a[e + 1])
                            : Jb(b, d) || (b[d] = {});
                        return b[d];
                    },
                    c,
                    a
                );
                return c;
            }
            function Kd(a) {
                a = a.Ya = a.Ya || {};
                var c = (a._metrika = a._metrika || {});
                return {
                    Ga: function (b, d) {
                        wg.call(c, b) || (c[b] = d);
                        return this;
                    },
                    D: function (b, d) {
                        c[b] = d;
                        return this;
                    },
                    C: function (b, d) {
                        var e = c[b];
                        return wg.call(c, b) || Y(d) ? e : d;
                    },
                };
            }
            function Jb(a, c) {
                return Z(a) ? !1 : wg.call(a, c);
            }
            function v(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : Q;
                return function () {
                    var f = Oa(arguments),
                        g = e.apply(void 0, f),
                        h = kf(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f;
                };
            }
            function Ob(a) {
                if (xg) return xg;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0);
                } catch (d) {}
                var b =
                    a.Array &&
                    a.Array.prototype &&
                    ma(a.Array.prototype.indexOf, "indexOf");
                a = void 0;
                return (xg = a =
                    c && b
                        ? function (d, e) {
                              return b.call(e, d);
                          }
                        : Hr);
            }
            function Hr(a, c) {
                for (var b = 0; b < c.length; b += 1) if (c[b] === a) return b;
                return -1;
            }
            function ta(a, c) {
                return c ? a(c) : a();
            }
            function w() {
                var a = Oa(arguments),
                    c = a.shift();
                return function () {
                    var b = c.apply(void 0, arguments);
                    return O(jk, b, a);
                };
            }
            function Zj(a, c) {
                return D([a, c], O);
            }
            function vg(a, c, b) {
                for (var d = 0, e = b.length; d < e; )
                    (c = a(c, b[d], d)), (d += 1);
                return c;
            }
            function db(a) {
                return La("test", a);
            }
            function La(a, c) {
                return I(c[a], c);
            }
            function u(a, c) {
                return I(c, null, a);
            }
            function D(a, c) {
                return I.apply(void 0, sc([c, null], a));
            }
            function Ir(a) {
                return function () {
                    var c = Oa(arguments);
                    return a.apply(c[0], [c[1]].concat(c.slice(2)));
                };
            }
            function Jr() {
                var a = Oa(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function () {
                    var e = sc(d, Oa(arguments));
                    if (Function.prototype.call)
                        return Function.prototype.call.apply(c, sc([b], e));
                    if (b) {
                        for (var f = "_b"; b[f]; ) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && kk(f, e, b);
                        delete b[f];
                        return e;
                    }
                    return kk(c, e);
                };
            }
            function kk(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                M(e) && ((e = "d"), (b[e] = a));
                var f;
                d
                    ? 1 === d
                        ? (f = b[e](c[0]))
                        : 2 === d
                        ? (f = b[e](c[0], c[1]))
                        : 3 === d
                        ? (f = b[e](c[0], c[1], c[2]))
                        : 4 === d && (f = b[e](c[0], c[1], c[2], c[3]))
                    : (f = b[e]());
                return f;
            }
            function Oa(a) {
                if (Jd)
                    try {
                        return Jd(a);
                    } catch (c) {}
                return gk(a);
            }
            function gk(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1)
                    b.push(a[d]);
                return b;
            }
            function ia(a) {
                return (
                    !Wa(a) &&
                    !Y(a) &&
                    "[object Object]" === Object.prototype.toString.call(a)
                );
            }
            function Z(a) {
                return Y(a) || Wa(a);
            }
            function M(a) {
                return "function" === typeof a;
            }
            function ub(a) {
                return function (c) {
                    return function (b) {
                        return a(b, c);
                    };
                };
            }
            function qa(a) {
                return function (c) {
                    return function (b) {
                        return a(c, b);
                    };
                };
            }
            function jk(a, c) {
                return c(a);
            }
            function iq(a) {
                return a
                    .replace(/\^/g, "\\^")
                    .replace(/\$/g, "\\$")
                    .replace(Zf, "\\.")
                    .replace(/\[/g, "\\[")
                    .replace(/\]/g, "\\]")
                    .replace(/\|/g, "\\|")
                    .replace(/\(/g, "\\(")
                    .replace(/\)/g, "\\)")
                    .replace(/\?/g, "\\?")
                    .replace(/\*/g, "\\*")
                    .replace(/\+/g, "\\+")
                    .replace(/\{/g, "\\{")
                    .replace(/\}/g, "\\}");
            }
            function Kr(a) {
                return "" + a;
            }
            function gb(a, c) {
                return !(!a || -1 === mb(a, c));
            }
            function jc(a, c) {
                return mb(a, c);
            }
            function Lr(a, c) {
                for (
                    var b = 0, d = a.length - c.length, e = 0;
                    e < a.length;
                    e += 1
                ) {
                    b = a[e] === c[b] ? b + 1 : 0;
                    if (b === c.length) return e - c.length + 1;
                    if (!b && e > d) break;
                }
                return -1;
            }
            function fa(a) {
                return "string" === typeof a;
            }
            function ma(a, c) {
                return Ha(c, a) && a;
            }
            function Ha(a, c) {
                var b = Re(a, c);
                c && !b && yg.push([a, c]);
                return b;
            }
            function Re(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c;
                } catch (h) {
                    return !1;
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f =
                        "[native code]"[f] === b[g] || (7 === f && "-" === b[g])
                            ? f + 1
                            : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break;
                }
                return !1;
            }
            function F() {}
            function zg(a, c) {
                zg =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (b, d) {
                            b.__proto__ = d;
                        }) ||
                    function (b, d) {
                        for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]);
                    };
                return zg(a, c);
            }
            function Fc(a) {
                return !a;
            }
            function eb(a, c) {
                return c;
            }
            function Q(a) {
                return a;
            }
            function Na(a, c) {
                function b() {
                    this.constructor = a;
                }
                zg(a, c);
                a.prototype =
                    null === c
                        ? Object.create(c)
                        : ((b.prototype = c.prototype), new b());
            }
            function sc() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++)
                    a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (
                        var e = arguments[c], f = 0, g = e.length;
                        f < g;
                        f++, d++
                    )
                        a[d] = e[f];
                return a;
            }
            function n(a, c) {
                return a
                    ? O(
                          function (b, d) {
                              if (Z(b)) return b;
                              try {
                                  return b[d];
                              } catch (e) {}
                              return null;
                          },
                          a,
                          c.split(".")
                      )
                    : null;
            }
            function Mr(a) {
                return "[object Array]" === Object.prototype.toString.call(a);
            }
            function Nr() {}
            function Or(a, c) {
                return function () {
                    a.apply(c, arguments);
                };
            }
            function Ka(a) {
                if (!(this instanceof Ka))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a)
                    throw new TypeError("not a function");
                this.Ka = 0;
                this.De = !1;
                this.Pa = void 0;
                this.zb = [];
                lk(a, this);
            }
            function mk(a, c) {
                for (; 3 === a.Ka; ) a = a.Pa;
                0 === a.Ka
                    ? a.zb.push(c)
                    : ((a.De = !0),
                      Ka.Ee(function () {
                          var b = 1 === a.Ka ? c.Zh : c.ei;
                          if (null === b)
                              (1 === a.Ka ? Ag : Ld)(c.promise, a.Pa);
                          else {
                              try {
                                  var d = b(a.Pa);
                              } catch (e) {
                                  Ld(c.promise, e);
                                  return;
                              }
                              Ag(c.promise, d);
                          }
                      }));
            }
            function Ag(a, c) {
                try {
                    if (c === a)
                        throw new TypeError(
                            "A promise cannot be resolved with itself."
                        );
                    if (
                        c &&
                        ("object" === typeof c || "function" === typeof c)
                    ) {
                        var b = c.then;
                        if (c instanceof Ka) {
                            a.Ka = 3;
                            a.Pa = c;
                            Bg(a);
                            return;
                        }
                        if ("function" === typeof b) {
                            lk(Or(b, c), a);
                            return;
                        }
                    }
                    a.Ka = 1;
                    a.Pa = c;
                    Bg(a);
                } catch (d) {
                    Ld(a, d);
                }
            }
            function Ld(a, c) {
                a.Ka = 2;
                a.Pa = c;
                Bg(a);
            }
            function Bg(a) {
                2 === a.Ka &&
                    0 === a.zb.length &&
                    Ka.Ee(function () {
                        a.De || Ka.ng(a.Pa);
                    });
                for (var c = 0, b = a.zb.length; c < b; c++) mk(a, a.zb[c]);
                a.zb = null;
            }
            function Pr(a, c, b) {
                this.Zh = "function" === typeof a ? a : null;
                this.ei = "function" === typeof c ? c : null;
                this.promise = b;
            }
            function lk(a, c) {
                var b = !1;
                try {
                    a(
                        function (d) {
                            b || ((b = !0), Ag(c, d));
                        },
                        function (d) {
                            b || ((b = !0), Ld(c, d));
                        }
                    );
                } catch (d) {
                    b || ((b = !0), Ld(c, d));
                }
            }
            function Wj(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return rg(a, c, "", -100, b, d, e);
            }
            function $d(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = Qr(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    dc: function (g, h, k) {
                        Wj(a, "" + c + g + f, h || e, k);
                        return this;
                    },
                    C: function (g) {
                        return qe(a, "" + c + g + f);
                    },
                    D: function (g, h, k, l, m) {
                        rg(a, "" + c + g + f, h, k, l || e, m);
                        return this;
                    },
                };
            }
            function Lb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c);
                } catch (b) {
                    return null;
                }
            }
            function fc(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
                    (c ^= a.charCodeAt(d)),
                        (c +=
                            (c << 1) +
                            (c << 4) +
                            (c << 7) +
                            (c << 8) +
                            (c << 24));
                return c >>> 0;
            }
            function Qc(a, c) {
                var b = Rr(a);
                return b
                    ? ((b.href = c),
                      {
                          protocol: b.protocol,
                          host: b.host,
                          port: b.port,
                          hostname: b.hostname,
                          hash: b.hash,
                          search: b.search,
                          query: b.search.replace(/^\?/, ""),
                          pathname: b.pathname || "/",
                          path: (b.pathname || "/") + b.search,
                          href: b.href,
                      })
                    : {};
            }
            function nk(a) {
                return (a = S(a).hash.split("#")[1]) ? a.split("?")[0] : "";
            }
            function Sr(a, c) {
                var b = nk(a);
                ok = jr(
                    a,
                    function () {
                        var d = nk(a);
                        d !== b && (c(), (b = d));
                    },
                    200,
                    "t.h"
                );
                return I(ir, null, a, ok);
            }
            function Tr(a, c, b, d) {
                var e,
                    f,
                    g = c.ca,
                    h = c.Ae,
                    k = c.lc,
                    l = J(a),
                    m = Ja(((e = {}), (e.wh = 1), (e.pv = 1), e));
                e = n(d, "isTrusted");
                d && !Z(e) && m.D("ite", pb(e));
                Wd(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
                h && m.D("ut", "1");
                g = l.C("lastReferrer");
                d = S(a).href;
                k = {
                    J:
                        ((f = {}),
                        (f["page-url"] = k || d),
                        (f["page-ref"] = g),
                        f),
                    K: m,
                };
                b(k, c)["catch"](B(a, "g.s"));
                l.D("lastReferrer", d);
            }
            function Ur(a, c, b) {
                function d() {
                    r || ((q = !0), (t = !1), (r = !0), f());
                }
                function e() {
                    m = !0;
                    k(!1);
                    c();
                }
                function f() {
                    la(a, l);
                    if (m) k(!1);
                    else {
                        var P = Math.max(0, b - (t ? y : y + p(da) - E));
                        P ? (l = V(a, e, P, "u.t.d.c")) : e();
                    }
                }
                function g() {
                    t = q = r = !0;
                    y += p(da) - E;
                    E = p(da);
                    f();
                }
                function h() {
                    q || r || (y = 0);
                    E = p(da);
                    q = r = !0;
                    t = !1;
                    f();
                }
                function k(P) {
                    P = P ? R.F : R.vb;
                    P(a, ["blur"], g);
                    P(a, ["focus"], h);
                    P(
                        a.document,
                        ["click", "mousemove", "keydown", "scroll"],
                        d
                    );
                }
                var l = 0,
                    m = !1;
                if (hg(a)) return (l = V(a, c, b, "u.t.d")), D([a, l], la);
                var p = ka(a),
                    q = !1,
                    r = !1,
                    t = !0,
                    y = 0,
                    E = p(da),
                    R = ja(a);
                k(!0);
                f();
                return function () {
                    la(a, l);
                    k(!1);
                };
            }
            function wb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
            }
            function rc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
            }
            function Wc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c)
                    return [
                        (a[0] << c) | (a[1] >>> (32 - c)),
                        (a[1] << c) | (a[0] >>> (32 - c)),
                    ];
                c -= 32;
                return [
                    (a[1] << c) | (a[0] >>> (32 - c)),
                    (a[0] << c) | (a[1] >>> (32 - c)),
                ];
            }
            function jb(a, c) {
                c %= 64;
                return 0 === c
                    ? a
                    : 32 > c
                    ? [(a[0] << c) | (a[1] >>> (32 - c)), a[1] << c]
                    : [a[1] << (c - 32), 0];
            }
            function xa(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]];
            }
            function pk(a) {
                a = xa(a, [0, a[0] >>> 1]);
                a = wb(a, [4283543511, 3981806797]);
                a = xa(a, [0, a[0] >>> 1]);
                a = wb(a, [3301882366, 444984403]);
                return (a = xa(a, [0, a[0] >>> 1]));
            }
            function Vr(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - (b.length % 16);
                d = { T: [0, d], V: [0, d] };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [
                            (a.charCodeAt(f + 4) & 255) |
                                ((a.charCodeAt(f + 5) & 255) << 8) |
                                ((a.charCodeAt(f + 6) & 255) << 16) |
                                ((a.charCodeAt(f + 7) & 255) << 24),
                            (a.charCodeAt(f) & 255) |
                                ((a.charCodeAt(f + 1) & 255) << 8) |
                                ((a.charCodeAt(f + 2) & 255) << 16) |
                                ((a.charCodeAt(f + 3) & 255) << 24),
                        ],
                        k = [
                            (a.charCodeAt(f + 12) & 255) |
                                ((a.charCodeAt(f + 13) & 255) << 8) |
                                ((a.charCodeAt(f + 14) & 255) << 16) |
                                ((a.charCodeAt(f + 15) & 255) << 24),
                            (a.charCodeAt(f + 8) & 255) |
                                ((a.charCodeAt(f + 9) & 255) << 8) |
                                ((a.charCodeAt(f + 10) & 255) << 16) |
                                ((a.charCodeAt(f + 11) & 255) << 24),
                        ];
                    h = wb(h, Se);
                    h = Wc(h, 31);
                    h = wb(h, Te);
                    g.T = xa(g.T, h);
                    g.T = Wc(g.T, 27);
                    g.T = rc(g.T, g.V);
                    g.T = rc(wb(g.T, [0, 5]), [0, 1390208809]);
                    k = wb(k, Te);
                    k = Wc(k, 33);
                    k = wb(k, Se);
                    g.V = xa(g.V, k);
                    g.V = Wc(g.V, 31);
                    g.V = rc(g.V, g.T);
                    g.V = rc(wb(g.V, [0, 5]), [0, 944331445]);
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = xa(h, jb([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = xa(h, jb([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = xa(h, jb([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = xa(h, jb([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = xa(h, jb([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = xa(h, jb([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        (h = xa(h, [0, b.charCodeAt(f + 8)])),
                            (h = wb(h, Te)),
                            (h = Wc(h, 33)),
                            (h = wb(h, Se)),
                            (d.V = xa(d.V, h));
                    case 8:
                        g = xa(g, jb([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = xa(g, jb([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = xa(g, jb([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = xa(g, jb([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g = xa(g, jb([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = xa(g, jb([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = xa(g, jb([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        (g = xa(g, [0, b.charCodeAt(f)])),
                            (g = wb(g, Se)),
                            (g = Wc(g, 31)),
                            (g = wb(g, Te)),
                            (d.T = xa(d.T, g));
                }
                d.T = xa(d.T, [0, b.length]);
                d.V = xa(d.V, [0, b.length]);
                d.T = rc(d.T, d.V);
                d.V = rc(d.V, d.T);
                d.T = pk(d.T);
                d.V = pk(d.V);
                d.T = rc(d.T, d.V);
                d.V = rc(d.V, d.T);
                return (
                    ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) +
                    ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8) +
                    ("00000000" + (d.V[0] >>> 0).toString(16)).slice(-8) +
                    ("00000000" + (d.V[1] >>> 0).toString(16)).slice(-8)
                );
            }
            function Md(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = hb('[itemprop~="' + b + '"]', c);
                return d
                    ? ha(function (e) {
                          return (
                              e.parentNode &&
                              nc("[itemtype]", a, e.parentNode) === c
                          );
                      }, b)
                    : b;
            }
            function fb(a, c, b) {
                return (a = Md(a, c, b)) && a.length ? a[0] : null;
            }
            function bb(a) {
                if (!a) return "";
                a = N(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Kb(a[0]) : "";
            }
            function qk(a) {
                return a
                    ? a.attributes && a.getAttribute("datetime")
                        ? a.getAttribute("datetime")
                        : bb(a)
                    : "";
            }
            function pd(a, c, b) {
                a =
                    c &&
                    (gb(c.className, "ym-disable-keys") ||
                        gb(c.className, "-metrika-nokeys"));
                return b && c
                    ? a ||
                          !!Vq(["ym-disable-keys", "-metrika-nokeys"], c).length
                    : a;
            }
            function Ef(a, c) {
                return Le(c)
                    ? "password" === c.type ||
                          (c.name && G(c.name.toLowerCase(), rk)) ||
                          (c.id && G(c.id.toLowerCase(), rk))
                    : !1;
            }
            function sk(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                wa(a, [b >> 8, b & 255]);
            }
            function Ub(a, c) {
                wa(a, [c & 255]);
            }
            function ib(a, c, b) {
                return -1 !== Ob(a)(b, Wr) ? (Ub(c, b), !1) : !0;
            }
            function T(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b; )
                    wa(a, [(b & 127) | 128]), (b >>= 7);
                wa(a, [b]);
            }
            function Cg(a, c) {
                T(a, c.length);
                for (var b = 0; b < c.length; b += 1) T(a, c.charCodeAt(b));
            }
            function Dg(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) sk(a, b.charCodeAt(d));
            }
            function Xr(a, c) {
                var b = [];
                if (ib(a, b, 27)) return [];
                T(b, c);
                return b;
            }
            function Yr(a, c) {
                var b = Ma(c);
                if (!b) return (c[Ya] = -1), null;
                var d = +c[Ya];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e; ) {
                        if (e.attributes.bj) return null;
                        e = e.parentElement;
                    }
                e = 64;
                var f = Je(a, c),
                    g = f && f[Ya] ? f[Ya] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = Zr()[b];
                h || (e |= 2);
                var k = yj(a, c);
                k || (e |= 4);
                var l = If(a, c);
                (f = f ? If(a, f) : null) &&
                    l[0] === f[0] &&
                    l[1] === f[1] &&
                    l[2] === f[2] &&
                    l[3] === f[3] &&
                    (e |= 8);
                zc[d].rf = l[0] + "x" + l[1];
                zc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (ib(a, f, 1)) return null;
                T(f, d);
                Ub(f, e);
                T(f, g);
                h ? Ub(f, h) : Dg(f, b);
                k && T(f, k);
                e & 8 || (T(f, l[0]), T(f, l[1]), T(f, l[2]), T(f, l[3]));
                e & 32 && Dg(f, c.id);
                Ub(f, 0);
                return f;
            }
            function $r(a, c) {
                var b = c[Ya];
                if (!b || 0 > b || !Gf(c) || !c.form || li(a, c.form))
                    return [];
                var d = Aj(a, c.form);
                if (0 > d) return [];
                if (Le(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        cc: 0,
                        fj: 0,
                        "datetime-local": 0,
                        email: 0,
                        pf: 0,
                        wj: 0,
                        search: 0,
                        Bj: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Dj: 0,
                        password: 2,
                        vj: 3,
                        dj: 4,
                        file: 6,
                        image: 7,
                    };
                    e = e[c.type];
                } else {
                    e = { Zi: 1, $i: 5 };
                    var f = Ma(c);
                    e = Y(f) ? "" : e[f];
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (
                    var g = c.form.elements, h = g.length, k = 0, l = 0;
                    k < h;
                    k += 1
                )
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break;
                        }
                        l += 1;
                    }
                if (0 > f) return [];
                g = [];
                if (ib(a, g, 7)) return [];
                T(g, b);
                T(g, d);
                T(g, e);
                Cg(g, c.name || "");
                T(g, f);
                return g;
            }
            function yc(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !eo(a, c, b); c = Je(a, c)) d.push(c);
                x(function (e) {
                    zc.counter += 1;
                    var f = zc.counter;
                    e[Ya] = f;
                    zc[f] = {};
                    f = Yr(a, e);
                    e = $r(a, e);
                    f && e && (wa(b, f), wa(b, e));
                }, as(d));
                return b;
            }
            function bs(a) {
                var c = a.na;
                if (!od || (c && !c.fromElement)) return ii(a);
            }
            function cs(a) {
                var c = a.na;
                if (c && !c.toElement) return Hf(a);
            }
            function tk(a) {
                var c = Hc(a.na);
                if (c && pe(c)) {
                    var b = hi(a, c),
                        d = b.concat;
                    var e = Ab(a.l),
                        f = [];
                    ib(a.l, f, 17) ? (a = []) : (T(f, e), T(f, c[Ya]), (a = f));
                    return d.call(b, a);
                }
            }
            function uk(a) {
                var c = a.l,
                    b = a.na.target;
                if (b && pe(b)) {
                    c = yc(c, b);
                    var d = c.concat;
                    var e = Ab(a.l),
                        f = [];
                    ib(a.l, f, 18) ? (a = []) : (T(f, e), T(f, b[Ya]), (a = f));
                    return d.call(c, a);
                }
            }
            function vk(a) {
                var c = a.l,
                    b = Hc(a.na);
                if (!b || Ef(c, b) || pd(c, b)) return [];
                if (Gf(b)) {
                    var d = J(c).C("isEU"),
                        e = Rc(c, b, d),
                        f = e.Va;
                    d = e.ob;
                    e = e.fb;
                    if (Me(b)) var g = b.checked;
                    else (g = b.value), (g = f ? H("", wk(g.split(""))) : g);
                    c = yc(c, b);
                    f = c.concat;
                    var h = Ab(a.l);
                    d = d && !e;
                    e = [];
                    ib(a.l, e, 39)
                        ? (a = [])
                        : (T(e, h),
                          T(e, b[Ya]),
                          Dg(e, String(g)),
                          Ub(e, d ? 1 : 0),
                          (a = e));
                    return f.call(c, a);
                }
            }
            function Ue(a) {
                var c = a.l,
                    b = a.na,
                    d = Hc(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = u(e, wa);
                d && pe(d) ? f(hi(a, d)) : f(yc(c, d));
                var g = Xi(c, b);
                f = e.concat;
                a = Ab(a.l);
                var h = b.type,
                    k = [g.x, g.y];
                g = b.which;
                b = b.button;
                var l;
                var m = Ke(c, d);
                var p = m[0];
                for (m = m[1]; d && (!p || !m); )
                    if ((d = Je(c, d))) (m = Ke(c, d)), (p = m[0]), (m = m[1]);
                d
                    ? ((p = d[Ya]),
                      !p || 0 > p
                          ? (c = [])
                          : (m = ((l = {}),
                            (l.mousemove = 2),
                            (l.click = 32),
                            (l.dblclick = 33),
                            (l.mousedown = 4),
                            (l.mouseup = 30),
                            (l.touch = 12),
                            l)[h])
                          ? ((l = []),
                            (d = gg(c, d)),
                            ib(c, l, m)
                                ? (c = [])
                                : (T(l, a),
                                  T(l, p),
                                  T(l, Math.max(0, k[0] - d.left)),
                                  T(l, Math.max(0, k[1] - d.top)),
                                  /^mouse(up|down)|click$/.test(h) &&
                                      ((c = g || b),
                                      Ub(
                                          l,
                                          2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2
                                      )),
                                  (c = l)))
                          : (c = []))
                    : (c = []);
                return f.call(e, c);
            }
            function ds(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection();
                    } catch (g) {
                        return [];
                    }
                    if (Wa(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode;
                } else
                    d.selection &&
                        d.selection.createRange &&
                        ((d = d.selection.createRange()),
                        (e = d.text),
                        (c = d.parentElement()));
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType; ) c = c.parentNode;
                } catch (g) {
                    return [];
                }
                if (!c) return [];
                d = Rc(b, c).Va || pd(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d; )
                    (d = c[f]), (d = Rc(b, d).Va || pd(b, d, !0)), (f += 1);
                if (e !== Eg)
                    return (
                        (Eg = e),
                        (d = d ? H("", wk(e.split(""))) : e),
                        (e = Ab(a.l)),
                        0 === d.length
                            ? (d = b = "")
                            : 100 >= d.length
                            ? ((b = d), (d = ""))
                            : 200 >= d.length
                            ? ((b = d.substr(0, 100)), (d = d.substr(100)))
                            : ((b = d.substr(0, 97)),
                              (d = d.substr(d.length - 97))),
                        (c = []),
                        ib(a.l, c, 29)
                            ? (a = [])
                            : (T(c, e), Cg(c, b), Cg(c, d), (a = c)),
                        a
                    );
            }
            function es(a) {
                return Ue(a).concat(ds(a) || []);
            }
            function xk(a) {
                return (
                    (a.shiftKey ? 2 : 0) |
                    (a.ctrlKey ? 4 : 0) |
                    (a.altKey ? 1 : 0) |
                    (a.metaKey ? 8 : 0) |
                    (a.ctrlKey || a.altKey ? 16 : 0)
                );
            }
            function yk(a) {
                var c = [];
                Fg ||
                    ((Fg = !0),
                    Eg && wa(c, Xr(a.l, Ab(a.l))),
                    Sb(
                        a.l,
                        function () {
                            Fg = !1;
                        },
                        "fv.c"
                    ));
                return c;
            }
            function zk(a, c, b, d) {
                c = Hc(c);
                if (!c || Jf(a, c)) return [];
                var e = Rc(a, c),
                    f = e.ob,
                    g = e.fb;
                e = e.Va;
                var h = J(a);
                if (!g && ((f && h.C("isEU")) || pd(a, c))) a = [];
                else {
                    f = yc(a, c);
                    g = f.concat;
                    var k = Ab(a);
                    h = [];
                    if (ib(a, h, 38)) a = [];
                    else {
                        T(h, k);
                        sk(h, b);
                        Ub(h, d);
                        a = c[Ya];
                        if (!a || 0 > a) a = 0;
                        T(h, a);
                        Ub(h, e ? 1 : 0);
                        a = h;
                    }
                    a = g.call(f, a);
                }
                return a;
            }
            function fs(a) {
                var c = a.l,
                    b = a.na,
                    d = b.keyCode,
                    e = xk(b),
                    f = [],
                    g = u(f, wa);
                if (
                    {
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1,
                    }[d] ||
                    (112 <= d && 123 >= d) ||
                    (96 <= d && 105 >= d) ||
                    e & 16
                )
                    19 === d && 4 === (e & -17) && (d = 144),
                        g(zk(c, b, d, e | 16)),
                        (Gg = !1),
                        Sb(
                            c,
                            function () {
                                Gg = !0;
                            },
                            "fv.kd"
                        ),
                        !(67 === d && e & 4) || e & 1 || e & 2 || g(yk(a));
                return f;
            }
            function gs(a) {
                var c = a.l;
                a = a.na;
                var b = [];
                Gg &&
                    !Hg &&
                    0 !== a.which &&
                    (wa(b, zk(c, a, a.charCode || a.keyCode, xk(a))),
                    (Hg = !0),
                    Sb(
                        c,
                        function () {
                            Hg = !1;
                        },
                        "fv.kp"
                    ));
                return b;
            }
            function Ak(a) {
                var c = a.l,
                    b = Hc(a.na);
                if (!b || li(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1)
                        zj(e[f]) || wa(d, yc(c, e[f]));
                    a = Ab(a.l);
                    e = Aj(c, b);
                    if (0 > e) c = [];
                    else {
                        f = b.elements;
                        var g = f.length;
                        b = [];
                        for (var h = 0; h < g; h += 1)
                            if (!zj(f[h])) {
                                var k = f[h][Ya];
                                k && 0 < k && b.push(k);
                            }
                        f = [];
                        if (ib(c, f, 11)) c = [];
                        else {
                            T(f, a);
                            T(f, e);
                            T(f, b.length);
                            for (c = 0; c < b.length; c += 1) T(f, b[c]);
                            c = f;
                        }
                    }
                    wa(d, c);
                }
                return d;
            }
            function hs(a) {
                var c = a.flush;
                a = Hc(a.na);
                "BODY" === Ma(a) && c();
            }
            function xn(a, c) {
                var b,
                    d = Hc(c),
                    e = va.Zb,
                    f = Kd(a);
                if (d && hc("ym-advanced-informer", d)) {
                    var g = f.C("ifc", 0) + 1;
                    f.D("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Ga(d.getAttribute("data-cid") || "");
                    if (h || 0 === h)
                        (e = n(a, "Ya." + e + ".informer"))
                            ? e(
                                  ((b = {}),
                                  (b.i = d),
                                  (b.id = h),
                                  (b.lang = g),
                                  b)
                              )
                            : f.D("ib", !0),
                            (b = c || window.event),
                            b.preventDefault
                                ? b.preventDefault()
                                : (b.returnValue = !1);
                }
            }
            function Ul(a, c, b, d, e) {
                if (!b.length) return e;
                b = z(function (f) {
                    return D([a, c, d], f);
                }, b);
                return w.apply(void 0, b)(e);
            }
            var Xc = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "2zmls2rp91mmodjl1d9rh2lhi7",
                    host: "mc.yandex.ru",
                },
                yg = [],
                Zf = /\./g,
                Bk = ma(String.prototype.indexOf, "indexOf"),
                mb = Bk
                    ? function (a, c) {
                          return Bk.call(a, c);
                      }
                    : Lr,
                Ba = qa(function (a, c) {
                    return a === c;
                }),
                sd = qa(function (a, c) {
                    a(c);
                    return c;
                }),
                Ca = qa(jk),
                Wa = Ba(null),
                Y = Ba(void 0),
                Jd = ma(Array.from, "from"),
                Ck = ma(Function.prototype.bind, "bind"),
                I = Ck ? Ir(Ck) : Jr,
                Dk = ma(Array.prototype.reduce, "reduce"),
                zb = Dk
                    ? function (a, c, b) {
                          return Dk.call(b, a, c);
                      }
                    : vg,
                O = zb,
                Iq = w,
                ye = w(Q, ta),
                xg,
                kf = Ob(window),
                Rm = ub(kf),
                wg = Object.prototype.hasOwnProperty,
                J = v(Kd),
                U = ub(n),
                Ra = U("length"),
                Kc = qa(D),
                is = qa(La),
                Ek = ma(Array.prototype.every, "every"),
                Ii = Ek
                    ? function (a, c) {
                          return Ek.call(c, a);
                      }
                    : Gr,
                Nb = D([1, null], re),
                pb = D([1, 0], re),
                Db = Boolean,
                Fk = ma(Array.prototype.filter, "filter"),
                ha = Fk
                    ? function (a, c) {
                          return Fk.call(c, a);
                      }
                    : ik,
                Aa = u(Db, ha),
                js = qa(ha),
                Gk = ma(Array.prototype.find, "find"),
                rb = Gk
                    ? function (a, c) {
                          return Gk.call(c, a);
                      }
                    : Fr,
                Hk = ma(Array.prototype.includes, "includes"),
                G = Hk
                    ? function (a, c, b) {
                          return Hk.call(c, a, b);
                      }
                    : Er,
                tc = ub(G),
                Ik = ma(Array.prototype.join, "join"),
                H = Ik
                    ? function (a, c) {
                          return Ik.call(c, a);
                      }
                    : Dr,
                we = qa(H),
                Jk = v(function (a) {
                    var c = n(a, "navigator") || {};
                    a = n(c, "userAgent") || "";
                    c = n(c, "vendor") || "";
                    return { gf: -1 < mb(c, "Apple"), ag: a };
                }),
                sb = v(U("navigator.userAgent")),
                ug = /Firefox\/([0-9]+)/i,
                Id = v(function (a) {
                    var c = n(a, "document.documentElement.style"),
                        b = n(a, "InstallTrigger");
                    a =
                        -1 !==
                        (n(a, "navigator.userAgent") || "")
                            .toLowerCase()
                            .search(ug);
                    ug.lastIndex = 0;
                    return !(!(c && "MozAppearance" in c) || Z(b)) || a;
                }),
                Kk = ma(Array.isArray, "isArray"),
                N = Kk
                    ? function (a) {
                          return Kk(a);
                      }
                    : Mr,
                Lk = ma(Array.prototype.map, "map"),
                Mk =
                    Lk && Cr(window, Array.prototype.map)
                        ? function (a, c) {
                              return c && 0 < c.length ? Lk.call(c, a) : [];
                          }
                        : hk,
                z = Mk,
                x = Mk,
                Nk = ma(Array.prototype.flatMap, "flatMap"),
                wc = Nk
                    ? function (a, c) {
                          return Nk.call(c, a);
                      }
                    : Br,
                Vb = qa(z),
                kr = ub(z),
                Ok = ma(Array.prototype.some, "some"),
                Za = Ok
                    ? function (a, c) {
                          return Ok.call(c, a);
                      }
                    : Ar,
                Ee = v(Ob),
                Ad = U("0"),
                ks = qa(te),
                Pk = ma(Array.prototype.reverse, "reverse"),
                as = Pk
                    ? function (a) {
                          return Pk.call(a);
                      }
                    : zr,
                Qk = ub(parseInt),
                Ga = Qk(10),
                ue = Qk(2),
                Rk = ma(Object.keys, "keys"),
                Sk = ma(Object.entries, "entries"),
                Ea = Sk ? yr(Sk) : ek,
                ea = Rk
                    ? function (a) {
                          return Rk(a);
                      }
                    : fk,
                Tk = ma(Object.values, "values"),
                ls = w(ek, u(U("1"), hk)),
                xh = Tk
                    ? function (a) {
                          return Tk(a);
                      }
                    : ls,
                C = Object.assign || xr,
                gi = qa(function (a, c) {
                    return C({}, a, c);
                }),
                ie = v(w(U("String.fromCharCode"), u("fromCharCode", Ha), Fc)),
                Ig = v(w(sb, db(/ipad|iphone|ipod/i))),
                Of = v(function (a) {
                    return n(a, "navigator.platform") || "";
                }),
                vd = v(function (a) {
                    a = Jk(a);
                    var c = a.ag;
                    return a.gf && !c.match("CriOS");
                }),
                ms = db(
                    /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
                ),
                ns = db(/; wv\)/),
                td = v(function (a) {
                    a = sb(a);
                    return ns(a) || ms(a);
                }),
                os = /Chrome\/(\d+)\./,
                ps = v(function (a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(
                        os
                    )) && a.length
                        ? 76 <= Ga(a[1])
                        : !1;
                }),
                se = v(function (a) {
                    var c = (sb(a) || "").toLowerCase();
                    a = Of(a);
                    return (
                        gb(c, "android") &&
                        gb(c, "mobile") &&
                        /^android|linux armv/i.test(a)
                    );
                }),
                qs =
                    "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(
                        " "
                    ),
                rs = v(function (a) {
                    var c = n(a, "navigator.connection.type");
                    if (Y(c)) return null;
                    a = Ee(a)(c, qs);
                    return -1 === a ? c : "" + a;
                }),
                hg = v(w(U("document.addEventListener"), Fc)),
                Uk = v(function (a) {
                    var c = n(a, "navigator") || {};
                    return O(
                        function (b, d) {
                            return b || n(c, d);
                        },
                        "",
                        [
                            "language",
                            "userLanguage",
                            "browserLanguage",
                            "systemLanguage",
                        ]
                    );
                }),
                Ch = v(function (a) {
                    var c = n(a, "navigator") || {};
                    a = Uk(a);
                    fa(a) ||
                        ((a = ""), (c = n(c, "languages.0")), fa(c) && (a = c));
                    return a.toLowerCase().split("-")[0];
                }),
                ob = v(function (a) {
                    return (n(a, "top") || a) !== a;
                }),
                ss = v(U("top.contentWindow")),
                ts = v(function (a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled();
                    } catch (b) {}
                    return c;
                }),
                us = v(function (a) {
                    var c =
                            "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(
                                " "
                            ),
                        b = n(a, "external");
                    b = n(b, "toString") ? "" + b.toString() : "";
                    b = -1 !== mb(b, "Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(
                        Za(u(a, n), [
                            "_selenium",
                            "callSelenium",
                            "_Selenium_IDE_Recorder",
                        ]) ||
                        Za(u(n(a, "document"), n), c) ||
                        b ||
                        (d && Za(I(d.getAttribute, d), e))
                    );
                }),
                vs = v(function (a) {
                    return !!(
                        Za(u(a, n), [
                            "_phantom",
                            "__nightmare",
                            "callPhantom",
                        ]) ||
                        /(PhantomJS)|(HeadlessChrome)/.test(sb(a)) ||
                        n(a, "navigator.webdriver") ||
                        (n(a, "isChrome") && !n(a, "chrome"))
                    );
                }),
                ws = v(function (a) {
                    return !(
                        !n(a, "ia_document.shareURL") ||
                        !n(a, "ia_document.referrer")
                    );
                }),
                Nd = v(function (a) {
                    var c = sb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0)
                        ? !0
                        : (Ig(a) || 10 < b[0] || (10 === b[0] && 13 <= b[1])) &&
                              vd(a);
                }),
                wr = /Edg\/(\d+)\./,
                Ie = v(function (a) {
                    return Nd(a) || tf(a, 68) || uf(a, 79);
                }),
                xs = Xc.construct,
                ic = Xc.host,
                Jg = hg(window),
                va = {
                    jg: 24226447,
                    dg: 26302566,
                    mg: 51533966,
                    Xi: 65446441,
                    Qa: "https:",
                    bb: "1370",
                    Zb: xs,
                    ig: Jg ? 512 : 2048,
                    gg: Jg ? 512 : 2048,
                    hg: Jg ? 100 : 400,
                    Yi: 100,
                    kg: "noindex",
                },
                Od = [],
                K = v(function (a) {
                    return a.id + ":" + a.ca;
                }),
                qc = {},
                Wd = Ba("1"),
                ys = setTimeout;
            Ka.prototype["catch"] = function (a) {
                return this.then(null, a);
            };
            Ka.prototype.then = function (a, c) {
                var b = new this.constructor(Nr);
                mk(this, new Pr(a, c, b));
                return b;
            };
            Ka.prototype["finally"] = function (a) {
                var c = this.constructor;
                return this.then(
                    function (b) {
                        return c.resolve(a()).then(function () {
                            return b;
                        });
                    },
                    function (b) {
                        return c.resolve(a()).then(function () {
                            return c.reject(b);
                        });
                    }
                );
            };
            Ka.all = function (a) {
                return new Ka(function (c, b) {
                    function d(h, k) {
                        try {
                            if (
                                k &&
                                ("object" === typeof k ||
                                    "function" === typeof k)
                            ) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(
                                        k,
                                        function (m) {
                                            d(h, m);
                                        },
                                        b
                                    );
                                    return;
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e);
                        } catch (m) {
                            b(m);
                        }
                    }
                    if (!a || "undefined" === typeof a.length)
                        return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
                });
            };
            Ka.resolve = function (a) {
                return a && "object" === typeof a && a.constructor === Ka
                    ? a
                    : new Ka(function (c) {
                          c(a);
                      });
            };
            Ka.reject = function (a) {
                return new Ka(function (c, b) {
                    b(a);
                });
            };
            Ka.race = function (a) {
                return new Ka(function (c, b) {
                    if (!a || "undefined" === typeof a.length)
                        return b(
                            new TypeError("Promise.race accepts an array")
                        );
                    for (var d = 0, e = a.length; d < e; d++)
                        Ka.resolve(a[d]).then(c, b);
                });
            };
            Ka.Ee =
                ("function" === typeof setImmediate &&
                    function (a) {
                        setImmediate(a);
                    }) ||
                function (a) {
                    ys(a, 0);
                };
            Ka.ng = function (a) {
                "undefined" !== typeof console &&
                    console &&
                    console.warn("Possible Unhandled Promise Rejection:", a);
            };
            var L = window.Promise,
                zs = ma(L, "Promise"),
                Vk = ma(n(L, "resolve"), "resolve"),
                Wk = ma(n(L, "reject"), "reject"),
                Xk = ma(n(L, "all"), "all");
            if (zs && Vk && Wk && Xk) {
                var Ve = function (a) {
                    return new Promise(a);
                };
                Ve.resolve = I(Vk, L);
                Ve.reject = I(Wk, L);
                Ve.all = I(Xk, L);
                L = Ve;
            } else L = Ka;
            var cf = [],
                hd = [],
                X = [],
                Va = [],
                Kg = [],
                Yc = [],
                qg = tc([26812653]),
                As = v(w(U("id"), qg), K),
                Yb = {
                    id: "id",
                    Ae: "ut",
                    ca: "type",
                    Md: "ldc",
                    Ua: "nck",
                    lc: "url",
                    ah: "referrer",
                },
                Bs = /^\d+$/,
                Zc = {
                    id: function (a) {
                        a = "" + (a || "0");
                        Bs.test(a) || (a = "0");
                        try {
                            var c = Ga(a);
                        } catch (b) {
                            c = 0;
                        }
                        return c;
                    },
                    ca: function (a) {
                        return "" + (a || 0 === a ? a : "0");
                    },
                    Ua: Db,
                    Ae: Db,
                };
            Yb.cd = "defer";
            Zc.cd = Db;
            Yb.X = "params";
            Zc.X = function (a) {
                return ia(a) || N(a) ? a : null;
            };
            Yb.ze = "userParams";
            Yb.Xf = "triggerEvent";
            Zc.Xf = Db;
            Yb.Lf = "sendTitle";
            Zc.Lf = function (a) {
                return !!a || Y(a);
            };
            Yb.ue = "trackHash";
            Zc.ue = Db;
            Yb.Wf = "trackLinks";
            Yb.Lg = "enableAll";
            var Vd = O(
                    function (a, c) {
                        var b = c[0];
                        a[b] = { ea: c[1], Na: Zc[b] };
                        return a;
                    },
                    {},
                    Ea(Yb)
                ),
                ur =
                    "hash host hostname href pathname port protocol search".split(
                        " "
                    ),
                tg =
                    "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(
                        " "
                    ),
                bk = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                Ce = v(function (a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase();
                }),
                Ei = v(function (a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(bk));
                    return c;
                }),
                Yk = w(S, U("protocol"), Ba("https:")),
                rr = v(function (a) {
                    return ps(a) && Yk(a) ? "SameSite=None;Secure;" : "";
                }),
                pj = /^\s+|\s+$/g,
                ak = ma(String.prototype.trim, "trim"),
                Lg = qa(function (a, c) {
                    return c.replace(a, "");
                }),
                Cs = Lg(/\s/g),
                ee = Lg(/\D/g),
                Pe = ["metrika_enabled"],
                sg = [],
                Xj = vb("gsc", Vj),
                sr = /:\d+$/,
                Qr = v(function (a) {
                    var c = (S(a).host || "").split(".");
                    return 1 === c.length
                        ? c[0]
                        : O(
                              function (b, d, e) {
                                  e += 1;
                                  2 <= e &&
                                      !b &&
                                      ((e = H(".", c.slice(-e))),
                                      ni(a, e) && (b = e));
                                  return b;
                              },
                              "",
                              c
                          );
                }),
                Sc = v($d),
                Oe = v(function (a) {
                    var c = Sc(a),
                        b = "1" === c.C("debug"),
                        d =
                            -1 < jc(S(a).href, "_ym_debug=1") ||
                            -1 < jc(S(a).href, "_ym_debug=2"),
                        e = a._ym_debug;
                    (!e && !d) ||
                        b ||
                        ((a = S(a)), c.D("debug", "1", void 0, a.host));
                    return !!(b || e || d);
                }),
                qr = vb("debuggerEvents", xd, !0),
                nr = [
                    "http.0.st..rt.",
                    "network error occurred",
                    "send beacon",
                    "Content Security Policy",
                    "DOM Exception 18",
                ],
                Pd,
                Qa = (function (a) {
                    return function (c, b) {
                        void 0 === b && (b = !1);
                        if (Pd) var d = new Pd(c);
                        else
                            Ha("Error", a.Error)
                                ? ((Pd = a.Error), (d = new a.Error(c)))
                                : ((Pd = pr), (d = new Pd(c)));
                        b && (d.unk = !0);
                        return d;
                    };
                })(window),
                or = db(/^http./),
                mr = db(/^err.kn/),
                Uj = [],
                lr = v(function (a) {
                    a = !(!a.addEventListener || !a.removeEventListener);
                    return {
                        Ci: a,
                        F: a ? "addEventListener" : "attachEvent",
                        ga: a ? "removeEventListener" : "detachEvent",
                    };
                }),
                Ds = v(function (a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function () {
                                c = !0;
                                return 1;
                            },
                        });
                        a.addEventListener("test", F, b);
                    } catch (d) {}
                    return c;
                }),
                Es = qa(function (a, c) {
                    if (null !== c)
                        return a
                            ? C({ capture: !0, passive: !0 }, c || {})
                            : !!c;
                }),
                ja = v(function (a) {
                    var c = Ds(a),
                        b = Es(c),
                        d = {};
                    return C(d, {
                        F: function (e, f, g, h) {
                            x(function (k) {
                                var l = b(h);
                                Tj(a, e, k, g, l, !1);
                            }, f);
                            return I(d.vb, d, e, f, g, h);
                        },
                        vb: function (e, f, g, h) {
                            x(function (k) {
                                var l = b(h);
                                Tj(a, e, k, g, l, !0);
                            }, f);
                        },
                    });
                }),
                ka = v($f),
                Pj = qa(function (a, c) {
                    for (var b = []; !Hd(c); ) {
                        var d = gr(c);
                        a(d, function (e) {
                            return e(c);
                        });
                        b.push(d);
                    }
                    return b;
                }),
                Zk = qa(function (a, c) {
                    return Ca(function (b, d) {
                        return c(b, function (e) {
                            try {
                                d(a(e));
                            } catch (f) {
                                b(f);
                            }
                        });
                    });
                }),
                Mg = qa(function (a, c) {
                    return Ca(function (b, d) {
                        return c(b, function (e) {
                            try {
                                a(e)($a(b, d));
                            } catch (f) {
                                b(f);
                            }
                        });
                    });
                }),
                lg = [],
                mg = !1,
                kg = !1,
                $k = qa(function (a, c) {
                    var b = c || {};
                    return {
                        l: u(b, Q),
                        C: function (d, e) {
                            var f = b[d];
                            return Y(f) && !Y(e) ? e : f;
                        },
                        D: function (d, e) {
                            b[d] = e;
                            return this;
                        },
                        Pb: function (d, e) {
                            return "" === e || Z(e) ? this : this.D(d, e);
                        },
                        Fa: u(b, a),
                    };
                }),
                Ja = $k(function (a) {
                    var c = "";
                    a = zb(
                        function (b, d) {
                            var e = d[0],
                                f = "" + e + ":" + d[1];
                            "t" === e ? (c = f) : b.push(f);
                            return b;
                        },
                        [],
                        Ea(a)
                    );
                    c && a.push(c);
                    return H(":", a);
                }),
                Ng,
                Gj =
                    ((Ng = {}),
                    (Ng.w = [
                        [
                            function (a, c) {
                                return {
                                    N: function (b, d) {
                                        var e,
                                            f = b.J;
                                        f =
                                            ((e = {}),
                                            (e["page-url"] =
                                                (f && f["page-url"]) || ""),
                                            (e.charset = "utf-8"),
                                            e);
                                        "0" !== c.ca && (f["cnt-class"] = c.ca);
                                        b.K || (b.K = Ja());
                                        e = b.K;
                                        var g = b.Z;
                                        f = {
                                            ma: { za: "watch/" + c.id },
                                            Z: C(void 0 === g ? {} : g, {
                                                yb:
                                                    !!e.C("pv") &&
                                                    !e.C("ar") &&
                                                    !e.C("wh"),
                                            }),
                                            J: C(b.J || {}, f),
                                        };
                                        C(b, f);
                                        d();
                                    },
                                };
                            },
                            1,
                        ],
                    ]),
                    Ng),
                Og = u(Gj, Kj),
                kb = Gd("w"),
                Fj = ["webkitvisibilitychange", "visibilitychange"],
                qf = $k(function (a) {
                    a = Ea(a);
                    return H(
                        "",
                        z(function (c) {
                            var b = c[0];
                            c = c[1];
                            return Wa(c) ? "" : b + "(" + c + ")";
                        }, a)
                    );
                }),
                al =
                    "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(
                        " "
                    ),
                jq = /^\s*(data|javascript):/i,
                $i = new RegExp(
                    H("", [
                        "\\.(" +
                            H(
                                "|",
                                "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(
                                    " "
                                )
                            ) +
                            ")$",
                    ]),
                    "i"
                ),
                Sa,
                jj =
                    ((Sa = {}),
                    (Sa.hit = "h"),
                    (Sa.params = "p"),
                    (Sa.reachGoal = "g"),
                    (Sa.userParams = "up"),
                    (Sa.trackHash = "th"),
                    (Sa.accurateTrackBounce = "atb"),
                    (Sa.notBounce = "nb"),
                    (Sa.addFileExtension = "fe"),
                    (Sa.extLink = "el"),
                    (Sa.file = "fc"),
                    (Sa.trackLinks = "tl"),
                    (Sa.destruct = "d"),
                    (Sa.setUserID = "ui"),
                    (Sa.getClientID = "ci"),
                    (Sa.clickmap = "cm"),
                    (Sa.enableAll = "ea"),
                    Sa),
                Fs = v(function () {
                    var a = 0;
                    return function () {
                        return (a += 1);
                    };
                }),
                Gs = w(K, Fs, ta),
                cg = {
                    mc: function (a) {
                        a = Kd(a).C("mt", {});
                        a = Ea(a);
                        return a.length
                            ? O(
                                  function (c, b, d) {
                                      return (
                                          "" +
                                          c +
                                          (d ? "-" : "") +
                                          b[0] +
                                          "-" +
                                          b[1]
                                      );
                                  },
                                  "",
                                  a
                              )
                            : null;
                    },
                    clc: function (a) {
                        var c = J(a).C("cls", { Yb: 0, x: 0, y: 0 }),
                            b = c.Yb,
                            d = c.x;
                        c = c.y;
                        return b
                            ? b +
                                  "-" +
                                  a.Math.floor(d / b) +
                                  "-" +
                                  a.Math.floor(c / b)
                            : b + "-" + d + "-" + c;
                    },
                    rqnt: function (a, c, b) {
                        a = b.J;
                        return !a || a.nohit ? null : Gs(c);
                    },
                },
                $q = v(function (a) {
                    Dj(a, "_ymBRC", "1");
                    var c = "1" !== Cj(a, "_ymBRC");
                    c || Ej(a, "_ymBRC");
                    return c;
                }),
                Ua = v(Bj),
                $c = v(Bj, function (a, c, b) {
                    return "" + c + b;
                }),
                Hs = v(U("document.documentElement")),
                Is = v(function (a) {
                    a = n(a, "document") || {};
                    return (
                        "" + (a.characterSet || a.charset || "")
                    ).toLowerCase();
                }),
                qb = v(w(U("document"), u("createElement", Ec))),
                mi = v(function (a) {
                    var c = n(a, "Element.prototype");
                    return c
                        ? (a = rb(
                              function (b) {
                                  var d = c[b];
                                  return !!d && Ha(b, d);
                              },
                              [
                                  "matches",
                                  "webkitMatchesSelector",
                                  "mozMatchesSelector",
                                  "msMatchesSelector",
                                  "oMatchesSelector",
                              ]
                          ))
                            ? c[a]
                            : null
                        : null;
                }),
                Js = Ba("INPUT"),
                Le = w(Ma, Js),
                Ks = Ba("TEXTAREA"),
                Xq = w(Ma, Ks),
                Ls = Ba("SELECT"),
                Yq = w(Ma, Ls),
                Me = w(U("type"), db(/^(checkbox|radio)$/)),
                Gf = w(Ma, db(/^INPUT|SELECT|TEXTAREA$/)),
                pe = w(Ma, db(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Kf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                Wq = ["submit", "image", "hidden"],
                Rf = v(function () {
                    for (var a = 59, c = {}, b = 0; b < al.length; b += 1)
                        (c[al[b]] = String.fromCharCode(a)), (a += 1);
                    return c;
                }),
                xj = v(function (a) {
                    return { ij: a, gb: null, qb: [] };
                }),
                vj = {},
                fg = {};
            vj.p = 500;
            var uj = { i: "id", n: "name", h: "href", ty: "type" };
            fg.h = !0;
            fg.c = !0;
            var Vc = {};
            Vc.p = pf;
            Vc.c = function (a, c, b) {
                (a = ab(n(c, "textContent"))) &&
                    b &&
                    ((b = b(c)),
                    b.length &&
                        Za(w(U("textContent"), ab, Ba(a)), b) &&
                        (a = ""));
                Le(c) &&
                    (a = ab((c.getAttribute && c.getAttribute("value")) || a));
                return a;
            };
            var ad,
                eg =
                    "button," +
                    H(
                        ",",
                        z(
                            function (a) {
                                return 'input[type="' + a + '"]';
                            },
                            ["button", "submit", "reset", "file"]
                        )
                    ) +
                    ",a",
                Mi = u(eg, hb),
                Uq =
                    ((ad = {}),
                    (ad.A = "h"),
                    (ad.BUTTON = "i"),
                    (ad.DIV = "i"),
                    (ad.INPUT = "ty"),
                    ad),
                bl = /\/$/,
                tj = vb("r", function (a, c) {
                    var b = sj(a, c),
                        d = b[0];
                    return !b[1] && d;
                }),
                Ed = v(function () {
                    return { Ea: {}, pending: {}, children: {} };
                }),
                Pg = U("postMessage"),
                Ms = A("s.f", function (a, c, b, d, e) {
                    c = c(d);
                    var f = Ed(a),
                        g = H(":", [c.meta.cc, c.meta.key]);
                    if (Pg(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.Sf, "*");
                        } catch (h) {
                            delete f.pending[g];
                            return;
                        }
                        V(
                            a,
                            function () {
                                delete f.pending[g];
                            },
                            5e3,
                            "if.s"
                        );
                    }
                }),
                Ns = A("s.fh", function (a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k = Ed(a),
                        l = null;
                    try {
                        (g = Lb(a, f.data)), (h = g.__yminfo), (l = g.data);
                    } catch (m) {
                        return;
                    }
                    if (
                        !Z(h) &&
                        h.substring &&
                        "__yminfo" === h.substring(0, 8) &&
                        !Z(l) &&
                        ((g = h.split(":")), 4 === g.length)
                    )
                        if (
                            ((h = c.id),
                            (c = g[1]),
                            (a = g[2]),
                            (g = g[3]),
                            !N(l) && l.type && "0" === g && l.counterId)
                        ) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source;
                                } catch (m) {}
                                !Wa(k) &&
                                    Pg(k) &&
                                    ((f = d.ba(l.type, [f, l])),
                                    (e = z(w(Q, gi(e)), f.concat([{}]))),
                                    (l = b([c, a, l.counterId], e)),
                                    k.postMessage(l.Sf, "*"));
                            }
                        } else
                            g === "" + h &&
                                N(l) &&
                                ha(function (m) {
                                    return !(!m.hid || !m.counterId);
                                }, l).length === l.length &&
                                (b = k.pending[H(":", [c, a])]) &&
                                b.apply(null, [f].concat(l));
                }),
                kd = v(function (a, c) {
                    var b,
                        d = Ec("getElementsByTagName", n(a, "document")),
                        e = Ed(a),
                        f = Pg(a),
                        g = md(a),
                        h = ja(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f =
                        ((b = {}),
                        (b.counterId = c.id),
                        (b.hid = "" + Cc(a)),
                        b);
                    Ie(a) && (f.duid = Fd(a, c));
                    Qq(a, g);
                    Rq(a);
                    b = Sq(a, f);
                    var k = D([a, u([], b)], Ms);
                    x(function (l) {
                        var m = null;
                        try {
                            m = l.contentWindow;
                        } catch (p) {}
                        m &&
                            k(m, { type: "initToChild" }, function (p, q) {
                                g.ba("initToParent", [p, q]);
                            });
                    }, d);
                    ob(a) &&
                        k(a.parent, { type: "initToParent" }, function (l, m) {
                            g.ba("parentConnect", [l, m]);
                        });
                    h.F(a, ["message"], D([a, c, b, g, f], Ns));
                    return { $: g, Ea: e.Ea, children: e.children, fe: k };
                }, w(eb, K)),
                ld = v(
                    function (a, c) {
                        if (!Ie(a) || !ob(a)) return Fd(a, c);
                        var b = kd(a, c);
                        return b && b.Ea[c.id]
                            ? b.Ea[c.id].info.duid || Fd(a, c)
                            : Fd(a, c);
                    },
                    function (a, c) {
                        return "{" + c.Md + c.Ua;
                    }
                ),
                Os = v(
                    w(
                        ka,
                        Ca(function (a) {
                            return -new a.l.Date().getTimezoneOffset();
                        })
                    )
                ),
                Ps = w(
                    ka,
                    Ca(function (a) {
                        a = new a.l.Date();
                        return H(
                            "",
                            z(hr, [
                                a.getFullYear(),
                                a.getMonth() + 1,
                                a.getDate(),
                                a.getHours(),
                                a.getMinutes(),
                                a.getSeconds(),
                            ])
                        );
                    })
                ),
                Qs = w(ka, Ca(dg)),
                cl = v(
                    w(
                        ka,
                        Ca(function (a) {
                            return a.Fc[0];
                        })
                    )
                ),
                Rs = v(function (a) {
                    a = J(a);
                    var c = a.C("counterNum", 0) + 1;
                    a.D("counterNum", c);
                    return c;
                }, w(eb, K)),
                oa,
                Dd =
                    ((oa = {}),
                    (oa.vf = u(Xc.version, Q)),
                    (oa.nt = rs),
                    (oa.fu = function (a, c, b) {
                        var d = b.J;
                        if (!d) return null;
                        c = (n(a, "document.referrer") || "").replace(bl, "");
                        b = (d["page-ref"] || "").replace(bl, "");
                        d = d["page-url"];
                        a = S(a).href !== d;
                        c = c !== b;
                        b = 0;
                        a && c ? (b = 3) : c ? (b = 1) : a && (b = 2);
                        return b;
                    }),
                    (oa.en = Is),
                    (oa.la = Uk),
                    (oa.ut = function (a, c, b) {
                        var d = b.M;
                        b = b.J;
                        d = d && d.yc;
                        b && (Ei(a) || c.Ae || d) && (b.ut = va.kg);
                        return null;
                    }),
                    (oa.v = u(va.bb, Q)),
                    (oa.cn = Rs),
                    (oa.dp = function (a) {
                        var c = J(a),
                            b = c.C("bt", {});
                        if (Y(c.C("bt"))) {
                            var d = n(a, "navigator.getBattery");
                            try {
                                b.p = d && d.call(a.navigator);
                            } catch (e) {}
                            c.D("bt", b);
                            b.p &&
                                b.p.then &&
                                b.p.then(
                                    B(a, "bi:dp.p", function (e) {
                                        b.Qi =
                                            n(e, "charging") &&
                                            0 === n(e, "chargingTime");
                                    })
                                );
                        }
                        return pb(b.Qi);
                    }),
                    (oa.ls = v(function (a, c) {
                        var b = $c(a, c.id),
                            d = ka(a),
                            e = b.C("lsid");
                        return +e
                            ? e
                            : ((d = Xa(a, 0, d(da))), b.D("lsid", d), d);
                    }, eb)),
                    (oa.hid = Cc),
                    (oa.phid = function (a, c) {
                        if (!ob(a)) return null;
                        var b = kd(a, c);
                        if (!b) return null;
                        var d = ea(b.Ea);
                        return d.length ? b.Ea[d[0]].info.hid : null;
                    }),
                    (oa.z = Os),
                    (oa.i = Ps),
                    (oa.et = Qs),
                    (oa.c = w(U("navigator.cookieEnabled"), Nb)),
                    (oa.rn = w(Q, Xa)),
                    (oa.rqn = function (a, c, b) {
                        b = b.J;
                        if (!b || b.nohit) return null;
                        c = K(c);
                        a = $c(a, c);
                        c = (a.C("reqNum", 0) || 0) + 1;
                        a.D("reqNum", c);
                        if (a.C("reqNum") === c) return c;
                        a.dc("reqNum");
                        return null;
                    }),
                    (oa.u = ld),
                    (oa.w = function (a) {
                        a = Nc(a);
                        return a[0] + "x" + a[1];
                    }),
                    (oa.s = function (a) {
                        var c = n(a, "screen");
                        if (c) {
                            a = n(c, "width");
                            var b = n(c, "height");
                            c = n(c, "colorDepth") || n(c, "pixelDepth");
                            return H("x", [a, b, c]);
                        }
                        return null;
                    }),
                    (oa.sk = U("devicePixelRatio")),
                    (oa.ifr = w(ob, Nb)),
                    (oa.j = w(ts, Nb)),
                    (oa.sti = function (a) {
                        return ob(a) && ss(a) ? "1" : null;
                    }),
                    oa),
                Pq = v(function () {
                    return wa(ea(Dd), ea(cg));
                }),
                Oq = v(Ic, K),
                qj = v(function () {
                    return { Re: null, sa: [] };
                }, K),
                Lq = /^[a-z][\w.+-]+:/i,
                Qg,
                Xb = [
                    [Ne, 1],
                    [He, 2],
                    [Pb(), 3],
                    [rj, 4],
                ],
                Ge = [],
                xb = u(Xb, Lj),
                Wb = ((Qg = {}), (Qg.h = Xb), Qg),
                aa = u(Wb, Kj);
            xb(nj, -100);
            var Gq = /[^a-z0-9.:-]/,
                Rg,
                Sg = {},
                dl = Aa([
                    ag && [ag, 0],
                    Bb && [Bb, 1],
                    [Cb, 2],
                    Bd && [Bd, 3],
                    [Uc, 4],
                ]),
                Zb = Aa([ag, Bb, Cb, Bd, Uc]),
                Tg = [Cb];
            Tg.unshift(Bb);
            Tg.push(Bd);
            var el = Aa(Tg),
                bd = Aa([Uc]);
            Aa([Bb, Cb]);
            var fl = Aa([Bb, Uc]),
                Ss = Aa([Bb, Cb, Bd, Uc]),
                ua = ((Rg = {}), (Rg.h = el), Rg),
                Ug = v(function (a, c) {
                    var b = Sg["*"] ? Sg["*"] : c && Sg[c];
                    b || (b = c ? ua[c] || [] : Zb);
                    b = O(
                        function (d, e) {
                            var f = e(a);
                            if (f) {
                                var g = rb(w(Ad, Ba(e)), dl);
                                g && d.push([g[1], f]);
                            }
                            return d;
                        },
                        [],
                        b
                    );
                    b.length || Ud();
                    return b;
                }, eb),
                Vg,
                Ts = I(L.reject, L, Pa()),
                ya = ((Vg = {}), (Vg.h = kb), Vg),
                pa = A(
                    "g.sen",
                    function (a, c, b) {
                        var d = Ug(a, c);
                        b = b ? Kq(a, c, b) : [];
                        var e = ya[c],
                            f = e ? e(a, d, b) : kb(a, d, b);
                        return function () {
                            var g = Oa(arguments),
                                h = g[0];
                            g = g.slice(1);
                            var k = h.Z;
                            h = C(h, {
                                Z: C(void 0 === k ? {} : k, { ha: [c] }),
                            });
                            return f.apply(null, [h].concat(g));
                        };
                    },
                    Ts
                ),
                yq = qa(function (a, c) {
                    if (!c[a]) {
                        var b,
                            d = new L(function (e) {
                                b = e;
                            });
                        c[a] = { zf: b, promise: d, Af: !1 };
                    }
                    return c[a].promise;
                }),
                kj = v(w(Ic, Ca)),
                Us = A("dc.init", function (a, c) {
                    return c && qg(je(c.split(":")[0]))
                        ? { log: F, warn: F, error: F }
                        : xq(a, c);
                }),
                oc = v(Us, eb),
                Yl = A("h.p", function (a, c) {
                    var b,
                        d,
                        e = pa(a, "h", c),
                        f = c.lc || "" + S(a).href,
                        g = c.ah || a.document.referrer,
                        h = {
                            K: Ja(((b = {}), (b.pv = 1), b)),
                            J:
                                ((d = {}),
                                (d["page-url"] = f),
                                (d["page-ref"] = g),
                                d),
                            M: {},
                        };
                    h.M.X = c.X;
                    h.M.ze = c.ze;
                    c.cd && h.J && (h.J.nohit = "1");
                    return e(h, c)
                        .then(function (k) {
                            var l;
                            k &&
                                (c.cd ||
                                    mc(
                                        a,
                                        c,
                                        "h",
                                        ((l = {}),
                                        (l.id = c.id),
                                        (l.url = f),
                                        (l.ref = g),
                                        l),
                                        c.X
                                    )(),
                                Sb(a, D([a, c, k], zq)));
                        })
                        ["catch"](B(a, "h.g.s"));
                }),
                Wg = [
                    "yandex_metrika_callback" + Xc.callbackPostfix,
                    "yandex_metrika_callbacks" + Xc.callbackPostfix,
                ],
                Vs = A("cb.i", function (a) {
                    var c = Wg[0],
                        b = Wg[1];
                    if (M(a[c])) a[c]();
                    "object" === typeof a[b] &&
                        x(function (d, e) {
                            a[b][e] = null;
                            Vf(a, d);
                        }, a[b]);
                    x(function (d) {
                        try {
                            delete a[d];
                        } catch (e) {
                            a[d] = void 0;
                        }
                    }, Wg);
                }),
                vq = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/,
                gl = v(function (a) {
                    return (
                        !!n(a, "crypto.subtle.digest") &&
                        !!n(a, "TextEncoder") &&
                        !!n(a, "FileReader") &&
                        !!n(a, "Blob")
                    );
                }),
                wq = Lg(/[^\d+()]/g),
                tq = ["yandex_cid", "yandex_public_id"],
                Ws = A("fpm", function (a, c) {
                    if (!Yk(a)) return F;
                    var b = K(c);
                    if (!gl(a)) return Ib(a, b, "ns"), F;
                    var d = Fa(a, c);
                    return d
                        ? function (e) {
                              return new L(function (f, g) {
                                  return ia(e)
                                      ? ea(e).length
                                          ? f(
                                                gj(a, e).then(function (h) {
                                                    var k, l;
                                                    h &&
                                                        h.length &&
                                                        d.params(
                                                            ((k = {}),
                                                            (k.__ym =
                                                                ((l = {}),
                                                                (l.fpp = h),
                                                                l)),
                                                            k)
                                                        );
                                                }, F)
                                            )
                                          : g(Pa("fpm.l"))
                                      : g(Pa("fpm.o"));
                              })["catch"](B(a, "fpm.en"));
                          }
                        : F;
                }),
                We = qa(function (a, c) {
                    var b = {};
                    Yf(a)(function (d) {
                        b = d[c] || {};
                    });
                    return b;
                }),
                Xs = A("c.c.cc", function (a) {
                    var c = J(a),
                        b = w(We(a), function (d) {
                            var e,
                                f = ((e = {}), (e.clickmap = !!d.clickmap), e);
                            return C({}, d, f);
                        });
                    return B(
                        a,
                        "g.c.cc",
                        w(I(c.C, c, "counters", {}), ea, Vb(b))
                    );
                }),
                Ys = A("gt.c.rs", function (a, c) {
                    var b,
                        d = K(c),
                        e = c.id,
                        f = c.ca,
                        g = c.Ag,
                        h = c.ue,
                        k = D([a, d], rq);
                    Xf(
                        a,
                        d,
                        ((b = {}),
                        (b.id = e),
                        (b.type = +f),
                        (b.clickmap = g),
                        (b.trackHash = !!h),
                        b)
                    );
                    return k;
                }),
                ej = v(xd),
                zd = v(Ic, K),
                Zs = A("pa.int", function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.params = function () {
                            var d,
                                e,
                                f,
                                g = Oa(arguments),
                                h = qq(g);
                            if (!h) return null;
                            g = h.Gg;
                            var k = h.X;
                            h = h.Ub;
                            if (!ia(k) && !N(k)) return null;
                            var l = pa(a, "1", c),
                                m = zd(c).url,
                                p = !As(c),
                                q = "pa",
                                r = ((d = {}), (d.id = c.id), d);
                            d = k;
                            var t = "";
                            if ((t = n(k, "__ym.user_id")))
                                (q = "pau"), (r.uid = t);
                            G("__ymu", ea(k)) && (q = "paup");
                            d.__ym &&
                                ((d = C({}, k)),
                                (d.__ym = O(
                                    function (y, E) {
                                        var R = n(k, "__ym." + E);
                                        R && (y[E] = R);
                                        return y;
                                    },
                                    {},
                                    Od
                                )),
                                ea(d.__ym).length || delete d.__ym,
                                (p = !!ea(d).length));
                            d = t ? void 0 : JSON.stringify(d);
                            d = mc(a, c, q, r, d);
                            l = l(
                                {
                                    M: { X: k },
                                    K: Ja(
                                        ((e = {}), (e.pa = 1), (e.ar = 1), e)
                                    ),
                                    J:
                                        ((f = {}),
                                        (f["page-url"] = m || S(a).href),
                                        f),
                                },
                                c
                            ).then(p ? d : F);
                            return Tc(a, "p.s", l, h, g);
                        }),
                        b
                    );
                }),
                de = v(cj, w(eb, K)),
                $s = A("y.p", function (a, c) {
                    var b = cj(a, c);
                    if (b) {
                        var d = Zd(a),
                            e = D([a, b, c], mq);
                        Eh(a, d, function (f) {
                            f.F(["params"], e);
                        });
                        b.$.F(["params"], w(U("1"), e));
                    }
                }),
                Rr = v(function (a) {
                    if ((a = qb(a))) return a("a");
                }),
                hl = { mj: db(/[/&=?#]/) },
                ze = A("go.in", function (a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return (
                        (e = {}),
                        (e.reachGoal = function (f, g, h, k) {
                            var l, m, p;
                            if (!f || (hl[b] && hl[b](f))) return null;
                            var q = g,
                                r = h || F;
                            M(g) && ((r = g), (q = void 0), (k = h));
                            var t = mc(
                                    a,
                                    c,
                                    "gr",
                                    ((l = {}), (l.id = c.id), (l.goal = f), l),
                                    q
                                ),
                                y = "goal" === b;
                            g = pa(a, "g", c);
                            l = lq(a, c, f, b);
                            h = l[0];
                            l = l[1];
                            q = g(
                                {
                                    M: { X: q },
                                    K: Ja(((m = {}), (m.ar = 1), m)),
                                    J:
                                        ((p = {}),
                                        (p["page-url"] = h),
                                        (p["page-ref"] = l),
                                        p),
                                },
                                c
                            ).then(function () {
                                var E, R;
                                y && t();
                                tb(
                                    a,
                                    ((E = {}),
                                    (E.counterKey = K(c)),
                                    (E.name = "event"),
                                    (E.data =
                                        ((R = {}),
                                        (R.schema = b),
                                        (R.name = f),
                                        R)),
                                    E)
                                );
                                d && d();
                            });
                            return Tc(a, "g.s", q, r, k);
                        }),
                        e
                    );
                }),
                at = A("guid.int", function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.getClientID = function (d) {
                            var e = Fd(a, c);
                            d && Vf(a, d, null, e);
                            return e;
                        }),
                        b
                    );
                }),
                ok,
                bt = A("th.e", function (a, c) {
                    function b() {
                        g ||
                            (k = Jb(a, "onhashchange")
                                ? ja(a).F(a, ["hashchange"], h)
                                : Sr(a, h));
                    }
                    var d,
                        e = pa(a, "t", c),
                        f = Fe(a, K(c)),
                        g = !1,
                        h = B(a, "h.h.ch", I(Tr, null, a, c, e)),
                        k = F;
                    c.ue && (b(), (g = !0));
                    e = B(a, "tr.hs.h", function (l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f(((m = {}), (m.trackHash = g), m));
                    });
                    return (d = {}), (d.trackHash = e), (d.u = k), d;
                }),
                ct = qa(function (a, c) {
                    fa(c) ? a.push(c) : x(w(Q, La("push", a)), c);
                }),
                yd = vb(
                    "retryReqs",
                    function (a) {
                        var c = Ua(a),
                            b = c.C("retryReqs", {}),
                            d = ka(a)(da);
                        x(function (e) {
                            var f = e[0];
                            e = e[1];
                            (!e || !e.time || e.time + 864e5 < d) &&
                                delete b[f];
                        }, Ea(b));
                        c.D("retryReqs", b);
                        return b;
                    },
                    !0
                ),
                Xg = w(jc, Ba(0)),
                il = ub(Xg),
                dt = [il("watch"), il("clmap")],
                et = A("g.r", function (a) {
                    var c = ka(a),
                        b = yd(a),
                        d = c(da),
                        e = Cc(a);
                    return zb(
                        function (f, g) {
                            var h = g[0],
                                k = g[1];
                            k &&
                                Za(Ca(k.resource), dt) &&
                                !k.d &&
                                k.ghid &&
                                k.ghid !== e &&
                                k.time &&
                                500 < d - k.time &&
                                k.time + 864e5 > d &&
                                2 >= k.browserInfo.rqnl &&
                                ((k.d = 1),
                                (h = {
                                    protocol: k.protocol,
                                    host: k.host,
                                    za: k.resource,
                                    li: k.postParams,
                                    X: k.params,
                                    rg: k.browserInfo,
                                    kj: k.ghid,
                                    time: k.time,
                                    Mb: Ga(h),
                                    Dg: k.counterId,
                                    ca: k.counterType,
                                }),
                                k.telemetry && (h.Ha = k.telemetry),
                                f.push(h));
                            return f;
                        },
                        [],
                        Ea(b)
                    );
                }),
                ft = A("nb.p", function (a, c) {
                    function b(E) {
                        l() ||
                            ((E = "number" === typeof E ? E : 15e3),
                            (y = Ur(a, d(!1), E)),
                            m());
                    }
                    function d(E) {
                        return function (R) {
                            var P, za, Da;
                            void 0 === R &&
                                (R =
                                    ((P = {}),
                                    (P.ctx = {}),
                                    (P.callback = F),
                                    P));
                            if (E || (!r && !k.Ed)) {
                                r = !0;
                                m();
                                y && y();
                                var $b = p(da);
                                P = (Ga(k.C("lastHit")) || 0) < $b - 18e5;
                                var Yg = 0.1 > Math.random();
                                k.D("lastHit", $b);
                                $b = Ja(
                                    ((za = {}),
                                    (za.nb = 1),
                                    (za.cl = t),
                                    (za.ar = 1),
                                    za)
                                );
                                za = zd(c);
                                za = {
                                    J:
                                        ((Da = {}),
                                        (Da["page-url"] = za.url || S(a).href),
                                        Da),
                                    K: $b,
                                    M: { force: E },
                                };
                                Da = oc(a, K(c)).warn;
                                !R.callback && R.ctx && Da("nbnc");
                                (Da = E || P || Yg) ||
                                    ((Da = a.location.href),
                                    (P = a.document.referrer),
                                    (Da = !(Da && P
                                        ? aj(Da) === aj(P)
                                        : !Da && !P)));
                                if (Da)
                                    return (
                                        (Da = g(za, c)),
                                        Tc(a, "l.o.l", Da, R.callback, R.ctx)
                                    );
                            }
                            return null;
                        };
                    }
                    var e,
                        f,
                        g = pa(a, "n", c),
                        h = K(c),
                        k = $c(a, c.id),
                        l = u(u(h, We(a)), w(ta, U("accurateTrackBounce"))),
                        m = u(
                            ((e = {}), (e.accurateTrackBounce = !0), e),
                            Fe(a, h)
                        ),
                        p = ka(a),
                        q = p(da),
                        r = !1,
                        t = 0,
                        y;
                    na(c, function (E) {
                        t = E.Ug - q;
                    });
                    c.Fe && b(c.Fe);
                    e = ((f = {}), (f.notBounce = d(!0)), (f.u = y), f);
                    e.accurateTrackBounce = b;
                    return e;
                }),
                eq = qa(hc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                gt = A("clm.p", function (a, c) {
                    if (ie(a)) return F;
                    var b = pa(a, "m", c),
                        d = K(c),
                        e = ka(a),
                        f = e(da),
                        g = u(u(d, We(a)), w(ta, U("clickmap"))),
                        h,
                        k = null;
                    d = B(a, "clm.p.c", function (l) {
                        var m = g();
                        if (m) {
                            var p = J(a),
                                q = p.C("cls", { Yb: 0, x: 0, y: 0 });
                            p.D("cls", {
                                Yb: q.Yb + 1,
                                x: q.x + l.clientX,
                                y: q.y + l.clientY,
                            });
                            p = "object" === typeof m ? m : {};
                            q = p.filter;
                            m = p.isTrackHash || !1;
                            var r = z(function (y) {
                                return ("" + y).toUpperCase();
                            }, p.ignoreTags || []);
                            Y(h) && (h = p.quota || null);
                            var t = !!p.quota;
                            l = {
                                element: fq(a, l),
                                position: Xi(a, l),
                                button: gq(l),
                                time: e(da),
                            };
                            p = S(a).href;
                            if (dq(a, l, k, r, q)) {
                                if (t) {
                                    if (!h) return;
                                    --h;
                                }
                                r = Ke(a, l.element);
                                q = r[0];
                                r = r[1];
                                t = gg(a, l.element);
                                q = [
                                    "rn",
                                    Xa(a),
                                    "x",
                                    Math.floor(
                                        (65535 * (l.position.x - t.left)) /
                                            (q || 1)
                                    ),
                                    "y",
                                    Math.floor(
                                        (65535 * (l.position.y - t.top)) /
                                            (r || 1)
                                    ),
                                    "t",
                                    Math.floor((l.time - f) / 100),
                                    "p",
                                    pf(a, l.element),
                                    "X",
                                    l.position.x,
                                    "Y",
                                    l.position.y,
                                ];
                                q = H(":", q);
                                m && (q += ":wh:1");
                                cq(a, p, q, b, c);
                                k = l;
                            }
                        }
                    });
                    return ja(a).F(n(a, "document"), ["click"], d);
                }),
                ht = A("trigger.in", function (a, c) {
                    c.Xf &&
                        Sb(a, D([a, "yacounter" + c.id + "inited"], Zq), "t.i");
                }),
                it = A("c.m.p", function (a, c) {
                    var b,
                        d = K(c);
                    return (b = {}), (b.clickmap = u(Fe(a, d), bq)), b;
                }),
                Ki = u("form", nc),
                Pp = u("form", hb),
                aq = v(w(eb, ub(na)(U("settings.form_goals"))), eb),
                jt = A("s.f.i", function (a, c) {
                    var b,
                        d = [],
                        e = [],
                        f = ja(a);
                    d.push(f.F(a, ["click"], B(a, "s.f.c", D([a, c, e], $p))));
                    d.push(
                        f.F(
                            a,
                            ["submit"],
                            B(a, "s.f.e", function (g) {
                                var h = n(g, "target");
                                g = n(g, "isTrusted");
                                Ui(!0, a, c, e, h, g);
                            })
                        )
                    );
                    Vi(a, c, "fgi", ((b = {}), (b.id = c.id), b));
                    return D([ye, d], x);
                }),
                kt = A("s.f.i", function (a, c) {
                    return na(c, function (b) {
                        var d;
                        if (n(b, "settings.button_goals"))
                            return (
                                (b = ja(a).F(
                                    a,
                                    ["click"],
                                    B(
                                        a,
                                        "c.t.c",
                                        w(D([a, c], bf(a, c, "", Zp)))
                                    )
                                )),
                                mc(a, c, "gbi", ((d = {}), (d.id = c.id), d))(),
                                b
                            );
                    });
                }),
                ac,
                Qd,
                Zg,
                cd,
                Eb,
                Sf =
                    ((ac = {}),
                    (ac.transaction_id = "id"),
                    (ac.item_brand = "brand"),
                    (ac.index = "position"),
                    (ac.item_variant = "variant"),
                    (ac.value = "revenue"),
                    (ac.item_category = "category"),
                    (ac.item_list_name = "list"),
                    ac),
                kc =
                    ((Qd = {}),
                    (Qd.item_id = "id"),
                    (Qd.item_name = "name"),
                    (Qd.promotion_name = "coupon"),
                    Qd),
                Yp = ((Zg = {}), (Zg.promotion_name = "name"), Zg),
                jl =
                    ((cd = {}),
                    (cd.promotion_name = "name"),
                    (cd.promotion_id = "id"),
                    (cd.item_id = "product_id"),
                    (cd.item_name = "product_name"),
                    cd),
                Vp =
                    "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(
                        " "
                    ),
                Wp =
                    ((Eb = {}),
                    (Eb.view_item = {
                        event: "detail",
                        wa: kc,
                        Ja: "products",
                    }),
                    (Eb.add_to_cart = { event: "add", wa: kc, Ja: "products" }),
                    (Eb.remove_from_cart = {
                        event: "remove",
                        wa: kc,
                        Ja: "products",
                    }),
                    (Eb.begin_checkout = {
                        event: "checkout",
                        wa: kc,
                        Ja: "products",
                    }),
                    (Eb.purchase = {
                        event: "purchase",
                        wa: kc,
                        Ja: "products",
                    }),
                    (Eb.view_item_list = { event: "impressions", wa: kc }),
                    (Eb.select_item = {
                        event: "click",
                        Ja: "products",
                        wa: kc,
                    }),
                    (Eb.view_promotion = {
                        event: "promoView",
                        Ja: "promotions",
                        wa: jl,
                    }),
                    (Eb.select_promotion = {
                        event: "promoClick",
                        Ja: "promotions",
                        wa: jl,
                    }),
                    Eb),
                Ti = A("dl.w", function (a, c, b) {
                    function d() {
                        var g = n(a, c);
                        (e = N(g) && De(a, g, b)) ||
                            (f = V(a, d, 1e3, "ec.dl"));
                    }
                    var e,
                        f = 0;
                    d();
                    return function () {
                        return la(a, f);
                    };
                }),
                lt = A("p.e", function (a, c) {
                    var b = Fa(a, c);
                    if (b) {
                        var d = J(a);
                        b = b.params;
                        var e = B(a, "h.ee", D([a, K(c), b], Tp));
                        return c.jd
                            ? (d.D("ecs", 0), Si(a, c.jd, e))
                            : na(c, function (f) {
                                  if ((f = n(f, "settings.ecommerce")) && fa(f))
                                      return d.D("ecs", 1), Si(a, f, e);
                              });
                    }
                }),
                kl = v(function (a) {
                    a = S(a);
                    a = tr(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a;
                }),
                Pi = w(kl, U("_ym_status-check"), Ga),
                mt = w(kl, U("_ym_lang")),
                Mp = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
                Np =
                    /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/,
                Oi = db(
                    /^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/
                ),
                Rp = ["form", "button", "status"],
                $g = [],
                Op = v(
                    function (a, c, b) {
                        x(w(Kc([a, c, b]), ta), $g);
                        b.inline
                            ? ((c = Ni(b)),
                              (b = b.id),
                              Ji(a, c, void 0 === b ? "" : b))
                            : b.resource &&
                              Oi(b.resource) &&
                              ((a._ym__postMessageEvent = c),
                              (a._ym__inpageMode = b.inpageMode),
                              (a._ym__initMessage = b.initMessage),
                              Sp(a, b.resource));
                    },
                    function (a, c, b) {
                        return b.id;
                    }
                ),
                nt = A("cs.init", function (a, c) {
                    var b,
                        d = Pi(a);
                    if (d && c.id === d && "0" === c.ca) {
                        var e = Ni(
                            ((b = {}),
                            (b.lang = mt(a)),
                            (b.fileId = "status"),
                            b)
                        );
                        V(a, D([a, e, "" + d], Ji), 0, "cs");
                    }
                }),
                ot = A("suid.int", function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.setUserID = function (d, e, f) {
                            if (fa(d) || lc(a, d)) {
                                var g = Fa(a, c);
                                d = le(["__ym", "user_id", d]);
                                g.params(d, e || F, f);
                            } else oc(a, K(c)).error("wuid");
                        }),
                        b
                    );
                }),
                pt = A("up.int", function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.userParams = B(a, "up.c", function (d, e, f) {
                            var g,
                                h = Fa(a, c),
                                k = oc(a, K(c)).warn;
                            h
                                ? ia(d)
                                    ? ((d = ((g = {}), (g.__ymu = d), g)),
                                      (g = h.params) && g(d, e || F, f))
                                    : k("wup")
                                : k("nci");
                        })),
                        b
                    );
                }),
                qt = /[\*\.\?\(\)]/g,
                rt = v(function (a, c, b) {
                    var d;
                    try {
                        var e = b.replace("\\s", " ").replace(qt, "");
                        oc(a, "").warn("nnw", ((d = {}), (d.name = e), d));
                    } catch (f) {}
                }, eb),
                st = A("r.nn", function (a) {
                    Oe(a) &&
                        De(a, yg, function (c) {
                            c.ya.F(function (b) {
                                rt(a, b[1], b[0]);
                                yg.splice(100);
                            });
                        });
                }),
                tt = A("e.a.p", function (a, c) {
                    var b,
                        d = Fa(a, c);
                    d = D(
                        [
                            w(Q, Ca(!0)),
                            Aa(
                                z(u(d, n), [
                                    "clickmap",
                                    "trackLinks",
                                    "accurateTrackBounce",
                                ])
                            ),
                        ],
                        z
                    );
                    c.Lg && d();
                    return (b = {}), (b.enableAll = d), b;
                }),
                ut = v(Ic, K),
                vt = A("fpi", function (a) {
                    var c = ud(a);
                    if (c && !a.document.hidden) {
                        var b = J(a).Ga;
                        b("fpe", 1);
                        var d = ja(a).F(
                            a,
                            ["visibilitychange", "webkitvisibilitychange"],
                            function () {
                                a.document.hidden && (b("fht", c.now()), d());
                            }
                        );
                    }
                }),
                wt = v(function (a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = Re("log", c) ? I(c, a) : F;
                    var b = n(a, "warn");
                    b = Re("warn", b) ? I(b, a) : c;
                    var d = n(a, "error");
                    a = Re("error", d) ? I(d, a) : c;
                    return { log: c, error: a, warn: b };
                }),
                xt = u("add", xe),
                yt = u("remove", xe),
                zt = u("detail", xe),
                At = u("purchase", xe),
                Bt =
                    "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(
                        " "
                    ),
                nf = v(function (a) {
                    var c = Jk(a);
                    a = c.ag;
                    if (!c.gf) return !1;
                    c = La("indexOf", a);
                    c = Za(w(c, Ba(-1), Fc), Bt);
                    var b =
                            /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(
                                a
                            ),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || (d && e) || (!/Safari/.test(a) && e);
                }),
                Um = v(function (a) {
                    var c = sb(a);
                    return c ? gb(c, "YangoEats") || td(a) : !1;
                }),
                Jp = /([0-9\\.]+) Safari/,
                Ct = /\sYptp\/\d\.(\d+)\s/,
                ll = v(function (a) {
                    var c;
                    a: {
                        if ((c = sb(a)) && (c = Ct.exec(c)) && 1 < c.length) {
                            c = Ga(c[1]);
                            break a;
                        }
                        c = 0;
                    }
                    return (50 <= c && 99 >= c) || uf(a, 79)
                        ? !1
                        : !Nd(a) || nf(a);
                }),
                ml =
                    "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(
                        ";"
                    ),
                Dt = v(function (a) {
                    a = qb(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = I(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function (e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d;
                        };
                    } catch (e) {
                        return null;
                    }
                }),
                nl = ma(String.prototype.repeat, "repeat"),
                di = nl
                    ? function (a, c) {
                          return nl.call(a, c);
                      }
                    : Gp,
                Yh = u(!0, function (a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = di(c, b);
                    return a ? c + d : d + c;
                }),
                Se = [2277735313, 289559509],
                Te = [1291169091, 658871167],
                Et = A("p.cd", function (a) {
                    if (se(a) || Ig(a)) {
                        var c = Ua(a);
                        if (Z(c.C("jn"))) {
                            c.D("jn", !1);
                            var b = a.chrome || vd(a) ? function () {} : /./;
                            a = wt(a);
                            b.toString = function () {
                                c.D("jn", !0);
                                return "Yandex.Metrika counter is initialized";
                            };
                            a.log("%c%s", "color: inherit", b);
                        }
                    }
                }),
                Ft = v(function (a) {
                    a = n(a, "navigator.plugins");
                    return !!(
                        a &&
                        Ra(a) &&
                        Za(w(U("name"), db(/Chrome PDF Viewer/)), a)
                    );
                }),
                Fb = qa(function (a, c) {
                    return J(c).C(a, null);
                }),
                Dp = {
                    "*": "+",
                    "-": "/",
                    aj: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_",
                },
                Gt = v(function (a) {
                    return M(n(a, "yandex.getSiteUid"))
                        ? a.yandex.getSiteUid()
                        : null;
                }),
                Ht = v(u("panoramaId", ve)),
                It = v(function (a) {
                    return ve("pubcid.org", a) || ve("_pubCommonId", a);
                }),
                Jt = v(u("_sharedid", ve)),
                Kt = v(function (a, c) {
                    if (c.Ua) return null;
                    var b = $d(a, "").C("_ga");
                    return b && id(Xd(b));
                }, w(eb, K)),
                zp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [
                        function (a, c) {
                            return (
                                n(c, "redirectCount") ||
                                n(a, "navigation.redirectCount")
                            );
                        },
                    ],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"],
                ],
                yb,
                yp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"],
                ],
                Gi =
                    ((yb = {}),
                    (yb.responseEnd = 1),
                    (yb.domInteractive = 1),
                    (yb.domContentLoadedEventStart = 1),
                    (yb.domContentLoadedEventEnd = 1),
                    (yb.domComplete = 1),
                    (yb.loadEventStart = 1),
                    (yb.loadEventEnd = 1),
                    (yb.unloadEventStart = 1),
                    (yb.unloadEventEnd = 1),
                    (yb.secureConnectionStart = 1),
                    yb),
                Bp = v(xd),
                vp = v(Ic),
                wp = v(function (a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (M(c) && !se(a))
                        return new L(I(c, a, 0, 0))
                            .then(function () {
                                var d = n(a, "navigator.storage") || {};
                                return d.estimate ? d.estimate() : {};
                            })
                            .then(function (d) {
                                return (d = d.quota) && 12e7 > d ? !0 : !1;
                            })
                            ["catch"](u(!0, Q));
                    if (Id(a))
                        return (
                            (c = n(a, "navigator.serviceWorker")),
                            L.resolve(Y(c))
                        );
                    c = n(a, "openDatabase");
                    if (vd(a) && M(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null);
                        } catch (d) {
                            b = !0;
                        }
                        return L.resolve(b);
                    }
                    return L.resolve(
                        !n(a, "indexedDB") &&
                            (n(a, "PointerEvent") || n(a, "MSPointerEvent"))
                    );
                }),
                Lt = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                Mt = v(function (a, c) {
                    var b = Sc(a),
                        d = S(a).search.match(Lt);
                    return d && 2 <= d.length
                        ? ((d = d[2]), c.Ua || b.D("turbo_uid", d), d)
                        : (b = b.C("turbo_uid"))
                        ? b
                        : "";
                }),
                gp = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0],
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1],
                    ],
                ],
                hp = [
                    [["oWdZ[nc[jh_YW$Yec", 30103, 1]],
                    [["oWdZ[nc[jh_YW$Yec", 29010, 1]],
                ],
                Fi = { J: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
                dp = { pe: 60, error: 15 },
                cp = { pe: 5, error: 1 },
                Di = { id: 42822899, ca: "0" },
                Nt = A("pa.plgn", function (a, c) {
                    var b = de(a, c);
                    b &&
                        b.$.F(
                            ["pluginInfo"],
                            B(a, "c.plgn", function () {
                                var d = J(a);
                                d.D("cmc", d.C("cmc", 0) + 1);
                                return ck(c);
                            })
                        );
                }),
                Rb,
                lb,
                Nm =
                    ((Rb = {}),
                    (Rb.am = "com.am"),
                    (Rb.tr = "com.tr"),
                    (Rb.ge = "com.ge"),
                    (Rb.il = "co.il"),
                    (Rb["\u0440\u0444"] = "ru"),
                    (Rb["xn--p1ai"] = "ru"),
                    (Rb["\u0431\u0435\u043b"] = "by"),
                    (Rb["xn--90ais"] = "by"),
                    Rb),
                ol = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/,
                },
                Om =
                    ((lb = {}),
                    (lb.ka = "ge"),
                    (lb.ro = "md"),
                    (lb.tg = "tj"),
                    (lb.tk = "tm"),
                    (lb.et = "ee"),
                    (lb.hy = "com.am"),
                    (lb.he = "co.li"),
                    (lb.ky = "kg"),
                    (lb.be = "by"),
                    (lb.tr = "com.tr"),
                    (lb.kk = "kz"),
                    lb),
                pl = /^https?:\/\//,
                Ot = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1,
                    3015043526: 1,
                },
                ql = v(function () {
                    return O(
                        function (a, c) {
                            var b = fc(c + "/tag.js");
                            a[b] = 1;
                            return a;
                        },
                        {},
                        [
                            "mc.yandex.ru/metrika",
                            "mc.yandex.com/metrika",
                            "cdn.jsdelivr.net/npm/yandex-metrica-watch",
                        ]
                    );
                }),
                Pt = v(function (a) {
                    a = ud(a);
                    if (!a || !M(a.getEntriesByType)) return null;
                    a = a.getEntriesByType("resource");
                    var c = ql();
                    return (a = rb(function (b) {
                        b = b.name.replace(pl, "").split("?")[0];
                        b = fc(b);
                        return c[b];
                    }, a))
                        ? pb(a.transferSize)
                        : null;
                }),
                qp = "ar:1:pv:1:v:" + va.bb + ":vf:" + Xc.version,
                rp = va.Qa + "//" + ic + "/watch/" + va.dg,
                rl = {},
                Qt = A("exps.int", function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.experiments = function (d, e, f) {
                            var g, h;
                            void 0 === e && (e = F);
                            if (d && 0 < d.length) {
                                var k = pa(a, "e", c),
                                    l = zd(c).url;
                                d = k(
                                    {
                                        K: Ja(
                                            ((g = {}),
                                            (g.ex = 1),
                                            (g.ar = 1),
                                            g)
                                        ),
                                        J:
                                            ((h = {}),
                                            (h["page-url"] = l || S(a).href),
                                            (h.exp = d),
                                            h),
                                    },
                                    c
                                );
                                return Tc(a, "exps.s", d, e, f);
                            }
                        }),
                        b
                    );
                }),
                of = [],
                Rt = A("p.fh", function (a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Ua(a),
                        f = ka(a),
                        g = e.C("wasSynced"),
                        h = { id: 3, ca: "0" };
                    return c && g && g.time + 864e5 > f(da)
                        ? L.resolve(g)
                        : pa(
                              a,
                              "f",
                              h
                          )(
                              {
                                  K: Ja(((b = {}), (b.pv = 1), b)),
                                  J:
                                      ((d = {}),
                                      (d["page-url"] = S(a).href),
                                      (d["page-ref"] = a.document.referrer),
                                      d),
                              },
                              h
                          )
                              .then(function (k) {
                                  var l;
                                  k =
                                      ((l = {}),
                                      (l.time = f(da)),
                                      (l.params = n(k, "settings")),
                                      (l.bkParams = n(k, "userData")),
                                      l);
                                  e.D("wasSynced", k);
                                  return k;
                              })
                              ["catch"](B(a, "f.h"));
                }),
                St = qa(function (a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) &&
                        (a.Nd.D("ymoo" + a.qa, a.Vf(nb)),
                        a.dd && a.dd.destruct && a.dd.destruct());
                }),
                he = w(U("settings.pcs"), Ba("1")),
                sl = ic.split("."),
                Tt = sl.pop(),
                tl = H(".", sl),
                Mm = v(function (a) {
                    a = S(a).hostname.split(".");
                    return a[a.length - 1];
                }),
                Bh = v(function (a) {
                    return (
                        -1 !==
                        S(a).hostname.search(
                            /(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/
                        )
                    );
                }),
                Ut =
                    /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech)$/,
                ce = v(function (a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Ut));
                    return c;
                }),
                Vt =
                    /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                jp = v(function (a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Vt));
                    return c;
                }),
                ph = va.Qa + "//" + ic + "/metrika",
                ne = ph + "/metrika_match.html",
                Xe,
                np = ((Xe = {}), (Xe.s = "p"), (Xe["8"] = "i"), Xe),
                kp = vb("csp", function (a, c) {
                    return pa(
                        a,
                        "s",
                        c
                    )({}, ["https://ymetrica1.com/watch/3/1"]);
                }),
                ah = "et w v z i u vf".split(" "),
                ul = Gd("wv"),
                Wt = Gd("pub"),
                si = (function () {
                    function a(c, b) {
                        this.l = c;
                        this.type = b;
                    }
                    a.isEnabled = function (c) {
                        return !!c.JSON;
                    };
                    a.prototype.Fa = function (c) {
                        return Bf(Mb(this.l, c));
                    };
                    a.prototype.sb = function (c) {
                        var b = c.data;
                        "string" !== typeof b && (b = Mb(this.l, c.data));
                        return b;
                    };
                    a.prototype.jb = function (c) {
                        return encodeURIComponent(c).length;
                    };
                    a.prototype.ke = function (c, b) {
                        for (
                            var d = Math.ceil(c.length / b), e = [], f = 0;
                            f < b;
                            f += 1
                        )
                            e.push(c.slice(f * d, d * (f + 1)));
                        return e;
                    };
                    return a;
                })(),
                Yo = v(function (a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0];
                    }
                    function b(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3];
                    }
                    if (
                        "undefined" === typeof a.Float32Array ||
                        "undefined" === typeof a.Uint8Array
                    )
                        return Zo;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c;
                }),
                Uo = Bi(!1),
                To = Bi(!0),
                ba,
                Jc,
                vl =
                    ((ba = {}),
                    (ba.mousemove = 0),
                    (ba.mouseup = 1),
                    (ba.mousedown = 2),
                    (ba.click = 3),
                    (ba.scroll = 4),
                    (ba.windowblur = 5),
                    (ba.windowfocus = 6),
                    (ba.focus = 7),
                    (ba.blur = 8),
                    (ba.eof = 9),
                    (ba.selection = 10),
                    (ba.change = 11),
                    (ba.input = 12),
                    (ba.touchmove = 13),
                    (ba.touchstart = 14),
                    (ba.touchend = 15),
                    (ba.touchcancel = 16),
                    (ba.touchforcechange = 17),
                    (ba.zoom = 18),
                    (ba.resize = 19),
                    (ba.keystroke = 20),
                    (ba.deviceRotation = 21),
                    (ba.fatalError = 22),
                    (ba.hashchange = 23),
                    (ba.stylechange = 24),
                    (ba.articleInfo = 25),
                    (ba.publishersHeader = 26),
                    (ba.pageData = 27),
                    (ba.mutationAdd = 28),
                    (ba.mutationRemove = 29),
                    (ba.mutationTextChange = 30),
                    (ba.mutationAttributesChange = 31),
                    ba),
                wl =
                    ((Jc = {}),
                    (Jc.page = 0),
                    (Jc.event = 1),
                    (Jc.mutation = 2),
                    (Jc.publishers = 3),
                    (Jc.activity = 4),
                    Jc),
                ri = (function () {
                    function a(c, b) {
                        var d,
                            e,
                            f = this;
                        this.isSync = !1;
                        this.Cb = [];
                        this.Ng =
                            ((d = {}),
                            (d.ad = "mutationAdd"),
                            (d.re = "mutationRemove"),
                            (d.tc = "mutationTextChange"),
                            (d.ac = "mutationAttributesChange"),
                            (d.page = "pageData"),
                            d);
                        this.Ig =
                            ((e = {}),
                            (e.ad = "addedNodesMutation"),
                            (e.re = "removedNodesMutation"),
                            (e.tc = "textChangeMutation"),
                            (e.ac = "attributesChangeMutation"),
                            (e.touchmove = "touchEvent"),
                            (e.touchstart = "touchEvent"),
                            (e.touchend = "touchEvent"),
                            (e.touchforcechange = "touchEvent"),
                            (e.touchcancel = "touchEvent"),
                            (e.resize = "resizeEvent"),
                            (e.scroll = "scrollEvent"),
                            (e.change = "changeEvent"),
                            (e.mousemove = "mouseEvent"),
                            (e.mousedown = "mouseEvent"),
                            (e.mouseup = "mouseEvent"),
                            (e.click = "mouseEvent"),
                            (e.focus = "focusEvent"),
                            (e.blur = "focusEvent"),
                            (e.deviceRotation = "deviceRotationEvent"),
                            (e.zoom = "zoomEvent"),
                            (e.keystroke = "keystrokesEvent"),
                            (e.selection = "selectionEvent"),
                            (e.stylechange = "styleChangeEvent"),
                            (e.fatalError = "fatalErrorEvent"),
                            (e.pageData = "page"),
                            e);
                        this.ih = function (g) {
                            var h = g.type;
                            return g.event ||
                                ("publishersHeader" !== h &&
                                    "articleInfo" !== h)
                                ? {
                                      type: wl[h],
                                      event: vl[f.Ng[g.event] || g.event],
                                  }
                                : { type: wl.publishers, event: vl[h] };
                        };
                        this.nf = function (g) {
                            var h = !Y(g.partNum),
                                k = f.ih(g);
                            k = {
                                stamp: g.stamp,
                                type: k.type,
                                event: k.event,
                                frameId: g.frameId,
                                chunk: h ? g.data : void 0,
                                partNum: g.partNum,
                                end: g.end,
                            };
                            !h &&
                                g.data &&
                                (h = f.Ig[g.event] || g.event || g.type) &&
                                (k[h] = g.data);
                            return k;
                        };
                        this.l = c;
                        this.type = b;
                    }
                    a.prototype.Fa = function (c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = dc(c, this.nf),
                            f = this.isSync || b ? Infinity : 10;
                        e = jd(this.l, e, f);
                        var g = [e];
                        this.Cb.push(e);
                        return e(
                            Mg(function (h) {
                                h = ui(d.l, Jo, { ni: h });
                                h = jd(d.l, h, f, ng);
                                g.push(h);
                                d.Cb.push(h);
                                return h;
                            })
                        )(
                            Mg(function (h) {
                                h = ti(d.l, h.slice(-4));
                                h = jd(d.l, h, f, ng);
                                g.push(h);
                                d.Cb.push(h);
                                return h;
                            })
                        )(
                            Zk(function (h) {
                                h = h[h.length - 1];
                                x(function (k) {
                                    k = Ee(d.l)(k, d.Cb);
                                    d.Cb.splice(k, 1);
                                }, g);
                                return h;
                            })
                        );
                    };
                    a.prototype.sb = function (c) {
                        return ui(this.l, vi, this.nf(c))(og(F));
                    };
                    a.prototype.jb = function (c) {
                        return c[0];
                    };
                    a.prototype.ke = function (c, b) {
                        for (
                            var d = ti(this.l, c)(og(F)),
                                e = Math.ceil(d.length / b),
                                f = [],
                                g = 0;
                            g < b;
                            g += 1
                        )
                            f.push(d.slice(g * e, e * (g + 1)));
                        return f;
                    };
                    a.isEnabled = function (c) {
                        var b = Oe(c),
                            d = !1;
                        try {
                            d =
                                (d = 2 === new c.Blob(["\u00e4"]).size) &&
                                2 ===
                                    new c.Blob([new c.Uint8Array([1, 2])]).size;
                        } catch (e) {}
                        return (
                            !b &&
                            d &&
                            !(
                                !c.Uint8Array ||
                                !n(c, "Uint8Array.prototype.slice")
                            )
                        );
                    };
                    return a;
                })(),
                xl =
                    "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(
                        " "
                    ),
                Xt =
                    "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(
                        " "
                    ),
                Yt = (function () {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.vc = !1;
                        this.meta = {};
                        this.scroll = { x: 0, y: 0 };
                        this.involvedTime = this.lf = 0;
                        this.Od = this.tf = "";
                        this.fa = [];
                        this.ie = this.Ia = 0;
                        this.wb = { h: 0, w: 0 };
                        this.buffer = [];
                        this.eg = Xt;
                        this.flush = function () {
                            g.ie = V(g.l, g.flush, 2500);
                            var h = g.sd();
                            if (g.buffer.length || h) {
                                var k = Qe(g.buffer);
                                h && k.push(h);
                                g.tf = g.Od;
                                g.ja.Fa(k)(
                                    $a(B(g.l, "p.b.st"), function (l) {
                                        l && g.Ob(l);
                                    })
                                );
                            }
                        };
                        this.Ob = e;
                        this.ja = d;
                        this.Tb = I(this.Tb, this);
                        this.sd = I(this.sd, this);
                        this.flush = I(this.flush, this);
                        this.l = c;
                        this.qa = f;
                        this.Kc = b;
                        this.Jd = "pai" + b.id;
                        this.Gb();
                        this.Me = ja(this.l);
                        this.time = ka(this.l);
                        this.Zf();
                        this.wd = J(this.l);
                        this.ye = null;
                    }
                    a.prototype.start = function () {
                        this.ie = V(this.l, this.flush, 2500);
                        if (!this.vc) {
                            this.Ai();
                            var c = this.wd.C(this.Jd, []),
                                b = !c.length;
                            c.push(I(this.Oh, this));
                            this.wd.Ga(this.Jd, c);
                            b && this.Df();
                            this.ye = ja(this.l).F(
                                this.l,
                                ["click"],
                                I(this.yi, this)
                            );
                            this.Tb({ type: "page", target: this.l });
                        }
                    };
                    a.prototype.stop = function () {
                        this.Ni();
                        this.vc = !0;
                        this.flush();
                        la(this.l, this.ie);
                    };
                    a.prototype.hf = function (c) {
                        return (
                            nc("html", this.l, c) !==
                            this.l.document.documentElement
                        );
                    };
                    a.prototype.Df = function () {
                        var c = this;
                        B(this.l, "p.ic" + this.Kc.id, function () {
                            if (!c.vc) {
                                var b = c.wd.C(c.Jd),
                                    d = c.Kc.Tg();
                                x(function (e) {
                                    var f = z(function (g) {
                                        return C({}, g);
                                    }, d);
                                    M(e) && e(f);
                                }, b);
                                c.Ia = V(c.l, I(c.Df, c), 1e3, "p");
                            }
                        })();
                    };
                    a.prototype.Oh = function (c) {
                        this.vc || (this.Oi(c), this.Pi(), this.wg());
                    };
                    a.prototype.Bg = function (c, b) {
                        return (c.de || 0) <= (b.de || 0) ? b : c;
                    };
                    a.prototype.yi = function (c) {
                        if (this.fa.length) {
                            c = Zi(c);
                            var b = S(this.l).hostname,
                                d;
                            if ((d = c)) d = Ce(c.hostname) === Ce(b);
                            d &&
                                ((c = O(this.Bg, this.fa[0], this.fa).id),
                                (b = Cc(this.l)),
                                $c(this.l, this.qa.split(":")[0]).D(
                                    "pai",
                                    c + "-" + b
                                ));
                        }
                    };
                    a.prototype.Tb = function (c) {
                        var b = this;
                        B(this.l, "p.ec." + this.Kc.id, function () {
                            var d, e;
                            try {
                                var f = c.type;
                                var g = c.target;
                            } catch (p) {
                                return;
                            }
                            var h = "page" === f;
                            if ("scroll" === f || h) {
                                var k = [
                                    b.l,
                                    b.l.document,
                                    b.l.document.documentElement,
                                    Gc(b.l),
                                ];
                                G(g, k) && b.Gb();
                            }
                            ("resize" === f || h) && b.Zf();
                            f = b.time(da);
                            var l = Math.min(f - b.lf, 5e3);
                            b.involvedTime += Math.round(l);
                            b.lf = f;
                            if (b.meta && b.scroll && b.wb) {
                                var m = b.wb.h * b.wb.w;
                                b.fa = z(function (p) {
                                    var q = C({}, p),
                                        r = b.meta[q.id],
                                        t = Mc(p.Bb);
                                    if (!r || b.hf(q.element) || !t) return q;
                                    p = b.l.Math;
                                    r = p.max(
                                        (b.scroll.y + b.wb.h - r.y) / r.height,
                                        0
                                    );
                                    var y = t.height * t.width;
                                    t = zh(b.l, t, b.wb);
                                    q.de = t / m;
                                    q.visibility = t / y;
                                    if (0.9 <= q.visibility || 0.1 <= q.de)
                                        q.involvedTime += l;
                                    q.maxScrolled = p.round(1e4 * r) / 1e4;
                                    return q;
                                }, b.fa);
                                tb(
                                    b.l,
                                    ((d = {}),
                                    (d.name = "publishers"),
                                    (d.counterKey = b.qa),
                                    (d.data =
                                        ((e = {}),
                                        (e.involvedTime = b.involvedTime),
                                        (e.contentItems = z(function (p) {
                                            var q;
                                            return C(
                                                ((q = {}),
                                                (q.contentElement = p.Bb),
                                                q),
                                                p
                                            );
                                        }, b.fa)),
                                        e)),
                                    d)
                                );
                            }
                        })();
                    };
                    a.prototype.Oi = function (c) {
                        var b = z(function (d) {
                            return d.id;
                        }, this.fa);
                        this.fa = this.fa.concat(
                            ha(function (d) {
                                return !G(d.id, b);
                            }, c)
                        );
                    };
                    a.prototype.Zf = function () {
                        var c = Yd(this.l) || Nc(this.l);
                        this.wb = { w: c[0], h: c[1] };
                    };
                    a.prototype.Pi = function () {
                        var c = this;
                        B(this.l, "p.um." + this.Kc.id, function () {
                            var b = [];
                            c.Gb();
                            c.meta = zb(
                                function (d, e) {
                                    var f;
                                    if (c.hf(e.element))
                                        b.push(e), delete d[e.id];
                                    else {
                                        var g =
                                            ((f = {}),
                                            (f.id = e.id),
                                            (f.involvedTime = Math.max(
                                                e.involvedTime,
                                                0
                                            )),
                                            (f.maxScrolled =
                                                e.maxScrolled || 0),
                                            (f.chars = e.update
                                                ? e.update("chars") || 0
                                                : 0),
                                            f);
                                        e.Bb &&
                                            (f = Mc(e.Bb)) &&
                                            ((g.x = Math.max(
                                                Math.round(f.left) + c.scroll.x,
                                                0
                                            )),
                                            (g.y = Math.max(
                                                Math.round(f.top) + c.scroll.y,
                                                0
                                            )),
                                            (g.width = Math.round(f.width)),
                                            (g.height = Math.round(f.height)));
                                        d[e.id] = g;
                                    }
                                    return d;
                                },
                                {},
                                c.fa
                            );
                            x(function (d) {
                                d = Ee(c.l)(d, c.fa);
                                c.fa.splice(d, 1);
                            }, b);
                        })();
                    };
                    a.prototype.sd = function () {
                        var c,
                            b,
                            d = z(u(this.meta, n), ea(this.meta));
                        return d.length &&
                            ((this.Od = Mb(this.l, d)), this.tf !== this.Od)
                            ? ((c = {}),
                              (c.type = "publishersHeader"),
                              (c.data =
                                  ((b = {}),
                                  (b.articleMeta = d || []),
                                  (b.involvedTime = this.involvedTime),
                                  b)),
                              c)
                            : null;
                    };
                    a.prototype.wg = function () {
                        var c = this;
                        if (this.fa.length) {
                            var b = z(
                                function (d) {
                                    var e,
                                        f = O(
                                            function (g, h) {
                                                d[h] && (g[h] = d[h]);
                                                return g;
                                            },
                                            {},
                                            c.eg
                                        );
                                    d.Of = !0;
                                    return (
                                        (e = {}),
                                        (e.type = "articleInfo"),
                                        (e.stamp = f.stamp),
                                        (e.data = f),
                                        e
                                    );
                                },
                                ha(function (d) {
                                    return !d.Of;
                                }, this.fa)
                            );
                            b.length &&
                                ((this.buffer = this.buffer.concat(b)),
                                Ib(this.l, this.qa, ["pdf", b]));
                        }
                    };
                    a.prototype.Ai = function () {
                        this.Me.F(this.l, xl, this.Tb);
                    };
                    a.prototype.Ni = function () {
                        this.ye && this.ye();
                        this.Me.vb(this.l, xl, this.Tb);
                    };
                    a.prototype.Gb = function () {
                        this.scroll = {
                            x:
                                this.l.pageXOffset ||
                                n(
                                    this.l,
                                    "document.documentElement.scrollLeft"
                                ) ||
                                0,
                            y:
                                this.l.pageYOffset ||
                                n(
                                    this.l,
                                    "document.documentElement.scrollLeft"
                                ) ||
                                0,
                        };
                    };
                    return a;
                })(),
                Rd,
                bh = ((Rd = {}), (Rd[1] = 500), (Rd[2] = 500), (Rd[3] = 0), Rd),
                Zt = ["topics", "rubric", "authors"],
                ch = (function () {
                    function a(c, b) {
                        var d,
                            e = this;
                        this.id = "a";
                        this.Dd = !1;
                        this.Db = {};
                        this.rb = {
                            "schema.org":
                                "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(
                                    " "
                                ),
                            qf: ["article"],
                        };
                        this.we = ((d = {}), (d.Answer = 3), (d.Review = 2), d);
                        this.Pe = v(
                            function (f, g, h) {
                                var k;
                                Ib(
                                    e.l,
                                    e.qa,
                                    "pfi",
                                    ((k = {}),
                                    (k.field = f),
                                    (k.itemField = g),
                                    (k.value = h),
                                    k)
                                );
                            },
                            function (f, g, h) {
                                return "" + f + g + h;
                            }
                        );
                        this.Ri = function (f) {
                            Zt.forEach(function (g) {
                                f[g] &&
                                    (f[g] = f[g].reduce(function (h, k) {
                                        var l = k.name,
                                            m = k.position;
                                        if (!l) return e.Pe(g, "name", l), h;
                                        if ("string" === typeof m) {
                                            l = je(m);
                                            if (null === l || e.l.isNaN(l))
                                                return (
                                                    e.Pe(g, "position", m), h
                                                );
                                            k.position = l;
                                        }
                                        h.push(k);
                                        return h;
                                    }, []));
                            });
                            return f;
                        };
                        this.Cg = v(function (f, g) {
                            var h;
                            Ib(
                                e.l,
                                e.qa,
                                ["pcs", g],
                                ((h = {}),
                                (h.chars = g.chars),
                                (h.limit = bh[g.type]),
                                h)
                            );
                        });
                        this.l = c;
                        this.root = ec(c);
                        this.qa = b;
                    }
                    a.prototype.La = function (c) {
                        return c.element;
                    };
                    a.prototype.Xe = function (c, b) {
                        var d = this,
                            e;
                        B(this.l, "P.s." + b, function () {
                            e = d.Db[b].call(d, c);
                        })();
                        return e;
                    };
                    a.prototype.mi = function (c) {
                        var b = C({}, c);
                        this.Dd &&
                            !b.id &&
                            G(c.type, [3, 2]) &&
                            ((c = H(", ", z(U("name"), b.authors || []))),
                            (b.pageTitle = c + ": " + b.pageTitle));
                        b.pageTitle || (b.pageTitle = this.rh(b.Bb));
                        b.pageUrlCanonical ||
                            ((c = b.id),
                            (b.pageUrlCanonical = (
                                "string" !== typeof c
                                    ? 0
                                    : /^(https?:)\/\//.test(c)
                            )
                                ? b.id
                                : this.ph()));
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b;
                    };
                    a.prototype.Ca = function (c) {
                        var b = this,
                            d = {},
                            e = this.La(c);
                        if (!e) return null;
                        d.type = c.type;
                        x(function (g) {
                            d[g] = b.Xe(c, g);
                        }, ea(this.Db));
                        var f = ka(this.l);
                        d.stamp = f(Rj);
                        d.element = c.element;
                        d.Bb = e;
                        d = this.Ri(this.mi(d));
                        d.id = d.id ? fc(d.id) : 1;
                        d.update = function (g) {
                            return b.La(c) ? b.Xe(c, g) : void 0;
                        };
                        return d;
                    };
                    a.prototype.rh = function (c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = bb(cc("h" + b, c));
                            if (d) return d;
                        }
                    };
                    a.prototype.ph = function () {
                        var c = cc('[rel="canonical"]', this.root);
                        if (c) return c.href;
                    };
                    a.prototype.bf = function () {
                        return 1;
                    };
                    a.prototype.kc = function () {
                        return [];
                    };
                    a.prototype.Tg = function () {
                        var c = this,
                            b = this.kc(),
                            d = 1;
                        return zb(
                            function (e, f) {
                                var g =
                                    c.Ca({ element: f, type: c.bf(f) }) || [];
                                N(g) || (g = [g]);
                                g = zb(
                                    function (h, k) {
                                        var l = h.values,
                                            m = h.df;
                                        k && k.chars > bh[k.type] && !G(k.id, m)
                                            ? (l.push(k), m.push(k.id))
                                            : k &&
                                              k.chars <= bh[k.type] &&
                                              c.Cg(k.id, k);
                                        return { values: l, df: m };
                                    },
                                    { values: [], df: z(U("id"), e) },
                                    g
                                ).values;
                                return e.concat(
                                    z(function (h) {
                                        var k;
                                        h = C(
                                            ((k = { index: d, Of: !1 }),
                                            (k.involvedTime = 0),
                                            k),
                                            h
                                        );
                                        d += 1;
                                        return h;
                                    }, g)
                                );
                            },
                            [],
                            b
                        );
                    };
                    return a;
                })(),
                yl = (function (a) {
                    function c() {
                        var b,
                            d =
                                (null !== a && a.apply(this, arguments)) ||
                                this;
                        d.id = "j";
                        d.Dd = !0;
                        d.Je = H(",", [
                            'script[type="application/ld+json"]',
                            'script[type="application/json+ld"]',
                            'script[type="ld+json"]',
                            'script[type="json+ld"]',
                        ]);
                        d.Db =
                            ((b = {}),
                            (b.id = function (e) {
                                var f = e.data["@id"];
                                e =
                                    e.data.mainEntity ||
                                    e.data.mainEntityOfPage;
                                !f && ia(e) && (f = e["@id"]);
                                return f;
                            }),
                            (b.chars = function (e) {
                                var f = e.data;
                                return fa(f.text)
                                    ? f.text.length
                                    : Kb(this.La(e)).length;
                            }),
                            (b.authors = function (e) {
                                e = e.data;
                                var f = [];
                                f = f.concat(this.jc(e, "author"));
                                f = f.concat(this.jc(e.mainEntity, "author"));
                                return f.concat(
                                    this.jc(e.mainEntityOfPage, "author")
                                );
                            }),
                            (b.pageTitle = function (e) {
                                var f = e.data,
                                    g = f.headline || "";
                                f.alternativeHeadline &&
                                    (g += " " + f.alternativeHeadline);
                                "" === g &&
                                    (f.name
                                        ? (g = f.name)
                                        : f.itemReviewed &&
                                          (g = f.itemReviewed));
                                3 === e.type &&
                                    ia(f.parentItem) &&
                                    (g = f.parentItem.text);
                                return g;
                            }),
                            (b.updateDate = function (e) {
                                return e.data.dateModified || "";
                            }),
                            (b.publicationDate = function (e) {
                                return e.data.datePublished || "";
                            }),
                            (b.pageUrlCanonical = function (e) {
                                return e.data.url;
                            }),
                            (b.topics = function (e) {
                                return this.jc(e.data, "about", [
                                    "name",
                                    "alternateName",
                                ]);
                            }),
                            (b.rubric = function (e) {
                                var f = this,
                                    g = this.La(e);
                                e = Aa(
                                    z(function (h) {
                                        h = Lb(f.l, Kb(h));
                                        if (ia(h) || N(h)) {
                                            var k = f.Ye(h);
                                            if (k)
                                                return O(
                                                    function (l, m) {
                                                        return l
                                                            ? l
                                                            : ia(m) &&
                                                              "BreadcrumbList" ===
                                                                  m["@type"]
                                                            ? m
                                                            : l;
                                                    },
                                                    null,
                                                    k
                                                );
                                            if ("BreadcrumbList" === h["@type"])
                                                return h;
                                        }
                                        return null;
                                    }, [e.element].concat(
                                        hb(
                                            this.Je,
                                            document.body === g
                                                ? document.documentElement
                                                : g
                                        )
                                    ))
                                );
                                return e.length &&
                                    ((e = e[0].itemListElement), N(e))
                                    ? Aa(
                                          z(function (h) {
                                              return ia(h) &&
                                                  h.item &&
                                                  ia(h.item) &&
                                                  !f.l.isNaN(h.position)
                                                  ? {
                                                        name:
                                                            h.item.name ||
                                                            h.name,
                                                        position: h.position,
                                                    }
                                                  : null;
                                          }, e)
                                      )
                                    : [];
                            }),
                            b);
                        return d;
                    }
                    Na(c, a);
                    c.prototype.jc = function (b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = N(b[d]) ? b[d] : [b[d]];
                        b = Aa(
                            z(function (f) {
                                return f
                                    ? "string" === typeof f
                                        ? f
                                        : O(
                                              function (g, h) {
                                                  return g || "" + f[h];
                                              },
                                              "",
                                              e
                                          )
                                    : null;
                            }, b)
                        );
                        return z(function (f) {
                            var g;
                            return (g = {}), (g.name = f), g;
                        }, b);
                    };
                    c.prototype.La = function (b) {
                        var d = b.element,
                            e = b.data || {};
                        b = e["@id"];
                        var f = e.url;
                        e = null;
                        f && fa(f) && (e = this.Oe(f));
                        !e && b && fa(b) && (e = this.Oe(b));
                        e ||
                            ((e = b = d.parentNode),
                            !nc("head", this.l, d) &&
                                b &&
                                0 !== Kb(b).length) ||
                            (e = this.l.document.body);
                        return e;
                    };
                    c.prototype.Oe = function (b) {
                        try {
                            var d = Qc(this.l, b).hash;
                            if (d) {
                                var e = cc(d, this.l.document.body);
                                if (e) return e;
                            }
                        } catch (f) {}
                        return null;
                    };
                    c.prototype.Ud = function (b) {
                        return this.we[b["@type"]] || 1;
                    };
                    c.prototype.Ca = function (b) {
                        var d = this,
                            e = b.element,
                            f = b.data;
                        if (
                            !f &&
                            ((f = Lb(this.l, Kb(e))),
                            !f || (!/schema\.org/.test(f["@context"]) && !N(f)))
                        )
                            return null;
                        var g = this.Ye(f);
                        if (g)
                            return z(function (k) {
                                return ia(k) &&
                                    G(k["@type"], d.rb["schema.org"])
                                    ? a.prototype.Ca.call(d, {
                                          element: e,
                                          data: k,
                                          type: d.Ud(k),
                                      })
                                    : null;
                            }, g);
                        b.data = f;
                        if ("QAPage" === b.data["@type"]) {
                            var h =
                                b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!h) return null;
                        }
                        "Question" === b.data["@type"] && (h = b.data);
                        return h
                            ? ((b = wc(u(h, n), [
                                  "acceptedAnswer",
                                  "suggestedAnswer",
                              ])),
                              z(function (k) {
                                  var l;
                                  if (
                                      !ia(k) ||
                                      !G(k["@type"], d.rb["schema.org"])
                                  )
                                      return null;
                                  k = {
                                      element: e,
                                      type: d.Ud(k),
                                      data: C(
                                          ((l = {}), (l.parentItem = h), l),
                                          k
                                      ),
                                  };
                                  return a.prototype.Ca.call(d, k);
                              }, b))
                            : G(b.data["@type"], this.rb["schema.org"])
                            ? a.prototype.Ca.call(
                                  this,
                                  C(b, { type: this.Ud(b.data) })
                              )
                            : null;
                    };
                    c.prototype.kc = function () {
                        return hb(this.Je, this.root);
                    };
                    c.prototype.Ye = function (b) {
                        if (N(b)) return b;
                        if (b && N(b["@graph"])) return b["@graph"];
                    };
                    return c;
                })(ch),
                dh = (function (a) {
                    function c() {
                        var b,
                            d =
                                (null !== a && a.apply(this, arguments)) ||
                                this;
                        d.id = "s";
                        d.Dd = !0;
                        d.Mi = La(
                            "exec",
                            new RegExp(
                                "schema.org\\/(" + H("|", ea(d.we)) + ")$"
                            )
                        );
                        d.Db =
                            ((b = {}),
                            (b.id = function (e) {
                                e = e.element;
                                var f = fb(this.l, e, "identifier");
                                return f
                                    ? bb(f)
                                    : (f = fb(this.l, e, "mainEntityOfPage")) &&
                                      f.getAttribute("itemid")
                                    ? f.getAttribute("itemid")
                                    : null;
                            }),
                            (b.chars = function (e) {
                                var f = 0;
                                e = e.element;
                                for (
                                    var g = [
                                            "articleBody",
                                            "reviewBody",
                                            "recipeInstructions",
                                            "description",
                                            "text",
                                        ],
                                        h = 0;
                                    h < g.length;
                                    h += 1
                                ) {
                                    var k = fb(this.l, e, g[h]);
                                    if (k) {
                                        f = bb(k).length;
                                        break;
                                    }
                                }
                                e = Kb(e);
                                0 === f && e && (f += e.length);
                                return f;
                            }),
                            (b.topics = function (e) {
                                var f = this,
                                    g = Md(this.l, e.element, "about");
                                return z(function (h) {
                                    var k = { name: bb(h) };
                                    if ((g = fb(f.l, h, "name")))
                                        k.name = bb(g);
                                    return k;
                                }, g);
                            }),
                            (b.rubric = function (e) {
                                var f = this;
                                (e = cc(
                                    '[itemtype$="schema.org/BreadcrumbList"]',
                                    e.element
                                )) ||
                                    (e = cc(
                                        '[itemtype$="schema.org/BreadcrumbList"]',
                                        this.root
                                    ));
                                return e
                                    ? z(function (g) {
                                          return {
                                              name: bb(fb(f.l, g, "name")),
                                              position: bb(
                                                  fb(f.l, g, "position")
                                              ),
                                          };
                                      }, Md(this.l, e, "itemListElement"))
                                    : [];
                            }),
                            (b.updateDate = function (e) {
                                return (e = fb(
                                    this.l,
                                    e.element,
                                    "dateModified"
                                ))
                                    ? qk(e)
                                    : "";
                            }),
                            (b.publicationDate = function (e) {
                                return (e = fb(
                                    this.l,
                                    e.element,
                                    "datePublished"
                                ))
                                    ? qk(e)
                                    : "";
                            }),
                            (b.pageUrlCanonical = function (e) {
                                e = Md(this.l, e.element, "url");
                                if (e.length) {
                                    var f = e[0];
                                    return f.href ? f.href : bb(e);
                                }
                                return null;
                            }),
                            (b.pageTitle = function (e) {
                                var f = "",
                                    g = e.element,
                                    h = fb(this.l, g, "headline");
                                h && (f += bb(h));
                                (h = fb(this.l, g, "alternativeHeadline")) &&
                                    (f += " " + bb(h));
                                "" === f &&
                                    ((h = fb(this.l, g, "name")) ||
                                        (h = fb(this.l, g, "itemReviewed")),
                                    h && (f += bb(h)));
                                3 === e.type &&
                                    (e = nc(
                                        '[itemtype$="schema.org/Question"]',
                                        this.l,
                                        g
                                    )) &&
                                    (e = fb(this.l, e, "text")) &&
                                    (f += bb(e));
                                return f;
                            }),
                            (b.authors = function (e) {
                                var f = this;
                                e = Md(this.l, e.element, "author");
                                return z(function (g) {
                                    var h,
                                        k = ((h = {}), (h.name = ""), h);
                                    /.+schema.org\/(Person|Organization)/.test(
                                        g.getAttribute("itemtype") || ""
                                    ) &&
                                        (h = fb(f.l, g, "name")) &&
                                        (k.name = bb(h));
                                    k.name ||
                                        (k.name =
                                            g.getAttribute("content") ||
                                            Kb(g) ||
                                            g.getAttribute("href"));
                                    return k;
                                }, e);
                            }),
                            b);
                        return d;
                    }
                    Na(c, a);
                    c.prototype.bf = function (b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.Mi(b)) ? this.we[b[1]] : 1;
                    };
                    c.prototype.Ca = function (b) {
                        return b.element && Kb(b.element).length
                            ? a.prototype.Ca.call(this, b)
                            : null;
                    };
                    c.prototype.kc = function () {
                        var b = H(
                            ",",
                            z(function (d) {
                                return '[itemtype$="schema.org/' + d + '"]';
                            }, this.rb["schema.org"])
                        );
                        return hb(b, this.root);
                    };
                    return c;
                })(ch),
                zl = (function (a) {
                    function c(b, d) {
                        var e,
                            f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Db =
                            ((e = {}),
                            (e.chars = function (g) {
                                g = this.La(g);
                                return Kb(g).length;
                            }),
                            (e.authors = function (g) {
                                return this.od(g.data.author);
                            }),
                            (e.pageTitle = function (g) {
                                return this.pc(g.data.title) || "";
                            }),
                            (e.updateDate = function (g) {
                                return this.pc(g.data.modified_time);
                            }),
                            (e.publicationDate = function (g) {
                                return this.pc(g.data.published_time);
                            }),
                            (e.pageUrlCanonical = function (g) {
                                return this.pc(g.data.url);
                            }),
                            (e.rubric = function (g) {
                                return this.od(g.data.section);
                            }),
                            (e.topics = function (g) {
                                return this.od(g.data.tag);
                            }),
                            e);
                        f.Mg = new RegExp(
                            "^(og:)?((" + H("|", f.rb.qf) + "):)?"
                        );
                        return f;
                    }
                    Na(c, a);
                    c.prototype.od = function (b) {
                        var d;
                        return b
                            ? N(b)
                                ? z(function (e) {
                                      var f;
                                      return (
                                          (f = {}),
                                          (f.name = e ? "" + e : null),
                                          f
                                      );
                                  }, b)
                                : [((d = {}), (d.name = b ? "" + b : null), d)]
                            : [];
                    };
                    c.prototype.pc = function (b) {
                        return N(b)
                            ? b.length
                                ? "" + b[0]
                                : null
                            : b
                            ? "" + b
                            : null;
                    };
                    c.prototype.kc = function () {
                        var b = hb(
                            'meta[property="og:type"]',
                            this.l.document.body
                        );
                        return [this.l.document.head].concat(b);
                    };
                    c.prototype.hh = function (b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.La(b);
                        e = hb(
                            "meta[property]",
                            e === this.l.document.head ? e : g
                        );
                        if (e.length)
                            x(function (h) {
                                try {
                                    if (
                                        h.parentNode === g ||
                                        h.parentNode === d.l.document.head
                                    ) {
                                        var k = h
                                                .getAttribute("property")
                                                .replace(d.Mg, ""),
                                            l = bb(h);
                                        f[k]
                                            ? N(f[k])
                                                ? f[k].push(l)
                                                : (f[k] = [f[k], l])
                                            : (f[k] = l);
                                    }
                                } catch (m) {
                                    Pc(d.l, "og.ed", m);
                                }
                            }, e);
                        else return null;
                        return G(f.type, this.rb.qf) ? C(b, { data: f }) : null;
                    };
                    c.prototype.La = function (b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode;
                    };
                    c.prototype.Ca = function (b) {
                        return (b = this.hh(b))
                            ? a.prototype.Ca.call(this, b)
                            : null;
                    };
                    return c;
                })(ch),
                Sd = {};
            yl && (Sd.json_ld = yl);
            dh && ((Sd.schema = dh), (Sd.microdata = dh));
            zl && (Sd.opengraph = zl);
            var $t = A("p.p", function (a, c) {
                    function b(m) {
                        var p = C({}, l);
                        p.Z.da = m;
                        return f(p, c)["catch"](B(a, "s.ww.p"));
                    }
                    var d,
                        e = qi(a, "9", "8");
                    if (
                        !Ha("querySelectorAll", a.document.querySelectorAll) ||
                        !e
                    )
                        return L.resolve();
                    var f = pa(a, "p", c),
                        g = Ja(),
                        h = $c(a, c.id),
                        k = h.C("pai");
                    k && (h.dc("pai"), g.D("pai", k));
                    var l = {
                        J: ((d = {}), (d["wv-type"] = e.type), d),
                        K: g,
                        Z: {},
                    };
                    return na(
                        c,
                        B(a, "ps.s", function (m) {
                            var p;
                            if ((m = n(m, "settings.publisher.schema"))) {
                                dk(c) && (m = "microdata");
                                var q = Sd[m];
                                if (q && e) {
                                    var r = K(c);
                                    q = new q(a, r);
                                    q = new Yt(a, q, e, b, r);
                                    q.start();
                                    Ib(
                                        a,
                                        r,
                                        "ps",
                                        ((p = {}), (p.schema = m), p)
                                    );
                                    return I(q.stop, q);
                                }
                            }
                        })
                    );
                }),
                au = (function () {
                    function a(c, b) {
                        this.type = "0";
                        this.l = c;
                        this.fh = b;
                    }
                    a.prototype.Fa = function (c) {
                        return Bf(wc(I(this.sb, this), c));
                    };
                    a.prototype.sb = function (c, b) {
                        var d = this,
                            e = [],
                            f = this.fh(this.l, b && b.type, c.type);
                        f &&
                            (e = wc(function (g) {
                                return g({ l: d.l, na: c }) || [];
                            }, f));
                        return e;
                    };
                    a.prototype.jb = function (c) {
                        return c.length;
                    };
                    a.prototype.ke = function (c) {
                        return [c];
                    };
                    a.prototype.isEnabled = function () {
                        return !0;
                    };
                    return a;
                })(),
                Al = (function () {
                    function a(c, b, d) {
                        this.Ke = 0;
                        this.Vd = 1;
                        this.Sc = 5e3;
                        this.l = c;
                        this.ja = b;
                        this.Ob = d;
                    }
                    a.prototype.Nc = function () {
                        this.Ke = V(
                            this.l,
                            w(I(this.flush, this), I(this.Nc, this)),
                            this.Sc,
                            "b.f"
                        );
                    };
                    a.prototype.send = function (c, b) {
                        var d = this.Ob(c, b || [], this.Vd);
                        this.Vd += 1;
                        return d;
                    };
                    a.prototype.push = function () {};
                    a.prototype.flush = function () {};
                    return a;
                })(),
                Yn = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.fg = 7500;
                        b.Sc = 3e4;
                        b.Nc();
                        return b;
                    }
                    Na(c, a);
                    c.prototype.push = function (b, d) {
                        var e = this.ja.sb(b, d);
                        wa(this.buffer, e);
                        this.ja.jb(this.buffer) > this.fg && this.flush();
                    };
                    c.prototype.flush = function () {
                        var b = this.buffer;
                        b.length && (this.send(b), (this.buffer = []));
                    };
                    return c;
                })(Al),
                no = /opera mini/i,
                ki = ["phone", "email"],
                Bl =
                    "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(
                        " "
                    ),
                ko = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                lo = [65, 90],
                mo = [97, 122],
                io =
                    "color radio checkbox date datetime-local email month number password range search tel text time url week".split(
                        " "
                    ),
                go = new RegExp("(" + H("|", Bl) + ")", "i"),
                fo = new RegExp("(" + H("|", ki) + ")", "i"),
                rk = ["password", "passwd", "pswd"],
                ho = new RegExp(
                    "(" +
                        H(
                            "|",
                            Bl.concat(
                                "\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                                    " "
                                )
                            )
                        ) +
                        ")",
                    "i"
                ),
                Ya = "metrikaId_" + Math.random(),
                zc = { counter: 0 },
                Zr = v(function () {
                    var a;
                    return (
                        (a = {}),
                        (a.A = 1),
                        (a.ABBR = 2),
                        (a.ACRONYM = 3),
                        (a.ADDRESS = 4),
                        (a.APPLET = 5),
                        (a.AREA = 6),
                        (a.B = 7),
                        (a.BASE = 8),
                        (a.BASEFONT = 9),
                        (a.BDO = 10),
                        (a.BIG = 11),
                        (a.BLOCKQUOTE = 12),
                        (a.BODY = 13),
                        (a.BR = 14),
                        (a.BUTTON = 15),
                        (a.CAPTION = 16),
                        (a.CENTER = 17),
                        (a.CITE = 18),
                        (a.CODE = 19),
                        (a.COL = 20),
                        (a.COLGROUP = 21),
                        (a.DD = 22),
                        (a.DEL = 23),
                        (a.DFN = 24),
                        (a.DIR = 25),
                        (a.DIV = 26),
                        (a.DL = 27),
                        (a.DT = 28),
                        (a.EM = 29),
                        (a.FIELDSET = 30),
                        (a.FONT = 31),
                        (a.FORM = 32),
                        (a.FRAME = 33),
                        (a.FRAMESET = 34),
                        (a.H1 = 35),
                        (a.H2 = 36),
                        (a.H3 = 37),
                        (a.H4 = 38),
                        (a.H5 = 39),
                        (a.H6 = 40),
                        (a.HEAD = 41),
                        (a.HR = 42),
                        (a.HTML = 43),
                        (a.I = 44),
                        (a.IFRAME = 45),
                        (a.IMG = 46),
                        (a.INPUT = 47),
                        (a.INS = 48),
                        (a.ISINDEX = 49),
                        (a.KBD = 50),
                        (a.LABEL = 51),
                        (a.LEGEND = 52),
                        (a.LI = 53),
                        (a.LINK = 54),
                        (a.MAP = 55),
                        (a.MENU = 56),
                        (a.META = 57),
                        (a.NOFRAMES = 58),
                        (a.NOSCRIPT = 59),
                        (a.OBJECT = 60),
                        (a.OL = 61),
                        (a.OPTGROUP = 62),
                        (a.OPTION = 63),
                        (a.P = 64),
                        (a.PARAM = 65),
                        (a.PRE = 66),
                        (a.Q = 67),
                        (a.S = 68),
                        (a.SAMP = 69),
                        (a.SCRIPT = 70),
                        (a.SELECT = 71),
                        (a.SMALL = 72),
                        (a.SPAN = 73),
                        (a.STRIKE = 74),
                        (a.STRONG = 75),
                        (a.STYLE = 76),
                        (a.SUB = 77),
                        (a.SUP = 78),
                        (a.TABLE = 79),
                        (a.TBODY = 80),
                        (a.TD = 81),
                        (a.TEXTAREA = 82),
                        (a.TFOOT = 83),
                        (a.TH = 84),
                        (a.THEAD = 85),
                        (a.TITLE = 86),
                        (a.TR = 87),
                        (a.TT = 88),
                        (a.U = 89),
                        (a.UL = 90),
                        (a.VAR = 91),
                        (a.NOINDEX = 100),
                        a
                    );
                }),
                Wr = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                bu = (function () {
                    var a =
                        "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(
                            " "
                        );
                    return {
                        jj: new RegExp("(" + H("|", a) + ")", "i"),
                        uj: new RegExp(
                            "(" +
                                H(
                                    "|",
                                    a.concat(
                                        "\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                                            ";"
                                        )
                                    )
                                ) +
                                ")",
                            "i"
                        ),
                        hj: /ym-record-keys/i,
                        Wh: "\u2022",
                        rj: 88,
                    };
                })(),
                wk = Vb(u(bu.Wh, Q)),
                od = !0,
                Eg = "",
                Fg = !1,
                Gg = !0,
                Hg = !1,
                co = qa(function (a, c) {
                    var b = D([a, "efv." + c.event], B);
                    c.O = z(w(Q, b), c.O);
                    return c;
                }),
                Cl = v(function (a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent &&
                        !a.opera &&
                        (c.push(Hf), b.push(bs), b.push(cs));
                    a.document.addEventListener
                        ? c.push(uk)
                        : (b.push(tk), d.push(uk));
                    return bo(
                        a,
                        ("onpagehide" in a
                            ? []
                            : [
                                  {
                                      target: a,
                                      type: "window",
                                      event: "beforeunload",
                                      O: [F],
                                  },
                                  {
                                      target: a,
                                      type: "window",
                                      event: "unload",
                                      O: [F],
                                  },
                              ]
                        )
                            .concat([
                                { event: "click", O: [Ue] },
                                { event: "dblclick", O: [Ue] },
                                { event: "mousedown", O: [Ue] },
                                { event: "mouseup", O: [es] },
                                { event: "keydown", O: [fs] },
                                { event: "keypress", O: [gs] },
                                { event: "copy", O: [yk] },
                                { event: "blur", O: c },
                                { event: "focusin", O: b },
                                { event: "focusout", O: d },
                            ])
                            .concat(
                                !a.document.attachEvent || a.opera
                                    ? [
                                          {
                                              target: a,
                                              type: "window",
                                              event: "focus",
                                              O: [ii],
                                          },
                                          {
                                              target: a,
                                              type: "window",
                                              event: "blur",
                                              O: [Hf],
                                          },
                                      ]
                                    : []
                            )
                            .concat(
                                a.document.addEventListener
                                    ? [
                                          { event: "focus", O: [tk] },
                                          { event: "change", O: [vk] },
                                          { event: "submit", O: [Ak] },
                                      ]
                                    : [
                                          {
                                              type: "formInput",
                                              event: "change",
                                              O: [vk],
                                          },
                                          {
                                              type: "form",
                                              event: "submit",
                                              O: [Ak],
                                          },
                                      ]
                            )
                    );
                }),
                $n = v(function (a) {
                    var c = [];
                    Gc(a) &&
                        c.push({
                            target: a,
                            type: "document",
                            event: "mouseleave",
                            O: [hs],
                        });
                    "onpagehide" in a &&
                        c.push({
                            target: a,
                            type: "window",
                            event: "pagehide",
                            O: [
                                function (b) {
                                    b = b.flush;
                                    b();
                                },
                            ],
                        });
                    return c;
                }),
                cu = ["submit", "beforeunload", "unload"],
                du = v(function (a, c) {
                    var b = c(a);
                    return O(
                        function (d, e) {
                            d[e.type + ":" + e.event] = e.O;
                            return d;
                        },
                        {},
                        b
                    );
                }),
                eu = u(Cl, function (a, c, b, d) {
                    return du(c, a)[b + ":" + d] || [];
                }),
                ao = /^\s*function submit\(\)/,
                fu = A("fw.p", function (a, c) {
                    var b;
                    if (!(b = c.Jg || !c.xb)) {
                        var d = J(a),
                            e = !1;
                        b = d.C("hitParam", {});
                        var f = K(c);
                        b[f] &&
                            ((d = d.C("counters", {})),
                            (e = Wd(c.ca) && !d[f]));
                        b[f] = 1;
                        b = e;
                    }
                    if (b) return L.resolve(F);
                    b = new au(a, eu);
                    return Xn(a, c, b, Cl, cu);
                }),
                eh,
                Dl =
                    ((eh = (function (a) {
                        function c(b, d, e, f) {
                            void 0 === f && (f = 0);
                            d = a.call(this, b, d, e) || this;
                            d.te = 0;
                            d.Ab = 0;
                            d.se = 0;
                            d.buffer = [];
                            d.Sc = 2e3;
                            d.$ = md(b);
                            d.Nc();
                            d.se = f;
                            return d;
                        }
                        Na(c, a);
                        c.prototype.Ve = function (b) {
                            return Aa(this.$.ba("ag", b));
                        };
                        c.prototype.Ue = function (b, d) {
                            var e = this;
                            b(
                                $a(B(this.l, "wv2.b.st"), function (f) {
                                    e.send(f, d);
                                })
                            );
                        };
                        c.prototype.zi = function (b, d) {
                            var e = this;
                            la(this.l, this.Ke);
                            var f = Math.ceil(this.ja.jb(d) / 63e4),
                                g = this.ja.ke(d, f);
                            x(function (h, k) {
                                var l,
                                    m = C(
                                        {},
                                        b,
                                        ((l = {}),
                                        (l.data = h),
                                        (l.partNum = k + 1),
                                        (l.end = k + 1 === f),
                                        (l.partsTotal = g.length),
                                        l)
                                    );
                                l = e.ja.Fa([m], !1);
                                e.Ue(l, [m]);
                            }, g);
                            this.Nc();
                        };
                        c.prototype.send = function (b, d) {
                            var e = this;
                            this.$.ba("se", d);
                            return a.prototype.send
                                .call(this, b, d)
                                .then(Q, function () {
                                    e.$.ba("see", d);
                                });
                        };
                        c.We = function (b, d, e, f, g) {
                            c.Vc["" + b + d] ||
                                (this.Vc[d] = new c(
                                    g,
                                    f,
                                    e,
                                    "m" === d ? 31457280 : 0
                                ));
                            return this.Vc[d];
                        };
                        c.prototype.Mh = function () {
                            return this.se && this.te >= this.se;
                        };
                        c.prototype.push = function (b) {
                            var d = this;
                            if (!this.Mh()) {
                                this.$.ba("p", b);
                                var e = this.ja.sb(b),
                                    f = this.ja.jb(e);
                                7e5 < f
                                    ? this.zi(b, e)
                                    : ((e = this.Ve(this.buffer.concat([b]))),
                                      (e = zb(
                                          function (g, h) {
                                              return g + d.ja.jb(d.ja.sb(h));
                                          },
                                          0,
                                          e
                                      )),
                                      this.Ab + e + f >= 7e5 * 0.7 &&
                                          this.flush(),
                                      this.buffer.push(b),
                                      (this.Ab += f));
                            }
                        };
                        c.prototype.F = function (b, d) {
                            this.$.F([b], d);
                        };
                        c.prototype.ga = function (b, d) {
                            this.$.ga([b], d);
                        };
                        c.prototype.flush = function (b) {
                            var d = this.buffer.concat(this.Ve(this.buffer));
                            d.length &&
                                ((this.buffer = []),
                                (this.te += this.Ab),
                                (this.Ab = 0),
                                (b = this.ja.Fa(d, b)),
                                this.Ue(b, d));
                        };
                        return c;
                    })(Al)),
                    (eh.Vc = {}),
                    eh),
                cb = (function () {
                    function a(c, b, d) {
                        this.Qh = "wv2.c";
                        this.pb = [];
                        this.ia = [];
                        this.l = c;
                        this.L = Ff(c, this, d, this.Qh);
                        this.G = b;
                        this.Ra = this.G.kh();
                        this.start = this.L.H(this.start, "st");
                        this.stop = this.L.H(this.stop, "sp");
                    }
                    a.prototype.start = function () {
                        var c = this;
                        this.pb = z(function (b) {
                            var d = b[0],
                                e = b[2];
                            b = I(c.L.H(b[1], d[0]), c);
                            return c.Ra.F(e || c.l, d, b);
                        }, this.ia);
                    };
                    a.prototype.stop = function () {
                        x(ta, this.pb);
                    };
                    a.prototype.Y = function (c) {
                        return this.G.ra().Y(c);
                    };
                    return a;
                })(),
                Vn = ["checkbox", "radio"],
                Wn = /pwd|value|password/i,
                fh = U("location.href"),
                gu = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.oa = { elements: [], attributes: [] };
                        d.index = 0;
                        d.Qd = d.L.H(d.Qd, "o");
                        d.ed = d.L.H(d.ed, "io");
                        d.Tc = d.L.H(d.Tc, "ao");
                        d.Yd = d.L.H(d.Yd, "a");
                        d.Wd = d.L.H(d.Wd, "at");
                        d.Zd = d.L.H(d.Zd, "r");
                        d.Xd = d.L.H(d.Xd, "c");
                        d.ya = new b.MutationObserver(d.Qd);
                        return d;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        this.ya.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0,
                        });
                    };
                    c.prototype.stop = function () {
                        this.ya.disconnect();
                    };
                    c.prototype.Tc = function (b) {
                        var d = b.target,
                            e = b.attributeName,
                            f = b.oldValue;
                        b = d.getAttribute(e);
                        if (b === f) return !1;
                        f = Ob(this.l)(d, this.oa.elements);
                        -1 === f &&
                            ((f = this.oa.elements.push(d) - 1),
                            (this.oa.attributes[f] = {}));
                        this.oa.attributes[f] || (this.oa.attributes[f] = {});
                        this.oa.attributes[f][e] = oe(
                            this.l,
                            d,
                            e,
                            b,
                            this.G.Fb()
                        ).value;
                        return !0;
                    };
                    c.prototype.ed = function (b) {
                        function d(k) {
                            var l = Ob(e.l)(k, f);
                            return -1 === l
                                ? (f.push(k), (k = { md: {} }), g.push(k), k)
                                : g[l];
                        }
                        var e = this,
                            f = [],
                            g = [];
                        x(function (k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                q = k.target,
                                r = k.nextSibling,
                                t = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    if (e.Tc(k)) {
                                        var y = d(q);
                                        y.md[l] ||
                                            (y.md[l] = oe(
                                                e.l,
                                                q,
                                                l,
                                                p,
                                                e.G.Fb()
                                            ).value);
                                    }
                                    break;
                                case "childList":
                                    m &&
                                        x(function (E) {
                                            y = d(E);
                                            y.Se ||
                                                C(y, {
                                                    Se: q,
                                                    Zg: r ? r : void 0,
                                                    $g: t ? t : void 0,
                                                });
                                        }, Ia(m));
                                    break;
                                case "characterData":
                                    (y = d(q)), y.Te || (y.Te = p);
                            }
                        }, b);
                        var h = this.G.ra();
                        x(function (k, l) {
                            h.je(k, g[l]);
                        }, f);
                    };
                    c.prototype.Qd = function (b) {
                        var d = this;
                        if (fh(this.l)) {
                            var e = this.G.stamp();
                            this.ed(b);
                            x(function (f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h && h.length && d.Zd(Ia(h), e);
                                        g && g.length && d.Yd(Ia(g), e);
                                        break;
                                    case "characterData":
                                        d.Xd(k, e);
                                }
                            }, b);
                            this.Wd(e);
                        } else this.stop();
                    };
                    c.prototype.Wd = function (b) {
                        var d = this;
                        x(function (e, f) {
                            var g = d.nc();
                            d.G.R(
                                "mutation",
                                {
                                    index: g,
                                    attributes: d.oa.attributes[f],
                                    target: d.Y(e),
                                },
                                "ac",
                                b
                            );
                        }, this.oa.elements);
                        this.oa.elements = [];
                        this.oa.attributes = [];
                    };
                    c.prototype.Yd = function (b, d) {
                        var e = this,
                            f = this.nc();
                        this.G.ra().rc({
                            nodes: b,
                            Mc: function (g) {
                                g = z(function (h) {
                                    h.node = void 0;
                                    return h;
                                }, g);
                                e.G.R(
                                    "mutation",
                                    { index: f, nodes: g },
                                    "ad",
                                    d
                                );
                            },
                        });
                    };
                    c.prototype.Zd = function (b, d) {
                        var e = this,
                            f = this.nc(),
                            g = this.G.ra(),
                            h = z(function (k) {
                                var l = g.removeNode(k);
                                Qi(e.l, k, function (m) {
                                    g.removeNode(m);
                                });
                                return l;
                            }, b);
                        this.G.R("mutation", { index: f, nodes: h }, "re", d);
                    };
                    c.prototype.Xd = function (b, d) {
                        var e = this.nc();
                        this.G.R(
                            "mutation",
                            {
                                value: b.textContent,
                                target: this.Y(b),
                                index: e,
                            },
                            "tc",
                            d
                        );
                    };
                    c.prototype.nc = function () {
                        var b = this.index;
                        this.index += 1;
                        return b;
                    };
                    return c;
                })(cb),
                hu = (function () {
                    function a(c, b) {
                        var d = this;
                        this.ic = [];
                        this.eb = [];
                        this.Pd = 1;
                        this.He = this.Kf = 0;
                        this.xa = {};
                        this.Sa = {};
                        this.Eb = [];
                        this.Ad = function (f) {
                            return d.eb.length ? G(f, d.eb) : !1;
                        };
                        this.removeNode = function (f) {
                            var g = d.Y(f),
                                h = Ma(f);
                            if (h)
                                return (
                                    (h = "NR:" + h.toLowerCase()),
                                    d.Ad(h) &&
                                        d.$.ba(h, { data: { node: f, id: g } }),
                                    g
                                );
                        };
                        this.ib = function (f) {
                            var g = Ma(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                return h
                                    ? h
                                    : ((h = d.Pd),
                                      (f.__ym_indexer = h),
                                      (d.Pd += 1),
                                      (g = "NA:" + g.toLowerCase()),
                                      d.Ad(g) &&
                                          d.$.ba(g, {
                                              data: { node: f, id: h },
                                          }),
                                      h);
                            }
                            return null;
                        };
                        this.Ef = function () {
                            d.Kf = V(d.l, w(I(d.aa, d, !1), d.Ef), 50, "i.s");
                        };
                        this.Cf = function () {
                            d.He = V(d.l, w(I(d.Yc, d, !1), d.Cf), 50, "i.g");
                        };
                        this.oi = function (f) {
                            null === d.xa[f] && delete d.xa[f];
                            null === d.Sa[f] && delete d.Sa[f];
                        };
                        this.l = c;
                        var e = Ff(c, this, "i");
                        this.$ = md(c);
                        this.options = b;
                        this.start = e.H(this.start, "st");
                        this.stop = e.H(this.stop, "sp");
                        this.Y = e.H(this.Y, "i");
                        this.je = e.H(this.je, "o");
                        this.rc = e.H(this.rc, "a");
                        this.removeNode = e.H(this.removeNode, "r");
                        this.aa = e.H(this.aa, "s");
                        this.Yc = e.H(this.Yc, "g");
                    }
                    a.prototype.je = function (c, b) {
                        var d = this.ib(c);
                        Wa(d) || (this.Sa[d] && this.Y(c), (this.Sa[d] = b));
                    };
                    a.prototype.F = function (c, b, d) {
                        c = "" + b + c;
                        this.eb.push(c);
                        this.Ad(c) || this.eb.push(c);
                        this.$.F([c], d);
                    };
                    a.prototype.ga = function (c, b, d) {
                        var e = "" + b + c;
                        this.eb = ha(function (f) {
                            return f !== e;
                        }, this.eb);
                        this.$.ga([e], d);
                    };
                    a.prototype.start = function () {
                        this.Ef();
                        this.Cf();
                    };
                    a.prototype.stop = function () {
                        this.flush();
                        la(this.l, this.He);
                        la(this.l, this.Kf);
                        this.ic = [];
                        this.Eb = [];
                        this.xa = {};
                        this.Sa = {};
                    };
                    a.prototype.rc = function (c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = { Mc: c.Mc, result: [], sc: 0, nodes: d };
                        this.ic.push(f);
                        x(function (g) {
                            Qi(b.l, g, function (h) {
                                var k = b.ib(h);
                                Wa(k) ||
                                    (d.push(h),
                                    b.xa[k] && b.Y(h),
                                    (b.xa[k] = { node: h, event: f, Ki: e }),
                                    (e += 1));
                            });
                        }, c.nodes);
                    };
                    a.prototype.Y = function (c) {
                        if (c === this.l) return 0;
                        var b = this.ib(c),
                            d = this.xa[b],
                            e = this.dh(b),
                            f = e.Se,
                            g = e.md,
                            h = e.Te,
                            k = e.Zg,
                            l = e.$g;
                        if (d) {
                            e = d.event;
                            d = d.Ki;
                            var m = Hs(this.l) === c;
                            k = k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.ib(k) : null;
                            p = !m && p ? this.ib(p) : null;
                            m = this.l;
                            k = this.options;
                            f =
                                this.ib(f || c.parentNode || c.parentElement) ||
                                0;
                            var q = g,
                                r = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 === q && (q = {});
                            void 0 === r && (r = Ma(c));
                            if (Y(r)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    prev: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: r.toLowerCase(),
                                    node: c,
                                };
                                if (Lf(c)) {
                                    if (
                                        ((h = Sn(c, h)),
                                        (g.attributes = {}),
                                        (g.content = h))
                                    )
                                        if ((c = nd(m, c)))
                                            (g.content =
                                                "" !== ab(h) ? jo(m, h) : h),
                                                (g.hidden = c);
                                } else
                                    (h = Tn(m, c, k, q, r)),
                                        (m = h.mb),
                                        (g.attributes = h.pg),
                                        m && (g.hidden = m),
                                        c.namespaceURI &&
                                            gb(c.namespaceURI, "svg") &&
                                            (g.namespace = c.namespaceURI);
                                c = g;
                            }
                            if (Y(c)) return;
                            this.xa[b] = null;
                            this.Eb.push(b);
                            e.result[d] = c;
                            e.sc += 1;
                            e.nodes.length === e.sc && e.Mc(e.result);
                        }
                        return b;
                    };
                    a.prototype.flush = function () {
                        this.aa(!0);
                    };
                    a.prototype.Yc = function () {
                        if (this.Eb.length) {
                            var c = dc(this.Eb, this.oi),
                                b = ng(this.l, 30);
                            c(b);
                        }
                    };
                    a.prototype.aa = function (c) {
                        var b = this;
                        if (fh(this.l)) {
                            var d = ea(this.xa);
                            d = O(
                                function (e, f) {
                                    b.xa[f] && e.push(b.xa[f].node);
                                    return e;
                                },
                                [],
                                d
                            );
                            d = dc(d, this.Y);
                            c = c ? Pj(F) : Nj(this.l, 20);
                            d(c);
                            this.ic = ha(function (e) {
                                return e.sc !== e.result.length;
                            }, this.ic);
                        }
                    };
                    a.prototype.dh = function (c) {
                        if (Wa(c)) return {};
                        var b = this.Sa[c];
                        return b
                            ? ((this.Sa[c] = null), this.Eb.push(c), b)
                            : {};
                    };
                    return a;
                })(),
                iu = ["input", "change", "keyup", "paste", "cut"],
                ju = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.hd = !1;
                        b.Ac = b.L.H(b.Ac, "ii");
                        b.Bc = b.L.H(b.Bc, "ir");
                        b.Hc = b.L.H(b.Hc, "ri");
                        b.Qc = b.L.H(b.Qc, "ur");
                        b.yd = b.L.H(b.yd, "ce");
                        b.qc = b.L.H(b.qc, "vc");
                        return b;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        var b = this,
                            d = this.G.ra();
                        this.hd = this.xg();
                        x(function (e) {
                            e = e.toLowerCase();
                            d.F(e, "NA:", I(b.Ac, b));
                            d.F(e, "NR:", I(b.Bc, b));
                        }, Kf);
                        this.pb = [
                            this.Ra.F(this.l.document, iu, I(this.yd, this)),
                            function () {
                                x(function (e) {
                                    e = e.toLowerCase();
                                    d.ga(e, "NA:", b.Ac);
                                    d.ga(e, "NR:", b.Bc);
                                }, Kf);
                                x(b.Qc, ea(b.inputs));
                            },
                        ];
                    };
                    c.prototype.Qc = function (b) {
                        var d = this.inputs[b];
                        if (d) {
                            if (this.hd) {
                                var e = d.ji;
                                d = d.element;
                                e &&
                                    this.l.Object.defineProperty(
                                        d,
                                        this.oc(d),
                                        e
                                    );
                            }
                            delete this.inputs[b];
                        }
                    };
                    c.prototype.Bc = function (b) {
                        b && this.Qc(b.data.id);
                    };
                    c.prototype.Ac = function (b) {
                        b && ((b = b.data), this.Hc(b.node, b.id));
                    };
                    c.prototype.oc = function (b) {
                        return Me(b) ? "checked" : "value";
                    };
                    c.prototype.yd = function (b) {
                        if ((b = b.target)) {
                            var d = this.oc(b);
                            this.qc(b[d], b);
                        }
                    };
                    c.prototype.qc = function (b, d) {
                        var e = this.Y(d),
                            f = this.inputs[e];
                        if (!f && ((f = this.Hc(f, e)), !f)) return;
                        e = f.zg;
                        var g = f.value,
                            h = this.oc(d),
                            k =
                                !b ||
                                G(typeof b, ["string", "boolean", "number"]),
                            l = this.G.Fb().Fd;
                        k &&
                            b !== g &&
                            ((g = oe(this.l, d, h, b, this.G.Fb()).value),
                            e
                                ? this.G.R(
                                      "event",
                                      { target: this.Y(d), checked: !!b },
                                      "change"
                                  )
                                : ((e = Rc(this.l, d, l)),
                                  (l = e.fb),
                                  this.G.R(
                                      "event",
                                      {
                                          value: g,
                                          hidden: e.ob && !l,
                                          target: this.Y(d),
                                      },
                                      "change"
                                  )),
                            (f.value = b));
                    };
                    c.prototype.Hc = function (b, d) {
                        var e = this;
                        if (
                            !Df(b) ||
                            "__ym_input_override_test" ===
                                b.getAttribute("class") ||
                            this.inputs[d]
                        )
                            return null;
                        var f = Me(b),
                            g = this.oc(b),
                            h = { element: b, zg: f, value: b[g] };
                        this.inputs[d] = h;
                        this.hd &&
                            Sb(this.l, function () {
                                var k =
                                        e.l.Object.getOwnPropertyDescriptor(
                                            Object.getPrototypeOf(b),
                                            g
                                        ) || {},
                                    l =
                                        e.l.Object.getOwnPropertyDescriptor(
                                            b,
                                            g
                                        ) || {},
                                    m = C({}, k, l);
                                if (Ha("((set)?(\\s?" + g + ")?)?", m.set)) {
                                    try {
                                        e.l.Object.defineProperty(
                                            b,
                                            g,
                                            C({}, m, {
                                                configurable: !0,
                                                set: function (p) {
                                                    e.qc(p, this);
                                                    return m.set.call(this, p);
                                                },
                                            })
                                        );
                                    } catch (p) {}
                                    h.ji = m;
                                }
                            });
                        return h;
                    };
                    c.prototype.xg = function () {
                        var b = !0,
                            d = qb(this.l)("input");
                        try {
                            d = qb(this.l)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e =
                                    this.l.Object.getOwnPropertyDescriptor(
                                        Object.getPrototypeOf(d),
                                        "value"
                                    ) || {},
                                f =
                                    this.l.Object.getOwnPropertyDescriptor(
                                        d,
                                        "value"
                                    ) || {},
                                g = C({}, e, f);
                            this.l.Object.defineProperty(
                                d,
                                "value",
                                C({}, g, {
                                    configurable: !0,
                                    set: function (h) {
                                        return g.set.call(d, h);
                                    },
                                })
                            );
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1);
                        } catch (h) {
                            b = !1;
                        }
                        return b;
                    };
                    return c;
                })(cb),
                ku = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Xa = {
                            width: 0,
                            height: 0,
                            pageHeight: 0,
                            pageWidth: 0,
                            orientation: 0,
                        };
                        b.ia.push([["resize"], b.hi]);
                        b.ia.push([["orientationchange"], b.bi]);
                        return b;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        a.prototype.start.call(this);
                        this.Hf();
                    };
                    c.prototype.hi = function () {
                        var b = this.vd();
                        this.Ah(b) && ((this.Xa = b), this.If(b));
                    };
                    c.prototype.bi = function () {
                        var b = this.vd();
                        this.Xa.orientation !== b.orientation &&
                            ((this.Xa = b), this.vi(b));
                    };
                    c.prototype.jf = function (b) {
                        return (
                            !b.height ||
                            !b.width ||
                            !b.pageWidth ||
                            !b.pageHeight
                        );
                    };
                    c.prototype.Ah = function (b) {
                        return (
                            b.height !== this.Xa.height ||
                            b.width !== this.Xa.width
                        );
                    };
                    c.prototype.vd = function () {
                        var b = this.G.hb(),
                            d = Nc(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.ud();
                        return {
                            width: e,
                            height: d,
                            pageWidth: b ? b.scrollWidth : 0,
                            pageHeight: b ? b.scrollHeight : 0,
                            orientation: this.G.hb().mh(),
                        };
                    };
                    c.prototype.vi = function (b) {
                        var d;
                        void 0 === d && (d = this.G.stamp());
                        this.G.R(
                            "event",
                            {
                                width: b.width,
                                height: b.height,
                                orientation: b.orientation,
                            },
                            "deviceRotation",
                            d
                        );
                    };
                    c.prototype.If = function (b, d) {
                        void 0 === d && (d = this.G.stamp());
                        this.G.R(
                            "event",
                            {
                                width: b.width,
                                height: b.height,
                                pageWidth: b.pageWidth,
                                pageHeight: b.pageHeight,
                            },
                            "resize",
                            d
                        );
                    };
                    c.prototype.Hf = function () {
                        var b = this.vd();
                        this.jf(b)
                            ? V(this.l, I(this.Hf, this), 300)
                            : (this.jf(this.Xa) && (this.Xa = b),
                              this.If(b, 0));
                    };
                    return c;
                })(cb),
                Ye = (function () {
                    function a(c) {
                        this.index = 0;
                        this.ub = {};
                        this.l = c;
                    }
                    a.prototype.bc = function (c, b, d) {
                        void 0 === d && (d = {});
                        var e = ka(this.l),
                            f = this.index;
                        this.index += 1;
                        this.ub[f] = {
                            Ia: 0,
                            Nb: !1,
                            Xg: c,
                            Uc: [],
                            Kd: e(da),
                        };
                        var g = this;
                        return function () {
                            var h = Oa(arguments),
                                k = d.Qe && !g.ub[f].Nb,
                                l = g.ub[f];
                            la(g.l, l.Ia);
                            l.Uc = h;
                            l.Nb = !0;
                            var m = e(da);
                            if (k || m - l.Kd >= b)
                                c.apply(void 0, h), (l.Kd = m);
                            l.Ia = V(
                                g.l,
                                function () {
                                    k || (c.apply(void 0, h), (l.Kd = e(da)));
                                    l.Nb = !1;
                                    l.Uc = [];
                                },
                                b,
                                "th"
                            );
                        };
                    };
                    a.prototype.flush = function () {
                        var c = this;
                        x(function (b) {
                            var d = c.ub[b],
                                e = d.Ia,
                                f = d.Xg,
                                g = d.Uc;
                            d.Nb &&
                                ((c.ub[b].Nb = !1),
                                f.apply(void 0, g),
                                la(c.l, e));
                        }, ea(this.ub));
                    };
                    return a;
                })(),
                lu = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Uf = [];
                        d.Be = { x: 0, y: 0 };
                        d.Aa = new Ye(b);
                        d.Ec = d.L.H(d.Ec, "o");
                        d.ia.push([["scroll"], d.ii]);
                        return d;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        a.prototype.start.call(this);
                        this.G.R(
                            "event",
                            {
                                x: Math.max(this.l.scrollX, 0),
                                y: Math.max(this.l.scrollY, 0),
                                page: !0,
                                target: -1,
                            },
                            "scroll",
                            0
                        );
                    };
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        this.Aa.flush();
                    };
                    c.prototype.ii = function (b) {
                        if (this.G.hb().ff()) this.Ec(b);
                        else {
                            var d = b.target,
                                e = ha(function (f) {
                                    return f[0] === d;
                                }, this.Uf).pop();
                            e
                                ? (e = e[1])
                                : ((e = this.Aa.bc(I(this.Ec, this), 100, {
                                      Qe: !0,
                                  })),
                                  this.Uf.push([d, e]));
                            e(b);
                        }
                    };
                    c.prototype.Ec = function (b) {
                        var d = this.G.hb().ud();
                        b = b.target;
                        var e = this.Gb(b);
                        d = d === b || this.l === b || this.l.document === b;
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Be.x === f && this.Be.y === e) return;
                            this.Be = { x: f, y: e };
                        }
                        this.G.R(
                            "event",
                            { x: f, y: e, page: d, target: d ? -1 : this.Y(b) },
                            "scroll"
                        );
                    };
                    c.prototype.Gb = function (b) {
                        var d = { left: 0, top: 0 };
                        if (!b) return d;
                        if (b.window === b)
                            return {
                                top: b.scrollY || 0,
                                left: b.scrollX || 0,
                            };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || ((b = this.G.hb().ud()), b)
                            ? G(b, [f, h])
                                ? {
                                      top: b.scrollTop || g.scrollY,
                                      left: b.scrollLeft || g.scrollX,
                                  }
                                : {
                                      top: b.scrollTop || 0,
                                      left: b.scrollLeft || 0,
                                  }
                            : d;
                    };
                    return c;
                })(cb),
                mu = ["mousemove", "mousedown", "mouseup", "click"],
                nu = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ia.push([mu, d.ai]);
                        d.Aa = new Ye(b);
                        d.zc = d.L.H(d.zc, "n");
                        d.Ei = d.L.H(d.Aa.bc(I(d.zc, d), 100), "t");
                        return d;
                    }
                    Na(c, a);
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        this.Aa.flush();
                    };
                    c.prototype.ai = function (b) {
                        var d = null;
                        try {
                            d = b.type;
                        } catch (e) {
                            return;
                        }
                        "mousemove" === d ? this.Ei(b) : this.zc(b);
                    };
                    c.prototype.zc = function (b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 === e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.G.R(
                            "event",
                            { x: e || 0, y: f || 0, target: this.Y(b) },
                            d
                        );
                    };
                    return c;
                })(cb),
                ou = ["focus", "blur"],
                pu = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([ou, b.Yg]);
                        return b;
                    }
                    Na(c, a);
                    c.prototype.Yg = function (b) {
                        var d = b.target;
                        b = b.type;
                        this.G.R(
                            "event",
                            {
                                target: this.Y(
                                    d === this.l
                                        ? this.l.document.documentElement
                                        : d
                                ),
                            },
                            b
                        );
                    };
                    return c;
                })(cb),
                qu = v(function (a) {
                    var c = ma(a.getSelection, "getSelection");
                    return c ? I(c, a) : F;
                }),
                ru = w(qu, ta),
                su = [
                    "mousemove",
                    "touchmove",
                    "mousedown",
                    "touchdown",
                    "select",
                ],
                tu = /text|search|password|tel|url/,
                uu = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Bd = !1;
                        b.ia.push([su, b.yh]);
                        return b;
                    }
                    Na(c, a);
                    c.prototype.yh = function (b) {
                        var d = this.G,
                            e = b.type,
                            f = b.which;
                        b = b.target;
                        if ("mousemove" !== e || 1 === f)
                            (e = "select" === e ? this.qh(b) : this.oh()) &&
                            e.start !== e.end
                                ? ((this.Bd = !0), d.R("event", e, "selection"))
                                : this.Bd &&
                                  ((this.Bd = !1),
                                  d.R(
                                      "event",
                                      { start: 0, end: 0 },
                                      "selection"
                                  ));
                    };
                    c.prototype.oh = function () {
                        var b = ru(this.l);
                        if (b && 0 < b.rangeCount) {
                            b =
                                b.getRangeAt(0) ||
                                this.l.document.createRange();
                            var d = this.Y(b.startContainer),
                                e = this.Y(b.endContainer);
                            if (!Y(d) && !Y(e))
                                return {
                                    start: b.startOffset,
                                    end: b.endOffset,
                                    startNode: d,
                                    endNode: e,
                                };
                        }
                    };
                    c.prototype.qh = function (b) {
                        if (tu.test(b.type || "")) {
                            var d = this.Y(b);
                            if (!Y(d))
                                return {
                                    start: b.selectionStart,
                                    end: b.selectionEnd,
                                    target: d,
                                };
                        }
                    };
                    return c;
                })(cb),
                El = {
                    focus: "windowfocus",
                    blur: "windowblur",
                    tj: "windowfocus",
                    sj: "windowblur",
                },
                vu = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        Y(b.l.document.hidden)
                            ? Y(b.l.document.msHidden)
                                ? Y(b.l.document.webkitHidden) ||
                                  (b.visibility = {
                                      hidden: "webkitHidden",
                                      event: "webkitvisibilitychange",
                                  })
                                : (b.visibility = {
                                      hidden: "msHidden",
                                      event: "msvisibilitychange",
                                  })
                            : (b.visibility = {
                                  hidden: "hidden",
                                  event: "visibilitychange",
                              });
                        b.xd = b.L.H(b.xd, "fbe");
                        b.zd = b.L.H(b.zd, "she");
                        return b;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        this.pb = [
                            this.Ra.F(
                                this.l,
                                this.visibility
                                    ? [this.visibility.event]
                                    : ["focus", "blur"],
                                I(this.xd, this)
                            ),
                        ];
                        "onpagehide" in this.l &&
                            this.pb.push(
                                this.Ra.F(
                                    this.l,
                                    ["pageshow", "pagehide"],
                                    I(this.zd, this),
                                    null
                                )
                            );
                    };
                    c.prototype.zd = function (b) {
                        this.G.R("event", {}, El[b.type]);
                    };
                    c.prototype.xd = function (b) {
                        this.G.R(
                            "event",
                            {},
                            El[
                                this.visibility
                                    ? this.l.document[this.visibility.hidden]
                                        ? "blur"
                                        : "focus"
                                    : b.type
                            ]
                        );
                    };
                    return c;
                })(cb),
                wu = [
                    "touchmove",
                    "touchstart",
                    "touchend",
                    "touchcancel",
                    "touchforcechange",
                ],
                xu = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Pc = {};
                        d.scrolling = !1;
                        d.Ff = 0;
                        d.ia.push([["scroll"], d.ui, d.l.document]);
                        d.ia.push([wu, d.Gi, d.l.document]);
                        d.Aa = new Ye(b);
                        d.Jb = d.L.H(d.Jb, "nh");
                        d.Fi = d.L.H(
                            d.Aa.bc(d.Jb, d.G.hb().ff() ? 0 : 50, { Qe: !0 }),
                            "th"
                        );
                        return d;
                    }
                    Na(c, a);
                    c.prototype.ui = function () {
                        var b = this;
                        this.scrolling = !0;
                        la(this.l, this.Ff);
                        this.Ff = V(
                            this.l,
                            function () {
                                b.scrolling = !1;
                            },
                            150
                        );
                    };
                    c.prototype.Gi = function (b) {
                        var d = this,
                            e =
                                "touchcancel" === b.type ||
                                "touchend" === b.type;
                        b.changedTouches &&
                            0 < b.changedTouches.length &&
                            x(function (f) {
                                var g = d.sh(f);
                                f.__ym_touch_id = g;
                                e && delete d.Pc[f.identifier];
                            }, Ia(b.changedTouches));
                        "touchmove" === b.type
                            ? this.scrolling
                                ? this.Jb(b)
                                : this.Fi(b, this.G.stamp())
                            : this.Jb(b);
                    };
                    c.prototype.sh = function (b) {
                        this.Pc[b.identifier] || (this.Pc[b.identifier] = ci());
                        return this.Pc[b.identifier];
                    };
                    c.prototype.Jb = function (b, d) {
                        void 0 === d && (d = this.G.stamp());
                        var e = b.type,
                            f = z(function (g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force,
                                };
                            }, Ia(b.changedTouches));
                        0 < f.length &&
                            this.G.R(
                                "event",
                                { touches: f, target: this.Y(b.target) },
                                e,
                                d
                            );
                    };
                    return c;
                })(cb),
                yu = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([["load"], b.$h, b.l.document]);
                        return b;
                    }
                    Na(c, a);
                    c.prototype.$h = function (b) {
                        b = b.target;
                        "IMG" === Ma(b) &&
                            b.getAttribute("srcset") &&
                            this.G.R(
                                "mutation",
                                {
                                    target: this.Y(b),
                                    attributes: { src: b.currentSrc },
                                },
                                "ac"
                            );
                    };
                    return c;
                })(cb),
                zu = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.cg = 1;
                        d.Aa = new Ye(b);
                        d.Wb = d.L.H(d.Wb, "z");
                        return d;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        if (this.cf()) {
                            a.prototype.start.call(this);
                            this.Wb();
                            var b = this.Ra.F(
                                n(this.l, "visualViewport"),
                                ["resize"],
                                this.Aa.bc(this.Wb, 10)
                            );
                            this.pb.push(b);
                        }
                    };
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        this.Aa.flush();
                    };
                    c.prototype.Wb = function () {
                        var b = this.cf();
                        b && b !== this.cg && ((this.cg = b), this.wi(b));
                    };
                    c.prototype.cf = function () {
                        var b = Yd(this.l);
                        return b ? b[2] : null;
                    };
                    c.prototype.wi = function (b) {
                        var d = Tf(this.l);
                        this.G.R("event", { x: d.x, y: d.y, level: b }, "zoom");
                    };
                    return c;
                })(cb),
                Td,
                Ze = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete",
                },
                Fl = {
                    super: 1,
                    ej: 2,
                    alt: 3,
                    shift: 4,
                    Aj: 5,
                    delete: 6,
                    cj: 6,
                },
                Au = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                Gl =
                    ((Td = {}),
                    (Td["1"] = {
                        91: "&#8984;",
                        93: "&#8984;",
                        224: "&#8984;",
                        18: "&#8997;",
                        17: "&#8963;",
                        16: "&#8679;",
                        9: "&#8677;",
                        8: "&#9003;",
                        46: "&#9003;",
                    }),
                    (Td["2"] = {
                        91: "&#xff;",
                        93: "&#xff;",
                        224: "&#xff;",
                        18: "Alt",
                        17: "Ctrl",
                        16: "Shift",
                        9: "Tab",
                        8: "Backspace",
                        46: "Delete",
                    }),
                    (Td.Sh = {
                        32: "SPACEBAR",
                        37: "&larr;",
                        38: "&uarr;",
                        39: "&rarr;",
                        40: "&darr;",
                        13: "Enter",
                    }),
                    Td),
                Bu = /flash/,
                Cu = /ym-disable-keys/,
                Du = /^&#/,
                Eu = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.kb = {};
                        d.Ma = 0;
                        d.Da = [];
                        d.Tf = [];
                        d.ec = 0;
                        d.yf = 0;
                        d.ia.push([["keydown"], d.uh]);
                        d.ia.push([["keyup"], d.vh]);
                        d.lg =
                            -1 !== jc(n(b, "navigator.appVersion") || "", "Mac")
                                ? "1"
                                : "2";
                        d.xc = d.L.H(d.xc, "v");
                        d.kd = d.L.H(d.kd, "ec");
                        d.Lc = d.L.H(d.Lc, "sk");
                        d.rd = d.L.H(d.rd, "gk");
                        d.le = d.L.H(d.le, "sc");
                        d.Vb = d.L.H(d.Vb, "cc");
                        d.reset = d.L.H(d.reset, "r");
                        d.Ic = d.L.H(d.Ic, "rs");
                        return d;
                    }
                    Na(c, a);
                    c.prototype.uh = function (b) {
                        if (this.xc(b) && !this.Kh(b)) {
                            var d = b.keyCode;
                            b.repeat ||
                                this.kb[d] ||
                                ((this.kb[b.keyCode] = !0),
                                Ze[b.keyCode] && !this.Ma
                                    ? ((this.Ma += 1),
                                      this.le(b),
                                      this.reset(300))
                                    : this.Ma
                                    ? (this.ug(), this.ae(b), this.kd())
                                    : (this.reset(), this.ae(b)));
                        }
                    };
                    c.prototype.vh = function (b) {
                        if (this.xc(b)) {
                            var d = b.keyCode,
                                e = Ze[b.keyCode];
                            this.kb[b.keyCode] && (this.kb[d] = !1);
                            e && this.Ma && ((this.Ma = 0), (this.kb = {}));
                            1 === this.Da.length &&
                                ((b = this.Da[0]),
                                G(b.keyCode, Au) &&
                                    (this.Lc([b], !0), this.reset()));
                            this.Da = ha(w(U("keyCode"), Ba(d), Fc), this.Da);
                            la(this.l, this.ec);
                        }
                    };
                    c.prototype.xc = function (b) {
                        var d = this.l.document.activeElement;
                        d =
                            d &&
                            "OBJECT" === d.nodeName &&
                            Bu.test(d.getAttribute("type") || "");
                        b = b.target;
                        if (!b) return !d;
                        b =
                            "INPUT" === b.nodeName &&
                            "password" === b.getAttribute("type") &&
                            Cu.test(b.className);
                        return !d && !b;
                    };
                    c.prototype.kd = function () {
                        this.Tf = this.Da.slice(0);
                        la(this.l, this.ec);
                        this.ec = V(
                            this.l,
                            u(this.Tf, I(this.Lc, this)),
                            0,
                            "e.c"
                        );
                    };
                    c.prototype.Lc = function (b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.rd(b);
                            this.G.R("event", { keystrokes: e }, "keystroke");
                        }
                    };
                    c.prototype.rd = function (b) {
                        var d = this;
                        b = z(function (e) {
                            e = e.keyCode;
                            var f = Ze[e],
                                g = d.lh(e);
                            return {
                                id: e,
                                key: g,
                                isMeta: !!f && Du.test(g),
                                modifier: f,
                            };
                        }, b);
                        return te(function (e, f) {
                            return (
                                (Fl[e.modifier] || 100) -
                                (Fl[f.modifier] || 100)
                            );
                        }, b);
                    };
                    c.prototype.lh = function (b) {
                        return (
                            Gl[this.lg][b] || Gl.Sh[b] || String.fromCharCode(b)
                        );
                    };
                    c.prototype.ae = function (b) {
                        G(b, this.Da) || this.Da.push(b);
                    };
                    c.prototype.le = function (b) {
                        this.ae(b);
                        this.Vb();
                    };
                    c.prototype.Vb = function () {
                        this.Ma ? V(this.l, this.Vb, 100) : (this.Da = []);
                    };
                    c.prototype.ug = function () {
                        la(this.l, this.yf);
                    };
                    c.prototype.reset = function (b) {
                        b
                            ? (this.yf = V(this.l, I(this.Ic, this), b))
                            : this.Ic();
                    };
                    c.prototype.Ic = function () {
                        this.Ma = 0;
                        this.Da = [];
                        this.kb = {};
                        la(this.l, this.ec);
                    };
                    c.prototype.Kh = function (b) {
                        return b.target && "INPUT" === b.target.nodeName
                            ? b.shiftKey ||
                                  32 === b.keyCode ||
                                  "shift" === Ze[b.keyCode]
                            : !1;
                    };
                    return c;
                })(cb),
                Rn = ["sr", "sd", "\u043d"],
                Fu = /allow-same-origin/,
                Gu = (function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Qb = [];
                        d.nd = {};
                        d.Rd = d.L.H(d.Rd, "fi");
                        d.Sd = d.L.H(d.Sd, "sd");
                        d.Td = d.L.H(d.Td, "src");
                        d.ya = new b.MutationObserver(d.Td);
                        return d;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        a.prototype.start.call(this);
                        this.G.Fb().Xb &&
                            this.G.ra().F("iframe", "NA:", I(this.Rd, this));
                        this.G.Ze().pd().F(["sdr"], I(this.Sd, this));
                    };
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        x(function (b) {
                            b.G.stop();
                        }, this.Qb);
                    };
                    c.prototype.Td = function (b) {
                        var d = b.pop().target;
                        if (
                            (b = rb(function (f) {
                                return f.ef === d;
                            }, this.Qb))
                        ) {
                            this.Qb = ha(function (f) {
                                return f.ef !== d;
                            }, this.Qb);
                            var e = b.G.qd();
                            try {
                                b.G.stop();
                            } catch (f) {}
                            this.$b(d, e);
                        }
                    };
                    c.prototype.Rd = function (b) {
                        if (b) {
                            var d = b.data.node;
                            this.ya.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"],
                            });
                            this.$b(d, b.data.id);
                        }
                    };
                    c.prototype.$b = function (b, d) {
                        var e = this;
                        this.Ih(b) &&
                            vc(
                                this.l,
                                b
                            )(
                                $a(F, function () {
                                    var f = e.G.$b(b.contentWindow, d);
                                    e.Qb.push({ G: f, ef: b });
                                })
                            );
                    };
                    c.prototype.Sd = function (b) {
                        var d = this,
                            e = b.frameId;
                        b = b.data;
                        this.nd[e] || (this.nd[e] = { data: [] });
                        var f = this.nd[e];
                        f.data = f.data.concat(b);
                        this.l.isNaN(f.gd) &&
                            x(function (g) {
                                "page" === g.type &&
                                    (f.gd = g.data.recordStamp - d.G.$e());
                            }, f.data);
                        this.l.isNaN(f.gd) ||
                            (this.G.aa(
                                z(function (g) {
                                    g.stamp += f.gd;
                                    g.stamp = d.l.Math.max(0, g.stamp);
                                    return g;
                                }, f.data)
                            ),
                            (f.data = []));
                    };
                    c.prototype.Ih = function (b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") ||
                            (e && !e.match(Fu)) ||
                            (d &&
                                "about:blank" !== d &&
                                (d = Qc(this.l, d).host) &&
                                S(this.l).host !== d)
                            ? !1
                            : n(b, "contentWindow.location.href");
                    };
                    return c;
                })(cb),
                Hu = v(function (a) {
                    var c = n(a, "sessionStorage");
                    if (!c) return null;
                    try {
                        var b = c.getItem("__ym_tab_guid");
                        c = !1;
                        var d = n(a, "opener.sessionStorage");
                        try {
                            c = !!d && b === d.getItem("__ym_tab_guid");
                        } catch (e) {
                            c = !0;
                        }
                        if (!b || c)
                            (b = ci()),
                                a.sessionStorage.setItem("__ym_tab_guid", b);
                        return b;
                    } catch (e) {
                        return null;
                    }
                }),
                Iu = (function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ee = b.L.H(b.ee, "ps");
                        return b;
                    }
                    Na(c, a);
                    c.prototype.start = function () {
                        this.G.ra().rc({
                            nodes: [this.l.document.documentElement],
                            Mc: this.ee,
                        });
                    };
                    c.prototype.ee = function (b) {
                        var d = this.G.nh(),
                            e = d.eh(),
                            f = S(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = Nc(this.l),
                            l = k[0];
                        k = k[1];
                        this.G.R(
                            "page",
                            {
                                content: z(function (m) {
                                    m.node = void 0;
                                    return m;
                                }, b),
                                base: e || "",
                                hasBase: !!e,
                                viewport: { width: l, height: k },
                                title: this.l.document.title,
                                doctype: d.gh() || "",
                                address: this.l.location.href,
                                ua: this.l.navigator.userAgent,
                                referrer: this.l.document.referrer,
                                screen: {
                                    width: this.l.screen.width,
                                    height: this.l.screen.height,
                                },
                                location: { host: g, protocol: h, path: f },
                                recordStamp: this.G.$e(),
                                tabId: Hu(this.l),
                            },
                            "page",
                            0
                        );
                    };
                    return c;
                })(cb),
                Ju = ["addRule", "removeRule", "insertRule", "deleteRule"],
                gh = [
                    [
                        (function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this;
                                b.ab = {};
                                b.Rb = {};
                                b.Ge = 0;
                                b.Cc = b.L.H(b.Cc, "a");
                                b.tb = b.L.H(b.tb, "sr");
                                b.Dc = b.L.H(b.Dc, "r");
                                b.aa = b.L.H(b.aa, "d");
                                return b;
                            }
                            Na(c, a);
                            c.prototype.start = function () {
                                var b = this.G.ra();
                                b.F("style", "NA:", this.Cc);
                                b.F("style", "NR:", this.Dc);
                                this.aa();
                            };
                            c.prototype.stop = function () {
                                var b = this;
                                a.prototype.stop.call(this);
                                var d = this.G.ra();
                                d.ga("style", "NA:", this.Cc);
                                d.ga("style", "NR:", this.Dc);
                                this.aa();
                                la(this.l, this.Ge);
                                x(function (e) {
                                    b.ab[e].sheet && b.Bf(b.ab[e].sheet);
                                }, ea(this.ab));
                                this.ab = {};
                            };
                            c.prototype.aa = function () {
                                var b = this;
                                x(function (d) {
                                    var e = d[0];
                                    d = d[1];
                                    if (d.length) {
                                        for (
                                            var f = [],
                                                g = d[0].stamp,
                                                h = [],
                                                k = 0;
                                            k < d.length;
                                            k += 1
                                        ) {
                                            var l = d[k],
                                                m = l.stamp;
                                            delete l.stamp;
                                            m <= g + 50
                                                ? f.push(l)
                                                : (h.push(f),
                                                  (g = m),
                                                  (f = [l]));
                                        }
                                        f.length && h.push(f);
                                        h.length &&
                                            x(function (p) {
                                                b.G.R(
                                                    "event",
                                                    {
                                                        target: Ga(e),
                                                        changes: p,
                                                    },
                                                    "stylechange",
                                                    g
                                                );
                                            }, h);
                                        delete b.Rb[e];
                                    }
                                }, Ea(this.Rb));
                                this.Ge = V(this.l, this.aa, 100);
                            };
                            c.prototype.tb = function (b, d, e, f, g) {
                                void 0 === f && (f = "");
                                void 0 === g && (g = -1);
                                this.Rb[b] || (this.Rb[b] = []);
                                this.Rb[b].push({
                                    op: d,
                                    style: f,
                                    index: g,
                                    stamp: e,
                                });
                            };
                            c.prototype.ki = function (b, d) {
                                var e = this,
                                    f = b.addRule,
                                    g = b.removeRule,
                                    h = b.insertRule,
                                    k = b.deleteRule;
                                M(f) &&
                                    (b.addRule = function (l, m, p) {
                                        e.tb(
                                            d,
                                            "a",
                                            e.G.stamp(),
                                            l + "{" + m + "}",
                                            p
                                        );
                                        return f.call(b, l, m, p);
                                    });
                                M(g) &&
                                    (b.removeRule = function (l) {
                                        e.tb(d, "r", e.G.stamp(), "", l);
                                        return g.call(b, l);
                                    });
                                M(h) &&
                                    (b.insertRule = function (l, m) {
                                        e.tb(d, "a", e.G.stamp(), l, m);
                                        return h.call(b, l, m);
                                    });
                                M(k) &&
                                    (b.deleteRule = function (l) {
                                        e.tb(d, "r", e.G.stamp(), "", l);
                                        return k.call(b, l);
                                    });
                            };
                            c.prototype.Bf = function (b) {
                                var d = this;
                                x(function (e) {
                                    var f = d.l.CSSStyleSheet.prototype[e];
                                    M(f) && (b[e] = I(f, b));
                                }, Ju);
                            };
                            c.prototype.Qg = function (b) {
                                try {
                                    return b.cssRules || b.rules;
                                } catch (d) {
                                    return null;
                                }
                            };
                            c.prototype.Cc = function (b) {
                                var d = b.data;
                                b = d.id;
                                d = d.node;
                                if (
                                    d.sheet &&
                                    !d.getAttribute("src") &&
                                    !d.innerText
                                ) {
                                    var e = d.sheet,
                                        f = this.Qg(e);
                                    if (f && f.length) {
                                        for (
                                            var g = [], h = 0;
                                            h < f.length;
                                            h += 1
                                        )
                                            g.push({
                                                style: f[h].cssText,
                                                index: h,
                                                op: "a",
                                            });
                                        this.G.R(
                                            "event",
                                            { changes: g, target: b },
                                            "stylechange"
                                        );
                                    }
                                    this.ki(e, b);
                                    this.ab[b] = d;
                                }
                            };
                            c.prototype.Dc = function (b) {
                                b = b.data.id;
                                var d = this.ab[b];
                                d &&
                                    (delete this.ab[b],
                                    d.sheet && this.Bf(d.sheet));
                            };
                            return c;
                        })(cb),
                        "ss",
                    ],
                    [ju, "in"],
                    [gu, "mu"],
                    [ku, "r"],
                    [lu, "sc"],
                    [nu, "mo"],
                    [pu, "f"],
                    [uu, "se"],
                    [vu, "wf"],
                    [xu, "t"],
                    [yu, "src"],
                    [zu, "z"],
                    [Eu, "ks"],
                ];
            gh.push([Gu, "if"]);
            gh.push([Iu, "pa"]);
            var Ku = v(function (a) {
                    var c = a.document;
                    return {
                        ud: function () {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b =
                                0 === mb(c.compatMode, "CSS1")
                                    ? c.documentElement
                                    : c.body;
                            return n(c, "documentElement.scrollHeight") >=
                                n(c, "body.scrollHeight")
                                ? b
                                : null;
                        },
                        mh: function () {
                            var b = a.screen;
                            if (!b) return 0;
                            var d = rb(u(b, n), [
                                "orientation",
                                "mozOrientation",
                                "msOrientation",
                            ]);
                            return n(b, d + ".angle") || 0;
                        },
                        pj: u(a, ob),
                        ff: u(a, se),
                        oj: u(a, Ig),
                    };
                }),
                Lu = (function () {
                    function a(c, b) {
                        var d = this;
                        this.Ib = 0;
                        this.fd = [];
                        this.Hb = null;
                        this.ta = this.Sb = this.Rf = !1;
                        this.recordStamp = 0;
                        this.stopped = !1;
                        this.nh = function () {
                            return d.page;
                        };
                        this.qd = function () {
                            return d.Ib;
                        };
                        this.$e = function () {
                            return d.recordStamp;
                        };
                        this.kh = function () {
                            return d.Ra;
                        };
                        this.Ze = function () {
                            return d.Hb;
                        };
                        this.ra = function () {
                            return d.Cd;
                        };
                        this.stamp = function () {
                            return d.qe
                                ? d.l.Math.max(d.qe(da) - d.recordStamp, 0)
                                : 0;
                        };
                        this.Fb = function () {
                            return d.options;
                        };
                        this.hb = function () {
                            return d.qg;
                        };
                        this.R = function (f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            f = d.jh(f, g, h, k);
                            d.aa(f);
                        };
                        this.jh = function (f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            return {
                                type: f,
                                data: g,
                                stamp: k,
                                frameId: d.Ib,
                                event: h,
                            };
                        };
                        this.aa = function (f) {
                            f = N(f) ? f : [f];
                            d.Rf && !d.Sb
                                ? d.ta
                                    ? ((f = z(function (g) {
                                          return g.frameId
                                              ? g
                                              : C(g, { frameId: d.Ib });
                                      }, f)),
                                      d.Ze().Jf(f))
                                    : d.Ob(f)
                                : (d.fd = d.fd.concat(f));
                        };
                        this.l = c;
                        var e = Ff(c, this, "R");
                        this.me = e.H(this.me, "s");
                        this.aa = e.H(this.aa, "sd");
                        e = J(c);
                        e.C("wv2e") && Ud();
                        e.D("wv2e", !0);
                        this.options = b;
                        this.Ra = ja(c);
                        this.Cd = new hu(this.l, b);
                        this.qg = Ku(c);
                        this.Ie = z(function (f) {
                            return new f[0](c, d, f[1]);
                        }, gh);
                        this.Fh();
                        this.page = Pn(this.l);
                        this.me();
                    }
                    a.prototype.start = function (c) {
                        this.Rf = !0;
                        this.Ob = c;
                        this.Gf();
                    };
                    a.prototype.stop = function () {
                        this.stopped ||
                            ((this.stopped = !0),
                            fh(this.l) &&
                                (x(function (c) {
                                    return c.stop();
                                }, this.Ie),
                                this.Cd.stop(),
                                this.Hb && this.Hb.stop(),
                                this.ta || this.R("event", {}, "eof")));
                    };
                    a.prototype.$b = function (c, b) {
                        var d = new a(c, C({}, this.options, { frameId: b }));
                        d.start(F);
                        return d;
                    };
                    a.prototype.Fh = function () {
                        var c = this;
                        this.ta = !!this.options.frameId;
                        this.Ib = this.options.frameId || 0;
                        this.Sb = !this.ta;
                        var b = this.options.Yf || [];
                        b.push(S(this.l).host);
                        this.Hb = Qn(this.l, this, b);
                        b = this.Hb.pd();
                        ob(this.l)
                            ? this.Sb &&
                              b.F(["i"], function (d) {
                                  c.ta = d.ta;
                                  c.Sb = !1;
                                  d.frameId && (c.Ib = d.frameId);
                                  c.Gf();
                              })
                            : (this.Sb = this.ta = !1);
                    };
                    a.prototype.Gf = function () {
                        var c = Qe(this.fd);
                        this.aa(c);
                    };
                    a.prototype.me = function () {
                        this.qe = $f(this.l);
                        this.recordStamp = this.qe(da);
                        x(function (c) {
                            c.start();
                        }, this.Ie);
                        this.Cd.start();
                    };
                    return a;
                })(),
                Mu = (function () {
                    return function (a, c, b) {
                        var d = this;
                        this.Wc = this.Kb = !1;
                        this.Wa = [];
                        this.mf = [];
                        this.Le = [];
                        this.send = function (e, f, g) {
                            e = d.sender(e, d.Fg);
                            f && g && e.then(f, g);
                            return e;
                        };
                        this.oe = function (e, f, g) {
                            return new L(function (h, k) {
                                e.push([f, h, k, g]);
                            });
                        };
                        this.zh = function () {
                            d.Wa = te(function (g, h) {
                                return g[3].partNum - h[3].partNum;
                            }, d.Wa);
                            var e = O(
                                    function (g, h, k) {
                                        h = h[3];
                                        return g && k + 1 === h.partNum;
                                    },
                                    !0,
                                    d.Wa
                                ),
                                f = !!d.Wa[d.Wa.length - 1][3].end;
                            return e && f;
                        };
                        this.ld = function (e) {
                            nh(
                                d.l,
                                e.slice(),
                                function (f) {
                                    d.send(f[0], f[1], f[2]);
                                },
                                20,
                                "s.w2.sf.fes"
                            );
                            Qe(e);
                        };
                        this.Wg = function () {
                            d.Wc || ((d.Wc = !0), d.ld(d.mf), d.ld(d.Le));
                        };
                        this.yg = function (e) {
                            return O(
                                function (f, g) {
                                    var h = "page" === g.type && !g.frameId,
                                        k =
                                            "eof" === g.data.type ||
                                            "eof" === g.event,
                                        l = h && !!g.partNum;
                                    return {
                                        bd: f.bd || l,
                                        $c: f.$c || h,
                                        Zc: f.Zc || k,
                                    };
                                },
                                { $c: !1, Zc: !1, bd: !1 },
                                e
                            );
                        };
                        this.xh = function (e, f, g) {
                            g
                                ? ((e = d.oe(d.Wa, e, f[0])),
                                  d.zh() && (d.ld(d.Wa), (d.Kb = !0)))
                                : ((d.Kb = !0), (e = d.send(e)));
                            return e;
                        };
                        this.af = function (e, f, g) {
                            var h;
                            f = {
                                J:
                                    ((h = {}),
                                    (h["wv-part"] = "" + g),
                                    (h["wv-type"] = d.xi),
                                    h),
                                K: Ja(),
                                Z: { da: f },
                            };
                            e && f.K.D("bt", 1);
                            return f;
                        };
                        this.Og = function (e, f, g) {
                            e = d.af(!1, e, g);
                            return d.Kb ? d.send(e) : d.oe(d.Le, e, f);
                        };
                        this.Th = function (e, f, g) {
                            e = d.af(!0, e, g);
                            if (d.Kb) return d.send(e);
                            var h = d.yg(f);
                            g = h.$c;
                            var k = h.Zc;
                            h = h.bd;
                            var l;
                            g && (l = d.xh(e, f, h));
                            d.Wc
                                ? g || (l = d.send(e))
                                : (g || (l = d.oe(d.mf, e, f)),
                                  (d.Kb || k) && d.Wg());
                            return l;
                        };
                        this.l = a;
                        this.xi = b;
                        this.sender = pa(a, "W", c);
                        this.Fg = c;
                    };
                })(),
                Hl = v(
                    function (a) {
                        var c = J(a),
                            b = c.C("isEU");
                        if (Y(b)) {
                            var d = Ga(qe(a, "is_gdpr") || "");
                            if (G(d, [0, 1])) c.D("isEU", d), (b = !!d);
                            else if (
                                ((a = Ua(a).C("wasSynced")),
                                (a = n(a, "params.eu")))
                            )
                                c.D("isEU", a), (b = !!a);
                        }
                        return b;
                    },
                    function (a) {
                        return J(a).C("isEU");
                    }
                ),
                Af = A("i.e", Hl),
                Nu = A("i.ep", function (a) {
                    Hl(a);
                }),
                Ou = A("w2", function (a, c) {
                    function b() {
                        h = !0;
                    }
                    var d = J(a),
                        e = K(c);
                    if (
                        !c.xb ||
                        ie(a) ||
                        !a.MutationObserver ||
                        !Ha("Element", a.Element)
                    )
                        return F;
                    Ha("MutationObserver", a.MutationObserver) ||
                        oc(a, e).warn("w2mo");
                    var f = Ca(function (k, l) {
                            na(c, l)["catch"](k);
                        }),
                        g = vc(a)(Mg(D([a, c], Nn)))(
                            Zk(function (k) {
                                return new Lu(a, k);
                            })
                        ),
                        h = !1;
                    fr([g, f])(
                        $a(B(a, "wv2.R.c"), function (k) {
                            var l = k[0];
                            k = k[1];
                            if (!h) {
                                b = I(l.stop, l);
                                var m = d.C("wv2Counter");
                                if (!ei(a, k) || m) b();
                                else if (
                                    (d.D("wv2Counter", e),
                                    d.D("stopRecorder", b),
                                    (k = qi(a, "7", "6")))
                                ) {
                                    m = new Mu(a, c, k.type);
                                    var p = Dl.We(e, "m", I(m.Th, m), k, a),
                                        q = Dl.We(e, "e", I(m.Og, m), k, a);
                                    "onpagehide" in a
                                        ? ja(a).F(
                                              a,
                                              ["pagehide"],
                                              function (t) {
                                                  t.persisted
                                                      ? (p.flush(!0),
                                                        q.flush(!0))
                                                      : b();
                                              },
                                              null
                                          )
                                        : ja(a).F(
                                              a,
                                              ["beforeunload", "unload"],
                                              b
                                          );
                                    k = On();
                                    m = k.Yh;
                                    q.F("ag", k.og);
                                    q.F("p", m);
                                    p.F("see", function (t) {
                                        var y = !1;
                                        x(function (E) {
                                            "page" === E.type && (y = !0);
                                        }, t);
                                        y &&
                                            (h ||
                                                q.push({
                                                    type: "event",
                                                    event: "fatalError",
                                                    data: {
                                                        code: "invalid-snapshot",
                                                        Pg: "p.s.f",
                                                        stack: "",
                                                    },
                                                }),
                                            b());
                                    });
                                    var r = Vb(function (t) {
                                        "eof" === n(t, "data.type") ||
                                        "eof" === t.event
                                            ? (q.push(t),
                                              p.push(t),
                                              q.flush(!0),
                                              p.flush(!0))
                                            : ("event" === t.type ? q : p).push(
                                                  t
                                              );
                                    });
                                    V(a, b, 864e5);
                                    Sb(a, function () {
                                        var t, y;
                                        tb(
                                            a,
                                            ((t = {}),
                                            (t.counterKey = e),
                                            (t.name = "webvisor"),
                                            (t.data =
                                                ((y = {}), (y.version = 2), y)),
                                            t)
                                        );
                                        l.start(r);
                                    });
                                }
                            }
                        })
                    );
                    return function () {
                        return b();
                    };
                }),
                Pu = A("w2.cs", function (a, c) {
                    var b,
                        d = K(c);
                    Xf(a, d, ((b = {}), (b.webvisor = !!c.xb), b));
                }),
                Qu = ["rt", "mf"],
                zf = v(Ic, K),
                Zh = w(ld, fc),
                Ru = vb("isp", function (a, c) {
                    na(c, function (b) {
                        var d = rb(function (h) {
                            return n(b, "settings." + h);
                        }, Qu);
                        if (d && Nd(a)) {
                            var e = he(b) && !ce(a),
                                f = zf(c);
                            C(f, { Lb: d, status: e ? 3 : 4 });
                            if (!e) {
                                e = Jn(a, c, d);
                                var g = function (h) {
                                    f.status = h;
                                };
                                return ("mf" === d ? Ln : Kn)(a, c, e)
                                    .then(u(1, g))
                                    ["catch"](u(2, g));
                            }
                        }
                    })["catch"](B(a, "l.isp"));
                }),
                Il = A("fbq.o", function (a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function () {
                            var g = Oa(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h;
                        };
                        C(e, d);
                        b && x(c, b);
                        a.fbq = e;
                    } else var f = V(a, D([a, c].concat(Ia(d && d.queue)), Il), 1e3, "fbq.d");
                    return I(la, null, a, f);
                }),
                dd,
                Gb,
                ed,
                hh =
                    ((dd = {}),
                    (dd.add_to_wishlist = "add-to-wishlist"),
                    (dd.begin_checkout = "begin-checkout"),
                    (dd.generate_lead = "submit-lead"),
                    (dd.add_payment_info = "add-payment-info"),
                    dd),
                ih =
                    ((Gb = {}),
                    (Gb.AddToCart = "add-to-cart"),
                    (Gb.Lead = "submit-lead"),
                    (Gb.InitiateCheckout = "begin-checkout"),
                    (Gb.Purchase = "purchase"),
                    (Gb.CompleteRegistration = "register"),
                    (Gb.Contact = "submit-contact"),
                    (Gb.AddPaymentInfo = "add-payment-info"),
                    (Gb.AddToWishlist = "add-to-wishlist"),
                    (Gb.Subscribe = "subscribe"),
                    Gb),
                Hn =
                    ((ed = {}),
                    (ed["1"] = hh),
                    (ed["2"] = hh),
                    (ed["3"] = hh),
                    (ed["0"] = ih),
                    ed),
                In = [ih.AddToCart, ih.Purchase],
                Su = qa(function (a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && { version: "3", fc: d }))
                        a: {
                            if (N(c) || Ra(c))
                                if (
                                    ((b = Oa(c)),
                                    (d = b[1]),
                                    "event" === b[0] && d)
                                ) {
                                    b = { version: "2", fc: d };
                                    break a;
                                }
                            b = void 0;
                        }
                    b ||
                        (b = (b = n(c, "ecommerce")) && {
                            version: "1",
                            fc: H(",", ea(b)),
                        });
                    b && a(b);
                }),
                Tu = A("ag.e", function (a, c) {
                    if ("0" === c.ca) {
                        var b = [],
                            d = B(a, "ag.s", D([ta, b], x));
                        na(c, function (e) {
                            if (
                                n(e, "settings.auto_goals") &&
                                Fa(a, c) &&
                                (e = ze(a, c, "autogoal").reachGoal)
                            ) {
                                e = D([e, c.jd], Gn);
                                var f = Su(e);
                                e = D([a, e], Fn);
                                b.push(Il(a, e));
                                b.push(
                                    Ti(a, "dataLayer", function (g) {
                                        g.ya.F(f);
                                    })
                                );
                            }
                        });
                        return d;
                    }
                }),
                Uu = /[^\d.,]/g,
                Vu = /[.,]$/,
                Dn = A("ep.pp", function (a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(Uu, "").replace(Vu, "");
                        var d = "0" === b[b.length - 1];
                        for (
                            var e = b.length;
                            0 < e && !(3 < b.length - e + 1 && d);
                            --e
                        ) {
                            var f = b[e - 1];
                            if (G(f, [",", "."])) {
                                d = f;
                                break a;
                            }
                        }
                        d = "";
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(ee(b[0]) + "." + ee(d));
                    d = Math.pow(10, 8) - 0.01;
                    a.isNaN(b)
                        ? (b = 0)
                        : ((b = a.Math.min(b, d)), (b = a.Math.max(b, 0)));
                    return b;
                }),
                Wu = [
                    [["EUR", "\u20ac"], "978"],
                    [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"],
                    [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"],
                    [
                        "\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(
                            " "
                        ),
                        "398",
                    ],
                    [["GBP", "\u00a3", "UKL"], "826"],
                    [
                        "RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(
                            " "
                        ),
                        "643",
                    ],
                ],
                Xu = v(function (a) {
                    return new RegExp(H("|", a), "i");
                }),
                Yu = A("ep.cp", function (a) {
                    if (!a) return "643";
                    var c = Cs(a);
                    return (a = rb(function (b) {
                        return Xu(b[0]).test(c);
                    }, Wu))
                        ? a[1]
                        : "643";
                }),
                Zu = v(function () {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k]
                            ? f[l]
                                ? ((h = h.slice(0, -1)), --g)
                                : ((e[l] = b(8)), (f[l] = 1))
                            : ((e[k] = b(8)), (f[k] = 1));
                    }
                    function c() {
                        var k = h + "1";
                        f[h + "0"]
                            ? f[k]
                                ? ((h = h.slice(0, -1)), --g)
                                : ((h += "1"), (f[h] = 1))
                            : ((h += "0"), (f[h] = 1));
                    }
                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l;
                    }
                    for (
                        var d = H(
                                "",
                                Xh(
                                    "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA=="
                                )
                            ),
                            e = {},
                            f = {},
                            g = 1,
                            h = "";
                        g < d.length - 1;

                    )
                        ("0" === b() ? c : a)();
                    return e;
                }),
                An = A("ep.dec", function (a, c) {
                    if (!c || ie(a)) return [];
                    var b = Xh(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== ue(b[0])) return [];
                    b = Zu();
                    f = H("", f);
                    e = ue(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h]; )
                        (g += f[h]),
                            b[g] &&
                                ((d += String.fromCharCode(ue(b[g]))),
                                (g = "")),
                            (h += 1);
                    b = "";
                    for (f = 0; f < d.length; )
                        (e = d.charCodeAt(f)),
                            128 > e
                                ? ((b += String.fromCharCode(e)), f++)
                                : 191 < e && 224 > e
                                ? ((g = d.charCodeAt(f + 1)),
                                  (b += String.fromCharCode(
                                      ((e & 31) << 6) | (g & 63)
                                  )),
                                  (f += 2))
                                : ((g = d.charCodeAt(f + 1)),
                                  (b += String.fromCharCode(
                                      ((e & 15) << 12) |
                                          ((g & 63) << 6) |
                                          (d.charCodeAt(f + 2) & 63)
                                  )),
                                  (f += 3));
                    d = Lb(a, b);
                    return N(d) ? z(Kr, d) : [];
                }),
                Cn = A("ep.ent", function (a, c, b) {
                    a = "" + Xa(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Ra(b)) return "";
                    b = Yh("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b;
                }),
                Jl = w(Wh, Yu),
                Kl = A("ep.ctp", function (a, c, b, d) {
                    var e = Jl(a, b),
                        f = Vh(a, d);
                    Uh(a, c, e, f);
                    Ha("MutationObserver", a.MutationObserver) &&
                        new a.MutationObserver(function () {
                            var g = Jl(a, b),
                                h = Vh(a, d);
                            if (e !== g || f !== h)
                                (e = g), (f = h), Uh(a, c, e, f);
                        }).observe(a.document.body, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0,
                            characterData: !0,
                        });
                }),
                $u = A("ep.chp", function (a, c, b, d, e) {
                    b && yf(a, c);
                    return d || e
                        ? ja(a).F(
                              a.document,
                              ["click"],
                              B(a, "ep.chp.cl", D([a, c, d, e], Bn))
                          )
                        : F;
                }),
                ev = A("ep.i", function (a, c) {
                    if (fe(a))
                        return zn(a, c).then(function (b) {
                            var d = b.Kg,
                                e = d[0],
                                f = d[1],
                                g = d[2],
                                h = d[3],
                                k = d[4],
                                l = d[5],
                                m = d[6],
                                p = d[7],
                                q = d[8],
                                r = d[9],
                                t = d[10],
                                y = d[11],
                                E = d[12],
                                R = d[13],
                                P = d[14],
                                za = d[15];
                            if (!b.isEnabled) return L.resolve(F);
                            var Da = ke(a, e),
                                $b = ke(a, h),
                                Yg = ke(a, m),
                                av = ke(a, q),
                                bv = "" + e + f + g === "" + h + k + l;
                            return new L(function (cv, dv) {
                                vc(a)(
                                    $a(dv, function () {
                                        Da && Kl(a, c, f, g, t, y, E);
                                        $b && !bv && Kl(a, c, k, l, R, P, za);
                                        cv($u(a, c, Yg || av, p, r));
                                    })
                                );
                            });
                        });
                }),
                nn = [
                    "RTCPeerConnection",
                    "mozRTCPeerConnection",
                    "webkitRTCPeerConnection",
                ],
                fv = A("cc.i", function (a, c) {
                    var b = D([a, c], yn);
                    b = D([a, b, 300, void 0], V);
                    na(c, b);
                }),
                gv = u("9-d5ve+.r%7", Q),
                hv = A("ad", function (a, c) {
                    if (!c.Ua) {
                        var b = J(a);
                        if (!b.C("adBlockEnabled")) {
                            var d = function (m) {
                                    G(m, ["2", "1"]) &&
                                        b.D("adBlockEnabled", m);
                                },
                                e = Sc(a),
                                f = e.C("isad");
                            if (f) d(f);
                            else {
                                var g = u("adStatus", b.D),
                                    h = function (m) {
                                        m = m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.D("isad", m, 1200);
                                        return m;
                                    },
                                    k = pa(a, "adb", c);
                                if (!b.C("adStatus")) {
                                    g("process");
                                    var l =
                                        "metrika/a" +
                                        gv().replace(/[^a-v]+/g, "") +
                                        "t.gif";
                                    vn(a, function () {
                                        return k({ ma: { za: l } })
                                            .then(u(!1, h))
                                            ["catch"](u(!0, h));
                                    });
                                }
                            }
                        }
                    }
                }),
                iv = A("pr.p", function (a, c) {
                    var b, d;
                    if (jg(a)) {
                        var e = pa(a, "5", c),
                            f = Ja(((b = {}), (b.pq = 1), (b.ar = 1), b));
                        e(
                            {
                                K: f,
                                J:
                                    ((d = {}),
                                    (d["page-url"] = S(a).href),
                                    (d["page-ref"] =
                                        n(a, "document.referrer") || ""),
                                    d),
                            },
                            c
                        )["catch"](B(a, "pr.p.s"));
                    }
                }),
                Th = !1,
                jv = A("fid", function (a) {
                    var c,
                        b = F;
                    if (!M(a.PerformanceObserver)) return b;
                    var d = J(a);
                    if (d.C("fido")) return b;
                    d.D("fido", !0);
                    var e = new a.PerformanceObserver(
                        B(a, "fid", function (f) {
                            f = f.getEntries()[0];
                            d.D(
                                "fid",
                                a.Math.round(
                                    100 * (f.processingStart - f.startTime)
                                )
                            );
                            b();
                        })
                    );
                    b = function () {
                        return e.disconnect();
                    };
                    try {
                        e.observe(
                            ((c = {}),
                            (c.type = "first-input"),
                            (c.buffered = !0),
                            c)
                        );
                    } catch (f) {}
                    return b;
                }),
                kv = A(
                    "lt.p",
                    vb("lt.p", function (a) {
                        var c;
                        if (Ha("PerformanceObserver", a.PerformanceObserver)) {
                            var b = 0,
                                d = new a.PerformanceObserver(
                                    B(a, "lt.o", function (e) {
                                        e &&
                                            e.getEntries &&
                                            ((e = e.getEntries()),
                                            (b = O(
                                                function (f, g) {
                                                    return f + g.duration;
                                                },
                                                b,
                                                e
                                            )),
                                            Kd(a).D("lt", b));
                                    })
                                );
                            try {
                                d.observe(
                                    ((c = {}),
                                    (c.type = "longtask"),
                                    (c.buffered = !0),
                                    c)
                                );
                            } catch (e) {
                                return;
                            }
                            return function () {
                                return d.disconnect();
                            };
                        }
                    })
                ),
                lv = v(
                    w(U("performance.memory.jsHeapSizeLimit"), La("concat", ""))
                ),
                mv = ["availWidth", "availHeight", "availTop"],
                nv =
                    "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(
                        " "
                    ),
                ov = ["webgl", "experimental-webgl"],
                tn = [-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0],
                vf = u(Pa("ccf"), Ta),
                sn =
                    "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(
                        ";"
                    ),
                Rh =
                    "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(
                        " "
                    ),
                qn =
                    "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(
                        " "
                    ),
                jh = v(function (a, c) {
                    var b = J(a),
                        d = Ua(a),
                        e = [],
                        f = D([a, c, b, d], Hp);
                    td(a) || Ip(a, "14.1") || e.push(D([mn, "pp", ""], f));
                    var g = !ll(a) || tf(a, 68);
                    g && e.push(D([on, "pu", ""], f));
                    !g ||
                        d.Ed ||
                        Nd(a) ||
                        (e.push(D([ln, "zzlc", "na"], f)),
                        e.push(D([kn, "cc", ""], f)));
                    return e.length
                        ? {
                              Ba: function (h, k) {
                                  if (0 === b.C("isEU"))
                                      try {
                                          x(ye, e);
                                      } catch (l) {}
                                  k();
                              },
                              N: function (h, k) {
                                  var l = h.K;
                                  if (l && 0 === b.C("isEU"))
                                      try {
                                          x(Ca(l), e);
                                      } catch (m) {}
                                  k();
                              },
                          }
                        : {};
                }, w(eb, K)),
                pv = w(function (a) {
                    return (a = n(a, "navigator.plugins")) && Ra(a)
                        ? w(
                              Ia,
                              Aa,
                              ks(function (c, b) {
                                  return c.name > b.name ? 1 : 2;
                              }),
                              Vb(Ep)
                          )(a)
                        : "";
                }, we(",")),
                qv = (function (a) {
                    return function (c) {
                        var b = qb(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.Rg;
                        e = e.Hg;
                        try {
                            var g = La("getContext", b);
                            d = z(w(Q, g), e);
                        } catch (h) {
                            return "";
                        }
                        return (g = rb(Q, d)) ? f(c, { canvas: b, vg: g }) : "";
                    };
                })(function () {
                    return { Hg: ov, Rg: fn };
                }),
                dn = ["name", "lang", "localService", "voiceURI", "default"],
                bn = db(/[a-z\u0430-\u044f\u0451,.]/gi),
                rv = A("ice", function (a, c, b) {
                    (c = Fa(a, c)) && (b = Lh(a, b)) && Kh(a, c, b);
                }),
                sv = A("ice", function (a, c, b) {
                    (c = Fa(a, c)) &&
                        (b = Lh(a, b)) &&
                        hj(a, b.Hh).then(D([a, c, b], Kh), B(a, "ice.s"));
                }),
                tv = ["text", "email", "tel"],
                uv = ["cc-", "name", "shipping"],
                vv = A("icei", function (a, c) {
                    if (gl(a)) {
                        var b = !1,
                            d = F,
                            e = F;
                        na(c, function (f) {
                            if (!(Af(a) || n(f, "settings.eu") || b)) {
                                f = n(f, "settings.cf") ? sv : rv;
                                var g = D([a, c], f),
                                    h = function (k) {
                                        return Jf(a, k) ||
                                            !G(k.type, tv) ||
                                            Za(Db, z(u(k.autocomplete, gb), uv))
                                            ? !1
                                            : !0;
                                    };
                                d = Oh(a, "input", ["blur"], g, h);
                                e = Oh(a, "form", ["submit"], function (k) {
                                    var l = k.target;
                                    l &&
                                        ((l = hb("input", l)),
                                        x(function (m) {
                                            h(m) &&
                                                g({
                                                    target: m,
                                                    isTrusted: k.isTrusted,
                                                    Hd: !0,
                                                });
                                        }, l));
                                });
                            }
                        });
                        return function () {
                            b = !0;
                            d();
                            e();
                        };
                    }
                }),
                Jh,
                wv = A("p.ai", function (a, c) {
                    if (td(a) || nf(a))
                        return na(c, function (b) {
                            var d;
                            if ((b = n(b, "settings.sbp")))
                                return Ih(
                                    a,
                                    C({}, b, ((d = {}), (d.c = c.id), d)),
                                    10
                                );
                        });
                }),
                xv =
                    "architecture bitness model platformVersion uaFullVersion fullVersionList".split(
                        " "
                    ),
                Ll = vb("uah", function (a) {
                    if (
                        !Ha(
                            "getHighEntropyValues",
                            n(a, "navigator.userAgentData.getHighEntropyValues")
                        )
                    )
                        return L.reject("0");
                    try {
                        return a.navigator.userAgentData
                            .getHighEntropyValues(xv)
                            .then(
                                function (c) {
                                    if (!ia(c)) throw "2";
                                    return c;
                                },
                                function () {
                                    throw "1";
                                }
                            );
                    } catch (c) {
                        return L.reject("3");
                    }
                }),
                Ml = new RegExp(
                    H(
                        "|",
                        "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(
                            ";"
                        )
                    ).replace(/[./]/g, "\\$&")
                ),
                Vm = v(function (a) {
                    var c = sb(a);
                    return (c = Ml.test(c))
                        ? L.resolve(c)
                        : Ll(a).then(function (b) {
                              try {
                                  return O(
                                      function (d, e) {
                                          return d || Ml.test(e.brand);
                                      },
                                      !1,
                                      b.brands
                                  );
                              } catch (d) {
                                  return !1;
                              }
                          }, u(!1, Q));
                }),
                uc = ["0", "1", "2", "3"],
                Oc = uc[0],
                mf = uc[1],
                yv = uc[2],
                Nl = [
                    "GDPR-ok-view-detailed-0",
                    "GDPR-ok-view-detailed-1",
                    "GDPR-ok-view-detailed-2",
                    "GDPR-ok-view-detailed-3",
                ],
                Gh = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(
                    Nl
                ),
                lf =
                    "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23"
                        .split(" ")
                        .concat(Nl)
                        .concat(["28", "29", "30", "31"]),
                zv = "3 13 14 31 15 16 17 28".split(" "),
                ae = w(Vb(U("ymetrikaEvent.type")), js(tc(lf))),
                Av = {
                    Ph: !0,
                    url: "https://yastatic.net/s3/gdpr/v3/gdpr",
                    sf: "",
                    kf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(
                        " "
                    ),
                },
                Ym = vb("gdpr", function (a, c, b, d, e) {
                    function f(p) {
                        c("10");
                        b.F(Gh, function (q) {
                            var r;
                            q = q.type;
                            l.Mf(((r = {}), (r.type = q), r));
                            p({ value: Hh(q) });
                        });
                    }
                    var g = void 0 === e ? Av : e;
                    e = g.url;
                    var h = g.sf,
                        k = g.Ph;
                    g = an(a, g.kf, d.Wi);
                    var l = de(a, d);
                    if (!l) return L.resolve({ value: Oc, Gd: !0 });
                    if (a._yaGdprLoaded)
                        return new L(function (p) {
                            c("7");
                            f(p);
                        });
                    var m = Lc(a, { src: "" + e + (k ? "" : g) + h + ".js" });
                    return new L(function (p, q) {
                        m
                            ? (c("7"),
                              (m.onerror = function () {
                                  var r;
                                  c("9");
                                  l.Mf(
                                      ((r = {}),
                                      (r.type = "GDPR-ok-view-default"),
                                      r)
                                  );
                                  p(null);
                              }),
                              (m.onload = u(p, f)))
                            : (c("9"), q(Pa("gdp.e")));
                    });
                }),
                bc,
                $m =
                    ((bc = {}),
                    (bc["GDPR-ok"] = "ok"),
                    (bc["GDPR-ok-view-default"] = "ok-default"),
                    (bc["GDPR-ok-view-detailed"] = "ok-detailed"),
                    (bc["GDPR-ok-view-detailed-0"] = "ok-detailed-all"),
                    (bc["GDPR-ok-view-detailed-1"] = "ok-detailed-tech"),
                    (bc["GDPR-ok-view-detailed-2"] =
                        "ok-detailed-tech-analytics"),
                    (bc["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other"),
                    bc),
                Tm =
                    "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(
                        " "
                    ),
                Fh = [],
                Dh = La("push", Fh),
                Sm = v(function (a, c) {
                    var b = c.C("gdpr");
                    return G(b, uc) ? "-" + b : "";
                }),
                Ol = v(xd),
                Bv = v(function () {
                    var a = O(
                        function (c, b) {
                            "ru" !== b && (c[b] = tl + "." + b);
                            return c;
                        },
                        {},
                        tg
                    );
                    x(function (c) {
                        a[c] = c;
                    }, ea(ol));
                    return a;
                }),
                Km = v(function (a) {
                    a = S(a).hostname;
                    return (
                        (a = rb(w(U("1"), is("test"), ub(ta)(a)), Ea(ol))) &&
                        a[0]
                    );
                }),
                Pl = (function (a, c) {
                    return function (b, d) {
                        var e = K(d);
                        e = Bv(e);
                        var f = Im(b, e),
                            g = J(b),
                            h = ob(b);
                        return Nd(b) || Id(b)
                            ? {}
                            : {
                                  N: function (k, l) {
                                      var m = k.K,
                                          p = Bh(b);
                                      m = !(m && m.C("pv"));
                                      if (!p || h || m || !f.length) return l();
                                      if (g.C("startSync")) Ol(b).push(l);
                                      else {
                                          g.D("startSync", !0);
                                          p = D([b, f, F, !1], a);
                                          m = of[0];
                                          if (!m) return l();
                                          m(b)
                                              .then(p)
                                              .then(l, w(sd(l), B(b, c)))
                                              ["catch"](F);
                                      }
                                  },
                              };
                    };
                })(function (a, c, b, d) {
                    var e = ka(a),
                        f = J(a),
                        g = Ua(a);
                    b = Ug(a, "c");
                    var h = Qb(a, b);
                    return zb(
                        function (k, l) {
                            function m() {
                                var r = g.C("synced");
                                f.D("startSync", !1);
                                r && ((r[l.Rh] = p), g.D("synced", r));
                                r = Ol(a);
                                x(ta, r);
                                Qe(r);
                            }
                            var p,
                                q = h({ Z: { ha: ["sync.cook"], Oa: 1500 } }, [
                                    va.Qa +
                                        "//" +
                                        l.Di +
                                        "/sync_cookie_image_check" +
                                        (d ? "_secondary" : ""),
                                ])
                                    .then(function () {
                                        p = e(nb);
                                        m();
                                    })
                                    ["catch"](function () {
                                        p = e(nb) - 1435;
                                        m();
                                    });
                            q = u(q, Q);
                            return k.then(q);
                        },
                        L.resolve(),
                        c
                    )["catch"](B(a, "ctl"));
                }, "sy.c"),
                Hb,
                Gm =
                    ((Hb = {}),
                    (Hb.brands = "chu"),
                    (Hb.architecture = "cha"),
                    (Hb.bitness = "chb"),
                    (Hb.uaFullVersion = "chf"),
                    (Hb.fullVersionList = "chl"),
                    (Hb.mobile = "chm"),
                    (Hb.model = "cho"),
                    (Hb.platform = "chp"),
                    (Hb.platformVersion = "chv"),
                    Hb),
                Dm = v(function (a) {
                    return Ll(a).then(Em, Hm);
                }),
                Cv = vb("ot", function (a, c) {
                    if (Ie(a)) {
                        var b = ja(a);
                        return na(
                            c,
                            B(a, "ot.s", function (d) {
                                if (n(d, "settings.oauth")) {
                                    var e = [],
                                        f = ld(a, c);
                                    e.push(
                                        b.F(
                                            a,
                                            ["message"],
                                            B(a, "ot.m", u(f, Cm))
                                        )
                                    );
                                    vc(a)(
                                        $a(
                                            F,
                                            B(a, "ot.b", function () {
                                                function g(q) {
                                                    var r,
                                                        t = q.href;
                                                    t &&
                                                        Xg(
                                                            t,
                                                            "https://oauth.yandex.ru/"
                                                        ) &&
                                                        !gb(t, "_ym_uid=") &&
                                                        ((t = gb(t, "?")
                                                            ? "&"
                                                            : "?"),
                                                        (q.href +=
                                                            "" +
                                                            t +
                                                            Dc(
                                                                ((r = {}),
                                                                (r._ym_uid = f),
                                                                (r.mc = "v"),
                                                                r)
                                                            )),
                                                        b.F(
                                                            q,
                                                            ["click"],
                                                            B(
                                                                a,
                                                                "ot.click",
                                                                function () {
                                                                    var y =
                                                                        "et=" +
                                                                        l(da);
                                                                    q.href +=
                                                                        "&" + y;
                                                                }
                                                            )
                                                        ));
                                                }
                                                var h,
                                                    k = a.document.body,
                                                    l = ka(a),
                                                    m = hb("a", k);
                                                x(g, m);
                                                if (
                                                    Ha(
                                                        "MutationObserver",
                                                        a.MutationObserver
                                                    )
                                                ) {
                                                    m = new a.MutationObserver(
                                                        B(
                                                            a,
                                                            "ot.m",
                                                            u(function (q) {
                                                                q =
                                                                    q.addedNodes;
                                                                for (
                                                                    var r = 0;
                                                                    r <
                                                                    q.length;
                                                                    r += 1
                                                                ) {
                                                                    var t =
                                                                        q[r];
                                                                    "A" ===
                                                                        t.nodeName &&
                                                                        g(t);
                                                                }
                                                            }, x)
                                                        )
                                                    );
                                                    var p =
                                                        ((h = {}),
                                                        (h.childList = !0),
                                                        (h.subtree = !0),
                                                        h);
                                                    m.observe(k, p);
                                                    e.push(I(m.disconnect, m));
                                                }
                                            })
                                        )
                                    );
                                    return D([ye, e], x);
                                }
                            })
                        );
                    }
                }),
                Dv = A("p.cta", function (a) {
                    vc(a)(
                        $a(F, function () {
                            var c = J(a);
                            if (Am(a.document)) {
                                var b = 0;
                                if ($h(a, ne, "cta")) {
                                    var d = F,
                                        e = function () {
                                            ai(ne, "cta");
                                            d();
                                            la(a, b);
                                        };
                                    d = ja(a).F(
                                        a,
                                        ["message"],
                                        A("p.cta.o", D([a, c, e], Bm))
                                    );
                                    b = V(a, e, 1500);
                                } else c.D("cta.e", "if");
                            } else c.D("cta.e", "ns");
                        })
                    );
                }),
                wh = [
                    "bidResponse",
                    "bidAdjustment",
                    "bidWon",
                    "bidRequested",
                    "bidTimeout",
                ],
                vh = ["adRenderSucceeded", "adRenderFailed"],
                wm = [
                    "cpm",
                    "currency",
                    "netRevenue",
                    "requestTimestamp",
                    "responseTimestamp",
                ],
                vm = sc(wh, vh, ["auctionInit", "auctionEnd"]),
                sa = {},
                Ev = A("pj", function (a, c) {
                    var b,
                        d = Fa(a, c),
                        e = d && d.params;
                    return e
                        ? ((b = {}),
                          (b.pbjs = function (f) {
                              N(f) &&
                                  ((f = ha(
                                      Db,
                                      z(function (g) {
                                          if (
                                              ia(g) &&
                                              g.data &&
                                              g.event &&
                                              ia(g.data)
                                          ) {
                                              var h = n(g, "data.args");
                                              return h
                                                  ? { event: g.event, data: h }
                                                  : g;
                                          }
                                      }, f)
                                  )),
                                  um(f),
                                  xm(a, e));
                          }),
                          b)
                        : F;
                }),
                sm = /(\D\d*)/g,
                tm = v(function () {
                    var a = Rf();
                    return O(
                        function (c, b) {
                            c[a[b]] = b;
                            return c;
                        },
                        {},
                        ea(a)
                    );
                }),
                Fv = A("g.v.e", function (a, c) {
                    return na(
                        c,
                        B(a, "g.v.t", function (b) {
                            var d = Fa(a, c);
                            if (d && (b = n(b, "settings.goal_values"))) {
                                var e = ha(w(U("url"), u(a, nm)), b);
                                if (0 !== e.length) {
                                    b = ja(a);
                                    var f = [];
                                    e = D(
                                        [
                                            a,
                                            function (g) {
                                                var h, k;
                                                return d.params(
                                                    ((h = {}),
                                                    (h.__ym =
                                                        ((k = {}),
                                                        (k.goal_values = g),
                                                        k)),
                                                    h)
                                                );
                                            },
                                            e,
                                        ],
                                        qm
                                    );
                                    f.push(
                                        b.F(
                                            a,
                                            ["click"],
                                            B(a, "g.v.c", D([e], om))
                                        )
                                    );
                                    f.push(
                                        b.F(
                                            a,
                                            ["submit"],
                                            B(a, "g.v.s", D([a, e], pm))
                                        )
                                    );
                                    return D([w(Q, ta), f], x);
                                }
                            }
                        })
                    );
                }),
                $e =
                    "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(
                        " "
                    ),
                gf = {},
                sh = F,
                Gv = v(function (a, c) {
                    sh = c;
                }),
                fd,
                jm =
                    ((fd = {}),
                    (fd.copyFromWindow = function (a, c, b) {
                        if (G(b, $e) || Xg(b, "on")) throw Qa("rwp");
                        c = a[b];
                        if (Z(c) || lc(a, c) || fa(c) || M(c)) return c;
                        if (N(c)) return Jd(c);
                        if (ia(c)) return mm(c);
                    }),
                    (fd.loadScript = function (a, c, b, d, e) {
                        c = M(d)
                            ? ff("ls.ol", function () {
                                  return d.apply(null);
                              })
                            : F;
                        var f = M(e)
                            ? ff("ls.ol", function () {
                                  return e.apply(null);
                              })
                            : void 0;
                        km(a, b, c, f);
                    }),
                    (fd.callFromWindow = function (a, c, b) {
                        for (var d = [], e = 3; e < arguments.length; e++)
                            d[e - 3] = arguments[e];
                        if (G(b, $e)) throw Qa("rwp");
                        e = n(a, b);
                        if (!M(e)) throw Qa("wenf");
                        return e.apply(void 0, d);
                    }),
                    (fd.createArgumentsQueue = function (a, c, b, d) {
                        function e() {
                            for (var g = 0; g < arguments.length; g++);
                            f.push(arguments);
                        }
                        if (
                            0 !== b.length &&
                            0 !== d.length &&
                            !n(a, b) &&
                            !n(a, d)
                        ) {
                            c = b.split(".");
                            d = d.split(".");
                            if (G(c[0], $e) || G(d[0], $e)) throw Qa("rwp");
                            var f = [];
                            th(a, c)[c[c.length - 1]] = e;
                            th(a, d)[d[d.length - 1]] = f;
                            return e;
                        }
                    }),
                    fd),
                Hv = ["ymab", "rcmx", "yaSurvey", "ym_debug"],
                qh = v(function (a) {
                    Gv(a, function (c, b) {
                        Pc(a, "ytm." + c, b);
                    });
                    return function (c) {
                        cm(c) &&
                            x(function (b) {
                                if (N(b) && 1 === b[0]) {
                                    var d = b[1];
                                    G(d, Hv) && ff("p." + d, dm)(a, b);
                                }
                            }, c.code);
                    };
                }),
                Iv = A("y.t.m", function (a, c) {
                    return na(
                        c,
                        B(a, "y.t.t", function (b) {
                            if ((b = n(b, "settings.aytm")))
                                (b = Lb(a, b)), qh(a)(b);
                        })
                    );
                }),
                Jv = A("p.ips", function (a, c) {
                    na(c, function (b) {
                        (n(b, "settings.phchange") ||
                            n(b, "settings.phhide")) &&
                            oh(a, "tag_phone", K(c), b);
                    });
                }),
                Ql = {},
                Rl = v(Ic),
                bm = w(La("exec", /counterID=(\d+)/), U("1")),
                Sl = qa(function (a, c) {
                    var b,
                        d = Rl(a),
                        e = Ia(c),
                        f = e[0],
                        g = e[1],
                        h = e.slice(2);
                    if (g) {
                        e = am(a, f);
                        var k = e[0],
                            l = e[1];
                        e = K(l);
                        d[e] || (d[e] = {});
                        d = d[e];
                        c.Ne ||
                            (Ql[g] &&
                                O(
                                    function (m, p) {
                                        return m || !!p(a, l, h, k);
                                    },
                                    !1,
                                    Ql[g]
                                )) ||
                            ("init" === g
                                ? ((c.Ne = !0),
                                  k
                                      ? Ib(
                                            a,
                                            "" + f,
                                            "dc",
                                            ((b = {}), (b.key = f), b)
                                        )
                                      : (a["yaCounter" + l.id] = new a.Ya[
                                            va.Zb
                                        ](C({}, h[0], l))))
                                : k && k[g] && d.Eh
                                ? (k[g].apply(k, h), (c.Ne = !0))
                                : ((b = d.Qf),
                                  b || ((b = []), (d.Qf = b)),
                                  b.push(wa([f, g], h))));
                    }
                }),
                Zl = A("destruct.e", function (a, c, b) {
                    return function () {
                        var d = J(a),
                            e = c.id;
                        x(function (f, g) {
                            return M(f) && B(a, "dest.fr." + g, f)();
                        }, b);
                        $l(a, K(c));
                        delete d.C("counters")[K(c)];
                        delete a["yaCounter" + e];
                    };
                }),
                gd = J(window);
            gd.Ga("hitParam", {});
            gd.Ga("lastReferrer", window.location.href);
            (function () {
                X.push(function (a, c) {
                    var b;
                    return (
                        (b = {}),
                        (b.firstPartyParams = Ws(a, c)),
                        (b.firstPartyParamsHashed = sq(a, c)),
                        b
                    );
                });
                Od.push("fpp");
                Od.push("fpmh");
            })();
            (function () {
                var a = J(window);
                a.Ga("getCounters", Xs(window));
                hd.push(Ys);
                Kg.push(function (c, b) {
                    b.counters = a.C("getCounters");
                });
            })();
            (function () {
                X.push(function (a, c) {
                    var b;
                    tb(
                        a,
                        ((b = {}),
                        (b.counterKey = K(c)),
                        (b.name = "counter"),
                        (b.data = ck(c)),
                        b)
                    );
                });
            })();
            ya["1"] = kb;
            X.push(Zs);
            ua["1"] = Zb;
            xb(Wf, -1);
            Wb["1"] = [
                [Wf, -1],
                [Ne, 1],
                [He, 2],
                [Pb(), 3],
                [nj, 4],
            ];
            X.push($s);
            X.push(
                A("p.ar", function (a, c) {
                    var b,
                        d = pa(a, "a", c);
                    return (
                        (b = {}),
                        (b.hit = function (e, f, g, h, k, l) {
                            var m,
                                p,
                                q,
                                r = {
                                    J: {},
                                    K: Ja(
                                        ((m = {}), (m.pv = 1), (m.ar = 1), m)
                                    ),
                                };
                            f = ia(f)
                                ? {
                                      title: f.title,
                                      xf: f.referer,
                                      X: f.params,
                                      Ub: f.callback,
                                      l: f.ctx,
                                  }
                                : { title: f, xf: g, X: h, Ub: k, l: l };
                            h = zd(c);
                            g = e || S(a).href;
                            h.url !== g && ((h.ref = h.url), (h.url = e));
                            e = f.xf || h.ref || a.document.referrer;
                            h = mc(
                                a,
                                c,
                                "pv",
                                ((p = {}),
                                (p.id = c.id),
                                (p.url = g),
                                (p.ref = e),
                                p),
                                f.X
                            );
                            p = C(r.M || {}, { X: f.X, title: f.title });
                            r = d(
                                C(r, {
                                    M: p,
                                    J: C(
                                        r.J || {},
                                        ((q = {}),
                                        (q["page-url"] = g),
                                        (q["page-ref"] = e),
                                        q)
                                    ),
                                }),
                                c
                            ).then(h);
                            return Tc(a, "p.ar.s", r, f.Ub || F, f.l);
                        }),
                        b
                    );
                })
            );
            ya.a = kb;
            Wb.a = Xb;
            ua.a = Zb;
            X.push(ze);
            ya.g = kb;
            ua.g = Zb;
            Wb.g = Xb;
            X.push(at);
            X.push(bt);
            Wb.t = Xb;
            ya.t = kb;
            ua.t = Zb;
            X.push(
                A("cl.p", function (a, c) {
                    function b(p, q, r, t) {
                        void 0 === t && (t = {});
                        r
                            ? Be(a, c, {
                                  url: r,
                                  lb: !0,
                                  uc: p,
                                  yc: q,
                                  sender: e,
                                  bg: t,
                              })
                            : h.warn("clel");
                    }
                    var d,
                        e = pa(a, "2", c),
                        f = [],
                        g = K(c),
                        h = oc(a, g),
                        k = B(a, "s.s.tr", u(Fe(a, g), kq));
                    g = {
                        l: a,
                        cb: c,
                        Sg: f,
                        sender: e,
                        lj: J(a),
                        Eg: $c(a, c.id),
                        nj: Cc(a),
                        Ji: u(u(g, We(a)), w(ta, U("trackLinks"))),
                    };
                    g = B(a, "cl.p.c", u(g, hq));
                    g = ja(a).F(a, ["click"], g);
                    c.Wf && k(c.Wf);
                    var l = B(a, "file.clc", D([!0, !1], b)),
                        m = B(a, "e.l.l.clc", D([!1, !0], b));
                    f = B(a, "add.f.e.clc", ct(f));
                    return (
                        (d = {}),
                        (d.file = l),
                        (d.extLink = m),
                        (d.addFileExtension = f),
                        (d.trackLinks = k),
                        (d.u = g),
                        d
                    );
                })
            );
            Wb["2"] = Xb;
            ya["2"] = kb;
            ua["2"] = Zb;
            ya.r = Gd("r");
            ua.r = Ss;
            Va.push(
                A("p.r", function (a, c) {
                    var b = et(a),
                        d = pa(a, "r", c),
                        e = B(a, "rts.p");
                    return na(
                        c,
                        D(
                            [
                                function (f, g) {
                                    var h = { id: g.Dg, ca: g.ca },
                                        k = {
                                            Z: { da: g.li },
                                            K: Ja(g.rg),
                                            J: g.X,
                                            M: { Mb: g.Mb },
                                            ma: { za: g.za },
                                        };
                                    g.Ha && (k.Ha = qf(g.Ha));
                                    h = d(k, h)["catch"](e);
                                    return f.then(u(h, Q));
                                },
                                L.resolve(),
                                b,
                            ],
                            O
                        )
                    )["catch"](e);
                })
            );
            aa(
                "r",
                function (a) {
                    return {
                        N: function (c, b) {
                            var d = c.K,
                                e = void 0 === d ? Ja() : d,
                                f = c.M.Mb,
                                g = yd(a);
                            d = e.C("rqnl", 0) + 1;
                            e.D("rqnl", d);
                            if ((e = n(g, H(".", [f, "browserInfo"]))))
                                (e.rqnl = d), Uf(a);
                            b();
                        },
                        Ba: function (c, b) {
                            Yi(a, c);
                            b();
                        },
                    };
                },
                1
            );
            xb(Ae, 100);
            aa("1", Ae, 100);
            X.push(ft);
            aa("n", Ne, 1);
            aa("n", He, 2);
            aa("n", Pb(), 3);
            aa("n", Ae, 100);
            ya.n = kb;
            ua.n = Zb;
            pc({ Fe: { ea: "accurateTrackBounce" } });
            X.push(gt);
            ya.m = Gd("cm");
            ua.m = fl;
            aa("m", Pb(["u", "v", "vf"]), 1);
            aa("m", Ae, 2);
            pc({ Ag: { ea: "clickmap" } });
            X.push(ht);
            X.push(it);
            X.push(jt);
            X.push(kt);
            (function () {
                X.push(lt);
                Od.push("ecommerce");
                pc({
                    jd: {
                        ea: "ecommerce",
                        Na: function (a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a;
                        },
                    },
                });
            })();
            Va.push(nt);
            X.push(ot);
            Od.push("user_id");
            X.push(pt);
            xb(function (a, c) {
                return {
                    Ba: function (b, d) {
                        var e = Fa(a, c);
                        e = e && e.userParams;
                        var f = (b.M || {}).ze;
                        e && f && e(f);
                        d();
                    },
                };
            }, 0);
            Pe.push("_ym_debug");
            Yc.unshift(st);
            X.push(tt);
            Yc.push(function (a) {
                var c = J(a);
                c.C("i") || (c.D("i", !0), ja(a).F(a, ["message"], u(a, Lp)));
            });
            (function () {
                var a,
                    c =
                        ((a = {}),
                        (a.tp = w(eb, dk, Nb)),
                        (a.tpid = w(eb, vr)),
                        a);
                C(Dd, c);
            })();
            xb(wd, 20);
            aa("n", wd, 20);
            aa("1", wd, 20);
            Yc.unshift(vt);
            Dd.fp = function (a, c, b) {
                if (b.J && b.J.nohit) return null;
                b = J(a).C;
                if (!b("fpe")) return null;
                c = ut(c);
                if (c.Vg) return null;
                b = b("fht", Infinity);
                a: {
                    var d = n(a, "performance.getEntriesByType");
                    if (M(d)) {
                        if (
                            ((a = ha(
                                w(Q, U("name"), Ba("first-contentful-paint")),
                                d.call(a.performance, "paint")
                            )),
                            a.length)
                        ) {
                            a = a[0].startTime;
                            break a;
                        }
                    } else {
                        var e = n(a, "chrome.loadTimes");
                        d = cl(a);
                        if (
                            M(e) &&
                            ((e = e.call(a.chrome)),
                            (e = n(e, "firstPaintTime")),
                            d && e)
                        ) {
                            a = 1e3 * e - d;
                            break a;
                        }
                        if ((a = n(a, "performance.timing.msFirstPaint"))) {
                            a -= d;
                            break a;
                        }
                    }
                    a = void 0;
                }
                return a && b > a ? ((c.Vg = a), Math.round(a)) : null;
            };
            X.push(function (a, c) {
                var b;
                return (
                    (b = {}),
                    (b.ecommerceAdd = A("ecm.a", xt(a, c))),
                    (b.ecommerceRemove = A("ecm.r", yt(a, c))),
                    (b.ecommerceDetail = A("ecm.d", zt(a, c))),
                    (b.ecommercePurchase = A("ecm.p", At(a, c))),
                    b
                );
            });
            (function () {
                var a,
                    c = {};
                c.bu = Gt;
                c.pri = up;
                c.wv = u(2, Q);
                c.ds = xp;
                c.co = function (b) {
                    return pb(J(b).C("jn"));
                };
                c.td = Mt;
                C(
                    c,
                    ((a = {}),
                    (a.iss = w(us, Nb)),
                    (a.hdl = w(vs, Nb)),
                    (a.iia = w(ws, Nb)),
                    (a.cpf = w(Ft, Nb)),
                    (a.ntf = v(function (b) {
                        b = n(b, "Notification.permission");
                        b = "denied" === b ? !1 : "granted" === b ? !0 : null;
                        return Wa(b) ? null : b ? 2 : 1;
                    })),
                    (a.eu = Fb("isEU")),
                    (a.ns = cl),
                    (a.np = function (b) {
                        return Xa(b, 0, 100) ? null : id(Xd(ab(Of(b), 100)));
                    }),
                    a)
                );
                c.pani = Ht;
                c.pci = It;
                c.si = Jt;
                c.gi = Kt;
                C(Dd, c);
            })();
            (function () {
                var a = {};
                a.hc = Fb("hc");
                a.oo = Fb("oo");
                a.pmc = Fb("cmc");
                a.lt = function (c) {
                    var b = Kd(c).C("lt", null);
                    return b ? c.Math.round(100 * b) : b;
                };
                a.re = w(Tq, Nb);
                a.aw = function (c) {
                    c = rb(w(Z, Fc), [
                        c.document.hidden,
                        c.document.msHidden,
                        c.document.webkitHidden,
                    ]);
                    return Z(c) ? null : pb(!c);
                };
                a.rcm = Pt;
                a.yu = function (c) {
                    return (c = $d(c, "").C("yandexuid")) && c.substring(0, 25);
                };
                a.ifc = Fb("ifc");
                a.ifb = Fb("ifb");
                a.ecs = Fb("ecs");
                a.csi = Fb("scip");
                a.cdl = Fb("cdl");
                a.eco = v(sp, w(eb, K));
                a.dss = Fb("dSync");
                a.pis = Fb("pis");
                C(cg, a);
            })();
            ua.er = bd;
            (function (a) {
                try {
                    var c = Ug(a, "er"),
                        b = pp(a, c);
                    Uj.push(function (d, e, f, g) {
                        var h, k, l, m, p;
                        0.01 >= a.Math.random() ||
                            b(
                                ((h = {}),
                                (h[d] =
                                    ((k = {}),
                                    (k[va.bb] =
                                        ((l = {}),
                                        (l[e] =
                                            ((m = {}),
                                            (m[f] = g
                                                ? ((p = {}),
                                                  (p[a.location.href] = g),
                                                  p)
                                                : a.location.href),
                                            m)),
                                        l)),
                                    k)),
                                h)
                            );
                    });
                } catch (d) {}
            })(window);
            (function () {
                cf.push(tp);
                Ge.unshift(op);
                $g.push(function (a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    J(a).D("oo", c);
                });
            })();
            xb(function (a, c) {
                return {
                    N: function (b, d) {
                        var e = b.J,
                            f = b.K;
                        !rl[c.id] &&
                            f.C("pv") &&
                            c.exp &&
                            !e.nohit &&
                            ((e.exp = c.exp), (rl[c.id] = !0));
                        d();
                    },
                };
            }, -99);
            X.push(Qt);
            Wb.e = Xb;
            ya.e = kb;
            ua.e = Zb;
            pc({ exp: { ea: "experiments" } });
            jj.experiments = "ex";
            (function () {
                var a;
                of.push(Rt);
                ya.f = kb;
                C(ua, ((a = {}), (a.f = el), a));
                aa("f", Pb(), 1);
                aa("f", rj, 2);
                aa("f", wd, 20);
            })();
            cf.push(function (a, c) {
                var b = { qa: K(c), dd: Fa(a, c), Vf: ka(a), Nd: Ua(a) },
                    d = b.Vf(nb);
                if (!b.Nd.Ed) {
                    var e = b.Nd.C("ymoo" + b.qa);
                    if (e && 30 > d - e)
                        (b = b.qa),
                            delete J(a).C("counters", {})[b],
                            Ta(Pa("uws"));
                    else na(c, St(b))["catch"](B(a, "d.f"));
                }
            });
            (function () {
                var a,
                    c,
                    b = [Cb];
                C(ua, ((a = {}), (a.s = b), (a.S = b), (a.u = bd), a));
                C(ya, ((c = {}), (c.s = Qb), (c.S = kb), (c.u = Qb), c));
                aa("s");
                aa("u");
                aa("S", Pb(["v", "hid", "u", "vf", "rn"]), 1);
                X.push(A("s", $o));
            })();
            ya["8"] = Qb;
            ua["8"] = [bg];
            dl.push([bg, 0]);
            X.push(
                A("p.us", function (a, c) {
                    return na(c, function (b) {
                        if (n(b, "settings.sbp"))
                            return Ci(a, b, { cb: c, Lb: "8", Ld: "cs" });
                    });
                })
            );
            aa("p", Pb(ah), 1);
            Og(
                "pub",
                function (a, c) {
                    return {
                        N: function (b, d) {
                            pi(a, c, b);
                            d();
                        },
                    };
                },
                1
            );
            ya.p = Wt;
            ua.p = Aa([Bb, Cb]);
            Va.push($t);
            pc({
                xb: { ea: "webvisor", Na: Db },
                Jg: { ea: "disableFormAnalytics", Na: Db },
            });
            aa("4", Pb(ah), 1);
            ya["4"] = ul;
            ua["4"] = Aa([Bb, Cb, Uc]);
            Va.push(fu);
            (function () {
                aa("W", Pb(ah), 1);
                Og("wv", oo, 1);
                ua.W = Aa([Bb, Cb]);
                ya.W = ul;
                Va.push(Ou);
                X.push(Pu);
                pc({ xb: { ea: "webvisor" } });
                pc({
                    Li: { ea: "trustedDomains" },
                    Xb: { ea: "childIframe", Na: Db },
                });
                $g.push(function (a) {
                    J(a).C("stopRecorder", F)();
                });
            })();
            X.push(Ru);
            aa("pi");
            ya.pi = Qb;
            ua.pi = bd;
            Og(
                "w",
                function (a, c) {
                    return {
                        N: function (b, d) {
                            if (b.K) {
                                var e = zf(c),
                                    f = e.status;
                                "rt" === e.Lb &&
                                    f &&
                                    (b.K.D("rt", f),
                                    b.ma || (b.ma = {}),
                                    (b.ma.Bh = 1 === f ? Zh(a, c) + "." : ""));
                            }
                            d();
                        },
                    };
                },
                2
            );
            X.push(Tu);
            X.push(ev);
            ua["6"] = Aa([Bb, Cb]);
            ya["6"] = Qb;
            X.push(fv);
            X.push(Nt);
            (function () {
                Kg.push(function (a, c) {
                    c.informer = wn(a);
                });
            })();
            xb(wf, 6);
            aa("1", wf, 6);
            aa("adb");
            aa("n", wf, 4);
            ua.adb = bd;
            ya.adb = Hj;
            hd.push(hv);
            ua["5"] = Zb;
            ya["5"] = kb;
            Wb["5"] = ha(w(Ad, tc([Ne, He]), Fc), Xb);
            X.push(iv);
            aa("5", wd, 20);
            xb(Sh, 7);
            aa("n", Sh, 6);
            Va.push(jv);
            ya.d = kb;
            aa("d", Pb(["hid", "u", "v", "vf"]), 1);
            ua.d = bd;
            aa(
                "n",
                function (a, c) {
                    return {
                        Ba: function (b, d) {
                            if (!b.M || !b.M.force) {
                                var e = 0.002,
                                    f = c.id === va.jg ? 1 : 0.002,
                                    g,
                                    h,
                                    k,
                                    l,
                                    m;
                                void 0 === e && (e = 1);
                                void 0 === f && (f = 1);
                                var p = ud(a);
                                if (
                                    p &&
                                    M(p.getEntriesByType) &&
                                    ((e = Math.random() > e),
                                    (f = Math.random() > f),
                                    !e || !f)
                                ) {
                                    p = p.getEntriesByType("resource");
                                    for (
                                        var q = {},
                                            r = {},
                                            t = {},
                                            y = ql(),
                                            E = S(a).href,
                                            R = 0;
                                        R < p.length;
                                        R += 1
                                    ) {
                                        var P = p[R],
                                            za = P.name
                                                .replace(pl, "")
                                                .split("?")[0],
                                            Da = fc(za),
                                            $b =
                                                ((g = {}),
                                                (g.dns = Math.round(
                                                    P.domainLookupEnd -
                                                        P.domainLookupStart
                                                )),
                                                (g.tcp = Math.round(
                                                    P.connectEnd -
                                                        P.connectStart
                                                )),
                                                (g.duration = Math.round(
                                                    P.duration
                                                )),
                                                (g.response = Math.round(
                                                    P.responseEnd -
                                                        P.requestStart
                                                )),
                                                g);
                                        "script" !== P.initiatorType ||
                                            e ||
                                            (r[za] = C(
                                                $b,
                                                ((h = {}),
                                                (h.name = P.name),
                                                (h.decodedBodySize =
                                                    P.decodedBodySize),
                                                (h.transferSize = Math.round(
                                                    P.transferSize
                                                )),
                                                h)
                                            ));
                                        (!Ot[Da] && !y[Da]) ||
                                            q[za] ||
                                            f ||
                                            (q[za] = C(
                                                $b,
                                                ((k = {}), (k.pages = E), k)
                                            ));
                                    }
                                    ea(q).length && (t.timings8 = q);
                                    ea(r).length && (t.scripts = r);
                                    if (ea(t).length)
                                        pa(
                                            a,
                                            "d",
                                            c
                                        )(
                                            {
                                                K: Ja(
                                                    ((l = {}),
                                                    (l.ar = 1),
                                                    (l.pv = 1),
                                                    l)
                                                ),
                                                Z: { da: Mb(a, t) || void 0 },
                                                J:
                                                    ((m = {}),
                                                    (m["page-url"] = E),
                                                    m),
                                            },
                                            { id: va.mg, ca: "0" }
                                        )["catch"](B(a, "r.tim.ng2"));
                                }
                            }
                            d();
                        },
                    };
                },
                7
            );
            ua.ci = [Cb];
            ya.ci = Qb;
            Va.push(
                A("p.sci", function (a, c) {
                    return na(c, u(a, un))["catch"](B(a, "ins.cs"));
                })
            );
            X.push(kv);
            Va.push(Et);
            xb(jh, 8);
            aa("f", jh, 3);
            aa("n", jh, 5);
            hd.push(
                (function (a) {
                    return A("fip", function (c) {
                        if (!ll(c) || Id(c)) {
                            var b = Ua(c);
                            if (!b.C("fip")) {
                                var d = w(
                                    Vb(
                                        w(function (e, f) {
                                            return A("fip." + f, e)(c);
                                        }, I(Vr, null))
                                    ),
                                    we("-")
                                )(a);
                                b.D("fip", d);
                            }
                        }
                    });
                })([
                    qv,
                    pv,
                    function (a) {
                        var c = n(a, "ApplePaySession"),
                            b = S(a).protocol;
                        a = c && "https:" === b && !ob(a) ? c : void 0;
                        c = "";
                        if (!a) return c;
                        try {
                            c = "" + a.canMakePayments();
                            b = "";
                            var d = a.supportsVersion;
                            if (M(d))
                                for (var e = 1; 20 >= e; e += 1)
                                    b += d.call(a, e) ? "" + e : "0";
                            return b + c;
                        } catch (f) {
                            return c;
                        }
                    },
                    function (a) {
                        a = n(a, "navigator") || {};
                        return a.doNotTrack || a.msDoNotTrack || "unknown";
                    },
                    function (a) {
                        if ((a = Dt(a)))
                            try {
                                for (var c = [], b = 0; b < ml.length; b += 1) {
                                    var d = a(ml[b]);
                                    c.push(d);
                                }
                                var e = c;
                            } catch (f) {
                                e = [];
                            }
                        else e = [];
                        return e ? H("x", e) : "";
                    },
                    function (a) {
                        var c = void 0;
                        void 0 === c && (c = nv);
                        var b = n(a, "navigator") || {};
                        c = z(u(b, n), c);
                        c = H("x", c);
                        try {
                            var d = n(a, "navigator.getGamepads");
                            var e =
                                (ma(d, "getGamepads") &&
                                    a.navigator.getGamepads()) ||
                                [];
                        } catch (f) {
                            e = [];
                        }
                        return c + "x" + Ra(e);
                    },
                    lv,
                    function (a) {
                        a = n(a, "screen") || {};
                        return H("x", z(u(a, n), mv));
                    },
                    function (a) {
                        return H("x", cn(a) || []);
                    },
                    function (a) {
                        a = pn(a);
                        return N(a) ? H("x", a) : a;
                    },
                    function (a) {
                        return (a = rn(a))
                            ? H(
                                  "x",
                                  z(
                                      D(["", ["matches", "media"]], en),
                                      Aa(xh(a))
                                  )
                              )
                            : "";
                    },
                ])
            );
            xb(function (a) {
                return {
                    N: function (c, b) {
                        var d = c.K,
                            e = Ua(a).C("fip");
                        e && d && (d.D("fip", e), be(c, "fip", pb(e)));
                        b();
                    },
                };
            }, 9);
            aa(
                "h",
                function (a) {
                    return {
                        Ba: function (c, b) {
                            var d = c.ri;
                            Qf(c) && d && J(a).D("isEU", n(d, "settings.eu"));
                            b();
                        },
                    };
                },
                3
            );
            hd.push(Nu);
            Va.push(vv);
            X.push(wv);
            pc({ Vi: { ea: "yaDisableGDPR" }, Wi: { ea: "yaGDPRLang" } });
            Ge.push(function (a, c) {
                return { N: D([a, c], Pm) };
            });
            Pe.push("gdpr");
            Pe.push("gdpr_popup");
            sg.push(function (a, c) {
                var b = Zd(a);
                b = ae(b);
                if (ha(tc(zv), b).length) return !0;
                b = c(a, "gdpr");
                return G(b, [Oc, yv]);
            });
            Ge.push(function (a) {
                return {
                    N: function (c, b) {
                        var d = c.ma || {},
                            e;
                        (e = n(a, "document.referrer"))
                            ? ((e = Qc(a, e).host),
                              (e = ij(e)),
                              (e = tl + "." + (e || Tt)))
                            : (e = ic);
                        c.ma = C(d, { Ch: [e] });
                        b();
                    },
                };
            });
            xb(Pl, 5);
            aa("1", Pl, 6);
            ua.c = bd;
            ya.c = Qb;
            aa("1", Ah, 7);
            xb(Ah, 7);
            Yc.push(A("hcp", yh));
            Va.push(A("p.ot", Cv));
            Va.push(vb("cta", Dv, !0));
            aa(
                "n",
                function (a) {
                    var c = J(a);
                    return {
                        N: function (b, d) {
                            var e = b.M || {},
                                f = c.C("cta"),
                                g = c.C("cta.e");
                            if (f || g) {
                                e.X || (e.X = {});
                                e.X.__ym || (e.X.__ym = {});
                                var h = {};
                                f
                                    ? ((f = z(function (k) {
                                          var l,
                                              m = n(k, "topic");
                                          k = n(k, "version");
                                          return (
                                              (l = {}),
                                              (l.topic = m),
                                              (l.version = k),
                                              l
                                          );
                                      }, f)),
                                      (h.ct = f))
                                    : g && (h["ct.e"] = g);
                                C(e.X.__ym, h);
                                b.M = C(b.M || {}, e);
                            }
                            d();
                        },
                    };
                },
                7
            );
            aa("n", Wf, 8);
            X.push(Ev);
            X.push(Fv);
            Yc.push(
                A("cdl", function (a) {
                    var c = J(a).Ga;
                    if ((a = n(a, "navigator.cookieDeprecationLabel")))
                        try {
                            a.getValue().then(u("cdl", c), D(["cdl", "e"], c));
                        } catch (b) {
                            c("cdl", "d");
                        }
                    else c("cdl", "na");
                })
            );
            Va.push(Iv);
            Va.push(Jv);
            ua.pis = fl;
            ya.pis = Qb;
            Va.push(
                A("p.sci", function (a, c) {
                    return na(c, function (b) {
                        var d = n(b, "settings.pis");
                        if (d && !he(b)) {
                            b = J(a);
                            var e = b.C;
                            b = b.D;
                            e = e("pis");
                            if (Z(e))
                                return (
                                    (e = pa(a, "pis")),
                                    b("pis", "0"),
                                    e({ Z: { ha: ["pis"] } }, [d]).then(
                                        D(["pis", "1"], b),
                                        sd(D(["pis", "a"], b))
                                    )
                                );
                        }
                    })["catch"](B(a, "pis"));
                })
            );
            X.push(function (a, c) {
                var b = Rl(a),
                    d = K(c),
                    e = b[d];
                e || ((e = {}), (b[d] = e));
                e.Eh = !0;
                if ((b = e.Qf)) (d = Sl(a)), x(d, b);
            });
            Va.unshift(
                vb("is", function (a, c) {
                    na(c, function (b) {
                        (Oe(a) || n(b, "settings.sm")) &&
                            oh(a, "tag_debug", K(c), b);
                    });
                })
            );
            x(ub(ta)(window), Yc);
            if (window.Ya && af) {
                var Tl = va.Zb;
                window.Ya[Tl] = af;
                Vs(window);
                x(w(Kc([window, window.Ya[Tl]]), ta), Kg);
            }
            (function (a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || ((c.a = []), (b = c.a));
                    var d = Sl(a);
                    De(
                        a,
                        b,
                        function (e) {
                            e.ya.F(d);
                        },
                        !0
                    );
                }
            })(window);
        })();
    } catch (af) {}
}).call(this);
