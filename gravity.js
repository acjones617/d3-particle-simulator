// Make the linter happy.
var d3 = d3;
var Circle = Circle;
var resumeForce = resumeForce;
var updateForce = updateForce;
var resetForce = resetForce;
var onTick = onTick;
var collide = collide;
// End of linter.

var between = function (min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

var createParticles = function (numParticles,
  sizeRange, locationXRange, locationYRange) {
  return d3.range(numParticles).map(function () {
    return new Circle(
      between.apply(null, locationXRange || [10, window.innerWidth - 10]),
      between.apply(null, locationYRange || [10, window.innerHeight - 10]),
      between.apply(null, sizeRange || [2, 4]));
  });
};

var updateParticles = function (svg, data, color) {
  svg.selectAll("circle")
      .data(data.slice(1))
    .enter().append("svg:circle")
      .attr("r", function (d) { return d.r; })
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; })
      .style("fill", function (d, i) { return color(i % 3); });
};
