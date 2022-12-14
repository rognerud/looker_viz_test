google.charts.load("current", {packages:["timeline"]});

var chart, updateRequested, value = 0;

function getDataTable(data) {
	return google.visualization.arrayToDataTable(data);
}

function handleErrors(vis, resp, options) {
    function messageFromLimits(min, max, field) {
      let message = "You need " + min
      if (max) {
        message += " to " + max
      }
      message += " " + field
      return message
    }
  
    if ((resp.fields.pivots.length < options.min_pivots) ||
        (resp.fields.pivots.length > options.max_pivots)) {
      let message
      vis.addError({
        group: "pivot-req",
        title: "Incompatible Pivot Data",
        message: messageFromLimits(options.min_pivots, options.max_pivots, "pivots"),
      });
      return false;
    } else {
      vis.clearErrors("pivot-req");
    }
  
    if ((resp.fields.dimensions.length < options.min_dimensions) ||
        (resp.fields.dimensions.length > options.max_dimensions)) {
      vis.addError({
        group: "dim-req",
        title: "Incompatible Dimension Data",
        message: messageFromLimits(options.min_dimensions, options.max_dimensions, "dimensions"),
      });
      return false;
    } else {
      vis.clearErrors("dim-req");
    }
  
    if ((resp.fields.measure_like.length < options.min_measures) ||
        (resp.fields.measure_like.length > options.max_measures)) {
      vis.addError({
        group: "mes-req",
        title: "Incompatible Measure Data",
        message: messageFromLimits(options.min_measures, options.max_measures, "measures"),
      });
      return false;
    } else {
      vis.clearErrors("mes-req");
    }
    return true;
  }

function drawChart() {
	var data = getDataTable([['']['']]);
	chart = new google.visualization.Timeline(document.getElementById('vis-chart'));
	//chart.draw(data);
}

function iterateOverArray(array, dimensions) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let row_result = []
        for (let j = 0; j < dimensions[i].length; j++) {
            row_result.push(array[i][j])
        }
        result.push(row_result)
    }
    return result
}

looker.plugins.visualizations.add({
    options: {
    },
	create: function(element, config){
		element.innerHTML = '<div id="vis-chart"/></div>';
		google.charts.setOnLoadCallback(drawChart);
	},
	updateAsync: function(data, element, config, queryResponse, details, done){
        if (!handleErrors(this, queryResponse, {
            min_pivots: 0, max_pivots: 0,
            min_dimensions: 3, max_dimensions: 4,
            min_measures: 0, max_measures: 1
        })) return
        
        var array_columns = [];
        console.log(queryResponse);
        if (queryResponse.fields.dimensions.length = 4) {
            array_columns.push(queryResponse.fields.dimension_like[0])
            array_columns.push(queryResponse.fields.dimension_like[1])
            array_columns.push(queryResponse.fields.dimension_like[2])
            array_columns.push(queryResponse.fields.dimension_like[3])
        } else {
            array_columns.push(queryResponse.fields.dimension_like[0])
            array_columns.push(queryResponse.fields.dimension_like[1])
            array_columns.push(queryResponse.fields.dimension_like[2])
        }
        console.log(array_columns);
        data.forEach(item => console.log(item));
        
        array = iterateOverArray(data, array_columns)

        console.log(array);
        chart && chart.draw(getDataTable(array));
        
		done()
	},
    });