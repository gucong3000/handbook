var sProductName = 'Rainer\'s Handbook';
var sTrademark = 'Rainer\'s Handbook';
var sHomeURL = 'mailto:dhtmlet@hotmail.com?subject=Hello , Rainer ...';
var sCopyrightCh = '苏昱作品·版权所有';
var sCopyrightEn = '&copy;2002 Rainer Su . All rights reserved .';
var sStyleURL = 'rdl_indexlist.css';
var sParentURL = 'rdl_index.html';
var sParentNote = '返回首页';

var collFriendLists;
var oContent;

var sW3C = 'W3C- 十六色色盘';
var arrW3C = new Array(
    '#000000', '#FFFFFF', '#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#808080', '#C0C0C0', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080', 'Transparent'
);

var sIE4 = 'IE4+预命名颜色';
var arrIE4 = new Array(
    'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue',
    'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon',
    'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'Fuchsia', 'gainsboro',
    'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue',
    'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen',
    'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise',
    'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
    'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen',
    'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'
);

var sWIN = 'WIN- 用户系统色盘';
var arrWIN = new Array(
    'windowtext', 'windowframe', 'window', 'threedshadow', 'buttonshadow', 'threedlightshadow', 'threedhighlight', 'threedface', 'threeddarkshadow', 'scrollbar', 'menutext', 'menu',
    'infotext', 'infobackground', 'inactivecaptiontext', 'inactivecaption', 'inactiveborder', 'highlighttext', 'highlight', 'graytext', 'captiontext', 'buttontext', 'buttonhighlight',
    'buttonface', 'background', 'appworkspace', 'activecaption', 'activeborder'
);

function rdlMakeArray(q) {
    for (i = 1; i <= q; i++) {
        this[i] = 0;
    }
}

arrTemoColors = new rdlMakeArray(7);
arrTemoColors[1] = "00";
arrTemoColors[2] = "33";
arrTemoColors[3] = "66";
arrTemoColors[4] = "99";
arrTemoColors[5] = "CC";
arrTemoColors[6] = "FF";

var sSafe = '216 安全色色盘';
var arrSafe = new Array(216);
var iNowSafe = 0;

for (i = 1; i <= 6; i++) {
    for (j = 1; j <= 6; j++) {
        for (k = 1; k <= 6; k++) {
            arrSafe[iNowSafe] = '#' + arrTemoColors[i] + arrTemoColors[j] + arrTemoColors[k];
            iNowSafe++;
        }
    }
}

function rdlMakeSwatchs(sSwatchTtile, arrSwatch) {
    var oTempDIV = document.createElement("div");
    oContent.appendChild(oTempDIV);
    with(oTempDIV) {
        style.padding = style.margin = '16px 0px 8px 0px';
        style.borderBottom = '1px solid #000000';
        style.fontSize = '14px';
        innerHTML = sSwatchTtile;
    }

    for (wLoop = 0; wLoop < arrSwatch.length; wLoop++) {
        var oTempSpan = document.createElement("span");
        var oTempSpanView = document.createElement("span");
        var oTempSpanName = document.createElement("span");
        if (!("XMLHttpRequest" in window)) {
            oTempSpan.onmouseenter = function() {
                this.style.borderColor = "#0B2565";
                this.style.backgroundColor = "#B7BED3";
            };
            oTempSpan.onmouseleave = function() {
                this.style.borderColor = this.style.backgroundColor = "";
            };
        }
        oContent.appendChild(oTempSpan);
        with(oTempSpan) {
            className = 'cssSwatchSpan';
            title = arrSwatch[wLoop];
            //onmouseover=new Function('this.style.border="1px solid #DFDFDF";');
            //onmouseout=new Function('this.style.border="1px solid #FFFFFF";');
            onclick = function() {
                var oTextRange = document.body.createTextRange();
                with(oTextRange) {
                    moveToElementText(this.children[1]);
                    execCommand("Copy");
                }
            };
            appendChild(oTempSpanView);
            appendChild(oTempSpanName);
        }
        with(oTempSpanView) {
            className = 'cssSwatchView';
            style.backgroundColor = arrSwatch[wLoop];
        }
        with(oTempSpanName) {
            className = 'cssSwatchName';
            innerHTML = arrSwatch[wLoop];
        }
    }

}


function turnViewMode() {
    var idContent = document.getElementById("idContent");
    if (/\bhidename\b/.test(idContent.className)) {
        idContent.className = idContent.className.replace(/\s*\bhidename\b/, "");
    } else {
        idContent.className += "hidename";
    }
}

function rdlMakeOption(sOption, sPrefix, oSelect) {

    var oOption = document.createElement("option");
    oSelect.options.add(oOption, 0);

    if (sOption == '0') {
        oOption.innerHTML = '------------------------------------------';
        oOption.style.color = '#99AACC';
        oOption.value = '0';
    } else {
        oOption.innerHTML = '      ' + sOption;
        oOption.value = sPrefix + (sOption.replace(/\W/g, '')).toLowerCase() + '.html';
    }

}


function rdlMakeOptions(collFriends, sPrefix, sFriendTitle, oSelect) {

    if (collFriends == null || collFriends.length == 0) return;
    //rdlMakeOption('No '+sFriendTitle+' or Init false...','',oSelect);else
    for (mLoop = 0; mLoop < collFriends.length; mLoop++) rdlMakeOption(collFriends[mLoop], sPrefix, oSelect);
    rdlMakeOption('0', '', oSelect);

}


function doSelect(e) {
    with(document.all('idSelect')) {
        var sValue = options[selectedIndex].value;
        options[0].selected = true;
    }
    if (sValue != '0') window.location = sValue;
}


function rdlWindowLoad(e) {

    document.title = sProductName;
    var oHeadTable = document.createElement("table");
    oHeadTable.id = "idHeadTable";
    document.body.appendChild(oHeadTable);
    oHeadTable.cellPadding = oHeadTable.cellSpacing = 0;
    var oHeadTR = oHeadTable.insertRow();
    var oTrademarkTD = document.createElement("td");
    oTrademarkTD.id = "idTrademarkTD";
    oHeadTR.appendChild(oTrademarkTD);
    var oTrademarkA = document.createElement("a");
    oTrademarkTD.appendChild(oTrademarkA);
    with(oTrademarkA) {
        innerHTML = sTrademark;
        href = sHomeURL;
        target = '_blank';
    }
    var oSelectTD = document.createElement("td");
    oSelectTD.id = "idSelectTD";
    oHeadTR.appendChild(oSelectTD);
    var oParentA = document.createElement("a");
    oSelectTD.appendChild(oParentA);
    with(oParentA) {
        innerHTML = sParentNote;
        href = sParentURL;
        insertAdjacentHTML('afterEnd', ' | 相关内容: ');
    }
    var oFriendSelect = document.createElement("select");
    oFriendSelect.id = "idSelect";
    oSelectTD.appendChild(oFriendSelect);

    rdlMakeOptions(collFriendLists, 'rdl_', 'Lists', oFriendSelect);

    var oOption = document.createElement("option");
    oFriendSelect.options.add(oOption, 0);
    with(oOption) {
        innerHTML = 'See Also...';
        value = '0';
        selected = true;
    }

    oContent = document.createElement("div");
    oContent.id = "idContent";
    document.body.appendChild(oContent);

    oContent.style.lineHeight = '14px';

    var sHeadNote = '<br><b>提示: <\/b> 可以点击下方的颜色示例复制颜色名称到剪贴板 | ';
    var oTempDiv = document.createElement("span");
    oContent.appendChild(oTempDiv);
    oTempDiv.innerHTML = sHeadNote;
    var oListModeA = document.createElement("a");
    oContent.appendChild(oListModeA);
    with(oListModeA) {
        className = 'cssListModeA';
        href = '#';
        innerHTML = '点击此处切换显示模式';
        onclick = turnViewMode;
    }


    rdlMakeSwatchs(sW3C, arrW3C);
    rdlMakeSwatchs(sIE4, arrIE4);
    rdlMakeSwatchs(sWIN, arrWIN);
    rdlMakeSwatchs(sSafe, arrSafe);

    var oFootnote = document.createElement("div");
    oFootnote.id = "idFootnote";
    oContent.appendChild(oFootnote);
    var oCopyright = document.createElement("div");
    oCopyright.id = "idCopyright";
    oContent.appendChild(oCopyright);
    oCopyright.innerHTML = sCopyrightEn;
    oCopyright.insertAdjacentHTML('beforeBegin', sCopyrightCh);

    oFriendSelect.onchange = doSelect;

}


window.onload = rdlWindowLoad;


/* Part of RDL(TM) - Written by Rain1977 */
/* HomeSite: http://www.dhtmlet.com  E-Mail: dhtmlet@hotmail.com */