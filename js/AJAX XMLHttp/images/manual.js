
function btn_handle(strEventName)
{
    var objImgBtn = document.getElementById("btn");
    var objDivIndex = document.getElementById("index");

    var state = objImgBtn.src.match(/open|closed/);
    
    switch (strEventName)
    {
        case 'onmouseover' :
            objImgBtn.src = objImgBtn.src.replace(state, state + '_over');
            break;
        case 'onmouseout' :
            objImgBtn.src = objImgBtn.src.replace('_over', '');
            break;
        case 'onclick' :
            if (state == 'open')
            {
                objImgBtn.src = objImgBtn.src.replace('open', 'closed');
                objDivIndex.style.display = 'none';
                SetCookie('manual_index', 'closed')
            }
            else
            {
                objImgBtn.src = objImgBtn.src.replace('closed', 'open');
                objDivIndex.style.display = 'block';
                SetCookie('manual_index', 'open')
            }
    
    }
}

function setManualIndexState ()
{
    var objImgBtn = document.getElementById("btn");
    var objDivIndex = document.getElementById("index");

    if (GetCookie('manual_index') == 'closed')
    {
        objImgBtn.src = objImgBtn.src.replace('open', 'closed');
        objDivIndex.style.display = 'none';
        SetCookie('manual_index', 'closed')
    }
}

function SetCookie(sName, sValue)
{
    document.cookie = sName + "=" + escape(sValue) + "; expires=Mon, 31 Dec 2999 23:59:59 UTC;";
}

function GetCookie(sName)
{
    var aCookie = document.cookie.split("; ");

    for (var i=0; i < aCookie.length; i++)
    {
        var aCrumb = aCookie[i].split("=");

        if (sName == aCrumb[0])
        {
            return unescape(aCrumb[1]);
        }
    }

    return null;
}