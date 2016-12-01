var width = 700,
    height = 400;

var y = d3.scale.linear()
    .range([height, 0]);

var chart = d3.select("#namebar")
    .attr("width", width)
    .attr("height", height);

var data = [ {"C": "food", "V": 30, "T": ["apple", "Papaya"]},
             {"C": "'3' Letters ", "V": 75, "T": ["H.O.T","EXO"]},
             {"C": "Colors", "V": 30, "T": ["BlackPink"]},
             {"C": "Gender", "V":80, "T": ["Girl's Generation"]},
             {"C": "Numbers", "V": 90, "T": ["2pm"]},
             {"C": "Single letter", "V": 83, "T": ["J-Walk"]}];




y.domain([0, d3.max(data, function(d) { return d.V; })]);

var barWidth = width / data.length;

var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });

bar.append("rect")
    .attr("y", function(d) { return y(d.V); })
    .attr("height", function(d) { return height - y(d.V); })
    .attr("width", barWidth - 5);


var names = bar.append("text")
    
    .attr("text-anchor", "start")
    .attr("y", function(d){ return y(d.V);})
    .style("fill-opacity", 1);

names.selectAll('tspan')
      .data(function(d){        
        return d.T ;  
      })
      .enter()
      .append('tspan')
      .attr("x", 100)
      .attr('dy', function(d,i){
      return (1) + "em";
    })
      .text(function(d){
          console.log(d);
        return d;   
      });







