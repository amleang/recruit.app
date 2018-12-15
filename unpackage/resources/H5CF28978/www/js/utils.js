/**
 * 全局url地址
 */
// var allUrl = "http://localhost:7001";
var allUrl = "http://www.szdejurenhe.com";
/**
 * 校验微信缓存信息是否存在
 */
var checkLogin = function() {
	let wxuser = localStorage.getItem("hjct_user");
	if (wxuser != null)
		return true;
	else
		return false;
}
/**
 * 跳转登录页
 */
var gotoLogin = function(url) {
	localStorage.setItem("hjct_url", url);
	location.href = url;
	return;
}
/**
 * 获取微信缓存信息
 */
var getWxItem = function() {
	var wxuser = localStorage.getItem("hjct_user");
	if (wxuser) {
		return JSON.parse(wxuser);
	} else
		return wxuser;
}
/**
 * 设置微信缓存信息
 */
var setWxItem = function(wxUser) {
	var wxuserStr = JSON.stringify(wxUser);
	localStorage.setItem("hjct_user", wxuserStr);
}
/**
 * 日期格式化
 */
var formatDate = function(time, fmt) {
	if (time) {
		if (!fmt)
			fmt = "yyyy-MM-dd";
		let date = new Date(time);
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		let o = {
			'M+': date.getMonth() + 1,
			'd+': date.getDate(),
			'h+': date.getHours(),
			'm+': date.getMinutes(),
			's+': date.getSeconds()
		};
		for (let k in o) {
			if (new RegExp(`(${k})`).test(fmt)) {
				let str = o[k] + '';
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
			}
		}
		return fmt;
	} else
		return "";
}

function padLeftZero(str) {
	return ('00' + str).substr(str.length);
}
/**
 * 获取参数
 */
var getQueryString = function(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}
