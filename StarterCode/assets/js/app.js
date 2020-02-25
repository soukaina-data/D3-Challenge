var width=parseInt(d3.select("#scatter").style("width"));
var height=width-width/3.9;
var margin=20;
var labelArea=110;
var tPadBot=40;
var tPadLeft=40;

var svg=d3
        .select('#scatter')
        .append('svg')
        .attr('width',width)
        .attr('height',height)
        .attr('class','chart')
        .style('background','white')

var circRadius;
function crGet() {
    if (width<=530) {
        circRadius=7;
    } else {
        circRadius=14;
    }
}
crGet();

svg
    .append('g')
    .attr('class','xText');

 var xText=d3.select('.xText');

 function xTextRefresh() {
     xText
        .attr('transform', `translate(${((width-labelArea)/2 + labelArea)},
        ${(height-margin-tPadBot)})`);
 };
 xTextRefresh();

 xText
    .append('text')
    .text('In poverty (%)')
    .attr('y',-26)
    .attr('data-name','poverty')
    .attr('data-axis','x')
    .attr('class','aText active x')
xText
    .append('text')
    .text('Age (Median)')
    .attr('y',0)
    .attr('data-name','age')
    .attr('data-axis','x')
    .attr('class','aText inactive x')
xText
    .append('text')
    .text('Househole Incom (Median)')
    .attr('y',26)
    .attr('data-name','income')
    .attr('data-axis','x')
    .attr('class','aText inactive x')
    
    var leftTextX=margin+tPadLeft;
var leftTextY=(height+labelArea)/2-labelArea;

svg
    .append('g')
    .attr('class','yText');
    
var yText=d3.select('.yText');

function yTextRefresh() {
    yText
    .attr('transform',`translate(${leftTextX},${leftTextY})rotate (-90)`);
};
yTextRefresh();

yText
   .append('text')
   .text('Obese (%)')
   .attr('y',-26)
   .attr('data-name','obesity')
   .attr('data-axis','y')
   .attr('class','aText active y')
yText
   .append('text')
   .text('Smokes (%)')
   .attr('y',0)
   .attr('data-name','smokes')
   .attr('data-axis','y')
   .attr('class','aText inactive y')
yText
   .append('text')
   .text('Lacks Healthcare (%)')
   .attr('y',26)
   .attr('data-name','healthcare')
   .attr('data-axis','y')
   .attr('class','aText inactive y')

