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
      kpi_comparison_icon_positive: {
        type: "string",
        label: "replace icon for positive comparison",
        display: "color",
        section: "KPI1",
      },
      kpi_comparison_icon_negative: {
        type: "string",
        label: "replace icon for negative comparison",
        display: "color",
        section: "KPI1",
      },
      kpi_1_comparison_color_mode: {
        type: "string",
        label: "color mode for comparison for kpi 1",
        display: "select",
        values: [
          {"Color comparison value": "comparison-value"},
          {"Color comparison icon": "comparison-icon"},
          {"Color comparison": "comparison"},
          {"Color main value": "main-value"},
          {"Color main icon": "main-icon"},
          {"Color main": "main"},
        ],
        section: "KPI1",
        default: "comparison-icon"
      },
      main_element_dividers_between_kpis: {
        type: "boolean",
        label: "show dividers between kpis",
        display: "boolean",
        section: "Main",
        default: false,
      },
      main_element_negative_color: {
        type: "string",
        label: "color for negative values",
        display: "color",
        section: "Main",
        default: "#ff0000"
      },
      main_element_positive_color: {
        type: "string",
        label: "color for positive values",
        display: "color",
        section: "Main",
        default: "#00ff00"
      }
    },
  
    create: function(element, config) {
  
      // Insert a <style> tag with some styles we'll use later.
      element.innerHTML = `
      <style>
      .card {
        margin: auto;
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        font-family: "Google Sans", "Noto Sans", "Noto Sans JP", "Noto Sans CJK KR", "Noto Sans Arabic UI", "Noto Sans Devanagari UI", "Noto Sans Hebrew", "Noto Sans Thai UI", "Helvetica", "Arial", "sans-serif";
      }
      
      .card-icon {
        padding-top: 2rem;
      }
      
      .card-value {
          padding: 0.75rem;
          font-size: 3rem;
          font-weight: 400;
      }
      
      .card-title {
          padding: 0.25rem;
          font-size: 1.5rem;  
      }
      
      .card-comparison {
        padding: 0.25rem;
        margin: 0 auto;
      }

      </style>

      <div class="content-wrapper">
      <div class="card" id="kpi-1">
        <div class="card-icon">
          <box-icon id="kpi-1-icon" type="solid" size="lg" color="#eb4034" name="rocket"></box-icon>
        </div>
        <div class="card-value" id="kpi-1-value">50%</div>
        <div class="card-title" id="kpi-1-title">title</div>
        <div class="card-comparison">
          <span class="card-comparison-value" id="kpi-1-1-value">15 pp</span>
          <span class="card-comparison-title" id="kpi-1-1-title">mot y-1</span>    
          <span class="card-comparison-value" id="kpi-1-2-value">10 pp</span>
          <span class="card-comparison-title" id="kpi-1-2-title">mot m-1</span>   
        </div>
      </div>

      `;
    }, 

    updateAsync: function(data, element, config, queryResponse, details, done) {
  
      // Clear any errors from previous updates
      this.clearErrors();
      // Grab the first cell of the data
      var firstRow = data[0];

      var all_columns = [];
      all_columns = all_columns.concat(queryResponse.fields.dimension_like);
      all_columns = all_columns.concat(queryResponse.fields.measure_like);

      var kpi_1_column = all_columns.at(config.kpi_1_column);

      document.getElementById("kpi-1-icon").setAttribute("name", config.kpi_1_icon);
      document.getElementById("kpi-1-icon").setAttribute("color", config.kpi_1_icon_color);
      document.getElementById("kpi-1-value").innerHTML = firstRow[kpi_1_column.name].rendered;
      
      if (config.kpi_1_title != "") {
        document.getElementById("kpi-1-title").innerHTML = config.kpi_1_title;
      } else {
        document.getElementById("kpi-1-title").innerHTML = kpi_1_column.label_short;
      }
      document.getElementById("kpi-1-title").style.color = config.kpi_1_title_color;
      document.getElementById("kpi-1-value").style.color = config.kpi_1_value_color;


      if (config.kpi_1_comparisons_visible) {
        if (kpi_1_comparison_column_1 != null) {
          var kpi_1_comparison_column_1 = all_columns.at(config.kpi_1_comparison_column_1);
          document.getElementById("kpi-1-1-value").innerHTML = firstRow[kpi_1_comparison_column_1.name].rendered;
          document.getElementById("kpi-1-1-title").innerHTML = config.kpi_1_comparison_title_1;
        }
        if (kpi_1_comparison_column_2 != null) {
          var kpi_1_comparison_column_2 = all_columns.at(config.kpi_1_comparison_column_2);
          document.getElementById("kpi-1-2-value").innerHTML = firstRow[kpi_1_comparison_column_2.name].rendered;
          document.getElementById("kpi-1-2-title").innerHTML = config.kpi_1_comparison_title_2;
        }
      } else {
        document.getElementById("kpi-1-1-value").innerHTML = "";
        document.getElementById("kpi-1-1-title").innerHTML = "";
        document.getElementById("kpi-1-2-value").innerHTML = "";
        document.getElementById("kpi-1-2-title").innerHTML = "";
      }

      function adjustSizeKPI(size, kpi) {
        if (size == "small") {
          document.getElementById(kpi+"-value").style.fontSize = "2rem";
        } else if (size == "medium") {
          document.getElementById(kpi+"-value").style.fontSize = "3rem";
        }
        else if (size == "large") {
          document.getElementById(kpi+"-value").style.fontSize = "4rem";
        }
      }
      adjustSizeKPI(config.kpi_1_size, "kpi-1");

      var kpi1_comparison_value_1 = firstRow[kpi1_comparison_column_1.name].value;
      var kpi1_comparison_value_2 = firstRow[kpi1_comparison_column_2.name].value;

      function colorizeKPImain(color, option) {
        if (option == "comparison-value") {
          document.getElementById("kpi-1-1-value").style.color = color;
        } else if (option == "comparison-icon") {
          document.getElementById("kpi-1-1-title").style.color = color;
        } else if (option == "comparison") {
          document.getElementById("kpi-1-1-value").style.color = color;
          document.getElementById("kpi-1-1-title").style.color = color;
        } else if (option == "main-value") {
          document.getElementById("kpi-1-value").style.color = color;
        } else if (option == "main-icon") {
          document.getElementById("kpi-1-icon").style.color = color;
        } else if (option == "main") {
          document.getElementById("kpi-1-value").style.color = color;
          document.getElementById("kpi-1-icon").style.color = color;
        }
      }

      function colorizeKPIsecondary(color, option) {
        if (option == "comparison-value") {
          document.getElementById("kpi-1-2-value").style.color = color;
        } else if (option == "comparison-icon") {
          document.getElementById("kpi-1-2-title").style.color = color;
        } else if (option == "comparison") {
          document.getElementById("kpi-1-2-value").style.color = color;
          document.getElementById("kpi-1-2-title").style.color = color;
        }
      }


      if (kpi1_comparison_value_1>0) {
        colorizeKPImain(config.main_element_positive_color, config.kpi_1_comparison_color_mode)
        if (config.kpi_comparison_icon_positive != null) {
          document.getElementById("kpi-1-icon").setAttribute("name", config.kpi_comparison_icon_positive);
        }
      } else if (kpi1_comparison_value_1<0) {
        colorizeKPImain(config.main_element_negative_color, config.kpi_1_comparison_color_mode)
        if (config.kpi_comparison_icon_negative != null) {
          document.getElementById("kpi-1-icon").setAttribute("name", config.kpi_comparison_icon_negative);
        }
      }

      if (kpi1_comparison_value_2>0) {
        colorizeKPIsecondary(config.comparison_element_positive_color, config.kpi_1_comparison_color_mode, 1)
      } else if (kpi1_comparison_value_2<0) {
        colorizeKPIsecondary(config.comparison_element_negative_color, config.kpi_1_comparison_color_mode, 1)
      }
      

      done()
    }
});