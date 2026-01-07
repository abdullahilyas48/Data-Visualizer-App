const plotlyChartRequirements = {
  scatter:      { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },
  bar:          { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },
  line:         { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },
  area:         { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },
  heatmap:      { needsX: true,  needsY: true,  needsZ: true,  needsU: false, needsV: false, needsW: false },
  table:        { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },
  contour:      { needsX: true,  needsY: true,  needsZ: true,  needsU: false, needsV: false, needsW: false },
  pie:          { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },

  box: { needsX: true, needsY: false, needsZ: false, needsU: false, needsV: false, needsW: false, 
         needsQ1: true, needsMedian: true, needsQ3: true, needsLow: true, needsHigh: true },
  violin: { needsX: true, needsY: true, needsZ: false, needsU: false, needsV: false, needsW: false },
  histogram:    { needsX: true,  needsY: false, needsZ: false, needsU: false, needsV: false, needsW: false },
  histogram2d:  { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },
  histogram2dcontour: { needsX: true, needsY: true, needsZ: false, needsU: false, needsV: false, needsW: false },

  scatter3d:    { needsX: true,  needsY: true,  needsZ: true,  needsU: false, needsV: false, needsW: false },
  line3d:       { needsX: true,  needsY: true,  needsZ: true,  needsU: false, needsV: false, needsW: false },
  surface3d:    { needsX: true,  needsY: true,  needsZ: true,  needsU: false, needsV: false, needsW: false },
  mesh3d:       { needsX: true,  needsY: true,  needsZ: true,  needsU: false, needsV: false, needsW: false },
  cone:         { needsX: true,  needsY: true,  needsZ: true,  needsU: true,  needsV: true,  needsW: true  },
  streamtube:   { needsX: true,  needsY: true,  needsZ: true,  needsU: true,  needsV: true,  needsW: true  },

  choropleth:   { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },

 candlestick: { needsX: true, needsOpen: true, needsHigh: true, needsLow: true, needsClose: true, needsY: false,  
                needsZ: false, needsU: false, needsV: false, needsW: false, },
  ohlc: { needsX: true, needsOpen: true, needsHigh: true, needsLow: true, needsClose: true, needsY: false, needsZ: false,
          needsU: false, needsV: false, needsW: false,}, 
  waterfall:    { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },
  funnel:       { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },
  funnelarea:   { needsX: false, needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },

  scatterpolar: { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },
  barpolar:     { needsX: true,  needsY: true,  needsZ: false, needsU: false, needsV: false, needsW: false },
  ternary:      { needsX: true,  needsY: true,  needsZ: true,  needsU: false, needsV: false, needsW: false },
  sunburst:     { needsX: true,  needsY: true,  needsZ: true, needsU: false, needsV: false, needsW: false },
  treemap:      { needsX: true,  needsY: true,  needsZ: true, needsU: false, needsV: false, needsW: false },
  sankey:       { needsX: true,  needsY: true,  needsZ: true,  needsU: false, needsV: false, needsW: false },
  tilemap:         { needsX: true, needsY: true, needsZ: true, needsU: false, needsV: false, needsW: false },
  atlasmap:        { needsX: true, needsY: true, needsZ: true, needsU: false, needsV: false, needsW: false },
  choroplethatlas: { needsX: true, needsY: true, needsZ: true, needsU: false, needsV: false, needsW: false },
  densitytilemap:  { needsX: true, needsY: true, needsZ: true, needsU: false, needsV: false, needsW: false },

};


export default plotlyChartRequirements;