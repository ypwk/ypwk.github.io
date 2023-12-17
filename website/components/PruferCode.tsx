import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { SimulationNodeDatum } from "d3";

interface Node extends SimulationNodeDatum {
  index: number;
  in: number;
  out: number;
}

interface Link {
  source: Node;
  target: Node;
}

const PruferCodeAnimation = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    function dragStarted(
      event: d3.D3DragEvent<SVGCircleElement, Node, Node>,
      d: Node
    ) {
      if (!event.active) force.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(
      event: d3.D3DragEvent<SVGCircleElement, Node, Node>,
      d: Node
    ) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnded(
      event: d3.D3DragEvent<SVGCircleElement, Node, Node>,
      d: Node
    ) {
      if (!event.active) force.alphaTarget(0).restart();
      d.fx = null;
      d.fy = null;
    }

    const svgElement = svgRef.current;
    if (!svgElement) {
      return;
    }
    const w = svgElement.clientWidth;
    const h = svgElement.clientHeight;

    const fbBlue = d3.rgb("#3b5998");
    const fill = [
      fbBlue.brighter(2),
      fbBlue.brighter(),
      fbBlue,
      fbBlue.darker(),
    ];

    const nodes: Node[] = d3.range(1, 13).map((i) => ({
      index: i,
      in: 0,
      out: 0,
      x: Math.random() * w,
      y: Math.random() * h,
    }));

    const links = [
      { source: nodes[5], target: nodes[8] },
      { source: nodes[6], target: nodes[8] },
      { source: nodes[0], target: nodes[8] },
      { source: nodes[4], target: nodes[6] },
      { source: nodes[1], target: nodes[6] },
      { source: nodes[2], target: nodes[4] },
      { source: nodes[9], target: nodes[1] },
      { source: nodes[10], target: nodes[0] },
      { source: nodes[7], target: nodes[0] },
      { source: nodes[3], target: nodes[5] },
      { source: nodes[11], target: nodes[3] },
    ];

    links.forEach((link) => {
      nodes[link.source.index - 1].out++;
      nodes[link.target.index - 1].in++;
    });

    const svg = d3.select(svgRef.current).attr("width", w).attr("height", h);

    const handleResize = () => {
        if (!svgElement || !svg) {
          return;
        }
        const width = svgElement.clientWidth;
        const height = svgElement.clientHeight;
  
        svg.attr("width", width).attr("height", height);
        force.force("center", d3.forceCenter(width / 2, height / 2));
        force.alpha(1).restart(); // Restart simulation with new settings
      };
  
      window.addEventListener("resize", handleResize);

    const force = d3
      .forceSimulation<Node>(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => Number(d.index))
          .distance(30)
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(w / 2, h / 2));

    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link");

    const drag = d3
      .drag<SVGCircleElement, Node>()
      .on("start", dragStarted)
      .on("drag", dragged)
      .on("end", dragEnded);

    const node = svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("r", 10)
      .style("fill", (d) => fill[Math.floor((d.in + 1) / 3)].toString())
      .call(drag); // Apply the drag behavior

    const label = svg
      .selectAll(".label")
      .data(nodes)
      .enter()
      .append("text")
      .attr("class", "label")
      .text((d) => String(d.index + 1));

    force.on("tick", () => {
      link
        .attr("x1", (d) => Number(d.source.x))
        .attr("y1", (d) => Number(d.source.y))
        .attr("x2", (d) => Number(d.target.x))
        .attr("y2", (d) => Number(d.target.y));

      node.attr("cx", (d) => Number(d.x)).attr("cy", (d) => Number(d.y));

      label.attr("x", (d) => Number(d.x)).attr("y", (d) => Number(d.y) + 5);
    });

    svg.style("opacity", 1e-6).transition().duration(1000).style("opacity", 1);

    d3.select(svgRef.current).on("dblclick", () => {
      nodes.forEach((o) => {
        o.x = (o.x ?? 0) + (Math.random() - 0.5) * 200;
        o.y = (o.y ?? 0) + (Math.random() - 0.5) * 200;
      });
      force.alpha(0.1).restart();
    });

    return () => {
      // Cleanup when the component unmounts
      svg.selectAll("*").remove();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <svg ref={svgRef} width="100%" height="100%" className="prufer" />;
};

export default PruferCodeAnimation;
