!
function() {
    function a() {
        var a = e.getByClass("sc-name"),
        b = e.getByClass("sc-avatar-img");
        a.textContent = h,
        b.src = i
    }
    function b(a, b, c) {
        var d = document.createElement("link");
        d.rel = a,
        c && c.length && (d.sizes = c),
        d.href = b,
        "shortcut icon" === a && (d.type = "image/x-icon"),
        document.getElementsByTagName("head").item(0).appendChild(d)
    }
    function c() {
        var a = e.os,
        b = e.getByClass("sc-instruction-wrapper"),
        c = e.getByClass("sc-arrow"),
        d = "";
        a.ios ? (d = '<div class="sc-ios-title">用 Safari 打开<br />添加「礼记」卡片到主屏幕</div><div class="sc-ios-click-first">点击<span class="sc-ios-desk"></span></div><div class="sc-ios-click-second">然后选择“添加到主屏幕”</div>', c.classList.remove("sc-hide")) : a.android && (d = '<div class="sc-android-title">添加「礼记」卡片到主屏幕</div><ol class="sc-android-list"><li>把本页面加入书签（或桌面常用）</li><li>在书签列表（或桌面常用）中，长按本页书签或图标，选择“添加快捷方式到主屏幕”</li></ol><div class="sc-android-note">附：部分手机添加方式有差异，建议在网上查询对应方式</div>'),
        b.innerHTML = d
    }
    function d(a) {
        var b = "";
        return a && 0 != a.length ? (b = a.replace(/</g, "&lt;"), b = b.replace(/>/g, "&gt;"), b = b.replace(/\'/g, "&#39;"), b = b.replace(/\"/g, "&quot;")) : ""
    }
    var e = function() {
        function a(a) {
            var b = ("" + (new RegExp(a + "(\\d+((\\.|_)\\d+)*)").exec(k) || [, 0])[1]).replace(/_/g, ".");
            return parseFloat(b) || void 0
        }
        function b(a, b) {
            var c = a.charCodeAt(b);
            if (c > 255) throw "INVALID_CHARACTER_ERR: DOM Exception 5";
            return c
        }
        function c(a) {
            if (1 !== arguments.length) throw "SyntaxError: exactly one argument required";
            a = String(a);
            var c, d, e = [],
            f = a.length - a.length % 3;
            if (0 === a.length) return a;
            for (c = 0; f > c; c += 3) d = b(a, c) << 16 | b(a, c + 1) << 8 | b(a, c + 2),
            e.push(j.charAt(d >> 18)),
            e.push(j.charAt(d >> 12 & 63)),
            e.push(j.charAt(d >> 6 & 63)),
            e.push(j.charAt(63 & d));
            switch (a.length - f) {
            case 1:
                d = b(a, c) << 16,
                e.push(j.charAt(d >> 18) + j.charAt(d >> 12 & 63) + i + i);
                break;
            case 2:
                d = b(a, c) << 16 | b(a, c + 1) << 8,
                e.push(j.charAt(d >> 18) + j.charAt(d >> 12 & 63) + j.charAt(d >> 6 & 63) + i)
            }
            return e.join("")
        }
        function d(a) {
            var b = window.location.search.match(new RegExp("(?:\\?|&)" + a + "=([^&]*)(&|$)"));
            return b ? decodeURIComponent(b[1]) : ""
        }
        function f(a) {
            var b = window.location.hash.match(new RegExp("(?:#|&)" + a + "=([^&]*)(&|$)"));
            return b ? decodeURIComponent(b[1]) : ""
        }
        function g(a) {
            return document.getElementsByClassName(a).item(0)
        }
        function h(a) {
            e.os.ios && (setTimeout(function() {
                window.location.href = a
            },
            500))
        }
        var i = "=",
        j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        k = navigator.userAgent.toLowerCase(),
        l = {
            ios: a("os "),
            android: a("android[/ ]"),
            pc: !a("os ") && !a("android[/ ]")
        };
        return {
            os: l,
            queryString: d,
            getHash: f,
            getByClass: g,
            invokeQQWebview: h
        }
    } (),
    f = function() {
        function a(a, b) {
            n += 1,
            a += "&t=" + n;
            var c = m + n;
            k[c] = new Image,
            b && (k[c].onload = k[c].onerror = function() {
                b();
                try {
                    delete k[c]
                } catch(a) {
                    k[c] = null
                }
            }),
            k[c].src = a
        }
        function b(a) {
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(encodeURIComponent(String(c)) + "=" + encodeURIComponent(String(a[c])));
            return b.join("&")
        }
        function c(a) {
            var b = {
                opername: "Grp_tribe",
                module: "tribe_destop",
                action: a,
                ver1: e.queryString("bid") || e.getHash("bid"),
                ver2: "",
                ver3: e.os.ios ? "ios": e.os.android ? "android": ""
            };
            p(b, !0)
        }
        var d = "about:blank?",
        f = Object.prototype.toString,
        g = {},
        h = [],
        i = [],
        k = window,
        l = "",
        m = "__tc_global_image_",
        n = +new Date,
        o = function(c, e, f, g, h) {
            if (c && e && f) {
                var i = {
                    table: c,
                    fields: JSON.stringify(e),
                    datas: JSON.stringify(f),
                    pr_ip: g || "obj3",
                    pr_t: h || "ts",
                    t: +new Date
                };
                a(d + b(i))
            }
        },
        p = function(a, b, c) {
            if (!a) throw "params can not be null";
            a.uin = j,
            a.ver2 = e.queryString("activity_from") || e.queryString("from") || e.getHash("from") || "other";
            var d = "";
            d = e.os.ios ? "ios": e.os.android ? "android": "other",
            d && (a.obj2 = d),
            l = c || l || "dc00141";
            var k;
            switch (f.call(a)) {
            case "[object Array]":
                k = a;
                break;
            case "[object Object]":
                if (b) {
                    var m = [],
                    n = [];
                    for (var p in a)"obj3" !== p && "ts" !== p && (m.push(p), n.push(a[p]));
                    return o(l, m, [n], a.obj3, a.ts)
                }
                k = [a]
            }
            for (var p = 0,
            r = k.length; r > p; p++) {
                var s = k[p],
                t = [];
                i.push(t);
                for (var u in s) {
                    var v;
                    u in g ? (v = g[u], h[v] = u) : (h.push(u), g[u] = v = h.length - 1),
                    t[v] = s[u] || ""
                }
            }
            b && q()
        },
        q = function() {
            var a = i.length;
            if (a > 1) for (var b = 0; a > b; b++) for (var c = 0,
            d = h.length; d > c; c++) i[b][c] || 0 === i[b][c] || (i[b][c] = "");
            o(l, h, i),
            h.length = i.length = 0,
            g = {},
            l = ""
        };
        return {
            tdw: c
        }
    } (),
    g = (e.queryString("bid"), decodeURIComponent(e.queryString("url"))),
    h = decodeURIComponent(e.queryString("name")),
    i = d(decodeURIComponent(e.queryString("img"))),
    j = e.queryString("uin"),
    k = e.getHash("shortcut"); !
    function() { ! ~h.indexOf("") && (h += ""),
        document.title = h,
        c(),
        a(),
        f.tdw("exp"),
        b("apple-touch-icon", i),
        b("apple-touch-icon", i, ["76x76"]),
        b("apple-touch-icon", i, ["120x120"]),
        b("apple-touch-icon", i, ["152x152"]),
        "mqq" === k ? window.location.hash = "": (f.tdw("call_tribe"), g += "", e.invokeQQWebview(g))
    } ()
} ();