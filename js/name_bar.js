var width = 700,
    height = 400;

var y = d3.scale.linear()
    .range([height, 0]);

var chart = d3.select("#namebar")
    .attr("width", width)
    .attr("height", height);

var data = [ 30,75,36,80,90,82]


y.domain([0, d3.max(data, function(d) { return d; })]);

var barWidth = width / data.length;

var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });

bar.append("rect")
    .attr("y", function(d) { return y(d); })
    .attr("height", function(d) { return height - y(d); })
    .attr("width", barWidth - 1);

bar.append("text")
    .attr("x", barWidth / 2)
    .attr("y", function(d) { return y(d) + 3; })
    .attr("dy", ".75em")
    .text(function(d) { return d; });


function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}
