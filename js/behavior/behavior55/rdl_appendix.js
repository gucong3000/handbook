var sProductName = 'Rainer\'s Handbook';
var sTrademark = 'Rainer\'s Handbook';
var sHomeURL = 'mailto:dhtmlet@hotmail.com?subject=Hello , Rainer ...';
var sCopyrightCh = '苏昱作品·版权所有';
var sCopyrightEn = '&copy;2002 Rainer Su . All rights reserved .';
var sStyleURL = 'rdl_indexlist.css';
var sParentURL = 'rdl_index.html';
var sParentNote = '返回首页';

var collFriendLists;



function rdlMakeOption(sOption, sPrefix, oSelect) {

    var oOption = document.createElement('option');
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


function rdlMakeOptions(collFriends, sPrefix, oSelect) {

    if (collFriends == null || collFriends.length == 0) return;
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

    rdlMakeOptions(collFriendLists, 'rdl_', oFriendSelect);

    var oOption = document.createElement('option');
    oFriendSelect.options.add(oOption, 0);
    with(oOption) {
        innerHTML = 'See Also...';
        value = '0';
        selected = true;
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


window.onload = rdlWindowLoad;


/* Part of RDL(TM) - Written by Rain1977 */
/* HomeSite: http://www.dhtmlet.com  E-Mail: dhtmlet@hotmail.com */