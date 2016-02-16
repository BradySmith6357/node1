var r = process.argv[2] 
var g = process.argv[3] 
var b = process.argv[4]

var luminosity = 0.2126*r + 0.7152*g + 0.0722*b

var darkenColor = function(color){
	return color - (color * 0.2)
}

var darkenRGB = function(r, g, b) {
	return {
		r: darkenColor(r),
		g: darkenColor(g),
		b: darkenColor(b)
	}
}

module.exports = {
	luminosity : luminosity,
	darken : darkenRGB
};