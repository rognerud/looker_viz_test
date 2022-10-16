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
        label: "color of value",
        display: "color",
        section: "KPI1",
        default: "#000000"
      },
      kpi_1_title: {
        type: "string",
        label: "title, if empty, uses label",
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
        display: "text",
        section: "KPI1",
      },
      kpi_1_icon_color: {
        type: "string",
        label: "color of icon",
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
      kpi_1_comparison_icon_positive: {
        type: "string",
        label: "replace icon for positive comparison",
        display: "text",
        section: "KPI1",
      },
      kpi_1_comparison_icon_negative: {
        type: "string",
        label: "replace icon for negative comparison",
        display: "text",
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
      kpi_1_only_show_icon: {
        type: "boolean",
        label: "only show icon for kpi 1",
        display: "boolean",
        section: "KPI1",
        default: false,
      },
      kpi_1_comparison_text_color: {
        type: "string",
        label: "color of comparison text",
        display: "color",
        section: "KPI1",
        default: "#000000"
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
        padding: 3vh;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        font-family: "Google Sans", "Noto Sans", "Noto Sans JP", "Noto Sans CJK KR", "Noto Sans Arabic UI", "Noto Sans Devanagari UI", "Noto Sans Hebrew", "Noto Sans Thai UI", "Helvetica", "Arial", "sans-serif";
      }
      
      .card-icon {
        padding-top: 2vh;
      }
      
      .card-value {
          padding: 1vh;
          font-size: 10vh;
          font-weight: 400;
      }
      
      .card-title {
          padding: 0.25rem;
          font-size: 8vh;  
      }
      
      .card-comparison {
        padding: 0.25rem;
        margin: 0 auto;
        font-size: 5vh;
      }

      </style>

      <div class="content-wrapper">
      <div class="card" id="kpi-1">
        <div class="card-icon">
          <box-icon id="kpi-1-icon" type="solid" size="15vh" color="#eb4034" name="rocket"></box-icon>
        </div>
        <div class="card-value" id="kpi-1-value">50%</div>
        <div class="card-title" id="kpi-1-title">title</div>
        <div class="card-comparison" id="kpi-1-comparisons">
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

      kpi = "kpi-1"

      function getRenderedValue(cell) {
        if (cell.hasOwnProperty('rendered')) {
          return cell.rendered;
        } else {
          return cell.value;
        }
      }

      function getLabel(column) {
        if (column.hasOwnProperty('label_short')) {
          return column.label_short;
        } else {
          return column.label;
        }
      }

      function adjustSizeKPI(size, kpi) {
        if (size == "small") {
          document.getElementById(kpi+"-value").style.fontSize = "10vh";
        } else if (size == "medium") {
          document.getElementById(kpi+"-value").style.fontSize = "15vh";
        }
        else if (size == "large") {
          document.getElementById(kpi+"-value").style.fontSize = "20vh";
        }
      }

      function colorizeKPImain(color, option, kpi) {
        if (option == "comparison-value") {
          document.getElementById(kpi + "-1-value").style.color = color;
        } else if (option == "comparison-icon") {
          document.getElementById(kpi + "-1-title").style.color = color;
        } else if (option == "comparison") {
          document.getElementById(kpi + "-1-value").style.color = color;
          document.getElementById(kpi + "-1-title").style.color = color;
        } else if (option == "main-value") {
          document.getElementById(kpi + "-value").style.color = color;
        } else if (option == "main-icon") {
          document.getElementById(kpi + "-icon").setAttribute("color", color);
        } else if (option == "main") {
          document.getElementById(kpi + "-value").style.color = color;
          document.getElementById(kpi + "-icon").setAttribute("color", color);
        }
      }

      function colorizeKPIsecondary(color, option, kpi) {
        if (option == "comparison-value") {
          document.getElementById(kpi + "-2-value").style.color = color;
        } else if (option == "comparison-icon") {
          document.getElementById(kpi + "-2-title").style.color = color;
        } else if (option == "comparison") {
          document.getElementById(kpi + "-2-value").style.color = color;
          document.getElementById(kpi + "-2-title").style.color = color;
        }
      }

      function hideEverythingButIcon(kpi) {
        document.getElementById(kpi + "-value").style.display = "none";
        document.getElementById(kpi + "-title").style.display = "none";
        document.getElementById(kpi + "-1-value").style.display = "none";
        document.getElementById(kpi + "-1-title").style.display = "none";
        document.getElementById(kpi + "-2-value").style.display = "none";
        document.getElementById(kpi + "-2-title").style.display = "none";
      }
      function unhideEverythingButIcon(kpi) {
        document.getElementById(kpi + "-value").style.display = "block";
        document.getElementById(kpi + "-title").style.display = "block";
        document.getElementById(kpi + "-1-value").style.display = "block";
        document.getElementById(kpi + "-1-title").style.display = "block";
        document.getElementById(kpi + "-2-value").style.display = "block";
        document.getElementById(kpi + "-2-title").style.display = "block";
      }

      console.log(queryResponse);
      console.log(config);
      console.log(details);

      var all_columns = [];
      all_columns = all_columns.concat(queryResponse.fields.dimension_like).concat(queryResponse.fields.measure_like);

      var kpi_1_column = all_columns.at(config.kpi_1_column);
      var kpi_1_comparison_column_1 = all_columns.at(config.kpi_1_comparison_column_1);
      var kpi_1_comparison_column_2 = all_columns.at(config.kpi_1_comparison_column_2);

      if (config.kpi_1_icon != "") {
        document.getElementById(kpi + "-icon").style.display = "none";
      } else {
        document.getElementById(kpi + "-icon").style.display = "block";
      }

      document.getElementById(kpi + "-icon").setAttribute("name", config.kpi_1_icon);
      document.getElementById(kpi + "-icon").setAttribute("color", config.kpi_1_icon_color);
      document.getElementById(kpi + "-value").innerHTML = getRenderedValue(firstRow[kpi_1_column.name]);

      if (config.kpi_1_title != undefined) {
        document.getElementById(kpi + "-title").innerHTML = config.kpi_1_title;
      } else {
        document.getElementById(kpi + "-title").innerHTML = getLabel(kpi_1_column);
      }
      
      document.getElementById(kpi + "-title").style.color = config.kpi_1_title_color;
      document.getElementById(kpi + "-value").style.color = config.kpi_1_value_color;
      document.getElementById(kpi + "-1-value").style.color = config.kpi_1_comparison_text_color;
      document.getElementById(kpi + "-2-value").style.color = config.kpi_1_comparison_text_color;
      document.getElementById(kpi + "-1-title").style.color = config.kpi_1_comparison_text_color;
      document.getElementById(kpi + "-2-title").style.color = config.kpi_1_comparison_text_color;

      if (config.kpi_1_comparisons_visible) {
        if (config.kpi_1_comparison_column_1 != undefined) {
          document.getElementById(kpi + "-1-value").innerHTML = getRenderedValue(firstRow[kpi_1_comparison_column_1.name]);
          document.getElementById(kpi + "-1-title").innerHTML = getLabel(kpi_1_comparison_column_1);
        } else {
          document.getElementById(kpi + "-1-value").innerHTML = "";
          document.getElementById(kpi + "-1-title").innerHTML = "";
        }
        if (config.kpi_1_comparison_column_2 != undefined) {
          document.getElementById(kpi + "-2-value").innerHTML = getRenderedValue(firstRow[kpi_1_comparison_column_2.name]);
          document.getElementById(kpi + "-2-title").innerHTML = getLabel(kpi_1_comparison_column_2);
        } else {
          document.getElementById(kpi + "-2-value").innerHTML = "";
          document.getElementById(kpi + "-2-title").innerHTML = "";
        }
      } else {
        document.getElementById(kpi + "-1-value").innerHTML = "";
        document.getElementById(kpi + "-1-title").innerHTML = "";
        document.getElementById(kpi + "-2-value").innerHTML = "";
        document.getElementById(kpi + "-2-title").innerHTML = "";
      }

      adjustSizeKPI(config.kpi_1_size, "kpi-1");

      if (config.kpi_1_comparison_column_1 != undefined) {

        var kpi_1_comparison_value_1 = firstRow[kpi_1_comparison_column_1.name].value;
      
        if (kpi_1_comparison_value_1>0) {
          colorizeKPImain(
            config.main_element_positive_color,
            config.kpi_1_comparison_color_mode,
            kpi)
          if (config.kpi_comparison_icon_positive != "") {
            document.getElementById(kpi + "-icon").setAttribute("name", config.kpi_1_comparison_icon_positive);
          }
        } else if (kpi_1_comparison_value_1<0) {
          colorizeKPImain(
            config.main_element_negative_color,
            config.kpi_1_comparison_color_mode,
            kpi)
          if (config.kpi_comparison_icon_negative != "") {
            document.getElementById(kpi + "-icon").setAttribute("name", config.kpi_1_comparison_icon_negative);
          }
        }
      }

      if (config.kpi_1_comparison_column_2 != undefined) {

        var kpi_1_comparison_value_2 = firstRow[kpi_1_comparison_column_2.name].value;

        if (kpi_1_comparison_value_2>0) {
          colorizeKPIsecondary(
            config.comparison_element_positive_color,
            config.kpi_1_comparison_color_mode,
            kpi)
        } else if (kpi_1_comparison_value_2<0) {
          colorizeKPIsecondary(
            config.comparison_element_negative_color,
            config.kpi_1_comparison_color_mode,
            kpi)
        }
    }

    if (config.kpi_1_only_show_icon) {
      hideEverythingButIcon();
    } else {
      unhideEverythingButIcon();
    }

      done()
    }
});