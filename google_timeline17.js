google.charts.load("current", {packages:["timeline"]});

var chart, updateRequested, value = 0;

function removePartOfString(string, part) {
    var index = string.indexOf(part);
    if (index > -1) {
        return string.substring(0, index) + string.substring(index + part.length);
    }
    return string;
}

function create_column(column_item, adjusted_columns) {
    var column_adj = {};
    column_adj['id'] = column_item.name;
    column_adj['label'] = column_item.label_short;
    column_adj['type'] = removePartOfString(column_item.type,'_date');
    adjusted_columns.push(column_adj);
}

function getDataTable(data, array_columns) {
	adjusted_columns = [];
  console.log(array_columns);
  array_columns.forEach(dim => create_column(dim, adjusted_columns))

  data.unshift(adjusted_columns);
  console.log(data);

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
	//var data = getDataTable([['']], [{'id': 'id', 'label': 'label', 'type': 'string'}]);
	chart = new google.visualization.Timeline(document.getElementById('vis-chart'));
	// chart.draw(data);
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

        function extract_inner_values(item, dimension, result) {
          // return the value if it exists, otherwise return the empty string
            if (item.hasOwnProperty('value')) {
              if (dimension.type == 'date_date') {
                  result.push(new Date(item.value));
              } else {
                  result.push(item.value);
              }
          
          }
        }
              
          function extract_values(item, dimensions, result) {
              let row_result = []
              dimensions.forEach(dimension => extract_inner_values(item[dimension.name], dimension, row_result))
              result.push(row_result);
          }
          
          function iterateOverArray(data, dimensions) {
              let result = []
              data.forEach(item => extract_values(item, dimensions, result))
              return result
          }

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
        
        array = iterateOverArray(data, array_columns)

        console.log(array);
        chart && chart.draw(getDataTable(array, array_columns));
        
		done()
	}
    });