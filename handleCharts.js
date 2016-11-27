var getBarChartData = function(data, labels) {
    ///Sample data: labels ["10%","20%","30%"] , data: [10count, 20count, 30count]

    var barChartData = {
        labels: labels,
        datasets: [
            {
                fillColor: "rgba(150,150,222,0.5)",
                strokeColor: "rgba(80,80,200,0.8)",
                highlightFill: "rgba(50,50,150,0.75)",
                highlightStroke: "rgba(50,50,80,1)",
                data: data
            }
        ]
    };
    return barChartData;
};



function getOccurances(data) {
  function count(arr) {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
  }
  return count(data);
}

var bubbleChartData = null;
var getBubbleChartData = function (allScores) {

    
    //var occurances = getOccurances(allScores);
    var datas = [];
    var total = allScores.length;
    allScores.forEach(function(count, index) { 
        if (allScores.length > index++ && allScores[index++] === count)
            var donazing = true;
        else {
            var percentage = Math.round(count*8/total, 1);
            datas.push( {y:index, x: count, r: percentage });
        }
    });
    console.table(datas);

    var color = Chart.helpers.color;
    bubbleChartData = {
        animation: {
            duration: 10000
        },
        datasets: [{
            label: "Movie Scores",
            backgroundColor: Chart.helpers.color(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            borderWidth: 1,
            data: datas
        }
        // , {
        //     label: "My Second dataset",
        //     backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
        //     borderColor: window.chartColors.orange,
        //     borderWidth: 1,
        //     data: [{
        //         x: randomScalingFactor(),
        //         y: randomScalingFactor(),
        //         r: Math.abs(randomScalingFactor()) / 5,
        //     }, {
        //         x: randomScalingFactor(),
        //         y: randomScalingFactor(),
        //         r: Math.abs(randomScalingFactor()) / 5,
        //     }, {
        //         x: randomScalingFactor(),
        //         y: randomScalingFactor(),
        //         r: Math.abs(randomScalingFactor()) / 5,
        //     }, {
        //         x: randomScalingFactor(),
        //         y: randomScalingFactor(),
        //         r: Math.abs(randomScalingFactor()) / 5,
        //     }, {
        //         x: randomScalingFactor(),
        //         y: randomScalingFactor(),
        //         r: Math.abs(randomScalingFactor()) / 5,
        //     }, {
        //         x: randomScalingFactor(),
        //         y: randomScalingFactor(),
        //         r: Math.abs(randomScalingFactor()) / 5,
        //     }, {
        //         x: randomScalingFactor(),
        //         y: randomScalingFactor(),
        //         r: Math.abs(randomScalingFactor()) / 5,
        //     }]
        // }
        ]
    };

};

var bindBubbleChart = function() {
    var ctx = document.getElementById("bubbleChartCanvas").getContext("2d");
    window.myChart = new Chart(ctx, {
        type: 'bubble',
        data: bubbleChartData,
        options: {
            responsive: true,
            title:{
                display:true,
                text:'Chart.js Bubble Chart'
            },
            tooltips: {
                mode: 'point'
            }
        }
    });
};