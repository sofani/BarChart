

   var url  = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";
   var xl = [];
   var yl = [];


   var d3 = Plotly.d3;

   var WIDTH_IN_PERCENT_OF_PARENT = 60;
   var HEIGHT_IN_PERCENT_OF_PARENT = 80;

   var gd3 = d3.select('body').append('div').style({
         width: WIDTH_IN_PERCENT_OF_PARENT + '%',
        'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

        height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
        'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
    });

    var gd = gd3.node();


   Plotly.d3.json(url, function(figure) {
       var data = figure.data;
       for (var i = 0; i < data.length; i++) {
    			 xl.push(data[i][0])
    			 yl.push(data[i][1]) 

		    }
        var trace = {
    			 x: xl,
    			 y: yl,
           marker: {
             color: 'rgb(55, 83, 109)'
           },
           type:'bar',
         }
         var layout = {
               title: "USA GDP from January 1st 1947 to July 1st 2015",
               yaxis:{
                title: "USA GDP"

               },
               xaxis: {
                title: "Date"
               } ,
               autosize: false,
               width: 800,
               height: 400,
               margin: {
                  l: 50,
                  r: 50,
                  b: 100,
                  t: 100,
                  pad: 4
              },
                
        }
       
        Plotly.plot(document.getElementById("graph"), [trace], layout, {displayModeBar: false}, gd);
        window.addEventListener('resize', function() { 
          Plotly.Plots.relayout(gd); 
        });

   });

 

