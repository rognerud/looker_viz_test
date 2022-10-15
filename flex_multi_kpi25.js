looker.plugins.visualizations.add({

  options: {
      kpi_1_column: {
        type: "number",
        label: "column number for kpi 1",
        display: "number",
        section: "KPI1",
        default: 0
      },
      kpi_1_size: {
        type: "string",
        label: "size of kpi 1",
        display: "select",
        values: [
          {"Large": "large"},
          {"Medium": "medium"},
          {"Small": "small"}
        ],
        section: "KPI1",
        default: "medium"
      },
      kpi_1_value_color: {
        type: "string",
        label: "color of kpi 1",
        display: "color",
        section: "KPI1",
        default: "#000000"
      },
      kpi_1_title: {
        type: "string",
        label: "title of kpi 1, if empty, uses label",
        display: "text",
        section: "KPI1",
      },
      kpi_1_title_color: {
        type: "string",
        label: "color of title of kpi 1",
        display: "color",
        section: "KPI1",
        default: "#000000"
      },
      kpi_1_icon: {
        type: "string",
        label: "display icon for kpi 1",
        display: "string",
        section: "KPI1",
      },      
      kpi_1_icon_color: {
        type: "string",
        label: "color of icon for kpi 1 if positive value",
        display: "color",
        section: "KPI1",
      },
      kpi_1_icon_only: {
        type: "boolean",
        label: "show icon only for kpi 1",
        display: "boolean",
        section: "KPI1",
        default: false,
        display_size: "half"
      },
      kpi_1_comparison_column_1: {
        type: "number",
        label: "column number for kpi 1 comparison 1",
        display: "number",
        section: "KPI1",
      },
      kpi_1_comparison_column_2: {
        type: "number",
        label: "column number for kpi 1 comparison 2",
        display: "number",
        section: "KPI1",
      },
      kpi_1_comparisons_visible: {
        type: "boolean",
        label: "show comparisons for kpi 1",
        display: "boolean",
        section: "KPI1",
        default: true,
      },
      kpi_1_comparison_color_positive: {
        type: "string",
        label: "color for positive comparison for kpi 1",
        display: "color",
        section: "KPI1",
        default: "#00A99D"
      },
      kpi_comparison_color_negative: {
        type: "string",
        label: "color for negative comparison for kpi 1",
        display: "color",
        section: "KPI1",
        default: "#E8743B"
      },
      kpi_1_comparison_color_mode: {
        type: "string",
        label: "color mode for comparison for kpi 1",
        display: "select",
        values: [
          {"Color comparison value": "comparison-value"},
          {"Color comparison icon": "comparison-icon"},
          {"Color comparison": "comparison-both"},
          {"Color main value": "main-value"},
          {"Color main icon": "main-icon"},
          {"Color main": "main"},
        ],
        section: "KPI1",
        default: "comparison-icon"
      },
      kpi_1_comparison_positive_icon: {
        type: "string",
        label: "show icon for kpi 1 comparison if positive value",
        display: "string",
        section: "KPI1",
      },
      kpi_1_comparison_negative_icon: {
        type: "string",
        label: "show icon for kpi 1 comparison if negative value",
        display: "string",
        section: "KPI1",
      },
      main_element_dividers_between_kpis: {
        type: "boolean",
        label: "show dividers between kpis",
        display: "boolean",
        section: "Main",
        default: false,
      },
    },
  
    create: function(element, config) {
  
      // Insert a <style> tag with some styles we'll use later.
      element.innerHTML = `
      <style>
        body{
            margin-top:20px;
            background:#FAFAFA;
        }
        .order-card {
            color: #fff;
        }
        
        .kpi-1-card {
        }
        
        .card {
            border-radius: 5px;
            -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
            box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
            border: none;
            margin-bottom: 30px;
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }
        
        .card .card-block {
            padding: 25px;
        }
        
        .order-card i {
            font-size: 26px;
        }
        
        .f-left {
            float: left;
        }
        
        .f-right {
            float: right;
        }
      </style>

      <div class="container">
      <div class="row">
          <div class="col-md-4 col-xl-3" id="kpi-1">
              <div class="card kpi-1-card order-card">
                  <div class="card-block">
                      <h4 class="kpi-title" id="kpi-1-title">Orders Received</h6>
                      <h2 class="kpi-icon id="kpi-1-icon-solo><span class="main-icon" id="kpi-1-center-1-icon"></span></h2>
                      <h2 class="kpi-main-and-icon" id="kpi-1-value-and-icon"><span class="kpi-side-icon" id="kpi-1-side-1-icon"></span><span id="kpi-1-value>486</span></h2>
                      <h6 class="kpi-comparison" id="kpi-1-comparison-1-title">Completed Orders<span class="comparison-icon" id="kpi-1-comparison-1-icon"></span><span class="f-right" id="kpi-1-comparison-1-value">351</span></p>
                      <h6 class="kpi-comparison" id="kpi-1-comparison-2-title">Completed Orders<span class="comparison-icon" id="kpi-1-comparison-2-icon"></span><span class="f-right" id="kpi-1-comparison-2-value">351</span></p>
                    <div class="kpi>
                  </div>
              </div>
          </div>
      `;
        // Create a container element to let us center the text.
      var container = element.appendChild(document.createElement("div"));
      container.id = "flex-multi-kpi";

    }, 

    updateAsync: function(data, element, config, queryResponse, details, done) {
  
      // Clear any errors from previous updates
      this.clearErrors();
      
      // Grab the first cell of the data
      var firstRow = data[0];
      var all_columns = [];
      all_columns = all_columns.concat(queryResponse.fields.dimension_like);
      all_columns = all_columns.concat(queryResponse.fields.measure_like);

      var kpi1 = all_columns.at(config.kpi_1_column);
      
      if (config.kpi_1_positive_icon != null) {
        var kpi1_positive_icon = config.kpi_1_positive_icon;
      }

      var kpi1_value = firstRow[kpi1.name].value;
      var kpi1_title = config.kpi_1_title;
      var kpi1_comparison_title = config.kpi_1_comparison_title;

      console.log(queryResponse);

      function addKPI(kpi, title, id) {
          var id_title = id + "-title";
          var id_value_and_icon = id + "-value-and-icon";
          document.getElementById(id_value_and_icon).innerHTML = kpi;
          document.getElementById(id_title).innerHTML = title;
      }
      
      if (kpi1_value > 0) {
        var kpi1_value_and_icon = "<box-icon type='solid' name='" + kpi1_positive_icon + "'></box-icon></i><span>" + kpi1_value + "</span>";
      } else {
        var kpi1_value_and_icon = "<box-icon type='solid' name='" + kpi1_negative_icon + "'></box-icon></i><span>" + kpi1_value + "</span>";
      }
      

      addKPI(kpi1_value_and_icon, kpi1_title, 'kpi-1');

      done()
    }
});