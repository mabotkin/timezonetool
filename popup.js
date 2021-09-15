var picker = new MtrDatepicker({
	target: "picker",
	minutes: {
		min: 0,
		max: 50,
		step: 1,
		maxlength: 2
	},
});

generate();
picker.onChange("all", function() {
	generate();
});

var radiobuttons = document.getElementsByName("format");
for ( var i = 0 ; i < radiobuttons.length ; i++ ) {
	radiobuttons[i].addEventListener("change" , function() {
		generate();
	});
}

document.getElementById('copyFlag').addEventListener('click',function(){
   navigator.clipboard.writeText(document.getElementById("flag-pre").innerHTML);
});

function generate() {
	var date = picker.values.date;
	var radiobuttons = document.getElementsByName("format");
	var options = "";
	for ( var i = 0 ; i < radiobuttons.length ; i++ ) {
		if ( radiobuttons[i].checked ) {
			options += radiobuttons[i].value;
		}
	}
	var flag = generateFlag( date , options );
	document.getElementById("flag").innerHTML = "Flag: <code id='flag-pre'>" + flag + "</code>";
	var parsed = parseFlag( flag );
	document.getElementById("preview").innerHTML = "Preview: " + displayDate( parsed.date , parsed.options );
}

function parsePageForFlags() {
	replaceFlagsWithTime();
}