looker.plugins.visualizations.add({

  options: {
      font_size: {
        type: "string",
        label: "Font Size",
        values: [
          {"Large": "large"},
          {"Small": "small"}
        ],
        display: "radio",
        default: "large"
      },
      icon: {
        type: "string",
        placeholder: "rocket"
      }
    },
    // Set up the initial state of the visualization
    create: function(element, config) {
  
      
      // Insert a <style> tag with some styles we'll use later.
      element.innerHTML = `
        <style>
          .hello-world-vis {
            /* Vertical centering */
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
          .hello-world-text-large {
            font-size: 72px;
          }
          .hello-world-text-small {
            font-size: 18px;
          }
        </style>
        <box-icon name="rocket"></box-icon>
        <box-icon  type="solid" name="rocket"></box-icon>
        `;
  
      // Create a container element to let us center the text.
      var container = element.appendChild(document.createElement("div"));
      container.className = "hello-world-vis";
  
      // Create an element to contain the text.
      this._textElement = container.appendChild(document.createElement("div"));
  
    },
    // Render in response to the data or settings changing
    updateAsync: function(data, element, config, queryResponse, details, done) {
  
      // Clear any errors from previous updates
      this.clearErrors();
  
      // Throw some errors and exit if the shape of the data isn't what this chart needs
      if (queryResponse.fields.dimensions.length == 0) {
        this.addError({title: "No Dimensions", message: "This chart requires dimensions."});
        return;
      }

      function addBoxIconToElement(element, config) {
        var boxIcon = document.createElement('box-icon');
        boxIcon.setAttribute('name', config.icon);
        element.appendChild(boxIcon);
      }

      function getDataFromLooker(data, queryResponse) {
        var dataFromLooker = [];
        for (var row of data) {
          var rowToPush = {};
          for (var cell of queryResponse.fields.dimensions) {
            rowToPush[cell.name] = row[cell.name].value;
          }
          dataFromLooker.push(rowToPush);
        }
        return dataFromLooker;
      }

      // Grab the first cell of the data
      var firstRow = data[0];
      var firstCell = firstRow[queryResponse.fields.dimensions[0].name];
  
      // Insert the data into the page
      this._textElement.innerHTML = LookerCharts.Utils.htmlForCell(firstCell);
  
      // Set the size to the user-selected size
      if (config.font_size == "small") {
        this._textElement.className = "hello-world-text-small";
      } else {
        this._textElement.className = "hello-world-text-large";
      }
  
      // We are done rendering! Let Looker know.
      done()
    }
  });