(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __pow = Math.pow;
  var __commonJS = (cb2, mod) => function __require() {
    return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // (disabled):worker_threads
  var require_worker_threads = __commonJS({
    "(disabled):worker_threads"() {
    }
  });

  // node_modules/flexsearch/dist/flexsearch.bundle.module.min.js
  var import_meta = {};
  var w;
  function H(a, c, b) {
    const e = typeof b, d = typeof a;
    if (e !== "undefined") {
      if (d !== "undefined") {
        if (b) {
          if (d === "function" && e === d) return function(h) {
            return a(b(h));
          };
          c = a.constructor;
          if (c === b.constructor) {
            if (c === Array) return b.concat(a);
            if (c === Map) {
              var f = new Map(b);
              for (var g of a) f.set(g[0], g[1]);
              return f;
            }
            if (c === Set) {
              g = new Set(b);
              for (f of a.values()) g.add(f);
              return g;
            }
          }
        }
        return a;
      }
      return b;
    }
    return d === "undefined" ? c : a;
  }
  function aa(a, c) {
    return typeof a === "undefined" ? c : a;
  }
  function I() {
    return /* @__PURE__ */ Object.create(null);
  }
  function M(a) {
    return typeof a === "string";
  }
  function ba(a) {
    return typeof a === "object";
  }
  function ca(a, c) {
    if (M(c)) a = a[c];
    else for (let b = 0; a && b < c.length; b++) a = a[c[b]];
    return a;
  }
  var ea = /[^\p{L}\p{N}]+/u;
  var fa = /(\d{3})/g;
  var ha = /(\D)(\d{3})/g;
  var ia = /(\d{3})(\D)/g;
  var ja = /[\u0300-\u036f]/g;
  function ka(a = {}) {
    if (!this || this.constructor !== ka) return new ka(...arguments);
    if (arguments.length) for (a = 0; a < arguments.length; a++) this.assign(arguments[a]);
    else this.assign(a);
  }
  w = ka.prototype;
  w.assign = function(a) {
    this.normalize = H(a.normalize, true, this.normalize);
    let c = a.include, b = c || a.exclude || a.split, e;
    if (b || b === "") {
      if (typeof b === "object" && b.constructor !== RegExp) {
        let d = "";
        e = !c;
        c || (d += "\\p{Z}");
        b.letter && (d += "\\p{L}");
        b.number && (d += "\\p{N}", e = !!c);
        b.symbol && (d += "\\p{S}");
        b.punctuation && (d += "\\p{P}");
        b.control && (d += "\\p{C}");
        if (b = b.char) d += typeof b === "object" ? b.join("") : b;
        try {
          this.split = new RegExp("[" + (c ? "^" : "") + d + "]+", "u");
        } catch (f) {
          this.split = /\s+/;
        }
      } else this.split = b, e = b === false || "a1a".split(b).length < 2;
      this.numeric = H(a.numeric, e);
    } else {
      try {
        this.split = H(this.split, ea);
      } catch (d) {
        this.split = /\s+/;
      }
      this.numeric = H(a.numeric, H(this.numeric, true));
    }
    this.prepare = H(a.prepare, null, this.prepare);
    this.finalize = H(a.finalize, null, this.finalize);
    b = a.filter;
    this.filter = typeof b === "function" ? b : H(b && new Set(b), null, this.filter);
    this.dedupe = H(a.dedupe, true, this.dedupe);
    this.matcher = H((b = a.matcher) && new Map(b), null, this.matcher);
    this.mapper = H((b = a.mapper) && new Map(b), null, this.mapper);
    this.stemmer = H(
      (b = a.stemmer) && new Map(b),
      null,
      this.stemmer
    );
    this.replacer = H(a.replacer, null, this.replacer);
    this.minlength = H(a.minlength, 1, this.minlength);
    this.maxlength = H(a.maxlength, 1024, this.maxlength);
    this.rtl = H(a.rtl, false, this.rtl);
    if (this.cache = b = H(a.cache, true, this.cache)) this.F = null, this.L = typeof b === "number" ? b : 2e5, this.B = /* @__PURE__ */ new Map(), this.D = /* @__PURE__ */ new Map(), this.I = this.H = 128;
    this.h = "";
    this.J = null;
    this.A = "";
    this.K = null;
    if (this.matcher) for (const d of this.matcher.keys()) this.h += (this.h ? "|" : "") + d;
    if (this.stemmer) for (const d of this.stemmer.keys()) this.A += (this.A ? "|" : "") + d;
    return this;
  };
  w.addStemmer = function(a, c) {
    this.stemmer || (this.stemmer = /* @__PURE__ */ new Map());
    this.stemmer.set(a, c);
    this.A += (this.A ? "|" : "") + a;
    this.K = null;
    this.cache && Q(this);
    return this;
  };
  w.addFilter = function(a) {
    typeof a === "function" ? this.filter = a : (this.filter || (this.filter = /* @__PURE__ */ new Set()), this.filter.add(a));
    this.cache && Q(this);
    return this;
  };
  w.addMapper = function(a, c) {
    if (typeof a === "object") return this.addReplacer(a, c);
    if (a.length > 1) return this.addMatcher(a, c);
    this.mapper || (this.mapper = /* @__PURE__ */ new Map());
    this.mapper.set(a, c);
    this.cache && Q(this);
    return this;
  };
  w.addMatcher = function(a, c) {
    if (typeof a === "object") return this.addReplacer(a, c);
    if (a.length < 2 && (this.dedupe || this.mapper)) return this.addMapper(a, c);
    this.matcher || (this.matcher = /* @__PURE__ */ new Map());
    this.matcher.set(a, c);
    this.h += (this.h ? "|" : "") + a;
    this.J = null;
    this.cache && Q(this);
    return this;
  };
  w.addReplacer = function(a, c) {
    if (typeof a === "string") return this.addMatcher(a, c);
    this.replacer || (this.replacer = []);
    this.replacer.push(a, c);
    this.cache && Q(this);
    return this;
  };
  w.encode = function(a, c) {
    if (this.cache && a.length <= this.H) if (this.F) {
      if (this.B.has(a)) return this.B.get(a);
    } else this.F = setTimeout(Q, 50, this);
    this.normalize && (typeof this.normalize === "function" ? a = this.normalize(a) : a = ja ? a.normalize("NFKD").replace(ja, "").toLowerCase() : a.toLowerCase());
    this.prepare && (a = this.prepare(a));
    this.numeric && a.length > 3 && (a = a.replace(ha, "$1 $2").replace(ia, "$1 $2").replace(fa, "$1 "));
    const b = !(this.dedupe || this.mapper || this.filter || this.matcher || this.stemmer || this.replacer);
    let e = [], d = I(), f, g, h = this.split || this.split === "" ? a.split(this.split) : [a];
    for (let l = 0, m, p; l < h.length; l++) if ((m = p = h[l]) && !(m.length < this.minlength || m.length > this.maxlength)) {
      if (c) {
        if (d[m]) continue;
        d[m] = 1;
      } else {
        if (f === m) continue;
        f = m;
      }
      if (b) e.push(m);
      else if (!this.filter || (typeof this.filter === "function" ? this.filter(m) : !this.filter.has(m))) {
        if (this.cache && m.length <= this.I) if (this.F) {
          var k = this.D.get(m);
          if (k || k === "") {
            k && e.push(k);
            continue;
          }
        } else this.F = setTimeout(Q, 50, this);
        if (this.stemmer) {
          this.K || (this.K = new RegExp("(?!^)(" + this.A + ")$"));
          let u;
          for (; u !== m && m.length > 2; ) u = m, m = m.replace(this.K, (r) => this.stemmer.get(r));
        }
        if (m && (this.mapper || this.dedupe && m.length > 1)) {
          k = "";
          for (let u = 0, r = "", t, n; u < m.length; u++) t = m.charAt(u), t === r && this.dedupe || ((n = this.mapper && this.mapper.get(t)) || n === "" ? n === r && this.dedupe || !(r = n) || (k += n) : k += r = t);
          m = k;
        }
        this.matcher && m.length > 1 && (this.J || (this.J = new RegExp("(" + this.h + ")", "g")), m = m.replace(this.J, (u) => this.matcher.get(u)));
        if (m && this.replacer) for (k = 0; m && k < this.replacer.length; k += 2) m = m.replace(
          this.replacer[k],
          this.replacer[k + 1]
        );
        this.cache && p.length <= this.I && (this.D.set(p, m), this.D.size > this.L && (this.D.clear(), this.I = this.I / 1.1 | 0));
        if (m) {
          if (m !== p) if (c) {
            if (d[m]) continue;
            d[m] = 1;
          } else {
            if (g === m) continue;
            g = m;
          }
          e.push(m);
        }
      }
    }
    this.finalize && (e = this.finalize(e) || e);
    this.cache && a.length <= this.H && (this.B.set(a, e), this.B.size > this.L && (this.B.clear(), this.H = this.H / 1.1 | 0));
    return e;
  };
  function Q(a) {
    a.F = null;
    a.B.clear();
    a.D.clear();
  }
  function la(a, c, b) {
    b || (c || typeof a !== "object" ? typeof c === "object" && (b = c, c = 0) : b = a);
    b && (a = b.query || a, c = b.limit || c);
    let e = "" + (c || 0);
    b && (e += (b.offset || 0) + !!b.context + !!b.suggest + (b.resolve !== false) + (b.resolution || this.resolution) + (b.boost || 0));
    a = ("" + a).toLowerCase();
    this.cache || (this.cache = new ma());
    let d = this.cache.get(a + e);
    if (!d) {
      const f = b && b.cache;
      f && (b.cache = false);
      d = this.search(a, c, b);
      f && (b.cache = f);
      this.cache.set(a + e, d);
    }
    return d;
  }
  function ma(a) {
    this.limit = a && a !== true ? a : 1e3;
    this.cache = /* @__PURE__ */ new Map();
    this.h = "";
  }
  ma.prototype.set = function(a, c) {
    this.cache.set(this.h = a, c);
    this.cache.size > this.limit && this.cache.delete(this.cache.keys().next().value);
  };
  ma.prototype.get = function(a) {
    const c = this.cache.get(a);
    c && this.h !== a && (this.cache.delete(a), this.cache.set(this.h = a, c));
    return c;
  };
  ma.prototype.remove = function(a) {
    for (const c of this.cache) {
      const b = c[0];
      c[1].includes(a) && this.cache.delete(b);
    }
  };
  ma.prototype.clear = function() {
    this.cache.clear();
    this.h = "";
  };
  var na = { normalize: false, numeric: false, dedupe: false };
  var oa = {};
  var ra = /* @__PURE__ */ new Map([["b", "p"], ["v", "f"], ["w", "f"], ["z", "s"], ["x", "s"], ["d", "t"], ["n", "m"], ["c", "k"], ["g", "k"], ["j", "k"], ["q", "k"], ["i", "e"], ["y", "e"], ["u", "o"]]);
  var sa = /* @__PURE__ */ new Map([["ae", "a"], ["oe", "o"], ["sh", "s"], ["kh", "k"], ["th", "t"], ["ph", "f"], ["pf", "f"]]);
  var ta = [/([^aeo])h(.)/g, "$1$2", /([aeo])h([^aeo]|$)/g, "$1$2", /(.)\1+/g, "$1"];
  var ua = { a: "", e: "", i: "", o: "", u: "", y: "", b: 1, f: 1, p: 1, v: 1, c: 2, g: 2, j: 2, k: 2, q: 2, s: 2, x: 2, z: 2, "\xDF": 2, d: 3, t: 3, l: 4, m: 5, n: 5, r: 6 };
  var va = { Exact: na, Default: oa, Normalize: oa, LatinBalance: { mapper: ra }, LatinAdvanced: { mapper: ra, matcher: sa, replacer: ta }, LatinExtra: { mapper: ra, replacer: ta.concat([/(?!^)[aeo]/g, ""]), matcher: sa }, LatinSoundex: { dedupe: false, include: { letter: true }, finalize: function(a) {
    for (let b = 0; b < a.length; b++) {
      var c = a[b];
      let e = c.charAt(0), d = ua[e];
      for (let f = 1, g; f < c.length && (g = c.charAt(f), g === "h" || g === "w" || !(g = ua[g]) || g === d || (e += g, d = g, e.length !== 4)); f++) ;
      a[b] = e;
    }
  } }, CJK: { split: "" }, LatinExact: na, LatinDefault: oa, LatinSimple: oa };
  function wa(a, c, b, e) {
    let d = [];
    for (let f = 0, g; f < a.index.length; f++) if (g = a.index[f], c >= g.length) c -= g.length;
    else {
      c = g[e ? "splice" : "slice"](c, b);
      const h = c.length;
      if (h && (d = d.length ? d.concat(c) : c, b -= h, e && (a.length -= h), !b)) break;
      c = 0;
    }
    return d;
  }
  function xa(a) {
    if (!this || this.constructor !== xa) return new xa(a);
    this.index = a ? [a] : [];
    this.length = a ? a.length : 0;
    const c = this;
    return new Proxy([], { get(b, e) {
      if (e === "length") return c.length;
      if (e === "push") return function(d) {
        c.index[c.index.length - 1].push(d);
        c.length++;
      };
      if (e === "pop") return function() {
        if (c.length) return c.length--, c.index[c.index.length - 1].pop();
      };
      if (e === "indexOf") return function(d) {
        let f = 0;
        for (let g = 0, h, k; g < c.index.length; g++) {
          h = c.index[g];
          k = h.indexOf(d);
          if (k >= 0) return f + k;
          f += h.length;
        }
        return -1;
      };
      if (e === "includes") return function(d) {
        for (let f = 0; f < c.index.length; f++) if (c.index[f].includes(d)) return true;
        return false;
      };
      if (e === "slice") return function(d, f) {
        return wa(c, d || 0, f || c.length, false);
      };
      if (e === "splice") return function(d, f) {
        return wa(c, d || 0, f || c.length, true);
      };
      if (e === "constructor") return Array;
      if (typeof e !== "symbol") return (b = c.index[e / __pow(2, 31) | 0]) && b[e];
    }, set(b, e, d) {
      b = e / __pow(2, 31) | 0;
      (c.index[b] || (c.index[b] = []))[e] = d;
      c.length++;
      return true;
    } });
  }
  xa.prototype.clear = function() {
    this.index.length = 0;
  };
  xa.prototype.push = function() {
  };
  function R(a = 8) {
    if (!this || this.constructor !== R) return new R(a);
    this.index = I();
    this.h = [];
    this.size = 0;
    a > 32 ? (this.B = Aa, this.A = BigInt(a)) : (this.B = Ba, this.A = a);
  }
  R.prototype.get = function(a) {
    const c = this.index[this.B(a)];
    return c && c.get(a);
  };
  R.prototype.set = function(a, c) {
    var b = this.B(a);
    let e = this.index[b];
    e ? (b = e.size, e.set(a, c), (b -= e.size) && this.size++) : (this.index[b] = e = /* @__PURE__ */ new Map([[a, c]]), this.h.push(e), this.size++);
  };
  function S(a = 8) {
    if (!this || this.constructor !== S) return new S(a);
    this.index = I();
    this.h = [];
    this.size = 0;
    a > 32 ? (this.B = Aa, this.A = BigInt(a)) : (this.B = Ba, this.A = a);
  }
  S.prototype.add = function(a) {
    var c = this.B(a);
    let b = this.index[c];
    b ? (c = b.size, b.add(a), (c -= b.size) && this.size++) : (this.index[c] = b = /* @__PURE__ */ new Set([a]), this.h.push(b), this.size++);
  };
  w = R.prototype;
  w.has = S.prototype.has = function(a) {
    const c = this.index[this.B(a)];
    return c && c.has(a);
  };
  w.delete = S.prototype.delete = function(a) {
    const c = this.index[this.B(a)];
    c && c.delete(a) && this.size--;
  };
  w.clear = S.prototype.clear = function() {
    this.index = I();
    this.h = [];
    this.size = 0;
  };
  w.values = S.prototype.values = function* () {
    for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].values()) yield c;
  };
  w.keys = S.prototype.keys = function* () {
    for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].keys()) yield c;
  };
  w.entries = S.prototype.entries = function* () {
    for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].entries()) yield c;
  };
  function Ba(a) {
    let c = __pow(2, this.A) - 1;
    if (typeof a == "number") return a & c;
    let b = 0, e = this.A + 1;
    for (let d = 0; d < a.length; d++) b = (b * e ^ a.charCodeAt(d)) & c;
    return this.A === 32 ? b + __pow(2, 31) : b;
  }
  function Aa(a) {
    let c = __pow(BigInt(2), this.A) - BigInt(1);
    var b = typeof a;
    if (b === "bigint") return a & c;
    if (b === "number") return BigInt(a) & c;
    b = BigInt(0);
    let e = this.A + BigInt(1);
    for (let d = 0; d < a.length; d++) b = (b * e ^ BigInt(a.charCodeAt(d))) & c;
    return b;
  }
  var Ca;
  var Da;
  function Ea(a) {
    return __async(this, null, function* () {
      a = a.data;
      var c = a.task;
      const b = a.id;
      let e = a.args;
      switch (c) {
        case "init":
          Da = a.options || {};
          (c = a.factory) ? (Function("return " + c)()(self), Ca = new self.FlexSearch.Index(Da), delete self.FlexSearch) : Ca = new T(Da);
          postMessage({ id: b });
          break;
        default:
          let d;
          c === "export" && (e[1] ? (e[0] = Da.export, e[2] = 0, e[3] = 1) : e = null);
          c === "import" ? e[0] && (a = yield Da.import.call(Ca, e[0]), Ca.import(e[0], a)) : ((d = e && Ca[c].apply(Ca, e)) && d.then && (d = yield d), d && d.await && (d = yield d.await), c === "search" && d.result && (d = d.result));
          postMessage(c === "search" ? { id: b, msg: d } : { id: b });
      }
    });
  }
  function Fa(a) {
    Ga.call(a, "add");
    Ga.call(a, "append");
    Ga.call(a, "search");
    Ga.call(a, "update");
    Ga.call(a, "remove");
    Ga.call(a, "searchCache");
  }
  var Ha;
  var Ia;
  var Ja;
  function Ka() {
    Ha = Ja = 0;
  }
  function Ga(a) {
    this[a + "Async"] = function() {
      const c = arguments;
      var b = c[c.length - 1];
      let e;
      typeof b === "function" && (e = b, delete c[c.length - 1]);
      Ha ? Ja || (Ja = Date.now() - Ia >= this.priority * this.priority * 3) : (Ha = setTimeout(Ka, 0), Ia = Date.now());
      if (Ja) {
        const f = this;
        return new Promise((g) => {
          setTimeout(function() {
            g(f[a + "Async"].apply(f, c));
          }, 0);
        });
      }
      const d = this[a].apply(this, c);
      b = d.then ? d : new Promise((f) => f(d));
      e && b.then(e);
      return b;
    };
  }
  var V = 0;
  function La(a = {}, c) {
    function b(h) {
      function k(l) {
        l = l.data || l;
        const m = l.id, p = m && f.h[m];
        p && (p(l.msg), delete f.h[m]);
      }
      this.worker = h;
      this.h = I();
      if (this.worker) {
        d ? this.worker.on("message", k) : this.worker.onmessage = k;
        if (a.config) return new Promise(function(l) {
          V > 1e9 && (V = 0);
          f.h[++V] = function() {
            l(f);
          };
          f.worker.postMessage({ id: V, task: "init", factory: e, options: a });
        });
        this.priority = a.priority || 4;
        this.encoder = c || null;
        this.worker.postMessage({ task: "init", factory: e, options: a });
        return this;
      }
    }
    if (!this || this.constructor !== La) return new La(a);
    let e = typeof self !== "undefined" ? self._factory : typeof window !== "undefined" ? window._factory : null;
    e && (e = e.toString());
    const d = typeof window === "undefined", f = this, g = Ma(e, d, a.worker);
    return g.then ? g.then(function(h) {
      return b.call(f, h);
    }) : b.call(this, g);
  }
  W("add");
  W("append");
  W("search");
  W("update");
  W("remove");
  W("clear");
  W("export");
  W("import");
  La.prototype.searchCache = la;
  Fa(La.prototype);
  function W(a) {
    La.prototype[a] = function() {
      const c = this, b = [].slice.call(arguments);
      var e = b[b.length - 1];
      let d;
      typeof e === "function" && (d = e, b.pop());
      e = new Promise(function(f) {
        a === "export" && typeof b[0] === "function" && (b[0] = null);
        V > 1e9 && (V = 0);
        c.h[++V] = f;
        c.worker.postMessage({ task: a, id: V, args: b });
      });
      return d ? (e.then(d), this) : e;
    };
  }
  function Ma(a, c, b) {
    return c ? typeof module !== "undefined" ? new (require_worker_threads())["Worker"](__dirname + "/worker/node.js") : Promise.resolve().then(() => __toESM(require_worker_threads())).then(function(worker) {
      return new worker["Worker"](import_meta.dirname + "/node/node.mjs");
    }) : a ? new window.Worker(URL.createObjectURL(new Blob(["onmessage=" + Ea.toString()], { type: "text/javascript" }))) : new window.Worker(typeof b === "string" ? b : import_meta.url.replace("/worker.js", "/worker/worker.js").replace(
      "flexsearch.bundle.module.min.js",
      "module/worker/worker.js"
    ), { type: "module" });
  }
  Na.prototype.add = function(a, c, b) {
    ba(a) && (c = a, a = ca(c, this.key));
    if (c && (a || a === 0)) {
      if (!b && this.reg.has(a)) return this.update(a, c);
      for (let h = 0, k; h < this.field.length; h++) {
        k = this.B[h];
        var e = this.index.get(this.field[h]);
        if (typeof k === "function") {
          var d = k(c);
          d && e.add(a, d, b, true);
        } else if (d = k.G, !d || d(c)) k.constructor === String ? k = ["" + k] : M(k) && (k = [k]), Qa(c, k, this.D, 0, e, a, k[0], b);
      }
      if (this.tag) for (e = 0; e < this.A.length; e++) {
        var f = this.A[e];
        d = this.tag.get(this.F[e]);
        let h = I();
        if (typeof f === "function") {
          if (f = f(c), !f) continue;
        } else {
          var g = f.G;
          if (g && !g(c)) continue;
          f.constructor === String && (f = "" + f);
          f = ca(c, f);
        }
        if (d && f) {
          M(f) && (f = [f]);
          for (let k = 0, l, m; k < f.length; k++) if (l = f[k], !h[l] && (h[l] = 1, (g = d.get(l)) ? m = g : d.set(l, m = []), !b || !m.includes(a))) {
            if (m.length === __pow(2, 31) - 1) {
              g = new xa(m);
              if (this.fastupdate) for (let p of this.reg.values()) p.includes(m) && (p[p.indexOf(m)] = g);
              d.set(l, m = g);
            }
            m.push(a);
            this.fastupdate && ((g = this.reg.get(a)) ? g.push(m) : this.reg.set(a, [m]));
          }
        }
      }
      if (this.store && (!b || !this.store.has(a))) {
        let h;
        if (this.h) {
          h = I();
          for (let k = 0, l; k < this.h.length; k++) {
            l = this.h[k];
            if ((b = l.G) && !b(c)) continue;
            let m;
            if (typeof l === "function") {
              m = l(c);
              if (!m) continue;
              l = [l.O];
            } else if (M(l) || l.constructor === String) {
              h[l] = c[l];
              continue;
            }
            Ra(c, h, l, 0, l[0], m);
          }
        }
        this.store.set(a, h || c);
      }
      this.worker && (this.fastupdate || this.reg.add(a));
    }
    return this;
  };
  function Ra(a, c, b, e, d, f) {
    a = a[d];
    if (e === b.length - 1) c[d] = f || a;
    else if (a) if (a.constructor === Array) for (c = c[d] = Array(a.length), d = 0; d < a.length; d++) Ra(a, c, b, e, d);
    else c = c[d] || (c[d] = I()), d = b[++e], Ra(a, c, b, e, d);
  }
  function Qa(a, c, b, e, d, f, g, h) {
    if (a = a[g]) if (e === c.length - 1) {
      if (a.constructor === Array) {
        if (b[e]) {
          for (c = 0; c < a.length; c++) d.add(f, a[c], true, true);
          return;
        }
        a = a.join(" ");
      }
      d.add(f, a, h, true);
    } else if (a.constructor === Array) for (g = 0; g < a.length; g++) Qa(a, c, b, e, d, f, g, h);
    else g = c[++e], Qa(a, c, b, e, d, f, g, h);
  }
  function Sa(a, c, b, e) {
    if (!a.length) return a;
    if (a.length === 1) return a = a[0], a = b || a.length > c ? a.slice(b, b + c) : a, e ? Ta.call(this, a) : a;
    let d = [];
    for (let f = 0, g, h; f < a.length; f++) if ((g = a[f]) && (h = g.length)) {
      if (b) {
        if (b >= h) {
          b -= h;
          continue;
        }
        g = g.slice(b, b + c);
        h = g.length;
        b = 0;
      }
      h > c && (g = g.slice(0, c), h = c);
      if (!d.length && h >= c) return e ? Ta.call(this, g) : g;
      d.push(g);
      c -= h;
      if (!c) break;
    }
    d = d.length > 1 ? [].concat.apply([], d) : d[0];
    return e ? Ta.call(this, d) : d;
  }
  function Ua(a, c, b, e) {
    var d = e[0];
    if (d[0] && d[0].query) return a[c].apply(a, d);
    if (!(c !== "and" && c !== "not" || a.result.length || a.await || d.suggest)) return e.length > 1 && (d = e[e.length - 1]), (e = d.resolve) ? a.await || a.result : a;
    let f = [], g = 0, h = 0, k, l, m, p, u;
    for (c = 0; c < e.length; c++) if (d = e[c]) {
      var r = void 0;
      if (d.constructor === X) r = d.await || d.result;
      else if (d.then || d.constructor === Array) r = d;
      else {
        g = d.limit || 0;
        h = d.offset || 0;
        m = d.suggest;
        l = d.resolve;
        k = ((p = d.highlight || a.highlight) || d.enrich) && l;
        r = d.queue;
        let t = d.async || r, n = d.index, q = d.query;
        n ? a.index || (a.index = n) : n = a.index;
        if (q || d.tag) {
          const x = d.field || d.pluck;
          x && (!q || a.query && !p || (a.query = q, a.field = x, a.highlight = p), n = n.index.get(x));
          if (r && (u || a.await)) {
            u = 1;
            let v;
            const A = a.C.length, D = new Promise(function(G) {
              v = G;
            });
            (function(G, E) {
              D.h = function() {
                E.index = null;
                E.resolve = false;
                let B = t ? G.searchAsync(E) : G.search(E);
                if (B.then) return B.then(function(z) {
                  a.C[A] = z = z.result || z;
                  v(z);
                  return z;
                });
                B = B.result || B;
                v(B);
                return B;
              };
            })(n, Object.assign({}, d));
            a.C.push(D);
            f[c] = D;
            continue;
          } else d.resolve = false, d.index = null, r = t ? n.searchAsync(d) : n.search(d), d.resolve = l, d.index = n;
        } else if (d.and) r = Va(d, "and", n);
        else if (d.or) r = Va(d, "or", n);
        else if (d.not) r = Va(d, "not", n);
        else if (d.xor) r = Va(d, "xor", n);
        else continue;
      }
      r.await ? (u = 1, r = r.await) : r.then ? (u = 1, r = r.then(function(t) {
        return t.result || t;
      })) : r = r.result || r;
      f[c] = r;
    }
    u && !a.await && (a.await = new Promise(function(t) {
      a.return = t;
    }));
    if (u) {
      const t = Promise.all(f).then(function(n) {
        for (let q = 0; q < a.C.length; q++) if (a.C[q] === t) {
          a.C[q] = function() {
            return b.call(a, n, g, h, k, l, m, p);
          };
          break;
        }
        Wa(a);
      });
      a.C.push(t);
    } else if (a.await) a.C.push(function() {
      return b.call(a, f, g, h, k, l, m, p);
    });
    else return b.call(a, f, g, h, k, l, m, p);
    return l ? a.await || a.result : a;
  }
  function Va(a, c, b) {
    a = a[c];
    const e = a[0] || a;
    e.index || (e.index = b);
    b = new X(e);
    a.length > 1 && (b = b[c].apply(b, a.slice(1)));
    return b;
  }
  X.prototype.or = function() {
    return Ua(this, "or", Xa, arguments);
  };
  function Xa(a, c, b, e, d, f, g) {
    a.length && (this.result.length && a.push(this.result), a.length < 2 ? this.result = a[0] : (this.result = Ya(a, c, b, false, this.h), b = 0));
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g) : this;
  }
  X.prototype.and = function() {
    return Ua(this, "and", Za, arguments);
  };
  function Za(a, c, b, e, d, f, g) {
    if (!f && !this.result.length) return d ? this.result : this;
    let h;
    if (a.length) if (this.result.length && a.unshift(this.result), a.length < 2) this.result = a[0];
    else {
      let k = 0;
      for (let l = 0, m, p; l < a.length; l++) if ((m = a[l]) && (p = m.length)) k < p && (k = p);
      else if (!f) {
        k = 0;
        break;
      }
      k ? (this.result = $a(a, k, c, b, f, this.h, d), h = true) : this.result = [];
    }
    else f || (this.result = a);
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g, h) : this;
  }
  X.prototype.xor = function() {
    return Ua(this, "xor", ab, arguments);
  };
  function ab(a, c, b, e, d, f, g) {
    if (a.length) if (this.result.length && a.unshift(this.result), a.length < 2) this.result = a[0];
    else {
      a: {
        f = b;
        var h = this.h;
        const k = [], l = I();
        let m = 0;
        for (let p = 0, u; p < a.length; p++) if (u = a[p]) {
          m < u.length && (m = u.length);
          for (let r = 0, t; r < u.length; r++) if (t = u[r]) for (let n = 0, q; n < t.length; n++) q = t[n], l[q] = l[q] ? 2 : 1;
        }
        for (let p = 0, u, r = 0; p < m; p++) for (let t = 0, n; t < a.length; t++) if (n = a[t]) {
          if (u = n[p]) {
            for (let q = 0, x; q < u.length; q++) if (x = u[q], l[x] === 1) if (f) f--;
            else if (d) {
              if (k.push(x), k.length === c) {
                a = k;
                break a;
              }
            } else {
              const v = p + (t ? h : 0);
              k[v] || (k[v] = []);
              k[v].push(x);
              if (++r === c) {
                a = k;
                break a;
              }
            }
          }
        }
        a = k;
      }
      this.result = a;
      h = true;
    }
    else f || (this.result = a);
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g, h) : this;
  }
  X.prototype.not = function() {
    return Ua(this, "not", bb, arguments);
  };
  function bb(a, c, b, e, d, f, g) {
    if (!f && !this.result.length) return d ? this.result : this;
    if (a.length && this.result.length) {
      a: {
        f = b;
        var h = [];
        a = new Set(a.flat().flat());
        for (let k = 0, l, m = 0; k < this.result.length; k++) if (l = this.result[k]) {
          for (let p = 0, u; p < l.length; p++) if (u = l[p], !a.has(u)) {
            if (f) f--;
            else if (d) {
              if (h.push(u), h.length === c) {
                a = h;
                break a;
              }
            } else if (h[k] || (h[k] = []), h[k].push(u), ++m === c) {
              a = h;
              break a;
            }
          }
        }
        a = h;
      }
      this.result = a;
      h = true;
    }
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g, h) : this;
  }
  function cb(a, c, b, e, d) {
    let f, g, h;
    typeof d === "string" ? (f = d, d = "") : f = d.template;
    g = f.indexOf("$1");
    h = f.substring(g + 2);
    g = f.substring(0, g);
    let k = d && d.boundary, l = !d || d.clip !== false, m = d && d.merge && h && g && new RegExp(h + " " + g, "g");
    d = d && d.ellipsis;
    var p = 0;
    if (typeof d === "object") {
      var u = d.template;
      p = u.length - 2;
      d = d.pattern;
    }
    typeof d !== "string" && (d = d === false ? "" : "...");
    p && (d = u.replace("$1", d));
    u = d.length - p;
    let r, t;
    typeof k === "object" && (r = k.before, r === 0 && (r = -1), t = k.after, t === 0 && (t = -1), k = k.total || 9e5);
    p = /* @__PURE__ */ new Map();
    for (let Oa = 0, da, db, pa; Oa < c.length; Oa++) {
      let qa;
      if (e) qa = c, pa = e;
      else {
        var n = c[Oa];
        pa = n.field;
        if (!pa) continue;
        qa = n.result;
      }
      db = b.get(pa);
      da = db.encoder;
      n = p.get(da);
      typeof n !== "string" && (n = da.encode(a), p.set(da, n));
      for (let ya = 0; ya < qa.length; ya++) {
        var q = qa[ya].doc;
        if (!q) continue;
        q = ca(q, pa);
        if (!q) continue;
        var x = q.trim().split(/\s+/);
        if (!x.length) continue;
        q = "";
        var v = [];
        let za = [];
        var A = -1, D = -1, G = 0;
        for (var E = 0; E < x.length; E++) {
          var B = x[E], z = da.encode(B);
          z = z.length > 1 ? z.join(" ") : z[0];
          let y;
          if (z && B) {
            var C = B.length, K = (da.split ? B.replace(da.split, "") : B).length - z.length, F = "", N = 0;
            for (var O = 0; O < n.length; O++) {
              var P = n[O];
              if (P) {
                var L = P.length;
                L += K;
                N && L <= N || (P = z.indexOf(P), P > -1 && (F = (P ? B.substring(0, P) : "") + g + B.substring(P, P + L) + h + (P + L < C ? B.substring(P + L) : ""), N = L, y = true));
              }
            }
            F && (k && (A < 0 && (A = q.length + (q ? 1 : 0)), D = q.length + (q ? 1 : 0) + F.length, G += C, za.push(v.length), v.push({ match: F })), q += (q ? " " : "") + F);
          }
          if (!y) B = x[E], q += (q ? " " : "") + B, k && v.push({ text: B });
          else if (k && G >= k) break;
        }
        G = za.length * (f.length - 2);
        if (r || t || k && q.length - G > k) if (G = k + G - u * 2, E = D - A, r > 0 && (E += r), t > 0 && (E += t), E <= G) x = r ? A - (r > 0 ? r : 0) : A - ((G - E) / 2 | 0), v = t ? D + (t > 0 ? t : 0) : x + G, l || (x > 0 && q.charAt(x) !== " " && q.charAt(x - 1) !== " " && (x = q.indexOf(" ", x), x < 0 && (x = 0)), v < q.length && q.charAt(v - 1) !== " " && q.charAt(v) !== " " && (v = q.lastIndexOf(" ", v), v < D ? v = D : ++v)), q = (x ? d : "") + q.substring(x, v) + (v < q.length ? d : "");
        else {
          D = [];
          A = {};
          G = {};
          E = {};
          B = {};
          z = {};
          F = K = C = 0;
          for (O = N = 1; ; ) {
            var U = void 0;
            for (let y = 0, J; y < za.length; y++) {
              J = za[y];
              if (F) if (K !== F) {
                if (E[y + 1]) continue;
                J += F;
                if (A[J]) {
                  C -= u;
                  G[y + 1] = 1;
                  E[y + 1] = 1;
                  continue;
                }
                if (J >= v.length - 1) {
                  if (J >= v.length) {
                    E[y + 1] = 1;
                    J >= x.length && (G[y + 1] = 1);
                    continue;
                  }
                  C -= u;
                }
                q = v[J].text;
                if (L = t && z[y]) if (L > 0) {
                  if (q.length > L) if (E[y + 1] = 1, l) q = q.substring(0, L);
                  else continue;
                  (L -= q.length) || (L = -1);
                  z[y] = L;
                } else {
                  E[y + 1] = 1;
                  continue;
                }
                if (C + q.length + 1 <= k) q = " " + q, D[y] += q;
                else if (l) U = k - C - 1, U > 0 && (q = " " + q.substring(0, U), D[y] += q), E[y + 1] = 1;
                else {
                  E[y + 1] = 1;
                  continue;
                }
              } else {
                if (E[y]) continue;
                J -= K;
                if (A[J]) {
                  C -= u;
                  E[y] = 1;
                  G[y] = 1;
                  continue;
                }
                if (J <= 0) {
                  if (J < 0) {
                    E[y] = 1;
                    G[y] = 1;
                    continue;
                  }
                  C -= u;
                }
                q = v[J].text;
                if (L = r && B[y]) if (L > 0) {
                  if (q.length > L) if (E[y] = 1, l) q = q.substring(q.length - L);
                  else continue;
                  (L -= q.length) || (L = -1);
                  B[y] = L;
                } else {
                  E[y] = 1;
                  continue;
                }
                if (C + q.length + 1 <= k) q += " ", D[y] = q + D[y];
                else if (l) U = q.length + 1 - (k - C), U >= 0 && U < q.length && (q = q.substring(U) + " ", D[y] = q + D[y]), E[y] = 1;
                else {
                  E[y] = 1;
                  continue;
                }
              }
              else {
                q = v[J].match;
                r && (B[y] = r);
                t && (z[y] = t);
                y && C++;
                let Pa;
                J ? !y && u && (C += u) : (G[y] = 1, E[y] = 1);
                J >= x.length - 1 ? Pa = 1 : J < v.length - 1 && v[J + 1].match ? Pa = 1 : u && (C += u);
                C -= f.length - 2;
                if (!y || C + q.length <= k) D[y] = q;
                else {
                  U = N = O = G[y] = 0;
                  break;
                }
                Pa && (G[y + 1] = 1, E[y + 1] = 1);
              }
              C += q.length;
              U = A[J] = 1;
            }
            if (U) K === F ? F++ : K++;
            else {
              K === F ? N = 0 : O = 0;
              if (!N && !O) break;
              N ? (K++, F = K) : F++;
            }
          }
          q = "";
          for (let y = 0, J; y < D.length; y++) J = (y && G[y] ? " " : (y && !d ? " " : "") + d) + D[y], q += J;
          d && !G[D.length] && (q += d);
        }
        m && (q = q.replace(m, " "));
        qa[ya].highlight = q;
      }
      if (e) break;
    }
    return c;
  }
  function X(a, c) {
    if (!this || this.constructor !== X) return new X(a, c);
    let b = 0, e, d, f, g, h, k;
    if (a && a.index) {
      const l = a;
      c = l.index;
      b = l.boost || 0;
      if (d = l.query) {
        f = l.field || l.pluck;
        g = l.highlight;
        const m = l.resolve;
        a = l.async || l.queue;
        l.resolve = false;
        l.index = null;
        a = a ? c.searchAsync(l) : c.search(l);
        l.resolve = m;
        l.index = c;
        a = a.result || a;
      } else a = [];
    }
    if (a && a.then) {
      const l = this;
      a = a.then(function(m) {
        l.C[0] = l.result = m.result || m;
        Wa(l);
      });
      e = [a];
      a = [];
      h = new Promise(function(m) {
        k = m;
      });
    }
    this.index = c || null;
    this.result = a || [];
    this.h = b;
    this.C = e || [];
    this.await = h || null;
    this.return = k || null;
    this.highlight = g || null;
    this.query = d || "";
    this.field = f || "";
  }
  w = X.prototype;
  w.limit = function(a) {
    if (this.await) {
      const c = this;
      this.C.push(function() {
        return c.limit(a).result;
      });
    } else if (this.result.length) {
      const c = [];
      for (let b = 0, e; b < this.result.length; b++) if (e = this.result[b]) if (e.length <= a) {
        if (c[b] = e, a -= e.length, !a) break;
      } else {
        c[b] = e.slice(0, a);
        break;
      }
      this.result = c;
    }
    return this;
  };
  w.offset = function(a) {
    if (this.await) {
      const c = this;
      this.C.push(function() {
        return c.offset(a).result;
      });
    } else if (this.result.length) {
      const c = [];
      for (let b = 0, e; b < this.result.length; b++) if (e = this.result[b]) e.length <= a ? a -= e.length : (c[b] = e.slice(a), a = 0);
      this.result = c;
    }
    return this;
  };
  w.boost = function(a) {
    if (this.await) {
      const c = this;
      this.C.push(function() {
        return c.boost(a).result;
      });
    } else this.h += a;
    return this;
  };
  function Wa(a, c) {
    let b = a.result;
    var e = a.await;
    a.await = null;
    for (let d = 0, f; d < a.C.length; d++) if (f = a.C[d]) {
      if (typeof f === "function") b = f(), a.C[d] = b = b.result || b, d--;
      else if (f.h) b = f.h(), a.C[d] = b = b.result || b, d--;
      else if (f.then) return a.await = e;
    }
    e = a.return;
    a.C = [];
    a.return = null;
    c || e(b);
    return b;
  }
  w.resolve = function(a, c, b, e, d) {
    let f = this.await ? Wa(this, true) : this.result;
    if (f.then) {
      const g = this;
      return f.then(function() {
        return g.resolve(a, c, b, e, d);
      });
    }
    f.length && (typeof a === "object" ? (e = a.highlight || this.highlight, b = !!e || a.enrich, c = a.offset, a = a.limit) : (e = e || this.highlight, b = !!e || b), f = d ? b ? Ta.call(this.index, f) : f : Sa.call(this.index, f, a || 100, c, b));
    return this.finalize(f, e);
  };
  w.finalize = function(a, c) {
    if (a.then) {
      const e = this;
      return a.then(function(d) {
        return e.finalize(d, c);
      });
    }
    c && a.length && this.query && (a = cb(this.query, a, this.index.index, this.field, c));
    const b = this.return;
    this.highlight = this.index = this.result = this.C = this.await = this.return = null;
    this.query = this.field = "";
    b && b(a);
    return a;
  };
  function $a(a, c, b, e, d, f, g) {
    const h = a.length;
    let k = [], l, m;
    l = I();
    for (let p = 0, u, r, t, n; p < c; p++) for (let q = 0; q < h; q++) if (t = a[q], p < t.length && (u = t[p])) for (let x = 0; x < u.length; x++) {
      r = u[x];
      (m = l[r]) ? l[r]++ : (m = 0, l[r] = 1);
      n = k[m] || (k[m] = []);
      if (!g) {
        let v = p + (q || !d ? 0 : f || 0);
        n = n[v] || (n[v] = []);
      }
      n.push(r);
      if (g && b && m === h - 1 && n.length - e === b) return e ? n.slice(e) : n;
    }
    if (a = k.length) if (d) k = k.length > 1 ? Ya(k, b, e, g, f) : (k = k[0]) && b && k.length > b || e ? k.slice(e, b + e) : k;
    else {
      if (a < h) return [];
      k = k[a - 1];
      if (b || e) if (g) {
        if (k.length > b || e) k = k.slice(e, b + e);
      } else {
        d = [];
        for (let p = 0, u; p < k.length; p++) if (u = k[p]) if (e && u.length > e) e -= u.length;
        else {
          if (b && u.length > b || e) u = u.slice(e, b + e), b -= u.length, e && (e -= u.length);
          d.push(u);
          if (!b) break;
        }
        k = d;
      }
    }
    return k;
  }
  function Ya(a, c, b, e, d) {
    const f = [], g = I();
    let h;
    var k = a.length;
    let l;
    if (e) for (d = k - 1; d >= 0; d--) {
      if (l = (e = a[d]) && e.length) {
        for (k = 0; k < l; k++) if (h = e[k], !g[h]) {
          if (g[h] = 1, b) b--;
          else if (f.push(h), f.length === c) return f;
        }
      }
    }
    else for (let m = k - 1, p, u = 0; m >= 0; m--) {
      p = a[m];
      for (let r = 0; r < p.length; r++) if (l = (e = p[r]) && e.length) {
        for (let t = 0; t < l; t++) if (h = e[t], !g[h]) if (g[h] = 1, b) b--;
        else {
          let n = (r + (m < k - 1 ? d || 0 : 0)) / (m + 1) | 0;
          (f[n] || (f[n] = [])).push(h);
          if (++u === c) return f;
        }
      }
    }
    return f;
  }
  function eb(a, c, b) {
    const e = I(), d = [];
    for (let f = 0, g; f < c.length; f++) {
      g = c[f];
      for (let h = 0; h < g.length; h++) e[g[h]] = 1;
    }
    if (b) for (let f = 0, g; f < a.length; f++) g = a[f], e[g] && (d.push(g), e[g] = 0);
    else for (let f = 0, g, h; f < a.result.length; f++) for (g = a.result[f], c = 0; c < g.length; c++) h = g[c], e[h] && ((d[f] || (d[f] = [])).push(h), e[h] = 0);
    return d;
  }
  I();
  Na.prototype.search = function(a, c, b, e) {
    b || (!c && ba(a) ? (b = a, a = "") : ba(c) && (b = c, c = 0));
    let d = [];
    var f = [];
    let g;
    let h, k, l, m, p;
    let u = 0, r = true, t;
    if (b) {
      b.constructor === Array && (b = { index: b });
      a = b.query || a;
      g = b.pluck;
      h = b.merge;
      l = b.boost;
      p = g || b.field || (p = b.index) && (p.index ? null : p);
      var n = this.tag && b.tag;
      k = b.suggest;
      r = b.resolve !== false;
      m = b.cache;
      t = r && this.store && b.highlight;
      var q = !!t || r && this.store && b.enrich;
      c = b.limit || c;
      var x = b.offset || 0;
      c || (c = r ? 100 : 0);
      if (n && (!this.db || !e)) {
        n.constructor !== Array && (n = [n]);
        var v = [];
        for (let B = 0, z; B < n.length; B++) if (z = n[B], z.field && z.tag) {
          var A = z.tag;
          if (A.constructor === Array) for (var D = 0; D < A.length; D++) v.push(z.field, A[D]);
          else v.push(z.field, A);
        } else {
          A = Object.keys(z);
          for (let C = 0, K, F; C < A.length; C++) if (K = A[C], F = z[K], F.constructor === Array) for (D = 0; D < F.length; D++) v.push(K, F[D]);
          else v.push(K, F);
        }
        n = v;
        if (!a) {
          f = [];
          if (v.length) for (n = 0; n < v.length; n += 2) {
            if (this.db) {
              e = this.index.get(v[n]);
              if (!e) continue;
              f.push(e = e.db.tag(v[n + 1], c, x, q));
            } else e = fb.call(this, v[n], v[n + 1], c, x, q);
            d.push(r ? { field: v[n], tag: v[n + 1], result: e } : [e]);
          }
          if (f.length) {
            const B = this;
            return Promise.all(f).then(function(z) {
              for (let C = 0; C < z.length; C++) r ? d[C].result = z[C] : d[C] = z[C];
              return r ? d : new X(d.length > 1 ? $a(d, 1, 0, 0, k, l) : d[0], B);
            });
          }
          return r ? d : new X(d.length > 1 ? $a(d, 1, 0, 0, k, l) : d[0], this);
        }
      }
      r || g || !(p = p || this.field) || (M(p) ? g = p : (p.constructor === Array && p.length === 1 && (p = p[0]), g = p.field || p.index));
      p && p.constructor !== Array && (p = [p]);
    }
    p || (p = this.field);
    let G;
    v = (this.worker || this.db) && !e && [];
    for (let B = 0, z, C, K; B < p.length; B++) {
      C = p[B];
      if (this.db && this.tag && !this.B[B]) continue;
      let F;
      M(C) || (F = C, C = F.field, a = F.query || a, c = aa(F.limit, c), x = aa(F.offset, x), k = aa(F.suggest, k), t = r && this.store && aa(F.highlight, t), q = !!t || r && this.store && aa(F.enrich, q), m = aa(F.cache, m));
      if (e) z = e[B];
      else {
        A = F || b || {};
        D = A.enrich;
        var E = this.index.get(C);
        n && (this.db && (A.tag = n, G = E.db.support_tag_search, A.field = p), !G && D && (A.enrich = false));
        z = m ? E.searchCache(a, c, A) : E.search(a, c, A);
        D && (A.enrich = D);
        if (v) {
          v[B] = z;
          continue;
        }
      }
      K = (z = z.result || z) && z.length;
      if (n && K) {
        A = [];
        D = 0;
        if (this.db && e) {
          if (!G) for (E = p.length; E < e.length; E++) {
            let N = e[E];
            if (N && N.length) D++, A.push(N);
            else if (!k) return r ? d : new X(d, this);
          }
        } else for (let N = 0, O, P; N < n.length; N += 2) {
          O = this.tag.get(n[N]);
          if (!O) if (k) continue;
          else return r ? d : new X(d, this);
          if (P = (O = O && O.get(n[N + 1])) && O.length) D++, A.push(O);
          else if (!k) return r ? d : new X(d, this);
        }
        if (D) {
          z = eb(z, A, r);
          K = z.length;
          if (!K && !k) return r ? z : new X(z, this);
          D--;
        }
      }
      if (K) f[u] = C, d.push(z), u++;
      else if (p.length === 1) return r ? d : new X(d, this);
    }
    if (v) {
      if (this.db && n && n.length && !G) for (q = 0; q < n.length; q += 2) {
        f = this.index.get(n[q]);
        if (!f) if (k) continue;
        else return r ? d : new X(d, this);
        v.push(f.db.tag(n[q + 1], c, x, false));
      }
      const B = this;
      return Promise.all(v).then(function(z) {
        b && (b.resolve = r);
        z.length && (z = B.search(a, c, b, z));
        return z;
      });
    }
    if (!u) return r ? d : new X(d, this);
    if (g && (!q || !this.store)) return d = d[0], r ? d : new X(d, this);
    v = [];
    for (x = 0; x < f.length; x++) {
      n = d[x];
      q && n.length && typeof n[0].doc === "undefined" && (this.db ? v.push(n = this.index.get(this.field[0]).db.enrich(n)) : n = Ta.call(this, n));
      if (g) return r ? t ? cb(a, n, this.index, g, t) : n : new X(n, this);
      d[x] = { field: f[x], result: n };
    }
    if (q && this.db && v.length) {
      const B = this;
      return Promise.all(v).then(function(z) {
        for (let C = 0; C < z.length; C++) d[C].result = z[C];
        t && (d = cb(a, d, B.index, g, t));
        return h ? gb(d) : d;
      });
    }
    t && (d = cb(a, d, this.index, g, t));
    return h ? gb(d) : d;
  };
  function gb(a) {
    const c = [], b = I(), e = I();
    for (let d = 0, f, g, h, k, l, m, p; d < a.length; d++) {
      f = a[d];
      g = f.field;
      h = f.result;
      for (let u = 0; u < h.length; u++) if (l = h[u], typeof l !== "object" ? l = { id: k = l } : k = l.id, (m = b[k]) ? m.push(g) : (l.field = b[k] = [g], c.push(l)), p = l.highlight) m = e[k], m || (e[k] = m = {}, l.highlight = m), m[g] = p;
    }
    return c;
  }
  function fb(a, c, b, e, d) {
    a = this.tag.get(a);
    if (!a) return [];
    a = a.get(c);
    if (!a) return [];
    c = a.length - e;
    if (c > 0) {
      if (b && c > b || e) a = a.slice(e, e + b);
      d && (a = Ta.call(this, a));
    }
    return a;
  }
  function Ta(a) {
    if (!this || !this.store) return a;
    if (this.db) return this.index.get(this.field[0]).db.enrich(a);
    const c = Array(a.length);
    for (let b = 0, e; b < a.length; b++) e = a[b], c[b] = { id: e, doc: this.store.get(e) };
    return c;
  }
  function Na(a) {
    if (!this || this.constructor !== Na) return new Na(a);
    const c = a.document || a.doc || a;
    let b, e;
    this.B = [];
    this.field = [];
    this.D = [];
    this.key = (b = c.key || c.id) && hb(b, this.D) || "id";
    (e = a.keystore || 0) && (this.keystore = e);
    this.fastupdate = !!a.fastupdate;
    this.reg = !this.fastupdate || a.worker || a.db ? e ? new S(e) : /* @__PURE__ */ new Set() : e ? new R(e) : /* @__PURE__ */ new Map();
    this.h = (b = c.store || null) && b && b !== true && [];
    this.store = b ? e ? new R(e) : /* @__PURE__ */ new Map() : null;
    this.cache = (b = a.cache || null) && new ma(b);
    a.cache = false;
    this.worker = a.worker || false;
    this.priority = a.priority || 4;
    this.index = ib.call(this, a, c);
    this.tag = null;
    if (b = c.tag) {
      if (typeof b === "string" && (b = [b]), b.length) {
        this.tag = /* @__PURE__ */ new Map();
        this.A = [];
        this.F = [];
        for (let d = 0, f, g; d < b.length; d++) {
          f = b[d];
          g = f.field || f;
          if (!g) throw Error("The tag field from the document descriptor is undefined.");
          f.custom ? this.A[d] = f.custom : (this.A[d] = hb(g, this.D), f.filter && (typeof this.A[d] === "string" && (this.A[d] = new String(this.A[d])), this.A[d].G = f.filter));
          this.F[d] = g;
          this.tag.set(g, /* @__PURE__ */ new Map());
        }
      }
    }
    if (this.worker) {
      this.fastupdate = false;
      a = [];
      for (const d of this.index.values()) d.then && a.push(d);
      if (a.length) {
        const d = this;
        return Promise.all(a).then(function(f) {
          let g = 0;
          for (const h of d.index.entries()) {
            const k = h[0];
            let l = h[1];
            l.then && (l = f[g], d.index.set(k, l), g++);
          }
          return d;
        });
      }
    } else a.db && (this.fastupdate = false, this.mount(a.db));
  }
  w = Na.prototype;
  w.mount = function(a) {
    let c = this.field;
    if (this.tag) for (let f = 0, g; f < this.F.length; f++) {
      g = this.F[f];
      var b = void 0;
      this.index.set(g, b = new T({}, this.reg));
      c === this.field && (c = c.slice(0));
      c.push(g);
      b.tag = this.tag.get(g);
    }
    b = [];
    const e = { db: a.db, type: a.type, fastupdate: a.fastupdate };
    for (let f = 0, g, h; f < c.length; f++) {
      e.field = h = c[f];
      g = this.index.get(h);
      const k = new a.constructor(a.id, e);
      k.id = a.id;
      b[f] = k.mount(g);
      g.document = true;
      f ? g.bypass = true : g.store = this.store;
    }
    const d = this;
    return this.db = Promise.all(b).then(function() {
      d.db = true;
    });
  };
  w.commit = function() {
    return __async(this, null, function* () {
      const a = [];
      for (const c of this.index.values()) a.push(c.commit());
      yield Promise.all(a);
      this.reg.clear();
    });
  };
  w.destroy = function() {
    const a = [];
    for (const c of this.index.values()) a.push(c.destroy());
    return Promise.all(a);
  };
  function ib(a, c) {
    const b = /* @__PURE__ */ new Map();
    let e = c.index || c.field || c;
    M(e) && (e = [e]);
    for (let f = 0, g, h; f < e.length; f++) {
      g = e[f];
      M(g) || (h = g, g = g.field);
      h = ba(h) ? Object.assign({}, a, h) : a;
      if (this.worker) {
        var d = void 0;
        d = (d = h.encoder) && d.encode ? d : new ka(typeof d === "string" ? va[d] : d || {});
        d = new La(h, d);
        b.set(g, d);
      }
      this.worker || b.set(g, new T(h, this.reg));
      h.custom ? this.B[f] = h.custom : (this.B[f] = hb(g, this.D), h.filter && (typeof this.B[f] === "string" && (this.B[f] = new String(this.B[f])), this.B[f].G = h.filter));
      this.field[f] = g;
    }
    if (this.h) {
      a = c.store;
      M(a) && (a = [a]);
      for (let f = 0, g, h; f < a.length; f++) g = a[f], h = g.field || g, g.custom ? (this.h[f] = g.custom, g.custom.O = h) : (this.h[f] = hb(h, this.D), g.filter && (typeof this.h[f] === "string" && (this.h[f] = new String(this.h[f])), this.h[f].G = g.filter));
    }
    return b;
  }
  function hb(a, c) {
    const b = a.split(":");
    let e = 0;
    for (let d = 0; d < b.length; d++) a = b[d], a[a.length - 1] === "]" && (a = a.substring(0, a.length - 2)) && (c[e] = true), a && (b[e++] = a);
    e < b.length && (b.length = e);
    return e > 1 ? b : b[0];
  }
  w.append = function(a, c) {
    return this.add(a, c, true);
  };
  w.update = function(a, c) {
    return this.remove(a).add(a, c);
  };
  w.remove = function(a) {
    ba(a) && (a = ca(a, this.key));
    for (var c of this.index.values()) c.remove(a, true);
    if (this.reg.has(a)) {
      if (this.tag && !this.fastupdate) for (let b of this.tag.values()) for (let e of b) {
        c = e[0];
        const d = e[1], f = d.indexOf(a);
        f > -1 && (d.length > 1 ? d.splice(f, 1) : b.delete(c));
      }
      this.store && this.store.delete(a);
      this.reg.delete(a);
    }
    this.cache && this.cache.remove(a);
    return this;
  };
  w.clear = function() {
    const a = [];
    for (const c of this.index.values()) {
      const b = c.clear();
      b.then && a.push(b);
    }
    if (this.tag) for (const c of this.tag.values()) c.clear();
    this.store && this.store.clear();
    this.cache && this.cache.clear();
    return a.length ? Promise.all(a) : this;
  };
  w.contain = function(a) {
    return this.db ? this.index.get(this.field[0]).db.has(a) : this.reg.has(a);
  };
  w.cleanup = function() {
    for (const a of this.index.values()) a.cleanup();
    return this;
  };
  w.get = function(a) {
    return this.db ? this.index.get(this.field[0]).db.enrich(a).then(function(c) {
      return c[0] && c[0].doc || null;
    }) : this.store.get(a) || null;
  };
  w.set = function(a, c) {
    typeof a === "object" && (c = a, a = ca(c, this.key));
    this.store.set(a, c);
    return this;
  };
  w.searchCache = la;
  w.export = jb;
  w.import = kb;
  Fa(Na.prototype);
  function lb(a, c = 0) {
    let b = [], e = [];
    c && (c = 25e4 / c * 5e3 | 0);
    for (const d of a.entries()) e.push(d), e.length === c && (b.push(e), e = []);
    e.length && b.push(e);
    return b;
  }
  function mb(a, c) {
    c || (c = /* @__PURE__ */ new Map());
    for (let b = 0, e; b < a.length; b++) e = a[b], c.set(e[0], e[1]);
    return c;
  }
  function nb(a, c = 0) {
    let b = [], e = [];
    c && (c = 25e4 / c * 1e3 | 0);
    for (const d of a.entries()) e.push([d[0], lb(d[1])[0]]), e.length === c && (b.push(e), e = []);
    e.length && b.push(e);
    return b;
  }
  function ob(a, c) {
    c || (c = /* @__PURE__ */ new Map());
    for (let b = 0, e, d; b < a.length; b++) e = a[b], d = c.get(e[0]), c.set(e[0], mb(e[1], d));
    return c;
  }
  function pb(a) {
    let c = [], b = [];
    for (const e of a.keys()) b.push(e), b.length === 25e4 && (c.push(b), b = []);
    b.length && c.push(b);
    return c;
  }
  function qb(a, c) {
    c || (c = /* @__PURE__ */ new Set());
    for (let b = 0; b < a.length; b++) c.add(a[b]);
    return c;
  }
  function rb(a, c, b, e, d, f, g = 0) {
    const h = e && e.constructor === Array;
    var k = h ? e.shift() : e;
    if (!k) return this.export(a, c, d, f + 1);
    if ((k = a((c ? c + "." : "") + (g + 1) + "." + b, JSON.stringify(k))) && k.then) {
      const l = this;
      return k.then(function() {
        return rb.call(l, a, c, b, h ? e : null, d, f, g + 1);
      });
    }
    return rb.call(this, a, c, b, h ? e : null, d, f, g + 1);
  }
  function jb(a, c, b = 0, e = 0) {
    if (b < this.field.length) {
      const g = this.field[b];
      if ((c = this.index.get(g).export(a, g, b, e = 1)) && c.then) {
        const h = this;
        return c.then(function() {
          return h.export(a, g, b + 1);
        });
      }
      return this.export(a, g, b + 1);
    }
    let d, f;
    switch (e) {
      case 0:
        d = "reg";
        f = pb(this.reg);
        c = null;
        break;
      case 1:
        d = "tag";
        f = this.tag && nb(this.tag, this.reg.size);
        c = null;
        break;
      case 2:
        d = "doc";
        f = this.store && lb(this.store);
        c = null;
        break;
      default:
        return;
    }
    return rb.call(this, a, c, d, f || null, b, e);
  }
  function kb(a, c) {
    var b = a.split(".");
    b[b.length - 1] === "json" && b.pop();
    const e = b.length > 2 ? b[0] : "";
    b = b.length > 2 ? b[2] : b[1];
    if (this.worker && e) return this.index.get(e).import(a);
    if (c) {
      typeof c === "string" && (c = JSON.parse(c));
      if (e) return this.index.get(e).import(b, c);
      switch (b) {
        case "reg":
          this.fastupdate = false;
          this.reg = qb(c, this.reg);
          for (let d = 0, f; d < this.field.length; d++) f = this.index.get(this.field[d]), f.fastupdate = false, f.reg = this.reg;
          if (this.worker) {
            c = [];
            for (const d of this.index.values()) c.push(d.import(a));
            return Promise.all(c);
          }
          break;
        case "tag":
          this.tag = ob(c, this.tag);
          break;
        case "doc":
          this.store = mb(c, this.store);
      }
    }
  }
  function sb(a, c) {
    let b = "";
    for (const e of a.entries()) {
      a = e[0];
      const d = e[1];
      let f = "";
      for (let g = 0, h; g < d.length; g++) {
        h = d[g] || [""];
        let k = "";
        for (let l = 0; l < h.length; l++) k += (k ? "," : "") + (c === "string" ? '"' + h[l] + '"' : h[l]);
        k = "[" + k + "]";
        f += (f ? "," : "") + k;
      }
      f = '["' + a + '",[' + f + "]]";
      b += (b ? "," : "") + f;
    }
    return b;
  }
  T.prototype.remove = function(a, c) {
    const b = this.reg.size && (this.fastupdate ? this.reg.get(a) : this.reg.has(a));
    if (b) {
      if (this.fastupdate) for (let e = 0, d, f; e < b.length; e++) {
        if ((d = b[e]) && (f = d.length)) if (d[f - 1] === a) d.pop();
        else {
          const g = d.indexOf(a);
          g >= 0 && d.splice(g, 1);
        }
      }
      else tb(this.map, a), this.depth && tb(this.ctx, a);
      c || this.reg.delete(a);
    }
    this.db && (this.commit_task.push({ del: a }), this.M && ub(this));
    this.cache && this.cache.remove(a);
    return this;
  };
  function tb(a, c) {
    let b = 0;
    var e = typeof c === "undefined";
    if (a.constructor === Array) for (let d = 0, f, g, h; d < a.length; d++) {
      if ((f = a[d]) && f.length) {
        if (e) return 1;
        g = f.indexOf(c);
        if (g >= 0) {
          if (f.length > 1) return f.splice(g, 1), 1;
          delete a[d];
          if (b) return 1;
          h = 1;
        } else {
          if (h) return 1;
          b++;
        }
      }
    }
    else for (let d of a.entries()) e = d[0], tb(d[1], c) ? b++ : a.delete(e);
    return b;
  }
  var vb = { memory: { resolution: 1 }, performance: { resolution: 3, fastupdate: true, context: { depth: 1, resolution: 1 } }, match: { tokenize: "forward" }, score: { resolution: 9, context: { depth: 2, resolution: 3 } } };
  T.prototype.add = function(a, c, b, e) {
    if (c && (a || a === 0)) {
      if (!e && !b && this.reg.has(a)) return this.update(a, c);
      e = this.depth;
      c = this.encoder.encode(c, !e);
      const l = c.length;
      if (l) {
        const m = I(), p = I(), u = this.resolution;
        for (let r = 0; r < l; r++) {
          let t = c[this.rtl ? l - 1 - r : r];
          var d = t.length;
          if (d && (e || !p[t])) {
            var f = this.score ? this.score(c, t, r, null, 0) : wb(u, l, r), g = "";
            switch (this.tokenize) {
              case "tolerant":
                Y(this, p, t, f, a, b);
                if (d > 2) {
                  for (let n = 1, q, x, v, A; n < d - 1; n++) q = t.charAt(n), x = t.charAt(n + 1), v = t.substring(0, n) + x, A = t.substring(n + 2), g = v + q + A, Y(this, p, g, f, a, b), g = v + A, Y(this, p, g, f, a, b);
                  Y(this, p, t.substring(0, t.length - 1), f, a, b);
                }
                break;
              case "full":
                if (d > 2) {
                  for (let n = 0, q; n < d; n++) for (f = d; f > n; f--) {
                    g = t.substring(n, f);
                    q = this.rtl ? d - 1 - n : n;
                    var h = this.score ? this.score(c, t, r, g, q) : wb(u, l, r, d, q);
                    Y(this, p, g, h, a, b);
                  }
                  break;
                }
              case "bidirectional":
              case "reverse":
                if (d > 1) {
                  for (h = d - 1; h > 0; h--) {
                    g = t[this.rtl ? d - 1 - h : h] + g;
                    var k = this.score ? this.score(c, t, r, g, h) : wb(u, l, r, d, h);
                    Y(this, p, g, k, a, b);
                  }
                  g = "";
                }
              case "forward":
                if (d > 1) {
                  for (h = 0; h < d; h++) g += t[this.rtl ? d - 1 - h : h], Y(
                    this,
                    p,
                    g,
                    f,
                    a,
                    b
                  );
                  break;
                }
              default:
                if (Y(this, p, t, f, a, b), e && l > 1 && r < l - 1) for (d = this.N, g = t, f = Math.min(e + 1, this.rtl ? r + 1 : l - r), h = 1; h < f; h++) {
                  t = c[this.rtl ? l - 1 - r - h : r + h];
                  k = this.bidirectional && t > g;
                  const n = this.score ? this.score(c, g, r, t, h - 1) : wb(d + (l / 2 > d ? 0 : 1), l, r, f - 1, h - 1);
                  Y(this, m, k ? g : t, n, a, b, k ? t : g);
                }
            }
          }
        }
        this.fastupdate || this.reg.add(a);
      }
    }
    this.db && (this.commit_task.push(b ? { ins: a } : { del: a }), this.M && ub(this));
    return this;
  };
  function Y(a, c, b, e, d, f, g) {
    let h, k;
    if (!(h = c[b]) || g && !h[g]) {
      g ? (c = h || (c[b] = I()), c[g] = 1, k = a.ctx, (h = k.get(g)) ? k = h : k.set(g, k = a.keystore ? new R(a.keystore) : /* @__PURE__ */ new Map())) : (k = a.map, c[b] = 1);
      (h = k.get(b)) ? k = h : k.set(b, k = h = []);
      if (f) {
        for (let l = 0, m; l < h.length; l++) if ((m = h[l]) && m.includes(d)) {
          if (l <= e) return;
          m.splice(m.indexOf(d), 1);
          a.fastupdate && (c = a.reg.get(d)) && c.splice(c.indexOf(m), 1);
          break;
        }
      }
      k = k[e] || (k[e] = []);
      k.push(d);
      if (k.length === __pow(2, 31) - 1) {
        c = new xa(k);
        if (a.fastupdate) for (let l of a.reg.values()) l.includes(k) && (l[l.indexOf(k)] = c);
        h[e] = k = c;
      }
      a.fastupdate && ((e = a.reg.get(d)) ? e.push(k) : a.reg.set(d, [k]));
    }
  }
  function wb(a, c, b, e, d) {
    return b && a > 1 ? c + (e || 0) <= a ? b + (d || 0) : (a - 1) / (c + (e || 0)) * (b + (d || 0)) + 1 | 0 : 0;
  }
  T.prototype.search = function(a, c, b) {
    b || (c || typeof a !== "object" ? typeof c === "object" && (b = c, c = 0) : (b = a, a = ""));
    if (b && b.cache) return b.cache = false, a = this.searchCache(a, c, b), b.cache = true, a;
    let e = [], d, f, g, h = 0, k, l, m, p, u;
    b && (a = b.query || a, c = b.limit || c, h = b.offset || 0, f = b.context, g = b.suggest, u = (k = b.resolve) && b.enrich, m = b.boost, p = b.resolution, l = this.db && b.tag);
    typeof k === "undefined" && (k = this.resolve);
    f = this.depth && f !== false;
    let r = this.encoder.encode(a, !f);
    d = r.length;
    c = c || (k ? 100 : 0);
    if (d === 1) return xb.call(
      this,
      r[0],
      "",
      c,
      h,
      k,
      u,
      l
    );
    if (d === 2 && f && !g) return xb.call(this, r[1], r[0], c, h, k, u, l);
    let t = I(), n = 0, q;
    f && (q = r[0], n = 1);
    p || p === 0 || (p = q ? this.N : this.resolution);
    if (this.db) {
      if (this.db.search && (b = this.db.search(this, r, c, h, g, k, u, l), b !== false)) return b;
      const x = this;
      return function() {
        return __async(this, null, function* () {
          for (let v, A; n < d; n++) {
            if ((A = r[n]) && !t[A]) {
              t[A] = 1;
              v = yield yb(x, A, q, 0, 0, false, false);
              if (v = zb(v, e, g, p)) {
                e = v;
                break;
              }
              q && (g && v && e.length || (q = A));
            }
            g && q && n === d - 1 && !e.length && (p = x.resolution, q = "", n = -1, t = I());
          }
          return Ab(e, p, c, h, g, m, k);
        });
      }();
    }
    for (let x, v; n < d; n++) {
      if ((v = r[n]) && !t[v]) {
        t[v] = 1;
        x = yb(this, v, q, 0, 0, false, false);
        if (x = zb(x, e, g, p)) {
          e = x;
          break;
        }
        q && (g && x && e.length || (q = v));
      }
      g && q && n === d - 1 && !e.length && (p = this.resolution, q = "", n = -1, t = I());
    }
    return Ab(e, p, c, h, g, m, k);
  };
  function Ab(a, c, b, e, d, f, g) {
    let h = a.length, k = a;
    if (h > 1) k = $a(a, c, b, e, d, f, g);
    else if (h === 1) return g ? Sa.call(null, a[0], b, e) : new X(a[0], this);
    return g ? k : new X(k, this);
  }
  function xb(a, c, b, e, d, f, g) {
    a = yb(this, a, c, b, e, d, f, g);
    return this.db ? a.then(function(h) {
      return d ? h || [] : new X(h, this);
    }) : a && a.length ? d ? Sa.call(this, a, b, e) : new X(a, this) : d ? [] : new X([], this);
  }
  function zb(a, c, b, e) {
    let d = [];
    if (a && a.length) {
      if (a.length <= e) {
        c.push(a);
        return;
      }
      for (let f = 0, g; f < e; f++) if (g = a[f]) d[f] = g;
      if (d.length) {
        c.push(d);
        return;
      }
    }
    if (!b) return d;
  }
  function yb(a, c, b, e, d, f, g, h) {
    let k;
    b && (k = a.bidirectional && c > b) && (k = b, b = c, c = k);
    if (a.db) return a.db.get(c, b, e, d, f, g, h);
    a = b ? (a = a.ctx.get(b)) && a.get(c) : a.map.get(c);
    return a;
  }
  function T(a, c) {
    if (!this || this.constructor !== T) return new T(a);
    if (a) {
      var b = M(a) ? a : a.preset;
      b && (a = Object.assign({}, vb[b], a));
    } else a = {};
    b = a.context;
    const e = b === true ? { depth: 1 } : b || {}, d = M(a.encoder) ? va[a.encoder] : a.encode || a.encoder || {};
    this.encoder = d.encode ? d : typeof d === "object" ? new ka(d) : { encode: d };
    this.resolution = a.resolution || 9;
    this.tokenize = b = (b = a.tokenize) && b !== "default" && b !== "exact" && b || "strict";
    this.depth = b === "strict" && e.depth || 0;
    this.bidirectional = e.bidirectional !== false;
    this.fastupdate = !!a.fastupdate;
    this.score = a.score || null;
    (b = a.keystore || 0) && (this.keystore = b);
    this.map = b ? new R(b) : /* @__PURE__ */ new Map();
    this.ctx = b ? new R(b) : /* @__PURE__ */ new Map();
    this.reg = c || (this.fastupdate ? b ? new R(b) : /* @__PURE__ */ new Map() : b ? new S(b) : /* @__PURE__ */ new Set());
    this.N = e.resolution || 3;
    this.rtl = d.rtl || a.rtl || false;
    this.cache = (b = a.cache || null) && new ma(b);
    this.resolve = a.resolve !== false;
    if (b = a.db) this.db = this.mount(b);
    this.M = a.commit !== false;
    this.commit_task = [];
    this.commit_timer = null;
    this.priority = a.priority || 4;
  }
  w = T.prototype;
  w.mount = function(a) {
    this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
    return a.mount(this);
  };
  w.commit = function() {
    this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
    return this.db.commit(this);
  };
  w.destroy = function() {
    this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
    return this.db.destroy();
  };
  function ub(a) {
    a.commit_timer || (a.commit_timer = setTimeout(function() {
      a.commit_timer = null;
      a.db.commit(a);
    }, 1));
  }
  w.clear = function() {
    this.map.clear();
    this.ctx.clear();
    this.reg.clear();
    this.cache && this.cache.clear();
    return this.db ? (this.commit_timer && clearTimeout(this.commit_timer), this.commit_timer = null, this.commit_task = [], this.db.clear()) : this;
  };
  w.append = function(a, c) {
    return this.add(a, c, true);
  };
  w.contain = function(a) {
    return this.db ? this.db.has(a) : this.reg.has(a);
  };
  w.update = function(a, c) {
    const b = this, e = this.remove(a);
    return e && e.then ? e.then(() => b.add(a, c)) : this.add(a, c);
  };
  w.cleanup = function() {
    if (!this.fastupdate) return this;
    tb(this.map);
    this.depth && tb(this.ctx);
    return this;
  };
  w.searchCache = la;
  w.export = function(a, c, b = 0, e = 0) {
    let d, f;
    switch (e) {
      case 0:
        d = "reg";
        f = pb(this.reg);
        break;
      case 1:
        d = "cfg";
        f = null;
        break;
      case 2:
        d = "map";
        f = lb(this.map, this.reg.size);
        break;
      case 3:
        d = "ctx";
        f = nb(this.ctx, this.reg.size);
        break;
      default:
        return;
    }
    return rb.call(this, a, c, d, f, b, e);
  };
  w.import = function(a, c) {
    if (c) switch (typeof c === "string" && (c = JSON.parse(c)), a = a.split("."), a[a.length - 1] === "json" && a.pop(), a.length === 3 && a.shift(), a = a.length > 1 ? a[1] : a[0], a) {
      case "reg":
        this.fastupdate = false;
        this.reg = qb(c, this.reg);
        break;
      case "map":
        this.map = mb(c, this.map);
        break;
      case "ctx":
        this.ctx = ob(c, this.ctx);
    }
  };
  w.serialize = function(a = true) {
    let c = "", b = "", e = "";
    if (this.reg.size) {
      let f;
      for (var d of this.reg.keys()) f || (f = typeof d), c += (c ? "," : "") + (f === "string" ? '"' + d + '"' : d);
      c = "index.reg=new Set([" + c + "]);";
      b = sb(this.map, f);
      b = "index.map=new Map([" + b + "]);";
      for (const g of this.ctx.entries()) {
        d = g[0];
        let h = sb(g[1], f);
        h = "new Map([" + h + "])";
        h = '["' + d + '",' + h + "]";
        e += (e ? "," : "") + h;
      }
      e = "index.ctx=new Map([" + e + "]);";
    }
    return a ? "function inject(index){" + c + b + e + "}" : c + b + e;
  };
  Fa(T.prototype);
  var Bb = typeof window !== "undefined" && (window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
  var Cb = ["map", "ctx", "tag", "reg", "cfg"];
  var Db = I();
  function Eb(a, c = {}) {
    if (!this || this.constructor !== Eb) return new Eb(a, c);
    typeof a === "object" && (c = a, a = a.name);
    a || console.info("Default storage space was used, because a name was not passed.");
    this.id = "flexsearch" + (a ? ":" + a.toLowerCase().replace(/[^a-z0-9_\-]/g, "") : "");
    this.field = c.field ? c.field.toLowerCase().replace(/[^a-z0-9_\-]/g, "") : "";
    this.type = c.type;
    this.fastupdate = this.support_tag_search = false;
    this.db = null;
    this.h = {};
  }
  w = Eb.prototype;
  w.mount = function(a) {
    if (a.index) return a.mount(this);
    a.db = this;
    return this.open();
  };
  w.open = function() {
    if (this.db) return this.db;
    let a = this;
    navigator.storage && navigator.storage.persist();
    Db[a.id] || (Db[a.id] = []);
    Db[a.id].push(a.field);
    const c = Bb.open(a.id, 1);
    c.onupgradeneeded = function() {
      const b = a.db = this.result;
      for (let e = 0, d; e < Cb.length; e++) {
        d = Cb[e];
        for (let f = 0, g; f < Db[a.id].length; f++) g = Db[a.id][f], b.objectStoreNames.contains(d + (d !== "reg" ? g ? ":" + g : "" : "")) || b.createObjectStore(d + (d !== "reg" ? g ? ":" + g : "" : ""));
      }
    };
    return a.db = Z(c, function(b) {
      a.db = b;
      a.db.onversionchange = function() {
        a.close();
      };
    });
  };
  w.close = function() {
    this.db && this.db.close();
    this.db = null;
  };
  w.destroy = function() {
    const a = Bb.deleteDatabase(this.id);
    return Z(a);
  };
  w.clear = function() {
    const a = [];
    for (let b = 0, e; b < Cb.length; b++) {
      e = Cb[b];
      for (let d = 0, f; d < Db[this.id].length; d++) f = Db[this.id][d], a.push(e + (e !== "reg" ? f ? ":" + f : "" : ""));
    }
    const c = this.db.transaction(a, "readwrite");
    for (let b = 0; b < a.length; b++) c.objectStore(a[b]).clear();
    return Z(c);
  };
  w.get = function(a, c, b = 0, e = 0, d = true, f = false) {
    a = this.db.transaction((c ? "ctx" : "map") + (this.field ? ":" + this.field : ""), "readonly").objectStore((c ? "ctx" : "map") + (this.field ? ":" + this.field : "")).get(c ? c + ":" + a : a);
    const g = this;
    return Z(a).then(function(h) {
      let k = [];
      if (!h || !h.length) return k;
      if (d) {
        if (!b && !e && h.length === 1) return h[0];
        for (let l = 0, m; l < h.length; l++) if ((m = h[l]) && m.length) {
          if (e >= m.length) {
            e -= m.length;
            continue;
          }
          const p = b ? e + Math.min(m.length - e, b) : m.length;
          for (let u = e; u < p; u++) k.push(m[u]);
          e = 0;
          if (k.length === b) break;
        }
        return f ? g.enrich(k) : k;
      }
      return h;
    });
  };
  w.tag = function(a, c = 0, b = 0, e = false) {
    a = this.db.transaction("tag" + (this.field ? ":" + this.field : ""), "readonly").objectStore("tag" + (this.field ? ":" + this.field : "")).get(a);
    const d = this;
    return Z(a).then(function(f) {
      if (!f || !f.length || b >= f.length) return [];
      if (!c && !b) return f;
      f = f.slice(b, b + c);
      return e ? d.enrich(f) : f;
    });
  };
  w.enrich = function(a) {
    typeof a !== "object" && (a = [a]);
    const c = this.db.transaction("reg", "readonly").objectStore("reg"), b = [];
    for (let e = 0; e < a.length; e++) b[e] = Z(c.get(a[e]));
    return Promise.all(b).then(function(e) {
      for (let d = 0; d < e.length; d++) e[d] = { id: a[d], doc: e[d] ? JSON.parse(e[d]) : null };
      return e;
    });
  };
  w.has = function(a) {
    a = this.db.transaction("reg", "readonly").objectStore("reg").getKey(a);
    return Z(a).then(function(c) {
      return !!c;
    });
  };
  w.search = null;
  w.info = function() {
  };
  w.transaction = function(a, c, b) {
    a += a !== "reg" ? this.field ? ":" + this.field : "" : "";
    let e = this.h[a + ":" + c];
    if (e) return b.call(this, e);
    let d = this.db.transaction(a, c);
    this.h[a + ":" + c] = e = d.objectStore(a);
    const f = b.call(this, e);
    this.h[a + ":" + c] = null;
    return Z(d).finally(function() {
      d = e = null;
      return f;
    });
  };
  w.commit = function(a) {
    return __async(this, null, function* () {
      let c = a.commit_task, b = [];
      a.commit_task = [];
      for (let e = 0, d; e < c.length; e++) d = c[e], d.del && b.push(d.del);
      b.length && (yield this.remove(b));
      a.reg.size && (yield this.transaction("map", "readwrite", function(e) {
        for (const d of a.map) {
          const f = d[0], g = d[1];
          g.length && (e.get(f).onsuccess = function() {
            let h = this.result;
            var k;
            if (h && h.length) {
              const l = Math.max(h.length, g.length);
              for (let m = 0, p, u; m < l; m++) if ((u = g[m]) && u.length) {
                if ((p = h[m]) && p.length) for (k = 0; k < u.length; k++) p.push(u[k]);
                else h[m] = u;
                k = 1;
              }
            } else h = g, k = 1;
            k && e.put(h, f);
          });
        }
      }), yield this.transaction("ctx", "readwrite", function(e) {
        for (const d of a.ctx) {
          const f = d[0], g = d[1];
          for (const h of g) {
            const k = h[0], l = h[1];
            l.length && (e.get(f + ":" + k).onsuccess = function() {
              let m = this.result;
              var p;
              if (m && m.length) {
                const u = Math.max(m.length, l.length);
                for (let r = 0, t, n; r < u; r++) if ((n = l[r]) && n.length) {
                  if ((t = m[r]) && t.length) for (p = 0; p < n.length; p++) t.push(n[p]);
                  else m[r] = n;
                  p = 1;
                }
              } else m = l, p = 1;
              p && e.put(m, f + ":" + k);
            });
          }
        }
      }), a.store ? yield this.transaction(
        "reg",
        "readwrite",
        function(e) {
          for (const d of a.store) {
            const f = d[0], g = d[1];
            e.put(typeof g === "object" ? JSON.stringify(g) : 1, f);
          }
        }
      ) : a.bypass || (yield this.transaction("reg", "readwrite", function(e) {
        for (const d of a.reg.keys()) e.put(1, d);
      })), a.tag && (yield this.transaction("tag", "readwrite", function(e) {
        for (const d of a.tag) {
          const f = d[0], g = d[1];
          g.length && (e.get(f).onsuccess = function() {
            let h = this.result;
            h = h && h.length ? h.concat(g) : g;
            e.put(h, f);
          });
        }
      })), a.map.clear(), a.ctx.clear(), a.tag && a.tag.clear(), a.store && a.store.clear(), a.document || a.reg.clear());
    });
  };
  function Fb(a, c, b) {
    const e = a.value;
    let d, f = 0;
    for (let g = 0, h; g < e.length; g++) {
      if (h = b ? e : e[g]) {
        for (let k = 0, l, m; k < c.length; k++) if (m = c[k], l = h.indexOf(m), l >= 0) if (d = 1, h.length > 1) h.splice(l, 1);
        else {
          e[g] = [];
          break;
        }
        f += h.length;
      }
      if (b) break;
    }
    f ? d && a.update(e) : a.delete();
    a.continue();
  }
  w.remove = function(a) {
    typeof a !== "object" && (a = [a]);
    return Promise.all([this.transaction("map", "readwrite", function(c) {
      c.openCursor().onsuccess = function() {
        const b = this.result;
        b && Fb(b, a);
      };
    }), this.transaction("ctx", "readwrite", function(c) {
      c.openCursor().onsuccess = function() {
        const b = this.result;
        b && Fb(b, a);
      };
    }), this.transaction("tag", "readwrite", function(c) {
      c.openCursor().onsuccess = function() {
        const b = this.result;
        b && Fb(b, a, true);
      };
    }), this.transaction("reg", "readwrite", function(c) {
      for (let b = 0; b < a.length; b++) c.delete(a[b]);
    })]);
  };
  function Z(a, c) {
    return new Promise((b, e) => {
      a.onsuccess = a.oncomplete = function() {
        c && c(this.result);
        c = null;
        b(this.result);
      };
      a.onerror = a.onblocked = e;
      a = null;
    });
  }
  var flexsearch_bundle_module_min_default = { Index: T, Charset: va, Encoder: ka, Document: Na, Worker: La, Resolver: X, IndexedDB: Eb, Language: {} };

  // <stdin>
  (function() {
    "use strict";
    const index = new flexsearch_bundle_module_min_default.Document({
      tokenize: "forward",
      document: {
        id: "id",
        index: [
          {
            field: "title"
          },
          {
            field: "tags"
          },
          {
            field: "content"
          },
          {
            field: "date",
            tokenize: "strict",
            encode: false
          }
        ],
        store: ["title", "summary", "date", "permalink"]
      }
    });
    function showResults(items) {
      const template = document.querySelector("template").content;
      const fragment = document.createDocumentFragment();
      const results = document.querySelector(".search-results");
      results.textContent = "";
      const itemsLength = Object.keys(items).length;
      if (itemsLength === 0 && query.value === "") {
        document.querySelector(".search-no-results").classList.add("d-none");
        document.querySelector(".search-no-recent").classList.remove("d-none");
      } else if (itemsLength === 0 && query.value !== "") {
        document.querySelector(".search-no-recent").classList.add("d-none");
        const queryNoResults = document.querySelector(".query-no-results");
        queryNoResults.innerText = query.value;
        document.querySelector(".search-no-results").classList.remove("d-none");
      } else {
        document.querySelector(".search-no-recent").classList.add("d-none");
        document.querySelector(".search-no-results").classList.add("d-none");
      }
      for (const id in items) {
        const item = items[id];
        const result = template.cloneNode(true);
        const a = result.querySelector("a");
        const time = result.querySelector("time");
        const content = result.querySelector(".content");
        a.innerHTML = item.title;
        a.href = item.permalink;
        time.innerText = item.date;
        content.innerHTML = item.summary;
        fragment.appendChild(result);
      }
      results.appendChild(fragment);
    }
    function doSearch() {
      const query2 = document.querySelector(".search-text").value.trim();
      const limit = 99;
      const results = index.search({
        query: query2,
        enrich: true,
        limit
      });
      const items = {};
      results.forEach(function(result) {
        result.result.forEach(function(r) {
          items[r.id] = r.doc;
        });
      });
      showResults(items);
    }
    function enableUI() {
      const searchform = document.querySelector(".search-form");
      searchform.addEventListener("submit", function(e) {
        e.preventDefault();
        doSearch();
      });
      searchform.addEventListener("input", function() {
        doSearch();
      });
      document.querySelector(".search-loading").classList.add("d-none");
      document.querySelector(".search-input").classList.remove("d-none");
      document.querySelector(".search-text").focus();
    }
    function buildIndex() {
      document.querySelector(".search-loading").classList.remove("d-none");
      fetch("/search-index.json").then(function(response) {
        return response.json();
      }).then(function(data) {
        data.forEach(function(item) {
          index.add(item);
        });
      });
    }
    buildIndex();
    enableUI();
  })();
})();
/*!
 * FlexSearch for Bootstrap based Thulite sites
 * Copyright 2021-2024 Thulite
 * Licensed under the MIT License
 * Based on https://github.com/frjo/hugo-theme-zen/blob/main/assets/js/search.js
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2ZsZXhzZWFyY2gvZGlzdC9mbGV4c2VhcmNoLmJ1bmRsZS5tb2R1bGUubWluLmpzIiwgIjxzdGRpbj4iXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiFcclxuICogRmxleFNlYXJjaC5qcyB2MC44LjIwNSAoQnVuZGxlL01vZHVsZSlcclxuICogQXV0aG9yIGFuZCBDb3B5cmlnaHQ6IFRob21hcyBXaWxrZXJsaW5nXHJcbiAqIExpY2VuY2U6IEFwYWNoZS0yLjBcclxuICogSG9zdGVkIGJ5IE5leHRhcHBzIEdtYkhcclxuICogaHR0cHM6Ly9naXRodWIuY29tL25leHRhcHBzLWRlL2ZsZXhzZWFyY2hcclxuICovXHJcbnZhciB3O2Z1bmN0aW9uIEgoYSxjLGIpe2NvbnN0IGU9dHlwZW9mIGIsZD10eXBlb2YgYTtpZihlIT09XCJ1bmRlZmluZWRcIil7aWYoZCE9PVwidW5kZWZpbmVkXCIpe2lmKGIpe2lmKGQ9PT1cImZ1bmN0aW9uXCImJmU9PT1kKXJldHVybiBmdW5jdGlvbihoKXtyZXR1cm4gYShiKGgpKX07Yz1hLmNvbnN0cnVjdG9yO2lmKGM9PT1iLmNvbnN0cnVjdG9yKXtpZihjPT09QXJyYXkpcmV0dXJuIGIuY29uY2F0KGEpO2lmKGM9PT1NYXApe3ZhciBmPW5ldyBNYXAoYik7Zm9yKHZhciBnIG9mIGEpZi5zZXQoZ1swXSxnWzFdKTtyZXR1cm4gZn1pZihjPT09U2V0KXtnPW5ldyBTZXQoYik7Zm9yKGYgb2YgYS52YWx1ZXMoKSlnLmFkZChmKTtyZXR1cm4gZ319fXJldHVybiBhfXJldHVybiBifXJldHVybiBkPT09XCJ1bmRlZmluZWRcIj9jOmF9ZnVuY3Rpb24gYWEoYSxjKXtyZXR1cm4gdHlwZW9mIGE9PT1cInVuZGVmaW5lZFwiP2M6YX1mdW5jdGlvbiBJKCl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCl9XHJcbmZ1bmN0aW9uIE0oYSl7cmV0dXJuIHR5cGVvZiBhPT09XCJzdHJpbmdcIn1mdW5jdGlvbiBiYShhKXtyZXR1cm4gdHlwZW9mIGE9PT1cIm9iamVjdFwifWZ1bmN0aW9uIGNhKGEsYyl7aWYoTShjKSlhPWFbY107ZWxzZSBmb3IobGV0IGI9MDthJiZiPGMubGVuZ3RoO2IrKylhPWFbY1tiXV07cmV0dXJuIGF9O2NvbnN0IGVhPS9bXlxccHtMfVxccHtOfV0rL3UsZmE9LyhcXGR7M30pL2csaGE9LyhcXEQpKFxcZHszfSkvZyxpYT0vKFxcZHszfSkoXFxEKS9nLGphPS9bXFx1MDMwMC1cXHUwMzZmXS9nO2Z1bmN0aW9uIGthKGE9e30pe2lmKCF0aGlzfHx0aGlzLmNvbnN0cnVjdG9yIT09a2EpcmV0dXJuIG5ldyBrYSguLi5hcmd1bWVudHMpO2lmKGFyZ3VtZW50cy5sZW5ndGgpZm9yKGE9MDthPGFyZ3VtZW50cy5sZW5ndGg7YSsrKXRoaXMuYXNzaWduKGFyZ3VtZW50c1thXSk7ZWxzZSB0aGlzLmFzc2lnbihhKX13PWthLnByb3RvdHlwZTtcclxudy5hc3NpZ249ZnVuY3Rpb24oYSl7dGhpcy5ub3JtYWxpemU9SChhLm5vcm1hbGl6ZSwhMCx0aGlzLm5vcm1hbGl6ZSk7bGV0IGM9YS5pbmNsdWRlLGI9Y3x8YS5leGNsdWRlfHxhLnNwbGl0LGU7aWYoYnx8Yj09PVwiXCIpe2lmKHR5cGVvZiBiPT09XCJvYmplY3RcIiYmYi5jb25zdHJ1Y3RvciE9PVJlZ0V4cCl7bGV0IGQ9XCJcIjtlPSFjO2N8fChkKz1cIlxcXFxwe1p9XCIpO2IubGV0dGVyJiYoZCs9XCJcXFxccHtMfVwiKTtiLm51bWJlciYmKGQrPVwiXFxcXHB7Tn1cIixlPSEhYyk7Yi5zeW1ib2wmJihkKz1cIlxcXFxwe1N9XCIpO2IucHVuY3R1YXRpb24mJihkKz1cIlxcXFxwe1B9XCIpO2IuY29udHJvbCYmKGQrPVwiXFxcXHB7Q31cIik7aWYoYj1iLmNoYXIpZCs9dHlwZW9mIGI9PT1cIm9iamVjdFwiP2Iuam9pbihcIlwiKTpiO3RyeXt0aGlzLnNwbGl0PW5ldyBSZWdFeHAoXCJbXCIrKGM/XCJeXCI6XCJcIikrZCtcIl0rXCIsXCJ1XCIpfWNhdGNoKGYpe3RoaXMuc3BsaXQ9L1xccysvfX1lbHNlIHRoaXMuc3BsaXQ9YixlPWI9PT0hMXx8XCJhMWFcIi5zcGxpdChiKS5sZW5ndGg8XHJcbjI7dGhpcy5udW1lcmljPUgoYS5udW1lcmljLGUpfWVsc2V7dHJ5e3RoaXMuc3BsaXQ9SCh0aGlzLnNwbGl0LGVhKX1jYXRjaChkKXt0aGlzLnNwbGl0PS9cXHMrL310aGlzLm51bWVyaWM9SChhLm51bWVyaWMsSCh0aGlzLm51bWVyaWMsITApKX10aGlzLnByZXBhcmU9SChhLnByZXBhcmUsbnVsbCx0aGlzLnByZXBhcmUpO3RoaXMuZmluYWxpemU9SChhLmZpbmFsaXplLG51bGwsdGhpcy5maW5hbGl6ZSk7Yj1hLmZpbHRlcjt0aGlzLmZpbHRlcj10eXBlb2YgYj09PVwiZnVuY3Rpb25cIj9iOkgoYiYmbmV3IFNldChiKSxudWxsLHRoaXMuZmlsdGVyKTt0aGlzLmRlZHVwZT1IKGEuZGVkdXBlLCEwLHRoaXMuZGVkdXBlKTt0aGlzLm1hdGNoZXI9SCgoYj1hLm1hdGNoZXIpJiZuZXcgTWFwKGIpLG51bGwsdGhpcy5tYXRjaGVyKTt0aGlzLm1hcHBlcj1IKChiPWEubWFwcGVyKSYmbmV3IE1hcChiKSxudWxsLHRoaXMubWFwcGVyKTt0aGlzLnN0ZW1tZXI9SCgoYj1hLnN0ZW1tZXIpJiZuZXcgTWFwKGIpLFxyXG5udWxsLHRoaXMuc3RlbW1lcik7dGhpcy5yZXBsYWNlcj1IKGEucmVwbGFjZXIsbnVsbCx0aGlzLnJlcGxhY2VyKTt0aGlzLm1pbmxlbmd0aD1IKGEubWlubGVuZ3RoLDEsdGhpcy5taW5sZW5ndGgpO3RoaXMubWF4bGVuZ3RoPUgoYS5tYXhsZW5ndGgsMTAyNCx0aGlzLm1heGxlbmd0aCk7dGhpcy5ydGw9SChhLnJ0bCwhMSx0aGlzLnJ0bCk7aWYodGhpcy5jYWNoZT1iPUgoYS5jYWNoZSwhMCx0aGlzLmNhY2hlKSl0aGlzLkY9bnVsbCx0aGlzLkw9dHlwZW9mIGI9PT1cIm51bWJlclwiP2I6MkU1LHRoaXMuQj1uZXcgTWFwLHRoaXMuRD1uZXcgTWFwLHRoaXMuST10aGlzLkg9MTI4O3RoaXMuaD1cIlwiO3RoaXMuSj1udWxsO3RoaXMuQT1cIlwiO3RoaXMuSz1udWxsO2lmKHRoaXMubWF0Y2hlcilmb3IoY29uc3QgZCBvZiB0aGlzLm1hdGNoZXIua2V5cygpKXRoaXMuaCs9KHRoaXMuaD9cInxcIjpcIlwiKStkO2lmKHRoaXMuc3RlbW1lcilmb3IoY29uc3QgZCBvZiB0aGlzLnN0ZW1tZXIua2V5cygpKXRoaXMuQSs9XHJcbih0aGlzLkE/XCJ8XCI6XCJcIikrZDtyZXR1cm4gdGhpc307dy5hZGRTdGVtbWVyPWZ1bmN0aW9uKGEsYyl7dGhpcy5zdGVtbWVyfHwodGhpcy5zdGVtbWVyPW5ldyBNYXApO3RoaXMuc3RlbW1lci5zZXQoYSxjKTt0aGlzLkErPSh0aGlzLkE/XCJ8XCI6XCJcIikrYTt0aGlzLks9bnVsbDt0aGlzLmNhY2hlJiZRKHRoaXMpO3JldHVybiB0aGlzfTt3LmFkZEZpbHRlcj1mdW5jdGlvbihhKXt0eXBlb2YgYT09PVwiZnVuY3Rpb25cIj90aGlzLmZpbHRlcj1hOih0aGlzLmZpbHRlcnx8KHRoaXMuZmlsdGVyPW5ldyBTZXQpLHRoaXMuZmlsdGVyLmFkZChhKSk7dGhpcy5jYWNoZSYmUSh0aGlzKTtyZXR1cm4gdGhpc307XHJcbncuYWRkTWFwcGVyPWZ1bmN0aW9uKGEsYyl7aWYodHlwZW9mIGE9PT1cIm9iamVjdFwiKXJldHVybiB0aGlzLmFkZFJlcGxhY2VyKGEsYyk7aWYoYS5sZW5ndGg+MSlyZXR1cm4gdGhpcy5hZGRNYXRjaGVyKGEsYyk7dGhpcy5tYXBwZXJ8fCh0aGlzLm1hcHBlcj1uZXcgTWFwKTt0aGlzLm1hcHBlci5zZXQoYSxjKTt0aGlzLmNhY2hlJiZRKHRoaXMpO3JldHVybiB0aGlzfTt3LmFkZE1hdGNoZXI9ZnVuY3Rpb24oYSxjKXtpZih0eXBlb2YgYT09PVwib2JqZWN0XCIpcmV0dXJuIHRoaXMuYWRkUmVwbGFjZXIoYSxjKTtpZihhLmxlbmd0aDwyJiYodGhpcy5kZWR1cGV8fHRoaXMubWFwcGVyKSlyZXR1cm4gdGhpcy5hZGRNYXBwZXIoYSxjKTt0aGlzLm1hdGNoZXJ8fCh0aGlzLm1hdGNoZXI9bmV3IE1hcCk7dGhpcy5tYXRjaGVyLnNldChhLGMpO3RoaXMuaCs9KHRoaXMuaD9cInxcIjpcIlwiKSthO3RoaXMuSj1udWxsO3RoaXMuY2FjaGUmJlEodGhpcyk7cmV0dXJuIHRoaXN9O1xyXG53LmFkZFJlcGxhY2VyPWZ1bmN0aW9uKGEsYyl7aWYodHlwZW9mIGE9PT1cInN0cmluZ1wiKXJldHVybiB0aGlzLmFkZE1hdGNoZXIoYSxjKTt0aGlzLnJlcGxhY2VyfHwodGhpcy5yZXBsYWNlcj1bXSk7dGhpcy5yZXBsYWNlci5wdXNoKGEsYyk7dGhpcy5jYWNoZSYmUSh0aGlzKTtyZXR1cm4gdGhpc307XHJcbncuZW5jb2RlPWZ1bmN0aW9uKGEsYyl7aWYodGhpcy5jYWNoZSYmYS5sZW5ndGg8PXRoaXMuSClpZih0aGlzLkYpe2lmKHRoaXMuQi5oYXMoYSkpcmV0dXJuIHRoaXMuQi5nZXQoYSl9ZWxzZSB0aGlzLkY9c2V0VGltZW91dChRLDUwLHRoaXMpO3RoaXMubm9ybWFsaXplJiYodHlwZW9mIHRoaXMubm9ybWFsaXplPT09XCJmdW5jdGlvblwiP2E9dGhpcy5ub3JtYWxpemUoYSk6YT1qYT9hLm5vcm1hbGl6ZShcIk5GS0RcIikucmVwbGFjZShqYSxcIlwiKS50b0xvd2VyQ2FzZSgpOmEudG9Mb3dlckNhc2UoKSk7dGhpcy5wcmVwYXJlJiYoYT10aGlzLnByZXBhcmUoYSkpO3RoaXMubnVtZXJpYyYmYS5sZW5ndGg+MyYmKGE9YS5yZXBsYWNlKGhhLFwiJDEgJDJcIikucmVwbGFjZShpYSxcIiQxICQyXCIpLnJlcGxhY2UoZmEsXCIkMSBcIikpO2NvbnN0IGI9ISh0aGlzLmRlZHVwZXx8dGhpcy5tYXBwZXJ8fHRoaXMuZmlsdGVyfHx0aGlzLm1hdGNoZXJ8fHRoaXMuc3RlbW1lcnx8dGhpcy5yZXBsYWNlcik7bGV0IGU9XHJcbltdLGQ9SSgpLGYsZyxoPXRoaXMuc3BsaXR8fHRoaXMuc3BsaXQ9PT1cIlwiP2Euc3BsaXQodGhpcy5zcGxpdCk6W2FdO2ZvcihsZXQgbD0wLG0scDtsPGgubGVuZ3RoO2wrKylpZigobT1wPWhbbF0pJiYhKG0ubGVuZ3RoPHRoaXMubWlubGVuZ3RofHxtLmxlbmd0aD50aGlzLm1heGxlbmd0aCkpe2lmKGMpe2lmKGRbbV0pY29udGludWU7ZFttXT0xfWVsc2V7aWYoZj09PW0pY29udGludWU7Zj1tfWlmKGIpZS5wdXNoKG0pO2Vsc2UgaWYoIXRoaXMuZmlsdGVyfHwodHlwZW9mIHRoaXMuZmlsdGVyPT09XCJmdW5jdGlvblwiP3RoaXMuZmlsdGVyKG0pOiF0aGlzLmZpbHRlci5oYXMobSkpKXtpZih0aGlzLmNhY2hlJiZtLmxlbmd0aDw9dGhpcy5JKWlmKHRoaXMuRil7dmFyIGs9dGhpcy5ELmdldChtKTtpZihrfHxrPT09XCJcIil7ayYmZS5wdXNoKGspO2NvbnRpbnVlfX1lbHNlIHRoaXMuRj1zZXRUaW1lb3V0KFEsNTAsdGhpcyk7aWYodGhpcy5zdGVtbWVyKXt0aGlzLkt8fCh0aGlzLks9bmV3IFJlZ0V4cChcIig/IV4pKFwiK1xyXG50aGlzLkErXCIpJFwiKSk7bGV0IHU7Zm9yKDt1IT09bSYmbS5sZW5ndGg+MjspdT1tLG09bS5yZXBsYWNlKHRoaXMuSyxyPT50aGlzLnN0ZW1tZXIuZ2V0KHIpKX1pZihtJiYodGhpcy5tYXBwZXJ8fHRoaXMuZGVkdXBlJiZtLmxlbmd0aD4xKSl7az1cIlwiO2ZvcihsZXQgdT0wLHI9XCJcIix0LG47dTxtLmxlbmd0aDt1KyspdD1tLmNoYXJBdCh1KSx0PT09ciYmdGhpcy5kZWR1cGV8fCgobj10aGlzLm1hcHBlciYmdGhpcy5tYXBwZXIuZ2V0KHQpKXx8bj09PVwiXCI/bj09PXImJnRoaXMuZGVkdXBlfHwhKHI9bil8fChrKz1uKTprKz1yPXQpO209a310aGlzLm1hdGNoZXImJm0ubGVuZ3RoPjEmJih0aGlzLkp8fCh0aGlzLko9bmV3IFJlZ0V4cChcIihcIit0aGlzLmgrXCIpXCIsXCJnXCIpKSxtPW0ucmVwbGFjZSh0aGlzLkosdT0+dGhpcy5tYXRjaGVyLmdldCh1KSkpO2lmKG0mJnRoaXMucmVwbGFjZXIpZm9yKGs9MDttJiZrPHRoaXMucmVwbGFjZXIubGVuZ3RoO2srPTIpbT1tLnJlcGxhY2UodGhpcy5yZXBsYWNlcltrXSxcclxudGhpcy5yZXBsYWNlcltrKzFdKTt0aGlzLmNhY2hlJiZwLmxlbmd0aDw9dGhpcy5JJiYodGhpcy5ELnNldChwLG0pLHRoaXMuRC5zaXplPnRoaXMuTCYmKHRoaXMuRC5jbGVhcigpLHRoaXMuST10aGlzLkkvMS4xfDApKTtpZihtKXtpZihtIT09cClpZihjKXtpZihkW21dKWNvbnRpbnVlO2RbbV09MX1lbHNle2lmKGc9PT1tKWNvbnRpbnVlO2c9bX1lLnB1c2gobSl9fX10aGlzLmZpbmFsaXplJiYoZT10aGlzLmZpbmFsaXplKGUpfHxlKTt0aGlzLmNhY2hlJiZhLmxlbmd0aDw9dGhpcy5IJiYodGhpcy5CLnNldChhLGUpLHRoaXMuQi5zaXplPnRoaXMuTCYmKHRoaXMuQi5jbGVhcigpLHRoaXMuSD10aGlzLkgvMS4xfDApKTtyZXR1cm4gZX07ZnVuY3Rpb24gUShhKXthLkY9bnVsbDthLkIuY2xlYXIoKTthLkQuY2xlYXIoKX07ZnVuY3Rpb24gbGEoYSxjLGIpe2J8fChjfHx0eXBlb2YgYSE9PVwib2JqZWN0XCI/dHlwZW9mIGM9PT1cIm9iamVjdFwiJiYoYj1jLGM9MCk6Yj1hKTtiJiYoYT1iLnF1ZXJ5fHxhLGM9Yi5saW1pdHx8Yyk7bGV0IGU9XCJcIisoY3x8MCk7YiYmKGUrPShiLm9mZnNldHx8MCkrISFiLmNvbnRleHQrISFiLnN1Z2dlc3QrKGIucmVzb2x2ZSE9PSExKSsoYi5yZXNvbHV0aW9ufHx0aGlzLnJlc29sdXRpb24pKyhiLmJvb3N0fHwwKSk7YT0oXCJcIithKS50b0xvd2VyQ2FzZSgpO3RoaXMuY2FjaGV8fCh0aGlzLmNhY2hlPW5ldyBtYSk7bGV0IGQ9dGhpcy5jYWNoZS5nZXQoYStlKTtpZighZCl7Y29uc3QgZj1iJiZiLmNhY2hlO2YmJihiLmNhY2hlPSExKTtkPXRoaXMuc2VhcmNoKGEsYyxiKTtmJiYoYi5jYWNoZT1mKTt0aGlzLmNhY2hlLnNldChhK2UsZCl9cmV0dXJuIGR9ZnVuY3Rpb24gbWEoYSl7dGhpcy5saW1pdD1hJiZhIT09ITA/YToxRTM7dGhpcy5jYWNoZT1uZXcgTWFwO3RoaXMuaD1cIlwifVxyXG5tYS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYyl7dGhpcy5jYWNoZS5zZXQodGhpcy5oPWEsYyk7dGhpcy5jYWNoZS5zaXplPnRoaXMubGltaXQmJnRoaXMuY2FjaGUuZGVsZXRlKHRoaXMuY2FjaGUua2V5cygpLm5leHQoKS52YWx1ZSl9O21hLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oYSl7Y29uc3QgYz10aGlzLmNhY2hlLmdldChhKTtjJiZ0aGlzLmghPT1hJiYodGhpcy5jYWNoZS5kZWxldGUoYSksdGhpcy5jYWNoZS5zZXQodGhpcy5oPWEsYykpO3JldHVybiBjfTttYS5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEpe2Zvcihjb25zdCBjIG9mIHRoaXMuY2FjaGUpe2NvbnN0IGI9Y1swXTtjWzFdLmluY2x1ZGVzKGEpJiZ0aGlzLmNhY2hlLmRlbGV0ZShiKX19O21hLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuY2FjaGUuY2xlYXIoKTt0aGlzLmg9XCJcIn07Y29uc3QgbmE9e25vcm1hbGl6ZTohMSxudW1lcmljOiExLGRlZHVwZTohMX07Y29uc3Qgb2E9e307Y29uc3QgcmE9bmV3IE1hcChbW1wiYlwiLFwicFwiXSxbXCJ2XCIsXCJmXCJdLFtcIndcIixcImZcIl0sW1wielwiLFwic1wiXSxbXCJ4XCIsXCJzXCJdLFtcImRcIixcInRcIl0sW1wiblwiLFwibVwiXSxbXCJjXCIsXCJrXCJdLFtcImdcIixcImtcIl0sW1wialwiLFwia1wiXSxbXCJxXCIsXCJrXCJdLFtcImlcIixcImVcIl0sW1wieVwiLFwiZVwiXSxbXCJ1XCIsXCJvXCJdXSk7Y29uc3Qgc2E9bmV3IE1hcChbW1wiYWVcIixcImFcIl0sW1wib2VcIixcIm9cIl0sW1wic2hcIixcInNcIl0sW1wia2hcIixcImtcIl0sW1widGhcIixcInRcIl0sW1wicGhcIixcImZcIl0sW1wicGZcIixcImZcIl1dKSx0YT1bLyhbXmFlb10paCguKS9nLFwiJDEkMlwiLC8oW2Flb10paChbXmFlb118JCkvZyxcIiQxJDJcIiwvKC4pXFwxKy9nLFwiJDFcIl07Y29uc3QgdWE9e2E6XCJcIixlOlwiXCIsaTpcIlwiLG86XCJcIix1OlwiXCIseTpcIlwiLGI6MSxmOjEscDoxLHY6MSxjOjIsZzoyLGo6MixrOjIscToyLHM6Mix4OjIsejoyLFwiXFx1MDBkZlwiOjIsZDozLHQ6MyxsOjQsbTo1LG46NSxyOjZ9O3ZhciB2YT17RXhhY3Q6bmEsRGVmYXVsdDpvYSxOb3JtYWxpemU6b2EsTGF0aW5CYWxhbmNlOnttYXBwZXI6cmF9LExhdGluQWR2YW5jZWQ6e21hcHBlcjpyYSxtYXRjaGVyOnNhLHJlcGxhY2VyOnRhfSxMYXRpbkV4dHJhOnttYXBwZXI6cmEscmVwbGFjZXI6dGEuY29uY2F0KFsvKD8hXilbYWVvXS9nLFwiXCJdKSxtYXRjaGVyOnNhfSxMYXRpblNvdW5kZXg6e2RlZHVwZTohMSxpbmNsdWRlOntsZXR0ZXI6ITB9LGZpbmFsaXplOmZ1bmN0aW9uKGEpe2ZvcihsZXQgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2xldCBlPWMuY2hhckF0KDApLGQ9dWFbZV07Zm9yKGxldCBmPTEsZztmPGMubGVuZ3RoJiYoZz1jLmNoYXJBdChmKSxnPT09XCJoXCJ8fGc9PT1cIndcInx8IShnPXVhW2ddKXx8Zz09PWR8fChlKz1nLGQ9ZyxlLmxlbmd0aCE9PTQpKTtmKyspO2FbYl09ZX19fSxDSks6e3NwbGl0OlwiXCJ9LExhdGluRXhhY3Q6bmEsTGF0aW5EZWZhdWx0Om9hLExhdGluU2ltcGxlOm9hfTtmdW5jdGlvbiB3YShhLGMsYixlKXtsZXQgZD1bXTtmb3IobGV0IGY9MCxnO2Y8YS5pbmRleC5sZW5ndGg7ZisrKWlmKGc9YS5pbmRleFtmXSxjPj1nLmxlbmd0aCljLT1nLmxlbmd0aDtlbHNle2M9Z1tlP1wic3BsaWNlXCI6XCJzbGljZVwiXShjLGIpO2NvbnN0IGg9Yy5sZW5ndGg7aWYoaCYmKGQ9ZC5sZW5ndGg/ZC5jb25jYXQoYyk6YyxiLT1oLGUmJihhLmxlbmd0aC09aCksIWIpKWJyZWFrO2M9MH1yZXR1cm4gZH1cclxuZnVuY3Rpb24geGEoYSl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT14YSlyZXR1cm4gbmV3IHhhKGEpO3RoaXMuaW5kZXg9YT9bYV06W107dGhpcy5sZW5ndGg9YT9hLmxlbmd0aDowO2NvbnN0IGM9dGhpcztyZXR1cm4gbmV3IFByb3h5KFtdLHtnZXQoYixlKXtpZihlPT09XCJsZW5ndGhcIilyZXR1cm4gYy5sZW5ndGg7aWYoZT09PVwicHVzaFwiKXJldHVybiBmdW5jdGlvbihkKXtjLmluZGV4W2MuaW5kZXgubGVuZ3RoLTFdLnB1c2goZCk7Yy5sZW5ndGgrK307aWYoZT09PVwicG9wXCIpcmV0dXJuIGZ1bmN0aW9uKCl7aWYoYy5sZW5ndGgpcmV0dXJuIGMubGVuZ3RoLS0sYy5pbmRleFtjLmluZGV4Lmxlbmd0aC0xXS5wb3AoKX07aWYoZT09PVwiaW5kZXhPZlwiKXJldHVybiBmdW5jdGlvbihkKXtsZXQgZj0wO2ZvcihsZXQgZz0wLGgsaztnPGMuaW5kZXgubGVuZ3RoO2crKyl7aD1jLmluZGV4W2ddO2s9aC5pbmRleE9mKGQpO2lmKGs+PTApcmV0dXJuIGYraztmKz1oLmxlbmd0aH1yZXR1cm4tMX07XHJcbmlmKGU9PT1cImluY2x1ZGVzXCIpcmV0dXJuIGZ1bmN0aW9uKGQpe2ZvcihsZXQgZj0wO2Y8Yy5pbmRleC5sZW5ndGg7ZisrKWlmKGMuaW5kZXhbZl0uaW5jbHVkZXMoZCkpcmV0dXJuITA7cmV0dXJuITF9O2lmKGU9PT1cInNsaWNlXCIpcmV0dXJuIGZ1bmN0aW9uKGQsZil7cmV0dXJuIHdhKGMsZHx8MCxmfHxjLmxlbmd0aCwhMSl9O2lmKGU9PT1cInNwbGljZVwiKXJldHVybiBmdW5jdGlvbihkLGYpe3JldHVybiB3YShjLGR8fDAsZnx8Yy5sZW5ndGgsITApfTtpZihlPT09XCJjb25zdHJ1Y3RvclwiKXJldHVybiBBcnJheTtpZih0eXBlb2YgZSE9PVwic3ltYm9sXCIpcmV0dXJuKGI9Yy5pbmRleFtlLzIqKjMxfDBdKSYmYltlXX0sc2V0KGIsZSxkKXtiPWUvMioqMzF8MDsoYy5pbmRleFtiXXx8KGMuaW5kZXhbYl09W10pKVtlXT1kO2MubGVuZ3RoKys7cmV0dXJuITB9fSl9eGEucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5pbmRleC5sZW5ndGg9MH07eGEucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oKXt9O1xyXG5mdW5jdGlvbiBSKGE9OCl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1SKXJldHVybiBuZXcgUihhKTt0aGlzLmluZGV4PUkoKTt0aGlzLmg9W107dGhpcy5zaXplPTA7YT4zMj8odGhpcy5CPUFhLHRoaXMuQT1CaWdJbnQoYSkpOih0aGlzLkI9QmEsdGhpcy5BPWEpfVIucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtjb25zdCBjPXRoaXMuaW5kZXhbdGhpcy5CKGEpXTtyZXR1cm4gYyYmYy5nZXQoYSl9O1IucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGMpe3ZhciBiPXRoaXMuQihhKTtsZXQgZT10aGlzLmluZGV4W2JdO2U/KGI9ZS5zaXplLGUuc2V0KGEsYyksKGItPWUuc2l6ZSkmJnRoaXMuc2l6ZSsrKToodGhpcy5pbmRleFtiXT1lPW5ldyBNYXAoW1thLGNdXSksdGhpcy5oLnB1c2goZSksdGhpcy5zaXplKyspfTtcclxuZnVuY3Rpb24gUyhhPTgpe2lmKCF0aGlzfHx0aGlzLmNvbnN0cnVjdG9yIT09UylyZXR1cm4gbmV3IFMoYSk7dGhpcy5pbmRleD1JKCk7dGhpcy5oPVtdO3RoaXMuc2l6ZT0wO2E+MzI/KHRoaXMuQj1BYSx0aGlzLkE9QmlnSW50KGEpKToodGhpcy5CPUJhLHRoaXMuQT1hKX1TLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcy5CKGEpO2xldCBiPXRoaXMuaW5kZXhbY107Yj8oYz1iLnNpemUsYi5hZGQoYSksKGMtPWIuc2l6ZSkmJnRoaXMuc2l6ZSsrKToodGhpcy5pbmRleFtjXT1iPW5ldyBTZXQoW2FdKSx0aGlzLmgucHVzaChiKSx0aGlzLnNpemUrKyl9O3c9Ui5wcm90b3R5cGU7dy5oYXM9Uy5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKGEpe2NvbnN0IGM9dGhpcy5pbmRleFt0aGlzLkIoYSldO3JldHVybiBjJiZjLmhhcyhhKX07XHJcbncuZGVsZXRlPVMucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihhKXtjb25zdCBjPXRoaXMuaW5kZXhbdGhpcy5CKGEpXTtjJiZjLmRlbGV0ZShhKSYmdGhpcy5zaXplLS19O3cuY2xlYXI9Uy5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmluZGV4PUkoKTt0aGlzLmg9W107dGhpcy5zaXplPTB9O3cudmFsdWVzPVMucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbiooKXtmb3IobGV0IGE9MDthPHRoaXMuaC5sZW5ndGg7YSsrKWZvcihsZXQgYyBvZiB0aGlzLmhbYV0udmFsdWVzKCkpeWllbGQgY307dy5rZXlzPVMucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24qKCl7Zm9yKGxldCBhPTA7YTx0aGlzLmgubGVuZ3RoO2ErKylmb3IobGV0IGMgb2YgdGhpcy5oW2FdLmtleXMoKSl5aWVsZCBjfTt3LmVudHJpZXM9Uy5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbiooKXtmb3IobGV0IGE9MDthPHRoaXMuaC5sZW5ndGg7YSsrKWZvcihsZXQgYyBvZiB0aGlzLmhbYV0uZW50cmllcygpKXlpZWxkIGN9O1xyXG5mdW5jdGlvbiBCYShhKXtsZXQgYz0yKip0aGlzLkEtMTtpZih0eXBlb2YgYT09XCJudW1iZXJcIilyZXR1cm4gYSZjO2xldCBiPTAsZT10aGlzLkErMTtmb3IobGV0IGQ9MDtkPGEubGVuZ3RoO2QrKyliPShiKmVeYS5jaGFyQ29kZUF0KGQpKSZjO3JldHVybiB0aGlzLkE9PT0zMj9iKzIqKjMxOmJ9ZnVuY3Rpb24gQWEoYSl7bGV0IGM9QmlnSW50KDIpKip0aGlzLkEtQmlnSW50KDEpO3ZhciBiPXR5cGVvZiBhO2lmKGI9PT1cImJpZ2ludFwiKXJldHVybiBhJmM7aWYoYj09PVwibnVtYmVyXCIpcmV0dXJuIEJpZ0ludChhKSZjO2I9QmlnSW50KDApO2xldCBlPXRoaXMuQStCaWdJbnQoMSk7Zm9yKGxldCBkPTA7ZDxhLmxlbmd0aDtkKyspYj0oYiplXkJpZ0ludChhLmNoYXJDb2RlQXQoZCkpKSZjO3JldHVybiBifTtsZXQgQ2EsRGE7XHJcbmFzeW5jIGZ1bmN0aW9uIEVhKGEpe2E9YS5kYXRhO3ZhciBjPWEudGFzaztjb25zdCBiPWEuaWQ7bGV0IGU9YS5hcmdzO3N3aXRjaChjKXtjYXNlIFwiaW5pdFwiOkRhPWEub3B0aW9uc3x8e307KGM9YS5mYWN0b3J5KT8oRnVuY3Rpb24oXCJyZXR1cm4gXCIrYykoKShzZWxmKSxDYT1uZXcgc2VsZi5GbGV4U2VhcmNoLkluZGV4KERhKSxkZWxldGUgc2VsZi5GbGV4U2VhcmNoKTpDYT1uZXcgVChEYSk7cG9zdE1lc3NhZ2Uoe2lkOmJ9KTticmVhaztkZWZhdWx0OmxldCBkO2M9PT1cImV4cG9ydFwiJiYoZVsxXT8oZVswXT1EYS5leHBvcnQsZVsyXT0wLGVbM109MSk6ZT1udWxsKTtjPT09XCJpbXBvcnRcIj9lWzBdJiYoYT1hd2FpdCBEYS5pbXBvcnQuY2FsbChDYSxlWzBdKSxDYS5pbXBvcnQoZVswXSxhKSk6KChkPWUmJkNhW2NdLmFwcGx5KENhLGUpKSYmZC50aGVuJiYoZD1hd2FpdCBkKSxkJiZkLmF3YWl0JiYoZD1hd2FpdCBkLmF3YWl0KSxjPT09XCJzZWFyY2hcIiYmZC5yZXN1bHQmJihkPWQucmVzdWx0KSk7XHJcbnBvc3RNZXNzYWdlKGM9PT1cInNlYXJjaFwiP3tpZDpiLG1zZzpkfTp7aWQ6Yn0pfX07ZnVuY3Rpb24gRmEoYSl7R2EuY2FsbChhLFwiYWRkXCIpO0dhLmNhbGwoYSxcImFwcGVuZFwiKTtHYS5jYWxsKGEsXCJzZWFyY2hcIik7R2EuY2FsbChhLFwidXBkYXRlXCIpO0dhLmNhbGwoYSxcInJlbW92ZVwiKTtHYS5jYWxsKGEsXCJzZWFyY2hDYWNoZVwiKX1sZXQgSGEsSWEsSmE7ZnVuY3Rpb24gS2EoKXtIYT1KYT0wfVxyXG5mdW5jdGlvbiBHYShhKXt0aGlzW2ErXCJBc3luY1wiXT1mdW5jdGlvbigpe2NvbnN0IGM9YXJndW1lbnRzO3ZhciBiPWNbYy5sZW5ndGgtMV07bGV0IGU7dHlwZW9mIGI9PT1cImZ1bmN0aW9uXCImJihlPWIsZGVsZXRlIGNbYy5sZW5ndGgtMV0pO0hhP0phfHwoSmE9RGF0ZS5ub3coKS1JYT49dGhpcy5wcmlvcml0eSp0aGlzLnByaW9yaXR5KjMpOihIYT1zZXRUaW1lb3V0KEthLDApLElhPURhdGUubm93KCkpO2lmKEphKXtjb25zdCBmPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKGc9PntzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZyhmW2ErXCJBc3luY1wiXS5hcHBseShmLGMpKX0sMCl9KX1jb25zdCBkPXRoaXNbYV0uYXBwbHkodGhpcyxjKTtiPWQudGhlbj9kOm5ldyBQcm9taXNlKGY9PmYoZCkpO2UmJmIudGhlbihlKTtyZXR1cm4gYn19O2xldCBWPTA7XHJcbmZ1bmN0aW9uIExhKGE9e30sYyl7ZnVuY3Rpb24gYihoKXtmdW5jdGlvbiBrKGwpe2w9bC5kYXRhfHxsO2NvbnN0IG09bC5pZCxwPW0mJmYuaFttXTtwJiYocChsLm1zZyksZGVsZXRlIGYuaFttXSl9dGhpcy53b3JrZXI9aDt0aGlzLmg9SSgpO2lmKHRoaXMud29ya2VyKXtkP3RoaXMud29ya2VyLm9uKFwibWVzc2FnZVwiLGspOnRoaXMud29ya2VyLm9ubWVzc2FnZT1rO2lmKGEuY29uZmlnKXJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihsKXtWPjFFOSYmKFY9MCk7Zi5oWysrVl09ZnVuY3Rpb24oKXtsKGYpfTtmLndvcmtlci5wb3N0TWVzc2FnZSh7aWQ6Vix0YXNrOlwiaW5pdFwiLGZhY3Rvcnk6ZSxvcHRpb25zOmF9KX0pO3RoaXMucHJpb3JpdHk9YS5wcmlvcml0eXx8NDt0aGlzLmVuY29kZXI9Y3x8bnVsbDt0aGlzLndvcmtlci5wb3N0TWVzc2FnZSh7dGFzazpcImluaXRcIixmYWN0b3J5OmUsb3B0aW9uczphfSk7cmV0dXJuIHRoaXN9fWlmKCF0aGlzfHx0aGlzLmNvbnN0cnVjdG9yIT09TGEpcmV0dXJuIG5ldyBMYShhKTtcclxubGV0IGU9dHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiP3NlbGYuX2ZhY3Rvcnk6dHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCI/d2luZG93Ll9mYWN0b3J5Om51bGw7ZSYmKGU9ZS50b1N0cmluZygpKTtjb25zdCBkPXR5cGVvZiB3aW5kb3c9PT1cInVuZGVmaW5lZFwiLGY9dGhpcyxnPU1hKGUsZCxhLndvcmtlcik7cmV0dXJuIGcudGhlbj9nLnRoZW4oZnVuY3Rpb24oaCl7cmV0dXJuIGIuY2FsbChmLGgpfSk6Yi5jYWxsKHRoaXMsZyl9VyhcImFkZFwiKTtXKFwiYXBwZW5kXCIpO1coXCJzZWFyY2hcIik7VyhcInVwZGF0ZVwiKTtXKFwicmVtb3ZlXCIpO1coXCJjbGVhclwiKTtXKFwiZXhwb3J0XCIpO1coXCJpbXBvcnRcIik7TGEucHJvdG90eXBlLnNlYXJjaENhY2hlPWxhO0ZhKExhLnByb3RvdHlwZSk7XHJcbmZ1bmN0aW9uIFcoYSl7TGEucHJvdG90eXBlW2FdPWZ1bmN0aW9uKCl7Y29uc3QgYz10aGlzLGI9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO3ZhciBlPWJbYi5sZW5ndGgtMV07bGV0IGQ7dHlwZW9mIGU9PT1cImZ1bmN0aW9uXCImJihkPWUsYi5wb3AoKSk7ZT1uZXcgUHJvbWlzZShmdW5jdGlvbihmKXthPT09XCJleHBvcnRcIiYmdHlwZW9mIGJbMF09PT1cImZ1bmN0aW9uXCImJihiWzBdPW51bGwpO1Y+MUU5JiYoVj0wKTtjLmhbKytWXT1mO2Mud29ya2VyLnBvc3RNZXNzYWdlKHt0YXNrOmEsaWQ6VixhcmdzOmJ9KX0pO3JldHVybiBkPyhlLnRoZW4oZCksdGhpcyk6ZX19XHJcbmZ1bmN0aW9uIE1hKGEsYyxiKXtyZXR1cm4gYz90eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIj9uZXcocmVxdWlyZShcIndvcmtlcl90aHJlYWRzXCIpW1wiV29ya2VyXCJdKShfX2Rpcm5hbWUrXCIvd29ya2VyL25vZGUuanNcIik6aW1wb3J0KFwid29ya2VyX3RocmVhZHNcIikudGhlbihmdW5jdGlvbih3b3JrZXIpe3JldHVybiBuZXcgd29ya2VyW1wiV29ya2VyXCJdKGltcG9ydC5tZXRhLmRpcm5hbWUrXCIvbm9kZS9ub2RlLm1qc1wiKX0pOmE/bmV3IHdpbmRvdy5Xb3JrZXIoVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbXCJvbm1lc3NhZ2U9XCIrRWEudG9TdHJpbmcoKV0se3R5cGU6XCJ0ZXh0L2phdmFzY3JpcHRcIn0pKSk6bmV3IHdpbmRvdy5Xb3JrZXIodHlwZW9mIGI9PT1cInN0cmluZ1wiP2I6aW1wb3J0Lm1ldGEudXJsLnJlcGxhY2UoXCIvd29ya2VyLmpzXCIsXCIvd29ya2VyL3dvcmtlci5qc1wiKS5yZXBsYWNlKFwiZmxleHNlYXJjaC5idW5kbGUubW9kdWxlLm1pbi5qc1wiLFxyXG5cIm1vZHVsZS93b3JrZXIvd29ya2VyLmpzXCIpLHt0eXBlOlwibW9kdWxlXCJ9KX07TmEucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhLGMsYil7YmEoYSkmJihjPWEsYT1jYShjLHRoaXMua2V5KSk7aWYoYyYmKGF8fGE9PT0wKSl7aWYoIWImJnRoaXMucmVnLmhhcyhhKSlyZXR1cm4gdGhpcy51cGRhdGUoYSxjKTtmb3IobGV0IGg9MCxrO2g8dGhpcy5maWVsZC5sZW5ndGg7aCsrKXtrPXRoaXMuQltoXTt2YXIgZT10aGlzLmluZGV4LmdldCh0aGlzLmZpZWxkW2hdKTtpZih0eXBlb2Ygaz09PVwiZnVuY3Rpb25cIil7dmFyIGQ9ayhjKTtkJiZlLmFkZChhLGQsYiwhMCl9ZWxzZSBpZihkPWsuRywhZHx8ZChjKSlrLmNvbnN0cnVjdG9yPT09U3RyaW5nP2s9W1wiXCIra106TShrKSYmKGs9W2tdKSxRYShjLGssdGhpcy5ELDAsZSxhLGtbMF0sYil9aWYodGhpcy50YWcpZm9yKGU9MDtlPHRoaXMuQS5sZW5ndGg7ZSsrKXt2YXIgZj10aGlzLkFbZV07ZD10aGlzLnRhZy5nZXQodGhpcy5GW2VdKTtsZXQgaD1JKCk7aWYodHlwZW9mIGY9PT1cImZ1bmN0aW9uXCIpe2lmKGY9ZihjKSwhZiljb250aW51ZX1lbHNle3ZhciBnPVxyXG5mLkc7aWYoZyYmIWcoYykpY29udGludWU7Zi5jb25zdHJ1Y3Rvcj09PVN0cmluZyYmKGY9XCJcIitmKTtmPWNhKGMsZil9aWYoZCYmZil7TShmKSYmKGY9W2ZdKTtmb3IobGV0IGs9MCxsLG07azxmLmxlbmd0aDtrKyspaWYobD1mW2tdLCFoW2xdJiYoaFtsXT0xLChnPWQuZ2V0KGwpKT9tPWc6ZC5zZXQobCxtPVtdKSwhYnx8IW0uaW5jbHVkZXMoYSkpKXtpZihtLmxlbmd0aD09PTIqKjMxLTEpe2c9bmV3IHhhKG0pO2lmKHRoaXMuZmFzdHVwZGF0ZSlmb3IobGV0IHAgb2YgdGhpcy5yZWcudmFsdWVzKCkpcC5pbmNsdWRlcyhtKSYmKHBbcC5pbmRleE9mKG0pXT1nKTtkLnNldChsLG09Zyl9bS5wdXNoKGEpO3RoaXMuZmFzdHVwZGF0ZSYmKChnPXRoaXMucmVnLmdldChhKSk/Zy5wdXNoKG0pOnRoaXMucmVnLnNldChhLFttXSkpfX19aWYodGhpcy5zdG9yZSYmKCFifHwhdGhpcy5zdG9yZS5oYXMoYSkpKXtsZXQgaDtpZih0aGlzLmgpe2g9SSgpO2ZvcihsZXQgaz0wLGw7azx0aGlzLmgubGVuZ3RoO2srKyl7bD1cclxudGhpcy5oW2tdO2lmKChiPWwuRykmJiFiKGMpKWNvbnRpbnVlO2xldCBtO2lmKHR5cGVvZiBsPT09XCJmdW5jdGlvblwiKXttPWwoYyk7aWYoIW0pY29udGludWU7bD1bbC5PXX1lbHNlIGlmKE0obCl8fGwuY29uc3RydWN0b3I9PT1TdHJpbmcpe2hbbF09Y1tsXTtjb250aW51ZX1SYShjLGgsbCwwLGxbMF0sbSl9fXRoaXMuc3RvcmUuc2V0KGEsaHx8Yyl9dGhpcy53b3JrZXImJih0aGlzLmZhc3R1cGRhdGV8fHRoaXMucmVnLmFkZChhKSl9cmV0dXJuIHRoaXN9O2Z1bmN0aW9uIFJhKGEsYyxiLGUsZCxmKXthPWFbZF07aWYoZT09PWIubGVuZ3RoLTEpY1tkXT1mfHxhO2Vsc2UgaWYoYSlpZihhLmNvbnN0cnVjdG9yPT09QXJyYXkpZm9yKGM9Y1tkXT1BcnJheShhLmxlbmd0aCksZD0wO2Q8YS5sZW5ndGg7ZCsrKVJhKGEsYyxiLGUsZCk7ZWxzZSBjPWNbZF18fChjW2RdPUkoKSksZD1iWysrZV0sUmEoYSxjLGIsZSxkKX1cclxuZnVuY3Rpb24gUWEoYSxjLGIsZSxkLGYsZyxoKXtpZihhPWFbZ10paWYoZT09PWMubGVuZ3RoLTEpe2lmKGEuY29uc3RydWN0b3I9PT1BcnJheSl7aWYoYltlXSl7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKylkLmFkZChmLGFbY10sITAsITApO3JldHVybn1hPWEuam9pbihcIiBcIil9ZC5hZGQoZixhLGgsITApfWVsc2UgaWYoYS5jb25zdHJ1Y3Rvcj09PUFycmF5KWZvcihnPTA7ZzxhLmxlbmd0aDtnKyspUWEoYSxjLGIsZSxkLGYsZyxoKTtlbHNlIGc9Y1srK2VdLFFhKGEsYyxiLGUsZCxmLGcsaCl9O2Z1bmN0aW9uIFNhKGEsYyxiLGUpe2lmKCFhLmxlbmd0aClyZXR1cm4gYTtpZihhLmxlbmd0aD09PTEpcmV0dXJuIGE9YVswXSxhPWJ8fGEubGVuZ3RoPmM/YS5zbGljZShiLGIrYyk6YSxlP1RhLmNhbGwodGhpcyxhKTphO2xldCBkPVtdO2ZvcihsZXQgZj0wLGcsaDtmPGEubGVuZ3RoO2YrKylpZigoZz1hW2ZdKSYmKGg9Zy5sZW5ndGgpKXtpZihiKXtpZihiPj1oKXtiLT1oO2NvbnRpbnVlfWc9Zy5zbGljZShiLGIrYyk7aD1nLmxlbmd0aDtiPTB9aD5jJiYoZz1nLnNsaWNlKDAsYyksaD1jKTtpZighZC5sZW5ndGgmJmg+PWMpcmV0dXJuIGU/VGEuY2FsbCh0aGlzLGcpOmc7ZC5wdXNoKGcpO2MtPWg7aWYoIWMpYnJlYWt9ZD1kLmxlbmd0aD4xP1tdLmNvbmNhdC5hcHBseShbXSxkKTpkWzBdO3JldHVybiBlP1RhLmNhbGwodGhpcyxkKTpkfTtmdW5jdGlvbiBVYShhLGMsYixlKXt2YXIgZD1lWzBdO2lmKGRbMF0mJmRbMF0ucXVlcnkpcmV0dXJuIGFbY10uYXBwbHkoYSxkKTtpZighKGMhPT1cImFuZFwiJiZjIT09XCJub3RcInx8YS5yZXN1bHQubGVuZ3RofHxhLmF3YWl0fHxkLnN1Z2dlc3QpKXJldHVybiBlLmxlbmd0aD4xJiYoZD1lW2UubGVuZ3RoLTFdKSwoZT1kLnJlc29sdmUpP2EuYXdhaXR8fGEucmVzdWx0OmE7bGV0IGY9W10sZz0wLGg9MCxrLGwsbSxwLHU7Zm9yKGM9MDtjPGUubGVuZ3RoO2MrKylpZihkPWVbY10pe3ZhciByPXZvaWQgMDtpZihkLmNvbnN0cnVjdG9yPT09WClyPWQuYXdhaXR8fGQucmVzdWx0O2Vsc2UgaWYoZC50aGVufHxkLmNvbnN0cnVjdG9yPT09QXJyYXkpcj1kO2Vsc2V7Zz1kLmxpbWl0fHwwO2g9ZC5vZmZzZXR8fDA7bT1kLnN1Z2dlc3Q7bD1kLnJlc29sdmU7az0oKHA9ZC5oaWdobGlnaHR8fGEuaGlnaGxpZ2h0KXx8ZC5lbnJpY2gpJiZsO3I9ZC5xdWV1ZTtsZXQgdD1kLmFzeW5jfHxyLG49ZC5pbmRleCxcclxucT1kLnF1ZXJ5O24/YS5pbmRleHx8KGEuaW5kZXg9bik6bj1hLmluZGV4O2lmKHF8fGQudGFnKXtjb25zdCB4PWQuZmllbGR8fGQucGx1Y2s7eCYmKCFxfHxhLnF1ZXJ5JiYhcHx8KGEucXVlcnk9cSxhLmZpZWxkPXgsYS5oaWdobGlnaHQ9cCksbj1uLmluZGV4LmdldCh4KSk7aWYociYmKHV8fGEuYXdhaXQpKXt1PTE7bGV0IHY7Y29uc3QgQT1hLkMubGVuZ3RoLEQ9bmV3IFByb21pc2UoZnVuY3Rpb24oRyl7dj1HfSk7KGZ1bmN0aW9uKEcsRSl7RC5oPWZ1bmN0aW9uKCl7RS5pbmRleD1udWxsO0UucmVzb2x2ZT0hMTtsZXQgQj10P0cuc2VhcmNoQXN5bmMoRSk6Ry5zZWFyY2goRSk7aWYoQi50aGVuKXJldHVybiBCLnRoZW4oZnVuY3Rpb24oeil7YS5DW0FdPXo9ei5yZXN1bHR8fHo7dih6KTtyZXR1cm4gen0pO0I9Qi5yZXN1bHR8fEI7dihCKTtyZXR1cm4gQn19KShuLE9iamVjdC5hc3NpZ24oe30sZCkpO2EuQy5wdXNoKEQpO2ZbY109RDtjb250aW51ZX1lbHNlIGQucmVzb2x2ZT0hMSxcclxuZC5pbmRleD1udWxsLHI9dD9uLnNlYXJjaEFzeW5jKGQpOm4uc2VhcmNoKGQpLGQucmVzb2x2ZT1sLGQuaW5kZXg9bn1lbHNlIGlmKGQuYW5kKXI9VmEoZCxcImFuZFwiLG4pO2Vsc2UgaWYoZC5vcilyPVZhKGQsXCJvclwiLG4pO2Vsc2UgaWYoZC5ub3Qpcj1WYShkLFwibm90XCIsbik7ZWxzZSBpZihkLnhvcilyPVZhKGQsXCJ4b3JcIixuKTtlbHNlIGNvbnRpbnVlfXIuYXdhaXQ/KHU9MSxyPXIuYXdhaXQpOnIudGhlbj8odT0xLHI9ci50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlc3VsdHx8dH0pKTpyPXIucmVzdWx0fHxyO2ZbY109cn11JiYhYS5hd2FpdCYmKGEuYXdhaXQ9bmV3IFByb21pc2UoZnVuY3Rpb24odCl7YS5yZXR1cm49dH0pKTtpZih1KXtjb25zdCB0PVByb21pc2UuYWxsKGYpLnRoZW4oZnVuY3Rpb24obil7Zm9yKGxldCBxPTA7cTxhLkMubGVuZ3RoO3ErKylpZihhLkNbcV09PT10KXthLkNbcV09ZnVuY3Rpb24oKXtyZXR1cm4gYi5jYWxsKGEsbixnLGgsayxsLG0scCl9O2JyZWFrfVdhKGEpfSk7XHJcbmEuQy5wdXNoKHQpfWVsc2UgaWYoYS5hd2FpdClhLkMucHVzaChmdW5jdGlvbigpe3JldHVybiBiLmNhbGwoYSxmLGcsaCxrLGwsbSxwKX0pO2Vsc2UgcmV0dXJuIGIuY2FsbChhLGYsZyxoLGssbCxtLHApO3JldHVybiBsP2EuYXdhaXR8fGEucmVzdWx0OmF9ZnVuY3Rpb24gVmEoYSxjLGIpe2E9YVtjXTtjb25zdCBlPWFbMF18fGE7ZS5pbmRleHx8KGUuaW5kZXg9Yik7Yj1uZXcgWChlKTthLmxlbmd0aD4xJiYoYj1iW2NdLmFwcGx5KGIsYS5zbGljZSgxKSkpO3JldHVybiBifTtYLnByb3RvdHlwZS5vcj1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwib3JcIixYYSxhcmd1bWVudHMpfTtmdW5jdGlvbiBYYShhLGMsYixlLGQsZixnKXthLmxlbmd0aCYmKHRoaXMucmVzdWx0Lmxlbmd0aCYmYS5wdXNoKHRoaXMucmVzdWx0KSxhLmxlbmd0aDwyP3RoaXMucmVzdWx0PWFbMF06KHRoaXMucmVzdWx0PVlhKGEsYyxiLCExLHRoaXMuaCksYj0wKSk7ZCYmKHRoaXMuYXdhaXQ9bnVsbCk7cmV0dXJuIGQ/dGhpcy5yZXNvbHZlKGMsYixlLGcpOnRoaXN9O1gucHJvdG90eXBlLmFuZD1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwiYW5kXCIsWmEsYXJndW1lbnRzKX07ZnVuY3Rpb24gWmEoYSxjLGIsZSxkLGYsZyl7aWYoIWYmJiF0aGlzLnJlc3VsdC5sZW5ndGgpcmV0dXJuIGQ/dGhpcy5yZXN1bHQ6dGhpcztsZXQgaDtpZihhLmxlbmd0aClpZih0aGlzLnJlc3VsdC5sZW5ndGgmJmEudW5zaGlmdCh0aGlzLnJlc3VsdCksYS5sZW5ndGg8Mil0aGlzLnJlc3VsdD1hWzBdO2Vsc2V7bGV0IGs9MDtmb3IobGV0IGw9MCxtLHA7bDxhLmxlbmd0aDtsKyspaWYoKG09YVtsXSkmJihwPW0ubGVuZ3RoKSlrPHAmJihrPXApO2Vsc2UgaWYoIWYpe2s9MDticmVha31rPyh0aGlzLnJlc3VsdD0kYShhLGssYyxiLGYsdGhpcy5oLGQpLGg9ITApOnRoaXMucmVzdWx0PVtdfWVsc2UgZnx8KHRoaXMucmVzdWx0PWEpO2QmJih0aGlzLmF3YWl0PW51bGwpO3JldHVybiBkP3RoaXMucmVzb2x2ZShjLGIsZSxnLGgpOnRoaXN9O1gucHJvdG90eXBlLnhvcj1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwieG9yXCIsYWIsYXJndW1lbnRzKX07XHJcbmZ1bmN0aW9uIGFiKGEsYyxiLGUsZCxmLGcpe2lmKGEubGVuZ3RoKWlmKHRoaXMucmVzdWx0Lmxlbmd0aCYmYS51bnNoaWZ0KHRoaXMucmVzdWx0KSxhLmxlbmd0aDwyKXRoaXMucmVzdWx0PWFbMF07ZWxzZXthOntmPWI7dmFyIGg9dGhpcy5oO2NvbnN0IGs9W10sbD1JKCk7bGV0IG09MDtmb3IobGV0IHA9MCx1O3A8YS5sZW5ndGg7cCsrKWlmKHU9YVtwXSl7bTx1Lmxlbmd0aCYmKG09dS5sZW5ndGgpO2ZvcihsZXQgcj0wLHQ7cjx1Lmxlbmd0aDtyKyspaWYodD11W3JdKWZvcihsZXQgbj0wLHE7bjx0Lmxlbmd0aDtuKyspcT10W25dLGxbcV09bFtxXT8yOjF9Zm9yKGxldCBwPTAsdSxyPTA7cDxtO3ArKylmb3IobGV0IHQ9MCxuO3Q8YS5sZW5ndGg7dCsrKWlmKG49YVt0XSlpZih1PW5bcF0pZm9yKGxldCBxPTAseDtxPHUubGVuZ3RoO3ErKylpZih4PXVbcV0sbFt4XT09PTEpaWYoZilmLS07ZWxzZSBpZihkKXtpZihrLnB1c2goeCksay5sZW5ndGg9PT1jKXthPWs7YnJlYWsgYX19ZWxzZXtjb25zdCB2PVxyXG5wKyh0P2g6MCk7a1t2XXx8KGtbdl09W10pO2tbdl0ucHVzaCh4KTtpZigrK3I9PT1jKXthPWs7YnJlYWsgYX19YT1rfXRoaXMucmVzdWx0PWE7aD0hMH1lbHNlIGZ8fCh0aGlzLnJlc3VsdD1hKTtkJiYodGhpcy5hd2FpdD1udWxsKTtyZXR1cm4gZD90aGlzLnJlc29sdmUoYyxiLGUsZyxoKTp0aGlzfTtYLnByb3RvdHlwZS5ub3Q9ZnVuY3Rpb24oKXtyZXR1cm4gVWEodGhpcyxcIm5vdFwiLGJiLGFyZ3VtZW50cyl9O1xyXG5mdW5jdGlvbiBiYihhLGMsYixlLGQsZixnKXtpZighZiYmIXRoaXMucmVzdWx0Lmxlbmd0aClyZXR1cm4gZD90aGlzLnJlc3VsdDp0aGlzO2lmKGEubGVuZ3RoJiZ0aGlzLnJlc3VsdC5sZW5ndGgpe2E6e2Y9Yjt2YXIgaD1bXTthPW5ldyBTZXQoYS5mbGF0KCkuZmxhdCgpKTtmb3IobGV0IGs9MCxsLG09MDtrPHRoaXMucmVzdWx0Lmxlbmd0aDtrKyspaWYobD10aGlzLnJlc3VsdFtrXSlmb3IobGV0IHA9MCx1O3A8bC5sZW5ndGg7cCsrKWlmKHU9bFtwXSwhYS5oYXModSkpaWYoZilmLS07ZWxzZSBpZihkKXtpZihoLnB1c2godSksaC5sZW5ndGg9PT1jKXthPWg7YnJlYWsgYX19ZWxzZSBpZihoW2tdfHwoaFtrXT1bXSksaFtrXS5wdXNoKHUpLCsrbT09PWMpe2E9aDticmVhayBhfWE9aH10aGlzLnJlc3VsdD1hO2g9ITB9ZCYmKHRoaXMuYXdhaXQ9bnVsbCk7cmV0dXJuIGQ/dGhpcy5yZXNvbHZlKGMsYixlLGcsaCk6dGhpc307ZnVuY3Rpb24gY2IoYSxjLGIsZSxkKXtsZXQgZixnLGg7dHlwZW9mIGQ9PT1cInN0cmluZ1wiPyhmPWQsZD1cIlwiKTpmPWQudGVtcGxhdGU7Zz1mLmluZGV4T2YoXCIkMVwiKTtoPWYuc3Vic3RyaW5nKGcrMik7Zz1mLnN1YnN0cmluZygwLGcpO2xldCBrPWQmJmQuYm91bmRhcnksbD0hZHx8ZC5jbGlwIT09ITEsbT1kJiZkLm1lcmdlJiZoJiZnJiZuZXcgUmVnRXhwKGgrXCIgXCIrZyxcImdcIik7ZD1kJiZkLmVsbGlwc2lzO3ZhciBwPTA7aWYodHlwZW9mIGQ9PT1cIm9iamVjdFwiKXt2YXIgdT1kLnRlbXBsYXRlO3A9dS5sZW5ndGgtMjtkPWQucGF0dGVybn10eXBlb2YgZCE9PVwic3RyaW5nXCImJihkPWQ9PT0hMT9cIlwiOlwiLi4uXCIpO3AmJihkPXUucmVwbGFjZShcIiQxXCIsZCkpO3U9ZC5sZW5ndGgtcDtsZXQgcix0O3R5cGVvZiBrPT09XCJvYmplY3RcIiYmKHI9ay5iZWZvcmUscj09PTAmJihyPS0xKSx0PWsuYWZ0ZXIsdD09PTAmJih0PS0xKSxrPWsudG90YWx8fDlFNSk7cD1uZXcgTWFwO2ZvcihsZXQgT2E9MCxcclxuZGEsZGIscGE7T2E8Yy5sZW5ndGg7T2ErKyl7bGV0IHFhO2lmKGUpcWE9YyxwYT1lO2Vsc2V7dmFyIG49Y1tPYV07cGE9bi5maWVsZDtpZighcGEpY29udGludWU7cWE9bi5yZXN1bHR9ZGI9Yi5nZXQocGEpO2RhPWRiLmVuY29kZXI7bj1wLmdldChkYSk7dHlwZW9mIG4hPT1cInN0cmluZ1wiJiYobj1kYS5lbmNvZGUoYSkscC5zZXQoZGEsbikpO2ZvcihsZXQgeWE9MDt5YTxxYS5sZW5ndGg7eWErKyl7dmFyIHE9cWFbeWFdLmRvYztpZighcSljb250aW51ZTtxPWNhKHEscGEpO2lmKCFxKWNvbnRpbnVlO3ZhciB4PXEudHJpbSgpLnNwbGl0KC9cXHMrLyk7aWYoIXgubGVuZ3RoKWNvbnRpbnVlO3E9XCJcIjt2YXIgdj1bXTtsZXQgemE9W107dmFyIEE9LTEsRD0tMSxHPTA7Zm9yKHZhciBFPTA7RTx4Lmxlbmd0aDtFKyspe3ZhciBCPXhbRV0sej1kYS5lbmNvZGUoQik7ej16Lmxlbmd0aD4xP3ouam9pbihcIiBcIik6elswXTtsZXQgeTtpZih6JiZCKXt2YXIgQz1CLmxlbmd0aCxLPShkYS5zcGxpdD9cclxuQi5yZXBsYWNlKGRhLnNwbGl0LFwiXCIpOkIpLmxlbmd0aC16Lmxlbmd0aCxGPVwiXCIsTj0wO2Zvcih2YXIgTz0wO088bi5sZW5ndGg7TysrKXt2YXIgUD1uW09dO2lmKFApe3ZhciBMPVAubGVuZ3RoO0wrPUs7TiYmTDw9Tnx8KFA9ei5pbmRleE9mKFApLFA+LTEmJihGPShQP0Iuc3Vic3RyaW5nKDAsUCk6XCJcIikrZytCLnN1YnN0cmluZyhQLFArTCkraCsoUCtMPEM/Qi5zdWJzdHJpbmcoUCtMKTpcIlwiKSxOPUwseT0hMCkpfX1GJiYoayYmKEE8MCYmKEE9cS5sZW5ndGgrKHE/MTowKSksRD1xLmxlbmd0aCsocT8xOjApK0YubGVuZ3RoLEcrPUMsemEucHVzaCh2Lmxlbmd0aCksdi5wdXNoKHttYXRjaDpGfSkpLHErPShxP1wiIFwiOlwiXCIpK0YpfWlmKCF5KUI9eFtFXSxxKz0ocT9cIiBcIjpcIlwiKStCLGsmJnYucHVzaCh7dGV4dDpCfSk7ZWxzZSBpZihrJiZHPj1rKWJyZWFrfUc9emEubGVuZ3RoKihmLmxlbmd0aC0yKTtpZihyfHx0fHxrJiZxLmxlbmd0aC1HPmspaWYoRz1rK0ctdSoyLEU9RC1BLHI+MCYmXHJcbihFKz1yKSx0PjAmJihFKz10KSxFPD1HKXg9cj9BLShyPjA/cjowKTpBLSgoRy1FKS8yfDApLHY9dD9EKyh0PjA/dDowKTp4K0csbHx8KHg+MCYmcS5jaGFyQXQoeCkhPT1cIiBcIiYmcS5jaGFyQXQoeC0xKSE9PVwiIFwiJiYoeD1xLmluZGV4T2YoXCIgXCIseCkseDwwJiYoeD0wKSksdjxxLmxlbmd0aCYmcS5jaGFyQXQodi0xKSE9PVwiIFwiJiZxLmNoYXJBdCh2KSE9PVwiIFwiJiYodj1xLmxhc3RJbmRleE9mKFwiIFwiLHYpLHY8RD92PUQ6Kyt2KSkscT0oeD9kOlwiXCIpK3Euc3Vic3RyaW5nKHgsdikrKHY8cS5sZW5ndGg/ZDpcIlwiKTtlbHNle0Q9W107QT17fTtHPXt9O0U9e307Qj17fTt6PXt9O0Y9Sz1DPTA7Zm9yKE89Tj0xOzspe3ZhciBVPXZvaWQgMDtmb3IobGV0IHk9MCxKO3k8emEubGVuZ3RoO3krKyl7Sj16YVt5XTtpZihGKWlmKEshPT1GKXtpZihFW3krMV0pY29udGludWU7Sis9RjtpZihBW0pdKXtDLT11O0dbeSsxXT0xO0VbeSsxXT0xO2NvbnRpbnVlfWlmKEo+PXYubGVuZ3RoLTEpe2lmKEo+PVxyXG52Lmxlbmd0aCl7RVt5KzFdPTE7Sj49eC5sZW5ndGgmJihHW3krMV09MSk7Y29udGludWV9Qy09dX1xPXZbSl0udGV4dDtpZihMPXQmJnpbeV0paWYoTD4wKXtpZihxLmxlbmd0aD5MKWlmKEVbeSsxXT0xLGwpcT1xLnN1YnN0cmluZygwLEwpO2Vsc2UgY29udGludWU7KEwtPXEubGVuZ3RoKXx8KEw9LTEpO3pbeV09TH1lbHNle0VbeSsxXT0xO2NvbnRpbnVlfWlmKEMrcS5sZW5ndGgrMTw9aylxPVwiIFwiK3EsRFt5XSs9cTtlbHNlIGlmKGwpVT1rLUMtMSxVPjAmJihxPVwiIFwiK3Euc3Vic3RyaW5nKDAsVSksRFt5XSs9cSksRVt5KzFdPTE7ZWxzZXtFW3krMV09MTtjb250aW51ZX19ZWxzZXtpZihFW3ldKWNvbnRpbnVlO0otPUs7aWYoQVtKXSl7Qy09dTtFW3ldPTE7R1t5XT0xO2NvbnRpbnVlfWlmKEo8PTApe2lmKEo8MCl7RVt5XT0xO0dbeV09MTtjb250aW51ZX1DLT11fXE9dltKXS50ZXh0O2lmKEw9ciYmQlt5XSlpZihMPjApe2lmKHEubGVuZ3RoPkwpaWYoRVt5XT0xLGwpcT1xLnN1YnN0cmluZyhxLmxlbmd0aC1cclxuTCk7ZWxzZSBjb250aW51ZTsoTC09cS5sZW5ndGgpfHwoTD0tMSk7Qlt5XT1MfWVsc2V7RVt5XT0xO2NvbnRpbnVlfWlmKEMrcS5sZW5ndGgrMTw9aylxKz1cIiBcIixEW3ldPXErRFt5XTtlbHNlIGlmKGwpVT1xLmxlbmd0aCsxLShrLUMpLFU+PTAmJlU8cS5sZW5ndGgmJihxPXEuc3Vic3RyaW5nKFUpK1wiIFwiLERbeV09cStEW3ldKSxFW3ldPTE7ZWxzZXtFW3ldPTE7Y29udGludWV9fWVsc2V7cT12W0pdLm1hdGNoO3ImJihCW3ldPXIpO3QmJih6W3ldPXQpO3kmJkMrKztsZXQgUGE7Sj8heSYmdSYmKEMrPXUpOihHW3ldPTEsRVt5XT0xKTtKPj14Lmxlbmd0aC0xP1BhPTE6Sjx2Lmxlbmd0aC0xJiZ2W0orMV0ubWF0Y2g/UGE9MTp1JiYoQys9dSk7Qy09Zi5sZW5ndGgtMjtpZigheXx8QytxLmxlbmd0aDw9aylEW3ldPXE7ZWxzZXtVPU49Tz1HW3ldPTA7YnJlYWt9UGEmJihHW3krMV09MSxFW3krMV09MSl9Qys9cS5sZW5ndGg7VT1BW0pdPTF9aWYoVSlLPT09Rj9GKys6SysrO2Vsc2V7Sz09PVxyXG5GP049MDpPPTA7aWYoIU4mJiFPKWJyZWFrO04/KEsrKyxGPUspOkYrK319cT1cIlwiO2ZvcihsZXQgeT0wLEo7eTxELmxlbmd0aDt5KyspSj0oeSYmR1t5XT9cIiBcIjooeSYmIWQ/XCIgXCI6XCJcIikrZCkrRFt5XSxxKz1KO2QmJiFHW0QubGVuZ3RoXSYmKHErPWQpfW0mJihxPXEucmVwbGFjZShtLFwiIFwiKSk7cWFbeWFdLmhpZ2hsaWdodD1xfWlmKGUpYnJlYWt9cmV0dXJuIGN9O2Z1bmN0aW9uIFgoYSxjKXtpZighdGhpc3x8dGhpcy5jb25zdHJ1Y3RvciE9PVgpcmV0dXJuIG5ldyBYKGEsYyk7bGV0IGI9MCxlLGQsZixnLGgsaztpZihhJiZhLmluZGV4KXtjb25zdCBsPWE7Yz1sLmluZGV4O2I9bC5ib29zdHx8MDtpZihkPWwucXVlcnkpe2Y9bC5maWVsZHx8bC5wbHVjaztnPWwuaGlnaGxpZ2h0O2NvbnN0IG09bC5yZXNvbHZlO2E9bC5hc3luY3x8bC5xdWV1ZTtsLnJlc29sdmU9ITE7bC5pbmRleD1udWxsO2E9YT9jLnNlYXJjaEFzeW5jKGwpOmMuc2VhcmNoKGwpO2wucmVzb2x2ZT1tO2wuaW5kZXg9YzthPWEucmVzdWx0fHxhfWVsc2UgYT1bXX1pZihhJiZhLnRoZW4pe2NvbnN0IGw9dGhpczthPWEudGhlbihmdW5jdGlvbihtKXtsLkNbMF09bC5yZXN1bHQ9bS5yZXN1bHR8fG07V2EobCl9KTtlPVthXTthPVtdO2g9bmV3IFByb21pc2UoZnVuY3Rpb24obSl7az1tfSl9dGhpcy5pbmRleD1jfHxudWxsO3RoaXMucmVzdWx0PWF8fFtdO3RoaXMuaD1iO3RoaXMuQz1cclxuZXx8W107dGhpcy5hd2FpdD1ofHxudWxsO3RoaXMucmV0dXJuPWt8fG51bGw7dGhpcy5oaWdobGlnaHQ9Z3x8bnVsbDt0aGlzLnF1ZXJ5PWR8fFwiXCI7dGhpcy5maWVsZD1mfHxcIlwifXc9WC5wcm90b3R5cGU7dy5saW1pdD1mdW5jdGlvbihhKXtpZih0aGlzLmF3YWl0KXtjb25zdCBjPXRoaXM7dGhpcy5DLnB1c2goZnVuY3Rpb24oKXtyZXR1cm4gYy5saW1pdChhKS5yZXN1bHR9KX1lbHNlIGlmKHRoaXMucmVzdWx0Lmxlbmd0aCl7Y29uc3QgYz1bXTtmb3IobGV0IGI9MCxlO2I8dGhpcy5yZXN1bHQubGVuZ3RoO2IrKylpZihlPXRoaXMucmVzdWx0W2JdKWlmKGUubGVuZ3RoPD1hKXtpZihjW2JdPWUsYS09ZS5sZW5ndGgsIWEpYnJlYWt9ZWxzZXtjW2JdPWUuc2xpY2UoMCxhKTticmVha310aGlzLnJlc3VsdD1jfXJldHVybiB0aGlzfTtcclxudy5vZmZzZXQ9ZnVuY3Rpb24oYSl7aWYodGhpcy5hd2FpdCl7Y29uc3QgYz10aGlzO3RoaXMuQy5wdXNoKGZ1bmN0aW9uKCl7cmV0dXJuIGMub2Zmc2V0KGEpLnJlc3VsdH0pfWVsc2UgaWYodGhpcy5yZXN1bHQubGVuZ3RoKXtjb25zdCBjPVtdO2ZvcihsZXQgYj0wLGU7Yjx0aGlzLnJlc3VsdC5sZW5ndGg7YisrKWlmKGU9dGhpcy5yZXN1bHRbYl0pZS5sZW5ndGg8PWE/YS09ZS5sZW5ndGg6KGNbYl09ZS5zbGljZShhKSxhPTApO3RoaXMucmVzdWx0PWN9cmV0dXJuIHRoaXN9O3cuYm9vc3Q9ZnVuY3Rpb24oYSl7aWYodGhpcy5hd2FpdCl7Y29uc3QgYz10aGlzO3RoaXMuQy5wdXNoKGZ1bmN0aW9uKCl7cmV0dXJuIGMuYm9vc3QoYSkucmVzdWx0fSl9ZWxzZSB0aGlzLmgrPWE7cmV0dXJuIHRoaXN9O1xyXG5mdW5jdGlvbiBXYShhLGMpe2xldCBiPWEucmVzdWx0O3ZhciBlPWEuYXdhaXQ7YS5hd2FpdD1udWxsO2ZvcihsZXQgZD0wLGY7ZDxhLkMubGVuZ3RoO2QrKylpZihmPWEuQ1tkXSlpZih0eXBlb2YgZj09PVwiZnVuY3Rpb25cIiliPWYoKSxhLkNbZF09Yj1iLnJlc3VsdHx8YixkLS07ZWxzZSBpZihmLmgpYj1mLmgoKSxhLkNbZF09Yj1iLnJlc3VsdHx8YixkLS07ZWxzZSBpZihmLnRoZW4pcmV0dXJuIGEuYXdhaXQ9ZTtlPWEucmV0dXJuO2EuQz1bXTthLnJldHVybj1udWxsO2N8fGUoYik7cmV0dXJuIGJ9XHJcbncucmVzb2x2ZT1mdW5jdGlvbihhLGMsYixlLGQpe2xldCBmPXRoaXMuYXdhaXQ/V2EodGhpcywhMCk6dGhpcy5yZXN1bHQ7aWYoZi50aGVuKXtjb25zdCBnPXRoaXM7cmV0dXJuIGYudGhlbihmdW5jdGlvbigpe3JldHVybiBnLnJlc29sdmUoYSxjLGIsZSxkKX0pfWYubGVuZ3RoJiYodHlwZW9mIGE9PT1cIm9iamVjdFwiPyhlPWEuaGlnaGxpZ2h0fHx0aGlzLmhpZ2hsaWdodCxiPSEhZXx8YS5lbnJpY2gsYz1hLm9mZnNldCxhPWEubGltaXQpOihlPWV8fHRoaXMuaGlnaGxpZ2h0LGI9ISFlfHxiKSxmPWQ/Yj9UYS5jYWxsKHRoaXMuaW5kZXgsZik6ZjpTYS5jYWxsKHRoaXMuaW5kZXgsZixhfHwxMDAsYyxiKSk7cmV0dXJuIHRoaXMuZmluYWxpemUoZixlKX07XHJcbncuZmluYWxpemU9ZnVuY3Rpb24oYSxjKXtpZihhLnRoZW4pe2NvbnN0IGU9dGhpcztyZXR1cm4gYS50aGVuKGZ1bmN0aW9uKGQpe3JldHVybiBlLmZpbmFsaXplKGQsYyl9KX1jJiZhLmxlbmd0aCYmdGhpcy5xdWVyeSYmKGE9Y2IodGhpcy5xdWVyeSxhLHRoaXMuaW5kZXguaW5kZXgsdGhpcy5maWVsZCxjKSk7Y29uc3QgYj10aGlzLnJldHVybjt0aGlzLmhpZ2hsaWdodD10aGlzLmluZGV4PXRoaXMucmVzdWx0PXRoaXMuQz10aGlzLmF3YWl0PXRoaXMucmV0dXJuPW51bGw7dGhpcy5xdWVyeT10aGlzLmZpZWxkPVwiXCI7YiYmYihhKTtyZXR1cm4gYX07ZnVuY3Rpb24gJGEoYSxjLGIsZSxkLGYsZyl7Y29uc3QgaD1hLmxlbmd0aDtsZXQgaz1bXSxsLG07bD1JKCk7Zm9yKGxldCBwPTAsdSxyLHQsbjtwPGM7cCsrKWZvcihsZXQgcT0wO3E8aDtxKyspaWYodD1hW3FdLHA8dC5sZW5ndGgmJih1PXRbcF0pKWZvcihsZXQgeD0wO3g8dS5sZW5ndGg7eCsrKXtyPXVbeF07KG09bFtyXSk/bFtyXSsrOihtPTAsbFtyXT0xKTtuPWtbbV18fChrW21dPVtdKTtpZighZyl7bGV0IHY9cCsocXx8IWQ/MDpmfHwwKTtuPW5bdl18fChuW3ZdPVtdKX1uLnB1c2gocik7aWYoZyYmYiYmbT09PWgtMSYmbi5sZW5ndGgtZT09PWIpcmV0dXJuIGU/bi5zbGljZShlKTpufWlmKGE9ay5sZW5ndGgpaWYoZClrPWsubGVuZ3RoPjE/WWEoayxiLGUsZyxmKTooaz1rWzBdKSYmYiYmay5sZW5ndGg+Ynx8ZT9rLnNsaWNlKGUsYitlKTprO2Vsc2V7aWYoYTxoKXJldHVybltdO2s9a1thLTFdO2lmKGJ8fGUpaWYoZyl7aWYoay5sZW5ndGg+Ynx8ZSlrPWsuc2xpY2UoZSxiK1xyXG5lKX1lbHNle2Q9W107Zm9yKGxldCBwPTAsdTtwPGsubGVuZ3RoO3ArKylpZih1PWtbcF0paWYoZSYmdS5sZW5ndGg+ZSllLT11Lmxlbmd0aDtlbHNle2lmKGImJnUubGVuZ3RoPmJ8fGUpdT11LnNsaWNlKGUsYitlKSxiLT11Lmxlbmd0aCxlJiYoZS09dS5sZW5ndGgpO2QucHVzaCh1KTtpZighYilicmVha31rPWR9fXJldHVybiBrfVxyXG5mdW5jdGlvbiBZYShhLGMsYixlLGQpe2NvbnN0IGY9W10sZz1JKCk7bGV0IGg7dmFyIGs9YS5sZW5ndGg7bGV0IGw7aWYoZSlmb3IoZD1rLTE7ZD49MDtkLS0pe2lmKGw9KGU9YVtkXSkmJmUubGVuZ3RoKWZvcihrPTA7azxsO2srKylpZihoPWVba10sIWdbaF0paWYoZ1toXT0xLGIpYi0tO2Vsc2UgaWYoZi5wdXNoKGgpLGYubGVuZ3RoPT09YylyZXR1cm4gZn1lbHNlIGZvcihsZXQgbT1rLTEscCx1PTA7bT49MDttLS0pe3A9YVttXTtmb3IobGV0IHI9MDtyPHAubGVuZ3RoO3IrKylpZihsPShlPXBbcl0pJiZlLmxlbmd0aClmb3IobGV0IHQ9MDt0PGw7dCsrKWlmKGg9ZVt0XSwhZ1toXSlpZihnW2hdPTEsYiliLS07ZWxzZXtsZXQgbj0ocisobTxrLTE/ZHx8MDowKSkvKG0rMSl8MDsoZltuXXx8KGZbbl09W10pKS5wdXNoKGgpO2lmKCsrdT09PWMpcmV0dXJuIGZ9fXJldHVybiBmfVxyXG5mdW5jdGlvbiBlYihhLGMsYil7Y29uc3QgZT1JKCksZD1bXTtmb3IobGV0IGY9MCxnO2Y8Yy5sZW5ndGg7ZisrKXtnPWNbZl07Zm9yKGxldCBoPTA7aDxnLmxlbmd0aDtoKyspZVtnW2hdXT0xfWlmKGIpZm9yKGxldCBmPTAsZztmPGEubGVuZ3RoO2YrKylnPWFbZl0sZVtnXSYmKGQucHVzaChnKSxlW2ddPTApO2Vsc2UgZm9yKGxldCBmPTAsZyxoO2Y8YS5yZXN1bHQubGVuZ3RoO2YrKylmb3IoZz1hLnJlc3VsdFtmXSxjPTA7YzxnLmxlbmd0aDtjKyspaD1nW2NdLGVbaF0mJigoZFtmXXx8KGRbZl09W10pKS5wdXNoKGgpLGVbaF09MCk7cmV0dXJuIGR9O0koKTtOYS5wcm90b3R5cGUuc2VhcmNoPWZ1bmN0aW9uKGEsYyxiLGUpe2J8fCghYyYmYmEoYSk/KGI9YSxhPVwiXCIpOmJhKGMpJiYoYj1jLGM9MCkpO2xldCBkPVtdO3ZhciBmPVtdO2xldCBnO2xldCBoLGssbCxtLHA7bGV0IHU9MCxyPSEwLHQ7aWYoYil7Yi5jb25zdHJ1Y3Rvcj09PUFycmF5JiYoYj17aW5kZXg6Yn0pO2E9Yi5xdWVyeXx8YTtnPWIucGx1Y2s7aD1iLm1lcmdlO2w9Yi5ib29zdDtwPWd8fGIuZmllbGR8fChwPWIuaW5kZXgpJiYocC5pbmRleD9udWxsOnApO3ZhciBuPXRoaXMudGFnJiZiLnRhZztrPWIuc3VnZ2VzdDtyPWIucmVzb2x2ZSE9PSExO209Yi5jYWNoZTt0PXImJnRoaXMuc3RvcmUmJmIuaGlnaGxpZ2h0O3ZhciBxPSEhdHx8ciYmdGhpcy5zdG9yZSYmYi5lbnJpY2g7Yz1iLmxpbWl0fHxjO3ZhciB4PWIub2Zmc2V0fHwwO2N8fChjPXI/MTAwOjApO2lmKG4mJighdGhpcy5kYnx8IWUpKXtuLmNvbnN0cnVjdG9yIT09QXJyYXkmJihuPVtuXSk7dmFyIHY9W107Zm9yKGxldCBCPVxyXG4wLHo7QjxuLmxlbmd0aDtCKyspaWYoej1uW0JdLHouZmllbGQmJnoudGFnKXt2YXIgQT16LnRhZztpZihBLmNvbnN0cnVjdG9yPT09QXJyYXkpZm9yKHZhciBEPTA7RDxBLmxlbmd0aDtEKyspdi5wdXNoKHouZmllbGQsQVtEXSk7ZWxzZSB2LnB1c2goei5maWVsZCxBKX1lbHNle0E9T2JqZWN0LmtleXMoeik7Zm9yKGxldCBDPTAsSyxGO0M8QS5sZW5ndGg7QysrKWlmKEs9QVtDXSxGPXpbS10sRi5jb25zdHJ1Y3Rvcj09PUFycmF5KWZvcihEPTA7RDxGLmxlbmd0aDtEKyspdi5wdXNoKEssRltEXSk7ZWxzZSB2LnB1c2goSyxGKX1uPXY7aWYoIWEpe2Y9W107aWYodi5sZW5ndGgpZm9yKG49MDtuPHYubGVuZ3RoO24rPTIpe2lmKHRoaXMuZGIpe2U9dGhpcy5pbmRleC5nZXQodltuXSk7aWYoIWUpY29udGludWU7Zi5wdXNoKGU9ZS5kYi50YWcodltuKzFdLGMseCxxKSl9ZWxzZSBlPWZiLmNhbGwodGhpcyx2W25dLHZbbisxXSxjLHgscSk7ZC5wdXNoKHI/e2ZpZWxkOnZbbl0sdGFnOnZbbitcclxuMV0scmVzdWx0OmV9OltlXSl9aWYoZi5sZW5ndGgpe2NvbnN0IEI9dGhpcztyZXR1cm4gUHJvbWlzZS5hbGwoZikudGhlbihmdW5jdGlvbih6KXtmb3IobGV0IEM9MDtDPHoubGVuZ3RoO0MrKylyP2RbQ10ucmVzdWx0PXpbQ106ZFtDXT16W0NdO3JldHVybiByP2Q6bmV3IFgoZC5sZW5ndGg+MT8kYShkLDEsMCwwLGssbCk6ZFswXSxCKX0pfXJldHVybiByP2Q6bmV3IFgoZC5sZW5ndGg+MT8kYShkLDEsMCwwLGssbCk6ZFswXSx0aGlzKX19cnx8Z3x8IShwPXB8fHRoaXMuZmllbGQpfHwoTShwKT9nPXA6KHAuY29uc3RydWN0b3I9PT1BcnJheSYmcC5sZW5ndGg9PT0xJiYocD1wWzBdKSxnPXAuZmllbGR8fHAuaW5kZXgpKTtwJiZwLmNvbnN0cnVjdG9yIT09QXJyYXkmJihwPVtwXSl9cHx8KHA9dGhpcy5maWVsZCk7bGV0IEc7dj0odGhpcy53b3JrZXJ8fHRoaXMuZGIpJiYhZSYmW107Zm9yKGxldCBCPTAseixDLEs7QjxwLmxlbmd0aDtCKyspe0M9cFtCXTtpZih0aGlzLmRiJiZ0aGlzLnRhZyYmXHJcbiF0aGlzLkJbQl0pY29udGludWU7bGV0IEY7TShDKXx8KEY9QyxDPUYuZmllbGQsYT1GLnF1ZXJ5fHxhLGM9YWEoRi5saW1pdCxjKSx4PWFhKEYub2Zmc2V0LHgpLGs9YWEoRi5zdWdnZXN0LGspLHQ9ciYmdGhpcy5zdG9yZSYmYWEoRi5oaWdobGlnaHQsdCkscT0hIXR8fHImJnRoaXMuc3RvcmUmJmFhKEYuZW5yaWNoLHEpLG09YWEoRi5jYWNoZSxtKSk7aWYoZSl6PWVbQl07ZWxzZXtBPUZ8fGJ8fHt9O0Q9QS5lbnJpY2g7dmFyIEU9dGhpcy5pbmRleC5nZXQoQyk7biYmKHRoaXMuZGImJihBLnRhZz1uLEc9RS5kYi5zdXBwb3J0X3RhZ19zZWFyY2gsQS5maWVsZD1wKSwhRyYmRCYmKEEuZW5yaWNoPSExKSk7ej1tP0Uuc2VhcmNoQ2FjaGUoYSxjLEEpOkUuc2VhcmNoKGEsYyxBKTtEJiYoQS5lbnJpY2g9RCk7aWYodil7dltCXT16O2NvbnRpbnVlfX1LPSh6PXoucmVzdWx0fHx6KSYmei5sZW5ndGg7aWYobiYmSyl7QT1bXTtEPTA7aWYodGhpcy5kYiYmZSl7aWYoIUcpZm9yKEU9cC5sZW5ndGg7RTxcclxuZS5sZW5ndGg7RSsrKXtsZXQgTj1lW0VdO2lmKE4mJk4ubGVuZ3RoKUQrKyxBLnB1c2goTik7ZWxzZSBpZighaylyZXR1cm4gcj9kOm5ldyBYKGQsdGhpcyl9fWVsc2UgZm9yKGxldCBOPTAsTyxQO048bi5sZW5ndGg7Tis9Mil7Tz10aGlzLnRhZy5nZXQobltOXSk7aWYoIU8paWYoayljb250aW51ZTtlbHNlIHJldHVybiByP2Q6bmV3IFgoZCx0aGlzKTtpZihQPShPPU8mJk8uZ2V0KG5bTisxXSkpJiZPLmxlbmd0aClEKyssQS5wdXNoKE8pO2Vsc2UgaWYoIWspcmV0dXJuIHI/ZDpuZXcgWChkLHRoaXMpfWlmKEQpe3o9ZWIoeixBLHIpO0s9ei5sZW5ndGg7aWYoIUsmJiFrKXJldHVybiByP3o6bmV3IFgoeix0aGlzKTtELS19fWlmKEspZlt1XT1DLGQucHVzaCh6KSx1Kys7ZWxzZSBpZihwLmxlbmd0aD09PTEpcmV0dXJuIHI/ZDpuZXcgWChkLHRoaXMpfWlmKHYpe2lmKHRoaXMuZGImJm4mJm4ubGVuZ3RoJiYhRylmb3IocT0wO3E8bi5sZW5ndGg7cSs9Mil7Zj10aGlzLmluZGV4LmdldChuW3FdKTtcclxuaWYoIWYpaWYoayljb250aW51ZTtlbHNlIHJldHVybiByP2Q6bmV3IFgoZCx0aGlzKTt2LnB1c2goZi5kYi50YWcobltxKzFdLGMseCwhMSkpfWNvbnN0IEI9dGhpcztyZXR1cm4gUHJvbWlzZS5hbGwodikudGhlbihmdW5jdGlvbih6KXtiJiYoYi5yZXNvbHZlPXIpO3oubGVuZ3RoJiYoej1CLnNlYXJjaChhLGMsYix6KSk7cmV0dXJuIHp9KX1pZighdSlyZXR1cm4gcj9kOm5ldyBYKGQsdGhpcyk7aWYoZyYmKCFxfHwhdGhpcy5zdG9yZSkpcmV0dXJuIGQ9ZFswXSxyP2Q6bmV3IFgoZCx0aGlzKTt2PVtdO2Zvcih4PTA7eDxmLmxlbmd0aDt4Kyspe249ZFt4XTtxJiZuLmxlbmd0aCYmdHlwZW9mIG5bMF0uZG9jPT09XCJ1bmRlZmluZWRcIiYmKHRoaXMuZGI/di5wdXNoKG49dGhpcy5pbmRleC5nZXQodGhpcy5maWVsZFswXSkuZGIuZW5yaWNoKG4pKTpuPVRhLmNhbGwodGhpcyxuKSk7aWYoZylyZXR1cm4gcj90P2NiKGEsbix0aGlzLmluZGV4LGcsdCk6bjpuZXcgWChuLHRoaXMpO2RbeF09XHJcbntmaWVsZDpmW3hdLHJlc3VsdDpufX1pZihxJiZ0aGlzLmRiJiZ2Lmxlbmd0aCl7Y29uc3QgQj10aGlzO3JldHVybiBQcm9taXNlLmFsbCh2KS50aGVuKGZ1bmN0aW9uKHope2ZvcihsZXQgQz0wO0M8ei5sZW5ndGg7QysrKWRbQ10ucmVzdWx0PXpbQ107dCYmKGQ9Y2IoYSxkLEIuaW5kZXgsZyx0KSk7cmV0dXJuIGg/Z2IoZCk6ZH0pfXQmJihkPWNiKGEsZCx0aGlzLmluZGV4LGcsdCkpO3JldHVybiBoP2diKGQpOmR9O1xyXG5mdW5jdGlvbiBnYihhKXtjb25zdCBjPVtdLGI9SSgpLGU9SSgpO2ZvcihsZXQgZD0wLGYsZyxoLGssbCxtLHA7ZDxhLmxlbmd0aDtkKyspe2Y9YVtkXTtnPWYuZmllbGQ7aD1mLnJlc3VsdDtmb3IobGV0IHU9MDt1PGgubGVuZ3RoO3UrKylpZihsPWhbdV0sdHlwZW9mIGwhPT1cIm9iamVjdFwiP2w9e2lkOms9bH06az1sLmlkLChtPWJba10pP20ucHVzaChnKToobC5maWVsZD1iW2tdPVtnXSxjLnB1c2gobCkpLHA9bC5oaWdobGlnaHQpbT1lW2tdLG18fChlW2tdPW09e30sbC5oaWdobGlnaHQ9bSksbVtnXT1wfXJldHVybiBjfWZ1bmN0aW9uIGZiKGEsYyxiLGUsZCl7YT10aGlzLnRhZy5nZXQoYSk7aWYoIWEpcmV0dXJuW107YT1hLmdldChjKTtpZighYSlyZXR1cm5bXTtjPWEubGVuZ3RoLWU7aWYoYz4wKXtpZihiJiZjPmJ8fGUpYT1hLnNsaWNlKGUsZStiKTtkJiYoYT1UYS5jYWxsKHRoaXMsYSkpfXJldHVybiBhfVxyXG5mdW5jdGlvbiBUYShhKXtpZighdGhpc3x8IXRoaXMuc3RvcmUpcmV0dXJuIGE7aWYodGhpcy5kYilyZXR1cm4gdGhpcy5pbmRleC5nZXQodGhpcy5maWVsZFswXSkuZGIuZW5yaWNoKGEpO2NvbnN0IGM9QXJyYXkoYS5sZW5ndGgpO2ZvcihsZXQgYj0wLGU7YjxhLmxlbmd0aDtiKyspZT1hW2JdLGNbYl09e2lkOmUsZG9jOnRoaXMuc3RvcmUuZ2V0KGUpfTtyZXR1cm4gY307ZnVuY3Rpb24gTmEoYSl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1OYSlyZXR1cm4gbmV3IE5hKGEpO2NvbnN0IGM9YS5kb2N1bWVudHx8YS5kb2N8fGE7bGV0IGIsZTt0aGlzLkI9W107dGhpcy5maWVsZD1bXTt0aGlzLkQ9W107dGhpcy5rZXk9KGI9Yy5rZXl8fGMuaWQpJiZoYihiLHRoaXMuRCl8fFwiaWRcIjsoZT1hLmtleXN0b3JlfHwwKSYmKHRoaXMua2V5c3RvcmU9ZSk7dGhpcy5mYXN0dXBkYXRlPSEhYS5mYXN0dXBkYXRlO3RoaXMucmVnPSF0aGlzLmZhc3R1cGRhdGV8fGEud29ya2VyfHxhLmRiP2U/bmV3IFMoZSk6bmV3IFNldDplP25ldyBSKGUpOm5ldyBNYXA7dGhpcy5oPShiPWMuc3RvcmV8fG51bGwpJiZiJiZiIT09ITAmJltdO3RoaXMuc3RvcmU9Yj9lP25ldyBSKGUpOm5ldyBNYXA6bnVsbDt0aGlzLmNhY2hlPShiPWEuY2FjaGV8fG51bGwpJiZuZXcgbWEoYik7YS5jYWNoZT0hMTt0aGlzLndvcmtlcj1hLndvcmtlcnx8ITE7dGhpcy5wcmlvcml0eT1hLnByaW9yaXR5fHxcclxuNDt0aGlzLmluZGV4PWliLmNhbGwodGhpcyxhLGMpO3RoaXMudGFnPW51bGw7aWYoYj1jLnRhZylpZih0eXBlb2YgYj09PVwic3RyaW5nXCImJihiPVtiXSksYi5sZW5ndGgpe3RoaXMudGFnPW5ldyBNYXA7dGhpcy5BPVtdO3RoaXMuRj1bXTtmb3IobGV0IGQ9MCxmLGc7ZDxiLmxlbmd0aDtkKyspe2Y9YltkXTtnPWYuZmllbGR8fGY7aWYoIWcpdGhyb3cgRXJyb3IoXCJUaGUgdGFnIGZpZWxkIGZyb20gdGhlIGRvY3VtZW50IGRlc2NyaXB0b3IgaXMgdW5kZWZpbmVkLlwiKTtmLmN1c3RvbT90aGlzLkFbZF09Zi5jdXN0b206KHRoaXMuQVtkXT1oYihnLHRoaXMuRCksZi5maWx0ZXImJih0eXBlb2YgdGhpcy5BW2RdPT09XCJzdHJpbmdcIiYmKHRoaXMuQVtkXT1uZXcgU3RyaW5nKHRoaXMuQVtkXSkpLHRoaXMuQVtkXS5HPWYuZmlsdGVyKSk7dGhpcy5GW2RdPWc7dGhpcy50YWcuc2V0KGcsbmV3IE1hcCl9fWlmKHRoaXMud29ya2VyKXt0aGlzLmZhc3R1cGRhdGU9ITE7YT1bXTtmb3IoY29uc3QgZCBvZiB0aGlzLmluZGV4LnZhbHVlcygpKWQudGhlbiYmXHJcbmEucHVzaChkKTtpZihhLmxlbmd0aCl7Y29uc3QgZD10aGlzO3JldHVybiBQcm9taXNlLmFsbChhKS50aGVuKGZ1bmN0aW9uKGYpe2xldCBnPTA7Zm9yKGNvbnN0IGggb2YgZC5pbmRleC5lbnRyaWVzKCkpe2NvbnN0IGs9aFswXTtsZXQgbD1oWzFdO2wudGhlbiYmKGw9ZltnXSxkLmluZGV4LnNldChrLGwpLGcrKyl9cmV0dXJuIGR9KX19ZWxzZSBhLmRiJiYodGhpcy5mYXN0dXBkYXRlPSExLHRoaXMubW91bnQoYS5kYikpfXc9TmEucHJvdG90eXBlO1xyXG53Lm1vdW50PWZ1bmN0aW9uKGEpe2xldCBjPXRoaXMuZmllbGQ7aWYodGhpcy50YWcpZm9yKGxldCBmPTAsZztmPHRoaXMuRi5sZW5ndGg7ZisrKXtnPXRoaXMuRltmXTt2YXIgYj12b2lkIDA7dGhpcy5pbmRleC5zZXQoZyxiPW5ldyBUKHt9LHRoaXMucmVnKSk7Yz09PXRoaXMuZmllbGQmJihjPWMuc2xpY2UoMCkpO2MucHVzaChnKTtiLnRhZz10aGlzLnRhZy5nZXQoZyl9Yj1bXTtjb25zdCBlPXtkYjphLmRiLHR5cGU6YS50eXBlLGZhc3R1cGRhdGU6YS5mYXN0dXBkYXRlfTtmb3IobGV0IGY9MCxnLGg7ZjxjLmxlbmd0aDtmKyspe2UuZmllbGQ9aD1jW2ZdO2c9dGhpcy5pbmRleC5nZXQoaCk7Y29uc3Qgaz1uZXcgYS5jb25zdHJ1Y3RvcihhLmlkLGUpO2suaWQ9YS5pZDtiW2ZdPWsubW91bnQoZyk7Zy5kb2N1bWVudD0hMDtmP2cuYnlwYXNzPSEwOmcuc3RvcmU9dGhpcy5zdG9yZX1jb25zdCBkPXRoaXM7cmV0dXJuIHRoaXMuZGI9UHJvbWlzZS5hbGwoYikudGhlbihmdW5jdGlvbigpe2QuZGI9XHJcbiEwfSl9O3cuY29tbWl0PWFzeW5jIGZ1bmN0aW9uKCl7Y29uc3QgYT1bXTtmb3IoY29uc3QgYyBvZiB0aGlzLmluZGV4LnZhbHVlcygpKWEucHVzaChjLmNvbW1pdCgpKTthd2FpdCBQcm9taXNlLmFsbChhKTt0aGlzLnJlZy5jbGVhcigpfTt3LmRlc3Ryb3k9ZnVuY3Rpb24oKXtjb25zdCBhPVtdO2Zvcihjb25zdCBjIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpYS5wdXNoKGMuZGVzdHJveSgpKTtyZXR1cm4gUHJvbWlzZS5hbGwoYSl9O1xyXG5mdW5jdGlvbiBpYihhLGMpe2NvbnN0IGI9bmV3IE1hcDtsZXQgZT1jLmluZGV4fHxjLmZpZWxkfHxjO00oZSkmJihlPVtlXSk7Zm9yKGxldCBmPTAsZyxoO2Y8ZS5sZW5ndGg7ZisrKXtnPWVbZl07TShnKXx8KGg9ZyxnPWcuZmllbGQpO2g9YmEoaCk/T2JqZWN0LmFzc2lnbih7fSxhLGgpOmE7aWYodGhpcy53b3JrZXIpe3ZhciBkPXZvaWQgMDtkPShkPWguZW5jb2RlcikmJmQuZW5jb2RlP2Q6bmV3IGthKHR5cGVvZiBkPT09XCJzdHJpbmdcIj92YVtkXTpkfHx7fSk7ZD1uZXcgTGEoaCxkKTtiLnNldChnLGQpfXRoaXMud29ya2VyfHxiLnNldChnLG5ldyBUKGgsdGhpcy5yZWcpKTtoLmN1c3RvbT90aGlzLkJbZl09aC5jdXN0b206KHRoaXMuQltmXT1oYihnLHRoaXMuRCksaC5maWx0ZXImJih0eXBlb2YgdGhpcy5CW2ZdPT09XCJzdHJpbmdcIiYmKHRoaXMuQltmXT1uZXcgU3RyaW5nKHRoaXMuQltmXSkpLHRoaXMuQltmXS5HPWguZmlsdGVyKSk7dGhpcy5maWVsZFtmXT1nfWlmKHRoaXMuaCl7YT1cclxuYy5zdG9yZTtNKGEpJiYoYT1bYV0pO2ZvcihsZXQgZj0wLGcsaDtmPGEubGVuZ3RoO2YrKylnPWFbZl0saD1nLmZpZWxkfHxnLGcuY3VzdG9tPyh0aGlzLmhbZl09Zy5jdXN0b20sZy5jdXN0b20uTz1oKToodGhpcy5oW2ZdPWhiKGgsdGhpcy5EKSxnLmZpbHRlciYmKHR5cGVvZiB0aGlzLmhbZl09PT1cInN0cmluZ1wiJiYodGhpcy5oW2ZdPW5ldyBTdHJpbmcodGhpcy5oW2ZdKSksdGhpcy5oW2ZdLkc9Zy5maWx0ZXIpKX1yZXR1cm4gYn1mdW5jdGlvbiBoYihhLGMpe2NvbnN0IGI9YS5zcGxpdChcIjpcIik7bGV0IGU9MDtmb3IobGV0IGQ9MDtkPGIubGVuZ3RoO2QrKylhPWJbZF0sYVthLmxlbmd0aC0xXT09PVwiXVwiJiYoYT1hLnN1YnN0cmluZygwLGEubGVuZ3RoLTIpKSYmKGNbZV09ITApLGEmJihiW2UrK109YSk7ZTxiLmxlbmd0aCYmKGIubGVuZ3RoPWUpO3JldHVybiBlPjE/YjpiWzBdfXcuYXBwZW5kPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIHRoaXMuYWRkKGEsYywhMCl9O1xyXG53LnVwZGF0ZT1mdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLnJlbW92ZShhKS5hZGQoYSxjKX07dy5yZW1vdmU9ZnVuY3Rpb24oYSl7YmEoYSkmJihhPWNhKGEsdGhpcy5rZXkpKTtmb3IodmFyIGMgb2YgdGhpcy5pbmRleC52YWx1ZXMoKSljLnJlbW92ZShhLCEwKTtpZih0aGlzLnJlZy5oYXMoYSkpe2lmKHRoaXMudGFnJiYhdGhpcy5mYXN0dXBkYXRlKWZvcihsZXQgYiBvZiB0aGlzLnRhZy52YWx1ZXMoKSlmb3IobGV0IGUgb2YgYil7Yz1lWzBdO2NvbnN0IGQ9ZVsxXSxmPWQuaW5kZXhPZihhKTtmPi0xJiYoZC5sZW5ndGg+MT9kLnNwbGljZShmLDEpOmIuZGVsZXRlKGMpKX10aGlzLnN0b3JlJiZ0aGlzLnN0b3JlLmRlbGV0ZShhKTt0aGlzLnJlZy5kZWxldGUoYSl9dGhpcy5jYWNoZSYmdGhpcy5jYWNoZS5yZW1vdmUoYSk7cmV0dXJuIHRoaXN9O1xyXG53LmNsZWFyPWZ1bmN0aW9uKCl7Y29uc3QgYT1bXTtmb3IoY29uc3QgYyBvZiB0aGlzLmluZGV4LnZhbHVlcygpKXtjb25zdCBiPWMuY2xlYXIoKTtiLnRoZW4mJmEucHVzaChiKX1pZih0aGlzLnRhZylmb3IoY29uc3QgYyBvZiB0aGlzLnRhZy52YWx1ZXMoKSljLmNsZWFyKCk7dGhpcy5zdG9yZSYmdGhpcy5zdG9yZS5jbGVhcigpO3RoaXMuY2FjaGUmJnRoaXMuY2FjaGUuY2xlYXIoKTtyZXR1cm4gYS5sZW5ndGg/UHJvbWlzZS5hbGwoYSk6dGhpc307dy5jb250YWluPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmRiP3RoaXMuaW5kZXguZ2V0KHRoaXMuZmllbGRbMF0pLmRiLmhhcyhhKTp0aGlzLnJlZy5oYXMoYSl9O3cuY2xlYW51cD1mdW5jdGlvbigpe2Zvcihjb25zdCBhIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpYS5jbGVhbnVwKCk7cmV0dXJuIHRoaXN9O1xyXG53LmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5kYj90aGlzLmluZGV4LmdldCh0aGlzLmZpZWxkWzBdKS5kYi5lbnJpY2goYSkudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gY1swXSYmY1swXS5kb2N8fG51bGx9KTp0aGlzLnN0b3JlLmdldChhKXx8bnVsbH07dy5zZXQ9ZnVuY3Rpb24oYSxjKXt0eXBlb2YgYT09PVwib2JqZWN0XCImJihjPWEsYT1jYShjLHRoaXMua2V5KSk7dGhpcy5zdG9yZS5zZXQoYSxjKTtyZXR1cm4gdGhpc307dy5zZWFyY2hDYWNoZT1sYTt3LmV4cG9ydD1qYjt3LmltcG9ydD1rYjtGYShOYS5wcm90b3R5cGUpO2Z1bmN0aW9uIGxiKGEsYz0wKXtsZXQgYj1bXSxlPVtdO2MmJihjPTI1RTQvYyo1RTN8MCk7Zm9yKGNvbnN0IGQgb2YgYS5lbnRyaWVzKCkpZS5wdXNoKGQpLGUubGVuZ3RoPT09YyYmKGIucHVzaChlKSxlPVtdKTtlLmxlbmd0aCYmYi5wdXNoKGUpO3JldHVybiBifWZ1bmN0aW9uIG1iKGEsYyl7Y3x8KGM9bmV3IE1hcCk7Zm9yKGxldCBiPTAsZTtiPGEubGVuZ3RoO2IrKyllPWFbYl0sYy5zZXQoZVswXSxlWzFdKTtyZXR1cm4gY31mdW5jdGlvbiBuYihhLGM9MCl7bGV0IGI9W10sZT1bXTtjJiYoYz0yNUU0L2MqMUUzfDApO2Zvcihjb25zdCBkIG9mIGEuZW50cmllcygpKWUucHVzaChbZFswXSxsYihkWzFdKVswXV0pLGUubGVuZ3RoPT09YyYmKGIucHVzaChlKSxlPVtdKTtlLmxlbmd0aCYmYi5wdXNoKGUpO3JldHVybiBifVxyXG5mdW5jdGlvbiBvYihhLGMpe2N8fChjPW5ldyBNYXApO2ZvcihsZXQgYj0wLGUsZDtiPGEubGVuZ3RoO2IrKyllPWFbYl0sZD1jLmdldChlWzBdKSxjLnNldChlWzBdLG1iKGVbMV0sZCkpO3JldHVybiBjfWZ1bmN0aW9uIHBiKGEpe2xldCBjPVtdLGI9W107Zm9yKGNvbnN0IGUgb2YgYS5rZXlzKCkpYi5wdXNoKGUpLGIubGVuZ3RoPT09MjVFNCYmKGMucHVzaChiKSxiPVtdKTtiLmxlbmd0aCYmYy5wdXNoKGIpO3JldHVybiBjfWZ1bmN0aW9uIHFiKGEsYyl7Y3x8KGM9bmV3IFNldCk7Zm9yKGxldCBiPTA7YjxhLmxlbmd0aDtiKyspYy5hZGQoYVtiXSk7cmV0dXJuIGN9XHJcbmZ1bmN0aW9uIHJiKGEsYyxiLGUsZCxmLGc9MCl7Y29uc3QgaD1lJiZlLmNvbnN0cnVjdG9yPT09QXJyYXk7dmFyIGs9aD9lLnNoaWZ0KCk6ZTtpZighaylyZXR1cm4gdGhpcy5leHBvcnQoYSxjLGQsZisxKTtpZigoaz1hKChjP2MrXCIuXCI6XCJcIikrKGcrMSkrXCIuXCIrYixKU09OLnN0cmluZ2lmeShrKSkpJiZrLnRoZW4pe2NvbnN0IGw9dGhpcztyZXR1cm4gay50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHJiLmNhbGwobCxhLGMsYixoP2U6bnVsbCxkLGYsZysxKX0pfXJldHVybiByYi5jYWxsKHRoaXMsYSxjLGIsaD9lOm51bGwsZCxmLGcrMSl9XHJcbmZ1bmN0aW9uIGpiKGEsYyxiPTAsZT0wKXtpZihiPHRoaXMuZmllbGQubGVuZ3RoKXtjb25zdCBnPXRoaXMuZmllbGRbYl07aWYoKGM9dGhpcy5pbmRleC5nZXQoZykuZXhwb3J0KGEsZyxiLGU9MSkpJiZjLnRoZW4pe2NvbnN0IGg9dGhpcztyZXR1cm4gYy50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGguZXhwb3J0KGEsZyxiKzEpfSl9cmV0dXJuIHRoaXMuZXhwb3J0KGEsZyxiKzEpfWxldCBkLGY7c3dpdGNoKGUpe2Nhc2UgMDpkPVwicmVnXCI7Zj1wYih0aGlzLnJlZyk7Yz1udWxsO2JyZWFrO2Nhc2UgMTpkPVwidGFnXCI7Zj10aGlzLnRhZyYmbmIodGhpcy50YWcsdGhpcy5yZWcuc2l6ZSk7Yz1udWxsO2JyZWFrO2Nhc2UgMjpkPVwiZG9jXCI7Zj10aGlzLnN0b3JlJiZsYih0aGlzLnN0b3JlKTtjPW51bGw7YnJlYWs7ZGVmYXVsdDpyZXR1cm59cmV0dXJuIHJiLmNhbGwodGhpcyxhLGMsZCxmfHxudWxsLGIsZSl9XHJcbmZ1bmN0aW9uIGtiKGEsYyl7dmFyIGI9YS5zcGxpdChcIi5cIik7YltiLmxlbmd0aC0xXT09PVwianNvblwiJiZiLnBvcCgpO2NvbnN0IGU9Yi5sZW5ndGg+Mj9iWzBdOlwiXCI7Yj1iLmxlbmd0aD4yP2JbMl06YlsxXTtpZih0aGlzLndvcmtlciYmZSlyZXR1cm4gdGhpcy5pbmRleC5nZXQoZSkuaW1wb3J0KGEpO2lmKGMpe3R5cGVvZiBjPT09XCJzdHJpbmdcIiYmKGM9SlNPTi5wYXJzZShjKSk7aWYoZSlyZXR1cm4gdGhpcy5pbmRleC5nZXQoZSkuaW1wb3J0KGIsYyk7c3dpdGNoKGIpe2Nhc2UgXCJyZWdcIjp0aGlzLmZhc3R1cGRhdGU9ITE7dGhpcy5yZWc9cWIoYyx0aGlzLnJlZyk7Zm9yKGxldCBkPTAsZjtkPHRoaXMuZmllbGQubGVuZ3RoO2QrKylmPXRoaXMuaW5kZXguZ2V0KHRoaXMuZmllbGRbZF0pLGYuZmFzdHVwZGF0ZT0hMSxmLnJlZz10aGlzLnJlZztpZih0aGlzLndvcmtlcil7Yz1bXTtmb3IoY29uc3QgZCBvZiB0aGlzLmluZGV4LnZhbHVlcygpKWMucHVzaChkLmltcG9ydChhKSk7cmV0dXJuIFByb21pc2UuYWxsKGMpfWJyZWFrO1xyXG5jYXNlIFwidGFnXCI6dGhpcy50YWc9b2IoYyx0aGlzLnRhZyk7YnJlYWs7Y2FzZSBcImRvY1wiOnRoaXMuc3RvcmU9bWIoYyx0aGlzLnN0b3JlKX19fWZ1bmN0aW9uIHNiKGEsYyl7bGV0IGI9XCJcIjtmb3IoY29uc3QgZSBvZiBhLmVudHJpZXMoKSl7YT1lWzBdO2NvbnN0IGQ9ZVsxXTtsZXQgZj1cIlwiO2ZvcihsZXQgZz0wLGg7ZzxkLmxlbmd0aDtnKyspe2g9ZFtnXXx8W1wiXCJdO2xldCBrPVwiXCI7Zm9yKGxldCBsPTA7bDxoLmxlbmd0aDtsKyspays9KGs/XCIsXCI6XCJcIikrKGM9PT1cInN0cmluZ1wiPydcIicraFtsXSsnXCInOmhbbF0pO2s9XCJbXCIraytcIl1cIjtmKz0oZj9cIixcIjpcIlwiKStrfWY9J1tcIicrYSsnXCIsWycrZitcIl1dXCI7Yis9KGI/XCIsXCI6XCJcIikrZn1yZXR1cm4gYn07VC5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEsYyl7Y29uc3QgYj10aGlzLnJlZy5zaXplJiYodGhpcy5mYXN0dXBkYXRlP3RoaXMucmVnLmdldChhKTp0aGlzLnJlZy5oYXMoYSkpO2lmKGIpe2lmKHRoaXMuZmFzdHVwZGF0ZSlmb3IobGV0IGU9MCxkLGY7ZTxiLmxlbmd0aDtlKyspe2lmKChkPWJbZV0pJiYoZj1kLmxlbmd0aCkpaWYoZFtmLTFdPT09YSlkLnBvcCgpO2Vsc2V7Y29uc3QgZz1kLmluZGV4T2YoYSk7Zz49MCYmZC5zcGxpY2UoZywxKX19ZWxzZSB0Yih0aGlzLm1hcCxhKSx0aGlzLmRlcHRoJiZ0Yih0aGlzLmN0eCxhKTtjfHx0aGlzLnJlZy5kZWxldGUoYSl9dGhpcy5kYiYmKHRoaXMuY29tbWl0X3Rhc2sucHVzaCh7ZGVsOmF9KSx0aGlzLk0mJnViKHRoaXMpKTt0aGlzLmNhY2hlJiZ0aGlzLmNhY2hlLnJlbW92ZShhKTtyZXR1cm4gdGhpc307XHJcbmZ1bmN0aW9uIHRiKGEsYyl7bGV0IGI9MDt2YXIgZT10eXBlb2YgYz09PVwidW5kZWZpbmVkXCI7aWYoYS5jb25zdHJ1Y3Rvcj09PUFycmF5KWZvcihsZXQgZD0wLGYsZyxoO2Q8YS5sZW5ndGg7ZCsrKXtpZigoZj1hW2RdKSYmZi5sZW5ndGgpe2lmKGUpcmV0dXJuIDE7Zz1mLmluZGV4T2YoYyk7aWYoZz49MCl7aWYoZi5sZW5ndGg+MSlyZXR1cm4gZi5zcGxpY2UoZywxKSwxO2RlbGV0ZSBhW2RdO2lmKGIpcmV0dXJuIDE7aD0xfWVsc2V7aWYoaClyZXR1cm4gMTtiKyt9fX1lbHNlIGZvcihsZXQgZCBvZiBhLmVudHJpZXMoKSllPWRbMF0sdGIoZFsxXSxjKT9iKys6YS5kZWxldGUoZSk7cmV0dXJuIGJ9O2NvbnN0IHZiPXttZW1vcnk6e3Jlc29sdXRpb246MX0scGVyZm9ybWFuY2U6e3Jlc29sdXRpb246MyxmYXN0dXBkYXRlOiEwLGNvbnRleHQ6e2RlcHRoOjEscmVzb2x1dGlvbjoxfX0sbWF0Y2g6e3Rva2VuaXplOlwiZm9yd2FyZFwifSxzY29yZTp7cmVzb2x1dGlvbjo5LGNvbnRleHQ6e2RlcHRoOjIscmVzb2x1dGlvbjozfX19O1QucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhLGMsYixlKXtpZihjJiYoYXx8YT09PTApKXtpZighZSYmIWImJnRoaXMucmVnLmhhcyhhKSlyZXR1cm4gdGhpcy51cGRhdGUoYSxjKTtlPXRoaXMuZGVwdGg7Yz10aGlzLmVuY29kZXIuZW5jb2RlKGMsIWUpO2NvbnN0IGw9Yy5sZW5ndGg7aWYobCl7Y29uc3QgbT1JKCkscD1JKCksdT10aGlzLnJlc29sdXRpb247Zm9yKGxldCByPTA7cjxsO3IrKyl7bGV0IHQ9Y1t0aGlzLnJ0bD9sLTEtcjpyXTt2YXIgZD10Lmxlbmd0aDtpZihkJiYoZXx8IXBbdF0pKXt2YXIgZj10aGlzLnNjb3JlP3RoaXMuc2NvcmUoYyx0LHIsbnVsbCwwKTp3Yih1LGwsciksZz1cIlwiO3N3aXRjaCh0aGlzLnRva2VuaXplKXtjYXNlIFwidG9sZXJhbnRcIjpZKHRoaXMscCx0LGYsYSxiKTtpZihkPjIpe2ZvcihsZXQgbj0xLHEseCx2LEE7bjxkLTE7bisrKXE9dC5jaGFyQXQobikseD10LmNoYXJBdChuKzEpLHY9dC5zdWJzdHJpbmcoMCxuKSt4LEE9dC5zdWJzdHJpbmcobitcclxuMiksZz12K3ErQSxZKHRoaXMscCxnLGYsYSxiKSxnPXYrQSxZKHRoaXMscCxnLGYsYSxiKTtZKHRoaXMscCx0LnN1YnN0cmluZygwLHQubGVuZ3RoLTEpLGYsYSxiKX1icmVhaztjYXNlIFwiZnVsbFwiOmlmKGQ+Mil7Zm9yKGxldCBuPTAscTtuPGQ7bisrKWZvcihmPWQ7Zj5uO2YtLSl7Zz10LnN1YnN0cmluZyhuLGYpO3E9dGhpcy5ydGw/ZC0xLW46bjt2YXIgaD10aGlzLnNjb3JlP3RoaXMuc2NvcmUoYyx0LHIsZyxxKTp3Yih1LGwscixkLHEpO1kodGhpcyxwLGcsaCxhLGIpfWJyZWFrfWNhc2UgXCJiaWRpcmVjdGlvbmFsXCI6Y2FzZSBcInJldmVyc2VcIjppZihkPjEpe2ZvcihoPWQtMTtoPjA7aC0tKXtnPXRbdGhpcy5ydGw/ZC0xLWg6aF0rZzt2YXIgaz10aGlzLnNjb3JlP3RoaXMuc2NvcmUoYyx0LHIsZyxoKTp3Yih1LGwscixkLGgpO1kodGhpcyxwLGcsayxhLGIpfWc9XCJcIn1jYXNlIFwiZm9yd2FyZFwiOmlmKGQ+MSl7Zm9yKGg9MDtoPGQ7aCsrKWcrPXRbdGhpcy5ydGw/ZC0xLWg6aF0sWSh0aGlzLFxyXG5wLGcsZixhLGIpO2JyZWFrfWRlZmF1bHQ6aWYoWSh0aGlzLHAsdCxmLGEsYiksZSYmbD4xJiZyPGwtMSlmb3IoZD10aGlzLk4sZz10LGY9TWF0aC5taW4oZSsxLHRoaXMucnRsP3IrMTpsLXIpLGg9MTtoPGY7aCsrKXt0PWNbdGhpcy5ydGw/bC0xLXItaDpyK2hdO2s9dGhpcy5iaWRpcmVjdGlvbmFsJiZ0Pmc7Y29uc3Qgbj10aGlzLnNjb3JlP3RoaXMuc2NvcmUoYyxnLHIsdCxoLTEpOndiKGQrKGwvMj5kPzA6MSksbCxyLGYtMSxoLTEpO1kodGhpcyxtLGs/Zzp0LG4sYSxiLGs/dDpnKX19fX10aGlzLmZhc3R1cGRhdGV8fHRoaXMucmVnLmFkZChhKX19dGhpcy5kYiYmKHRoaXMuY29tbWl0X3Rhc2sucHVzaChiP3tpbnM6YX06e2RlbDphfSksdGhpcy5NJiZ1Yih0aGlzKSk7cmV0dXJuIHRoaXN9O1xyXG5mdW5jdGlvbiBZKGEsYyxiLGUsZCxmLGcpe2xldCBoLGs7aWYoIShoPWNbYl0pfHxnJiYhaFtnXSl7Zz8oYz1ofHwoY1tiXT1JKCkpLGNbZ109MSxrPWEuY3R4LChoPWsuZ2V0KGcpKT9rPWg6ay5zZXQoZyxrPWEua2V5c3RvcmU/bmV3IFIoYS5rZXlzdG9yZSk6bmV3IE1hcCkpOihrPWEubWFwLGNbYl09MSk7KGg9ay5nZXQoYikpP2s9aDprLnNldChiLGs9aD1bXSk7aWYoZilmb3IobGV0IGw9MCxtO2w8aC5sZW5ndGg7bCsrKWlmKChtPWhbbF0pJiZtLmluY2x1ZGVzKGQpKXtpZihsPD1lKXJldHVybjttLnNwbGljZShtLmluZGV4T2YoZCksMSk7YS5mYXN0dXBkYXRlJiYoYz1hLnJlZy5nZXQoZCkpJiZjLnNwbGljZShjLmluZGV4T2YobSksMSk7YnJlYWt9az1rW2VdfHwoa1tlXT1bXSk7ay5wdXNoKGQpO2lmKGsubGVuZ3RoPT09MioqMzEtMSl7Yz1uZXcgeGEoayk7aWYoYS5mYXN0dXBkYXRlKWZvcihsZXQgbCBvZiBhLnJlZy52YWx1ZXMoKSlsLmluY2x1ZGVzKGspJiYobFtsLmluZGV4T2YoayldPVxyXG5jKTtoW2VdPWs9Y31hLmZhc3R1cGRhdGUmJigoZT1hLnJlZy5nZXQoZCkpP2UucHVzaChrKTphLnJlZy5zZXQoZCxba10pKX19ZnVuY3Rpb24gd2IoYSxjLGIsZSxkKXtyZXR1cm4gYiYmYT4xP2MrKGV8fDApPD1hP2IrKGR8fDApOihhLTEpLyhjKyhlfHwwKSkqKGIrKGR8fDApKSsxfDA6MH07VC5wcm90b3R5cGUuc2VhcmNoPWZ1bmN0aW9uKGEsYyxiKXtifHwoY3x8dHlwZW9mIGEhPT1cIm9iamVjdFwiP3R5cGVvZiBjPT09XCJvYmplY3RcIiYmKGI9YyxjPTApOihiPWEsYT1cIlwiKSk7aWYoYiYmYi5jYWNoZSlyZXR1cm4gYi5jYWNoZT0hMSxhPXRoaXMuc2VhcmNoQ2FjaGUoYSxjLGIpLGIuY2FjaGU9ITAsYTtsZXQgZT1bXSxkLGYsZyxoPTAsayxsLG0scCx1O2ImJihhPWIucXVlcnl8fGEsYz1iLmxpbWl0fHxjLGg9Yi5vZmZzZXR8fDAsZj1iLmNvbnRleHQsZz1iLnN1Z2dlc3QsdT0oaz1iLnJlc29sdmUpJiZiLmVucmljaCxtPWIuYm9vc3QscD1iLnJlc29sdXRpb24sbD10aGlzLmRiJiZiLnRhZyk7dHlwZW9mIGs9PT1cInVuZGVmaW5lZFwiJiYoaz10aGlzLnJlc29sdmUpO2Y9dGhpcy5kZXB0aCYmZiE9PSExO2xldCByPXRoaXMuZW5jb2Rlci5lbmNvZGUoYSwhZik7ZD1yLmxlbmd0aDtjPWN8fChrPzEwMDowKTtpZihkPT09MSlyZXR1cm4geGIuY2FsbCh0aGlzLHJbMF0sXCJcIixjLFxyXG5oLGssdSxsKTtpZihkPT09MiYmZiYmIWcpcmV0dXJuIHhiLmNhbGwodGhpcyxyWzFdLHJbMF0sYyxoLGssdSxsKTtsZXQgdD1JKCksbj0wLHE7ZiYmKHE9clswXSxuPTEpO3B8fHA9PT0wfHwocD1xP3RoaXMuTjp0aGlzLnJlc29sdXRpb24pO2lmKHRoaXMuZGIpe2lmKHRoaXMuZGIuc2VhcmNoJiYoYj10aGlzLmRiLnNlYXJjaCh0aGlzLHIsYyxoLGcsayx1LGwpLGIhPT0hMSkpcmV0dXJuIGI7Y29uc3QgeD10aGlzO3JldHVybiBhc3luYyBmdW5jdGlvbigpe2ZvcihsZXQgdixBO248ZDtuKyspe2lmKChBPXJbbl0pJiYhdFtBXSl7dFtBXT0xO3Y9YXdhaXQgeWIoeCxBLHEsMCwwLCExLCExKTtpZih2PXpiKHYsZSxnLHApKXtlPXY7YnJlYWt9cSYmKGcmJnYmJmUubGVuZ3RofHwocT1BKSl9ZyYmcSYmbj09PWQtMSYmIWUubGVuZ3RoJiYocD14LnJlc29sdXRpb24scT1cIlwiLG49LTEsdD1JKCkpfXJldHVybiBBYihlLHAsYyxoLGcsbSxrKX0oKX1mb3IobGV0IHgsdjtuPGQ7bisrKXtpZigodj1cclxucltuXSkmJiF0W3ZdKXt0W3ZdPTE7eD15Yih0aGlzLHYscSwwLDAsITEsITEpO2lmKHg9emIoeCxlLGcscCkpe2U9eDticmVha31xJiYoZyYmeCYmZS5sZW5ndGh8fChxPXYpKX1nJiZxJiZuPT09ZC0xJiYhZS5sZW5ndGgmJihwPXRoaXMucmVzb2x1dGlvbixxPVwiXCIsbj0tMSx0PUkoKSl9cmV0dXJuIEFiKGUscCxjLGgsZyxtLGspfTtmdW5jdGlvbiBBYihhLGMsYixlLGQsZixnKXtsZXQgaD1hLmxlbmd0aCxrPWE7aWYoaD4xKWs9JGEoYSxjLGIsZSxkLGYsZyk7ZWxzZSBpZihoPT09MSlyZXR1cm4gZz9TYS5jYWxsKG51bGwsYVswXSxiLGUpOm5ldyBYKGFbMF0sdGhpcyk7cmV0dXJuIGc/azpuZXcgWChrLHRoaXMpfVxyXG5mdW5jdGlvbiB4YihhLGMsYixlLGQsZixnKXthPXliKHRoaXMsYSxjLGIsZSxkLGYsZyk7cmV0dXJuIHRoaXMuZGI/YS50aGVuKGZ1bmN0aW9uKGgpe3JldHVybiBkP2h8fFtdOm5ldyBYKGgsdGhpcyl9KTphJiZhLmxlbmd0aD9kP1NhLmNhbGwodGhpcyxhLGIsZSk6bmV3IFgoYSx0aGlzKTpkP1tdOm5ldyBYKFtdLHRoaXMpfWZ1bmN0aW9uIHpiKGEsYyxiLGUpe2xldCBkPVtdO2lmKGEmJmEubGVuZ3RoKXtpZihhLmxlbmd0aDw9ZSl7Yy5wdXNoKGEpO3JldHVybn1mb3IobGV0IGY9MCxnO2Y8ZTtmKyspaWYoZz1hW2ZdKWRbZl09ZztpZihkLmxlbmd0aCl7Yy5wdXNoKGQpO3JldHVybn19aWYoIWIpcmV0dXJuIGR9XHJcbmZ1bmN0aW9uIHliKGEsYyxiLGUsZCxmLGcsaCl7bGV0IGs7YiYmKGs9YS5iaWRpcmVjdGlvbmFsJiZjPmIpJiYoaz1iLGI9YyxjPWspO2lmKGEuZGIpcmV0dXJuIGEuZGIuZ2V0KGMsYixlLGQsZixnLGgpO2E9Yj8oYT1hLmN0eC5nZXQoYikpJiZhLmdldChjKTphLm1hcC5nZXQoYyk7cmV0dXJuIGF9O2Z1bmN0aW9uIFQoYSxjKXtpZighdGhpc3x8dGhpcy5jb25zdHJ1Y3RvciE9PVQpcmV0dXJuIG5ldyBUKGEpO2lmKGEpe3ZhciBiPU0oYSk/YTphLnByZXNldDtiJiYoYT1PYmplY3QuYXNzaWduKHt9LHZiW2JdLGEpKX1lbHNlIGE9e307Yj1hLmNvbnRleHQ7Y29uc3QgZT1iPT09ITA/e2RlcHRoOjF9OmJ8fHt9LGQ9TShhLmVuY29kZXIpP3ZhW2EuZW5jb2Rlcl06YS5lbmNvZGV8fGEuZW5jb2Rlcnx8e307dGhpcy5lbmNvZGVyPWQuZW5jb2RlP2Q6dHlwZW9mIGQ9PT1cIm9iamVjdFwiP25ldyBrYShkKTp7ZW5jb2RlOmR9O3RoaXMucmVzb2x1dGlvbj1hLnJlc29sdXRpb258fDk7dGhpcy50b2tlbml6ZT1iPShiPWEudG9rZW5pemUpJiZiIT09XCJkZWZhdWx0XCImJmIhPT1cImV4YWN0XCImJmJ8fFwic3RyaWN0XCI7dGhpcy5kZXB0aD1iPT09XCJzdHJpY3RcIiYmZS5kZXB0aHx8MDt0aGlzLmJpZGlyZWN0aW9uYWw9ZS5iaWRpcmVjdGlvbmFsIT09ITE7dGhpcy5mYXN0dXBkYXRlPSEhYS5mYXN0dXBkYXRlO1xyXG50aGlzLnNjb3JlPWEuc2NvcmV8fG51bGw7KGI9YS5rZXlzdG9yZXx8MCkmJih0aGlzLmtleXN0b3JlPWIpO3RoaXMubWFwPWI/bmV3IFIoYik6bmV3IE1hcDt0aGlzLmN0eD1iP25ldyBSKGIpOm5ldyBNYXA7dGhpcy5yZWc9Y3x8KHRoaXMuZmFzdHVwZGF0ZT9iP25ldyBSKGIpOm5ldyBNYXA6Yj9uZXcgUyhiKTpuZXcgU2V0KTt0aGlzLk49ZS5yZXNvbHV0aW9ufHwzO3RoaXMucnRsPWQucnRsfHxhLnJ0bHx8ITE7dGhpcy5jYWNoZT0oYj1hLmNhY2hlfHxudWxsKSYmbmV3IG1hKGIpO3RoaXMucmVzb2x2ZT1hLnJlc29sdmUhPT0hMTtpZihiPWEuZGIpdGhpcy5kYj10aGlzLm1vdW50KGIpO3RoaXMuTT1hLmNvbW1pdCE9PSExO3RoaXMuY29tbWl0X3Rhc2s9W107dGhpcy5jb21taXRfdGltZXI9bnVsbDt0aGlzLnByaW9yaXR5PWEucHJpb3JpdHl8fDR9dz1ULnByb3RvdHlwZTtcclxudy5tb3VudD1mdW5jdGlvbihhKXt0aGlzLmNvbW1pdF90aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLmNvbW1pdF90aW1lciksdGhpcy5jb21taXRfdGltZXI9bnVsbCk7cmV0dXJuIGEubW91bnQodGhpcyl9O3cuY29tbWl0PWZ1bmN0aW9uKCl7dGhpcy5jb21taXRfdGltZXImJihjbGVhclRpbWVvdXQodGhpcy5jb21taXRfdGltZXIpLHRoaXMuY29tbWl0X3RpbWVyPW51bGwpO3JldHVybiB0aGlzLmRiLmNvbW1pdCh0aGlzKX07dy5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5jb21taXRfdGltZXImJihjbGVhclRpbWVvdXQodGhpcy5jb21taXRfdGltZXIpLHRoaXMuY29tbWl0X3RpbWVyPW51bGwpO3JldHVybiB0aGlzLmRiLmRlc3Ryb3koKX07ZnVuY3Rpb24gdWIoYSl7YS5jb21taXRfdGltZXJ8fChhLmNvbW1pdF90aW1lcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS5jb21taXRfdGltZXI9bnVsbDthLmRiLmNvbW1pdChhKX0sMSkpfVxyXG53LmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5tYXAuY2xlYXIoKTt0aGlzLmN0eC5jbGVhcigpO3RoaXMucmVnLmNsZWFyKCk7dGhpcy5jYWNoZSYmdGhpcy5jYWNoZS5jbGVhcigpO3JldHVybiB0aGlzLmRiPyh0aGlzLmNvbW1pdF90aW1lciYmY2xlYXJUaW1lb3V0KHRoaXMuY29tbWl0X3RpbWVyKSx0aGlzLmNvbW1pdF90aW1lcj1udWxsLHRoaXMuY29tbWl0X3Rhc2s9W10sdGhpcy5kYi5jbGVhcigpKTp0aGlzfTt3LmFwcGVuZD1mdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLmFkZChhLGMsITApfTt3LmNvbnRhaW49ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZGI/dGhpcy5kYi5oYXMoYSk6dGhpcy5yZWcuaGFzKGEpfTt3LnVwZGF0ZT1mdW5jdGlvbihhLGMpe2NvbnN0IGI9dGhpcyxlPXRoaXMucmVtb3ZlKGEpO3JldHVybiBlJiZlLnRoZW4/ZS50aGVuKCgpPT5iLmFkZChhLGMpKTp0aGlzLmFkZChhLGMpfTtcclxudy5jbGVhbnVwPWZ1bmN0aW9uKCl7aWYoIXRoaXMuZmFzdHVwZGF0ZSlyZXR1cm4gdGhpczt0Yih0aGlzLm1hcCk7dGhpcy5kZXB0aCYmdGIodGhpcy5jdHgpO3JldHVybiB0aGlzfTt3LnNlYXJjaENhY2hlPWxhO3cuZXhwb3J0PWZ1bmN0aW9uKGEsYyxiPTAsZT0wKXtsZXQgZCxmO3N3aXRjaChlKXtjYXNlIDA6ZD1cInJlZ1wiO2Y9cGIodGhpcy5yZWcpO2JyZWFrO2Nhc2UgMTpkPVwiY2ZnXCI7Zj1udWxsO2JyZWFrO2Nhc2UgMjpkPVwibWFwXCI7Zj1sYih0aGlzLm1hcCx0aGlzLnJlZy5zaXplKTticmVhaztjYXNlIDM6ZD1cImN0eFwiO2Y9bmIodGhpcy5jdHgsdGhpcy5yZWcuc2l6ZSk7YnJlYWs7ZGVmYXVsdDpyZXR1cm59cmV0dXJuIHJiLmNhbGwodGhpcyxhLGMsZCxmLGIsZSl9O1xyXG53LmltcG9ydD1mdW5jdGlvbihhLGMpe2lmKGMpc3dpdGNoKHR5cGVvZiBjPT09XCJzdHJpbmdcIiYmKGM9SlNPTi5wYXJzZShjKSksYT1hLnNwbGl0KFwiLlwiKSxhW2EubGVuZ3RoLTFdPT09XCJqc29uXCImJmEucG9wKCksYS5sZW5ndGg9PT0zJiZhLnNoaWZ0KCksYT1hLmxlbmd0aD4xP2FbMV06YVswXSxhKXtjYXNlIFwicmVnXCI6dGhpcy5mYXN0dXBkYXRlPSExO3RoaXMucmVnPXFiKGMsdGhpcy5yZWcpO2JyZWFrO2Nhc2UgXCJtYXBcIjp0aGlzLm1hcD1tYihjLHRoaXMubWFwKTticmVhaztjYXNlIFwiY3R4XCI6dGhpcy5jdHg9b2IoYyx0aGlzLmN0eCl9fTtcclxudy5zZXJpYWxpemU9ZnVuY3Rpb24oYT0hMCl7bGV0IGM9XCJcIixiPVwiXCIsZT1cIlwiO2lmKHRoaXMucmVnLnNpemUpe2xldCBmO2Zvcih2YXIgZCBvZiB0aGlzLnJlZy5rZXlzKCkpZnx8KGY9dHlwZW9mIGQpLGMrPShjP1wiLFwiOlwiXCIpKyhmPT09XCJzdHJpbmdcIj8nXCInK2QrJ1wiJzpkKTtjPVwiaW5kZXgucmVnPW5ldyBTZXQoW1wiK2MrXCJdKTtcIjtiPXNiKHRoaXMubWFwLGYpO2I9XCJpbmRleC5tYXA9bmV3IE1hcChbXCIrYitcIl0pO1wiO2Zvcihjb25zdCBnIG9mIHRoaXMuY3R4LmVudHJpZXMoKSl7ZD1nWzBdO2xldCBoPXNiKGdbMV0sZik7aD1cIm5ldyBNYXAoW1wiK2grXCJdKVwiO2g9J1tcIicrZCsnXCIsJytoK1wiXVwiO2UrPShlP1wiLFwiOlwiXCIpK2h9ZT1cImluZGV4LmN0eD1uZXcgTWFwKFtcIitlK1wiXSk7XCJ9cmV0dXJuIGE/XCJmdW5jdGlvbiBpbmplY3QoaW5kZXgpe1wiK2MrYitlK1wifVwiOmMrYitlfTtGYShULnByb3RvdHlwZSk7Y29uc3QgQmI9dHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCImJih3aW5kb3cuaW5kZXhlZERCfHx3aW5kb3cubW96SW5kZXhlZERCfHx3aW5kb3cud2Via2l0SW5kZXhlZERCfHx3aW5kb3cubXNJbmRleGVkREIpLENiPVtcIm1hcFwiLFwiY3R4XCIsXCJ0YWdcIixcInJlZ1wiLFwiY2ZnXCJdLERiPUkoKTtcclxuZnVuY3Rpb24gRWIoYSxjPXt9KXtpZighdGhpc3x8dGhpcy5jb25zdHJ1Y3RvciE9PUViKXJldHVybiBuZXcgRWIoYSxjKTt0eXBlb2YgYT09PVwib2JqZWN0XCImJihjPWEsYT1hLm5hbWUpO2F8fGNvbnNvbGUuaW5mbyhcIkRlZmF1bHQgc3RvcmFnZSBzcGFjZSB3YXMgdXNlZCwgYmVjYXVzZSBhIG5hbWUgd2FzIG5vdCBwYXNzZWQuXCIpO3RoaXMuaWQ9XCJmbGV4c2VhcmNoXCIrKGE/XCI6XCIrYS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16MC05X1xcLV0vZyxcIlwiKTpcIlwiKTt0aGlzLmZpZWxkPWMuZmllbGQ/Yy5maWVsZC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16MC05X1xcLV0vZyxcIlwiKTpcIlwiO3RoaXMudHlwZT1jLnR5cGU7dGhpcy5mYXN0dXBkYXRlPXRoaXMuc3VwcG9ydF90YWdfc2VhcmNoPSExO3RoaXMuZGI9bnVsbDt0aGlzLmg9e319dz1FYi5wcm90b3R5cGU7dy5tb3VudD1mdW5jdGlvbihhKXtpZihhLmluZGV4KXJldHVybiBhLm1vdW50KHRoaXMpO2EuZGI9dGhpcztyZXR1cm4gdGhpcy5vcGVuKCl9O1xyXG53Lm9wZW49ZnVuY3Rpb24oKXtpZih0aGlzLmRiKXJldHVybiB0aGlzLmRiO2xldCBhPXRoaXM7bmF2aWdhdG9yLnN0b3JhZ2UmJm5hdmlnYXRvci5zdG9yYWdlLnBlcnNpc3QoKTtEYlthLmlkXXx8KERiW2EuaWRdPVtdKTtEYlthLmlkXS5wdXNoKGEuZmllbGQpO2NvbnN0IGM9QmIub3BlbihhLmlkLDEpO2Mub251cGdyYWRlbmVlZGVkPWZ1bmN0aW9uKCl7Y29uc3QgYj1hLmRiPXRoaXMucmVzdWx0O2ZvcihsZXQgZT0wLGQ7ZTxDYi5sZW5ndGg7ZSsrKXtkPUNiW2VdO2ZvcihsZXQgZj0wLGc7ZjxEYlthLmlkXS5sZW5ndGg7ZisrKWc9RGJbYS5pZF1bZl0sYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGQrKGQhPT1cInJlZ1wiP2c/XCI6XCIrZzpcIlwiOlwiXCIpKXx8Yi5jcmVhdGVPYmplY3RTdG9yZShkKyhkIT09XCJyZWdcIj9nP1wiOlwiK2c6XCJcIjpcIlwiKSl9fTtyZXR1cm4gYS5kYj1aKGMsZnVuY3Rpb24oYil7YS5kYj1iO2EuZGIub252ZXJzaW9uY2hhbmdlPWZ1bmN0aW9uKCl7YS5jbG9zZSgpfX0pfTtcclxudy5jbG9zZT1mdW5jdGlvbigpe3RoaXMuZGImJnRoaXMuZGIuY2xvc2UoKTt0aGlzLmRiPW51bGx9O3cuZGVzdHJveT1mdW5jdGlvbigpe2NvbnN0IGE9QmIuZGVsZXRlRGF0YWJhc2UodGhpcy5pZCk7cmV0dXJuIFooYSl9O3cuY2xlYXI9ZnVuY3Rpb24oKXtjb25zdCBhPVtdO2ZvcihsZXQgYj0wLGU7YjxDYi5sZW5ndGg7YisrKXtlPUNiW2JdO2ZvcihsZXQgZD0wLGY7ZDxEYlt0aGlzLmlkXS5sZW5ndGg7ZCsrKWY9RGJbdGhpcy5pZF1bZF0sYS5wdXNoKGUrKGUhPT1cInJlZ1wiP2Y/XCI6XCIrZjpcIlwiOlwiXCIpKX1jb25zdCBjPXRoaXMuZGIudHJhbnNhY3Rpb24oYSxcInJlYWR3cml0ZVwiKTtmb3IobGV0IGI9MDtiPGEubGVuZ3RoO2IrKyljLm9iamVjdFN0b3JlKGFbYl0pLmNsZWFyKCk7cmV0dXJuIFooYyl9O1xyXG53LmdldD1mdW5jdGlvbihhLGMsYj0wLGU9MCxkPSEwLGY9ITEpe2E9dGhpcy5kYi50cmFuc2FjdGlvbigoYz9cImN0eFwiOlwibWFwXCIpKyh0aGlzLmZpZWxkP1wiOlwiK3RoaXMuZmllbGQ6XCJcIiksXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZSgoYz9cImN0eFwiOlwibWFwXCIpKyh0aGlzLmZpZWxkP1wiOlwiK3RoaXMuZmllbGQ6XCJcIikpLmdldChjP2MrXCI6XCIrYTphKTtjb25zdCBnPXRoaXM7cmV0dXJuIFooYSkudGhlbihmdW5jdGlvbihoKXtsZXQgaz1bXTtpZighaHx8IWgubGVuZ3RoKXJldHVybiBrO2lmKGQpe2lmKCFiJiYhZSYmaC5sZW5ndGg9PT0xKXJldHVybiBoWzBdO2ZvcihsZXQgbD0wLG07bDxoLmxlbmd0aDtsKyspaWYoKG09aFtsXSkmJm0ubGVuZ3RoKXtpZihlPj1tLmxlbmd0aCl7ZS09bS5sZW5ndGg7Y29udGludWV9Y29uc3QgcD1iP2UrTWF0aC5taW4obS5sZW5ndGgtZSxiKTptLmxlbmd0aDtmb3IobGV0IHU9ZTt1PHA7dSsrKWsucHVzaChtW3VdKTtlPTA7aWYoay5sZW5ndGg9PT1iKWJyZWFrfXJldHVybiBmP1xyXG5nLmVucmljaChrKTprfXJldHVybiBofSl9O3cudGFnPWZ1bmN0aW9uKGEsYz0wLGI9MCxlPSExKXthPXRoaXMuZGIudHJhbnNhY3Rpb24oXCJ0YWdcIisodGhpcy5maWVsZD9cIjpcIit0aGlzLmZpZWxkOlwiXCIpLFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJ0YWdcIisodGhpcy5maWVsZD9cIjpcIit0aGlzLmZpZWxkOlwiXCIpKS5nZXQoYSk7Y29uc3QgZD10aGlzO3JldHVybiBaKGEpLnRoZW4oZnVuY3Rpb24oZil7aWYoIWZ8fCFmLmxlbmd0aHx8Yj49Zi5sZW5ndGgpcmV0dXJuW107aWYoIWMmJiFiKXJldHVybiBmO2Y9Zi5zbGljZShiLGIrYyk7cmV0dXJuIGU/ZC5lbnJpY2goZik6Zn0pfTtcclxudy5lbnJpY2g9ZnVuY3Rpb24oYSl7dHlwZW9mIGEhPT1cIm9iamVjdFwiJiYoYT1bYV0pO2NvbnN0IGM9dGhpcy5kYi50cmFuc2FjdGlvbihcInJlZ1wiLFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJyZWdcIiksYj1bXTtmb3IobGV0IGU9MDtlPGEubGVuZ3RoO2UrKyliW2VdPVooYy5nZXQoYVtlXSkpO3JldHVybiBQcm9taXNlLmFsbChiKS50aGVuKGZ1bmN0aW9uKGUpe2ZvcihsZXQgZD0wO2Q8ZS5sZW5ndGg7ZCsrKWVbZF09e2lkOmFbZF0sZG9jOmVbZF0/SlNPTi5wYXJzZShlW2RdKTpudWxsfTtyZXR1cm4gZX0pfTt3Lmhhcz1mdW5jdGlvbihhKXthPXRoaXMuZGIudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwicmVnXCIpLmdldEtleShhKTtyZXR1cm4gWihhKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiEhY30pfTt3LnNlYXJjaD1udWxsO3cuaW5mbz1mdW5jdGlvbigpe307XHJcbncudHJhbnNhY3Rpb249ZnVuY3Rpb24oYSxjLGIpe2ErPWEhPT1cInJlZ1wiP3RoaXMuZmllbGQ/XCI6XCIrdGhpcy5maWVsZDpcIlwiOlwiXCI7bGV0IGU9dGhpcy5oW2ErXCI6XCIrY107aWYoZSlyZXR1cm4gYi5jYWxsKHRoaXMsZSk7bGV0IGQ9dGhpcy5kYi50cmFuc2FjdGlvbihhLGMpO3RoaXMuaFthK1wiOlwiK2NdPWU9ZC5vYmplY3RTdG9yZShhKTtjb25zdCBmPWIuY2FsbCh0aGlzLGUpO3RoaXMuaFthK1wiOlwiK2NdPW51bGw7cmV0dXJuIFooZCkuZmluYWxseShmdW5jdGlvbigpe2Q9ZT1udWxsO3JldHVybiBmfSl9O1xyXG53LmNvbW1pdD1hc3luYyBmdW5jdGlvbihhKXtsZXQgYz1hLmNvbW1pdF90YXNrLGI9W107YS5jb21taXRfdGFzaz1bXTtmb3IobGV0IGU9MCxkO2U8Yy5sZW5ndGg7ZSsrKWQ9Y1tlXSxkLmRlbCYmYi5wdXNoKGQuZGVsKTtiLmxlbmd0aCYmYXdhaXQgdGhpcy5yZW1vdmUoYik7YS5yZWcuc2l6ZSYmKGF3YWl0IHRoaXMudHJhbnNhY3Rpb24oXCJtYXBcIixcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKGUpe2Zvcihjb25zdCBkIG9mIGEubWFwKXtjb25zdCBmPWRbMF0sZz1kWzFdO2cubGVuZ3RoJiYoZS5nZXQoZikub25zdWNjZXNzPWZ1bmN0aW9uKCl7bGV0IGg9dGhpcy5yZXN1bHQ7dmFyIGs7aWYoaCYmaC5sZW5ndGgpe2NvbnN0IGw9TWF0aC5tYXgoaC5sZW5ndGgsZy5sZW5ndGgpO2ZvcihsZXQgbT0wLHAsdTttPGw7bSsrKWlmKCh1PWdbbV0pJiZ1Lmxlbmd0aCl7aWYoKHA9aFttXSkmJnAubGVuZ3RoKWZvcihrPTA7azx1Lmxlbmd0aDtrKyspcC5wdXNoKHVba10pO2Vsc2UgaFttXT11O2s9XHJcbjF9fWVsc2UgaD1nLGs9MTtrJiZlLnB1dChoLGYpfSl9fSksYXdhaXQgdGhpcy50cmFuc2FjdGlvbihcImN0eFwiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5jdHgpe2NvbnN0IGY9ZFswXSxnPWRbMV07Zm9yKGNvbnN0IGggb2YgZyl7Y29uc3Qgaz1oWzBdLGw9aFsxXTtsLmxlbmd0aCYmKGUuZ2V0KGYrXCI6XCIraykub25zdWNjZXNzPWZ1bmN0aW9uKCl7bGV0IG09dGhpcy5yZXN1bHQ7dmFyIHA7aWYobSYmbS5sZW5ndGgpe2NvbnN0IHU9TWF0aC5tYXgobS5sZW5ndGgsbC5sZW5ndGgpO2ZvcihsZXQgcj0wLHQsbjtyPHU7cisrKWlmKChuPWxbcl0pJiZuLmxlbmd0aCl7aWYoKHQ9bVtyXSkmJnQubGVuZ3RoKWZvcihwPTA7cDxuLmxlbmd0aDtwKyspdC5wdXNoKG5bcF0pO2Vsc2UgbVtyXT1uO3A9MX19ZWxzZSBtPWwscD0xO3AmJmUucHV0KG0sZitcIjpcIitrKX0pfX19KSxhLnN0b3JlP2F3YWl0IHRoaXMudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWR3cml0ZVwiLFxyXG5mdW5jdGlvbihlKXtmb3IoY29uc3QgZCBvZiBhLnN0b3JlKXtjb25zdCBmPWRbMF0sZz1kWzFdO2UucHV0KHR5cGVvZiBnPT09XCJvYmplY3RcIj9KU09OLnN0cmluZ2lmeShnKToxLGYpfX0pOmEuYnlwYXNzfHxhd2FpdCB0aGlzLnRyYW5zYWN0aW9uKFwicmVnXCIsXCJyZWFkd3JpdGVcIixmdW5jdGlvbihlKXtmb3IoY29uc3QgZCBvZiBhLnJlZy5rZXlzKCkpZS5wdXQoMSxkKX0pLGEudGFnJiZhd2FpdCB0aGlzLnRyYW5zYWN0aW9uKFwidGFnXCIsXCJyZWFkd3JpdGVcIixmdW5jdGlvbihlKXtmb3IoY29uc3QgZCBvZiBhLnRhZyl7Y29uc3QgZj1kWzBdLGc9ZFsxXTtnLmxlbmd0aCYmKGUuZ2V0KGYpLm9uc3VjY2Vzcz1mdW5jdGlvbigpe2xldCBoPXRoaXMucmVzdWx0O2g9aCYmaC5sZW5ndGg/aC5jb25jYXQoZyk6ZztlLnB1dChoLGYpfSl9fSksYS5tYXAuY2xlYXIoKSxhLmN0eC5jbGVhcigpLGEudGFnJiZhLnRhZy5jbGVhcigpLGEuc3RvcmUmJmEuc3RvcmUuY2xlYXIoKSxhLmRvY3VtZW50fHxcclxuYS5yZWcuY2xlYXIoKSl9O2Z1bmN0aW9uIEZiKGEsYyxiKXtjb25zdCBlPWEudmFsdWU7bGV0IGQsZj0wO2ZvcihsZXQgZz0wLGg7ZzxlLmxlbmd0aDtnKyspe2lmKGg9Yj9lOmVbZ10pe2ZvcihsZXQgaz0wLGwsbTtrPGMubGVuZ3RoO2srKylpZihtPWNba10sbD1oLmluZGV4T2YobSksbD49MClpZihkPTEsaC5sZW5ndGg+MSloLnNwbGljZShsLDEpO2Vsc2V7ZVtnXT1bXTticmVha31mKz1oLmxlbmd0aH1pZihiKWJyZWFrfWY/ZCYmYS51cGRhdGUoZSk6YS5kZWxldGUoKTthLmNvbnRpbnVlKCl9XHJcbncucmVtb3ZlPWZ1bmN0aW9uKGEpe3R5cGVvZiBhIT09XCJvYmplY3RcIiYmKGE9W2FdKTtyZXR1cm4gUHJvbWlzZS5hbGwoW3RoaXMudHJhbnNhY3Rpb24oXCJtYXBcIixcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKGMpe2Mub3BlbkN1cnNvcigpLm9uc3VjY2Vzcz1mdW5jdGlvbigpe2NvbnN0IGI9dGhpcy5yZXN1bHQ7YiYmRmIoYixhKX19KSx0aGlzLnRyYW5zYWN0aW9uKFwiY3R4XCIsXCJyZWFkd3JpdGVcIixmdW5jdGlvbihjKXtjLm9wZW5DdXJzb3IoKS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXtjb25zdCBiPXRoaXMucmVzdWx0O2ImJkZiKGIsYSl9fSksdGhpcy50cmFuc2FjdGlvbihcInRhZ1wiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oYyl7Yy5vcGVuQ3Vyc29yKCkub25zdWNjZXNzPWZ1bmN0aW9uKCl7Y29uc3QgYj10aGlzLnJlc3VsdDtiJiZGYihiLGEsITApfX0pLHRoaXMudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKGMpe2ZvcihsZXQgYj0wO2I8YS5sZW5ndGg7YisrKWMuZGVsZXRlKGFbYl0pfSldKX07XHJcbmZ1bmN0aW9uIFooYSxjKXtyZXR1cm4gbmV3IFByb21pc2UoKGIsZSk9PnthLm9uc3VjY2Vzcz1hLm9uY29tcGxldGU9ZnVuY3Rpb24oKXtjJiZjKHRoaXMucmVzdWx0KTtjPW51bGw7Yih0aGlzLnJlc3VsdCl9O2Eub25lcnJvcj1hLm9uYmxvY2tlZD1lO2E9bnVsbH0pfTtleHBvcnQgZGVmYXVsdCB7SW5kZXg6VCxDaGFyc2V0OnZhLEVuY29kZXI6a2EsRG9jdW1lbnQ6TmEsV29ya2VyOkxhLFJlc29sdmVyOlgsSW5kZXhlZERCOkViLExhbmd1YWdlOnt9fTtcclxuZXhwb3J0IGNvbnN0IEluZGV4PVQ7ZXhwb3J0IGNvbnN0IENoYXJzZXQ9dmE7ZXhwb3J0IGNvbnN0IEVuY29kZXI9a2E7ZXhwb3J0IGNvbnN0IERvY3VtZW50PU5hO2V4cG9ydCBjb25zdCBXb3JrZXI9TGE7ZXhwb3J0IGNvbnN0IFJlc29sdmVyPVg7ZXhwb3J0IGNvbnN0IEluZGV4ZWREQj1FYjtleHBvcnQgY29uc3QgTGFuZ3VhZ2U9e307IiwgIi8qIVxyXG4gKiBGbGV4U2VhcmNoIGZvciBCb290c3RyYXAgYmFzZWQgVGh1bGl0ZSBzaXRlc1xyXG4gKiBDb3B5cmlnaHQgMjAyMS0yMDI0IFRodWxpdGVcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9mcmpvL2h1Z28tdGhlbWUtemVuL2Jsb2IvbWFpbi9hc3NldHMvanMvc2VhcmNoLmpzXHJcbiAqL1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYsIGd1YXJkLWZvci1pbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEEgSmF2YVNjcmlwdCBmaWxlIGZvciBmbGV4c2VhcmNoLlxyXG4gKi9cclxuXHJcbi8vIGltcG9ydCAqIGFzIEZsZXhTZWFyY2ggZnJvbSAnZmxleHNlYXJjaCc7XHJcbmltcG9ydCBJbmRleCBmcm9tICdmbGV4c2VhcmNoJztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgLy8gY29uc3QgaW5kZXggPSBuZXcgRmxleFNlYXJjaC5Eb2N1bWVudCh7XHJcbiAgY29uc3QgaW5kZXggPSBuZXcgSW5kZXguRG9jdW1lbnQoe1xyXG4gICAgdG9rZW5pemU6ICdmb3J3YXJkJyxcclxuICAgIGRvY3VtZW50OiB7XHJcbiAgICAgIGlkOiAnaWQnLFxyXG4gICAgICBpbmRleDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiAndGl0bGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWVsZDogJ3RhZ3MnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWVsZDogJ2NvbnRlbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWVsZDogICdkYXRlJyxcclxuICAgICAgICAgIHRva2VuaXplOiAnc3RyaWN0JyxcclxuICAgICAgICAgIGVuY29kZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHN0b3JlOiBbJ3RpdGxlJywnc3VtbWFyeScsJ2RhdGUnLCdwZXJtYWxpbmsnXVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzaG93UmVzdWx0cyhpdGVtcykge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZScpLmNvbnRlbnQ7XHJcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1yZXN1bHRzJyk7XHJcbiAgICByZXN1bHRzLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgY29uc3QgaXRlbXNMZW5ndGggPSBPYmplY3Qua2V5cyhpdGVtcykubGVuZ3RoO1xyXG5cclxuICAgIC8vIFNob3cvaGlkZSBcIk5vIHJlY2VudCBzZWFyY2hlc1wiIGFuZCBcIk5vIHNlYXJjaCByZXN1bHRzXCIgbWVzc2FnZXNcclxuICAgIGlmICgoaXRlbXNMZW5ndGggPT09IDApICYmIChxdWVyeS52YWx1ZSA9PT0gJycpKSB7XHJcbiAgICAgIC8vIEhpZGUgXCJObyBzZWFyY2ggcmVzdWx0c1wiIG1lc3NhZ2VcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1uby1yZXN1bHRzJykuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgIC8vIFNob3cgXCJObyByZWNlbnQgc2VhcmNoZXNcIiBtZXNzYWdlXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbm8tcmVjZW50JykuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICB9IGVsc2UgaWYgKChpdGVtc0xlbmd0aCA9PT0gMCkgJiYgKHF1ZXJ5LnZhbHVlICE9PSAnJykpIHtcclxuICAgICAgLy8gSGlkZSBcIk5vIHJlY2VudCBzZWFyY2hlc1wiIG1lc3NhZ2VcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1uby1yZWNlbnQnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgLy8gU2hvdyBcIk5vIHNlYXJjaCByZXN1bHRzXCIgbWVzc2FnZVxyXG4gICAgICBjb25zdCBxdWVyeU5vUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVyeS1uby1yZXN1bHRzJyk7XHJcbiAgICAgIHF1ZXJ5Tm9SZXN1bHRzLmlubmVyVGV4dCA9IHF1ZXJ5LnZhbHVlO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlc3VsdHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEhpZGUgYm90aCBcIk5vIHJlY2VudCBzZWFyY2hlc1wiIGFuZCBcIk5vIHNlYXJjaCByZXN1bHRzXCIgbWVzc2FnZXNcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1uby1yZWNlbnQnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1uby1yZXN1bHRzJykuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBpZCBpbiBpdGVtcykge1xyXG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbaWRdO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IGEgPSByZXN1bHQucXVlcnlTZWxlY3RvcignYScpO1xyXG4gICAgICBjb25zdCB0aW1lID0gcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJ3RpbWUnKTtcclxuICAgICAgY29uc3QgY29udGVudCA9IHJlc3VsdC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgICBhLmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgIGEuaHJlZiA9IGl0ZW0ucGVybWFsaW5rO1xyXG4gICAgICB0aW1lLmlubmVyVGV4dCA9IGl0ZW0uZGF0ZTtcclxuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBpdGVtLnN1bW1hcnk7XHJcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0cy5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkb1NlYXJjaCgpIHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC10ZXh0JykudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgbGltaXQgPSA5OTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBpbmRleC5zZWFyY2goe1xyXG4gICAgICBxdWVyeTogcXVlcnksXHJcbiAgICAgIGVucmljaDogdHJ1ZSxcclxuICAgICAgbGltaXQ6IGxpbWl0LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpdGVtcyA9IHt9O1xyXG5cclxuICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIHJlc3VsdC5yZXN1bHQuZm9yRWFjaChmdW5jdGlvbiAocikge1xyXG4gICAgICAgIGl0ZW1zW3IuaWRdID0gci5kb2M7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2hvd1Jlc3VsdHMoaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZW5hYmxlVUkoKSB7XHJcbiAgICBjb25zdCBzZWFyY2hmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtJyk7XHJcbiAgICBzZWFyY2hmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZG9TZWFyY2goKTtcclxuICAgIH0pO1xyXG4gICAgc2VhcmNoZm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZG9TZWFyY2goKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1sb2FkaW5nJykuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXRleHQnKS5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYnVpbGRJbmRleCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbG9hZGluZycpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgZmV0Y2goXCIvc2VhcmNoLWluZGV4Lmpzb25cIilcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgIGluZGV4LmFkZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBidWlsZEluZGV4KCk7XHJcbiAgZW5hYmxlVUkoKTtcclxufSkoKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFPLE9BQUssSUFBRSxNQUFJLE1BQUksSUFBRSxNQUFLLEdBQUc7QUFBQSxRQUFDLFNBQU8sR0FBRTtBQUFDLGVBQUssUUFBTTtBQUFBLFFBQUs7QUFBQSxNQUFDLE1BQU0sTUFBSyxRQUFNLEdBQUUsSUFBRSxNQUFJLFNBQUksTUFBTSxNQUFNLENBQUMsRUFBRSxTQUMzZjtBQUFFLFdBQUssVUFBUSxFQUFFLEVBQUUsU0FBUSxDQUFDO0FBQUEsSUFBQyxPQUFLO0FBQUMsVUFBRztBQUFDLGFBQUssUUFBTSxFQUFFLEtBQUssT0FBTSxFQUFFO0FBQUEsTUFBQyxTQUFPLEdBQUU7QUFBQyxhQUFLLFFBQU07QUFBQSxNQUFLO0FBQUMsV0FBSyxVQUFRLEVBQUUsRUFBRSxTQUFRLEVBQUUsS0FBSyxTQUFRLElBQUUsQ0FBQztBQUFBLElBQUM7QUFBQyxTQUFLLFVBQVEsRUFBRSxFQUFFLFNBQVEsTUFBSyxLQUFLLE9BQU87QUFBRSxTQUFLLFdBQVMsRUFBRSxFQUFFLFVBQVMsTUFBSyxLQUFLLFFBQVE7QUFBRSxRQUFFLEVBQUU7QUFBTyxTQUFLLFNBQU8sT0FBTyxNQUFJLGFBQVcsSUFBRSxFQUFFLEtBQUcsSUFBSSxJQUFJLENBQUMsR0FBRSxNQUFLLEtBQUssTUFBTTtBQUFFLFNBQUssU0FBTyxFQUFFLEVBQUUsUUFBTyxNQUFHLEtBQUssTUFBTTtBQUFFLFNBQUssVUFBUSxHQUFHLElBQUUsRUFBRSxZQUFVLElBQUksSUFBSSxDQUFDLEdBQUUsTUFBSyxLQUFLLE9BQU87QUFBRSxTQUFLLFNBQU8sR0FBRyxJQUFFLEVBQUUsV0FBUyxJQUFJLElBQUksQ0FBQyxHQUFFLE1BQUssS0FBSyxNQUFNO0FBQUUsU0FBSyxVQUFRO0FBQUEsT0FBRyxJQUFFLEVBQUUsWUFBVSxJQUFJLElBQUksQ0FBQztBQUFBLE1BQ3pmO0FBQUEsTUFBSyxLQUFLO0FBQUEsSUFBTztBQUFFLFNBQUssV0FBUyxFQUFFLEVBQUUsVUFBUyxNQUFLLEtBQUssUUFBUTtBQUFFLFNBQUssWUFBVSxFQUFFLEVBQUUsV0FBVSxHQUFFLEtBQUssU0FBUztBQUFFLFNBQUssWUFBVSxFQUFFLEVBQUUsV0FBVSxNQUFLLEtBQUssU0FBUztBQUFFLFNBQUssTUFBSSxFQUFFLEVBQUUsS0FBSSxPQUFHLEtBQUssR0FBRztBQUFFLFFBQUcsS0FBSyxRQUFNLElBQUUsRUFBRSxFQUFFLE9BQU0sTUFBRyxLQUFLLEtBQUssRUFBRSxNQUFLLElBQUUsTUFBSyxLQUFLLElBQUUsT0FBTyxNQUFJLFdBQVMsSUFBRSxLQUFJLEtBQUssSUFBRSxvQkFBSSxPQUFJLEtBQUssSUFBRSxvQkFBSSxPQUFJLEtBQUssSUFBRSxLQUFLLElBQUU7QUFBSSxTQUFLLElBQUU7QUFBRyxTQUFLLElBQUU7QUFBSyxTQUFLLElBQUU7QUFBRyxTQUFLLElBQUU7QUFBSyxRQUFHLEtBQUssUUFBUSxZQUFVLEtBQUssS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFLLE1BQUksS0FBSyxJQUFFLE1BQUksTUFBSTtBQUFFLFFBQUcsS0FBSyxRQUFRLFlBQVUsS0FBSyxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQUssTUFDdmYsS0FBSyxJQUFFLE1BQUksTUFBSTtBQUFFLFdBQU87QUFBQSxFQUFJO0FBQUUsSUFBRSxhQUFXLFNBQVMsR0FBRSxHQUFFO0FBQUMsU0FBSyxZQUFVLEtBQUssVUFBUSxvQkFBSTtBQUFLLFNBQUssUUFBUSxJQUFJLEdBQUUsQ0FBQztBQUFFLFNBQUssTUFBSSxLQUFLLElBQUUsTUFBSSxNQUFJO0FBQUUsU0FBSyxJQUFFO0FBQUssU0FBSyxTQUFPLEVBQUUsSUFBSTtBQUFFLFdBQU87QUFBQSxFQUFJO0FBQUUsSUFBRSxZQUFVLFNBQVMsR0FBRTtBQUFDLFdBQU8sTUFBSSxhQUFXLEtBQUssU0FBTyxLQUFHLEtBQUssV0FBUyxLQUFLLFNBQU8sb0JBQUksUUFBSyxLQUFLLE9BQU8sSUFBSSxDQUFDO0FBQUcsU0FBSyxTQUFPLEVBQUUsSUFBSTtBQUFFLFdBQU87QUFBQSxFQUFJO0FBQy9VLElBQUUsWUFBVSxTQUFTLEdBQUUsR0FBRTtBQUFDLFFBQUcsT0FBTyxNQUFJLFNBQVMsUUFBTyxLQUFLLFlBQVksR0FBRSxDQUFDO0FBQUUsUUFBRyxFQUFFLFNBQU8sRUFBRSxRQUFPLEtBQUssV0FBVyxHQUFFLENBQUM7QUFBRSxTQUFLLFdBQVMsS0FBSyxTQUFPLG9CQUFJO0FBQUssU0FBSyxPQUFPLElBQUksR0FBRSxDQUFDO0FBQUUsU0FBSyxTQUFPLEVBQUUsSUFBSTtBQUFFLFdBQU87QUFBQSxFQUFJO0FBQUUsSUFBRSxhQUFXLFNBQVMsR0FBRSxHQUFFO0FBQUMsUUFBRyxPQUFPLE1BQUksU0FBUyxRQUFPLEtBQUssWUFBWSxHQUFFLENBQUM7QUFBRSxRQUFHLEVBQUUsU0FBTyxNQUFJLEtBQUssVUFBUSxLQUFLLFFBQVEsUUFBTyxLQUFLLFVBQVUsR0FBRSxDQUFDO0FBQUUsU0FBSyxZQUFVLEtBQUssVUFBUSxvQkFBSTtBQUFLLFNBQUssUUFBUSxJQUFJLEdBQUUsQ0FBQztBQUFFLFNBQUssTUFBSSxLQUFLLElBQUUsTUFBSSxNQUFJO0FBQUUsU0FBSyxJQUFFO0FBQUssU0FBSyxTQUFPLEVBQUUsSUFBSTtBQUFFLFdBQU87QUFBQSxFQUFJO0FBQ3JlLElBQUUsY0FBWSxTQUFTLEdBQUUsR0FBRTtBQUFDLFFBQUcsT0FBTyxNQUFJLFNBQVMsUUFBTyxLQUFLLFdBQVcsR0FBRSxDQUFDO0FBQUUsU0FBSyxhQUFXLEtBQUssV0FBUyxDQUFDO0FBQUcsU0FBSyxTQUFTLEtBQUssR0FBRSxDQUFDO0FBQUUsU0FBSyxTQUFPLEVBQUUsSUFBSTtBQUFFLFdBQU87QUFBQSxFQUFJO0FBQ3hLLElBQUUsU0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFFBQUcsS0FBSyxTQUFPLEVBQUUsVUFBUSxLQUFLLEVBQUUsS0FBRyxLQUFLLEdBQUU7QUFBQyxVQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxRQUFPLEtBQUssRUFBRSxJQUFJLENBQUM7QUFBQSxJQUFDLE1BQU0sTUFBSyxJQUFFLFdBQVcsR0FBRSxJQUFHLElBQUk7QUFBRSxTQUFLLGNBQVksT0FBTyxLQUFLLGNBQVksYUFBVyxJQUFFLEtBQUssVUFBVSxDQUFDLElBQUUsSUFBRSxLQUFHLEVBQUUsVUFBVSxNQUFNLEVBQUUsUUFBUSxJQUFHLEVBQUUsRUFBRSxZQUFZLElBQUUsRUFBRSxZQUFZO0FBQUcsU0FBSyxZQUFVLElBQUUsS0FBSyxRQUFRLENBQUM7QUFBRyxTQUFLLFdBQVMsRUFBRSxTQUFPLE1BQUksSUFBRSxFQUFFLFFBQVEsSUFBRyxPQUFPLEVBQUUsUUFBUSxJQUFHLE9BQU8sRUFBRSxRQUFRLElBQUcsS0FBSztBQUFHLFVBQU0sSUFBRSxFQUFFLEtBQUssVUFBUSxLQUFLLFVBQVEsS0FBSyxVQUFRLEtBQUssV0FBUyxLQUFLLFdBQVMsS0FBSztBQUFVLFFBQUksSUFDcmYsQ0FBQyxHQUFFLElBQUUsRUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEtBQUssU0FBTyxLQUFLLFVBQVEsS0FBRyxFQUFFLE1BQU0sS0FBSyxLQUFLLElBQUUsQ0FBQyxDQUFDO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksTUFBSSxJQUFFLElBQUUsRUFBRSxDQUFDLE1BQUksRUFBRSxFQUFFLFNBQU8sS0FBSyxhQUFXLEVBQUUsU0FBTyxLQUFLLFlBQVc7QUFBQyxVQUFHLEdBQUU7QUFBQyxZQUFHLEVBQUUsQ0FBQyxFQUFFO0FBQVMsVUFBRSxDQUFDLElBQUU7QUFBQSxNQUFDLE9BQUs7QUFBQyxZQUFHLE1BQUksRUFBRTtBQUFTLFlBQUU7QUFBQSxNQUFDO0FBQUMsVUFBRyxFQUFFLEdBQUUsS0FBSyxDQUFDO0FBQUEsZUFBVSxDQUFDLEtBQUssV0FBUyxPQUFPLEtBQUssV0FBUyxhQUFXLEtBQUssT0FBTyxDQUFDLElBQUUsQ0FBQyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUc7QUFBQyxZQUFHLEtBQUssU0FBTyxFQUFFLFVBQVEsS0FBSyxFQUFFLEtBQUcsS0FBSyxHQUFFO0FBQUMsY0FBSSxJQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7QUFBRSxjQUFHLEtBQUcsTUFBSSxJQUFHO0FBQUMsaUJBQUcsRUFBRSxLQUFLLENBQUM7QUFBRTtBQUFBLFVBQVE7QUFBQSxRQUFDLE1BQU0sTUFBSyxJQUFFLFdBQVcsR0FBRSxJQUFHLElBQUk7QUFBRSxZQUFHLEtBQUssU0FBUTtBQUFDLGVBQUssTUFBSSxLQUFLLElBQUUsSUFBSSxPQUFPLFdBQzVmLEtBQUssSUFBRSxJQUFJO0FBQUcsY0FBSTtBQUFFLGlCQUFLLE1BQUksS0FBRyxFQUFFLFNBQU8sSUFBRyxLQUFFLEdBQUUsSUFBRSxFQUFFLFFBQVEsS0FBSyxHQUFFLE9BQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDO0FBQUEsUUFBQztBQUFDLFlBQUcsTUFBSSxLQUFLLFVBQVEsS0FBSyxVQUFRLEVBQUUsU0FBTyxJQUFHO0FBQUMsY0FBRTtBQUFHLG1CQUFRLElBQUUsR0FBRSxJQUFFLElBQUcsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLE9BQU8sQ0FBQyxHQUFFLE1BQUksS0FBRyxLQUFLLFlBQVUsSUFBRSxLQUFLLFVBQVEsS0FBSyxPQUFPLElBQUksQ0FBQyxNQUFJLE1BQUksS0FBRyxNQUFJLEtBQUcsS0FBSyxVQUFRLEVBQUUsSUFBRSxPQUFLLEtBQUcsS0FBRyxLQUFHLElBQUU7QUFBRyxjQUFFO0FBQUEsUUFBQztBQUFDLGFBQUssV0FBUyxFQUFFLFNBQU8sTUFBSSxLQUFLLE1BQUksS0FBSyxJQUFFLElBQUksT0FBTyxNQUFJLEtBQUssSUFBRSxLQUFJLEdBQUcsSUFBRyxJQUFFLEVBQUUsUUFBUSxLQUFLLEdBQUUsT0FBRyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUM7QUFBRyxZQUFHLEtBQUcsS0FBSyxTQUFTLE1BQUksSUFBRSxHQUFFLEtBQUcsSUFBRSxLQUFLLFNBQVMsUUFBTyxLQUFHLEVBQUUsS0FBRSxFQUFFO0FBQUEsVUFBUSxLQUFLLFNBQVMsQ0FBQztBQUFBLFVBQzdmLEtBQUssU0FBUyxJQUFFLENBQUM7QUFBQSxRQUFDO0FBQUUsYUFBSyxTQUFPLEVBQUUsVUFBUSxLQUFLLE1BQUksS0FBSyxFQUFFLElBQUksR0FBRSxDQUFDLEdBQUUsS0FBSyxFQUFFLE9BQUssS0FBSyxNQUFJLEtBQUssRUFBRSxNQUFNLEdBQUUsS0FBSyxJQUFFLEtBQUssSUFBRSxNQUFJO0FBQUksWUFBRyxHQUFFO0FBQUMsY0FBRyxNQUFJLEVBQUUsS0FBRyxHQUFFO0FBQUMsZ0JBQUcsRUFBRSxDQUFDLEVBQUU7QUFBUyxjQUFFLENBQUMsSUFBRTtBQUFBLFVBQUMsT0FBSztBQUFDLGdCQUFHLE1BQUksRUFBRTtBQUFTLGdCQUFFO0FBQUEsVUFBQztBQUFDLFlBQUUsS0FBSyxDQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsU0FBSyxhQUFXLElBQUUsS0FBSyxTQUFTLENBQUMsS0FBRztBQUFHLFNBQUssU0FBTyxFQUFFLFVBQVEsS0FBSyxNQUFJLEtBQUssRUFBRSxJQUFJLEdBQUUsQ0FBQyxHQUFFLEtBQUssRUFBRSxPQUFLLEtBQUssTUFBSSxLQUFLLEVBQUUsTUFBTSxHQUFFLEtBQUssSUFBRSxLQUFLLElBQUUsTUFBSTtBQUFJLFdBQU87QUFBQSxFQUFDO0FBQUUsV0FBUyxFQUFFLEdBQUU7QUFBQyxNQUFFLElBQUU7QUFBSyxNQUFFLEVBQUUsTUFBTTtBQUFFLE1BQUUsRUFBRSxNQUFNO0FBQUEsRUFBQztBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUksS0FBRyxPQUFPLE1BQUksV0FBUyxPQUFPLE1BQUksYUFBVyxJQUFFLEdBQUUsSUFBRSxLQUFHLElBQUU7QUFBRyxVQUFJLElBQUUsRUFBRSxTQUFPLEdBQUUsSUFBRSxFQUFFLFNBQU87QUFBRyxRQUFJLElBQUUsTUFBSSxLQUFHO0FBQUcsVUFBSSxNQUFJLEVBQUUsVUFBUSxLQUFHLENBQUMsQ0FBQyxFQUFFLFVBQVEsQ0FBQyxDQUFDLEVBQUUsV0FBUyxFQUFFLFlBQVUsVUFBSyxFQUFFLGNBQVksS0FBSyxlQUFhLEVBQUUsU0FBTztBQUFJLFNBQUcsS0FBRyxHQUFHLFlBQVk7QUFBRSxTQUFLLFVBQVEsS0FBSyxRQUFNLElBQUk7QUFBSSxRQUFJLElBQUUsS0FBSyxNQUFNLElBQUksSUFBRSxDQUFDO0FBQUUsUUFBRyxDQUFDLEdBQUU7QUFBQyxZQUFNLElBQUUsS0FBRyxFQUFFO0FBQU0sWUFBSSxFQUFFLFFBQU07QUFBSSxVQUFFLEtBQUssT0FBTyxHQUFFLEdBQUUsQ0FBQztBQUFFLFlBQUksRUFBRSxRQUFNO0FBQUcsV0FBSyxNQUFNLElBQUksSUFBRSxHQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRTtBQUFDLFNBQUssUUFBTSxLQUFHLE1BQUksT0FBRyxJQUFFO0FBQUksU0FBSyxRQUFNLG9CQUFJO0FBQUksU0FBSyxJQUFFO0FBQUEsRUFBRTtBQUM1NEIsS0FBRyxVQUFVLE1BQUksU0FBUyxHQUFFLEdBQUU7QUFBQyxTQUFLLE1BQU0sSUFBSSxLQUFLLElBQUUsR0FBRSxDQUFDO0FBQUUsU0FBSyxNQUFNLE9BQUssS0FBSyxTQUFPLEtBQUssTUFBTSxPQUFPLEtBQUssTUFBTSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7QUFBQSxFQUFDO0FBQUUsS0FBRyxVQUFVLE1BQUksU0FBUyxHQUFFO0FBQUMsVUFBTSxJQUFFLEtBQUssTUFBTSxJQUFJLENBQUM7QUFBRSxTQUFHLEtBQUssTUFBSSxNQUFJLEtBQUssTUFBTSxPQUFPLENBQUMsR0FBRSxLQUFLLE1BQU0sSUFBSSxLQUFLLElBQUUsR0FBRSxDQUFDO0FBQUcsV0FBTztBQUFBLEVBQUM7QUFBRSxLQUFHLFVBQVUsU0FBTyxTQUFTLEdBQUU7QUFBQyxlQUFVLEtBQUssS0FBSyxPQUFNO0FBQUMsWUFBTSxJQUFFLEVBQUUsQ0FBQztBQUFFLFFBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFHLEtBQUssTUFBTSxPQUFPLENBQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBVSxRQUFNLFdBQVU7QUFBQyxTQUFLLE1BQU0sTUFBTTtBQUFFLFNBQUssSUFBRTtBQUFBLEVBQUU7QUFBRSxNQUFNLEtBQUcsRUFBQyxXQUFVLE9BQUcsU0FBUSxPQUFHLFFBQU8sTUFBRTtBQUFFLE1BQU0sS0FBRyxDQUFDO0FBQUUsTUFBTSxLQUFHLG9CQUFJLElBQUksQ0FBQyxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLENBQUMsQ0FBQztBQUFFLE1BQU0sS0FBRyxvQkFBSSxJQUFJLENBQUMsQ0FBQyxNQUFLLEdBQUcsR0FBRSxDQUFDLE1BQUssR0FBRyxHQUFFLENBQUMsTUFBSyxHQUFHLEdBQUUsQ0FBQyxNQUFLLEdBQUcsR0FBRSxDQUFDLE1BQUssR0FBRyxHQUFFLENBQUMsTUFBSyxHQUFHLEdBQUUsQ0FBQyxNQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQS9GLE1BQWlHLEtBQUcsQ0FBQyxpQkFBZ0IsUUFBTyx1QkFBc0IsUUFBTyxXQUFVLElBQUk7QUFBRSxNQUFNLEtBQUcsRUFBQyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxRQUFTLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEVBQUM7QUFBRSxNQUFJLEtBQUcsRUFBQyxPQUFNLElBQUcsU0FBUSxJQUFHLFdBQVUsSUFBRyxjQUFhLEVBQUMsUUFBTyxHQUFFLEdBQUUsZUFBYyxFQUFDLFFBQU8sSUFBRyxTQUFRLElBQUcsVUFBUyxHQUFFLEdBQUUsWUFBVyxFQUFDLFFBQU8sSUFBRyxVQUFTLEdBQUcsT0FBTyxDQUFDLGVBQWMsRUFBRSxDQUFDLEdBQUUsU0FBUSxHQUFFLEdBQUUsY0FBYSxFQUFDLFFBQU8sT0FBRyxTQUFRLEVBQUMsUUFBTyxLQUFFLEdBQUUsVUFBUyxTQUFTLEdBQUU7QUFBQyxhQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUksSUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFFLElBQUUsR0FBRyxDQUFDO0FBQUUsZUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsV0FBUyxJQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUUsTUFBSSxPQUFLLE1BQUksT0FBSyxFQUFFLElBQUUsR0FBRyxDQUFDLE1BQUksTUFBSSxNQUFJLEtBQUcsR0FBRSxJQUFFLEdBQUUsRUFBRSxXQUFTLEtBQUksSUFBSTtBQUFDLFFBQUUsQ0FBQyxJQUFFO0FBQUEsSUFBQztBQUFBLEVBQUMsRUFBQyxHQUFFLEtBQUksRUFBQyxPQUFNLEdBQUUsR0FBRSxZQUFXLElBQUcsY0FBYSxJQUFHLGFBQVksR0FBRTtBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLENBQUM7QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxNQUFNLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxNQUFNLENBQUMsR0FBRSxLQUFHLEVBQUUsT0FBTyxNQUFHLEVBQUU7QUFBQSxTQUFXO0FBQUMsVUFBRSxFQUFFLElBQUUsV0FBUyxPQUFPLEVBQUUsR0FBRSxDQUFDO0FBQUUsWUFBTSxJQUFFLEVBQUU7QUFBTyxVQUFHLE1BQUksSUFBRSxFQUFFLFNBQU8sRUFBRSxPQUFPLENBQUMsSUFBRSxHQUFFLEtBQUcsR0FBRSxNQUFJLEVBQUUsVUFBUSxJQUFHLENBQUMsR0FBRztBQUFNLFVBQUU7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFDL29ELFdBQVMsR0FBRyxHQUFFO0FBQUMsUUFBRyxDQUFDLFFBQU0sS0FBSyxnQkFBYyxHQUFHLFFBQU8sSUFBSSxHQUFHLENBQUM7QUFBRSxTQUFLLFFBQU0sSUFBRSxDQUFDLENBQUMsSUFBRSxDQUFDO0FBQUUsU0FBSyxTQUFPLElBQUUsRUFBRSxTQUFPO0FBQUUsVUFBTSxJQUFFO0FBQUssV0FBTyxJQUFJLE1BQU0sQ0FBQyxHQUFFLEVBQUMsSUFBSSxHQUFFLEdBQUU7QUFBQyxVQUFHLE1BQUksU0FBUyxRQUFPLEVBQUU7QUFBTyxVQUFHLE1BQUksT0FBTyxRQUFPLFNBQVMsR0FBRTtBQUFDLFVBQUUsTUFBTSxFQUFFLE1BQU0sU0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBQUUsVUFBRTtBQUFBLE1BQVE7QUFBRSxVQUFHLE1BQUksTUFBTSxRQUFPLFdBQVU7QUFBQyxZQUFHLEVBQUUsT0FBTyxRQUFPLEVBQUUsVUFBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQU8sQ0FBQyxFQUFFLElBQUk7QUFBQSxNQUFDO0FBQUUsVUFBRyxNQUFJLFVBQVUsUUFBTyxTQUFTLEdBQUU7QUFBQyxZQUFJLElBQUU7QUFBRSxpQkFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxNQUFNLFFBQU8sS0FBSTtBQUFDLGNBQUUsRUFBRSxNQUFNLENBQUM7QUFBRSxjQUFFLEVBQUUsUUFBUSxDQUFDO0FBQUUsY0FBRyxLQUFHLEVBQUUsUUFBTyxJQUFFO0FBQUUsZUFBRyxFQUFFO0FBQUEsUUFBTTtBQUFDLGVBQU07QUFBQSxNQUFFO0FBQzFmLFVBQUcsTUFBSSxXQUFXLFFBQU8sU0FBUyxHQUFFO0FBQUMsaUJBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLFFBQU8sSUFBSSxLQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsUUFBTTtBQUFHLGVBQU07QUFBQSxNQUFFO0FBQUUsVUFBRyxNQUFJLFFBQVEsUUFBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLGVBQU8sR0FBRyxHQUFFLEtBQUcsR0FBRSxLQUFHLEVBQUUsUUFBTyxLQUFFO0FBQUEsTUFBQztBQUFFLFVBQUcsTUFBSSxTQUFTLFFBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxlQUFPLEdBQUcsR0FBRSxLQUFHLEdBQUUsS0FBRyxFQUFFLFFBQU8sSUFBRTtBQUFBLE1BQUM7QUFBRSxVQUFHLE1BQUksY0FBYyxRQUFPO0FBQU0sVUFBRyxPQUFPLE1BQUksU0FBUyxTQUFPLElBQUUsRUFBRSxNQUFNLElBQUUsU0FBRyxNQUFHLENBQUMsTUFBSSxFQUFFLENBQUM7QUFBQSxJQUFDLEdBQUUsSUFBSSxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUUsSUFBRSxTQUFHLE1BQUc7QUFBRSxPQUFDLEVBQUUsTUFBTSxDQUFDLE1BQUksRUFBRSxNQUFNLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxJQUFFO0FBQUUsUUFBRTtBQUFTLGFBQU07QUFBQSxJQUFFLEVBQUMsQ0FBQztBQUFBLEVBQUM7QUFBQyxLQUFHLFVBQVUsUUFBTSxXQUFVO0FBQUMsU0FBSyxNQUFNLFNBQU87QUFBQSxFQUFDO0FBQUUsS0FBRyxVQUFVLE9BQUssV0FBVTtBQUFBLEVBQUM7QUFDOWYsV0FBUyxFQUFFLElBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxRQUFNLEtBQUssZ0JBQWMsRUFBRSxRQUFPLElBQUksRUFBRSxDQUFDO0FBQUUsU0FBSyxRQUFNLEVBQUU7QUFBRSxTQUFLLElBQUUsQ0FBQztBQUFFLFNBQUssT0FBSztBQUFFLFFBQUUsTUFBSSxLQUFLLElBQUUsSUFBRyxLQUFLLElBQUUsT0FBTyxDQUFDLE1BQUksS0FBSyxJQUFFLElBQUcsS0FBSyxJQUFFO0FBQUEsRUFBRTtBQUFDLElBQUUsVUFBVSxNQUFJLFNBQVMsR0FBRTtBQUFDLFVBQU0sSUFBRSxLQUFLLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQztBQUFFLFdBQU8sS0FBRyxFQUFFLElBQUksQ0FBQztBQUFBLEVBQUM7QUFBRSxJQUFFLFVBQVUsTUFBSSxTQUFTLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFLLEVBQUUsQ0FBQztBQUFFLFFBQUksSUFBRSxLQUFLLE1BQU0sQ0FBQztBQUFFLFNBQUcsSUFBRSxFQUFFLE1BQUssRUFBRSxJQUFJLEdBQUUsQ0FBQyxJQUFHLEtBQUcsRUFBRSxTQUFPLEtBQUssV0FBUyxLQUFLLE1BQU0sQ0FBQyxJQUFFLElBQUUsb0JBQUksSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRSxLQUFLO0FBQUEsRUFBTztBQUN6WixXQUFTLEVBQUUsSUFBRSxHQUFFO0FBQUMsUUFBRyxDQUFDLFFBQU0sS0FBSyxnQkFBYyxFQUFFLFFBQU8sSUFBSSxFQUFFLENBQUM7QUFBRSxTQUFLLFFBQU0sRUFBRTtBQUFFLFNBQUssSUFBRSxDQUFDO0FBQUUsU0FBSyxPQUFLO0FBQUUsUUFBRSxNQUFJLEtBQUssSUFBRSxJQUFHLEtBQUssSUFBRSxPQUFPLENBQUMsTUFBSSxLQUFLLElBQUUsSUFBRyxLQUFLLElBQUU7QUFBQSxFQUFFO0FBQUMsSUFBRSxVQUFVLE1BQUksU0FBUyxHQUFFO0FBQUMsUUFBSSxJQUFFLEtBQUssRUFBRSxDQUFDO0FBQUUsUUFBSSxJQUFFLEtBQUssTUFBTSxDQUFDO0FBQUUsU0FBRyxJQUFFLEVBQUUsTUFBSyxFQUFFLElBQUksQ0FBQyxJQUFHLEtBQUcsRUFBRSxTQUFPLEtBQUssV0FBUyxLQUFLLE1BQU0sQ0FBQyxJQUFFLElBQUUsb0JBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRSxLQUFLO0FBQUEsRUFBTztBQUFFLE1BQUUsRUFBRTtBQUFVLElBQUUsTUFBSSxFQUFFLFVBQVUsTUFBSSxTQUFTLEdBQUU7QUFBQyxVQUFNLElBQUUsS0FBSyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBRSxXQUFPLEtBQUcsRUFBRSxJQUFJLENBQUM7QUFBQSxFQUFDO0FBQ3JhLElBQUUsU0FBTyxFQUFFLFVBQVUsU0FBTyxTQUFTLEdBQUU7QUFBQyxVQUFNLElBQUUsS0FBSyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBRSxTQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUcsS0FBSztBQUFBLEVBQU07QUFBRSxJQUFFLFFBQU0sRUFBRSxVQUFVLFFBQU0sV0FBVTtBQUFDLFNBQUssUUFBTSxFQUFFO0FBQUUsU0FBSyxJQUFFLENBQUM7QUFBRSxTQUFLLE9BQUs7QUFBQSxFQUFDO0FBQUUsSUFBRSxTQUFPLEVBQUUsVUFBVSxTQUFPLGFBQVc7QUFBQyxhQUFRLElBQUUsR0FBRSxJQUFFLEtBQUssRUFBRSxRQUFPLElBQUksVUFBUSxLQUFLLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU07QUFBQSxFQUFDO0FBQUUsSUFBRSxPQUFLLEVBQUUsVUFBVSxPQUFLLGFBQVc7QUFBQyxhQUFRLElBQUUsR0FBRSxJQUFFLEtBQUssRUFBRSxRQUFPLElBQUksVUFBUSxLQUFLLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU07QUFBQSxFQUFDO0FBQUUsSUFBRSxVQUFRLEVBQUUsVUFBVSxVQUFRLGFBQVc7QUFBQyxhQUFRLElBQUUsR0FBRSxJQUFFLEtBQUssRUFBRSxRQUFPLElBQUksVUFBUSxLQUFLLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU07QUFBQSxFQUFDO0FBQzVmLFdBQVMsR0FBRyxHQUFFO0FBQUMsUUFBSSxJQUFFLFNBQUcsS0FBSyxLQUFFO0FBQUUsUUFBRyxPQUFPLEtBQUcsU0FBUyxRQUFPLElBQUU7QUFBRSxRQUFJLElBQUUsR0FBRSxJQUFFLEtBQUssSUFBRTtBQUFFLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksTUFBRyxJQUFFLElBQUUsRUFBRSxXQUFXLENBQUMs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QUEsRUFBSTtBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUUsRUFBRSxDQUFDO0FBQUUsUUFBRyxNQUFJLEVBQUUsU0FBTyxFQUFFLEdBQUUsQ0FBQyxJQUFFLEtBQUc7QUFBQSxhQUFVLEVBQUUsS0FBRyxFQUFFLGdCQUFjLE1BQU0sTUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxRQUFPLEtBQUUsRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsRUFBRSxJQUFHLElBQUUsRUFBRSxFQUFFLENBQUMsR0FBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFDN2MsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsSUFBRSxFQUFFLENBQUMsRUFBRSxLQUFHLE1BQUksRUFBRSxTQUFPLEdBQUU7QUFBQyxVQUFHLEVBQUUsZ0JBQWMsT0FBTTtBQUFDLFlBQUcsRUFBRSxDQUFDLEdBQUU7QUFBQyxlQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsSUFBSSxHQUFFLEVBQUUsQ0FBQyxHQUFFLE1BQUcsSUFBRTtBQUFFO0FBQUEsUUFBTTtBQUFDLFlBQUUsRUFBRSxLQUFLLEdBQUc7QUFBQSxNQUFDO0FBQUMsUUFBRSxJQUFJLEdBQUUsR0FBRSxHQUFFLElBQUU7QUFBQSxJQUFDLFdBQVMsRUFBRSxnQkFBYyxNQUFNLE1BQUksSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxRQUFPLEtBQUUsRUFBRSxFQUFFLENBQUMsR0FBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxFQUFFLE9BQU8sUUFBTztBQUFFLFFBQUcsRUFBRSxXQUFTLEVBQUUsUUFBTyxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsS0FBRyxFQUFFLFNBQU8sSUFBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsSUFBRSxHQUFFLElBQUUsR0FBRyxLQUFLLE1BQUssQ0FBQyxJQUFFO0FBQUUsUUFBSSxJQUFFLENBQUM7QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxNQUFJLElBQUUsRUFBRSxDQUFDLE9BQUssSUFBRSxFQUFFLFNBQVE7QUFBQyxVQUFHLEdBQUU7QUFBQyxZQUFHLEtBQUcsR0FBRTtBQUFDLGVBQUc7QUFBRTtBQUFBLFFBQVE7QUFBQyxZQUFFLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQztBQUFFLFlBQUUsRUFBRTtBQUFPLFlBQUU7QUFBQSxNQUFDO0FBQUMsVUFBRSxNQUFJLElBQUUsRUFBRSxNQUFNLEdBQUUsQ0FBQyxHQUFFLElBQUU7QUFBRyxVQUFHLENBQUMsRUFBRSxVQUFRLEtBQUcsRUFBRSxRQUFPLElBQUUsR0FBRyxLQUFLLE1BQUssQ0FBQyxJQUFFO0FBQUUsUUFBRSxLQUFLLENBQUM7QUFBRSxXQUFHO0FBQUUsVUFBRyxDQUFDLEVBQUU7QUFBQSxJQUFLO0FBQUMsUUFBRSxFQUFFLFNBQU8sSUFBRSxDQUFDLEVBQUUsT0FBTyxNQUFNLENBQUMsR0FBRSxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUUsV0FBTyxJQUFFLEdBQUcsS0FBSyxNQUFLLENBQUMsSUFBRTtBQUFBLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxRQUFHLEVBQUUsQ0FBQyxLQUFHLEVBQUUsQ0FBQyxFQUFFLE1BQU0sUUFBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUUsQ0FBQztBQUFFLFFBQUcsRUFBRSxNQUFJLFNBQU8sTUFBSSxTQUFPLEVBQUUsT0FBTyxVQUFRLEVBQUUsU0FBTyxFQUFFLFNBQVMsUUFBTyxFQUFFLFNBQU8sTUFBSSxJQUFFLEVBQUUsRUFBRSxTQUFPLENBQUMsS0FBSSxJQUFFLEVBQUUsV0FBUyxFQUFFLFNBQU8sRUFBRSxTQUFPO0FBQUUsUUFBSSxJQUFFLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBRSxTQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRTtBQUFDLFVBQUksSUFBRTtBQUFPLFVBQUcsRUFBRSxnQkFBYyxFQUFFLEtBQUUsRUFBRSxTQUFPLEVBQUU7QUFBQSxlQUFlLEVBQUUsUUFBTSxFQUFFLGdCQUFjLE1BQU0sS0FBRTtBQUFBLFdBQU07QUFBQyxZQUFFLEVBQUUsU0FBTztBQUFFLFlBQUUsRUFBRSxVQUFRO0FBQUUsWUFBRSxFQUFFO0FBQVEsWUFBRSxFQUFFO0FBQVEsY0FBSSxJQUFFLEVBQUUsYUFBVyxFQUFFLGNBQVksRUFBRSxXQUFTO0FBQUUsWUFBRSxFQUFFO0FBQU0sWUFBSSxJQUFFLEVBQUUsU0FBTyxHQUFFLElBQUUsRUFBRSxPQUNsckMsSUFBRSxFQUFFO0FBQU0sWUFBRSxFQUFFLFVBQVEsRUFBRSxRQUFNLEtBQUcsSUFBRSxFQUFFO0FBQU0sWUFBRyxLQUFHLEVBQUUsS0FBSTtBQUFDLGdCQUFNLElBQUUsRUFBRSxTQUFPLEVBQUU7QUFBTSxnQkFBSSxDQUFDLEtBQUcsRUFBRSxTQUFPLENBQUMsTUFBSSxFQUFFLFFBQU0sR0FBRSxFQUFFLFFBQU0sR0FBRSxFQUFFLFlBQVUsSUFBRyxJQUFFLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFBRyxjQUFHLE1BQUksS0FBRyxFQUFFLFFBQU87QUFBQyxnQkFBRTtBQUFFLGdCQUFJO0FBQUUsa0JBQU0sSUFBRSxFQUFFLEVBQUUsUUFBTyxJQUFFLElBQUksUUFBUSxTQUFTLEdBQUU7QUFBQyxrQkFBRTtBQUFBLFlBQUMsQ0FBQztBQUFFLGFBQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxnQkFBRSxJQUFFLFdBQVU7QUFBQyxrQkFBRSxRQUFNO0FBQUssa0JBQUUsVUFBUTtBQUFHLG9CQUFJLElBQUUsSUFBRSxFQUFFLFlBQVksQ0FBQyxJQUFFLEVBQUUsT0FBTyxDQUFDO0FBQUUsb0JBQUcsRUFBRSxLQUFLLFFBQU8sRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLG9CQUFFLEVBQUUsQ0FBQyxJQUFFLElBQUUsRUFBRSxVQUFRO0FBQUUsb0JBQUUsQ0FBQztBQUFFLHlCQUFPO0FBQUEsZ0JBQUMsQ0FBQztBQUFFLG9CQUFFLEVBQUUsVUFBUTtBQUFFLGtCQUFFLENBQUM7QUFBRSx1QkFBTztBQUFBLGNBQUM7QUFBQSxZQUFDLEdBQUcsR0FBRSxPQUFPLE9BQU8sQ0FBQyxHQUFFLENBQUMsQ0FBQztBQUFFLGNBQUUsRUFBRSxLQUFLLENBQUM7QUFBRSxjQUFFLENBQUMsSUFBRTtBQUFFO0FBQUEsVUFBUSxNQUFNLEdBQUUsVUFBUSxPQUNwZixFQUFFLFFBQU0sTUFBSyxJQUFFLElBQUUsRUFBRSxZQUFZLENBQUMsSUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFFLEVBQUUsVUFBUSxHQUFFLEVBQUUsUUFBTTtBQUFBLFFBQUMsV0FBUyxFQUFFLElBQUksS0FBRSxHQUFHLEdBQUUsT0FBTSxDQUFDO0FBQUEsaUJBQVUsRUFBRSxHQUFHLEtBQUUsR0FBRyxHQUFFLE1BQUssQ0FBQztBQUFBLGlCQUFVLEVBQUUsSUFBSSxLQUFFLEdBQUcsR0FBRSxPQUFNLENBQUM7QUFBQSxpQkFBVSxFQUFFLElBQUksS0FBRSxHQUFHLEdBQUUsT0FBTSxDQUFDO0FBQUEsWUFBTztBQUFBLE1BQVE7QUFBQyxRQUFFLFNBQU8sSUFBRSxHQUFFLElBQUUsRUFBRSxTQUFPLEVBQUUsUUFBTSxJQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLFVBQVE7QUFBQSxNQUFDLENBQUMsS0FBRyxJQUFFLEVBQUUsVUFBUTtBQUFFLFFBQUUsQ0FBQyxJQUFFO0FBQUEsSUFBQztBQUFDLFNBQUcsQ0FBQyxFQUFFLFVBQVEsRUFBRSxRQUFNLElBQUksUUFBUSxTQUFTLEdBQUU7QUFBQyxRQUFFLFNBQU87QUFBQSxJQUFDLENBQUM7QUFBRyxRQUFHLEdBQUU7QUFBQyxZQUFNLElBQUUsUUFBUSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGlCQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsRUFBRSxRQUFPLElBQUksS0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFJLEdBQUU7QUFBQyxZQUFFLEVBQUUsQ0FBQyxJQUFFLFdBQVU7QUFBQyxtQkFBTyxFQUFFLEtBQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsVUFBQztBQUFFO0FBQUEsUUFBSztBQUFDLFdBQUcsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUNoZ0IsUUFBRSxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUMsV0FBUyxFQUFFLE1BQU0sR0FBRSxFQUFFLEtBQUssV0FBVTtBQUFDLGFBQU8sRUFBRSxLQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLElBQUMsQ0FBQztBQUFBLFFBQU8sUUFBTyxFQUFFLEtBQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUUsV0FBTyxJQUFFLEVBQUUsU0FBTyxFQUFFLFNBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBRSxFQUFFLENBQUM7QUFBRSxVQUFNLElBQUUsRUFBRSxDQUFDLEtBQUc7QUFBRSxNQUFFLFVBQVEsRUFBRSxRQUFNO0FBQUcsUUFBRSxJQUFJLEVBQUUsQ0FBQztBQUFFLE1BQUUsU0FBTyxNQUFJLElBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFBRyxXQUFPO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBVSxLQUFHLFdBQVU7QUFBQyxXQUFPLEdBQUcsTUFBSyxNQUFLLElBQUcsU0FBUztBQUFBLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUUsV0FBUyxLQUFLLE9BQU8sVUFBUSxFQUFFLEtBQUssS0FBSyxNQUFNLEdBQUUsRUFBRSxTQUFPLElBQUUsS0FBSyxTQUFPLEVBQUUsQ0FBQyxLQUFHLEtBQUssU0FBTyxHQUFHLEdBQUUsR0FBRSxHQUFFLE9BQUcsS0FBSyxDQUFDLEdBQUUsSUFBRTtBQUFJLFVBQUksS0FBSyxRQUFNO0FBQU0sV0FBTyxJQUFFLEtBQUssUUFBUSxHQUFFLEdBQUUsR0FBRSxDQUFDLElBQUU7QUFBQSxFQUFJO0FBQUUsSUFBRSxVQUFVLE1BQUksV0FBVTtBQUFDLFdBQU8sR0FBRyxNQUFLLE9BQU0sSUFBRyxTQUFTO0FBQUEsRUFBQztBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFLLE9BQU8sT0FBTyxRQUFPLElBQUUsS0FBSyxTQUFPO0FBQUssUUFBSTtBQUFFLFFBQUcsRUFBRSxPQUFPLEtBQUcsS0FBSyxPQUFPLFVBQVEsRUFBRSxRQUFRLEtBQUssTUFBTSxHQUFFLEVBQUUsU0FBTyxFQUFFLE1BQUssU0FBTyxFQUFFLENBQUM7QUFBQSxTQUFNO0FBQUMsVUFBSSxJQUFFO0FBQUUsZUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksTUFBSSxJQUFFLEVBQUUsQ0FBQyxPQUFLLElBQUUsRUFBRSxRQUFRLEtBQUUsTUFBSSxJQUFFO0FBQUEsZUFBVyxDQUFDLEdBQUU7QUFBQyxZQUFFO0FBQUU7QUFBQSxNQUFLO0FBQUMsV0FBRyxLQUFLLFNBQU8sR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsS0FBSyxHQUFFLENBQUMsR0FBRSxJQUFFLFFBQUksS0FBSyxTQUFPLENBQUM7QUFBQSxJQUFDO0FBQUEsUUFBTSxPQUFJLEtBQUssU0FBTztBQUFHLFVBQUksS0FBSyxRQUFNO0FBQU0sV0FBTyxJQUFFLEtBQUssUUFBUSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsSUFBRTtBQUFBLEVBQUk7QUFBRSxJQUFFLFVBQVUsTUFBSSxXQUFVO0FBQUMsV0FBTyxHQUFHLE1BQUssT0FBTSxJQUFHLFNBQVM7QUFBQSxFQUFDO0FBQ3JqQyxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsRUFBRSxPQUFPLEtBQUcsS0FBSyxPQUFPLFVBQVEsRUFBRSxRQUFRLEtBQUssTUFBTSxHQUFFLEVBQUUsU0FBTyxFQUFFLE1BQUssU0FBTyxFQUFFLENBQUM7QUFBQSxTQUFNO0FBQUMsU0FBRTtBQUFDLFlBQUU7QUFBRSxZQUFJLElBQUUsS0FBSztBQUFFLGNBQU0sSUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFO0FBQUUsWUFBSSxJQUFFO0FBQUUsaUJBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUU7QUFBQyxjQUFFLEVBQUUsV0FBUyxJQUFFLEVBQUU7QUFBUSxtQkFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsRUFBRSxVQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxJQUFFO0FBQUEsUUFBQztBQUFDLGlCQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxVQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRyxJQUFFLEVBQUUsQ0FBQztBQUFFLGNBQUcsSUFBRSxFQUFFLENBQUM7QUFBRSxxQkFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVB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QUUsUUFBTyxLQUFJO0FBQUMsY0FBSSxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxPQUFPLENBQUM7QUFBRSxjQUFFLEVBQUUsU0FBTyxJQUFFLEVBQUUsS0FBSyxHQUFHLElBQUUsRUFBRSxDQUFDO0FBQUUsY0FBSTtBQUFFLGNBQUcsS0FBRyxHQUFFO0FBQUMsZ0JBQUksSUFBRSxFQUFFLFFBQU8sS0FBRyxHQUFHLFFBQ2hmLEVBQUUsUUFBUSxHQUFHLE9BQU0sRUFBRSxJQUFFLEdBQUcsU0FBTyxFQUFFLFFBQU8sSUFBRSxJQUFHLElBQUU7QUFBRSxxQkFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLGtCQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsa0JBQUcsR0FBRTtBQUFDLG9CQUFJLElBQUUsRUFBRTtBQUFPLHFCQUFHO0FBQUUscUJBQUcsS0FBRyxNQUFJLElBQUUsRUFBRSxRQUFRLENBQUMsR0FBRSxJQUFFLE9BQUssS0FBRyxJQUFFLEVBQUUsVUFBVSxHQUFFLENBQUMsSUFBRSxNQUFJLElBQUUsRUFBRSxVQUFVLEdBQUUsSUFBRSxDQUFDLElBQUUsS0FBRyxJQUFFLElBQUUsSUFBRSxFQUFFLFVBQVUsSUFBRSxDQUFDLElBQUUsS0FBSSxJQUFFLEdBQUUsSUFBRTtBQUFBLGNBQUk7QUFBQSxZQUFDO0FBQUMsa0JBQUksTUFBSSxJQUFFLE1BQUksSUFBRSxFQUFFLFVBQVEsSUFBRSxJQUFFLEtBQUksSUFBRSxFQUFFLFVBQVEsSUFBRSxJQUFFLEtBQUcsRUFBRSxRQUFPLEtBQUcsR0FBRSxHQUFHLEtBQUssRUFBRSxNQUFNLEdBQUUsRUFBRSxLQUFLLEVBQUMsT0FBTSxFQUFDLENBQUMsSUFBRyxNQUFJLElBQUUsTUFBSSxNQUFJO0FBQUEsVUFBRTtBQUFDLGNBQUcsQ0FBQyxFQUFFLEtBQUUsRUFBRSxDQUFDLEdBQUUsTUFBSSxJQUFFLE1BQUksTUFBSSxHQUFFLEtBQUcsRUFBRSxLQUFLLEVBQUMsTUFBSyxFQUFDLENBQUM7QUFBQSxtQkFBVSxLQUFHLEtBQUcsRUFBRTtBQUFBLFFBQUs7QUFBQyxZQUFFLEdBQUcsVUFBUSxFQUFFLFNBQU87QUFBRyxZQUFHLEtBQUcsS0FBRyxLQUFHLEVBQUUsU0FBTyxJQUFFLEVBQUUsS0FBRyxJQUFFLElBQUUsSUFBRSxJQUFFLEdBQUUsSUFBRSxJQUFFLEdBQUUsSUFBRSxNQUNuZixLQUFHLElBQUcsSUFBRSxNQUFJLEtBQUcsSUFBRyxLQUFHLEVBQUUsS0FBRSxJQUFFLEtBQUcsSUFBRSxJQUFFLElBQUUsS0FBRyxNQUFJLElBQUUsS0FBRyxJQUFFLElBQUcsSUFBRSxJQUFFLEtBQUcsSUFBRSxJQUFFLElBQUUsS0FBRyxJQUFFLEdBQUUsTUFBSSxJQUFFLEtBQUcsRUFBRSxPQUFPLENBQUMsTUFBSSxPQUFLLEVBQUUsT0FBTyxJQUFFLENBQUMsTUFBSSxRQUFNLElBQUUsRUFBRSxRQUFRLEtBQUksQ0FBQyxHQUFFLElBQUUsTUFBSSxJQUFFLEtBQUksSUFBRSxFQUFFLFVBQVEsRUFBRSxPQUFPLElBQUUsQ0FBQyxNQUFJLE9BQUssRUFBRSxPQUFPLENBQUMsTUFBSSxRQUFNLElBQUUsRUFBRSxZQUFZLEtBQUksQ0FBQyxHQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsRUFBRSxLQUFJLEtBQUcsSUFBRSxJQUFFLE1BQUksRUFBRSxVQUFVLEdBQUUsQ0FBQyxLQUFHLElBQUUsRUFBRSxTQUFPLElBQUU7QUFBQSxhQUFRO0FBQUMsY0FBRSxDQUFDO0FBQUUsY0FBRSxDQUFDO0FBQUUsY0FBRSxDQUFDO0FBQUUsY0FBRSxDQUFDO0FBQUUsY0FBRSxDQUFDO0FBQUUsY0FBRSxDQUFDO0FBQUUsY0FBRSxJQUFFLElBQUU7QUFBRSxlQUFJLElBQUUsSUFBRSxPQUFJO0FBQUMsZ0JBQUksSUFBRTtBQUFPLHFCQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRyxRQUFPLEtBQUk7QUFBQyxrQkFBRSxHQUFHLENBQUM7QUFBRSxrQkFBRyxFQUFFLEtBQUcsTUFBSSxHQUFFO0FBQUMsb0JBQUcsRUFBRSxJQUFFLENBQUMsRUFBRTtB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RUFBRSxHQUFFLENBQUM7QUFBRSxRQUFJLElBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBRSxRQUFHLEtBQUcsRUFBRSxPQUFNO0FBQUMsWUFBTSxJQUFFO0FBQUUsVUFBRSxFQUFFO0FBQU0sVUFBRSxFQUFFLFNBQU87QUFBRSxVQUFHLElBQUUsRUFBRSxPQUFNO0FBQUMsWUFBRSxFQUFFLFNBQU8sRUFBRTtBQUFNLFlBQUUsRUFBRTtBQUFVLGNBQU0sSUFBRSxFQUFFO0FBQVEsWUFBRSxFQUFFLFNBQU8sRUFBRTtBQUFNLFVBQUUsVUFBUTtBQUFHLFVBQUUsUUFBTTtBQUFLLFlBQUUsSUFBRSxFQUFFLFlBQVksQ0FBQyxJQUFFLEVBQUUsT0FBTyxDQUFDO0FBQUUsVUFBRSxVQUFRO0FBQUUsVUFBRSxRQUFNO0FBQUUsWUFBRSxFQUFFLFVBQVE7QUFBQSxNQUFDLE1BQU0sS0FBRSxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUcsS0FBRyxFQUFFLE1BQUs7QUFBQyxZQUFNLElBQUU7QUFBSyxVQUFFLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxVQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsU0FBTyxFQUFFLFVBQVE7QUFBRSxXQUFHLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBRSxVQUFFLENBQUMsQ0FBQztBQUFFLFVBQUUsQ0FBQztBQUFFLFVBQUUsSUFBSSxRQUFRLFNBQVMsR0FBRTtBQUFDLFlBQUU7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsU0FBSyxRQUFNLEtBQUc7QUFBSyxTQUFLLFNBQU8sS0FBRyxDQUFDO0FBQUUsU0FBSyxJQUFFO0FBQUUsU0FBSyxJQUNwc0IsS0FBRyxDQUFDO0FBQUUsU0FBSyxRQUFNLEtBQUc7QUFBSyxTQUFLLFNBQU8sS0FBRztBQUFLLFNBQUssWUFBVSxLQUFHO0FBQUssU0FBSyxRQUFNLEtBQUc7QUFBRyxTQUFLLFFBQU0sS0FBRztBQUFBLEVBQUU7QUFBQyxNQUFFLEVBQUU7QUFBVSxJQUFFLFFBQU0sU0FBUyxHQUFFO0FBQUMsUUFBRyxLQUFLLE9BQU07QUFBQyxZQUFNLElBQUU7QUFBSyxXQUFLLEVBQUUsS0FBSyxXQUFVO0FBQUMsZUFBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFO0FBQUEsTUFBTSxDQUFDO0FBQUEsSUFBQyxXQUFTLEtBQUssT0FBTyxRQUFPO0FBQUMsWUFBTSxJQUFFLENBQUM7QUFBRSxlQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsS0FBSyxPQUFPLFFBQU8sSUFBSSxLQUFHLElBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxLQUFHLEVBQUUsVUFBUSxHQUFFO0FBQUMsWUFBRyxFQUFFLENBQUMsSUFBRSxHQUFFLEtBQUcsRUFBRSxRQUFPLENBQUMsRUFBRTtBQUFBLE1BQUssT0FBSztBQUFDLFVBQUUsQ0FBQyxJQUFFLEVBQUUsTUFBTSxHQUFFLENBQUM7QUFBRTtBQUFBLE1BQUs7QUFBQyxXQUFLLFNBQU87QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUk7QUFDN1osSUFBRSxTQUFPLFNBQVMsR0FBRTtBQUFDLFFBQUcsS0FBSyxPQUFNO0FBQUMsWUFBTSxJQUFFO0FBQUssV0FBSyxFQUFFLEtBQUssV0FBVTtBQUFDLGVBQU8sRUFBRSxPQUFPLENBQUMsRUFBRTtBQUFBLE1BQU0sQ0FBQztBQUFBLElBQUMsV0FBUyxLQUFLLE9BQU8sUUFBTztBQUFDLFlBQU0sSUFBRSxDQUFDO0FBQUUsZUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEtBQUssT0FBTyxRQUFPLElBQUksS0FBRyxJQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsR0FBRSxVQUFRLElBQUUsS0FBRyxFQUFFLFVBQVEsRUFBRSxDQUFDLElBQUUsRUFBRSxNQUFNLENBQUMsR0FBRSxJQUFFO0FBQUcsV0FBSyxTQUFPO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFJO0FBQUUsSUFBRSxRQUFNLFNBQVMsR0FBRTtBQUFDLFFBQUcsS0FBSyxPQUFNO0FBQUMsWUFBTSxJQUFFO0FBQUssV0FBSyxFQUFFLEtBQUssV0FBVTtBQUFDLGVBQU8sRUFBRSxNQUFNLENBQUMsRUFBRTtBQUFBLE1BQU0sQ0FBQztBQUFBLElBQUMsTUFBTSxNQUFLLEtBQUc7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUMzWSxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUU7QUFBTyxRQUFJLElBQUUsRUFBRTtBQUFNLE1BQUUsUUFBTTtBQUFLLGFBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUcsT0FBTyxNQUFJLFdBQVcsS0FBRSxFQUFFLEdBQUUsRUFBRSxFQUFFLENBQUMsSUFBRSxJQUFFLEVBQUUsVUFBUSxHQUFFO0FBQUEsZUFBWSxFQUFFLEVBQUUsS0FBRSxFQUFFLEVBQUUsR0FBRSxFQUFFLEVBQUUsQ0FBQyxJQUFFLElBQUUsRUFBRSxVQUFRLEdBQUU7QUFBQSxlQUFZLEVBQUUsS0FBSyxRQUFPLEVBQUUsUUFBTTtBQUFBO0FBQUUsUUFBRSxFQUFFO0FBQU8sTUFBRSxJQUFFLENBQUM7QUFBRSxNQUFFLFNBQU87QUFBSyxTQUFHLEVBQUUsQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQzNSLElBQUUsVUFBUSxTQUFTLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFLLFFBQU0sR0FBRyxNQUFLLElBQUUsSUFBRSxLQUFLO0FBQU8sUUFBRyxFQUFFLE1BQUs7QUFBQyxZQUFNLElBQUU7QUFBSyxhQUFPLEVBQUUsS0FBSyxXQUFVO0FBQUMsZUFBTyxFQUFFLFFBQVEsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLE1BQUUsV0FBUyxPQUFPLE1BQUksWUFBVSxJQUFFLEVBQUUsYUFBVyxLQUFLLFdBQVUsSUFBRSxDQUFDLENBQUMsS0FBRyxFQUFFLFFBQU8sSUFBRSxFQUFFLFFBQU8sSUFBRSxFQUFFLFVBQVEsSUFBRSxLQUFHLEtBQUssV0FBVSxJQUFFLENBQUMsQ0FBQyxLQUFHLElBQUcsSUFBRSxJQUFFLElBQUUsR0FBRyxLQUFLLEtBQUssT0FBTSxDQUFDLElBQUUsSUFBRSxHQUFHLEtBQUssS0FBSyxPQUFNLEdBQUUsS0FBRyxLQUFJLEdBQUUsQ0FBQztBQUFHLFdBQU8sS0FBSyxTQUFTLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFDbFgsSUFBRSxXQUFTLFNBQVMsR0FBRSxHQUFFO0FBQUMsUUFBRyxFQUFFLE1BQUs7QUFBQyxZQUFNLElBQUU7QUFBSyxhQUFPLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxlQUFPLEVBQUUsU0FBUyxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsU0FBRyxFQUFFLFVBQVEsS0FBSyxVQUFRLElBQUUsR0FBRyxLQUFLLE9BQU0sR0FBRSxLQUFLLE1BQU0sT0FBTSxLQUFLLE9BQU0sQ0FBQztBQUFHLFVBQU0sSUFBRSxLQUFLO0FBQU8sU0FBSyxZQUFVLEtBQUssUUFBTSxLQUFLLFNBQU8sS0FBSyxJQUFFLEtBQUssUUFBTSxLQUFLLFNBQU87QUFBSyxTQUFLLFFBQU0sS0FBSyxRQUFNO0FBQUcsU0FBRyxFQUFFLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLEVBQUU7QUFBTyxRQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUU7QUFBRSxRQUFFLEVBQUU7QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxJQUFJLFVBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsV0FBUyxJQUFFLEVBQUUsQ0FBQyxHQUFHLFVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxVQUFFLEVBQUUsQ0FBQztBQUFFLE9BQUMsSUFBRSxFQUFFLENBQUMsS0FBRyxFQUFFLENBQUMsT0FBSyxJQUFFLEdBQUUsRUFBRSxDQUFDLElBQUU7QUFBRyxVQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLENBQUM7QUFBRyxVQUFHLENBQUMsR0FBRTtBQUFDLFlBQUksSUFBRSxLQUFHLEtBQUcsQ0FBQyxJQUFFLElBQUUsS0FBRztBQUFHLFlBQUUsRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsQ0FBQztBQUFBLE1BQUU7QUFBQyxRQUFFLEtBQUssQ0FBQztBQUFFLFVBQUcsS0FBRyxLQUFHLE1BQUksSUFBRSxLQUFHLEVBQUUsU0FBTyxNQUFJLEVBQUUsUUFBTyxJQUFFLEVBQUUsTUFBTSxDQUFDLElBQUU7QUFBQSxJQUFDO0FBQUMsUUFBRyxJQUFFLEVBQUUsT0FBTyxLQUFHLEVBQUUsS0FBRSxFQUFFLFNBQU8sSUFBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxLQUFHLElBQUUsRUFBRSxDQUFDLE1BQUksS0FBRyxFQUFFLFNBQU8sS0FBRyxJQUFFLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxJQUFFO0FBQUEsU0FBTTtBQUFDLFVBQUcsSUFBRSxFQUFFLFFBQU0sQ0FBQztBQUFFLFVBQUUsRUFBRSxJQUFFLENBQUM7QUFBRSxVQUFHLEtBQUcsRUFBRSxLQUFHLEdBQUU7QUFBQyxZQUFHLEVBQUUsU0FBTyxLQUFHLEVBQUUsS0FBRSxFQUFFLE1BQU0sR0FBRSxJQUM1eUIsQ0FBQztBQUFBLE1BQUMsT0FBSztBQUFDLFlBQUUsQ0FBQztBQUFFLGlCQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRyxJQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUcsS0FBRyxFQUFFLFNBQU8sRUFBRSxNQUFHLEVBQUU7QUFBQSxhQUFXO0FBQUMsY0FBRyxLQUFHLEVBQUUsU0FBTyxLQUFHLEVBQUUsS0FBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxLQUFHLEVBQUUsUUFBTyxNQUFJLEtBQUcsRUFBRTtBQUFRLFlBQUUsS0FBSyxDQUFDO0FBQUUsY0FBRyxDQUFDLEVBQUU7QUFBQSxRQUFLO0FBQUMsWUFBRTtBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFDM0wsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFO0FBQUUsUUFBSTtBQUFFLFFBQUksSUFBRSxFQUFFO0FBQU8sUUFBSTtBQUFFLFFBQUcsRUFBRSxNQUFJLElBQUUsSUFBRSxHQUFFLEtBQUcsR0FBRSxLQUFJO0FBQUMsVUFBRyxLQUFHLElBQUUsRUFBRSxDQUFDLE1BQUksRUFBRTtBQUFPLGFBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQztBQUFFLGNBQUcsRUFBRSxDQUFDLElBQUUsR0FBRSxFQUFFO0FBQUEsbUJBQVksRUFBRSxLQUFLLENBQUMsR0FBRSxFQUFFLFdBQVMsRUFBRSxRQUFPO0FBQUE7QUFBQTtBQUFBLElBQUM7QUFBQSxRQUFNLFVBQVEsSUFBRSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsS0FBRyxHQUFFLEtBQUk7QUFBQyxVQUFFLEVBQUUsQ0FBQztBQUFFLGVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRyxLQUFHLElBQUUsRUFBRSxDQUFDLE1BQUksRUFBRTtBQUFPLGlCQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFHLEVBQUUsQ0FBQyxJQUFFLEdBQUUsRUFBRTtBQUFBLGFBQVE7QUFBQyxjQUFJLEtBQUcsS0FBRyxJQUFFLElBQUUsSUFBRSxLQUFHLElBQUUsT0FBSyxJQUFFLEtBQUc7QUFBRSxXQUFDLEVBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLENBQUMsSUFBSSxLQUFLLENBQUM7QUFBRSxjQUFHLEVBQUUsTUFBSSxFQUFFLFFBQU87QUFBQSxRQUFDO0FBQUE7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFDMWIsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLEVBQUUsR0FBRSxJQUFFLENBQUM7QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxVQUFFLEVBQUUsQ0FBQztBQUFFLGVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksR0FBRSxFQUFFLENBQUMsQ0FBQyxJQUFFO0FBQUEsSUFBQztBQUFDLFFBQUcsRUFBRSxVQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsTUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQyxJQUFFO0FBQUEsUUFBUSxVQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLE9BQU8sUUFBTyxJQUFJLE1BQUksSUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLE9BQUssRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQyxJQUFFO0FBQUcsV0FBTztBQUFBLEVBQUM7QUFBRSxJQUFFO0FBQUUsS0FBRyxVQUFVLFNBQU8sU0FBUyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsSUFBRSxHQUFFLElBQUUsTUFBSSxHQUFHLENBQUMsTUFBSSxJQUFFLEdBQUUsSUFBRTtBQUFJLFFBQUksSUFBRSxDQUFDO0FBQUUsUUFBSSxJQUFFLENBQUM7QUFBRSxRQUFJO0FBQUUsUUFBSSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUUsUUFBSSxJQUFFLEdBQUUsSUFBRSxNQUFHO0FBQUUsUUFBRyxHQUFFO0FBQUMsUUFBRSxnQkFBYyxVQUFRLElBQUUsRUFBQyxPQUFNLEVBQUM7QUFBRyxVQUFFLEVBQUUsU0FBTztBQUFFLFVBQUUsRUFBRTtBQUFNLFVBQUUsRUFBRTtBQUFNLFVBQUUsRUFBRTtBQUFNLFVBQUUsS0FBRyxFQUFFLFVBQVEsSUFBRSxFQUFFLFdBQVMsRUFBRSxRQUFNLE9BQUs7QUFBRyxVQUFJLElBQUUsS0FBSyxPQUFLLEVBQUU7QUFBSSxVQUFFLEVBQUU7QUFBUSxVQUFFLEVBQUUsWUFBVTtBQUFHLFVBQUUsRUFBRTtBQUFNLFVBQUUsS0FBRyxLQUFLLFNBQU8sRUFBRTtBQUFVLFVBQUksSUFBRSxDQUFDLENBQUMsS0FBRyxLQUFHLEtBQUssU0FBTyxFQUFFO0FBQU8sVUFBRSxFQUFFLFNBQU87QUFBRSxVQUFJLElBQUUsRUFBRSxVQUFRO0FBQUUsWUFBSSxJQUFFLElBQUUsTUFBSTtBQUFHLFVBQUcsTUFBSSxDQUFDLEtBQUssTUFBSSxDQUFDLElBQUc7QUFBQyxVQUFFLGdCQUFjLFVBQVEsSUFBRSxDQUFDLENBQUM7QUFBRyxZQUFJLElBQUUsQ0FBQztBQUFFLGlCQUFRLElBQ3Z6QixHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxTQUFPLEVBQUUsS0FBSTtBQUFDLGNBQUksSUFBRSxFQUFFO0FBQUksY0FBRyxFQUFFLGdCQUFjLE1BQU0sVUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLEtBQUssRUFBRSxPQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQUEsY0FBTyxHQUFFLEtBQUssRUFBRSxPQUFNLENBQUM7QUFBQSxRQUFDLE9BQUs7QUFBQyxjQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUUsbUJBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsZ0JBQWMsTUFBTSxNQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsS0FBSyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUEsY0FBTyxHQUFFLEtBQUssR0FBRSxDQUFDO0FBQUEsUUFBQztBQUFDLFlBQUU7QUFBRSxZQUFHLENBQUMsR0FBRTtBQUFDLGNBQUUsQ0FBQztBQUFFLGNBQUcsRUFBRSxPQUFPLE1BQUksSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUcsR0FBRTtBQUFDLGdCQUFHLEtBQUssSUFBRztBQUFDLGtCQUFFLEtBQUssTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQUUsa0JBQUcsQ0FBQyxFQUFFO0FBQVMsZ0JBQUUsS0FBSyxJQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxHQUFFLENBQUMsQ0FBQztBQUFBLFlBQUMsTUFBTSxLQUFFLEdBQUcsS0FBSyxNQUFLLEVBQUUsQ0FBQyxHQUFFLEVBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxjQUFFLEtBQUssSUFBRSxFQUFDLE9BQU0sRUFBRSxDQUFDLEdBQUUsS0FBSSxFQUFFLElBQ3RmLENBQUMsR0FBRSxRQUFPLEVBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQyxjQUFHLEVBQUUsUUFBTztBQUFDLGtCQUFNLElBQUU7QUFBSyxtQkFBTyxRQUFRLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsdUJBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLENBQUMsRUFBRSxTQUFPLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFFLHFCQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsRUFBRSxTQUFPLElBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUM7QUFBQSxZQUFDLENBQUM7QUFBQSxVQUFDO0FBQUMsaUJBQU8sSUFBRSxJQUFFLElBQUksRUFBRSxFQUFFLFNBQU8sSUFBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBSTtBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUMsV0FBRyxLQUFHLEVBQUUsSUFBRSxLQUFHLEtBQUssV0FBUyxFQUFFLENBQUMsSUFBRSxJQUFFLEtBQUcsRUFBRSxnQkFBYyxTQUFPLEVBQUUsV0FBUyxNQUFJLElBQUUsRUFBRSxDQUFDLElBQUcsSUFBRSxFQUFFLFNBQU8sRUFBRTtBQUFRLFdBQUcsRUFBRSxnQkFBYyxVQUFRLElBQUUsQ0FBQyxDQUFDO0FBQUEsSUFBRTtBQUFDLFVBQUksSUFBRSxLQUFLO0FBQU8sUUFBSTtBQUFFLFNBQUcsS0FBSyxVQUFRLEtBQUssT0FBSyxDQUFDLEtBQUcsQ0FBQztBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxVQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUcsS0FBSyxNQUFJLEtBQUssT0FDdGYsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFO0FBQVMsVUFBSTtBQUFFLFFBQUUsQ0FBQyxNQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsT0FBTSxJQUFFLEVBQUUsU0FBTyxHQUFFLElBQUUsR0FBRyxFQUFFLE9BQU0sQ0FBQyxHQUFFLElBQUUsR0FBRyxFQUFFLFFBQU8sQ0FBQyxHQUFFLElBQUUsR0FBRyxFQUFFLFNBQVEsQ0FBQyxHQUFFLElBQUUsS0FBRyxLQUFLLFNBQU8sR0FBRyxFQUFFLFdBQVUsQ0FBQyxHQUFFLElBQUUsQ0FBQyxDQUFDLEtBQUcsS0FBRyxLQUFLLFNBQU8sR0FBRyxFQUFFLFFBQU8sQ0FBQyxHQUFFLElBQUUsR0FBRyxFQUFFLE9BQU0sQ0FBQztBQUFHLFVBQUcsRUFBRSxLQUFFLEVBQUUsQ0FBQztBQUFBLFdBQU07QUFBQyxZQUFFLEtBQUcsS0FBRyxDQUFDO0FBQUUsWUFBRSxFQUFFO0FBQU8sWUFBSSxJQUFFLEtBQUssTUFBTSxJQUFJLENBQUM7QUFBRSxjQUFJLEtBQUssT0FBSyxFQUFFLE1BQUksR0FBRSxJQUFFLEVBQUUsR0FBRyxvQkFBbUIsRUFBRSxRQUFNLElBQUcsQ0FBQyxLQUFHLE1BQUksRUFBRSxTQUFPO0FBQUssWUFBRSxJQUFFLEVBQUUsWUFBWSxHQUFFLEdBQUUsQ0FBQyxJQUFFLEVBQUUsT0FBTyxHQUFFLEdBQUUsQ0FBQztBQUFFLGNBQUksRUFBRSxTQUFPO0FBQUcsWUFBRyxHQUFFO0FBQUMsWUFBRSxDQUFDLElBQUU7QUFBRTtBQUFBLFFBQVE7QUFBQSxNQUFDO0FBQUMsV0FBRyxJQUFFLEVBQUUsVUFBUSxNQUFJLEVBQUU7QUFBTyxVQUFHLEtBQUcsR0FBRTtBQUFDLFlBQUUsQ0FBQztBQUFFLFlBQUU7QUFBRSxZQUFHLEtBQUssTUFBSSxHQUFFO0FBQUMsY0FBRyxDQUFDLEVBQUUsTUFBSSxJQUFFLEVBQUUsUUFBTyxJQUMxZixFQUFFLFFBQU8sS0FBSTtBQUFDLGdCQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsZ0JBQUcsS0FBRyxFQUFFLE9BQU8sTUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLHFCQUFVLENBQUMsRUFBRSxRQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUEsVUFBQztBQUFBLFFBQUMsTUFBTSxVQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBRyxHQUFFO0FBQUMsY0FBRSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUFFLGNBQUcsQ0FBQyxFQUFFLEtBQUcsRUFBRTtBQUFBLGNBQWMsUUFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFFLGNBQUcsS0FBRyxJQUFFLEtBQUcsRUFBRSxJQUFJLEVBQUUsSUFBRSxDQUFDLENBQUMsTUFBSSxFQUFFLE9BQU8sTUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLG1CQUFVLENBQUMsRUFBRSxRQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUEsUUFBQztBQUFDLFlBQUcsR0FBRTtBQUFDLGNBQUUsR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFFLGNBQUUsRUFBRTtBQUFPLGNBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxRQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUU7QUFBQSxRQUFHO0FBQUEsTUFBQztBQUFDLFVBQUcsRUFBRSxHQUFFLENBQUMsSUFBRSxHQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUU7QUFBQSxlQUFZLEVBQUUsV0FBUyxFQUFFLFFBQU8sSUFBRSxJQUFFLElBQUksRUFBRSxHQUFFLElBQUk7QUFBQSxJQUFDO0FBQUMsUUFBRyxHQUFFO0FBQUMsVUFBRyxLQUFLLE1BQUksS0FBRyxFQUFFLFVBQVEsQ0FBQyxFQUFFLE1BQUksSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUcsR0FBRTtBQUFDLFlBQUUsS0FBSyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM2YsWUFBRyxDQUFDLEVBQUUsS0FBRyxFQUFFO0FBQUEsWUFBYyxRQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUUsVUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxHQUFFLEtBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQyxZQUFNLElBQUU7QUFBSyxhQUFPLFFBQVEsSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxjQUFJLEVBQUUsVUFBUTtBQUFHLFVBQUUsV0FBUyxJQUFFLEVBQUUsT0FBTyxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUcsZUFBTztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxRQUFHLENBQUMsRUFBRSxRQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUUsUUFBRyxNQUFJLENBQUMsS0FBRyxDQUFDLEtBQUssT0FBTyxRQUFPLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxJQUFFLElBQUksRUFBRSxHQUFFLElBQUk7QUFBRSxRQUFFLENBQUM7QUFBRSxTQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBRSxFQUFFLENBQUM7QUFBRSxXQUFHLEVBQUUsVUFBUSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQU0sZ0JBQWMsS0FBSyxLQUFHLEVBQUUsS0FBSyxJQUFFLEtBQUssTUFBTSxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLElBQUUsSUFBRSxHQUFHLEtBQUssTUFBSyxDQUFDO0FBQUcsVUFBRyxFQUFFLFFBQU8sSUFBRSxJQUFFLEdBQUcsR0FBRSxHQUFFLEtBQUssT0FBTSxHQUFFLENBQUMsSUFBRSxJQUFFLElBQUksRUFBRSxHQUFFLElBQUk7QUFBRSxRQUFFLENBQUMsSUFDcGYsRUFBQyxPQUFNLEVBQUUsQ0FBQyxHQUFFLFFBQU8sRUFBQztBQUFBLElBQUM7QUFBQyxRQUFHLEtBQUcsS0FBSyxNQUFJLEVBQUUsUUFBTztBQUFDLFlBQU0sSUFBRTtBQUFLLGFBQU8sUUFBUSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGlCQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsQ0FBQyxFQUFFLFNBQU8sRUFBRSxDQUFDO0FBQUUsY0FBSSxJQUFFLEdBQUcsR0FBRSxHQUFFLEVBQUUsT0FBTSxHQUFFLENBQUM7QUFBRyxlQUFPLElBQUUsR0FBRyxDQUFDLElBQUU7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsVUFBSSxJQUFFLEdBQUcsR0FBRSxHQUFFLEtBQUssT0FBTSxHQUFFLENBQUM7QUFBRyxXQUFPLElBQUUsR0FBRyxDQUFDLElBQUU7QUFBQSxFQUFDO0FBQzNPLFdBQVMsR0FBRyxHQUFFO0FBQUMsVUFBTSxJQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsR0FBRSxJQUFFLEVBQUU7QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxVQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUUsRUFBRTtBQUFNLFVBQUUsRUFBRTtBQUFPLGVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRyxJQUFFLEVBQUUsQ0FBQyxHQUFFLE9BQU8sTUFBSSxXQUFTLElBQUUsRUFBQyxJQUFHLElBQUUsRUFBQyxJQUFFLElBQUUsRUFBRSxLQUFJLElBQUUsRUFBRSxDQUFDLEtBQUcsRUFBRSxLQUFLLENBQUMsS0FBRyxFQUFFLFFBQU0sRUFBRSxDQUFDLElBQUUsQ0FBQyxDQUFDLEdBQUUsRUFBRSxLQUFLLENBQUMsSUFBRyxJQUFFLEVBQUUsVUFBVSxLQUFFLEVBQUUsQ0FBQyxHQUFFLE1BQUksRUFBRSxDQUFDLElBQUUsSUFBRSxDQUFDLEdBQUUsRUFBRSxZQUFVLElBQUcsRUFBRSxDQUFDLElBQUU7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBRSxLQUFLLElBQUksSUFBSSxDQUFDO0FBQUUsUUFBRyxDQUFDLEVBQUUsUUFBTSxDQUFDO0FBQUUsUUFBRSxFQUFFLElBQUksQ0FBQztBQUFFLFFBQUcsQ0FBQyxFQUFFLFFBQU0sQ0FBQztBQUFFLFFBQUUsRUFBRSxTQUFPO0FBQUUsUUFBRyxJQUFFLEdBQUU7QUFBQyxVQUFHLEtBQUcsSUFBRSxLQUFHLEVBQUUsS0FBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUM7QUFBRSxZQUFJLElBQUUsR0FBRyxLQUFLLE1BQUssQ0FBQztBQUFBLElBQUU7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUM3YyxXQUFTLEdBQUcsR0FBRTtBQUFDLFFBQUcsQ0FBQyxRQUFNLENBQUMsS0FBSyxNQUFNLFFBQU87QUFBRSxRQUFHLEtBQUssR0FBRyxRQUFPLEtBQUssTUFBTSxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUFFLFVBQU0sSUFBRSxNQUFNLEVBQUUsTUFBTTtBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FB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T0FBRyxLQUFLLE1BQU0sRUFBRSxFQUFFO0FBQUEsRUFBRTtBQUFDLE1BQUUsR0FBRztBQUNyUCxJQUFFLFFBQU0sU0FBUyxHQUFFO0FBQUMsUUFBSSxJQUFFLEtBQUs7QUFBTSxRQUFHLEtBQUssSUFBSSxVQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsS0FBSyxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUUsS0FBSyxFQUFFLENBQUM7QUFBRSxVQUFJLElBQUU7QUFBTyxXQUFLLE1BQU0sSUFBSSxHQUFFLElBQUUsSUFBSSxFQUFFLENBQUMsR0FBRSxLQUFLLEdBQUcsQ0FBQztBQUFFLFlBQUksS0FBSyxVQUFRLElBQUUsRUFBRSxNQUFNLENBQUM7QUFBRyxRQUFFLEtBQUssQ0FBQztBQUFFLFFBQUUsTUFBSSxLQUFLLElBQUksSUFBSSxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUUsQ0FBQztBQUFFLFVBQU0sSUFBRSxFQUFDLElBQUcsRUFBRSxJQUFHLE1BQUssRUFBRSxNQUFLLFlBQVcsRUFBRSxXQUFVO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxRQUFFLFFBQU0sSUFBRSxFQUFFLENBQUM7QUFBRSxVQUFFLEtBQUssTUFBTSxJQUFJLENBQUM7QUFBRSxZQUFNLElBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFHLENBQUM7QUFBRSxRQUFFLEtBQUcsRUFBRTtBQUFHLFFBQUUsQ0FBQyxJQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUUsUUFBRSxXQUFTO0FBQUcsVUFBRSxFQUFFLFNBQU8sT0FBRyxFQUFFLFFBQU0sS0FBSztBQUFBLElBQUs7QUFBQyxVQUFNLElBQUU7QUFBSyxXQUFPLEtBQUssS0FBRyxRQUFRLElBQUksQ0FBQyxFQUFFLEtBQUssV0FBVTtBQUFDLFFBQUUsS0FDemY7QUFBQSxJQUFFLENBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxTQUFPLFdBQWdCO0FBQUE7QUFBQyxZQUFNLElBQUUsQ0FBQztBQUFFLGlCQUFVLEtBQUssS0FBSyxNQUFNLE9BQU8sRUFBRSxHQUFFLEtBQUssRUFBRSxPQUFPLENBQUM7QUFBRSxZQUFNLFFBQVEsSUFBSSxDQUFDO0FBQUUsV0FBSyxJQUFJLE1BQU07QUFBQSxJQUFDO0FBQUE7QUFBRSxJQUFFLFVBQVEsV0FBVTtBQUFDLFVBQU0sSUFBRSxDQUFDO0FBQUUsZUFBVSxLQUFLLEtBQUssTUFBTSxPQUFPLEVBQUUsR0FBRSxLQUFLLEVBQUUsUUFBUSxDQUFDO0FBQUUsV0FBTyxRQUFRLElBQUksQ0FBQztBQUFBLEVBQUM7QUFDcFAsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxvQkFBSTtBQUFJLFFBQUksSUFBRSxFQUFFLFNBQU8sRUFBRSxTQUFPO0FBQUUsTUFBRSxDQUFDLE1BQUksSUFBRSxDQUFDLENBQUM7QUFBRyxhQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUUsRUFBRSxDQUFDO0FBQUUsUUFBRSxDQUFDLE1BQUksSUFBRSxHQUFFLElBQUUsRUFBRTtBQUFPLFVBQUUsR0FBRyxDQUFDLElBQUUsT0FBTyxPQUFPLENBQUMsR0FBRSxHQUFFLENBQUMsSUFBRTtBQUFFLFVBQUcsS0FBSyxRQUFPO0FBQUMsWUFBSSxJQUFFO0FBQU8sYUFBRyxJQUFFLEVBQUUsWUFBVSxFQUFFLFNBQU8sSUFBRSxJQUFJLEdBQUcsT0FBTyxNQUFJLFdBQVMsR0FBRyxDQUFDLElBQUUsS0FBRyxDQUFDLENBQUM7QUFBRSxZQUFFLElBQUksR0FBRyxHQUFFLENBQUM7QUFBRSxVQUFFLElBQUksR0FBRSxDQUFDO0FBQUEsTUFBQztBQUFDLFdBQUssVUFBUSxFQUFFLElBQUksR0FBRSxJQUFJLEVBQUUsR0FBRSxLQUFLLEdBQUcsQ0FBQztBQUFFLFFBQUUsU0FBTyxLQUFLLEVBQUUsQ0FBQyxJQUFFLEVBQUUsVUFBUSxLQUFLLEVBQUUsQ0FBQyxJQUFFLEdBQUcsR0FBRSxLQUFLLENBQUMsR0FBRSxFQUFFLFdBQVMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxNQUFJLGFBQVcsS0FBSyxFQUFFLENBQUMsSUFBRSxJQUFJLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBRSxFQUFFO0FBQVMsV0FBSyxNQUFNLENBQUMsSUFBRTtBQUFBLElBQUM7QUFBQyxRQUFHLEtBQUssR0FBRTtBQUFDLFVBQ3hmLEVBQUU7QUFBTSxRQUFFLENBQUMsTUFBSSxJQUFFLENBQUMsQ0FBQztBQUFHLGVBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLFNBQU8sR0FBRSxFQUFFLFVBQVEsS0FBSyxFQUFFLENBQUMsSUFBRSxFQUFFLFFBQU8sRUFBRSxPQUFPLElBQUUsTUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFFLEdBQUcsR0FBRSxLQUFLLENBQUMsR0FBRSxFQUFFLFdBQVMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxNQUFJLGFBQVcsS0FBSyxFQUFFLENBQUMsSUFBRSxJQUFJLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBRSxFQUFFO0FBQUEsSUFBUTtBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxFQUFFLE1BQU0sR0FBRztBQUFFLFFBQUksSUFBRTtBQUFFLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLENBQUMsR0FBRSxFQUFFLEVBQUUsU0FBTyxDQUFDLE1BQUksUUFBTSxJQUFFLEVBQUUsVUFBVSxHQUFFLEVBQUUsU0FBTyxDQUFDLE9BQUssRUFBRSxDQUFDLElBQUUsT0FBSSxNQUFJLEVBQUUsR0FBRyxJQUFFO0FBQUcsUUFBRSxFQUFFLFdBQVMsRUFBRSxTQUFPO0FBQUcsV0FBTyxJQUFFLElBQUUsSUFBRSxFQUFFLENBQUM7QUFBQSxFQUFDO0FBQUMsSUFBRSxTQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsV0FBTyxLQUFLLElBQUksR0FBRSxHQUFFLElBQUU7QUFBQSxFQUFDO0FBQzNlLElBQUUsU0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFdBQU8sS0FBSyxPQUFPLENBQUMsRUFBRSxJQUFJLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBRSxJQUFFLFNBQU8sU0FBUyxHQUFFO0FBQUMsT0FBRyxDQUFDLE1BQUksSUFBRSxHQUFHLEdBQUUsS0FBSyxHQUFHO0FBQUcsYUFBUSxLQUFLLEtBQUssTUFBTSxPQUFPLEVBQUUsR0FBRSxPQUFPLEdBQUUsSUFBRTtBQUFFLFFBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFFO0FBQUMsVUFBRyxLQUFLLE9BQUssQ0FBQyxLQUFLLFdBQVcsVUFBUSxLQUFLLEtBQUssSUFBSSxPQUFPLEVBQUUsVUFBUSxLQUFLLEdBQUU7QUFBQyxZQUFFLEVBQUUsQ0FBQztBQUFFLGNBQU0sSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsUUFBUSxDQUFDO0FBQUUsWUFBRSxPQUFLLEVBQUUsU0FBTyxJQUFFLEVBQUUsT0FBTyxHQUFFLENBQUMsSUFBRSxFQUFFLE9BQU8sQ0FBQztBQUFBLE1BQUU7QUFBQyxXQUFLLFNBQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUFFLFdBQUssSUFBSSxPQUFPLENBQUM7QUFBQSxJQUFDO0FBQUMsU0FBSyxTQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUN2YSxJQUFFLFFBQU0sV0FBVTtBQUFDLFVBQU0sSUFBRSxDQUFDO0FBQUUsZUFBVSxLQUFLLEtBQUssTUFBTSxPQUFPLEdBQUU7QUFBQyxZQUFNLElBQUUsRUFBRSxNQUFNO0FBQUUsUUFBRSxRQUFNLEVBQUUsS0FBSyxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUcsS0FBSyxJQUFJLFlBQVUsS0FBSyxLQUFLLElBQUksT0FBTyxFQUFFLEdBQUUsTUFBTTtBQUFFLFNBQUssU0FBTyxLQUFLLE1BQU0sTUFBTTtBQUFFLFNBQUssU0FBTyxLQUFLLE1BQU0sTUFBTTtBQUFFLFdBQU8sRUFBRSxTQUFPLFFBQVEsSUFBSSxDQUFDLElBQUU7QUFBQSxFQUFJO0FBQUUsSUFBRSxVQUFRLFNBQVMsR0FBRTtBQUFDLFdBQU8sS0FBSyxLQUFHLEtBQUssTUFBTSxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFFLEtBQUssSUFBSSxJQUFJLENBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxVQUFRLFdBQVU7QUFBQyxlQUFVLEtBQUssS0FBSyxNQUFNLE9BQU8sRUFBRSxHQUFFLFFBQVE7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUM3YSxJQUFFLE1BQUksU0FBUyxHQUFFO0FBQUMsV0FBTyxLQUFLLEtBQUcsS0FBSyxNQUFNLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxhQUFPLEVBQUUsQ0FBQyxLQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQUs7QUFBQSxJQUFJLENBQUMsSUFBRSxLQUFLLE1BQU0sSUFBSSxDQUFDLEtBQUc7QUFBQSxFQUFJO0FBQUUsSUFBRSxNQUFJLFNBQVMsR0FBRSxHQUFFO0FBQUMsV0FBTyxNQUFJLGFBQVcsSUFBRSxHQUFFLElBQUUsR0FBRyxHQUFFLEtBQUssR0FBRztBQUFHLFNBQUssTUFBTSxJQUFJLEdBQUUsQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFJO0FBQUUsSUFBRSxjQUFZO0FBQUcsSUFBRSxTQUFPO0FBQUcsSUFBRSxTQUFPO0FBQUcsS0FBRyxHQUFHLFNBQVM7QUFBRSxXQUFTLEdBQUcsR0FBRSxJQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQztBQUFFLFVBQUksSUFBRSxPQUFLLElBQUUsTUFBSTtBQUFHLGVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsV0FBUyxNQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRSxDQUFDO0FBQUcsTUFBRSxVQUFRLEVBQUUsS0FBSyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLG9CQUFJO0FBQUssYUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxJQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQztBQUFFLFVBQUksSUFBRSxPQUFLLElBQUUsTUFBSTtBQUFHLGVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxFQUFFLFdBQVMsTUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFFLElBQUUsQ0FBQztBQUFHLE1BQUUsVUFBUSxFQUFFLEtBQUssQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQ3pzQixXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLG9CQUFJO0FBQUssYUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRSxHQUFHLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQztBQUFFLGVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsV0FBUyxTQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRSxDQUFDO0FBQUcsTUFBRSxVQUFRLEVBQUUsS0FBSyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLG9CQUFJO0FBQUssYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUNqVSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLEtBQUcsRUFBRSxnQkFBYztBQUFNLFFBQUksSUFBRSxJQUFFLEVBQUUsTUFBTSxJQUFFO0FBQUUsUUFBRyxDQUFDLEVBQUUsUUFBTyxLQUFLLE9BQU8sR0FBRSxHQUFFLEdBQUUsSUFBRSxDQUFDO0FBQUUsU0FBSSxJQUFFLEdBQUcsSUFBRSxJQUFFLE1BQUksT0FBSyxJQUFFLEtBQUcsTUFBSSxHQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsTUFBSSxFQUFFLE1BQUs7QUFBQyxZQUFNLElBQUU7QUFBSyxhQUFPLEVBQUUsS0FBSyxXQUFVO0FBQUMsZUFBTyxHQUFHLEtBQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLElBQUUsTUFBSyxHQUFFLEdBQUUsSUFBRSxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU8sR0FBRyxLQUFLLE1BQUssR0FBRSxHQUFFLEdBQUUsSUFBRSxJQUFFLE1BQUssR0FBRSxHQUFFLElBQUUsQ0FBQztBQUFBLEVBQUM7QUFDaFQsV0FBUyxHQUFHLEdBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFO0FBQUMsUUFBRyxJQUFFLEtBQUssTUFBTSxRQUFPO0FBQUMsWUFBTSxJQUFFLEtBQUssTUFBTSxDQUFDO0FBQUUsV0FBSSxJQUFFLEtBQUssTUFBTSxJQUFJLENBQUMsRUFBRSxPQUFPLEdBQUUsR0FBRSxHQUFFLElBQUUsQ0FBQyxNQUFJLEVBQUUsTUFBSztBQUFDLGNBQU0sSUFBRTtBQUFLLGVBQU8sRUFBRSxLQUFLLFdBQVU7QUFBQyxpQkFBTyxFQUFFLE9BQU8sR0FBRSxHQUFFLElBQUUsQ0FBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUM7QUFBQyxhQUFPLEtBQUssT0FBTyxHQUFFLEdBQUUsSUFBRSxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUksR0FBRTtBQUFFLFlBQU8sR0FBRTtBQUFBLE1BQUMsS0FBSztBQUFFLFlBQUU7QUFBTSxZQUFFLEdBQUcsS0FBSyxHQUFHO0FBQUUsWUFBRTtBQUFLO0FBQUEsTUFBTSxLQUFLO0FBQUUsWUFBRTtBQUFNLFlBQUUsS0FBSyxPQUFLLEdBQUcsS0FBSyxLQUFJLEtBQUssSUFBSSxJQUFJO0FBQUUsWUFBRTtBQUFLO0FBQUEsTUFBTSxLQUFLO0FBQUUsWUFBRTtBQUFNLFlBQUUsS0FBSyxTQUFPLEdBQUcsS0FBSyxLQUFLO0FBQUUsWUFBRTtBQUFLO0FBQUEsTUFBTTtBQUFRO0FBQUEsSUFBTTtBQUFDLFdBQU8sR0FBRyxLQUFLLE1BQUssR0FBRSxHQUFFLEdBQUUsS0FBRyxNQUFLLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFDdGMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLE1BQU0sR0FBRztBQUFFLE1BQUUsRUFBRSxTQUFPLENBQUMsTUFBSSxVQUFRLEVBQUUsSUFBSTtBQUFFLFVBQU0sSUFBRSxFQUFFLFNBQU8sSUFBRSxFQUFFLENBQUMsSUFBRTtBQUFHLFFBQUUsRUFBRSxTQUFPLElBQUUsRUFBRSxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUUsUUFBRyxLQUFLLFVBQVEsRUFBRSxRQUFPLEtBQUssTUFBTSxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUM7QUFBRSxRQUFHLEdBQUU7QUFBQyxhQUFPLE1BQUksYUFBVyxJQUFFLEtBQUssTUFBTSxDQUFDO0FBQUcsVUFBRyxFQUFFLFFBQU8sS0FBSyxNQUFNLElBQUksQ0FBQyxFQUFFLE9BQU8sR0FBRSxDQUFDO0FBQUUsY0FBTyxHQUFFO0FBQUEsUUFBQyxLQUFLO0FBQU0sZUFBSyxhQUFXO0FBQUcsZUFBSyxNQUFJLEdBQUcs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LENBQUMsR0FBRTtBQUFFLGlCQUFPLEVBQUUsQ0FBQztBQUFFLGNBQUcsRUFBRSxRQUFPO0FBQUUsY0FBRTtBQUFBLFFBQUMsT0FBSztBQUFDLGNBQUcsRUFBRSxRQUFPO0FBQUU7QUFBQSxRQUFHO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQSxRQUFNLFVBQVEsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFFLEVBQUUsQ0FBQyxHQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUUsQ0FBQyxJQUFFLE1BQUksRUFBRSxPQUFPLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFFLE1BQU0sS0FBRyxFQUFDLFFBQU8sRUFBQyxZQUFXLEVBQUMsR0FBRSxhQUFZLEVBQUMsWUFBVyxHQUFFLFlBQVcsTUFBRyxTQUFRLEVBQUMsT0FBTSxHQUFFLFlBQVcsRUFBQyxFQUFDLEdBQUUsT0FBTSxFQUFDLFVBQVMsVUFBUyxHQUFFLE9BQU0sRUFBQyxZQUFXLEdBQUUsU0FBUSxFQUFDLE9BQU0sR0FBRSxZQUFXLEVBQUMsRUFBQyxFQUFDO0FBQUUsSUFBRSxVQUFVLE1BQUksU0FBUyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBRyxNQUFJLEtBQUcsTUFBSSxJQUFHO0FBQUMsVUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxRQUFPLEtBQUssT0FBTyxHQUFFLENBQUM7QUFBRSxVQUFFLEtBQUs7QUFBTSxVQUFFLEtBQUssUUFBUSxPQUFPLEdBQUUsQ0FBQyxDQUFDO0FBQUUsWUFBTSxJQUFFLEVBQUU7QUFBTyxVQUFHLEdBQUU7QUFBQyxjQUFNLElBQUUsRUFBRSxHQUFFLElBQUUsRUFBRSxHQUFFLElBQUUsS0FBSztBQUFXLGlCQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsS0FBSTtBQUFDLGNBQUksSUFBRSxFQUFFLEtBQUssTUFBSSxJQUFFLElBQUUsSUFBRSxDQUFDO0FBQUUsY0FBSSxJQUFFLEVBQUU7QUFBTyxjQUFHLE1BQUksS0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFHO0FBQUMsZ0JBQUksSUFBRSxLQUFLLFFBQU0sS0FBSyxNQUFNLEdBQUUsR0FBRSxHQUFFLE1BQUssQ0FBQyxJQUFFLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFO0FBQUcsb0JBQU8sS0FBSyxVQUFTO0FBQUEsY0FBQyxLQUFLO0FBQVcsa0JBQUUsTUFBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxvQkFBRyxJQUFFLEdBQUU7QUFBQywyQkFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLElBQUUsR0FBRSxJQUFJLEtBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxJQUFFLEVBQUUsT0FBTyxJQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsVUFBVSxHQUFFLENBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxVQUFVLElBQy8vQixDQUFDLEdBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxFQUFFLE1BQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRSxJQUFFLEdBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFLG9CQUFFLE1BQUssR0FBRSxFQUFFLFVBQVUsR0FBRSxFQUFFLFNBQU8sQ0FBQyxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsZ0JBQUM7QUFBQztBQUFBLGNBQU0sS0FBSztBQUFPLG9CQUFHLElBQUUsR0FBRTtBQUFDLDJCQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxJQUFJLE1BQUksSUFBRSxHQUFFLElBQUUsR0FBRSxLQUFJO0FBQUMsd0JBQUUsRUFBRSxVQUFVLEdBQUUsQ0FBQztBQUFFLHdCQUFFLEtBQUssTUFBSSxJQUFFLElBQUUsSUFBRTtBQUFFLHdCQUFJLElBQUUsS0FBSyxRQUFNLEtBQUssTUFBTSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsSUFBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFLHNCQUFFLE1BQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsa0JBQUM7QUFBQztBQUFBLGdCQUFLO0FBQUEsY0FBQyxLQUFLO0FBQUEsY0FBZ0IsS0FBSztBQUFVLG9CQUFHLElBQUUsR0FBRTtBQUFDLHVCQUFJLElBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxLQUFJO0FBQUMsd0JBQUUsRUFBRSxLQUFLLE1BQUksSUFBRSxJQUFFLElBQUUsQ0FBQyxJQUFFO0FBQUUsd0JBQUksSUFBRSxLQUFLLFFBQU0sS0FBSyxNQUFNLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxJQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUUsc0JBQUUsTUFBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxrQkFBQztBQUFDLHNCQUFFO0FBQUEsZ0JBQUU7QUFBQSxjQUFDLEtBQUs7QUFBVSxvQkFBRyxJQUFFLEdBQUU7QUFBQyx1QkFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUksTUFBRyxFQUFFLEtBQUssTUFBSSxJQUFFLElBQUUsSUFBRSxDQUFDLEdBQUU7QUFBQSxvQkFBRTtBQUFBLG9CQUN0ZjtBQUFBLG9CQUFFO0FBQUEsb0JBQUU7QUFBQSxvQkFBRTtBQUFBLG9CQUFFO0FBQUEsa0JBQUM7QUFBRTtBQUFBLGdCQUFLO0FBQUEsY0FBQztBQUFRLG9CQUFHLEVBQUUsTUFBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsR0FBRSxLQUFHLElBQUUsS0FBRyxJQUFFLElBQUUsRUFBRSxNQUFJLElBQUUsS0FBSyxHQUFFLElBQUUsR0FBRSxJQUFFLEtBQUssSUFBSSxJQUFFLEdBQUUsS0FBSyxNQUFJLElBQUUsSUFBRSxJQUFFLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLEtBQUk7QUFBQyxzQkFBRSxFQUFFLEtBQUssTUFBSSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsQ0FBQztBQUFFLHNCQUFFLEtBQUssaUJBQWUsSUFBRTtBQUFFLHdCQUFNLElBQUUsS0FBSyxRQUFNLEtBQUssTUFBTSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsQ0FBQyxJQUFFLEdBQUcsS0FBRyxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUcsR0FBRSxHQUFFLElBQUUsR0FBRSxJQUFFLENBQUM7QUFBRSxvQkFBRSxNQUFLLEdBQUUsSUFBRSxJQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxJQUFFLENBQUM7QUFBQSxnQkFBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUEsUUFBQztBQUFDLGFBQUssY0FBWSxLQUFLLElBQUksSUFBSSxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxTQUFLLE9BQUssS0FBSyxZQUFZLEtBQUssSUFBRSxFQUFDLEtBQUksRUFBQyxJQUFFLEVBQUMsS0FBSSxFQUFDLENBQUMsR0FBRSxLQUFLLEtBQUcsR0FBRyxJQUFJO0FBQUcsV0FBTztBQUFBLEVBQUk7QUFDelksV0FBUyxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLEdBQUU7QUFBRSxRQUFHLEVBQUUsSUFBRSxFQUFFLENBQUMsTUFBSSxLQUFHLENBQUMsRUFBRSxDQUFDLEdBQUU7QUFBQyxXQUFHLElBQUUsTUFBSSxFQUFFLENBQUMsSUFBRSxFQUFFLElBQUcsRUFBRSxDQUFDLElBQUUsR0FBRSxJQUFFLEVBQUUsTUFBSyxJQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUcsSUFBRSxJQUFFLEVBQUUsSUFBSSxHQUFFLElBQUUsRUFBRSxXQUFTLElBQUksRUFBRSxFQUFFLFFBQVEsSUFBRSxvQkFBSSxLQUFHLE1BQUksSUFBRSxFQUFFLEtBQUksRUFBRSxDQUFDLElBQUU7QUFBRyxPQUFDLElBQUUsRUFBRSxJQUFJLENBQUMsS0FBRyxJQUFFLElBQUUsRUFBRSxJQUFJLEdBQUUsSUFBRSxJQUFFLENBQUMsQ0FBQztBQUFFLFVBQUc7QUFBRSxpQkFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLE1BQUksSUFBRSxFQUFFLENBQUMsTUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFFO0FBQUMsY0FBRyxLQUFHLEVBQUU7QUFBTyxZQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRSxDQUFDO0FBQUUsWUFBRSxlQUFhLElBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFFLENBQUM7QUFBRTtBQUFBLFFBQUs7QUFBQTtBQUFDLFVBQUUsRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsQ0FBQztBQUFHLFFBQUUsS0FBSyxDQUFDO0FBQUUsVUFBRyxFQUFFLFdBQVMsU0FBRyxNQUFHLEdBQUU7QUFBQyxZQUFFLElBQUksR0FBRyxDQUFDO0FBQUUsWUFBRyxFQUFFLFdBQVcsVUFBUSxLQUFLLEVBQUUsSUFBSSxPQUFPLEVBQUUsR0FBRSxTQUFTLENBQUMsTUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFDOWY7QUFBRyxVQUFFLENBQUMsSUFBRSxJQUFFO0FBQUEsTUFBQztBQUFDLFFBQUUsZ0JBQWMsSUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUcsRUFBRSxLQUFLLENBQUMsSUFBRSxFQUFFLElBQUksSUFBSSxHQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUEsSUFBRTtBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsV0FBTyxLQUFHLElBQUUsSUFBRSxLQUFHLEtBQUcsTUFBSSxJQUFFLEtBQUcsS0FBRyxNQUFJLElBQUUsTUFBSSxLQUFHLEtBQUcsT0FBSyxLQUFHLEtBQUcsTUFBSSxJQUFFLElBQUU7QUFBQSxFQUFDO0FBQUUsSUFBRSxVQUFVLFNBQU8sU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUksS0FBRyxPQUFPLE1BQUksV0FBUyxPQUFPLE1BQUksYUFBVyxJQUFFLEdBQUUsSUFBRSxNQUFJLElBQUUsR0FBRSxJQUFFO0FBQUssUUFBRyxLQUFHLEVBQUUsTUFBTSxRQUFPLEVBQUUsUUFBTSxPQUFHLElBQUUsS0FBSyxZQUFZLEdBQUUsR0FBRSxDQUFDLEdBQUUsRUFBRSxRQUFNLE1BQUc7QUFBRSxRQUFJLElBQUUsQ0FB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LEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxRQUFPLElBQUU7QUFBRSxRQUFHLElBQUUsRUFBRSxLQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLGFBQVUsTUFBSSxFQUFFLFFBQU8sSUFBRSxHQUFHLEtBQUssTUFBSyxFQUFFLENBQUMsR0FBRSxHQUFFLENBQUMsSUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUUsSUFBSTtBQUFFLFdBQU8sSUFBRSxJQUFFLElBQUksRUFBRSxHQUFFLElBQUk7QUFBQSxFQUFDO0FBQzdWLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBRSxHQUFHLE1BQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFLFdBQU8sS0FBSyxLQUFHLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxhQUFPLElBQUUsS0FBRyxDQUFDLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFBLElBQUMsQ0FBQyxJQUFFLEtBQUcsRUFBRSxTQUFPLElBQUUsR0FBRyxLQUFLLE1BQUssR0FBRSxHQUFFLENBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJLElBQUUsSUFBRSxDQUFDLElBQUUsSUFBSSxFQUFFLENBQUMsR0FBRSxJQUFJO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLENBQUM7QUFBRSxRQUFHLEtBQUcsRUFBRSxRQUFPO0FBQUMsVUFBRyxFQUFFLFVBQVEsR0FBRTtBQUFDLFVBQUUsS0FBSyxDQUFDO0FBQUU7QUFBQSxNQUFNO0FBQUMsZUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRSxDQUFDLElBQUU7QUFBRSxVQUFHLEVBQUUsUUFBTztBQUFDLFVBQUUsS0FBSyxDQUFDO0FBQUU7QUFBQSxNQUFNO0FBQUEsSUFBQztBQUFDLFFBQUcsQ0FBQyxFQUFFLFFBQU87QUFBQSxFQUFDO0FBQzVWLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJO0FBQUUsVUFBSSxJQUFFLEVBQUUsaUJBQWUsSUFBRSxPQUFLLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRTtBQUFHLFFBQUcsRUFBRSxHQUFHLFFBQU8sRUFBRSxHQUFHLElBQUksR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFLFFBQUUsS0FBRyxJQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBSSxFQUFFLElBQUksQ0FBQyxJQUFFLEVBQUUsSUFBSSxJQUFJLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFFLFdBQVMsRUFBRSxHQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsUUFBTSxLQUFLLGdCQUFjLEVBQUUsUUFBTyxJQUFJLEVBQUUsQ0FBQztBQUFFLFFBQUcsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLENBQUMsSUFBRSxJQUFFLEVBQUU7QUFBTyxZQUFJLElBQUUsT0FBTyxPQUFPLENBQUMsR0FBRSxHQUFHLENBQUMsR0FBRSxDQUFDO0FBQUEsSUFBRSxNQUFNLEtBQUUsQ0FBQztBQUFFLFFBQUUsRUFBRTtBQUFRLFVBQU0sSUFBRSxNQUFJLE9BQUcsRUFBQyxPQUFNLEVBQUMsSUFBRSxLQUFHLENBQUMsR0FBRSxJQUFFLEVBQUUsRUFBRSxPQUFPLElBQUUsR0FBRyxFQUFFLE9BQU8sSUFBRSxFQUFFLFVBQVEsRUFBRSxXQUFTLENBQUM7QUFBRSxTQUFLLFVBQVEsRUFBRSxTQUFPLElBQUUsT0FBTyxNQUFJLFdBQVMsSUFBSSxHQUFHLENBQUMsSUFBRSxFQUFDLFFBQU8sRUFBQztBQUFFLFNBQUssYUFBVyxFQUFFLGNBQVk7QUFBRSxTQUFLLFdBQVMsS0FBRyxJQUFFLEVBQUUsYUFBVyxNQUFJLGFBQVcsTUFBSSxXQUFTLEtBQUc7QUFBUyxTQUFLLFFBQU0s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RSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUU7QUFBQyxRQUFJLEdBQUU7QUFBRSxZQUFPLEdBQUU7QUFBQSxNQUFDLEtBQUs7QUFBRSxZQUFFO0FBQU0sWUFBRSxHQUFHLEtBQUssR0FBRztBQUFFO0FBQUEsTUFBTSxLQUFLO0FBQUUsWUFBRTtBQUFNLFlBQUU7QUFBSztBQUFBLE1BQU0sS0FBSztBQUFFLFlBQUU7QUFBTSxZQUFFLEdBQUcsS0FBSyxLQUFJLEtBQUssSUFBSSxJQUFJO0FBQUU7QUFBQSxNQUFNLEtBQUs7QUFBRSxZQUFFO0FBQU0sWUFBRSxHQUFHLEtBQUssS0FBSSxLQUFLLElBQUksSUFBSTtBQUFFO0FBQUEsTUFBTTtBQUFRO0FBQUEsSUFBTTtBQUFDLFdBQU8sR0FBRyxLQUFLLE1BQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQzdYLElBQUUsU0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFFBQUcsRUFBRSxTQUFPLE9BQU8sTUFBSSxhQUFXLElBQUUsS0FBSyxNQUFNLENBQUMsSUFBRyxJQUFFLEVBQUUsTUFBTSxHQUFHLEdBQUUsRUFBRSxFQUFFLFNBQU8sQ0FBQyxNQUFJLFVBQVEsRUFBRSxJQUFJLEdBQUUsRUFBRSxXQUFTLEtBQUcsRUFBRSxNQUFNLEdBQUUsSUFBRSxFQUFFLFNBQU8sSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRSxHQUFFO0FBQUEsTUFBQyxLQUFLO0FBQU0sYUFBSyxhQUFXO0FBQUcsYUFBSyxNQUFJLEdBQUcsR0FBRSxLQUFLLEdBQUc7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFNLGFBQUssTUFBSSxHQUFHLEdBQUUsS0FBSyxHQUFHO0FBQUU7QUFBQSxNQUFNLEtBQUs7QUFBTSxhQUFLLE1BQUksR0FBRyxHQUFFLEtBQUssR0FBRztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQ25ULElBQUUsWUFBVSxTQUFTLElBQUUsTUFBRztBQUFDLFFBQUksSUFBRSxJQUFHLElBQUUsSUFBRyxJQUFFO0FBQUcsUUFBRyxL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QUFVO0FBQUMsVUFBRSxNQUFNO0FBQUEsTUFBQztBQUFBLElBQUMsQ0FBQztBQUFBLEVBQUM7QUFDeGYsSUFBRSxRQUFNLFdBQVU7QUFBQyxTQUFLLE1BQUksS0FBSyxHQUFHLE1BQU07QUFBRSxTQUFLLEtBQUc7QUFBQSxFQUFJO0FBQUUsSUFBRSxVQUFRLFdBQVU7QUFBQyxVQUFNLElBQUUsR0FBRyxlQUFlLEtBQUssRUFBRTtBQUFFLFdBQU8sRUFBRSxDQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsUUFBTSxXQUFVO0FBQUMsVUFBTSxJQUFFLENBQUM7QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRyxRQUFPLEtBQUk7QUFBQyxVQUFFLEdBQUcsQ0FBQztBQUFFLGVBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxHQUFHLEtBQUssRUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsS0FBSyxLQUFHLE1BQUksUUFBTSxJQUFFLE1BQUksSUFBRSxLQUFHLEdBQUc7QUFBQSxJQUFDO0FBQUMsVUFBTSxJQUFFLEtBQUssR0FBRyxZQUFZLEdBQUUsV0FBVztBQUFFLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksR0FBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUFFLFdBQU8sRUFBRSxDQUFDO0FBQUEsRUFBQztBQUM3WSxJQUFFLE1BQUksU0FBUyxHQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLE1BQUcsSUFBRSxPQUFHO0FBQUMsUUFBRSxLQUFLLEdBQUcsYUFBYSxJQUFFLFFBQU0sVUFBUSxLQUFLLFFBQU0sTUFBSSxLQUFLLFFBQU0sS0FBSSxVQUFVLEVBQUUsYUFBYSxJQUFFLFFBQU0sVUFBUSxLQUFLLFFBQU0sTUFBSSxLQUFLLFFBQU0sR0FBRyxFQUFFLElBQUksSUFBRSxJQUFFLE1BQUksSUFBRSxDQUFDO0FBQUUsVUFBTSxJQUFFO0FBQUssV0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLFVBQUksSUFBRSxDQUFDO0FBQUUsVUFBRyxDQUFDLEtBQUcsQ0FBQyxFQUFFLE9BQU8sUUFBTztBQUFFLFVBQUcsR0FBRTtBQUFDLFlBQUcsQ0FBQyxLQUFHLENBQUMsS0FBRyxFQUFFLFdBQVMsRUFBRSxRQUFPLEVBQUUsQ0FBQztBQUFFLGlCQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksTUFBSSxJQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsUUFBTztBQUFDLGNBQUcsS0FBRyxFQUFFLFFBQU87QUFBQyxpQkFBRyxFQUFFO0FBQU87QUFBQSxVQUFRO0FBQUMsZ0JBQU0sSUFBRSxJQUFFLElBQUUsS0FBSyxJQUFJLEVBQUUsU0FBTyxHQUFFLENBQUMsSUFBRSxFQUFFO0FBQU8sbUJBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFJLEdBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUFFLGNBQUU7QUFBRSxjQUFHLEVBQUUsV0FBUyxFQUFFO0FBQUEsUUFBSztBQUFDLGVBQU8sSUFDbGdCLEVBQUUsT0FBTyxDQUFDLElBQUU7QUFBQSxNQUFDO0FBQUMsYUFBTztBQUFBLElBQUMsQ0FBQztBQUFBLEVBQUM7QUFBRSxJQUFFLE1BQUksU0FBUyxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxPQUFHO0FBQUMsUUFBRSxLQUFLLEdBQUcsWUFBWSxTQUFPLEtBQUssUUFBTSxNQUFJLEtBQUssUUFBTSxLQUFJLFVBQVUsRUFBRSxZQUFZLFNBQU8sS0FBSyxRQUFNLE1BQUksS0FBSyxRQUFNLEdBQUcsRUFBRSxJQUFJLENBQUM7QUFBRSxVQUFNLElBQUU7QUFBSyxXQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsVUFBRyxDQUFDLEtBQUcsQ0FBQyxFQUFFLFVBQVEsS0FBRyxFQUFFLE9BQU8sUUFBTSxDQUFDO0FBQUUsVUFBRyxDQUFDLEtBQUcsQ0FBQyxFQUFFLFFBQU87QUFBRSxVQUFFLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQztBQUFFLGFBQU8sSUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFFO0FBQUEsSUFBQyxDQUFDO0FBQUEsRUFBQztBQUN0VSxJQUFFLFNBQU8sU0FBUyxHQUFFO0FBQUMsV0FBTyxNQUFJLGFBQVcsSUFBRSxDQUFDLENBQUM7QUFBRyxVQUFNLElBQUUsS0FBSyxHQUFHLFlBQVksT0FBTSxVQUFVLEVBQUUsWUFBWSxLQUFLLEdBQUUsSUFBRSxDQUFDO0FBQUUsYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLENBQUMsSUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUUsV0FBTyxRQUFRLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsZUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLENBQUMsSUFBRSxFQUFDLElBQUcsRUFBRSxDQUFDLEdBQUUsS0FBSSxFQUFFLENBQUMsSUFBRSxLQUFLLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBRSxLQUFJO0FBQUUsYUFBTztBQUFBLElBQUMsQ0FBQztBQUFBLEVBQUM7QUFBRSxJQUFFLE1BQUksU0FBUyxHQUFFO0FBQUMsUUFBRSxLQUFLLEdBQUcsWUFBWSxPQUFNLFVBQVUsRUFBRSxZQUFZLEtBQUssRUFBRSxPQUFPLENBQUM7QUFBRSxXQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsYUFBTSxDQUFDLENBQUM7QUFBQSxJQUFDLENBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxTQUFPO0FBQUssSUFBRSxPQUFLLFdBQVU7QUFBQSxFQUFDO0FBQ3BjLElBQUUsY0FBWSxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBRyxNQUFJLFFBQU0sS0FBSyxRQUFNLE1BQUksS0FBSyxRQUFNLEtBQUc7QUFBRyxRQUFJLElBQUUsS0FBSyxFQUFFLElBQUUsTUFBSSxDQUFDO0FBQUUsUUFBRyxFQUFFLFFBQU8sRUFBRSxLQUFLLE1BQUssQ0FBQztBQUFFLFFBQUksSUFBRSxL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RTtBQUFDLHFCQUFVLEtBQUssRUFBRSxPQUFNO0FBQUMsa0JBQU0sSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQztBQUFFLGNBQUUsSUFBSSxPQUFPLE1BQUksV0FBUyxLQUFLLFVBQVUsQ0FBQyxJQUFFLEdBQUUsQ0FBQztBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQyxJQUFFLEVBQUUsV0FBUSxNQUFNLEtBQUssWUFBWSxPQUFNLGFBQVksU0FBUyxHQUFFO0FBQUMsbUJBQVUsS0FBSyxFQUFFLElBQUksS0FBSyxFQUFFLEdBQUUsSUFBSSxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUMsSUFBRSxFQUFFLFFBQUssTUFBTSxLQUFLLFlBQVksT0FBTSxhQUFZLFNBQVMsR0FBRTtBQUFDLG1CQUFVLEtBQUssRUFBRSxLQUFJO0FBQUMsZ0JBQU0sSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQztBQUFFLFlBQUUsV0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLFlBQVUsV0FBVTtBQUFDLGdCQUFJLElBQUUsS0FBSztBQUFPLGdCQUFFLEtBQUcsRUFBRSxTQUFPLEVBQUUsT0FBTyxDQUFDLElBQUU7QUFBRSxjQUFFLElBQUksR0FBRSxDQUFDO0FBQUEsVUFBQztBQUFBLFFBQUU7QUFBQSxNQUFDLENBQUMsSUFBRSxFQUFFLElBQUksTUFBTSxHQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUUsRUFBRSxPQUFLLEVBQUUsSUFBSSxNQUFNLEdBQUUsRUFBRSxTQUFPLEVBQUUsTUFBTSxNQUFNLEdBQUUsRUFBRSxZQUM3ZSxFQUFFLElBQUksTUFBTTtBQUFBLElBQUU7QUFBQTtBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxFQUFFO0FBQU0sUUFBSSxHQUFFLElBQUU7QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxVQUFHLElBQUUsSUFBRSxJQUFFLEVBQUUsQ0FBQyxHQUFFO0FBQUMsaUJBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUUsS0FBRyxFQUFFLEtBQUcsSUFBRSxHQUFFLEVBQUUsU0FBTyxFQUFFLEdBQUUsT0FBTyxHQUFFLENBQUM7QUFBQSxhQUFNO0FBQUMsWUFBRSxDQUFDLElBQUUsQ0FBQztBQUFFO0FBQUEsUUFBSztBQUFDLGFBQUcsRUFBRTtBQUFBLE1BQU07QUFBQyxVQUFHLEVBQUU7QUFBQSxJQUFLO0FBQUMsUUFBRSxLQUFHLEVBQUUsT0FBTyxDQUFDLElBQUUsRUFBRSxPQUFPO0FBQUUsTUFBRSxTQUFTO0FBQUEsRUFBQztBQUN6UixJQUFFLFNBQU8sU0FBUyxHQUFFO0FBQUMsV0FBTyxNQUFJLGFBQVcsSUFBRSxDQUFDLENBQUM7QUFBRyxXQUFPLFFBQVEsSUFBSSxDQUFDLEtBQUssWUFBWSxPQUFNLGFBQVksU0FBUyxHQUFFO0FBQUMsUUFBRSxXQUFXLEVBQUUsWUFBVSxXQUFVO0FBQUMsY0FBTSxJQUFFLEtBQUs7QUFBTyxhQUFHLEdBQUcsR0FBRSxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUMsQ0FBQyxHQUFFLEtBQUssWUFBWSxPQUFNLGFBQVksU0FBUyxHQUFFO0FBQUMsUUFBRSxXQUFXLEVBQUUsWUFBVSxXQUFVO0FBQUMsY0FBTSxJQUFFLEtBQUs7QUFBTyxhQUFHLEdBQUcsR0FBRSxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUMsQ0FBQyxHQUFFLEtBQUssWUFBWSxPQUFNLGFBQVksU0FBUyxHQUFFO0FBQUMsUUFBRSxXQUFXLEVBQUUsWUFBVSxXQUFVO0FBQUMsY0FBTSxJQUFFLEtBQUs7QUFBTyxhQUFHLEdBQUcsR0FBRSxHQUFFLElBQUU7QUFBQSxNQUFDO0FBQUEsSUFBQyxDQUFDLEdBQUUsS0FBSyxZQUFZLE9BQU0sYUFBWSxTQUFTLEdBQUU7QUFBQyxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUFBLElBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUFDO0FBQ3BnQixXQUFTLEVBQUUsR0FBRSxHQUFFO0FBQUMsV0FBTyxJQUFJLFFBQVEsQ0FBQyxHQUFFLE1BQUk7QUFBQyxRQUFFLFlBQVUsRUFBRSxhQUFXLFdBQVU7QUFBQyxhQUFHLEVBQUUsS0FBSyxNQUFNO0FBQUUsWUFBRTtBQUFLLFVBQUUsS0FBSyxNQUFNO0FBQUEsTUFBQztBQUFFLFFBQUUsVUFBUSxFQUFFLFlBQVU7QUFBRSxVQUFFO0FBQUEsSUFBSSxDQUFDO0FBQUEsRUFBQztBQUFFLE1BQU8sdUNBQVEsRUFBQyxPQUFNLEdBQUUsU0FBUSxJQUFHLFNBQVEsSUFBRyxVQUFTLElBQUcsUUFBTyxJQUFHLFVBQVMsR0FBRSxXQUFVLElBQUcsVUFBUyxDQUFDLEVBQUM7OztBQ3pGalEsR0FBQyxXQUFZO0FBRVg7QUFHQSxVQUFNLFFBQVEsSUFBSSxxQ0FBTSxTQUFTO0FBQUEsTUFDL0IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLFFBQ1IsSUFBSTtBQUFBLFFBQ0osT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDRSxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE9BQVE7QUFBQSxZQUNSLFVBQVU7QUFBQSxZQUNWLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0EsT0FBTyxDQUFDLFNBQVEsV0FBVSxRQUFPLFdBQVc7QUFBQSxNQUM5QztBQUFBLElBQ0YsQ0FBQztBQUVELGFBQVMsWUFBWSxPQUFPO0FBQzFCLFlBQU0sV0FBVyxTQUFTLGNBQWMsVUFBVSxFQUFFO0FBQ3BELFlBQU0sV0FBVyxTQUFTLHVCQUF1QjtBQUVqRCxZQUFNLFVBQVUsU0FBUyxjQUFjLGlCQUFpQjtBQUN4RCxjQUFRLGNBQWM7QUFFdEIsWUFBTSxjQUFjLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFHdkMsVUFBSyxnQkFBZ0IsS0FBTyxNQUFNLFVBQVUsSUFBSztBQUUvQyxpQkFBUyxjQUFjLG9CQUFvQixFQUFFLFVBQVUsSUFBSSxRQUFRO0FBRW5FLGlCQUFTLGNBQWMsbUJBQW1CLEVBQUUsVUFBVSxPQUFPLFFBQVE7QUFBQSxNQUN2RSxXQUFZLGdCQUFnQixLQUFPLE1BQU0sVUFBVSxJQUFLO0FBRXRELGlCQUFTLGNBQWMsbUJBQW1CLEVBQUUsVUFBVSxJQUFJLFFBQVE7QUFFbEUsY0FBTSxpQkFBaUIsU0FBUyxjQUFjLG1CQUFtQjtBQUNqRSx1QkFBZSxZQUFZLE1BQU07QUFDakMsaUJBQVMsY0FBYyxvQkFBb0IsRUFBRSxVQUFVLE9BQU8sUUFBUTtBQUFBLE1BQ3hFLE9BQU87QUFFTCxpQkFBUyxjQUFjLG1CQUFtQixFQUFFLFVBQVUsSUFBSSxRQUFRO0FBQ2xFLGlCQUFTLGNBQWMsb0JBQW9CLEVBQUUsVUFBVSxJQUFJLFFBQVE7QUFBQSxNQUNyRTtBQUVBLGlCQUFXLE1BQU0sT0FBTztBQUN0QixjQUFNLE9BQU8sTUFBTSxFQUFFO0FBQ3JCLGNBQU0sU0FBUyxTQUFTLFVBQVUsSUFBSTtBQUN0QyxjQUFNLElBQUksT0FBTyxjQUFjLEdBQUc7QUFDbEMsY0FBTSxPQUFPLE9BQU8sY0FBYyxNQUFNO0FBQ3hDLGNBQU0sVUFBVSxPQUFPLGNBQWMsVUFBVTtBQUMvQyxVQUFFLFlBQVksS0FBSztBQUNuQixVQUFFLE9BQU8sS0FBSztBQUNkLGFBQUssWUFBWSxLQUFLO0FBQ3RCLGdCQUFRLFlBQVksS0FBSztBQUN6QixpQkFBUyxZQUFZLE1BQU07QUFBQSxNQUM3QjtBQUVBLGNBQVEsWUFBWSxRQUFRO0FBQUEsSUFDOUI7QUFFQSxhQUFTLFdBQVc7QUFDbEIsWUFBTUEsU0FBUSxTQUFTLGNBQWMsY0FBYyxFQUFFLE1BQU0sS0FBSztBQUNoRSxZQUFNLFFBQVE7QUFDZCxZQUFNLFVBQVUsTUFBTSxPQUFPO0FBQUEsUUFDM0IsT0FBT0E7QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSO0FBQUEsTUFDRixDQUFDO0FBQ0QsWUFBTSxRQUFRLENBQUM7QUFFZixjQUFRLFFBQVEsU0FBVSxRQUFRO0FBQ2hDLGVBQU8sT0FBTyxRQUFRLFNBQVUsR0FBRztBQUNqQyxnQkFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFO0FBQUEsUUFDbEIsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUVELGtCQUFZLEtBQUs7QUFBQSxJQUNuQjtBQUVBLGFBQVMsV0FBVztBQUNsQixZQUFNLGFBQWEsU0FBUyxjQUFjLGNBQWM7QUFDeEQsaUJBQVcsaUJBQWlCLFVBQVUsU0FBVSxHQUFHO0FBQ2pELFVBQUUsZUFBZTtBQUNqQixpQkFBUztBQUFBLE1BQ1gsQ0FBQztBQUNELGlCQUFXLGlCQUFpQixTQUFTLFdBQVk7QUFDL0MsaUJBQVM7QUFBQSxNQUNYLENBQUM7QUFDRCxlQUFTLGNBQWMsaUJBQWlCLEVBQUUsVUFBVSxJQUFJLFFBQVE7QUFDaEUsZUFBUyxjQUFjLGVBQWUsRUFBRSxVQUFVLE9BQU8sUUFBUTtBQUNqRSxlQUFTLGNBQWMsY0FBYyxFQUFFLE1BQU07QUFBQSxJQUMvQztBQUVBLGFBQVMsYUFBYTtBQUNwQixlQUFTLGNBQWMsaUJBQWlCLEVBQUUsVUFBVSxPQUFPLFFBQVE7QUFDbkUsWUFBTSxvQkFBb0IsRUFDdkIsS0FBSyxTQUFVLFVBQVU7QUFDeEIsZUFBTyxTQUFTLEtBQUs7QUFBQSxNQUN2QixDQUFDLEVBQ0EsS0FBSyxTQUFVLE1BQU07QUFDcEIsYUFBSyxRQUFRLFNBQVUsTUFBTTtBQUMzQixnQkFBTSxJQUFJLElBQUk7QUFBQSxRQUNoQixDQUFDO0FBQUEsTUFDSCxDQUFDO0FBQUEsSUFDTDtBQUVBLGVBQVc7QUFDWCxhQUFTO0FBQUEsRUFDWCxHQUFHOyIsCiAgIm5hbWVzIjogWyJxdWVyeSJdCn0K
