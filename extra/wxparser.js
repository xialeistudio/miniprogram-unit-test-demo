module.exports = function(e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var o = r[n] = {exports: {}, id: n, loaded: !1};
      return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
    }
  
    var r = {};
    return t.m = e, t.c = r, t.p = '', t(0);
  }([
    function(e, t, r) {
      var n = r(1), o = r(3), i = r(4), a = r(5), s = r(14), l = r(15), u = r(18), f = r(21), c = r(20), _ = r(22),
          p = r(23), h = r(19), d = r(16), v = r(24), m = r(2), g = r(25);
      t.FreeTmpl = g, t.precompileTemplate = g.precompiler ? g.precompiler.compile : null, t.precompiler = g.precompiler
          ? g.precompiler
          : null, t.HtmlLLParser = g.htmlParser
          ? g.htmlParser
          : null, t.dataPath = a, t.dataUtils = o, t.Event = i, t.Element = l, t.TextNode = f, t.NativeNode = c, t.VirtualNode = _, t.ShadowRoot = p, t.Behavior = s, t.Component = u, t.Observer = d, t.DataGroup = h, t.ElementIterator = v, t.registerBehavior = s.create, t.registerElement = u.register, t.createElement = u.create, t.createTextNode = f.create, t.createVirtualNode = _.create, t.appendChild = l.appendChild, t.insertBefore = l.insertBefore, t.removeChild = l.removeChild, t.replaceChild = l.replaceChild, t.addListenerToElement = i.addListenerToElement, t.removeListenerFromElement = i.removeListenerFromElement, t.triggerEvent = i.triggerEvent, t.safeCallback = n.safeCallback, t.addGlobalErrorListener = n.addGlobalErrorListener, t.removeGlobalErrorListener = n.removeGlobalErrorListener, t.globalOptions = m, u._setDefaultTemplateEngine(
          g);
      var b = t.updateDefaultComponent = function() {
        delete u._list[''], u.register({
          is: '',
          options: {
            writeOnly: !0,
            allowInWriteOnly: !0,
            lazyRegistration: !1,
            classPrefix: '',
            addGlobalClass: !1,
            templateEngine: null,
            renderingMode: 'full',
            multipleSlots: !1,
            reflectToAttributes: !1,
          },
        });
      };
      b();
      var w = function(e) {
        var t = '';
        if (e instanceof exparser.Element &&
        (e.id && (t += ' id="' + e.id + '"'), e.slot && (t += ' slot="' + e.slot + '"'), e.__slotName &&
        (t += ' name="' + e.__slotName + '"'), e.classList && (t += ' class="' + e.class + '"'), e.$$ &&
        e.$$.getAttribute('style') && (t += ' style="' + e.$$.getAttribute('style') + '"')), e instanceof
        exparser.VirtualNode) return t;
        if (e instanceof exparser.Component) return u.listPublicProperties(e).
            forEach(function(r) {t += ' ' + r + '=' + JSON.stringify(e[r]);}), t;
        for (var r = e.attributes, n = 0; n < r.length; n++) t += ' ' + r[n].name + '="' + r[n].value + '"';
        return t;
      }, y = t.dumpElementToString = function(e, t, r) {
        var n = null;
        m.hasDOMBackend && (n = window);
        var o = 0;
        r = r || 0;
        var i = '';
        for (o = r; o; o--) i += '  ';
        var a = '';
        if (e instanceof exparser.Element) a += i + '<' + (e.$$ ? e.$$.tagName.toLowerCase() + ':' : '') + e.is + w(e) +
            '>', a += e instanceof exparser.VirtualNode ? ' [Exp-Virtual]' : e instanceof exparser.NativeNode
            ? ' [Exp-Native]'
            : ' [Exp-Component]', a += '\n' + y(t ? e.__wxSlotChildren : e.childNodes, t, r + 1); else if (e instanceof
            exparser.TextNode) a += i + e.textContent + ' [Exp-Text]\n'; else if (n && n.HTMLElement && e instanceof
            n.HTMLElement) a += i + '<' + e.tagName.toLowerCase() + w(e) + '> [DOM-Element]', a += '\n' +
            y(t ? e.__wxSlotChildren || e.childNodes : e.childNodes, t, r + 1); else if (n && n.Text && e instanceof
            n.Text) a += i + e.textContent + ' [DOM-Text]\n'; else if (void 0 !== e.length) for (o = 0; o <
        e.length; o++) a += y(e[o], t, r); else a = i + '[unknown node]\n';
        return a;
      };
      t.dumpElement = function(e, t) {console.log(y(e, t));};
    },
    function(e, t, r) {
      var n = r(2), o = function(e) {this.empty = !0, this._type = e, this._arr = [], this._index = 0;};
      o.create = function(e) {return new o(e);}, o.prototype.add = function(e) {
        var t = this._index++;
        return this._arr.push({id: t, func: e}), this.empty = !1, t;
      }, o.prototype.remove = function(e) {
        var t = this._arr, r = 0;
        if ('function' == typeof e) for (r = 0; r < t.length; r++) {
          var n = t[r].func;
          if (n === e) return t.splice(r, 1), this.empty = !t.length, n;
        } else for (r = 0; r < t.length; r++) if (t[r].id === e) {
          var o = t[r].func;
          return t.splice(r, 1), this.empty = !t.length, o;
        }
        return null;
      }, o.prototype.call = function(e, t, r) {
        for (var n = this._arr, o = !1, i = 0; i < n.length; i++) {
          var s = a(this._type, n[i].func, e, t, r);
          s === !1 && (o = !0);
        }
        if (o) return !1;
      };
      var i = function(e, t) {
        if (!t.type || s.call(null, [e, t]) !== !1) {
          if (n.throwGlobalError) throw e;
          console.error(e.stack);
        }
      }, a = o.safeCallback = function(e, t, r, n, o) {
        try {
          return t.apply(r, n);
        } catch (s) {
          var a = '[Exparser] [Error] [Component] ' + (e || 'Error Listener') + ' Error @ ';
          r && r.is && (a += r.is), a += '#' + (t.name || '(anonymous)'), o && o.triggerLifeTime('error', [s]), i(s,
              {message: a, type: e, element: r, method: t, args: n});
        }
      }, s = o.create();
      o.addGlobalErrorListener = function(e) {
        return s.add(e);
      }, o.removeGlobalErrorListener = function(e) {return s.remove(e);}, e.exports = o;
    },
    function(e, t) {
      var r = {
        lazyRegistration: !0,
        publicProperties: !1,
        domain: '',
        writeOnly: !1,
        allowInWriteOnly: !1,
        classPrefix: null,
        addGlobalClass: !1,
        templateEngine: null,
        renderingMode: 'full',
        multipleSlots: !1,
        reflectToAttributes: !1,
        writeFieldsToNode: !0,
        writeIdToDOM: !1,
        separateInnerData: !0,
        listenerChangeLifeTimes: !1,
        randomizeTagName: !1,
        throwGlobalError: !1,
        writeExtraInfoToAttr: !1,
        documentBackend: 'undefined' != typeof window && 'undefined' != typeof document ? 'dom' : 'none',
        hasDOMBackend: !('undefined' == typeof window || 'undefined' == typeof document),
      };
      e.exports = r;
    },
    function(e, t) {
      var r = Object.prototype.hasOwnProperty, n = function(e, t) {
        var o = typeof e;
        if ('object' === o && null !== e) {
          var i = t ? t.get(e) : void 0;
          if (void 0 !== i) return i;
          if (e instanceof Array) {
            i = [], t && t.set(e, i);
            for (var a = 0; a < e.length; a++) i[a] = n(e[a], t);
          } else {
            i = {}, t && t.set(e, i);
            for (var s in e) r.call(e, s) && (i[s] = n(e[s], t));
          }
          return i;
        }
        if ('symbol' !== o) return e;
      };
      t.deepCopy = function(e, t) {
        var r = t && 'undefined' != typeof WeakMap ? new WeakMap : null;
        return n(e, r);
      };
    },
    function(e, t, r) {
      var n = r(1), o = Object.prototype.hasOwnProperty, i = function() {};
      i.prototype = Object.create(Object.prototype, {constructor: {value: i, writable: !0, configurable: !0}});
      var a = null;
      i._setElementSystem = function(e) {a = e, i._setElementSystem = null;};
      var s = null;
      i._setComponent = function(e) {s = e, i._setComponent = null;};
      var l = Date.now();
      i.setInitTimeStamp = function(e) {
        return l = void 0 === e
            ? Date.now()
            : e;
      }, i.getInitTimeStamp = function(e) {return l;}, i.create = function(e, t, r) {
        r = r || {};
        var n = r.originalEvent, o = r.extraFields || {}, a = Date.now() - l, s = new i;
        s.currentTarget = null, s.type = e, s.timeStamp = a, s.mark = null, s.detail = t, s.bubbles = !!r.bubbles, s.composed = !!r.composed, s.__originalEvent = n, s.__hasCapture = !!r.capturePhase, s.__stopped = !1, s.__dispatched = !1;
        for (var u in o) s[u] = o[u];
        return s;
      }, i.prototype.preventDefault = function() {
        this.__originalEvent && this.__originalEvent.preventDefault();
      }, i.prototype.stopPropagation = function() {this.__stopped = !0;}, i.prototype.isStopped = function() {return !!this.__stopped;};
      var u = function(e) {
        var t = {};
        if (e instanceof a) for (var r = e; r; r = r.parentNode) if (r.__marks) for (var n in r.__marks) o.call(t, n) ||
        (t[n] = r.__marks[n]);
        return t;
      }, f = function(e, t, r, n) {
        for (var o = e, i = u(e), s = [], l = [], f = e; f;) {
          if (o !== f && (s.push(e), e = f, l.push(i), i = u(e)), o = f.parentNode, n(f, e, i) === !1) return;
          if (f.__wxHost) {
            if (r) break;
            e = s.pop() || f.__wxHost, i = l.pop() || u(e), f = f.__wxHost, o = f;
          } else {
            var c = !0;
            f instanceof a && (c = !1), f = c || r ? f.parentNode : f.__wxSlotParent;
          }
        }
      };
      i.dispatchEvent = function(e, t) {
        if (!t.__dispatched) {
          t.__dispatched = !0, e.__wxElement && e.__wxHost !== e.__wxElement &&
          (e = e.__wxElement, e.shadowRoot instanceof a && (e = e.shadowRoot)), t.target = e instanceof a
              ? e.__methodCaller
              : e;
          var r = function(e, r) {
            var n = t.currentTarget = r instanceof a ? r.__methodCaller : r,
                o = e.call(n, [t], r instanceof s ? r : void 0);
            o === !1 && (t.__originalEvent && t.__originalEvent.preventDefault(), t.__stopped = !0);
          }, n = t.type, o = !t.composed;
          if (t.__hasCapture) {
            var i = [];
            f(e, n, o,
                function(e, t, r) {return e.__wxCaptureEvents && e.__wxCaptureEvents[n] && i.push([e, t, r]), !0;});
            for (var l = i.length - 1; l >= 0; l--) {
              var u = i[l], c = u[0], _ = u[1];
              if (t.target = _ instanceof a ? _.__methodCaller : _, t.mark = u[2], r(c.__wxCaptureEvents[n],
                  c), t.__stopped) break;
            }
          }
          if (t.target = e instanceof a ? e.__methodCaller : e, !t.__stopped) {
            var p = !t.bubbles;
            f(e, n, o, function(e, o, i) {
              return t.target = o instanceof a ? o.__methodCaller : o, t.mark = i, e.__wxEvents && e.__wxEvents[n] &&
              r(e.__wxEvents[n], e), !p && !t.__stopped;
            });
          }
        }
      }, i.triggerEvent = function(e, t, r, n) {
        var o = i.create(t, r, n);
        i.dispatchEvent(e, o);
      }, i.addListenerToElement = function(e, t, r, o) {
        var i = void 0;
        return o && (o.useCapture || o.capture) ? (e.__wxCaptureEvents ||
        (e.__wxCaptureEvents = Object.create(null)), e.__wxCaptureEvents[t] ||
        (e.__wxCaptureEvents[t] = n.create('Event Listener')), i = e.__wxCaptureEvents[t].add(r)) : (e.__wxEvents ||
        (e.__wxEvents = Object.create(null)), e.__wxEvents[t] ||
        (e.__wxEvents[t] = n.create('Event Listener')), i = e.__wxEvents[t].add(r)), e instanceof s &&
        e.__componentOptions.listenerChangeLifeTimes && e.triggerLifeTime('listenerChanged', [!0, t, r, o]), i;
      }, i.removeListenerFromElement = function(e, t, r, n) {
        var o = null;
        n && (n.useCapture || n.capture) ? e.__wxCaptureEvents && e.__wxCaptureEvents[t] &&
            (o = e.__wxCaptureEvents[t].remove(r)) : e.__wxEvents && e.__wxEvents[t] &&
            (o = e.__wxEvents[t].remove(r)), o && e instanceof s && e.__componentOptions.listenerChangeLifeTimes &&
        e.triggerLifeTime('listenerChanged', [!1, t, o, n]);
      }, e.exports = i;
    },
    function(e, t, r) {
      var n = r(6), o = ' \n\r\t\f', i = null, a = function() {
        i = n.create({
          MULTIPLE_PATHS: [
            {id: 'arrayConcat', states: ['MULTIPLE_PATHS', ',', 'SINGLE_PATH']},
            {id: 'array', states: ['SINGLE_PATH']}],
          SINGLE_PATH: [
            {id: 'arrayConcat', states: ['SINGLE_PATH', '.', 'VAR_NAME']},
            {id: 'arrayConcat', states: ['SINGLE_PATH', '[', 'INT', ']']},
            {id: 'array', states: ['VAR_NAME']},
            {id: '_jump', states: ['SINGLE_PATH', o]}],
          VAR_NAME: [
            {id: '_blank', states: [o, 'VAR_NAME']},
            {id: '_jump', states: ['VAR_NAME', o]},
            {id: '_raw', states: ['*', '*']},
            {id: '_raw', states: ['_a-zA-Z$', 'VAR_NAME_AFTER']}],
          VAR_NAME_AFTER: [{id: '_raw', states: ['_a-zA-Z0-9$', 'VAR_NAME_AFTER']}, {id: '_raw', states: ['NULL']}],
          INT: [
            {id: '_blank', states: [o, 'INT']},
            {id: '_jump', states: ['INT', o]},
            {id: 'toNumber', states: ['0-9', 'INT_AFTER']}],
          INT_AFTER: [{id: '_raw', states: ['0-9', 'INT_AFTER']}, {id: '_raw', states: ['NULL']}],
        }, {
          arrayConcat: function(e) {return e[0].push(e[2]), e[0];},
          array: function(e) {return e;},
          toNumber: function(e) {return parseInt(e[0] + e[1], 10);},
        });
      };
      t.parseMultiPaths = function(e) {
        return i || a(), i.parse('MULTIPLE_PATHS', e);
      }, t.parseSinglePath = function(e) {
        for (var t = e.length, r = [], n = '', o = 0, i = !1, a = !1, s = 0; s < t; s++) {
          var l = e[s];
          if ('\\' === l) s + 1 < t && ('.' === e[s + 1] || '[' === e[s + 1] || ']' === e[s + 1] || '\\' === e[s + 1])
              ? (n += e[s + 1], s++)
              : n += '\\'; else if ('.' === l) n && (r.push(n), n = ''); else if ('[' === l) {
            if (n && (r.push(n), n = ''), 0 === r.length) throw new Error(
                'The path string should not start with []: ' + e);
            a = !0, i = !1;
          } else if (']' === l) {
            if (!i) throw new Error('There should be digits inside [] in the path string: ' + e);
            a = !1, r.push(o), o = 0;
          } else if (a) {
            if (l < '0' || l > '9') throw new Error('Only digits (0-9) can be put inside [] in the path string: ' + e);
            i = !0, o = 10 * o + l.charCodeAt(0) - 48;
          } else n += l;
        }
        if (n && r.push(n), 0 === t) throw new Error('The path string should not be empty');
        return r;
      };
    },
    function(e, t, r) {
      var n = null, o = 16384, i = 256, a = 256, s = 0, l = 1, u = 65536, f = function() {},
          c = f.stats = {all: 0, copyIn: 0, parse: 0, constructOut: 0}, _ = function(e) {
            var t = n._llparser_create_descriptor(e, 1);
            return t;
          }, p = function(e, t) {
            var r = n._llparser_create_descriptor(e, 0), o = !1;
            '^' === t[0] && (o = !0);
            for (var i = o ? 1 : 0; i < t.length; i++) {
              var a = t.charCodeAt(i);
              if ('-' === t[i + 1]) {
                var s = t.charCodeAt(i + 2);
                a <= s ? (n._llparser_descriptor_add_range(r, a, s), i += 2) : n._llparser_descriptor_add_char(r, a);
              } else n._llparser_descriptor_add_char(r, a);
            }
            return o && n._llparser_descriptor_revert(r), r;
          };
      f.create = function(e, t, c) {
        n || (n = r(7));
        var h = new f;
        c = c || o;
        var d = h._llp = n._llparser_create(c, i, a), v = {}, m = {}, g = '';
        v.ALL = n._llparser_create_descriptor(d, 0), n._llparser_descriptor_set_all(
            v.ALL), v.NULL = n._llparser_create_descriptor(d, 0), n._llparser_descriptor_set_nil(v.NULL);
        for (g in e) v[g] = _(d);
        for (g in e) for (var b = e[g], w = v[g], y = 0; y < b.length; y++) {
          for (var E = b[y].id, x = b[y].states, C = [], S = 0; S < x.length; S++) {
            var A = x[S];
            v[A] || (v[A] = p(d, A)), C.push(v[A]);
          }
          var O = s;
          '_raw' === E ? O = l : '_jump' === E ? O = u + 0 : '_blank' === E && (O = u + 1);
          var T = n._llparser_add_rule(d, O, w, C.length, C[0], C[1], C[2], C[3], C[4], C[5], C[6], C[7]);
          O === s && (m[T] = t[E]);
        }
        return n._llparser_prepare(d), h._inputPtr = n._llparser_get_input_buffer(
            d), h._resultPtr = n._llparser_get_result(d), h._stateIdMap = v, h._ruleCbMap = m, h._charCountLimit = c, h;
      };
      var h = function(e, t, r, n, o) {
        for (var i = [], a = {
          i: 0,
          r: 0,
          n: !1,
          cc: -1,
          c: [],
        }, s = a, l = o.pos, u = !1, f = !1, c = !1; ;) {
          var _ = t[l], p = t[l + 1];
          if (p < 0 ? (f = !0, p = -p - 1) : f = !1, _ >= 0) {
            c = !0;
            var h = r.slice(_, p);
            s.c.push(h), u = f;
          } else {
            if (_ === -1 && 0 === p) break;
            c = !1;
            var d = -_, v = p, m = {i: s.c.length - (u ? 1 : 0), r: d, n: f, cc: v, c: []};
            if (u) {
              var g = s.c.length - 1, b = s.c[g];
              m.c.push(b), s.c[g] = m;
            } else s.c.push(m);
            i.push(s), s = m, u = !1;
          }
          if (!c || !u) for (; s.c.length === s.cc;) {
            u = s.n;
            var w = i.pop();
            if (w.c[s.i] = n[s.r].call(e, s.c), s = w, u) break;
          }
          l += 2;
        }
        return a.c[0];
      };
      f.prototype.parse = function(e, t) {
        var r = Date.now();
        n.stringToUTF16(t, this._inputPtr, 2 * this._charCountLimit + 2), c.copyIn = c.copyIn + Date.now() -
            r, r = Date.now();
        var o = n._llparser_parse(this._llp, this._stateIdMap[e]);
        if (c.parse = c.parse + Date.now() - r, r = Date.now(), o) throw new Error(
            'Parsing failed at character position ' + (o - 1) + ' near "' + t.slice(o - 20, o) + '"');
        var i = h(this, n.HEAP32, t, this._ruleCbMap, {pos: this._resultPtr >> 2});
        return c.constructOut = c.constructOut + Date.now() - r, i;
      }, f.prototype.destroy = function() {n._llparser_destroy(this._llp);}, e.exports = f;
    },
    function(e, t, r) {
      (function(t, n) {
        var o;
        o || (o = 'undefined' != typeof Module ? Module : {}), e.exports = {}, function(o) {
          function i(e) {
            var t;
            return t || (t = 16), Math.ceil(e / t) * t;
          }
  
          function a(e, t) {e || _('Assertion failed: ' + t);}
  
          function s(e, t) {return 0 < e % t && (e += t - e % t), e;}
  
          function l() {
            o.HEAP8 = w = new Int8Array(k), o.HEAP16 = E = new Int16Array(k), o.HEAP32 = x = new Int32Array(
                k), o.HEAPU8 = y = new Uint8Array(k), o.HEAPU16 = new Uint16Array(k), o.HEAPU32 = new Uint32Array(
                k), o.HEAPF32 = C = new Float32Array(k), o.HEAPF64 = S = new Float64Array(k);
          }
  
          function u(e) {
            for (; 0 < e.length;) {
              var t = e.shift();
              if ('function' == typeof t) t(); else {
                var r = t.f;
                'number' == typeof r ? void 0 === t.b ? o.dynCall_v(r) : o.dynCall_vi(r, t.b) : r(
                    void 0 === t.b ? null : t.b);
              }
            }
          }
  
          function f(e) {
            this.name = 'ExitStatus', this.message = 'Program terminated with exit(' + e + ')', this.status = e;
          }
  
          function c() {
            function e() {
              if (!o.calledRun && (o.calledRun = !0, !b)) {
                if (U || (U = !0, u(I)), u(M), o.onRuntimeInitialized &&
                o.onRuntimeInitialized(), o.postRun) for ('function' == typeof o.postRun &&
                                                          (o.postRun = [o.postRun]); o.postRun.length;) B.unshift(
                    o.postRun.shift());
                u(B);
              }
            }
  
            if (!(0 < D)) {
              if (o.preRun) for ('function' == typeof o.preRun && (o.preRun = [o.preRun]); o.preRun.length;) L.unshift(
                  o.preRun.shift());
              u(L), 0 < D || o.calledRun || (o.setStatus ? (o.setStatus('Running...'), setTimeout(
                  function() {setTimeout(function() {o.setStatus('');}, 1), e();}, 1)) : e());
            }
          }
  
          function _(e) {
            throw o.onAbort && o.onAbort(e), void 0 !== e
                ? (m(e), g(e), e = JSON.stringify(e))
                : e = '', b = !0, 'abort(' + e + '). Build with -s ASSERTIONS=1 for more info.';
          }
  
          var p, h = {};
          for (p in o) o.hasOwnProperty(p) && (h[p] = o[p]);
          o.arguments = [], o.thisProgram = './this.program', o.quit = function(
              e, t) {throw t;}, o.preRun = [], o.postRun = [];
          var d, v;
          o.read = function(e, n) {
            if (String.prototype.startsWith ? e.startsWith(F) : 0 === e.indexOf(F)) {
              var o = e.slice(F.length);
              try {var i = t.from(o, 'base64');} catch (e) {i = new t(o, 'base64');}
              o = new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
            } else o = void 0;
            return o || (d || (d = r(!function() {
              var e = new Error('Cannot find module "fs"');
              throw e.code = 'MODULE_NOT_FOUND', e;
            }())), v || (v = r(13)), e = v.normalize(e), o = d.readFileSync(e)), n ? o : o.toString();
          }, o.readBinary = function(e) {
            return e = o.read(e, !0), e.buffer || (e = new Uint8Array(e)), a(e.buffer), e;
          }, 1 < n.argv.length && (o.thisProgram = n.argv[1].replace(/\\/g, '/')), o.arguments = n.argv.slice(
              2), 'undefined' != typeof e && (e.exports = o), n.on('uncaughtException',
              function(e) {if (!(e instanceof f)) throw e;}), n.on('unhandledRejection',
              function() {n.exit(1);}), o.quit = function(e) {
            n.exit(e);
          }, o.inspect = function() {return '[Emscripten Module object]';};
          var m = o.print ||
              ('undefined' != typeof console ? console.log.bind(console) : 'undefined' != typeof print ? print : null),
              g = o.printErr || ('undefined' != typeof printErr ? printErr : 'undefined' != typeof console &&
                  console.warn.bind(console) || m);
          for (p in h) h.hasOwnProperty(p) && (o[p] = h[p]);
          h = void 0;
          var b = 0;
          'undefined' != typeof TextDecoder && new TextDecoder('utf8'), 'undefined' != typeof TextDecoder &&
          new TextDecoder('utf-16le');
          var w, y, E, x, C, S, A, O, T = A = p = A = O = 0;
          o.reallocBuffer || (o.reallocBuffer = function(e) {
            try {
              if (ArrayBuffer.a) var t = ArrayBuffer.a(k, e); else {
                var r = w;
                t = new ArrayBuffer(e), new Int8Array(t).set(r);
              }
            } catch (e) {return !1;}
            return !!H(t) && t;
          });
          try {
            var R = Function.prototype.call.bind(
                Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength').get);
            R(new ArrayBuffer(4));
          } catch (e) {R = function(e) {return e.byteLength;};}
          var P = o.TOTAL_STACK || 262144, N = o.TOTAL_MEMORY || 16777216;
          if (N < P && g('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + N + '! (TOTAL_STACK=' + P +
              ')'), o.buffer) var k = o.buffer; else k = new ArrayBuffer(N), o.buffer = k;
          l();
          var L = [], I = [], M = [], B = [], U = !1, D = 0;
          o.preloadedImages = {}, o.preloadedAudios = {}, h = null;
          var F = 'data:application/octet-stream;base64,';
          T = 520, I.push();
          var j = T;
          T += 16, O = function(e) {
            var t = T;
            return T = T + e + 15 & -16, t;
          }(4), A = p = i(T), A += P, x[O >> 2] = i(A), o.a = {
            Math: Math,
            Int8Array: Int8Array,
            Int16Array: Int16Array,
            Int32Array: Int32Array,
            Uint8Array: Uint8Array,
            Uint16Array: Uint16Array,
            Uint32Array: Uint32Array,
            Float32Array: Float32Array,
            Float64Array: Float64Array,
            NaN: NaN,
            Infinity: 1 / 0,
            byteLength: R,
          }, o.c = {
            abort: _,
            assert: a,
            enlargeMemory: function() {
              var e = o.usingWasm ? 65536 : 16777216, t = 2147483648 - e;
              if (x[O >> 2] > t) return !1;
              var r = N;
              for (N = Math.max(N, 16777216); N < x[O >> 2];) N = 536870912 >= N ? s(2 * N, e) : Math.min(
                  s((3 * N + 2147483648) / 4, e), t);
              return e = o.reallocBuffer(N), e && e.byteLength == N ? (o.buffer = k = e, l(), !0) : (N = r, !1);
            },
            getTotalMemory: function() {return N;},
            abortOnCannotGrowMemory: function() {
              _('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' +
                  N +
                  ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
            },
            ___errno_location: function() {g('missing function: __errno_location'), _(-1);},
            ___setErrNo: function(e) {return o.___errno_location && (x[o.___errno_location() >> 2] = e), e;},
            _emscripten_memcpy_big: function(e, t, r) {return y.set(y.subarray(t, t + r), e), e;},
            DYNAMICTOP_PTR: O,
            tempDoublePtr: j,
            ABORT: b,
            STACKTOP: p,
            STACK_MAX: A,
          }, R = function(e, t, r) {
            'almost asm';
  
            function n(e) {
              return !(16777215 & K(e) || K(e) <= 16777215 || K(e) > 2147483648) &&
                  (L = new k(e), M = new I(e), U = new B(e), F = new D(e), H = new j(e), z = new Y(e), G = new V(
                      e), W = new $(e), r = e, !0);
            }
  
            function o(e) {
              e |= 0;
              var t = 0;
              return t = Z, Z = Z + e | 0, Z = Z + 15 & -16, 0 | t;
            }
  
            function i() {return 0 | Z;}
  
            function a(e) {e |= 0, Z = e;}
  
            function s(e, t) {e |= 0, t |= 0, Z = e, J = t;}
  
            function l(e, t) {e |= 0, t |= 0, X || (X = e, Q = t);}
  
            function u(e) {e |= 0, ee = e;}
  
            function f() {return 0 | ee;}
  
            function c(e, t, r) {
              e |= 0, t |= 0, r |= 0;
              var n = 0, o = 0, i = 0, a = 0, s = 0, l = 0, u = 0;
              return u = 0 == (0 | e) ? 256 : e, l = 0 == (0 | t) ? 256 : t, a = 0 == (0 | r) ? 256 : r, s = 140 * l |
                  0, e = 44 * a | 0, t = l << 9, r = 0 | te(l << 3, a), n = u << 1, o = n + 52 + (u << 3) + s +
                  (l << 10) + e + r | 0, i = 0 | A(o), (0 | i ? 3 & U[i + -4 >> 2] | 0 : 0) && 0 |
              P(0 | i, 0, 0 | o), U[i + 12 >> 2] = u, U[i + 16 >> 2] = l, U[i + 20 >> 2] = a, u = i + 52 | 0, U[i + 24 >>
              2] = u, u = u + s | 0, U[i + 28 >> 2] = u, u = u + e | 0, U[i + 32 >> 2] = u, u = u + t | 0, U[i + 36 >>
              2] = u, u = u + t | 0, U[i + 40 >> 2] = u, u = u + r | 0, U[i + 44 >> 2] = u, U[i + 48 >> 2] = u + n, 0 | i;
            }
  
            function _(e) {e |= 0, O(e);}
  
            function p(e, t) {
              e |= 0, t |= 0;
              var r = 0, n = 0;
              return r = 0 | U[e + 24 >> 2], n = e + 4 | 0, e = 0 | U[n >> 2], U[n >> 2] = e + 1, U[r + (140 * e | 0) +
              4 >> 2] = 0 != (0 | t) & 1, r + (140 * e | 0) | 0;
            }
  
            function h(e) {e |= 0, U[e + 4 >> 2] = -1, L[e + 135 >> 0] = 1;}
  
            function d(e) {e |= 0, U[e + 4 >> 2] = -2, L[e + 8 >> 0] = 1;}
  
            function v(e, t) {e |= 0, t |= 0, L[e + 8 + t >> 0] = 1;}
  
            function m(e, t, r) {
              e |= 0, t |= 0, r |= 0, (0 | t) > (0 | r) || 0 |
              P(e + (t + 8) | 0, 1, 1 - t + ((0 | r) > (0 | t) ? r : t) | 0);
            }
  
            function g(e) {
              e |= 0;
              var t = 0, r = 0;
              t = 1;
              do r = e + 8 + t | 0, L[r >> 0] = 0 == (0 | L[r >> 0]) & 1, t = t + 1 | 0; while (127 != (0 | t));
            }
  
            function b(
                e, t, r, n, o, i, a, s, l, u, f, c) {
              e |= 0, t |= 0, r |= 0, n |= 0, o |= 0, i |= 0, a |= 0, s |= 0, l |= 0, u |= 0, f |= 0, c |= 0;
              var _ = 0, p = 0, h = 0;
              return _ = 0 | U[e + 28 >> 2], p = 0 | U[e >> 2], U[e >> 2] = p + 1, h = _ + (44 * p | 0) | 0, U[h >>
              2] = r, U[_ + (44 * p | 0) + 4 >> 2] = n, (0 | n) <= 0 ? (U[_ + (44 * p | 0) + 40 >> 2] = t, 0 | h) : (U[_ +
              (44 * p | 0) + 8 >> 2] = o, ((((((1 != (0 | n) ? (U[_ + (44 * p | 0) + 12 >> 2] = i, (0 | n) > 2) : 0)
                  ? (U[_ + (44 * p | 0) + 16 >> 2] = a, 3 != (0 | n))
                  : 0) ? (U[_ + (44 * p | 0) + 20 >> 2] = s, (0 | n) > 4) : 0) ? (U[_ + (44 * p | 0) + 24 >> 2] = l, 5 !=
              (0 | n)) : 0) ? (U[_ + (44 * p | 0) + 28 >> 2] = u, (0 | n) > 6) : 0) ? (U[_ + (44 * p | 0) + 32 >>
              2] = f, 7 != (0 | n)) : 0) && (U[_ + (44 * p | 0) + 36 >> 2] = c), U[_ + (44 * p | 0) + 40 >> 2] = t, 1 !=
              (0 | U[r + 4 >> 2]) ? 0 | h : (a = 0 | U[e + 40 >> 2], l = e + 8 | 0, s = 0 | U[l >> 2], U[l >> 2] = s +
                  1, l = a + (s << 3) | 0, U[l >> 2] = h, u = r + 136 | 0, U[a + (s << 3) + 4 >> 2] = U[u >> 2], U[u >>
              2] = l, 0 | h));
            }
  
            function w(e) {
              e |= 0;
              var t = 0, r = 0, n = 0, o = 0, i = 0, a = 0, s = 0, l = 0, u = 0, f = 0, c = 0, _ = 0, p = 0, h = 0, d = 0,
                  v = 0;
              if (o = e + 4 | 0, t = 0 | U[o >> 2], !((0 | t) <= 0)) {
                i = e + 24 | 0, h = e + 32 | 0, n = 0;
                do f = 0 | U[i >> 2], r = f + (140 * n | 0) | 0, 1 == (0 | U[f + (140 * n | 0) + 4 >> 2]) &&
                (y(r, r, (0 | U[h >> 2]) + (n << 7 << 2) | 0, 0), t = 0 | U[o >> 2]), n = n + 1 | 0; while ((0 | n) <
                (0 | t));
                if (!((0 | t) <= 0)) {
                  f = e + 36 | 0, i = 0 | U[i >> 2], u = i, e = 0;
                  do {
                    if (a = i + (140 * e | 0) | 0, 1 == (0 | U[i + (140 * e | 0) + 4 >> 2]) ? (U[a >> 2] = 0, _ = (0 |
                        U[f >> 2]) + (e << 7 << 2) | 0, c = 0 | U[i + (140 * e | 0) + 136 >> 2], 0 | c) : 0) {
                      o = c;
                      do {
                        if (s = 0 | U[o >> 2], l = s, (0 | U[s + 8 >> 2]) == (0 | a)) if (n = 0 | U[s + 12 >> 2], 1 ==
                        (0 | U[n + 4 >> 2])) {
                          n = (0 | U[h >> 2]) + (((n - u | 0) / 140 | 0) << 7 << 2) | 0, r = 0;
                          do (0 | U[n + (r << 2) >> 2] ? (p = _ + (r << 2) | 0, v = 0 | U[p >> 2], 0 == (0 | v) | s >>>
                          0 < v >>> 0) : 0) && (U[p >> 2] = l), r = r + 1 | 0; while (128 != (0 | r));
                        } else {
                          r = 0;
                          do (0 | L[n + 8 + r >> 0] ? (d = _ + (r << 2) | 0, v = 0 | U[d >> 2], 0 == (0 | v) | s >>> 0 <
                          v >>> 0) : 0) && (U[d >> 2] = l), r = r + 1 | 0; while (128 != (0 | r));
                        }
                        o = 0 | U[o + 4 >> 2];
                      } while (0 != (0 | o));
                    }
                    e = e + 1 | 0;
                  } while ((0 | e) != (0 | t));
                }
              }
            }
  
            function y(e, t, r, n) {
              e |= 0, t |= 0, r |= 0, n |= 0;
              var o = 0, i = 0, a = 0, s = 0, l = 0;
              if ((0 | U[e >> 2]) != (0 | t) && (U[e >> 2] = t, e = 0 | U[e + 136 >> 2])) if (n) {
                do {
                  s = 0 | U[(0 | U[e >> 2]) + 8 >> 2], 1 == (0 | U[s + 4 >> 2]) && y(s, t, r, n), a = 0;
                  do {
                    do if (0 | L[s + 8 + a >> 0]) {
                      if (l = r + (a << 2) | 0, i = 0 | U[l >> 2]) {
                        if (o = 0 | U[n >> 2], o >>> 0 >= i >>> 0) break;
                      } else o = 0 | U[n >> 2];
                      U[l >> 2] = o;
                    } while (0);
                    a = a + 1 | 0;
                  } while (128 != (0 | a));
                  e = 0 | U[e + 4 >> 2];
                } while (0 != (0 | e));
              } else do {
                s = 0 | U[(0 | U[e >> 2]) + 8 >> 2], 1 == (0 | U[s + 4 >> 2]) && y(s, t, r, e), a = 0;
                do {
                  do if (0 | L[s + 8 + a >> 0]) {
                    if (l = r + (a << 2) | 0, i = 0 | U[l >> 2]) {
                      if (o = 0 | U[e >> 2], o >>> 0 >= i >>> 0) break;
                    } else o = 0 | U[e >> 2];
                    U[l >> 2] = o;
                  } while (0);
                  a = a + 1 | 0;
                } while (128 != (0 | a));
                e = 0 | U[e + 4 >> 2];
              } while (0 != (0 | e));
            }
  
            function E(e, t) {
              e |= 0, t |= 0;
              var r = 0, n = 0, o = 0, i = 0, a = 0;
              if (o = Z, Z = Z + 16 | 0, a = o + 4 | 0, r = o, U[a >> 2] = 0, U[r >> 2] = 0, n = e + 44 | 0, t = 0 |
                  x(e, t, 0 | U[n >> 2], r, a, 0, U[e + 12 >> 2] << 1), i = 0 | U[e + 48 >> 2], e = 0 | U[a >> 2], U[a >>
              2] = e + 1, U[i + (e << 2) >> 2] = -1, e = 0 | U[a >> 2], U[a >> 2] = e + 1, U[i + (e << 2) >> 2] = 0, (0 |
                  t) > -1) {
                if (e = 0 | U[r >> 2], !(0 | M[(0 | U[n >> 2]) + (e << 1) >> 1])) return a = 0, Z = o, 0 | a;
              } else e = 0 | U[r >> 2];
              return a = e + 1 | 0, Z = o, 0 | a;
            }
  
            function x(e, t, r, n, o, i, a) {
              e |= 0, t |= 0, r |= 0, n |= 0, o |= 0, i |= 0, a |= 0;
              var s = 0, l = 0, u = 0, f = 0, c = 0, _ = 0, p = 0, h = 0, d = 0, v = 0, m = 0, g = 0, b = 0, w = 0, y = 0,
                  E = 0, C = 0;
              if (C = 0 | U[n >> 2], f = 0 | M[r + (C << 1) >> 1], f = (65535 & f) > 127 ? 1 : 65535 & f, w = 0 |
                  U[o >> 2], y = a + -4 | 0, (0 | w) > (0 | y)) return i = -1, 0 | i;
              if (u = t + 4 | 0, l = 0 | U[u >> 2], 1 != (0 | l)) {
                do if (f) {
                  if (s = C + 1 | 0, (0 | l) == -1 ? (U[n >> 2] = s, l = 0 | U[u >> 2]) : s = C, !l) {
                    if (0 | L[t + 8 + f >> 0]) {
                      s = s + 1 | 0, U[n >> 2] = s;
                      break;
                    }
                    return i = -1, 0 | i;
                  }
                } else s = C; while (0);
                return i ||
                (C = s - ((0 | U[u >> 2]) != -2 & 1) | 0, e = 0 | U[e + 48 >> 2], i = 0 | U[o >> 2], U[o >> 2] = i +
                    1, U[e + (i << 2) >> 2] = C, n = 0 | U[n >> 2], i = 0 | U[o >> 2], U[o >> 2] = i + 1, U[e +
                (i << 2) >> 2] = n), i = (0 | U[o >> 2]) + -1 | 0, 0 | i;
              }
              if (b = e + 24 | 0, l = (0 | U[e + 32 >> 2]) + (((t - (0 | U[b >> 2]) | 0) / 140 | 0) << 7 << 2) | 0, (f +
                  -1 | 0) >>> 0 < 126 ? (s = 0 | U[l + (f << 2) >> 2], s ? p = s : E = 15) : E = f ? 15 : 16, 15 ==
              (0 | E) && (s = 0 | U[l + 508 >> 2], s ? p = s : E = 16), 16 == (0 | E)) {
                if (s = 0 | U[l >> 2], !s) return i = -1, 0 | i;
                p = s;
              }
              g = 0 != (0 | i), (g ? 0 : 0 == (0 | U[p + 40 >> 2])) ? (U[o >> 2] = w + 2, d = w) : d = 0, h = p + 4 | 0;
              e:do {
                if ((0 | U[h >> 2]) > 0) {
                  if (c = p + 40 | 0, g) {
                    for (s = 0; ;) {
                      if ((0 | x(e, 0 | U[p + 8 + (s << 2) >> 2], r, n, o, i, a)) <= -1) {
                        s = -1;
                        break;
                      }
                      if (s = s + 1 | 0, (0 | s) >= (0 | U[h >> 2])) {
                        s = 0;
                        break e;
                      }
                    }
                    return 0 | s;
                  }
                  for (f = 0, s = 0, _ = 0 | U[c >> 2]; ;) {
                    if (l = f + 65536 | 0, u = 0 |
                        x(e, 0 | U[p + 8 + (f << 2) >> 2], r, n, o, 0 != (0 | _) & (0 | _) != (0 | l) & 1, a), (0 | u) <
                    0) {
                      s = -1;
                      break;
                    }
                    if (_ = 0 | U[c >> 2], s = (0 | _) == (0 | l) ? u : s, f = f + 1 | 0, (0 | f) >=
                    (0 | U[h >> 2])) break e;
                  }
                  return 0 | s;
                }
                s = 0;
              } while (0);
              e:do if (!g) switch (0 | U[p + 40 >> 2]) {
                case 0:
                  m = 0 | U[e + 48 >> 2], U[m + (d << 2) >> 2] = 0 - p, s = d + 1 | 0, U[m + (s << 2) >> 2] = U[h >> 2];
                  break e;
                case 1:
                  m = 0 | U[e + 48 >> 2], s = 0 | U[o >> 2], U[o >> 2] = s + 1, U[m + (s << 2) >> 2] = C, s = 0 |
                      U[o >> 2], v = 0 | U[n >> 2], U[o >> 2] = s + 1, U[m + (s << 2) >> 2] = v;
                  break e;
                default:
                  break e;
              } while (0);
              if ((0 | U[o >> 2]) > (0 | y)) return i = -1, 0 | i;
              v = e + 36 | 0, m = e + 48 | 0, f = d;
              e:for (; ;) {
                if (u = (0 | U[v >> 2]) + (((t - (0 | U[b >> 2]) | 0) / 140 | 0) << 7 << 2) | 0, l = 0 |
                    M[r + (U[n >> 2] << 1) >> 1], l = (65535 & l) > 127 ? 1 : 65535 & l, (l + -1 | 0) >>> 0 < 126) l = 0 |
                    U[u + (l << 2) >> 2], l || (E = 37); else {
                  if (!l) {
                    E = 55;
                    break;
                  }
                  E = 37;
                }
                if (37 == (0 | E) && (E = 0, l = 0 | U[u + 508 >> 2], !l)) {
                  E = 55;
                  break;
                }
                t:do if (g) d = f; else {
                  u = 0 | U[l + 40 >> 2];
                  r:do {
                    if ((0 | u) < 65536) {
                      switch (0 | u) {
                        case 0:
                          break;
                        default:
                          break r;
                      }
                      d = (0 | U[m >> 2]) + (s << 2) | 0, U[d >> 2] = ~U[d >> 2], d = 0 | U[o >> 2], U[o >> 2] = d + 2;
                      break t;
                    }
                    switch (0 | u) {
                      case 65536:
                        d = f;
                        break t;
                    }
                  } while (0);
                  U[o >> 2] = w, d = f;
                } while (0);
                if (h = l + 4 | 0, (0 | U[h >> 2]) > 1) if (p = l + 40 | 0, g) {
                  u = 1;
                  do {
                    if ((0 | x(e, 0 | U[l + 8 + (u << 2) >> 2], r, n, o, i, a)) <= -1) {
                      s = -1, E = 55;
                      break e;
                    }
                    u = u + 1 | 0;
                  } while ((0 | u) < (0 | U[h >> 2]));
                } else {
                  _ = 1, c = 0 | U[p >> 2];
                  do {
                    if (u = _ + 65536 | 0, f = 0 |
                        x(e, 0 | U[l + 8 + (_ << 2) >> 2], r, n, o, 0 != (0 | c) & (0 | c) != (0 | u) & 1, a), (0 | f) <
                    0) {
                      s = -1, E = 55;
                      break e;
                    }
                    c = 0 | U[p >> 2], s = (0 | c) == (0 | u) ? f : s, _ = _ + 1 | 0;
                  } while ((0 | _) < (0 | U[h >> 2]));
                }
                t:do if (!g) switch (0 | U[l + 40 >> 2]) {
                  case 0:
                    p = 0 | U[m >> 2], U[p + (d << 2) >> 2] = 0 - l, s = d + 1 | 0, U[p + (s << 2) >> 2] = U[h >> 2];
                    break t;
                  case 1:
                    h = 0 | U[m >> 2], s = 0 | U[o >> 2], U[o >> 2] = s + 1, U[h + (s << 2) >> 2] = C, s = 0 |
                        U[o >> 2], p = 0 | U[n >> 2], U[o >> 2] = s + 1, U[h + (s << 2) >> 2] = p;
                    break t;
                  default:
                    break t;
                } while (0);
                if ((0 | U[o >> 2]) > (0 | y)) {
                  s = -1, E = 55;
                  break;
                }
                f = d;
              }
              return 55 == (0 | E) ? 0 | s : 0;
            }
  
            function C(e) {return e |= 0, 0 | U[e + 44 >> 2];}
  
            function S(e) {return e |= 0, 0 | U[e + 48 >> 2];}
  
            function A(e) {
              e |= 0;
              var t = 0, r = 0, n = 0, o = 0, i = 0, a = 0, s = 0, l = 0, u = 0, f = 0, c = 0, _ = 0, p = 0, h = 0, d = 0,
                  v = 0, m = 0, g = 0, b = 0, w = 0, y = 0;
              y = Z, Z = Z + 16 | 0, _ = y;
              do if (e >>> 0 < 245) {
                if (u = e >>> 0 < 11 ? 16 : e + 11 & -8, e = u >>> 3, c = 0 | U[2], r = c >>> e, 3 & r |
                0) return t = (1 & r ^ 1) + e | 0, e = 48 + (t << 1 << 2) | 0, r = e + 8 | 0, n = 0 | U[r >> 2], o = n +
                    8 | 0, i = 0 | U[o >> 2], (0 | i) == (0 | e) ? U[2] = c & ~(1 << t) : (U[i + 12 >> 2] = e, U[r >>
                2] = i), w = t << 3, U[n + 4 >> 2] = 3 | w, w = n + w + 4 | 0, U[w >> 2] = 1 |
                    U[w >> 2], w = o, Z = y, 0 | w;
                if (f = 0 | U[4], u >>> 0 > f >>> 0) {
                  if (0 | r) return t = 2 << e, t = r << e & (t | 0 - t), t = (t & 0 - t) + -1 | 0, s = t >>> 12 &
                      16, t >>>= s, r = t >>> 5 & 8, t >>>= r, i = t >>> 2 & 4, t >>>= i, e = t >>> 1 &
                      2, t >>>= e, n = t >>> 1 & 1, n = (r | s | i | e | n) + (t >>> n) | 0, t = 48 + (n << 1 << 2) |
                      0, e = t + 8 | 0, i = 0 | U[e >> 2], s = i + 8 | 0, r = 0 | U[s >> 2], (0 | r) == (0 | t) ? (e = c &
                      ~(1 << n), U[2] = e) : (U[r + 12 >> 2] = t, U[e >> 2] = r, e = c), w = n << 3, a = w - u | 0, U[i +
                  4 >> 2] = 3 | u, o = i + u | 0, U[o + 4 >> 2] = 1 | a, U[i + w >> 2] = a, 0 | f &&
                  (n = 0 | U[7], t = f >>> 3, r = 48 + (t << 1 << 2) | 0, t = 1 << t, e & t ? (e = r + 8 | 0, t = 0 |
                      U[e >> 2]) : (U[2] = e | t, t = r, e = r + 8 | 0), U[e >> 2] = n, U[t + 12 >> 2] = n, U[n + 8 >>
                  2] = t, U[n + 12 >> 2] = r), U[4] = a, U[7] = o, w = s, Z = y, 0 | w;
                  if (i = 0 | U[3]) {
                    for (r = (i & 0 - i) + -1 | 0, o = r >>> 12 & 16, r >>>= o, n = r >>> 5 & 8, r >>>= n, a = r >>> 2 &
                        4, r >>>= a, s = r >>> 1 & 2, r >>>= s, l = r >>> 1 & 1, l = 0 |
                        U[312 + ((n | o | a | s | l) + (r >>> l) << 2) >> 2], r = l, s = l, l = (U[l + 4 >> 2] & -8) - u |
                        0; ;) {
                      if (e = 0 | U[r + 16 >> 2], !e && (e = 0 | U[r + 20 >> 2], !e)) break;
                      a = (U[e + 4 >> 2] & -8) - u | 0, o = a >>> 0 < l >>> 0, r = e, s = o ? e : s, l = o ? a : l;
                    }
                    if (a = s + u | 0, a >>> 0 > s >>> 0) {
                      o = 0 | U[s + 24 >> 2], t = 0 | U[s + 12 >> 2];
                      do if ((0 | t) == (0 | s)) {
                        if (e = s + 20 | 0, t = 0 | U[e >> 2], !t && (e = s + 16 | 0, t = 0 | U[e >> 2], !t)) {
                          r = 0;
                          break;
                        }
                        for (; ;) if (n = t + 20 | 0, r = 0 | U[n >> 2]) t = r, e = n; else {
                          if (n = t + 16 | 0, r = 0 | U[n >> 2], !r) break;
                          t = r, e = n;
                        }
                        U[e >> 2] = 0, r = t;
                      } else r = 0 | U[s + 8 >> 2], U[r + 12 >> 2] = t, U[t + 8 >> 2] = r, r = t; while (0);
                      do if (0 | o) {
                        if (t = 0 | U[s + 28 >> 2], e = 312 + (t << 2) | 0, (0 | s) == (0 | U[e >> 2])) {
                          if (U[e >> 2] = r, !r) {
                            U[3] = i & ~(1 << t);
                            break;
                          }
                        } else if (w = o + 16 | 0, U[((0 | U[w >> 2]) == (0 | s) ? w : o + 20 | 0) >> 2] = r, !r) break;
                        U[r + 24 >> 2] = o, t = 0 | U[s + 16 >> 2], 0 | t &&
                        (U[r + 16 >> 2] = t, U[t + 24 >> 2] = r), t = 0 | U[s + 20 >> 2], 0 | t &&
                        (U[r + 20 >> 2] = t, U[t + 24 >> 2] = r);
                      } while (0);
                      return l >>> 0 < 16 ? (w = l + u | 0, U[s + 4 >> 2] = 3 | w, w = s + w + 4 | 0, U[w >> 2] = 1 |
                          U[w >> 2]) : (U[s + 4 >> 2] = 3 | u, U[a + 4 >> 2] = 1 | l, U[a + l >> 2] = l, 0 | f &&
                      (n = 0 | U[7], t = f >>> 3, r = 48 + (t << 1 << 2) | 0, t = 1 << t, t & c ? (e = r + 8 | 0, t = 0 |
                          U[e >> 2]) : (U[2] = t | c, t = r, e = r + 8 | 0), U[e >> 2] = n, U[t + 12 >> 2] = n, U[n + 8 >>
                      2] = t, U[n + 12 >> 2] = r), U[4] = l, U[7] = a), w = s + 8 | 0, Z = y, 0 | w;
                    }
                    c = u;
                  } else c = u;
                } else c = u;
              } else if (e >>> 0 <= 4294967231) if (e = e + 11 | 0, u = e & -8, n = 0 | U[3]) {
                o = 0 - u | 0, e >>>= 8, e ? u >>> 0 > 16777215 ? l = 31 : (c = (e + 1048320 | 0) >>> 16 & 8, v = e <<
                    c, s = (v + 520192 | 0) >>> 16 & 4, v <<= s, l = (v + 245760 | 0) >>> 16 & 2, l = 14 - (s | c | l) +
                    (v << l >>> 15) | 0, l = u >>> (l + 7 | 0) & 1 | l << 1) : l = 0, r = 0 | U[312 + (l << 2) >> 2];
                e:do if (r) for (e = 0, s = u << (31 == (0 | l) ? 0 : 25 - (l >>> 1) | 0), i = 0; ;) {
                  if (a = (U[r + 4 >> 2] & -8) - u | 0, a >>> 0 < o >>> 0) {
                    if (!a) {
                      e = r, o = 0, v = 65;
                      break e;
                    }
                    e = r, o = a;
                  }
                  if (v = 0 | U[r + 20 >> 2], r = 0 | U[r + 16 + (s >>> 31 << 2) >> 2], i = 0 == (0 | v) | (0 | v) ==
                  (0 | r) ? i : v, !r) {
                    r = i, v = 61;
                    break;
                  }
                  s <<= 1;
                } else r = 0, e = 0, v = 61; while (0);
                if (61 == (0 | v)) {
                  if (0 == (0 | r) & 0 == (0 | e)) {
                    if (e = 2 << l, e = (e | 0 - e) & n, !e) {
                      c = u;
                      break;
                    }
                    c = (e & 0 - e) + -1 | 0, a = c >>> 12 & 16, c >>>= a, i = c >>> 5 & 8, c >>>= i, s = c >>> 2 &
                        4, c >>>= s, l = c >>> 1 & 2, c >>>= l, r = c >>> 1 & 1, e = 0, r = 0 |
                        U[312 + ((i | a | s | l | r) + (c >>> r) << 2) >> 2];
                  }
                  r ? v = 65 : (s = e, a = o);
                }
                if (65 == (0 | v)) for (i = r; ;) {
                  if (c = (U[i + 4 >> 2] & -8) - u | 0, r = c >>> 0 < o >>> 0, o = r
                      ? c
                      : o, e = r ? i : e, r = 0 | U[i + 16 >> 2], r || (r = 0 | U[i + 20 >> 2]), !r) {
                    s = e, a = o;
                    break;
                  }
                  i = r;
                }
                if ((0 != (0 | s) ? a >>> 0 < ((0 | U[4]) - u | 0) >>> 0 : 0) ? (f = s + u | 0, f >>> 0 > s >>> 0) : 0) {
                  i = 0 | U[s + 24 >> 2], t = 0 | U[s + 12 >> 2];
                  do if ((0 | t) == (0 | s)) {
                    if (e = s + 20 | 0, t = 0 | U[e >> 2], !t && (e = s + 16 | 0, t = 0 | U[e >> 2], !t)) {
                      t = 0;
                      break;
                    }
                    for (; ;) if (o = t + 20 | 0, r = 0 | U[o >> 2]) t = r, e = o; else {
                      if (o = t + 16 | 0, r = 0 | U[o >> 2], !r) break;
                      t = r, e = o;
                    }
                    U[e >> 2] = 0;
                  } else w = 0 | U[s + 8 >> 2], U[w + 12 >> 2] = t, U[t + 8 >> 2] = w; while (0);
                  do if (i) {
                    if (e = 0 | U[s + 28 >> 2], r = 312 + (e << 2) | 0, (0 | s) == (0 | U[r >> 2])) {
                      if (U[r >> 2] = t, !t) {
                        n &= ~(1 << e), U[3] = n;
                        break;
                      }
                    } else if (w = i + 16 | 0, U[((0 | U[w >> 2]) == (0 | s) ? w : i + 20 | 0) >> 2] = t, !t) break;
                    U[t + 24 >> 2] = i, e = 0 | U[s + 16 >> 2], 0 | e && (U[t + 16 >> 2] = e, U[e + 24 >> 2] = t), e = 0 |
                        U[s + 20 >> 2], e && (U[t + 20 >> 2] = e, U[e + 24 >> 2] = t);
                  } while (0);
                  e:do if (a >>> 0 < 16) w = a + u | 0, U[s + 4 >> 2] = 3 | w, w = s + w + 4 | 0, U[w >> 2] = 1 |
                      U[w >> 2]; else {
                    if (U[s + 4 >> 2] = 3 | u, U[f + 4 >> 2] = 1 | a, U[f + a >> 2] = a, t = a >>> 3, a >>> 0 < 256) {
                      r = 48 + (t << 1 << 2) | 0, e = 0 | U[2], t = 1 << t, e & t
                          ? (e = r + 8 | 0, t = 0 | U[e >> 2])
                          : (U[2] = e | t, t = r, e = r + 8 | 0), U[e >> 2] = f, U[t + 12 >> 2] = f, U[f + 8 >>
                      2] = t, U[f + 12 >> 2] = r;
                      break;
                    }
                    if (t = a >>> 8, t ? a >>> 0 > 16777215 ? r = 31 : (b = (t + 1048320 | 0) >>> 16 & 8, w = t <<
                        b, g = (w + 520192 | 0) >>> 16 & 4, w <<= g, r = (w + 245760 | 0) >>> 16 & 2, r = 14 -
                        (g | b | r) + (w << r >>> 15) | 0, r = a >>> (r + 7 | 0) & 1 | r << 1) : r = 0, t = 312 +
                        (r << 2) | 0, U[f + 28 >> 2] = r, e = f + 16 | 0, U[e + 4 >> 2] = 0, U[e >> 2] = 0, e = 1 <<
                        r, !(e & n)) {
                      U[3] = e | n, U[t >> 2] = f, U[f + 24 >> 2] = t, U[f + 12 >> 2] = f, U[f + 8 >> 2] = f;
                      break;
                    }
                    t = 0 | U[t >> 2];
                    t:do if ((U[t + 4 >> 2] & -8 | 0) != (0 | a)) {
                      for (n = a << (31 == (0 | r) ? 0 : 25 - (r >>> 1) | 0); ;) {
                        if (r = t + 16 + (n >>> 31 << 2) | 0, e = 0 | U[r >> 2], !e) break;
                        if ((U[e + 4 >> 2] & -8 | 0) == (0 | a)) {
                          t = e;
                          break t;
                        }
                        n <<= 1, t = e;
                      }
                      U[r >> 2] = f, U[f + 24 >> 2] = t, U[f + 12 >> 2] = f, U[f + 8 >> 2] = f;
                      break e;
                    } while (0);
                    b = t + 8 | 0, w = 0 | U[b >> 2], U[w + 12 >> 2] = f, U[b >> 2] = f, U[f + 8 >> 2] = w, U[f + 12 >>
                    2] = t, U[f + 24 >> 2] = 0;
                  } while (0);
                  return w = s + 8 | 0, Z = y, 0 | w;
                }
                c = u;
              } else c = u; else c = -1; while (0);
              if (r = 0 | U[4], r >>> 0 >= c >>> 0) return t = r - c | 0, e = 0 | U[7], t >>> 0 > 15
                  ? (w = e + c | 0, U[7] = w, U[4] = t, U[w + 4 >> 2] = 1 | t, U[e + r >> 2] = t, U[e + 4 >> 2] = 3 | c)
                  : (U[4] = 0, U[7] = 0, U[e + 4 >> 2] = 3 | r, w = e + r + 4 | 0, U[w >> 2] = 1 | U[w >> 2]), w = e + 8 |
                  0, Z = y, 0 | w;
              if (a = 0 | U[5], a >>> 0 > c >>> 0) return g = a - c | 0, U[5] = g, w = 0 | U[8], b = w + c |
                  0, U[8] = b, U[b + 4 >> 2] = 1 | g, U[w + 4 >> 2] = 3 | c, w = w + 8 | 0, Z = y, 0 | w;
              if (0 | U[120]
                  ? e = 0 | U[122]
                  : (U[122] = 4096, U[121] = 4096, U[123] = -1, U[124] = -1, U[125] = 0, U[113] = 0, U[120] = _ & -16 ^
                      1431655768, e = 4096), s = c + 48 | 0, l = c + 47 | 0, i = e + l | 0, o = 0 - e | 0, u = i &
                  o, u >>> 0 <= c >>> 0) return w = 0, Z = y, 0 | w;
              if (e = 0 | U[112], 0 | e
                  ? (f = 0 | U[110], _ = f + u | 0, _ >>> 0 <= f >>> 0 | _ >>> 0 > e >>> 0)
                  : 0) return w = 0, Z = y, 0 | w;
              e:do if (4 & U[113]) t = 0, v = 143; else {
                r = 0 | U[8];
                t:do if (r) {
                  for (n = 456; ;) {
                    if (e = 0 | U[n >> 2], e >>> 0 <= r >>> 0
                        ? (d = n + 4 | 0, (e + (0 | U[d >> 2]) | 0) >>> 0 > r >>> 0)
                        : 0) break;
                    if (e = 0 | U[n + 8 >> 2], !e) {
                      v = 128;
                      break t;
                    }
                    n = e;
                  }
                  if (t = i - a & o, t >>> 0 < 2147483647) if (e = 0 | N(0 | t), (0 | e) ==
                  ((0 | U[n >> 2]) + (0 | U[d >> 2]) | 0)) {
                    if ((0 | e) != -1) {
                      a = t, i = e, v = 145;
                      break e;
                    }
                  } else n = e, v = 136; else t = 0;
                } else v = 128; while (0);
                do if (128 == (0 | v)) if (r = 0 | N(0), (0 | r) != -1 ? (t = r, p = 0 | U[121], h = p + -1 | 0, t = (0 ==
                (h & t | 0) ? 0 : (h + t & 0 - p) - t | 0) + u | 0, p = 0 | U[110], h = t + p | 0, t >>> 0 > c >>> 0 &
                t >>> 0 < 2147483647) : 0) {
                  if (d = 0 | U[112], 0 | d
                      ? h >>> 0 <= p >>> 0 | h >>> 0 > d >>> 0
                      : 0) {
                    t = 0;
                    break;
                  }
                  if (e = 0 | N(0 | t), (0 | e) == (0 | r)) {
                    a = t, i = r, v = 145;
                    break e;
                  }
                  n = e, v = 136;
                } else t = 0; while (0);
                do if (136 == (0 | v)) {
                  if (r = 0 - t | 0, !(s >>> 0 > t >>> 0 & (t >>> 0 < 2147483647 & (0 | n) != -1))) {
                    if ((0 | n) == -1) {
                      t = 0;
                      break;
                    }
                    a = t, i = n, v = 145;
                    break e;
                  }
                  if (e = 0 | U[122], e = l - t + e & 0 - e, e >>> 0 >= 2147483647) {
                    a = t, i = n, v = 145;
                    break e;
                  }
                  if ((0 | N(0 | e)) == -1) {
                    0 | N(0 | r), t = 0;
                    break;
                  }
                  a = e + t | 0, i = n, v = 145;
                  break e;
                } while (0);
                U[113] = 4 | U[113], v = 143;
              } while (0);
              if (!(143 == (0 | v) ? u >>> 0 < 2147483647 : 0) ||
              (b = 0 | N(0 | u), d = 0 | N(0), m = d - b | 0, g = m >>> 0 > (c + 40 | 0) >>> 0, (0 | b) == -1 | 1 ^ g |
              b >>> 0 < d >>> 0 & ((0 | b) != -1 & (0 | d) != -1) ^ 1) || (a = g ? m : t, i = b, v = 145), 145 ==
              (0 | v)) {
                t = (0 | U[110]) + a | 0, U[110] = t, t >>> 0 > (0 | U[111]) >>> 0 && (U[111] = t), l = 0 | U[8];
                e:do if (l) {
                  for (t = 456; ;) {
                    if (e = 0 | U[t >> 2], r = t + 4 | 0, n = 0 | U[r >> 2], (0 | i) == (e + n | 0)) {
                      v = 154;
                      break;
                    }
                    if (o = 0 | U[t + 8 >> 2], !o) break;
                    t = o;
                  }
                  if ((154 == (0 | v) ? 0 == (8 & U[t + 12 >> 2] | 0) : 0)
                      ? i >>> 0 > l >>> 0 & e >>> 0 <= l >>> 0
                      : 0) {
                    U[r >> 2] = n + a, w = (0 | U[5]) + a | 0, g = l + 8 | 0, g = 0 == (7 & g | 0) ? 0 : 0 - g &
                        7, b = l + g | 0, g = w - g | 0, U[8] = b, U[5] = g, U[b + 4 >> 2] = 1 | g, U[l + w + 4 >>
                    2] = 40, U[9] = U[124];
                    break;
                  }
                  for (i >>> 0 < (0 | U[6]) >>> 0 && (U[6] = i), r = i + a | 0, t = 456; ;) {
                    if ((0 | U[t >> 2]) == (0 | r)) {
                      v = 162;
                      break;
                    }
                    if (e = 0 | U[t + 8 >> 2], !e) break;
                    t = e;
                  }
                  if (162 == (0 | v) ? 0 == (8 & U[t + 12 >> 2] | 0) : 0) {
                    U[t >> 2] = i, f = t + 4 | 0, U[f >> 2] = (0 | U[f >> 2]) + a, f = i + 8 | 0, f = i +
                        (0 == (7 & f | 0) ? 0 : 0 - f & 7) | 0, t = r + 8 | 0, t = r +
                        (0 == (7 & t | 0) ? 0 : 0 - t & 7) | 0, u = f + c | 0, s = t - f - c | 0, U[f + 4 >> 2] = 3 | c;
                    t:do if ((0 | l) == (0 | t)) w = (0 | U[5]) + s | 0, U[5] = w, U[8] = u, U[u + 4 >> 2] = 1 | w; else {
                      if ((0 | U[7]) == (0 | t)) {
                        w = (0 | U[4]) + s | 0, U[4] = w, U[7] = u, U[u + 4 >> 2] = 1 | w, U[u + w >> 2] = w;
                        break;
                      }
                      if (e = 0 | U[t + 4 >> 2], 1 == (3 & e | 0)) {
                        a = e & -8, n = e >>> 3;
                        r:do {
                          if (e >>> 0 < 256) {
                            if (e = 0 | U[t + 8 >> 2], r = 0 | U[t + 12 >> 2], (0 | r) == (0 | e)) {
                              U[2] = U[2] & ~(1 << n);
                              break;
                            }
                            U[e + 12 >> 2] = r, U[r + 8 >> 2] = e;
                            break;
                          }
                          i = 0 | U[t + 24 >> 2], e = 0 | U[t + 12 >> 2];
                          do if ((0 | e) == (0 | t)) {
                            if (r = t + 16 | 0, n = r + 4 | 0, e = 0 | U[n >> 2]) r = n; else if (e = 0 | U[r >> 2], !e) {
                              e = 0;
                              break;
                            }
                            for (; ;) if (o = e + 20 | 0, n = 0 | U[o >> 2]) e = n, r = o; else {
                              if (o = e + 16 | 0, n = 0 | U[o >> 2], !n) break;
                              e = n, r = o;
                            }
                            U[r >> 2] = 0;
                          } else w = 0 | U[t + 8 >> 2], U[w + 12 >> 2] = e, U[e + 8 >> 2] = w; while (0);
                          if (!i) break;
                          r = 0 | U[t + 28 >> 2], n = 312 + (r << 2) | 0;
                          do {
                            if ((0 | U[n >> 2]) == (0 | t)) {
                              if (U[n >> 2] = e, 0 | e) break;
                              U[3] = U[3] & ~(1 << r);
                              break r;
                            }
                            if (w = i + 16 | 0, U[((0 | U[w >> 2]) == (0 | t) ? w : i + 20 | 0) >> 2] = e, !e) break r;
                          } while (0);
                          if (U[e + 24 >> 2] = i, r = t + 16 | 0, n = 0 | U[r >> 2], 0 | n &&
                          (U[e + 16 >> 2] = n, U[n + 24 >> 2] = e), r = 0 | U[r + 4 >> 2], !r) break;
                          U[e + 20 >> 2] = r, U[r + 24 >> 2] = e;
                        } while (0);
                        t = t + a | 0, o = a + s | 0;
                      } else o = s;
                      if (t = t + 4 | 0, U[t >> 2] = U[t >> 2] & -2, U[u + 4 >> 2] = 1 | o, U[u + o >> 2] = o, t = o >>>
                          3, o >>> 0 < 256) {
                        r = 48 + (t << 1 << 2) | 0, e = 0 | U[2], t = 1 << t, e & t
                            ? (e = r + 8 | 0, t = 0 | U[e >> 2])
                            : (U[2] = e | t, t = r, e = r + 8 | 0), U[e >> 2] = u, U[t + 12 >> 2] = u, U[u + 8 >>
                        2] = t, U[u + 12 >> 2] = r;
                        break;
                      }
                      t = o >>> 8;
                      do if (t) {
                        if (o >>> 0 > 16777215) {
                          n = 31;
                          break;
                        }
                        b = (t + 1048320 | 0) >>> 16 & 8, w = t << b, g = (w + 520192 | 0) >>> 16 & 4, w <<= g, n = (w +
                            245760 | 0) >>> 16 & 2, n = 14 - (g | b | n) + (w << n >>> 15) | 0, n = o >>> (n + 7 | 0) &
                            1 | n << 1;
                      } else n = 0; while (0);
                      if (t = 312 + (n << 2) | 0, U[u + 28 >> 2] = n, e = u + 16 | 0, U[e + 4 >> 2] = 0, U[e >>
                      2] = 0, e = 0 | U[3], r = 1 << n, !(e & r)) {
                        U[3] = e | r, U[t >> 2] = u, U[u + 24 >> 2] = t, U[u + 12 >> 2] = u, U[u + 8 >> 2] = u;
                        break;
                      }
                      t = 0 | U[t >> 2];
                      r:do if ((U[t + 4 >> 2] & -8 | 0) != (0 | o)) {
                        for (n = o << (31 == (0 | n) ? 0 : 25 - (n >>> 1) | 0); ;) {
                          if (r = t + 16 + (n >>> 31 << 2) | 0, e = 0 | U[r >> 2], !e) break;
                          if ((U[e + 4 >> 2] & -8 | 0) == (0 | o)) {
                            t = e;
                            break r;
                          }
                          n <<= 1, t = e;
                        }
                        U[r >> 2] = u, U[u + 24 >> 2] = t, U[u + 12 >> 2] = u, U[u + 8 >> 2] = u;
                        break t;
                      } while (0);
                      b = t + 8 | 0, w = 0 | U[b >> 2], U[w + 12 >> 2] = u, U[b >> 2] = u, U[u + 8 >> 2] = w, U[u + 12 >>
                      2] = t, U[u + 24 >> 2] = 0;
                    } while (0);
                    return w = f + 8 | 0, Z = y, 0 | w;
                  }
                  for (t = 456; ;) {
                    if (e = 0 | U[t >> 2], e >>> 0 <= l >>> 0
                        ? (w = e + (0 | U[t + 4 >> 2]) | 0, w >>> 0 > l >>> 0)
                        : 0) break;
                    t = 0 | U[t + 8 >> 2];
                  }
                  o = w + -47 | 0, e = o + 8 | 0, e = o + (0 == (7 & e | 0) ? 0 : 0 - e & 7) | 0, o = l + 16 |
                      0, e = e >>> 0 < o >>> 0 ? l : e, t = e + 8 | 0, r = a + -40 | 0, g = i + 8 | 0, g = 0 ==
                  (7 & g | 0) ? 0 : 0 - g & 7, b = i + g | 0, g = r - g | 0, U[8] = b, U[5] = g, U[b + 4 >> 2] = 1 |
                      g, U[i + r + 4 >> 2] = 40, U[9] = U[124], r = e + 4 | 0, U[r >> 2] = 27, U[t >> 2] = U[114], U[t +
                  4 >> 2] = U[115], U[t + 8 >> 2] = U[116], U[t + 12 >>
                  2] = U[117], U[114] = i, U[115] = a, U[117] = 0, U[116] = t, t = e + 24 | 0;
                  do b = t, t = t + 4 | 0, U[t >> 2] = 7; while ((b + 8 | 0) >>> 0 < w >>> 0);
                  if ((0 | e) != (0 | l)) {
                    if (i = e - l | 0, U[r >> 2] = U[r >> 2] & -2, U[l + 4 >> 2] = 1 | i, U[e >> 2] = i, t = i >>>
                        3, i >>> 0 < 256) {
                      r = 48 + (t << 1 << 2) | 0, e = 0 | U[2], t = 1 << t, e & t
                          ? (e = r + 8 | 0, t = 0 | U[e >> 2])
                          : (U[2] = e | t, t = r, e = r + 8 | 0), U[e >> 2] = l, U[t + 12 >> 2] = l, U[l + 8 >>
                      2] = t, U[l + 12 >> 2] = r;
                      break;
                    }
                    if (t = i >>> 8, t ? i >>> 0 > 16777215 ? n = 31 : (b = (t + 1048320 | 0) >>> 16 & 8, w = t <<
                        b, g = (w + 520192 | 0) >>> 16 & 4, w <<= g, n = (w + 245760 | 0) >>> 16 & 2, n = 14 -
                        (g | b | n) + (w << n >>> 15) | 0, n = i >>> (n + 7 | 0) & 1 | n << 1) : n = 0, r = 312 +
                        (n << 2) | 0, U[l + 28 >> 2] = n, U[l + 20 >> 2] = 0, U[o >> 2] = 0, t = 0 | U[3], e = 1 <<
                        n, !(t & e)) {
                      U[3] = t | e, U[r >> 2] = l, U[l + 24 >> 2] = r, U[l + 12 >> 2] = l, U[l + 8 >> 2] = l;
                      break;
                    }
                    t = 0 | U[r >> 2];
                    t:do if ((U[t + 4 >> 2] & -8 | 0) != (0 | i)) {
                      for (n = i << (31 == (0 | n) ? 0 : 25 - (n >>> 1) | 0); ;) {
                        if (r = t + 16 + (n >>> 31 << 2) | 0, e = 0 | U[r >> 2], !e) break;
                        if ((U[e + 4 >> 2] & -8 | 0) == (0 | i)) {
                          t = e;
                          break t;
                        }
                        n <<= 1, t = e;
                      }
                      U[r >> 2] = l, U[l + 24 >> 2] = t, U[l + 12 >> 2] = l, U[l + 8 >> 2] = l;
                      break e;
                    } while (0);
                    b = t + 8 | 0, w = 0 | U[b >> 2], U[w + 12 >> 2] = l, U[b >> 2] = l, U[l + 8 >> 2] = w, U[l + 12 >>
                    2] = t, U[l + 24 >> 2] = 0;
                  }
                } else w = 0 | U[6], 0 == (0 | w) | i >>> 0 < w >>> 0 &&
                (U[6] = i), U[114] = i, U[115] = a, U[117] = 0, U[11] = U[120], U[10] = -1, U[15] = 48, U[14] = 48, U[17] = 56, U[16] = 56, U[19] = 64, U[18] = 64, U[21] = 72, U[20] = 72, U[23] = 80, U[22] = 80, U[25] = 88, U[24] = 88, U[27] = 96, U[26] = 96, U[29] = 104, U[28] = 104, U[31] = 112, U[30] = 112, U[33] = 120, U[32] = 120, U[35] = 128, U[34] = 128, U[37] = 136, U[36] = 136, U[39] = 144, U[38] = 144, U[41] = 152, U[40] = 152, U[43] = 160, U[42] = 160, U[45] = 168, U[44] = 168, U[47] = 176, U[46] = 176, U[49] = 184, U[48] = 184, U[51] = 192, U[50] = 192, U[53] = 200, U[52] = 200, U[55] = 208, U[54] = 208, U[57] = 216, U[56] = 216, U[59] = 224, U[58] = 224, U[61] = 232, U[60] = 232, U[63] = 240, U[62] = 240, U[65] = 248, U[64] = 248, U[67] = 256, U[66] = 256, U[69] = 264, U[68] = 264, U[71] = 272, U[70] = 272, U[73] = 280, U[72] = 280, U[75] = 288, U[74] = 288, U[77] = 296, U[76] = 296, w = a +
                    -40 | 0, g = i + 8 | 0, g = 0 == (7 & g | 0) ? 0 : 0 - g & 7, b = i + g | 0, g = w - g |
                    0, U[8] = b, U[5] = g, U[b + 4 >> 2] = 1 | g, U[i + w + 4 >> 2] = 40, U[9] = U[124]; while (0);
                if (t = 0 | U[5], t >>> 0 > c >>> 0) return g = t - c | 0, U[5] = g, w = 0 | U[8], b = w + c |
                    0, U[8] = b, U[b + 4 >> 2] = 1 | g, U[w + 4 >> 2] = 3 | c, w = w + 8 | 0, Z = y, 0 | w;
              }
              return w = 0 | ie(), U[w >> 2] = 12, w = 0, Z = y, 0 | w;
            }
  
            function O(e) {
              e |= 0;
              var t = 0, r = 0, n = 0, o = 0, i = 0, a = 0, s = 0, l = 0;
              if (e) {
                r = e + -8 | 0, o = 0 | U[6], e = 0 | U[e + -4 >> 2], t = e & -8, l = r + t | 0;
                do if (1 & e) s = r, a = r; else {
                  if (n = 0 | U[r >> 2], !(3 & e)) return;
                  if (a = r + (0 - n) | 0, i = n + t | 0, a >>> 0 < o >>> 0) return;
                  if ((0 | U[7]) == (0 | a)) {
                    if (e = l + 4 | 0, t = 0 | U[e >> 2], 3 != (3 & t | 0)) {
                      s = a, t = i;
                      break;
                    }
                    return U[4] = i, U[e >> 2] = t & -2, U[a + 4 >> 2] = 1 | i, void (U[a + i >> 2] = i);
                  }
                  if (r = n >>> 3, n >>> 0 < 256) {
                    if (e = 0 | U[a + 8 >> 2], t = 0 | U[a + 12 >> 2], (0 | t) == (0 | e)) {
                      U[2] = U[2] & ~(1 << r), s = a, t = i;
                      break;
                    }
                    U[e + 12 >> 2] = t, U[t + 8 >> 2] = e, s = a, t = i;
                    break;
                  }
                  o = 0 | U[a + 24 >> 2], e = 0 | U[a + 12 >> 2];
                  do if ((0 | e) == (0 | a)) {
                    if (t = a + 16 | 0, r = t + 4 | 0, e = 0 | U[r >> 2]) t = r; else if (e = 0 | U[t >> 2], !e) {
                      e = 0;
                      break;
                    }
                    for (; ;) if (n = e + 20 | 0, r = 0 | U[n >> 2]) e = r, t = n; else {
                      if (n = e + 16 | 0, r = 0 | U[n >> 2], !r) break;
                      e = r, t = n;
                    }
                    U[t >> 2] = 0;
                  } else s = 0 | U[a + 8 >> 2], U[s + 12 >> 2] = e, U[e + 8 >> 2] = s; while (0);
                  if (o) {
                    if (t = 0 | U[a + 28 >> 2], r = 312 + (t << 2) | 0, (0 | U[r >> 2]) == (0 | a)) {
                      if (U[r >> 2] = e, !e) {
                        U[3] = U[3] & ~(1 << t), s = a, t = i;
                        break;
                      }
                    } else if (s = o + 16 | 0, U[((0 | U[s >> 2]) == (0 | a) ? s : o + 20 | 0) >> 2] = e, !e) {
                      s = a, t = i;
                      break;
                    }
                    U[e + 24 >> 2] = o, t = a + 16 | 0, r = 0 | U[t >> 2], 0 | r &&
                    (U[e + 16 >> 2] = r, U[r + 24 >> 2] = e), t = 0 | U[t + 4 >> 2], t ? (U[e + 20 >> 2] = t, U[t + 24 >>
                    2] = e, s = a, t = i) : (s = a, t = i);
                  } else s = a, t = i;
                } while (0);
                if (!(a >>> 0 >= l >>> 0) && (e = l + 4 | 0, n = 0 | U[e >> 2], 1 & n)) {
                  if (2 & n) U[e >> 2] = n & -2, U[s + 4 >> 2] = 1 | t, U[a + t >> 2] = t, o = t; else {
                    if ((0 | U[8]) == (0 | l)) {
                      if (l = (0 | U[5]) + t | 0, U[5] = l, U[8] = s, U[s + 4 >> 2] = 1 | l, (0 | s) !=
                      (0 | U[7])) return;
                      return U[7] = 0, void (U[4] = 0);
                    }
                    if ((0 | U[7]) == (0 | l)) return l = (0 | U[4]) + t | 0, U[4] = l, U[7] = a, U[s + 4 >> 2] = 1 |
                        l, void (U[a + l >> 2] = l);
                    o = (n & -8) + t | 0, r = n >>> 3;
                    do {
                      if (n >>> 0 < 256) {
                        if (t = 0 | U[l + 8 >> 2], e = 0 | U[l + 12 >> 2], (0 | e) == (0 | t)) {
                          U[2] = U[2] & ~(1 << r);
                          break;
                        }
                        U[t + 12 >> 2] = e, U[e + 8 >> 2] = t;
                        break;
                      }
                      i = 0 | U[l + 24 >> 2], e = 0 | U[l + 12 >> 2];
                      do if ((0 | e) == (0 | l)) {
                        if (t = l + 16 | 0, r = t + 4 | 0, e = 0 | U[r >> 2]) t = r; else if (e = 0 | U[t >> 2], !e) {
                          r = 0;
                          break;
                        }
                        for (; ;) if (n = e + 20 | 0, r = 0 | U[n >> 2]) e = r, t = n; else {
                          if (n = e + 16 | 0, r = 0 | U[n >> 2], !r) break;
                          e = r, t = n;
                        }
                        U[t >> 2] = 0, r = e;
                      } else r = 0 | U[l + 8 >> 2], U[r + 12 >> 2] = e, U[e + 8 >> 2] = r, r = e; while (0);
                      if (0 | i) {
                        if (e = 0 | U[l + 28 >> 2], t = 312 + (e << 2) | 0, (0 | U[t >> 2]) == (0 | l)) {
                          if (U[t >> 2] = r, !r) {
                            U[3] = U[3] & ~(1 << e);
                            break;
                          }
                        } else if (n = i + 16 | 0, U[((0 | U[n >> 2]) == (0 | l) ? n : i + 20 | 0) >> 2] = r, !r) break;
                        U[r + 24 >> 2] = i, e = l + 16 | 0, t = 0 | U[e >> 2], 0 | t &&
                        (U[r + 16 >> 2] = t, U[t + 24 >> 2] = r), e = 0 | U[e + 4 >> 2], 0 | e &&
                        (U[r + 20 >> 2] = e, U[e + 24 >> 2] = r);
                      }
                    } while (0);
                    if (U[s + 4 >> 2] = 1 | o, U[a + o >> 2] = o, (0 | s) == (0 | U[7])) return void (U[4] = o);
                  }
                  if (e = o >>> 3, o >>> 0 < 256) return r = 48 + (e << 1 << 2) | 0, t = 0 | U[2], e = 1 << e, t & e
                      ? (t = r + 8 | 0, e = 0 | U[t >> 2])
                      : (U[2] = t | e, e = r, t = r + 8 | 0), U[t >> 2] = s, U[e + 12 >> 2] = s, U[s + 8 >>
                  2] = e, void (U[s + 12 >> 2] = r);
                  e = o >>> 8, e ? o >>> 0 > 16777215 ? n = 31 : (a = (e + 1048320 | 0) >>> 16 & 8, l = e << a, i = (l +
                      520192 | 0) >>> 16 & 4, l <<= i, n = (l + 245760 | 0) >>> 16 & 2, n = 14 - (i | a | n) +
                      (l << n >>> 15) | 0, n = o >>> (n + 7 | 0) & 1 | n << 1) : n = 0, e = 312 + (n << 2) | 0, U[s +
                  28 >> 2] = n, U[s + 20 >> 2] = 0, U[s + 16 >> 2] = 0, t = 0 | U[3], r = 1 << n;
                  e:do if (t & r) {
                    e = 0 | U[e >> 2];
                    t:do if ((U[e + 4 >> 2] & -8 | 0) != (0 | o)) {
                      for (n = o << (31 == (0 | n) ? 0 : 25 - (n >>> 1) | 0); ;) {
                        if (r = e + 16 + (n >>> 31 << 2) | 0, t = 0 | U[r >> 2], !t) break;
                        if ((U[t + 4 >> 2] & -8 | 0) == (0 | o)) {
                          e = t;
                          break t;
                        }
                        n <<= 1, e = t;
                      }
                      U[r >> 2] = s, U[s + 24 >> 2] = e, U[s + 12 >> 2] = s, U[s + 8 >> 2] = s;
                      break e;
                    } while (0);
                    a = e + 8 | 0, l = 0 | U[a >> 2], U[l + 12 >> 2] = s, U[a >> 2] = s, U[s + 8 >> 2] = l, U[s + 12 >>
                    2] = e, U[s + 24 >> 2] = 0;
                  } else U[3] = t | r, U[e >> 2] = s, U[s + 24 >> 2] = e, U[s + 12 >> 2] = s, U[s + 8 >>
                  2] = s; while (0);
                  if (l = (0 | U[10]) + -1 | 0, U[10] = l, !(0 | l)) {
                    for (e = 464; ;) {
                      if (e = 0 | U[e >> 2], !e) break;
                      e = e + 8 | 0;
                    }
                    U[10] = -1;
                  }
                }
              }
            }
  
            function T() {}
  
            function R(e, t, r) {
              e |= 0, t |= 0, r |= 0;
              var n = 0, o = 0, i = 0;
              if ((0 | r) >= 8192) return 0 | se(0 | e, 0 | t, 0 | r);
              if (i = 0 | e, o = e + r | 0, (3 & e) == (3 & t)) {
                for (; 3 & e;) {
                  if (!r) return 0 | i;
                  L[e >> 0] = 0 | L[t >> 0], e = e + 1 | 0, t = t + 1 | 0, r = r - 1 | 0;
                }
                for (r = o & -4 | 0, n = r - 64 | 0; (0 | e) <= (0 | n);) U[e >> 2] = U[t >> 2], U[e + 4 >> 2] = U[t +
                4 >> 2], U[e + 8 >> 2] = U[t + 8 >> 2], U[e + 12 >> 2] = U[t + 12 >> 2], U[e + 16 >> 2] = U[t + 16 >>
                2], U[e + 20 >> 2] = U[t + 20 >> 2], U[e + 24 >> 2] = U[t + 24 >> 2], U[e + 28 >> 2] = U[t + 28 >>
                2], U[e + 32 >> 2] = U[t + 32 >> 2], U[e + 36 >> 2] = U[t + 36 >> 2], U[e + 40 >> 2] = U[t + 40 >>
                2], U[e + 44 >> 2] = U[t + 44 >> 2], U[e + 48 >> 2] = U[t + 48 >> 2], U[e + 52 >> 2] = U[t + 52 >>
                2], U[e + 56 >> 2] = U[t + 56 >> 2], U[e + 60 >> 2] = U[t + 60 >> 2], e = e + 64 | 0, t = t + 64 | 0;
                for (; (0 | e) < (0 | r);) U[e >> 2] = U[t >> 2], e = e + 4 | 0, t = t + 4 | 0;
              } else for (r = o - 4 | 0; (0 | e) < (0 | r);) L[e >> 0] = 0 | L[t >> 0], L[e + 1 >> 0] = 0 |
                  L[t + 1 >> 0], L[e + 2 >> 0] = 0 | L[t + 2 >> 0], L[e + 3 >> 0] = 0 | L[t + 3 >> 0], e = e + 4 |
                  0, t = t + 4 | 0;
              for (; (0 | e) < (0 | o);) L[e >> 0] = 0 | L[t >> 0], e = e + 1 | 0, t = t + 1 | 0;
              return 0 | i;
            }
  
            function P(e, t, r) {
              e |= 0, t |= 0, r |= 0;
              var n = 0, o = 0, i = 0, a = 0;
              if (i = e + r | 0, t &= 255, (0 | r) >= 67) {
                for (; 3 & e;) L[e >> 0] = t, e = e + 1 | 0;
                for (n = i & -4 | 0, o = n - 64 | 0, a = t | t << 8 | t << 16 | t << 24; (0 | e) <= (0 | o);) U[e >>
                2] = a, U[e + 4 >> 2] = a, U[e + 8 >> 2] = a, U[e + 12 >> 2] = a, U[e + 16 >> 2] = a, U[e + 20 >>
                2] = a, U[e + 24 >> 2] = a, U[e + 28 >> 2] = a, U[e + 32 >> 2] = a, U[e + 36 >> 2] = a, U[e + 40 >>
                2] = a, U[e + 44 >> 2] = a, U[e + 48 >> 2] = a, U[e + 52 >> 2] = a, U[e + 56 >> 2] = a, U[e + 60 >>
                2] = a, e = e + 64 | 0;
                for (; (0 | e) < (0 | n);) U[e >> 2] = a, e = e + 4 | 0;
              }
              for (; (0 | e) < (0 | i);) L[e >> 0] = t, e = e + 1 | 0;
              return i - r | 0;
            }
  
            function N(e) {
              e |= 0;
              var t = 0, r = 0;
              return r = 0 | U[q >> 2], t = r + e | 0, (0 | e) > 0 & (0 | t) < (0 | r) | (0 | t) < 0 ? (0 | oe(), ae(
                  12), -1) : (U[q >> 2] = t, ((0 | t) > (0 | ne()) ? 0 == (0 | re()) : 0)
                  ? (U[q >> 2] = r, ae(12), -1)
                  : 0 | r);
            }
  
            var k = e.Int8Array, L = new k(r), I = e.Int16Array, M = new I(r), B = e.Int32Array, U = new B(r),
                D = e.Uint8Array, F = new D(r), j = e.Uint16Array, H = new j(r), Y = e.Uint32Array, z = new Y(r),
                V = e.Float32Array, G = new V(r), $ = e.Float64Array, W = new $(r), K = e.byteLength,
                q = 0 | t.DYNAMICTOP_PTR, Z = (0 | t.tempDoublePtr, 0 | t.ABORT, 0 | t.STACKTOP), J = 0 | t.STACK_MAX,
                X = 0, Q = 0, ee = (e.NaN, e.Infinity, 0),
                te = (e.Math.floor, e.Math.abs, e.Math.sqrt, e.Math.pow, e.Math.cos, e.Math.sin, e.Math.tan, e.Math.acos, e.Math.asin, e.Math.atan, e.Math.atan2, e.Math.exp, e.Math.log, e.Math.ceil, e.Math.imul),
                re = (e.Math.min, e.Math.max, e.Math.clz32, t.abort, t.assert, t.enlargeMemory), ne = t.getTotalMemory,
                oe = t.abortOnCannotGrowMemory, ie = t.___errno_location, ae = t.___setErrNo,
                se = t._emscripten_memcpy_big;
            return {
              _emscripten_replace_memory: n,
              _free: O,
              _llparser_add_rule: b,
              _llparser_create: c,
              _llparser_create_descriptor: p,
              _llparser_descriptor_add_char: v,
              _llparser_descriptor_add_range: m,
              _llparser_descriptor_revert: g,
              _llparser_descriptor_set_all: h,
              _llparser_descriptor_set_nil: d,
              _llparser_destroy: _,
              _llparser_get_input_buffer: C,
              _llparser_get_result: S,
              _llparser_parse: E,
              _llparser_prepare: w,
              _malloc: A,
              _memcpy: R,
              _memset: P,
              _sbrk: N,
              establishStackSpace: s,
              getTempRet0: f,
              runPostSets: T,
              setTempRet0: u,
              setThrew: l,
              stackAlloc: o,
              stackRestore: a,
              stackSave: i,
            };
          }(o.a, o.c, k);
          var H = o._emscripten_replace_memory = R._emscripten_replace_memory;
          if (o._free = R._free, o._llparser_add_rule = R._llparser_add_rule, o._llparser_create = R._llparser_create, o._llparser_create_descriptor = R._llparser_create_descriptor, o._llparser_descriptor_add_char = R._llparser_descriptor_add_char, o._llparser_descriptor_add_range = R._llparser_descriptor_add_range, o._llparser_descriptor_revert = R._llparser_descriptor_revert, o._llparser_descriptor_set_all = R._llparser_descriptor_set_all, o._llparser_descriptor_set_nil = R._llparser_descriptor_set_nil, o._llparser_destroy = R._llparser_destroy, o._llparser_get_input_buffer = R._llparser_get_input_buffer, o._llparser_get_result = R._llparser_get_result, o._llparser_parse = R._llparser_parse, o._llparser_prepare = R._llparser_prepare, o._malloc = R._malloc, o._memcpy = R._memcpy, o._memset = R._memset, o._sbrk = R._sbrk, o.establishStackSpace = R.establishStackSpace, o.getTempRet0 = R.getTempRet0, o.runPostSets = R.runPostSets, o.setTempRet0 = R.setTempRet0, o.setThrew = R.setThrew, o.stackAlloc = R.stackAlloc, o.stackRestore = R.stackRestore, o.stackSave = R.stackSave, o.asm = R, o.getValue = function(
              e, t) {
            switch (t = t || 'i8', '*' === t.charAt(t.length - 1) && (t = 'i32'), t) {
              case'i1':
                return w[e >> 0];
              case'i8':
                return w[e >> 0];
              case'i16':
                return E[e >> 1];
              case'i32':
                return x[e >> 2];
              case'i64':
                return x[e >> 2];
              case'float':
                return C[e >> 2];
              case'double':
                return S[e >> 3];
              default:
                _('invalid type for getValue: ' + t);
            }
            return null;
          }, o.stringToUTF16 = function(e, t, r) {
            if (void 0 === r && (r = 2147483647), 2 > r) return 0;
            r -= 2;
            var n = t;
            r = r < 2 * e.length ? r / 2 : e.length;
            for (var o = 0; o < r; ++o) E[t >> 1] = e.charCodeAt(o), t += 2;
            return E[t >> 1] = 0, t - n;
          }, h && ((String.prototype.startsWith ? h.startsWith(F) : 0 === h.indexOf(F)) ||
          ('function' == typeof o.locateFile ? h = o.locateFile(h) : o.memoryInitializerPrefixURL &&
              (h = o.memoryInitializerPrefixURL + h)), R = o.readBinary(h), y.set(R,
              8)), f.prototype = Error(), f.prototype.constructor = f, o.run = c, o.abort = _, o.preInit) for ('function' ==
                                                                                                               typeof o.preInit &&
                                                                                                               (o.preInit = [o.preInit]); 0 <
                                                                                                               o.preInit.length;) o.preInit.pop()();
          o.noExitRuntime = !0, c();
        }(e.exports);
      }).call(t, r(8).Buffer, r(12));
    },
    function(e, t, r) {
      (function(e) {/*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
        'use strict';
  
        function n() {
          try {
            var e = new Uint8Array(1);
            return e.__proto__ = {__proto__: Uint8Array.prototype, foo: function() {return 42;}}, 42 === e.foo() &&
            'function' == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
          } catch (e) {return !1;}
        }
  
        function o() {return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;}
  
        function i(e, t) {
          if (o() < t) throw new RangeError('Invalid typed array length');
          return a.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = a.prototype) : (null === e &&
          (e = new a(t)), e.length = t), e;
        }
  
        function a(e, t, r) {
          if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(e, t, r);
          if ('number' == typeof e) {
            if ('string' == typeof t) throw new Error(
                'If encoding is specified then the first argument must be a string');
            return f(this, e);
          }
          return s(this, e, t, r);
        }
  
        function s(e, t, r, n) {
          if ('number' == typeof t) throw new TypeError('"value" argument must not be a number');
          return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer ? p(e, t, r, n) : 'string' == typeof t ? c(
              e, t, r) : h(e, t);
        }
  
        function l(e) {
          if ('number' != typeof e) throw new TypeError('"size" argument must be a number');
          if (e < 0) throw new RangeError('"size" argument must not be negative');
        }
  
        function u(e, t, r, n) {
          return l(t), t <= 0 ? i(e, t) : void 0 !== r ? 'string' == typeof n
              ? i(e, t).fill(r, n)
              : i(e, t).fill(r) : i(e, t);
        }
  
        function f(e, t) {
          if (l(t), e = i(e, t < 0 ? 0 : 0 | d(t)), !a.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) e[r] = 0;
          return e;
        }
  
        function c(e, t, r) {
          if ('string' == typeof r && '' !== r || (r = 'utf8'), !a.isEncoding(r)) throw new TypeError(
              '"encoding" must be a valid string encoding');
          var n = 0 | m(t, r);
          e = i(e, n);
          var o = e.write(t, r);
          return o !== n && (e = e.slice(0, o)), e;
        }
  
        function _(e, t) {
          var r = t.length < 0 ? 0 : 0 | d(t.length);
          e = i(e, r);
          for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
          return e;
        }
  
        function p(e, t, r, n) {
          if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError('\'offset\' is out of bounds');
          if (t.byteLength < r + (n || 0)) throw new RangeError('\'length\' is out of bounds');
          return t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n
              ? new Uint8Array(t, r)
              : new Uint8Array(t, r, n), a.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = a.prototype) : e = _(e, t), e;
        }
  
        function h(e, t) {
          if (a.isBuffer(t)) {
            var r = 0 | d(t.length);
            return e = i(e, r), 0 === e.length ? e : (t.copy(e, 0, 0, r), e);
          }
          if (t) {
            if ('undefined' != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || 'length' in t) return 'number' !=
            typeof t.length || Z(t.length) ? i(e, 0) : _(e, t);
            if ('Buffer' === t.type && Q(t.data)) return _(e, t.data);
          }
          throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
        }
  
        function d(e) {
          if (e >= o()) throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' + o().toString(16) + ' bytes');
          return 0 | e;
        }
  
        function v(e) {return +e != e && (e = 0), a.alloc(+e);}
  
        function m(e, t) {
          if (a.isBuffer(e)) return e.length;
          if ('undefined' != typeof ArrayBuffer && 'function' == typeof ArrayBuffer.isView &&
              (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
          'string' != typeof e && (e = '' + e);
          var r = e.length;
          if (0 === r) return 0;
          for (var n = !1; ;) switch (t) {
            case'ascii':
            case'latin1':
            case'binary':
              return r;
            case'utf8':
            case'utf-8':
            case void 0:
              return G(e).length;
            case'ucs2':
            case'ucs-2':
            case'utf16le':
            case'utf-16le':
              return 2 * r;
            case'hex':
              return r >>> 1;
            case'base64':
              return K(e).length;
            default:
              if (n) return G(e).length;
              t = ('' + t).toLowerCase(), n = !0;
          }
        }
  
        function g(e, t, r) {
          var n = !1;
          if ((void 0 === t || t < 0) && (t = 0), t > this.length) return '';
          if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return '';
          if (r >>>= 0, t >>>= 0, r <= t) return '';
          for (e || (e = 'utf8'); ;) switch (e) {
            case'hex':
              return L(this, t, r);
            case'utf8':
            case'utf-8':
              return R(this, t, r);
            case'ascii':
              return N(this, t, r);
            case'latin1':
            case'binary':
              return k(this, t, r);
            case'base64':
              return T(this, t, r);
            case'ucs2':
            case'ucs-2':
            case'utf16le':
            case'utf-16le':
              return I(this, t, r);
            default:
              if (n) throw new TypeError('Unknown encoding: ' + e);
              e = (e + '').toLowerCase(), n = !0;
          }
        }
  
        function b(e, t, r) {
          var n = e[t];
          e[t] = e[r], e[r] = n;
        }
  
        function w(e, t, r, n, o) {
          if (0 === e.length) return -1;
          if ('string' == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 &&
              (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >=
          e.length) {
            if (o) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!o) return -1;
            r = 0;
          }
          if ('string' == typeof t && (t = a.from(t, n)), a.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, r, n, o);
          if ('number' == typeof t) return t &= 255, a.TYPED_ARRAY_SUPPORT && 'function' ==
          typeof Uint8Array.prototype.indexOf ? o
              ? Uint8Array.prototype.indexOf.call(e, t, r)
              : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, n, o);
          throw new TypeError('val must be string, number or Buffer');
        }
  
        function y(e, t, r, n, o) {
          function i(e, t) {return 1 === a ? e[t] : e.readUInt16BE(t * a);}
  
          var a = 1, s = e.length, l = t.length;
          if (void 0 !== n &&
              (n = String(n).toLowerCase(), 'ucs2' === n || 'ucs-2' === n || 'utf16le' === n || 'utf-16le' === n)) {
            if (e.length < 2 || t.length < 2) return -1;
            a = 2, s /= 2, l /= 2, r /= 2;
          }
          var u;
          if (o) {
            var f = -1;
            for (u = r; u < s; u++) if (i(e, u) === i(t, f === -1 ? 0 : u - f)) {
              if (f === -1 && (f = u), u - f + 1 === l) return f * a;
            } else f !== -1 && (u -= u - f), f = -1;
          } else for (r + l > s && (r = s - l), u = r; u >= 0; u--) {
            for (var c = !0, _ = 0; _ < l; _++) if (i(e, u + _) !== i(t, _)) {
              c = !1;
              break;
            }
            if (c) return u;
          }
          return -1;
        }
  
        function E(e, t, r, n) {
          r = Number(r) || 0;
          var o = e.length - r;
          n ? (n = Number(n), n > o && (n = o)) : n = o;
          var i = t.length;
          if (i % 2 !== 0) throw new TypeError('Invalid hex string');
          n > i / 2 && (n = i / 2);
          for (var a = 0; a < n; ++a) {
            var s = parseInt(t.substr(2 * a, 2), 16);
            if (isNaN(s)) return a;
            e[r + a] = s;
          }
          return a;
        }
  
        function x(e, t, r, n) {return q(G(t, e.length - r), e, r, n);}
  
        function C(e, t, r, n) {return q($(t), e, r, n);}
  
        function S(e, t, r, n) {return C(e, t, r, n);}
  
        function A(e, t, r, n) {return q(K(t), e, r, n);}
  
        function O(e, t, r, n) {return q(W(t, e.length - r), e, r, n);}
  
        function T(e, t, r) {return 0 === t && r === e.length ? J.fromByteArray(e) : J.fromByteArray(e.slice(t, r));}
  
        function R(e, t, r) {
          r = Math.min(e.length, r);
          for (var n = [], o = t; o < r;) {
            var i = e[o], a = null, s = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
            if (o + s <= r) {
              var l, u, f, c;
              switch (s) {
                case 1:
                  i < 128 && (a = i);
                  break;
                case 2:
                  l = e[o + 1], 128 === (192 & l) && (c = (31 & i) << 6 | 63 & l, c > 127 && (a = c));
                  break;
                case 3:
                  l = e[o + 1], u = e[o + 2], 128 === (192 & l) && 128 === (192 & u) &&
                  (c = (15 & i) << 12 | (63 & l) << 6 | 63 & u, c > 2047 && (c < 55296 || c > 57343) && (a = c));
                  break;
                case 4:
                  l = e[o + 1], u = e[o + 2], f = e[o + 3], 128 === (192 & l) && 128 === (192 & u) && 128 === (192 & f) &&
                  (c = (15 & i) << 18 | (63 & l) << 12 | (63 & u) << 6 | 63 & f, c > 65535 && c < 1114112 && (a = c));
              }
            }
            null === a ? (a = 65533, s = 1) : a > 65535 &&
                (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), o += s;
          }
          return P(n);
        }
  
        function P(e) {
          var t = e.length;
          if (t <= ee) return String.fromCharCode.apply(String, e);
          for (var r = '', n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += ee));
          return r;
        }
  
        function N(e, t, r) {
          var n = '';
          r = Math.min(e.length, r);
          for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
          return n;
        }
  
        function k(e, t, r) {
          var n = '';
          r = Math.min(e.length, r);
          for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
          return n;
        }
  
        function L(e, t, r) {
          var n = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
          for (var o = '', i = t; i < r; ++i) o += V(e[i]);
          return o;
        }
  
        function I(e, t, r) {
          for (var n = e.slice(t, r), o = '', i = 0; i < n.length; i += 2) o += String.fromCharCode(
              n[i] + 256 * n[i + 1]);
          return o;
        }
  
        function M(e, t, r) {
          if (e % 1 !== 0 || e < 0) throw new RangeError('offset is not uint');
          if (e + t > r) throw new RangeError('Trying to access beyond buffer length');
        }
  
        function B(e, t, r, n, o, i) {
          if (!a.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
          if (r + n > e.length) throw new RangeError('Index out of range');
        }
  
        function U(e, t, r, n) {
          t < 0 && (t = 65535 + t + 1);
          for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o) e[r + o] = (t & 255 << 8 * (n ? o : 1 - o)) >>> 8 *
              (n ? o : 1 - o);
        }
  
        function D(e, t, r, n) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o) e[r + o] = t >>> 8 * (n ? o : 3 - o) & 255;
        }
  
        function F(e, t, r, n, o, i) {
          if (r + n > e.length) throw new RangeError('Index out of range');
          if (r < 0) throw new RangeError('Index out of range');
        }
  
        function j(e, t, r, n, o) {
          return o || F(e, t, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(e, t, r, n, 23, 4), r + 4;
        }
  
        function H(e, t, r, n, o) {
          return o || F(e, t, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(e, t, r, n, 52, 8), r + 8;
        }
  
        function Y(e) {
          if (e = z(e).replace(te, ''), e.length < 2) return '';
          for (; e.length % 4 !== 0;) e += '=';
          return e;
        }
  
        function z(e) {return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');}
  
        function V(e) {return e < 16 ? '0' + e.toString(16) : e.toString(16);}
  
        function G(e, t) {
          t = t || 1 / 0;
          for (var r, n = e.length, o = null, i = [], a = 0; a < n; ++a) {
            if (r = e.charCodeAt(a), r > 55295 && r < 57344) {
              if (!o) {
                if (r > 56319) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === n) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                o = r;
                continue;
              }
              if (r < 56320) {
                (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                continue;
              }
              r = (o - 55296 << 10 | r - 56320) + 65536;
            } else o && (t -= 3) > -1 && i.push(239, 191, 189);
            if (o = null, r < 128) {
              if ((t -= 1) < 0) break;
              i.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              i.push(r >> 6 | 192, 63 & r | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
            } else {
              if (!(r < 1114112)) throw new Error('Invalid code point');
              if ((t -= 4) < 0) break;
              i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
            }
          }
          return i;
        }
  
        function $(e) {
          for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
          return t;
        }
  
        function W(e, t) {
          for (var r, n, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = e.charCodeAt(a), n = r >> 8, o = r %
              256, i.push(o), i.push(n);
          return i;
        }
  
        function K(e) {return J.toByteArray(Y(e));}
  
        function q(e, t, r, n) {
          for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
          return o;
        }
  
        function Z(e) {return e !== e;}
  
        var J = r(9), X = r(10), Q = r(11);
        t.Buffer = a, t.SlowBuffer = v, t.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : n(), t.kMaxLength = o(), a.poolSize = 8192, a._augment = function(e) {return e.__proto__ = a.prototype, e;}, a.from = function(
            e, t, r) {
          return s(null, e, t, r);
        }, a.TYPED_ARRAY_SUPPORT &&
        (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, 'undefined' != typeof Symbol &&
        Symbol.species && a[Symbol.species] === a &&
        Object.defineProperty(a, Symbol.species, {value: null, configurable: !0})), a.alloc = function(e, t, r) {
          return u(null, e, t, r);
        }, a.allocUnsafe = function(e) {return f(null, e);}, a.allocUnsafeSlow = function(e) {
          return f(null, e);
        }, a.isBuffer = function(e) {return !(null == e || !e._isBuffer);}, a.compare = function(e, t) {
          if (!a.isBuffer(e) || !a.isBuffer(t)) throw new TypeError('Arguments must be Buffers');
          if (e === t) return 0;
          for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o) if (e[o] !== t[o]) {
            r = e[o], n = t[o];
            break;
          }
          return r < n ? -1 : n < r ? 1 : 0;
        }, a.isEncoding = function(e) {
          switch (String(e).toLowerCase()) {
            case'hex':
            case'utf8':
            case'utf-8':
            case'ascii':
            case'latin1':
            case'binary':
            case'base64':
            case'ucs2':
            case'ucs-2':
            case'utf16le':
            case'utf-16le':
              return !0;
            default:
              return !1;
          }
        }, a.concat = function(e, t) {
          if (!Q(e)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return a.alloc(0);
          var r;
          if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
          var n = a.allocUnsafe(t), o = 0;
          for (r = 0; r < e.length; ++r) {
            var i = e[r];
            if (!a.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
            i.copy(n, o), o += i.length;
          }
          return n;
        }, a.byteLength = m, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
          var e = this.length;
          if (e % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (var t = 0; t < e; t += 2) b(this, t, t + 1);
          return this;
        }, a.prototype.swap32 = function() {
          var e = this.length;
          if (e % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
          for (var t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
          return this;
        }, a.prototype.swap64 = function() {
          var e = this.length;
          if (e % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
          for (var t = 0; t < e; t += 8) b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3,
              t + 4);
          return this;
        }, a.prototype.toString = function() {
          var e = 0 | this.length;
          return 0 === e ? '' : 0 === arguments.length ? R(this, 0, e) : g.apply(this, arguments);
        }, a.prototype.equals = function(e) {
          if (!a.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
          return this === e || 0 === a.compare(this, e);
        }, a.prototype.inspect = function() {
          var e = '', r = t.INSPECT_MAX_BYTES;
          return this.length > 0 &&
          (e = this.toString('hex', 0, r).match(/.{2}/g).join(' '), this.length > r && (e += ' ... ')), '<Buffer ' + e +
          '>';
        }, a.prototype.compare = function(e, t, r, n, o) {
          if (!a.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
          if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o &&
          (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw new RangeError(
              'out of range index');
          if (n >= o && t >= r) return 0;
          if (n >= o) return -1;
          if (t >= r) return 1;
          if (t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === e) return 0;
          for (var i = o - n, s = r - t, l = Math.min(i, s), u = this.slice(n, o), f = e.slice(t, r), c = 0; c <
          l; ++c) if (u[c] !== f[c]) {
            i = u[c], s = f[c];
            break;
          }
          return i < s ? -1 : s < i ? 1 : 0;
        }, a.prototype.includes = function(e, t, r) {
          return this.indexOf(e, t, r) !== -1;
        }, a.prototype.indexOf = function(e, t, r) {return w(this, e, t, r, !0);}, a.prototype.lastIndexOf = function(
            e, t, r) {
          return w(this, e, t, r, !1);
        }, a.prototype.write = function(e, t, r, n) {
          if (void 0 === t) n = 'utf8', r = this.length, t = 0; else if (void 0 === r && 'string' ==
              typeof t) n = t, r = this.length, t = 0; else {
            if (!isFinite(t)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
            t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = 'utf8')) : (n = r, r = void 0);
          }
          var o = this.length - t;
          if ((void 0 === r || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t >
          this.length) throw new RangeError('Attempt to write outside buffer bounds');
          n || (n = 'utf8');
          for (var i = !1; ;) switch (n) {
            case'hex':
              return E(this, e, t, r);
            case'utf8':
            case'utf-8':
              return x(this, e, t, r);
            case'ascii':
              return C(this, e, t, r);
            case'latin1':
            case'binary':
              return S(this, e, t, r);
            case'base64':
              return A(this, e, t, r);
            case'ucs2':
            case'ucs-2':
            case'utf16le':
            case'utf-16le':
              return O(this, e, t, r);
            default:
              if (i) throw new TypeError('Unknown encoding: ' + n);
              n = ('' + n).toLowerCase(), i = !0;
          }
        }, a.prototype.toJSON = function() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        };
        var ee = 4096;
        a.prototype.slice = function(e, t) {
          var r = this.length;
          e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t <
          0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
          var n;
          if (a.TYPED_ARRAY_SUPPORT) n = this.subarray(e, t), n.__proto__ = a.prototype; else {
            var o = t - e;
            n = new a(o, void 0);
            for (var i = 0; i < o; ++i) n[i] = this[i + e];
          }
          return n;
        }, a.prototype.readUIntLE = function(e, t, r) {
          e |= 0, t |= 0, r || M(e, t, this.length);
          for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
          return n;
        }, a.prototype.readUIntBE = function(e, t, r) {
          e |= 0, t |= 0, r || M(e, t, this.length);
          for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
          return n;
        }, a.prototype.readUInt8 = function(e, t) {
          return t || M(e, 1, this.length), this[e];
        }, a.prototype.readUInt16LE = function(e, t) {
          return t || M(e, 2, this.length), this[e] | this[e + 1] << 8;
        }, a.prototype.readUInt16BE = function(e, t) {
          return t || M(e, 2, this.length), this[e] << 8 | this[e + 1];
        }, a.prototype.readUInt32LE = function(e, t) {
          return t || M(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
        }, a.prototype.readUInt32BE = function(e, t) {
          return t || M(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
        }, a.prototype.readIntLE = function(e, t, r) {
          e |= 0, t |= 0, r || M(e, t, this.length);
          for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
          return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n;
        }, a.prototype.readIntBE = function(e, t, r) {
          e |= 0, t |= 0, r || M(e, t, this.length);
          for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);) i += this[e + --n] * o;
          return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i;
        }, a.prototype.readInt8 = function(e, t) {
          return t || M(e, 1, this.length), 128 & this[e] ? (255 - this[e] + 1) * -1 : this[e];
        }, a.prototype.readInt16LE = function(e, t) {
          t || M(e, 2, this.length);
          var r = this[e] | this[e + 1] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, a.prototype.readInt16BE = function(e, t) {
          t || M(e, 2, this.length);
          var r = this[e + 1] | this[e] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, a.prototype.readInt32LE = function(e, t) {
          return t || M(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
        }, a.prototype.readInt32BE = function(e, t) {
          return t || M(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
        }, a.prototype.readFloatLE = function(e, t) {
          return t || M(e, 4, this.length), X.read(this, e, !0, 23, 4);
        }, a.prototype.readFloatBE = function(e, t) {
          return t || M(e, 4, this.length), X.read(this, e, !1, 23, 4);
        }, a.prototype.readDoubleLE = function(e, t) {
          return t || M(e, 8, this.length), X.read(this, e, !0, 52, 8);
        }, a.prototype.readDoubleBE = function(e, t) {
          return t || M(e, 8, this.length), X.read(this, e, !1, 52, 8);
        }, a.prototype.writeUIntLE = function(e, t, r, n) {
          if (e = +e, t |= 0, r |= 0, !n) {
            var o = Math.pow(2, 8 * r) - 1;
            B(this, e, t, r, o, 0);
          }
          var i = 1, a = 0;
          for (this[t] = 255 & e; ++a < r && (i *= 256);) this[t + a] = e / i & 255;
          return t + r;
        }, a.prototype.writeUIntBE = function(e, t, r, n) {
          if (e = +e, t |= 0, r |= 0, !n) {
            var o = Math.pow(2, 8 * r) - 1;
            B(this, e, t, r, o, 0);
          }
          var i = r - 1, a = 1;
          for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
          return t + r;
        }, a.prototype.writeUInt8 = function(e, t, r) {
          return e = +e, t |= 0, r || B(this, e, t, 1, 255, 0), a.TYPED_ARRAY_SUPPORT ||
          (e = Math.floor(e)), this[t] = 255 & e, t + 1;
        }, a.prototype.writeUInt16LE = function(e, t, r) {
          return e = +e, t |= 0, r || B(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t +
          1] = e >>> 8) : U(this, e, t, !0), t + 2;
        }, a.prototype.writeUInt16BE = function(e, t, r) {
          return e = +e, t |= 0, r || B(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t +
          1] = 255 & e) : U(this, e, t, !1), t + 2;
        }, a.prototype.writeUInt32LE = function(e, t, r) {
          return e = +e, t |= 0, r || B(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>>
              24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : D(this, e, t, !0), t + 4;
        }, a.prototype.writeUInt32BE = function(e, t, r) {
          return e = +e, t |= 0, r || B(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>>
              24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4;
        }, a.prototype.writeIntLE = function(e, t, r, n) {
          if (e = +e, t |= 0, !n) {
            var o = Math.pow(2, 8 * r - 1);
            B(this, e, t, r, o - 1, -o);
          }
          var i = 0, a = 1, s = 0;
          for (this[t] = 255 & e; ++i < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t +
          i] = (e / a >> 0) - s & 255;
          return t + r;
        }, a.prototype.writeIntBE = function(e, t, r, n) {
          if (e = +e, t |= 0, !n) {
            var o = Math.pow(2, 8 * r - 1);
            B(this, e, t, r, o - 1, -o);
          }
          var i = r - 1, a = 1, s = 0;
          for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] &&
          (s = 1), this[t + i] = (e / a >> 0) - s & 255;
          return t + r;
        }, a.prototype.writeInt8 = function(e, t, r) {
          return e = +e, t |= 0, r || B(this, e, t, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 &&
          (e = 255 + e + 1), this[t] = 255 & e, t + 1;
        }, a.prototype.writeInt16LE = function(e, t, r) {
          return e = +e, t |= 0, r || B(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 &
              e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2;
        }, a.prototype.writeInt16BE = function(e, t, r) {
          return e = +e, t |= 0, r || B(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>>
              8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2;
        }, a.prototype.writeInt32LE = function(e, t, r) {
          return e = +e, t |= 0, r || B(this, e, t, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 &
              e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : D(this, e, t, !0), t + 4;
        }, a.prototype.writeInt32BE = function(e, t, r) {
          return e = +e, t |= 0, r || B(this, e, t, 4, 2147483647, -2147483648), e < 0 &&
          (e = 4294967295 + e + 1), a.TYPED_ARRAY_SUPPORT
              ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e)
              : D(this, e, t, !1), t + 4;
        }, a.prototype.writeFloatLE = function(e, t, r) {
          return j(this, e, t, !0, r);
        }, a.prototype.writeFloatBE = function(e, t, r) {
          return j(this, e, t, !1, r);
        }, a.prototype.writeDoubleLE = function(e, t, r) {
          return H(this, e, t, !0, r);
        }, a.prototype.writeDoubleBE = function(e, t, r) {return H(this, e, t, !1, r);}, a.prototype.copy = function(
            e, t, r, n) {
          if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n <
          r && (n = r), n === r) return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError('targetStart out of bounds');
          if (r < 0 || r >= this.length) throw new RangeError('sourceStart out of bounds');
          if (n < 0) throw new RangeError('sourceEnd out of bounds');
          n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
          var o, i = n - r;
          if (this === e && r < t && t < n) for (o = i - 1; o >= 0; --o) e[o + t] = this[o + r]; else if (i < 1e3 ||
              !a.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) e[o + t] = this[o + r]; else Uint8Array.prototype.set.call(
              e, this.subarray(r, r + i), t);
          return i;
        }, a.prototype.fill = function(e, t, r, n) {
          if ('string' == typeof e) {
            if ('string' == typeof t
                ? (n = t, t = 0, r = this.length)
                : 'string' == typeof r && (n = r, r = this.length), 1 === e.length) {
              var o = e.charCodeAt(0);
              o < 256 && (e = o);
            }
            if (void 0 !== n && 'string' != typeof n) throw new TypeError('encoding must be a string');
            if ('string' == typeof n && !a.isEncoding(n)) throw new TypeError('Unknown encoding: ' + n);
          } else 'number' == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < r) throw new RangeError('Out of range index');
          if (r <= t) return this;
          t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0);
          var i;
          if ('number' == typeof e) for (i = t; i < r; ++i) this[i] = e; else {
            var s = a.isBuffer(e) ? e : G(new a(e, n).toString()), l = s.length;
            for (i = 0; i < r - t; ++i) this[i + t] = s[i % l];
          }
          return this;
        };
        var te = /[^+\/0-9A-Za-z-_]/g;
      }).call(t, function() {return this;}());
    },
    function(e, t) {
      'use strict';
  
      function r(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
        var r = e.indexOf('=');
        r === -1 && (r = t);
        var n = r === t ? 0 : 4 - r % 4;
        return [r, n];
      }
  
      function n(e) {
        var t = r(e), n = t[0], o = t[1];
        return 3 * (n + o) / 4 - o;
      }
  
      function o(e, t, r) {return 3 * (t + r) / 4 - r;}
  
      function i(e) {
        for (var t, n = r(e), i = n[0], a = n[1], s = new c(o(e, i, a)), l = 0, u = a > 0
            ? i - 4
            : i, _ = 0; _ < u; _ += 4) t = f[e.charCodeAt(_)] << 18 | f[e.charCodeAt(_ + 1)] << 12 |
            f[e.charCodeAt(_ + 2)] << 6 | f[e.charCodeAt(_ + 3)], s[l++] = t >> 16 & 255, s[l++] = t >> 8 &
            255, s[l++] = 255 & t;
        return 2 === a && (t = f[e.charCodeAt(_)] << 2 | f[e.charCodeAt(_ + 1)] >> 4, s[l++] = 255 & t), 1 === a &&
        (t = f[e.charCodeAt(_)] << 10 | f[e.charCodeAt(_ + 1)] << 4 | f[e.charCodeAt(_ + 2)] >> 2, s[l++] = t >> 8 &
            255, s[l++] = 255 & t), s;
      }
  
      function a(e) {return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e];}
  
      function s(e, t, r) {
        for (var n, o = [], i = t; i < r; i += 3) n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) +
            (255 & e[i + 2]), o.push(a(n));
        return o.join('');
      }
  
      function l(e) {
        for (var t, r = e.length, n = r % 3, o = [], i = 16383, a = 0, l = r - n; a < l; a += i) o.push(
            s(e, a, a + i > l ? l : a + i));
        return 1 === n ? (t = e[r - 1], o.push(u[t >> 2] + u[t << 4 & 63] + '==')) : 2 === n &&
            (t = (e[r - 2] << 8) + e[r - 1], o.push(u[t >> 10] + u[t >> 4 & 63] + u[t << 2 & 63] + '=')), o.join('');
      }
  
      t.byteLength = n, t.toByteArray = i, t.fromByteArray = l;
      for (var u = [], f = [], c = 'undefined' != typeof Uint8Array
          ? Uint8Array
          : Array, _ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', p = 0, h = _.length; p <
           h; ++p) u[p] = _[p], f[_.charCodeAt(p)] = p;
      f['-'.charCodeAt(0)] = 62, f['_'.charCodeAt(0)] = 63;
    },
    function(e, t) {
      t.read = function(e, t, r, n, o) {
        var i, a, s = 8 * o - n - 1, l = (1 << s) - 1, u = l >> 1, f = -7, c = r ? o - 1 : 0, _ = r ? -1 : 1,
            p = e[t + c];
        for (c += _, i = p & (1 << -f) - 1, p >>= -f, f += s; f > 0; i = 256 * i + e[t + c], c += _, f -= 8) ;
        for (a = i & (1 << -f) - 1, i >>= -f, f += n; f > 0; a = 256 * a + e[t + c], c += _, f -= 8) ;
        if (0 === i) i = 1 - u; else {
          if (i === l) return a ? NaN : (p ? -1 : 1) * (1 / 0);
          a += Math.pow(2, n), i -= u;
        }
        return (p ? -1 : 1) * a * Math.pow(2, i - n);
      }, t.write = function(e, t, r, n, o, i) {
        var a, s, l, u = 8 * i - o - 1, f = (1 << u) - 1, c = f >> 1,
            _ = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : i - 1, h = n ? 1 : -1,
            d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = f) : (a = Math.floor(
            Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), t += a + c >= 1 ? _ / l : _ *
            Math.pow(2, 1 - c), t * l >= 2 && (a++, l /= 2), a + c >= f ? (s = 0, a = f) : a + c >= 1 ? (s = (t * l - 1) *
            Math.pow(2, o), a += c) : (s = t * Math.pow(2, c - 1) * Math.pow(2, o), a = 0)); o >= 8; e[r + p] = 255 &
            s, p += h, s /= 256, o -= 8) ;
        for (a = a << o | s, u += o; u > 0; e[r + p] = 255 & a, p += h, a /= 256, u -= 8) ;
        e[r + p - h] |= 128 * d;
      };
    },
    function(e, t) {
      var r = {}.toString;
      e.exports = Array.isArray || function(e) {return '[object Array]' == r.call(e);};
    },
    function(e, t) {
      function r() {throw new Error('setTimeout has not been defined');}
  
      function n() {throw new Error('clearTimeout has not been defined');}
  
      function o(e) {
        if (f === setTimeout) return setTimeout(e, 0);
        if ((f === r || !f) && setTimeout) return f = setTimeout, setTimeout(e, 0);
        try {return f(e, 0);} catch (t) {try {return f.call(null, e, 0);} catch (t) {return f.call(this, e, 0);}}
      }
  
      function i(e) {
        if (c === clearTimeout) return clearTimeout(e);
        if ((c === n || !c) && clearTimeout) return c = clearTimeout, clearTimeout(e);
        try {return c(e);} catch (t) {try {return c.call(null, e);} catch (t) {return c.call(this, e);}}
      }
  
      function a() {d && p && (d = !1, p.length ? h = p.concat(h) : v = -1, h.length && s());}
  
      function s() {
        if (!d) {
          var e = o(a);
          d = !0;
          for (var t = h.length; t;) {
            for (p = h, h = []; ++v < t;) p && p[v].run();
            v = -1, t = h.length;
          }
          p = null, d = !1, i(e);
        }
      }
  
      function l(e, t) {this.fun = e, this.array = t;}
  
      function u() {}
  
      var f, c, _ = e.exports = {};
      !function() {
        try {f = 'function' == typeof setTimeout ? setTimeout : r;} catch (e) {f = r;}
        try {c = 'function' == typeof clearTimeout ? clearTimeout : n;} catch (e) {c = n;}
      }();
      var p, h = [], d = !1, v = -1;
      _.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        h.push(new l(e, t)), 1 !== h.length || d || o(s);
      }, l.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, _.title = 'browser', _.browser = !0, _.env = {}, _.argv = [], _.version = '', _.versions = {}, _.on = u, _.addListener = u, _.once = u, _.off = u, _.removeListener = u, _.removeAllListeners = u, _.emit = u, _.prependListener = u, _.prependOnceListener = u, _.listeners = function(e) {return [];}, _.binding = function(e) {
        throw new Error('process.binding is not supported');
      }, _.cwd = function() {return '/';}, _.chdir = function(e) {
        throw new Error('process.chdir is not supported');
      }, _.umask = function() {return 0;};
    },
    function(e, t, r) {
      (function(e) {
        function r(e, t) {
          for (var r = 0, n = e.length - 1; n >= 0; n--) {
            var o = e[n];
            '.' === o ? e.splice(n, 1) : '..' === o ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
          }
          if (t) for (; r--; r) e.unshift('..');
          return e;
        }
  
        function n(e, t) {
          if (e.filter) return e.filter(t);
          for (var r = [], n = 0; n < e.length; n++) t(e[n], n, e) && r.push(e[n]);
          return r;
        }
  
        var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            i = function(e) {return o.exec(e).slice(1);};
        t.resolve = function() {
          for (var t = '', o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
            var a = i >= 0
                ? arguments[i]
                : e.cwd();
            if ('string' != typeof a) throw new TypeError('Arguments to path.resolve must be strings');
            a && (t = a + '/' + t, o = '/' === a.charAt(0));
          }
          return t = r(n(t.split('/'), function(e) {return !!e;}), !o).join('/'), (o ? '/' : '') + t || '.';
        }, t.normalize = function(e) {
          var o = t.isAbsolute(e), i = '/' === a(e, -1);
          return e = r(n(e.split('/'), function(e) {return !!e;}), !o).join('/'), e || o || (e = '.'), e && i &&
          (e += '/'), (o ? '/' : '') + e;
        }, t.isAbsolute = function(e) {
          return '/' === e.charAt(0);
        }, t.join = function() {
          var e = Array.prototype.slice.call(arguments, 0);
          return t.normalize(n(e, function(e, t) {
            if ('string' != typeof e) throw new TypeError('Arguments to path.join must be strings');
            return e;
          }).join('/'));
        }, t.relative = function(e, r) {
          function n(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++) ;
            for (var r = e.length - 1; r >= 0 && "" === e[r]; r--) ;
            return t > r ? [] : e.slice(t, r - t + 1);
          }
  
          e = t.resolve(e).substr(1), r = t.resolve(r).substr(1);
          for (var o = n(e.split('/')), i = n(r.split('/')), a = Math.min(o.length, i.length), s = a, l = 0; l <
          a; l++) if (o[l] !== i[l]) {
            s = l;
            break;
          }
          for (var u = [], l = s; l < o.length; l++) u.push('..');
          return u = u.concat(i.slice(s)), u.join('/');
        }, t.sep = '/', t.delimiter = ':', t.dirname = function(e) {
          var t = i(e), r = t[0], n = t[1];
          return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : '.';
        }, t.basename = function(e, t) {
          var r = i(e)[2];
          return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r;
        }, t.extname = function(e) {return i(e)[3];};
        var a = 'b' === 'ab'.substr(-1) ? function(e, t, r) {return e.substr(t, r);} : function(e, t, r) {
          return t < 0 && (t = e.length + t), e.substr(t, r);
        };
      }).call(t, r(12));
    },
    function(e, t, r) {
      var n = r(1), o = r(2), i = r(5),
          a = ['created', 'ready', 'attached', 'moved', 'detached', 'saved', 'restored', 'error', 'listenerChanged'],
          s = [String, Number, Boolean, Object, Array, null], l = function() {}, u = i.parseMultiPaths, f = function() {},
          c = (f.matchTypeWithValue = function(e, t) {
            if (e === String) {
              if ('string' != typeof t) return !1;
            } else if (e === Number) {if (!Number.isFinite(t)) return !1;} else if (e === Boolean) {
              if ('boolean' != typeof t) return !1;
            } else if (e === Object) {if (null === t || t.constructor !== Object) return !1;} else if (e ===
                Array) {if (t.constructor !== Array) return !1;} else if (void 0 === t) return !1;
            return !0;
          }, function(e) {
            for (var t = [], r = 0; r < e.length; r++) t[r] = e[r];
            return t;
          }), _ = function(e) {
            var t = {};
            for (var r in e) t[r] = e[r];
            return t;
          }, p = function(e, t) {
            for (var r in t) hasOwnProperty.call(e, r) ? 'object' != typeof e[r] || 'object' != typeof t[r] || null ===
            t[r] || t[r] instanceof Array ? e[r] = t[r] : (e[r] instanceof Array ? e[r] = c(e[r]) : e[r] = _(e[r]), p(e[r],
                t[r])) : e[r] = t[r];
          };
      f.create = function(e) {
        var t = new f;
        return t.is = e.is || '', t.using = e.using || {}, t.generics = e.generics ||
            {}, t.template = e.template, t.externalClasses = e.externalClasses || [], t.data = 'object' == typeof e.data
            ? {}
            : null, t.properties = Object.create(null), t.methods = Object.create(null), t.listeners = Object.create(
            null), t.relations = Object.create(
            null), t.ancestors = [], t.initiator = e.initiator, t.lifetimes = Object.create(
            null), t.pageLifetimes = Object.create(null), t.observers = [], t.options = {
          publicProperties: !!(e.options && void 0 !== e.options.publicProperties
              ? e.options.publicProperties
              : o.publicProperties),
        }, t.definitionFilter = e.definitionFilter, t._unprepared = e, (e.options && void 0 !== e.options.lazyRegistration
            ? e.options.lazyRegistration
            : o.lazyRegistration) || f.prepare(t), e.is && (f._list[e.is] = t), t;
      }, f.prepare = function(e) {
        var t = e._unprepared;
        if (t) {
          e._unprepared = null;
          var r = e.ancestors, n = '', o = 0;
          for (o = 0; o < (t.behaviors || []).length; o++) {
            var i = t.behaviors[o], c = i;
            'string' == typeof c && (c = f._list[i]), c._unprepared && f.prepare(c), 'object' == typeof c.data &&
            (null === e.data ? e.data = c.data : p(e.data, c.data));
            for (n in c.generics) {
              var _ = c.generics[n];
              'object' != typeof _ && (_ = {}), e.generics[n] = {default: _.default};
            }
            for (n in c.properties) e.properties[n] = c.properties[n];
            for (n in c.relations) e.relations[n] = c.relations[n];
            for (n in c.methods) e.methods[n] = c.methods[n];
            for (var h = 0; h < c.ancestors.length; h++) r.indexOf(c.ancestors[h]) < 0 && r.push(c.ancestors[h]);
          }
          'object' == typeof t.data && (null === e.data ? e.data = t.data : p(e.data, t.data));
          for (n in t.properties) {
            var d = t.properties[n];
            s.indexOf(d) >= 0 ? d = {type: d} : s.indexOf(d.type) < 0 && d.optionalTypes && d.optionalTypes.length > 0 &&
                (d.type = d.optionalTypes[0]), void 0 === d.value &&
            (d.type === String ? d.value = '' : d.type === Number ? d.value = 0 : d.type === Boolean
                ? d.value = !1
                : d.type === Array ? d.value = [] : d.value = null), e.properties[n] = {
              type: d.type,
              optionalTypes: d.optionalTypes,
              value: d.value,
              filter: d.filter,
              observer: d.observer,
              public: !!(void 0 === d.public ? e.options.publicProperties : d.public),
              observeAssignments: !!d.observeAssignments,
            };
          }
          if (t.lifetimes && 'object' == typeof t.lifetimes) for (n in t.lifetimes) e.lifetimes[n] = t.lifetimes[n];
          for (o = 0; o < a.length; o++) void 0 === e.lifetimes[a[o]] && (e.lifetimes[a[o]] = t[a[o]]);
          for (n in t.listeners) e.listeners[n] = t.listeners[n];
          var v = t.observers;
          if (v instanceof Array) for (o = 0; o < v.length; o++) {
            var m = v[o];
            e.observers.push({paths: u(m.fields || '**'), observer: m.observer});
          } else for (n in v) e.observers.push({paths: u(n), observer: v[n]});
          if (t.pageLifetimes && 'object' ==
              typeof t.pageLifetimes) for (n in t.pageLifetimes) e.pageLifetimes[n] = t.pageLifetimes[n];
          for (n in t.relations) {
            var g = t.relations[n];
            e.relations[n] = {
              target: g.target || n,
              type: g.type,
              linked: g.linked || l,
              linkChanged: g.linkChanged || l,
              unlinked: g.unlinked || l,
              linkFailed: g.linkFailed || l,
            };
          }
          for (n in t.methods) 'function' == typeof t.methods[n] && (e.methods[n] = t.methods[n]);
          r.push(e);
        }
      }, f._list = Object.create(null), f.prototype.hasBehavior = function(e) {
        this._unprepared && f.prepare(this);
        for (var t = 0; t < this.ancestors.length; t++) if (e instanceof f) {
          if (this.ancestors[t] === e) return !0;
        } else if (this.ancestors[t] === f._list[e]) return !0;
        return !1;
      }, f.prototype._getAllListeners = function() {
        for (var e = {}, t = this.ancestors, r = 0; r < t.length; r++) {
          var n = this.ancestors[r];
          for (var o in n.listeners) Object.prototype.hasOwnProperty.call(e, o)
              ? e[o].push(n.listeners[o])
              : e[o] = [n.listeners[o]];
        }
        return e;
      }, f.prototype._addObserversToDataProxy = function(e) {
        for (var t = this.ancestors, r = 0; r < t.length; r++) for (var n = this.ancestors[r].observers, o = 0; o <
        n.length; o++) {
          var i = n[o];
          e.addObserver(i.observer, i.paths);
        }
      }, f.prototype._getAllLifeTimeFuncs = function() {
        var e = {}, t = this.ancestors;
        a.forEach(function(t) {e[t] = n.create('Lifetime Method');});
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          for (var i in o.lifetimes) o.lifetimes[i] &&
          (e[i] || (e[i] = n.create('Lifetime Method')), e[i].add(o.lifetimes[i]));
        }
        return e;
      }, f.prototype._getAllPageLifeTimeFuncs = function() {
        for (var e = {}, t = this.ancestors, r = 0; r < t.length; r++) {
          var o = t[r];
          for (var i in o.pageLifetimes) o.pageLifetimes[i] &&
          (e[i] || (e[i] = n.create('Page Lifetime Method')), e[i].add(o.pageLifetimes[i]));
        }
        return e;
      }, f.callDefinitionFilter = function(e) {
        var t = e.definitionFilter, r = [];
        return e.behaviors instanceof Array && e.behaviors.forEach(function(t) {
          t = 'string' == typeof t ? f._list[t] : t, t && t.definitionFilter &&
          (r.push(t.definitionFilter), t.definitionFilter.call(null, e));
        }), 'function' == typeof t ? function(e) {t(e, r);} : null;
      }, e.exports = f;
    },
    function(e, t, r) {
      var n = r(4), o = r(16), i = r(17), a = r(2), s = function(e) {l(this, e || null);};
      s.prototype = Object.create(Object.prototype, {
        constructor: {value: s, writable: !0, configurable: !0},
        id: {
          get: function() {return this.__id;}, set: function(e) {
            var t = String(e);
            if (this.__id !== t) {
              if (this.__id = t, this.ownerShadowRoot) {
                var r = this.ownerShadowRoot.__wxHost;
                r.__idCacheDirty = !0, this.__domElement && r.__componentOptions.writeIdToDOM &&
                (this.__domElement.id = t);
              }
              a.writeExtraInfoToAttr && this.__domElement &&
              this.__domElement.setAttribute('exparser:info-attr-id', t), (this.__propObservers &&
                  !this.__propObservers.empty || this.__subtreeObserversCount) &&
              o._callObservers(this, '__propObservers', {type: 'properties', target: this, propertyName: 'id'});
            }
          }, configurable: !0,
        },
        slot: {
          get: function() {return this.__slot;},
          set: function(e) {
            e = String(e), this.__slot !== e && (this.__inheritSlots ||
                (this.__slot = e, m(this), (this.__propObservers && !this.__propObservers.empty ||
                    this.__subtreeObserversCount) &&
                o._callObservers(this, '__propObservers', {type: 'properties', target: this, propertyName: 'slot'})));
          },
          configurable: !0,
        },
        attributes: {
          get: function() {
            var e = [];
            if (!this.__attributes) return e;
            for (var t in this.__attributes) e.push({name: t, value: this.__attributes[t]});
            return e;
          }, set: function() {}, configurable: !0,
        },
        class: {
          get: function() {return this.classList.getClassNames();},
          set: function(e) {
            this.classList && this.classList.setClassNames(e), (this.__propObservers && !this.__propObservers.empty ||
                this.__subtreeObserversCount) &&
            o._callObservers(this, '__propObservers', {type: 'properties', target: this, propertyName: 'class'});
          },
          configurable: !0,
        },
        style: {
          get: function() {return this.__domElement ? this.__domElement.style : null;},
          set: function(e) {return x.call(this, e);},
          configurable: !0,
        },
      }), n._setElementSystem(s), i._setElementSystem(s);
      var l = s.initialize = function(
          e, t) {
        e.__id = '', e.__slot = '', e.__virtual = !1, e.__inheritSlots = !1, e.__attributes = null, e.__marks = null, e.__attached = !1, e.parentNode = null, e.childNodes = [], e.ownerShadowRoot = null, e.__wxSlotParent = null, e.__wxSlotChildren = e.childNodes, e.__subtreeObserversCount = 0, e.classList = null, e.__methodCaller = e, e.__relationHandler = null, e.__createdInOwnerShadowRoot = null, e.__domElement = t, t &&
        (t.__wxElement = e);
      };
      s._clone = function(
          e, t, r) {
        if (e.__id = t.__id, e.__slot = t.__slot, e.__virtual = t.__virtual, e.__inheritSlots = t.__inheritSlots, e.__marks = t.__marks
            ? {}
            : null, t.__marks) for (var n in t.__marks) e.__marks[n] = t.__marks[n];
        e.__attributes = Object.create(null);
        for (var o in t.__attributes) e.__attributes[o] = t.__attributes[o];
        e.__attached = !1, e.parentNode = null, e.childNodes = [], e.ownerShadowRoot = null, e.__wxSlotParent = null, e.__wxSlotChildren = e.childNodes, e.__subtreeObserversCount = 0, e.classList = null, e.__methodCaller = e, e.__relationHandler = null, e.__domElement = r, r &&
        (r.__wxElement = e);
      };
      var u = function(e) {
        if (!e.parentNode || e.parentNode.__attached) {
          var t = function(e) {
            if (e instanceof s) {
              e.__attached = !0, e.__lifeTimeFuncs &&
              e.__lifeTimeFuncs.attached.call(e.__methodCaller, [], e), e.__relationHandler &&
              e.__relationHandler('attached'), e.__attachedObservers && !e.__attachedObservers.empty &&
              o._callSingleObserver(e, '__attachedObservers',
                  {type: 'attachStatus', target: e, status: 'attached'}), e.shadowRoot instanceof s && t(e.shadowRoot);
              for (var r = e.childNodes, n = 0; n < r.length; n++) t(r[n]);
            }
          };
          t(e);
        }
      }, f = function(e) {
        if (e.__attached) {
          var t = function(e) {
            if (e instanceof s) {
              for (var r = e.childNodes, n = 0; n < r.length; n++) t(r[n]);
              e.shadowRoot instanceof s && t(e.shadowRoot), e.__attached = !1, e.__lifeTimeFuncs &&
              e.__lifeTimeFuncs.detached.call(e.__methodCaller, [], e), e.__relationHandler &&
              e.__relationHandler('detached'), e.__attachedObservers && !e.__attachedObservers.empty &&
              o._callSingleObserver(e, '__attachedObservers', {type: 'attachStatus', target: e, status: 'detached'});
            }
          };
          t(e);
        }
      }, c = function(e) {
        if (!e.__attached) return u(e);
        var t = function(e) {
          if (e instanceof s) {
            for (var r = e.childNodes, n = 0; n < r.length; n++) t(r[n]);
            e.shadowRoot instanceof s && t(e.shadowRoot), e.__lifeTimeFuncs &&
            e.__lifeTimeFuncs.moved.call(e.__methodCaller, [], e), e.__relationHandler && e.__relationHandler('moved');
          }
        };
        t(e);
      }, _ = function(e, t, r) {
        if (e.__childObservers && !e.__childObservers.empty || e.__subtreeObserversCount) {
          var n = null, i = [r];
          n = 'add' === t ? {type: 'childList', target: e, addedNodes: i} : 'remove' === t ? {
            type: 'childList',
            target: e,
            removedNodes: i,
          } : {type: 'childList', target: e, addedNodes: i, removedNodes: i}, o._callObservers(e, '__childObservers', n);
        }
      }, p = function(e, t, r) {
        var n = e.ownerShadowRoot, o = !1, l = !1, u = !1, f = !1, c = function(e) {
          if (e.__createdInOwnerShadowRoot && t && e.__createdInOwnerShadowRoot !== t) throw new Error(
              'Cannot move the node from one shadow tree to another shadow tree.');
          if (e.ownerShadowRoot = t, e instanceof s) {
            if (t) {
              var _ = t.__wxHost.__componentOptions;
              e.__domElement && e.__id && _.writeIdToDOM !== !(!n || !n.__wxHost.__componentOptions.writeIdToDOM) &&
              (_.writeIdToDOM ? e.__domElement.id = e.__id : e.__domElement.id = ''), e.classList instanceof i &&
              (e.classList._setOwnerOptions(t.__wxHost.classList, _.classPrefix,
                  _.addGlobalClass), a.writeExtraInfoToAttr && e.__domElement &&
              e.__domElement.setAttribute('exparser:info-class-prefix', _.classPrefix && _.classPrefix + '--'));
            }
            r && (e.__id && (n && (o = !0), t && (u = !0)), void 0 !== e.__slotName && (n && (l = !0), t && (f = !0)));
            for (var p = e.childNodes, h = 0; h < p.length; h++) c(p[h]);
          }
        };
        return c(e), o && (n.__wxHost.__idCacheDirty = !0), l && (n.__slotCacheDirty = !0), u &&
        (t.__wxHost.__idCacheDirty = !0), f && (t.__slotCacheDirty = !0), n;
      };
      s._updateIdMap = function(e) {
        var t = e.shadowRoot;
        if (e.__idCacheDirty) {
          e.__idCacheDirty = !1;
          var r = e.__idCache = Object.create(null), n = function(e) {
            e.__id && (r[e.__id] || (r[e.__id] = e));
            for (var t = e.childNodes, o = 0; o < t.length; o++) t[o] instanceof s && n(t[o]);
          };
          n(t);
        }
      };
      var h = function(e) {
        e.__slotCacheDirty = !1;
        var t = e.__wxHost, r = null, n = Object.create(null);
        r = void 0 !== t.__singleSlot ? {'': t.__singleSlot} : t.__slots;
        var o = function(e) {
          void 0 !== e.__slotName && (n[e.__slotName] || (n[e.__slotName] = e));
          for (var t = e.childNodes, r = 0; r < t.length; r++) t[r] instanceof s && o(t[r]);
        };
        o(e), void 0 !== t.__singleSlot ? t.__singleSlot !== n[''] &&
            (n[''] && (n[''].__wxSlotChildren = t.childNodes), d(t, n, r, !0), t.__singleSlot &&
            (t.__singleSlot.__wxSlotChildren = []), t.__singleSlot = n[''] || null) : (d(t, n, r, !1), t.__slots = n);
      }, d = function(e, t, r, n) {
        var o = e.childNodes, i = 0;
        if (n) {
          var a = t[''];
          if (a) for (; i < o.length; i++) b(a, o[i], null, !1, !1, !1, -1); else if (a = r['']) for (; i <
                                                                                                        o.length; i++) b(
              a, null, o[i], !0, !1, !1, i);
        } else {
          var s = function(e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n], i = o.__slot || '', a = t[i];
              a ? b(a, o, null, !1, !0, !0) : (a = r[i], a && b(a, null, o, !0, !0, !0)), o.__inheritSlots &&
              s(o.childNodes);
            }
          };
          s(o);
        }
      }, v = function(e, t, r, n) {
        for (var o = function(e, t, n) {
          var i = e.childNodes, a = 0;
          for (t && (a = i.indexOf(t) + (n ? 0 : 1)); a < i.length; a++) {
            var s = i[a];
            if (s.__slot === r) return s;
            if (s.__inheritSlots) {
              var l = o(s, null, !1);
              if (l) return l;
            }
          }
          return null;
        }; t !== e; t = t.parentNode) {
          var i = o(t.parentNode, t, n);
          if (i) return i;
          n = !1;
        }
        return null;
      }, m = function(e) {
        for (var t = e.parentNode; t && t.__inheritSlots;) t = t.parentNode;
        if (t && void 0 === t.__singleSlot) {
          var r = e.__slot || '', n = t.__slots[r];
          if (n) {
            var o = v(t, e, r, !1);
            b(n, e, o, !1, !0, !0);
          } else n = e.__wxSlotParent, n && b(n, null, e, !0, !0, !0);
        }
      }, g = function(e, t, r, n, o) {
        var i = e;
        if (i instanceof s) {
          for (; i.__virtual;) {
            var a = i.__wxSlotParent;
            if (!a) {
              i = null;
              break;
            }
            if (t && !r) {
              var l = a.__wxSlotChildren.indexOf(i);
              r = a.__wxSlotChildren[l + 1];
            }
            i = a;
          }
          i instanceof s && (i = i.__domElement);
        }
        if (i) {
          var u = n, f = null, c = null;
          if (t) if (t.__virtual) {
            var _ = document.createDocumentFragment(), p = function(e) {
              for (var t = 0; t < e.__wxSlotChildren.length; t++) {
                var r = e.__wxSlotChildren[t];
                r.__virtual ? p(r) : _.appendChild(r.__domElement);
              }
            };
            p(t), f = _;
          } else f = t.__domElement;
          if (r) if (r.__virtual) {
            var h = e, d = 0;
            if (n) {
              var v = function(e) {
                for (var t = 0; t < e.__wxSlotChildren.length; t++) {
                  var r = e.__wxSlotChildren[t];
                  r.__virtual ? v(r) : i.removeChild(r.__domElement);
                }
              };
              v(r), u = !1, d = o + 1;
            } else h = r.__wxSlotParent, d = r === t ? o : h.__wxSlotChildren.indexOf(r);
            if (t) {
              var m = function(e, t) {
                for (; t < e.__wxSlotChildren.length; t++) {
                  var r = e.__wxSlotChildren[t];
                  if (!r.__virtual) return r;
                  var n = m(r, 0);
                  if (n) return n;
                }
              };
              r = null;
              for (var g = h; r = m(g, d), !r &&
              g.__virtual; g = g.__wxSlotParent) d = g.__wxSlotParent.__wxSlotChildren.indexOf(g) + 1;
              r && (c = r.__domElement);
            }
          } else c = r.__domElement;
          u ? f ? i.replaceChild(f, c) : i.removeChild(c) : f && (c ? i.insertBefore(f, c) : i.appendChild(f));
        } else if (t && t.__wxSlotParent) {
          var b = function(e) {
            if (e.__virtual) for (var t = 0; t < e.__wxSlotChildren.length; t++) b(e.__wxSlotChildren[t]); else {
              var r = e.__domElement;
              r && r.parentNode && r.parentNode.removeChild(r);
            }
          };
          b(t);
        }
      }, b = function(e, t, r, n, o, i, l) {
        if (n && (r.__wxSlotParent = null), o && (l = e.__wxSlotChildren.indexOf(r)), t) {
          var u = t.__wxSlotParent;
          if (t.__wxSlotParent = e, u && i) {
            var f = u.__wxSlotChildren.indexOf(t);
            u.__wxSlotChildren.splice(f, 1), u === e && f < l && l--;
          }
        }
        g(e, t, r, n, l), a.writeExtraInfoToAttr &&
        (n && r instanceof s && r.__domElement && r.__domElement.removeAttribute('exparser:info-in-slot-of'), t instanceof
        s && t.__domElement &&
        (void 0 !== e.__slotName && e.ownerShadowRoot ? t.__domElement.setAttribute('exparser:info-in-slot-of',
            e.ownerShadowRoot.__wxHost.__componentInstanceId) : t.__domElement.removeAttribute(
            'exparser:info-in-slot-of'))), o && (l === -1 && (l = e.__wxSlotChildren.length), t
            ? e.__wxSlotChildren.splice(l, n ? 1 : 0, t)
            : e.__wxSlotChildren.splice(l, n ? 1 : 0));
      }, w = function(e, t) {
        for (var r = e.childNodes, n = 0; n < r.length; n++) {
          var o = r[n];
          t(e, o), o.__inheritSlots && w(o, t);
        }
      }, y = s.insertChildToElement = function(e, t, r, n) {
        if (void 0 !== e.__slotName) return !1;
        var i = r >= 0 ? e.childNodes[r] : null;
        n && t === i && (n = !1);
        var a = null, s = e, l = e;
        if (t) {
          a = t.parentNode, t.parentNode = e;
          var d = e.__subtreeObserversCount;
          if (a) {
            var m = a.childNodes.indexOf(t);
            a.childNodes.splice(m, 1), a === e && m < r && r--, d -= a.__subtreeObserversCount;
          }
          d && o._updateSubtreeCaches(t, d);
        }
        for (var g = e; g && g.__inheritSlots;) g = g.parentNode;
        for (var y = !g || !g.__slots, E = !y || e.__inheritSlots, x = a; x && x.__inheritSlots;) x = x.parentNode;
        var C = !x || !x.__slots, S = !C || a && a.__inheritSlots;
        if (y) void 0 !== e.__singleSlot && (s = l = e.__singleSlot), s ? b(s, t, i, n, E, S, r) : t.__wxSlotParent &&
            b(t.__wxSlotParent, null, t, !0, S, !1), t && !C && t.__inheritSlots &&
        w(t, function(e, t) {b(e, t, null, !1, !0, !0, -1);}); else {
          var A = '';
          if (t && (A = t.__slot || '', s = g.__slots[A] || null), i && (l = g.__slots[i.__slot || ''] || null), i && l &&
          n && b(l, null, i, n, !0, !1), t) if (s) {
            var O = i ? v(g, i, A, !n) : null;
            b(s, t, O, !1, !0, S);
          } else t.__wxSlotParent && b(t.__wxSlotParent, null, t, !0, S, !1);
          i && n && i.__inheritSlots && w(i, function(e, t) {b(e, t, null, !1, !0, !0, -1);}), t && t.__inheritSlots &&
          w(t, function(e, t) {
            var r = t.__slot || '', o = g.__slots[r] || null;
            if (o) {
              var a = i ? v(g, i, r, !n) : null;
              b(o, t, a, !1, !0, !0);
            } else t.__wxSlotParent && b(t.__wxSlotParent, null, t, !0, !0, !1);
          });
        }
        n &&
        (e.__subtreeObserversCount && o._updateSubtreeCaches(i, -e.__subtreeObserversCount), i.parentNode = null), r ===
        -1 && (r = e.childNodes.length), t ? e.childNodes.splice(r, n ? 1 : 0, t) : e.childNodes.splice(r, n ? 1 : 0);
        var T = null, R = null;
        return n && null !== i.ownerShadowRoot && (T = p(i, null, !0)), t && t.ownerShadowRoot !==
        t.parentNode.ownerShadowRoot && (R = p(t, t.parentNode.ownerShadowRoot, !0)), n &&
        (T && T.__slotCacheDirty && h(T), i.ownerShadowRoot && i.ownerShadowRoot.__slotCacheDirty &&
        h(i.ownerShadowRoot)), t &&
        (R && R.__slotCacheDirty && h(R), t.ownerShadowRoot && t.ownerShadowRoot.__slotCacheDirty &&
        h(t.ownerShadowRoot)), n && (f(i), _(e, 'remove', i)), t &&
        (a ? c(t) : u(t), a === e ? _(e, 'move', t) : (a && _(a, 'remove', t), _(e, 'add', t))), !0;
      }, E = function(e, t, r, n) {
        var o = n ? r : t, i = -1;
        if (r && (i = e.childNodes.indexOf(r), i < 0)) return null;
        var a = y(e, t, i, n);
        return a ? o : null;
      };
      s._attachShadowRoot = function(e) {
        var t = e.__wxHost;
        t.__wxSlotChildren = [e], b(t, e, null, !1, !1, 0), p(e, e, !1);
      }, s.appendChild = function(e, t) {return E(e, t, null, !1);}, s.insertBefore = function(e, t, r) {
        return E(e, t, r, !1);
      }, s.removeChild = function(e, t) {return E(e, null, t, !0);}, s.replaceChild = function(e, t, r) {
        return E(e, t, r, !0);
      }, s.prototype.appendChild = function(e) {return E(this, e, null, !1);}, s.prototype.insertBefore = function(
          e, t) {
        return E(this, e, t, !1);
      }, s.prototype.removeChild = function(e) {return E(this, null, e, !0);}, s.prototype.replaceChild = function(
          e, t) {
        return E(this, e, t, !0);
      }, s.prototype.triggerEvent = function(e, t, r) {
        n.triggerEvent(this, e, t, r);
      }, s.prototype.dispatchEvent = function(e) {n.dispatchEvent(this, e);}, s.prototype.addListener = function(
          e, t, r) {
        n.addListenerToElement(this, e, t, r);
      }, s.prototype.removeListener = function(e, t, r) {
        n.removeListenerFromElement(this, e, t, r);
      }, s.setMethodCaller = function(
          e,
          t) {e.__methodCaller = t;}, s.getMethodCaller = function(e) {return e.__methodCaller;}, s.prototype.getAttribute = function(e) {
        if (!this.__attributes) return null;
        var t = this.__attributes[e];
        return void 0 === t ? null : t;
      }, s.prototype.setAttribute = function(e, t) {
        this.__attributes || (this.__attributes = Object.create(null)), t = String(
            t), this.__attributes[e] = t, this.__domElement && this.__domElement.setAttribute(e, t);
      }, s.prototype.removeAttribute = function(e) {
        this.__attributes && (delete this.__attributes[e], this.__domElement && this.__domElement.removeAttribute(e));
      }, s.prototype.setMark = function(e, t) {this.__marks || (this.__marks = {}), this.__marks[e] = t;};
      var x = s.prototype.setNodeStyle = function(e) {
        if (this.__domElement && this.__createdInOwnerShadowRoot &&
            this.__createdInOwnerShadowRoot.__childrenPropsFilter) {
          var t = this.__createdInOwnerShadowRoot.__childrenPropsFilter, r = t.style;
          if ('function' == typeof r) return void this.__domElement.setAttribute('style', r.call(this, e));
        }
        this.__domElement && this.__domElement.setAttribute('style', e), (this.__propObservers &&
            !this.__propObservers.empty || this.__subtreeObserversCount) &&
        o._callObservers(this, '__propObservers', {type: 'properties', target: this, propertyName: 'style'});
      };
      s.replaceDocumentElement = function(e, t) {
        e.__attached || (t.parentNode.replaceChild(e.__domElement, t), u(e));
      }, s.pretendAttached = function(e) {e.__attached || u(e);}, s.pretendDetached = function(e) {
        e.__attached && f(e);
      }, s.isAttached = function(e) {return e.__attached;}, s.setSlotName = function(e, t) {
        if (t = null == t
            ? ''
            : String(t), void 0 === e.__slotName) {
          if (0 !== e.childNodes.length || 0 !== e.__wxSlotChildren.length) return;
          e.__wxSlotChildren = [];
        }
        e.__slotName = t, e.ownerShadowRoot && h(e.ownerShadowRoot);
      }, s.setInheritSlots = function(e) {
        e.__singleSlot || e.__slots || e.__wxSlotChildren.length || (e.__wxSlotChildren = [], e.__inheritSlots = !0);
      }, s.getInheritSlots = function(e) {return e.__inheritSlots;};
      var C = function(e, t) {
        var r = e.match(/^(#[_a-zA-Z][-_a-zA-Z0-9:]*|)((?:\.-?[_a-zA-Z][-_a-zA-Z0-9]*)+|)$/);
        if (!r) return null;
        var n = r[1].slice(1), o = r[2].split('.');
        return o.shift(), n || o.length ? {id: n, classes: o, relation: t || ''} : null;
      }, S = s.parseSelector = function(e) {
        for (var t = String(e || '').split(','), r = [], n = !1, o = 0; o < t.length; o++) {
          for (var i = t[o].split(/( |\t|>+)/g), a = [], s = '', l = 0; l < i.length; l++) {
            var u = i[l];
            if (u && ' ' !== u && '\t' !== u) if ('>' !== u[0]) {
              var f = C(u, s);
              if (s = '', !f) break;
              a.push(f);
            } else {
              if ('' !== s) break;
              s = u, '>>>' === u && (n = !0);
            }
          }
          l === i.length && a.length && r.push(a);
        }
        return r.length ? {crossShadow: n, union: r} : null;
      }, A = function(e, t, r, n, o) {
        if (t === e) return !1;
        var i = r[n], a = !0;
        i.id && i.id !== t.__id && (a = !1);
        for (var s = i.classes, l = 0; a && l < s.length; l++) t.classList.contains(s[l]) || (a = !1);
        if (!a && '>' === o) return !1;
        var u = t;
        if (a && 0 === n) {
          if (null === e) return !0;
          for (u = u.parentNode; u; u = u.parentNode) if (u === e) return !0;
          if ('>>>' !== o) return !1;
          u = t, a = !1;
        }
        var f = a ? i.relation : o;
        do u.parentNode ? u = u.parentNode : '>>>' === f ? u = u.__wxHost : '>>>' === o
            ? (a = !1, u = u.__wxHost)
            : u = null, u === e && (u = null); while (u && u.__virtual);
        if (!u) return !1;
        if (a) {
          var c = A(e, u, r, n - 1, f);
          if (c) return !0;
          if ('>>>' !== o) return !1;
        }
        return A(e, u, r, n, o);
      }, O = function(e, t, r) {
        if (r.__virtual) return !1;
        for (var n = e.union, o = 0; o < n.length; o++) {
          var i = n[o];
          if (A(t, r, i, i.length - 1, '>')) return !0;
        }
        return !1;
      }, T = function(e, t, r, n, o) {
        if (O(t, r, n) && (e.push(n), o)) return !0;
        if (n.shadowRoot && t.crossShadow) {
          var i = n.ownerShadowRoot
              ? n.ownerShadowRoot.__wxHost.__componentOptions.domain
              : a.domain, l = n.__componentOptions.domain;
          if (i === l && T(e, t, r, n.shadowRoot, o) && o) return !0;
        }
        for (var u = n.childNodes, f = 0; f < u.length; f++) if (u[f] instanceof s && T(e, t, r, u[f], o) && o) return !0;
        return !1;
      };
      s.prototype.querySelector = function(e) {
        var t = 'object' == typeof e ? e : S(e);
        if (!t) return null;
        var r = [];
        return T(r, t, this, this, !0), r[0] || null;
      }, s.prototype.querySelectorAll = function(e) {
        var t = 'object' == typeof e ? e : S(e), r = [];
        return t ? (T(r, t, this, this, !1), r) : [];
      }, s.matchSelector = function(e, t) {
        var r = 'object' == typeof e ? e : S(e);
        return !!r && O(r, null, t);
      }, s.prototype.matchSelector = function(e, t) {
        var r = 'object' == typeof e ? e : S(e);
        return !!r && O(r, this, t);
      }, e.exports = s;
    },
    function(e, t, r) {
      var n = r(1), o = function() {};
      o.prototype = Object.create(Object.prototype,
          {constructor: {value: o, writable: !0, configurable: !0}}), o.create = function(e) {
        var t = new o;
        return t._cb = e, t._noSubtreeCb = function(t) {t.target === this && e.call(this, t);}, t._binded = [], t;
      }, o.prototype.observe = function(e, t) {
        t = t || {};
        var r = 0, o = t.subtree ? this._cb : this._noSubtreeCb;
        t.properties && (e.__propObservers || (e.__propObservers = n.create('Observer Callback')), this._binded.push({
          funcArr: e.__propObservers,
          id: e.__propObservers.add(o),
          subtree: t.subtree ? e : null,
        }), r++), t.childList &&
        (e.__childObservers || (e.__childObservers = n.create('Observer Callback')), this._binded.push({
          funcArr: e.__childObservers,
          id: e.__childObservers.add(o),
          subtree: t.subtree ? e : null,
        }), r++), t.characterData &&
        (e.__textObservers || (e.__textObservers = n.create('Observer Callback')), this._binded.push(
            {funcArr: e.__textObservers, id: e.__textObservers.add(o), subtree: t.subtree ? e : null}), r++), t.subtree &&
        i(e, r), t.attachStatus &&
        (e.__attachedObservers || (e.__attachedObservers = n.create('Observer Callback')), this._binded.push(
            {funcArr: e.__attachedObservers, id: e.__attachedObservers.add(o), subtree: null}));
      }, o.prototype.disconnect = function() {
        for (var e = this._binded, t = 0; t < e.length; t++) {
          var r = e[t];
          r.funcArr.remove(r.id), r.subtree && i(r.subtree, -1);
        }
        this._binded = [];
      };
      var i = o._updateSubtreeCaches = function(e, t) {
        e.__subtreeObserversCount += t;
        var r = e.childNodes;
        if (r) for (var n = 0; n < r.length; n++) i(r[n], t);
      };
      o._callObservers = function(e, t, r) {
        do e[t] && e[t].call(e, [r]), e = e.parentNode; while (e && e.__subtreeObserversCount);
      }, o._callSingleObserver = function(e, t, r) {e[t] && e[t].call(e, [r]);}, e.exports = o;
    },
    function(e, t) {
      var r = function() {}, n = /-?[_0-9a-z][-_0-9a-z]*/gi, o = null;
      r._setElementSystem = function(e) {o = e, r._setElementSystem = null;};
      var i = Object.prototype.hasOwnProperty;
      r.create = function(e, t) {
        var n = new r;
        n._prefix = '', n._alias = t, n._resolvedAlias = {};
        for (var o in t) n._resolvedAlias[o] = '';
        return n._rawNames = [], n._elem = e, n._owner = null, n;
      };
      var a = function(e) {
        var t = '', r = e._rawNames, n = e._prefix, o = e._owner ? e._owner._resolvedAlias : null,
            a = e._addOriginalClass;
        n && (n += '--');
        for (var s = 0; s < r.length; s++) {
          var l = r[s];
          s && (t += ' '), o && i.call(o, l) ? t += o[l] : (a && (t += l + ' '), t += n + l);
        }
        return t;
      }, s = function(e) {
        var t = e._elem.__domElement;
        if (t) {
          var r = a(e);
          r ? t.setAttribute('class', r) : t.removeAttribute('class');
        }
      }, l = function(e) {
        var t = e.classList;
        t instanceof r && (t._alias && u(t), s(t));
        for (var n = e.childNodes, i = 0; i < n.length; i++) n[i] instanceof o && l(n[i]);
      }, u = function(e) {
        var t = e._owner;
        if (!t) return !1;
        var r = !1;
        for (var n in e._alias) {
          var a = e._alias[n], s = [];
          if (a) for (var u = 0; u < a.length; u++) {
            var f = a[u];
            if (i.call(t._alias, f)) {
              var c = t._resolvedAlias[f];
              s.push(c);
            } else {
              var _ = e._prefix && f ? e._prefix + '--' + f : f;
              s.push(_);
            }
          }
          var p = s.join(' ');
          e._resolvedAlias[n] !== p && (r = !0, e._resolvedAlias[n] = p);
        }
        r && e._elem.shadowRoot instanceof o && l(e._elem.shadowRoot);
      };
      r.prototype.toggle = function(e, t) {
        var r = this._rawNames.indexOf(e);
        void 0 === t && (t = r < 0), t ? r < 0 && (this._rawNames.push(e), s(this)) : r >= 0 &&
            (this._rawNames.splice(r, 1), s(this));
      }, r.prototype.contains = function(e) {
        return this._rawNames.indexOf(e) >= 0;
      }, r.prototype._setOwnerOptions = function(e, t, r) {
        var n = this._prefix;
        this._prefix = t, n !== t && (this._addOriginalClass = r, this._owner = e, this._alias && u(this), s(this));
      }, r.prototype._setAlias = function(e, t) {
        var r = this._owner, o = String(t).match(n);
        this._alias[e] = o;
        var a = [];
        if (o) for (var s = 0; s < o.length; s++) {
          var u = o[s];
          r && i.call(r._alias, u) ? a.push(r._resolvedAlias[u]) : a.push(this._prefix ? this._prefix + '--' + u : u);
        }
        this._resolvedAlias[e] = a.join(' '), l(this._elem.shadowRoot);
      }, r.prototype.setClassNames = function(e) {
        e = void 0 === e || null === e ? '' : String(e), this._rawNames = e.match(n) || [], s(this);
      }, r.prototype.getClassNames = function() {return a(this);}, e.exports = r;
    },
    function(e, t, r) {
      var n = r(1), o = r(3), i = r(19), a = r(4), s = r(14), l = r(15), u = r(20), f = r(16), c = r(17), _ = r(2),
          p = r(5), h = a.addListenerToElement, d = p.parseSinglePath, v = o.deepCopy, m = function() {};
      m.prototype = Object.create(l.prototype, {
        constructor: {value: m, writable: !0, configurable: !0},
        data: {
          get: function() {return this.__dataProxy._data;}, set: function(e) {
            var t = this.__dataProxy;
            for (var r in e) t.scheduleReplace([r], e[r]);
            t.doUpdates();
          }, configurable: !0,
        },
        $: {get: function() {return l._updateIdMap(this), this.__idCache;}, set: function() {}},
      });
      var g = function() {};
      g.prototype = Object.create(Object.prototype), a._setComponent(m);
      var b = null;
      m._setDefaultTemplateEngine = function(e) {b = e, m._setDefaultTemplateEngine = null;};
      var w = function(e, t, r) {
        if (r) for (var n = 0; n < r.length; n++) if (s.matchTypeWithValue(r[n], e)) return e;
        return t === String ? null === e || void 0 === e ? '' : String(e) : t === Number
            ? isFinite(e) ? Number(e) : 0
            : t === Boolean ? !!e : t === Array ? e instanceof Array ? e : [] : t === Object ? 'object' == typeof e
                ? e
                : null : void 0 === e ? null : e;
      }, y = function(e, t, r) {
        var n = t.replace(/[A-Z]/g, function(e) {return '-' + e.toLowerCase();}), o = typeof r;
        'boolean' === o ? r ? e.__domElement.setAttribute(n, '') : e.__domElement.removeAttribute(n) : 'object' === o
            ? e.__domElement.setAttribute(n, JSON.stringify(r))
            : e.__domElement.setAttribute(n, r);
      };
      i.setPropUpdater(function(e, t, r, o) {
        var i = e[0], a = this.__propData[i];
        if (r = w(r, t.type, t.optionalTypes), t.filter) {
          var s = n.safeCallback('Property Filter', t.filter, this.__methodCaller, o ? [] : [r, a, e], this);
          void 0 !== s && (r = s);
        }
        return this.__propData[i] = r, this.__domElement && this.__componentOptions.reflectToAttributes &&
        this.__propPublic[i] && y(this, i, r), r;
      }), i.setPropObserver(function(e, t, r, o, i) {
        if (o.observeAssignments || e !== t) {
          var a = r[0];
          o.observer &&
          n.safeCallback('Property Observer', o.observer, this.__methodCaller, i ? [] : [e, t, r], this), o.public &&
          (this.__propObservers && !this.__propObservers.empty || this.__subtreeObserversCount) &&
          f._callObservers(this, '__propObservers', {type: 'properties', target: this, propertyName: a});
        }
      });
      var E = function(e, t, r) {
        t.__relationLinks || (t.__relationLinks = {});
        for (var n = t.__relationLinks[r] = [], o = 0; o < e.length; o++) n.push(null);
      }, x = function(e, t, r, o, i) {
        for (var a = m.prototype.hasBehavior, l = 'parent' === o, u = 'shadowHost' === o, f = 0; f < e.length; f++) {
          var c = e[f], _ = null;
          if (_ = 'object' != typeof c.target ? s._list[c.target] : c.target) {
            var p = t[f], h = null;
            if (!i) for (var d = u ? r.ownerShadowRoot && r.ownerShadowRoot.__wxHost : r.parentNode; d; d = u
                ? d.ownerShadowRoot && d.ownerShadowRoot.__wxHost
                : d.parentNode) if (!d.__virtual) {
              if (a.call(d, _)) {
                var v = null;
                v = l ? d.__relationMap.child : u ? d.__relationMap.shadowContent : d.__relationMap.descendant;
                for (var g = 0; g < v.length; g++) {
                  var b = v[g], w = null;
                  if (w = 'object' != typeof b.target ? s._list[b.target] : b.target, w && a.call(r, w)) {
                    h = {
                      parent: d,
                      relation: b,
                    };
                    break;
                  }
                }
              }
              if (l || h) break;
            }
            t[f] = h, !p || h && p.parent === h.parent ||
            (n.safeCallback('Relation Unlinked Callback', p.relation.unlinked, p.parent.__methodCaller,
                [r.__methodCaller], p.parent), n.safeCallback('Relation Unlinked Callback', c.unlinked, r.__methodCaller,
                [p.parent.__methodCaller], r)), !h || p && p.parent === h.parent ||
            (n.safeCallback('Relation Linked Callback', h.relation.linked, h.parent.__methodCaller, [r.__methodCaller],
                h.parent), n.safeCallback('Relation Linked Callback', c.linked, r.__methodCaller,
                [h.parent.__methodCaller], r)), p && h && p.parent === h.parent &&
            (n.safeCallback('Relation Link Changed Callback', h.relation.linkChanged, h.parent.__methodCaller,
                [r.__methodCaller], h.parent), n.safeCallback('Relation Link Changed Callback', c.linkChanged,
                r.__methodCaller, [h.parent.__methodCaller], r)), i || h ||
            n.safeCallback('Relation Link Failed Callback', c.linkFailed, r.__methodCaller, [], r);
          }
        }
      }, C = function(e, t) {
        var r = [], n = t.type, o = 'child' === n, i = 'shadowContent' === n, a = function(n) {
          for (var s = n.childNodes, u = 0; u < s.length; u++) {
            var f = s[u];
            if (f instanceof l) if (f.__virtual) a(f); else {
              if (f.__relationLinks) {
                var c = null;
                if (c = o ? f.__relationLinks.parent : i
                    ? f.__relationLinks.shadowHost
                    : f.__relationLinks.ancestor) for (var _ = 0; _ < c.length; _++) {
                  var p = c[_];
                  if (p && p.parent === e && p.relation === t) {
                    r.push(f);
                    break;
                  }
                }
              }
              i && f instanceof m && a(f.shadowRoot), o || a(f);
            }
          }
        };
        return a(i ? e.shadowRoot : e), r;
      }, S = function(e, t, r) {
        if (e instanceof l) {
          if (e instanceof m) {
            e.__pageLifeTimeFuncs[t] && e.__pageLifeTimeFuncs[t].call(e.__methodCaller, r || []);
            for (var n = e.childNodes, o = 0; o < n.length; o++) S(n[o], t, r);
            e = e.shadowRoot;
          }
          for (var n = e.childNodes, o = 0; o < n.length; o++) S(n[o], t, r);
        }
      };
      m._list = {}, m.register = function(e) {
        var t = e.options || {}, r = s.create(e), n = void 0 !== t.classPrefix ? t.classPrefix : _.classPrefix;
        null !== n && void 0 !== n || (n = r.is || '');
        var o = new g;
        return o._unprepared = r, o.is = e.is ||
            '', o.behavior = r, o.protoFunc = null, o.props = null, o.template = null, o.innerEvents = null, o.generics = r.generics, o.initiator = r.initiator ||
            null, o.options = {
          domain: t.domain || _.domain,
          writeOnly: !!(void 0 !== t.writeOnly ? t.writeOnly : _.writeOnly),
          allowInWriteOnly: !!(void 0 !== t.allowInWriteOnly ? t.allowInWriteOnly : _.allowInWriteOnly),
          classPrefix: n,
          addGlobalClass: !!(void 0 !== t.addGlobalClass ? t.addGlobalClass : _.addGlobalClass),
          templateEngine: t.templateEngine || _.templateEngine || b,
          renderingMode: t.renderingMode || _.renderingMode,
          multipleSlots: !!(void 0 !== t.multipleSlots ? t.multipleSlots : _.multipleSlots),
          reflectToAttributes: !!(void 0 !== t.reflectToAttributes ? t.reflectToAttributes : _.reflectToAttributes),
          writeFieldsToNode: !!(void 0 !== t.writeFieldsToNode ? t.writeFieldsToNode : _.writeFieldsToNode),
          writeIdToDOM: !!(void 0 !== t.writeIdToDOM ? t.writeIdToDOM : _.writeIdToDOM),
          separateInnerData: !!(void 0 !== t.separateInnerData ? t.separateInnerData : _.separateInnerData),
          listenerChangeLifeTimes: !!(void 0 !== t.listenerChangeLifeTimes
              ? t.listenerChangeLifeTimes
              : _.listenerChangeLifeTimes),
          randomizeTagName: !!(void 0 !== t.randomizeTagName ? t.randomizeTagName : _.randomizeTagName),
        }, r._unprepared || m.prepare(o), void 0 !== e.is && (m._list[r.is] = o), o;
      }, m.isPrepared = function(e) {return !e._unprepared;}, m.prepare = function(e) {
        var t = e._unprepared;
        if (t) {
          e._unprepared = null;
          var r = e.options, n = {};
          t._unprepared && s.prepare(t), r.writeOnly && (n.data = {value: null});
          var o = e.props = {};
          Object.keys(t.properties).forEach(function(e) {
            var i = t.properties[e];
            o[e] = {
              type: i.type,
              optionalTypes: i.optionalTypes,
              value: i.value,
              filter: 'function' == typeof i.filter ? i.filter : null == i.filter ? null : t.methods[i.filter],
              observer: 'function' == typeof i.observer ? i.observer : null == i.observer ? null : t.methods[i.observer],
              public: i.public,
              observeAssignments: i.observeAssignments,
            }, r.writeFieldsToNode && (n[e] = {
              enumerable: !0,
              get: function() {return this.__propData[e];},
              set: function(t) {
                var r = this.__dataProxy;
                r.scheduleReplace([e], t), r.doUpdates();
              },
            });
          });
          var a = function() {};
          e.protoFunc = a;
          var l = a.prototype = Object.create(m.prototype, n);
          if (l.is = e.is, l.__componentOptions = r, l.__using = t.using, e.dataGroupObserverTree = i._createObserverTree(
              o), t._addObserversToDataProxy(
              e.dataGroupObserverTree), l.__behavior = t, r.writeFieldsToNode) for (var u in t.methods) l[u] = t.methods[u];
          l.__lifeTimeFuncs = t._getAllLifeTimeFuncs(), l.__pageLifeTimeFuncs = t._getAllPageLifeTimeFuncs();
          var f = t.relations, c = l.__relationMap = {};
          for (var _ in f) {
            var p = f[_], h = p.type;
            c[h] ? c[h].push(p) : c[h] = [p];
          }
          var d = [];
          c.parent && d.push(function(e) {
            x(this.__relationMap.parent, this.__relationLinks.parent, this, 'parent', 'detached' === e);
          }), c.ancestor && d.push(function(e) {
            x(this.__relationMap.ancestor, this.__relationLinks.ancestor, this, 'ancestor', 'detached' === e);
          }), c.shadowHost && d.push(function(e) {
            x(this.__relationMap.shadowHost, this.__relationLinks.shadowHost, this, 'shadowHost', 'detached' === e);
          }), e.relationHandler = function(e) {for (var t = 0; t < d.length; t++) d[t].call(this, e);};
          var v = {}, g = {}, b = t.data, w = '';
          for (w in b) g[w] = b[w];
          for (w in o) {
            var y = o[w];
            g[w] = y.value, v[w] = y.public;
          }
          var E = r.templateEngine;
          e.template = E.create(t, g, r), l.__propPublic = v;
          var C = t._getAllListeners(), S = e.innerEvents = [];
          for (var A in C) {
            for (var O = C[A], T = A.indexOf('.'), R = A.slice(T + 1), P = T < 1 ? '' : A.slice(0, T), N = [], k = 0; k <
            O.length; k++) {
              var L = O[k];
              'function' != typeof L && (L = null == L ? null : t.methods[L]), N.push(L);
            }
            S.push({id: P, name: R, funcs: N});
          }
        }
      };
      var A = 1, O = Object.prototype.hasOwnProperty,
          T = function(e, t) {return function(r) {return e.call(t.__methodCaller, r, t);};}, R = function(e, t, r) {
            var n = {};
            for (var o in e) {
              var i = e[o], a = t[o];
              'object' != typeof a && (a = m._list[a]), 'object' != typeof a && null != i.default &&
              (a = m._list[i.default]), a && (n[o] = a);
            }
            return n;
          }, P = m._advancedCreate = function(e, t, r, o, a) {
            var s = t;
            s._unprepared && m.prepare(s);
            var u = s.options, f = s.protoFunc, p = new f, d = s.generics;
            d ? p.__generics = R(d, o || {}, u) : p.__generics = {};
            var g = null, b = _.documentBackend;
            'dom' === b ? (g = document.createElement(e), l.initialize(p, g)) : l.initialize(p, null), r &&
            (p.__createdInOwnerShadowRoot = r);
            var w = 0, y = p.__externalClassAlias = {};
            if (s.behavior.externalClasses) {
              var x = s.behavior.externalClasses;
              for (w = 0; w < x.length; w++) y[x[w]] = null;
            }
            p.classList = c.create(p, y), _.writeExtraInfoToAttr && g &&
            (p.__componentInstanceId = A++, g.setAttribute('exparser:info-component-id', p.__componentInstanceId));
            var C = p.__templateInstance = s.template.createInstance(p, a);
            p.__propData = C.data;
            var S = u.separateInnerData;
            p.__innerData = S ? v(p.__propData) : null, p.__dataProxy = i._advancedCreate(p, p.__propData, p.__innerData,
                s.dataGroupObserverTree, function(e, t, r, n) {
                  p.__templateInstance.updateValues(p, S ? p.__innerData : p.__propData, e, t, r, n);
                }), C.beforeUpdateValues && p.__dataProxy.setBeforeUpdateCb(
                function(e) {
                  p.__templateInstance.beforeUpdateValues(p, S ? p.__innerData : p.__propData, e);
                }), u.writeOnly &&
            p.__dataProxy.setHidingValue(!0), p.__idCacheDirty = !1, p.__idCache = C.idMap, p.$$ = g, null === C.slots[''] &&
            (C.slots[''] = g), s.options.multipleSlots ? p.__slots = C.slots : (p.__singleSlot = C.slots[''] ||
                null, p.__singleSlot && (p.__singleSlot.__wxSlotChildren = p.childNodes)), C.shadowRoot instanceof l
                ? (p.shadowRoot = C.shadowRoot, l._attachShadowRoot(C.shadowRoot))
                : (p.shadowRoot = g, g.__wxHost = p, p.__domElement.appendChild(
                    C.shadowRoot), p.__wxSlotChildren = [g], g.__wxSlotParent = p);
            for (var O = C.listeners, P = 0; P < O.length; P++) {
              var N = O[P];
              h(N.target, N.name, T(N.func, p));
            }
            var k = s.innerEvents;
            for (w = 0; w < k.length; w++) {
              var L = k[w], I = L.id ? 'this' === L.id ? p : p.__idCache[L.id] : p.shadowRoot;
              if (I) for (var M = L.name, B = L.funcs, U = 0; U < B.length; U++) h(I, M, T(B[U], p));
            }
            var D = p.__relationMap;
            return D.parent && (E(D.parent, p, 'parent'), p.__relationHandler = s.relationHandler), D.ancestor &&
            (E(D.ancestor, p, 'ancestor'), p.__relationHandler = s.relationHandler), D.shadowHost &&
            (E(D.shadowHost, p, 'shadowHost'), p.__relationHandler = s.relationHandler), s.initiator &&
            n.safeCallback('Component Initiator', s.initiator, p.__methodCaller, [], p), p.__lifeTimeFuncs.created.call(
                p.__methodCaller, [], p), p;
          };
      m.create = function(e, t, r) {
        return 'object' == typeof e ? P(e.is, e, null, null, r) : e ? e.indexOf('-') < 0 && !t
            ? u.create(e)
            : P(e.toLowerCase(), t || O.call(m._list, e) && m._list[e] || m._list[''], null, null, r) : P('virtual',
            m._list[''], null, null, r);
      }, m.listProperties = function(e) {
        var t = [];
        for (var r in e.__propPublic) void 0 !== e.__propPublic[r] && t.push(r);
        return t;
      }, m.listPublicProperties = function(e) {
        var t = [];
        for (var r in e.__propPublic) e.__propPublic[r] === !0 && t.push(r);
        return t;
      }, m.hasProperty = function(e, t) {return void 0 !== e.__propPublic[t];}, m.hasPublicProperty = function(
          e, t) {
        return e.__propPublic[t] === !0;
      }, m.getMethodsFromDef = function(e) {
        return e.behavior._unprepared && s.prepare(e.behavior), e.behavior.methods;
      }, m.getMethod = function(
          e,
          t) {return e.__behavior.methods[t];}, m.getComponentOptions = function(e) {return e.__componentOptions;}, m.prototype.triggerLifeTime = function(
          e, t) {
        this.__lifeTimeFuncs[e].call(this.__methodCaller, t || []);
      }, m.prototype.triggerPageLifeTime = function(e, t) {
        S(this, e, t);
      }, m.prototype.hasBehavior = function(e) {
        return 'object' != typeof e && Object.prototype.hasOwnProperty.call(this.__using, e) &&
        (e = this.__using[e]), !!this.__behavior && this.__behavior.hasBehavior(e);
      }, m.prototype.getRootBehavior = function() {return this.__behavior;}, m.prototype.getRelationNodes = function(e) {
        var t = this.__behavior.relations[e];
        if (!t) return null;
        if ('parent' === t.type || 'ancestor' === t.type || 'shadowHost' === t.type) {
          for (var r = this.__relationMap[t.type], n = 0; n < r.length && r[n] !== t; n++) ;
          return this.__relationLinks[t.type][n] ? [this.__relationLinks[t.type][n].parent] : [];
        }
        return C(this, t);
      }, m.prototype.hasExternalClass = function(e) {
        return O.call(this.__externalClassAlias, e);
      }, m.prototype.setExternalClass = function(e, t) {
        this.classList._setAlias(e, t);
      }, m.prototype.replaceDataOnPath = function(e, t) {
        this.__dataProxy.scheduleReplace(e, t);
      }, m.getInnerData = function(e) {return e.__innerData;}, m.getDataProxy = function(e) {return e.__dataProxy;}, m.replaceWholeData = function(
          e, t, r) {
        e.__propData = t, e.__dataProxy.replaceWholeData(t, r);
      }, m.prototype.applyDataUpdates = function() {this.__dataProxy.doUpdates();}, m.prototype.setData = function(e) {
        var t = this.__dataProxy;
        for (var r in e) t.scheduleReplace(d(r), e[r]);
        t.doUpdates();
      }, e.exports = m;
    },
    function(e, t, r) {
      var n = r(1), o = r(3), i = null, a = null, s = Object.prototype.hasOwnProperty, l = o.deepCopy,
          u = function(e, t, r, n,
                       o) {this._data = t, this._innerData = r, this._comp = e, this._updateCb = o, this._beforeUpdateCb = null, this._hidingValue = !1, this._changes = [], this._doingUpdates = null, this._propFields = n._propFields, this._observers = n._observers, this._observerTree = n._observerTree, this._relatedObserverTreeObj = n, this._observerStatus = [];};
      u._advancedCreate = function(e, t, r, n, o) {return new u(e, t, r, n, o);};
      var f = function(e) {this._propFields = e, this._observerIdInc = 0, this._observers = [], this._observerTree = {};};
      u._createObserverTree = function(e) {
        return new f(e);
      }, u.create = function(e, t, r) {
        var n = new f({});
        return new u({__methodCaller: e}, t, null, n, r);
      }, u.setPropUpdater = function(e) {i = e;}, u.setPropObserver = function(e) {a = e;}, u.prototype.replaceWholeData = function(
          e,
          t) {this._data = e;}, u.prototype.setHidingValue = function(e) {this._hidingValue = !!e;}, u.prototype.setBeforeUpdateCb = function(e) {this._beforeUpdateCb = e;};
      var c = function(e, t, r) {
        for (var n = e, o = 0; o < t.length; o++) {
          var i = t[o];
          if ('**' === i) return n['**'] || (n['**'] = []), void n['**'].push(r);
          n[i] || (n[i] = {}), n = n[i];
        }
        n['~'] || (n['~'] = []), n['~'].push(r);
      }, _ = function(e, t, r) {for (var n = 0; n < t.length; n++) c(e, t[n], r);}, p = function(e, t, r) {
        for (var n = e, o = 0, i = ''; o < t.length && (i = t[o], "**" !== i); o++) {
          if (!n) return;
          n = n[i];
        }
        var a = '**' === i ? n['**'] : n['~'];
        if (a) for (o = 0; o < a.length; o++) if (a[o] === r) {
          a.splice(o, 1);
          break;
        }
      }, h = function(e, t, r) {for (var n = 0; n < t.length; n++) p(e, t[n], r);};
      f.prototype.addObserver = function(e, t) {
        var r = this._observerIdInc++;
        return this._observers[r] = {pathObj: t, func: e}, _(this._observerTree, t, r), r;
      }, f.prototype.removeObserver = function(e) {
        var t = this._observers[e];
        h(this._observerTree, t.pathObj, e), this._observers[e] = null;
      }, f.prototype.moveObserver = function(e, t) {
        var r = this._observers[e];
        h(this._observerTree, r.pathObj, e), r.pathObj = t, _(this._observerTree, t, e);
      }, u.prototype.getObserverTree = function() {return this._relatedObserverTreeObj;};
      var d = function(e, t, r) {
        for (var o = [], i = r.pathObj, a = 0; a < i.length; a++) {
          for (var s = i[a], l = t, u = 0; u < s.length; u++) {
            var f = s[u];
            if ('**' === f) break;
            if ('object' != typeof l) {
              l = void 0;
              break;
            }
            l = l[f];
          }
          o[a] = l;
        }
        n.safeCallback('Data Observer', r.func, e.__methodCaller, o, e);
      }, v = function(e, t) {
        var r = null, n = 0, o = -1;
        for (var i in e) if ('~' !== i) if ('**' !== i) v(e[i], t); else for (r = e['**'], n = 0; n <
        r.length; n++) o = r[n], t[o] = !0; else for (r = e['~'], n = 0; n < r.length; n++) o = r[n], t[o] = !0;
      }, m = function(e, t, r) {
        for (var n = e, o = 0; o < r.length; o++) {
          if (n['**']) for (var i = n['**'], a = 0; a < i.length; a++) {
            var l = i[a];
            t[l] = !0;
          }
          var u = r[o];
          if ('number' == typeof u) {
            if (!s.call(n, u)) {
              n = null;
              break;
            }
          } else if (!/^[_a-zA-Z]/.test(u) || !s.call(n, u)) {
            n = null;
            break;
          }
          n = n[u];
        }
        n && v(n, t);
      }, g = function(e, t, r, n, o) {
        for (var i = 0; i < e.length; i++) {
          var a = e[i], s = t[i];
          s && s && (t[i] = !1, d(r, o ? void 0 : n, a));
        }
      };
      u.prototype.scheduleReplace = function(e, t, r) {
        this._changes.push([e, t, r]);
      }, u.prototype.setChanges = function(e) {this._changes = e;}, u.prototype.getChanges = function() {return this._changes;}, u.prototype.doUpdates = function(e) {
        var t = this._propFields, r = this._comp, n = this._hidingValue, o = !!this._doingUpdates,
            u = this._relatedObserverTreeObj._observerIdInc, f = null, c = null, _ = null;
        u
            ? (o || (this._doingUpdates = {
              changedPaths: [],
              changedValues: [],
              combinedChanges: [],
            }), f = this._doingUpdates.changedPaths, c = this._doingUpdates.changedValues, _ = this._doingUpdates.combinedChanges)
            : (f = [], c = [], _ = []);
        var p = this._changes;
        this._changes = [];
        for (var h = 0; h < p.length; h++) {
          var d = p[h], v = d[0], b = d[1], w = b, y = void 0, E = v[0], x = t[E];
          if (x && 1 === v.length) y = this._data[E], b = i.call(this._comp, v, x, b,
              this._hidingValue), w = this._innerData
              ? this._innerData[E] = l(b)
              : b, d[1] = w, this._data[E] = b; else {
            for (var C = this._data, S = E, A = null, O = 1; O < v.length; O++) A = v[O], 'number' == typeof A &&
            isFinite(A) ? s.call(C, S) && C[S] instanceof Array || (C[S] = []) : (!s.call(C, S) || null === C[S] ||
                'object' != typeof C[S] || C[S] instanceof Array) && (C[S] = {}), C = C[S], S = A;
            if (C[S] = b, this._innerData) {
              for (C = this._innerData, S = E, O = 1; O < v.length; O++) A = v[O], 'number' == typeof A && isFinite(A)
                  ? s.call(C, S) && C[S] instanceof Array || (C[S] = [])
                  : (!s.call(C, S) || null === C[S] || 'object' != typeof C[S] || C[S] instanceof Array) &&
                  (C[S] = {}), C = C[S], S = A;
              w = C[S] = l(b), d[1] = w;
            }
          }
          m(this._observerTree, this._observerStatus, v), f.push(v), c.push([w, y, b]), _.push(d);
        }
        if (!o) {
          if (this._beforeUpdateCb && this._beforeUpdateCb(e), u) {
            var T = 0;
            do T = _.length, g(this._observers, this._observerStatus, r, this._data, n); while (T !== _.length);
            this._doingUpdates = null;
          }
          this._updateCb(f, c, _, e);
          for (var R = 0; R < c.length; R++) {
            var P = c[R];
            if (P) {
              var N = f[R], k = N[0], L = t[k];
              L && a.call(r, P[2], P[1], N, L, n);
            }
          }
        }
      }, e.exports = u;
    },
    function(e, t, r) {
      var n = r(15), o = r(17), i = r(2), a = function() {};
      a.prototype = Object.create(n.prototype,
          {constructor: {value: a, writable: !0, configurable: !0}}), a.create = function(e) {
        var t = new a;
        t.is = e.toLowerCase();
        var r = null;
        return 'dom' === i.documentBackend && (r = document.createElement(e)), n.initialize(t,
            r), t.$$ = r, t.classList = o.create(t, null), t;
      }, a.cloneNode = function(e) {
        var t = new a;
        t.is = e.is;
        var r = null;
        return e.__domElement &&
        (r = document.importNode ? document.importNode(e.__domElement, !1) : e.__domElement.cloneNode(!1)), n._clone(t, e,
            r), t.$$ = r, t.classList = o.create(t, null), t;
      }, e.exports = a;
    },
    function(e, t, r) {
      var n = r(16), o = r(2), i = function() {};
      i.prototype = Object.create(Object.prototype,
          {constructor: {value: i, writable: !0, configurable: !0}}), i.create = function(e) {
        var t = new i;
        t.__slot = '';
        var r = null;
        return 'dom' === o.documentBackend
            ? (r = document.createTextNode(e || ''), r.__wxElement = t)
            : t.__textContent = e, t.$$ = t.__domElement = r, t.__subtreeObserversCount = 0, t.parentNode = null, t.ownerShadowRoot = null, t;
      }, Object.defineProperty(i.prototype, 'textContent', {
        get: function() {return this.__domElement ? this.__domElement.textContent : this.__textContent;},
        set: function(e) {
          this.__domElement ? this.__domElement.textContent = e : this.__textContent = String(e), (this.__textObservers &&
              !this.__textObservers.empty || this.__subtreeObserversCount) &&
          n._callObservers(this, '__textObservers', {type: 'characterData', target: this});
        },
      }), e.exports = i;
    },
    function(e, t, r) {
      var n = r(15), o = r(2), i = function(e) {a(this, e);};
      i.prototype = Object.create(n.prototype);
      var a = i.initialize = function(e, t) {
        e.is = t || '';
        var r = null;
        'dom' === o.documentBackend && (r = void 0), n.initialize(e, r), e.__virtual = !0;
      };
      i.create = function(e) {return new i(e);}, e.exports = i;
    },
    function(e, t, r) {
      var n = r(15), o = r(18), i = r(22), a = r(21), s = Object.prototype.hasOwnProperty, l = function(e) {
        i.initialize(this,
            'shadow'), this.__wxHost = e, this.__childrenPropsFilter = null, this.__slotCacheDirty = !1, this.ownerShadowRoot = null;
      };
      l.prototype = Object.create(i.prototype), l.create = function(e) {
        var t = new l(e);
        if (e.__createdInOwnerShadowRoot &&
            e.__createdInOwnerShadowRoot.__childrenPropsFilter) if (t.__childrenPropsFilter) for (var r in e.__createdInOwnerShadowRoot.__childrenPropsFilter) t.__childrenPropsFilter[r] ||
        (t.__childrenPropsFilter[r] = e.__createdInOwnerShadowRoot.__childrenPropsFilter[r]); else t.__childrenPropsFilter = e.__createdInOwnerShadowRoot.__childrenPropsFilter;
        return t;
      };
      var u = function(e, t) {
        var r = {};
        for (var n in e) {
          var i = e[n];
          'object' != typeof i && (s.call(t.__using, i) ? i = t.__using[i] : s.call(t.__generics, i) &&
              (i = t.__generics[i] || o._list['']), r[n] = i);
        }
        return r;
      }, f = 'abcdefghijklmnopqrstuvwxyz', c = function() {
        for (var e = Date.now(), t = 'exparser-', r = 0; r < 8; r++) {
          var n = (e + Math.floor(26 * Math.random())) % 26;
          e = Math.floor(e / 26), t += f[n];
        }
        return t;
      };
      l.prototype.createComponent = function(e, t, r, n) {
        var i = null;
        i = void 0 === t ? e : t;
        var a = this.__wxHost;
        return 'object' != typeof i &&
        (s.call(a.__using, i) ? i = a.__using[i] : s.call(a.__generics, i) && (i = a.__generics[i]), 'object' !=
        typeof i && (i = o._list[i] || o._list[''])), r && (r = u(r, a)), 'object' == typeof e &&
        (e = i.is), a.__componentOptions.randomizeTagName && (e = c()), a.__componentOptions.writeOnly &&
        !i.options.allowInWriteOnly && (i = o._list['']), o._advancedCreate(e, i, this, r, n);
      }, l.prototype.tagNameUsed = function(e) {
        var t = this.__wxHost;
        return !!s.call(t.__using, e) || !!s.call(t.__generics, e);
      }, l.prototype.getHostNode = function() {return this.__wxHost;}, l.prototype.createTextNode = function(e) {
        var t = a.create(e);
        return t;
      }, l.prototype.createVirtualNode = function(e) {
        var t = i.create(e);
        return t;
      }, l.prototype.getElementById = function(e) {
        return n._updateIdMap(this.__wxHost), this.__wxHost.__idCache[e];
      }, e.exports = l;
    },
    function(e, t, r) {
      var n = r(15), o = r(21), i = function() {};
      i.create = function(e, t, r) {
        var a = new i;
        if (!(e instanceof n || e instanceof o)) throw new Error(
            'ElementIterator can only be used for exparser.Element or exparser.TextNode');
        a._elem = e, a._elemTypeLimit = r || n;
        var s = t.split('-');
        if ('shadow' === s[0]) a._composed = !1; else {
          if ('composed' !== s[0]) throw new Error('Unrecognized iterator type: ' + t);
          a._composed = !0;
        }
        if ('ancestors' === s[1]) a._relation = 'ancestors', a._order = 0; else {
          if ('descendants' !== s[1]) throw new Error('Unrecognized iterator type: ' + t);
          if (a._relation = 'descendants', 'root' !== s[2]) throw new Error('Unrecognized iterator type: ' + t);
          if ('first' === s[3]) a._order = -1; else {
            if ('last' !== s[3]) throw new Error('Unrecognized iterator type: ' + t);
            a._order = 1;
          }
        }
        return a;
      };
      var a = function(e, t, r, n) {
        for (; e; e = r
            ? e.__wxSlotParent || e.__wxHost || e.parentNode
            : e.parentNode) if (e instanceof t && n(e) === !1) return !1;
        return !0;
      }, s = function(e, t, r, n, o) {
        if (n < 0 && e instanceof t && o(e) === !1) return !1;
        var i = r ? e.__wxSlotChildren || e.childNodes : e.childNodes;
        if (i) for (var a = 0; a < i.length; a++) if (s(i[a], t, r, n, o) === !1) return !1;
        return !(n > 0 && e instanceof t && o(e) === !1);
      };
      i.prototype.forEach = function(e) {
        return 'ancestors' === this._relation ? a(this._elem, this._elemTypeLimit, this._composed, e) : s(this._elem,
            this._elemTypeLimit, this._composed, this._order, e);
      }, e.exports = i;
    },
    function(e, t, r) {
      (function(t) {
        var n = r(2), o = r(1), i = r(15), a = r(20), s = r(22), l = r(21), u = r(23), f = r(18), c = r(26), _ = r(27),
            p = function() {};
        p.prototype = Object.create(Object.prototype, {constructor: {value: p, writable: !0, configurable: !0}});
        var h = function() {};
        h.prototype = Object.create(Object.prototype, {constructor: {value: h, writable: !0, configurable: !0}});
        var d = null, v = null;
        p.precompiler = v, p.htmlParser = d;
        var m = function(e) {return e.replace(/-([a-z])/g, function(e, t) {return t.toUpperCase();});},
            g = Object.prototype.hasOwnProperty,
            b = function(e, t) {if (null !== e && 'object' == typeof e && g.call(e, t)) return e[t];},
            w = function(e, t, r, n) {
              if (g.call(t, r)) {
                var i = t[r];
                if ('function' == typeof i) return o.safeCallback('Template Method', i, e, n);
              }
            }, y = function(e, t) {return [{t: 1, n: 'slot', a: [], c: [], p: null}];},
            E = {t: 1, n: '"slot"', v: !0, sn: '', a: [], c: [], p: null},
            x = function(e, t, r) {e.classList.toggle(t, !!r);}, C = function(e, t, r) {e[t] = r;},
            S = function(e, t, r) {
              var n = e.__dataProxy;
              n.scheduleReplace([t], r), n.doUpdates();
            }, A = function(e, t, r) {e.class = r;}, O = function(e, t, r) {e.setAttribute('style', r);},
            T = function(e, t, r) {e.setAttribute('class', r);}, R = function(e, t, r) {e.textContent = r;},
            P = function(e, t, r) {e.dataset || (e.dataset = {}), e.dataset[t] = r;}, N = {
              $: function(e, t, r) {
                r === !0 ? e.setAttribute(t, '') : r === !1 || void 0 === r || null === r
                    ? e.removeAttribute(t)
                    : e.setAttribute(t, r);
              }, ':': C, c: x, s: function(e, t, r) {
                var n = e.style;
                n && (n[t] = r);
              }, d: P,
            }, k = function(e, t, r) {return [{t: 1, n: 'slot', v: !0, sn: '', a: [], c: []}];};
        p.create = function(e, r, n) {
          var o = void 0 === e.template ? k : e.template, i = o;
          if ('function' != typeof o) if (v && 'undefined' != typeof window && 'undefined' != typeof document) {
            var a = '__exparserFreeTmpl', s = v.compile(o), l = document.createElement('script');
            l.type = 'text/javascript', l.innerHTML = 'window.' + a + '=' + s, document.head.appendChild(
                l), document.head.removeChild(l), i = window[a], window[a] = null;
          } else i = 'undefined' != typeof t && 'undefined' != typeof t.versions && 'undefined' != typeof t.versions.node
              ? p.precompileAndGetCreator(o)
              : y;
          var u = Object.create(p.prototype);
          return u._initValuesJSON = JSON.stringify(r), u._tagTreeRoot = L(i, r, e.methods,
              n), u._renderingMode = n.renderingMode, u;
        };
        var L = function(e, t, r, o) {
              var i = o.renderingMode, s = 'native' === i, l = s, u = !1, f = Object.create(null);
              s && !n.hasDOMBackend && (e = y);
              var c = {}, p = e(b, w, r), h = function(e) {
                for (var r = 0; r < e.length; r++) {
                  var n = e[r];
                  if (3 !== n.t) {
                    var o = n.n, i = !(s || 'string' == typeof o && o.indexOf('-') < 0);
                    'slot' === o && '' === n.sn && (u = !0), n.n = o;
                    var f = n.st;
                    f && f.e && (f.o = O, l && (f.v = f.e(t, c, null)));
                    var p = n.cl;
                    p && p.e && (p.o = s ? T : A, l && (p.v = p.e(t, c, null)));
                    var d = null;
                    i || (n.p = d = s ? document.createElement(n.n) : a.create(n.n), f && void 0 !== f.v &&
                    d.setAttribute('style', f.v), s && p && void 0 !== p.v && d.setAttribute('class', p.v));
                    for (var v = n.a, g = 0; g < v.length; g++) {
                      var b = v[g];
                      if (b.d) s || _[b.n].register(b.n, b, n); else {
                        s || ('bind' === b.n.slice(0, 4) ? (b.evCatch = !1, b.ev = m(b.n.slice(4)), ':' === b.ev[0] &&
                        (b.ev = b.ev.slice(1))) : 'catch' === b.n.slice(0, 5) &&
                            (b.evCatch = !0, b.ev = m(b.n.slice(5)), ':' === b.ev[0] && (b.ev = b.ev.slice(1))));
                        var w = b.o;
                        if (i) w ? '&' === w ? b.o = N[':'] : b.o = N[w] : (b.o = N[':'], b.n = m(b.n)), b.o === C &&
                        (b.o = S), l && b.e && (b.v = b.e(t, c, null)); else if (!b.ev) {
                          var y = N;
                          w ? '&' === w ? b.o = y[':'] : b.o = y[w] : b.o = y.$, l ? (b.e && (b.v = b.e(t, c, null)), (b.o !==
                              x || s) && b.o(d, b.n, b.v)) : b.e || b.o(d, b.n, b.v);
                        }
                      }
                    }
                    h(n.c), s && (1 !== n.c.length || void 0 === n.c[0].sn || n.c[0].compressed ||
                        (n.sn = n.c[0].sn, n.compressed = !0, n.c.pop()));
                  } else n.e && (n.o = R, n.c = l ? n.e(t, c, null) : '');
                }
              };
              return h(p, f, !0), s && (u || p.push(E), 1 !== p.length || '' !== p[0].sn || p[0].compressed || p.pop()), p;
            }, I = function(e, t) {return function(r) {if (this[e](r), t) return !1;};},
            M = function(e, t, r, n, o, u, p, h) {
              for (var d = null, v = 0, m = null, g = 0; g < e.length; g++) {
                var b = p, w = e[g];
                if (3 === w.t) d = w.e ? l.create(w.e(n, o, null)) : l.create(w.c), w.e &&
                c.addBindings(u, b, w.b, d, w), i.appendChild(r, d); else {
                  var y = w.cl, E = w.st, A = w.a, O = !1;
                  for (v = 0; v < A.length; v++) if (m = A[v], m.d) {
                    var T = _[m.n].create(m.n, m, w, n, o, u, b, h, t, M, r);
                    if (_[m.n].requireBlock) {
                      d = T, i.appendChild(r, d), O = !0;
                      break;
                    }
                  }
                  if (O) continue;
                  if (w.v) d = s.create(w.n); else if (w.p) {
                    for (d = a.cloneNode(w.p), v = 0; v < A.length; v++) m = A[v], m.d ||
                    (m.ev ? h(d, m.ev, m.v, m.evCatch) : m.o === C ? d.__domElement &&
                        (m.o(d.__domElement, m.n, m.e(n, o, null)), c.addBindings(u, b, m.b, d.__domElement, m)) : (m.e &&
                    m.o(d, m.n, m.e(n, o, null)), (m.e || m.o === x || m.o === P) && c.addBindings(u, b, m.b, d, m)));
                    E && E.e && (d.setAttribute('style', E.e(n, o, null)), c.addBindings(u, b, E.b, d, E));
                  } else {
                    if (w.cpf) {
                      var R = {}, N = t.__wxHost;
                      for (var k in w.cpf) !function(e) {
                        var t = w.cpf[e];
                        R[e] = N.__behavior.methods[t];
                      }(k);
                      t.__childrenPropsFilter = R;
                    }
                    for (d = t.createComponent(w.n, void 0, w.g, void 0), v = 0; v < A.length; v++) if (m = A[v], !m.d) {
                      var L = m.v;
                      m.o === S && f.hasPublicProperty(d, m.n) ? (m.e &&
                      (L = m.e(n, o, null), c.addBindings(u, b, m.b, d, m)), m.e
                          ? S(d, m.n, L)
                          : d.__behavior.properties[m.n].type === Boolean ? S(d, m.n, !0) : S(d, m.n, L)) : m.ev ? h(d,
                          m.ev,
                          L, m.evCatch) : m.o !== S &&
                          (m.e && (L = m.e(n, o, null), c.addBindings(u, b, m.b, d, m)), m.o(d, m.n, L));
                    }
                    E &&
                    (E.e ? (d.__domElement.setAttribute('style', E.e(n, o, null)), c.addBindings(u, b, E.b,
                        d.__domElement,
                        E)) : d.__domElement.setAttribute('style', E.v));
                  }
                  w.id && (d.id = w.id), y &&
                  (y.e ? d.class = y.e(n, o, null) : d.class = y.v, y.o && c.addBindings(u, b, y.b, d, y)), w.sl &&
                  (d.slot = w.sl), void 0 !== w.sn && i.setSlotName(d, w.sn), i.appendChild(r, d), M(w.c, t, d, n, o, u,
                      b, h);
                }
              }
            }, B = function(e, t, r) {
              for (var n = e.childNodes, o = 0; o < n.length; o++) {
                var i = n[o];
                i instanceof l || (i.__id && (t[i.__id] = i), void 0 !== i.__slotName && (r[i.__slotName] = i), B(i, t, r));
              }
            }, U = function(e, t, r, n, o, i) {
              for (var a = null, s = 0, l = null, u = 0; u < e.length; u++) {
                var f = e[u];
                if (void 0 === f.n) a = document.createTextNode(f.c), f.e && c.addBindings(o, i, f.b, a, f), t.appendChild(
                    a); else {
                  var _ = f.cl, p = f.st, h = f.a;
                  for (a = f.v ? document.createElement('virtual') : document.importNode
                      ? document.importNode(f.p, !1)
                      : f.p.cloneNode(!1), s = 0; s < h.length; s++) l = h[s], l.e && c.addBindings(o, i, l.b, a, l);
                  t.appendChild(a), f.id && (r[f.id] = a), _ && _.e && c.addBindings(o, i, _.b, a, _), p && p.e &&
                  c.addBindings(o, i, p.b, a, p), void 0 !== f.sn && (n[f.sn] = a), U(f.c, a, r, n, o, i);
                }
              }
            };
        p.prototype.createInstance = function(e) {
          var t = Object.create(h.prototype), r = JSON.parse(this._initValuesJSON), o = Object.create(null),
              i = Object.create(null), a = [], s = c.create('', null, null, null, null, [], function(e, t) {}), l = null;
          if ('native' === this._renderingMode) 'dom' === n.documentBackend && (l = document.createDocumentFragment()), U(
              this._tagTreeRoot, l, o, i, s, {}), i[''] || (i[''] = null); else {
            var f = function(e, t, r, n) {
              l.__wxHost
                  ? e.addListener(t, I(r, n).bind(l.__wxHost))
                  : a.push({target: e, name: t, func: I(r, n)});
            };
            if (l = u.create(e), e.__createdInOwnerShadowRoot &&
            e.__createdInOwnerShadowRoot.__childrenPropsFilter) if (l.__childrenPropsFilter) for (var _ in e.__createdInOwnerShadowRoot.__childrenPropsFilter) l.__childrenPropsFilter[_] ||
            (l.__childrenPropsFilter[_] = e.__createdInOwnerShadowRoot.__childrenPropsFilter[_]); else l.__childrenPropsFilter = e.__createdInOwnerShadowRoot.__childrenPropsFilter;
            M(this._tagTreeRoot, l, l, r, {}, s, {}, f), B(l, o, i);
          }
          return t.data = r, t.shadowRoot = l, t.idMap = o, t.slots = i, t.listeners = a, t._topScope = s, t;
        }, h.prototype.updateValues = function(e, t, r) {
          for (var n = i.getMethodCaller(e), o = 0; o < r.length; o++) {
            var a = r[o];
            c.updateBinding(this._topScope, a, t, {}, n);
          }
        }, e.exports = p;
      }).call(t, r(12));
    },
    function(e, t) {
      var r = {};
      r.create = function(e, t, r, o, i, a, s) {
        for (var l = {
          inc: 1,
          name: e,
          exp: o,
          lp: i,
          scopes: {},
          targets: {},
          children: null,
          lu: s,
          __scopeBinded: [],
        }, u = 0; u < a.length; u++) {
          var f = a[u];
          null === f[0] ? n(t, f, null, l) : n(r[f[0]], f, null, l);
        }
        return l;
      }, r.proxyTopScope = function(e) {
        var t = {
          inc: 1,
          linked: e,
          scopes: {},
          targets: {},
          children: null,
          __scopeBinded: [],
        };
        return n(e, [null], null, t), t;
      }, r.proxySubScopes = function(e) {
        var t = {};
        for (var r in e) t[r] = {inc: 1, linked: e[r], scopes: {}, targets: {}, children: null, __scopeBinded: []}, n(
            e[r], [null], null, t[r]);
        return t;
      };
      var n = r.addBinding = function(e, t, r, n) {
        for (var o = e, i = 1; i < t.length; i++) {
          var a = t[i];
          o.children || (o.children = Object.create(null));
          var s = o.children;
          s[a] || (s[a] = {scopes: {}, targets: {}, children: null}), o = s[a];
        }
        var l = e.inc++;
        return r ? o.targets[l] = [r, n] : (o.scopes[l] = n, n.__scopeBinded.push([o, l])), l;
      };
      r.addBindings = function(e, t, r, o, i) {
        for (var a = 0; a < r.length; a++) {
          var s = r[a];
          s[0] ? n(t[s[0]], s, o, i) : n(e, s, o, i);
        }
      }, r.updateLvaluePath = function(
          e, t) {e.lp = t;}, r.removeBindingsForScope = function(e) {
        for (var t = e.__scopeBinded, r = 0; r < t.length; r++) {
          var n = t[r];
          delete n[0].scopes[n[1]];
        }
      };
      var o = function(e, t, r, n, o) {
        if (e.linked) return void i(e, t, r, n, o);
        var a = n[e.name];
        n[e.name] = e.exp(r, n, o), i(e, t, r, n, o), n[e.name] = a;
      }, i = r.updateBinding = function(e, t, r, n, i) {
        for (var a = e, s = 0, l = 0; l < t.length; l++) {
          for (s in a.scopes) o(a.scopes[s], t, r, n, i);
          var u = t[l];
          if (!a.children) return;
          var f = a.children;
          if (!f[u]) return;
          a = f[u];
        }
        var c = function(e) {
          for (s in e.targets) {
            var t = e.targets[s], a = t[1];
            a.o(t[0], a.n, a.e(r, n, i));
          }
          for (s in e.scopes) o(e.scopes[s], [], r, n, i);
          for (s in e.children) c(e.children[s]);
        };
        c(a);
      };
      e.exports = r;
    },
    function(e, t, r) {
      e.exports = {
        if: r(28),
        elif: r(28),
        else: r(28),
        for: r(30),
        key: r(31),
        'for-index': r(32),
        'for-item': r(33),
        alias: r(34),
      };
    },
    function(e, t, r) {
      var n = r(22), o = r(26), i = r(29).RUNTIME_NAMES;
      i.TOP_SCOPE + ',' + i.SUB_SCOPE + ',' + i.CALLER;
      e.exports = {
        requireBlock: !0,
        register: function(e, t, r) {},
        create: function(e, t, r, i, a, s, l, u, f, c, _) {
          var p = n.create('wx:' + e);
          p.__wxIfCondValue = !0, p.__wxIfNextNode = null, p.__wxIfHasTrueCond = !0;
          var h = null;
          'if' !== e && (h = _.childNodes[_.childNodes.length - 1], 'wx:if' !== h.is && 'wx:elif' !== h.is
              ? h = null
              : h.__wxIfNextNode = p), r.id && (p.id = r.id);
          var d = p.__wxIfUpdateNode = function() {
            var e = p.__wxIfCondValue;
            if (h && h.__wxIfHasTrueCond && (e = !1), e && !p.childNodes.length) {
              var t = o.proxyTopScope(s), n = o.proxySubScopes(l);
              p.__wxTopScope = t, p.__wxSubScopes = n, c(r.c, f, p, i, a, t, n, u);
            } else if (!e && p.childNodes.length) {
              o.removeBindingsForScope(p.__wxTopScope);
              for (var _ in p.__wxSubScopes) o.removeBindingsForScope(p.__wxSubScopes[_]);
              for (; p.childNodes.length;) p.removeChild(p.childNodes[0]);
            }
            p.__wxIfNextNode && p.__wxIfNextNode.__wxIfUpdateNode();
          }, v = function(e) {
            p.__wxIfCondValue = !!e, p.__wxIfHasTrueCond = p.__wxIfCondValue || h && h.__wxIfHasTrueCond, d();
          };
          return 'else' === e ? v(!0) : (o.addBindings(s, l, t.b, p, {e: t.d, o: function(e, t, r) {v(r);}}), v(
              t.d(i, a, null))), p;
        },
      };
    },
    function(e, t) {
      t.TAG_TYPES = {TAG_START: 1, TAG_END: -1, TEXT: 3, COMMENT: 8}, t.RUNTIME_NAMES = {
        MEMBER: 'm',
        CALL: 'f',
        METHODS: 'e',
        CALLER: 'c',
        TOP_SCOPE: 't',
        SUB_SCOPE: 's',
      };
      var r = t.STRING_UNESCAPE_MAP = {
        n: '\n',
        r: '\r',
        b: '\b',
        f: '\f',
        t: '\t',
        v: '\v',
        '"': '"',
        '\'': '\'',
        '\\': '\\',
        '\r': '\r',
        '\n': '\n',
      }, n = t.STRING_ESCAPE_MAP = {}, o = '';
      for (var i in r) n[r[i]] = i, o += r[i];
      t.STRING_ESCAPE_REGEXP = new RegExp('[' + o + ']', 'g');
    },
    function(e, t, r) {
      var n = r(22), o = r(26), i = r(29).RUNTIME_NAMES;
      i.TOP_SCOPE + ',' + i.SUB_SCOPE + ',' + i.CALLER;
      e.exports = {
        requireBlock: !0,
        addDefaultAttrs: [{n: 'wx:for-index', v: 'index'}, {n: 'wx:for-item', v: 'item'}],
        register: function(e, t, r) {},
        create: function(e, t, r, i, a, s, l, u, f, c) {
          var _ = r._wxForIndex || 'index', p = r._wxForItem || 'item', h = r._wxKey, d = n.create('wx:for:list');
          r.id && (d.id = r.id), o.create('', s, l, function(e, r, n) {
            var o = t.d(e, r, null);
            return w(o, e, r, n), o;
          }, t.l, t.b);
          var v = function(e, t, i, a, h) {
                var v = n.create('wx:for:item'), m = o.proxyTopScope(s), g = o.proxySubScopes(l);
                v.__wxTopScope = m, v.__wxSubScopes = g, v.__wxForToRemove = !1, v.__wxForKeyStr = '';
                var b = o.create(_, m, g, null, null, []), w = o.create(p, m, g, null, [i], []);
                return g[_] = b, g[p] = w, t[_] = i, t[p] = a, c(r.c, f, v, e, t, m, g, u), void 0 === h
                    ? d.appendChild(v)
                    : d.insertBefore(v, h), v;
              }, m = function(e, t, r, n, a, s) {
                var l = e.__wxSubScopes[p];
                o.updateLvaluePath(l, [n]), a && (s ? d.insertBefore(e, s) : d.appendChild(e));
                var u = e.__wxSubScopes[_];
                r[_] = n, o.updateBinding(u, [], i, r, t);
              }, g = function(e, t, r, n, i, a) {n[p] = i, o.updateBinding(e.__wxSubScopes[p], t, r, n, a);},
              b = function(e) {
                o.removeBindingsForScope(e.__wxTopScope);
                for (var t in d.__wxSubScopes) o.removeBindingsForScope(e.__wxSubScopes[t]);
                d.removeChild(e);
              }, w = function(e, t, r, n) {
                var o = '', i = e;
                'object' == typeof e && null !== e || (i = []);
                var a = {};
                for (o in r) a[o] = r[o];
                var s = 0;
                if (h) {
                  var l = [], u = e instanceof Array, f = [];
                  if (!u) {
                    var c = i;
                    i = [];
                    for (o in c) i.push(c[o]), f.push(o);
                  }
                  for (s = 0; s < i.length; s++) l.push(String(i[s][h]));
                  if (0 === i.length) for (; d.childNodes.length;) b(d.childNodes[0]); else {
                    var _ = Object.create(null), p = Object.create(null), w = d.childNodes, y = null, E = '';
                    for (s = 0; s < w.length; s++) y = w[s], E = y.__wxForKeyStr, _[E] >= 0
                        ? (b(y), s--)
                        : (_[E] = s, p[E] = y, y.__wxForToRemove = !0);
                    var x = -1, C = 0, S = 1, A = [];
                    for (C = _[i[0][h]], C >= 0 || (C = -1), w[C] && (w[C].__wxForToRemove = !1), s = 1; s <
                    i.length; s++) S = _[i[s][h]], S >= 0 &&
                    (x < C && (C < S || x > S) && (A.push(w[C]), x = C), C = S, w[C] && (w[C].__wxForToRemove = !1));
                    for (x < C && A.push(w[C]), s = 0; s < w.length; s++) y = w[s], y.__wxForToRemove && (b(y), s--);
                    var O = A.shift(), T = 0;
                    for (s = 0; s < i.length; s++) {
                      var R = i[s], P = p[R[h]];
                      if (p[R[h]] = null, P) {
                        var N = !0;
                        if (P === O) {
                          for (; w[T] !== O;) T++;
                          T++, O = A.shift(), N = !1;
                        }
                        y = P, m(y, n, a, u ? s : f[s], N, w[T]), N && w[T] === y && T++, g(y, [], t, a, i[s], n);
                      } else y = v(t, a, u ? s : f[s], i[s], w[T]), T++, y.__wxForKeyStr = String(R[h]);
                    }
                  }
                } else {
                  for (; d.childNodes.length;) b(d.childNodes[0]);
                  if (e instanceof Array) for (s = 0; s < i.length; s++) v(t, a, s, i[s]); else for (o in i) v(t, a, o, i[o]);
                }
              };
          return w(t.d(i, a, null), i, a, null), d;
        },
      };
    },
    function(e, t) {
      e.exports = {
        attachedToBlock: !0,
        register: function(e, t, r) {r._wxKey = t.d;},
        create: function() {},
      };
    },
    function(e, t) {
      e.exports = {
        attachedToBlock: 'for',
        register: function(e, t, r) {r._wxForIndex = t.d;},
        create: function() {},
      };
    },
    function(e, t) {
      e.exports = {
        attachedToBlock: 'for',
        register: function(e, t, r) {r._wxForItem = t.d;},
        create: function() {},
      };
    },
    function(e, t, r) {
      var n = r(22), o = r(26), i = r(29).RUNTIME_NAMES;
      i.TOP_SCOPE + ',' + i.SUB_SCOPE + ',' + i.CALLER;
      e.exports = {
        requireBlock: !0,
        register: function(e, t, r) {},
        create: function(e, t, r, i, a, s, l, u, f, c) {
          var _ = t.s[0], p = o.create(_, s, l, t.d, t.l, t.b), h = {}, d = '';
          for (d in l) h[d] = l[d];
          h[_] = p;
          var v = {};
          for (d in a) v[d] = a[d];
          v[_] = t.d(i, a, null);
          var m = n.create('wx:alias');
          return r.id && (m.id = r.id), c(r.c, f, m, i, v, s, h, u), m;
        },
      };
    }]);
  