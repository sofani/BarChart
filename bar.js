

   var url  = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";
   var xl = [];
   var yl = [];
  
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
               // autosize: true,
               width: 0,
               height: 0,

               margin: {
                  l: 100,
                  r: 50,
                  b: 100,
                  t: 100,
                  pad: 4
               },
                
        }
        
       //  var d3 = Plotly.d3;
       //  var WIDTH_IN_PERCENT_OF_PARENT = 80;
       //  var HEIGHT_IN_PERCENT_OF_PARENT = 0;

       // var gd3 = d3.select('body').append('div').style({

       //        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
       //        'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
       //        height: HEIGHT_IN_PERCENT_OF_PARENT + '%',    
       //        'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + '%'
       //  });
        
       //  var gd = gd3.node();

        Plotly.plot(document.getElementById('graph'),  [trace], layout, {displayModeBar: false});
         // Plotly.plot(document.getElementById('graph1'),  [trace], layout, {displayModeBar: false});
       window.onresize = function() {
       
          Plotly.Plots.resize(document.getElementById('graph'));

          // Plotly.Plots.resize(document.getElementById('graph1'));
       };

   });


    
