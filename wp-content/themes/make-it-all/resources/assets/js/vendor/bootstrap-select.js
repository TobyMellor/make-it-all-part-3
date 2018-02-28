! function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function(e) {
    ! function(e) {
        "use strict";

        function t(t) {
            var i = [{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            }];
            return e.each(i, function() {
                t = t ? t.replace(this.re, this.ch) : ""
            }), t
        }

        function i(t) {
            var i = arguments,
                n = t;
            [].shift.apply(i);
            var s, o = this.each(function() {
                var t = e(this);
                if (t.is("select")) {
                    var o = t.data("selectpicker"),
                        a = "object" == typeof n && n;
                    if (o) {
                        if (a)
                            for (var l in a) a.hasOwnProperty(l) && (o.options[l] = a[l])
                    } else {
                        var r = e.extend({}, h.DEFAULTS, e.fn.selectpicker.defaults || {}, t.data(), a);
                        r.template = e.extend({}, h.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, t.data().template, a.template), t.data("selectpicker", o = new h(this, r))
                    }
                    "string" == typeof n && (s = o[n] instanceof Function ? o[n].apply(o, i) : o.options[n])
                }
            });
            return "undefined" != typeof s ? s : o
        }
        String.prototype.includes || ! function() {
            var e = {}.toString,
                t = function() {
                    try {
                        var e = {},
                            t = Object.defineProperty,
                            i = t(e, e, e) && t
                    } catch (n) {}
                    return i
                }(),
                i = "".indexOf,
                n = function(t) {
                    if (null == this) throw new TypeError;
                    var n = String(this);
                    if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
                    var s = n.length,
                        o = String(t),
                        a = o.length,
                        l = arguments.length > 1 ? arguments[1] : void 0,
                        r = l ? Number(l) : 0;
                    r != r && (r = 0);
                    var d = Math.min(Math.max(r, 0), s);
                    return a + d > s ? !1 : -1 != i.call(n, o, r)
                };
            t ? t(String.prototype, "includes", {
                value: n,
                configurable: !0,
                writable: !0
            }) : String.prototype.includes = n
        }(), String.prototype.startsWith || ! function() {
            var e = function() {
                    try {
                        var e = {},
                            t = Object.defineProperty,
                            i = t(e, e, e) && t
                    } catch (n) {}
                    return i
                }(),
                t = {}.toString,
                i = function(e) {
                    if (null == this) throw new TypeError;
                    var i = String(this);
                    if (e && "[object RegExp]" == t.call(e)) throw new TypeError;
                    var n = i.length,
                        s = String(e),
                        o = s.length,
                        a = arguments.length > 1 ? arguments[1] : void 0,
                        l = a ? Number(a) : 0;
                    l != l && (l = 0);
                    var r = Math.min(Math.max(l, 0), n);
                    if (o + r > n) return !1;
                    for (var d = -1; ++d < o;)
                        if (i.charCodeAt(r + d) != s.charCodeAt(d)) return !1;
                    return !0
                };
            e ? e(String.prototype, "startsWith", {
                value: i,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = i
        }(), Object.keys || (Object.keys = function(e, t, i) {
            i = [];
            for (t in e) i.hasOwnProperty.call(e, t) && i.push(t);
            return i
        });
        var n = {
            useDefault: !1,
            _set: e.valHooks.select.set
        };
        e.valHooks.select.set = function(t, i) {
            return i && !n.useDefault && e(t).data("selected", !0), n._set.apply(this, arguments)
        };
        var s = null;
        e.fn.triggerNative = function(e) {
            this[0];
            this.trigger(e)
        }, e.expr.pseudos.icontains = function(t, i, n) {
            var s = e(t).find("span.dropdown-item-inner"),
                o = (s.data("tokens") || s.text()).toString().toUpperCase();
            return o.includes(n[3].toUpperCase())
        }, e.expr.pseudos.ibegins = function(t, i, n) {
            var s = e(t).find("span.dropdown-item-inner"),
                o = (s.data("tokens") || s.text()).toString().toUpperCase();
            return o.startsWith(n[3].toUpperCase())
        }, e.expr.pseudos.aicontains = function(t, i, n) {
            var s = e(t).find("span.dropdown-item-inner"),
                o = (s.data("tokens") || s.data("normalizedText") || s.text()).toString().toUpperCase();
            return o.includes(n[3].toUpperCase())
        }, e.expr.pseudos.aibegins = function(t, i, n) {
            var s = e(t).find("span.dropdown-item-inner"),
                o = (s.data("tokens") || s.data("normalizedText") || s.text()).toString().toUpperCase();
            return o.startsWith(n[3].toUpperCase())
        };
        var o = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            a = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#x27;": "'",
                "&#x60;": "`"
            },
            l = function(e) {
                var t = function(t) {
                        return e[t]
                    },
                    i = "(?:" + Object.keys(e).join("|") + ")",
                    n = RegExp(i),
                    s = RegExp(i, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, n.test(e) ? e.replace(s, t) : e
                }
            },
            r = l(o),
            d = l(a),
            h = function(t, i) {
                n.useDefault || (e.valHooks.select.set = n._set, n.useDefault = !0), this.$element = e(t), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = i, null === this.options.title && (this.options.title = this.$element.attr("title"));
                var s = this.options.windowPadding;
                "number" == typeof s && (this.options.windowPadding = [s, s, s, s]), this.val = h.prototype.val, this.render = h.prototype.render, this.refresh = h.prototype.refresh, this.setStyle = h.prototype.setStyle, this.selectAll = h.prototype.selectAll, this.deselectAll = h.prototype.deselectAll, this.destroy = h.prototype.destroy, this.remove = h.prototype.remove, this.show = h.prototype.show, this.hide = h.prototype.hide, this.init()
            };
        h.VERSION = "1.12.2", h.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-default btn-light",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "fa",
            tickIcon: "fa-check",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0
        }, h.prototype = {
            constructor: h,
            init: function() {
                var t = this,
                    i = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight === !0 && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof i && (this.$button.attr("data-id", i), e('label[for="' + i + '"]').click(function(e) {
                    e.preventDefault(), t.$button.focus()
                })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        t.$menuInner.attr("aria-expanded", !1), t.$element.trigger("hide.bs.select", e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        t.$element.trigger("hidden.bs.select", e)
                    },
                    "show.bs.dropdown": function(e) {
                        t.$menuInner.attr("aria-expanded", !0), t.$element.trigger("show.bs.select", e)
                    },
                    "shown.bs.dropdown": function(e) {
                        t.$element.trigger("shown.bs.select", e)
                    }
                }), t.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                    t.$button.addClass("bs-invalid").focus(), t.$element.on({
                        "focus.bs.select": function() {
                            t.$button.focus(), t.$element.off("focus.bs.select")
                        },
                        "shown.bs.select": function() {
                            t.$element.val(t.$element.val()).off("shown.bs.select")
                        },
                        "rendered.bs.select": function() {
                            this.validity.valid && t.$button.removeClass("bs-invalid"), t.$element.off("rendered.bs.select")
                        }
                    })
                }), setTimeout(function() {
                    t.$element.trigger("loaded.bs.select")
                })
            },
            createDropdown: function() {
                var t = this.multiple || this.options.showTick ? " show-tick" : "",
                    i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    n = this.autofocus ? " autofocus" : "",
                    s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    o = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + r(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
                    a = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default btn-light">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default btn-light">' + this.options.deselectAllText + "</button></div></div>" : "",
                    l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default btn-light">' + this.options.doneButtonText + "</button></div></div>" : "",
                    d = '<div class="btn-group bootstrap-select' + t + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + n + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + s + o + a + '<div class="dropdown-menu inner" role="listbox" aria-expanded="false"></div>' + l + "</div></div>";
                return e(d)
            },
            createView: function() {
                var e = this.createDropdown(),
                    t = this.createLi();
                return e.find("div.inner")[0].innerHTML = t, e
            },
            reloadLi: function() {
                var e = this.createLi();
                this.$menuInner[0].innerHTML = e
            },
            createLi: function() {
                var i = this,
                    n = [],
                    s = 0,
                    o = document.createElement("option"),
                    a = -1,
                    l = function(e, t, i, n) {
                        return i = "dropdown-item " + (i || ""), "<a" + ("undefined" != typeof i && "" !== i ? ' class="' + i + '"' : "") + ("undefined" != typeof t && null !== t ? ' data-original-index="' + t + '"' : "") + ("undefined" != typeof n && null !== n ? 'data-optgroup="' + n + '"' : "") + ">" + e + "</a>"
                    },
                    d = function(n, s, o, a) {
                        return s = "dropdown-item-inner " + (s || ""), '<span tabindex="0"' + ("undefined" != typeof s ? ' class="' + s + '"' : "") + (o ? ' style="' + o + '"' : "") + (i.options.liveSearchNormalize ? ' data-normalized-text="' + t(r(e(n).html())) + '"' : "") + ("undefined" != typeof a || null !== a ? ' data-tokens="' + a + '"' : "") + ' role="option">' + n + '<span class="' + i.options.iconBase + " " + i.options.tickIcon + ' check-mark"></span></span>'
                    };
                if (this.options.title && !this.multiple && (a--, !this.$element.find(".bs-title-option").length)) {
                    var h = this.$element[0];
                    o.className = "bs-title-option", o.innerHTML = this.options.title, o.value = "", h.insertBefore(o, h.firstChild);
                    var c = e(h.options[h.selectedIndex]);
                    void 0 === c.attr("selected") && void 0 === this.$element.data("selected") && (o.selected = !0)
                }
                var p = this.$element.find("option");
                return p.each(function(t) {
                    var o = e(this);
                    if (a++, !o.hasClass("bs-title-option")) {
                        var h, c = this.className || "",
                            u = r(this.style.cssText),
                            f = o.data("content") ? o.data("content") : o.html(),
                            m = o.data("tokens") ? o.data("tokens") : null,
                            g = "undefined" != typeof o.data("subtext") ? '<small class="text-muted">' + o.data("subtext") + "</small>" : "",
                            b = "undefined" != typeof o.data("icon") ? '<span class="' + i.options.iconBase + " " + o.data("icon") + '"></span> ' : "",
                            v = o.parent(),
                            $ = "OPTGROUP" === v[0].tagName,
                            x = $ && v[0].disabled,
                            w = this.disabled || x;
                        if ("" !== b && w && (b = "<span>" + b + "</span>"), i.options.hideDisabled && (w && !$ || x)) return h = o.data("prevHiddenIndex"), o.next().data("prevHiddenIndex", void 0 !== h ? h : t), void a--;
                        if (o.data("content") || (f = b + '<span class="text">' + f + g + "</span>"), $ && o.data("divider") !== !0) {
                            if (i.options.hideDisabled && w) {
                                if (void 0 === v.data("allOptionsDisabled")) {
                                    var y = v.children();
                                    v.data("allOptionsDisabled", y.filter(":disabled").length === y.length)
                                }
                                if (v.data("allOptionsDisabled")) return void a--
                            }
                            var C = " " + v[0].className || "";
                            if (0 === o.index()) {
                                s += 1;
                                var S = v[0].label,
                                    k = "undefined" != typeof v.data("subtext") ? '<small class="text-muted">' + v.data("subtext") + "</small>" : "",
                                    I = v.data("icon") ? '<span class="' + i.options.iconBase + " " + v.data("icon") + '"></span> ' : "";
                                S = I + '<span class="text">' + r(S) + k + "</span>", 0 !== t && n.length > 0 && (a++, n.push(l("", null, "divider", s + "div"))), a++, n.push(l(S, null, "dropdown-header" + C, s))
                            }
                            if (i.options.hideDisabled && w) return void a--;
                            n.push(l(d(f, "opt " + c + C, u, m), t, "", s))
                        } else if (o.data("divider") === !0) n.push(l("", t, "divider"));
                        else if (o.data("hidden") === !0) h = o.data("prevHiddenIndex"), o.next().data("prevHiddenIndex", void 0 !== h ? h : t), n.push(l(d(f, c, u, m), t, "hidden is-hidden"));
                        else {
                            var T = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;
                            if (!T && i.options.hideDisabled && (h = o.data("prevHiddenIndex"), void 0 !== h)) {
                                var E = p.eq(h)[0].previousElementSibling;
                                E && "OPTGROUP" === E.tagName && !E.disabled && (T = !0)
                            }
                            T && (a++, n.push(l("", null, "divider", s + "div"))), n.push(l(d(f, c, u, m), t))
                        }
                        i.liObj[t] = a
                    }
                }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), n.join("")
            },
            findLis: function() {
                return null == this.$lis && (this.$lis = this.$menu.find("a")), this.$lis
            },
            render: function(t) {
                var i, n = this,
                    s = this.$element.find("option");
                t !== !1 && s.each(function(e) {
                    var t = n.findLis().eq(n.liObj[e]);
                    n.setDisabled(e, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, t), n.setSelected(e, this.selected, t)
                }), this.togglePlaceholder(), this.tabIndex();
                var o = s.map(function() {
                        if (this.selected) {
                            if (n.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                            var t, i = e(this),
                                s = i.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + i.data("icon") + '"></i> ' : "";
                            return t = n.options.showSubtext && i.data("subtext") && !n.multiple ? ' <small class="text-muted">' + i.data("subtext") + "</small>" : "", "undefined" != typeof i.attr("title") ? i.attr("title") : i.data("content") && n.options.showContent ? i.data("content").toString() : s + i.html() + t
                        }
                    }).toArray(),
                    a = this.multiple ? o.join(this.options.multipleSeparator) : o[0];
                if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var l = this.options.selectedTextFormat.split(">");
                    if (l.length > 1 && o.length > l[1] || 1 == l.length && o.length >= 2) {
                        i = this.options.hideDisabled ? ", [disabled]" : "";
                        var r = s.not('[data-divider="true"], [data-hidden="true"]' + i).length,
                            h = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o.length, r) : this.options.countSelectedText;
                        a = h.replace("{0}", o.length.toString()).replace("{1}", r.toString())
                    }
                }
                void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (a = this.options.title), a || (a = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", d(e.trim(a.replace(/<[^>]*>?/g, "")))), this.$button.children(".filter-option").html(a), this.$element.trigger("rendered.bs.select")
            },
            setStyle: function(e, t) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var i = e ? e : this.options.style;
                "add" == t ? this.$button.addClass(i) : "remove" == t ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
            },
            liHeight: function(t) {
                if (t || this.options.size !== !1 && !this.sizeInfo) {
                    var i = document.createElement("div"),
                        n = document.createElement("div"),
                        s = document.createElement("ul"),
                        o = document.createElement("a"),
                        a = document.createElement("a"),
                        l = document.createElement("span"),
                        r = document.createElement("span"),
                        d = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                        h = this.options.liveSearch ? document.createElement("div") : null,
                        c = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        p = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (r.className = "text", i.className = this.$menu[0].parentNode.className + " show open", n.className = "dropdown-menu open show", s.className = "dropdown-menu inner", o.className = "divider", l.className = "dropdown-item-inner", r.appendChild(document.createTextNode("Inner text")), l.appendChild(r), a.appendChild(l), s.appendChild(a), s.appendChild(o), d && n.appendChild(d), h) {
                        var u = document.createElement("input");
                        h.className = "bs-searchbox", u.className = "form-control", h.appendChild(u), n.appendChild(h)
                    }
                    c && n.appendChild(c), n.appendChild(s), p && n.appendChild(p), i.appendChild(n), document.body.appendChild(i);
                    var f = l.offsetHeight,
                        m = d ? d.offsetHeight : 0,
                        g = h ? h.offsetHeight : 0,
                        b = c ? c.offsetHeight : 0,
                        v = p ? p.offsetHeight : 0,
                        $ = e(o).outerHeight(!0),
                        x = "function" == typeof getComputedStyle ? getComputedStyle(n) : !1,
                        w = x ? null : e(n),
                        y = {
                            vert: parseInt(x ? x.paddingTop : w.css("paddingTop")) + parseInt(x ? x.paddingBottom : w.css("paddingBottom")) + parseInt(x ? x.borderTopWidth : w.css("borderTopWidth")) + parseInt(x ? x.borderBottomWidth : w.css("borderBottomWidth")),
                            horiz: parseInt(x ? x.paddingLeft : w.css("paddingLeft")) + parseInt(x ? x.paddingRight : w.css("paddingRight")) + parseInt(x ? x.borderLeftWidth : w.css("borderLeftWidth")) + parseInt(x ? x.borderRightWidth : w.css("borderRightWidth"))
                        },
                        C = {
                            vert: y.vert + parseInt(x ? x.marginTop : w.css("marginTop")) + parseInt(x ? x.marginBottom : w.css("marginBottom")) + 2,
                            horiz: y.horiz + parseInt(x ? x.marginLeft : w.css("marginLeft")) + parseInt(x ? x.marginRight : w.css("marginRight")) + 2
                        };
                    document.body.removeChild(i), this.sizeInfo = {
                        liHeight: f,
                        headerHeight: m,
                        searchHeight: g,
                        actionsHeight: b,
                        doneButtonHeight: v,
                        dividerHeight: $,
                        menuPadding: y,
                        menuExtras: C
                    }
                }
            },
            setSize: function() {
                if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
                    var t, i, n, s, o, a, l, r, d = this,
                        h = this.$menu,
                        c = this.$menuInner,
                        p = e(window),
                        u = this.$newElement[0].offsetHeight,
                        f = this.$newElement[0].offsetWidth,
                        m = this.sizeInfo.liHeight,
                        g = this.sizeInfo.headerHeight,
                        b = this.sizeInfo.searchHeight,
                        v = this.sizeInfo.actionsHeight,
                        $ = this.sizeInfo.doneButtonHeight,
                        x = this.sizeInfo.dividerHeight,
                        w = this.sizeInfo.menuPadding,
                        y = this.sizeInfo.menuExtras,
                        C = this.options.hideDisabled ? ".disabled" : "",
                        S = function() {
                            var t, i = d.$newElement.offset(),
                                n = e(d.options.container);
                            d.options.container && !n.is("body") ? (t = n.offset(), t.top += parseInt(n.css("borderTopWidth")), t.left += parseInt(n.css("borderLeftWidth"))) : t = {
                                top: 0,
                                left: 0
                            };
                            var s = d.options.windowPadding;
                            o = i.top - t.top - p.scrollTop(), a = p.height() - o - u - t.top - s[2], l = i.left - t.left - p.scrollLeft(), r = p.width() - l - f - t.left - s[1], o -= s[0], l -= s[3]
                        };
                    if (S(), "auto" === this.options.size) {
                        var k = function() {
                            var p, u = function(t, i) {
                                    return function(n) {
                                        return i ? n.classList ? n.classList.contains(t) : e(n).hasClass(t) : !(n.classList ? n.classList.contains(t) : e(n).hasClass(t))
                                    }
                                },
                                x = d.$menuInner[0].getElementsByTagName("a"),
                                C = Array.prototype.filter ? Array.prototype.filter.call(x, u("hidden", !1)) : d.$lis.not(".hidden"),
                                k = Array.prototype.filter ? Array.prototype.filter.call(C, u("dropdown-header", !0)) : C.filter(".dropdown-header");
                            S(), t = a - y.vert, i = r - y.horiz, d.options.container ? (h.data("height") || h.data("height", h.height()), n = h.data("height"), h.data("width") || h.data("width", h.width()), s = h.data("width")) : (n = h.height(), s = h.width()), d.options.dropupAuto && d.$newElement.toggleClass("dropup", o > a && t - y.vert < n), d.$newElement.hasClass("dropup") && (t = o - y.vert), "auto" === d.options.dropdownAlignRight && h.toggleClass("dropdown-menu-right", l > r && i - y.horiz < s - f), p = C.length + k.length > 3 ? 3 * m + y.vert - 2 : 0, h.css({
                                "max-height": t + "px",
                                overflow: "hidden",
                                "min-height": p + g + b + v + $ + "px"
                            }), c.css({
                                "max-height": t - g - b - v - $ - w.vert + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(p - w.vert, 0) + "px"
                            })
                        };
                        k(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", k), p.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", k)
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(C).length > this.options.size) {
                        var I = this.$lis.not(".divider").not(C).children().slice(0, this.options.size).last().parent().index(),
                            T = this.$lis.slice(0, I + 1).filter(".divider").length;
                        t = m * this.options.size + T * x + w.vert, d.options.container ? (h.data("height") || h.data("height", h.height()), n = h.data("height")) : n = h.height(), d.options.dropupAuto && this.$newElement.toggleClass("dropup", o > a && t - y.vert < n), h.css({
                            "max-height": t + g + b + v + $ + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }), c.css({
                            "max-height": t - w.vert + "px",
                            "overflow-y": "auto",
                            "min-height": ""
                        })
                    }
                }
            },
            setWidth: function() {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var e = this.$menu.parent().clone().appendTo("body"),
                        t = this.options.container ? this.$newElement.clone().appendTo("body") : e,
                        i = e.children(".dropdown-menu").outerWidth(),
                        n = t.css("width", "auto").children("button").outerWidth();
                    e.remove(), t.remove(), this.$newElement.css("width", Math.max(i, n) + "px")
                } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = e('<div class="bs-container" />');
                var t, i, n, s = this,
                    o = e(this.options.container),
                    a = function(e) {
                        s.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", e.hasClass("dropup")), t = e.offset(), o.is("body") ? i = {
                            top: 0,
                            left: 0
                        } : (i = o.offset(), i.top += parseInt(o.css("borderTopWidth")) - o.scrollTop(), i.left += parseInt(o.css("borderLeftWidth")) - o.scrollLeft()), n = e.hasClass("dropup") ? 0 : e[0].offsetHeight, s.$bsContainer.css({
                            top: t.top - i.top + n,
                            left: t.left - i.left,
                            width: e[0].offsetWidth
                        })
                    };
                this.$button.on("click", function() {
                    var t = e(this);
                    s.isDisabled() || (a(s.$newElement), s.$bsContainer.appendTo(s.options.container).toggleClass("open", !t.hasClass("open")).append(s.$menu))
                }), e(window).on("resize scroll", function() {
                    a(s.$newElement)
                }), this.$element.on("hide.bs.select", function() {
                    s.$menu.data("height", s.$menu.height()), s.$bsContainer.detach()
                })
            },
            setSelected: function(e, t, i) {
                i || (this.togglePlaceholder(), i = this.findLis().eq(this.liObj[e])), i.toggleClass("selected", t).find("span.dropdown-item-inner").attr("aria-selected", t)
            },
            setDisabled: function(e, t, i) {
                i || (i = this.findLis().eq(this.liObj[e])), t ? i.addClass("disabled").children("span.dropdown-item-inner").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : i.removeClass("disabled").children("span.dropdown-item-inner").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1)
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
                    return !e.isDisabled()
                })
            },
            togglePlaceholder: function() {
                var e = this.$element.val();
                this.$button.toggleClass("bs-placeholder", null === e || "" === e || e.constructor === Array && 0 === e.length)
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var t = this,
                    i = e(document);
                i.data("spaceSelect", !1), this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && i.data("spaceSelect") && (e.preventDefault(), i.data("spaceSelect", !1))
                }), this.$button.on("click", function() {
                    t.setSize()
                }), this.$element.on("shown.bs.select", function() {
                    if (t.options.liveSearch || t.multiple) {
                        if (!t.multiple) {
                            var e = t.liObj[t.$element[0].selectedIndex];
                            if ("number" != typeof e || t.options.size === !1) return;
                            var i = t.$lis.eq(e)[0].offsetTop - t.$menuInner[0].offsetTop;
                            i = i - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2, t.$menuInner[0].scrollTop = i
                        }
                    } else t.$menuInner.find(".selected a").focus()
                }), this.$menuInner.on("click", "a span.dropdown-item-inner", function(i) {
                    var n = e(this),
                        o = n.parent().data("originalIndex"),
                        a = t.$element.val(),
                        l = t.$element.prop("selectedIndex"),
                        r = !0;
                    if (t.multiple && 1 !== t.options.maxOptions && i.stopPropagation(), i.preventDefault(), !t.isDisabled() && !n.parent().hasClass("disabled")) {
                        var d = t.$element.find("option"),
                            h = d.eq(o),
                            c = h.prop("selected"),
                            p = h.parent("optgroup"),
                            u = t.options.maxOptions,
                            f = p.data("maxOptions") || !1;
                        if (t.multiple) {
                            if (h.prop("selected", !c), t.setSelected(o, !c), n.blur(), u !== !1 || f !== !1) {
                                var m = u < d.filter(":selected").length,
                                    g = f < p.find("option:selected").length;
                                if (u && m || f && g)
                                    if (u && 1 == u) d.prop("selected", !1), h.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(o, !0);
                                    else if (f && 1 == f) {
                                    p.find("option:selected").prop("selected", !1), h.prop("selected", !0);
                                    var b = n.parent().data("optgroup");
                                    t.$menuInner.find('[data-optgroup="' + b + '"]').removeClass("selected"), t.setSelected(o, !0)
                                } else {
                                    var v = "string" == typeof t.options.maxOptionsText ? [t.options.maxOptionsText, t.options.maxOptionsText] : t.options.maxOptionsText,
                                        $ = "function" == typeof v ? v(u, f) : v,
                                        x = $[0].replace("{n}", u),
                                        w = $[1].replace("{n}", f),
                                        y = e('<div class="notify"></div>');
                                    $[2] && (x = x.replace("{var}", $[2][u > 1 ? 0 : 1]), w = w.replace("{var}", $[2][f > 1 ? 0 : 1])), h.prop("selected", !1), t.$menu.append(y), u && m && (y.append(e("<div>" + x + "</div>")), r = !1, t.$element.trigger("maxReached.bs.select")), f && g && (y.append(e("<div>" + w + "</div>")), r = !1, t.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                        t.setSelected(o, !1)
                                    }, 10), y.delay(750).fadeOut(300, function() {
                                        e(this).remove()
                                    })
                                }
                            }
                        } else d.prop("selected", !1), h.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected").find("span.dropdown-item-inner").attr("aria-selected", !1), t.setSelected(o, !0);
                        !t.multiple || t.multiple && 1 === t.options.maxOptions ? t.$button.focus() : t.options.liveSearch && t.$searchbox.focus(), r && (a != t.$element.val() && t.multiple || l != t.$element.prop("selectedIndex") && !t.multiple) && (s = [o, h.prop("selected"), c], t.$element.triggerNative("change"))
                    }
                }), this.$menu.on("click", "a.disabled span.dropdown-item-inner , .popover-title, .popover-title :not(.close)", function(i) {
                    i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), t.options.liveSearch && !e(i.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus())
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()
                }), this.$menu.on("click", ".popover-title .close", function() {
                    t.$button.click()
                }), this.$searchbox.on("click", function(e) {
                    e.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function(i) {
                    t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(), i.preventDefault(), i.stopPropagation(), e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll()
                }), this.$element.change(function() {
                    t.render(!1), t.$element.trigger("changed.bs.select", s), s = null
                })
            },
            liveSearchListener: function() {
                var i = this,
                    n = e('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api", function() {
                    i.$menuInner.find(".active").removeClass("active"), i.$searchbox.val() && (i.$searchbox.val(""), i.$lis.not(".is-hidden").removeClass("hidden"), n.parent().length && n.remove()), i.multiple || i.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
                        i.$searchbox.focus()
                    }, 10)
                }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(e) {
                    e.stopPropagation()
                }), this.$searchbox.on("input propertychange", function() {
                    if (i.$lis.not(".is-hidden").removeClass("hidden"), i.$lis.filter(".active").removeClass("active"), n.remove(), i.$searchbox.val()) {
                        var s, o = i.$lis.not(".is-hidden, .divider, .dropdown-header");
                        if (s = i.options.liveSearchNormalize ? o.not(":a" + i._searchStyle() + '("' + t(i.$searchbox.val()) + '")') : o.not(":" + i._searchStyle() + '("' + i.$searchbox.val() + '")'), s.length === o.length) n.html(i.options.noneResultsText.replace("{0}", '"' + r(i.$searchbox.val()) + '"')), i.$menuInner.append(n), i.$lis.addClass("hidden");
                        else {
                            s.addClass("hidden");
                            var a, l = i.$lis.not(".hidden");
                            l.each(function(t) {
                                var i = e(this);
                                i.hasClass("divider") ? void 0 === a ? i.addClass("hidden") : (a && a.addClass("hidden"), a = i) : i.hasClass("dropdown-header") && l.eq(t + 1).data("optgroup") !== i.data("optgroup") ? i.addClass("hidden") : a = null
                            }), a && a.addClass("hidden"), o.not(".hidden").first().addClass("active"), i.$menuInner.scrollTop(0)
                        }
                    }
                })
            },
            _searchStyle: function() {
                var e = {
                    begins: "ibegins",
                    startsWith: "ibegins"
                };
                return e[this.options.liveSearchStyle] || "icontains"
            },
            val: function(e) {
                return "undefined" != typeof e ? (this.$element.val(e), this.render(), this.$element) : this.$element.val()
            },
            changeAll: function(t) {
                if (this.multiple) {
                    "undefined" == typeof t && (t = !0), this.findLis();
                    var i = this.$element.find("option"),
                        n = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
                        s = n.length,
                        o = [];
                    if (t) {
                        if (n.filter(".selected").length === n.length) return
                    } else if (0 === n.filter(".selected").length) return;
                    n.toggleClass("selected", t);
                    for (var a = 0; s > a; a++) {
                        var l = n[a].getAttribute("data-original-index");
                        o[o.length] = i.eq(l)[0]
                    }
                    e(o).prop("selected", t), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change")
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) {
                e = e || window.event, e && e.stopPropagation(), this.$button.trigger("click")
            },
            keydown: function(t) {
                var i, n, s, o, a = e(this),
                    l = a.is("input") ? a.parent().parent() : a.parent(),
                    r = l.data("this"),
                    d = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                    h = {
                        32: " ",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        59: ";",
                        65: "a",
                        66: "b",
                        67: "c",
                        68: "d",
                        69: "e",
                        70: "f",
                        71: "g",
                        72: "h",
                        73: "i",
                        74: "j",
                        75: "k",
                        76: "l",
                        77: "m",
                        78: "n",
                        79: "o",
                        80: "p",
                        81: "q",
                        82: "r",
                        83: "s",
                        84: "t",
                        85: "u",
                        86: "v",
                        87: "w",
                        88: "x",
                        89: "y",
                        90: "z",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9"
                    };
                if (o = r.$newElement.hasClass("open"), !o && (t.keyCode >= 48 && t.keyCode <= 57 || t.keyCode >= 96 && t.keyCode <= 105 || t.keyCode >= 65 && t.keyCode <= 90)) return r.options.container ? r.$button.trigger("click") : (r.setSize(), r.$menu.parent().addClass("open"), o = !0), void r.$searchbox.focus();
                if (r.options.liveSearch && /(^9$|27)/.test(t.keyCode.toString(10)) && o && (t.preventDefault(), t.stopPropagation(), r.$menuInner.click(), r.$button.focus()), /(38|40)/.test(t.keyCode.toString(10))) {
                    if (i = r.$lis.filter(d), !i.length) return;
                    n = r.options.liveSearch ? i.index(i.filter(".active")) : i.index(i.find("span.dropdown-item-inner").filter(":focus").parent()), s = r.$menuInner.data("prevIndex"), 38 == t.keyCode ? (!r.options.liveSearch && n != s || -1 == n || n--, 0 > n && (n += i.length)) : 40 == t.keyCode && ((r.options.liveSearch || n == s) && n++, n %= i.length), r.$menuInner.data("prevIndex", n), r.options.liveSearch ? (t.preventDefault(), a.hasClass("dropdown-toggle") || (i.removeClass("active").eq(n).addClass("active").children("span.dropdown-item-inner").focus(), a.focus())) : i.eq(n).children("span.dropdown-item-inner").focus()
                } else if (!a.is("input")) {
                    var c, p, u = [];
                    i = r.$lis.filter(d), i.each(function(i) {
                        e.trim(e(this).children("span.dropdown-item-inner").text().toLowerCase()).substring(0, 1) == h[t.keyCode] && u.push(i)
                    }), c = e(document).data("keycount"), c++, e(document).data("keycount", c), p = e.trim(e(":focus").text().toLowerCase()).substring(0, 1), p != h[t.keyCode] ? (c = 1, e(document).data("keycount", c)) : c >= u.length && (e(document).data("keycount", 0), c > u.length && (c = 1)), i.eq(u[c - 1]).children("span.dropdown-item-inner").focus()
                }
                if ((/(13|32)/.test(t.keyCode.toString(10)) || /(^9$)/.test(t.keyCode.toString(10)) && r.options.selectOnTab) && o) {
                    if (/(32)/.test(t.keyCode.toString(10)) || t.preventDefault(), r.options.liveSearch) /(32)/.test(t.keyCode.toString(10)) || (r.$menuInner.find(".active a").click(), a.focus());
                    else {
                        var f = e(":focus");
                        f.click(), f.focus(), t.preventDefault(), e(document).data("spaceSelect", !0)
                    }
                    e(document).data("keycount", 0)
                }(/(^9$|27)/.test(t.keyCode.toString(10)) && o && (r.multiple || r.options.liveSearch) || /(27)/.test(t.keyCode.toString(10)) && !o) && (r.$menu.parent().removeClass("open"), r.options.container && r.$newElement.removeClass("open"), r.$button.focus())
            },
            mobile: function() {
                this.$element.addClass("mobile-device")
            },
            refresh: function() {
                this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(), this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var c = e.fn.selectpicker;
        e.fn.selectpicker = i, e.fn.selectpicker.Constructor = h, e.fn.selectpicker.noConflict = function() {
            return e.fn.selectpicker = c, this
        }, e(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', h.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function(e) {
            e.stopPropagation()
        }), e(window).on("load.bs.select.data-api", function() {
            e(".selectpicker").each(function() {
                var t = e(this);
                i.call(t, t.data())
            })
        })
    }(e)
});
