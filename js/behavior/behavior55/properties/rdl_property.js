var sProductName = 'Rainer\'s Handbook';
var sTrademark = 'Rainer\'s Handbook';
var sHomeURL = 'mailto:dhtmlet@hotmail.com?subject=Hello , Rainer ...';
var sCopyrightCh = '苏昱作品·版权所有';
var sCopyrightEn = '&copy;2002 Rainer Su . All rights reserved .';
var sStyleURL = 'rdl_property.css';
var sParentURL = '../rdl_properties.html';
var sParentNote = '属性(特性)清单';

var collFriendBehaviors;
var collFriendProperties;
var collFriendMethods;
var collFriendEvents;
var collFriendCollections;

var collIE40, collIE50, collIE55, collIE60;

var oElementTable;
var sCode = sStyle = sScript = sPlusCode = '';
var oShowCode, oExecCode, oCodeArea;
var bRunCode = true;
var bElements = true;
var bW3C = false;

var iWinWidth = 380;
var iWinHeight = 220;

function rdlMakeElements(collElements, sIEVersion) {

    if (collElements == null || oElementTable == null || collElements.length == 0) return;
    var oIETR = oElementTable.insertRow();

    var oIETD = oIETR.insertCell();
    with(oIETD) {
        innerHTML = 'IE' + sIEVersion + '+';
        className = 'cssIETD';
    }

    var oIETD = oIETR.insertCell();
    for (bLoop = 0; bLoop < collElements.length; bLoop++) {
        var oIEA = document.createElement("a");
        oIETD.appendChild(oIEA);
        with(oIEA) {
            innerHTML = collElements[bLoop];
            href = '../behaviors/' + (collElements[bLoop].replace(/\W/g, '')).toLowerCase() + '.html';
            className = 'cssIEA';
        }
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
    var oContent = document.all('idContent');

    var oHeadTable = document.createElement("table");
    oHeadTable.id = "idHeadTable";
    document.body.insertBefore(oHeadTable, oContent);
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

    rdlMakeOptions(collFriendCollections, '../behaviors/', 'Collections', oFriendSelect);
    rdlMakeOptions(collFriendBehaviors, '../behaviors/', 'behaviors', oFriendSelect);
    rdlMakeOptions(collFriendProperties, '../properties/', 'Properties', oFriendSelect);
    rdlMakeOptions(collFriendEvents, '../events/', 'Events', oFriendSelect);
    rdlMakeOptions(collFriendMethods, '../methods/', 'Methods', oFriendSelect);

    var oOption = document.createElement("option");
    oFriendSelect.options.add(oOption, 0);
    with(oOption) {
        innerHTML = 'See Also...';
        value = '0';
        selected = true;
    }

    if (bElements) {
        var oElementDIV = document.createElement("div");
        oContent.appendChild(oElementDIV);
        with(oElementDIV) {
            className = 'cssColumnTitle';
            innerHTML = '应用于：';
        }

        oElementTable = document.createElement("table");
        oElementTable.id = "idElementTable";
        oContent.appendChild(oElementTable);
        with(oElementTable) {
            cellPadding = cellSpacing = 1;
            className = 'cssCommonTable';
        }

        rdlMakeElements(collIE40, '4.0');
        rdlMakeElements(collIE50, '5.0');
        rdlMakeElements(collIE55, '5.5');
        rdlMakeElements(collIE60, '6.0');
    }

    if (sCode != null && sCode != '') {
        var oCodeDIV = document.createElement("div");
        oCodeDIV.id = "idCodeDIV";
        oContent.appendChild(oCodeDIV);

        oShowCode = document.createElement("input");
        oShowCode.id = "idShowCode";
        oShowCode.type = "button";

        oCodeDIV.appendChild(oShowCode);
        with(oShowCode) {
            value = '察看代码';
            onclick = showCode;
        }

        if (bRunCode) {
            oExecCode = document.createElement("input");
            oExecCode.id = "idExecCode";
            oExecCode.type = "button";

            oCodeDIV.appendChild(oExecCode);
            with(oExecCode) {
                value = '运行示例';
                onclick = execCode;
            }
        }

        oCodeArea = document.createElement("div");
        oCodeArea.id = "idCodeArea";
        oCodeDIV.appendChild(oCodeArea);
        oCodeArea.innerHTML = sScript + '\n\n' + sCode + sPlusCode;
    }

    var oFootnote = document.createElement("div");
    oFootnote.id = "idFootnote";
    oContent.appendChild(oFootnote);
    var oCopyright = document.createElement("div");
    oCopyright.id = "idCopyright";
    oContent.appendChild(oCopyright);
    oCopyright.innerHTML = sCopyrightEn;
    oCopyright.insertAdjacentHTML('beforeBegin', sCopyrightCh);

    oFriendSelect.onchange = doSelect;

    //resizeTo(800,600);
}

function showCode(e) {
    with(oCodeArea.style) {
        if (display != 'block') display = 'block';
        else display = 'none';
    }
    with(oShowCode) {
        if (value != '隐藏代码') value = '隐藏代码';
        else value = '察看代码';
    }
}

function execCode(e) {
    var sHTML =
        '<html xmlns:rdl>\n<head>\n<meta http-equiv="Content-Type" content="text\/html; charset=gb2312">\n<title>' + sProductName +
        '<\/title>\n<style>\n' +
        'body{margin:0px;padding:16px;background:#FFFFFF;overflow:auto;}\n' +
        'body,table,input,select,textarea,a{font-family:verdana,tahoma,arial;font-size:11px;color:#000000;word-break:break-all;}\n' +
        'table,img{border:0px;}\n' +
        'a{text-decoration:none;color:#003399;}\n' +
        'a:hover{color:#000000;text-decoration:underline;}\n' +
        '#id_div3{padding-top:8px;border-top:1px solid #000000;line-height:15px;}\n' +
        '#id_span3{font-size:10px;font-family:tahoma;}\n' + sStyle +
        '\n<\/style>\n' + sScript +
        '\n<\/head>\n<body>\n' + sCode +
        '\n<br>&nbsp;<br>&nbsp;<br>\n<div id=id_div3>' + sCopyrightCh +
        '<br><span id=id_span3>' + sCopyrightEn +
        '<\/span><\/div>\n<\/body>\n<\/html>';
    if (bW3C) {
        sHTML = '<!doctype html public "-\/\/W3C//DTD HTML 4.0 \/\/EN" \n' + '  "http:\/\/www.w3.org\/TR\/REC-html40\/strict.dtd">\n' + sHTML;
    }
    var sWinName = document.all('idTitleName').innerHTML.replace(/\W/g, '');
    var demoWin = window.open('', sWinName, 'resizable=1');
    demoWin.resizeTo(iWinWidth, iWinHeight);
    demoWin.moveTo(Math.ceil((window.screen.availWidth - iWinWidth) / 2), Math.ceil((window.screen.availHeight - iWinHeight) / 2));
    demoWin.document.open('text/html', 'replace');
    //demoWin.document.clear();
    demoWin.document.write(sHTML);
    //demoWin.document.createStyleSheet('rdl_method.css');
    //demoWin.document.close();
    demoWin.location.reload();
    demoWin.focus();
}

window.onload = rdlWindowLoad;


/* Part of RDL(TM) - Written by Rain1977 */
/* HomeSite: http://www.dhtmlet.com  E-Mail: dhtmlet@hotmail.com */
