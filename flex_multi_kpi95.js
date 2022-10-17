const column_description = "The number of the column to be used for the KPI";
const size_description = "size_description";
const size_default = "large";
const value_color_default = "black";
const comparison_color_default = "#a5a6a1";
const progress_foreground_color_default = "white";
const progress_background_color_default = "#a5a6a1";
const progress_foreground_description = "The color of the foreground in the progress bar";
const progress_background_description = "The color of the background in the progress  bar";

looker.plugins.visualizations.add({

  

  options: {
      kpi_1_comparison_1_progress_bar: {
        type: "boolean",
        label: "Make comparison 1 present as a Progress Bar",
        default: false,
        section: "KPI1",
        order: 50
      },
      kpi_2_comparison_1_progress_bar: {
        type: "boolean",
        label: "Make comparison 1 present as a Progress Bar",
        default: false,
        section: "KPI2",
        order: 50
      },
      kpi_3_comparison_1_progress_bar: {
        type: "boolean",
        label: "Make comparison 1 present as a Progress Bar",
        default: false,
        section: "KPI3",
        order: 50
      },
      kpi_1_progress_bar_color_foreground: {
        type: "boolean",
        label: progress_foreground_description,
        default: progress_foreground_color_default,
        section: "KPI1",
        order: 51
      },
      kpi_2_progress_bar_color_foreground: {
        type: "boolean",
        label: progress_foreground_description,
        default: progress_foreground_color_default,
        section: "KPI2",
        order: 51
      },
      kpi_3_progress_bar_color_foreground: {
        type: "boolean",
        label: progress_foreground_description,
        default: progress_foreground_color_default,
        section: "KPI3",
        order: 51
      },
      kpi_1_progress_bar_color_background: {
        type: "boolean",
        label: progress_background_description,
        default: progress_background_color_default,
        section: "KPI1",
        order: 51
      },
      kpi_2_progress_bar_color_background: {
        type: "boolean",
        label: progress_background_description,
        default: progress_background_color_default,
        section: "KPI2",
        order: 51
      },
      kpi_3_progress_bar_color_background: {
        type: "boolean",
        label: progress_background_description,
        default: progress_background_color_default,
        section: "KPI3",
        order: 51
      },
      kpi_1_comparison_1_not_comparative: {
        type: "boolean",
        label: "Comparison 1 should be a comparative",
        display: "radio",
        default: true,
        section: "KPI1",
        order: 43
      },
      kpi_1_comparison_2_not_comparative: {
        type: "boolean",
        label: "Comparison 2 should be a comparative",
        display: "radio",
        default: true,
        section: "KPI1",
        order: 43
      },
      kpi_2_comparison_1_not_comparative: {
        type: "boolean",
        label: "Comparison 1 should be a comparative",
        display: "radio",
        default: true,
        section: "KPI2",
        order: 43
      },
      kpi_2_comparison_2_not_comparative: {
        type: "boolean",
        label: "Comparison 2 should be a comparative",
        display: "radio",
        default: true,
        section: "KPI2",
        order: 43
      },
      kpi_3_comparison_1_not_comparative: {
        type: "boolean",
        label: "Comparison 1 should be a comparative",
        display: "radio",
        default: true,
        section: "KPI3",
        order: 43
      },
      kpi_3_comparison_2_not_comparative: {
        type: "boolean",
        label: "Comparison 2 should be a comparative",
        display: "radio",
        default: true,
        section: "KPI3",
        order: 43
      },
      kpi_1_column: {
        type: "number",
        label: column_description,
        display: "number",
        section: "KPI1",
        default: 1,
        order: 1
      },
      kpi_1_size: {
        type: "string",
        label: size_description,
        display: "select",
        values: [
          {"Large": "large"},
          {"Medium": "medium"},
          {"Small": "small"}
        ],
        section: "KPI1",
        default: size_default,
        order: 4
      },
      kpi_1_value_color: {
        type: "string",
        label: "color of value",
        display: "color",
        section: "KPI1",
        default: value_color_default,
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
        order: 5
      },
      kpi_1_icon_color: {
        type: "string",
        label: "color of icon if used",
        display: "color",
        section: "KPI1",
        default: "#000000",
        order: 12
      },
      kpi_1_comparison_column_1: {
        type: "number",
        label: "column number for comparison 1",
        display: "number",
        section: "KPI1",
        order: 3
      },
      kpi_1_comparison_column_2: {
        type: "number",
        label: "column number for comparison 2",
        display: "number",
        section: "KPI1",
        order: 4
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
        order: 7
      },
      kpi_1_only_show_icon: {
        type: "string",
        label: "Icon Title Mode",
        values: [
          { "Not on": "not" },
          { "Icon": "icon" },
          { "Icon and Title": "icon_and_title" },
          { "Narrow icon": "icon_narrow" },
        ],
        display: "radio",
        default: "not",
        section: "KPI1",
        default: false,
        order: 42
      },
      kpi_1_comparison_text_color: {
        type: "string",
        label: "color of comparison text",
        display: "color",
        section: "KPI1",
        default: comparison_color_default,
        order: 14
      },
      kpi_2_column: {
        type: "number",
        label: column_description,
        display: "number",
        section: "KPI2",
        order: 1
      },
      kpi_2_size: {
        type: "string",
        label: size_description,
        display: "select",
        values: [
          {"Large": "large"},
          {"Medium": "medium"},
          {"Small": "small"}
        ],
        section: "KPI2",
        default: size_default,
        order: 4
      },
      kpi_2_value_color: {
        type: "string",
        label: "color of value",
        display: "color",
        section: "KPI2",
        default: value_color_default,
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
        order: 5
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
        order: 3
      },
      kpi_2_comparison_column_2: {
        type: "number",
        label: "column number for comparison 2",
        display: "number",
        section: "KPI2",
        order: 4
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
        order: 7
      },
      kpi_2_only_show_icon: {
        type: "string",
        label: "Icon Title Mode",
        values: [
          { "Not on": "not" },
          { "Icon": "icon" },
          { "Icon and Title": "icon_and_title" },
          { "Narrow icon": "icon_narrow" },
        ],
        display: "radio",
        default: "not",
        section: "KPI2",
        default: false,
        order: 42
      },
      kpi_2_comparison_text_color: {
        type: "string",
        label: "color of comparison text",
        display: "color",
        section: "KPI2",
        default: comparison_color_default,
        order: 14
      },
      kpi_3_column: {
        type: "number",
        label: column_description,
        display: "number",
        section: "KPI3",
        order: 1
      },
      kpi_3_size: {
        type: "string",
        label: size_description,
        display: "select",
        values: [
          {"Large": "large"},
          {"Medium": "medium"},
          {"Small": "small"}
        ],
        section: "KPI3",
        default: size_default,
        order: 4
      },
      kpi_3_value_color: {
        type: "string",
        label: "color of value",
        display: "color",
        section: "KPI3",
        default: value_color_default,
        order: 10
      },
      kpi_3_title: {
        type: "string",
        label: "title, if empty, uses label",
        display: "text",
        section: "KPI3",
        default: "",
        order: 43
      },
      kpi_3_title_color: {
        type: "string",
        label: "color of title of kpi",
        display: "color",
        section: "KPI3",
        default: "#000000",
        order: 11
      },
      kpi_3_icon: {
        type: "string",
        label: "Insert a boxicon name to display an icon",
        display: "text",
        section: "KPI3",
        default: "",
        order: 5
      },
      kpi_3_icon_color: {
        type: "string",
        label: "color of icon if used",
        display: "color",
        section: "KPI3",
        order: 12
      },
      kpi_3_comparison_column_1: {
        type: "number",
        label: "column number for comparison 1",
        display: "number",
        section: "KPI3",
        order: 3
      },
      kpi_3_comparison_column_2: {
        type: "number",
        label: "column number for comparison 2",
        display: "number",
        section: "KPI3",
        order: 4
      },
      kpi_3_comparisons_visible: {
        type: "boolean",
        label: "show comparisons for kpi",
        display: "boolean",
        section: "KPI3",
        default: true,
        order: 20
      },
      kpi_3_comparison_icon_positive: {
        type: "string",
        label: "replace icon for positive comparison",
        display: "text",
        section: "KPI3",
        default: "",
        order: 40
      },
      kpi_3_comparison_icon_negative: {
        type: "string",
        label: "replace icon for negative comparison",
        display: "text",
        section: "KPI3",
        default: "",
        order: 41
      },
      kpi_3_comparison_color_mode: {
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
        section: "KPI3",
        default: "comparison-value",
        order: 7
      },
      kpi_3_only_show_icon: {
        type: "string",
        label: "Icon Title Mode",
        values: [
          { "Not on": "not" },
          { "Icon": "icon" },
          { "Icon and Title": "icon_and_title" },
           { "Narrow icon": "icon_narrow" },
        ],
        display: "radio",
        default: "not",
        section: "KPI3",
        default: false,
        order: 42
      },
      kpi_3_comparison_text_color: {
        type: "string",
        label: "color of comparison text",
        display: "color",
        section: "KPI3",
        default: comparison_color_default,
        order: 14
      },
      main_element_dividers_between_kpis: {
        type: "boolean",
        label: "show dividers between kpis",
        display: "boolean",
        section: "Main",
        default: false,
        order: 10
      },
      main_element_negative_color: {
        type: "string",
        label: "color for negative values",
        display: "color",
        section: "Main",
        default: "red",
        order: 3
      },
      main_element_positive_color: {
        type: "string",
        label: "color for positive values",
        display: "color",
        section: "Main",
        default: "green",
        order: 2
      },
      main_element_neutral_color: {
        type: "string",
        label: "color for neutral values",
        display: "color",
        section: "Main",
        default: "black",
        order: 4

      },
      main_element_icon_negative_color: {
        type: "string",
        label: "color for negative icons",
        display: "color",
        section: "Main",
        default: "#FF7F7C",
        order: 7

      },
      main_element_icon_positive_color: {
        type: "string",
        label: "color for positive icons",
        display: "color",
        section: "Main",
        default: "#3C804D",
        order: 6
      },
      main_element_icons_and_values_mode: {
        type: "boolean",
        label: "<b> Allow icons and values for each KPI, else icon only visible when Icon Title mode active</b>",
        display: "boolean",
        section: "Main",
        default: false,
        order: 1
    },
  },
  
    create: function(element, config) {
  
      // Insert a <style> tag with some styles we'll use later.
      element.innerHTML = `
      <style>
      .card {
        float:left;
        -webkit-box-align: center;
        align-items: center;
        font-weight: 100;
        margin: 5vh 3vw;
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
      }
      
      .card-title {
          padding: 1vh;
          font-size: 8vh;  
          margin: 2vh 0;
          overflow-wrap: break-word;
      }
      
      .card-comparison {
        padding: 1vh;
        margin: 5vh 0;
        font-size: 5vh;
      }

      .card-comparison-value {
        font-weight: 300;
      }

      .card-comparison-sign {
        font-weight: 300;
      }

      .card-divider {
        background-color: #000000;
        height: 35vh;
        width: 1px;
        display: inline-block;
        float:left;
        margin: 15vh 0;
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
          <div class="card-comparison-progress-bar-outer" id="kpi-2-1-progress-outer">
            <div class="card-comparison-progress-bar-inner" id="kpi-2-1-progress-inner">
            </div>
          </div>
          <div class="card-comparison-1" id="kpi-1-comparison-1">
            <span class="card-comparison-sign" id="kpi-1-1-sign"></span><span class="card-comparison-value" id="kpi-1-1-value">15 pp</span><span class="card-comparison-title" id="kpi-1-1-title">mot y-1</span> 
          </div> 
          <div class="card-comparison-2" id="kpi-1-comparison-1">
            <span class="card-comparison-sign" id="kpi-1-2-sign"></span><span class="card-comparison-value" id="kpi-1-2-value">10 pp</span><span class="card-comparison-title" id="kpi-1-2-title">mot m-1</span>
          </div>
        </div>
      </div>
      <div class="card-divider" id="kpi-2-divider"></div>
      <div class="card" id="kpi-2">
        <div class="card-icon">
          <box-icon id="kpi-2-icon" type="solid" size="15vh" color="#eb4034" name=""></box-icon>
        </div>
        <div class="card-value" id="kpi-2-value"></div>
        <div class="card-title" id="kpi-2-title"></div>
        <div class="card-comparison" id="kpi-2-comparisons">
          <div class="card-comparison-progress-bar-outer" id="kpi-2-1-progress-outer">
            <div class="card-comparison-progress-bar-inner" id="kpi-2-1-progress-inner">
            </div>
          </div>
          <div class="card-comparison-1" id="kpi-2-comparison-1">
            <span class="card-comparison-sign" id="kpi-2-1-sign"></span><span class="card-comparison-value" id="kpi-2-1-value"> </span><span class="card-comparison-title" id="kpi-2-1-title"></span>
          </div>
          <div class="card-comparison-2" id="kpi-2-comparison-2">
            <span class="card-comparison-sign" id="kpi-2-2-sign"></span><span class="card-comparison-value" id="kpi-2-2-value"> </span><span class="card-comparison-title" id="kpi-2-2-title"></span>   
          </div>
          </div>
        </div>
      </div>
      <div class="card-divider" id="kpi-3-divider"></div>
      <div class="card" id="kpi-3">
      <div class="card-icon">
        <box-icon id="kpi-3-icon" type="solid" size="15vh" color="#eb4034" name=""></box-icon>
      </div>
      <div class="card-value" id="kpi-3-value"></div>
      <div class="card-title" id="kpi-3-title"></div>
      <div class="card-comparison" id="kpi-3-comparisons">
        <div class="card-comparison-progress-bar-outer" id="kpi-2-1-progress-outer">
          <div class="card-comparison-progress-bar-inner" id="kpi-2-1-progress-inner"></div>
        </div>
        <div class="card-comparison-1" id="kpi-3-comparison-1">
          <span class="card-comparison-sign" id="kpi-3-1-sign"></span><span class="card-comparison-value" id="kpi-3-1-value"></span><span class="card-comparison-title" id="kpi-3-1-title"></span>  
        </div>
        <div class="card-comparison-2" id="kpi-3-comparison-2">
          <span class="card-comparison-sign" id="kpi-3-2-sign"></span><span class="card-comparison-value" id="kpi-3-2-value"></span><span class="card-comparison-title" id="kpi-3-2-title"></span>   
        </div>
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

      function adjustSizeKPI(size, kpi, icon) {
        let sizeKPI = 10;

        function adjustElements(kpi, sizeKPI) {
          document.getElementById(kpi+"-icon").setAttribute("size", sizeKPI*1.3 + "vh");
          document.getElementById(kpi+"-value").style.fontSize = sizeKPI*1.0 + "vh";
          document.getElementById(kpi+"-title").style.fontSize = sizeKPI/3.5 + "vh";
          document.getElementById(kpi+"-comparisons").style.fontSize = sizeKPI/4 + "vh";
          document.getElementById(kpi+"-progress-outer").style.height = sizeKPI/3.5 + "vh";
        }

        if (size == "small") {
          if (icons_and_values_mode) {
            sizeKPI = 10;
          } else {
            sizeKPI = 14;
          }
          adjustElements(kpi, sizeKPI)
        } else if (size == "medium") {
          if (icons_and_values_mode) {
            sizeKPI = 14;
          } else {
            sizeKPI = 19;
          }
          adjustElements(kpi, sizeKPI)
        }
        else if (size == "large") {
          if (icons_and_values_mode) {
            sizeKPI = 19;
          } else {
            sizeKPI = 27;
          }
          adjustElements(kpi, sizeKPI)
        }
      }

      function colorizeKPImain(color, color_icon, option, kpi) {
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
          document.getElementById(kpi + "-icon").setAttribute("color", color_icon);
        } else if (option == "main") {
          document.getElementById(kpi + "-value").style.color = color;
          document.getElementById(kpi + "-icon").setAttribute("color", color_icon);
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

      function hideEverythingBut(but, kpi) {
        
        if (but == "icon") {
          document.getElementById(kpi + "-value").style.display = "none";
          document.getElementById(kpi + "-title").style.display = "none";
          document.getElementById(kpi + "-comparisons").style.display = "none";
        } else if (but == "icon_and_title") {
          document.getElementById(kpi + "-title").style.display = "inline-block";
          document.getElementById(kpi + "-value").style.display = "none";
          document.getElementById(kpi + "-comparisons").style.display = "none";
        }
      }

      function showMainElements(kpi) {
        document.getElementById(kpi + "-value").style.display = "block";
        document.getElementById(kpi + "-title").style.display = "block";
      }

      function hideUnusedComparison(kpi, comparison) {
        document.getElementById(kpi + "-" + comparison + "-sign").style.display = "none";
        document.getElementById(kpi + "-" + comparison + "-value").style.display = "none";
        document.getElementById(kpi + "-" + comparison + "-title").style.display = "none";
      }
      function unhideUnusedComparison(kpi, comparison) {
        document.getElementById(kpi + "-" + comparison + "-sign").style.display = "inline";
        document.getElementById(kpi + "-" + comparison + "-value").style.display = "inline";
        document.getElementById(kpi + "-" + comparison + "-title").style.display = "inline";
      }

      console.log(queryResponse);
      console.log(config);
      
      var all_columns = [];
      all_columns = all_columns.concat(queryResponse.fields.dimension_like).concat(queryResponse.fields.measure_like);

      function applyKPIsettings() {

        var column = all_columns.at(column_value-1);
        var comparison_column_1 = all_columns.at(comparison_column_1_value-1);
        var comparison_column_2 = all_columns.at(comparison_column_2_value-1);
        var column_inner_value = firstRow[column.name].value;
        var comparison_1_inner_value = firstRow[comparison_column_2.name].value;
        var comparison_2_inner_value = firstRow[comparison_column_2.name].value;
  
        if (comparison_column_1_value == undefined || progress_bar) {
          hideUnusedComparison(kpi, "1");
        } else {
          unhideUnusedComparison(kpi, "1");
        }
        if (comparison_column_2_value == undefined) {
          hideUnusedComparison(kpi, "2");
        } else {
          unhideUnusedComparison(kpi, "2");
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
          document.getElementById(kpi + "-1-value").style.color = neutral_color;
          document.getElementById(kpi + "-2-value").style.color = neutral_color;
          document.getElementById(kpi + "-1-title").style.color = comparison_text_color;
          document.getElementById(kpi + "-2-title").style.color = comparison_text_color;
          document.getElementById(kpi + "-1-sign").style.color = neutral_color;
          document.getElementById(kpi + "-2-sign").style.color = neutral_color;

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
          
          adjustSizeKPI(size, kpi, icon);
          
          if (progress_bar && comparison_column_1_value != undefined) {
            document.getElementById(kpi + "-1-progress-outer").style.display = "block";
            document.getElementById(kpi + "-1-progress-outer").style.background = progress_color_background;
            document.getElementById(kpi + "-1-progress-inner").style.background = progress_color_foreground;
            const inner_progress_width = (comparison_1_inner_value / column_inner_value) * 100;
            document.getElementById(kpi + "-1-progress-inner").style.width = inner_progress_width + "%";
            document.getElementById(kpi + "-1-progress-inner").innerHTML = inner_progress_width.toFixed(0) + "% of " + getRenderedValue(firstRow[comparison_column_1.name]) ;
          } else {
            document.getElementById(kpi + "-1-progress-outer").style.display = "none";
          }

          document.getElementById(kpi + "-1-sign").innerHTML = "";
          if (comparison_1_comparative) {
          
            if (comparison_1_inner_value>0) {
              colorizeKPImain(
                config.main_element_positive_color,
                config.main_element_icon_positive_color,
                comparison_color_mode,
                kpi)
              if (comparison_icon_positive.length > 0
                  && comparison_icon_negative.length > 0) {
                document.getElementById(kpi + "-icon").setAttribute("name", comparison_icon_positive);
              } else {
                document.getElementById(kpi + "-icon").setAttribute("name", icon);
              }
              document.getElementById(kpi + "-1-sign").innerHTML = "▴";
          
            } else if (comparison_1_inner_value<0) {
              colorizeKPImain(
                config.main_element_negative_color,
                config.main_element_icon_negative_color,
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
          if (comparison_2_comparative) {
          
            console.log("value 2" + comparison_value_2);
            if (comparison_2_inner_value>0) {
              colorizeKPIsecondary(
                config.main_element_positive_color,
                comparison_color_mode,
                kpi)
                document.getElementById(kpi + "-2-sign").innerHTML = "▴";
            } else if (comparison_2_inner_value<0) {
              colorizeKPIsecondary(
                config.main_element_negative_color,
                comparison_color_mode,
                kpi)
                document.getElementById(kpi + "-2-sign").innerHTML = "▾";
            }
          }

          if (only_show_icon=="icon") {
            hideEverythingBut("icon", kpi);
            document.getElementById(kpi + "-icon").style.display = "inline-block";
            document.getElementById(kpi + "-icon").setAttribute("size", "50vh");
          } else if (only_show_icon=="icon_and_title") {
            hideEverythingBut("icon_and_title", kpi);
            document.getElementById(kpi + "-icon").style.display = "inline-block";
            document.getElementById(kpi + "-title").setAttribute("size", "15vh");
            document.getElementById(kpi + "-icon").setAttribute("size", "45vh");
          } else if (only_show_icon=="icon_narrow")  {
            hideEverythingBut("icon", kpi); 
            document.getElementById(kpi + "-icon").style.display = "inline-block";
            document.getElementById(kpi + "-icon").setAttribute("size", "30vh");
          } else {
            showMainElements(kpi);
          }

  }

  let icon_positive_color = config.main_element_icon_positive_color;
  let icon_negative_color = config.main_element_icon_negative_color;
  let neutral_color = config.main_element_neutral_color;
  
  const icons_and_values_mode = config.main_element_icons_and_values_mode;

  if (icons_and_values_mode) {
    document.getElementById("kpi-1" + "-icon").style.display = "inline-block";
    document.getElementById("kpi-2" + "-icon").style.display = "inline-block";
    document.getElementById("kpi-3" + "-icon").style.display = "inline-block";     
  } else {
    document.getElementById("kpi-1" + "-icon").style.display = "none";
    document.getElementById("kpi-2" + "-icon").style.display = "none";
    document.getElementById("kpi-3" + "-icon").style.display = "none";     
  }

  let active_kpi = 0;
  let narrow_kpis = 0;

  let kpi_config = "kpi_1";
  let kpi = "kpi-1"
  let column_value = config;

    let comparison_color_mode = config[kpi_config + "_comparison_color_mode"];
    let comparison_column_1_value = config[kpi_config + "_comparison_column_1"];
    let comparison_column_2_value = config[kpi_config + "_comparison_column_2"];
    let comparison_icon_negative = config[kpi_config + "_comparison_icon_negative"];
    let comparison_icon_positive = config[kpi_config + "_comparison_icon_positive"];
    let comparison_text_color = config[kpi_config + "_comparison_text_color"];
    let comparisons_visible = config[kpi_config + "_comparisons_visible"];
    let icon = config[kpi_config + "_icon"];
    let icon_color = config[kpi_config + "_icon_color"];
    let only_show_icon = config[kpi_config + "_only_show_icon"];
    let size = config[kpi_config + "_size"];
    let title = config[kpi_config + "_title"];
    let title_color = config[kpi_config + "_title_color"];
    let value_color = config[kpi_config + "_value_color"];
    let comparison_1_comparative = config[kpi_config + "_comparison_1_not_comparative"];
    let comparison_2_comparative = config[kpi_config + "_comparison_2_not_comparative"];
    let progress_bar = config[kpi_config + "_comparison_1_progress_bar"];
    let progress_color_foreground = config[kpi_config + "_comparison_1_progress_bar"];
    let progress_color_background = config[kpi_config + "_comparison_1_progress_bar"];

    if (column_value!=undefined) {
      document.getElementById(kpi).style.display = "block ";
      active_kpi++;
      if (only_show_icon=="icon_narrow") {
        narrow_kpis++;
      }
      applyKPIsettings()
    } else {
      document.getElementById(kpi).style.display = "none";
    }

    kpi_config = "kpi_2";
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
    comparison_1_comparative = config.kpi_2_comparison_1_not_comparative
    comparison_2_comparative = config.kpi_2_comparison_2_not_comparative
    progress_bar = config[kpi_config + "_comparison_1_progress_bar"];
    progress_color_foreground = config[kpi_config + "_comparison_1_progress_bar"];
    progress_color_background = config[kpi_config + "_comparison_1_progress_bar"];
 
    if (column_value!=undefined) {
      document.getElementById(kpi).style.display = "block ";
      if (config.main_element_dividers_between_kpis == true) {
        document.getElementById(kpi + "-divider").style.display = "block";
      } else {
        document.getElementById(kpi + "-divider").style.display = "none";
      }
      active_kpi++;
      if (only_show_icon=="icon_narrow") {
        narrow_kpis++;
      }
      applyKPIsettings()
    } else {
      document.getElementById(kpi).style.display = "none";
      document.getElementById(kpi + "-divider").style.display = "none";
    }

    kpi_config = "kpi_3";
    kpi = "kpi-3"
      column_value = config.kpi_3_column;
      comparison_color_mode = config.kpi_3_comparison_color_mode;
      comparison_column_1_value = config.kpi_3_comparison_column_1;
      comparison_column_2_value = config.kpi_3_comparison_column_2;
      comparison_icon_negative = config.kpi_3_comparison_icon_negative;
      comparison_icon_positive = config.kpi_3_comparison_icon_positive;
      comparison_text_color = config.kpi_3_comparison_text_color;
      comparisons_visible = config.kpi_3_comparisons_visible;
      icon = config.kpi_3_icon;
      icon_color = config.kpi_3_icon_color;
      only_show_icon = config.kpi_3_only_show_icon;
      size = config.kpi_3_size;
      title = config.kpi_3_title;
      title_color = config.kpi_3_title_color;
      value_color = config.kpi_3_value_color;
      comparison_1_comparative = config.kpi_3_comparison_1_not_comparative
      comparison_2_comparative = config.kpi_3_comparison_2_not_comparative
      progress_bar = config[kpi_config + "_comparison_1_progress_bar"];
      progress_color_foreground = config[kpi_config + "_comparison_1_progress_bar"];
      progress_color_background = config[kpi_config + "_comparison_1_progress_bar"];
    
      if (column_value!=undefined) {
        document.getElementById(kpi).style.display = "block ";
        if (config.main_element_dividers_between_kpis == true) {
          document.getElementById(kpi + "-divider").style.display = "block";
        } else {
          document.getElementById(kpi + "-divider").style.display = "none";
        }
        active_kpi++;
        if (only_show_icon=="icon_narrow") {
          narrow_kpis++;
        }
        applyKPIsettings()
      } else {
        document.getElementById(kpi).style.display = "none";
        document.getElementById(kpi + "-divider").style.display = "none";
      }

    let kpi_width = (100- (active_kpi*4 - 5))/((active_kpi-narrow_kpis)+narrow_kpis*0.5) - 1 ;
    if (config.kpi_1_only_show_icon == "icon_narrow") {
      document.getElementById("kpi-1").style.width = kpi_width*0.5 + "%";
    } else {
      document.getElementById("kpi-1").style.width = kpi_width + "%";
    }
    if (config.kpi_2_only_show_icon == "icon_narrow") {
      document.getElementById("kpi-2").style.width = kpi_width*0.5 + "%";
    } else {
      document.getElementById("kpi-2").style.width = kpi_width + "%";
    }
    if (config.kpi_3_only_show_icon == "icon_narrow") {
      document.getElementById("kpi-3").style.width = kpi_width*0.5 + "%";
    } else {
      document.getElementById("kpi-3").style.width = kpi_width + "%";
    }
    
    done()
    }
});