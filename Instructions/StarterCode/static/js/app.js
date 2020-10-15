// use Live server VS Code extension to in browser
//workaround instead of

function getPlot(id) {
    
    // get the data from the json file
    d3.json("samples.json").then((data)=> {
        console.log(data)

        // var names = data.metadata.map(d => d.names)
      
        var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Freq: ${wfreq}`)

        // var idOtu = idValues.map(d => "OTU " + d)
        // var labels = samples.otu_labels.slice(0, 10);
        var samples = data.samples.filter(s => s.id.toString() === id)[0];
        console.log(samples);

        // var wfreq = data.wfreq.filter(s => s.wfreq.toString() === wfreq)[0];
        // console.log(wfreq);

        // var idValues = (samples.otu_ids.slice(0, 10)).reverse();
        var sampleValues = samples.sample_values.slice(0, 10).reverse();

        // get only top 10 otu ids for the plot
        var idValues = (samples.otu_ids.slice(0, 10)).reverse();
        
        // get the otu id's to the desired form for the plot
        var idOtu = idValues.map(d => "OTU " + d)

        console.log(`OTU IDS: ${idOtu}`)

        // get the top 10 labels for the plot
        var labels = samples.otu_labels.slice(0, 10);

        console.log(`Sample Values: ${sampleValues}`)
        console.log(`Id Values: ${idValues}`)

       
//     function optionChanged(id) {
//         getPlot(id);
//         getInfo(id);
// }

// // create the function for the initial data rendering
// function init() {
//     // select dropdown menu 
//     var dropdown = d3.select("#selDataset");

//     // read the data 
//     d3.json("samples.json").then((data)=> {
//         console.log(data)

//         // get the id data to the dropdwown menu
//         data.names.forEach(function(name) {
//             dropdown.append("option").text(name).property("value");
//         });

//         // call the functions to display the data and the plots to the page
//         getPlot(data.names[0]);
//         getInfo(data.names[0]);
//     });

        
        // trace for bar graph
        var trace = {
            x: sampleValues,
            y: idOtu,
            text: labels,
            type:"bar",
            orientation: "h",
        };

        //data variable
        var data = [trace];

        // create layout variable to set plots layout
        var layout = {
            title: "Top 10 OTU",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 200,
                r: 150,
                t: 45,
                b: 25
            }
        };

        // Bar Plot
        Plotly.newPlot("bar", data, layout);

        //console.log(`ID: ${samples.otu_ids}`)
        
        // Bubble Chart Trace
        var trace1 = {
            x: samples.otu_ids,
            y: samples.sample_values,
            mode: "markers",
            marker: {
                size: samples.sample_values,
                color: samples.otu_ids
            },
            text: samples.otu_labels

        };

        // Bubbl plot layout
        var layout = {
            title: "Bubble Plot",
            xaxis:{title: "OTU ID"},
            height: 600,
            width: 1300
        };

        // Data variable
        var data1 = [trace1];

        // Bubble plot
        Plotly.newPlot("bubble", data1, layout); 

        //  // create the bubble plot
        // Plotly.newPlot("bubble", data1, layout); 

        //creating gauge graph
        // var tracePie = [
        //     {
        //       domain: { x: [0, 1], y: [0, 1] },
        //       value: 450,
        //       title: { text: "Speed" },
        //       type: "indicator",
        //       mode: "gauge+number",
        //       delta: { reference: 400 },
        //       gauge: { axis: { range: [null, 500] } }
        //     }
        //   ];
          
        //   var layout = { width: 600, height: 400 };
        //   Plotly.newPlot('myDiv', data, layout);








        // creating gauge graph
        // var traceGauge = {
        //      title: "Belly Button Scrubs per Week",
        //      labels: idValues,
        //      values: wfreq,
        //      type:"indicator",
        //      mode: "gauge+number+delta",
        //      delta: {refrence: 400},
        //      gauge: {
        //          steps: [
        //              {range: [1, 100], color: "gray"},
        //              {range: [1, 250], color: "lightgray"}
        //          ],
        //          threshold: {
        //              line: {color: "red", width: 4 },
        //              thickness: 0.75,
        //              value: 550
        //          }
        //      }

        //  };
        //  var layout = { width: 600, height: 400, margin: {t: 0, b:0 } };

        // var traceGauge = [
        //     {
        //         domain: { x: [0, 1], y: [0, 1] },
        //         value: wfreq,
        //         title: { text: "Speed" },
        //         type: "indicator",
        //         mode: "gauge+number"
        //     }
        // ];
        
        // var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        // Plotly.newPlot('myDiv', data, layout);


        var data = [
            {
            //   domain: { x: [0, 1], y: [0, 1] },
              value: 3,
              title: { text: "Washings" },
              type: "indicator",
              mode: "gauge+number",
              delta: { reference: 10 },
              gauge: { axis: { range: [0, 10] } }
            }
          ];
          
          var layout = { width: 600, height: 400 };
          Plotly.newPlot('gauge', data, layout);
     
     Plotly.newPlot("gauge", data, layout)

 });      
}

// create the function to get the necessary data
function getInfo(id) {
    // read the json file to get data
    d3.json("samples.json").then((data)=> {
        
        // get the metadata info for the demographic panel
        var metadata = data.metadata;

        console.log(metadata)

        // filter meta data info by id
        var result = metadata.filter(meta => meta.id.toString() === id)[0];

        // select demographic panel to put data
        var demographicInfo = d3.select("#sample-metadata");
        
        // empty the demographic info panel each time before getting new id info
        demographicInfo.html("");

        // grab the necessary demographic data data for the id and append the info to the panel
        Object.entries(result).forEach((key) => {   
                demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
        });
    });
}

// create the function for the change event
function optionChanged(id) {
    getPlot(id);
    getInfo(id);
}

// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // read the data 
    d3.json("samples.json").then((data)=> {
        console.log(data)

        // get the id data to the dropdwown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        // call the functions to display the data and the plots to the page
        getPlot(data.names[0]);
        getInfo(data.names[0]);
    });
    
}

init();

// function buildGauge(wfreq) {
//     d3.json("samples.json").then((data)=> {
//         console.log(data) }

//     var data = [
//         {
//             domain: { x: [0, 1], y: [0, 1] },
//             value: 270,
//             title: { text: "Speed" },
//             type: "indicator",
//             mode: "gauge+number"
//         }
//     ];
    
//     var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
//     Plotly.newPlot('myDiv', data, layout);

//     }
//     {
//     let GAUGE = document.getElementById("gauge");
//     Plotly.newPlot(GAUGE, data, layout);
// }

// var wfreq = data.metadata.map(d => d.wfreq)
// // var samples = data.samples.filter(s => s.id.toString() === id)[0];  

// // var gauge = [
// // 	{
// // 		domain: { x: [0, 1], y: [0, 1] },
// // 		value: samples,
// // 		title: { text: "Speed" },
// // 		type: "indicator",
// // 		mode: "gauge+number"
// // 	}
// // ];

// // var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
// // Plotly.newPlot('gauge', gauge, layout);



// var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 15, 13, 17],
//     mode: 'markers',
//     type: 'scatter'
//   };
  
//   var trace2 = {
//     x: [2, 3, 4, 5],
//     y: [16, 5, 11, 9],
//     mode: 'lines',
//     type: 'scatter'
//   };
  
//   var trace3 = {
//     x: [1, 2, 3, 4],
//     y: [12, 9, 15, 12],
//     mode: 'lines+markers',
//     type: 'scatter'
//   };
  
//   var gauge = [trace1, trace2, trace3];
  
//   Plotly.newPlot('myDiv', gauge);