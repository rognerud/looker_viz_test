looker.plugins.visualizations.add({

  options: {
      kpi_1_column: {
        type: "number",
        label: "column number for kpi",
        display: "number",
        section: "KPI1",
        default: 0,
        order: 1
      },
      kpi_1_size: {
        type: "string",
        label: "size of kpi",
        display: "select",
        values: [
          {"Large": "large"},
          {"Medium": "medium"},
          {"Small": "small"}
        ],
        section: "KPI1",
        default: "medium",
        order: 2
      },
      kpi_1_value_color: {
        type: "string",
        label: "color of value",
        display: "color",
        section: "KPI1",
        default: "#000000",
        order: 10
      },
      kpi_1_title: {
        type: "string",
        label: "title, if empty, uses label",
        display: "text",
        section: "KPI1",
        default: "",
        order: 43
      },
      kpi_1_title_color: {
        type: "string",
        label: "color of title of kpi",
        display: "color",
        section: "KPI1",
        default: "#000000",
        order: 11
      },
      kpi_1_icon: {
        type: "string",
        label: "Insert a boxicon name to display an icon",
        display: "text",
        section: "KPI1",
        default: "",
        order: 3
      },
      kpi_1_icon_color: {
        type: "string",
        label: "color of icon if used",
        display: "color",
        section: "KPI1",
        order: 12
      },
      kpi_1_comparison_column_1: {
        type: "number",
        label: "column number for comparison 1",
        display: "number",
        section: "KPI1",
        order: 22
      },
      kpi_1_comparison_column_2: {
        type: "number",
        label: "column number for comparison 2",
        display: "number",
        section: "KPI1",
        order: 21
      },
      kpi_1_comparisons_visible: {
        type: "boolean",
        label: "show comparisons for kpi",
        display: "boolean",
        section: "KPI1",
        default: true,
        order: 20
      },
      kpi_1_comparison_icon_positive: {
        type: "string",
        label: "replace icon for positive comparison",
        display: "text",
        section: "KPI1",
        default: "",
        order: 40
      },
      kpi_1_comparison_icon_negative: {
        type: "string",
        label: "replace icon for negative comparison",
        display: "text",
        section: "KPI1",
        default: "",
        order: 41
      },
      kpi_1_comparison_color_mode: {
        type: "string",
        label: "color mode for comparison for kpi",
        display: "select",
        values: [
          {"Color comparison value": "comparison-value"},
          {"Color comparison": "comparison"},
          {"Color main value": "main-value"},
          {"Color main icon": "main-icon"},
          {"Color main": "main"},
        ],
        section: "KPI1",
        default: "comparison-icon",
        order: 21
      },
      kpi_1_only_show_icon: {
        type: "boolean",
        label: "only show icon for kpi",
        display: "boolean",
        section: "KPI1",
        default: false,
        order: 42
      },
      kpi_1_comparison_text_color: {
        type: "string",
        label: "color of comparison text",
        display: "color",
        section: "KPI1",
        default: "#000000",
        order: 14
      },
      kpi_2_column: {
        type: "number",
        label: "column number for kpi",
        display: "number",
        section: "KPI2",
        order: 1
      },
      kpi_2_size: {
        type: "string",
        label: "size of kpi",
        display: "select",
        values: [
          {"Large": "large"},
          {"Medium": "medium"},
          {"Small": "small"}
        ],
        section: "KPI2",
        default: "medium",
        order: 2
      },
      kpi_2_value_color: {
        type: "string",
        label: "color of value",
        display: "color",
        section: "KPI2",
        default: "#000000",
        order: 10
      },
      kpi_2_title: {
        type: "string",
        label: "title, if empty, uses label",
        display: "text",
        section: "KPI2",
        default: "",
        order: 43
      },
      kpi_2_title_color: {
        type: "string",
        label: "color of title of kpi",
        display: "color",
        section: "KPI2",
        default: "#000000",
        order: 11
      },
      kpi_2_icon: {
        type: "string",
        label: "Insert a boxicon name to display an icon",
        display: "text",
        section: "KPI2",
        default: "",
        order: 3
      },
      kpi_2_icon_color: {
        type: "string",
        label: "color of icon if used",
        display: "color",
        section: "KPI2",
        order: 12
      },
      kpi_2_comparison_column_1: {
        type: "number",
        label: "column number for comparison 1",
        display: "number",
        section: "KPI2",
        order: 22
      },
      kpi_2_comparison_column_2: {
        type: "number",
        label: "column number for comparison 2",
        display: "number",
        section: "KPI2",
        order: 21
      },
      kpi_2_comparisons_visible: {
        type: "boolean",
        label: "show comparisons for kpi",
        display: "boolean",
        section: "KPI2",
        default: true,
        order: 20
      },
      kpi_2_comparison_icon_positive: {
        type: "string",
        label: "replace icon for positive comparison",
        display: "text",
        section: "KPI2",
        default: "",
        order: 40
      },
      kpi_2_comparison_icon_negative: {
        type: "string",
        label: "replace icon for negative comparison",
        display: "text",
        section: "KPI2",
        default: "",
        order: 41
      },
      kpi_2_comparison_color_mode: {
        type: "string",
        label: "color mode for comparison for kpi",
        display: "select",
        values: [
          {"Color comparison value": "comparison-value"},
          {"Color comparison": "comparison"},
          {"Color main value": "main-value"},
          {"Color main icon": "main-icon"},
          {"Color main": "main"},
        ],
        section: "KPI2",
        default: "comparison-icon",
        order: 21
      },
      kpi_2_only_show_icon: {
        type: "boolean",
        label: "only show icon for kpi",
        display: "boolean",
        section: "KPI2",
        default: false,
        order: 42
      },
      kpi_2_comparison_text_color: {
        type: "string",
        label: "color of comparison text",
        display: "color",
        section: "KPI2",
        default: "#000000",
        order: 14
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
        float:left;
        margin: auto;
        width: 48%;
        height: 100%;
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
          padding: 1vh;
          font-size: 8vh;  
      }
      
      .card-comparison {
        padding: 1vh;
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
          <span class="card-comparison-sign" id="kpi-1-1-sign"></span><span class="card-comparison-value" id="kpi-1-1-value">15 pp</span>
          <span class="card-comparison-title" id="kpi-1-1-title">mot y-1</span>
            <span class="card-comparison-sign" id="kpi-1-2-sign"></span><span class="card-comparison-value" id="kpi-1-2-value">10 pp</span>
          <span class="card-comparison-title" id="kpi-1-2-title">mot m-1</span>   
        </div>
      </div>
      <div class="card" id="kpi-2">
        <div class="card-icon">
          <box-icon id="kpi-2-icon" type="solid" size="15vh" color="#eb4034" name=""></box-icon>
        </div>
        <div class="card-value" id="kpi-2-value"></div>
        <div class="card-title" id="kpi-2-title"></div>
        <div class="card-comparison" id="kpi-2-comparisons">
          <span class="card-comparison-sign" id="kpi-2-1-sign"></span><span class="card-comparison-value" id="kpi-2-1-value"></span>
          <span class="card-comparison-title" id="kpi-2-1-title"></span>
            <span class="card-comparison-sign" id="kpi-2-2-sign"></span><span class="card-comparison-value" id="kpi-2-2-value"></span>
          <span class="card-comparison-title" id="kpi-2-2-title"></span>   
        </div>
      </div>
    </div> 

      `;
    }, 

    updateAsync: function(data, element, config, queryResponse, details, done) {
  
      // Clear any errors from previous updates
      this.clearErrors();
      // Grab the first cell of the data
      var firstRow = data[0];

      
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
          document.getElementById(kpi+"-icon").setAttribute("size", "15vh");
          document.getElementById(kpi+"-value").style.fontSize = "10vh";
          document.getElementById(kpi+"-title").style.fontSize = "6vh";
          document.getElementById(kpi+"-comparisons").style.fontSize = "4vh";
        } else if (size == "medium") {
          document.getElementById(kpi+"-icon").setAttribute("size", "25vh");
          document.getElementById(kpi+"-value").style.fontSize = "20vh";
          document.getElementById(kpi+"-title").style.fontSize = "10vh";
          document.getElementById(kpi+"-comparisons").style.fontSize = "5vh";
        }
        else if (size == "large") {
          document.getElementById(kpi + "-icon").setAttribute("size", "35vh");
          document.getElementById(kpi+"-value").style.fontSize = "25vh";
          document.getElementById(kpi+"-title").style.fontSize = "14vh";
          document.getElementById(kpi+"-comparisons").style.fontSize = "5vh";
        }
      }

      function colorizeKPImain(color, option, kpi) {
        if (option == "comparison-value") {
          document.getElementById(kpi + "-1-value").style.color = color;
          document.getElementById(kpi + "-1-sign").style.color = color;
        } else if (option == "comparison-icon") {
          document.getElementById(kpi + "-1-title").style.color = color;
        } else if (option == "comparison") {
          document.getElementById(kpi + "-1-value").style.color = color;
          document.getElementById(kpi + "-1-title").style.color = color;
          document.getElementById(kpi + "-1-sign").style.color = color;
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
          document.getElementById(kpi + "-2-sign").style.color = color;
        } else if (option == "comparison-icon") {
          document.getElementById(kpi + "-2-title").style.color = color;
        } else if (option == "comparison") {
          document.getElementById(kpi + "-2-value").style.color = color;
          document.getElementById(kpi + "-2-title").style.color = color;
          document.getElementById(kpi + "-2-sign").style.color = color;
        }
      }

      function hideEverythingButIcon(kpi) {
        document.getElementById(kpi + "-value").style.display = "none";
        document.getElementById(kpi + "-title").style.display = "none";
        document.getElementById(kpi + "-comparisons").style.display = "none";
      }
      function unhideEverythingButIcon(kpi) {
        document.getElementById(kpi + "-value").style.display = "block";
        document.getElementById(kpi + "-title").style.display = "block";
        document.getElementById(kpi + "-comparisons").style.display = "block";
      }

      console.log(queryResponse);
      console.log(config);
      console.log(details);

      
      var all_columns = [];
      all_columns = all_columns.concat(queryResponse.fields.dimension_like).concat(queryResponse.fields.measure_like);

      function applyKPIsettings(
        kpi,
        column_value,
        comparison_color_mode,
        comparison_column_1_value,
        comparison_column_2_value,
        comparison_icon_negative,
        comparison_icon_positive,
        comparison_text_color,
        comparisons_visible,
        icon,
        icon_color,
        only_show_icon,
        size,
        title,
        title_color,
        value_color,
      ) {

        var column = all_columns.at(column_value);
        var comparison_column_1 = all_columns.at(comparison_column_1_value);
        var comparison_column_2 = all_columns.at(comparison_column_2_value);
  
        if (icon != "") {
          document.getElementById(kpi + "-icon").style.display = "inline-block";
          } else {
            document.getElementById(kpi + "-icon").style.display = "none";
          }
          
          document.getElementById(kpi + "-icon").setAttribute("name", icon);
          document.getElementById(kpi + "-icon").setAttribute("color", icon_color);
          document.getElementById(kpi + "-value").innerHTML = getRenderedValue(firstRow[column.name]);
          
          if (title != "") {
            document.getElementById(kpi + "-title").innerHTML = title;
          } else {
            document.getElementById(kpi + "-title").innerHTML = getLabel(column);
          }
          
          document.getElementById(kpi + "-title").style.color = title_color;
          document.getElementById(kpi + "-value").style.color = value_color;
          document.getElementById(kpi + "-1-value").style.color = comparison_text_color;
          document.getElementById(kpi + "-2-value").style.color = comparison_text_color;
          document.getElementById(kpi + "-1-title").style.color = comparison_text_color;
          document.getElementById(kpi + "-2-title").style.color = comparison_text_color;
          document.getElementById(kpi + "-1-sign").style.color = comparison_text_color;
          document.getElementById(kpi + "-2-sign").style.color = comparison_text_color;

          if (comparisons_visible) {
            document.getElementById(kpi + "-comparisons").style.display = "block";
            if (comparison_column_1 != undefined) {
              document.getElementById(kpi + "-1-value").innerHTML = getRenderedValue(firstRow[comparison_column_1.name]);
              document.getElementById(kpi + "-1-title").innerHTML = getLabel(comparison_column_1);
            } else {
              document.getElementById(kpi + "-1-value").innerHTML = "";
              document.getElementById(kpi + "-1-title").innerHTML = "";
              document.getElementById(kpi + "-1-sign").innerHTML = "";
          
            }
            if (comparison_column_2 != undefined) {
              document.getElementById(kpi + "-2-value").innerHTML = getRenderedValue(firstRow[comparison_column_2.name]);
              document.getElementById(kpi + "-2-title").innerHTML = getLabel(comparison_column_2);
            } else {
              document.getElementById(kpi + "-2-value").innerHTML = "";
              document.getElementById(kpi + "-2-title").innerHTML = "";
              document.getElementById(kpi + "-2-sign").innerHTML = "";
          
            }
          } else {
            document.getElementById(kpi + "-comparisons").style.display = "none";
          }
          
          adjustSizeKPI(size, kpi);
          
          document.getElementById(kpi + "-1-sign").innerHTML = "";
          if (comparison_column_1 != undefined) {
          
            var comparison_value_1 = firstRow[comparison_column_1.name].value;
          
            if (comparison_value_1>0) {
              colorizeKPImain(
                config.main_element_positive_color,
                comparison_color_mode,
                kpi)
              if (comparison_icon_positive.length > 0
                  && comparison_icon_negative.length > 0) {
                document.getElementById(kpi + "-icon").setAttribute("name", comparison_icon_positive);
              } else {
                document.getElementById(kpi + "-icon").setAttribute("name", icon);
              }
              document.getElementById(kpi + "-1-sign").innerHTML = "▴";
          
            } else if (comparison_value_1<0) {
              colorizeKPImain(
                config.main_element_negative_color,
                comparison_color_mode,
                kpi)
              if (comparison_icon_positive.length > 0
                  && comparison_icon_negative.length > 0) {
                document.getElementById(kpi + "-icon").setAttribute("name", comparison_icon_negative);
              } else {
                document.getElementById(kpi + "-icon").setAttribute("name", icon);
              }
              document.getElementById(kpi + "-1-sign").innerHTML = "▾";
            }
          }
          
          document.getElementById(kpi + "-2-sign").innerHTML = "";
          if (comparison_column_2 != undefined) {
          
            var comparison_value_2 = firstRow[comparison_column_2.name].value;
            console.log("value 2" + comparison_value_2);
            if (comparison_value_2>0) {
              colorizeKPIsecondary(
                config.main_element_positive_color,
                comparison_color_mode,
                kpi)
                document.getElementById(kpi + "-2-sign").innerHTML = "▴";
            } else if (comparison_value_2<0) {
              colorizeKPIsecondary(
                config.main_element_negative_color,
                comparison_color_mode,
                kpi)
                document.getElementById(kpi + "-2-sign").innerHTML = "▾";
            }
          }
          
          if (only_show_icon) {
          hideEverythingButIcon(kpi);
          document.getElementById(kpi + "-icon").setAttribute("size", "75vh");
          } else {
          unhideEverythingButIcon(kpi);
          }

  }

  let kpi = "kpi-1"
  let column_value = config.kpi_1_column;
  let comparison_color_mode = config.kpi_1_comparison_color_mode;
  let comparison_column_1_value = config.kpi_1_comparison_column_1;
  let comparison_column_2_value = config.kpi_1_comparison_column_2;
  let comparison_icon_negative = config.kpi_1_comparison_icon_negative;
  let comparison_icon_positive = config.kpi_1_comparison_icon_positive;
  let comparison_text_color = config.kpi_1_comparison_text_color;
  let comparisons_visible = config.kpi_1_comparisons_visible;
  let icon = config.kpi_1_icon;
  let icon_color = config.kpi_1_icon_color;
  let only_show_icon = config.kpi_1_only_show_icon;
  let size = config.kpi_1_size;
  let title = config.kpi_1_title;
  let title_color = config.kpi_1_title_color;
  let value_color = config.kpi_1_value_color;

  if (column_value!=undefined) {
    applyKPIsettings(
      kpi,
      column_value,
      comparison_color_mode,
      comparison_column_1_value,
      comparison_column_2_value,
      comparison_icon_negative,
      comparison_icon_positive,
      comparison_text_color,
      comparisons_visible,
      icon,
      icon_color,
      only_show_icon,
      size,
      title,
      title_color,
      value_color,
    )
  }

  
  kpi = "kpi-2"
  column_value = config.kpi_2_column;
  comparison_color_mode = config.kpi_2_comparison_color_mode;
  comparison_column_1_value = config.kpi_2_comparison_column_1;
  comparison_column_2_value = config.kpi_2_comparison_column_2;
  comparison_icon_negative = config.kpi_2_comparison_icon_negative;
  comparison_icon_positive = config.kpi_2_comparison_icon_positive;
  comparison_text_color = config.kpi_2_comparison_text_color;
  comparisons_visible = config.kpi_2_comparisons_visible;
  icon = config.kpi_2_icon;
  icon_color = config.kpi_2_icon_color;
  only_show_icon = config.kpi_2_only_show_icon;
  size = config.kpi_2_size;
  title = config.kpi_2_title;
  title_color = config.kpi_2_title_color;
  value_color = config.kpi_2_value_color;

    if (column_value!=undefined) {
      applyKPIsettings(
        kpi,
        column_value,
        comparison_color_mode,
        comparison_column_1_value,
        comparison_column_2_value,
        comparison_icon_negative,
        comparison_icon_positive,
        comparison_text_color,
        comparisons_visible,
        icon,
        icon_color,
        only_show_icon,
        size,
        title,
        title_color,
        value_color,
      )
    }


      done()
    }
});