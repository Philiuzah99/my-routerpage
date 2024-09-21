<html>
<head>
      <title></title>
      <link rel="stylesheet" href="stylemain.css" type="text/css">
         <link rel="stylesheet" href="colors.css" type="text/css">
            <meta http-equiv="Pragma" content="no-cache">
            <base target="_self">
            <script language="javascript" src="util.js"></script>
            <script type="text/javascript" src="lang/b28n.js"></script>
<script language="javascript">
<!-- hide
var selLangVal = '0'; 
setLanguage(selLangVal); 
Butterlate.setTextDomain("status");

function langSelect()
{
	var loc = '';
	with ( document.forms[0] ) 
	{
       var langsel = getSelect(selectLang);

	    loc += 'logo.cgi?';
	    switch( langsel )
	    {
	    	case 'English':
			if( selLangVal == 0 )
				return;
			loc += 'webUILanguage=0';
			break;
		case 'Simplified Chinese':
			if( selLangVal == 1 )
				return;
			loc += 'webUILanguage=1';
			break;
		case 'Traditional Chinese':
			if( selLangVal == 2 )
				return;
			loc += 'webUILanguage=2';
			break;
		case 'Korean':
			if( selLangVal == 3 )
				return;
			loc += 'webUILanguage=3';				
			break;            
		default:
			return;
	    }
	}
	loc += '&sessionKey=432778986';
	var code = 'location="' + loc + '"';
    eval(code);
}

function frmLoad()
{
    var obj = document.getElementById("langSelectTitle");
    if(isObjExist(obj) == false) {
	return;
    }

    with ( document.forms[0] )
    {
    	switch( selLangVal )
    	{
	case '0':
		setSelect(selectLang, 'English');
		break;
	case '1':
		setSelect(selectLang, 'Simplified Chinese');
		break;
	case '2':
		setSelect(selectLang, 'Traditional Chinese');
		break;
	case '3':
		setSelect(selectLang, 'Korean');
		break;
	default:
		setSelect(selectLang, 'English');
		break;
    	}

	var i = 0;
	var e;
	e = document.getElementById("langSelectTitle");
	e.innerHTML = _("langSelectTitle");
	
	for(i=0; i<selectLang.options.length; i++) {
		selectLang.options[i].text = _(selectLang.options[i].value);
	}
    }
}

// done hiding -->
</script>
   </head>
   <body onload="frmLoad()" class="logoBody" topmargin="0" leftmargin="0">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
          <td width="330" height="89"><img src="logo_corp.jpg" width="330" height="89"></td>
          <td width="100%" height="89" background="logobkg.jpg">
		<div align="right">
			<form><select name="selectLang" style="visibility:hidden"></select>
&nbsp;&nbsp;&nbsp;&nbsp; 
			</form><br>
		</div>
          </td>
        </tr>
      </tbody></table>
   
</body>
</html>