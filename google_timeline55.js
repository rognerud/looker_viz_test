google.charts.load("current", {packages:["timeline"]});

var chart
let loaded = false;

function create_column(column_item, adjusted_columns, index) {
    var column_adj = {};
    column_adj['label'] = column_item.label_short;

    if (available_columns - index <= 2) {
      column_adj['id'] = column_item.name;
      column_adj['type'] = 'date'
    } else if (available_columns == 5 && index == 2) {
      column_adj['role'] = 'tooltip'
      column_adj['type'] = 'string'
    } else {
      column_adj['id'] = column_item.name;
      column_adj['type'] = 'string'
    }

    adjusted_columns.push(column_adj);
}

function getDataTable(data, array_columns, available_columns) {
	adjusted_columns = [];
  array_columns.forEach((dim, index) => create_column(dim, adjusted_columns, index, available_columns))
  data.unshift(adjusted_columns);
  return google.visualization.arrayToDataTable(data);
}

function handleErrors(vis, resp, options) {
    function messageFromLimits(min, max, field) {
        let message = "You need " + min
        if (max) {
          message += " to " + max
        }
        message += " " + field + " to use this visualization. <br>"
        message += " First field is the row label, the last to fields must be start and end date. (or timestamp)<br>"
        message += " You can add more fields to add more information to the visualization. <br>"
        message += " The second field can be a group label, and the third field can be a tooltip. <br>"
        message += " The tooltip field will use html if the field has a html tag defined. <br>"
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




function selectHandler(e) {
  var selection = chart.getSelection();
  var message = '';

  for (var i = 0; i < selection.length; i++) {
    var item = selection[i];
    if (item.row != null && item.column != null) {
      message += '{row:' + item.row + ',column:' + item.column + '}';
    } else if (item.row != null) {
      message += '{row:' + item.row + '}';
    } else if (item.column != null) {
      message += '{column:' + item.column + '}';
    }
  }
  if (message == '') {
    message = 'nothing';
  }
  alert('You selected ' + message);
}


looker.plugins.visualizations.add({
  options: {
      info: {
        type: "string",
        label: "google timelines from google charts library. @gisle",
        display: "text"
      }
  },
	
  create: function(element, config){

    function drawChart() {
      chart = new google.visualization.Timeline(document.getElementById('vis-chart'));
      google.visualization.events.addListener(chart, 'select', selectHandler);
      loaded = true;
      console.log("chart loaded");
    }

		element.innerHTML = `
    <div id="vis-chart" style="height: 100%;"></div>
    `;
		google.charts.setOnLoadCallback(drawChart);
	},

	updateAsync: function(data, element, config, queryResponse, details, done){
        if (!handleErrors(this, queryResponse, {
            min_pivots: 0, max_pivots: 0,
            min_dimensions: 3, max_dimensions: 5,
            min_measures: 0, max_measures: 0
        })) return

        function extract_inner_values(item, dimension, result, index, available_columns) {
          // return the value if it exists, otherwise return the empty string
          if (available_columns - index  <= 2) {
            result.push(new Date(LookerCharts.Utils.textForCell(item)));
          } else if (available_columns == 5 && index == 2) {
            if (item.hasOwnProperty('html')) {
              result.push(LookerCharts.Utils.htmlForCell(item));
            } else {
              result.push(LookerCharts.Utils.textForCell(item));
            }
          } else {
            result.push(LookerCharts.Utils.textForCell(item));
          }
        }
              
          function extract_values(item, dimensions, result, available_columns) {
              let row_result = []
              dimensions.forEach((dimension, index) => extract_inner_values(item[dimension.name], dimension, row_result, index, available_columns))
              result.push(row_result);
          }
          
          function iterateOverArray(data, dimensions, available_columns) {
              let result = []
              data.forEach(item => extract_values(item, dimensions, result, available_columns))
              return result
          }

        var array_columns = [];
        available_columns = queryResponse.fields.dimensions.length;
        array_columns = queryResponse.fields.dimension_like.slice(0, available_columns);
        
        var timeline_options = {
          colors: ['#6F03FF', '#FFBF94', '#DEB2FA', '#FFF48D', '#F4B3BB','#BADAF8', '#D2FCC3'],
          timeline: { fontName: 'Helvetica' },
          chartArea:{left:0,top:0,width:"100%",height:"100%"}
        };
        
        console.log(details);

        array = iterateOverArray(data, array_columns, available_columns)

        function waitForCondition() {
          return new Promise(resolve => {
            function checkFlag() {
              if (loaded == true) {
                resolve();
              } else {
                window.setTimeout(checkFlag, 1000); 
              }
            }
            checkFlag();
          });
        }

        async function populateChart(array, array_columns, available_columns) {
          await waitForCondition();
          var data = getDataTable(array, array_columns, available_columns);
          chart && chart.draw(data, timeline_options);
          done();
        }
        
        populateChart(array, array_columns, available_columns) ;
        
	}
  });