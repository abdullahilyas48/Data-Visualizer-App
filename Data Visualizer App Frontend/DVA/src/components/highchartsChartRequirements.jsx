const highchartsChartRequirements = {
  // Basic
  line:          { needsX: true, needsY: true, needsZ: false },
  spline:        { needsX: true, needsY: true, needsZ: false },
  area:          { needsX: true, needsY: true, needsZ: false },
  areaspline:    { needsX: true, needsY: true, needsZ: false },
  column:        { needsX: true, needsY: true, needsZ: false },
  bar:           { needsX: true, needsY: true, needsZ: false },
  scatter:       { needsX: true, needsY: true, needsZ: false },
  pie:           { needsX: true, needsY: true, needsZ: false },
  bubble:        { needsX: true, needsY: true, needsZ: true, needsLabel: true },

  // Finance
  waterfall:     { needsX: true, needsY: true, needsZ: false },
  variablepie:   { needsX: true, needsY: true, needsZ: true },
  funnel:        { needsX: true, needsY: true, needsZ: false },
  candlestick:   { needsX: true, needsOpen: true, needsHigh: true, needsLow: true, needsClose: true, needsY: false },
  ohlc:          { needsX: true, needsOpen: true, needsHigh: true, needsLow: true, needsClose: true,needsY: false },


  // Distributions and Range
 xrange: { needsX: true, needsZ: true, needsY: true, needsLabel: true },
  dumbbell: {
  needsX: true,     // For labels or names
  needsLow: true,   // Start value
  needsHigh: true,  // End value
  needsY: false,
  needsZ: false
},
  arearange:           { needsX: true, needsLow: true, needsHigh: true, needsY: false },
  areasplinerange:     { needsX: true, needsLow: true, needsHigh: true, needsY: false },
  columnrange:         { needsX: true, needsLow: true, needsHigh: true, needsY: false },
  boxplot:             { needsX: true, needsLow: true, needsQ1: true, needsMedian: true, needsQ3: true, needsHigh: true, needsY: false },
  errorbar:            { needsX: true, needsLow: true, needsHigh: true, needsY: false },
  histogram:           { needsX: true, needsY: false, needsZ: false },
  bellcurve:           { needsX: true, needsY: false, needsZ: false },
  pareto:              { needsX: true, needsY: true, needsZ: false },

  // Specialized & Network
  // heatmap:         { needsX: true, needsY: true, needsZ: true },
  treemap: {
  needsX: true,       // Should be "Label" (ID of the node)
  needsY: true,       // Should be "Parent"
  needsValue: true    // Should be "Value"
},
  sunburst:        { needsX: true, needsY: true, needsZ: true },
  streamgraph:      { needsX: true, needsY: true, needsZ: true },
  networkgraph:    { needsX: true, needsY: true, needsZ: false, needsLabel:true},
  dependencywheel: { needsX: true, needsY: true, needsZ: true },
  sankey:          { needsX: true, needsY: true, needsZ: true },
  organization:    { needsX: true, needsY: true, needsZ: false },
  arcdiagram: {
  needsX: true, // Source
  needsY: true, // Target
  needsValue: true // Weight of connection (optional)
},
  treegraph: { needsX: true, needsY: true, needsLabel: true },
  packedbubble:    { needsX: true, needsY: false, needsZ: true },
  venn: {
  needsX: true,   // Set1
  needsY: true,   // Set2 (optional)
  needsZ: true    // Value
},
  wordcloud:       { needsText: true, needsWeight: true, needsX: false, needsY: false, needsZ: false },

  // Maps
  tilemap:       { needsX: true, needsY: true, needsZ: true, needsLabel:true },
  map:           { needsGeoJSON: true, needsData: true, needsX: false, needsY: false, needsZ: false },
  mapbubble: {
    needsGeoJSON: true,
    needsData: true,
    needsX: true,   // Longitude 
    needsY: true,   // Latitude 
    needsZ: true ,
    needsLabel: true   // Bubble 
 },


  // Others
  timeline:      { needsX: true, needsY: true, needsZ: true },
  bullet:        { needsX: true, needsY: true, needsZ: true },
  lollipop:      { needsX: true, needsY: true, needsZ: false },
  windbarb:      { needsX: true, needsY: true, needsZ: true },
  vector: {
  needsX: true,
  needsY: true,
  needsDirection: true,
  needsLength: true
},
  variwide:      { needsX: true, needsY: true, needsZ: true },
  solidgauge:    { needsX: true, needsY: true, needsZ: false },
  scatter3d: {
  needsX: true,
  needsY: true,
  needsZ: true
},
pyramid3d: {
  needsX: true,
  needsY: true,
  needsZ: false
},
pie3d: {
  needsX: true,
  needsY: true,
  needsZ: false
},
// mappoint: {
//   needsX: true, // longitude
//   needsY: true, // latitude
//   needsZ: false,
//   needsLabel: true
// },
// mapline: {
//   needsX: false,
//   needsY: false,
//   needsZ: false
// },
hlc: {
  needsX: true,
  needsHigh: true,
  needsLow: true,
  needsClose: true,
  needsY: false
},
geoheatmap: {
  needsX: true, // longitude
  needsY: true, // latitude
  needsZ: true,
  needsLabel: true  // intensity
},
gauge: {
  needsY: true
},
gantt: {
  needsX: true,       // Start
  needsY: true,       // End
  needsLow: true,     // Task Name
  needsHigh: true,    // Task ID
},
funnel3d: {
  needsX: true,
  needsY: true,
  needsZ: false
},
flags: {
  needsX: true,
   needsY: false, 
  needsLabel: true
},
dotplot: {
  needsX: true,
  needsY: true,
  needsZ: false
},
cylinder: {
  needsX: true,
  needsY: true,
  needsZ: false
},
columnpyramid: {
  needsX: true,
  needsY: true,
  needsZ: false
},
pyramid:{
needsX: true, needsY: true
},
column3d: {
  needsX: true,
  needsY: true,
  needsZ: false
},
area3d: {
  needsX: true,
  needsY: true,
  needsZ: false
}

};

export default highchartsChartRequirements;