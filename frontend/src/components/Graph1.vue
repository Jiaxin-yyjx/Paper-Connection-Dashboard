<template>
    <div>
      <h3>Top 10 Same Keywords</h3>
      <svg></svg>
    </div>
</template>

<script>
  import * as d3 from "d3";
  export default {
    data() {
      return {};
    },
    mounted() {
      const width = 500;
      const height = 350;
      const data = this.$store.state.files.map((file) => ({name: file.name}))

      const counts = data.reduce((acc, curr) => {
        acc[curr.name] = (acc[curr.name] || 0) + 1;
        return acc;
        }, {});
        const dataC = Object.entries(counts)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count) // sort by count in descending order
          .slice(0, 10);

      console.log(dataC);
      
    //   [{ Country: "United States", Value: 12394 },
    // { Country: "Russia", Value: 6535 },
    // { Country: "Germany", Value: 1684 },
    // { Country: "France", Value: 2192 },
    // { Country: "United Kingdom", Value: 1218 },
    // { Country: "China", Value: 1147 },
    // { Country: "Spain", Value: 839 },
    // { Country: "Netherlands", Value: 1167 },
    // { Country: "Italy", Value: 660 },
    // { Country: "Israel", Value: 1032 }];

    const margin = { top: 10, right: 10, bottom: 30, left: 50 };
    const svg = d3.select("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom)
    .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // const svg = d3.select("svg").attr("width", width).attr("height", height);
      
      // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 30])
    .range([ 0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Y axis
  var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(dataC.map(function(d) { return d.name; }))
    .padding(.1);
  svg.append("g")
    .call(d3.axisLeft(y))
  
     //Bars
  svg.selectAll("myRect")
    .data(dataC)
    .enter()
    .append("rect")
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.name); })
    .attr("width", function(d) { return x(d.count); })
    .attr("height", y.bandwidth() )
    .attr("fill", "#69b3a2")

  }
}
     
</script>