var oDate = new Date();
var sDate = document.lastModified;
var sHtml = "<DIV id=\"signture\">ER!W</DIV>"
	+ "<DIV id=\"address\">"
	+ "<ADDRESS>Powered by "
	+ "<A href=\"mailto:snakevil@qq.com\">Snakevil</A>. "
	+ "Revision: " + sDate.substr(8, 2) + "." + sDate.substr(0, 2) + "."
	+ sDate.substr(3, 2) + "-" + sDate.substr(11, 5) + ".</ADDRESS>"
	+ "<ADDRESS>&#169; 2001-" + oDate.getYear() + " ERiW."
	+ " All rights reserved.</ADDRESS>"
	+ "</DIV>";
document.write(sHtml);
sHtml = oDate = sDate = null;

with (document) {
	createStyleSheet("../_shared/basic.css");
	defaultCharset = "GB2312";
}
