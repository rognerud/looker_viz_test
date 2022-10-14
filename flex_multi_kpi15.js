looker.plugins.visualizations.add({

  options: {
      kpi_1_column: {
        type: "number",
        label: "column number for kpi 1",
        display: "number",
        section: "KPI1",
        default: 0
      },
      kpi_1_comparison_enabled: {
        label: "KPI 1 Comparison Enable",
        type: "boolean",
        section: "KPI1-1",
        default: false
      },
      kpi_1_comparison_column: {
        type: "number",
        label: "column number for kpi 1 comparison",
        display: "number",
        section: "KPI1-1",
        default: 1
      },

    },
  
    create: function(element, config) {
  
      // Insert a <style> tag with some styles we'll use later.
      element.innerHTML = `
      <style>
        font-family: "Google Sans", Roboto, "Noto Sans JP", "Noto Sans", "Noto Sans CJK KR", Helvetica, Arial, sans-serif;
        display: flex;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        margin: 10px;ø
        height: 100%;
      </style>
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
      console.log(queryResponse)
      all_columns = all_columns.concat(queryResponse.fields.dimensions);
      all_columns = all_columns.concat(queryResponse.fields.measures);
      console.log(all_columns);
      var kpi1 = all_columns[config.kpi_1_column];
      console.log("kpi1: " + kpi1);
      console.log("kpi1: " + kpi1.value);

      function addKPI(kpi, element) {
        var kpi_element = document.createElement("div");
        kpi_element.className = "kpi";
        kpi_element.innerHTML = kpi;
        document.getElementById('flex-multi-kpi').appendChild(kpi_element);
      }

      addKPI(kpi1, element);
      // We are done rendering! Let Looker know.
      done()
    }
});