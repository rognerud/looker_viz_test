looker.plugins.visualizations.add({

    options: {
        icon: {
            type: "string",
            placeholder: "rocket"
        }
    },

    create: function(element, config) {
        var container = element.appendChild(document.createElement("div"));
                container.className = "google-timeline";

        // Create an element to contain the text.
        this._textElement = container.appendChild(document.createElement("div", id="chart_div"));
        google.charts.load("current", {packages:["timeline"]});
        this.container = document.getElementById('chart_div');
        this.chart = new google.visualization.Timeline(container);
},  

          // Render in response to the data or settings changing
    updateAsync: function(data, element, config, queryResponse, details, done) {
        
        const chart = this.svg

        // Clear any errors from previous updates
        this.clearErrors();

        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'string', id: 'Position' });
        dataTable.addColumn({ type: 'string', id: 'Name' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
            [ 'President', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
            [ 'President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4) ],
            [ 'President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4) ],
            [ 'Vice President', 'John Adams', new Date(1789, 3, 21), new Date(1797, 2, 4)],
            [ 'Vice President', 'Thomas Jefferson', new Date(1797, 2, 4), new Date(1801, 2, 4)],
            [ 'Vice President', 'Aaron Burr', new Date(1801, 2, 4), new Date(1805, 2, 4)],
            [ 'Vice President', 'George Clinton', new Date(1805, 2, 4), new Date(1812, 3, 20)],
            [ 'Secretary of State', 'John Jay', new Date(1789, 8, 25), new Date(1790, 2, 22)],
            [ 'Secretary of State', 'Thomas Jefferson', new Date(1790, 2, 22), new Date(1793, 11, 31)],
            [ 'Secretary of State', 'Edmund Randolph', new Date(1794, 0, 2), new Date(1795, 7, 20)],
            [ 'Secretary of State', 'Timothy Pickering', new Date(1795, 7, 20), new Date(1800, 4, 12)],
            [ 'Secretary of State', 'Charles Lee', new Date(1800, 4, 13), new Date(1800, 5, 5)],
            [ 'Secretary of State', 'John Marshall', new Date(1800, 5, 13), new Date(1801, 2, 4)],
            [ 'Secretary of State', 'Levi Lincoln', new Date(1801, 2, 5), new Date(1801, 4, 1)],
            [ 'Secretary of State', 'James Madison', new Date(1801, 4, 2), new Date(1809, 2, 3)]
        ]);
    
        chart.draw(dataTable);

        // We are done rendering! Let Looker know.
        done()
        }
    });