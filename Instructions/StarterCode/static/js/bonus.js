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