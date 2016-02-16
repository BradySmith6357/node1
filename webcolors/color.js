var request = require("request")

var colorList = "https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json"

var colorIndex = process.argv[2]

request("colorList", function (error, response, body){
	var color = JSON.parse(body);
	var matches = color.filter(function(color){
		return color.name.toLowerCase() === colorIndex.name.toLowerCase();
	})

	if (matches.length === 0){
		console.log("No color matches found!")
	} else {
		var match = matches[0]
	}

	console.log(match.rgb.r, match.rgb.g, match.rgb.b)
})


