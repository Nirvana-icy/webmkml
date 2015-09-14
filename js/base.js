var M = {
	version : 1,
	toJSON: function(a) {
        return JSON.stringify(a)
    },
	json: function(a) {
        return JSON.parse(a)
    },
	urlQuery : function(name){
        var href = location.search;
        href = href.replace(/#[^&]*$/,'');
        var _index = href.indexOf(name+"=");
        if(_index != -1){
            var a = href.substr(_index);
            var b = new Array();
            if(a.indexOf("&") == -1){
                b = a.split("=");
            }
            else{
                b = a.substr(0,a.indexOf("&")).split("=");
            }
            return b[1];
        }
        else{
            return "";
        }
	},
	trim :function(str){
		//鍒犻櫎宸﹀彸涓ょ鐨勭┖鏍�
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g,"");
        result = result.replace(/\s/g,"");
        return result;
},

	setCookie : function(name,value,isSession) {
	    var expires = new Date();
        expires.setTime(expires.getTime() + 2592000000);
		var path_domain = "; path=/";
        var cookie_content = escape(name) +"="+ escape(value);
        document.cookie = cookie_content + (isSession ? "" : ("; expires=" + expires.toGMTString())) + path_domain;
		//alert(document.cookie);
	},
	delCookie: function(a) {
        var b = "; path=/" + ( - 1 != document.domain.indexOf("test.com") ? "; domain=test.com": -1 != document.domain.indexOf("sinaapp.com") ? "; domain=sinaapp.com": "");
        document.cookie = escape(a) + "=; expires=" + new Date(0).toUTCString() + b
    },
    clearCookie: function() {
        var a = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (a) for (var b = a.length,
        c = b; c--;) M.delCookie(a[c])
    },
	getCookie : function(a) {
		//alert(document.cookie);
		var b = document.cookie.indexOf(a + "="),
        c = document.cookie.indexOf(";", b);
        return - 1 == b ? "": unescape(document.cookie.substring(b + a.length + 1, c > b ? c: document.cookie.length))
	},
	isLogin : function() {
		return false;
	},
	_alert: function(a, b, c) {
        function d(a) {
            c ? b && b() : setTimeout(function() {
                a.fadeOut(function() {
                    a.parent().fadeOut(function() {
                        $(this).remove()
                    }),
                    b && b()
                })
            },
            1500)
        }
        if ($("#_alert_bg").length) $("#_alert_content").html(a),
        d($("#_alert_content"));
        else {
            var e = window.top.document,
            f = e.createElement("div");
            f.setAttribute("id", "_alert_bg"),
            e.body.appendChild(f);
            var g = e.createElement("div");
            g.setAttribute("id", "_alert_content"),
            f.appendChild(g),
            $(g).html(a).fadeIn(function() {
                d($(this))
            })
        }
    },
	_confirm: function(a, b, c, d, e) {
        $("#_confirm_bg").length && $("#_confirm_bg").remove();
        var f = document,
        g = f.createElement("div");
        g.setAttribute("id", "_confirm_bg"),
        f.body.appendChild(g);
        var h = f.createElement("div");
        h.setAttribute("id", "_confirm_content"),
        g.appendChild(h);
        var i = $("#_confirm_content"),
        j = "";
        j = j + "<div id='_confirm_text'>" + a + "</div>",
        j += "<div id='_confirm_btnW'>",
        c && c[0] ? (j = j + "<div id='_confirm_btnA' class='" + b[1] + "'>" + b[0] + "</div>", j = j + "<div id='_confirm_btnB' class='" + c[1] + "'>" + c[0] + "</div>") : j = j + "<div id='_confirm_btnA' class='" + b[1] + "' style='width:100%;border-right:none'>" + b[0] + "</div>",
        j += "</div>",
        i.html(j).fadeIn(),
        $("#_confirm_btnA").bind("click", function() {
            e && e(),
            i.fadeOut(),
            $("#_confirm_bg").fadeOut(function() {
                $(this).remove()
            })
        }),
        c && c[0] && $("#_confirm_btnB").bind("click", function() {
            d && d(),
            i.fadeOut(),
            $("#_confirm_bg").fadeOut(function() {
                $(this).remove()
            })
        })
    },
};

String.prototype.format=function()
{
  if(arguments.length==0) return this;
  for(var s=this, i=0; i<arguments.length; i++)
    s=s.replace(new RegExp("\\{"+i+"\\}","g"), arguments[i]);
  return s;
};
