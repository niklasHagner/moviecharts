window.chartColorArray = [
	'rgb(220, 80, 100)',
	'red',
	'tomato',
	'orange',
	'gold',
	'rgb(123, 110, 166)',
	'rgb(101, 125, 187)',
	'rgb(54, 160, 231)',
	'rgb(75, 192, 192)',
	'rgb(50,205,50)',
	'green'
];

window.randomScalingFactor = function () {
	return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
};


var getColorByScore = function (ix) {
    var red_base = 100, green_base = 150, blue_base = 100, red_start = 250, blue_start = 250;
    
    var value = ix * 10;
    var r = red_start - (value * 2 + red_base),
        g = value * 0.5 + green_base,
        b = 200; 

    return "rgb(" + r + "," + g + "," + b + ")";
};
