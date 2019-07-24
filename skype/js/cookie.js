function setCookie(e, o, t) {
	if(t) {
		var i = new Date;
		i.setDate(i.getDate() + t), document.cookie = e + "=" + o + "; expires=" + i
	} else document.cookie = e + "=" + o
}

function getCookie(e) {
	for(var o = document.cookie.split("; "), t = 0, i = o.length; t < i; t++) {
		var n = o[t].split("=");
		if(n[0] == e) return n[1]
	}
	return ""
}

function removeCookie(e) {
	setCookie(e, "123", -1)
}