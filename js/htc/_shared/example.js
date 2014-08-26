function toggleExample(sID) {
	var oNode = document.getElementById(sID);
	if (!oNode) {
		return;
	}
	var oSrc = event.srcElement;
	if (oNode._disp) {
		oNode._disp = false;
		oSrc.innerText = "ÏÔÊ¾·¶Àý";
		oNode.style.display = "none";
	}
	else {
		oNode._disp = true;
		oSrc.innerText = "Òþ²Ø·¶Àý";
		oNode.style.display = "block";
	}
} // end function toggleExample().

function showExample() {
	if (1 > arguments.length) {
		return;
	}
	return window.alert("Coming soon ;-P");
	var sUrl = arguments[0];
	var sWin = null;
	if (1 < arguments.length) {
		sWin = arguments[1];
	}
	var sParams = "directories=0,"
		+ "location=0,"
		+ "menubar=0,"
		+ "scrollbars=1,"
		+ "status=0,"
		+ "toolbar=0";
	window.open(sUrl, sWin, sParams);
} // end function showExample().
