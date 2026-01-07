import React from 'react';
import Plot from 'react-plotly.js';

function PlotlyChart({ data, xCol, yCol, zCol, uCol, vCol, wCol, openCol, highCol, lowCol, closeCol, q1Col,
  medianCol, q3Col, groupCol, chartType }) {
 const xData = xCol ? data.map((d) => d[xCol]) : [];
 const yData = yCol ? data.map((d) => d[yCol]) : [];
 const zData = zCol ? data.map((d) => d[zCol]) : [];
const chartReq = {
  densitytilemap: (
       <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Density Map:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Latitude</code></li>
          <li><strong>Y-Axis</strong>: <code>Longitude</code></li>
          <li><strong>High</strong>: Value <code></code></li>
        </ul>
      </div>
  ),
  sankey: (
       <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Sankey Diagram:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Source</code></li>
          <li><strong>Y-Axis</strong>: <code>Target</code></li>
          <li><strong>Z-Axis</strong>: Value <code></code></li>
        </ul>
      </div>
  ),
  treemap: (
       <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Treemap:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Label</code></li>
          <li><strong>Y-Axis</strong>: <code>Parent</code></li>
          <li><strong>Z-Axis</strong>: Value <code></code></li>
        </ul>
      </div>
  ),
  sunburst:(
       <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Sunburst Chart:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Label</code></li>
          <li><strong>Y-Axis</strong>: <code>Parent</code></li>
          <li><strong>Z-Axis</strong>: Value <code></code></li>
        </ul>
      </div>
  )
}
const charTitles = {
  scatter: 'Scatter Chart',
  line: 'Line Chart',
  bar: 'Bar Chart',
  area: 'Area Chart',
  heatmap: 'Heatmap',
  table: 'Table',
  contour: 'Contour Plot',
  pie: 'Pie Chart',
  box: 'Box Plot',
  violin: 'Violin Plot',
  histogram: 'Histogram',
  histogram2d: '2D Histogram',
  histogram2dcontour: '2D Contour Histogram',
  scatter3d: '3D Scatter',
  line3d: '3D Line',
  surface3d: '3D Surface',
  mesh3d: '3D Mesh',
  cone: '3D Cone Plot',
  streamtube: 'Streamtube',
  choropleth: 'Choropleth Map',
  choroplethatlas: 'Atlas Choropleth Map',
  tilemap: 'Tilemap',
  atlasmap: 'Atlas Map',
  densitytilemap: 'Density Map',
  candlestick: 'Candlestick Chart',
  ohlc: 'OHLC Chart',
  waterfall: 'Waterfall Chart',
  funnel: 'Funnel Chart',
  funnelarea: 'Funnel Area',
  scatterpolar: 'Polar Scatter',
  barpolar: 'Polar Bar',
  ternary: 'Ternary Plot',
  sunburst: 'Sunburst Chart',
  treemap: 'Treemap',
  sankey: 'Sankey Diagram'
};

  const getTrace = () => {
    switch (chartType) {
      case 'tilemap':
      case 'atlasmap':
      case 'choroplethatlas':
        return {
          type: 'choropleth',
          locationmode: 'country names',
          locations: xData,
          z: yData,
          colorscale: 'Viridis',
          colorbar: { title: zCol || yCol }
        };
      case 'densitytilemap': {
        // Use actual data for the density map
        const latitudes = xData.map(v => parseFloat(v));
        const longitudes = yData.map(v => parseFloat(v));
        const values = zData && zData.length > 0 ? zData.map(v => parseFloat(v) || 1) : latitudes.map(() => 1);
        return {
    
          type: 'scattergeo',
          mode: 'markers',
          lat: latitudes,
          lon: longitudes,
          marker: {
            size: values.map(v => Math.max(8, Math.min(30, v * 0.2 + 8))),
            color: values,
            colorscale: 'Hot',
            opacity: 0.8,
            colorbar: { title: zCol || 'Density' },
            line: { width: 1, color: 'white' }
          },
          text: data.map((d, i) => `${d[xCol]}, ${d[yCol]}: ${values[i]}`),
          name: 'Density Map'
        };
        
        
      }

      case 'scatter': return { type: 'scatter', mode: 'markers', x: xData, y: yData };
      case 'line': return { type: 'scatter', mode: 'lines', x: xData, y: yData };
      case 'bar': return { type: 'bar', x: xData, y: yData };
      case 'area': return { type: 'scatter', mode: 'lines', fill: 'tozeroy', x: xData, y: yData };
      case 'heatmap': return { type: 'heatmap', x: xData, y: yData, z: zData || [], colorscale: 'Viridis' };
      case 'table': return { type: 'table', header: { values: [xCol, yCol] }, cells: { values: [xData, yData] } };
      case 'contour': return { type: 'contour', z: zData, x: xData, y: yData };
      case 'pie': return { type: 'pie', labels: xData, values: yData };

      case 'box': {
  const grouped = {};

  data.forEach(d => {
    const group = d[xCol];
    if (!grouped[group]) {
      grouped[group] = [];
    }

    const stats = [
      Number(d[lowCol]),
      Number(d[q1Col]),
      Number(d[medianCol]),
      Number(d[q3Col]),
      Number(d[highCol])
    ];

    if (stats.every(v => !isNaN(v))) {
      // Repeat values to simulate a distribution
      grouped[group].push(...Array(5).fill(stats[0])); // low
      grouped[group].push(...Array(15).fill(stats[1])); // Q1
      grouped[group].push(...Array(20).fill(stats[2])); // median
      grouped[group].push(...Array(15).fill(stats[3])); // Q3
      grouped[group].push(...Array(5).fill(stats[4])); // high
    }
  });

  const traces = Object.entries(grouped).map(([group, values]) => ({
    type: 'box',
    name: group,
    y: values,
    boxpoints: false,
    boxmean: false
  }));

  return traces;
};
  case 'violin': {
  if (!xCol || !yCol) return {};

  const grouped = {};
  data.forEach(d => {
    const rawGroup = d[xCol];
    const group = typeof rawGroup === 'string' ? rawGroup.trim() : rawGroup;
    const value = d[yCol];

    if (group !== undefined && value !== undefined && !isNaN(value)) {
      if (!grouped[group]) grouped[group] = [];
      grouped[group].push(Number(value));
    }
  });

  const violinTraces = Object.entries(grouped).map(([group, values]) => ({
    type: 'violin',
    y: values,
    name: group,
    box: { visible: true },
    meanline: { visible: true },
    points: 'all',
    jitter: 0.5,
    marker: { size: 5 },
  }));

  return violinTraces;
};

 case 'histogram':
const colors = [
  '#2C3E50', // dark blue-gray (professional and calm)
  '#2980B9', // strong blue (trustworthy, corporate)
  '#27AE60', // emerald green (fresh, growth)
  '#F39C12', // amber (warm and inviting)
  '#8E44AD', // deep purple (creative, elegant)
  '#34495E', // charcoal (neutral, sophisticated)
  '#16A085', // teal (modern and calming)
  '#E67E22', // carrot orange (energetic but not loud)
  '#BDC3C7', // silver-gray (clean and minimal)
  '#7F8C8D', // gray (balanced and stable)
];

return {
    type: 'histogram',
    x: xData,
    marker: {
      color: xData.map((_, i) => colors[i % colors.length]) // cycle through colors
    },
    layout:{
      bargap: 0
    }
  };

      case 'histogram2d': return { type: 'histogram2d', x: xData, y: yData };
      case 'histogram2dcontour': return { type: 'histogram2dcontour', x: xData, y: yData };

      case 'scatter3d': return { type: 'scatter3d', mode: 'markers', x: xData, y: yData, z: zData };
      case 'line3d': return { type: 'scatter3d', mode: 'lines', x: xData, y: yData, z: zData };
      case 'surface3d': {
        // Try to infer a 2D grid from the data
        // Accepts data as array of objects, where each object has x, y, z keys
        // or as a matrix-like format with row/col headers
        if (data.length === 0) return { type: 'surface', x: [], y: [], z: [[]] };

        // Heuristic 1: Check for xCol, yCol, zCol (standard scatter grid)
        if (xCol && yCol && zCol) {
          // Group by yCol, then for each y, get x/z
          let yVals = Array.from(new Set(data.map(d => d[yCol])));
          let xVals = Array.from(new Set(data.map(d => d[xCol])));
          // Sort x and y for a proper grid
          xVals = xVals.filter(v => v !== undefined && v !== null).sort((a, b) => (isNaN(a) || isNaN(b)) ? String(a).localeCompare(String(b)) : Number(a) - Number(b));
          yVals = yVals.filter(v => v !== undefined && v !== null).sort((a, b) => (isNaN(a) || isNaN(b)) ? String(a).localeCompare(String(b)) : Number(a) - Number(b));
          // Build z as 2D array: z[i][j] = z where y=yVals[i], x=xVals[j]
          const z = yVals.map(yv => xVals.map(xv => {
            const found = data.find(d => d[xCol] === xv && d[yCol] === yv);
            let val = found ? Number(found[zCol]) : 0;
            return isNaN(val) ? 0 : val;
          }));
          return {
            type: 'surface',
            x: xVals,
            y: yVals,
            z
          };
        }

        // Heuristic 2: Matrix format (first column is y, rest are x columns)
        const keys = Object.keys(data[0]);
        if (keys.length > 1) {
          const y = data.map(row => row[keys[0]]);
          const x = keys.slice(1);
          const z = data.map(row => x.map(col => Number(row[col])));
          return {
            type: 'surface',
            x,
            y,
            z
          };
        }

        // Fallback: empty
        return { type: 'surface', x: [], y: [], z: [[]] };
      }
      case 'mesh3d': return { type: 'mesh3d', x: xData, y: yData, z: zData };
      case 'cone': {
        const u = data.map((d) => d.u || 0);
        const v = data.map((d) => d.v || 0);
        const w = data.map((d) => d.w || 1); 
        return {
          type: 'cone',
          x: xData,
          y: yData,
          z: zData || [],
          u,
          v,
          w,
          showscale: true
        };
      }
      case 'streamtube': {
  const x = data.map(d => d.x);
  const y = data.map(d => d.y);
  const z = data.map(d => d.z);
  const u = data.map(d => d.u);
  const v = data.map(d => d.v);
  const w = data.map(d => d.w);

  return {
    type: 'streamtube',
    x, y, z,
    u, v, w,
    colorscale: 'Viridis',
    showscale: true,
    maxdisplayed: 300
  };
}


      //case 'tilemap': // placeholder
     //case 'atlasmap':
      case 'choropleth': {
  return {
    type: 'choropleth',
    locationmode: 'country names', // or 'ISO-3', or 'USA-states'
    locations: xData, // e.g., ['Pakistan', 'India', 'USA']
    z: yData,         // e.g., [10, 20, 30]
    colorscale: 'Viridis',
    colorbar: { title: zCol || yCol }
  };
}

      //case 'choroplethatlas':
      //case 'densitytilemap':
        //return { type: 'choropleth', locations: xData, z: yData };

     case 'candlestick': {
  const open = data.map(d => d[openCol]);
  const high = data.map(d => d[highCol]);
  const low = data.map(d => d[lowCol]);
  const close = data.map(d => d[closeCol]);
  return {
    type: 'candlestick',
    x: data.map(d => d[xCol]),
    open,
    high,
    low,
    close,
  };
}
case 'ohlc': {
  const open = data.map(d => d[openCol]);
  const high = data.map(d => d[highCol]);
  const low = data.map(d => d[lowCol]);
  const close = data.map(d => d[closeCol]);

  return {
    type: 'ohlc',
    x: data.map(d => d[xCol]),
    open,
    high,
    low,
    close
  };
}

 case 'waterfall': return { type: 'waterfall', x: xData, y: yData };
      case 'funnel': return { type: 'funnel', x: xData, y: yData };
      case 'funnelarea': return { type: 'funnelarea', labels: xData, values: yData };

      case 'scatterpolar': return { type: 'scatterpolar', r: yData, theta: xData };
      case 'barpolar': return { type: 'barpolar', r: yData, theta: xData };
      case 'ternary': return { type: 'scatterternary', a: xData, b: yData, c: zData };
  
  
case 'sunburst': {
  if (!Array.isArray(xData) || !Array.isArray(yData)) {
    console.error('Sunburst: xData and yData must be arrays');
    return {};
  }

  const labels = xData;
  const parents = yData;

  // Check lengths match
  if (labels.length !== parents.length) {
    console.error('Sunburst: labels and parents arrays must be the same length');
    return {};
  }

  // Optionally add values only if length matches
  let values;
  if (Array.isArray(zData) && zData.length === labels.length) {
    values = zData.map(val => (isNaN(val) ? 0 : +val)); // convert to numbers and clean invalids
  }

  const trace = {
    type: 'sunburst',
    labels,
    parents,
    branchvalues: 'total'
  };

  if (values) {
    trace.values = values;
  }

  return trace;
}

      case 'treemap': {
  const trace = {
  type: 'treemap',
  labels: xData,
  parents: yData,
  branchvalues: 'total'  // ✅ Add this
};
if (zData && zData.length > 0) {
  trace.values = zData.map(v => Number(v)); // ✅ Add this
}


  return trace;
}

      case 'sankey': {
  const labels = Array.from(new Set([...xData, ...yData]));
  const labelToIndex = Object.fromEntries(labels.map((label, i) => [label, i]));

  return {
    type: 'sankey',
    node: { label: labels },
    link: {
      source: xData.map(source => labelToIndex[source]),
      target: yData.map(target => labelToIndex[target]),
      value: zData || []
    }
  };
}
      default: return { type: 'scatter', mode: 'markers', x: xData, y: yData,  };
    }
  };

  // Get the trace data
  const trace = getTrace();
  
  // Error handling for invalid traces
  if (!trace || (Array.isArray(trace) && trace.length === 0)) {
    return <div style={{color: 'red', padding: '20px'}}>Error: Unable to generate chart trace</div>;
  }
  
  // Check if Plot component is available
  if (!Plot) {
    return <div style={{color: 'red', padding: '20px'}}>Error: Plot component not available</div>;
  }
  
  try {
    const plotComponent = (
      <div>
    {/* Render required column hints if available */}
    {chartReq[chartType] && (
      <div className="mb-4">
        {chartReq[chartType]}
      </div>
    )}
      <div style={{width: '100%', height: '500px', minHeight: '400px'}}>
        <Plot
          data={Array.isArray(trace) ? trace : [trace]}
          layout={{
             title: {
              text: charTitles[chartType] || `${chartType} Chart`, 
              font: { size: 24 },
              x: 0.5,
              xanchor: 'center'
            },
            xaxis: { title: xCol || 'X Axis' },
            yaxis: { title: yCol || 'Y Axis' },
            autosize: true,
            geo: {
              projection: { type: 'natural earth' },
              showland: true,
              landcolor: 'rgb(243, 243, 243)',
              showcountries: true,
              countrycolor: 'rgb(204, 204, 204)'
            },
            margin: { l: 40, r: 40, t: 60, b: 40 }
          }}
          config={{
            responsive: true,
            displayModeBar: true,
            scrollZoom: true,
            doubleClick: 'reset'
          }}
          style={{ width: '100%', height: '100%' }}
          useResizeHandler={true}
        />
      </div>
      </div>
    );
    return plotComponent;
  } catch (error) {
    console.error('Error rendering Plot:', error);
    return <div>Error rendering chart: {error.message}</div>;
  }
}

export default PlotlyChart;
