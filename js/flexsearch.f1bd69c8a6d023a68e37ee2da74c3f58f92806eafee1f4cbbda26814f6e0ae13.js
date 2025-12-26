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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2ZsZXhzZWFyY2gvZGlzdC9mbGV4c2VhcmNoLmJ1bmRsZS5tb2R1bGUubWluLmpzIiwgIjxzdGRpbj4iXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiFcclxuICogRmxleFNlYXJjaC5qcyB2MC44LjIwNSAoQnVuZGxlL01vZHVsZSlcclxuICogQXV0aG9yIGFuZCBDb3B5cmlnaHQ6IFRob21hcyBXaWxrZXJsaW5nXHJcbiAqIExpY2VuY2U6IEFwYWNoZS0yLjBcclxuICogSG9zdGVkIGJ5IE5leHRhcHBzIEdtYkhcclxuICogaHR0cHM6Ly9naXRodWIuY29tL25leHRhcHBzLWRlL2ZsZXhzZWFyY2hcclxuICovXG52YXIgdztmdW5jdGlvbiBIKGEsYyxiKXtjb25zdCBlPXR5cGVvZiBiLGQ9dHlwZW9mIGE7aWYoZSE9PVwidW5kZWZpbmVkXCIpe2lmKGQhPT1cInVuZGVmaW5lZFwiKXtpZihiKXtpZihkPT09XCJmdW5jdGlvblwiJiZlPT09ZClyZXR1cm4gZnVuY3Rpb24oaCl7cmV0dXJuIGEoYihoKSl9O2M9YS5jb25zdHJ1Y3RvcjtpZihjPT09Yi5jb25zdHJ1Y3Rvcil7aWYoYz09PUFycmF5KXJldHVybiBiLmNvbmNhdChhKTtpZihjPT09TWFwKXt2YXIgZj1uZXcgTWFwKGIpO2Zvcih2YXIgZyBvZiBhKWYuc2V0KGdbMF0sZ1sxXSk7cmV0dXJuIGZ9aWYoYz09PVNldCl7Zz1uZXcgU2V0KGIpO2ZvcihmIG9mIGEudmFsdWVzKCkpZy5hZGQoZik7cmV0dXJuIGd9fX1yZXR1cm4gYX1yZXR1cm4gYn1yZXR1cm4gZD09PVwidW5kZWZpbmVkXCI/YzphfWZ1bmN0aW9uIGFhKGEsYyl7cmV0dXJuIHR5cGVvZiBhPT09XCJ1bmRlZmluZWRcIj9jOmF9ZnVuY3Rpb24gSSgpe3JldHVybiBPYmplY3QuY3JlYXRlKG51bGwpfVxuZnVuY3Rpb24gTShhKXtyZXR1cm4gdHlwZW9mIGE9PT1cInN0cmluZ1wifWZ1bmN0aW9uIGJhKGEpe3JldHVybiB0eXBlb2YgYT09PVwib2JqZWN0XCJ9ZnVuY3Rpb24gY2EoYSxjKXtpZihNKGMpKWE9YVtjXTtlbHNlIGZvcihsZXQgYj0wO2EmJmI8Yy5sZW5ndGg7YisrKWE9YVtjW2JdXTtyZXR1cm4gYX07Y29uc3QgZWE9L1teXFxwe0x9XFxwe059XSsvdSxmYT0vKFxcZHszfSkvZyxoYT0vKFxcRCkoXFxkezN9KS9nLGlhPS8oXFxkezN9KShcXEQpL2csamE9L1tcXHUwMzAwLVxcdTAzNmZdL2c7ZnVuY3Rpb24ga2EoYT17fSl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1rYSlyZXR1cm4gbmV3IGthKC4uLmFyZ3VtZW50cyk7aWYoYXJndW1lbnRzLmxlbmd0aClmb3IoYT0wO2E8YXJndW1lbnRzLmxlbmd0aDthKyspdGhpcy5hc3NpZ24oYXJndW1lbnRzW2FdKTtlbHNlIHRoaXMuYXNzaWduKGEpfXc9a2EucHJvdG90eXBlO1xudy5hc3NpZ249ZnVuY3Rpb24oYSl7dGhpcy5ub3JtYWxpemU9SChhLm5vcm1hbGl6ZSwhMCx0aGlzLm5vcm1hbGl6ZSk7bGV0IGM9YS5pbmNsdWRlLGI9Y3x8YS5leGNsdWRlfHxhLnNwbGl0LGU7aWYoYnx8Yj09PVwiXCIpe2lmKHR5cGVvZiBiPT09XCJvYmplY3RcIiYmYi5jb25zdHJ1Y3RvciE9PVJlZ0V4cCl7bGV0IGQ9XCJcIjtlPSFjO2N8fChkKz1cIlxcXFxwe1p9XCIpO2IubGV0dGVyJiYoZCs9XCJcXFxccHtMfVwiKTtiLm51bWJlciYmKGQrPVwiXFxcXHB7Tn1cIixlPSEhYyk7Yi5zeW1ib2wmJihkKz1cIlxcXFxwe1N9XCIpO2IucHVuY3R1YXRpb24mJihkKz1cIlxcXFxwe1B9XCIpO2IuY29udHJvbCYmKGQrPVwiXFxcXHB7Q31cIik7aWYoYj1iLmNoYXIpZCs9dHlwZW9mIGI9PT1cIm9iamVjdFwiP2Iuam9pbihcIlwiKTpiO3RyeXt0aGlzLnNwbGl0PW5ldyBSZWdFeHAoXCJbXCIrKGM/XCJeXCI6XCJcIikrZCtcIl0rXCIsXCJ1XCIpfWNhdGNoKGYpe3RoaXMuc3BsaXQ9L1xccysvfX1lbHNlIHRoaXMuc3BsaXQ9YixlPWI9PT0hMXx8XCJhMWFcIi5zcGxpdChiKS5sZW5ndGg8XG4yO3RoaXMubnVtZXJpYz1IKGEubnVtZXJpYyxlKX1lbHNle3RyeXt0aGlzLnNwbGl0PUgodGhpcy5zcGxpdCxlYSl9Y2F0Y2goZCl7dGhpcy5zcGxpdD0vXFxzKy99dGhpcy5udW1lcmljPUgoYS5udW1lcmljLEgodGhpcy5udW1lcmljLCEwKSl9dGhpcy5wcmVwYXJlPUgoYS5wcmVwYXJlLG51bGwsdGhpcy5wcmVwYXJlKTt0aGlzLmZpbmFsaXplPUgoYS5maW5hbGl6ZSxudWxsLHRoaXMuZmluYWxpemUpO2I9YS5maWx0ZXI7dGhpcy5maWx0ZXI9dHlwZW9mIGI9PT1cImZ1bmN0aW9uXCI/YjpIKGImJm5ldyBTZXQoYiksbnVsbCx0aGlzLmZpbHRlcik7dGhpcy5kZWR1cGU9SChhLmRlZHVwZSwhMCx0aGlzLmRlZHVwZSk7dGhpcy5tYXRjaGVyPUgoKGI9YS5tYXRjaGVyKSYmbmV3IE1hcChiKSxudWxsLHRoaXMubWF0Y2hlcik7dGhpcy5tYXBwZXI9SCgoYj1hLm1hcHBlcikmJm5ldyBNYXAoYiksbnVsbCx0aGlzLm1hcHBlcik7dGhpcy5zdGVtbWVyPUgoKGI9YS5zdGVtbWVyKSYmbmV3IE1hcChiKSxcbm51bGwsdGhpcy5zdGVtbWVyKTt0aGlzLnJlcGxhY2VyPUgoYS5yZXBsYWNlcixudWxsLHRoaXMucmVwbGFjZXIpO3RoaXMubWlubGVuZ3RoPUgoYS5taW5sZW5ndGgsMSx0aGlzLm1pbmxlbmd0aCk7dGhpcy5tYXhsZW5ndGg9SChhLm1heGxlbmd0aCwxMDI0LHRoaXMubWF4bGVuZ3RoKTt0aGlzLnJ0bD1IKGEucnRsLCExLHRoaXMucnRsKTtpZih0aGlzLmNhY2hlPWI9SChhLmNhY2hlLCEwLHRoaXMuY2FjaGUpKXRoaXMuRj1udWxsLHRoaXMuTD10eXBlb2YgYj09PVwibnVtYmVyXCI/YjoyRTUsdGhpcy5CPW5ldyBNYXAsdGhpcy5EPW5ldyBNYXAsdGhpcy5JPXRoaXMuSD0xMjg7dGhpcy5oPVwiXCI7dGhpcy5KPW51bGw7dGhpcy5BPVwiXCI7dGhpcy5LPW51bGw7aWYodGhpcy5tYXRjaGVyKWZvcihjb25zdCBkIG9mIHRoaXMubWF0Y2hlci5rZXlzKCkpdGhpcy5oKz0odGhpcy5oP1wifFwiOlwiXCIpK2Q7aWYodGhpcy5zdGVtbWVyKWZvcihjb25zdCBkIG9mIHRoaXMuc3RlbW1lci5rZXlzKCkpdGhpcy5BKz1cbih0aGlzLkE/XCJ8XCI6XCJcIikrZDtyZXR1cm4gdGhpc307dy5hZGRTdGVtbWVyPWZ1bmN0aW9uKGEsYyl7dGhpcy5zdGVtbWVyfHwodGhpcy5zdGVtbWVyPW5ldyBNYXApO3RoaXMuc3RlbW1lci5zZXQoYSxjKTt0aGlzLkErPSh0aGlzLkE/XCJ8XCI6XCJcIikrYTt0aGlzLks9bnVsbDt0aGlzLmNhY2hlJiZRKHRoaXMpO3JldHVybiB0aGlzfTt3LmFkZEZpbHRlcj1mdW5jdGlvbihhKXt0eXBlb2YgYT09PVwiZnVuY3Rpb25cIj90aGlzLmZpbHRlcj1hOih0aGlzLmZpbHRlcnx8KHRoaXMuZmlsdGVyPW5ldyBTZXQpLHRoaXMuZmlsdGVyLmFkZChhKSk7dGhpcy5jYWNoZSYmUSh0aGlzKTtyZXR1cm4gdGhpc307XG53LmFkZE1hcHBlcj1mdW5jdGlvbihhLGMpe2lmKHR5cGVvZiBhPT09XCJvYmplY3RcIilyZXR1cm4gdGhpcy5hZGRSZXBsYWNlcihhLGMpO2lmKGEubGVuZ3RoPjEpcmV0dXJuIHRoaXMuYWRkTWF0Y2hlcihhLGMpO3RoaXMubWFwcGVyfHwodGhpcy5tYXBwZXI9bmV3IE1hcCk7dGhpcy5tYXBwZXIuc2V0KGEsYyk7dGhpcy5jYWNoZSYmUSh0aGlzKTtyZXR1cm4gdGhpc307dy5hZGRNYXRjaGVyPWZ1bmN0aW9uKGEsYyl7aWYodHlwZW9mIGE9PT1cIm9iamVjdFwiKXJldHVybiB0aGlzLmFkZFJlcGxhY2VyKGEsYyk7aWYoYS5sZW5ndGg8MiYmKHRoaXMuZGVkdXBlfHx0aGlzLm1hcHBlcikpcmV0dXJuIHRoaXMuYWRkTWFwcGVyKGEsYyk7dGhpcy5tYXRjaGVyfHwodGhpcy5tYXRjaGVyPW5ldyBNYXApO3RoaXMubWF0Y2hlci5zZXQoYSxjKTt0aGlzLmgrPSh0aGlzLmg/XCJ8XCI6XCJcIikrYTt0aGlzLko9bnVsbDt0aGlzLmNhY2hlJiZRKHRoaXMpO3JldHVybiB0aGlzfTtcbncuYWRkUmVwbGFjZXI9ZnVuY3Rpb24oYSxjKXtpZih0eXBlb2YgYT09PVwic3RyaW5nXCIpcmV0dXJuIHRoaXMuYWRkTWF0Y2hlcihhLGMpO3RoaXMucmVwbGFjZXJ8fCh0aGlzLnJlcGxhY2VyPVtdKTt0aGlzLnJlcGxhY2VyLnB1c2goYSxjKTt0aGlzLmNhY2hlJiZRKHRoaXMpO3JldHVybiB0aGlzfTtcbncuZW5jb2RlPWZ1bmN0aW9uKGEsYyl7aWYodGhpcy5jYWNoZSYmYS5sZW5ndGg8PXRoaXMuSClpZih0aGlzLkYpe2lmKHRoaXMuQi5oYXMoYSkpcmV0dXJuIHRoaXMuQi5nZXQoYSl9ZWxzZSB0aGlzLkY9c2V0VGltZW91dChRLDUwLHRoaXMpO3RoaXMubm9ybWFsaXplJiYodHlwZW9mIHRoaXMubm9ybWFsaXplPT09XCJmdW5jdGlvblwiP2E9dGhpcy5ub3JtYWxpemUoYSk6YT1qYT9hLm5vcm1hbGl6ZShcIk5GS0RcIikucmVwbGFjZShqYSxcIlwiKS50b0xvd2VyQ2FzZSgpOmEudG9Mb3dlckNhc2UoKSk7dGhpcy5wcmVwYXJlJiYoYT10aGlzLnByZXBhcmUoYSkpO3RoaXMubnVtZXJpYyYmYS5sZW5ndGg+MyYmKGE9YS5yZXBsYWNlKGhhLFwiJDEgJDJcIikucmVwbGFjZShpYSxcIiQxICQyXCIpLnJlcGxhY2UoZmEsXCIkMSBcIikpO2NvbnN0IGI9ISh0aGlzLmRlZHVwZXx8dGhpcy5tYXBwZXJ8fHRoaXMuZmlsdGVyfHx0aGlzLm1hdGNoZXJ8fHRoaXMuc3RlbW1lcnx8dGhpcy5yZXBsYWNlcik7bGV0IGU9XG5bXSxkPUkoKSxmLGcsaD10aGlzLnNwbGl0fHx0aGlzLnNwbGl0PT09XCJcIj9hLnNwbGl0KHRoaXMuc3BsaXQpOlthXTtmb3IobGV0IGw9MCxtLHA7bDxoLmxlbmd0aDtsKyspaWYoKG09cD1oW2xdKSYmIShtLmxlbmd0aDx0aGlzLm1pbmxlbmd0aHx8bS5sZW5ndGg+dGhpcy5tYXhsZW5ndGgpKXtpZihjKXtpZihkW21dKWNvbnRpbnVlO2RbbV09MX1lbHNle2lmKGY9PT1tKWNvbnRpbnVlO2Y9bX1pZihiKWUucHVzaChtKTtlbHNlIGlmKCF0aGlzLmZpbHRlcnx8KHR5cGVvZiB0aGlzLmZpbHRlcj09PVwiZnVuY3Rpb25cIj90aGlzLmZpbHRlcihtKTohdGhpcy5maWx0ZXIuaGFzKG0pKSl7aWYodGhpcy5jYWNoZSYmbS5sZW5ndGg8PXRoaXMuSSlpZih0aGlzLkYpe3ZhciBrPXRoaXMuRC5nZXQobSk7aWYoa3x8az09PVwiXCIpe2smJmUucHVzaChrKTtjb250aW51ZX19ZWxzZSB0aGlzLkY9c2V0VGltZW91dChRLDUwLHRoaXMpO2lmKHRoaXMuc3RlbW1lcil7dGhpcy5LfHwodGhpcy5LPW5ldyBSZWdFeHAoXCIoPyFeKShcIitcbnRoaXMuQStcIikkXCIpKTtsZXQgdTtmb3IoO3UhPT1tJiZtLmxlbmd0aD4yOyl1PW0sbT1tLnJlcGxhY2UodGhpcy5LLHI9PnRoaXMuc3RlbW1lci5nZXQocikpfWlmKG0mJih0aGlzLm1hcHBlcnx8dGhpcy5kZWR1cGUmJm0ubGVuZ3RoPjEpKXtrPVwiXCI7Zm9yKGxldCB1PTAscj1cIlwiLHQsbjt1PG0ubGVuZ3RoO3UrKyl0PW0uY2hhckF0KHUpLHQ9PT1yJiZ0aGlzLmRlZHVwZXx8KChuPXRoaXMubWFwcGVyJiZ0aGlzLm1hcHBlci5nZXQodCkpfHxuPT09XCJcIj9uPT09ciYmdGhpcy5kZWR1cGV8fCEocj1uKXx8KGsrPW4pOmsrPXI9dCk7bT1rfXRoaXMubWF0Y2hlciYmbS5sZW5ndGg+MSYmKHRoaXMuSnx8KHRoaXMuSj1uZXcgUmVnRXhwKFwiKFwiK3RoaXMuaCtcIilcIixcImdcIikpLG09bS5yZXBsYWNlKHRoaXMuSix1PT50aGlzLm1hdGNoZXIuZ2V0KHUpKSk7aWYobSYmdGhpcy5yZXBsYWNlcilmb3Ioaz0wO20mJms8dGhpcy5yZXBsYWNlci5sZW5ndGg7ays9MiltPW0ucmVwbGFjZSh0aGlzLnJlcGxhY2VyW2tdLFxudGhpcy5yZXBsYWNlcltrKzFdKTt0aGlzLmNhY2hlJiZwLmxlbmd0aDw9dGhpcy5JJiYodGhpcy5ELnNldChwLG0pLHRoaXMuRC5zaXplPnRoaXMuTCYmKHRoaXMuRC5jbGVhcigpLHRoaXMuST10aGlzLkkvMS4xfDApKTtpZihtKXtpZihtIT09cClpZihjKXtpZihkW21dKWNvbnRpbnVlO2RbbV09MX1lbHNle2lmKGc9PT1tKWNvbnRpbnVlO2c9bX1lLnB1c2gobSl9fX10aGlzLmZpbmFsaXplJiYoZT10aGlzLmZpbmFsaXplKGUpfHxlKTt0aGlzLmNhY2hlJiZhLmxlbmd0aDw9dGhpcy5IJiYodGhpcy5CLnNldChhLGUpLHRoaXMuQi5zaXplPnRoaXMuTCYmKHRoaXMuQi5jbGVhcigpLHRoaXMuSD10aGlzLkgvMS4xfDApKTtyZXR1cm4gZX07ZnVuY3Rpb24gUShhKXthLkY9bnVsbDthLkIuY2xlYXIoKTthLkQuY2xlYXIoKX07ZnVuY3Rpb24gbGEoYSxjLGIpe2J8fChjfHx0eXBlb2YgYSE9PVwib2JqZWN0XCI/dHlwZW9mIGM9PT1cIm9iamVjdFwiJiYoYj1jLGM9MCk6Yj1hKTtiJiYoYT1iLnF1ZXJ5fHxhLGM9Yi5saW1pdHx8Yyk7bGV0IGU9XCJcIisoY3x8MCk7YiYmKGUrPShiLm9mZnNldHx8MCkrISFiLmNvbnRleHQrISFiLnN1Z2dlc3QrKGIucmVzb2x2ZSE9PSExKSsoYi5yZXNvbHV0aW9ufHx0aGlzLnJlc29sdXRpb24pKyhiLmJvb3N0fHwwKSk7YT0oXCJcIithKS50b0xvd2VyQ2FzZSgpO3RoaXMuY2FjaGV8fCh0aGlzLmNhY2hlPW5ldyBtYSk7bGV0IGQ9dGhpcy5jYWNoZS5nZXQoYStlKTtpZighZCl7Y29uc3QgZj1iJiZiLmNhY2hlO2YmJihiLmNhY2hlPSExKTtkPXRoaXMuc2VhcmNoKGEsYyxiKTtmJiYoYi5jYWNoZT1mKTt0aGlzLmNhY2hlLnNldChhK2UsZCl9cmV0dXJuIGR9ZnVuY3Rpb24gbWEoYSl7dGhpcy5saW1pdD1hJiZhIT09ITA/YToxRTM7dGhpcy5jYWNoZT1uZXcgTWFwO3RoaXMuaD1cIlwifVxubWEucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGMpe3RoaXMuY2FjaGUuc2V0KHRoaXMuaD1hLGMpO3RoaXMuY2FjaGUuc2l6ZT50aGlzLmxpbWl0JiZ0aGlzLmNhY2hlLmRlbGV0ZSh0aGlzLmNhY2hlLmtleXMoKS5uZXh0KCkudmFsdWUpfTttYS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe2NvbnN0IGM9dGhpcy5jYWNoZS5nZXQoYSk7YyYmdGhpcy5oIT09YSYmKHRoaXMuY2FjaGUuZGVsZXRlKGEpLHRoaXMuY2FjaGUuc2V0KHRoaXMuaD1hLGMpKTtyZXR1cm4gY307bWEucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXtmb3IoY29uc3QgYyBvZiB0aGlzLmNhY2hlKXtjb25zdCBiPWNbMF07Y1sxXS5pbmNsdWRlcyhhKSYmdGhpcy5jYWNoZS5kZWxldGUoYil9fTttYS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmNhY2hlLmNsZWFyKCk7dGhpcy5oPVwiXCJ9O2NvbnN0IG5hPXtub3JtYWxpemU6ITEsbnVtZXJpYzohMSxkZWR1cGU6ITF9O2NvbnN0IG9hPXt9O2NvbnN0IHJhPW5ldyBNYXAoW1tcImJcIixcInBcIl0sW1widlwiLFwiZlwiXSxbXCJ3XCIsXCJmXCJdLFtcInpcIixcInNcIl0sW1wieFwiLFwic1wiXSxbXCJkXCIsXCJ0XCJdLFtcIm5cIixcIm1cIl0sW1wiY1wiLFwia1wiXSxbXCJnXCIsXCJrXCJdLFtcImpcIixcImtcIl0sW1wicVwiLFwia1wiXSxbXCJpXCIsXCJlXCJdLFtcInlcIixcImVcIl0sW1widVwiLFwib1wiXV0pO2NvbnN0IHNhPW5ldyBNYXAoW1tcImFlXCIsXCJhXCJdLFtcIm9lXCIsXCJvXCJdLFtcInNoXCIsXCJzXCJdLFtcImtoXCIsXCJrXCJdLFtcInRoXCIsXCJ0XCJdLFtcInBoXCIsXCJmXCJdLFtcInBmXCIsXCJmXCJdXSksdGE9Wy8oW15hZW9dKWgoLikvZyxcIiQxJDJcIiwvKFthZW9dKWgoW15hZW9dfCQpL2csXCIkMSQyXCIsLyguKVxcMSsvZyxcIiQxXCJdO2NvbnN0IHVhPXthOlwiXCIsZTpcIlwiLGk6XCJcIixvOlwiXCIsdTpcIlwiLHk6XCJcIixiOjEsZjoxLHA6MSx2OjEsYzoyLGc6MixqOjIsazoyLHE6MixzOjIseDoyLHo6MixcIlxcdTAwZGZcIjoyLGQ6Myx0OjMsbDo0LG06NSxuOjUscjo2fTt2YXIgdmE9e0V4YWN0Om5hLERlZmF1bHQ6b2EsTm9ybWFsaXplOm9hLExhdGluQmFsYW5jZTp7bWFwcGVyOnJhfSxMYXRpbkFkdmFuY2VkOnttYXBwZXI6cmEsbWF0Y2hlcjpzYSxyZXBsYWNlcjp0YX0sTGF0aW5FeHRyYTp7bWFwcGVyOnJhLHJlcGxhY2VyOnRhLmNvbmNhdChbLyg/IV4pW2Flb10vZyxcIlwiXSksbWF0Y2hlcjpzYX0sTGF0aW5Tb3VuZGV4OntkZWR1cGU6ITEsaW5jbHVkZTp7bGV0dGVyOiEwfSxmaW5hbGl6ZTpmdW5jdGlvbihhKXtmb3IobGV0IGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtsZXQgZT1jLmNoYXJBdCgwKSxkPXVhW2VdO2ZvcihsZXQgZj0xLGc7ZjxjLmxlbmd0aCYmKGc9Yy5jaGFyQXQoZiksZz09PVwiaFwifHxnPT09XCJ3XCJ8fCEoZz11YVtnXSl8fGc9PT1kfHwoZSs9ZyxkPWcsZS5sZW5ndGghPT00KSk7ZisrKTthW2JdPWV9fX0sQ0pLOntzcGxpdDpcIlwifSxMYXRpbkV4YWN0Om5hLExhdGluRGVmYXVsdDpvYSxMYXRpblNpbXBsZTpvYX07ZnVuY3Rpb24gd2EoYSxjLGIsZSl7bGV0IGQ9W107Zm9yKGxldCBmPTAsZztmPGEuaW5kZXgubGVuZ3RoO2YrKylpZihnPWEuaW5kZXhbZl0sYz49Zy5sZW5ndGgpYy09Zy5sZW5ndGg7ZWxzZXtjPWdbZT9cInNwbGljZVwiOlwic2xpY2VcIl0oYyxiKTtjb25zdCBoPWMubGVuZ3RoO2lmKGgmJihkPWQubGVuZ3RoP2QuY29uY2F0KGMpOmMsYi09aCxlJiYoYS5sZW5ndGgtPWgpLCFiKSlicmVhaztjPTB9cmV0dXJuIGR9XG5mdW5jdGlvbiB4YShhKXtpZighdGhpc3x8dGhpcy5jb25zdHJ1Y3RvciE9PXhhKXJldHVybiBuZXcgeGEoYSk7dGhpcy5pbmRleD1hP1thXTpbXTt0aGlzLmxlbmd0aD1hP2EubGVuZ3RoOjA7Y29uc3QgYz10aGlzO3JldHVybiBuZXcgUHJveHkoW10se2dldChiLGUpe2lmKGU9PT1cImxlbmd0aFwiKXJldHVybiBjLmxlbmd0aDtpZihlPT09XCJwdXNoXCIpcmV0dXJuIGZ1bmN0aW9uKGQpe2MuaW5kZXhbYy5pbmRleC5sZW5ndGgtMV0ucHVzaChkKTtjLmxlbmd0aCsrfTtpZihlPT09XCJwb3BcIilyZXR1cm4gZnVuY3Rpb24oKXtpZihjLmxlbmd0aClyZXR1cm4gYy5sZW5ndGgtLSxjLmluZGV4W2MuaW5kZXgubGVuZ3RoLTFdLnBvcCgpfTtpZihlPT09XCJpbmRleE9mXCIpcmV0dXJuIGZ1bmN0aW9uKGQpe2xldCBmPTA7Zm9yKGxldCBnPTAsaCxrO2c8Yy5pbmRleC5sZW5ndGg7ZysrKXtoPWMuaW5kZXhbZ107az1oLmluZGV4T2YoZCk7aWYoaz49MClyZXR1cm4gZitrO2YrPWgubGVuZ3RofXJldHVybi0xfTtcbmlmKGU9PT1cImluY2x1ZGVzXCIpcmV0dXJuIGZ1bmN0aW9uKGQpe2ZvcihsZXQgZj0wO2Y8Yy5pbmRleC5sZW5ndGg7ZisrKWlmKGMuaW5kZXhbZl0uaW5jbHVkZXMoZCkpcmV0dXJuITA7cmV0dXJuITF9O2lmKGU9PT1cInNsaWNlXCIpcmV0dXJuIGZ1bmN0aW9uKGQsZil7cmV0dXJuIHdhKGMsZHx8MCxmfHxjLmxlbmd0aCwhMSl9O2lmKGU9PT1cInNwbGljZVwiKXJldHVybiBmdW5jdGlvbihkLGYpe3JldHVybiB3YShjLGR8fDAsZnx8Yy5sZW5ndGgsITApfTtpZihlPT09XCJjb25zdHJ1Y3RvclwiKXJldHVybiBBcnJheTtpZih0eXBlb2YgZSE9PVwic3ltYm9sXCIpcmV0dXJuKGI9Yy5pbmRleFtlLzIqKjMxfDBdKSYmYltlXX0sc2V0KGIsZSxkKXtiPWUvMioqMzF8MDsoYy5pbmRleFtiXXx8KGMuaW5kZXhbYl09W10pKVtlXT1kO2MubGVuZ3RoKys7cmV0dXJuITB9fSl9eGEucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5pbmRleC5sZW5ndGg9MH07eGEucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oKXt9O1xuZnVuY3Rpb24gUihhPTgpe2lmKCF0aGlzfHx0aGlzLmNvbnN0cnVjdG9yIT09UilyZXR1cm4gbmV3IFIoYSk7dGhpcy5pbmRleD1JKCk7dGhpcy5oPVtdO3RoaXMuc2l6ZT0wO2E+MzI/KHRoaXMuQj1BYSx0aGlzLkE9QmlnSW50KGEpKToodGhpcy5CPUJhLHRoaXMuQT1hKX1SLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oYSl7Y29uc3QgYz10aGlzLmluZGV4W3RoaXMuQihhKV07cmV0dXJuIGMmJmMuZ2V0KGEpfTtSLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxjKXt2YXIgYj10aGlzLkIoYSk7bGV0IGU9dGhpcy5pbmRleFtiXTtlPyhiPWUuc2l6ZSxlLnNldChhLGMpLChiLT1lLnNpemUpJiZ0aGlzLnNpemUrKyk6KHRoaXMuaW5kZXhbYl09ZT1uZXcgTWFwKFtbYSxjXV0pLHRoaXMuaC5wdXNoKGUpLHRoaXMuc2l6ZSsrKX07XG5mdW5jdGlvbiBTKGE9OCl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1TKXJldHVybiBuZXcgUyhhKTt0aGlzLmluZGV4PUkoKTt0aGlzLmg9W107dGhpcy5zaXplPTA7YT4zMj8odGhpcy5CPUFhLHRoaXMuQT1CaWdJbnQoYSkpOih0aGlzLkI9QmEsdGhpcy5BPWEpfVMucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhKXt2YXIgYz10aGlzLkIoYSk7bGV0IGI9dGhpcy5pbmRleFtjXTtiPyhjPWIuc2l6ZSxiLmFkZChhKSwoYy09Yi5zaXplKSYmdGhpcy5zaXplKyspOih0aGlzLmluZGV4W2NdPWI9bmV3IFNldChbYV0pLHRoaXMuaC5wdXNoKGIpLHRoaXMuc2l6ZSsrKX07dz1SLnByb3RvdHlwZTt3Lmhhcz1TLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oYSl7Y29uc3QgYz10aGlzLmluZGV4W3RoaXMuQihhKV07cmV0dXJuIGMmJmMuaGFzKGEpfTtcbncuZGVsZXRlPVMucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihhKXtjb25zdCBjPXRoaXMuaW5kZXhbdGhpcy5CKGEpXTtjJiZjLmRlbGV0ZShhKSYmdGhpcy5zaXplLS19O3cuY2xlYXI9Uy5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmluZGV4PUkoKTt0aGlzLmg9W107dGhpcy5zaXplPTB9O3cudmFsdWVzPVMucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbiooKXtmb3IobGV0IGE9MDthPHRoaXMuaC5sZW5ndGg7YSsrKWZvcihsZXQgYyBvZiB0aGlzLmhbYV0udmFsdWVzKCkpeWllbGQgY307dy5rZXlzPVMucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24qKCl7Zm9yKGxldCBhPTA7YTx0aGlzLmgubGVuZ3RoO2ErKylmb3IobGV0IGMgb2YgdGhpcy5oW2FdLmtleXMoKSl5aWVsZCBjfTt3LmVudHJpZXM9Uy5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbiooKXtmb3IobGV0IGE9MDthPHRoaXMuaC5sZW5ndGg7YSsrKWZvcihsZXQgYyBvZiB0aGlzLmhbYV0uZW50cmllcygpKXlpZWxkIGN9O1xuZnVuY3Rpb24gQmEoYSl7bGV0IGM9MioqdGhpcy5BLTE7aWYodHlwZW9mIGE9PVwibnVtYmVyXCIpcmV0dXJuIGEmYztsZXQgYj0wLGU9dGhpcy5BKzE7Zm9yKGxldCBkPTA7ZDxhLmxlbmd0aDtkKyspYj0oYiplXmEuY2hhckNvZGVBdChkKSkmYztyZXR1cm4gdGhpcy5BPT09MzI/YisyKiozMTpifWZ1bmN0aW9uIEFhKGEpe2xldCBjPUJpZ0ludCgyKSoqdGhpcy5BLUJpZ0ludCgxKTt2YXIgYj10eXBlb2YgYTtpZihiPT09XCJiaWdpbnRcIilyZXR1cm4gYSZjO2lmKGI9PT1cIm51bWJlclwiKXJldHVybiBCaWdJbnQoYSkmYztiPUJpZ0ludCgwKTtsZXQgZT10aGlzLkErQmlnSW50KDEpO2ZvcihsZXQgZD0wO2Q8YS5sZW5ndGg7ZCsrKWI9KGIqZV5CaWdJbnQoYS5jaGFyQ29kZUF0KGQpKSkmYztyZXR1cm4gYn07bGV0IENhLERhO1xuYXN5bmMgZnVuY3Rpb24gRWEoYSl7YT1hLmRhdGE7dmFyIGM9YS50YXNrO2NvbnN0IGI9YS5pZDtsZXQgZT1hLmFyZ3M7c3dpdGNoKGMpe2Nhc2UgXCJpbml0XCI6RGE9YS5vcHRpb25zfHx7fTsoYz1hLmZhY3RvcnkpPyhGdW5jdGlvbihcInJldHVybiBcIitjKSgpKHNlbGYpLENhPW5ldyBzZWxmLkZsZXhTZWFyY2guSW5kZXgoRGEpLGRlbGV0ZSBzZWxmLkZsZXhTZWFyY2gpOkNhPW5ldyBUKERhKTtwb3N0TWVzc2FnZSh7aWQ6Yn0pO2JyZWFrO2RlZmF1bHQ6bGV0IGQ7Yz09PVwiZXhwb3J0XCImJihlWzFdPyhlWzBdPURhLmV4cG9ydCxlWzJdPTAsZVszXT0xKTplPW51bGwpO2M9PT1cImltcG9ydFwiP2VbMF0mJihhPWF3YWl0IERhLmltcG9ydC5jYWxsKENhLGVbMF0pLENhLmltcG9ydChlWzBdLGEpKTooKGQ9ZSYmQ2FbY10uYXBwbHkoQ2EsZSkpJiZkLnRoZW4mJihkPWF3YWl0IGQpLGQmJmQuYXdhaXQmJihkPWF3YWl0IGQuYXdhaXQpLGM9PT1cInNlYXJjaFwiJiZkLnJlc3VsdCYmKGQ9ZC5yZXN1bHQpKTtcbnBvc3RNZXNzYWdlKGM9PT1cInNlYXJjaFwiP3tpZDpiLG1zZzpkfTp7aWQ6Yn0pfX07ZnVuY3Rpb24gRmEoYSl7R2EuY2FsbChhLFwiYWRkXCIpO0dhLmNhbGwoYSxcImFwcGVuZFwiKTtHYS5jYWxsKGEsXCJzZWFyY2hcIik7R2EuY2FsbChhLFwidXBkYXRlXCIpO0dhLmNhbGwoYSxcInJlbW92ZVwiKTtHYS5jYWxsKGEsXCJzZWFyY2hDYWNoZVwiKX1sZXQgSGEsSWEsSmE7ZnVuY3Rpb24gS2EoKXtIYT1KYT0wfVxuZnVuY3Rpb24gR2EoYSl7dGhpc1thK1wiQXN5bmNcIl09ZnVuY3Rpb24oKXtjb25zdCBjPWFyZ3VtZW50czt2YXIgYj1jW2MubGVuZ3RoLTFdO2xldCBlO3R5cGVvZiBiPT09XCJmdW5jdGlvblwiJiYoZT1iLGRlbGV0ZSBjW2MubGVuZ3RoLTFdKTtIYT9KYXx8KEphPURhdGUubm93KCktSWE+PXRoaXMucHJpb3JpdHkqdGhpcy5wcmlvcml0eSozKTooSGE9c2V0VGltZW91dChLYSwwKSxJYT1EYXRlLm5vdygpKTtpZihKYSl7Y29uc3QgZj10aGlzO3JldHVybiBuZXcgUHJvbWlzZShnPT57c2V0VGltZW91dChmdW5jdGlvbigpe2coZlthK1wiQXN5bmNcIl0uYXBwbHkoZixjKSl9LDApfSl9Y29uc3QgZD10aGlzW2FdLmFwcGx5KHRoaXMsYyk7Yj1kLnRoZW4/ZDpuZXcgUHJvbWlzZShmPT5mKGQpKTtlJiZiLnRoZW4oZSk7cmV0dXJuIGJ9fTtsZXQgVj0wO1xuZnVuY3Rpb24gTGEoYT17fSxjKXtmdW5jdGlvbiBiKGgpe2Z1bmN0aW9uIGsobCl7bD1sLmRhdGF8fGw7Y29uc3QgbT1sLmlkLHA9bSYmZi5oW21dO3AmJihwKGwubXNnKSxkZWxldGUgZi5oW21dKX10aGlzLndvcmtlcj1oO3RoaXMuaD1JKCk7aWYodGhpcy53b3JrZXIpe2Q/dGhpcy53b3JrZXIub24oXCJtZXNzYWdlXCIsayk6dGhpcy53b3JrZXIub25tZXNzYWdlPWs7aWYoYS5jb25maWcpcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGwpe1Y+MUU5JiYoVj0wKTtmLmhbKytWXT1mdW5jdGlvbigpe2woZil9O2Yud29ya2VyLnBvc3RNZXNzYWdlKHtpZDpWLHRhc2s6XCJpbml0XCIsZmFjdG9yeTplLG9wdGlvbnM6YX0pfSk7dGhpcy5wcmlvcml0eT1hLnByaW9yaXR5fHw0O3RoaXMuZW5jb2Rlcj1jfHxudWxsO3RoaXMud29ya2VyLnBvc3RNZXNzYWdlKHt0YXNrOlwiaW5pdFwiLGZhY3Rvcnk6ZSxvcHRpb25zOmF9KTtyZXR1cm4gdGhpc319aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1MYSlyZXR1cm4gbmV3IExhKGEpO1xubGV0IGU9dHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiP3NlbGYuX2ZhY3Rvcnk6dHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCI/d2luZG93Ll9mYWN0b3J5Om51bGw7ZSYmKGU9ZS50b1N0cmluZygpKTtjb25zdCBkPXR5cGVvZiB3aW5kb3c9PT1cInVuZGVmaW5lZFwiLGY9dGhpcyxnPU1hKGUsZCxhLndvcmtlcik7cmV0dXJuIGcudGhlbj9nLnRoZW4oZnVuY3Rpb24oaCl7cmV0dXJuIGIuY2FsbChmLGgpfSk6Yi5jYWxsKHRoaXMsZyl9VyhcImFkZFwiKTtXKFwiYXBwZW5kXCIpO1coXCJzZWFyY2hcIik7VyhcInVwZGF0ZVwiKTtXKFwicmVtb3ZlXCIpO1coXCJjbGVhclwiKTtXKFwiZXhwb3J0XCIpO1coXCJpbXBvcnRcIik7TGEucHJvdG90eXBlLnNlYXJjaENhY2hlPWxhO0ZhKExhLnByb3RvdHlwZSk7XG5mdW5jdGlvbiBXKGEpe0xhLnByb3RvdHlwZVthXT1mdW5jdGlvbigpe2NvbnN0IGM9dGhpcyxiPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTt2YXIgZT1iW2IubGVuZ3RoLTFdO2xldCBkO3R5cGVvZiBlPT09XCJmdW5jdGlvblwiJiYoZD1lLGIucG9wKCkpO2U9bmV3IFByb21pc2UoZnVuY3Rpb24oZil7YT09PVwiZXhwb3J0XCImJnR5cGVvZiBiWzBdPT09XCJmdW5jdGlvblwiJiYoYlswXT1udWxsKTtWPjFFOSYmKFY9MCk7Yy5oWysrVl09ZjtjLndvcmtlci5wb3N0TWVzc2FnZSh7dGFzazphLGlkOlYsYXJnczpifSl9KTtyZXR1cm4gZD8oZS50aGVuKGQpLHRoaXMpOmV9fVxuZnVuY3Rpb24gTWEoYSxjLGIpe3JldHVybiBjP3R5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiP25ldyhyZXF1aXJlKFwid29ya2VyX3RocmVhZHNcIilbXCJXb3JrZXJcIl0pKF9fZGlybmFtZStcIi93b3JrZXIvbm9kZS5qc1wiKTppbXBvcnQoXCJ3b3JrZXJfdGhyZWFkc1wiKS50aGVuKGZ1bmN0aW9uKHdvcmtlcil7cmV0dXJuIG5ldyB3b3JrZXJbXCJXb3JrZXJcIl0oaW1wb3J0Lm1ldGEuZGlybmFtZStcIi9ub2RlL25vZGUubWpzXCIpfSk6YT9uZXcgd2luZG93LldvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtcIm9ubWVzc2FnZT1cIitFYS50b1N0cmluZygpXSx7dHlwZTpcInRleHQvamF2YXNjcmlwdFwifSkpKTpuZXcgd2luZG93Lldvcmtlcih0eXBlb2YgYj09PVwic3RyaW5nXCI/YjppbXBvcnQubWV0YS51cmwucmVwbGFjZShcIi93b3JrZXIuanNcIixcIi93b3JrZXIvd29ya2VyLmpzXCIpLnJlcGxhY2UoXCJmbGV4c2VhcmNoLmJ1bmRsZS5tb2R1bGUubWluLmpzXCIsXG5cIm1vZHVsZS93b3JrZXIvd29ya2VyLmpzXCIpLHt0eXBlOlwibW9kdWxlXCJ9KX07TmEucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhLGMsYil7YmEoYSkmJihjPWEsYT1jYShjLHRoaXMua2V5KSk7aWYoYyYmKGF8fGE9PT0wKSl7aWYoIWImJnRoaXMucmVnLmhhcyhhKSlyZXR1cm4gdGhpcy51cGRhdGUoYSxjKTtmb3IobGV0IGg9MCxrO2g8dGhpcy5maWVsZC5sZW5ndGg7aCsrKXtrPXRoaXMuQltoXTt2YXIgZT10aGlzLmluZGV4LmdldCh0aGlzLmZpZWxkW2hdKTtpZih0eXBlb2Ygaz09PVwiZnVuY3Rpb25cIil7dmFyIGQ9ayhjKTtkJiZlLmFkZChhLGQsYiwhMCl9ZWxzZSBpZihkPWsuRywhZHx8ZChjKSlrLmNvbnN0cnVjdG9yPT09U3RyaW5nP2s9W1wiXCIra106TShrKSYmKGs9W2tdKSxRYShjLGssdGhpcy5ELDAsZSxhLGtbMF0sYil9aWYodGhpcy50YWcpZm9yKGU9MDtlPHRoaXMuQS5sZW5ndGg7ZSsrKXt2YXIgZj10aGlzLkFbZV07ZD10aGlzLnRhZy5nZXQodGhpcy5GW2VdKTtsZXQgaD1JKCk7aWYodHlwZW9mIGY9PT1cImZ1bmN0aW9uXCIpe2lmKGY9ZihjKSwhZiljb250aW51ZX1lbHNle3ZhciBnPVxuZi5HO2lmKGcmJiFnKGMpKWNvbnRpbnVlO2YuY29uc3RydWN0b3I9PT1TdHJpbmcmJihmPVwiXCIrZik7Zj1jYShjLGYpfWlmKGQmJmYpe00oZikmJihmPVtmXSk7Zm9yKGxldCBrPTAsbCxtO2s8Zi5sZW5ndGg7aysrKWlmKGw9ZltrXSwhaFtsXSYmKGhbbF09MSwoZz1kLmdldChsKSk/bT1nOmQuc2V0KGwsbT1bXSksIWJ8fCFtLmluY2x1ZGVzKGEpKSl7aWYobS5sZW5ndGg9PT0yKiozMS0xKXtnPW5ldyB4YShtKTtpZih0aGlzLmZhc3R1cGRhdGUpZm9yKGxldCBwIG9mIHRoaXMucmVnLnZhbHVlcygpKXAuaW5jbHVkZXMobSkmJihwW3AuaW5kZXhPZihtKV09Zyk7ZC5zZXQobCxtPWcpfW0ucHVzaChhKTt0aGlzLmZhc3R1cGRhdGUmJigoZz10aGlzLnJlZy5nZXQoYSkpP2cucHVzaChtKTp0aGlzLnJlZy5zZXQoYSxbbV0pKX19fWlmKHRoaXMuc3RvcmUmJighYnx8IXRoaXMuc3RvcmUuaGFzKGEpKSl7bGV0IGg7aWYodGhpcy5oKXtoPUkoKTtmb3IobGV0IGs9MCxsO2s8dGhpcy5oLmxlbmd0aDtrKyspe2w9XG50aGlzLmhba107aWYoKGI9bC5HKSYmIWIoYykpY29udGludWU7bGV0IG07aWYodHlwZW9mIGw9PT1cImZ1bmN0aW9uXCIpe209bChjKTtpZighbSljb250aW51ZTtsPVtsLk9dfWVsc2UgaWYoTShsKXx8bC5jb25zdHJ1Y3Rvcj09PVN0cmluZyl7aFtsXT1jW2xdO2NvbnRpbnVlfVJhKGMsaCxsLDAsbFswXSxtKX19dGhpcy5zdG9yZS5zZXQoYSxofHxjKX10aGlzLndvcmtlciYmKHRoaXMuZmFzdHVwZGF0ZXx8dGhpcy5yZWcuYWRkKGEpKX1yZXR1cm4gdGhpc307ZnVuY3Rpb24gUmEoYSxjLGIsZSxkLGYpe2E9YVtkXTtpZihlPT09Yi5sZW5ndGgtMSljW2RdPWZ8fGE7ZWxzZSBpZihhKWlmKGEuY29uc3RydWN0b3I9PT1BcnJheSlmb3IoYz1jW2RdPUFycmF5KGEubGVuZ3RoKSxkPTA7ZDxhLmxlbmd0aDtkKyspUmEoYSxjLGIsZSxkKTtlbHNlIGM9Y1tkXXx8KGNbZF09SSgpKSxkPWJbKytlXSxSYShhLGMsYixlLGQpfVxuZnVuY3Rpb24gUWEoYSxjLGIsZSxkLGYsZyxoKXtpZihhPWFbZ10paWYoZT09PWMubGVuZ3RoLTEpe2lmKGEuY29uc3RydWN0b3I9PT1BcnJheSl7aWYoYltlXSl7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKylkLmFkZChmLGFbY10sITAsITApO3JldHVybn1hPWEuam9pbihcIiBcIil9ZC5hZGQoZixhLGgsITApfWVsc2UgaWYoYS5jb25zdHJ1Y3Rvcj09PUFycmF5KWZvcihnPTA7ZzxhLmxlbmd0aDtnKyspUWEoYSxjLGIsZSxkLGYsZyxoKTtlbHNlIGc9Y1srK2VdLFFhKGEsYyxiLGUsZCxmLGcsaCl9O2Z1bmN0aW9uIFNhKGEsYyxiLGUpe2lmKCFhLmxlbmd0aClyZXR1cm4gYTtpZihhLmxlbmd0aD09PTEpcmV0dXJuIGE9YVswXSxhPWJ8fGEubGVuZ3RoPmM/YS5zbGljZShiLGIrYyk6YSxlP1RhLmNhbGwodGhpcyxhKTphO2xldCBkPVtdO2ZvcihsZXQgZj0wLGcsaDtmPGEubGVuZ3RoO2YrKylpZigoZz1hW2ZdKSYmKGg9Zy5sZW5ndGgpKXtpZihiKXtpZihiPj1oKXtiLT1oO2NvbnRpbnVlfWc9Zy5zbGljZShiLGIrYyk7aD1nLmxlbmd0aDtiPTB9aD5jJiYoZz1nLnNsaWNlKDAsYyksaD1jKTtpZighZC5sZW5ndGgmJmg+PWMpcmV0dXJuIGU/VGEuY2FsbCh0aGlzLGcpOmc7ZC5wdXNoKGcpO2MtPWg7aWYoIWMpYnJlYWt9ZD1kLmxlbmd0aD4xP1tdLmNvbmNhdC5hcHBseShbXSxkKTpkWzBdO3JldHVybiBlP1RhLmNhbGwodGhpcyxkKTpkfTtmdW5jdGlvbiBVYShhLGMsYixlKXt2YXIgZD1lWzBdO2lmKGRbMF0mJmRbMF0ucXVlcnkpcmV0dXJuIGFbY10uYXBwbHkoYSxkKTtpZighKGMhPT1cImFuZFwiJiZjIT09XCJub3RcInx8YS5yZXN1bHQubGVuZ3RofHxhLmF3YWl0fHxkLnN1Z2dlc3QpKXJldHVybiBlLmxlbmd0aD4xJiYoZD1lW2UubGVuZ3RoLTFdKSwoZT1kLnJlc29sdmUpP2EuYXdhaXR8fGEucmVzdWx0OmE7bGV0IGY9W10sZz0wLGg9MCxrLGwsbSxwLHU7Zm9yKGM9MDtjPGUubGVuZ3RoO2MrKylpZihkPWVbY10pe3ZhciByPXZvaWQgMDtpZihkLmNvbnN0cnVjdG9yPT09WClyPWQuYXdhaXR8fGQucmVzdWx0O2Vsc2UgaWYoZC50aGVufHxkLmNvbnN0cnVjdG9yPT09QXJyYXkpcj1kO2Vsc2V7Zz1kLmxpbWl0fHwwO2g9ZC5vZmZzZXR8fDA7bT1kLnN1Z2dlc3Q7bD1kLnJlc29sdmU7az0oKHA9ZC5oaWdobGlnaHR8fGEuaGlnaGxpZ2h0KXx8ZC5lbnJpY2gpJiZsO3I9ZC5xdWV1ZTtsZXQgdD1kLmFzeW5jfHxyLG49ZC5pbmRleCxcbnE9ZC5xdWVyeTtuP2EuaW5kZXh8fChhLmluZGV4PW4pOm49YS5pbmRleDtpZihxfHxkLnRhZyl7Y29uc3QgeD1kLmZpZWxkfHxkLnBsdWNrO3gmJighcXx8YS5xdWVyeSYmIXB8fChhLnF1ZXJ5PXEsYS5maWVsZD14LGEuaGlnaGxpZ2h0PXApLG49bi5pbmRleC5nZXQoeCkpO2lmKHImJih1fHxhLmF3YWl0KSl7dT0xO2xldCB2O2NvbnN0IEE9YS5DLmxlbmd0aCxEPW5ldyBQcm9taXNlKGZ1bmN0aW9uKEcpe3Y9R30pOyhmdW5jdGlvbihHLEUpe0QuaD1mdW5jdGlvbigpe0UuaW5kZXg9bnVsbDtFLnJlc29sdmU9ITE7bGV0IEI9dD9HLnNlYXJjaEFzeW5jKEUpOkcuc2VhcmNoKEUpO2lmKEIudGhlbilyZXR1cm4gQi50aGVuKGZ1bmN0aW9uKHope2EuQ1tBXT16PXoucmVzdWx0fHx6O3Yoeik7cmV0dXJuIHp9KTtCPUIucmVzdWx0fHxCO3YoQik7cmV0dXJuIEJ9fSkobixPYmplY3QuYXNzaWduKHt9LGQpKTthLkMucHVzaChEKTtmW2NdPUQ7Y29udGludWV9ZWxzZSBkLnJlc29sdmU9ITEsXG5kLmluZGV4PW51bGwscj10P24uc2VhcmNoQXN5bmMoZCk6bi5zZWFyY2goZCksZC5yZXNvbHZlPWwsZC5pbmRleD1ufWVsc2UgaWYoZC5hbmQpcj1WYShkLFwiYW5kXCIsbik7ZWxzZSBpZihkLm9yKXI9VmEoZCxcIm9yXCIsbik7ZWxzZSBpZihkLm5vdClyPVZhKGQsXCJub3RcIixuKTtlbHNlIGlmKGQueG9yKXI9VmEoZCxcInhvclwiLG4pO2Vsc2UgY29udGludWV9ci5hd2FpdD8odT0xLHI9ci5hd2FpdCk6ci50aGVuPyh1PTEscj1yLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJuIHQucmVzdWx0fHx0fSkpOnI9ci5yZXN1bHR8fHI7ZltjXT1yfXUmJiFhLmF3YWl0JiYoYS5hd2FpdD1uZXcgUHJvbWlzZShmdW5jdGlvbih0KXthLnJldHVybj10fSkpO2lmKHUpe2NvbnN0IHQ9UHJvbWlzZS5hbGwoZikudGhlbihmdW5jdGlvbihuKXtmb3IobGV0IHE9MDtxPGEuQy5sZW5ndGg7cSsrKWlmKGEuQ1txXT09PXQpe2EuQ1txXT1mdW5jdGlvbigpe3JldHVybiBiLmNhbGwoYSxuLGcsaCxrLGwsbSxwKX07YnJlYWt9V2EoYSl9KTtcbmEuQy5wdXNoKHQpfWVsc2UgaWYoYS5hd2FpdClhLkMucHVzaChmdW5jdGlvbigpe3JldHVybiBiLmNhbGwoYSxmLGcsaCxrLGwsbSxwKX0pO2Vsc2UgcmV0dXJuIGIuY2FsbChhLGYsZyxoLGssbCxtLHApO3JldHVybiBsP2EuYXdhaXR8fGEucmVzdWx0OmF9ZnVuY3Rpb24gVmEoYSxjLGIpe2E9YVtjXTtjb25zdCBlPWFbMF18fGE7ZS5pbmRleHx8KGUuaW5kZXg9Yik7Yj1uZXcgWChlKTthLmxlbmd0aD4xJiYoYj1iW2NdLmFwcGx5KGIsYS5zbGljZSgxKSkpO3JldHVybiBifTtYLnByb3RvdHlwZS5vcj1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwib3JcIixYYSxhcmd1bWVudHMpfTtmdW5jdGlvbiBYYShhLGMsYixlLGQsZixnKXthLmxlbmd0aCYmKHRoaXMucmVzdWx0Lmxlbmd0aCYmYS5wdXNoKHRoaXMucmVzdWx0KSxhLmxlbmd0aDwyP3RoaXMucmVzdWx0PWFbMF06KHRoaXMucmVzdWx0PVlhKGEsYyxiLCExLHRoaXMuaCksYj0wKSk7ZCYmKHRoaXMuYXdhaXQ9bnVsbCk7cmV0dXJuIGQ/dGhpcy5yZXNvbHZlKGMsYixlLGcpOnRoaXN9O1gucHJvdG90eXBlLmFuZD1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwiYW5kXCIsWmEsYXJndW1lbnRzKX07ZnVuY3Rpb24gWmEoYSxjLGIsZSxkLGYsZyl7aWYoIWYmJiF0aGlzLnJlc3VsdC5sZW5ndGgpcmV0dXJuIGQ/dGhpcy5yZXN1bHQ6dGhpcztsZXQgaDtpZihhLmxlbmd0aClpZih0aGlzLnJlc3VsdC5sZW5ndGgmJmEudW5zaGlmdCh0aGlzLnJlc3VsdCksYS5sZW5ndGg8Mil0aGlzLnJlc3VsdD1hWzBdO2Vsc2V7bGV0IGs9MDtmb3IobGV0IGw9MCxtLHA7bDxhLmxlbmd0aDtsKyspaWYoKG09YVtsXSkmJihwPW0ubGVuZ3RoKSlrPHAmJihrPXApO2Vsc2UgaWYoIWYpe2s9MDticmVha31rPyh0aGlzLnJlc3VsdD0kYShhLGssYyxiLGYsdGhpcy5oLGQpLGg9ITApOnRoaXMucmVzdWx0PVtdfWVsc2UgZnx8KHRoaXMucmVzdWx0PWEpO2QmJih0aGlzLmF3YWl0PW51bGwpO3JldHVybiBkP3RoaXMucmVzb2x2ZShjLGIsZSxnLGgpOnRoaXN9O1gucHJvdG90eXBlLnhvcj1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwieG9yXCIsYWIsYXJndW1lbnRzKX07XG5mdW5jdGlvbiBhYihhLGMsYixlLGQsZixnKXtpZihhLmxlbmd0aClpZih0aGlzLnJlc3VsdC5sZW5ndGgmJmEudW5zaGlmdCh0aGlzLnJlc3VsdCksYS5sZW5ndGg8Mil0aGlzLnJlc3VsdD1hWzBdO2Vsc2V7YTp7Zj1iO3ZhciBoPXRoaXMuaDtjb25zdCBrPVtdLGw9SSgpO2xldCBtPTA7Zm9yKGxldCBwPTAsdTtwPGEubGVuZ3RoO3ArKylpZih1PWFbcF0pe208dS5sZW5ndGgmJihtPXUubGVuZ3RoKTtmb3IobGV0IHI9MCx0O3I8dS5sZW5ndGg7cisrKWlmKHQ9dVtyXSlmb3IobGV0IG49MCxxO248dC5sZW5ndGg7bisrKXE9dFtuXSxsW3FdPWxbcV0/MjoxfWZvcihsZXQgcD0wLHUscj0wO3A8bTtwKyspZm9yKGxldCB0PTAsbjt0PGEubGVuZ3RoO3QrKylpZihuPWFbdF0paWYodT1uW3BdKWZvcihsZXQgcT0wLHg7cTx1Lmxlbmd0aDtxKyspaWYoeD11W3FdLGxbeF09PT0xKWlmKGYpZi0tO2Vsc2UgaWYoZCl7aWYoay5wdXNoKHgpLGsubGVuZ3RoPT09Yyl7YT1rO2JyZWFrIGF9fWVsc2V7Y29uc3Qgdj1cbnArKHQ/aDowKTtrW3ZdfHwoa1t2XT1bXSk7a1t2XS5wdXNoKHgpO2lmKCsrcj09PWMpe2E9azticmVhayBhfX1hPWt9dGhpcy5yZXN1bHQ9YTtoPSEwfWVsc2UgZnx8KHRoaXMucmVzdWx0PWEpO2QmJih0aGlzLmF3YWl0PW51bGwpO3JldHVybiBkP3RoaXMucmVzb2x2ZShjLGIsZSxnLGgpOnRoaXN9O1gucHJvdG90eXBlLm5vdD1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwibm90XCIsYmIsYXJndW1lbnRzKX07XG5mdW5jdGlvbiBiYihhLGMsYixlLGQsZixnKXtpZighZiYmIXRoaXMucmVzdWx0Lmxlbmd0aClyZXR1cm4gZD90aGlzLnJlc3VsdDp0aGlzO2lmKGEubGVuZ3RoJiZ0aGlzLnJlc3VsdC5sZW5ndGgpe2E6e2Y9Yjt2YXIgaD1bXTthPW5ldyBTZXQoYS5mbGF0KCkuZmxhdCgpKTtmb3IobGV0IGs9MCxsLG09MDtrPHRoaXMucmVzdWx0Lmxlbmd0aDtrKyspaWYobD10aGlzLnJlc3VsdFtrXSlmb3IobGV0IHA9MCx1O3A8bC5sZW5ndGg7cCsrKWlmKHU9bFtwXSwhYS5oYXModSkpaWYoZilmLS07ZWxzZSBpZihkKXtpZihoLnB1c2godSksaC5sZW5ndGg9PT1jKXthPWg7YnJlYWsgYX19ZWxzZSBpZihoW2tdfHwoaFtrXT1bXSksaFtrXS5wdXNoKHUpLCsrbT09PWMpe2E9aDticmVhayBhfWE9aH10aGlzLnJlc3VsdD1hO2g9ITB9ZCYmKHRoaXMuYXdhaXQ9bnVsbCk7cmV0dXJuIGQ/dGhpcy5yZXNvbHZlKGMsYixlLGcsaCk6dGhpc307ZnVuY3Rpb24gY2IoYSxjLGIsZSxkKXtsZXQgZixnLGg7dHlwZW9mIGQ9PT1cInN0cmluZ1wiPyhmPWQsZD1cIlwiKTpmPWQudGVtcGxhdGU7Zz1mLmluZGV4T2YoXCIkMVwiKTtoPWYuc3Vic3RyaW5nKGcrMik7Zz1mLnN1YnN0cmluZygwLGcpO2xldCBrPWQmJmQuYm91bmRhcnksbD0hZHx8ZC5jbGlwIT09ITEsbT1kJiZkLm1lcmdlJiZoJiZnJiZuZXcgUmVnRXhwKGgrXCIgXCIrZyxcImdcIik7ZD1kJiZkLmVsbGlwc2lzO3ZhciBwPTA7aWYodHlwZW9mIGQ9PT1cIm9iamVjdFwiKXt2YXIgdT1kLnRlbXBsYXRlO3A9dS5sZW5ndGgtMjtkPWQucGF0dGVybn10eXBlb2YgZCE9PVwic3RyaW5nXCImJihkPWQ9PT0hMT9cIlwiOlwiLi4uXCIpO3AmJihkPXUucmVwbGFjZShcIiQxXCIsZCkpO3U9ZC5sZW5ndGgtcDtsZXQgcix0O3R5cGVvZiBrPT09XCJvYmplY3RcIiYmKHI9ay5iZWZvcmUscj09PTAmJihyPS0xKSx0PWsuYWZ0ZXIsdD09PTAmJih0PS0xKSxrPWsudG90YWx8fDlFNSk7cD1uZXcgTWFwO2ZvcihsZXQgT2E9MCxcbmRhLGRiLHBhO09hPGMubGVuZ3RoO09hKyspe2xldCBxYTtpZihlKXFhPWMscGE9ZTtlbHNle3ZhciBuPWNbT2FdO3BhPW4uZmllbGQ7aWYoIXBhKWNvbnRpbnVlO3FhPW4ucmVzdWx0fWRiPWIuZ2V0KHBhKTtkYT1kYi5lbmNvZGVyO249cC5nZXQoZGEpO3R5cGVvZiBuIT09XCJzdHJpbmdcIiYmKG49ZGEuZW5jb2RlKGEpLHAuc2V0KGRhLG4pKTtmb3IobGV0IHlhPTA7eWE8cWEubGVuZ3RoO3lhKyspe3ZhciBxPXFhW3lhXS5kb2M7aWYoIXEpY29udGludWU7cT1jYShxLHBhKTtpZighcSljb250aW51ZTt2YXIgeD1xLnRyaW0oKS5zcGxpdCgvXFxzKy8pO2lmKCF4Lmxlbmd0aCljb250aW51ZTtxPVwiXCI7dmFyIHY9W107bGV0IHphPVtdO3ZhciBBPS0xLEQ9LTEsRz0wO2Zvcih2YXIgRT0wO0U8eC5sZW5ndGg7RSsrKXt2YXIgQj14W0VdLHo9ZGEuZW5jb2RlKEIpO3o9ei5sZW5ndGg+MT96LmpvaW4oXCIgXCIpOnpbMF07bGV0IHk7aWYoeiYmQil7dmFyIEM9Qi5sZW5ndGgsSz0oZGEuc3BsaXQ/XG5CLnJlcGxhY2UoZGEuc3BsaXQsXCJcIik6QikubGVuZ3RoLXoubGVuZ3RoLEY9XCJcIixOPTA7Zm9yKHZhciBPPTA7TzxuLmxlbmd0aDtPKyspe3ZhciBQPW5bT107aWYoUCl7dmFyIEw9UC5sZW5ndGg7TCs9SztOJiZMPD1OfHwoUD16LmluZGV4T2YoUCksUD4tMSYmKEY9KFA/Qi5zdWJzdHJpbmcoMCxQKTpcIlwiKStnK0Iuc3Vic3RyaW5nKFAsUCtMKStoKyhQK0w8Qz9CLnN1YnN0cmluZyhQK0wpOlwiXCIpLE49TCx5PSEwKSl9fUYmJihrJiYoQTwwJiYoQT1xLmxlbmd0aCsocT8xOjApKSxEPXEubGVuZ3RoKyhxPzE6MCkrRi5sZW5ndGgsRys9Qyx6YS5wdXNoKHYubGVuZ3RoKSx2LnB1c2goe21hdGNoOkZ9KSkscSs9KHE/XCIgXCI6XCJcIikrRil9aWYoIXkpQj14W0VdLHErPShxP1wiIFwiOlwiXCIpK0IsayYmdi5wdXNoKHt0ZXh0OkJ9KTtlbHNlIGlmKGsmJkc+PWspYnJlYWt9Rz16YS5sZW5ndGgqKGYubGVuZ3RoLTIpO2lmKHJ8fHR8fGsmJnEubGVuZ3RoLUc+aylpZihHPWsrRy11KjIsRT1ELUEscj4wJiZcbihFKz1yKSx0PjAmJihFKz10KSxFPD1HKXg9cj9BLShyPjA/cjowKTpBLSgoRy1FKS8yfDApLHY9dD9EKyh0PjA/dDowKTp4K0csbHx8KHg+MCYmcS5jaGFyQXQoeCkhPT1cIiBcIiYmcS5jaGFyQXQoeC0xKSE9PVwiIFwiJiYoeD1xLmluZGV4T2YoXCIgXCIseCkseDwwJiYoeD0wKSksdjxxLmxlbmd0aCYmcS5jaGFyQXQodi0xKSE9PVwiIFwiJiZxLmNoYXJBdCh2KSE9PVwiIFwiJiYodj1xLmxhc3RJbmRleE9mKFwiIFwiLHYpLHY8RD92PUQ6Kyt2KSkscT0oeD9kOlwiXCIpK3Euc3Vic3RyaW5nKHgsdikrKHY8cS5sZW5ndGg/ZDpcIlwiKTtlbHNle0Q9W107QT17fTtHPXt9O0U9e307Qj17fTt6PXt9O0Y9Sz1DPTA7Zm9yKE89Tj0xOzspe3ZhciBVPXZvaWQgMDtmb3IobGV0IHk9MCxKO3k8emEubGVuZ3RoO3krKyl7Sj16YVt5XTtpZihGKWlmKEshPT1GKXtpZihFW3krMV0pY29udGludWU7Sis9RjtpZihBW0pdKXtDLT11O0dbeSsxXT0xO0VbeSsxXT0xO2NvbnRpbnVlfWlmKEo+PXYubGVuZ3RoLTEpe2lmKEo+PVxudi5sZW5ndGgpe0VbeSsxXT0xO0o+PXgubGVuZ3RoJiYoR1t5KzFdPTEpO2NvbnRpbnVlfUMtPXV9cT12W0pdLnRleHQ7aWYoTD10JiZ6W3ldKWlmKEw+MCl7aWYocS5sZW5ndGg+TClpZihFW3krMV09MSxsKXE9cS5zdWJzdHJpbmcoMCxMKTtlbHNlIGNvbnRpbnVlOyhMLT1xLmxlbmd0aCl8fChMPS0xKTt6W3ldPUx9ZWxzZXtFW3krMV09MTtjb250aW51ZX1pZihDK3EubGVuZ3RoKzE8PWspcT1cIiBcIitxLERbeV0rPXE7ZWxzZSBpZihsKVU9ay1DLTEsVT4wJiYocT1cIiBcIitxLnN1YnN0cmluZygwLFUpLERbeV0rPXEpLEVbeSsxXT0xO2Vsc2V7RVt5KzFdPTE7Y29udGludWV9fWVsc2V7aWYoRVt5XSljb250aW51ZTtKLT1LO2lmKEFbSl0pe0MtPXU7RVt5XT0xO0dbeV09MTtjb250aW51ZX1pZihKPD0wKXtpZihKPDApe0VbeV09MTtHW3ldPTE7Y29udGludWV9Qy09dX1xPXZbSl0udGV4dDtpZihMPXImJkJbeV0paWYoTD4wKXtpZihxLmxlbmd0aD5MKWlmKEVbeV09MSxsKXE9cS5zdWJzdHJpbmcocS5sZW5ndGgtXG5MKTtlbHNlIGNvbnRpbnVlOyhMLT1xLmxlbmd0aCl8fChMPS0xKTtCW3ldPUx9ZWxzZXtFW3ldPTE7Y29udGludWV9aWYoQytxLmxlbmd0aCsxPD1rKXErPVwiIFwiLERbeV09cStEW3ldO2Vsc2UgaWYobClVPXEubGVuZ3RoKzEtKGstQyksVT49MCYmVTxxLmxlbmd0aCYmKHE9cS5zdWJzdHJpbmcoVSkrXCIgXCIsRFt5XT1xK0RbeV0pLEVbeV09MTtlbHNle0VbeV09MTtjb250aW51ZX19ZWxzZXtxPXZbSl0ubWF0Y2g7ciYmKEJbeV09cik7dCYmKHpbeV09dCk7eSYmQysrO2xldCBQYTtKPyF5JiZ1JiYoQys9dSk6KEdbeV09MSxFW3ldPTEpO0o+PXgubGVuZ3RoLTE/UGE9MTpKPHYubGVuZ3RoLTEmJnZbSisxXS5tYXRjaD9QYT0xOnUmJihDKz11KTtDLT1mLmxlbmd0aC0yO2lmKCF5fHxDK3EubGVuZ3RoPD1rKURbeV09cTtlbHNle1U9Tj1PPUdbeV09MDticmVha31QYSYmKEdbeSsxXT0xLEVbeSsxXT0xKX1DKz1xLmxlbmd0aDtVPUFbSl09MX1pZihVKUs9PT1GP0YrKzpLKys7ZWxzZXtLPT09XG5GP049MDpPPTA7aWYoIU4mJiFPKWJyZWFrO04/KEsrKyxGPUspOkYrK319cT1cIlwiO2ZvcihsZXQgeT0wLEo7eTxELmxlbmd0aDt5KyspSj0oeSYmR1t5XT9cIiBcIjooeSYmIWQ/XCIgXCI6XCJcIikrZCkrRFt5XSxxKz1KO2QmJiFHW0QubGVuZ3RoXSYmKHErPWQpfW0mJihxPXEucmVwbGFjZShtLFwiIFwiKSk7cWFbeWFdLmhpZ2hsaWdodD1xfWlmKGUpYnJlYWt9cmV0dXJuIGN9O2Z1bmN0aW9uIFgoYSxjKXtpZighdGhpc3x8dGhpcy5jb25zdHJ1Y3RvciE9PVgpcmV0dXJuIG5ldyBYKGEsYyk7bGV0IGI9MCxlLGQsZixnLGgsaztpZihhJiZhLmluZGV4KXtjb25zdCBsPWE7Yz1sLmluZGV4O2I9bC5ib29zdHx8MDtpZihkPWwucXVlcnkpe2Y9bC5maWVsZHx8bC5wbHVjaztnPWwuaGlnaGxpZ2h0O2NvbnN0IG09bC5yZXNvbHZlO2E9bC5hc3luY3x8bC5xdWV1ZTtsLnJlc29sdmU9ITE7bC5pbmRleD1udWxsO2E9YT9jLnNlYXJjaEFzeW5jKGwpOmMuc2VhcmNoKGwpO2wucmVzb2x2ZT1tO2wuaW5kZXg9YzthPWEucmVzdWx0fHxhfWVsc2UgYT1bXX1pZihhJiZhLnRoZW4pe2NvbnN0IGw9dGhpczthPWEudGhlbihmdW5jdGlvbihtKXtsLkNbMF09bC5yZXN1bHQ9bS5yZXN1bHR8fG07V2EobCl9KTtlPVthXTthPVtdO2g9bmV3IFByb21pc2UoZnVuY3Rpb24obSl7az1tfSl9dGhpcy5pbmRleD1jfHxudWxsO3RoaXMucmVzdWx0PWF8fFtdO3RoaXMuaD1iO3RoaXMuQz1cbmV8fFtdO3RoaXMuYXdhaXQ9aHx8bnVsbDt0aGlzLnJldHVybj1rfHxudWxsO3RoaXMuaGlnaGxpZ2h0PWd8fG51bGw7dGhpcy5xdWVyeT1kfHxcIlwiO3RoaXMuZmllbGQ9Znx8XCJcIn13PVgucHJvdG90eXBlO3cubGltaXQ9ZnVuY3Rpb24oYSl7aWYodGhpcy5hd2FpdCl7Y29uc3QgYz10aGlzO3RoaXMuQy5wdXNoKGZ1bmN0aW9uKCl7cmV0dXJuIGMubGltaXQoYSkucmVzdWx0fSl9ZWxzZSBpZih0aGlzLnJlc3VsdC5sZW5ndGgpe2NvbnN0IGM9W107Zm9yKGxldCBiPTAsZTtiPHRoaXMucmVzdWx0Lmxlbmd0aDtiKyspaWYoZT10aGlzLnJlc3VsdFtiXSlpZihlLmxlbmd0aDw9YSl7aWYoY1tiXT1lLGEtPWUubGVuZ3RoLCFhKWJyZWFrfWVsc2V7Y1tiXT1lLnNsaWNlKDAsYSk7YnJlYWt9dGhpcy5yZXN1bHQ9Y31yZXR1cm4gdGhpc307XG53Lm9mZnNldD1mdW5jdGlvbihhKXtpZih0aGlzLmF3YWl0KXtjb25zdCBjPXRoaXM7dGhpcy5DLnB1c2goZnVuY3Rpb24oKXtyZXR1cm4gYy5vZmZzZXQoYSkucmVzdWx0fSl9ZWxzZSBpZih0aGlzLnJlc3VsdC5sZW5ndGgpe2NvbnN0IGM9W107Zm9yKGxldCBiPTAsZTtiPHRoaXMucmVzdWx0Lmxlbmd0aDtiKyspaWYoZT10aGlzLnJlc3VsdFtiXSllLmxlbmd0aDw9YT9hLT1lLmxlbmd0aDooY1tiXT1lLnNsaWNlKGEpLGE9MCk7dGhpcy5yZXN1bHQ9Y31yZXR1cm4gdGhpc307dy5ib29zdD1mdW5jdGlvbihhKXtpZih0aGlzLmF3YWl0KXtjb25zdCBjPXRoaXM7dGhpcy5DLnB1c2goZnVuY3Rpb24oKXtyZXR1cm4gYy5ib29zdChhKS5yZXN1bHR9KX1lbHNlIHRoaXMuaCs9YTtyZXR1cm4gdGhpc307XG5mdW5jdGlvbiBXYShhLGMpe2xldCBiPWEucmVzdWx0O3ZhciBlPWEuYXdhaXQ7YS5hd2FpdD1udWxsO2ZvcihsZXQgZD0wLGY7ZDxhLkMubGVuZ3RoO2QrKylpZihmPWEuQ1tkXSlpZih0eXBlb2YgZj09PVwiZnVuY3Rpb25cIiliPWYoKSxhLkNbZF09Yj1iLnJlc3VsdHx8YixkLS07ZWxzZSBpZihmLmgpYj1mLmgoKSxhLkNbZF09Yj1iLnJlc3VsdHx8YixkLS07ZWxzZSBpZihmLnRoZW4pcmV0dXJuIGEuYXdhaXQ9ZTtlPWEucmV0dXJuO2EuQz1bXTthLnJldHVybj1udWxsO2N8fGUoYik7cmV0dXJuIGJ9XG53LnJlc29sdmU9ZnVuY3Rpb24oYSxjLGIsZSxkKXtsZXQgZj10aGlzLmF3YWl0P1dhKHRoaXMsITApOnRoaXMucmVzdWx0O2lmKGYudGhlbil7Y29uc3QgZz10aGlzO3JldHVybiBmLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZy5yZXNvbHZlKGEsYyxiLGUsZCl9KX1mLmxlbmd0aCYmKHR5cGVvZiBhPT09XCJvYmplY3RcIj8oZT1hLmhpZ2hsaWdodHx8dGhpcy5oaWdobGlnaHQsYj0hIWV8fGEuZW5yaWNoLGM9YS5vZmZzZXQsYT1hLmxpbWl0KTooZT1lfHx0aGlzLmhpZ2hsaWdodCxiPSEhZXx8YiksZj1kP2I/VGEuY2FsbCh0aGlzLmluZGV4LGYpOmY6U2EuY2FsbCh0aGlzLmluZGV4LGYsYXx8MTAwLGMsYikpO3JldHVybiB0aGlzLmZpbmFsaXplKGYsZSl9O1xudy5maW5hbGl6ZT1mdW5jdGlvbihhLGMpe2lmKGEudGhlbil7Y29uc3QgZT10aGlzO3JldHVybiBhLnRoZW4oZnVuY3Rpb24oZCl7cmV0dXJuIGUuZmluYWxpemUoZCxjKX0pfWMmJmEubGVuZ3RoJiZ0aGlzLnF1ZXJ5JiYoYT1jYih0aGlzLnF1ZXJ5LGEsdGhpcy5pbmRleC5pbmRleCx0aGlzLmZpZWxkLGMpKTtjb25zdCBiPXRoaXMucmV0dXJuO3RoaXMuaGlnaGxpZ2h0PXRoaXMuaW5kZXg9dGhpcy5yZXN1bHQ9dGhpcy5DPXRoaXMuYXdhaXQ9dGhpcy5yZXR1cm49bnVsbDt0aGlzLnF1ZXJ5PXRoaXMuZmllbGQ9XCJcIjtiJiZiKGEpO3JldHVybiBhfTtmdW5jdGlvbiAkYShhLGMsYixlLGQsZixnKXtjb25zdCBoPWEubGVuZ3RoO2xldCBrPVtdLGwsbTtsPUkoKTtmb3IobGV0IHA9MCx1LHIsdCxuO3A8YztwKyspZm9yKGxldCBxPTA7cTxoO3ErKylpZih0PWFbcV0scDx0Lmxlbmd0aCYmKHU9dFtwXSkpZm9yKGxldCB4PTA7eDx1Lmxlbmd0aDt4Kyspe3I9dVt4XTsobT1sW3JdKT9sW3JdKys6KG09MCxsW3JdPTEpO249a1ttXXx8KGtbbV09W10pO2lmKCFnKXtsZXQgdj1wKyhxfHwhZD8wOmZ8fDApO249blt2XXx8KG5bdl09W10pfW4ucHVzaChyKTtpZihnJiZiJiZtPT09aC0xJiZuLmxlbmd0aC1lPT09YilyZXR1cm4gZT9uLnNsaWNlKGUpOm59aWYoYT1rLmxlbmd0aClpZihkKWs9ay5sZW5ndGg+MT9ZYShrLGIsZSxnLGYpOihrPWtbMF0pJiZiJiZrLmxlbmd0aD5ifHxlP2suc2xpY2UoZSxiK2UpOms7ZWxzZXtpZihhPGgpcmV0dXJuW107az1rW2EtMV07aWYoYnx8ZSlpZihnKXtpZihrLmxlbmd0aD5ifHxlKWs9ay5zbGljZShlLGIrXG5lKX1lbHNle2Q9W107Zm9yKGxldCBwPTAsdTtwPGsubGVuZ3RoO3ArKylpZih1PWtbcF0paWYoZSYmdS5sZW5ndGg+ZSllLT11Lmxlbmd0aDtlbHNle2lmKGImJnUubGVuZ3RoPmJ8fGUpdT11LnNsaWNlKGUsYitlKSxiLT11Lmxlbmd0aCxlJiYoZS09dS5sZW5ndGgpO2QucHVzaCh1KTtpZighYilicmVha31rPWR9fXJldHVybiBrfVxuZnVuY3Rpb24gWWEoYSxjLGIsZSxkKXtjb25zdCBmPVtdLGc9SSgpO2xldCBoO3ZhciBrPWEubGVuZ3RoO2xldCBsO2lmKGUpZm9yKGQ9ay0xO2Q+PTA7ZC0tKXtpZihsPShlPWFbZF0pJiZlLmxlbmd0aClmb3Ioaz0wO2s8bDtrKyspaWYoaD1lW2tdLCFnW2hdKWlmKGdbaF09MSxiKWItLTtlbHNlIGlmKGYucHVzaChoKSxmLmxlbmd0aD09PWMpcmV0dXJuIGZ9ZWxzZSBmb3IobGV0IG09ay0xLHAsdT0wO20+PTA7bS0tKXtwPWFbbV07Zm9yKGxldCByPTA7cjxwLmxlbmd0aDtyKyspaWYobD0oZT1wW3JdKSYmZS5sZW5ndGgpZm9yKGxldCB0PTA7dDxsO3QrKylpZihoPWVbdF0sIWdbaF0paWYoZ1toXT0xLGIpYi0tO2Vsc2V7bGV0IG49KHIrKG08ay0xP2R8fDA6MCkpLyhtKzEpfDA7KGZbbl18fChmW25dPVtdKSkucHVzaChoKTtpZigrK3U9PT1jKXJldHVybiBmfX1yZXR1cm4gZn1cbmZ1bmN0aW9uIGViKGEsYyxiKXtjb25zdCBlPUkoKSxkPVtdO2ZvcihsZXQgZj0wLGc7ZjxjLmxlbmd0aDtmKyspe2c9Y1tmXTtmb3IobGV0IGg9MDtoPGcubGVuZ3RoO2grKyllW2dbaF1dPTF9aWYoYilmb3IobGV0IGY9MCxnO2Y8YS5sZW5ndGg7ZisrKWc9YVtmXSxlW2ddJiYoZC5wdXNoKGcpLGVbZ109MCk7ZWxzZSBmb3IobGV0IGY9MCxnLGg7ZjxhLnJlc3VsdC5sZW5ndGg7ZisrKWZvcihnPWEucmVzdWx0W2ZdLGM9MDtjPGcubGVuZ3RoO2MrKyloPWdbY10sZVtoXSYmKChkW2ZdfHwoZFtmXT1bXSkpLnB1c2goaCksZVtoXT0wKTtyZXR1cm4gZH07SSgpO05hLnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24oYSxjLGIsZSl7Ynx8KCFjJiZiYShhKT8oYj1hLGE9XCJcIik6YmEoYykmJihiPWMsYz0wKSk7bGV0IGQ9W107dmFyIGY9W107bGV0IGc7bGV0IGgsayxsLG0scDtsZXQgdT0wLHI9ITAsdDtpZihiKXtiLmNvbnN0cnVjdG9yPT09QXJyYXkmJihiPXtpbmRleDpifSk7YT1iLnF1ZXJ5fHxhO2c9Yi5wbHVjaztoPWIubWVyZ2U7bD1iLmJvb3N0O3A9Z3x8Yi5maWVsZHx8KHA9Yi5pbmRleCkmJihwLmluZGV4P251bGw6cCk7dmFyIG49dGhpcy50YWcmJmIudGFnO2s9Yi5zdWdnZXN0O3I9Yi5yZXNvbHZlIT09ITE7bT1iLmNhY2hlO3Q9ciYmdGhpcy5zdG9yZSYmYi5oaWdobGlnaHQ7dmFyIHE9ISF0fHxyJiZ0aGlzLnN0b3JlJiZiLmVucmljaDtjPWIubGltaXR8fGM7dmFyIHg9Yi5vZmZzZXR8fDA7Y3x8KGM9cj8xMDA6MCk7aWYobiYmKCF0aGlzLmRifHwhZSkpe24uY29uc3RydWN0b3IhPT1BcnJheSYmKG49W25dKTt2YXIgdj1bXTtmb3IobGV0IEI9XG4wLHo7QjxuLmxlbmd0aDtCKyspaWYoej1uW0JdLHouZmllbGQmJnoudGFnKXt2YXIgQT16LnRhZztpZihBLmNvbnN0cnVjdG9yPT09QXJyYXkpZm9yKHZhciBEPTA7RDxBLmxlbmd0aDtEKyspdi5wdXNoKHouZmllbGQsQVtEXSk7ZWxzZSB2LnB1c2goei5maWVsZCxBKX1lbHNle0E9T2JqZWN0LmtleXMoeik7Zm9yKGxldCBDPTAsSyxGO0M8QS5sZW5ndGg7QysrKWlmKEs9QVtDXSxGPXpbS10sRi5jb25zdHJ1Y3Rvcj09PUFycmF5KWZvcihEPTA7RDxGLmxlbmd0aDtEKyspdi5wdXNoKEssRltEXSk7ZWxzZSB2LnB1c2goSyxGKX1uPXY7aWYoIWEpe2Y9W107aWYodi5sZW5ndGgpZm9yKG49MDtuPHYubGVuZ3RoO24rPTIpe2lmKHRoaXMuZGIpe2U9dGhpcy5pbmRleC5nZXQodltuXSk7aWYoIWUpY29udGludWU7Zi5wdXNoKGU9ZS5kYi50YWcodltuKzFdLGMseCxxKSl9ZWxzZSBlPWZiLmNhbGwodGhpcyx2W25dLHZbbisxXSxjLHgscSk7ZC5wdXNoKHI/e2ZpZWxkOnZbbl0sdGFnOnZbbitcbjFdLHJlc3VsdDplfTpbZV0pfWlmKGYubGVuZ3RoKXtjb25zdCBCPXRoaXM7cmV0dXJuIFByb21pc2UuYWxsKGYpLnRoZW4oZnVuY3Rpb24oeil7Zm9yKGxldCBDPTA7Qzx6Lmxlbmd0aDtDKyspcj9kW0NdLnJlc3VsdD16W0NdOmRbQ109eltDXTtyZXR1cm4gcj9kOm5ldyBYKGQubGVuZ3RoPjE/JGEoZCwxLDAsMCxrLGwpOmRbMF0sQil9KX1yZXR1cm4gcj9kOm5ldyBYKGQubGVuZ3RoPjE/JGEoZCwxLDAsMCxrLGwpOmRbMF0sdGhpcyl9fXJ8fGd8fCEocD1wfHx0aGlzLmZpZWxkKXx8KE0ocCk/Zz1wOihwLmNvbnN0cnVjdG9yPT09QXJyYXkmJnAubGVuZ3RoPT09MSYmKHA9cFswXSksZz1wLmZpZWxkfHxwLmluZGV4KSk7cCYmcC5jb25zdHJ1Y3RvciE9PUFycmF5JiYocD1bcF0pfXB8fChwPXRoaXMuZmllbGQpO2xldCBHO3Y9KHRoaXMud29ya2VyfHx0aGlzLmRiKSYmIWUmJltdO2ZvcihsZXQgQj0wLHosQyxLO0I8cC5sZW5ndGg7QisrKXtDPXBbQl07aWYodGhpcy5kYiYmdGhpcy50YWcmJlxuIXRoaXMuQltCXSljb250aW51ZTtsZXQgRjtNKEMpfHwoRj1DLEM9Ri5maWVsZCxhPUYucXVlcnl8fGEsYz1hYShGLmxpbWl0LGMpLHg9YWEoRi5vZmZzZXQseCksaz1hYShGLnN1Z2dlc3QsayksdD1yJiZ0aGlzLnN0b3JlJiZhYShGLmhpZ2hsaWdodCx0KSxxPSEhdHx8ciYmdGhpcy5zdG9yZSYmYWEoRi5lbnJpY2gscSksbT1hYShGLmNhY2hlLG0pKTtpZihlKXo9ZVtCXTtlbHNle0E9Rnx8Ynx8e307RD1BLmVucmljaDt2YXIgRT10aGlzLmluZGV4LmdldChDKTtuJiYodGhpcy5kYiYmKEEudGFnPW4sRz1FLmRiLnN1cHBvcnRfdGFnX3NlYXJjaCxBLmZpZWxkPXApLCFHJiZEJiYoQS5lbnJpY2g9ITEpKTt6PW0/RS5zZWFyY2hDYWNoZShhLGMsQSk6RS5zZWFyY2goYSxjLEEpO0QmJihBLmVucmljaD1EKTtpZih2KXt2W0JdPXo7Y29udGludWV9fUs9KHo9ei5yZXN1bHR8fHopJiZ6Lmxlbmd0aDtpZihuJiZLKXtBPVtdO0Q9MDtpZih0aGlzLmRiJiZlKXtpZighRylmb3IoRT1wLmxlbmd0aDtFPFxuZS5sZW5ndGg7RSsrKXtsZXQgTj1lW0VdO2lmKE4mJk4ubGVuZ3RoKUQrKyxBLnB1c2goTik7ZWxzZSBpZighaylyZXR1cm4gcj9kOm5ldyBYKGQsdGhpcyl9fWVsc2UgZm9yKGxldCBOPTAsTyxQO048bi5sZW5ndGg7Tis9Mil7Tz10aGlzLnRhZy5nZXQobltOXSk7aWYoIU8paWYoayljb250aW51ZTtlbHNlIHJldHVybiByP2Q6bmV3IFgoZCx0aGlzKTtpZihQPShPPU8mJk8uZ2V0KG5bTisxXSkpJiZPLmxlbmd0aClEKyssQS5wdXNoKE8pO2Vsc2UgaWYoIWspcmV0dXJuIHI/ZDpuZXcgWChkLHRoaXMpfWlmKEQpe3o9ZWIoeixBLHIpO0s9ei5sZW5ndGg7aWYoIUsmJiFrKXJldHVybiByP3o6bmV3IFgoeix0aGlzKTtELS19fWlmKEspZlt1XT1DLGQucHVzaCh6KSx1Kys7ZWxzZSBpZihwLmxlbmd0aD09PTEpcmV0dXJuIHI/ZDpuZXcgWChkLHRoaXMpfWlmKHYpe2lmKHRoaXMuZGImJm4mJm4ubGVuZ3RoJiYhRylmb3IocT0wO3E8bi5sZW5ndGg7cSs9Mil7Zj10aGlzLmluZGV4LmdldChuW3FdKTtcbmlmKCFmKWlmKGspY29udGludWU7ZWxzZSByZXR1cm4gcj9kOm5ldyBYKGQsdGhpcyk7di5wdXNoKGYuZGIudGFnKG5bcSsxXSxjLHgsITEpKX1jb25zdCBCPXRoaXM7cmV0dXJuIFByb21pc2UuYWxsKHYpLnRoZW4oZnVuY3Rpb24oeil7YiYmKGIucmVzb2x2ZT1yKTt6Lmxlbmd0aCYmKHo9Qi5zZWFyY2goYSxjLGIseikpO3JldHVybiB6fSl9aWYoIXUpcmV0dXJuIHI/ZDpuZXcgWChkLHRoaXMpO2lmKGcmJighcXx8IXRoaXMuc3RvcmUpKXJldHVybiBkPWRbMF0scj9kOm5ldyBYKGQsdGhpcyk7dj1bXTtmb3IoeD0wO3g8Zi5sZW5ndGg7eCsrKXtuPWRbeF07cSYmbi5sZW5ndGgmJnR5cGVvZiBuWzBdLmRvYz09PVwidW5kZWZpbmVkXCImJih0aGlzLmRiP3YucHVzaChuPXRoaXMuaW5kZXguZ2V0KHRoaXMuZmllbGRbMF0pLmRiLmVucmljaChuKSk6bj1UYS5jYWxsKHRoaXMsbikpO2lmKGcpcmV0dXJuIHI/dD9jYihhLG4sdGhpcy5pbmRleCxnLHQpOm46bmV3IFgobix0aGlzKTtkW3hdPVxue2ZpZWxkOmZbeF0scmVzdWx0Om59fWlmKHEmJnRoaXMuZGImJnYubGVuZ3RoKXtjb25zdCBCPXRoaXM7cmV0dXJuIFByb21pc2UuYWxsKHYpLnRoZW4oZnVuY3Rpb24oeil7Zm9yKGxldCBDPTA7Qzx6Lmxlbmd0aDtDKyspZFtDXS5yZXN1bHQ9eltDXTt0JiYoZD1jYihhLGQsQi5pbmRleCxnLHQpKTtyZXR1cm4gaD9nYihkKTpkfSl9dCYmKGQ9Y2IoYSxkLHRoaXMuaW5kZXgsZyx0KSk7cmV0dXJuIGg/Z2IoZCk6ZH07XG5mdW5jdGlvbiBnYihhKXtjb25zdCBjPVtdLGI9SSgpLGU9SSgpO2ZvcihsZXQgZD0wLGYsZyxoLGssbCxtLHA7ZDxhLmxlbmd0aDtkKyspe2Y9YVtkXTtnPWYuZmllbGQ7aD1mLnJlc3VsdDtmb3IobGV0IHU9MDt1PGgubGVuZ3RoO3UrKylpZihsPWhbdV0sdHlwZW9mIGwhPT1cIm9iamVjdFwiP2w9e2lkOms9bH06az1sLmlkLChtPWJba10pP20ucHVzaChnKToobC5maWVsZD1iW2tdPVtnXSxjLnB1c2gobCkpLHA9bC5oaWdobGlnaHQpbT1lW2tdLG18fChlW2tdPW09e30sbC5oaWdobGlnaHQ9bSksbVtnXT1wfXJldHVybiBjfWZ1bmN0aW9uIGZiKGEsYyxiLGUsZCl7YT10aGlzLnRhZy5nZXQoYSk7aWYoIWEpcmV0dXJuW107YT1hLmdldChjKTtpZighYSlyZXR1cm5bXTtjPWEubGVuZ3RoLWU7aWYoYz4wKXtpZihiJiZjPmJ8fGUpYT1hLnNsaWNlKGUsZStiKTtkJiYoYT1UYS5jYWxsKHRoaXMsYSkpfXJldHVybiBhfVxuZnVuY3Rpb24gVGEoYSl7aWYoIXRoaXN8fCF0aGlzLnN0b3JlKXJldHVybiBhO2lmKHRoaXMuZGIpcmV0dXJuIHRoaXMuaW5kZXguZ2V0KHRoaXMuZmllbGRbMF0pLmRiLmVucmljaChhKTtjb25zdCBjPUFycmF5KGEubGVuZ3RoKTtmb3IobGV0IGI9MCxlO2I8YS5sZW5ndGg7YisrKWU9YVtiXSxjW2JdPXtpZDplLGRvYzp0aGlzLnN0b3JlLmdldChlKX07cmV0dXJuIGN9O2Z1bmN0aW9uIE5hKGEpe2lmKCF0aGlzfHx0aGlzLmNvbnN0cnVjdG9yIT09TmEpcmV0dXJuIG5ldyBOYShhKTtjb25zdCBjPWEuZG9jdW1lbnR8fGEuZG9jfHxhO2xldCBiLGU7dGhpcy5CPVtdO3RoaXMuZmllbGQ9W107dGhpcy5EPVtdO3RoaXMua2V5PShiPWMua2V5fHxjLmlkKSYmaGIoYix0aGlzLkQpfHxcImlkXCI7KGU9YS5rZXlzdG9yZXx8MCkmJih0aGlzLmtleXN0b3JlPWUpO3RoaXMuZmFzdHVwZGF0ZT0hIWEuZmFzdHVwZGF0ZTt0aGlzLnJlZz0hdGhpcy5mYXN0dXBkYXRlfHxhLndvcmtlcnx8YS5kYj9lP25ldyBTKGUpOm5ldyBTZXQ6ZT9uZXcgUihlKTpuZXcgTWFwO3RoaXMuaD0oYj1jLnN0b3JlfHxudWxsKSYmYiYmYiE9PSEwJiZbXTt0aGlzLnN0b3JlPWI/ZT9uZXcgUihlKTpuZXcgTWFwOm51bGw7dGhpcy5jYWNoZT0oYj1hLmNhY2hlfHxudWxsKSYmbmV3IG1hKGIpO2EuY2FjaGU9ITE7dGhpcy53b3JrZXI9YS53b3JrZXJ8fCExO3RoaXMucHJpb3JpdHk9YS5wcmlvcml0eXx8XG40O3RoaXMuaW5kZXg9aWIuY2FsbCh0aGlzLGEsYyk7dGhpcy50YWc9bnVsbDtpZihiPWMudGFnKWlmKHR5cGVvZiBiPT09XCJzdHJpbmdcIiYmKGI9W2JdKSxiLmxlbmd0aCl7dGhpcy50YWc9bmV3IE1hcDt0aGlzLkE9W107dGhpcy5GPVtdO2ZvcihsZXQgZD0wLGYsZztkPGIubGVuZ3RoO2QrKyl7Zj1iW2RdO2c9Zi5maWVsZHx8ZjtpZighZyl0aHJvdyBFcnJvcihcIlRoZSB0YWcgZmllbGQgZnJvbSB0aGUgZG9jdW1lbnQgZGVzY3JpcHRvciBpcyB1bmRlZmluZWQuXCIpO2YuY3VzdG9tP3RoaXMuQVtkXT1mLmN1c3RvbToodGhpcy5BW2RdPWhiKGcsdGhpcy5EKSxmLmZpbHRlciYmKHR5cGVvZiB0aGlzLkFbZF09PT1cInN0cmluZ1wiJiYodGhpcy5BW2RdPW5ldyBTdHJpbmcodGhpcy5BW2RdKSksdGhpcy5BW2RdLkc9Zi5maWx0ZXIpKTt0aGlzLkZbZF09Zzt0aGlzLnRhZy5zZXQoZyxuZXcgTWFwKX19aWYodGhpcy53b3JrZXIpe3RoaXMuZmFzdHVwZGF0ZT0hMTthPVtdO2Zvcihjb25zdCBkIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpZC50aGVuJiZcbmEucHVzaChkKTtpZihhLmxlbmd0aCl7Y29uc3QgZD10aGlzO3JldHVybiBQcm9taXNlLmFsbChhKS50aGVuKGZ1bmN0aW9uKGYpe2xldCBnPTA7Zm9yKGNvbnN0IGggb2YgZC5pbmRleC5lbnRyaWVzKCkpe2NvbnN0IGs9aFswXTtsZXQgbD1oWzFdO2wudGhlbiYmKGw9ZltnXSxkLmluZGV4LnNldChrLGwpLGcrKyl9cmV0dXJuIGR9KX19ZWxzZSBhLmRiJiYodGhpcy5mYXN0dXBkYXRlPSExLHRoaXMubW91bnQoYS5kYikpfXc9TmEucHJvdG90eXBlO1xudy5tb3VudD1mdW5jdGlvbihhKXtsZXQgYz10aGlzLmZpZWxkO2lmKHRoaXMudGFnKWZvcihsZXQgZj0wLGc7Zjx0aGlzLkYubGVuZ3RoO2YrKyl7Zz10aGlzLkZbZl07dmFyIGI9dm9pZCAwO3RoaXMuaW5kZXguc2V0KGcsYj1uZXcgVCh7fSx0aGlzLnJlZykpO2M9PT10aGlzLmZpZWxkJiYoYz1jLnNsaWNlKDApKTtjLnB1c2goZyk7Yi50YWc9dGhpcy50YWcuZ2V0KGcpfWI9W107Y29uc3QgZT17ZGI6YS5kYix0eXBlOmEudHlwZSxmYXN0dXBkYXRlOmEuZmFzdHVwZGF0ZX07Zm9yKGxldCBmPTAsZyxoO2Y8Yy5sZW5ndGg7ZisrKXtlLmZpZWxkPWg9Y1tmXTtnPXRoaXMuaW5kZXguZ2V0KGgpO2NvbnN0IGs9bmV3IGEuY29uc3RydWN0b3IoYS5pZCxlKTtrLmlkPWEuaWQ7YltmXT1rLm1vdW50KGcpO2cuZG9jdW1lbnQ9ITA7Zj9nLmJ5cGFzcz0hMDpnLnN0b3JlPXRoaXMuc3RvcmV9Y29uc3QgZD10aGlzO3JldHVybiB0aGlzLmRiPVByb21pc2UuYWxsKGIpLnRoZW4oZnVuY3Rpb24oKXtkLmRiPVxuITB9KX07dy5jb21taXQ9YXN5bmMgZnVuY3Rpb24oKXtjb25zdCBhPVtdO2Zvcihjb25zdCBjIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpYS5wdXNoKGMuY29tbWl0KCkpO2F3YWl0IFByb21pc2UuYWxsKGEpO3RoaXMucmVnLmNsZWFyKCl9O3cuZGVzdHJveT1mdW5jdGlvbigpe2NvbnN0IGE9W107Zm9yKGNvbnN0IGMgb2YgdGhpcy5pbmRleC52YWx1ZXMoKSlhLnB1c2goYy5kZXN0cm95KCkpO3JldHVybiBQcm9taXNlLmFsbChhKX07XG5mdW5jdGlvbiBpYihhLGMpe2NvbnN0IGI9bmV3IE1hcDtsZXQgZT1jLmluZGV4fHxjLmZpZWxkfHxjO00oZSkmJihlPVtlXSk7Zm9yKGxldCBmPTAsZyxoO2Y8ZS5sZW5ndGg7ZisrKXtnPWVbZl07TShnKXx8KGg9ZyxnPWcuZmllbGQpO2g9YmEoaCk/T2JqZWN0LmFzc2lnbih7fSxhLGgpOmE7aWYodGhpcy53b3JrZXIpe3ZhciBkPXZvaWQgMDtkPShkPWguZW5jb2RlcikmJmQuZW5jb2RlP2Q6bmV3IGthKHR5cGVvZiBkPT09XCJzdHJpbmdcIj92YVtkXTpkfHx7fSk7ZD1uZXcgTGEoaCxkKTtiLnNldChnLGQpfXRoaXMud29ya2VyfHxiLnNldChnLG5ldyBUKGgsdGhpcy5yZWcpKTtoLmN1c3RvbT90aGlzLkJbZl09aC5jdXN0b206KHRoaXMuQltmXT1oYihnLHRoaXMuRCksaC5maWx0ZXImJih0eXBlb2YgdGhpcy5CW2ZdPT09XCJzdHJpbmdcIiYmKHRoaXMuQltmXT1uZXcgU3RyaW5nKHRoaXMuQltmXSkpLHRoaXMuQltmXS5HPWguZmlsdGVyKSk7dGhpcy5maWVsZFtmXT1nfWlmKHRoaXMuaCl7YT1cbmMuc3RvcmU7TShhKSYmKGE9W2FdKTtmb3IobGV0IGY9MCxnLGg7ZjxhLmxlbmd0aDtmKyspZz1hW2ZdLGg9Zy5maWVsZHx8ZyxnLmN1c3RvbT8odGhpcy5oW2ZdPWcuY3VzdG9tLGcuY3VzdG9tLk89aCk6KHRoaXMuaFtmXT1oYihoLHRoaXMuRCksZy5maWx0ZXImJih0eXBlb2YgdGhpcy5oW2ZdPT09XCJzdHJpbmdcIiYmKHRoaXMuaFtmXT1uZXcgU3RyaW5nKHRoaXMuaFtmXSkpLHRoaXMuaFtmXS5HPWcuZmlsdGVyKSl9cmV0dXJuIGJ9ZnVuY3Rpb24gaGIoYSxjKXtjb25zdCBiPWEuc3BsaXQoXCI6XCIpO2xldCBlPTA7Zm9yKGxldCBkPTA7ZDxiLmxlbmd0aDtkKyspYT1iW2RdLGFbYS5sZW5ndGgtMV09PT1cIl1cIiYmKGE9YS5zdWJzdHJpbmcoMCxhLmxlbmd0aC0yKSkmJihjW2VdPSEwKSxhJiYoYltlKytdPWEpO2U8Yi5sZW5ndGgmJihiLmxlbmd0aD1lKTtyZXR1cm4gZT4xP2I6YlswXX13LmFwcGVuZD1mdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLmFkZChhLGMsITApfTtcbncudXBkYXRlPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIHRoaXMucmVtb3ZlKGEpLmFkZChhLGMpfTt3LnJlbW92ZT1mdW5jdGlvbihhKXtiYShhKSYmKGE9Y2EoYSx0aGlzLmtleSkpO2Zvcih2YXIgYyBvZiB0aGlzLmluZGV4LnZhbHVlcygpKWMucmVtb3ZlKGEsITApO2lmKHRoaXMucmVnLmhhcyhhKSl7aWYodGhpcy50YWcmJiF0aGlzLmZhc3R1cGRhdGUpZm9yKGxldCBiIG9mIHRoaXMudGFnLnZhbHVlcygpKWZvcihsZXQgZSBvZiBiKXtjPWVbMF07Y29uc3QgZD1lWzFdLGY9ZC5pbmRleE9mKGEpO2Y+LTEmJihkLmxlbmd0aD4xP2Quc3BsaWNlKGYsMSk6Yi5kZWxldGUoYykpfXRoaXMuc3RvcmUmJnRoaXMuc3RvcmUuZGVsZXRlKGEpO3RoaXMucmVnLmRlbGV0ZShhKX10aGlzLmNhY2hlJiZ0aGlzLmNhY2hlLnJlbW92ZShhKTtyZXR1cm4gdGhpc307XG53LmNsZWFyPWZ1bmN0aW9uKCl7Y29uc3QgYT1bXTtmb3IoY29uc3QgYyBvZiB0aGlzLmluZGV4LnZhbHVlcygpKXtjb25zdCBiPWMuY2xlYXIoKTtiLnRoZW4mJmEucHVzaChiKX1pZih0aGlzLnRhZylmb3IoY29uc3QgYyBvZiB0aGlzLnRhZy52YWx1ZXMoKSljLmNsZWFyKCk7dGhpcy5zdG9yZSYmdGhpcy5zdG9yZS5jbGVhcigpO3RoaXMuY2FjaGUmJnRoaXMuY2FjaGUuY2xlYXIoKTtyZXR1cm4gYS5sZW5ndGg/UHJvbWlzZS5hbGwoYSk6dGhpc307dy5jb250YWluPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmRiP3RoaXMuaW5kZXguZ2V0KHRoaXMuZmllbGRbMF0pLmRiLmhhcyhhKTp0aGlzLnJlZy5oYXMoYSl9O3cuY2xlYW51cD1mdW5jdGlvbigpe2Zvcihjb25zdCBhIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpYS5jbGVhbnVwKCk7cmV0dXJuIHRoaXN9O1xudy5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZGI/dGhpcy5pbmRleC5nZXQodGhpcy5maWVsZFswXSkuZGIuZW5yaWNoKGEpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGNbMF0mJmNbMF0uZG9jfHxudWxsfSk6dGhpcy5zdG9yZS5nZXQoYSl8fG51bGx9O3cuc2V0PWZ1bmN0aW9uKGEsYyl7dHlwZW9mIGE9PT1cIm9iamVjdFwiJiYoYz1hLGE9Y2EoYyx0aGlzLmtleSkpO3RoaXMuc3RvcmUuc2V0KGEsYyk7cmV0dXJuIHRoaXN9O3cuc2VhcmNoQ2FjaGU9bGE7dy5leHBvcnQ9amI7dy5pbXBvcnQ9a2I7RmEoTmEucHJvdG90eXBlKTtmdW5jdGlvbiBsYihhLGM9MCl7bGV0IGI9W10sZT1bXTtjJiYoYz0yNUU0L2MqNUUzfDApO2Zvcihjb25zdCBkIG9mIGEuZW50cmllcygpKWUucHVzaChkKSxlLmxlbmd0aD09PWMmJihiLnB1c2goZSksZT1bXSk7ZS5sZW5ndGgmJmIucHVzaChlKTtyZXR1cm4gYn1mdW5jdGlvbiBtYihhLGMpe2N8fChjPW5ldyBNYXApO2ZvcihsZXQgYj0wLGU7YjxhLmxlbmd0aDtiKyspZT1hW2JdLGMuc2V0KGVbMF0sZVsxXSk7cmV0dXJuIGN9ZnVuY3Rpb24gbmIoYSxjPTApe2xldCBiPVtdLGU9W107YyYmKGM9MjVFNC9jKjFFM3wwKTtmb3IoY29uc3QgZCBvZiBhLmVudHJpZXMoKSllLnB1c2goW2RbMF0sbGIoZFsxXSlbMF1dKSxlLmxlbmd0aD09PWMmJihiLnB1c2goZSksZT1bXSk7ZS5sZW5ndGgmJmIucHVzaChlKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIG9iKGEsYyl7Y3x8KGM9bmV3IE1hcCk7Zm9yKGxldCBiPTAsZSxkO2I8YS5sZW5ndGg7YisrKWU9YVtiXSxkPWMuZ2V0KGVbMF0pLGMuc2V0KGVbMF0sbWIoZVsxXSxkKSk7cmV0dXJuIGN9ZnVuY3Rpb24gcGIoYSl7bGV0IGM9W10sYj1bXTtmb3IoY29uc3QgZSBvZiBhLmtleXMoKSliLnB1c2goZSksYi5sZW5ndGg9PT0yNUU0JiYoYy5wdXNoKGIpLGI9W10pO2IubGVuZ3RoJiZjLnB1c2goYik7cmV0dXJuIGN9ZnVuY3Rpb24gcWIoYSxjKXtjfHwoYz1uZXcgU2V0KTtmb3IobGV0IGI9MDtiPGEubGVuZ3RoO2IrKyljLmFkZChhW2JdKTtyZXR1cm4gY31cbmZ1bmN0aW9uIHJiKGEsYyxiLGUsZCxmLGc9MCl7Y29uc3QgaD1lJiZlLmNvbnN0cnVjdG9yPT09QXJyYXk7dmFyIGs9aD9lLnNoaWZ0KCk6ZTtpZighaylyZXR1cm4gdGhpcy5leHBvcnQoYSxjLGQsZisxKTtpZigoaz1hKChjP2MrXCIuXCI6XCJcIikrKGcrMSkrXCIuXCIrYixKU09OLnN0cmluZ2lmeShrKSkpJiZrLnRoZW4pe2NvbnN0IGw9dGhpcztyZXR1cm4gay50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHJiLmNhbGwobCxhLGMsYixoP2U6bnVsbCxkLGYsZysxKX0pfXJldHVybiByYi5jYWxsKHRoaXMsYSxjLGIsaD9lOm51bGwsZCxmLGcrMSl9XG5mdW5jdGlvbiBqYihhLGMsYj0wLGU9MCl7aWYoYjx0aGlzLmZpZWxkLmxlbmd0aCl7Y29uc3QgZz10aGlzLmZpZWxkW2JdO2lmKChjPXRoaXMuaW5kZXguZ2V0KGcpLmV4cG9ydChhLGcsYixlPTEpKSYmYy50aGVuKXtjb25zdCBoPXRoaXM7cmV0dXJuIGMudGhlbihmdW5jdGlvbigpe3JldHVybiBoLmV4cG9ydChhLGcsYisxKX0pfXJldHVybiB0aGlzLmV4cG9ydChhLGcsYisxKX1sZXQgZCxmO3N3aXRjaChlKXtjYXNlIDA6ZD1cInJlZ1wiO2Y9cGIodGhpcy5yZWcpO2M9bnVsbDticmVhaztjYXNlIDE6ZD1cInRhZ1wiO2Y9dGhpcy50YWcmJm5iKHRoaXMudGFnLHRoaXMucmVnLnNpemUpO2M9bnVsbDticmVhaztjYXNlIDI6ZD1cImRvY1wiO2Y9dGhpcy5zdG9yZSYmbGIodGhpcy5zdG9yZSk7Yz1udWxsO2JyZWFrO2RlZmF1bHQ6cmV0dXJufXJldHVybiByYi5jYWxsKHRoaXMsYSxjLGQsZnx8bnVsbCxiLGUpfVxuZnVuY3Rpb24ga2IoYSxjKXt2YXIgYj1hLnNwbGl0KFwiLlwiKTtiW2IubGVuZ3RoLTFdPT09XCJqc29uXCImJmIucG9wKCk7Y29uc3QgZT1iLmxlbmd0aD4yP2JbMF06XCJcIjtiPWIubGVuZ3RoPjI/YlsyXTpiWzFdO2lmKHRoaXMud29ya2VyJiZlKXJldHVybiB0aGlzLmluZGV4LmdldChlKS5pbXBvcnQoYSk7aWYoYyl7dHlwZW9mIGM9PT1cInN0cmluZ1wiJiYoYz1KU09OLnBhcnNlKGMpKTtpZihlKXJldHVybiB0aGlzLmluZGV4LmdldChlKS5pbXBvcnQoYixjKTtzd2l0Y2goYil7Y2FzZSBcInJlZ1wiOnRoaXMuZmFzdHVwZGF0ZT0hMTt0aGlzLnJlZz1xYihjLHRoaXMucmVnKTtmb3IobGV0IGQ9MCxmO2Q8dGhpcy5maWVsZC5sZW5ndGg7ZCsrKWY9dGhpcy5pbmRleC5nZXQodGhpcy5maWVsZFtkXSksZi5mYXN0dXBkYXRlPSExLGYucmVnPXRoaXMucmVnO2lmKHRoaXMud29ya2VyKXtjPVtdO2Zvcihjb25zdCBkIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpYy5wdXNoKGQuaW1wb3J0KGEpKTtyZXR1cm4gUHJvbWlzZS5hbGwoYyl9YnJlYWs7XG5jYXNlIFwidGFnXCI6dGhpcy50YWc9b2IoYyx0aGlzLnRhZyk7YnJlYWs7Y2FzZSBcImRvY1wiOnRoaXMuc3RvcmU9bWIoYyx0aGlzLnN0b3JlKX19fWZ1bmN0aW9uIHNiKGEsYyl7bGV0IGI9XCJcIjtmb3IoY29uc3QgZSBvZiBhLmVudHJpZXMoKSl7YT1lWzBdO2NvbnN0IGQ9ZVsxXTtsZXQgZj1cIlwiO2ZvcihsZXQgZz0wLGg7ZzxkLmxlbmd0aDtnKyspe2g9ZFtnXXx8W1wiXCJdO2xldCBrPVwiXCI7Zm9yKGxldCBsPTA7bDxoLmxlbmd0aDtsKyspays9KGs/XCIsXCI6XCJcIikrKGM9PT1cInN0cmluZ1wiPydcIicraFtsXSsnXCInOmhbbF0pO2s9XCJbXCIraytcIl1cIjtmKz0oZj9cIixcIjpcIlwiKStrfWY9J1tcIicrYSsnXCIsWycrZitcIl1dXCI7Yis9KGI/XCIsXCI6XCJcIikrZn1yZXR1cm4gYn07VC5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEsYyl7Y29uc3QgYj10aGlzLnJlZy5zaXplJiYodGhpcy5mYXN0dXBkYXRlP3RoaXMucmVnLmdldChhKTp0aGlzLnJlZy5oYXMoYSkpO2lmKGIpe2lmKHRoaXMuZmFzdHVwZGF0ZSlmb3IobGV0IGU9MCxkLGY7ZTxiLmxlbmd0aDtlKyspe2lmKChkPWJbZV0pJiYoZj1kLmxlbmd0aCkpaWYoZFtmLTFdPT09YSlkLnBvcCgpO2Vsc2V7Y29uc3QgZz1kLmluZGV4T2YoYSk7Zz49MCYmZC5zcGxpY2UoZywxKX19ZWxzZSB0Yih0aGlzLm1hcCxhKSx0aGlzLmRlcHRoJiZ0Yih0aGlzLmN0eCxhKTtjfHx0aGlzLnJlZy5kZWxldGUoYSl9dGhpcy5kYiYmKHRoaXMuY29tbWl0X3Rhc2sucHVzaCh7ZGVsOmF9KSx0aGlzLk0mJnViKHRoaXMpKTt0aGlzLmNhY2hlJiZ0aGlzLmNhY2hlLnJlbW92ZShhKTtyZXR1cm4gdGhpc307XG5mdW5jdGlvbiB0YihhLGMpe2xldCBiPTA7dmFyIGU9dHlwZW9mIGM9PT1cInVuZGVmaW5lZFwiO2lmKGEuY29uc3RydWN0b3I9PT1BcnJheSlmb3IobGV0IGQ9MCxmLGcsaDtkPGEubGVuZ3RoO2QrKyl7aWYoKGY9YVtkXSkmJmYubGVuZ3RoKXtpZihlKXJldHVybiAxO2c9Zi5pbmRleE9mKGMpO2lmKGc+PTApe2lmKGYubGVuZ3RoPjEpcmV0dXJuIGYuc3BsaWNlKGcsMSksMTtkZWxldGUgYVtkXTtpZihiKXJldHVybiAxO2g9MX1lbHNle2lmKGgpcmV0dXJuIDE7YisrfX19ZWxzZSBmb3IobGV0IGQgb2YgYS5lbnRyaWVzKCkpZT1kWzBdLHRiKGRbMV0sYyk/YisrOmEuZGVsZXRlKGUpO3JldHVybiBifTtjb25zdCB2Yj17bWVtb3J5OntyZXNvbHV0aW9uOjF9LHBlcmZvcm1hbmNlOntyZXNvbHV0aW9uOjMsZmFzdHVwZGF0ZTohMCxjb250ZXh0OntkZXB0aDoxLHJlc29sdXRpb246MX19LG1hdGNoOnt0b2tlbml6ZTpcImZvcndhcmRcIn0sc2NvcmU6e3Jlc29sdXRpb246OSxjb250ZXh0OntkZXB0aDoyLHJlc29sdXRpb246M319fTtULnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxjLGIsZSl7aWYoYyYmKGF8fGE9PT0wKSl7aWYoIWUmJiFiJiZ0aGlzLnJlZy5oYXMoYSkpcmV0dXJuIHRoaXMudXBkYXRlKGEsYyk7ZT10aGlzLmRlcHRoO2M9dGhpcy5lbmNvZGVyLmVuY29kZShjLCFlKTtjb25zdCBsPWMubGVuZ3RoO2lmKGwpe2NvbnN0IG09SSgpLHA9SSgpLHU9dGhpcy5yZXNvbHV0aW9uO2ZvcihsZXQgcj0wO3I8bDtyKyspe2xldCB0PWNbdGhpcy5ydGw/bC0xLXI6cl07dmFyIGQ9dC5sZW5ndGg7aWYoZCYmKGV8fCFwW3RdKSl7dmFyIGY9dGhpcy5zY29yZT90aGlzLnNjb3JlKGMsdCxyLG51bGwsMCk6d2IodSxsLHIpLGc9XCJcIjtzd2l0Y2godGhpcy50b2tlbml6ZSl7Y2FzZSBcInRvbGVyYW50XCI6WSh0aGlzLHAsdCxmLGEsYik7aWYoZD4yKXtmb3IobGV0IG49MSxxLHgsdixBO248ZC0xO24rKylxPXQuY2hhckF0KG4pLHg9dC5jaGFyQXQobisxKSx2PXQuc3Vic3RyaW5nKDAsbikreCxBPXQuc3Vic3RyaW5nKG4rXG4yKSxnPXYrcStBLFkodGhpcyxwLGcsZixhLGIpLGc9ditBLFkodGhpcyxwLGcsZixhLGIpO1kodGhpcyxwLHQuc3Vic3RyaW5nKDAsdC5sZW5ndGgtMSksZixhLGIpfWJyZWFrO2Nhc2UgXCJmdWxsXCI6aWYoZD4yKXtmb3IobGV0IG49MCxxO248ZDtuKyspZm9yKGY9ZDtmPm47Zi0tKXtnPXQuc3Vic3RyaW5nKG4sZik7cT10aGlzLnJ0bD9kLTEtbjpuO3ZhciBoPXRoaXMuc2NvcmU/dGhpcy5zY29yZShjLHQscixnLHEpOndiKHUsbCxyLGQscSk7WSh0aGlzLHAsZyxoLGEsYil9YnJlYWt9Y2FzZSBcImJpZGlyZWN0aW9uYWxcIjpjYXNlIFwicmV2ZXJzZVwiOmlmKGQ+MSl7Zm9yKGg9ZC0xO2g+MDtoLS0pe2c9dFt0aGlzLnJ0bD9kLTEtaDpoXStnO3ZhciBrPXRoaXMuc2NvcmU/dGhpcy5zY29yZShjLHQscixnLGgpOndiKHUsbCxyLGQsaCk7WSh0aGlzLHAsZyxrLGEsYil9Zz1cIlwifWNhc2UgXCJmb3J3YXJkXCI6aWYoZD4xKXtmb3IoaD0wO2g8ZDtoKyspZys9dFt0aGlzLnJ0bD9kLTEtaDpoXSxZKHRoaXMsXG5wLGcsZixhLGIpO2JyZWFrfWRlZmF1bHQ6aWYoWSh0aGlzLHAsdCxmLGEsYiksZSYmbD4xJiZyPGwtMSlmb3IoZD10aGlzLk4sZz10LGY9TWF0aC5taW4oZSsxLHRoaXMucnRsP3IrMTpsLXIpLGg9MTtoPGY7aCsrKXt0PWNbdGhpcy5ydGw/bC0xLXItaDpyK2hdO2s9dGhpcy5iaWRpcmVjdGlvbmFsJiZ0Pmc7Y29uc3Qgbj10aGlzLnNjb3JlP3RoaXMuc2NvcmUoYyxnLHIsdCxoLTEpOndiKGQrKGwvMj5kPzA6MSksbCxyLGYtMSxoLTEpO1kodGhpcyxtLGs/Zzp0LG4sYSxiLGs/dDpnKX19fX10aGlzLmZhc3R1cGRhdGV8fHRoaXMucmVnLmFkZChhKX19dGhpcy5kYiYmKHRoaXMuY29tbWl0X3Rhc2sucHVzaChiP3tpbnM6YX06e2RlbDphfSksdGhpcy5NJiZ1Yih0aGlzKSk7cmV0dXJuIHRoaXN9O1xuZnVuY3Rpb24gWShhLGMsYixlLGQsZixnKXtsZXQgaCxrO2lmKCEoaD1jW2JdKXx8ZyYmIWhbZ10pe2c/KGM9aHx8KGNbYl09SSgpKSxjW2ddPTEsaz1hLmN0eCwoaD1rLmdldChnKSk/az1oOmsuc2V0KGcsaz1hLmtleXN0b3JlP25ldyBSKGEua2V5c3RvcmUpOm5ldyBNYXApKTooaz1hLm1hcCxjW2JdPTEpOyhoPWsuZ2V0KGIpKT9rPWg6ay5zZXQoYixrPWg9W10pO2lmKGYpZm9yKGxldCBsPTAsbTtsPGgubGVuZ3RoO2wrKylpZigobT1oW2xdKSYmbS5pbmNsdWRlcyhkKSl7aWYobDw9ZSlyZXR1cm47bS5zcGxpY2UobS5pbmRleE9mKGQpLDEpO2EuZmFzdHVwZGF0ZSYmKGM9YS5yZWcuZ2V0KGQpKSYmYy5zcGxpY2UoYy5pbmRleE9mKG0pLDEpO2JyZWFrfWs9a1tlXXx8KGtbZV09W10pO2sucHVzaChkKTtpZihrLmxlbmd0aD09PTIqKjMxLTEpe2M9bmV3IHhhKGspO2lmKGEuZmFzdHVwZGF0ZSlmb3IobGV0IGwgb2YgYS5yZWcudmFsdWVzKCkpbC5pbmNsdWRlcyhrKSYmKGxbbC5pbmRleE9mKGspXT1cbmMpO2hbZV09az1jfWEuZmFzdHVwZGF0ZSYmKChlPWEucmVnLmdldChkKSk/ZS5wdXNoKGspOmEucmVnLnNldChkLFtrXSkpfX1mdW5jdGlvbiB3YihhLGMsYixlLGQpe3JldHVybiBiJiZhPjE/YysoZXx8MCk8PWE/YisoZHx8MCk6KGEtMSkvKGMrKGV8fDApKSooYisoZHx8MCkpKzF8MDowfTtULnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24oYSxjLGIpe2J8fChjfHx0eXBlb2YgYSE9PVwib2JqZWN0XCI/dHlwZW9mIGM9PT1cIm9iamVjdFwiJiYoYj1jLGM9MCk6KGI9YSxhPVwiXCIpKTtpZihiJiZiLmNhY2hlKXJldHVybiBiLmNhY2hlPSExLGE9dGhpcy5zZWFyY2hDYWNoZShhLGMsYiksYi5jYWNoZT0hMCxhO2xldCBlPVtdLGQsZixnLGg9MCxrLGwsbSxwLHU7YiYmKGE9Yi5xdWVyeXx8YSxjPWIubGltaXR8fGMsaD1iLm9mZnNldHx8MCxmPWIuY29udGV4dCxnPWIuc3VnZ2VzdCx1PShrPWIucmVzb2x2ZSkmJmIuZW5yaWNoLG09Yi5ib29zdCxwPWIucmVzb2x1dGlvbixsPXRoaXMuZGImJmIudGFnKTt0eXBlb2Ygaz09PVwidW5kZWZpbmVkXCImJihrPXRoaXMucmVzb2x2ZSk7Zj10aGlzLmRlcHRoJiZmIT09ITE7bGV0IHI9dGhpcy5lbmNvZGVyLmVuY29kZShhLCFmKTtkPXIubGVuZ3RoO2M9Y3x8KGs/MTAwOjApO2lmKGQ9PT0xKXJldHVybiB4Yi5jYWxsKHRoaXMsclswXSxcIlwiLGMsXG5oLGssdSxsKTtpZihkPT09MiYmZiYmIWcpcmV0dXJuIHhiLmNhbGwodGhpcyxyWzFdLHJbMF0sYyxoLGssdSxsKTtsZXQgdD1JKCksbj0wLHE7ZiYmKHE9clswXSxuPTEpO3B8fHA9PT0wfHwocD1xP3RoaXMuTjp0aGlzLnJlc29sdXRpb24pO2lmKHRoaXMuZGIpe2lmKHRoaXMuZGIuc2VhcmNoJiYoYj10aGlzLmRiLnNlYXJjaCh0aGlzLHIsYyxoLGcsayx1LGwpLGIhPT0hMSkpcmV0dXJuIGI7Y29uc3QgeD10aGlzO3JldHVybiBhc3luYyBmdW5jdGlvbigpe2ZvcihsZXQgdixBO248ZDtuKyspe2lmKChBPXJbbl0pJiYhdFtBXSl7dFtBXT0xO3Y9YXdhaXQgeWIoeCxBLHEsMCwwLCExLCExKTtpZih2PXpiKHYsZSxnLHApKXtlPXY7YnJlYWt9cSYmKGcmJnYmJmUubGVuZ3RofHwocT1BKSl9ZyYmcSYmbj09PWQtMSYmIWUubGVuZ3RoJiYocD14LnJlc29sdXRpb24scT1cIlwiLG49LTEsdD1JKCkpfXJldHVybiBBYihlLHAsYyxoLGcsbSxrKX0oKX1mb3IobGV0IHgsdjtuPGQ7bisrKXtpZigodj1cbnJbbl0pJiYhdFt2XSl7dFt2XT0xO3g9eWIodGhpcyx2LHEsMCwwLCExLCExKTtpZih4PXpiKHgsZSxnLHApKXtlPXg7YnJlYWt9cSYmKGcmJngmJmUubGVuZ3RofHwocT12KSl9ZyYmcSYmbj09PWQtMSYmIWUubGVuZ3RoJiYocD10aGlzLnJlc29sdXRpb24scT1cIlwiLG49LTEsdD1JKCkpfXJldHVybiBBYihlLHAsYyxoLGcsbSxrKX07ZnVuY3Rpb24gQWIoYSxjLGIsZSxkLGYsZyl7bGV0IGg9YS5sZW5ndGgsaz1hO2lmKGg+MSlrPSRhKGEsYyxiLGUsZCxmLGcpO2Vsc2UgaWYoaD09PTEpcmV0dXJuIGc/U2EuY2FsbChudWxsLGFbMF0sYixlKTpuZXcgWChhWzBdLHRoaXMpO3JldHVybiBnP2s6bmV3IFgoayx0aGlzKX1cbmZ1bmN0aW9uIHhiKGEsYyxiLGUsZCxmLGcpe2E9eWIodGhpcyxhLGMsYixlLGQsZixnKTtyZXR1cm4gdGhpcy5kYj9hLnRoZW4oZnVuY3Rpb24oaCl7cmV0dXJuIGQ/aHx8W106bmV3IFgoaCx0aGlzKX0pOmEmJmEubGVuZ3RoP2Q/U2EuY2FsbCh0aGlzLGEsYixlKTpuZXcgWChhLHRoaXMpOmQ/W106bmV3IFgoW10sdGhpcyl9ZnVuY3Rpb24gemIoYSxjLGIsZSl7bGV0IGQ9W107aWYoYSYmYS5sZW5ndGgpe2lmKGEubGVuZ3RoPD1lKXtjLnB1c2goYSk7cmV0dXJufWZvcihsZXQgZj0wLGc7ZjxlO2YrKylpZihnPWFbZl0pZFtmXT1nO2lmKGQubGVuZ3RoKXtjLnB1c2goZCk7cmV0dXJufX1pZighYilyZXR1cm4gZH1cbmZ1bmN0aW9uIHliKGEsYyxiLGUsZCxmLGcsaCl7bGV0IGs7YiYmKGs9YS5iaWRpcmVjdGlvbmFsJiZjPmIpJiYoaz1iLGI9YyxjPWspO2lmKGEuZGIpcmV0dXJuIGEuZGIuZ2V0KGMsYixlLGQsZixnLGgpO2E9Yj8oYT1hLmN0eC5nZXQoYikpJiZhLmdldChjKTphLm1hcC5nZXQoYyk7cmV0dXJuIGF9O2Z1bmN0aW9uIFQoYSxjKXtpZighdGhpc3x8dGhpcy5jb25zdHJ1Y3RvciE9PVQpcmV0dXJuIG5ldyBUKGEpO2lmKGEpe3ZhciBiPU0oYSk/YTphLnByZXNldDtiJiYoYT1PYmplY3QuYXNzaWduKHt9LHZiW2JdLGEpKX1lbHNlIGE9e307Yj1hLmNvbnRleHQ7Y29uc3QgZT1iPT09ITA/e2RlcHRoOjF9OmJ8fHt9LGQ9TShhLmVuY29kZXIpP3ZhW2EuZW5jb2Rlcl06YS5lbmNvZGV8fGEuZW5jb2Rlcnx8e307dGhpcy5lbmNvZGVyPWQuZW5jb2RlP2Q6dHlwZW9mIGQ9PT1cIm9iamVjdFwiP25ldyBrYShkKTp7ZW5jb2RlOmR9O3RoaXMucmVzb2x1dGlvbj1hLnJlc29sdXRpb258fDk7dGhpcy50b2tlbml6ZT1iPShiPWEudG9rZW5pemUpJiZiIT09XCJkZWZhdWx0XCImJmIhPT1cImV4YWN0XCImJmJ8fFwic3RyaWN0XCI7dGhpcy5kZXB0aD1iPT09XCJzdHJpY3RcIiYmZS5kZXB0aHx8MDt0aGlzLmJpZGlyZWN0aW9uYWw9ZS5iaWRpcmVjdGlvbmFsIT09ITE7dGhpcy5mYXN0dXBkYXRlPSEhYS5mYXN0dXBkYXRlO1xudGhpcy5zY29yZT1hLnNjb3JlfHxudWxsOyhiPWEua2V5c3RvcmV8fDApJiYodGhpcy5rZXlzdG9yZT1iKTt0aGlzLm1hcD1iP25ldyBSKGIpOm5ldyBNYXA7dGhpcy5jdHg9Yj9uZXcgUihiKTpuZXcgTWFwO3RoaXMucmVnPWN8fCh0aGlzLmZhc3R1cGRhdGU/Yj9uZXcgUihiKTpuZXcgTWFwOmI/bmV3IFMoYik6bmV3IFNldCk7dGhpcy5OPWUucmVzb2x1dGlvbnx8Mzt0aGlzLnJ0bD1kLnJ0bHx8YS5ydGx8fCExO3RoaXMuY2FjaGU9KGI9YS5jYWNoZXx8bnVsbCkmJm5ldyBtYShiKTt0aGlzLnJlc29sdmU9YS5yZXNvbHZlIT09ITE7aWYoYj1hLmRiKXRoaXMuZGI9dGhpcy5tb3VudChiKTt0aGlzLk09YS5jb21taXQhPT0hMTt0aGlzLmNvbW1pdF90YXNrPVtdO3RoaXMuY29tbWl0X3RpbWVyPW51bGw7dGhpcy5wcmlvcml0eT1hLnByaW9yaXR5fHw0fXc9VC5wcm90b3R5cGU7XG53Lm1vdW50PWZ1bmN0aW9uKGEpe3RoaXMuY29tbWl0X3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuY29tbWl0X3RpbWVyKSx0aGlzLmNvbW1pdF90aW1lcj1udWxsKTtyZXR1cm4gYS5tb3VudCh0aGlzKX07dy5jb21taXQ9ZnVuY3Rpb24oKXt0aGlzLmNvbW1pdF90aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLmNvbW1pdF90aW1lciksdGhpcy5jb21taXRfdGltZXI9bnVsbCk7cmV0dXJuIHRoaXMuZGIuY29tbWl0KHRoaXMpfTt3LmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmNvbW1pdF90aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLmNvbW1pdF90aW1lciksdGhpcy5jb21taXRfdGltZXI9bnVsbCk7cmV0dXJuIHRoaXMuZGIuZGVzdHJveSgpfTtmdW5jdGlvbiB1YihhKXthLmNvbW1pdF90aW1lcnx8KGEuY29tbWl0X3RpbWVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthLmNvbW1pdF90aW1lcj1udWxsO2EuZGIuY29tbWl0KGEpfSwxKSl9XG53LmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5tYXAuY2xlYXIoKTt0aGlzLmN0eC5jbGVhcigpO3RoaXMucmVnLmNsZWFyKCk7dGhpcy5jYWNoZSYmdGhpcy5jYWNoZS5jbGVhcigpO3JldHVybiB0aGlzLmRiPyh0aGlzLmNvbW1pdF90aW1lciYmY2xlYXJUaW1lb3V0KHRoaXMuY29tbWl0X3RpbWVyKSx0aGlzLmNvbW1pdF90aW1lcj1udWxsLHRoaXMuY29tbWl0X3Rhc2s9W10sdGhpcy5kYi5jbGVhcigpKTp0aGlzfTt3LmFwcGVuZD1mdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLmFkZChhLGMsITApfTt3LmNvbnRhaW49ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZGI/dGhpcy5kYi5oYXMoYSk6dGhpcy5yZWcuaGFzKGEpfTt3LnVwZGF0ZT1mdW5jdGlvbihhLGMpe2NvbnN0IGI9dGhpcyxlPXRoaXMucmVtb3ZlKGEpO3JldHVybiBlJiZlLnRoZW4/ZS50aGVuKCgpPT5iLmFkZChhLGMpKTp0aGlzLmFkZChhLGMpfTtcbncuY2xlYW51cD1mdW5jdGlvbigpe2lmKCF0aGlzLmZhc3R1cGRhdGUpcmV0dXJuIHRoaXM7dGIodGhpcy5tYXApO3RoaXMuZGVwdGgmJnRiKHRoaXMuY3R4KTtyZXR1cm4gdGhpc307dy5zZWFyY2hDYWNoZT1sYTt3LmV4cG9ydD1mdW5jdGlvbihhLGMsYj0wLGU9MCl7bGV0IGQsZjtzd2l0Y2goZSl7Y2FzZSAwOmQ9XCJyZWdcIjtmPXBiKHRoaXMucmVnKTticmVhaztjYXNlIDE6ZD1cImNmZ1wiO2Y9bnVsbDticmVhaztjYXNlIDI6ZD1cIm1hcFwiO2Y9bGIodGhpcy5tYXAsdGhpcy5yZWcuc2l6ZSk7YnJlYWs7Y2FzZSAzOmQ9XCJjdHhcIjtmPW5iKHRoaXMuY3R4LHRoaXMucmVnLnNpemUpO2JyZWFrO2RlZmF1bHQ6cmV0dXJufXJldHVybiByYi5jYWxsKHRoaXMsYSxjLGQsZixiLGUpfTtcbncuaW1wb3J0PWZ1bmN0aW9uKGEsYyl7aWYoYylzd2l0Y2godHlwZW9mIGM9PT1cInN0cmluZ1wiJiYoYz1KU09OLnBhcnNlKGMpKSxhPWEuc3BsaXQoXCIuXCIpLGFbYS5sZW5ndGgtMV09PT1cImpzb25cIiYmYS5wb3AoKSxhLmxlbmd0aD09PTMmJmEuc2hpZnQoKSxhPWEubGVuZ3RoPjE/YVsxXTphWzBdLGEpe2Nhc2UgXCJyZWdcIjp0aGlzLmZhc3R1cGRhdGU9ITE7dGhpcy5yZWc9cWIoYyx0aGlzLnJlZyk7YnJlYWs7Y2FzZSBcIm1hcFwiOnRoaXMubWFwPW1iKGMsdGhpcy5tYXApO2JyZWFrO2Nhc2UgXCJjdHhcIjp0aGlzLmN0eD1vYihjLHRoaXMuY3R4KX19O1xudy5zZXJpYWxpemU9ZnVuY3Rpb24oYT0hMCl7bGV0IGM9XCJcIixiPVwiXCIsZT1cIlwiO2lmKHRoaXMucmVnLnNpemUpe2xldCBmO2Zvcih2YXIgZCBvZiB0aGlzLnJlZy5rZXlzKCkpZnx8KGY9dHlwZW9mIGQpLGMrPShjP1wiLFwiOlwiXCIpKyhmPT09XCJzdHJpbmdcIj8nXCInK2QrJ1wiJzpkKTtjPVwiaW5kZXgucmVnPW5ldyBTZXQoW1wiK2MrXCJdKTtcIjtiPXNiKHRoaXMubWFwLGYpO2I9XCJpbmRleC5tYXA9bmV3IE1hcChbXCIrYitcIl0pO1wiO2Zvcihjb25zdCBnIG9mIHRoaXMuY3R4LmVudHJpZXMoKSl7ZD1nWzBdO2xldCBoPXNiKGdbMV0sZik7aD1cIm5ldyBNYXAoW1wiK2grXCJdKVwiO2g9J1tcIicrZCsnXCIsJytoK1wiXVwiO2UrPShlP1wiLFwiOlwiXCIpK2h9ZT1cImluZGV4LmN0eD1uZXcgTWFwKFtcIitlK1wiXSk7XCJ9cmV0dXJuIGE/XCJmdW5jdGlvbiBpbmplY3QoaW5kZXgpe1wiK2MrYitlK1wifVwiOmMrYitlfTtGYShULnByb3RvdHlwZSk7Y29uc3QgQmI9dHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCImJih3aW5kb3cuaW5kZXhlZERCfHx3aW5kb3cubW96SW5kZXhlZERCfHx3aW5kb3cud2Via2l0SW5kZXhlZERCfHx3aW5kb3cubXNJbmRleGVkREIpLENiPVtcIm1hcFwiLFwiY3R4XCIsXCJ0YWdcIixcInJlZ1wiLFwiY2ZnXCJdLERiPUkoKTtcbmZ1bmN0aW9uIEViKGEsYz17fSl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1FYilyZXR1cm4gbmV3IEViKGEsYyk7dHlwZW9mIGE9PT1cIm9iamVjdFwiJiYoYz1hLGE9YS5uYW1lKTthfHxjb25zb2xlLmluZm8oXCJEZWZhdWx0IHN0b3JhZ2Ugc3BhY2Ugd2FzIHVzZWQsIGJlY2F1c2UgYSBuYW1lIHdhcyBub3QgcGFzc2VkLlwiKTt0aGlzLmlkPVwiZmxleHNlYXJjaFwiKyhhP1wiOlwiK2EudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV9cXC1dL2csXCJcIik6XCJcIik7dGhpcy5maWVsZD1jLmZpZWxkP2MuZmllbGQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV9cXC1dL2csXCJcIik6XCJcIjt0aGlzLnR5cGU9Yy50eXBlO3RoaXMuZmFzdHVwZGF0ZT10aGlzLnN1cHBvcnRfdGFnX3NlYXJjaD0hMTt0aGlzLmRiPW51bGw7dGhpcy5oPXt9fXc9RWIucHJvdG90eXBlO3cubW91bnQ9ZnVuY3Rpb24oYSl7aWYoYS5pbmRleClyZXR1cm4gYS5tb3VudCh0aGlzKTthLmRiPXRoaXM7cmV0dXJuIHRoaXMub3BlbigpfTtcbncub3Blbj1mdW5jdGlvbigpe2lmKHRoaXMuZGIpcmV0dXJuIHRoaXMuZGI7bGV0IGE9dGhpcztuYXZpZ2F0b3Iuc3RvcmFnZSYmbmF2aWdhdG9yLnN0b3JhZ2UucGVyc2lzdCgpO0RiW2EuaWRdfHwoRGJbYS5pZF09W10pO0RiW2EuaWRdLnB1c2goYS5maWVsZCk7Y29uc3QgYz1CYi5vcGVuKGEuaWQsMSk7Yy5vbnVwZ3JhZGVuZWVkZWQ9ZnVuY3Rpb24oKXtjb25zdCBiPWEuZGI9dGhpcy5yZXN1bHQ7Zm9yKGxldCBlPTAsZDtlPENiLmxlbmd0aDtlKyspe2Q9Q2JbZV07Zm9yKGxldCBmPTAsZztmPERiW2EuaWRdLmxlbmd0aDtmKyspZz1EYlthLmlkXVtmXSxiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoZCsoZCE9PVwicmVnXCI/Zz9cIjpcIitnOlwiXCI6XCJcIikpfHxiLmNyZWF0ZU9iamVjdFN0b3JlKGQrKGQhPT1cInJlZ1wiP2c/XCI6XCIrZzpcIlwiOlwiXCIpKX19O3JldHVybiBhLmRiPVooYyxmdW5jdGlvbihiKXthLmRiPWI7YS5kYi5vbnZlcnNpb25jaGFuZ2U9ZnVuY3Rpb24oKXthLmNsb3NlKCl9fSl9O1xudy5jbG9zZT1mdW5jdGlvbigpe3RoaXMuZGImJnRoaXMuZGIuY2xvc2UoKTt0aGlzLmRiPW51bGx9O3cuZGVzdHJveT1mdW5jdGlvbigpe2NvbnN0IGE9QmIuZGVsZXRlRGF0YWJhc2UodGhpcy5pZCk7cmV0dXJuIFooYSl9O3cuY2xlYXI9ZnVuY3Rpb24oKXtjb25zdCBhPVtdO2ZvcihsZXQgYj0wLGU7YjxDYi5sZW5ndGg7YisrKXtlPUNiW2JdO2ZvcihsZXQgZD0wLGY7ZDxEYlt0aGlzLmlkXS5sZW5ndGg7ZCsrKWY9RGJbdGhpcy5pZF1bZF0sYS5wdXNoKGUrKGUhPT1cInJlZ1wiP2Y/XCI6XCIrZjpcIlwiOlwiXCIpKX1jb25zdCBjPXRoaXMuZGIudHJhbnNhY3Rpb24oYSxcInJlYWR3cml0ZVwiKTtmb3IobGV0IGI9MDtiPGEubGVuZ3RoO2IrKyljLm9iamVjdFN0b3JlKGFbYl0pLmNsZWFyKCk7cmV0dXJuIFooYyl9O1xudy5nZXQ9ZnVuY3Rpb24oYSxjLGI9MCxlPTAsZD0hMCxmPSExKXthPXRoaXMuZGIudHJhbnNhY3Rpb24oKGM/XCJjdHhcIjpcIm1hcFwiKSsodGhpcy5maWVsZD9cIjpcIit0aGlzLmZpZWxkOlwiXCIpLFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoKGM/XCJjdHhcIjpcIm1hcFwiKSsodGhpcy5maWVsZD9cIjpcIit0aGlzLmZpZWxkOlwiXCIpKS5nZXQoYz9jK1wiOlwiK2E6YSk7Y29uc3QgZz10aGlzO3JldHVybiBaKGEpLnRoZW4oZnVuY3Rpb24oaCl7bGV0IGs9W107aWYoIWh8fCFoLmxlbmd0aClyZXR1cm4gaztpZihkKXtpZighYiYmIWUmJmgubGVuZ3RoPT09MSlyZXR1cm4gaFswXTtmb3IobGV0IGw9MCxtO2w8aC5sZW5ndGg7bCsrKWlmKChtPWhbbF0pJiZtLmxlbmd0aCl7aWYoZT49bS5sZW5ndGgpe2UtPW0ubGVuZ3RoO2NvbnRpbnVlfWNvbnN0IHA9Yj9lK01hdGgubWluKG0ubGVuZ3RoLWUsYik6bS5sZW5ndGg7Zm9yKGxldCB1PWU7dTxwO3UrKylrLnB1c2gobVt1XSk7ZT0wO2lmKGsubGVuZ3RoPT09YilicmVha31yZXR1cm4gZj9cbmcuZW5yaWNoKGspOmt9cmV0dXJuIGh9KX07dy50YWc9ZnVuY3Rpb24oYSxjPTAsYj0wLGU9ITEpe2E9dGhpcy5kYi50cmFuc2FjdGlvbihcInRhZ1wiKyh0aGlzLmZpZWxkP1wiOlwiK3RoaXMuZmllbGQ6XCJcIiksXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShcInRhZ1wiKyh0aGlzLmZpZWxkP1wiOlwiK3RoaXMuZmllbGQ6XCJcIikpLmdldChhKTtjb25zdCBkPXRoaXM7cmV0dXJuIFooYSkudGhlbihmdW5jdGlvbihmKXtpZighZnx8IWYubGVuZ3RofHxiPj1mLmxlbmd0aClyZXR1cm5bXTtpZighYyYmIWIpcmV0dXJuIGY7Zj1mLnNsaWNlKGIsYitjKTtyZXR1cm4gZT9kLmVucmljaChmKTpmfSl9O1xudy5lbnJpY2g9ZnVuY3Rpb24oYSl7dHlwZW9mIGEhPT1cIm9iamVjdFwiJiYoYT1bYV0pO2NvbnN0IGM9dGhpcy5kYi50cmFuc2FjdGlvbihcInJlZ1wiLFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJyZWdcIiksYj1bXTtmb3IobGV0IGU9MDtlPGEubGVuZ3RoO2UrKyliW2VdPVooYy5nZXQoYVtlXSkpO3JldHVybiBQcm9taXNlLmFsbChiKS50aGVuKGZ1bmN0aW9uKGUpe2ZvcihsZXQgZD0wO2Q8ZS5sZW5ndGg7ZCsrKWVbZF09e2lkOmFbZF0sZG9jOmVbZF0/SlNPTi5wYXJzZShlW2RdKTpudWxsfTtyZXR1cm4gZX0pfTt3Lmhhcz1mdW5jdGlvbihhKXthPXRoaXMuZGIudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwicmVnXCIpLmdldEtleShhKTtyZXR1cm4gWihhKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiEhY30pfTt3LnNlYXJjaD1udWxsO3cuaW5mbz1mdW5jdGlvbigpe307XG53LnRyYW5zYWN0aW9uPWZ1bmN0aW9uKGEsYyxiKXthKz1hIT09XCJyZWdcIj90aGlzLmZpZWxkP1wiOlwiK3RoaXMuZmllbGQ6XCJcIjpcIlwiO2xldCBlPXRoaXMuaFthK1wiOlwiK2NdO2lmKGUpcmV0dXJuIGIuY2FsbCh0aGlzLGUpO2xldCBkPXRoaXMuZGIudHJhbnNhY3Rpb24oYSxjKTt0aGlzLmhbYStcIjpcIitjXT1lPWQub2JqZWN0U3RvcmUoYSk7Y29uc3QgZj1iLmNhbGwodGhpcyxlKTt0aGlzLmhbYStcIjpcIitjXT1udWxsO3JldHVybiBaKGQpLmZpbmFsbHkoZnVuY3Rpb24oKXtkPWU9bnVsbDtyZXR1cm4gZn0pfTtcbncuY29tbWl0PWFzeW5jIGZ1bmN0aW9uKGEpe2xldCBjPWEuY29tbWl0X3Rhc2ssYj1bXTthLmNvbW1pdF90YXNrPVtdO2ZvcihsZXQgZT0wLGQ7ZTxjLmxlbmd0aDtlKyspZD1jW2VdLGQuZGVsJiZiLnB1c2goZC5kZWwpO2IubGVuZ3RoJiZhd2FpdCB0aGlzLnJlbW92ZShiKTthLnJlZy5zaXplJiYoYXdhaXQgdGhpcy50cmFuc2FjdGlvbihcIm1hcFwiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5tYXApe2NvbnN0IGY9ZFswXSxnPWRbMV07Zy5sZW5ndGgmJihlLmdldChmKS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXtsZXQgaD10aGlzLnJlc3VsdDt2YXIgaztpZihoJiZoLmxlbmd0aCl7Y29uc3QgbD1NYXRoLm1heChoLmxlbmd0aCxnLmxlbmd0aCk7Zm9yKGxldCBtPTAscCx1O208bDttKyspaWYoKHU9Z1ttXSkmJnUubGVuZ3RoKXtpZigocD1oW21dKSYmcC5sZW5ndGgpZm9yKGs9MDtrPHUubGVuZ3RoO2srKylwLnB1c2godVtrXSk7ZWxzZSBoW21dPXU7az1cbjF9fWVsc2UgaD1nLGs9MTtrJiZlLnB1dChoLGYpfSl9fSksYXdhaXQgdGhpcy50cmFuc2FjdGlvbihcImN0eFwiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5jdHgpe2NvbnN0IGY9ZFswXSxnPWRbMV07Zm9yKGNvbnN0IGggb2YgZyl7Y29uc3Qgaz1oWzBdLGw9aFsxXTtsLmxlbmd0aCYmKGUuZ2V0KGYrXCI6XCIraykub25zdWNjZXNzPWZ1bmN0aW9uKCl7bGV0IG09dGhpcy5yZXN1bHQ7dmFyIHA7aWYobSYmbS5sZW5ndGgpe2NvbnN0IHU9TWF0aC5tYXgobS5sZW5ndGgsbC5sZW5ndGgpO2ZvcihsZXQgcj0wLHQsbjtyPHU7cisrKWlmKChuPWxbcl0pJiZuLmxlbmd0aCl7aWYoKHQ9bVtyXSkmJnQubGVuZ3RoKWZvcihwPTA7cDxuLmxlbmd0aDtwKyspdC5wdXNoKG5bcF0pO2Vsc2UgbVtyXT1uO3A9MX19ZWxzZSBtPWwscD0xO3AmJmUucHV0KG0sZitcIjpcIitrKX0pfX19KSxhLnN0b3JlP2F3YWl0IHRoaXMudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWR3cml0ZVwiLFxuZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5zdG9yZSl7Y29uc3QgZj1kWzBdLGc9ZFsxXTtlLnB1dCh0eXBlb2YgZz09PVwib2JqZWN0XCI/SlNPTi5zdHJpbmdpZnkoZyk6MSxmKX19KTphLmJ5cGFzc3x8YXdhaXQgdGhpcy50cmFuc2FjdGlvbihcInJlZ1wiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5yZWcua2V5cygpKWUucHV0KDEsZCl9KSxhLnRhZyYmYXdhaXQgdGhpcy50cmFuc2FjdGlvbihcInRhZ1wiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS50YWcpe2NvbnN0IGY9ZFswXSxnPWRbMV07Zy5sZW5ndGgmJihlLmdldChmKS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXtsZXQgaD10aGlzLnJlc3VsdDtoPWgmJmgubGVuZ3RoP2guY29uY2F0KGcpOmc7ZS5wdXQoaCxmKX0pfX0pLGEubWFwLmNsZWFyKCksYS5jdHguY2xlYXIoKSxhLnRhZyYmYS50YWcuY2xlYXIoKSxhLnN0b3JlJiZhLnN0b3JlLmNsZWFyKCksYS5kb2N1bWVudHx8XG5hLnJlZy5jbGVhcigpKX07ZnVuY3Rpb24gRmIoYSxjLGIpe2NvbnN0IGU9YS52YWx1ZTtsZXQgZCxmPTA7Zm9yKGxldCBnPTAsaDtnPGUubGVuZ3RoO2crKyl7aWYoaD1iP2U6ZVtnXSl7Zm9yKGxldCBrPTAsbCxtO2s8Yy5sZW5ndGg7aysrKWlmKG09Y1trXSxsPWguaW5kZXhPZihtKSxsPj0wKWlmKGQ9MSxoLmxlbmd0aD4xKWguc3BsaWNlKGwsMSk7ZWxzZXtlW2ddPVtdO2JyZWFrfWYrPWgubGVuZ3RofWlmKGIpYnJlYWt9Zj9kJiZhLnVwZGF0ZShlKTphLmRlbGV0ZSgpO2EuY29udGludWUoKX1cbncucmVtb3ZlPWZ1bmN0aW9uKGEpe3R5cGVvZiBhIT09XCJvYmplY3RcIiYmKGE9W2FdKTtyZXR1cm4gUHJvbWlzZS5hbGwoW3RoaXMudHJhbnNhY3Rpb24oXCJtYXBcIixcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKGMpe2Mub3BlbkN1cnNvcigpLm9uc3VjY2Vzcz1mdW5jdGlvbigpe2NvbnN0IGI9dGhpcy5yZXN1bHQ7YiYmRmIoYixhKX19KSx0aGlzLnRyYW5zYWN0aW9uKFwiY3R4XCIsXCJyZWFkd3JpdGVcIixmdW5jdGlvbihjKXtjLm9wZW5DdXJzb3IoKS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXtjb25zdCBiPXRoaXMucmVzdWx0O2ImJkZiKGIsYSl9fSksdGhpcy50cmFuc2FjdGlvbihcInRhZ1wiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oYyl7Yy5vcGVuQ3Vyc29yKCkub25zdWNjZXNzPWZ1bmN0aW9uKCl7Y29uc3QgYj10aGlzLnJlc3VsdDtiJiZGYihiLGEsITApfX0pLHRoaXMudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKGMpe2ZvcihsZXQgYj0wO2I8YS5sZW5ndGg7YisrKWMuZGVsZXRlKGFbYl0pfSldKX07XG5mdW5jdGlvbiBaKGEsYyl7cmV0dXJuIG5ldyBQcm9taXNlKChiLGUpPT57YS5vbnN1Y2Nlc3M9YS5vbmNvbXBsZXRlPWZ1bmN0aW9uKCl7YyYmYyh0aGlzLnJlc3VsdCk7Yz1udWxsO2IodGhpcy5yZXN1bHQpfTthLm9uZXJyb3I9YS5vbmJsb2NrZWQ9ZTthPW51bGx9KX07ZXhwb3J0IGRlZmF1bHQge0luZGV4OlQsQ2hhcnNldDp2YSxFbmNvZGVyOmthLERvY3VtZW50Ok5hLFdvcmtlcjpMYSxSZXNvbHZlcjpYLEluZGV4ZWREQjpFYixMYW5ndWFnZTp7fX07XG5leHBvcnQgY29uc3QgSW5kZXg9VDtleHBvcnQgY29uc3QgQ2hhcnNldD12YTtleHBvcnQgY29uc3QgRW5jb2Rlcj1rYTtleHBvcnQgY29uc3QgRG9jdW1lbnQ9TmE7ZXhwb3J0IGNvbnN0IFdvcmtlcj1MYTtleHBvcnQgY29uc3QgUmVzb2x2ZXI9WDtleHBvcnQgY29uc3QgSW5kZXhlZERCPUViO2V4cG9ydCBjb25zdCBMYW5ndWFnZT17fTsiLCAiLyohXHJcbiAqIEZsZXhTZWFyY2ggZm9yIEJvb3RzdHJhcCBiYXNlZCBUaHVsaXRlIHNpdGVzXHJcbiAqIENvcHlyaWdodCAyMDIxLTIwMjQgVGh1bGl0ZVxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Zyam8vaHVnby10aGVtZS16ZW4vYmxvYi9tYWluL2Fzc2V0cy9qcy9zZWFyY2guanNcclxuICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiwgZ3VhcmQtZm9yLWluICovXHJcblxyXG4vKipcclxuICogQGZpbGVcclxuICogQSBKYXZhU2NyaXB0IGZpbGUgZm9yIGZsZXhzZWFyY2guXHJcbiAqL1xyXG5cclxuLy8gaW1wb3J0ICogYXMgRmxleFNlYXJjaCBmcm9tICdmbGV4c2VhcmNoJztcclxuaW1wb3J0IEluZGV4IGZyb20gJ2ZsZXhzZWFyY2gnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvLyBjb25zdCBpbmRleCA9IG5ldyBGbGV4U2VhcmNoLkRvY3VtZW50KHtcclxuICBjb25zdCBpbmRleCA9IG5ldyBJbmRleC5Eb2N1bWVudCh7XHJcbiAgICB0b2tlbml6ZTogJ2ZvcndhcmQnLFxyXG4gICAgZG9jdW1lbnQ6IHtcclxuICAgICAgaWQ6ICdpZCcsXHJcbiAgICAgIGluZGV4OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmllbGQ6ICd0aXRsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiAndGFncydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiAnY29udGVudCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiAgJ2RhdGUnLFxyXG4gICAgICAgICAgdG9rZW5pemU6ICdzdHJpY3QnLFxyXG4gICAgICAgICAgZW5jb2RlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgc3RvcmU6IFsndGl0bGUnLCdzdW1tYXJ5JywnZGF0ZScsJ3Blcm1hbGluayddXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dSZXN1bHRzKGl0ZW1zKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlJykuY29udGVudDtcclxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJlc3VsdHMnKTtcclxuICAgIHJlc3VsdHMudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBjb25zdCBpdGVtc0xlbmd0aCA9IE9iamVjdC5rZXlzKGl0ZW1zKS5sZW5ndGg7XHJcblxyXG4gICAgLy8gU2hvdy9oaWRlIFwiTm8gcmVjZW50IHNlYXJjaGVzXCIgYW5kIFwiTm8gc2VhcmNoIHJlc3VsdHNcIiBtZXNzYWdlc1xyXG4gICAgaWYgKChpdGVtc0xlbmd0aCA9PT0gMCkgJiYgKHF1ZXJ5LnZhbHVlID09PSAnJykpIHtcclxuICAgICAgLy8gSGlkZSBcIk5vIHNlYXJjaCByZXN1bHRzXCIgbWVzc2FnZVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlc3VsdHMnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgLy8gU2hvdyBcIk5vIHJlY2VudCBzZWFyY2hlc1wiIG1lc3NhZ2VcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1uby1yZWNlbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIH0gZWxzZSBpZiAoKGl0ZW1zTGVuZ3RoID09PSAwKSAmJiAocXVlcnkudmFsdWUgIT09ICcnKSkge1xyXG4gICAgICAvLyBIaWRlIFwiTm8gcmVjZW50IHNlYXJjaGVzXCIgbWVzc2FnZVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlY2VudCcpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAvLyBTaG93IFwiTm8gc2VhcmNoIHJlc3VsdHNcIiBtZXNzYWdlXHJcbiAgICAgIGNvbnN0IHF1ZXJ5Tm9SZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXJ5LW5vLXJlc3VsdHMnKTtcclxuICAgICAgcXVlcnlOb1Jlc3VsdHMuaW5uZXJUZXh0ID0gcXVlcnkudmFsdWU7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbm8tcmVzdWx0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSGlkZSBib3RoIFwiTm8gcmVjZW50IHNlYXJjaGVzXCIgYW5kIFwiTm8gc2VhcmNoIHJlc3VsdHNcIiBtZXNzYWdlc1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlY2VudCcpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlc3VsdHMnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGlkIGluIGl0ZW1zKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpZF07XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgY29uc3QgYSA9IHJlc3VsdC5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSByZXN1bHQucXVlcnlTZWxlY3RvcigndGltZScpO1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgIGEuaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcclxuICAgICAgYS5ocmVmID0gaXRlbS5wZXJtYWxpbms7XHJcbiAgICAgIHRpbWUuaW5uZXJUZXh0ID0gaXRlbS5kYXRlO1xyXG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IGl0ZW0uc3VtbWFyeTtcclxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHRzLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRvU2VhcmNoKCkge1xyXG4gICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXRleHQnKS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBsaW1pdCA9IDk5O1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGluZGV4LnNlYXJjaCh7XHJcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcclxuICAgICAgZW5yaWNoOiB0cnVlLFxyXG4gICAgICBsaW1pdDogbGltaXQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGl0ZW1zID0ge307XHJcblxyXG4gICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgcmVzdWx0LnJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgaXRlbXNbci5pZF0gPSByLmRvYztcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93UmVzdWx0cyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmFibGVVSSgpIHtcclxuICAgIGNvbnN0IHNlYXJjaGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZvcm0nKTtcclxuICAgIHNlYXJjaGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkb1NlYXJjaCgpO1xyXG4gICAgfSk7XHJcbiAgICBzZWFyY2hmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb1NlYXJjaCgpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWxvYWRpbmcnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtdGV4dCcpLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBidWlsZEluZGV4KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1sb2FkaW5nJykuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICBmZXRjaChcIi9zZWFyY2gtaW5kZXguanNvblwiKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgaW5kZXguYWRkKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGJ1aWxkSW5kZXgoKTtcclxuICBlbmFibGVVSSgpO1xyXG59KSgpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQSxNQUFJO0FBQUUsV0FBUyxFQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLE9BQU8sR0FBRSxJQUFFLE9BQU87QUFBRSxRQUFHLE1BQUksYUFBWTtBQUFDLFVBQUcsTUFBSSxhQUFZO0FBQUMsWUFBRyxHQUFFO0FBQUMsY0FBRyxNQUFJLGNBQVksTUFBSSxFQUFFLFFBQU8sU0FBUyxHQUFFO0FB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QUs7QUFBQyxVQUFHO0FBQUMsYUFBSyxRQUFNLEVBQUUsS0FBSyxPQUFNLEVBQUU7QUFBQSxNQUFDLFNBQU8sR0FBRTtBQUFDLGFBQUssUUFBTTtBQUFBLE1BQUs7QUFBQyxXQUFLLFVBQVEsRUFBRSxFQUFFLFNBQVEsRUFBRSxLQUFLLFNBQVEsSUFBRSxDQUFDO0FBQUEsSUFBQztBQUFDLFNBQUssVUFBUSxFQUFFLEVBQUUsU0FBUSxNQUFLLEtBQUssT0FBTztBQUFFLFNBQUssV0FBUyxFQUFFLEVBQUUsVUFBUyxNQUFLLEtBQUssUUFBUTtBQUFFLFFBQUUsRUFBRTtBQUFPLFNBQUssU0FBTyxPQUFPLE1BQUksYUFBVyxJQUFFLEVBQUUsS0FBRyxJQUFJLElBQUksQ0FBQyxHQUFFLE1BQUssS0FBSyxNQUFNO0FBQUUsU0FBSyxTQUFPLEVBQUUsRUFBRSxRQUFPLE1BQUcsS0FBSyxNQUFNO0FBQUUsU0FBSyxVQUFRLEdBQUcsSUFBRSxFQUFFLFlBQVUsSUFBSSxJQUFJLENBQUMsR0FBRSxNQUFLLEtBQUssT0FBTztBQUFFLFNBQUssU0FBTyxHQUFHLElBQUUsRUFBRSxXQUFTLElBQUksSUFBSSxDQUFDLEdBQUUsTUFBSyxLQUFLLE1BQU07QUFBRSxTQUFLLFVBQVE7QUFBQSxPQUFHLElBQUUsRUFBRSxZQUFVLElBQUksSUFBSSxDQUFDO0FBQUEsTUFDemY7QUFBQSxNQUFLLEtBQUs7QUFBQSxJQUFPO0FBQUUsU0FBSyxXQUFTLEVBQUUsRUFBRSxVQUFTLE1BQUssS0FBSyxRQUFRO0FBQUUsU0FBSyxZQUFVLEVBQUUsRUFBRSxXQUFVLEdBQUUsS0FBSyxTQUFTO0FBQUUsU0FBSyxZQUFVLEVBQUUsRUFBRSxXQUFVLE1BQUssS0FBSyxTQUFTO0FBQUUsU0FBSyxNQUFJLEVBQUUsRUFBRSxLQUFJLE9BQUcsS0FBSyxHQUFHO0FBQUUsUUFBRyxLQUFLLFFBQU0sSUFBRSxFQUFFLEVBQUUsT0FBTSxNQUFHLEtBQUssS0FBSyxFQUFFLE1BQUssSUFBRSxNQUFLLEtBQUssSUFBRSxPQUFPLE1BQUksV0FBUyxJ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O0FBQUEsVUFBQyxPQUFLO0FBQUMsZ0JBQUcsTUFBSSxFQUFFO0FBQVMsZ0JBQUU7QUFBQSxVQUFDO0FBQUMsWUFBRSxLQUFLLENBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxTQUFLLGFBQVcsSUFBRSxLQUFLLFNBQVMsQ0FBQyxLQUFHO0FBQUcsU0FBSyxTQUFPLEVBQUUsVUFBUSxLQUFLLE1BQUksS0FBSyxFQUFFLElBQUksR0FBRSxDQUFDLEdBQUUsS0FBSyxFQUFFLE9BQUssS0FBSyxNQUFJLEtBQUssRUFBRSxNQUFNLEdBQUUsS0FBSyxJQUFFLEtBQUssSUFBRSxNQUFJO0FBQUksV0FBTztBQUFBLEVBQUM7QUFBRSxXQUFTLEVBQUUsR0FBRTtBQUFDLE1BQUUsSUFBRTtBQUFLLE1BQUUsRUFBRSxNQUFNO0FBQUUsTUFBRSxFQUFFLE1BQU07QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxLQUFHLE9BQU8sTUFBSSxXQUFTLE9BQU8sTUFBSSxhQUFXLElBQUUsR0FBRSxJQUFFLEtBQUcsSUFBRTtBQUFHLFVBQUksSUFBRSxFQUFFLFNBQU8sR0FBRSxJQUFFLEVBQUUsU0FBTztBQUFHLFFBQUksSUFBRSxNQUFJLEtBQUc7QUFBRyxVQUFJLE1BQUksRUFBRSxVQUFRLEtBQUcsQ0FBQyxDQUFDLEVBQUUsVUFBUSxDQUFDLENBQUMsRUFBRSxXQUFTLEVBQUUsWUFBVSxVQUFLLEVBQUUsY0FBWSxLQUFLLGVBQWEsRUFBRSxTQUFPO0FBQUksU0FBRyxLQUFHLEdBQUcsWUFBWTtBQUFFLFNBQUssVUFBUSxLQUFLLFFBQU0sSUFBSTtBQUFJLFFBQUksSUFBRSxLQUFLLE1BQU0sSUFBSSxJQUFFLENBQUM7QUFBRSxRQUFHLENBQUMsR0FBRTtBQUFDLFlBQU0sSUFBRSxLQUFHLEVBQUU7QUFBTSxZQUFJLEVBQUUsUUFBTTtBQUFJLFVBQUUsS0FBSyxPQUFPLEdBQUUsR0FBRSxDQUFDO0FBQUUsWUFBSSxFQUFFLFFBQU07QUFBRyxXQUFLLE1BQU0sSUFBSSxJQUFFLEdBQUUsQ0FBQztBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFO0FBQUMsU0FBSyxRQUFNLEtBQUcsTUFBSSxPQUFHLElBQUU7QUFBSSxTQUFLLFFBQU0sb0JBQUk7QUFBSSxTQUFLLElBQUU7QUFBQSxFQUFFO0FBQzU0QixLQUFHLFVBQVUsTUFBSSxTQUFTLEdBQUUsR0FBRTtBQUFDLFNBQUssTUFBTSxJQUFJLEtBQUssSUFBRSxHQUFFLENBQUM7QUFBRSxTQUFLLE1BQU0sT0FBSyxLQUFLLFNBQU8sS0FBSyxNQUFNLE9BQU8sS0FBSyxNQUFNLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztBQUFBLEVBQUM7QUFBRSxLQUFHLFVBQVUsTUFBSSxTQUFTLEdBQUU7QUFBQyxVQUFNLElBQUUsS0FBSyxNQUFNLElBQUksQ0FBQztBQUFFLFNBQUcsS0FBSyxNQUFJLE1BQUksS0FBSyxNQUFNLE9BQU8sQ0FBQyxHQUFFLEtBQUssTUFBTSxJQUFJLEtBQUssSUFBRSxHQUFFLENBQUM7QUFBRyxXQUFPO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBVSxTQUFPLFNBQVMsR0FBRTtBQUFDLGVBQVUsS0FBSyxLQUFLLE9BQU07QUFBQyxZQUFNLElBQUUsRUFBRSxDQUFDO0FBQUUsUUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUcsS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUUsS0FBRyxVQUFVLFFBQU0sV0FBVTtBQUFDLFNBQUssTUFBTSxNQUFNO0FBQUUsU0FBSyxJQUFFO0FBQUEsRUFBRTtBQUFFLE1BQU0sS0FBRyxFQUFDLFdBQVUsT0FBRyxTQUFRLE9BQUcsUUFBTyxNQUFFO0FBQUUsTUFBTSxLQUFHLENBQUM7QUFBRSxNQUFNLEtBQUcsb0JBQUksSUFBSSxDQUFDLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FB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TSxJQUFFLENBQUMsQ0FBQyxJQUFFLENBQUM7QUFBRSxTQUFLLFNBQU8sSUFBRSxFQUFFLFNBQU87QUFBRSxVQUFNLElBQUU7QUFBSyxXQUFPLElBQUksTUFBTSxDQUFDLEdBQUUsRUFBQyxJQUFJLEdBQUUsR0FBRTtBQUFDLFVBQUcsTUFBSSxTQUFTLFFBQU8sRUFBRTtBQUFPLFVBQUcsTUFBSSxPQUFPLFFBQU8sU0FBUyxHQUFFO0FBQUMsVUFBRSxNQUFNLEVBQUUsTUFBTSxTQUFPLENBQUMsRUFBRSxLQUFLLENBQUM7QUFBRSxVQUFFO0FBQUEsTUFBUTtBQUFFLFVBQUcsTUFBSSxNQUFNLFFBQU8sV0FBVTtBQUFDLFlBQUcsRUFBRSxPQUFPLFFBQU8sRUFBRSxVQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sU0FBTyxDQUFDLEVBQUUsSUFBSTtBQUFBLE1BQUM7QUFBRSxVQUFHLE1BQUksVUFBVSxRQUFPLFNBQVMsR0FBRTtBQUFDLFlBQUksSUFBRTtBQUFFLGlCQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sUUFBTyxLQUFJO0FBQUMsY0FBRSxFQUFFLE1BQU0sQ0FBQztBQUFFLGNBQUUsRUFBRSxRQUFRLENBQUM7QUFBRSxjQUFHLEtBQUcsRUFBRSxRQUFPLElBQUU7QUFBRSxlQUFHLEVBQUU7QUFBQSxRQUFNO0FBQUMsZUFBTTtBQUFBLE1BQUU7QUFDMWYsVUFBRyxNQUFJLFdBQVcsUUFBTyxTQUFTLEdBQUU7QUFBQyxpQkFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sUUFBTyxJQUFJLEtBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxRQUFNO0FBQUcsZUFBTTtBQUFBLE1BQUU7QUFBRSxVQUFHLE1BQUksUUFBUSxRQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsZUFBTyxHQUFHLEdBQUUsS0FBRyxHQUFFLEtBQUcsRUFBRSxRQUFPLEtBQUU7QUFBQSxNQUFDO0FBQUUsVUFBRyxNQUFJLFNBQVMsUUFBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLGVBQU8sR0FBRyxHQUFFLEtBQUcsR0FBRSxLQUFHLEVBQUUsUUFBTyxJQUFFO0FBQUEsTUFBQztBQUFFLFVBQUcsTUFBSSxjQUFjLFFBQU87QUFBTSxVQUFHLE9BQU8sTUFBSSxTQUFTLFNBQU8sSUFBRSxFQUFFLE1BQU0sSUFBRSxTQUFHLE1BQUcsQ0FBQyxNQUFJLEVBQUUsQ0FBQztBQUFBLElBQUMsR0FBRSxJQUFJLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBRSxJQUFFLFNBQUcsTUFBRztBQUFFLE9BQUMsRUFBRSxNQUFNLENBQUMsTUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLElBQUU7QUFBRSxRQUFFO0FBQVMsYUFBTTtBQUFBLElBQUUsRUFBQyxDQUFDO0FBQUEsRUFBQztBQUFDLEtBQUcsVUFBVSxRQUFNLFdBQVU7QUFBQyxTQUFLLE1BQU0sU0FBTztBQUFBLEVBQUM7QUFBRSxLQUFHLFVBQVUsT0FBSyxXQUFVO0FBQUEsRUFBQztBQUM5ZixXQUFTLEVBQUUsSUFBRSxHQUFFO0FBQUMsUUFBRyxDQUFDLFFBQU0sS0FBSyxnQkFBYyxFQUFFLFFBQU8sSUFBSSxFQUFFLENBQUM7QUFBRSxTQUFLLFFBQU0sRUFBRTtBQUFFLFNBQUssSUFBRSxDQUFDO0FBQUUsU0FBSyxPQUFLO0FBQUUsUUFBRSxNQUFJLEtBQUssSUFBRSxJQUFHLEtBQUssSUFBRSxPQUFPLENBQUMsTUFBSSxLQUFLLElBQUUsSUFBRyxLQUFLLElBQUU7QUFBQSxFQUFFO0FBQUMsSUFBRSxVQUFVLE1BQUksU0FBUyxHQUFFO0FBQUMsVUFBTSxJQUFFLEtBQUssTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsV0FBTyxLQUFHLEVBQUUsSUFBSSxDQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBVSxNQUFJLFNBQVMsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEtBQUssRUFBRSxDQUFDO0FBQUUsUUFBSSxJQUFFLEtBQUssTUFBTSxDQUFDO0FBQUUsU0FBRyxJQUFFLEVBQUUsTUFBSyxFQUFFLElBQUksR0FBRSxDQUFDLElBQUcsS0FBRyxFQUFFLFNBQU8sS0FBSyxXQUFTLEtBQUssTUFBTSxDQUFDLElBQUUsSUFBRSxvQkFBSSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFFLEtBQUs7QUFBQSxFQUFPO0FBQ3paLFdBQVMsRUFBRSxJQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsUUFBTSxLQUFLLGdCQUFjLEVBQUUsUUFBTyxJQUFJLEVBQUUsQ0FBQztBQUFFLFNBQUssUUFBTSxFQUFFO0FBQUUsU0FBSyxJQUFFLENBQUM7QUFBRSxTQUFLLE9BQUs7QUFBRSxRQUFFLE1BQUksS0FBSyxJQUFFLElBQUcsS0FBSyxJQUFFLE9BQU8sQ0FBQyxNQUFJLEtBQUssSUFBRSxJQUFHLEtBQUssSUFBRTtBQUFBLEVBQUU7QUFBQyxJQUFFLFVBQVUsTUFBSSxTQUFTLEdBQUU7QUFBQyxRQUFJLElBQUUsS0FBSyxFQUFFLENBQUM7QUFBRSxRQUFJLElBQUUsS0FBSyxNQUFNLENBQUM7QUFBRSxTQUFHLElBQUUsRUFBRSxNQUFLLEVBQUUsSUFBSSxDQUFDLElBQUcsS0FBRyxFQUFFLFNBQU8sS0FBSyxXQUFTLEtBQUssTUFBTSxDQUFDLElBQUUsSUFBRSxvQkFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFFLEtBQUs7QUFBQSxFQUFPO0FBQUUsTUFBRSxFQUFFO0FBQVUsSUFBRSxNQUFJLEVBQUUsVUFBVSxNQUFJLFNBQVMsR0FBRTtBQUFDLFVBQU0sSUFBRSxLQUFLLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQztBQUFFLFdBQU8sS0FBRyxFQUFFLElBQUksQ0FBQztBQUFBLEVBQUM7QUFDcmEsSUFBRSxTQUFPLEVBQUUsVUFBVSxTQUFPLFNBQVMsR0FBRTtBQUFDLFVBQU0sSUFBRSxLQUFLLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQztBQUFFLFNBQUcsRUFBRSxPQUFPLENBQUMsS0FBRyxLQUFLO0FBQUEsRUFBTTtBQUFFLElBQUUsUUFBTSxFQUFFLFVBQVUsUUFBTSxXQUFVO0FBQUMsU0FBSyxRQUFNLEVBQUU7QUFBRSxTQUFLLElBQUUsQ0FBQztBQUFFLFNBQUssT0FBSztBQUFBLEVBQUM7QUFBRSxJQUFFLFNBQU8sRUFBRSxVQUFVLFNBQU8sYUFBVztBQUFDLGFBQVEsSUFBRSxHQUFFLElBQUUsS0FBSyxFQUFFLFFBQU8sSUFBSSxVQUFRLEtBQUssS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTTtBQUFBLEVBQUM7QUFBRSxJQUFFLE9BQUssRUFBRSxVQUFVLE9BQUssYUFBVztBQUFDLGFBQVEsSUFBRSxHQUFFLElBQUUsS0FBSyxFQUFFLFFBQU8sSUFBSSxVQUFRLEtBQUssS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTTtBQUFBLEVBQUM7QUFBRSxJQUFFLFVBQVEsRUFBRSxVQUFVLFVBQVEsYUFBVztBQUFDLGFBQVEsSUFBRSxHQUFFLElBQUUsS0FBSyxFQUFFLFFBQU8sSUFBSSxVQUFRLEtBQUssS0FBSyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTTtBQUFBLEVBQUM7QUFDNWYsV0FBUyxHQUFHLEdBQUU7QUFBQyxRQUFJLElBQUUsU0FBRyxLQUFLLEtBQUU7QUFBRSxRQUFHLE9BQU8sS0FBRyxTQUFTLFFBQU8sSUFBRTtBQUFFLFFBQUksSUFBRSxHQUFFLElBQUUsS0FBSyxJQUFFO0FBQUUsYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxNQUFHLElBQUUsSUFBRSxFQUFFLFdBQVcsQ0FBQyxLQUFHO0FBQUUsV0FBTyxLQUFLLE1BQUksS0FBRyxJQUFFLFNBQUcsTUFBRztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRTtBQUFDLFFBQUksSUFBRSxhQUFPLENBQUMsR0FBRyxLQUFLLEtBQUUsT0FBTyxDQUFDO0FBQUUsUUFBSSxJQUFFLE9BQU87QUFBRSxRQUFHLE1BQUksU0FBUyxRQUFPLElBQUU7QUFBRSxRQUFHLE1BQUksU0FBUyxRQUFPLE9BQU8sQ0FBQyxJQUFFO0FBQUUsUUFBRSxPQUFPLENBQUM7QUFBRSxRQUFJLElBQUUsS0FBSyxJQUFFLE9BQU8sQ0FBQztBQUFFLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksTUFBRyxJQUFFLElBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEtBQUc7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFFLE1BQUk7QUFBSixNQUFPO0FBQ3RaLFdBQWUsR0FBRyxHQUFFO0FBQUE7QUFBQyxVQUFFLEVBQUU7QUFBSyxVQUFJLElBQUUsRUFBRTtBQUFLLFlBQU0sSUFBRSxFQUFFO0FBQUcsVUFBSSxJQUFFLEVBQUU7QUFBSyxjQUFPLEdBQUU7QUFBQSxRQUFDLEtBQUs7QUFBTyxlQUFHLEVBQUUsV0FBUyxDQUFDO0FBQUUsV0FBQyxJQUFFLEVBQUUsWUFBVSxTQUFTLFlBQVUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFFLEtBQUcsSUFBSSxLQUFLLFdBQVcsTUFBTSxFQUFFLEdBQUUsT0FBTyxLQUFLLGNBQVksS0FBRyxJQUFJLEVBQUUsRUFBRTtBQUFFLHNCQUFZLEVBQUMsSUFBRyxFQUFDLENBQUM7QUFBRTtBQUFBLFFBQU07QUFBUSxjQUFJO0FBQUUsZ0JBQUksYUFBVyxFQUFFLENBQUMsS0FBRyxFQUFFLENBQUMsSUFBRSxHQUFHLFFBQU8sRUFBRSxDQUFDLElBQUUsR0FBRSxFQUFFLENBQUMsSUFBRSxLQUFHLElBQUU7QUFBTSxnQkFBSSxXQUFTLEVBQUUsQ0FBQyxNQUFJLElBQUUsTUFBTSxHQUFHLE9BQU8sS0FBSyxJQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQyxHQUFFLENBQUMsT0FBSyxJQUFFLEtBQUcsR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFHLENBQUMsTUFBSSxFQUFFLFNBQU8sSUFBRSxNQUFNLElBQUcsS0FBRyxFQUFFLFVBQVEsSUFBRSxNQUFNLEVBQUUsUUFBTyxNQUFJLFlBQVUsRUFBRSxXQUFTLElBQUUsRUFBRTtBQUNuZixzQkFBWSxNQUFJLFdBQVMsRUFBQyxJQUFHLEdBQUUsS0FBSSxFQUFDLElBQUUsRUFBQyxJQUFHLEVBQUMsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUE7QUFBRSxXQUFTLEdBQUcsR0FBRTtBQUFDLE9BQUcsS0FBSyxHQUFFLEtBQUs7QUFBRSxPQUFHLEtBQUssR0FBRSxRQUFRO0FBQUUsT0FBRyxLQUFLLEdBQUUsUUFBUTtBQUFFLE9BQUcsS0FBSyxHQUFFLFFBQVE7QUFBRSxPQUFHLEtBQUssR0FBRSxRQUFRO0FBQUUsT0FBRyxLQUFLLEdBQUUsYUFBYTtBQUFBLEVBQUM7QUFBQyxNQUFJO0FBQUosTUFBTztBQUFQLE1BQVU7QUFBRyxXQUFTLEtBQUk7QUFBQyxTQUFHLEtBQUc7QUFBQSxFQUFDO0FBQzNOLFdBQVMsR0FBRyxHQUFFO0FBQUMsU0FBSyxJQUFFLE9BQU8sSUFBRSxXQUFVO0FBQUMsWUFBTSxJQUFFO0FBQVUsVUFBSSxJQUFFLEVBQUUsRUFBRSxTQUFPLENBQUM7QUFBRSxVQUFJO0FBQUUsYUFBTyxNQUFJLGVBQWEsSUFBRSxHQUFFLE9BQU8sRUFBRSxFQUFFLFNBQU8sQ0FBQztBQUFHLFdBQUcsT0FBSyxLQUFHLEtBQUssSUFBSSxJQUFFLE1BQUksS0FBSyxXQUFTLEtBQUssV0FBUyxNQUFJLEtBQUcsV0FBVyxJQUFHLENBQUMsR0FBRSxLQUFHLEtBQUssSUFBSTtBQUFHLFVBQUcsSUFBRztBQUFDLGNBQU0sSUFBRTtBQUFLLGVBQU8sSUFBSSxRQUFRLE9BQUc7QUFBQyxxQkFBVyxXQUFVO0FBQUMsY0FBRSxFQUFFLElBQUUsT0FBTyxFQUFFLE1BQU0sR0FBRSxDQUFDLENBQUM7QUFBQSxVQUFDLEdBQUUsQ0FBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUM7QUFBQyxZQUFNLElBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxNQUFLLENBQUM7QUFBRSxVQUFFLEVBQUUsT0FBSyxJQUFFLElBQUksUUFBUSxPQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUUsV0FBRyxFQUFFLEtBQUssQ0FBQztBQUFF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RSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLFFBQU8sS0FBRSxFQUFFLENBQUMsTUFBSSxFQUFFLENBQUMsSUFBRSxFQUFFLElBQUcsSUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUM3YyxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBRyxJQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUcsTUFBSSxFQUFFLFNBQU8sR0FBRTtBQUFDLFVBQUcsRUFBRSxnQkFBYyxPQUFNO0FBQUMsWUFBRyxFQUFFLENBQUMsR0FBRTtBQUFDLGVBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksR0FBRSxJQUFJLEdBQUUsRUFBRSxDQUFDLEdBQUUsTUFBRyxJQUFFO0FBQUU7QUFBQSxRQUFNO0FBQUMsWUFBRSxFQUFFLEtBQUssR0FBRztBQUFBLE1BQUM7QUFBQyxRQUFFLElBQUksR0FBRSxHQUFFLEdBQUUsSUFBRTtBQUFBLElBQUMsV0FBUyxFQUFFLGdCQUFjLE1BQU0sTUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLFFBQU8sS0FBRSxFQUFFLEVBQUUsQ0FBQyxHQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBRyxDQUFDLEVBQUUsT0FBTyxRQUFPO0FBQUUsUUFBRyxFQUFFLFdBQVMsRUFBRSxRQUFPLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxLQUFHLEVBQUUsU0FBTyxJQUFFLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxJQUFFLEdBQUUsSUFBRSxHQUFHLEtBQUssTUFBSyxDQUFDLElBQUU7QUFBRSxRQUFJLElBQUUsQ0FBQztBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLE1BQUksSUFBRSxFQUFFLENBQUMsT0FBSyxJQUFFLEVBQUUsU0FBUTtBQUFDLFVBQUcsR0FBRTtBQUFDLFlBQUcsS0FBRyxHQUFFO0FBQUMsZUFBRztBQUFFO0FBQUEsUUFBUTtBQUFDLFlBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDO0FBQUUsWUFBRSxFQUFFO0FBQU8sWUFBRTtBQUFBLE1BQUM7QUFBQyxVQUFFLE1BQUksSUFBRSxFQUFFLE1BQU0sR0FBRSxDQUFDLEdBQUUsSUFBRTtBQUFHLFVBQUcsQ0FBQyxFQUFFLFVBQVEsS0FBRyxFQUFFLFFBQU8sSUFBRSxHQUFHLEtBQUssTUFBSyxDQUFDLElBQUU7QUFBRSxRQUFFLEtBQUssQ0FBQztBQUFFLFdBQUc7QUFBRSxVQUFHLENBQUMsRUFBRTtBQUFBLElBQUs7QUFBQyxRQUFFLEVBQUUsU0FBTyxJQUFFLENBQUMsRUFBRSxPQUFPLE1BQU0sQ0FBQyxHQUFFLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBRSxXQUFPLElBQUUsR0FBRyxLQUFLLE1BQUssQ0FBQyxJQUFFO0FBQUEsRUFBQztBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFFBQUcsRUFBRSxDQUFDLEtBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxRQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRSxDQUFDO0FBQUUsUUFBRyxFQUFFLE1BQUksU0FBTyxNQUFJLFNBQU8sRUFBRSxPQUFPLFVBQVEsRUFBRSxTQUFPLEVBQUUsU0FBUyxRQUFPLEVBQUUsU0FBTyxNQUFJLElBQUUsRUFBRSxFQUFFLFNBQU8sQ0FBQyxLQUFJLElBQUUsRUFBRSxXQUFTLEVBQUUsU0FBTyxFQUFFLFNBQU87QUFBRSxRQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUs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O0FBQUMsaUJBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLEVBQUUsRUFBRSxDQUFDLE1BQUksR0FBRTtBQUFDLFlBQUUsRUFBRSxDQUFDLElBQUUsV0FBVTtBQUFDLG1CQUFPLEVBQUUsS0FBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxVQUFDO0FBQUU7QUFBQSxRQUFLO0FBQUMsV0FBRyxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQ2hnQixRQUFFLEVBQUUsS0FBSyxDQUFDO0FBQUEsSUFBQyxXQUFTLEVBQUUsTUFBTSxHQUFFLEVBQUUsS0FBSyxXQUFVO0FBQUMsYUFBTyxFQUFFLEtBQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsSUFBQyxDQUFDO0FBQUEsUUFBTyxRQUFPLEVBQUUsS0FBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxXQUFPLElBQUUsRUFBRSxTQUFPLEVBQUUsU0FBTztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFFLEVBQUUsQ0FBQztBQUFFLFVBQU0sSUFBRSxFQUFFLENBQUMsS0FBRztBQUFFLE1BQUUsVUFBUSxFQUFFLFFBQU07QUFBRyxRQUFFLElBQUksRUFBRSxDQUFDO0FBQUUsTUFBRSxTQUFPLE1BQUksSUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUFHLFdBQU87QUFBQSxFQUFDO0FBQUUsSUFBRSxVQUFVLEtBQUcsV0FBVTtBQUFDLFdBQU8sR0FBRyxNQUFLLE1BQUssSUFBRyxTQUFTO0FBQUEsRUFBQztBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBRSxXQUFTLEtBQUssT0FBTyxVQUFRLEVBQUUsS0FBSyxLQUFLLE1BQU0sR0FBRSxFQUFFLFNBQU8sSUFBRSxLQUFLLFNBQU8sRUFBRSxDQUFDLEtBQUcsS0FBSyxTQUFPLEdBQUcsR0FBRSxHQUFFLEdBQUUsT0FBRyxLQUFLLENBQUMsR0FBRSxJQUFFO0FBQUksVUFBSSxLQUFLLFFBQU07QUFBTSxXQUFPLElBQUUsS0FBSyxRQUFRLEdBQUUsR0FBRSxHQUFFLENBQUMsSUFBRTtBQUFBLEVBQUk7QUFBRSxJQUFFLFVBQVUsTUFBSSxXQUFVO0FBQUMsV0FBTyxHQUFHLE1BQUssT0FBTSxJQUFHLFNBQVM7QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsS0FBRyxDQUFDLEtBQUssT0FBTyxPQUFPLFFBQU8sSUFBRSxLQUFLLFNBQU87QUFBSyxRQUFJO0FBQUUsUUFBRyxFQUFFLE9BQU8sS0FBRyxLQUFLLE9BQU8sVUFBUSxFQUFFLFFBQVEsS0FBSyxNQUFNLEdBQUUsRUFBRSxTQUFPLEVBQUUsTUFBSyxTQUFPLEVBQUUsQ0FBQztBQUFBLFNBQU07QUFBQyxVQUFJLElBQUU7QUFBRSxlQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxNQUFJLElBQUUsRUFBRSxDQUFDLE9BQUssSUFBRSxFQUFFLFFBQVEsS0FBRSxNQUFJLElBQUU7QUFBQSxlQUFXLENBQUMsR0FBRTtBQUFDLFlBQUU7QUFBRTtBQUFBLE1BQUs7QUFBQyxXQUFHLEtBQUssU0FBTyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxLQUFLLEdBQUUsQ0FBQyxHQUFFLElBQUUsUUFBSSxLQUFLLFNBQU8sQ0FBQztBQUFBLElBQUM7QUFBQSxRQUFNLE9BQUksS0FBSyxTQUFPO0FBQUcsVUFBSSxLQUFLLFFBQU07QUFBTSxXQUFPLElBQUUsS0FBSyxRQUFRLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxJQUFFO0FBQUEsRUFBSTtBQUFFLElBQUUsVUFBVSxNQUFJLFdBQVU7QUFBQyxXQUFPLEdBQUcsTUFBSyxPQUFNLElBQUcsU0FBUztBQUFBLEVBQUM7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QUcsT0FBTSxFQUFFLElBQUUsR0FBRyxTQUFPLEVBQUUsUUFBTyxJQUFFLElBQUcsSUFBRTtBQUFFLHFCQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsa0JBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxrQkFBRyxHQUFFO0FBQUMsb0JBQUksSUFBRSxFQUFFO0FBQU8scUJBQUc7QUFBRSxxQkFBRyxLQUFHLE1BQUksSUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFFLElBQUUsT0FBSyxLQUFHLElBQUUsRUFBRSxVQUFVLEdBQUUsQ0FBQyxJQUFFLE1BQUksSUFBRSxFQUFFLFVBQVUsR0FBRSxJQUFFLENBQUMsSUFBRSxLQUFHLElBQUUsSUFBRSxJQUFFLEVBQUUsVUFBVSxJQUFFLENBQUMsSUFBRSxLQUFJLElBQUUsR0FBRSxJQUFFO0FBQUEsY0FBSTtBQUFBLFlBQUM7QUFBQyxrQkFBSSxNQUFJLElBQUUsTUFBSSxJQUFFLEVBQUUsVUFBUSxJQUFFLElBQUUsS0FBSSxJQUFFLEVBQUUsVUFBUSxJQUFFLElBQUUsS0FBRyxFQUFFLFFBQU8sS0FBRyxHQUFFLEdBQUcsS0FBSyxFQUFFLE1BQU0sR0FBRSxFQUFFLEtBQUssRUFBQyxPQUFNLEVBQUMsQ0FBQyxJQUFHLE1BQUksSUFBRSxNQUFJLE1BQUk7QUFBQSxVQUFFO0FBQUMsY0FBRyxDQUFDLEVBQUUsS0FBRSxFQUFFLENBQUMsR0FBRSxNQUFJLElBQUUsTUFBSSxNQUFJLEdBQUUsS0FBRyxFQUFFLEtBQUssRUFBQyxNQUFLLEVBQUMsQ0FBQztBQUFBLG1CQUFVLEtBQUcsS0FBRyxFQUFFO0FBQUEsUUFBSztBQUFDLFlBQUUsR0FBRyxVQUFRLEVBQUUsU0FBTztBQUFHLFlBQUcsS0FBRyxLQUFHLEtBQUcsRUFBRSxTQUFPLElBQUUsRUFBRSxLQUFHLElBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLElBQUUsR0FBRSxJQUFFLE1BQ25mLEtBQUcsSUFBRyxJQUFFLE1BQUksS0FBRyxJQUFHLEtBQUcsRUFBRSxLQUFFLElBQUUsS0FBRyxJQUFFLElBQUUsSUFBRSxLQUFHLE1BQUksSUFBRSxLQUFHLElBQUUsSUFBRyxJQUFFLElBQUUsS0FBRyxJQUFFLElBQUUsSUFBRSxLQUFHLElBQUUsR0FBRSxNQUFJLElBQUUsS0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFJLE9BQUssRUFBRSxPQUFPLElBQUUsQ0FBQyxNQUFJLFFBQU0sSUFBRSxFQUFFLFFBQVEsS0FBSSxDQUFDLEdBQUUsSUFBRSxNQUFJLElBQUUsS0FBSSxJQUFFLEVBQUUsVUFBUSxFQUFFLE9BQU8sSUFBRSxDQUFDLE1BQUksT0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFJLFFBQU0sSUFBRSxFQUFFLFlBQVksS0FBSSxDQUFDLEdBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxFQUFFLEtBQUksS0FBRyxJQUFFLElBQUUsTUFBSSxFQUFFLFVBQVUsR0FBRSxDQUFDLEtBQUcsSUFBRSxFQUFFLFNBQU8sSUFBRTtBQUFBLGFBQVE7QUFBQyxjQUFFLENBQUM7QUFBRSxjQUFFLENBQUM7QUFBRSxjQUFFLENBQUM7QUFBRSxjQUFFLENBQUM7QUFBRSxjQUFFLENBQUM7QUFBRSxjQUFFLENBQUM7QUFBRSxjQUFFLElBQUUsSUFBRTtBQUFFLGVBQUksSUFBRSxJQUFFLE9BQUk7QUFBQyxnQkFBSSxJQUFFO0FBQU8scUJBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxHQUFHLFFBQU8sS0FBSTtBQUFDLGtCQUFFLEdBQUcsQ0FBQztBQUFFLGtCQUFHLEVBQUUsS0FBRyxNQUFJLEdBQUU7QUFBQyxvQkFBRyxFQUFFLElBQUUsQ0FBQyxFQUFFO0FBQVMscUJBQUc7QUFBRSxvQkFBRyxFQUFFLENBQUMsR0FBRTtBQUFDLHVCQUFHO0FBQUUsb0JBQUUsSUFBRSxDQUFDLElBQUU7QUFBRSxvQkFBRSxJQUFFLENBQUMsSUFBRTtBQUFFO0FBQUEsZ0JBQVE7QUFBQyxvQkFBRyxLQUFHLEVBQUUsU0FBTyxHQUFFO0FBQUMsc0JBQUcsS0FDcGYsRUFBRSxRQUFPO0FBQUMsc0JBQUUsSUFBRSxDQUFDLElBQUU7QUFB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QVUsY0FBTSxJQUFFLEVBQUU7QUFBUSxZQUFFLEVBQUUsU0FBTyxFQUFFO0FBQU0sVUFBRSxVQUFRO0FBQUcsVUFBRSxRQUFNO0FBQUssWUFBRSxJQUFFLEVBQUUsWUFBWSxDQUFDLElBQUUsRUFBRSxPQUFPLENBQUM7QUFBRSxVQUFFLFVBQVE7QUFBRSxVQUFFLFFBQU07QUFBRSxZQUFFLEVBQUUsVUFBUTtBQUFBLE1BQUMsTUFBTSxLQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBRyxLQUFHLEVBQUUsTUFBSztBQUFDLFlBQU0sSUFBRTtBQUFLLFVBQUUsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLFVBQUUsRUFBRSxDQUFDLElBQUUsRUFBRSxTQUFPLEVBQUUsVUFBUTtBQUFFLFdBQUcsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFFLFVBQUUsQ0FBQyxDQUFDO0FBQUUsVUFBRSxDQUFDO0FBQUUsVUFBRSxJQUFJLFFBQVEsU0FBUyxHQUFFO0FBQUMsWUFBRTtBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxTQUFLLFFBQU0sS0FBRztBQUFLLFNBQUssU0FBTyxLQUFHLENBQUM7QUFBRSxTQUFLLElBQUU7QUFBRSxTQUFLLElBQ3BzQixLQUFHLENBQUM7QUFBRSxTQUFLLFFBQU0sS0FBRztBQUFLLFNBQUssU0FBTyxLQUFHO0FBQUssU0FBSyxZQUFVLEtBQUc7QUFBSyxTQUFLLFFBQU0sS0FBRztBQUFHLFNBQUssUUFBTSxLQUFHO0FBQUEsRUFBRTtBQUFDLE1BQUUsRUFBRTtBQUFVLElBQUUsUUFBTSxTQUFTLEdBQUU7QUFBQyxRQUFHLEtBQUssT0FBTTtBQUFDLFlBQU0sSUFBRTtBQUFLLFdBQUssRUFBRSxLQUFLLFdBQVU7QUFBQyxlQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUU7QUFBQSxNQUFNLENBQUM7QUFBQSxJQUFDLFdBQVMsS0FBSyxPQUFPLFFBQU87QUFBQyxZQUFNLElBQUUsQ0FBQztBQUFFLGVBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxLQUFLLE9BQU8sUUFBTyxJQUFJLEtBQUcsSUFBRSxLQUFLLE9BQU8sQ0FBQyxFQUFFLEtBQUcsRUFBRSxVQUFRLEdBQUU7QUFBQyxZQUFHLEVBQUUsQ0FBQyxJQUFFLEdBQUUsS0FBRyxFQUFFLFFBQU8sQ0FBQyxFQUFFO0FBQUEsTUFBSyxPQUFLO0FBQUMsVUFBRSxDQUFDLElBQUUsRUFBRSxNQUFNLEdBQUUsQ0FBQztBQUFFO0FBQUEsTUFBSztBQUFDLFdBQUssU0FBTztBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBSTtBQUM3WixJQUFFLFNBQU8sU0FBUyxHQUFFO0FBQUMsUUFBRyxLQUFLLE9BQU07QUFBQyxZQUFNLElBQUU7QUFBSyxXQUFLLEVBQUUsS0FBSyxXQUFVO0FBQUMsZUFBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFO0FBQUEsTUFBTSxDQUFDO0FBQUEsSUFBQyxXQUFTLEtBQUssT0FBTyxRQUFPO0FBQUMsWUFBTSxJQUFFLENBQUM7QUFBRSxlQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsS0FBSyxPQUFPLFFBQU8sSUFBSSxLQUFHLElBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxHQUFFLFVBQVEsSUFBRSxLQUFHLEVBQUUsVUFBUSxFQUFFLENBQUMsSUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFFLElBQUU7QUFBRyxXQUFLLFNBQU87QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUk7QUFBRSxJQUFFLFFBQU0sU0FBUyxHQUFFO0FBQUMsUUFBRyxLQUFLLE9BQU07QUFBQyxZQUFNLElBQUU7QUFBSyxXQUFLLEVBQUUsS0FBSyxXQUFVO0FBQUMsZUFBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFO0FBQUEsTUFBTSxDQUFDO0FBQUEsSUFBQyxNQUFNLE1BQUssS0FBRztBQUFFLFdBQU87QUFBQSxFQUFJO0FBQzNZLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRTtBQUFPLFFBQUksSUFBRSxFQUFFO0FBQU0sTUFBRSxRQUFNO0FBQUssYUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsRUFBRSxRQUFPLElBQUksS0FBRyxJQUFFLEVBQUUsRUFBRSxDQUFDO0FBQUUsVUFBRyxPQUFPLE1BQUksV0FBVyxLQUFFLEVBQUUsR0FBRSxFQUFFLEVBQUUsQ0FBQyxJQUFFLElBQUUsRUFBRSxVQUFRLEdBQUU7QUFBQSxlQUFZLEVBQUUsRUFBRSxLQUFFLEVBQUUsRUFBRSxHQUFFLEVBQUUsRUFBRSxDQUFDLElBQUUsSUFBRSxFQUFFLFVBQVEsR0FBRTtBQUFBLGVBQVksRUFBRSxLQUFLLFFBQU8sRUFBRSxRQUFNO0FBQUE7QUFBRSxRQUFFLEVBQUU7QUFBTyxNQUFFLElBQUUsQ0FBQztBQUFFLE1BQUUsU0FBTztBQUFLLFNBQUcsRUFBRSxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFDM1IsSUFBRSxVQUFRLFNBQVMsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEtBQUssUUFBTSxHQUFHLE1BQUssSUFBRSxJQUFFLEtBQUs7QUFBTyxRQUFHLEVBQUUsTUFBSztBQUFDLFlBQU0sSUFBRTtBQUFLLGFBQU8sRUFBRSxLQUFLLFdBQVU7QUFBQyxlQUFPLEVBQUUsUUFBUSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsTUFBRSxXQUFTLE9BQU8sTUFBSSxZQUFVLElBQUUsRUFBRSxhQUFXLEtBQUssV0FBVSxJQUFFLENBQUMsQ0FBQyxLQUFHLEVBQUUsUUFBTyxJQUFFLEVBQUUsUUFBTyxJQUFFLEVBQUUsVUFBUSxJQUFFLEtBQUcsS0FBSyxXQUFVLElBQUUsQ0FBQyxDQUFDLEtBQUcsSUFBRyxJQUFFLElBQUUsSUFBRSxHQUFHLEtBQUssS0FBSyxPQUFNLENBQUMsSUFBRSxJQUFFLEdBQUcsS0FBSyxLQUFLLE9BQU0sR0FBRSxLQUFHLEtBQUksR0FBRSxDQUFDO0FBQUcsV0FBTyxLQUFLLFNBQVMsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUNsWCxJQUFFLFdBQVMsU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUUsTUFBSztBQUFDLFlBQU0sSUFBRTtBQUFLLGFBQU8sRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGVBQU8sRUFBRSxTQUFTLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxTQUFHLEVBQUUsVUFBUSxLQUFLLFVBQVEsSUFBRSxHQUFHLEtBQUssT0FBTSxHQUFFLEtBQUssTUFBTSxPQUFNLEtBQUssT0FBTSxDQUFDO0FBQUcsVUFBTSxJQUFFLEtBQUs7QUFBTyxTQUFLLFlBQVUsS0FBSyxRQUFNLEtBQUssU0FBTyxLQUFLLElBQUUsS0FBSyxRQUFNLEtBQUssU0FBTztBQUFLLFNBQUssUUFBTSxLQUFLLFFBQU07QUFBRyxTQUFHLEVBQUUsQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsRUFBRTtBQUFPLFFBQUksSUFBRSxDQUFDLEdBQUUsR0FBRTtBQUFFLFFBQUUsRUFBRTtBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLElBQUksVUFBUSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUksS0FBRyxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxXQUFTLElBQUUsRUFBRSxDQUFDLEdBQUcsVUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUUsRUFBRSxDQUFDO0FBQUUsT0FBQyxJQUFFLEVBQUUsQ0FBQyxLQUFHLEVBQUUsQ0FBQyxPQUFLLElBQUUsR0FBRSxFQUFFLENBQUMsSUFBRTtBQUFHLFVBQUUsRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsQ0FBQztBQUFHLFVBQUcsQ0FBQyxHQUFFO0FBQUMsWUFBSSxJQUFFLEtBQUcsS0FBRyxDQUFDLElBQUUsSUFBRSxLQUFHO0FBQUcsWUFBRSxFQUFFLENBQUMsTUFBSSxFQUFFLENBQUMsSUFBRSxDQUFDO0FBQUEsTUFBRTtBQUFDLFFBQUUsS0FBSyxDQUFDO0FBQUUsVUFBRyxLQUFHLEtBQUcsTUFBSSxJQUFFLEtBQUcsRUFBRSxTQUFPLE1BQUksRUFBRSxRQUFPLElBQUUsRUFBRSxNQUFNLENBQUMsSUFBRTtBQUFBLElBQUM7QUFBQyxRQUFHLElBQUUsRUFBRSxPQUFPLEtBQUcsRUFBRSxLQUFFLEVBQUUsU0FBTyxJQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLEtBQUcsSUFBRSxFQUFFLENBQUMsTUFBSSxLQUFHLEVBQUUsU0FBTyxLQUFHLElBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLElBQUU7QUFBQSxTQUFNO0FBQUMsVUFBRyxJQUFFLEVBQUUsUUFBTSxDQUFDO0FBQUUsVUFBRSxFQUFFLElBQUUsQ0FBQztBQUFFLFVBQUcsS0FBRyxFQUFFLEtBQUcsR0FBRTtBQUFDLFlBQUcsRUFBRSxTQUFPLEtBQUcsRUFBRSxLQUFFLEVBQUUsTUFBTSxHQUFFLElBQzV5QixDQUFDO0FBQUEsTUFBQyxPQUFLO0FBQUMsWUFBRSxDQUFDO0FBQUUsaUJBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEVBQUUsS0FBRyxLQUFHLEVBQUUsU0FBTyxFQUFFLE1BQUcsRUFBRTtBQUFBLGFBQVc7QUFBQyxjQUFHLEtBQUcsRUFBRSxTQUFPLEtBQUcsRUFBRSxLQUFFLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxHQUFFLEtBQUcsRUFBRSxRQUFPLE1BQUksS0FBRyxFQUFFO0FBQVEsWUFBRSxLQUFLLENBQUM7QUFBRSxjQUFHLENBQUMsRUFBRTtBQUFBLFFBQUs7QUFBQyxZQUFFO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUMzTCxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLENBQUMsR0FBRSxJQUFFLEVBQUU7QUFBRSxRQUFJO0FBQUUsUUFBSSxJQUFFLEVBQUU7QUFBTyxRQUFJO0FBQUUsUUFBRyxFQUFFLE1BQUksSUFBRSxJQUFFLEdBQUUsS0FBRyxHQUFFLEtBQUk7QUFBQyxVQUFHLEtBQUcsSUFBRSxFQUFFLENBQUMsTUFBSSxFQUFFO0FBQU8sYUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUksS0FBRyxJQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUMsRUFBRSxDQUFDO0FBQUUsY0FBRyxFQUFFLENBQUMsSUFBRSxHQUFFLEVBQUU7QUFBQSxtQkFBWSxFQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsV0FBUyxFQUFFLFFBQU87QUFBQTtBQUFBO0FBQUEsSUFBQztBQUFBLFFBQU0sVUFBUSxJQUFFLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxLQUFHLEdBQUUsS0FBSTtBQUFDLFVBQUUsRUFBRSxDQUFDO0FBQUUsZUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLEtBQUcsSUFBRSxFQUFFLENBQUMsTUFBSSxFQUFFO0FBQU8saUJBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUcsRUFBRSxDQUFDLElBQUUsR0FBRSxFQUFFO0FBQUEsYUFBUTtBQUFDLGNBQUksS0FBRyxLQUFHLElBQUUsSUFBRSxJQUFFLEtBQUcsSUFBRSxPQUFLLElBQUUsS0FBRztBQUFFLFdBQUMsRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUFFLGNBQUcsRUFBRSxNQUFJLEVBQUUsUUFBTztBQUFBLFFBQUM7QUFBQTtBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUMxYixXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsRUFBRSxHQUFFLElBQUUsQ0FBQztBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUUsRUFBRSxDQUFDO0FBQUUsZUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUU7QUFBQSxJQUFDO0FBQUMsUUFBRyxFQUFFLFVBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUU7QUFBQSxRQUFRLFVBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsT0FBTyxRQUFPLElBQUksTUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsT0FBSyxFQUFFLENBQUMsTUFBSSxFQUFFLENBQUMsSUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUU7QUFBRyxXQUFPO0FBQUEsRUFBQztBQUFFLElBQUU7QUFBRSxLQUFHLFVBQVUsU0FBTyxTQUFTLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFJLENBQUMsS0FBRyxHQUFHLENBQUMsS0FBRyxJQUFFLEdBQUUsSUFBRSxNQUFJLEdBQUcsQ0FBQyxNQUFJLElBQUUsR0FBRSxJQUFFO0FBQUksUUFBSSxJQUFFLENBQUM7QUFBRSxRQUFJLElBQUUsQ0FBQztBQUFFLFFBQUk7QUFBRSxRQUFJLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBRSxRQUFJLElBQUUsR0FBRSxJQUFFLE1BQUc7QUFBRSxRQUFHLEdBQUU7QUFBQyxRQUFFLGdCQUFjLFVBQVEsSUFBRSxFQUFDLE9BQU0sRUFBQztBQUFHLFVBQUUsRUFBRSxTQUFPO0FBQUUsVUFBRSxFQUFFO0FBQU0sVUFBRSxFQUFFO0FBQU0sVUFBRSxFQUFFO0FBQU0sVUFBRSxLQUFHLEVBQUUsVUFBUSxJQUFFLEVBQUUsV0FBUyxFQUFFLFFBQU0sT0FBSztBQUFHLFVBQUksSUFBRSxLQUFLLE9BQUssRUFBRTtBQUFJLFVBQUUsRUFBRTtBQUFRLFVBQUUsRUFBRSxZQUFVO0FBQUcsVUFBRSxFQUFFO0FBQU0sVUFB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LFVBQVEsSUFBRSxDQUFDLENBQUM7QUFBQSxJQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUs7QUFBTyxRQUFJO0FBQUUsU0FBRyxLQUFLLFVBQVEsS0FBSyxPQUFLLENBQUMsS0FBRyxDQUFDO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUUsRUFBRSxDQUFDO0FBQUUsVUFBRyxLQUFLLE1BQUksS0FBSyxPQUN0ZixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUU7QUFBUyxVQUFJO0FBQUUsUUFBRSxDQUFDLE1BQUksSUFBRSxHQUFFLElBQUUsRUFBRSxPQUFNLElBQUUsRUFBRSxTQUFPLEdBQUUsSUFBRSxHQUFHLEVBQUUsT0FBTSxDQUFDLEdBQUUsSUFBRSxHQUFHLEVBQUUsUUFBTyxDQUFDLEdBQUUsSUFBRSxHQUFHLEVBQUUsU0FBUSxDQUFDLEdBQUUsSUFBRSxLQUFHLEtBQUssU0FBTyxHQUFHLEVBQUUsV0FBVSxDQUFDLEdBQUUsSUFBRSxDQUFDLENBQUMsS0FBRyxLQUFHLEtBQUssU0FBTyxHQUFHLEVBQUUsUUFBTyxDQUFDLEdBQUUsSUFBRSxHQUFHLEVBQUUsT0FBTSxDQUFDO0FBQUcsVUFBRyxFQUFFLEtBQUUsRUFBRSxDQUFDO0FBQUEsV0FBTTtBQUFDLFlBQUUsS0FBRyxLQUFHLENBQUM7QUFBRSxZQUFFLEVBQUU7QUFBTyxZQUFJLElBQUUsS0FBSyxNQUFNLElBQUksQ0FBQztBQUFFLGNBQUksS0FBSyxPQUFLLEVBQUUsTUFBSSxHQUFFLElBQUUsRUFBRSxHQUFHLG9CQUFtQixFQUFFLFFBQU0sSUFBRyxDQUFDLEtBQUcsTUFBSSxFQUFFLFNBQU87QUFBSyxZQUFFLElBQUUsRUFBRSxZQUFZLEdBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxPQUFPLEdBQUUsR0FBRSxDQUFDO0FBQUUsY0FBSSxFQUFFLFNBQU87QUFBRyxZQUFHLEdBQUU7QUFBQyxZQUFFLENBQUMsSUFBRTtBQUFFO0FBQUEsUUFBUTtBQUFBLE1BQUM7QUFBQyxXQUFHLElBQUUsRUFBRSxVQUFRLE1BQUksRUFBRTtBQUFPLFVBQUcsS0FBRyxHQUFFO0FBQUMsWUFBRSxDQUFDO0FBQUUsWUFBRTtBQUFFLFlBQUcsS0FBSyxNQUFJLEdBQUU7QUFBQyxjQUFHLENBQUMsRUFBRSxNQUFJLElBQUUsRUFBRSxRQUFPLElBQzFmLEVBQUUsUUFBTyxLQUFJO0FBQUMsZ0JBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxnQkFBRyxLQUFHLEVBQUUsT0FBTyxNQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEscUJBQVUsQ0FBQyxFQUFFLFFBQU8sSUFBRSxJQUFFLElBQUksRUFBRSxHQUFFLElBQUk7QUFBQSxVQUFDO0FBQUEsUUFBQyxNQUFNLFVBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFHLEdBQUU7QUFBQyxjQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQUUsY0FBRyxDQUFDLEVBQUUsS0FBRyxFQUFFO0FBQUEsY0FBYyxRQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUUsY0FBRyxLQUFHLElBQUUsS0FBRyxFQUFFLElBQUksRUFBRSxJQUFFLENBQUMsQ0FBQyxNQUFJLEVBQUUsT0FBTyxNQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsbUJBQVUsQ0FBQyxFQUFFLFFBQU8sSUFBRSxJQUFFLElBQUksRUFBRSxHQUFFLElBQUk7QUFBQSxRQUFDO0FBQUMsWUFBRyxHQUFFO0FBQUMsY0FBRSxHQUFHLEdBQUUsR0FBRSxDQUFDO0FBQUUsY0FBRSxFQUFFO0FBQU8sY0FBRyxDQUFDLEtBQUcsQ0FBQyxFQUFFLFFBQU8sSUFBRSxJQUFFLElBQUksRUFBRSxHQUFFLElBQUk7QUFBRTtBQUFBLFFBQUc7QUFBQSxNQUFDO0FBQUMsVUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFFLEdBQUUsRUFBRSxLQUFLLENBQUMsR0FBRTtBQUFBLGVBQVksRUFBRSxXQUFTLEVBQUUsUUFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFBLElBQUM7QUFBQyxRQUFHLEdBQUU7QUFBQyxVQUFHLEtBQUssTUFBSSxLQUFHLEVBQUUsVUFBUSxDQUFDLEVBQUUsTUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBRyxHQUFFO0FBQUMsWUFBRSxLQUFLLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzZixZQUFHLENBQUMsRUFBRSxLQUFHLEVBQUU7QUFBQSxZQUFjLFFBQU8sSUFBRSxJQUFFLElBQUksRUFBRSxHQUFFLElBQUk7QUFBRSxVQUFFLEtBQUssRUFBRSxHQUFHLElBQUksRUFBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUUsS0FBRSxDQUFDO0FBQUEsTUFBQztBQUFDLFlBQU0sSUFBRTtBQUFLLGFBQU8sUUFBUSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGNBQUksRUFBRSxVQUFRO0FBQUcsVUFBRSxXQUFTLElBQUUsRUFBRSxPQUFPLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRyxlQUFPO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUcsQ0FBQyxFQUFFLFFBQU8sSUFBRSxJQUFFLElBQUksRUFBRSxHQUFFLElBQUk7QUFBRSxRQUFHLE1BQUksQ0FBQyxLQUFHLENBQUMsS0FBSyxPQUFPLFFBQU8sSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFFLFFBQUUsQ0FBQztBQUFFLFNBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxVQUFFLEVBQUUsQ0FBQztBQUFFLFdBQUcsRUFBRSxVQUFRLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBTSxnQkFBYyxLQUFLLEtBQUcsRUFBRSxLQUFLLElBQUUsS0FBSyxNQUFNLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsSUFBRSxJQUFFLEdBQUcsS0FBSyxNQUFLLENBQUM7QUFBRyxVQUFHLEVBQUUsUUFBTyxJQUFFLElBQUUsR0FBRyxHQUFFLEdBQUUsS0FBSyxPQUFNLEdBQUUsQ0FBQyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFFLFFBQUUsQ0FBQyxJQUNwZixFQUFDLE9BQU0sRUFBRSxDQUFDLEdBQUUsUUFBTyxFQUFDO0FBQUEsSUFBQztBQUFDLFFBQUcsS0FBRyxLQUFLLE1BQUksRUFBRSxRQUFPO0FBQUMsWUFBTSxJQUFFO0FBQUssYUFBTyxRQUFRLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsaUJBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksR0FBRSxDQUFDLEVBQUUsU0FBTyxFQUFFLENBQUM7QUFBRSxjQUFJLElBQUUsR0FBRyxHQUFFLEdBQUUsRUFBRSxPQUFNLEdBQUUsQ0FBQztBQUFHLGVBQU8sSUFBRSxHQUFHLENBQUMsSUFBRTtBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxVQUFJLElBQUUsR0FBRyxHQUFFLEdBQUUsS0FBSyxPQUFNLEdBQUUsQ0FBQztBQUFHLFdBQU8sSUFBRSxHQUFHLENBQUMsSUFBRTtBQUFBLEVBQUM7QUFDM08sV0FBUyxHQUFHLEdBQUU7QUFBQyxVQUFNLElBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxHQUFFLElBQUUsRUFBRTtBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUUsRUFBRSxDQUFDO0FBQUUsVUFBRSxFQUFFO0FBQU0sVUFBRSxFQUFFO0FBQU8sZUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUUsT0FBTyxNQUFJLFdBQVMsSUFBRSxFQUFDLElBQUcsSUFBRSxFQUFDLElBQUUsSUFBRSxFQUFFLEtBQUksSUFBRSxFQUFFLENBQUMsS0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFHLEVBQUUsUUFBTSxFQUFFLENBQUMsSUFBRSxDQUFDLENBQUMsR0FBRSxFQUFFLEtBQUssQ0FBQyxJQUFHLElBQUUsRUFBRSxVQUFVLEtBQUUsRUFBRSxDQUFDLEdBQUUsTUFBSSxFQUFFLENBQUMsSUFBRSxJQUFFLENBQUMsR0FBRSxFQUFFLFlBQVUsSUFBRyxFQUFFLENBQUMsSUFBRTtBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFFLEtBQUssSUFBSSxJQUFJLENBQUM7QUFBRSxRQUFHLENBQUMsRUFBRSxRQUFNLENBQUM7QUFBRSxRQUFFLEVBQUUsSUFBSSxDQUFDO0FBQUUsUUFBRyxDQUFDLEVBQUUsUUFBTSxDQUFDO0FBQUUsUUFBRSxFQUFFLFNBQU87QUFBRSxRQUFHLElBQUUsR0FBRTtBQUFDLFVBQUcsS0FBRyxJQUFFLEtBQUcsRUFBRSxLQUFFLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQztBQUFFLFlBQUksSUFBRSxHQUFHLEtBQUssTUFBSyxDQUFDO0FBQUEsSUFBRTtBQUFDLFdBQU87QUFBQSxFQUFDO0FBQzdjLFdBQVMsR0FBRyxHQUFFO0FBQUMsUUFBRyxDQUFDLFFBQU0sQ0FBQyxLQUFLLE1BQU0sUUFBTztBQUFFLFFBQUcsS0FBSyxHQUFHLFFBQU8sS0FBSyxNQUFNLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQUUsVUFBTSxJQUFFLE1BQU0sRUFBRSxNQUFNO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUUsRUFBQyxJQUFHLEdBQUUsS0FBSSxLQUFLLE1BQU0sSUFBSSxDQUFDLEVBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFFLFdBQVMsR0FBRyxHQUFFO0FBQUMsUUFBRyxDQUFDLFFBQU0sS0FBSyxnQkFBYyxHQUFHLFFBQU8sSUFBSSxHQUFHLENBQUM7QUFBRSxVQUFNLElBQUUsRUFBRSxZQUFVLEVBQUUsT0FBSztBQUFFLFFBQUksR0FBRTtBQUFFLFNBQUssSUFBRSxDQUFDO0FBQUUsU0FBSyxRQUFNLENBQUM7QUFBRSxTQUFLLElBQUUsQ0FBQztBQUFFLFNBQUssT0FBSyxJQUFFLEVBQUUsT0FBSyxFQUFFLE9BQUssR0FBRyxHQUFFLEtBQUssQ0FBQyxLQUFHO0FBQUssS0FBQyxJQUFFLEVBQUUsWUFBVSxPQUFLLEtBQUssV0FBUztBQUFHLFNBQUssYUFBVyxDQUFDLENBQUMsRUFBRTtBQUFXLFNBQUssTUFBSSxDQUFDLEtBQUssY0FBWSxFQUFFLFVBQVEsRUFBRSxLQUFHLElBQUUsSUFBSSxFQUFFLENBQUMsSUFBRSxvQkFBSSxRQUFJLElBQUUsSUFBSSxFQUFFLENBQUMsSUFBRSxvQkFBSTtBQUFJLFNBQUssS0FBRyxJQUFFLEVBQUUsU0FBTyxTQUFPLEtBQUcsTUFBSSxRQUFJLENBQUM7QUFBRSxTQUFLLFFBQU0sSUFBRSxJQUFFLElBQUksRUFBRSxDQUFDLElBQUUsb0JBQUksUUFBSTtBQUFLLFNBQUssU0FBTyxJQUFFLEVBQUUsU0FBTyxTQUFPLElBQUksR0FBRyxDQUFDO0FBQUUsTUFBRSxRQUFNO0FBQUcsU0FBSyxTQUFPLEVBQUUsVUFBUTtBQUFHLFNBQUssV0FBUyxFQUFFLFlBQ3BzQjtBQUFFLFNBQUssUUFBTSxHQUFHLEtBQUssTUFBSyxHQUFFLENBQUM7QUFBRSxTQUFLLE1BQUk7QUFBSyxRQUFHLElBQUUsRUFBRTtBQUFJLFVBQUcsT0FBTyxNQUFJLGFBQVcsSUFBRSxDQUFDLENBQUMsSUFBRyxFQUFFLFFBQU87QUFBQyxhQUFLLE1BQUksb0JBQUk7QUFBSSxhQUFLLElBQUUsQ0FBQztBQUFFLGFBQUssSUFBRSxDQUFDO0FBQUUsaUJBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsY0FBRSxFQUFFLENBQUM7QUFBRSxjQUFFLEVBQUUsU0FBTztBQUFFLGNBQUcsQ0FBQyxFQUFFLE9BQU0sTUFBTSwwREFBMEQ7QUFBRSxZQUFFLFNBQU8sS0FBSyxFQUFFLENBQUMsSUFBRSxFQUFFLFVBQVEsS0FBSyxFQUFFLENBQUMsSUFBRSxHQUFHLEdBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxXQUFTLE9BQU8sS0FBSyxFQUFFLENBQUMsTUFBSSxhQUFXLEtBQUssRUFBRSxDQUFDLElBQUUsSUFBSSxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUUsRUFBRTtBQUFTLGVBQUssRUFBRSxDQUFDLElBQUU7QUFBRSxlQUFLLElBQUksSUFBSSxHQUFFLG9CQUFJLEtBQUc7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFBO0FBQUMsUUFBRyxLQUFLLFFBQU87QUFBQyxXQUFLLGFBQVc7QUFBRyxVQUFFLENBQUM7QUFBRSxpQkFBVSxLQUFLLEtBQUssTUFBTSxPQUFPLEVBQUUsR0FBRSxRQUNoaEIsRUFBRSxLQUFLLENBQUM7QUFBRSxVQUFHLEVBQUUsUUFBTztBQUFDLGNBQU0sSUFBRTtBQUFLLGVBQU8sUUFBUSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGNBQUksSUFBRTtBQUFFLHFCQUFVLEtBQUssRUFBRSxNQUFNLFFBQVEsR0FBRTtBQUFDLGtCQUFNLElBQUUsRUFBRSxDQUFDO0FBQUUsZ0JBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxjQUFFLFNBQU8sSUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLE1BQU0sSUFBSSxHQUFFLENBQUMsR0FBRTtBQUFBLFVBQUk7QUFBQyxpQkFBTztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDLE1BQU0sR0FBRSxPQUFLLEtBQUssYUFBVyxPQUFHLEtBQUssTUFBTSxFQUFFLEVBQUU7QUFBQSxFQUFFO0FBQUMsTUFBRSxHQUFHO0FBQ3JQLElBQUUsUUFBTSxTQUFTLEdBQUU7QUFBQyxRQUFJLElBQUUsS0FBSztBQUFNLFFBQUcsS0FBSyxJQUFJLFVBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxLQUFLLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBRSxLQUFLLEVBQUUsQ0FBQztBQUFFLFVBQUksSUFBRTtBQUFPLFdBQUssTUFBTSxJQUFJLEdBQUUsSUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFFLEtBQUssR0FBRyxDQUFDO0FBQUUsWUFBSSxLQUFLLFVBQVEsSUFBRSxFQUFFLE1BQU0sQ0FBQztBQUFHLFFBQUUsS0FBSyxDQUFDO0FBQUUsUUFBRSxNQUFJLEtBQUssSUFBSSxJQUFJLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBRSxDQUFDO0FBQUUsVUFBTSxJQUFFLEVBQUMsSUFBRyxFQUFFLElBQUcsTUFBSyxFQUFFLE1BQUssWUFBVyxFQUFFLFdBQVU7QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFFBQUUsUUFBTSxJQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUUsS0FBSyxNQUFNLElBQUksQ0FBQztBQUFFLFlBQU0sSUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUcsQ0FBQztBQUFFLFFBQUUsS0FBRyxFQUFFO0FBQUcsUUFBRSxDQUFDLElBQUUsRUFBRSxNQUFNLENBQUM7QUFBRSxRQUFFLFdBQVM7QUFBRyxVQUFFLEVBQUUsU0FBTyxPQUFHLEVBQUUsUUFBTSxLQUFLO0FBQUEsSUFBSztBQUFDLFVBQU0sSUFBRTtBQUFLLFdBQU8sS0FBSyxLQUFHLFFBQVEsSUFBSSxDQUFDLEVBQUUsS0FBSyxXQUFVO0FBQUMsUUFBRSxLQUN6ZjtBQUFBLElBQUUsQ0FBQztBQUFBLEVBQUM7QUFBRSxJQUFFLFNBQU8sV0FBZ0I7QUFBQTtBQUFDLFlBQU0sSUFBRSxDQUFDO0FBQUUsaUJBQVUsS0FBSyxLQUFLLE1BQU0sT0FBTyxFQUFFLEdBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQztBQUFFLFlBQU0sUUFBUSxJQUFJLENBQUM7QUFBRSxXQUFLLElBQUksTUFBTTtBQUFBLElBQUM7QUFBQTtBQUFFLElBQUUsVUFBUSxXQUFVO0FBQUMsVUFBTSxJQUFFLENBQUM7QUFBRSxlQUFVLEtBQUssS0FBSyxNQUFNLE9BQU8sRUFBRSxHQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7QUFBRSxXQUFPLFFBQVEsSUFBSSxDQUFDO0FBQUEsRUFBQztBQUNwUCxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLG9CQUFJO0FBQUksUUFBSSxJQUFFLEVBQUUsU0FBTyxFQUFFLFNBQU87QUFBRSxNQUFFLENBQUMsTUFBSSxJQUFFLENBQUMsQ0FBQztBQUFHLGFBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBRSxFQUFFLENBQUM7QUFBRSxRQUFFLENBQUMsTUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFO0FBQU8sVUFBRSxHQUFHLENBQUMsSUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFFLEdBQUUsQ0FBQyxJQUFFO0FBQUUsVUFBRyxLQUFLLFFBQU87QUFBQyxZQUFJLElBQUU7QUFBTyxhQUFHLElBQUUsRUFBRSxZQUFVLEVBQUUsU0FBTyxJQUFFLElBQUksR0FBRyxPQUFPLE1BQUksV0FBUyxHQUFHLENBQUMsSUFBRSxLQUFHLENBQUMsQ0FBQztBQUFFLFlBQUUsSUFBSSxHQUFHLEdBQUUsQ0FBQztBQUFFLFVBQUUsSUFBSSxHQUFFLENBQUM7QUFBQSxNQUFDO0FBQUMsV0FBSyxVQUFRLEVBQUUsSUFBSSxHQUFFLElBQUksRUFBRSxHQUFFLEtBQUssR0FBRyxDQUFDO0FBQUUsUUFBRSxTQUFPLEtBQUssRUFBRSxDQUFDLElBQUUsRUFBRSxVQUFRLEtBQUssRUFBRSxDQUFDLElBQUUsR0FBRyxHQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsV0FBUyxPQUFPLEtBQUssRUFBRSxDQUFDLE1BQUksYUFBVyxLQUFLLEVBQUUsQ0FBQyxJQUFFLElBQUksT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFFLEVBQUU7QUFBUyxXQUFLLE1BQU0sQ0FBQyxJQUFFO0FBQUEsSUFBQztBQUFDLFFBQUcsS0FBSyxHQUFFO0FBQUMsVUFDeGYsRUFBRTtBQUFNLFFBQUUsQ0FBQyxNQUFJLElBQUUsQ0FBQyxDQUFDO0FBQUcsZUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsU0FBTyxHQUFFLEVBQUUsVUFBUSxLQUFLLEVBQUUsQ0FBQyxJQUFFLEVBQUUsUUFBTyxFQUFFLE9BQU8sSUFBRSxNQUFJLEtBQUssRUFBRSxDQUFDLElBQUUsR0FBRyxHQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsV0FBUyxPQUFPLEtBQUssRUFBRSxDQUFDLE1BQUksYUFBVyxLQUFLLEVBQUUsQ0FBQyxJQUFFLElBQUksT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFFLEVBQUU7QUFBQSxJQUFRO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLEVBQUUsTUFBTSxHQUFHO0FBQUUsUUFBSSxJQUFFO0FBQUUsYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsRUFBRSxTQUFPLENBQUMsTUFBSSxRQUFNLElBQUUsRUFBRSxVQUFVLEdBQUUsRUFBRSxTQUFPLENBQUMsT0FBSyxFQUFFLENBQUMsSUFBRSxPQUFJLE1BQUksRUFBRSxHQUFHLElBQUU7QUFBRyxRQUFFLEVBQUUsV0FBUyxFQUFFLFNBQU87QUFBRyxXQUFPLElBQUUsSUFBRSxJQUFFLEVBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQyxJQUFFLFNBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxXQUFPLEtBQUssSUFBSSxHQUFFLEdBQUUsSUFBRTtBQUFBLEVBQUM7QUFDM2UsSUFBRSxTQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsV0FBTyxLQUFLLE9BQU8sQ0FBQyxFQUFFLElBQUksR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsU0FBTyxTQUFTLEdBQUU7QUFBQyxPQUFHLENBQUMsTUFBSSxJQUFFLEdBQUcsR0FBRSxLQUFLLEdBQUc7QUFBRyxhQUFRLEtBQUssS0FBSyxNQUFNLE9BQU8sRUFBRSxHQUFFLE9BQU8sR0FBRSxJQUFFO0FBQUUsUUFBRyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUU7QUFBQyxVQUFHLEtBQUssT0FBSyxDQUFDLEtBQUssV0FBVyxVQUFRLEtBQUssS0FBSyxJQUFJLE9BQU8sRUFBRSxVQUFRLEtBQUssR0FBRTtBQUFDLFlBQUUsRUFBRSxDQUFDO0FBQUUsY0FBTSxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxRQUFRLENBQUM7QUFBRSxZQUFFLE9BQUssRUFBRSxTQUFPLElBQUUsRUFBRSxPQUFPLEdBQUUsQ0FBQyxJQUFFLEVBQUUsT0FBTyxDQUFDO0FBQUEsTUFBRTtBQUFDLFdBQUssU0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQUUsV0FBSyxJQUFJLE9BQU8sQ0FBQztBQUFBLElBQUM7QUFBQyxTQUFLLFNBQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFJO0FBQ3ZhLElBQUUsUUFBTSxXQUFVO0FBQUMsVUFBTSxJQUFFLENBQUM7QUFBRSxlQUFVLEtBQUssS0FBSyxNQUFNLE9BQU8sR0FBRTtBQUFDLFlBQU0sSUFBRSxFQUFFLE1BQU07QUFBRSxRQUFFLFFBQU0sRUFBRSxLQUFLLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBRyxLQUFLLElBQUksWUFBVSxLQUFLLEtBQUssSUFBSSxPQUFPLEVBQUUsR0FBRSxNQUFNO0FBQUUsU0FBSyxTQUFPLEtBQUssTUFBTSxNQUFNO0FBQUUsU0FBSyxTQUFPLEtBQUssTUFBTSxNQUFNO0FBQUUsV0FBTyxFQUFFLFNBQU8sUUFBUSxJQUFJLENBQUMsSUFBRTtBQUFBLEVBQUk7QUFBRSxJQUFFLFVBQVEsU0FBUyxHQUFFO0FBQUMsV0FBTyxLQUFLLEtBQUcsS0FBSyxNQUFNLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztBQUFBLEVBQUM7QUFBRSxJQUFFLFVBQVEsV0FBVTtBQUFDLGVBQVUsS0FBSyxLQUFLLE1BQU0sT0FBTyxFQUFFLEdBQUUsUUFBUTtBQUFFLFdBQU87QUFBQSxFQUFJO0FBQzdhLElBQUUsTUFBSSxTQUFTLEdBQUU7QUFBQyxXQUFPLEtBQUssS0FBRyxLQUFLLE1BQU0sSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGFBQU8sRUFBRSxDQUFDLEtBQUcsRUFBRSxDQUFDLEVBQUUsT0FBSztBQUFBLElBQUksQ0FBQyxJQUFFLEtBQUssTUFBTSxJQUFJLENBQUMsS0FBRztBQUFBLEVBQUk7QUFBRSxJQUFFLE1BQUksU0FBUyxHQUFFLEdBQUU7QUFBQyxXQUFPLE1BQUksYUFBVyxJQUFFLEdBQUUsSUFBRSxHQUFHLEdBQUUsS0FBSyxHQUFHO0FBQUcsU0FBSyxNQUFNLElBQUksR0FBRSxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUk7QUFBRSxJQUFFLGNBQVk7QUFBRyxJQUFFLFNBQU87QUFBRyxJQUFFLFNBQU87QUFBRyxLQUFHLEdBQUcsU0FBUztBQUFFLFdBQVMsR0FBRyxHQUFFLElBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFDO0FBQUUsVUFBSSxJQUFFLE9BQUssSUFBRSxNQUFJO0FBQUcsZUFBVSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxXQUFTLE1BQUksRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLENBQUM7QUFBRyxNQUFFLFVBQVEsRUFBRSxLQUFLLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsb0JBQUk7QUFBSyxhQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLENBQUMsR0FBRSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLElBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFDO0FBQUUsVUFBSSxJQUFFLE9BQUssSUFBRSxNQUFJO0FBQUcsZUFBVSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLEVBQUUsV0FBUyxNQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRSxDQUFDO0FBQUcsTUFBRSxVQUFRLEVBQUUsS0FBSyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFDenNCLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsb0JBQUk7QUFBSyxhQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUUsQ0FBQyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRTtBQUFDLFFBQUksSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFDO0FBQUUsZUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxXQUFTLFNBQU8sRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLENBQUM7QUFBRyxNQUFFLFVBQVEsRUFBRSxLQUFLLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsb0JBQUk7QUFBSyxhQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQ2pVLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsS0FBRyxFQUFFLGdCQUFjO0FBQU0sUUFBSSxJQUFFLElBQUUsRUFBRSxNQUFNLElBQUU7QUFBRSxRQUFHLENBQUMsRUFBRSxRQUFPLEtBQUssT0FBTyxHQUFFLEdBQUUsR0FBRSxJQUFFLENBQUM7QUFBRSxTQUFJLElBQUUsR0FBRyxJQUFFLElBQUUsTUFBSSxPQUFLLElBQUUsS0FBRyxNQUFJLEdBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQyxNQUFJLEVBQUUsTUFBSztBQUFDLFlBQU0sSUFBRTtBQUFLLGFBQU8sRUFBRSxLQUFLLFdBQVU7QUFBQyxlQUFPLEdBQUcsS0FBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsSUFBRSxNQUFLLEdBQUUsR0FBRSxJQUFFLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsV0FBTyxHQUFHLEtBQUssTUFBSyxHQUFFLEdBQUUsR0FBRSxJQUFFLElBQUUsTUFBSyxHQUFFLEdBQUUsSUFBRSxDQUFDO0FBQUEsRUFBQztBQUNoVCxXQUFTLEdBQUcsR0FBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUU7QUFBQyxRQUFHLElBQUUsS0FBSyxNQUFNLFFBQU87QUFBQyxZQUFNLElBQUUsS0FBSyxNQUFNLENBQUM7QUFBRSxXQUFJLElBQUUsS0FBSyxNQUFNLElBQUksQ0FBQyxFQUFFLE9BQU8sR0FBRSxHQUFFLEdBQUUsSUFBRSxDQUFDLE1BQUksRUFBRSxNQUFLO0FBQUMsY0FBTSxJQUFFO0FBQUssZUFBTyxFQUFFLEtBQUssV0FBVTtBQUFDLGlCQUFPLEVBQUUsT0FBTyxHQUFFLEdBQUUsSUFBRSxDQUFDO0FBQUEsUUFBQyxDQUFDO0FBQUEsTUFBQztBQUFDLGFBQU8sS0FBSyxPQUFPLEdBQUUsR0FBRSxJQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBSSxHQUFFO0FBQUUsWUFBTyxHQUFFO0FBQUEsTUFBQyxLQUFLO0FBQUUsWUFBRTtBQUFNLFlBQUUsR0FBRyxLQUFLLEdBQUc7QUFBRSxZQUFFO0FBQUs7QUFBQSxNQUFNLEtBQUs7QUFBRSxZQUFFO0FBQU0sWUFBRSxLQUFLLE9BQUssR0FBRyxLQUFLLEtBQUksS0FBSyxJQUFJLElBQUk7QUFBRSxZQUFFO0FBQUs7QUFBQSxNQUFNLEtBQUs7QUFBRSxZQUFFO0FBQU0sWUFBRSxLQUFLLFNBQU8sR0FBRyxLQUFLLEtBQUs7QUFBRSxZQUFFO0FBQUs7QUFBQSxNQUFNO0FBQVE7QUFBQSxJQUFNO0FBQUMsV0FBTyxHQUFHLEtBQUssTUFBSyxHQUFFLEdBQUUsR0FBRSxLQUFHLE1BQUssR0FBRSxDQUFDO0FBQUEsRUFBQztBQUN0YyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsTUFBTSxHQUFHO0FBQUUsTUFBRSxFQUFFLFNBQU8sQ0FBQyxNQUFJLFVBQVEsRUFBRSxJQUFJO0FBQUUsVUFBTSxJQUFFLEVBQUUsU0FBTyxJQUFFLEVBQUUsQ0FBQyxJQUFFO0FBQUcsUUFBRSxFQUFFLFNBQU8sSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBRSxRQUFHLEtBQUssVUFBUSxFQUFFLFFBQU8sS0FBSyxNQUFNLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQztBQUFFLFFBQUcsR0FBRTtBQUFDLGFBQU8sTUFBSSxhQUFXLElBQUUsS0FBSyxNQUFNLENBQUM7QUFBRyxVQUFHLEVBQUUsUUFBTyxLQUFLLE1BQU0sSUFBSSxDQUFDLEVBQUUsT0FBTyxHQUFFLENBQUM7QUFBRSxjQUFPLEdBQUU7QUFBQSxRQUFDLEtBQUs7QUFBTSxlQUFLLGFBQVc7QUFBRyxlQUFLLE1BQUksR0FBRyxHQUFFLEtBQUssR0FBRztBQUFFLG1CQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsS0FBSyxNQUFNLFFBQU8sSUFBSSxLQUFFLEtBQUssTUFBTSxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsR0FBRSxFQUFFLGFBQVcsT0FBRyxFQUFFLE1BQUksS0FBSztBQUFJLGNBQUcsS0FBSyxRQUFPO0FBQUMsZ0JBQUUsQ0FBQztBQUFFLHVCQUFVLEtBQUssS0FBSyxNQUFN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QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLFNBQUssT0FBSyxLQUFLLFlBQVksS0FBSyxJQUFFLEVBQUMsS0FBSSxFQUFDLElBQUUsRUFBQyxLQUFJLEVBQUMsQ0FBQyxHQUFFLEtBQUssS0FBRyxHQUFHLElBQUk7QUFBRyxXQUFPO0FBQUEsRUFBSTtBQUN6WSxXQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksR0FBRTtBQUFFLFFBQUcsRUFBRSxJQUFFLEVBQUUsQ0FBQyxNQUFJLEtBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRTtBQUFDLFdBQUcsSUFBRSxNQUFJLEVBQUUsQ0FBQyxJQUFFLEVBQUUsSUFBRyxFQUFFLENBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFLLElBQUUsRUFBRSxJQUFJLENBQUMsS0FBRyxJQUFFLElBQUUsRUFBRSxJQUFJLEdBQUUsSUFBRSxFQUFFLFdBQVMsSUFBSSxFQUFFLEVBQUUsUUFBUSxJQUFFLG9CQUFJLEtBQUcsTUFBSSxJQUFFLEVBQUUsS0FBSSxFQUFFLENBQUMsSUFBRTtBQUFHLE9BQUMsSUFBRSxFQUFFLElBQUksQ0FBQyxLQUFHLElBQUUsSUFBRSxFQUFFLElBQUksR0FBRSxJQUFFLElBQUUsQ0FBQyxDQUFDO0FBQUUsVUFBRztBQUFFLGlCQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksTUFBSSxJQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUU7QUFBQyxjQUFHLEtBQUcsRUFBRTtBQUFPLFlBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFFLENBQUM7QUFBRSxZQUFFLGVBQWEsSUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUUsQ0FBQztBQUFFO0FBQUEsUUFBSztBQUFBO0FBQUMsVUFBRSxFQUFFLENBQUMsTUFBSSxFQUFFLENBQUMsSUFBRSxDQUFDO0FBQUcsUUFBRSxLQUFLLENBQUM7QUFBRSxVQUFHLEVBQUUsV0FBUyxTQUFHLE1BQUcsR0FBRTtBQUFDLFlBQUUsSUFBSSxHQUFHLENBQUM7QUFBRSxZQUFHLEVBQUUsV0FBVyxVQUFRLEtBQUssRUFBRSxJQUFJLE9BQU8sRUFBRSxHQUFFLFNBQVMsQ0FBQyxNQUFJLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUM5ZjtBQUFHLFVBQUUsQ0FBQyxJQUFFLElBQUU7QUFBQSxNQUFDO0FBQUMsUUFBRSxnQkFBYyxJQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFFLEVBQUUsSUFBSSxJQUFJLEdBQUUsQ0FBQyxDQUFDLENBQUM7QUFBQSxJQUFFO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxXQUFPLEtBQUcsSUFBRSxJQUFFLEtBQUcsS0FBRyxNQUFJLElBQUUsS0FBRyxLQUFHLE1BQUksSUFBRSxNQUFJLEtBQUcsS0FBRyxPQUFLLEtBQUcsS0FBRyxNQUFJLElBQUUsSUFBRTtBQUFBLEVBQUM7QUFBRSxJQUFFLFVBQVUsU0FBTyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxLQUFHLE9BQU8sTUFBSSxXQUFTLE9BQU8sTUFBSSxhQUFXLElBQUUsR0FBRSxJQUFFLE1BQUksSUFBRSxHQUFFLElBQUU7QUFBSyxRQUFHLEtBQUcsRUFBRSxNQUFNLFFBQU8sRUFBRSxRQUFNLE9BQUcsSUFBRSxLQUFLLFlBQVksR0FBRSxHQUFFLENBQUMsR0FBRSxFQUFFLFFBQU0sTUFBRztBQUFFLFFBQUksSUFBRSxDQUFDLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBRSxVQUFJLElBQUUsRUFBRSxTQUFPLEdBQUUsSUFBRSxFQUFFLFNBQU8sR0FBRSxJQUFFLEVBQUUsVUFBUSxHQUFFLElBQUUsRUFBRSxTQUFRLElBQUUsRUFBRSxTQUFRLEtBQUcsSUFBRSxFQUFFLFlBQVUsRUFBRSxRQUFPLElBQUUsRUFBRSxPQUFNLElBQUUs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QUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRSxJQUFJO0FBQUUsV0FBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFBLEVBQUM7QUFDN1YsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFFLEdBQUcsTUFBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUUsV0FBTyxLQUFLLEtBQUcsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGFBQU8sSUFBRSxLQUFHLENBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUEsSUFBQyxDQUFDLElBQUUsS0FBRyxFQUFFLFNBQU8sSUFBRSxHQUFHLEtBQUssTUFBSyxHQUFFLEdBQUUsQ0FBQyxJQUFFLElBQUksRUFBRSxHQUFFLElBQUksSUFBRSxJQUFFLENBQUMsSUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFFLElBQUk7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBQztBQUFFLFFBQUcsS0FBRyxFQUFFLFFBQU87QUFBQyxVQUFHLEVBQUUsVUFBUSxHQUFFO0FBQUMsVUFBRSxLQUFLLENBQUM7QUFBRTtBQUFBLE1BQU07QUFBQyxlQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsRUFBRSxHQUFFLENBQUMsSUFBRTtBQUFFLFVBQUcsRUFBRSxRQUFPO0FBQUMsVUFBRSxLQUFLLENBQUM7QUFBRTtBQUFBLE1BQU07QUFBQSxJQUFDO0FBQUMsUUFBRyxDQUFDLEVBQUUsUUFBTztBQUFBLEVBQUM7QUFDNVYsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUk7QUFBRSxVQUFJLElBQUUsRUFBRSxpQkFBZSxJQUFFLE9BQUssSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFO0FBQUcsUUFBRyxFQUFFLEdBQUcsUUFBTyxFQUFFLEdBQUcsSUFBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUUsUUFBRSxLQUFHLElBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFJLEVBQUUsSUFBSSxDQUFDLElBQUUsRUFBRSxJQUFJLElBQUksQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUUsV0FBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxRQUFNLEtBQUssZ0JBQWMsRUFBRSxRQUFPLElBQUksRUFBRSxDQUFDO0FBQUUsUUFBRyxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFFLElBQUUsRUFBRTtBQUFPLFlBQUksSUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFFLEdBQUcsQ0FBQyxHQUFFLENBQUM7QUFBQSxJQUFFLE1BQU0sS0FBRSxDQUFDO0FBQUUsUUFBRSxFQUFFO0FBQVEsVUFBTSxJQUFFLE1BQUksT0FBRyxFQUFDLE9BQU0sRUFBQyxJQUFFLEtBQUcsQ0FBQyxHQUFFLElBQUUsRUFBRSxFQUFFLE9BQU8sSUFBRSxHQUFHLEVBQUUsT0FBTyxJQUFFLEVBQUUsVUFBUSxFQUFFLFdBQVMsQ0FBQztBQUFFLFNBQUssVUFBUSxFQUFFLFNBQU8sSUFBRSxPQUFPLE1BQUksV0FBUyxJQUFJLEdBQUcsQ0FBQyxJQUFFLEVBQUMsUUFBTyxFQUFDO0FBQUUsU0FBSyxhQUFXLEVBQUUsY0FBWTtBQUFFLFNBQUssV0FBUyxLQUFHLElBQUUsRUFBRSxhQUFXLE1BQUksYUFBVyxNQUFJLFdBQVMsS0FBRztBQUFTLFNBQUssUUFBTSxNQUFJLFlBQVUsRUFBRSxTQUFPO0FBQUUsU0FBSyxnQkFBYyxFQUFFLGtCQUFnQjtBQUFHLFNBQUssYUFBVyxDQUFDLENBQUMsRUFBRTtBQUMxcEIsU0FBSyxRQUFNLEVBQUUsU0FBTztBQUFLLEtBQUMsSUFBRSxFQUFFLFlBQVUsT0FBSyxLQUFLLFdBQVM7QUFBRyxTQUFLLE1BQUksSUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFFLG9CQUFJO0FBQUksU0FBSyxNQUFJLElBQUUsSUFBSSxFQUFFLENBQUMsSUFBRSxvQkFBSTtBQUFJLFNBQUssTUFBSSxNQUFJLEtBQUssYUFBVyxJQUFFLElBQUksRUFBRSxDQUFDLElBQUUsb0JBQUksUUFBSSxJQUFFLElBQUksRUFBRSxDQUFDLElBQUUsb0JBQUk7QUFBSyxTQUFLLElBQUUsRUFBRSxjQUFZO0FBQUUsU0FBSyxNQUFJLEVBQUUsT0FBSyxFQUFFLE9BQUs7QUFBRyxTQUFLLFNBQU8sSUFBRSxFQUFFLFNBQU8sU0FBTyxJQUFJLEdBQUcsQ0FBQztBQUFFLFNBQUssVUFBUSxFQUFFLFlBQVU7QUFBRyxRQUFHLElBQUUsRUFBRSxHQUFHLE1BQUssS0FBRyxLQUFLLE1BQU0sQ0FBQztBQUFFLFNBQUssSUFBRSxFQUFFLFdBQVM7QUFBRyxTQUFLLGNBQVksQ0FBQztBQUFFLFNBQUssZUFBYTtBQUFLLFNBQUssV0FBUyxFQUFFLFlBQVU7QUFBQSxFQUFDO0FBQUMsTUFBRSxFQUFFO0FBQy9hLElBQUUsUUFBTSxTQUFTLEdBQUU7QUFBQyxTQUFLLGlCQUFlLGFBQWEsS0FBSyxZQUFZLEdBQUUsS0FBSyxlQUFhO0FBQU0sV0FBTyxFQUFFLE1BQU0sSUFBSTtBQUFBLEVBQUM7QUFBRSxJQUFFLFNBQU8sV0FBVTtBQUFDLFNBQUssaUJBQWUsYUFBYSxLQUFLLFlBQVksR0FBRSxLQUFLLGVBQWE7QUFBTSxXQUFPLEtBQUssR0FBRyxPQUFPLElBQUk7QUFBQSxFQUFDO0FBQUUsSUFBRSxVQUFRLFdBQVU7QUFBQyxTQUFLLGlCQUFlLGFBQWEsS0FBSyxZQUFZLEdBQUUsS0FBSyxlQUFhO0FBQU0sV0FBTyxLQUFLLEdBQUcsUUFBUTtBQUFBLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUUsaUJBQWUsRUFBRSxlQUFhLFdBQVcsV0FBVTtBQUFDLFFBQUUsZUFBYTtBQUFLLFFBQUUsR0FBRyxPQUFPLENBQUM7QUFBQSxJQUFDLEdBQUUsQ0FBQztBQUFBLEVBQUU7QUFDMWQsSUFBRSxRQUFNLFdBQVU7QUFBQyxTQUFLLElBQUksTUFBTTtBQUFFLFNBQUssSUFBSSxNQUFNO0FBQUUsU0FBSyxJQUFJLE1BQU07QUFBRSxTQUFLLFNBQU8sS0FBSyxNQUFNLE1BQU07QUFBRSxXQUFPLEtBQUssTUFBSSxLQUFLLGdCQUFjLGFBQWEsS0FBSyxZQUFZLEdBQUUsS0FBSyxlQUFhLE1BQUssS0FBSyxjQUFZLENBQUMsR0FBRSxLQUFLLEdBQUcsTUFBTSxLQUFHO0FBQUEsRUFBSTtBQUFFLElBQUUsU0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFdBQU8sS0FBSyxJQUFJLEdBQUUsR0FBRSxJQUFFO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBUSxTQUFTLEdBQUU7QUFBQyxXQUFPLEtBQUssS0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztBQUFBLEVBQUM7QUFBRSxJQUFFLFNBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsTUFBSyxJQUFFLEtBQUssT0FBTyxDQUFDO0FBQUUsV0FBTyxLQUFHLEVBQUUsT0FBSyxFQUFFLEtBQUssTUFBSSxFQUFFLElBQUksR0FBRSxDQUFDLENBQUMsSUFBRSxLQUFLLElBQUksR0FBRSxDQUFDO0FBQUEsRUFBQztBQUN6YyxJQUFFLFVBQVEsV0FBVTtBQUFDLFFBQUcsQ0FBQyxLQUFLLFdBQVcsUUFBTztBQUFLLE9BQUcsS0FBSyxHQUFHO0FBQUUsU0FBSyxTQUFPLEdBQUcsS0FBSyxHQUFHO0FBQUUsV0FBTztBQUFBLEVBQUk7QUFBRSxJQUFFLGNBQVk7QUFBRyxJQUFFLFNBQU8sU0FBUyxHQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRTtBQUFDLFFBQUksR0FBRTtBQUFFLFlBQU8sR0FBRTtBQUFBLE1BQUMsS0FBSztBQUFFLFlBQUU7QUFBTSxZQUFFLEdBQUcsS0FBSyxHQUFHO0FBQUU7QUFBQSxNQUFNLEtBQUs7QUFBRSxZQUFFO0FBQU0sWUFBRTtBQUFLO0FBQUEsTUFBTSxLQUFLO0FBQUUsWUFBRTtBQUFNLFlBQUUsR0FBRyxLQUFLLEtBQUksS0FBSyxJQUFJLElBQUk7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFFLFlBQUU7QUFBTSxZQUFFLEdBQUcsS0FBSyxLQUFJLEtBQUssSUFBSSxJQUFJO0FBQUU7QUFBQSxNQUFNO0FBQVE7QUFBQSxJQUFNO0FBQUMsV0FBTyxHQUFHLEtBQUssTUFBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFDN1gsSUFBRSxTQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsUUFBRyxFQUFFLFNBQU8sT0FBTyxNQUFJLGFBQVcsSUFBRSxLQUFLLE1BQU0sQ0FBQyxJQUFHLElBQUUsRUFBRSxNQUFNLEdBQUcsR0FBRSxFQUFFLEVBQUUsU0FBTyxDQUFDLE1BQUksVUFBUSxFQUFFLElBQUksR0FBRSxFQUFFLFdBQVMsS0FBRyxFQUFFLE1BQU0sR0FBRSxJQUFFLEVBQUUsU0FBTyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFFLEdBQUU7QUFBQSxNQUFDLEtBQUs7QUFBTSxhQUFLLGFBQVc7QUFBRyxhQUFLLE1BQUksR0FBRyxHQUFFLEtBQUssR0FBRztBQUFFO0FBQUEsTUFBTSxLQUFLO0FBQU0sYUFBSyxNQUFJLEdBQUcsR0FBRSxLQUFLLEdBQUc7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFNLGFBQUssTUFBSSxHQUFHLEdBQUUsS0FBSyxHQUFHO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFDblQsSUFBRSxZQUFVLFNBQVMsSUFBRSxNQUFHO0FBQUMsUUFBSSxJQUFFLElBQUcsSUFBRSxJQUFHLElBQUU7QUFBRyxRQUFHLEtBQUssSUFBSSxNQUFLO0FBQUMsVUFBSTtBQUFFLGVBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxFQUFFLE9BQUksSUFBRSxPQUFPLElBQUcsTUFBSSxJQUFFLE1BQUksT0FBSyxNQUFJLFdBQVMsTUFBSSxJQUFFLE1BQUk7QUFBRyxVQUFFLHdCQUFzQixJQUFFO0FBQU0sVUFBRSxHQUFHLEtBQUssS0FBSSxDQUFDO0FBQUUsVUFBRSx3QkFBc0IsSUFBRTtBQUFNLGlCQUFVLEtBQUssS0FBSyxJQUFJLFFBQVEsR0FBRTtBQUFDLFlBQUUsRUFBRSxDQUFDO0FBQUUsWUFBSSxJQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUUsQ0FBQztBQUFFLFlBQUUsY0FBWSxJQUFFO0FBQUssWUFBRSxPQUFLLElBQUUsT0FBSyxJQUFFO0FBQUksY0FBSSxJQUFFLE1BQUksTUFBSTtBQUFBLE1BQUM7QUFBQyxVQUFFLHdCQUFzQixJQUFFO0FBQUEsSUFBSztBQUFDLFdBQU8sSUFBRSw0QkFBMEIsSUFBRSxJQUFFLElBQUUsTUFBSSxJQUFFLElBQUU7QUFBQSxFQUFDO0FBQUUsS0FBRyxFQUFFLFNBQVM7QUFBRSxNQUFNLEtBQUcsT0FBTyxXQUFTLGdCQUFjLE9BQU8sYUFBVyxPQUFPLGdCQUFjLE9BQU8sbUJBQWlCLE9BQU87QUFBN0csTUFBMEgsS0FBRyxDQUFDLE9BQU0sT0FBTSxPQUFNLE9BQU0sS0FBSztBQUEzSixNQUE2SixLQUFHLEVBQUU7QUFDdm1CLFdBQVMsR0FBRyxHQUFFLElBQUUsQ0FBQyxHQUFFO0FBQUMsUUFBRyxDQUFDLFFBQU0sS0FBSyxnQkFBYyxHQUFHLFFBQU8sSUFBSSxHQUFHLEdBQUUsQ0FBQztBQUFFLFdBQU8sTUFBSSxhQUFXLElBQUUsR0FBRSxJQUFFLEVBQUU7QUFBTSxTQUFHLFFBQVEsS0FBSyxnRUFBZ0U7QUFBRSxTQUFLLEtBQUcsZ0JBQWMsSUFBRSxNQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsaUJBQWdCLEVBQUUsSUFBRTtBQUFJLFNBQUssUUFBTSxFQUFFLFFBQU0sRUFBRSxNQUFNLFlBQVksRUFBRSxRQUFRLGlCQUFnQixFQUFFLElBQUU7QUFBRyxTQUFLLE9BQUssRUFBRTtBQUFLLFNBQUssYUFBVyxLQUFLLHFCQUFtQjtBQUFHLFNBQUssS0FBRztBQUFLLFNBQUssSUFBRSxDQUFDO0FBQUEsRUFBQztBQUFDLE1BQUUsR0FBRztBQUFVLElBQUUsUUFBTSxTQUFTLEdBQUU7QUFBQyxRQUFHLEVBQUUsTUFBTSxRQUFPLEVBQUUsTUFBTSxJQUFJO0FBQUUsTUFBRSxLQUFHO0FBQUssV0FBTyxLQUFLLEtBQUs7QUFBQSxFQUFDO0FBQ25nQixJQUFFLE9BQUssV0FBVTtBQUFDLFFBQUcsS0FBSyxHQUFHLFFBQU8sS0FBSztBQUFHLFFBQUksSUFBRTtBQUFLLGNBQVUsV0FBUyxVQUFVLFFBQVEsUUFBUTtBQUFFLE9BQUcsRUFBRSxFQUFFLE1BQUksR0FBRyxFQUFFLEVBQUUsSUFBRSxDQUFDO0FBQUcsT0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSztBQUFFLFVBQU0sSUFBRSxHQUFHLEtBQUssRUFBRSxJQUFHLENBQUM7QUFBRSxNQUFFLGtCQUFnQixXQUFVO0FBQUMsWUFBTSxJQUFFLEVBQUUsS0FBRyxLQUFLO0FBQU8sZUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUcsUUFBTyxLQUFJO0FBQUMsWUFBRSxHQUFHLENBQUM7QUFBRSxpQkFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxpQkFBaUIsU0FBUyxLQUFHLE1BQUksUUFBTSxJQUFFLE1BQUksSUFBRSxLQUFHLEdBQUcsS0FBRyxFQUFFLGtCQUFrQixLQUFHLE1BQUksUUFBTSxJQUFFLE1BQUksSUFBRSxLQUFHLEdBQUc7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFFLFdBQU8sRUFBRSxLQUFHLEVBQUUsR0FBRSxTQUFTLEdBQUU7QUFBQyxRQUFFLEtBQUc7QUFBRSxRQUFFLEdBQUcsa0JBQWdCLFdBQVU7QUFBQyxVQUFFLE1BQU07QUFBQSxNQUFDO0FBQUEsSUFBQyxDQUFDO0FBQUEsRUFBQztBQUN4ZixJQUFFLFFBQU0sV0FBVTtBQUFDLFNBQUssTUFBSSxLQUFLLEdBQUcsTUFBTTtBQUFFLFNBQUssS0FBRztBQUFBLEVBQUk7QUFBRSxJQUFFLFVBQVEsV0FBVTtBQUFDLFVBQU0sSUFBRSxHQUFHLGVBQWUsS0FBSyxFQUFFO0FBQUUsV0FBTyxFQUFFLENBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxRQUFNLFdBQVU7QUFBQyxVQUFNLElBQUUsQ0FBQztBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxHQUFHLFFBQU8sS0FBSTtBQUFDLFVBQUUsR0FBRyxDQUFDO0FBQUUsZUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxLQUFLLEtBQUcsTUFBSSxRQUFNLElBQUUsTUFBSSxJQUFFLEtBQUcsR0FBRztBQUFBLElBQUM7QUFBQyxVQUFNLElBQUUsS0FBSyxHQUFHLFlBQVksR0FBRSxXQUFXO0FBQUUsYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNO0FBQUUsV0FBTyxFQUFFLENBQUM7QUFBQSxFQUFDO0FBQzdZLElBQUUsTUFBSSxTQUFTLEdBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsTUFBRyxJQUFFLE9BQUc7QUFBQyxRQUFFLEtBQUssR0FBRyxhQUFhLElBQUUsUUFBTSxVQUFRLEtBQUssUUFBTSxNQUFJLEtBQUssUUFBTSxLQUFJLFVBQVUsRUFBRSxhQUFhLElBQUUsUUFBTSxVQUFRLEtBQUssUUFBTSxNQUFJLEtBQUssUUFBTSxHQUFHLEVBQUUsSUFBSSxJQUFFLElBQUUsTUFBSSxJQUFFLENBQUM7QUFBRSxVQUFNLElBQUU7QUFBSyxXQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsVUFBSSxJQUFFLENBQUM7QUFBRSxVQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsT0FBTyxRQUFPO0FBQUUsVUFBRyxHQUFFO0FBQUMsWUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEVBQUUsV0FBUyxFQUFFLFFBQU8sRUFBRSxDQUFDO0FBQUUsaUJBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxNQUFJLElBQUUsRUFBRSxDQUFDLE1BQUksRUFBRSxRQUFPO0FBQUMsY0FBRyxLQUFHLEVBQUUsUUFBTztBQUFDLGlCQUFHLEVBQUU7QUFBTztBQUFBLFVBQVE7QUFBQyxnQkFBTSxJQUFFLElBQUUsSUFBRSxLQUFLLElBQUksRUFBRSxTQUFPLEdBQUUsQ0FBQyxJQUFFLEVBQUU7QUFBTyxtQkFBUSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUksR0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsY0FBRTtBQUFFLGNBQUcsRUFBRSxXQUFTLEVBQUU7QUFBQSxRQUFLO0FBQUMsZUFBTyxJQUNsZ0IsRUFBRSxPQUFPLENBQUMsSUFBRTtBQUFBLE1BQUM7QUFBQyxhQUFPO0FBQUEsSUFBQyxDQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsTUFBSSxTQUFTLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLE9BQUc7QUFBQyxRQUFFLEtBQUssR0FBRyxZQUFZLFNBQU8sS0FBSyxRQUFNLE1BQUksS0FBSyxRQUFNLEtBQUksVUFBVSxFQUFFLFlBQVksU0FBTyxLQUFLLFFBQU0sTUFBSSxLQUFLLFFBQU0sR0FBRyxFQUFFLElBQUksQ0FBQztBQUFFLFVBQU0sSUFBRTtBQUFLLFdBQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxVQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsVUFBUSxLQUFHLEVBQUUsT0FBTyxRQUFNLENBQUM7QUFBRSxVQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsUUFBTztBQUFFLFVBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDO0FBQUUsYUFBTyxJQUFFLEVBQUUsT0FBTyxDQUFDLElBQUU7QUFBQSxJQUFDLENBQUM7QUFBQSxFQUFDO0FBQ3RVLElBQUUsU0FBTyxTQUFTLEdBQUU7QUFBQyxXQUFPLE1BQUksYUFBVyxJQUFFLENBQUMsQ0FBQztBQUFHLFVBQU0sSUFBRSxLQUFLLEdBQUcsWUFBWSxPQUFNLFVBQVUsRUFBRSxZQUFZLEtBQUssR0FBRSxJQUFFLENBQUM7QUFBRSxhQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsQ0FBQyxJQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFBRSxXQUFPLFFBQVEsSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsQ0FBQyxJQUFFLEVBQUMsSUFBRyxFQUFFLENBQUMsR0FBRSxLQUFJLEVBQUUsQ0FBQyxJQUFFLEtBQUssTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFFLEtBQUk7QUFBRSxhQUFPO0FBQUEsSUFBQyxDQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsTUFBSSxTQUFTLEdBQUU7QUFBQyxRQUFFLEtBQUssR0FBRyxZQUFZLE9BQU0sVUFBVSxFQUFFLFlBQVksS0FBSyxFQUFFLE9BQU8sQ0FBQztBQUFFLFdBQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxhQUFNLENBQUMsQ0FBQztBQUFBLElBQUMsQ0FBQztBQUFBLEVBQUM7QUFBRSxJQUFFLFNBQU87QUFBSyxJQUFFLE9BQUssV0FBVTtBQUFBLEVBQUM7QUFDcGMsSUFBRSxjQUFZLFNBQVMsR0FBRSxHQUFFLEdBQUU7QUFBQyxTQUFHLE1BQUksUUFBTSxLQUFLLFFBQU0sTUFBSSxLQUFLLFFBQU0sS0FBRztBQUFHLFFBQUksSUFBRSxLQUFLLEVBQUUsSUFBRSxNQUFJLENBQUM7QUFBRSxRQUFHLEVBQUUsUUFBTyxFQUFFLEtBQUssTUFBSyxDQUFDO0FBQUUsUUFBSSxJQUFFLEtBQUssR0FBRyxZQUFZLEdBQUUsQ0FBQztBQUFFLFNBQUssRUFBRSxJQUFFLE1BQUksQ0FBQyxJQUFFLElBQUUsRUFBRSxZQUFZLENBQUM7QUFBRSxVQUFNLElBQUUsRUFBRSxLQUFLLE1BQUssQ0FBQztBQUFFLFNBQUssRUFBRSxJQUFFLE1BQUksQ0FBQyxJQUFFO0FBQUssV0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLFdBQVU7QUFBQyxVQUFFLElBQUU7QUFB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WSxTQUFTLEdBQUU7QUFBQyxtQkFBVSxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUUsR0FBRSxJQUFJLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQyxJQUFFLEVBQUUsUUFBSyxNQUFNLEtBQUssWUFBWSxPQUFNLGFBQVksU0FBUyxHQUFFO0FBQUMsbUJBQVUsS0FBSyxFQUFFLEtBQUk7QUFBQyxnQkFBTSxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxDQUFDO0FBQUUsWUFBRSxXQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBVSxXQUFVO0FBQUMsZ0JBQUksSUFBRSxLQUFLO0FBQU8sZ0JBQUUsS0FBRyxFQUFFLFNBQU8sRUFBRSxPQUFPLENBQUMsSUFBRTtBQUFFLGNBQUUsSUFBSSxHQUFFLENBQUM7QUFBQSxVQUFDO0FBQUEsUUFBRTtBQUFBLE1BQUMsQ0FBQyxJQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRSxFQUFFLE9BQUssRUFBRSxJQUFJLE1BQU0sR0FBRSxFQUFFLFNBQU8sRUFBRSxNQUFNLE1BQU0sR0FBRSxFQUFFLFlBQzdlLEVBQUUsSUFBSSxNQUFNO0FBQUEsSUFBRTtBQUFBO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLEVBQUU7QUFBTSxRQUFJLEdBQUUsSUFBRTtBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUcsSUFBRSxJQUFFLElBQUUsRUFBRSxDQUFDLEdBQUU7QUFBQyxpQkFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRyxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxRQUFRLENBQUMsR0FBRSxLQUFHLEVBQUUsS0FBRyxJQUFFLEdBQUUsRUFBRSxTQUFPLEVBQUUsR0FBRSxPQUFPLEdBQUUsQ0FBQztBQUFBLGFBQU07QUFBQyxZQUFFLENBQUMsSUFBRSxDQUFDO0FBQUU7QUFBQSxRQUFLO0FBQUMsYUFBRyxF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
