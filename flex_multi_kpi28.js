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
      kpi_1_positive_icon: {
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
          {"Color comparison": "comparison-both"},
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
    },
  
    create: function(element, config) {
  
      // Insert a <style> tag with some styles we'll use later.
      element.innerHTML = `
      <style>
        .card {
          margin: 0px 0px 0rem;
          padding: 0px;
          font-family: "Google Sans", "Noto Sans", "Noto Sans JP", "Noto Sans CJK KR", "Noto Sans Arabic UI", "Noto Sans Devanagari UI", "Noto Sans Hebrew", "Noto Sans Thai UI", Helvetica, Arial, sans-serif;
          box-sizing: border-box;
          display: block;
          font-size: 1.17em;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }

        .card-block {
          -webkit-box-align: center;
          align-items: center;
          flex-direction: column;
          height: 100%;
          -webkit-box-pack: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          width: 100%;
          max-height: 100%;
        }

        .card-main {
          width: 100%;
          display: flex;
          justify-content: stretch;
          flex-direction: column;
          padding: 0px 12px;
        }

        .card-comparison {
          max-width: 100%;
          flex: 1 1 0%;
          display: flex;
          -webkit-box-align: stretch;
          align-items: stretch;
          -webkit-box-pack: end;
          justify-content: flex-end;
          overflow-y: auto;
          flex-direction: column;
          margin-bottom: 0.75rem;
        }

        .kpi-value {
          font-size: 2.25rem;
          letter-spacing: -1px;
          text-align: center;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 400;
          line-height: 1.5em;
        }
        .kpi-title {
          font-size: 0.875rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 1.25rem;
          text-align: centre
        }
        .kpi-comparison {
          font-family: inherit;
          margin: 0px;
          padding: 0px 0.75rem;
          min-width: 1px;
          width: 100%;
          display: flex;
          height: 36px;
          position: absolute;
          bottom: 0px;
          left: 0px;
          flex: 1 1 0%;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
        }

      </style>
      <div class="card">
      <div class="card-block">
        <div class="card-main">
          <div class="kpi-icon id="kpi-1-icon></div>
          <div class="kpi-value" id="kpi-1-value">100 000</div>
          <div class="kpi-title" id="kpi-1-title">users</div>
        </div>
        <div class="card-comparison">
          <div style="width: 100%; height: 36px;">
            <div class="kpi-comparison">
              <span class="kpi-comparison-value" id="kpi-1-1-value">5%</span>
              <span class="kpi-comparison-title" id="kpi-1-1-title">ly</span>
              </div>
          </div>
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

      var kpi_1_column = all_columns.at(config.kpi_1_column);

      if (kpi_1_comparison_column_1 != null) {
        var kpi_1_comparison_column_1 = all_columns.at(config.kpi_1_comparison_column_1);
        if (config.kpi_1_comparison_title_1 == null) {
          var kpi_1_comparison_title_1 = config.kpi_1_comparison_title_1;
        } else {
          var kpi_1_comparison_title_1 = all_columns.at(config.kpi_1_comparison_column_1);
        }
        
      }

      if (kpi_1_comparison_column_2 != null) {
        var kpi_1_comparison_column_2 = all_columns.at(config.kpi_1_comparison_column_2);
      }

      if (config.kpi_1_icon != null) {
        var kpi_1_icon = config.kpi_1_icon;
      }

      var kpi1_value = firstRow[kpi1.name].value;
      
      if (config.kpi_1_title != null) {
        var kpi_1_title = config.kpi_1_title;
      } else {
        var kpi_1_title = kpi_1_column.label_short;
      }
      if (config.kpi_1_comparison_1_title != null) {
        var kpi_1_comparison_1_title = config.kpi_1_comparison_1_title;
      } else {
        var kpi_1_comparison_1_title = kpi_1_column.label_short;
      }
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