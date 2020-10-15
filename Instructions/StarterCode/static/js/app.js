// // // //Use LiveServer extension for VSCode to get this work as per Jay's
// // // //instructions on Slack

// create the function that gets the data and creates the plots for the id 
function getPlot(id) {
    
    // get the data from the json file
    d3.json("samples.json").then((data)=> {
        console.log(data)

        var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Freq: ${wfreq}`)

        // filter sample values by id 
        var samples = data.samples.filter(s => s.id.toString() === id)[0];

        console.log(samples);