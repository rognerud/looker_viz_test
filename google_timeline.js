google.charts.load("current", {packages:["timeline"]});

var chart, updateRequested, value = 0;

function getDataTable(data) {
    data.shift();
    row = ['A','B','Start','End']
    data.push(row);
    return google.visualization.arrayToDataTable(data);
}


function drawChart() {
	var data = getDataTable([['']['']]);
	chart = new google.visualization.Timeline(document.getElementById('vis-chart'));
	chart.draw(data);
}

looker.plugins.visualizations.add({
    options: {
    },
	create: function(element, config){
		element.innerHTML = '<div id="vis-chart"/></div>';
		google.charts.setOnLoadCallback(drawChart);
	},
	updateAsync: function(data, element, config, queryResponse, details, done){
		// value = data[0][queryResponse.fields.dimensions[0].name].value;
        console.log(data);
        console.log(element);
        console.log(queryResponse);
        console.log(details);

        chart && chart.draw(getDataTable(data));
		done()
	},
    });