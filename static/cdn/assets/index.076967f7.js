const ee = function () {
	const t = document.createElement('link').relList
	if (t && t.supports && t.supports('modulepreload')) return
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
	new MutationObserver((r) => {
		for (const o of r)
			if (o.type === 'childList')
				for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(r) {
		const o = {}
		return (
			r.integrity && (o.integrity = r.integrity),
			r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
			r.crossorigin === 'use-credentials'
				? (o.credentials = 'include')
				: r.crossorigin === 'anonymous'
				? (o.credentials = 'omit')
				: (o.credentials = 'same-origin'),
			o
		)
	}
	function s(r) {
		if (r.ep) return
		r.ep = !0
		const o = n(r)
		fetch(r.href, o)
	}
}
ee()
function j() {}
function te(e, t) {
	for (const n in t) e[n] = t[n]
	return e
}
function V(e) {
	return e()
}
function G() {
	return Object.create(null)
}
function w(e) {
	e.forEach(V)
}
function ne(e) {
	return typeof e == 'function'
}
function H(e, t) {
	return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function'
}
function re(e) {
	return Object.keys(e).length === 0
}
function se(e, t, n, s) {
	if (e) {
		const r = W(e, t, n, s)
		return e[0](r)
	}
}
function W(e, t, n, s) {
	return e[1] && s ? te(n.ctx.slice(), e[1](s(t))) : n.ctx
}
function oe(e, t, n, s) {
	if (e[2] && s) {
		const r = e[2](s(n))
		if (t.dirty === void 0) return r
		if (typeof r == 'object') {
			const o = [],
				i = Math.max(t.dirty.length, r.length)
			for (let l = 0; l < i; l += 1) o[l] = t.dirty[l] | r[l]
			return o
		}
		return t.dirty | r
	}
	return t.dirty
}
function ie(e, t, n, s, r, o) {
	if (r) {
		const i = W(t, n, s, o)
		e.p(i, r)
	}
}
function le(e) {
	if (e.ctx.length > 32) {
		const t = [],
			n = e.ctx.length / 32
		for (let s = 0; s < n; s++) t[s] = -1
		return t
	}
	return -1
}
function K(e) {
	return e == null ? '' : e
}
function _(e, t) {
	e.appendChild(t)
}
function A(e, t, n) {
	e.insertBefore(t, n || null)
}
function $(e) {
	e.parentNode.removeChild(e)
}
function m(e) {
	return document.createElement(e)
}
function X(e) {
	return document.createTextNode(e)
}
function k() {
	return X(' ')
}
function J(e, t, n, s) {
	return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s)
}
function ce(e) {
	return function (t) {
		return t.preventDefault(), e.call(this, t)
	}
}
function a(e, t, n) {
	n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
function ue(e) {
	return Array.from(e.childNodes)
}
function Q(e, t) {
	e.value = t == null ? '' : t
}
let z
function x(e) {
	z = e
}
const y = [],
	R = [],
	L = [],
	U = [],
	ae = Promise.resolve()
let O = !1
function fe() {
	O || ((O = !0), ae.then(Y))
}
function S(e) {
	L.push(e)
}
const N = new Set()
let E = 0
function Y() {
	const e = z
	do {
		for (; E < y.length; ) {
			const t = y[E]
			E++, x(t), de(t.$$)
		}
		for (x(null), y.length = 0, E = 0; R.length; ) R.pop()()
		for (let t = 0; t < L.length; t += 1) {
			const n = L[t]
			N.has(n) || (N.add(n), n())
		}
		L.length = 0
	} while (y.length)
	for (; U.length; ) U.pop()()
	;(O = !1), N.clear(), x(e)
}
function de(e) {
	if (e.fragment !== null) {
		e.update(), w(e.before_update)
		const t = e.dirty
		;(e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(S)
	}
}
const q = new Set()
let ge
function M(e, t) {
	e && e.i && (q.delete(e), e.i(t))
}
function B(e, t, n, s) {
	if (e && e.o) {
		if (q.has(e)) return
		q.add(e),
			ge.c.push(() => {
				q.delete(e), s && (n && e.d(1), s())
			}),
			e.o(t)
	}
}
function Z(e) {
	e && e.c()
}
function C(e, t, n, s) {
	const { fragment: r, on_mount: o, on_destroy: i, after_update: l } = e.$$
	r && r.m(t, n),
		s ||
			S(() => {
				const u = o.map(V).filter(ne)
				i ? i.push(...u) : w(u), (e.$$.on_mount = [])
			}),
		l.forEach(S)
}
function T(e, t) {
	const n = e.$$
	n.fragment !== null &&
		(w(n.on_destroy),
		n.fragment && n.fragment.d(t),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []))
}
function pe(e, t) {
	e.$$.dirty[0] === -1 && (y.push(e), fe(), e.$$.dirty.fill(0)),
		(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31)
}
function P(e, t, n, s, r, o, i, l = [-1]) {
	const u = z
	x(e)
	const c = (e.$$ = {
		fragment: null,
		ctx: null,
		props: o,
		update: j,
		not_equal: r,
		bound: G(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(t.context || (u ? u.$$.context : [])),
		callbacks: G(),
		dirty: l,
		skip_bound: !1,
		root: t.target || u.$$.root
	})
	i && i(c.root)
	let f = !1
	if (
		((c.ctx = n
			? n(e, t.props || {}, (d, p, ...h) => {
					const v = h.length ? h[0] : p
					return (
						c.ctx &&
							r(c.ctx[d], (c.ctx[d] = v)) &&
							(!c.skip_bound && c.bound[d] && c.bound[d](v), f && pe(e, d)),
						p
					)
			  })
			: []),
		c.update(),
		(f = !0),
		w(c.before_update),
		(c.fragment = s ? s(c.ctx) : !1),
		t.target)
	) {
		if (t.hydrate) {
			const d = ue(t.target)
			c.fragment && c.fragment.l(d), d.forEach($)
		} else c.fragment && c.fragment.c()
		t.intro && M(e.$$.fragment), C(e, t.target, t.anchor, t.customElement), Y()
	}
	x(u)
}
class D {
	$destroy() {
		T(this, 1), (this.$destroy = j)
	}
	$on(t, n) {
		const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
		return (
			s.push(n),
			() => {
				const r = s.indexOf(n)
				r !== -1 && s.splice(r, 1)
			}
		)
	}
	$set(t) {
		this.$$set && !re(t) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1))
	}
}
function _e(e) {
	let t, n, s
	const r = e[4].default,
		o = se(r, e, e[3], null)
	return {
		c() {
			;(t = m('button')),
				o && o.c(),
				a(t, 'class', (n = K(`gcdn__btn gcdn__btn-${e[0]}`) + ' svelte-1qurfui')),
				a(t, 'style', e[2]),
				a(t, 'type', e[1])
		},
		m(i, l) {
			A(i, t, l), o && o.m(t, null), (s = !0)
		},
		p(i, [l]) {
			o && o.p && (!s || l & 8) && ie(o, r, i, i[3], s ? oe(r, i[3], l, null) : le(i[3]), null),
				(!s || (l & 1 && n !== (n = K(`gcdn__btn gcdn__btn-${i[0]}`) + ' svelte-1qurfui'))) &&
					a(t, 'class', n),
				(!s || l & 4) && a(t, 'style', i[2]),
				(!s || l & 2) && a(t, 'type', i[1])
		},
		i(i) {
			s || (M(o, i), (s = !0))
		},
		o(i) {
			B(o, i), (s = !1)
		},
		d(i) {
			i && $(t), o && o.d(i)
		}
	}
}
function me(e, t, n) {
	let { $$slots: s = {}, $$scope: r } = t,
		{ variant: o = 'primary' } = t,
		{ type: i = 'button' } = t,
		{ style: l = '' } = t
	return (
		(e.$$set = (u) => {
			'variant' in u && n(0, (o = u.variant)),
				'type' in u && n(1, (i = u.type)),
				'style' in u && n(2, (l = u.style)),
				'$$scope' in u && n(3, (r = u.$$scope))
		}),
		[o, i, l, r, s]
	)
}
class he extends D {
	constructor(t) {
		super(), P(this, t, me, _e, H, { variant: 0, type: 1, style: 2 })
	}
}
function ve(e) {
	let t
	return {
		c() {
			t = X('Submit')
		},
		m(n, s) {
			A(n, t, s)
		},
		d(n) {
			n && $(t)
		}
	}
}
function be(e) {
	let t, n, s, r, o, i, l, u, c, f, d, p, h, v, I
	return (
		(p = new he({
			props: {
				type: 'submit',
				style: 'display: block; width: 250px;',
				$$slots: { default: [ve] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				;(t = m('div')),
					(n = m('div')),
					(n.innerHTML =
						'<img class="gcdn__svg-image svelte-gsgp13" src="https://giridhar7632.pages.dev/assets/man.svg" alt=""/>'),
					(s = k()),
					(r = m('div')),
					(o = m('h1')),
					(o.innerHTML = 'Hey! <span style="color: #ee5253;">Giridhar</span> \u{1F44B}'),
					(i = k()),
					(l = m('h2')),
					(l.innerHTML = `Enter <span style="font-weight: 700;">the magical words</span> to access your
      CDN!`),
					(u = k()),
					(c = m('form')),
					(f = m('input')),
					(d = k()),
					Z(p.$$.fragment),
					a(n, 'class', 'gcdn__image svelte-gsgp13'),
					a(o, 'class', 'gcdn__greeting svelte-gsgp13'),
					a(l, 'class', 'gcdn__instruction svelte-gsgp13'),
					a(f, 'type', 'password'),
					a(f, 'class', 'gcdn__input svelte-gsgp13'),
					a(f, 'placeholder', 'Super secret \u2728'),
					a(c, 'class', 'gcdn__input-form svelte-gsgp13'),
					a(r, 'class', 'gcdn__welcome svelte-gsgp13'),
					a(t, 'class', 'gcdn__container svelte-gsgp13')
			},
			m(g, b) {
				A(g, t, b),
					_(t, n),
					_(t, s),
					_(t, r),
					_(r, o),
					_(r, i),
					_(r, l),
					_(r, u),
					_(r, c),
					_(c, f),
					Q(f, e[0]),
					_(c, d),
					C(p, c, null),
					(h = !0),
					v || ((I = [J(f, 'input', e[2]), J(c, 'submit', ce(e[1]))]), (v = !0))
			},
			p(g, [b]) {
				b & 1 && f.value !== g[0] && Q(f, g[0])
				const F = {}
				b & 8 && (F.$$scope = { dirty: b, ctx: g }), p.$set(F)
			},
			i(g) {
				h || (M(p.$$.fragment, g), (h = !0))
			},
			o(g) {
				B(p.$$.fragment, g), (h = !1)
			},
			d(g) {
				g && $(t), T(p), (v = !1), w(I)
			}
		}
	)
}
function ye(e, t, n) {
	let s = ''
	const r = () => console.log(s)
	function o() {
		;(s = this.value), n(0, s)
	}
	return [s, r, o]
}
class xe extends D {
	constructor(t) {
		super(), P(this, t, ye, be, H, {})
	}
}
function we(e) {
	let t, n, s
	return (
		(n = new xe({})),
		{
			c() {
				;(t = m('main')), Z(n.$$.fragment), a(t, 'class', 'svelte-1wpth4')
			},
			m(r, o) {
				A(r, t, o), C(n, t, null), (s = !0)
			},
			p: j,
			i(r) {
				s || (M(n.$$.fragment, r), (s = !0))
			},
			o(r) {
				B(n.$$.fragment, r), (s = !1)
			},
			d(r) {
				r && $(t), T(n)
			}
		}
	)
}
class $e extends D {
	constructor(t) {
		super(), P(this, t, null, we, H, {})
	}
}
new $e({ target: document.getElementById('app') })
