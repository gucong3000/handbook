var sProductName = 'Rainer\'s Handbook';
var sTrademark = 'Rainer\'s Handbook';
var sHomeURL = 'mailto:dhtmlet@hotmail.com?subject=Hello , Rainer ...';
var sCopyrightCh = '苏昱作品·版权所有';
var sCopyrightEn = '&copy;2002 Rainer Su . All rights reserved .';
var sStyleURL = 'rdl_property_selector.css';
var sParentURL = '../rdl_properties.html';
var sParentNote = '属性(特性)清单';

var sMethodName = '';

var collFriends = new Array(
    'Filters', 'Attributes', 'Properties', 'Methods', 'Events', 'Collections'
);


var oListTable;

function rdlMakeList() {

    if (collListElements == undefined || oListTable == undefined || collListElements.length == 0) return;

    var oListHead = oListTable.createTHead();
    var oListTR = oListHead.insertRow();
    var oListTD = oListTR.insertCell();
    with(oListTD) {
        innerHTML = '属性名称 (Attribute)';
        className = 'cssListHead';
    }
    var oListTD = oListTR.insertCell();
    with(oListTD) {
        innerHTML = '特性名称 (Property)';
        className = 'cssListHead';
    }
    var oListTD = oListTR.insertCell();
    with(oListTD) {
        oListTD.innerHTML = '应用于 (Applies To)';
        className = 'cssListHead';
    }

    for (dLoop = 0; dLoop < collListElements.length; dLoop++) {
        var oListTR = oListTable.insertRow();

        var oListTD = oListTR.insertCell();
        if (collListElements[dLoop][0] != '') {
            var oListA = document.createElement("a");
            oListTD.appendChild(oListA);
            with(oListA) {
                href = '' + collListElements[dLoop][0].replace(/\W/g, '') + '_' + dLoop.toString() + '.html';
                innerHTML = collListElements[dLoop][0];
            }
        }

        if (collListElements[dLoop][1] != '') {
            var oListTD = oListTR.insertCell();
            var oListA = document.createElement("a");
            oListTD.appendChild(oListA);
            with(oListA) {
                href = '' + collListElements[dLoop][1].replace(/\W/g, '') + '_' + dLoop.toString() + '.html';
                innerHTML = collListElements[dLoop][1];
            }
        }

        var oListTD = oListTR.insertCell();
        for (bLoop = 0; bLoop < collListElements[dLoop][2].length; bLoop++) {
            var oListA = document.createElement("a");
            oListTD.appendChild(oListA);
            with(oListA) {
                innerHTML = collListElements[dLoop][2][bLoop];
                href = '../filters/' + (collListElements[dLoop][2][bLoop].toLowerCase()).replace(/\W/g, '') + '.html';
                className = 'cssListA';
            }

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

    if (collFriends == undefined || collFriends.length == 0) return;
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

    var sHeadnote = '<b>提示: <\/b> 您试图访问的<b> ' + sMethodName + ' <\/b>属性(特性)存在<b> ' + (collListElements.length).toString() + ' <\/b>个同名属性(特性)。请您从下方的列表中自主选择。';

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
    rdlMakeOptions(collFriends, '../rdl_', 'Lists', oFriendSelect);

    var oOption = document.createElement("option");
    oFriendSelect.options.add(oOption, 0);
    with(oOption) {
        innerHTML = 'See Also...';
        value = '0';
        selected = true;
    }

    var oContent = document.createElement("div");
    oContent.id = "idContent";
    document.body.appendChild(oContent);

    var oHeadnote = document.createElement("div");
    oHeadnote.id = "idHeadnote";
    oContent.appendChild(oHeadnote);
    oHeadnote.innerHTML = sHeadnote;

    oListTable = document.createElement("table");
    oListTable.id = "idListTable";
    oContent.appendChild(oListTable);
    with(oListTable) cellPadding = cellSpacing = 1;
    rdlMakeList();

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