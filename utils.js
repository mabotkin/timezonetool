// flag schema: {{tzt:UNIXTIME-options}}

function replaceFlagsWithTime() {
	var nodes = document.querySelectorAll("h1, h2, h3, h4, h5, p, li, td, caption, div, span, a");
	for ( var i = 0 ; i < nodes.length ; i++ ) {
		if ( nodes[i].innerHTML.match( /{{tzt:(\d)+(-([A-Z]+))?}}/g ) != null )
		{
			nodes[i].innerHTML = nodes[i].innerHTML.replace( /{{tzt:(\d)+(-([A-Z]+))?}}/g , function( match ) {
				var result = parseFlag( match );
				return displayDate( result.date , result.options );
			});
		}
	}
	/*
	var body = document.body.innerHTML;
	var processed = body.replace( /{{tzt:(\d)+(-([A-Z]+))?}}/g , function( match ) {
		var result = parseFlag( body );
		return displayDate( result.date , result.options );
	});
	document.body.innerHTML = processed;
	*/
}

function parseFlag( str ) {
	var results = str.match(/{{tzt:(?<time>\d+)(-(?<options>[A-Z]+))?}}/);
	var time = parseInt(results.groups.time);
	var options = results.groups.options;
	var ans = { date : new Date(time) };
	if ( typeof options !== "undefined" ) {
		ans.options = options;
	}
	return ans;
}

function generateFlag( datetime , options = undefined ) {
	var optionstring = "";
	if ( typeof options !== "undefined" && options.length > 0 ) {
		optionstring = "-" + options;
	}
	return "{{tzt:" + datetime.getTime() + optionstring + "}}";
}

function displayDate( date , options = undefined ) {
	var displaytext = date.toString();
	var titletext = "TimeZoneTool: " + date.toString();
	if ( typeof options !== "undefined" ) {
		if ( options.includes("C") ) {
			// compact display
			displaytext = date.getHours() + ":" + date.getMinutes() + " " + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
		}
		if ( options.includes("T") ) {
			// time only
			displaytext = formatAMPM( date );
		}
	}
	return "<span title=\"" + titletext + "\">" + displaytext + "</span>";
}

function formatAMPM( date ) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0'+minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
}