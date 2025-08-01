(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
/**
 * @vue/shared v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function zn(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const z = {},
  gt = [],
  Ne = () => {},
  di = () => !1,
  fn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Gn = (e) => e.startsWith("onUpdate:"),
  re = Object.assign,
  Jn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  hi = Object.prototype.hasOwnProperty,
  H = (e, t) => hi.call(e, t),
  I = Array.isArray,
  mt = (e) => un(e) === "[object Map]",
  Qs = (e) => un(e) === "[object Set]",
  R = (e) => typeof e == "function",
  X = (e) => typeof e == "string",
  We = (e) => typeof e == "symbol",
  G = (e) => e !== null && typeof e == "object",
  Xs = (e) => (G(e) || R(e)) && R(e.then) && R(e.catch),
  Zs = Object.prototype.toString,
  un = (e) => Zs.call(e),
  pi = (e) => un(e).slice(8, -1),
  er = (e) => un(e) === "[object Object]",
  Yn = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  At = zn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  an = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  gi = /-(\w)/g,
  Xe = an((e) => e.replace(gi, (t, n) => (n ? n.toUpperCase() : ""))),
  mi = /\B([A-Z])/g,
  ut = an((e) => e.replace(mi, "-$1").toLowerCase()),
  tr = an((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  vn = an((e) => (e ? `on${tr(e)}` : "")),
  Qe = (e, t) => !Object.is(e, t),
  xn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Nn = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  _i = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  bi = (e) => {
    const t = X(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let _s;
const dn = () =>
  _s ||
  (_s =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Qn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = X(s) ? Ci(s) : Qn(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (X(e) || G(e)) return e;
}
const yi = /;(?![^(]*\))/g,
  vi = /:([^]+)/,
  xi = /\/\*[^]*?\*\//g;
function Ci(e) {
  const t = {};
  return (
    e
      .replace(xi, "")
      .split(yi)
      .forEach((n) => {
        if (n) {
          const s = n.split(vi);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Lt(e) {
  let t = "";
  if (X(e)) t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = Lt(e[n]);
      s && (t += s + " ");
    }
  else if (G(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Si =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  wi = zn(Si);
function nr(e) {
  return !!e || e === "";
}
const sr = (e) => !!(e && e.__v_isRef === !0),
  Xt = (e) =>
    X(e)
      ? e
      : e == null
      ? ""
      : I(e) || (G(e) && (e.toString === Zs || !R(e.toString)))
      ? sr(e)
        ? Xt(e.value)
        : JSON.stringify(e, rr, 2)
      : String(e),
  rr = (e, t) =>
    sr(t)
      ? rr(e, t.value)
      : mt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r], i) => ((n[Cn(s, i) + " =>"] = r), n),
            {}
          ),
        }
      : Qs(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Cn(n)) }
      : We(t)
      ? Cn(t)
      : G(t) && !I(t) && !er(t)
      ? String(t)
      : t,
  Cn = (e, t = "") => {
    var n;
    return We(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let be;
class Ti {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = be),
      !t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = be;
      try {
        return (be = this), t();
      } finally {
        be = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = be), (be = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((be = this.prevScope), (this.prevScope = void 0));
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Ei() {
  return be;
}
let k;
const Sn = new WeakSet();
class ir {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      be && be.active && be.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Sn.has(this) && (Sn.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || lr(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), bs(this), cr(this);
    const t = k,
      n = Ee;
    (k = this), (Ee = !0);
    try {
      return this.fn();
    } finally {
      fr(this), (k = t), (Ee = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) es(t);
      (this.deps = this.depsTail = void 0),
        bs(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Sn.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Dn(this) && this.run();
  }
  get dirty() {
    return Dn(this);
  }
}
let or = 0,
  Ot,
  It;
function lr(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = It), (It = e);
    return;
  }
  (e.next = Ot), (Ot = e);
}
function Xn() {
  or++;
}
function Zn() {
  if (--or > 0) return;
  if (It) {
    let t = It;
    for (It = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Ot; ) {
    let t = Ot;
    for (Ot = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function cr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function fr(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), es(s), Ai(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r);
  }
  (e.deps = t), (e.depsTail = n);
}
function Dn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (ur(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function ur(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Nt) ||
    ((e.globalVersion = Nt),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Dn(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = k,
    s = Ee;
  (k = e), (Ee = !0);
  try {
    cr(e);
    const r = e.fn(e._value);
    (t.version === 0 || Qe(r, e._value)) &&
      ((e.flags |= 128), (e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    (k = n), (Ee = s), fr(e), (e.flags &= -3);
  }
}
function es(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) es(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ai(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Ee = !0;
const ar = [];
function Ue() {
  ar.push(Ee), (Ee = !1);
}
function Ke() {
  const e = ar.pop();
  Ee = e === void 0 ? !0 : e;
}
function bs(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = k;
    k = void 0;
    try {
      t();
    } finally {
      k = n;
    }
  }
}
let Nt = 0;
class Oi {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class ts {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0);
  }
  track(t) {
    if (!k || !Ee || k === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== k)
      (n = this.activeLink = new Oi(k, this)),
        k.deps
          ? ((n.prevDep = k.depsTail),
            (k.depsTail.nextDep = n),
            (k.depsTail = n))
          : (k.deps = k.depsTail = n),
        dr(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = k.depsTail),
        (n.nextDep = void 0),
        (k.depsTail.nextDep = n),
        (k.depsTail = n),
        k.deps === n && (k.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Nt++, this.notify(t);
  }
  notify(t) {
    Xn();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Zn();
    }
  }
}
function dr(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) dr(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const $n = new WeakMap(),
  ft = Symbol(""),
  Hn = Symbol(""),
  Dt = Symbol("");
function le(e, t, n) {
  if (Ee && k) {
    let s = $n.get(e);
    s || $n.set(e, (s = new Map()));
    let r = s.get(n);
    r || (s.set(n, (r = new ts())), (r.map = s), (r.key = n)), r.track();
  }
}
function Ve(e, t, n, s, r, i) {
  const o = $n.get(e);
  if (!o) {
    Nt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if ((Xn(), t === "clear")) o.forEach(l);
  else {
    const f = I(e),
      h = f && Yn(n);
    if (f && n === "length") {
      const a = Number(s);
      o.forEach((d, y) => {
        (y === "length" || y === Dt || (!We(y) && y >= a)) && l(d);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(Dt)), t)
      ) {
        case "add":
          f ? h && l(o.get("length")) : (l(o.get(ft)), mt(e) && l(o.get(Hn)));
          break;
        case "delete":
          f || (l(o.get(ft)), mt(e) && l(o.get(Hn)));
          break;
        case "set":
          mt(e) && l(o.get(ft));
          break;
      }
  }
  Zn();
}
function at(e) {
  const t = $(e);
  return t === e ? t : (le(t, "iterate", Dt), Te(e) ? t : t.map(se));
}
function hn(e) {
  return le((e = $(e)), "iterate", Dt), e;
}
const Ii = {
  __proto__: null,
  [Symbol.iterator]() {
    return wn(this, Symbol.iterator, se);
  },
  concat(...e) {
    return at(this).concat(...e.map((t) => (I(t) ? at(t) : t)));
  },
  entries() {
    return wn(this, "entries", (e) => ((e[1] = se(e[1])), e));
  },
  every(e, t) {
    return $e(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return $e(this, "filter", e, t, (n) => n.map(se), arguments);
  },
  find(e, t) {
    return $e(this, "find", e, t, se, arguments);
  },
  findIndex(e, t) {
    return $e(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return $e(this, "findLast", e, t, se, arguments);
  },
  findLastIndex(e, t) {
    return $e(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return $e(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Tn(this, "includes", e);
  },
  indexOf(...e) {
    return Tn(this, "indexOf", e);
  },
  join(e) {
    return at(this).join(e);
  },
  lastIndexOf(...e) {
    return Tn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return $e(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wt(this, "pop");
  },
  push(...e) {
    return wt(this, "push", e);
  },
  reduce(e, ...t) {
    return ys(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ys(this, "reduceRight", e, t);
  },
  shift() {
    return wt(this, "shift");
  },
  some(e, t) {
    return $e(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wt(this, "splice", e);
  },
  toReversed() {
    return at(this).toReversed();
  },
  toSorted(e) {
    return at(this).toSorted(e);
  },
  toSpliced(...e) {
    return at(this).toSpliced(...e);
  },
  unshift(...e) {
    return wt(this, "unshift", e);
  },
  values() {
    return wn(this, "values", se);
  },
};
function wn(e, t, n) {
  const s = hn(e),
    r = s[t]();
  return (
    s !== e &&
      !Te(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next();
        return i.value && (i.value = n(i.value)), i;
      })),
    r
  );
}
const Pi = Array.prototype;
function $e(e, t, n, s, r, i) {
  const o = hn(e),
    l = o !== e && !Te(e),
    f = o[t];
  if (f !== Pi[t]) {
    const d = f.apply(e, i);
    return l ? se(d) : d;
  }
  let h = n;
  o !== e &&
    (l
      ? (h = function (d, y) {
          return n.call(this, se(d), y, e);
        })
      : n.length > 2 &&
        (h = function (d, y) {
          return n.call(this, d, y, e);
        }));
  const a = f.call(o, h, s);
  return l && r ? r(a) : a;
}
function ys(e, t, n, s) {
  const r = hn(e);
  let i = n;
  return (
    r !== e &&
      (Te(e)
        ? n.length > 3 &&
          (i = function (o, l, f) {
            return n.call(this, o, l, f, e);
          })
        : (i = function (o, l, f) {
            return n.call(this, o, se(l), f, e);
          })),
    r[t](i, ...s)
  );
}
function Tn(e, t, n) {
  const s = $(e);
  le(s, "iterate", Dt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && is(n[0])
    ? ((n[0] = $(n[0])), s[t](...n))
    : r;
}
function wt(e, t, n = []) {
  Ue(), Xn();
  const s = $(e)[t].apply(e, n);
  return Zn(), Ke(), s;
}
const Fi = zn("__proto__,__v_isRef,__isVue"),
  hr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(We)
  );
function Ri(e) {
  We(e) || (e = String(e));
  const t = $(this);
  return le(t, "has", e), t.hasOwnProperty(e);
}
class pr {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return s === (r ? (i ? Ui : br) : i ? _r : mr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = I(t);
    if (!r) {
      let f;
      if (o && (f = Ii[n])) return f;
      if (n === "hasOwnProperty") return Ri;
    }
    const l = Reflect.get(t, n, fe(t) ? t : s);
    return (We(n) ? hr.has(n) : Fi(n)) || (r || le(t, "get", n), i)
      ? l
      : fe(l)
      ? o && Yn(n)
        ? l
        : l.value
      : G(l)
      ? r
        ? yr(l)
        : ss(l)
      : l;
  }
}
class gr extends pr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const f = Ze(i);
      if (
        (!Te(s) && !Ze(s) && ((i = $(i)), (s = $(s))), !I(t) && fe(i) && !fe(s))
      )
        return f ? !1 : ((i.value = s), !0);
    }
    const o = I(t) && Yn(n) ? Number(n) < t.length : H(t, n),
      l = Reflect.set(t, n, s, fe(t) ? t : r);
    return (
      t === $(r) && (o ? Qe(s, i) && Ve(t, "set", n, s) : Ve(t, "add", n, s)), l
    );
  }
  deleteProperty(t, n) {
    const s = H(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ve(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!We(n) || !hr.has(n)) && le(t, "has", n), s;
  }
  ownKeys(t) {
    return le(t, "iterate", I(t) ? "length" : ft), Reflect.ownKeys(t);
  }
}
class Mi extends pr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Li = new gr(),
  Ni = new Mi(),
  Di = new gr(!0);
const jn = (e) => e,
  Gt = (e) => Reflect.getPrototypeOf(e);
function $i(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = $(r),
      o = mt(i),
      l = e === "entries" || (e === Symbol.iterator && o),
      f = e === "keys" && o,
      h = r[e](...s),
      a = n ? jn : t ? nn : se;
    return (
      !t && le(i, "iterate", f ? Hn : ft),
      {
        next() {
          const { value: d, done: y } = h.next();
          return y
            ? { value: d, done: y }
            : { value: l ? [a(d[0]), a(d[1])] : a(d), done: y };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Jt(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hi(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = $(i),
        l = $(r);
      e || (Qe(r, l) && le(o, "get", r), le(o, "get", l));
      const { has: f } = Gt(o),
        h = t ? jn : e ? nn : se;
      if (f.call(o, r)) return h(i.get(r));
      if (f.call(o, l)) return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && le($(r), "iterate", ft), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw,
        o = $(i),
        l = $(r);
      return (
        e || (Qe(r, l) && le(o, "has", r), le(o, "has", l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      );
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        f = $(l),
        h = t ? jn : e ? nn : se;
      return (
        !e && le(f, "iterate", ft),
        l.forEach((a, d) => r.call(i, h(a), h(d), o))
      );
    },
  };
  return (
    re(
      n,
      e
        ? {
            add: Jt("add"),
            set: Jt("set"),
            delete: Jt("delete"),
            clear: Jt("clear"),
          }
        : {
            add(r) {
              !t && !Te(r) && !Ze(r) && (r = $(r));
              const i = $(this);
              return (
                Gt(i).has.call(i, r) || (i.add(r), Ve(i, "add", r, r)), this
              );
            },
            set(r, i) {
              !t && !Te(i) && !Ze(i) && (i = $(i));
              const o = $(this),
                { has: l, get: f } = Gt(o);
              let h = l.call(o, r);
              h || ((r = $(r)), (h = l.call(o, r)));
              const a = f.call(o, r);
              return (
                o.set(r, i),
                h ? Qe(i, a) && Ve(o, "set", r, i) : Ve(o, "add", r, i),
                this
              );
            },
            delete(r) {
              const i = $(this),
                { has: o, get: l } = Gt(i);
              let f = o.call(i, r);
              f || ((r = $(r)), (f = o.call(i, r))), l && l.call(i, r);
              const h = i.delete(r);
              return f && Ve(i, "delete", r, void 0), h;
            },
            clear() {
              const r = $(this),
                i = r.size !== 0,
                o = r.clear();
              return i && Ve(r, "clear", void 0, void 0), o;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = $i(r, e, t);
    }),
    n
  );
}
function ns(e, t) {
  const n = Hi(e, t);
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(H(n, r) && r in s ? n : s, r, i);
}
const ji = { get: ns(!1, !1) },
  Bi = { get: ns(!1, !0) },
  Vi = { get: ns(!0, !1) };
const mr = new WeakMap(),
  _r = new WeakMap(),
  br = new WeakMap(),
  Ui = new WeakMap();
function Ki(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Wi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ki(pi(e));
}
function ss(e) {
  return Ze(e) ? e : rs(e, !1, Li, ji, mr);
}
function qi(e) {
  return rs(e, !1, Di, Bi, _r);
}
function yr(e) {
  return rs(e, !0, Ni, Vi, br);
}
function rs(e, t, n, s, r) {
  if (!G(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = Wi(e);
  if (i === 0) return e;
  const o = r.get(e);
  if (o) return o;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function _t(e) {
  return Ze(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function Te(e) {
  return !!(e && e.__v_isShallow);
}
function is(e) {
  return e ? !!e.__v_raw : !1;
}
function $(e) {
  const t = e && e.__v_raw;
  return t ? $(t) : e;
}
function ki(e) {
  return (
    !H(e, "__v_skip") && Object.isExtensible(e) && Nn(e, "__v_skip", !0), e
  );
}
const se = (e) => (G(e) ? ss(e) : e),
  nn = (e) => (G(e) ? yr(e) : e);
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function dt(e) {
  return zi(e, !1);
}
function zi(e, t) {
  return fe(e) ? e : new Gi(e, t);
}
class Gi {
  constructor(t, n) {
    (this.dep = new ts()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : $(t)),
      (this._value = n ? t : se(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Te(t) || Ze(t);
    (t = s ? t : $(t)),
      Qe(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : se(t)),
        this.dep.trigger());
  }
}
function vr(e) {
  return fe(e) ? e.value : e;
}
const Ji = {
  get: (e, t, n) => (t === "__v_raw" ? e : vr(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return fe(r) && !fe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function xr(e) {
  return _t(e) ? e : new Proxy(e, Ji);
}
class Yi {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new ts(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Nt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && k !== this))
      return lr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ur(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Qi(e, t, n = !1) {
  let s, r;
  return R(e) ? (s = e) : ((s = e.get), (r = e.set)), new Yi(s, r, n);
}
const Yt = {},
  sn = new WeakMap();
let lt;
function Xi(e, t = !1, n = lt) {
  if (n) {
    let s = sn.get(n);
    s || sn.set(n, (s = [])), s.push(e);
  }
}
function Zi(e, t, n = z) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: f,
    } = n,
    h = (O) => (r ? O : Te(O) || r === !1 || r === 0 ? Ye(O, 1) : Ye(O));
  let a,
    d,
    y,
    w,
    F = !1,
    M = !1;
  if (
    (fe(e)
      ? ((d = () => e.value), (F = Te(e)))
      : _t(e)
      ? ((d = () => h(e)), (F = !0))
      : I(e)
      ? ((M = !0),
        (F = e.some((O) => _t(O) || Te(O))),
        (d = () =>
          e.map((O) => {
            if (fe(O)) return O.value;
            if (_t(O)) return h(O);
            if (R(O)) return f ? f(O, 2) : O();
          })))
      : R(e)
      ? t
        ? (d = f ? () => f(e, 2) : e)
        : (d = () => {
            if (y) {
              Ue();
              try {
                y();
              } finally {
                Ke();
              }
            }
            const O = lt;
            lt = a;
            try {
              return f ? f(e, 3, [w]) : e(w);
            } finally {
              lt = O;
            }
          })
      : (d = Ne),
    t && r)
  ) {
    const O = d,
      K = r === !0 ? 1 / 0 : r;
    d = () => Ye(O(), K);
  }
  const Z = Ei(),
    D = () => {
      a.stop(), Z && Z.active && Jn(Z.effects, a);
    };
  if (i && t) {
    const O = t;
    t = (...K) => {
      O(...K), D();
    };
  }
  let V = M ? new Array(e.length).fill(Yt) : Yt;
  const U = (O) => {
    if (!(!(a.flags & 1) || (!a.dirty && !O)))
      if (t) {
        const K = a.run();
        if (r || F || (M ? K.some((ee, ue) => Qe(ee, V[ue])) : Qe(K, V))) {
          y && y();
          const ee = lt;
          lt = a;
          try {
            const ue = [K, V === Yt ? void 0 : M && V[0] === Yt ? [] : V, w];
            (V = K), f ? f(t, 3, ue) : t(...ue);
          } finally {
            lt = ee;
          }
        }
      } else a.run();
  };
  return (
    l && l(U),
    (a = new ir(d)),
    (a.scheduler = o ? () => o(U, !1) : U),
    (w = (O) => Xi(O, !1, a)),
    (y = a.onStop =
      () => {
        const O = sn.get(a);
        if (O) {
          if (f) f(O, 4);
          else for (const K of O) K();
          sn.delete(a);
        }
      }),
    t ? (s ? U(!0) : (V = a.run())) : o ? o(U.bind(null, !0), !0) : a.run(),
    (D.pause = a.pause.bind(a)),
    (D.resume = a.resume.bind(a)),
    (D.stop = D),
    D
  );
}
function Ye(e, t = 1 / 0, n) {
  if (t <= 0 || !G(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, fe(e))) Ye(e.value, t, n);
  else if (I(e)) for (let s = 0; s < e.length; s++) Ye(e[s], t, n);
  else if (Qs(e) || mt(e))
    e.forEach((s) => {
      Ye(s, t, n);
    });
  else if (er(e)) {
    for (const s in e) Ye(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ye(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Wt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    pn(r, t, n);
  }
}
function Ae(e, t, n, s) {
  if (R(e)) {
    const r = Wt(e, t, n, s);
    return (
      r &&
        Xs(r) &&
        r.catch((i) => {
          pn(i, t, n);
        }),
      r
    );
  }
  if (I(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(Ae(e[i], t, n, s));
    return r;
  }
}
function pn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || z;
  if (t) {
    let l = t.parent;
    const f = t.proxy,
      h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let d = 0; d < a.length; d++) if (a[d](e, f, h) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      Ue(), Wt(i, null, 10, [e, f, h]), Ke();
      return;
    }
  }
  eo(e, n, r, s, o);
}
function eo(e, t, n, s = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const de = [];
let Me = -1;
const bt = [];
let ze = null,
  ht = 0;
const Cr = Promise.resolve();
let rn = null;
function to(e) {
  const t = rn || Cr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function no(e) {
  let t = Me + 1,
    n = de.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = de[s],
      i = $t(r);
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function os(e) {
  if (!(e.flags & 1)) {
    const t = $t(e),
      n = de[de.length - 1];
    !n || (!(e.flags & 2) && t >= $t(n)) ? de.push(e) : de.splice(no(t), 0, e),
      (e.flags |= 1),
      Sr();
  }
}
function Sr() {
  rn || (rn = Cr.then(Tr));
}
function so(e) {
  I(e)
    ? bt.push(...e)
    : ze && e.id === -1
    ? ze.splice(ht + 1, 0, e)
    : e.flags & 1 || (bt.push(e), (e.flags |= 1)),
    Sr();
}
function vs(e, t, n = Me + 1) {
  for (; n < de.length; n++) {
    const s = de[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      de.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2);
    }
  }
}
function wr(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort((n, s) => $t(n) - $t(s));
    if (((bt.length = 0), ze)) {
      ze.push(...t);
      return;
    }
    for (ze = t, ht = 0; ht < ze.length; ht++) {
      const n = ze[ht];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (ze = null), (ht = 0);
  }
}
const $t = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Tr(e) {
  try {
    for (Me = 0; Me < de.length; Me++) {
      const t = de[Me];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Wt(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Me < de.length; Me++) {
      const t = de[Me];
      t && (t.flags &= -2);
    }
    (Me = -1),
      (de.length = 0),
      wr(),
      (rn = null),
      (de.length || bt.length) && Tr();
  }
}
let ve = null,
  Er = null;
function on(e) {
  const t = ve;
  return (ve = e), (Er = (e && e.type.__scopeId) || null), t;
}
function pt(e, t = ve, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Ps(-1);
    const i = on(t);
    let o;
    try {
      o = e(...r);
    } finally {
      on(i), s._d && Ps(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function st(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[s];
    f && (Ue(), Ae(f, n, 8, [e.el, l, e, t]), Ke());
  }
}
const ro = Symbol("_vte"),
  Ar = (e) => e.__isTeleport,
  Ge = Symbol("_leaveCb"),
  Qt = Symbol("_enterCb");
function io() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Nr(() => {
      e.isMounted = !0;
    }),
    Dr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const we = [Function, Array],
  Or = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: we,
    onEnter: we,
    onAfterEnter: we,
    onEnterCancelled: we,
    onBeforeLeave: we,
    onLeave: we,
    onAfterLeave: we,
    onLeaveCancelled: we,
    onBeforeAppear: we,
    onAppear: we,
    onAfterAppear: we,
    onAppearCancelled: we,
  },
  Ir = (e) => {
    const t = e.subTree;
    return t.component ? Ir(t.component) : t;
  },
  oo = {
    name: "BaseTransition",
    props: Or,
    setup(e, { slots: t }) {
      const n = ri(),
        s = io();
      return () => {
        const r = t.default && Rr(t.default(), !0);
        if (!r || !r.length) return;
        const i = Pr(r),
          o = $(e),
          { mode: l } = o;
        if (s.isLeaving) return En(i);
        const f = xs(i);
        if (!f) return En(i);
        let h = Bn(f, o, s, n, (d) => (h = d));
        f.type !== ce && Ht(f, h);
        let a = n.subTree && xs(n.subTree);
        if (a && a.type !== ce && !ct(f, a) && Ir(n).type !== ce) {
          let d = Bn(a, o, s, n);
          if ((Ht(a, d), l === "out-in" && f.type !== ce))
            return (
              (s.isLeaving = !0),
              (d.afterLeave = () => {
                (s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete d.afterLeave,
                  (a = void 0);
              }),
              En(i)
            );
          l === "in-out" && f.type !== ce
            ? (d.delayLeave = (y, w, F) => {
                const M = Fr(s, a);
                (M[String(a.key)] = a),
                  (y[Ge] = () => {
                    w(), (y[Ge] = void 0), delete h.delayedLeave, (a = void 0);
                  }),
                  (h.delayedLeave = () => {
                    F(), delete h.delayedLeave, (a = void 0);
                  });
              })
            : (a = void 0);
        } else a && (a = void 0);
        return i;
      };
    },
  };
function Pr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ce) {
        t = n;
        break;
      }
  }
  return t;
}
const lo = oo;
function Fr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function Bn(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: f,
      onEnter: h,
      onAfterEnter: a,
      onEnterCancelled: d,
      onBeforeLeave: y,
      onLeave: w,
      onAfterLeave: F,
      onLeaveCancelled: M,
      onBeforeAppear: Z,
      onAppear: D,
      onAfterAppear: V,
      onAppearCancelled: U,
    } = t,
    O = String(e.key),
    K = Fr(n, e),
    ee = (L, B) => {
      L && Ae(L, s, 9, B);
    },
    ue = (L, B) => {
      const Y = B[1];
      ee(L, B),
        I(L) ? L.every((T) => T.length <= 1) && Y() : L.length <= 1 && Y();
    },
    ge = {
      mode: o,
      persisted: l,
      beforeEnter(L) {
        let B = f;
        if (!n.isMounted)
          if (i) B = Z || f;
          else return;
        L[Ge] && L[Ge](!0);
        const Y = K[O];
        Y && ct(e, Y) && Y.el[Ge] && Y.el[Ge](), ee(B, [L]);
      },
      enter(L) {
        let B = h,
          Y = a,
          T = d;
        if (!n.isMounted)
          if (i) (B = D || h), (Y = V || a), (T = U || d);
          else return;
        let J = !1;
        const ie = (L[Qt] = (De) => {
          J ||
            ((J = !0),
            De ? ee(T, [L]) : ee(Y, [L]),
            ge.delayedLeave && ge.delayedLeave(),
            (L[Qt] = void 0));
        });
        B ? ue(B, [L, ie]) : ie();
      },
      leave(L, B) {
        const Y = String(e.key);
        if ((L[Qt] && L[Qt](!0), n.isUnmounting)) return B();
        ee(y, [L]);
        let T = !1;
        const J = (L[Ge] = (ie) => {
          T ||
            ((T = !0),
            B(),
            ie ? ee(M, [L]) : ee(F, [L]),
            (L[Ge] = void 0),
            K[Y] === e && delete K[Y]);
        });
        (K[Y] = e), w ? ue(w, [L, J]) : J();
      },
      clone(L) {
        const B = Bn(L, t, n, s, r);
        return r && r(B), B;
      },
    };
  return ge;
}
function En(e) {
  if (gn(e)) return (e = et(e)), (e.children = null), e;
}
function xs(e) {
  if (!gn(e)) return Ar(e.type) && e.children ? Pr(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && R(n.default)) return n.default();
  }
}
function Ht(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Ht(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Rr(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === he
      ? (o.patchFlag & 128 && r++, (s = s.concat(Rr(o.children, t, l))))
      : (t || o.type !== ce) && s.push(l != null ? et(o, { key: l }) : o);
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
  return s;
}
function Mr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Pt(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach((F, M) => Pt(F, t && (I(t) ? t[M] : t), n, s, r));
    return;
  }
  if (yt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Pt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? us(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: f } = e,
    h = t && t.r,
    a = l.refs === z ? (l.refs = {}) : l.refs,
    d = l.setupState,
    y = $(d),
    w = d === z ? () => !1 : (F) => H(y, F);
  if (
    (h != null &&
      h !== f &&
      (X(h)
        ? ((a[h] = null), w(h) && (d[h] = null))
        : fe(h) && (h.value = null)),
    R(f))
  )
    Wt(f, l, 12, [o, a]);
  else {
    const F = X(f),
      M = fe(f);
    if (F || M) {
      const Z = () => {
        if (e.f) {
          const D = F ? (w(f) ? d[f] : a[f]) : f.value;
          r
            ? I(D) && Jn(D, i)
            : I(D)
            ? D.includes(i) || D.push(i)
            : F
            ? ((a[f] = [i]), w(f) && (d[f] = a[f]))
            : ((f.value = [i]), e.k && (a[e.k] = f.value));
        } else
          F
            ? ((a[f] = o), w(f) && (d[f] = o))
            : M && ((f.value = o), e.k && (a[e.k] = o));
      };
      o ? ((Z.id = -1), Ce(Z, n)) : Z();
    }
  }
}
dn().requestIdleCallback;
dn().cancelIdleCallback;
const yt = (e) => !!e.type.__asyncLoader,
  gn = (e) => e.type.__isKeepAlive;
function co(e, t) {
  Lr(e, "a", t);
}
function fo(e, t) {
  Lr(e, "da", t);
}
function Lr(e, t, n = pe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((mn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      gn(r.parent.vnode) && uo(s, t, n, r), (r = r.parent);
  }
}
function uo(e, t, n, s) {
  const r = mn(t, e, s, !0);
  $r(() => {
    Jn(s[t], r);
  }, n);
}
function mn(e, t, n = pe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          Ue();
          const l = qt(n),
            f = Ae(t, n, e, o);
          return l(), Ke(), f;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const qe =
    (e) =>
    (t, n = pe) => {
      (!Ut || e === "sp") && mn(e, (...s) => t(...s), n);
    },
  ao = qe("bm"),
  Nr = qe("m"),
  ho = qe("bu"),
  po = qe("u"),
  Dr = qe("bum"),
  $r = qe("um"),
  go = qe("sp"),
  mo = qe("rtg"),
  _o = qe("rtc");
function bo(e, t = pe) {
  mn("ec", e, t);
}
const yo = Symbol.for("v-ndc");
function vo(e, t, n, s) {
  let r;
  const i = n,
    o = I(e);
  if (o || X(e)) {
    const l = o && _t(e);
    let f = !1,
      h = !1;
    l && ((f = !Te(e)), (h = Ze(e)), (e = hn(e))), (r = new Array(e.length));
    for (let a = 0, d = e.length; a < d; a++)
      r[a] = t(f ? (h ? nn(se(e[a])) : se(e[a])) : e[a], a, void 0, i);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
  } else if (G(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, f) => t(l, f, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let f = 0, h = l.length; f < h; f++) {
        const a = l[f];
        r[f] = t(e[a], a, f, i);
      }
    }
  else r = [];
  return r;
}
function xo(e, t, n = {}, s, r) {
  if (ve.ce || (ve.parent && yt(ve.parent) && ve.parent.ce))
    return ye(), Bt(he, null, [ne("slot", n, s)], 64);
  let i = e[t];
  i && i._c && (i._d = !1), ye();
  const o = i && Hr(i(n)),
    l = n.key || (o && o.key),
    f = Bt(
      he,
      { key: (l && !We(l) ? l : `_${t}`) + (!o && s ? "_fb" : "") },
      o || [],
      o && e._ === 1 ? 64 : -2
    );
  return i && i._c && (i._d = !0), f;
}
function Hr(e) {
  return e.some((t) =>
    Vt(t) ? !(t.type === ce || (t.type === he && !Hr(t.children))) : !0
  )
    ? e
    : null;
}
const Vn = (e) => (e ? (ii(e) ? us(e) : Vn(e.parent)) : null),
  Ft = re(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Vn(e.parent),
    $root: (e) => Vn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Br(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        os(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = to.bind(e.proxy)),
    $watch: (e) => Ko.bind(e),
  }),
  An = (e, t) => e !== z && !e.__isScriptSetup && H(e, t),
  Co = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: f,
      } = e;
      let h;
      if (t[0] !== "$") {
        const w = o[t];
        if (w !== void 0)
          switch (w) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (An(s, t)) return (o[t] = 1), s[t];
          if (r !== z && H(r, t)) return (o[t] = 2), r[t];
          if ((h = e.propsOptions[0]) && H(h, t)) return (o[t] = 3), i[t];
          if (n !== z && H(n, t)) return (o[t] = 4), n[t];
          Un && (o[t] = 0);
        }
      }
      const a = Ft[t];
      let d, y;
      if (a) return t === "$attrs" && le(e.attrs, "get", ""), a(e);
      if ((d = l.__cssModules) && (d = d[t])) return d;
      if (n !== z && H(n, t)) return (o[t] = 4), n[t];
      if (((y = f.config.globalProperties), H(y, t))) return y[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return An(r, t)
        ? ((r[t] = n), !0)
        : s !== z && H(s, t)
        ? ((s[t] = n), !0)
        : H(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o
    ) {
      let l;
      return (
        !!n[o] ||
        (e !== z && H(e, o)) ||
        An(t, o) ||
        ((l = i[0]) && H(l, o)) ||
        H(s, o) ||
        H(Ft, o) ||
        H(r.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : H(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Cs(e) {
  return I(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Un = !0;
function So(e) {
  const t = Br(e),
    n = e.proxy,
    s = e.ctx;
  (Un = !1), t.beforeCreate && Ss(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: h,
    created: a,
    beforeMount: d,
    mounted: y,
    beforeUpdate: w,
    updated: F,
    activated: M,
    deactivated: Z,
    beforeDestroy: D,
    beforeUnmount: V,
    destroyed: U,
    unmounted: O,
    render: K,
    renderTracked: ee,
    renderTriggered: ue,
    errorCaptured: ge,
    serverPrefetch: L,
    expose: B,
    inheritAttrs: Y,
    components: T,
    directives: J,
    filters: ie,
  } = t;
  if ((h && wo(h, s, null), o))
    for (const Q in o) {
      const W = o[Q];
      R(W) && (s[Q] = W.bind(n));
    }
  if (r) {
    const Q = r.call(n, n);
    G(Q) && (e.data = ss(Q));
  }
  if (((Un = !0), i))
    for (const Q in i) {
      const W = i[Q],
        tt = R(W) ? W.bind(n, n) : R(W.get) ? W.get.bind(n, n) : Ne,
        kt = !R(W) && R(W.set) ? W.set.bind(n) : Ne,
        nt = ul({ get: tt, set: kt });
      Object.defineProperty(s, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (Oe) => (nt.value = Oe),
      });
    }
  if (l) for (const Q in l) jr(l[Q], s, n, Q);
  if (f) {
    const Q = R(f) ? f.call(n) : f;
    Reflect.ownKeys(Q).forEach((W) => {
      Po(W, Q[W]);
    });
  }
  a && Ss(a, e, "c");
  function te(Q, W) {
    I(W) ? W.forEach((tt) => Q(tt.bind(n))) : W && Q(W.bind(n));
  }
  if (
    (te(ao, d),
    te(Nr, y),
    te(ho, w),
    te(po, F),
    te(co, M),
    te(fo, Z),
    te(bo, ge),
    te(_o, ee),
    te(mo, ue),
    te(Dr, V),
    te($r, O),
    te(go, L),
    I(B))
  )
    if (B.length) {
      const Q = e.exposed || (e.exposed = {});
      B.forEach((W) => {
        Object.defineProperty(Q, W, {
          get: () => n[W],
          set: (tt) => (n[W] = tt),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === Ne && (e.render = K),
    Y != null && (e.inheritAttrs = Y),
    T && (e.components = T),
    J && (e.directives = J),
    L && Mr(e);
}
function wo(e, t, n = Ne) {
  I(e) && (e = Kn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    G(r)
      ? "default" in r
        ? (i = Zt(r.from || s, r.default, !0))
        : (i = Zt(r.from || s))
      : (i = Zt(r)),
      fe(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i);
  }
}
function Ss(e, t, n) {
  Ae(I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function jr(e, t, n, s) {
  let r = s.includes(".") ? Zr(n, s) : () => n[s];
  if (X(e)) {
    const i = t[e];
    R(i) && In(r, i);
  } else if (R(e)) In(r, e.bind(n));
  else if (G(e))
    if (I(e)) e.forEach((i) => jr(i, t, n, s));
    else {
      const i = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(i) && In(r, i, e);
    }
}
function Br(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t);
  let f;
  return (
    l
      ? (f = l)
      : !r.length && !n && !s
      ? (f = t)
      : ((f = {}), r.length && r.forEach((h) => ln(f, h, o, !0)), ln(f, t, o)),
    G(t) && i.set(t, f),
    f
  );
}
function ln(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && ln(e, i, n, !0), r && r.forEach((o) => ln(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = To[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const To = {
  data: ws,
  props: Ts,
  emits: Ts,
  methods: Et,
  computed: Et,
  beforeCreate: ae,
  created: ae,
  beforeMount: ae,
  mounted: ae,
  beforeUpdate: ae,
  updated: ae,
  beforeDestroy: ae,
  beforeUnmount: ae,
  destroyed: ae,
  unmounted: ae,
  activated: ae,
  deactivated: ae,
  errorCaptured: ae,
  serverPrefetch: ae,
  components: Et,
  directives: Et,
  watch: Ao,
  provide: ws,
  inject: Eo,
};
function ws(e, t) {
  return t
    ? e
      ? function () {
          return re(
            R(e) ? e.call(this, this) : e,
            R(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Eo(e, t) {
  return Et(Kn(e), Kn(t));
}
function Kn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Et(e, t) {
  return e ? re(Object.create(null), e, t) : t;
}
function Ts(e, t) {
  return e
    ? I(e) && I(t)
      ? [...new Set([...e, ...t])]
      : re(Object.create(null), Cs(e), Cs(t ?? {}))
    : t;
}
function Ao(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = re(Object.create(null), e);
  for (const s in t) n[s] = ae(e[s], t[s]);
  return n;
}
function Vr() {
  return {
    app: null,
    config: {
      isNativeTag: di,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Oo = 0;
function Io(e, t) {
  return function (s, r = null) {
    R(s) || (s = re({}, s)), r != null && !G(r) && (r = null);
    const i = Vr(),
      o = new WeakSet(),
      l = [];
    let f = !1;
    const h = (i.app = {
      _uid: Oo++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: dl,
      get config() {
        return i.config;
      },
      set config(a) {},
      use(a, ...d) {
        return (
          o.has(a) ||
            (a && R(a.install)
              ? (o.add(a), a.install(h, ...d))
              : R(a) && (o.add(a), a(h, ...d))),
          h
        );
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), h;
      },
      component(a, d) {
        return d ? ((i.components[a] = d), h) : i.components[a];
      },
      directive(a, d) {
        return d ? ((i.directives[a] = d), h) : i.directives[a];
      },
      mount(a, d, y) {
        if (!f) {
          const w = h._ceVNode || ne(s, r);
          return (
            (w.appContext = i),
            y === !0 ? (y = "svg") : y === !1 && (y = void 0),
            e(w, a, y),
            (f = !0),
            (h._container = a),
            (a.__vue_app__ = h),
            us(w.component)
          );
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f &&
          (Ae(l, h._instance, 16),
          e(null, h._container),
          delete h._container.__vue_app__);
      },
      provide(a, d) {
        return (i.provides[a] = d), h;
      },
      runWithContext(a) {
        const d = vt;
        vt = h;
        try {
          return a();
        } finally {
          vt = d;
        }
      },
    });
    return h;
  };
}
let vt = null;
function Po(e, t) {
  if (pe) {
    let n = pe.provides;
    const s = pe.parent && pe.parent.provides;
    s === n && (n = pe.provides = Object.create(s)), (n[e] = t);
  }
}
function Zt(e, t, n = !1) {
  const s = ri();
  if (s || vt) {
    let r = vt
      ? vt._context.provides
      : s
      ? s.parent == null || s.ce
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && R(t) ? t.call(s && s.proxy) : t;
  }
}
const Ur = {},
  Kr = () => Object.create(Ur),
  Wr = (e) => Object.getPrototypeOf(e) === Ur;
function Fo(e, t, n, s = !1) {
  const r = {},
    i = Kr();
  (e.propsDefaults = Object.create(null)), qr(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (e.props = s ? r : qi(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function Ro(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = $(r),
    [f] = e.propsOptions;
  let h = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        let y = a[d];
        if (_n(e.emitsOptions, y)) continue;
        const w = t[y];
        if (f)
          if (H(i, y)) w !== i[y] && ((i[y] = w), (h = !0));
          else {
            const F = Xe(y);
            r[F] = Wn(f, l, F, w, e, !1);
          }
        else w !== i[y] && ((i[y] = w), (h = !0));
      }
    }
  } else {
    qr(e, t, r, i) && (h = !0);
    let a;
    for (const d in l)
      (!t || (!H(t, d) && ((a = ut(d)) === d || !H(t, a)))) &&
        (f
          ? n &&
            (n[d] !== void 0 || n[a] !== void 0) &&
            (r[d] = Wn(f, l, d, void 0, e, !0))
          : delete r[d]);
    if (i !== l) for (const d in i) (!t || !H(t, d)) && (delete i[d], (h = !0));
  }
  h && Ve(e.attrs, "set", "");
}
function qr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let f in t) {
      if (At(f)) continue;
      const h = t[f];
      let a;
      r && H(r, (a = Xe(f)))
        ? !i || !i.includes(a)
          ? (n[a] = h)
          : ((l || (l = {}))[a] = h)
        : _n(e.emitsOptions, f) ||
          ((!(f in s) || h !== s[f]) && ((s[f] = h), (o = !0)));
    }
  if (i) {
    const f = $(n),
      h = l || z;
    for (let a = 0; a < i.length; a++) {
      const d = i[a];
      n[d] = Wn(r, f, d, h[d], e, !H(h, d));
    }
  }
  return o;
}
function Wn(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = H(o, "default");
    if (l && s === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && R(f)) {
        const { propsDefaults: h } = r;
        if (n in h) s = h[n];
        else {
          const a = qt(r);
          (s = h[n] = f.call(null, t)), a();
        }
      } else s = f;
      r.ce && r.ce._setProp(n, s);
    }
    o[0] &&
      (i && !l ? (s = !1) : o[1] && (s === "" || s === ut(n)) && (s = !0));
  }
  return s;
}
const Mo = new WeakMap();
function kr(e, t, n = !1) {
  const s = n ? Mo : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let f = !1;
  if (!R(e)) {
    const a = (d) => {
      f = !0;
      const [y, w] = kr(d, t, !0);
      re(o, y), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f) return G(e) && s.set(e, gt), gt;
  if (I(i))
    for (let a = 0; a < i.length; a++) {
      const d = Xe(i[a]);
      Es(d) && (o[d] = z);
    }
  else if (i)
    for (const a in i) {
      const d = Xe(a);
      if (Es(d)) {
        const y = i[a],
          w = (o[d] = I(y) || R(y) ? { type: y } : re({}, y)),
          F = w.type;
        let M = !1,
          Z = !0;
        if (I(F))
          for (let D = 0; D < F.length; ++D) {
            const V = F[D],
              U = R(V) && V.name;
            if (U === "Boolean") {
              M = !0;
              break;
            } else U === "String" && (Z = !1);
          }
        else M = R(F) && F.name === "Boolean";
        (w[0] = M), (w[1] = Z), (M || H(w, "default")) && l.push(d);
      }
    }
  const h = [o, l];
  return G(e) && s.set(e, h), h;
}
function Es(e) {
  return e[0] !== "$" && !At(e);
}
const ls = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable",
  cs = (e) => (I(e) ? e.map(Le) : [Le(e)]),
  Lo = (e, t, n) => {
    if (t._n) return t;
    const s = pt((...r) => cs(t(...r)), n);
    return (s._c = !1), s;
  },
  zr = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (ls(r)) continue;
      const i = e[r];
      if (R(i)) t[r] = Lo(r, i, s);
      else if (i != null) {
        const o = cs(i);
        t[r] = () => o;
      }
    }
  },
  Gr = (e, t) => {
    const n = cs(t);
    e.slots.default = () => n;
  },
  Jr = (e, t, n) => {
    for (const s in t) (n || !ls(s)) && (e[s] = t[s]);
  },
  No = (e, t, n) => {
    const s = (e.slots = Kr());
    if (e.vnode.shapeFlag & 32) {
      const r = t.__;
      r && Nn(s, "__", r, !0);
      const i = t._;
      i ? (Jr(s, t, n), n && Nn(s, "_", i, !0)) : zr(t, s);
    } else t && Gr(e, t);
  },
  Do = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      o = z;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : Jr(r, t, n)
        : ((i = !t.$stable), zr(t, r)),
        (o = t);
    } else t && (Gr(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !ls(l) && o[l] == null && delete r[l];
  },
  Ce = Yo;
function $o(e) {
  return Ho(e);
}
function Ho(e, t) {
  const n = dn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: f,
      setText: h,
      setElementText: a,
      parentNode: d,
      nextSibling: y,
      setScopeId: w = Ne,
      insertStaticContent: F,
    } = e,
    M = (
      c,
      u,
      p,
      _ = null,
      g = null,
      m = null,
      C = void 0,
      x = null,
      v = !!u.dynamicChildren
    ) => {
      if (c === u) return;
      c && !ct(c, u) && ((_ = zt(c)), Oe(c, g, m, !0), (c = null)),
        u.patchFlag === -2 && ((v = !1), (u.dynamicChildren = null));
      const { type: b, ref: A, shapeFlag: S } = u;
      switch (b) {
        case bn:
          Z(c, u, p, _);
          break;
        case ce:
          D(c, u, p, _);
          break;
        case Pn:
          c == null && V(u, p, _, C);
          break;
        case he:
          T(c, u, p, _, g, m, C, x, v);
          break;
        default:
          S & 1
            ? K(c, u, p, _, g, m, C, x, v)
            : S & 6
            ? J(c, u, p, _, g, m, C, x, v)
            : (S & 64 || S & 128) && b.process(c, u, p, _, g, m, C, x, v, Ct);
      }
      A != null && g
        ? Pt(A, c && c.ref, m, u || c, !u)
        : A == null && c && c.ref != null && Pt(c.ref, null, m, c, !0);
    },
    Z = (c, u, p, _) => {
      if (c == null) s((u.el = l(u.children)), p, _);
      else {
        const g = (u.el = c.el);
        u.children !== c.children && h(g, u.children);
      }
    },
    D = (c, u, p, _) => {
      c == null ? s((u.el = f(u.children || "")), p, _) : (u.el = c.el);
    },
    V = (c, u, p, _) => {
      [c.el, c.anchor] = F(c.children, u, p, _, c.el, c.anchor);
    },
    U = ({ el: c, anchor: u }, p, _) => {
      let g;
      for (; c && c !== u; ) (g = y(c)), s(c, p, _), (c = g);
      s(u, p, _);
    },
    O = ({ el: c, anchor: u }) => {
      let p;
      for (; c && c !== u; ) (p = y(c)), r(c), (c = p);
      r(u);
    },
    K = (c, u, p, _, g, m, C, x, v) => {
      u.type === "svg" ? (C = "svg") : u.type === "math" && (C = "mathml"),
        c == null ? ee(u, p, _, g, m, C, x, v) : L(c, u, g, m, C, x, v);
    },
    ee = (c, u, p, _, g, m, C, x) => {
      let v, b;
      const { props: A, shapeFlag: S, transition: E, dirs: P } = c;
      if (
        ((v = c.el = o(c.type, m, A && A.is, A)),
        S & 8
          ? a(v, c.children)
          : S & 16 && ge(c.children, v, null, _, g, On(c, m), C, x),
        P && st(c, null, _, "created"),
        ue(v, c, c.scopeId, C, _),
        A)
      ) {
        for (const q in A) q !== "value" && !At(q) && i(v, q, null, A[q], m, _);
        "value" in A && i(v, "value", null, A.value, m),
          (b = A.onVnodeBeforeMount) && Re(b, _, c);
      }
      P && st(c, null, _, "beforeMount");
      const N = jo(g, E);
      N && E.beforeEnter(v),
        s(v, u, p),
        ((b = A && A.onVnodeMounted) || N || P) &&
          Ce(() => {
            b && Re(b, _, c), N && E.enter(v), P && st(c, null, _, "mounted");
          }, g);
    },
    ue = (c, u, p, _, g) => {
      if ((p && w(c, p), _)) for (let m = 0; m < _.length; m++) w(c, _[m]);
      if (g) {
        let m = g.subTree;
        if (
          u === m ||
          (ti(m.type) && (m.ssContent === u || m.ssFallback === u))
        ) {
          const C = g.vnode;
          ue(c, C, C.scopeId, C.slotScopeIds, g.parent);
        }
      }
    },
    ge = (c, u, p, _, g, m, C, x, v = 0) => {
      for (let b = v; b < c.length; b++) {
        const A = (c[b] = x ? Je(c[b]) : Le(c[b]));
        M(null, A, u, p, _, g, m, C, x);
      }
    },
    L = (c, u, p, _, g, m, C) => {
      const x = (u.el = c.el);
      let { patchFlag: v, dynamicChildren: b, dirs: A } = u;
      v |= c.patchFlag & 16;
      const S = c.props || z,
        E = u.props || z;
      let P;
      if (
        (p && rt(p, !1),
        (P = E.onVnodeBeforeUpdate) && Re(P, p, u, c),
        A && st(u, c, p, "beforeUpdate"),
        p && rt(p, !0),
        ((S.innerHTML && E.innerHTML == null) ||
          (S.textContent && E.textContent == null)) &&
          a(x, ""),
        b
          ? B(c.dynamicChildren, b, x, p, _, On(u, g), m)
          : C || W(c, u, x, null, p, _, On(u, g), m, !1),
        v > 0)
      ) {
        if (v & 16) Y(x, S, E, p, g);
        else if (
          (v & 2 && S.class !== E.class && i(x, "class", null, E.class, g),
          v & 4 && i(x, "style", S.style, E.style, g),
          v & 8)
        ) {
          const N = u.dynamicProps;
          for (let q = 0; q < N.length; q++) {
            const j = N[q],
              me = S[j],
              _e = E[j];
            (_e !== me || j === "value") && i(x, j, me, _e, g, p);
          }
        }
        v & 1 && c.children !== u.children && a(x, u.children);
      } else !C && b == null && Y(x, S, E, p, g);
      ((P = E.onVnodeUpdated) || A) &&
        Ce(() => {
          P && Re(P, p, u, c), A && st(u, c, p, "updated");
        }, _);
    },
    B = (c, u, p, _, g, m, C) => {
      for (let x = 0; x < u.length; x++) {
        const v = c[x],
          b = u[x],
          A =
            v.el && (v.type === he || !ct(v, b) || v.shapeFlag & 198)
              ? d(v.el)
              : p;
        M(v, b, A, null, _, g, m, C, !0);
      }
    },
    Y = (c, u, p, _, g) => {
      if (u !== p) {
        if (u !== z)
          for (const m in u) !At(m) && !(m in p) && i(c, m, u[m], null, g, _);
        for (const m in p) {
          if (At(m)) continue;
          const C = p[m],
            x = u[m];
          C !== x && m !== "value" && i(c, m, x, C, g, _);
        }
        "value" in p && i(c, "value", u.value, p.value, g);
      }
    },
    T = (c, u, p, _, g, m, C, x, v) => {
      const b = (u.el = c ? c.el : l("")),
        A = (u.anchor = c ? c.anchor : l(""));
      let { patchFlag: S, dynamicChildren: E, slotScopeIds: P } = u;
      P && (x = x ? x.concat(P) : P),
        c == null
          ? (s(b, p, _), s(A, p, _), ge(u.children || [], p, A, g, m, C, x, v))
          : S > 0 && S & 64 && E && c.dynamicChildren
          ? (B(c.dynamicChildren, E, p, g, m, C, x),
            (u.key != null || (g && u === g.subTree)) && Yr(c, u, !0))
          : W(c, u, p, A, g, m, C, x, v);
    },
    J = (c, u, p, _, g, m, C, x, v) => {
      (u.slotScopeIds = x),
        c == null
          ? u.shapeFlag & 512
            ? g.ctx.activate(u, p, _, C, v)
            : ie(u, p, _, g, m, C, v)
          : De(c, u, v);
    },
    ie = (c, u, p, _, g, m, C) => {
      const x = (c.component = rl(c, _, g));
      if ((gn(c) && (x.ctx.renderer = Ct), il(x, !1, C), x.asyncDep)) {
        if ((g && g.registerDep(x, te, C), !c.el)) {
          const v = (x.subTree = ne(ce));
          D(null, v, u, p), (c.placeholder = v.el);
        }
      } else te(x, c, u, p, g, m, C);
    },
    De = (c, u, p) => {
      const _ = (u.component = c.component);
      if (Go(c, u, p))
        if (_.asyncDep && !_.asyncResolved) {
          Q(_, u, p);
          return;
        } else (_.next = u), _.update();
      else (u.el = c.el), (_.vnode = u);
    },
    te = (c, u, p, _, g, m, C) => {
      const x = () => {
        if (c.isMounted) {
          let { next: S, bu: E, u: P, parent: N, vnode: q } = c;
          {
            const Pe = Qr(c);
            if (Pe) {
              S && ((S.el = q.el), Q(c, S, C)),
                Pe.asyncDep.then(() => {
                  c.isUnmounted || x();
                });
              return;
            }
          }
          let j = S,
            me;
          rt(c, !1),
            S ? ((S.el = q.el), Q(c, S, C)) : (S = q),
            E && xn(E),
            (me = S.props && S.props.onVnodeBeforeUpdate) && Re(me, N, S, q),
            rt(c, !0);
          const _e = Os(c),
            Ie = c.subTree;
          (c.subTree = _e),
            M(Ie, _e, d(Ie.el), zt(Ie), c, g, m),
            (S.el = _e.el),
            j === null && Jo(c, _e.el),
            P && Ce(P, g),
            (me = S.props && S.props.onVnodeUpdated) &&
              Ce(() => Re(me, N, S, q), g);
        } else {
          let S;
          const { el: E, props: P } = u,
            { bm: N, m: q, parent: j, root: me, type: _e } = c,
            Ie = yt(u);
          rt(c, !1),
            N && xn(N),
            !Ie && (S = P && P.onVnodeBeforeMount) && Re(S, j, u),
            rt(c, !0);
          {
            me.ce &&
              me.ce._def.shadowRoot !== !1 &&
              me.ce._injectChildStyle(_e);
            const Pe = (c.subTree = Os(c));
            M(null, Pe, p, _, c, g, m), (u.el = Pe.el);
          }
          if ((q && Ce(q, g), !Ie && (S = P && P.onVnodeMounted))) {
            const Pe = u;
            Ce(() => Re(S, j, Pe), g);
          }
          (u.shapeFlag & 256 ||
            (j && yt(j.vnode) && j.vnode.shapeFlag & 256)) &&
            c.a &&
            Ce(c.a, g),
            (c.isMounted = !0),
            (u = p = _ = null);
        }
      };
      c.scope.on();
      const v = (c.effect = new ir(x));
      c.scope.off();
      const b = (c.update = v.run.bind(v)),
        A = (c.job = v.runIfDirty.bind(v));
      (A.i = c), (A.id = c.uid), (v.scheduler = () => os(A)), rt(c, !0), b();
    },
    Q = (c, u, p) => {
      u.component = c;
      const _ = c.vnode.props;
      (c.vnode = u),
        (c.next = null),
        Ro(c, u.props, _, p),
        Do(c, u.children, p),
        Ue(),
        vs(c),
        Ke();
    },
    W = (c, u, p, _, g, m, C, x, v = !1) => {
      const b = c && c.children,
        A = c ? c.shapeFlag : 0,
        S = u.children,
        { patchFlag: E, shapeFlag: P } = u;
      if (E > 0) {
        if (E & 128) {
          kt(b, S, p, _, g, m, C, x, v);
          return;
        } else if (E & 256) {
          tt(b, S, p, _, g, m, C, x, v);
          return;
        }
      }
      P & 8
        ? (A & 16 && xt(b, g, m), S !== b && a(p, S))
        : A & 16
        ? P & 16
          ? kt(b, S, p, _, g, m, C, x, v)
          : xt(b, g, m, !0)
        : (A & 8 && a(p, ""), P & 16 && ge(S, p, _, g, m, C, x, v));
    },
    tt = (c, u, p, _, g, m, C, x, v) => {
      (c = c || gt), (u = u || gt);
      const b = c.length,
        A = u.length,
        S = Math.min(b, A);
      let E;
      for (E = 0; E < S; E++) {
        const P = (u[E] = v ? Je(u[E]) : Le(u[E]));
        M(c[E], P, p, null, g, m, C, x, v);
      }
      b > A ? xt(c, g, m, !0, !1, S) : ge(u, p, _, g, m, C, x, v, S);
    },
    kt = (c, u, p, _, g, m, C, x, v) => {
      let b = 0;
      const A = u.length;
      let S = c.length - 1,
        E = A - 1;
      for (; b <= S && b <= E; ) {
        const P = c[b],
          N = (u[b] = v ? Je(u[b]) : Le(u[b]));
        if (ct(P, N)) M(P, N, p, null, g, m, C, x, v);
        else break;
        b++;
      }
      for (; b <= S && b <= E; ) {
        const P = c[S],
          N = (u[E] = v ? Je(u[E]) : Le(u[E]));
        if (ct(P, N)) M(P, N, p, null, g, m, C, x, v);
        else break;
        S--, E--;
      }
      if (b > S) {
        if (b <= E) {
          const P = E + 1,
            N = P < A ? u[P].el : _;
          for (; b <= E; )
            M(null, (u[b] = v ? Je(u[b]) : Le(u[b])), p, N, g, m, C, x, v), b++;
        }
      } else if (b > E) for (; b <= S; ) Oe(c[b], g, m, !0), b++;
      else {
        const P = b,
          N = b,
          q = new Map();
        for (b = N; b <= E; b++) {
          const xe = (u[b] = v ? Je(u[b]) : Le(u[b]));
          xe.key != null && q.set(xe.key, b);
        }
        let j,
          me = 0;
        const _e = E - N + 1;
        let Ie = !1,
          Pe = 0;
        const St = new Array(_e);
        for (b = 0; b < _e; b++) St[b] = 0;
        for (b = P; b <= S; b++) {
          const xe = c[b];
          if (me >= _e) {
            Oe(xe, g, m, !0);
            continue;
          }
          let Fe;
          if (xe.key != null) Fe = q.get(xe.key);
          else
            for (j = N; j <= E; j++)
              if (St[j - N] === 0 && ct(xe, u[j])) {
                Fe = j;
                break;
              }
          Fe === void 0
            ? Oe(xe, g, m, !0)
            : ((St[Fe - N] = b + 1),
              Fe >= Pe ? (Pe = Fe) : (Ie = !0),
              M(xe, u[Fe], p, null, g, m, C, x, v),
              me++);
        }
        const ps = Ie ? Bo(St) : gt;
        for (j = ps.length - 1, b = _e - 1; b >= 0; b--) {
          const xe = N + b,
            Fe = u[xe],
            gs = u[xe + 1],
            ms = xe + 1 < A ? gs.el || gs.placeholder : _;
          St[b] === 0
            ? M(null, Fe, p, ms, g, m, C, x, v)
            : Ie && (j < 0 || b !== ps[j] ? nt(Fe, p, ms, 2) : j--);
        }
      }
    },
    nt = (c, u, p, _, g = null) => {
      const { el: m, type: C, transition: x, children: v, shapeFlag: b } = c;
      if (b & 6) {
        nt(c.component.subTree, u, p, _);
        return;
      }
      if (b & 128) {
        c.suspense.move(u, p, _);
        return;
      }
      if (b & 64) {
        C.move(c, u, p, Ct);
        return;
      }
      if (C === he) {
        s(m, u, p);
        for (let S = 0; S < v.length; S++) nt(v[S], u, p, _);
        s(c.anchor, u, p);
        return;
      }
      if (C === Pn) {
        U(c, u, p);
        return;
      }
      if (_ !== 2 && b & 1 && x)
        if (_ === 0) x.beforeEnter(m), s(m, u, p), Ce(() => x.enter(m), g);
        else {
          const { leave: S, delayLeave: E, afterLeave: P } = x,
            N = () => {
              c.ctx.isUnmounted ? r(m) : s(m, u, p);
            },
            q = () => {
              S(m, () => {
                N(), P && P();
              });
            };
          E ? E(m, N, q) : q();
        }
      else s(m, u, p);
    },
    Oe = (c, u, p, _ = !1, g = !1) => {
      const {
        type: m,
        props: C,
        ref: x,
        children: v,
        dynamicChildren: b,
        shapeFlag: A,
        patchFlag: S,
        dirs: E,
        cacheIndex: P,
      } = c;
      if (
        (S === -2 && (g = !1),
        x != null && (Ue(), Pt(x, null, p, c, !0), Ke()),
        P != null && (u.renderCache[P] = void 0),
        A & 256)
      ) {
        u.ctx.deactivate(c);
        return;
      }
      const N = A & 1 && E,
        q = !yt(c);
      let j;
      if ((q && (j = C && C.onVnodeBeforeUnmount) && Re(j, u, c), A & 6))
        ai(c.component, p, _);
      else {
        if (A & 128) {
          c.suspense.unmount(p, _);
          return;
        }
        N && st(c, null, u, "beforeUnmount"),
          A & 64
            ? c.type.remove(c, u, p, Ct, _)
            : b && !b.hasOnce && (m !== he || (S > 0 && S & 64))
            ? xt(b, u, p, !1, !0)
            : ((m === he && S & 384) || (!g && A & 16)) && xt(v, u, p),
          _ && ds(c);
      }
      ((q && (j = C && C.onVnodeUnmounted)) || N) &&
        Ce(() => {
          j && Re(j, u, c), N && st(c, null, u, "unmounted");
        }, p);
    },
    ds = (c) => {
      const { type: u, el: p, anchor: _, transition: g } = c;
      if (u === he) {
        ui(p, _);
        return;
      }
      if (u === Pn) {
        O(c);
        return;
      }
      const m = () => {
        r(p), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (c.shapeFlag & 1 && g && !g.persisted) {
        const { leave: C, delayLeave: x } = g,
          v = () => C(p, m);
        x ? x(c.el, m, v) : v();
      } else m();
    },
    ui = (c, u) => {
      let p;
      for (; c !== u; ) (p = y(c)), r(c), (c = p);
      r(u);
    },
    ai = (c, u, p) => {
      const {
        bum: _,
        scope: g,
        job: m,
        subTree: C,
        um: x,
        m: v,
        a: b,
        parent: A,
        slots: { __: S },
      } = c;
      As(v),
        As(b),
        _ && xn(_),
        A &&
          I(S) &&
          S.forEach((E) => {
            A.renderCache[E] = void 0;
          }),
        g.stop(),
        m && ((m.flags |= 8), Oe(C, c, u, p)),
        x && Ce(x, u),
        Ce(() => {
          c.isUnmounted = !0;
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve());
    },
    xt = (c, u, p, _ = !1, g = !1, m = 0) => {
      for (let C = m; C < c.length; C++) Oe(c[C], u, p, _, g);
    },
    zt = (c) => {
      if (c.shapeFlag & 6) return zt(c.component.subTree);
      if (c.shapeFlag & 128) return c.suspense.next();
      const u = y(c.anchor || c.el),
        p = u && u[ro];
      return p ? y(p) : u;
    };
  let yn = !1;
  const hs = (c, u, p) => {
      c == null
        ? u._vnode && Oe(u._vnode, null, null, !0)
        : M(u._vnode || null, c, u, null, null, null, p),
        (u._vnode = c),
        yn || ((yn = !0), vs(), wr(), (yn = !1));
    },
    Ct = {
      p: M,
      um: Oe,
      m: nt,
      r: ds,
      mt: ie,
      mc: ge,
      pc: W,
      pbc: B,
      n: zt,
      o: e,
    };
  return { render: hs, hydrate: void 0, createApp: Io(hs) };
}
function On({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function rt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function jo(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Yr(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (I(s) && I(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = Je(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Yr(o, l)),
        l.type === bn && (l.el = o.el),
        l.type === ce && !l.el && (l.el = o.el);
    }
}
function Bo(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const h = e[s];
    if (h !== 0) {
      if (((r = n[n.length - 1]), e[r] < h)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < h ? (i = l + 1) : (o = l);
      h < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
function Qr(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Qr(t);
}
function As(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Vo = Symbol.for("v-scx"),
  Uo = () => Zt(Vo);
function In(e, t, n) {
  return Xr(e, t, n);
}
function Xr(e, t, n = z) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = re({}, n),
    f = (t && s) || (!t && i !== "post");
  let h;
  if (Ut) {
    if (i === "sync") {
      const w = Uo();
      h = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!f) {
      const w = () => {};
      return (w.stop = Ne), (w.resume = Ne), (w.pause = Ne), w;
    }
  }
  const a = pe;
  l.call = (w, F, M) => Ae(w, a, F, M);
  let d = !1;
  i === "post"
    ? (l.scheduler = (w) => {
        Ce(w, a && a.suspense);
      })
    : i !== "sync" &&
      ((d = !0),
      (l.scheduler = (w, F) => {
        F ? w() : os(w);
      })),
    (l.augmentJob = (w) => {
      t && (w.flags |= 4),
        d && ((w.flags |= 2), a && ((w.id = a.uid), (w.i = a)));
    });
  const y = Zi(e, t, l);
  return Ut && (h ? h.push(y) : f && y()), y;
}
function Ko(e, t, n) {
  const s = this.proxy,
    r = X(e) ? (e.includes(".") ? Zr(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  R(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = qt(this),
    l = Xr(r, i.bind(s), n);
  return o(), l;
}
function Zr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const Wo = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Xe(t)}Modifiers`] || e[`${ut(t)}Modifiers`];
function qo(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || z;
  let r = n;
  const i = t.startsWith("update:"),
    o = i && Wo(s, t.slice(7));
  o &&
    (o.trim && (r = n.map((a) => (X(a) ? a.trim() : a))),
    o.number && (r = n.map(_i)));
  let l,
    f = s[(l = vn(t))] || s[(l = vn(Xe(t)))];
  !f && i && (f = s[(l = vn(ut(t)))]), f && Ae(f, e, 6, r);
  const h = s[l + "Once"];
  if (h) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Ae(h, e, 6, r);
  }
}
function ei(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!R(e)) {
    const f = (h) => {
      const a = ei(h, t, !0);
      a && ((l = !0), re(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  return !i && !l
    ? (G(e) && s.set(e, null), null)
    : (I(i) ? i.forEach((f) => (o[f] = null)) : re(o, i),
      G(e) && s.set(e, o),
      o);
}
function _n(e, t) {
  return !e || !fn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      H(e, t[0].toLowerCase() + t.slice(1)) || H(e, ut(t)) || H(e, t));
}
function Os(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: f,
      render: h,
      renderCache: a,
      props: d,
      data: y,
      setupState: w,
      ctx: F,
      inheritAttrs: M,
    } = e,
    Z = on(e);
  let D, V;
  try {
    if (n.shapeFlag & 4) {
      const O = r || s,
        K = O;
      (D = Le(h.call(K, O, a, d, w, y, F))), (V = l);
    } else {
      const O = t;
      (D = Le(
        O.length > 1 ? O(d, { attrs: l, slots: o, emit: f }) : O(d, null)
      )),
        (V = t.props ? l : ko(l));
    }
  } catch (O) {
    (Rt.length = 0), pn(O, e, 1), (D = ne(ce));
  }
  let U = D;
  if (V && M !== !1) {
    const O = Object.keys(V),
      { shapeFlag: K } = U;
    O.length &&
      K & 7 &&
      (i && O.some(Gn) && (V = zo(V, i)), (U = et(U, V, !1, !0)));
  }
  return (
    n.dirs &&
      ((U = et(U, null, !1, !0)),
      (U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Ht(U, n.transition),
    (D = U),
    on(Z),
    D
  );
}
const ko = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || fn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  zo = (e, t) => {
    const n = {};
    for (const s in e) (!Gn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Go(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: f } = t,
    h = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && f >= 0) {
    if (f & 1024) return !0;
    if (f & 16) return s ? Is(s, o, h) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const y = a[d];
        if (o[y] !== s[y] && !_n(h, y)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? Is(s, o, h)
        : !0
      : !!o;
  return !1;
}
function Is(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !_n(n, i)) return !0;
  }
  return !1;
}
function Jo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const ti = (e) => e.__isSuspense;
function Yo(e, t) {
  t && t.pendingBranch
    ? I(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : so(e);
}
const he = Symbol.for("v-fgt"),
  bn = Symbol.for("v-txt"),
  ce = Symbol.for("v-cmt"),
  Pn = Symbol.for("v-stc"),
  Rt = [];
let Se = null;
function ye(e = !1) {
  Rt.push((Se = e ? null : []));
}
function Qo() {
  Rt.pop(), (Se = Rt[Rt.length - 1] || null);
}
let jt = 1;
function Ps(e, t = !1) {
  (jt += e), e < 0 && Se && t && (Se.hasOnce = !0);
}
function ni(e) {
  return (
    (e.dynamicChildren = jt > 0 ? Se || gt : null),
    Qo(),
    jt > 0 && Se && Se.push(e),
    e
  );
}
function je(e, t, n, s, r, i) {
  return ni(oe(e, t, n, s, r, i, !0));
}
function Bt(e, t, n, s, r) {
  return ni(ne(e, t, n, s, r, !0));
}
function Vt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const si = ({ key: e }) => e ?? null,
  en = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? X(e) || fe(e) || R(e)
        ? { i: ve, r: e, k: t, f: !!n }
        : e
      : null
  );
function oe(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === he ? 0 : 1,
  o = !1,
  l = !1
) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && si(t),
    ref: t && en(t),
    scopeId: Er,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ve,
  };
  return (
    l
      ? (fs(f, n), i & 128 && e.normalize(f))
      : n && (f.shapeFlag |= X(n) ? 8 : 16),
    jt > 0 &&
      !o &&
      Se &&
      (f.patchFlag > 0 || i & 6) &&
      f.patchFlag !== 32 &&
      Se.push(f),
    f
  );
}
const ne = Xo;
function Xo(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === yo) && (e = ce), Vt(e))) {
    const l = et(e, t, !0);
    return (
      n && fs(l, n),
      jt > 0 &&
        !i &&
        Se &&
        (l.shapeFlag & 6 ? (Se[Se.indexOf(e)] = l) : Se.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((fl(e) && (e = e.__vccOpts), t)) {
    t = Zo(t);
    let { class: l, style: f } = t;
    l && !X(l) && (t.class = Lt(l)),
      G(f) && (is(f) && !I(f) && (f = re({}, f)), (t.style = Qn(f)));
  }
  const o = X(e) ? 1 : ti(e) ? 128 : Ar(e) ? 64 : G(e) ? 4 : R(e) ? 2 : 0;
  return oe(e, t, n, s, r, o, i, !0);
}
function Zo(e) {
  return e ? (is(e) || Wr(e) ? re({}, e) : e) : null;
}
function et(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e,
    h = t ? tl(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: h,
      key: h && si(h),
      ref:
        t && t.ref
          ? n && i
            ? I(i)
              ? i.concat(en(t))
              : [i, en(t)]
            : en(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== he ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: f,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && et(e.ssContent),
      ssFallback: e.ssFallback && et(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return f && s && Ht(a, f.clone(a)), a;
}
function Mt(e = " ", t = 0) {
  return ne(bn, null, e, t);
}
function el(e = "", t = !1) {
  return t ? (ye(), Bt(ce, null, e)) : ne(ce, null, e);
}
function Le(e) {
  return e == null || typeof e == "boolean"
    ? ne(ce)
    : I(e)
    ? ne(he, null, e.slice())
    : Vt(e)
    ? Je(e)
    : ne(bn, null, String(e));
}
function Je(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : et(e);
}
function fs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (I(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), fs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Wr(t)
        ? (t._ctx = ve)
        : r === 3 &&
          ve &&
          (ve.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    R(t)
      ? ((t = { default: t, _ctx: ve }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Mt(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function tl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Lt([t.class, s.class]));
      else if (r === "style") t.style = Qn([t.style, s.style]);
      else if (fn(r)) {
        const i = t[r],
          o = s[r];
        o &&
          i !== o &&
          !(I(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Re(e, t, n, s = null) {
  Ae(e, t, 7, [n, s]);
}
const nl = Vr();
let sl = 0;
function rl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || nl,
    i = {
      uid: sl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ti(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: kr(s, r),
      emitsOptions: ei(s, r),
      emit: null,
      emitted: null,
      propsDefaults: z,
      inheritAttrs: s.inheritAttrs,
      ctx: z,
      data: z,
      props: z,
      attrs: z,
      slots: z,
      refs: z,
      setupState: z,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = qo.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let pe = null;
const ri = () => pe || ve;
let cn, qn;
{
  const e = dn(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
        }
      );
    };
  (cn = t("__VUE_INSTANCE_SETTERS__", (n) => (pe = n))),
    (qn = t("__VUE_SSR_SETTERS__", (n) => (Ut = n)));
}
const qt = (e) => {
    const t = pe;
    return (
      cn(e),
      e.scope.on(),
      () => {
        e.scope.off(), cn(t);
      }
    );
  },
  Fs = () => {
    pe && pe.scope.off(), cn(null);
  };
function ii(e) {
  return e.vnode.shapeFlag & 4;
}
let Ut = !1;
function il(e, t = !1, n = !1) {
  t && qn(t);
  const { props: s, children: r } = e.vnode,
    i = ii(e);
  Fo(e, s, i, t), No(e, r, n || t);
  const o = i ? ol(e, t) : void 0;
  return t && qn(!1), o;
}
function ol(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Co));
  const { setup: s } = n;
  if (s) {
    Ue();
    const r = (e.setupContext = s.length > 1 ? cl(e) : null),
      i = qt(e),
      o = Wt(s, e, 0, [e.props, r]),
      l = Xs(o);
    if ((Ke(), i(), (l || e.sp) && !yt(e) && Mr(e), l)) {
      if ((o.then(Fs, Fs), t))
        return o
          .then((f) => {
            Rs(e, f);
          })
          .catch((f) => {
            pn(f, e, 0);
          });
      e.asyncDep = o;
    } else Rs(e, o);
  } else oi(e);
}
function Rs(e, t, n) {
  R(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : G(t) && (e.setupState = xr(t)),
    oi(e);
}
function oi(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ne);
  {
    const r = qt(e);
    Ue();
    try {
      So(e);
    } finally {
      Ke(), r();
    }
  }
}
const ll = {
  get(e, t) {
    return le(e, "get", ""), e[t];
  },
};
function cl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ll),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function us(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(xr(ki(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Ft) return Ft[n](e);
          },
          has(t, n) {
            return n in t || n in Ft;
          },
        }))
    : e.proxy;
}
function fl(e) {
  return R(e) && "__vccOpts" in e;
}
const ul = (e, t) => Qi(e, t, Ut);
function al(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? G(t) && !I(t)
      ? Vt(t)
        ? ne(e, null, [t])
        : ne(e, t)
      : ne(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Vt(n) && (n = [n]),
      ne(e, t, n));
}
const dl = "3.5.18";
/**
 * @vue/runtime-dom v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let kn;
const Ms = typeof window < "u" && window.trustedTypes;
if (Ms)
  try {
    kn = Ms.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const li = kn ? (e) => kn.createHTML(e) : (e) => e,
  hl = "http://www.w3.org/2000/svg",
  pl = "http://www.w3.org/1998/Math/MathML",
  Be = typeof document < "u" ? document : null,
  Ls = Be && Be.createElement("template"),
  gl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? Be.createElementNS(hl, e)
          : t === "mathml"
          ? Be.createElementNS(pl, e)
          : n
          ? Be.createElement(e, { is: n })
          : Be.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => Be.createTextNode(e),
    createComment: (e) => Be.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Be.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Ls.innerHTML = li(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const l = Ls.content;
        if (s === "svg" || s === "mathml") {
          const f = l.firstChild;
          for (; f.firstChild; ) l.appendChild(f.firstChild);
          l.removeChild(f);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  ke = "transition",
  Tt = "animation",
  Kt = Symbol("_vtc"),
  ci = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  ml = re({}, Or, ci),
  _l = (e) => ((e.displayName = "Transition"), (e.props = ml), e),
  Fn = _l((e, { slots: t }) => al(lo, bl(e), t)),
  it = (e, t = []) => {
    I(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ns = (e) => (e ? (I(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function bl(e) {
  const t = {};
  for (const T in e) T in ci || (t[T] = e[T]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: f = i,
      appearActiveClass: h = o,
      appearToClass: a = l,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: y = `${n}-leave-active`,
      leaveToClass: w = `${n}-leave-to`,
    } = e,
    F = yl(r),
    M = F && F[0],
    Z = F && F[1],
    {
      onBeforeEnter: D,
      onEnter: V,
      onEnterCancelled: U,
      onLeave: O,
      onLeaveCancelled: K,
      onBeforeAppear: ee = D,
      onAppear: ue = V,
      onAppearCancelled: ge = U,
    } = t,
    L = (T, J, ie, De) => {
      (T._enterCancelled = De), ot(T, J ? a : l), ot(T, J ? h : o), ie && ie();
    },
    B = (T, J) => {
      (T._isLeaving = !1), ot(T, d), ot(T, w), ot(T, y), J && J();
    },
    Y = (T) => (J, ie) => {
      const De = T ? ue : V,
        te = () => L(J, T, ie);
      it(De, [J, te]),
        Ds(() => {
          ot(J, T ? f : i), He(J, T ? a : l), Ns(De) || $s(J, s, M, te);
        });
    };
  return re(t, {
    onBeforeEnter(T) {
      it(D, [T]), He(T, i), He(T, o);
    },
    onBeforeAppear(T) {
      it(ee, [T]), He(T, f), He(T, h);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(T, J) {
      T._isLeaving = !0;
      const ie = () => B(T, J);
      He(T, d),
        T._enterCancelled ? (He(T, y), Bs()) : (Bs(), He(T, y)),
        Ds(() => {
          T._isLeaving && (ot(T, d), He(T, w), Ns(O) || $s(T, s, Z, ie));
        }),
        it(O, [T, ie]);
    },
    onEnterCancelled(T) {
      L(T, !1, void 0, !0), it(U, [T]);
    },
    onAppearCancelled(T) {
      L(T, !0, void 0, !0), it(ge, [T]);
    },
    onLeaveCancelled(T) {
      B(T), it(K, [T]);
    },
  });
}
function yl(e) {
  if (e == null) return null;
  if (G(e)) return [Rn(e.enter), Rn(e.leave)];
  {
    const t = Rn(e);
    return [t, t];
  }
}
function Rn(e) {
  return bi(e);
}
function He(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Kt] || (e[Kt] = new Set())).add(t);
}
function ot(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Kt];
  n && (n.delete(t), n.size || (e[Kt] = void 0));
}
function Ds(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let vl = 0;
function $s(e, t, n, s) {
  const r = (e._endId = ++vl),
    i = () => {
      r === e._endId && s();
    };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: l, propCount: f } = xl(e, t);
  if (!o) return s();
  const h = o + "end";
  let a = 0;
  const d = () => {
      e.removeEventListener(h, y), i();
    },
    y = (w) => {
      w.target === e && ++a >= f && d();
    };
  setTimeout(() => {
    a < f && d();
  }, l + 1),
    e.addEventListener(h, y);
}
function xl(e, t) {
  const n = window.getComputedStyle(e),
    s = (F) => (n[F] || "").split(", "),
    r = s(`${ke}Delay`),
    i = s(`${ke}Duration`),
    o = Hs(r, i),
    l = s(`${Tt}Delay`),
    f = s(`${Tt}Duration`),
    h = Hs(l, f);
  let a = null,
    d = 0,
    y = 0;
  t === ke
    ? o > 0 && ((a = ke), (d = o), (y = i.length))
    : t === Tt
    ? h > 0 && ((a = Tt), (d = h), (y = f.length))
    : ((d = Math.max(o, h)),
      (a = d > 0 ? (o > h ? ke : Tt) : null),
      (y = a ? (a === ke ? i.length : f.length) : 0));
  const w =
    a === ke && /\b(transform|all)(,|$)/.test(s(`${ke}Property`).toString());
  return { type: a, timeout: d, propCount: y, hasTransform: w };
}
function Hs(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => js(n) + js(e[s])));
}
function js(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Bs() {
  return document.body.offsetHeight;
}
function Cl(e, t, n) {
  const s = e[Kt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Vs = Symbol("_vod"),
  Sl = Symbol("_vsh"),
  wl = Symbol(""),
  Tl = /(^|;)\s*display\s*:/;
function El(e, t, n) {
  const s = e.style,
    r = X(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (X(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && tn(s, l, "");
        }
      else for (const o in t) n[o] == null && tn(s, o, "");
    for (const o in n) o === "display" && (i = !0), tn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[wl];
      o && (n += ";" + o), (s.cssText = n), (i = Tl.test(n));
    }
  } else t && e.removeAttribute("style");
  Vs in e && ((e[Vs] = i ? s.display : ""), e[Sl] && (s.display = "none"));
}
const Us = /\s*!important$/;
function tn(e, t, n) {
  if (I(n)) n.forEach((s) => tn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Al(e, t);
    Us.test(n)
      ? e.setProperty(ut(s), n.replace(Us, ""), "important")
      : (e[s] = n);
  }
}
const Ks = ["Webkit", "Moz", "ms"],
  Mn = {};
function Al(e, t) {
  const n = Mn[t];
  if (n) return n;
  let s = Xe(t);
  if (s !== "filter" && s in e) return (Mn[t] = s);
  s = tr(s);
  for (let r = 0; r < Ks.length; r++) {
    const i = Ks[r] + s;
    if (i in e) return (Mn[t] = i);
  }
  return t;
}
const Ws = "http://www.w3.org/1999/xlink";
function qs(e, t, n, s, r, i = wi(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Ws, t.slice(6, t.length))
      : e.setAttributeNS(Ws, t, n)
    : n == null || (i && !nr(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, i ? "" : We(n) ? String(n) : n);
}
function ks(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? li(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      f = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (l !== f || !("_value" in e)) && (e.value = f),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = nr(n))
      : n == null && l === "string"
      ? ((n = ""), (o = !0))
      : l === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(r || t);
}
function Ol(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Il(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const zs = Symbol("_vei");
function Pl(e, t, n, s, r = null) {
  const i = e[zs] || (e[zs] = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, f] = Fl(t);
    if (s) {
      const h = (i[t] = Ll(s, r));
      Ol(e, l, h, f);
    } else o && (Il(e, l, o, f), (i[t] = void 0));
  }
}
const Gs = /(?:Once|Passive|Capture)$/;
function Fl(e) {
  let t;
  if (Gs.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Gs)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : ut(e.slice(2)), t];
}
let Ln = 0;
const Rl = Promise.resolve(),
  Ml = () => Ln || (Rl.then(() => (Ln = 0)), (Ln = Date.now()));
function Ll(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Ae(Nl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Ml()), n;
}
function Nl(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Js = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Dl = (e, t, n, s, r, i) => {
    const o = r === "svg";
    t === "class"
      ? Cl(e, s, o)
      : t === "style"
      ? El(e, n, s)
      : fn(t)
      ? Gn(t) || Pl(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : $l(e, t, s, o)
        )
      ? (ks(e, t, s),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          qs(e, t, s, o, i, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !X(s))
      ? ks(e, Xe(t), s, i, t)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        qs(e, t, s, o));
  };
function $l(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Js(t) && R(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Js(t) && X(n) ? !1 : t in e;
}
const Hl = re({ patchProp: Dl }, gl);
let Ys;
function jl() {
  return Ys || (Ys = $o(Hl));
}
const Bl = (...e) => {
  const t = jl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = Ul(s);
      if (!r) return;
      const i = t._component;
      !R(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
      const o = n(r, !1, Vl(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function Vl(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ul(e) {
  return X(e) ? document.querySelector(e) : e;
}
const as = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  Kl = {},
  Wl = { class: "button" };
function ql(e, t) {
  return ye(), je("button", Wl, [xo(e.$slots, "default", {}, void 0)]);
}
const fi = as(Kl, [
    ["render", ql],
    ["__scopeId", "data-v-803eec6b"],
  ]),
  kl = { class: "start-page" },
  zl = {
    __name: "StartPage",
    emits: ["start"],
    setup(e, { emit: t }) {
      const n = t;
      return (s, r) => (
        ye(),
        je("div", kl, [
          ne(
            fi,
            { onClick: r[0] || (r[0] = (i) => n("start")) },
            {
              default: pt(() => r[1] || (r[1] = [Mt("НАЧАТЬ", -1)])),
              _: 1,
              __: [1],
            }
          ),
        ])
      );
    },
  },
  Gl = as(zl, [["__scopeId", "data-v-554c265d"]]);
async function Jl() {
  const e = new Audio("./music.mp3");
  (e.loop = !0), (e.volume = 0.5), e.play().catch(() => {});
  const t = document.documentElement;
  t.requestFullscreen
    ? await t.requestFullscreen()
    : t.webkitRequestFullscreen && (await t.webkitRequestFullscreen());
  const n = document.createElement("div");
  (n.style.position = "fixed"),
    (n.style.top = "0"),
    (n.style.left = "0"),
    (n.style.width = "100vw"),
    (n.style.height = "100vh"),
    (n.style.zIndex = "999999"),
    (n.style.display = "flex"),
    (n.style.alignItems = "center"),
    (n.style.justifyContent = "center"),
    (n.style.color = "white"),
    (n.style.fontSize = "5rem"),
    (n.style.textAlign = "center"),
    (n.style.background =
      "linear-gradient(270deg, red, orange, yellow, green, cyan, blue, violet)"),
    (n.style.backgroundSize = "1400% 1400%"),
    (n.style.animation = "rainbowShift 8s ease infinite"),
    (n.innerText = `Надо радоваться,
не надо напрягаться`),
    document.body.appendChild(n);
  const s = document.createElement("style");
  (s.innerHTML = `
      @keyframes rainbowShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `),
    document.head.appendChild(s);
  const r = async () => {
    n.parentNode && n.remove(),
      s.remove(),
      e.pause(),
      (e.currentTime = 0),
      (document.fullscreenElement || document.webkitFullscreenElement) &&
        (document.exitFullscreen
          ? await document.exitFullscreen().catch(() => {})
          : document.webkitExitFullscreen &&
            (await document.webkitExitFullscreen().catch(() => {}))),
      document.removeEventListener("keydown", i);
  };
  n.addEventListener("click", r);
  const i = (o) => {
    o.key === "Escape" && r();
  };
  document.addEventListener("keydown", i);
}
const Yl = { class: "app" },
  Ql = { key: 1 },
  Xl = { class: "quiz-question" },
  Zl = { class: "quiz-answers" },
  ec = ["onClick"],
  tc = { key: 0, class: "quiz-explanation" },
  nc = { key: 1, class: "container__final" },
  sc = { class: "row" },
  rc = { class: "bad text-bar btn" },
  ic = {
    __name: "App",
    setup(e) {
      const t = dt(!0),
        n = dt([
          {
            question:
              "Вопрос №1: Выберите корректную формулировку заявления: сотрудник подает заявление об увольнении по собственному желанию. Какая из формулировок защитит работодателя от рисков?",
            answers: [
              {
                text: "Прошу уволить меня по собственному желанию с 20 сентября 2025 года.Дата подачи заявления: 6 сентября 2025 года. Подпись",
                isCorrect: !0,
                explanation:
                  "Верно! Указана конкретная дата увольнения, соблюден двухнедельный срок предупреждения, статья 80 ТК РФ.",
              },
              {
                text: "Хочу уволиться как можно скорее, потому что здесь больше работать невозможно",
                isCorrect: !1,
                explanation:
                  "Не верно! Нет даты увольнения и эмоциональная формулировка может быть расценена как принуждение",
              },
              {
                text: "Прошу расторгнуть трудовой договор по собственному желанию в связи с переездом в другой город с 10 октября 2025 года",
                isCorrect: !0,
                explanation:
                  "Верно! Указана причина увольнения (это не обязательно, но снижает риски) и есть дата увольнения ",
              },
            ],
          },
          {
            question:
              "Вопрос №2: Сотрудник подал заявление об увольнении, но через пять дней передумал и отозвал его. Приказ еще не издан. Как правильно поступить?",
            answers: [
              {
                text: "Принять отзыв и продолжить трудовые отношения, так как срок предупреждения не истек",
                isCorrect: !0,
                explanation:
                  "Верно! Работник имеет право отозвать заявление в любой срок до даты увольнения, часть 4 статьи 80 ТК РФ",
              },
              {
                text: "Уволить сотрудника, потому что заявление уже подано, а отзыв — это просто его желание",
                isCorrect: !1,
                explanation:
                  "Не верно! Это нарушение ТК РФ. Суд восстановит работника в случае трудового спора",
              },
              {
                text: "Игнорировать отзыв, если работодатель уже начал оформление приказа",
                isCorrect: !1,
                explanation:
                  "Не верно! Момент отзыва заявления важнее, чем этап оформления документов",
              },
            ],
          },
          {
            question:
              "Вопрос №3: В приказе об увольнении написано: «Уволить Сидорову И.К. по собственному желанию с 1 ноября 2025 года. Основание приказа устное заявление.» Что не так в приказе?",
            answers: [
              {
                text: "Устное заявление не является основанием для увольнения, нужно получить от работника письменное заявление",
                isCorrect: !0,
                explanation:
                  "Верно! ТК РФ требует письменного волеизъявления работника",
              },
              {
                text: "Все правильно: если работник устно попросил, можно оформить приказ",
                isCorrect: !1,
                explanation:
                  "Не верно! Без письменного заявления увольнение будет незаконно, статья 80 ТК РФ",
              },
              {
                text: "Можно уволить, но только если есть свидетели устного заявления",
                isCorrect: !1,
                explanation:
                  "Не верно! Свидетельские показания не заменяют письменный документ",
              },
            ],
          },
        ]),
        s = dt(0),
        r = dt(null),
        i = dt(!1),
        o = dt(null),
        l = (a) => {
          r.value === null &&
            ((i.value = a.isCorrect), (r.value = a.explanation), (o.value = a));
        },
        f = () => {
          (s.value += 1), (r.value = null), (i.value = !1), (o.value = null);
        },
        h = () => {
          location.reload();
        };
      return (a, d) => (
        ye(),
        je(
          he,
          null,
          [
            oe("div", Yl, [
              ne(
                Fn,
                { mode: "out-in" },
                {
                  default: pt(() => [
                    t.value
                      ? (ye(),
                        je("div", Ql, [
                          ne(
                            Fn,
                            { mode: "out-in" },
                            {
                              default: pt(() => [
                                (ye(),
                                je(
                                  "div",
                                  { key: s.value, class: "quiz-container" },
                                  [
                                    oe("div", Xl, [
                                      oe(
                                        "h2",
                                        null,
                                        Xt(n.value[s.value].question),
                                        1
                                      ),
                                    ]),
                                    oe("div", Zl, [
                                      (ye(!0),
                                      je(
                                        he,
                                        null,
                                        vo(
                                          n.value[s.value].answers,
                                          (y) => (
                                            ye(),
                                            je(
                                              "div",
                                              {
                                                class: Lt([
                                                  "quiz-answer",
                                                  {
                                                    "selected-answer":
                                                      o.value === y,
                                                  },
                                                ]),
                                                key: y.text,
                                                onClick: (w) => l(y),
                                              },
                                              [oe("p", null, Xt(y.text), 1)],
                                              10,
                                              ec
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ]),
                                    ne(
                                      Fn,
                                      { mode: "out-in" },
                                      {
                                        default: pt(() => [
                                          r.value !== null
                                            ? (ye(),
                                              je("div", tc, [
                                                oe(
                                                  "p",
                                                  {
                                                    class: Lt(
                                                      i.value ? "good" : "bad"
                                                    ),
                                                  },
                                                  Xt(r.value),
                                                  3
                                                ),
                                                n.value.length !== s.value + 1
                                                  ? (ye(),
                                                    Bt(
                                                      fi,
                                                      { key: 0, onClick: f },
                                                      {
                                                        default: pt(
                                                          () =>
                                                            d[2] ||
                                                            (d[2] = [
                                                              Mt(
                                                                "СЛЕДУЮЩИЙ ВОПРОС",
                                                                -1
                                                              ),
                                                            ])
                                                        ),
                                                        _: 1,
                                                        __: [2],
                                                      }
                                                    ))
                                                  : (ye(),
                                                    je("div", nc, [
                                                      d[3] ||
                                                        (d[3] = oe(
                                                          "div",
                                                          {
                                                            class:
                                                              "text-bar blue",
                                                          },
                                                          [
                                                            Mt(
                                                              " НАЖМИТЕ ПОСЛЕ ОТВЕТА "
                                                            ),
                                                            oe("br"),
                                                            Mt(
                                                              " НА ЭТОТ ВОПРОС "
                                                            ),
                                                          ],
                                                          -1
                                                        )),
                                                      oe("div", sc, [
                                                        oe(
                                                          "div",
                                                          {
                                                            class:
                                                              "good text-bar btn",
                                                          },
                                                          [
                                                            oe(
                                                              "div",
                                                              { onClick: h },
                                                              "ХОТИТЕ ПОПРОБОВАТЬ СНОВА?"
                                                            ),
                                                          ]
                                                        ),
                                                        oe("div", rc, [
                                                          oe(
                                                            "div",
                                                            {
                                                              onClick:
                                                                d[1] ||
                                                                (d[1] = (y) =>
                                                                  vr(Jl)()),
                                                            },
                                                            " ЗАКОНЧИТЬ ТРЕНИРОВКУ "
                                                          ),
                                                        ]),
                                                      ]),
                                                    ])),
                                              ]))
                                            : el("", !0),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]
                                )),
                              ]),
                              _: 1,
                            }
                          ),
                        ]))
                      : (ye(),
                        Bt(Gl, {
                          key: 0,
                          onStart: d[0] || (d[0] = (y) => (t.value = !0)),
                        })),
                  ]),
                  _: 1,
                }
              ),
            ]),
            d[4] || (d[4] = oe("footer", null, null, -1)),
          ],
          64
        )
      );
    },
  },
  oc = as(ic, [["__scopeId", "data-v-26a813fc"]]);
Bl(oc).mount("#app");
