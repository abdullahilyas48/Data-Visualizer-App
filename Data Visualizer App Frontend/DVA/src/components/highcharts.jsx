import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsGantt from 'highcharts/modules/gantt';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import DumbbellModule from 'highcharts/modules/dumbbell';
import HistogramBellCurve from 'highcharts/modules/histogram-bellcurve';
import ParetoModule from 'highcharts/modules/pareto';
import XRangeModule from 'highcharts/modules/xrange';
import HeatmapModule from 'highcharts/modules/heatmap';
import VariwideModule from 'highcharts/modules/variwide';
import FunnelModule from 'highcharts/modules/funnel';
import VariablePie from 'highcharts/modules/variable-pie';
import TimelineModule from 'highcharts/modules/timeline';
import BulletModule from 'highcharts/modules/bullet';
import LollipopModule from 'highcharts/modules/lollipop';
import StreamgraphModule from 'highcharts/modules/streamgraph';
import highchartsChartRequirements from './highchartsChartRequirements';
import DotplotModule from 'highcharts/modules/dotplot';
import TreemapModule from 'highcharts/modules/treemap';
import SunburstModule from 'highcharts/modules/sunburst';
import SankeyModule from 'highcharts/modules/sankey';
import DependencyWheelModule from 'highcharts/modules/dependency-wheel';
import OrganizationModule from 'highcharts/modules/organization';
import NetworkGraphModule from 'highcharts/modules/networkgraph';
import VennModule from 'highcharts/modules/venn';
import TreegraphModule from 'highcharts/modules/treegraph';
import TilemapModule from 'highcharts/modules/tilemap';
import MapModule from 'highcharts/modules/map';
import ExportingModule from 'highcharts/modules/exporting'; 
import WordcloudModule from 'highcharts/modules/wordcloud';
import WindbarbModule from 'highcharts/modules/windbarb';
import VectorModule from 'highcharts/modules/vector';
import SolidGaugeModule from 'highcharts/modules/solid-gauge';
import Highcharts3D from 'highcharts/highcharts-3d';
import Funnel3DModule from 'highcharts/modules/funnel3d';
import Pyramid3DModule from 'highcharts/modules/pyramid3d';
import CylinderModule from 'highcharts/modules/cylinder';
import worldMap from '@highcharts/map-collection/custom/world.geo.json';
import worldMapLine from '@highcharts/map-collection/custom/world-highres2.geo.json'; //------>FOR MAP LINE
// import IndicatorsAll from 'highcharts/indicators/indicators-all'; //renko etc module but doesnt work
import {ArrowDown} from 'lucide-react'
import {ArrowUp} from 'lucide-react'
import {ArrowLeft} from 'lucide-react'
import {ArrowRight} from 'lucide-react'
import AnnotationsModule from 'highcharts/modules/annotations';
import StockToolsModule from 'highcharts/modules/stock-tools';
import ArcDiagram from 'highcharts/modules/arc-diagram';
import HC_Map from 'highcharts/modules/map'
import proj4 from 'proj4';
if (typeof window !== 'undefined') {
  window.proj4 = proj4;
}
// Initialize modules
if (typeof HighchartsGantt === 'function') HighchartsGantt(Highcharts);
// --- Gantt and Geo Heatmap Implementation ---
// Gantt and Geo Heatmap chartType handlers are added below in the main component.
if (typeof HighchartsMore === 'function') HighchartsMore(Highcharts);
if (typeof XRangeModule === 'function') XRangeModule(Highcharts);
if (typeof HistogramBellCurve === 'function') HistogramBellCurve(Highcharts);
if (typeof ParetoModule === 'function') ParetoModule(Highcharts);
if (typeof DumbbellModule === 'function') DumbbellModule(Highcharts);
if (typeof HeatmapModule === 'function') HeatmapModule(Highcharts);
if (typeof VariwideModule === 'function') VariwideModule(Highcharts);
if (typeof FunnelModule === 'function') FunnelModule(Highcharts);
if (typeof VariablePie === 'function') VariablePie(Highcharts);
if (typeof TimelineModule === 'function') TimelineModule(Highcharts);
if (typeof BulletModule === 'function') BulletModule(Highcharts);
if (typeof LollipopModule === 'function') LollipopModule(Highcharts);
if (typeof StreamgraphModule === 'function') StreamgraphModule(Highcharts);
if (typeof DotplotModule === 'function') DotplotModule(Highcharts);
if (typeof TreemapModule === 'function') TreemapModule(Highcharts);
if (typeof SunburstModule === 'function') SunburstModule(Highcharts);
if (typeof SankeyModule === 'function') SankeyModule(Highcharts);
if (typeof DependencyWheelModule === 'function') DependencyWheelModule(Highcharts);
if (typeof OrganizationModule === 'function') OrganizationModule(Highcharts);
if (typeof NetworkGraphModule === 'function') NetworkGraphModule(Highcharts);
if (typeof VennModule === 'function') VennModule(Highcharts);
if (typeof TreegraphModule === 'function') TreegraphModule(Highcharts);
if (typeof TilemapModule === 'function') TilemapModule(Highcharts);
if (typeof MapModule === 'function') MapModule(Highcharts);
if (typeof WordcloudModule === 'function') {WordcloudModule(Highcharts);}
if (typeof ExportingModule === 'function') ExportingModule(Highcharts);
if (typeof WindbarbModule === 'function') WindbarbModule(Highcharts);
if (typeof VectorModule === 'function') VectorModule(Highcharts);
if (typeof SolidGaugeModule === 'function') SolidGaugeModule(Highcharts);
if (typeof Highcharts3D === 'function') Highcharts3D(Highcharts);
if (typeof Funnel3DModule === 'function') Funnel3DModule(Highcharts); // Required by pyramid3d
if (typeof Pyramid3DModule === 'function') Pyramid3DModule(Highcharts);
if (typeof CylinderModule === 'function') CylinderModule(Highcharts);
if (typeof worldMap ==='function') worldMap(Highcharts);
if (typeof worldMapLine==='function') worldMapLine(Highcharts);
if (typeof IndicatorsAll ==='function') IndicatorsAll(Highcharts);
if (typeof ParetoModule === 'function') ParetoModule(Highcharts);
if (typeof AnnotationsModule === 'function') AnnotationsModule(Highcharts);
if (typeof StockToolsModule === 'function') StockToolsModule(Highcharts);
if (typeof ArcDiagramModule === 'function') ArcDiagramModule(Highcharts);
if(typeof HC_Map === 'function') HC_Map(Highcharts);

function isDate(val) {
  return typeof val === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(val) && !isNaN(Date.parse(val));
}
function isNumeric(val) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}
function getSortedData(data, col) {
  if (!col || data.length === 0) return data;
  const sample = data[0][col];
  // Sort by date if most values are valid dates
  const isMostlyDates = data.filter(d => isDate(d[col])).length > data.length / 2;
  const isMostlyNumeric = data.filter(d => isNumeric(d[col])).length > data.length / 2;
  if (isMostlyDates) {
    return [...data].sort((a, b) => new Date(a[col]) - new Date(b[col]));
  }
  // Sort by number if most values are numeric
  if (isMostlyNumeric) {
    return [...data].sort((a, b) => parseFloat(a[col]) - parseFloat(b[col]));
  }
  // Otherwise, sort alphabetically
  return [...data].sort((a, b) => String(a[col]).localeCompare(String(b[col])));
}


//----->FOR MAP LINE/POINT
const polygonToLineStringGeoJson = {
  type: 'FeatureCollection',
  features: worldMapLine.features.map(f => ({
    ...f,
    geometry: {
      type: 'LineString',
      coordinates: f.geometry.coordinates[0] // use outer ring
    }
  }))
};

const formatChartType = (type) => {
  switch (type) {
    case 'arearange':
      return 'Area Range Chart';
    case 'areasplinerange':
      return 'Area Spline Range Chart';
    case 'columnrange':
      return 'Column Range Chart';
    default:
      return 'Range Chart';
  }
};


function HighchartsChart({
  data,
  xCol,
  yCol,
  zCol,
  lowCol,
  q1Col,
  medianCol,
  q3Col,
  highCol,
  labelCol,
  chartType,
  valueCol,
  geoJson,
  directionCol,
  lengthCol,
  progressCol,
}) {
  const chartRef = useRef(null);
  
  useEffect(() => {
    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartRef.current && chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, []);

  // Additional data validation
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div className="text-gray-500 text-center py-8">No data available to display chart.</div>;
  }
  // Gantt chartType handler
  if (chartType === 'gantt') {
    // Defensive: check for required columns
    if (!xCol || !yCol || !lowCol || !highCol) {
      return <p className="text-gray-500">X-Axis: Start Date, Y-Axis: End Date, High: Unique ID, and Low: Task Name columns are required for Gantt.</p>;
    }
    // Map data for Gantt: id, name, start, end, completed, dependency
    const ganttData = data
      .filter(d => d[xCol] && d[yCol] && d[lowCol] && d[highCol])
      .map(d => {
        const completed = d.completed !== undefined && d.completed !== '' ? { amount: Number(d.completed) } : undefined;
        let dependency = undefined;
        if (d.dependency && d.dependency !== '') {
          // Support comma-separated or single dependency
          dependency = d.dependency.toString().includes(',') ? d.dependency.toString().split(',').map(dep => dep.trim()) : d.dependency.toString();
        }
        return {
          id: d[highCol],
          name: d[lowCol],
          start: Date.parse(d[xCol]),
          end: Date.parse(d[yCol]),
          completed,
          dependency
        };
      });
    if (ganttData.length === 0) {
      return <p className="text-gray-500">No valid data for Gantt chart.</p>;
    }
    const ganttOptions = {
      chart: { type: 'gantt', height: 400 },
      title: { text: 'Gantt Chart' },
      series: [
        {
          name: 'Tasks',
          data: ganttData
        }
      ]
    };
    return (
    <>
     <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Gantt Chart:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Start Date</code></li>
          <li><strong>Y-Axis</strong>: <code>End Date</code></li>
          <li><strong>High</strong>: Unique ID <code></code></li>
          <li><strong>Low</strong>: <code>Task Name</code></li>
        </ul>
      </div>
      <div style={{ width: '100%', height: 400 }}>
        <HighchartsReact highcharts={Highcharts} constructorType="ganttChart" options={ganttOptions} />
      </div>
           </>
    );
  }

  // Geo Heatmap chartType handler
  if (chartType === 'geoheatmap') {
    // Defensive: check for required columns
    if (!xCol || !yCol || !zCol) {
      return <p className="text-gray-500">Longitude (xCol), Latitude (yCol), and Value (zCol) columns are required for Geo Heatmap.</p>;
    }
    // Map data for geo heatmap: {lon, lat, value}
    const geoHeatData = data
      .filter(d => d[xCol] && d[yCol] && d[zCol] !== undefined && d[zCol] !== null && d[zCol] !== '')
      .map(d => ({
        lon: Number(d[xCol]),
        lat: Number(d[yCol]),
        z: Number(d[zCol]),
        name: d[labelCol] || ''
      }));
    if (geoHeatData.length === 0) {
      return <p className="text-gray-500">No valid data for Geo Heatmap. Check that your longitude/latitude and value columns are correct and within the map bounds.</p>;
    }
    // Fallback: if mapbubble doesn't show, try mappoint for debugging
    const geoHeatOptions = {
      chart: { map: worldMap, height: 500,
        projection:null,
       },
      title: { text: 'Geo Heatmap' },
     colorAxis: {
  dataClasses: [
    {
      to: 25,
      color: '#e74c3c',
      name: 'Low (<25)'
    },
    {
      from: 25,
      to: 50,
      color: '#f39c12',
      name: 'Medium (25–50)'
    },
    {
      from: 50,
      to: 75,
      color: '#27ae60',
      name: 'High (50–75)'
    },
    {
      from: 75,
      color: '#2980b9',
      name: 'Very High (>75)'
    }
  ]
},
      series: [
        {
          mapData: worldMap,
          name: 'Basemap',
          borderColor: '#A0A0A0',
          nullColor: '#E0E0E0',
          showInLegend: false,
          type: 'map'
        },
        {
          type: 'mappoint',
          name: 'Heatmap',
          data: geoHeatData,
          useLatLon: true,
         // minSize: 4,
         // maxSize: '12%',
         marker:{
          radius:6
         },
          colorKey: 'z',
          joinBy: null,
          tooltip: {
           pointFormat: 'Country: {point.name}<br> Value: {point.z}'
          },
         dataLabels: {
         enabled: false,
         format: '{point.z}',
         align: 'center', 
         verticalAlign: 'middle', 
         style: {
          fontSize: '10px',
          color: 'white',
          textOutline: 'none',
          fontWeight: ''
          }
},
          zIndex: 2
        }
      ]
    };
    return (
      <>
         <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Geo Heatmap:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Longitude</code></li>
          <li><strong>Y-Axis</strong>: <code>Latitude</code></li>
          <li><strong>Z-Axis</strong>: <code>Value</code></li>
          <li><strong>Label</strong>: <code>Label Name</code></li>
        </ul>
      </div>
      <div style={{ width: '100%', height: 500 }}>
        <HighchartsReact highcharts={Highcharts} constructorType="mapChart" options={geoHeatOptions} />
      </div>
      </>
    );
  }
  const requirements = highchartsChartRequirements[chartType];

  if (!requirements && chartType !== 'bellcurve') {
    return <p className="text-red-500">Unsupported chart type: {chartType}</p>;
  }

  if (!data || data.length === 0) {
    return <p className="text-gray-500">Awaiting data...</p>;
  }

  if (requirements?.needsX && !xCol) {
    return <p className="text-gray-500">X column is required for {chartType} chart.</p>;
  }
  if (requirements?.needsY && !yCol) {
    return <p className="text-gray-500">Y column is required for {chartType} chart.</p>;
  }
  if (requirements?.needsZ && (zCol === undefined || zCol === null || zCol === '')) {
    return <p className="text-gray-500">Z column is required for {chartType} chart.</p>;
  }

  if (requirements?.needsOpen && !data.every(d => d.Open !== undefined)) {
    return <p className="text-gray-500">Data must have "open" values for {chartType} chart.</p>;
  }
  if (requirements?.needsHigh) {
  if (highCol) {
    if (!data.every(d => d[highCol] !== undefined)) {
      return <p className="text-gray-500">Selected High column is missing values for {chartType} chart.</p>;
    }
  } else if (!data.every(d => d.High !== undefined)) {
    return <p className="text-gray-500">Data must have "High" values for {chartType} chart.</p>;
  }
}

if (requirements?.needsLow) {
  if (lowCol) {
    if (!data.every(d => d[lowCol] !== undefined)) {
      return <p className="text-gray-500">Selected Low column is missing values for {chartType} chart.</p>;
    }
  } else if (!data.every(d => d.Low !== undefined)) {
    return <p className="text-gray-500">Data must have "Low" values for {chartType} chart.</p>;
  }
}

  if (requirements?.needsClose && !data.every(d => d.Close !== undefined)) {
    return <p className="text-gray-500">Data must have "close" values for {chartType} chart.</p>;
  }
    if (requirements?.needsLabel && !xCol) {
    return <p className="text-gray-500">Label column is required for {chartType} chart.</p>;
  }

  let yAxisConfig = null;
  let seriesData;
  let options = null;
  let optionsAxis = null;
  let colorAxisConfig = null;
  let plotOptionsConfig = null;
  let pane;
  let series;

  if (chartType === 'candlestick') {
    data = getSortedData(data, xCol);
    seriesData = data.map(d => [
       Date.parse(d[xCol]), Number(d.Open), Number(d.High), Number(d.Low), Number(d.Close)
    ])
    console.log("Candlestick seriesData:", seriesData);
    return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={{
        chart: { type: 'candlestick' },
        title: { text: 'Candlestick Chart' },
        rangeSelector: { selected: 1 },
        xAxis: { type: 'datetime' },
        series: [
          {
            type: 'candlestick',
            name: yCol || 'Candlestick',
            data: seriesData,
            tooltip: {
              valueDecimals: 2
            }
          }
        ]
      }}
    />
  );
  } 
  else if (chartType === 'ohlc'){
    data = getSortedData(data, xCol);
    seriesData = data.map(d => [
       Date.parse(d[xCol]), Number(d.Open), Number(d.High), Number(d.Low), Number(d.Close)
    ])
    console.log("OHLC seriesData:", seriesData);
    return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={{
        chart: { type: 'ohlc' },
        title: { text: 'OHLC Chart' },
        rangeSelector: { selected: 1 },
        xAxis: { type: 'datetime' },
        series: [
          {
            type: 'ohlc',
            name: yCol || 'OHLC',
            data: seriesData,
            tooltip: {
              valueDecimals: 2
            }
          }
        ]
      }}
    />
  );
  } else if (
    chartType === 'arearange' ||
    chartType === 'areasplinerange' ||
    chartType === 'columnrange'
  ) {
    // Sort data by xCol to ensure proper ordering for time series
    data = getSortedData(data, xCol);
    
    // For time series, convert dates to timestamps; for categories, use the values directly
    seriesData = data.map(d => {
      const xValue = isDate(d[xCol]) ? new Date(d[xCol]).getTime() : d[xCol];
      const lowValue = Number(d[lowCol]);
      const highValue = Number(d[highCol]);
      return [xValue, lowValue, highValue];
    });
  
    const options = {
      chart: { 
        type: chartType,
        height: 400,
        backgroundColor: '#f8f9fa'
      },
      title: { 
  text: `${formatChartType(chartType)}`
},
      xAxis: {
        type: isDate(data[0][xCol]) ? 'datetime' : 'category',
        title: { text: xCol },
        crosshair: true
      },
      yAxis: { 
        title: { text: `${lowCol} - ${highCol}` },
        gridLineWidth: 1
      },
      tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: '',
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.low}</b> - <b>{point.high}</b><br/>'
      },
      plotOptions: {
        [chartType]: {
          lineWidth: 0,
          color: 'rgba(124, 181, 236, 0.5)',
          fillOpacity: 0.3,
          zIndex: 0,
          marker: {
            lineWidth: 0,
            lineColor: null,
            fillColor: 'white'
          }
        }
      },
      series: [
        {
          name: `${lowCol} - ${highCol}`,
          data: seriesData,
          type: chartType,
          color: 'rgba(124, 181, 236, 0.5)',
          fillOpacity: 0.3
        }
      ],
      legend: {
        enabled: true
      }
    };
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    );
}
 else if (chartType === 'xrange') {
  if (!xCol || !yCol || !zCol || !labelCol || !progressCol) {
  return (
      <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for X-Range Graph:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Start</code></li>
          <li><strong>Y-Axis</strong>: <code>End</code></li>
          <li><strong>Z-Axis</strong>: <code>Category</code></li>
          <li><strong>Label</strong>: <code>Task</code></li>
          <li><strong>Progress</strong>: <code>Progress</code></li>
        </ul>
      </div>
  );
}


  // Step 1: Build category list from zCol
  const categories = [];
  data.forEach(d => {
    if (!categories.includes(d[zCol])) {
      categories.push(d[zCol]);
    }
  });

  // Step 2: Prepare the series data
  const seriesData = data.map(d => {
    const yIndex = categories.indexOf(d[zCol]);
    const start = new Date(d[xCol]).getTime();
    const end = new Date(d[yCol]).getTime();
    const progress = d[progressCol] !== undefined ? parseFloat(d[progressCol]) : 0;

    return {
      x: start,
      x2: end,
      y: yIndex,
      name: d[labelCol] || '',
      partialFill: { amount: progress }
    };
  });

  const options = {
    chart: { type: 'xrange' },
    title: { text: 'X-Range Chart' },
    xAxis: {
      type: 'datetime',
      title: { text: 'Start / End' } 
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        const progress = this.point.partialFill?.amount ?? 0;
        return `
          <b>${this.point.name}</b><br/>
          Category: ${this.series.yAxis.categories[this.point.y]}<br/>
          Start: ${Highcharts.dateFormat('%e %b %Y', this.point.x)}<br/>
          End: ${Highcharts.dateFormat('%e %b %Y', this.point.x2)}<br/>
          <span style="color: black">Progress: ${(progress * 100).toFixed(0)}%</span>
        `;
      }
    },
    yAxis: {
      title: { text: 'Category' },
      categories: categories,
      reversed: true
    },
    series: [
      {
        name: chartType,
        borderColor: 'gray',
        pointWidth: 20,
        data: seriesData,
        showInLegend: false,
        dataLabels: {
          enabled: true,
          useHTML: true,
          formatter: function () {
            const progress = this.point.partialFill?.amount ?? 0;
            return `<span style="color: black;">${this.point.name}: ${(progress * 100).toFixed(0)}%</span>`;
          }
        },
        partialFill: {
          fill: 'rgba(75, 85, 99, 0.7)' // Light gray fill for remaining
        }
      }
    ]
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}


 else if (chartType === 'scatter') {
  if (!xCol || !yCol) {
    return <p className="text-gray-500">X and Y columns are required for Scatter chart.</p>;
  }

  data = getSortedData(data, xCol);

  const seriesData = data
    .filter(d => d[xCol] !== undefined && d[yCol] !== undefined)
    .map(d => ({
      name: String(d[xCol]),
      y: Number(d[yCol])
    }));

  const options = {
    chart: { type: 'scatter' },
    title: { text: 'Scatter Chart' },
    xAxis: {
      categories: seriesData.map(d => d.name),
      title: { text: xCol }
    },
    yAxis: {
      title: { text: yCol }
    },
    tooltip: {
      headerFormat: '',
      pointFormat: `<b>${xCol}:</b> {point.name}<br/><b>${yCol}:</b> {point.y}`
    },
    series: [{
      name: `${yCol} vs ${xCol}`,
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
else if (chartType === 'bellcurve') {
  // ✅ 1. Raw data validation
  const rawData = data.map(d => Number(d[xCol])).filter(n => !isNaN(n));
  console.log("🔍 Bell Curve rawData:", rawData);

  // ✅ 2. Check if bellcurve module is loaded
  console.log("🔍 Bellcurve module loaded:", !!Highcharts.seriesTypes?.bellcurve);

  const options = {
    chart: {
      type: 'spline',
      height: 500,
      backgroundColor: 'white'
    },
    title: {
      text:  'Bell Curve'
    },
    xAxis: [{
      title: { text: xCol || 'Data' },
      alignTicks: false
    }, {
      title: { text: 'Bell curve' },
      alignTicks: false,
      opposite: true
    }],
    yAxis: [{
      title: { text: 'Data' }
    }, {
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    series: [
      {
        name: 'Bell curve',
        type: 'bellcurve',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1,
        pointsInInterval: 20 
      },
      {
        name: 'Data',
        type: 'scatter',
        data: rawData,
        accessibility: {
          exposeAsGroupOnly: true
        },
        marker: {
          radius: 1.5
        }
      }
    ]
  };
  // ✅ Plugin: Add zones and σ labels once globally
  const pluginId = '__bellcurve_plugin_added__';
  if (!window[pluginId]) {
    (({ addEvent, seriesTypes }) => {
      const decoratedSeries = [];
      addEvent(seriesTypes.bellcurve, 'render', function () {
        if (decoratedSeries.includes(this)) return;
        decoratedSeries.push(this);

        const pointsInInterval = this.options.pointsInInterval || 10;
        const labels = ['3σ', '2σ', 'σ', 'μ', 'σ', '2σ', '3σ'];
        const opacities = [0.1, 0.2, 0.6, 1, 1, 0.6, 0.2, 0.1];

        const zones = this.points
          .filter((point, i) => i % pointsInInterval === 0)
          .map((point, i) => ({
            value: point.x,
            fillColor: `rgba(44, 175, 254, ${opacities[i]})`
          }));

        this.update({ zoneAxis: 'x', zones });
const labeledPoints = this.points
  .filter((point, i) => i % pointsInInterval === 0)
  .slice(0, labels.length); // ✅ limit to 7 zones only

console.log("👀 Labeled points:", labeledPoints.map(p => p.x)); // optional debug

labeledPoints.forEach((point, i) => {
  point.update({
    color: 'black',
    dataLabels: {
      enabled: true,
      format: labels[i],
      overflow: 'none',
      crop: false,
      y: -2,
      style: {
        fontSize: '13px',
      }
    }
  });
});
      });
    })(Highcharts);
    window[pluginId] = true;
    console.log("✅ Bell curve plugin applied");
  }

  return (
    <>
      <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Bell Curve Chart:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Numeric Value </code></li>
        </ul>
      </div>

      {(() => {
        try {
          console.log("✅ Rendering bellcurve chart via HighchartsReact");
          return (
            <HighchartsReact
              highcharts={Highcharts}
              constructorType="chart"
              options={options}
            />
          );
        } catch (err) {
          console.error("❌ Highcharts rendering error:", err);
          return <p>Error rendering Bell Curve chart</p>;
        }
      })()}
    </>
  );
}

else if (chartType === 'dumbbell') {
  data = getSortedData(data, xCol); // Optional sorting

  const seriesData = data.map(d => ({
    name: d[xCol],
    low: Number(d[lowCol]),
    high: Number(d[highCol])
  }));

  const options = {
    chart: {
      type: 'dumbbell',
      inverted: true, // Set to `false` if you want horizontal orientation
      height: 500 // Dynamically scale height
    },
    title: {
      text: `Dumbbell Chart`
    },
    subtitle: {
      text: null
    },
    legend: {
      enabled: false
    },
    xAxis: {
      type: 'category',
      title: {
        text: xCol
      },
      labels: {
        style: {
          fontSize: '11px'
        }
      }
    },
    yAxis: {
      title: {
        text: `${lowCol} → ${highCol}`
      },
      labels: {
        format: '{value}'
      }
    },
    tooltip: {
      shared: true,
      headerFormat: '',
      pointFormat: `
        <b>{point.name}</b><br/>
        <span style="color: #7cb5ec;">●</span> Before: <b>{point.low}</b><br/>
        <span style="color: #434348;">●</span> After: <b>{point.high}</b>
      `,
      useHTML: true
    },
    plotOptions: {
      series: {
        dataSorting: {
          enabled: true,
          sortKey: 'low'
        }
      }
    },
    series: [{
      type: 'dumbbell',
      name: `${lowCol} to ${highCol}`,
      data: seriesData
    }]
  };

  return(<>
  <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Dumbbell Chart:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Label</code></li>
         <li><strong>High</strong>: <code>End</code></li>
          <li><strong>Low</strong>: <code>Start</code></li></ul>
      </div>
  <HighchartsReact highcharts={Highcharts} options={options} />;
    </>
  )
} else if (chartType === 'lollipop') {
  const seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol])
  }));

  const options = {
    chart: {
      type: 'lollipop'
    },
    title: {
      text: 'Lollipop Chart'
    },
    xAxis: {
      type: 'category',
      title: { text: xCol }
    },
    yAxis: {
      title: { text: yCol }
    },
    tooltip: {
      headerFormat: '<b>{point.key}</b><br/>',
      pointFormat: `Value: {point.y}`
    },
    plotOptions: {
      series: {
        lineWidth: 1,
        stickyTracking: true
      }
    },
    series: [
      {
        name: yCol,
        data: seriesData
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
  }else if (chartType === 'streamgraph') {
    // Defensive: check for required columns
    if (!xCol || !yCol || !zCol) {
      return <p className="text-gray-500">X, Y, and Z columns are required for Streamgraph.</p>;
    }
    data = getSortedData(data, xCol); // Sorts by xCol only if it's numeric/date
    const groupedData = {};

    data.forEach(d => {
      const name = d[yCol];
      const xVal = d[xCol];
      const yVal = Number(d[zCol]);
      if (!groupedData[name]) groupedData[name] = {};
      groupedData[name][xVal] = yVal;
    });

    const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const xCategories = [...new Set(data.map(d => d[xCol]))]
      .sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));


    seriesData = Object.entries(groupedData).map(([name, obj]) => ({
      name,
      data: xCategories.map(x => obj[x] || 0)
    }));

    if (seriesData.length === 0 || xCategories.length === 0) {
      return <p className="text-gray-500">No valid data for Streamgraph.</p>;
    }

    // Build streamgraph options and log for debugging
    const streamgraphOptions = {
      chart: { type: 'streamgraph', height: 400 },
      title: { text: 'Streamgraph' },
      xAxis: {
        categories: xCategories,
        crosshair: true,
        title: {
          text: xCol // ✅ this is where the axis heading goes
  }
      },
      yAxis: {
  visible: false,         // ✅ Hide completely
  startOnTick: false,
  endOnTick: false,
  minPadding: 0.1,
  maxPadding: 0.15
},
      series: seriesData.map(series => ({
        type: 'streamgraph',
        name: series.name,
        data: series.data
      })),
      plotOptions: {
        series: {
          label: { minFontSize: 5, maxFontSize: 15 },
          stacking: 'stream',
          lineWidth: 0,
          marker: { enabled: false }
        }
      }
    };
    return (
      <div style={{ width: '100%', height: 400 }}>
        <HighchartsReact highcharts={Highcharts} options={streamgraphOptions} />
      </div>
    );
}else if (chartType === 'heatmap') {
  const categoriesX = [...new Set(data.map(d => d[xCol]).filter(Boolean))];
  const categoriesY = [...new Set(data.map(d => d[yCol]).filter(Boolean))];

  seriesData = data
    .filter(d => d[xCol] && d[yCol] && d[zCol] !== undefined && d[zCol] !== '')
    .map(d => [
      categoriesX.indexOf(d[xCol]),
      categoriesY.indexOf(d[yCol]),
      Number(d[zCol])
    ]);

  optionsAxis = {
    xAxisCategories: categoriesX,
    yAxisCategories: categoriesY
  };

  colorAxisConfig = {
    min: 0,
    stops: [
      [0, '#ffffff'],
      [0.5, '#7cb5ec'],
      [1, '#1a237e']
    ]
  };

  plotOptionsConfig = {
    heatmap: {
      borderWidth: 1
    }
  };
}
else if (chartType === 'boxplot') {
  const isXTime = data.every(d => isDate(d[xCol]));
  let categories = [];

  if (!isXTime) {
    categories = data.map(d => d[xCol]);
  }

  // Define a color palette
  const colorPalette = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'];

  // Map your data into boxplot points with color
  seriesData = data.map((d, i) => ({
    x: isXTime ? new Date(d[xCol]).getTime() : i,
    low: Number(d[lowCol]),
    q1: Number(d[q1Col]),
    median: Number(d[medianCol]),
    q3: Number(d[q3Col]),
    high: Number(d[highCol]),
    color: colorPalette[i % colorPalette.length]  // Cycle through colors
  }));

  const options = {
    chart: { type: 'boxplot' },
    title: { text: 'Boxplot' },
    xAxis: isXTime
      ? { type: 'datetime', title: { text: xCol } }
      : { categories, title: { text: xCol } },
    yAxis: {
      title: { text: 'Values' }
    },
    series: [
      {
        name: 'Boxplot',
        data: seriesData,
        tooltip: {
          headerFormat: '<em>{point.key}</em><br/>',
          pointFormat:
            'Low: {point.low}<br/>Q1: {point.q1}<br/>Median: {point.median}<br/>Q3: {point.q3}<br/>High: {point.high}'
        }
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

  else if (chartType === 'pareto') {
 data = [...data].sort((a, b) => Number(b[yCol]) - Number(a[yCol]));
  const categories = data.map(d => d[xCol]);
  const values = data.map(d => Number(d[yCol]));
    console.log('Pareto categories:', categories);
  console.log('Pareto values:', values);
  // Cumulative percentage logic
  const total = values.reduce((sum, val) => sum + val, 0);
  let cumulative = 0;
  const cumulativePercent = values.map(val => {
    cumulative += val;
    return +(cumulative / total * 100).toFixed(2);
  });

  seriesData = [
    {
      type: 'column',
      name: 'Frequency',
      data: values,
      yAxis: 0
    },
    {
      type: 'pareto',
      name: 'Cumulative %',
      baseSeries: 0,
      yAxis: 1,
      tooltip: {
        valueSuffix: '%'
      }
    }
  ];
  optionsAxis = {
    xAxisCategories: categories
    
  };
  yAxisConfig = [
    {
      title: { text: 'Frequency' }
    },
    {
      title: { text: 'Cumulative %' },
      opposite: true,
      max: 100
    }
  ];
  const options = {
    chart: { type: 'column' },
    title: { text: `Pareto Chart`},
    xAxis: {
  categories: categories,
  crosshair: true,
  title: {
    text: xCol 
  }
},
    yAxis: yAxisConfig,
    tooltip: { shared: true },
    series: seriesData
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}
 else if (chartType === 'flags') {
  seriesData = data.map(d => ({
    x: Date.parse(d[xCol]),
    title: d[labelCol] || '',
    text: d[labelCol] || ''
  }));

  const options = {
    chart: {
      type: 'line', // Use a line base to allow flags on x-axis
      backgroundColor: '#fff',
      height: 500,
      style: {
        fontFamily: 'Inter, sans-serif'
      }
    },
    title: {
      text: 'Flags Graph',
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#222'
      }
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: xCol,
        style: { color: '#666' }
      },
      gridLineWidth: 0.5,
      gridLineColor: '#ddd',
      labels: {
        style: { color: '#444' }
      }
    },
    yAxis: {
      visible: false // no Y axis needed for flags only
    },
    tooltip: {
      backgroundColor: '#fff',
      borderColor: '#ccc',
      borderRadius: 6,
      shadow: true,
      style: {
        color: '#222',
        fontSize: '13px'
      },
      useHTML: true,
      formatter: function () {
        return `<b>${this.point.title}</b><br>${new Date(this.x).toDateString()}`;
      }
    },
    plotOptions: {
      flags: {
        shape: 'flag', // can be 'circlepin' or 'squarepin'
        style: {
          fontSize: '13px',
          fontWeight: 'bold'
        }
      }
    },
    series: [
      {
        type: 'line',
        name: 'Hidden Base',
        data: [],
        enableMouseTracking: false,
        showInLegend: false,
        marker: { enabled: false },
        lineWidth: 0,
        visible: false
      },
      {
        type: 'flags',
        name: 'Events',
        data: seriesData,
        shape: 'flag',
        color: '#0ea5e9',
        fillColor: '#fff',
        lineWidth: 1.5,
        borderColor: '#0ea5e9',
        style: {
          color: '#0ea5e9'
        },
        y: -50 // lift the flags above the axis a bit
      }
    ],
    credits: { enabled: false }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}


  else if (chartType === 'errorbar') {
  const isXTime = data.every(d => isDate(d[xCol]));

const categories = data.map(d => d[xCol]); // xCol = 'City', for example
const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1'];

const baseSeriesData = data.map((d, i) => ({
  y: (Number(d[lowCol]) + Number(d[highCol])) / 2,
  color: colors[i % colors.length] // cycle colors if more than 5
}));
const errorBarData = data.map(d => [Number(d[lowCol]), Number(d[highCol])]);

  const options = {
    chart: {
      type: 'column' // ✅ This ensures visible bars beneath error bars
    },
    title: { text: 'Error Bar' },
    xAxis: isXTime
      ? { type: 'datetime', title: { text: xCol } }
      : { categories, title: { text: xCol } },
    yAxis: {
      title: { text: yCol }
    },
    series: [
      {
        name: yCol,
        type: 'column', // ✅ Base values shown as column bars
        data: baseSeriesData
      },
      {
        name: 'Error',
        type: 'errorbar',
        linkedTo: ':previous', // ✅ attaches to previous series
        data: errorBarData,
        tooltip: {
          pointFormat: '(Low: {point.low}, High: {point.high})<br/>'
        }
      }
    ]
  };

  return (<>
  <div className="text-sm text-gray-400 mb-4">
        <p><strong>Error Bar Calculation:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong></strong>(High + Low)/2<code></code></li>
       </ul>
      </div>
  <HighchartsReact highcharts={Highcharts} options={options} />;
  </>
)}
else if (chartType === 'variwide') {
  const categories = data.map(d => d[xCol]);

  seriesData = data.map(d => ({
    name: d[xCol], // used in tooltip
    y: Number(d[yCol]), // height
    z: Number(d[zCol])  // width
  }));

  const options = {
    chart: { type: 'variwide' },
    title: { text:'Variwide Chart' },
    xAxis: {
      categories,
      title: { text: xCol }
    },
    yAxis: {
      title: { text: yCol }
    },
    plotOptions: {
      series: {
        variwide: true,
        dataLabels: {
          enabled: true,
          format: '{point.y}'
        }
      }
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b><br/><b>Value:</b> {point.y}<br/><b>Width:</b> {point.z}'
    },
    series: [
      {
        name: yCol,
        data: seriesData
      }
    ]
  };

return (
  <>
          <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Variwide:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Category</code></li>
          <li><strong>Y-Axis</strong>: <code>Value</code></li>
          <li><strong>Z-Axis</strong>: <code>Width</code></li>
        </ul>
      </div>

    <HighchartsReact highcharts={Highcharts} options={options} />
  </>
);
 }
else if (chartType === 'timeline') {
  const formatPrettyDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};
  // Sort by Date
  data = data.sort((a, b) => Date.parse(a[xCol]) - Date.parse(b[xCol]));
  // Prepare data with Event (Date) in name field
  seriesData = data.map(d => ({
    name: `${d['Event']} : ${formatPrettyDate(d[xCol])}`, // show event name with date
    label: d[yCol],                      // yCol = 'Label'
    description: d[zCol] || ''           // zCol = 'Description'
  }));

  const options = {
    chart: {
      type: 'timeline',
      inverted: false,
      zoomType: 'x',
      backgroundColor: '#fff',
      style: {
        fontFamily: 'Inter, sans-serif'
      },
      height: 500
    },
    title: {
      text: 'Timeline Graph',
      style: {
        fontSize: '18px',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      type: 'category',
      visible: false
    },
    yAxis: {
      gridLineWidth: 1,
      title: null,
      labels: { enabled: false }
    },
    tooltip: {
      backgroundColor: '#fff',
      borderColor: '#ccc',
      borderRadius: 6,
      shadow: true,
      style: {
        fontSize: '13px'
      },
      headerFormat: '',
      pointFormat: `
        <span style="font-size: 14px;"><b>{point.label}</b></span><br/>
        <span>{point.description}</span>
      `
    },
    series: [{
      data: seriesData,
      colorByPoint: true,
      borderColor: '#fff',
      borderWidth: 2,
      dataLabels: {
        allowOverlap: false,
        format: `<span style="color:{point.color}">●</span> 
                 <b>{point.name}</b>`,
        style: {
          fontSize: '13px'
        }
      },
      marker: {
        symbol: 'square',
        radius: 12, 
        lineColor: '#fff',
        lineWidth: 2
      },
      lineWidth: 0 
    }],
    credits: {
      enabled: false
    }
  };
  return (
    <div>
      <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Timeline Graph:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Date</code></li>
          <li><strong>Y-Axis</strong>: <code>Label</code></li>
          <li><strong>Z-Axis</strong>: <code>Description</code></li>
        </ul>
      </div>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
if (chartType === 'dependencywheel') {
  if (!xCol || !yCol || !zCol) {
    return <p className="text-gray-500">Please select From (X), To (Y), and Weight (Z) columns.</p>;
  }
  const seriesData = data.map(row => ({
    from: row[xCol],
    to: row[yCol],
    weight: parseFloat(row[zCol]) || 1
  }));
  const options = {
    chart: {
      type: 'dependencywheel'
    },
    title: { text: 'Dependency Wheel' },
    series: [{
      keys: ['from', 'to', 'weight'],
      data: seriesData,
      type: 'dependencywheel',
      name: 'Dependencies'
    }]
  };

  return(
    <>
          <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Dependency Wheel:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Source</code></li>
          <li><strong>Y-Axis</strong>: <code>Target</code></li>
          <li><strong>Z-Axis</strong>: <code>Value</code></li>
        </ul>
      </div>

    <HighchartsReact highcharts={Highcharts} options={options} />;
    </>
)}
if (chartType === 'organization') {
  const chartData = data.map(d => ({
    from: d[xCol],   // parent
    to: d[yCol],     // child
    label: d[labelCol] || '',  // optional role/title
  }));

  const nodes = Array.from(new Set([
  ...data.map(d => d[xCol]),
  ...data.map(d => d[yCol])
])).map(name => {
  const label = data.find(d => d[yCol] === name)?.[labelCol];
  return {
    id: name,
    name: label || name, // This becomes the visible title in the box
    description: label && label !== name ? label : '', // Only show if it's different
  };
});


  const options = {
    chart: {
      height: 600,
      inverted: true,
      type: 'organization',
    },
    title: {
      text: 'Organization Chart',
    },
    series: [{
      type: 'organization',
      name: 'Organization',
      keys: ['from', 'to'],
      data: chartData.map(({ from, to }) => [from, to]),
      nodes,
      colorByPoint: false,
      color: '#007ad0',
      dataLabels: {
        color: 'white',
      },
      borderColor: 'white',
      nodeWidth: 65
    }],
    tooltip: {
      outside: true
    },
    exporting: {
      allowHTML: true,
      sourceWidth: 800,
      sourceHeight: 600
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
if (chartType === 'networkgraph') {
  // Data validation
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-sm text-gray-400 mb-4">
        <p><strong>No data available for Network Graph</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Source</code></li>
          <li><strong>Y-Axis</strong>: <code>Target</code></li>
        </ul>
      </div>
    );
  }

  // Filter out invalid data entries
  const validData = data.filter(d => d && d[xCol] && d[yCol]);
  
  if (validData.length === 0) {
    return (
      <div className="text-sm text-gray-400 mb-4">
        <p><strong>No valid data for Network Graph</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Source</code></li>
          <li><strong>Y-Axis</strong>: <code>Target</code></li>
        </ul>
      </div>
    );
  }

  const links = validData.map(d => ({
    from: d[xCol],
    to: d[yCol]
  }));

  const allNodes = Array.from(new Set([
    ...validData.map(d => d[xCol]),
    ...validData.map(d => d[yCol])
  ]));

  const graph = {};
  validData.forEach(d => {
    if (!graph[d[xCol]]) graph[d[xCol]] = [];
    graph[d[xCol]].push(d[yCol]);
  });

  const sources = new Set(validData.map(d => d[xCol]));
  const targets = new Set(validData.map(d => d[yCol]));
  const origins = Array.from(sources).filter(s => !targets.has(s));

  const colorPalette = [
    '#1f77b4', '#ff7f0e', '#2ca02c',
    '#d62728', '#9467bd', '#17becf',
    '#e377c2', '#8c564b', '#bcbd22'
  ];

  const nodeColorMap = {};
  const visited = new Set();
  let colorIndex = 0;

  function assignColorDFS(node, color) {
    if (visited.has(node)) return;
    visited.add(node);
    nodeColorMap[node] = color;
    if (graph[node]) {
      graph[node].forEach(child => assignColorDFS(child, color));
    }
  }

  origins.forEach(origin => {
    nodeColorMap[origin] = '#999'; // Default neutral color for origins
    const children = graph[origin] || [];
    children.forEach(child => {
      const color = colorPalette[colorIndex % colorPalette.length];
      colorIndex++;
      assignColorDFS(child, color);
    });
  });
// Count the degree of each node (number of connections)
const degreeMap = {};
validData.forEach(d => {
  degreeMap[d[xCol]] = (degreeMap[d[xCol]] || 0) + 1;
  degreeMap[d[yCol]] = (degreeMap[d[yCol]] || 0) + 1;
});

// Generate node objects with radius based on degree
const nodes = allNodes.map(name => {
  const label = validData.find(d => d[yCol] === name)?.[labelCol];
  const degree = degreeMap[name] || 1;
  return {
    id: name,
    name: label && label !== name ? label : '',
    color: nodeColorMap[name] || '#ccc',
    marker: {
      radius: Math.max(4, Math.min(20, degree * 2))  // You can tweak the scale
    }
  };
});


  const options = {
    chart: { type: 'networkgraph' },
    title: { text: 'Network Graph' },
    plotOptions: {
      networkgraph: {
        keys: ['from', 'to'],
        layoutAlgorithm: {
          enableSimulation: true,
          friction: -0.9
        }
      }
    },
    series: [{
      data: links,
      nodes: nodes,
      dataLabels: {
        enabled: true,
        linkFormat: '',
        style: { fontSize: '12px' }
      }
    }]
  };

  return (
    <>
      <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Network Graph:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Source</code></li>
          <li><strong>Y-Axis</strong>: <code>Target</code></li>
        </ul>
      </div>
      <HighchartsReact ref={chartRef} highcharts={Highcharts} options={options} />
    </>
  );
}

else if (chartType === 'bullet') {
  const categories = data.map(d => d[xCol]);

  const colorPalette = [
      '#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
    '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'
  ];

  const seriesData = data.map((d, i) => ({
    y: Number(d[yCol]),
    target: Number(d[zCol]),
    color: colorPalette[i % colorPalette.length] // Assign unique color per row
  }));

  const plotBands = [
   { from: 0, to: 50, color: 'rgba(128, 128, 128, 0.3)' },
    { from: 50, to: 80, color: 'rgba(128, 128, 128, 0.2)' },
    { from: 80, to: 1e6, color: 'rgba(128, 128, 128, 0.1)' }
  ];

  const bulletOptions = {
    chart: {
      inverted: true,
      marginLeft: 135,
      type: 'bullet',
      height:400// Increased row height
    },
    title: { text: 'Bullet Graph' },
    legend: { enabled: false },
    xAxis: {
      categories: categories,
      labels: {
        useHTML: true,
        style: {
          fontSize: '13px'
        }
      }
    },
    yAxis: {
      title: null,
      plotBands: plotBands,
      gridLineWidth: 0
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        targetOptions: {
          width: '200%'
        }
      }
    },
    series: [{
      data: seriesData
    }],
    tooltip: {
      pointFormat: '<b>{point.y}</b> (with target at {point.target})'
    },
    credits: { enabled: false },
    exporting: { enabled: false }
  };

  return <HighchartsReact highcharts={Highcharts} options={bulletOptions} />;
}

else if (chartType === 'gauge') {
  const point = data?.[0];
  if (!point || xCol == null || yCol == null) {
    return <p className="text-gray-500">X and Y columns are required for Gauge chart.</p>;
  }

  const label = point[xCol];
  const value = Number(point[yCol]);

  const options = {
    chart: {
      type: 'gauge',
      height: 400
    },
    title: {
      text: `Gauge Chart` // Label from xCol
    },
    pane: {
      startAngle: -150,
      endAngle: 150,
      background: [
        {
          backgroundColor: '#EEE',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
        }
      ]
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: yCol
      },
      plotBands: [
        { from: 0, to: 60, color: '#55BF3B' },
        { from: 60, to: 80, color: '#DDDF0D' },
        { from: 80, to: 100, color: '#DF5353' }
      ]
    },
    tooltip: {
      valueSuffix: '',
      pointFormat: `<b>${label}</b><br/>Value: {point.y}`
    },
    series: [
      {
        name: yCol,
        data: [value],
        tooltip: {
          valueSuffix: ''
        },
        dataLabels: {
          format: `<div style="text-align:center">
                     <span style="font-size:18px">{y}</span><br/>
                     <span style="font-size:14px;opacity:0.6">${label}</span>
                   </div>`
        }
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

else if (chartType === 'pie' || chartType === 'donut') {
  seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol])
  }));

  const options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: false
      }
    },
    title: { text: chartType === 'donut' ? 'Donut Chart' : 'Pie Chart' },
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b>: {point.y}'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        innerSize: chartType === 'donut' ? '50%' : undefined, // Donut
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}',
          style: {
            fontWeight: 'bold',
            color: '#333',
            textOutline: 'none'
          }
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Data',
      colorByPoint: true,
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
else if (chartType === 'pie3d') {
  seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol])
  }));

  const options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: { text: '3D Pie Chart' },
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b>: {point.y}'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        depth: 35, // ✅ Required for 3D Pie to show
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}',
          style: {
            fontWeight: 'bold',
            color: '#333',
            textOutline: 'none'
          }
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Data',
      colorByPoint: true,
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

else if (chartType === 'funnel') {
  seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol])
  }));

  const options = {
    chart: {
      type: 'funnel',
      options3d: { enabled: false }
    },
    title: { text: 'Funnel Chart' },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y}',
          softConnector: true
        }
      }
    },
    series: [{
      name: 'Funnel Data',
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

else if (chartType === 'variablepie' || chartType === 'variable_pie') {
  seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol]),       // slice size
    z: Number(d[zCol] || 1)   // radius size
  }));

  const options = {
    chart: { type: 'variablepie' },
    title: { text: 'Variable Pie Chart' },
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b>: {point.y}'
    },
    plotOptions: {
      variablepie: {
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}',
          style: {
            fontWeight: 'bold',
            color: '#333',
            textOutline: 'none'
          }
        }
      }
    },
    series: [{
      name: 'Variable Pie',
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
 else if (chartType === 'bubble') {
  if (!xCol || !yCol || !zCol || !labelCol) {
    return <p className="text-gray-500">X, Y, Z, and Label columns are required for Bubble chart.</p>;
  }

  seriesData = data
    .filter(d => d[xCol] && d[yCol] && d[zCol] && d[labelCol])
    .map(d => ({
      name: d[labelCol], // e.g., Country or City
      x: Number(d[xCol]), // e.g., GDP
      y: Number(d[yCol]), // e.g., Population
      z: Number(d[zCol]), // e.g., Area or Population for bubble size
      custom: d           // full row for tooltip
    }));

  const bubbleOptions = {
    chart: { type: 'bubble', plotBorderWidth: 1, zoomType: 'xy' },
    title: { text: 'Bubble Chart' },
    xAxis: {
      title: { text: xCol },
      startOnTick: true,
      endOnTick: true,
      gridLineWidth: 1
    },
    yAxis: {
      title: { text: yCol },
      startOnTick: true,
      endOnTick: true
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        const d = this.point.custom;
        return `
          <b>${this.point.name}</b><br/>
          <b>${xCol}:</b> ${this.point.x.toLocaleString()}<br/>
          <b>${yCol}:</b> ${this.point.y.toLocaleString()}<br/>
          <b>${zCol}:</b> ${d[zCol]?.toLocaleString?.() ?? this.point.z}
        `;
      }
    },
    series: [{
      name: 'Bubble Data',
      data: seriesData,
      minSize: 10,
      maxSize: 60
    }]
  };

  return( 
  <>
  <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Bubble Chart:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Numeric Value</code></li>
          <li><strong>Y-Axis</strong>: <code>Numeric Value</code></li>
          <li><strong>Z-Axis</strong>: <code>Numeric Value</code></li>
           <li><strong>Label</strong>: <code>Label Name</code></li>
        </ul> <br></br>
          <p><strong>Note: </strong> <code>Values mapped on the Z-Axis determine the size of the bubble.</code> </p>
      </div>
  <HighchartsReact highcharts={Highcharts} options={bubbleOptions} />;
  </>
)}


  else if (chartType === 'packedbubble') {
    seriesData = data.map(d => ({
  name: d[xCol],  // this becomes the visible label on the bubble
  value: Number(d[zCol])
}))
  
plotOptionsConfig = {
  packedbubble: {
    minSize: '30%',
    maxSize: '120%',
    layoutAlgorithm: {
      gravitationalConstant: 0.05,
      splitSeries: false,
      seriesInteraction: true,
      parentNodeLimit: true
    },
    dataLabels: {
      enabled: true,
      format: '{point.name}',
      allowOverlap : true,
      style: {
        color: 'black',
        textOutline: 'none',
        fontWeight: 'normal'
      }
    }
  }
};
return (
  <>
          <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Packed Bubble:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Category</code></li>
          <li><strong>Y-Axis</strong>: <code>Value</code></li>
        </ul>
      </div>

    <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: { type: 'packedbubble' },
        title: { text: 'Packed Bubble Chart' },
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.value}'
        },
        plotOptions: plotOptionsConfig,
        series: [
          {
            type: 'packedbubble',
            name: yCol || 'Packed Bubbles',
            data: seriesData
          }
        ]
      }}
    />
  </>); 
  } else if (chartType === 'venn') {
    // Defensive: check for required columns
    if (!xCol || !zCol) {
      return <p className="text-gray-500">X and Z columns are required for Venn.</p>;
    }
    seriesData = data
      .filter(d => d[xCol] && d[zCol]) // Ignore rows missing Set1 or Value
      .map(d => {
        const sets = [d[xCol].toString().trim()];
        if (d[yCol]) sets.push(d[yCol].toString().trim());
        return {
          sets,
          value: Number(d[zCol]) || 0 // fallback to 0 if null/NaN
        };
      });

    if (seriesData.length === 0) {
      return <p className="text-gray-500">No valid data for Venn.</p>;
    }

    const vennOptions = {
      chart: { type: 'venn', height: 400 },
      title: { text: 'Venn Diagram' },
      series: [
        {
          type: 'venn',
          name: 'Venn Data',
          data: seriesData
        }
      ],
      plotOptions: {
        venn: {
          dataLabels: {
            enabled: true,
            format: '{point.sets}'
          }
        }
      }
    };

    return (
      <>
          <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Venn Diagram:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Set 1</code></li>
          <li><strong>Y-Axis</strong>: <code>Set 2</code></li>
          <li><strong>Z-Axis</strong>: <code>Value</code></li>
        </ul>
      </div>

      <div style={{ width: '100%', height: 400 }}>
        <HighchartsReact highcharts={Highcharts} options={vennOptions} />
      </div>
      </>
    );
  }
  // Sankey chartType handler
  else if (chartType === 'sankey') {
    // Defensive: check for required columns
    if (!xCol || !yCol || !zCol) {
      return <p className="text-gray-500">X, Y, and Z columns are required for Sankey.</p>;
    }
    // Map data for sankey: from, to, weight
    const sankeyData = data
      .filter(d => d[xCol] && d[yCol] && d[zCol] !== undefined && d[zCol] !== null && d[zCol] !== '')
      .map(d => [d[xCol], d[yCol], Number(d[zCol])]);

    if (sankeyData.length === 0) {
      return <p className="text-gray-500">No valid data for Sankey.</p>;
    }

    const sankeyOptions = {
      chart: { type: 'sankey', height: 400 },
      title: { text: 'Sankey Diagram' },
      series: [
        {
          keys: ['from', 'to', 'weight'],
          data: sankeyData,
          type: 'sankey',
          name: 'Sankey Data',
          dataLabels: { enabled: true, format: '{point.from} → {point.to}' }
        }
      ]
    };

    return (
      <>
          <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Sankey Diagram:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Source</code></li>
          <li><strong>Y-Axis</strong>: <code>Target</code></li>
          <li><strong>Z-Axis</strong>: <code>Value</code></li>
        </ul>
      </div>

      <div style={{ width: '100%', height: 400 }}>
        <HighchartsReact highcharts={Highcharts} options={sankeyOptions} />
      </div>
      </>
    );
  }
  // arcdiagram and other chartTypes continue here...
 if (chartType === 'arcdiagram') {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p className="text-gray-500">Awaiting data...</p>;
  }

  if (!xCol || !yCol) {
    return <p className="text-gray-500">X and Y columns are required for Arc Diagram.</p>;
  }

  const arcData = data
  .filter(d => d && d[xCol] && d[yCol])
  .map(d => [
    String(d[xCol]),  // Source
    String(d[yCol]),  // Target
    valueCol && d[valueCol] !== undefined && d[valueCol] !== '' ? Number(d[valueCol]) : 1
  ]);

  if (arcData.length === 0) {
    return <p className="text-gray-500">No valid data for Arc Diagram.</p>;
  }
  // Count how many times each node appears in from/to
const nodeCounts = {};

arcData.forEach(([from, to]) => {
  nodeCounts[from] = (nodeCounts[from] || 0) + 1;
  nodeCounts[to] = (nodeCounts[to] || 0) + 1;
});
const nodes = Object.entries(nodeCounts).map(([id, count]) => ({
  id,
  marker: {
    radius: Math.min(100, 20 + count * 12)
  }
}));

  const options = {
    chart: { type: 'arcdiagram', height: 500 },
    title: { text: 'Arc Diagram' },
    tooltip: {
  useHTML: true,
  formatter: function () {
    if (this.point.from && this.point.to) {
      return `Connection: <b>${this.point.from}</b> → <b>${this.point.to}</b><br/>Weight: <b>${this.point.weight}</b>`;
    } else {
      return `<b>${this.point.name}</b><br/>Connections: ${nodeCounts[this.point.name] || 0}`;
    }
  }
},
    series: [
      {
        type: 'arcdiagram',
        keys: ['from', 'to', 'weight'],
        name: 'Connections',
        data: arcData,
        linkWeight: 1.5,
        centeredLinks: true,
        offset: '65%', 
        nodes: nodes,  
        dataLabels: {
          enabled: true,
          rotation: 0,
          y: 30,
          verticalAlign: 'top',
          color: 'var(--highcharts-neutral-color-100, black)',
          padding: 0
        }
      }
    ]
  };

  return (
    <>
    <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Arc Diagram:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code> Source</code></li>
          <li><strong>Y-Axis</strong>: <code>Target</code></li>
          <li><strong>Z-Axis</strong>: <code>Weight</code></li>
        </ul>
      </div>
    <div className="h-[500px] w-full">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    </>
  );
}

if (chartType === 'treegraph') {
  const series = [{
    type: 'treegraph',
    data: data.map(d => ({
      id: d[xCol],
      parent: d[yCol] && d[yCol] !== '' && d[yCol] !== '—' ? d[yCol] : undefined,
      name: d[labelCol]
    })),
    marker: {
      symbol: 'circle'
    },
    dataLabels: {
      enabled: true,
      format: '{point.name}' // ✅ Required to show node labels
    }
  }];

  const options = {
  chart: {
    type: 'treegraph',
    inverted: false
  },
  title: {
    text: 'Treegraph Chart'
  },
  series, // already defined above
  tooltip: {
    pointFormat: '{point.name}'
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  }
};
  return( 
    <>
  <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Tree graph:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Id</code></li>
        </ul>
      </div><HighchartsReact highcharts={Highcharts} options={options} />
      </>);
}


else if (chartType === 'treemap') {
  // Defensive: check for required columns
  if (!xCol || !valueCol) {
    return <p className="text-gray-500">X and Value columns are required for Treemap.</p>;
  }
  
  // Map data for treemap - ensure proper hierarchy
  const parentColorPalette = [
  '#0ea5e9', // sky blue
  '#fb7185',
  '#34d399', // emerald green
  '#a78bfa', // soft purple
  '#f87171', // coral red
  '#ef476f', // vibrant raspberry pink
'#06d6a0', // fresh mint green
'#8338ec'  // vivid purple
];
let parentColorIndex = 0;


seriesData = data
  .filter(d => d[xCol])
  .map((d, index, arr) => {
    const id = String(d[xCol]).trim();
    const parentRaw = d[yCol];
    const parent = (parentRaw === '' || parentRaw === '—' || parentRaw === null || parentRaw === undefined)
      ? undefined
      : String(parentRaw).trim();

    // Check if this node has children (i.e. it's a container)
    const hasChildren = arr.some(child => String(child[yCol]).trim() === id);

    const node = {
      id,
      name: d[xCol],
      parent
    };

    if (!hasChildren && d[valueCol] !== undefined && d[valueCol] !== '') {
      node.value = Math.max(0, Number(d[valueCol]) || 0);
    }

    // Dynamically assign color to containers (nodes with children)
    if (hasChildren) {
      node.color = parentColorPalette[parentColorIndex % parentColorPalette.length];
      parentColorIndex++;
    }

    return node;
  });

  // Check for valid data
  if (seriesData.length === 0) {
    return <p className="text-gray-500">No valid data for Treemap.</p>;
  }

  // Create a map of all IDs for validation
  const allIds = new Set(seriesData.map(d => d.id));
  
  // Validate parent references and fix orphaned nodes
  seriesData = seriesData.map(d => {
    // If parent doesn't exist in data, make it a root node
    if (d.parent && !allIds.has(d.parent)) {
      console.warn(`Treemap: Parent "${d.parent}" not found for node "${d.id}". Making it a root node.`);
      return { ...d, parent: undefined };
    }
    return d;
  });

  // Ensure at least one root node exists
  const hasRootNode = seriesData.some(d => d.parent === undefined);
  if (!hasRootNode && seriesData.length > 0) {
    console.warn('Treemap: No root nodes found. Setting first node as root.');
    seriesData[0].parent = undefined;
  }

  // Build treemap options
  const treemapOptions = {
    chart: { 
      type: 'treemap', 
      height: 500,
      backgroundColor: '#f8f9fa'
    },
    title: { text: 'Treemap Chart' },
    colorAxis: {
      visible: false,
      minColor: '#E3F2FD',
      maxColor: '#2196F3'
    },
    series: [
  {
    type: 'treemap',
    name: 'Treemap',
    allowTraversingTree: true, // ✅ enables drill-like visual tree structure
    alternateStartingDirection: true, // ✅ improves layout diversity
    layoutAlgorithm: 'sliceAndDice',
    nodeSizeBy: 'area', // ✅ or 'value'
    interactByLeaf: false, 
    allowDrillToNode: true,
    levelIsConstant: false,
    dataLabels: {
      format: '{point.name}',
      style: {
        textOutline: 'none',
        color: '#333',
        fontSize: '13px'
      }
    },
    borderRadius: 4,
    levels: [
  {
    level: 1, // Global → top-level container
    layoutAlgorithm: 'sliceAndDice',
    groupPadding: 4,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: '#ccc',
    colorByPoint: true,
    dataLabels: {
      enabled: true,
      headers: true,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#111',
        textTransform: 'uppercase'
      }
    }
  },
  {
    level: 2, // Europe, North America
    layoutAlgorithm: 'squarified',
    colorByPoint: true,
    borderWidth: 3,
    borderColor: '#fff',
    dataLabels: {
      enabled: true,
      headers: true, // ✅ THIS is crucial for showing "North America"
      style: {
        fontSize: '12px',
        color: '#333'
      }
    }
  },
  {
    level: 3, // USA, Canada, Germany, UK
    borderWidth: 2,
    colorByPoint: true,
    dataLabels: {
      enabled: true,
      inside: true,
      headers: true,
      style: {
        fontSize: '11px',
        color: '#fff'
      }
    }
  }
],
    data: seriesData
  }
],
   tooltip: {
  headerFormat: '',
  pointFormat: `
    <b>{point.name}</b><br/>
    Value: {point.value}<br/>
    Parent: {point.parent}
  `,
  formatter: function () {
    return `
      <b>${this.point.name}</b><br/>
      Value: ${this.point.value ?? '-'}<br/>
      Parent: ${this.point.parent || 'None'}
    `;
  }
}

  };
  
  // Debug: log the data structure
  console.log('Treemap data:', seriesData);
  console.log('Treemap options:', treemapOptions);
  
  return (
    <>
    <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Treemap:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code> Category Label</code></li>
          <li><strong>Y-Axis</strong>: <code>Parent Container</code></li>
          <li><strong>Z-Axis</strong>: <code>Value</code></li>
        </ul>
      </div>
    <div style={{ width: '100%', height: 500 }}>
      <HighchartsReact highcharts={Highcharts} options={treemapOptions} />
    </div>
    </>
  );
}

else if (chartType === 'tilemap') {
  const seriesData = data.map(d => ({
    x: Number(d[xCol]),
    y: Number(d[yCol]),
    value: Number(d[zCol]),
    name: d[labelCol] || '',
    'hc-a2': d[labelCol] || '' // Optional short label
  }));

  const options = {
    chart: {
      type: 'tilemap',
      inverted: true,
      height: '500'
    },
    title: {
      text: 'Tilemap'
    },
    xAxis: {
      visible: false
    },
    yAxis: {
      visible: false
    },
    colorAxis: {
      dataClasses: [
        {
          from: 0,
          to: 120,
          color: '#dfe3ee',
          name: '< 120'
        },
        {
          from: 120,
          to: 160,
          color: '#7fb3d5',
          name: '120–160'
        },
        {
          from: 160,
          to: 180,
          color: '#2980b9',
          name: '160–180'
        },
        {
          from: 180,
          color: '#154360',
          name: '> 180'
        }
      ]
    },
    tooltip: {
      pointFormat: '<b>{point.name}</b>: {point.value}'
    },
    plotOptions: {
      series: {
        type: 'tilemap',
        colsize: 0.9,          // Controls tile width
        rowsize: 0.9, 
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          style: {
            textOutline: false,
            fontSize: '15px'
          }
        }
      }
    },
    series: [{
      name: 'Cities',
      data: seriesData
    }]
  };

  return (
    <>
        <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Tilemap:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>X</code></li>
          <li><strong>Y-Axis</strong>: <code>Y</code></li>
          <li><strong>Z-Axis</strong>: <code>Value</code></li>
          <li><strong>Label</strong>: <code>Name</code></li>
        </ul>
      </div>
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
    </>
  );
}else if (chartType === 'map') {
  const seriesData = data.map(d => ({
    'hc-key': d.key, // or whatever key your GeoJSON uses (like "iso-a3" or "code")
    value: Number(d.value)
  }));

  const options = {
    chart: {
      map: geoJson
    },
    title: {
      text: 'Map Chart'
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, '#ffffff'],
        [0.5, '#7cb5ec'],
        [1, '#1a237e']
      ]
    },
    series: [{
      data: seriesData,
      joinBy: 'hc-key',
      name: 'Sample Data',
      states: {
        hover: {
          color: '#a4edba'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }]
  };

  return <HighchartsReact highcharts={Highcharts} constructorType={'mapChart'} options={options} />;
}
else if (chartType === 'mapbubble') {
  const seriesData = data.map(d => ({
   name: d[labelCol] || '',
    z: Number(d[zCol]),
    lat: Number(d[yCol]),
    lon: Number(d[xCol])
  }));

const options = {
  chart: { map: geoJson },
  title: { text: 'Map Bubble Chart' },
  mapNavigation: {
    enabled: true,
    buttonOptions: { verticalAlign: 'bottom' }
  },
  colorAxis: {
  min: 0,
  stops: [
    [0, '#f1c40f'],   // yellow
    [0.5, '#e67e22'], // orange
    [1, '#c0392b']    // red
  ]
},

  series: [
    {
      mapData: geoJson, // <-- This ensures the map background loads
      name: 'Base Map',
      borderColor: '#A0A0A0',
      nullColor: '#E0E0E0',
      showInLegend: false
    },
    {
      type: 'mapbubble',
      name: 'Data',
      data: seriesData,
      joinBy: null,
      tooltip: { pointFormat: '{point.name}: {point.z}' },
      minSize: 4,
      maxSize: '12%',
      color: '#1a237e'
    }
  ]
};


  return(
    <>
       <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Map Bubble:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Longitude</code></li>
          <li><strong>Y-Axis</strong>: <code>Latitude</code></li>
          <li><strong>Z-Axis</strong>: <code>Value</code></li>
          <li><strong>Label</strong>: <code>Label Name</code></li>
        </ul>
      </div>
    <HighchartsReact highcharts={Highcharts} constructorType="mapChart" options={options} />;
</>)}


///--->MAP LINE MAP POINT
else if (chartType === 'mapline') {
  console.log('geoJson for mapline:', geoJson);
  const options = {
    chart: {
      map: polygonToLineStringGeoJson,
      height: 500 // or set a fixed height via CSS
    },
    title: {
      text: 'Map Line'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    series: [
      {
        mapData: polygonToLineStringGeoJson,
        type: 'mapline',
        name: 'Borders',
        color: '#1a237e', // deep blue for visibility
        nullColor: '#E0E0E0',
        borderWidth: 1,
        showInLegend: false,
        enableMouseTracking: true
      }
    ]
  };

  return (
    <div className="h-[500px] w-full">
  <HighchartsReact
    highcharts={Highcharts}
    constructorType="mapChart"
    options={options}
  />
</div>

  );
}
else if (chartType === 'mappoint') {
  console.log('labelCol:', labelCol);
console.log(yCol);
  const seriesData = data.map(d => ({
    name: d[labelCol] || '',
    lat: Number(d[yCol]),
    lon: Number(d[xCol])
  }));
  console.log('First mapped point:', seriesData[0]);
  const options = {
    chart: { map: worldMap },
    title: { text: 'Map Point Chart' },
    mapNavigation: {
      enabled: true,
      buttonOptions: { verticalAlign: 'bottom' }
    },
    series: [
      {
        mapData: worldMap,
        name: 'Basemap',
        borderColor: '#606060',
        nullColor: '#f0f0f0',
        showInLegend: false
        
      },
      {
        type: 'mappoint',
        name: 'Locations',
        color: '#1a237e',
        data: seriesData,
        marker: {
  symbol: 'circle',
  radius: 5,
  fillColor: 'red',
  lineColor: 'black',
  lineWidth: 1
},
tooltip: {
  pointFormat: '{point.name}<br>Lat: {point.lat}<br>Lon: {point.lon}'
}
      }
    ]
  };

  return (
    <div className="h-[500px] w-full">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="mapChart"
        options={options}
      />
    </div>
  );
}


///---> MAP LINE MAP POINT RELATED CODE ENDS HERE

else if (chartType === 'sunburst') {
  // Defensive: check for required columns
  if (!xCol) {
    return <p className="text-gray-500">X column is required for Sunburst.</p>;
  }
  // Map data for sunburst
  seriesData = data
    .filter(d => d[xCol])
    .map(d => ({
      id: d[xCol],
      parent: d[yCol] || '',
      name: d[xCol],
      value: zCol ? Number(d[zCol]) : undefined
    }));

  // Ensure at least one root node (parent: '')
  if (!seriesData.some(d => d.parent === '')) {
    if (seriesData.length > 0) seriesData[0].parent = '';
  }

  if (seriesData.length === 0) {
    return <p className="text-gray-500">No valid data for Sunburst.</p>;
  }

  // Build sunburst options and log for debugging
  const sunburstOptions = {
    chart: { type: 'sunburst', height: 400 },
    title: { text: 'Sunburst Chart' },
    series: [
      {
        type: 'sunburst',
        data: seriesData,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
          format: '{point.name}',
          filter: {
            property: 'innerArcLength',
            operator: '>',
            value: 16
          }
        },
        levels: [
          {
            level: 1,
            levelIsConstant: false,
            dataLabels: { rotationMode: 'parallel' }
          },
          {
            level: 2,
            colorByPoint: true
          },
          {
            level: 3,
            colorVariation: {
              key: 'brightness',
              to: -0.5
            }
          }
        ]
      }
    ]
  };
  return (
    <div style={{ width: '100%', height: 400 }}>
      <HighchartsReact highcharts={Highcharts} options={sunburstOptions} />
    </div>
  );
}
else if (chartType === 'wordcloud') {
  const seriesData = data.map(d => ({
    name: d.text,
    weight: Number(d.weight)
  }));

  const options = {
    series: [{
      type: 'wordcloud',
      data: seriesData,
      name: 'Word Frequency'
    }],
    title: {
      text: 'Word Cloud'
    }
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}else if (chartType === 'windbarb') {
  if (!xCol || !yCol || !zCol) {
    return <p className="text-gray-500">Datetime, Direction (°), and Speed columns are required for Windbarb chart.</p>;
  }

  function getBeaufortLabel(speed) {
  if (speed < 1) return 'Calm';
  if (speed < 5) return 'Light Breeze';
  if (speed < 11) return 'Gentle Breeze';
  if (speed < 19) return 'Moderate Breeze';
  if (speed < 28) return 'Fresh Breeze';
  if (speed < 38) return 'Strong Breeze';
  if (speed < 49) return 'Near Gale';
  if (speed < 61) return 'Gale';
  if (speed < 74) return 'Severe Gale';
  if (speed < 88) return 'Storm';
  if (speed < 102) return 'Violent Storm';
  return 'Hurricane';
}

function getWindDirectionLabel(degree) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(degree / 45) % 8;
  return directions[index];
}


const seriesData = data
  .filter(d => d[xCol] && d[yCol] !== undefined && d[zCol] !== undefined)
  .map(d => {
    let rawDate = d[xCol];
    let timestamp;

    const speed = Number(d[zCol]);
    const direction = Number(d[yCol]);

    return [
      timestamp,
      isNaN(speed) ? null : speed,
      isNaN(direction) ? null : direction
    ];
  });

  const windbarbOptions = {
    title: {
      text: 'Wind barb'
    },
    xAxis: {
      type: 'datetime',
      offset: 40,
      title: { text: xCol }
    },
    yAxis: {
      title: {
        text: 'Wind Speed (m/s)'
      }
    },
    tooltip: {
  shared: true,
  formatter: function () {
    const point = this.points?.[0]?.point || this.point;
    const speed = point.y || point.value || 0;
    const direction = point.direction || 0;
    const date = Highcharts.dateFormat('%A, %b %e %Y %H:%M', point.x);

    return `
      <b>${date}</b><br/>
      <span style="color:#2caffe">●</span> Wind Speed: <b>${speed} m/s</b> (${getBeaufortLabel(speed)})<br/>
      <span style="color:#8884d8">●</span> Wind Direction: <b>${direction}°</b> (${getWindDirectionLabel(direction)})
    `;
  },
  useHTML: true
},
    plotOptions: {
      series: {
        pointStart: seriesData.length > 0 ? seriesData[0][0] : undefined,
        pointInterval: 3600000 // Optional: 1 hour intervals (adjust as needed)
      }
    },
    series: [
      {
        type: 'area',
        keys: ['x', 'y', 'direction'], // match your structure
        data: seriesData,
        name: 'Wind Speed',
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#2caffe'],
            [1, 'rgba(44, 175, 255, 0)']
          ]
        },
        tooltip: {
          valueSuffix: ' m/s'
        },
        states: {
          inactive: {
            opacity: 1
          }
        }
      },
      {
        type: 'windbarb',
        keys: ['x', 'value', 'direction'],
        data: seriesData,
        name: 'Wind Direction',
        showInLegend: false,
        tooltip: {
          valueSuffix: ' m/s'
        }
      }
    ]
  };

  return (
    <>
     <div className="text-sm text-gray-400 mb-4">
        <p><strong>Required Columns for Windbarb Graph:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>X-Axis</strong>: <code>Timestamp</code></li>
          <li><strong>Y-Axis</strong>: <code>Direction</code></li>
          <li><strong>Z-Axis</strong>: <code>Speed</code></li>
      </ul><br></br>
 <div className='flex items-left text-gray-400 text-sm font-bold'>
      Directions:
    </div>
    <div className="flex gap-4 text-sm text-gray-400 mb-3">
      <span className="flex items-center gap-1"><ArrowDown size={18} /> : 0° / 360° (North)</span>
      <span className="flex items-center gap-1"><ArrowLeft size={18} /> : 90° (East)</span>
      <span className="flex items-center gap-1"><ArrowUp size={18} /> : 180° (South)</span>
      <span className="flex items-center gap-1"><ArrowRight size={18} /> : 270° (West)</span>
    </div>
    <div className='flex items-left text-gray-400 text-sm font-bold'>
      Note: Windbarb arrows point in the direction the wind is coming from — not where it’s going.
    </div>
      </div>
      
    <HighchartsReact highcharts={Highcharts} options={windbarbOptions} />
  </>);
}

else if (chartType === 'solidgauge') {
  const seriesData = data.map(d => ({
    name: d[xCol],       // Label
    y: Number(d[yCol])   // Gauge value
  }));

  const pane = seriesData.map((_, i) => ({
    center: [`${(100 / seriesData.length) * (i + 0.5)}%`, '50%'],
    size: '50%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  }));

  const yAxisConfig = seriesData.map((point, i) => ({
    min: 0,
    max: 100,
    pane: i,
    stops: [
      [0.1, '#55BF3B'],
      [0.5, '#DDDF0D'],
      [0.9, '#DF5353']
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: { text: point.name, y: -70 },
    labels: { y: 16 }
  }));

  const series = seriesData.map((point, i) => ({
    name: point.name,
    type: 'solidgauge',
    data: [point.y],
    yAxis: i,
    dataLabels: {
      format: `<div style="text-align:center">
        <span style="font-size:25px">{y}</span><br/>
        <span style="font-size:12px;opacity:0.4">${point.name}</span>
      </div>`
    }
  }));

  const plotOptionsConfig = {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  };

  const tooltip = {
    enabled: false
  };

  const options = {
    chart: { type: 'solidgauge' },
    title: { text: 'Solid Gauge' },
    pane,
    yAxis: yAxisConfig,
    series,
    plotOptions: plotOptionsConfig,
    tooltip
  };

  return (
    <div className="h-[500px] w-full">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
else if (chartType === 'scatter3d') {
  data = getSortedData(data, xCol); // Sorts by xCol only if it's numeric/date
  seriesData = data.map(d => [
    Number(d[xCol]),
    Number(d[yCol]),
    Number(d[zCol])
  ]);

  const options = {
    chart: {
      type: 'scatter3d',
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 30,
        depth: 500,
        viewDistance: 5,
        frame: {
          bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
          back: { size: 1, color: 'rgba(0,0,0,0.04)' },
          side: { size: 1, color: 'rgba(0,0,0,0.06)' }
        }
      }
    },
    title: {
      text: '3D Scatter Chart'
    },
    xAxis: {
      title: { text: xCol },
      min: null,
      max: null,
      gridLineWidth: 1
    },
    yAxis: {
      title: { text: yCol },
      min: null,
      max: null
    },
    zAxis: {
      title: { text: zCol },
      min: null,
      max: null
    },
    tooltip: {
      pointFormat: `${xCol}: {point.x}<br>${yCol}: {point.y}<br>${zCol}: {point.z}`
    },
    series: [{
      type: 'scatter3d',
      name: yCol || 'Scatter 3D',
      data: seriesData,
      marker: {
        radius: 4
      }
    }]
  };

  return (
    <div className="h-[500px] w-full">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}
else if (chartType === 'pyramid') {
  seriesData = data
    .filter(d => d[xCol] && d[yCol])
    .map(d => ({
      name: d[xCol],
      y: Number(d[yCol])
    }));

  const options = {
    chart: { type: 'pyramid' },
    title: { text: 'Pyramid Chart' },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y}',
          color: '#000000'
        }
      }
    },
    series: [{
      name: 'Pyramid Data',
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
else if (chartType === 'pyramid3d') {
  seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol])
  }));

  const options = {
    chart: {
      type: 'pyramid3d',
      options3d: {
        enabled: true,
        alpha: 10,
        depth: 50,
        viewDistance: 50
      }
    },
    title: {
      text: '3D Pyramid Chart'
    },
    tooltip: {
      pointFormat: '<b>{point.name}</b>: {point.y}'
    },
    plotOptions: {
      pyramid3d: {
        neckWidth: '0%',    // ✅ Makes it a true pyramid
        neckHeight: '0%',   // ✅ No neck = true pyramid
        width: '80%',
        height: '80%',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y}', // ✅ Show label and value
          style: {
            fontWeight: 'bold',
            color: '#333',
            textOutline: 'none'
          }
        }
      }
    },
    series: [{
      name: 'Pyramid Data',
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
else if (chartType === 'column3d') {
  data = getSortedData(data, xCol);

  seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol])
  }));

  const options = {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: '3D Column Chart'
    },
    xAxis: {
      type: 'category',
      title: { text: xCol }
    },
    yAxis: {
      title: { text: yCol }
    },
    tooltip: {
      pointFormat: '<b>{point.name}</b>: {point.y}'
    },
    plotOptions: {
      column: {
        depth: 25,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}',
          style: {
            fontWeight: 'bold',
            color: '#333',
            textOutline: 'none'
          }
        }
      }
    },
    series: [{
      name: yCol,
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

function getWindDirectionLabel(degree) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(degree / 45) % 8;
  return directions[index];
}

function formatVectorTooltip(point) {
  const x = point.x;
  const y = point.y;
  const angle = point.originalDirection || 0;
  const length = point.length || 0;
  const label = getWindDirectionLabel(angle);
  console.log("Tooltip updated");
  return `
    <b>[${x}, ${y}]</b><br/>
    <b>Length:</b> ${length}<br/>
    <b>Direction:</b> ${angle}° (${label})
  `;
}

if (chartType === 'vector') {
  if (!xCol || !yCol || !directionCol || !lengthCol) {
    return <p className="text-gray-500">X, Y, Direction, and Length columns are required for Vector chart.</p>;
  }
const seriesData = data
  .filter(d =>
  d[xCol] != null &&
  d[yCol] != null &&
  d[directionCol] != null &&
  d[lengthCol] != null
)
  .map(d => ({
    x: Number(d[xCol]),
    y: Number(d[yCol]),
    direction: ((Number(d[directionCol]) + 180) % 360) + 180, // For rendering
    length: Number(d[lengthCol]),
    originalDirection: Number(d[directionCol])              // Preserve original
  }));

  const xValues = seriesData.map(d => d.x);
  const yValues = seriesData.map(d => d.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const vectoroptions = {
  chart: { type: 'vector', inverted: false, height: 500 },
  title: { text: 'Vector Field' },
 xAxis: {
  title: { text: xCol },
  min: xMin,
  max: xMax,
  gridLineWidth: 1
},
yAxis: {
  title: { text: yCol },
  min: yMin,
  max: yMax,
  gridLineWidth: 1
},

  plotOptions: {
    vector: {
      vectorLength: 30,
      enableMouseTracking: true
    }
  },
  tooltip: {
    useHTML: true,
    formatter: function () {
      const x = this.point.x;
      const y = this.point.y;
      const angle = this.point.originalDirection || 0;
      const length = this.point.length || 0;
      const label = getWindDirectionLabel(angle);
      return `
        <b>[${x}, ${y}]</b><br/>
        <b>Length:</b> ${length}<br/>
        <b>Direction:</b> ${angle}°
      `;
    }
  },
  series: [
    {
      type: 'vector',
      name: 'Vector Data',
      data: seriesData
    }
  ]
};
return (
  <div>
    <div className='flex items-left text-gray-400 text-sm font-bold'>
      Directions:
    </div>
    <div className="flex gap-4 text-sm text-gray-400 mb-3">
      <span className="flex items-center gap-1"><ArrowDown size={18} /> : 0° / 360° </span>
      <span className="flex items-center gap-1"><ArrowLeft size={18} /> : 90° </span>
      <span className="flex items-center gap-1"><ArrowUp size={18} /> : 180° </span>
      <span className="flex items-center gap-1"><ArrowRight size={18} /> : 270° </span>
    </div>
    <HighchartsReact highcharts={Highcharts} options={vectoroptions} />
  </div>
);
}

else if (chartType === 'histogram') {
  if (!xCol) {
    return <p className="text-gray-500">X column is required for Histogram.</p>;
  }

  // Extract only the valid numeric data from the selected column
  const values = data
    .map(d => Number(d[xCol]))
    .filter(val => !isNaN(val));

  if (values.length === 0) {
    return <p className="text-gray-500">No numeric data available for Histogram.</p>;
  }

  const histogramOptions = {
    chart: {
      type: 'histogram',
      height: 500
    },
    title: {
      text: 'Histogram'
    },
    xAxis: [{
      title: { text: xCol },
      alignTicks: false
    }, {
      title: { text: 'Histogram' },
      alignTicks: false,
      opposite: true
    }],
    yAxis: [{
      title: { text: 'Count' }
    }, {
      title: { text: 'Histogram' },
      opposite: true
    }],
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>Range:</b> {point.x:.2f} - {point.x2:.2f}<br/><b>Count:</b> {point.y}'
    },
    plotOptions: {
      histogram: {
        binWidth: undefined, // Let Highcharts determine optimal bin count
        borderWidth: 0.5,
        borderColor: '#666',
        accessibility: {
          point: {
            valueDescriptionFormat: '{index}. {point.x:.2f} to {point.x2:.2f}, count: {point.y}.'
          }
        }
      }
    },
    series: [
      {
        name: 'Histogram',
        type: 'histogram',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 'raw-data-series',
        zIndex: -1
      },
      {
        name: 'Raw Data',
        type: 'scatter',
        data: values,
        id: 'raw-data-series',
        marker: {
          radius: 2
        },
        visible: false // Hide raw points by default
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={histogramOptions} />;
}

else if (chartType === 'columnpyramid') {
  seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol])
  }));

  const options = {
    chart: {
      type: 'columnpyramid'
    },
    title: {
      text: 'Column Pyramid Chart'
    },
    xAxis: {
      type: 'category',
      title: { text: xCol }
    },
    yAxis: {
      title: { text: yCol }
    },
    tooltip: {
      pointFormat: '<b>{point.name}</b>: {point.y}'
    },
    plotOptions: {
      columnpyramid: {
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}'
        }
      }
    },
    series: [{
      name: yCol,
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
else if (chartType === 'line') {
  data = getSortedData(data, xCol); // Sort by X if numeric/date
  const seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol])
  }));

  const options = {
    chart: {
      type: 'line',
      height: 500
    },
    title: {
      text: 'Line Chart'
    },
    xAxis: {
      categories: data.map(d => d[xCol]),
      title: { text: xCol }
    },
    yAxis: {
      title: { text: yCol }
    },
    tooltip: {
       headerFormat: '',
      pointFormat: `<b>${xCol}:</b> {point.name}<br/><b>${yCol}:</b> {point.y}`
    },
    series: [{
      name: yCol,
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

else if (chartType === 'area') {
  if (!xCol || !yCol) {
    return <p className="text-gray-500">X and Y columns are required for Area chart.</p>;
  }
  data = getSortedData(data, xCol);
  const seriesData = data
    .filter(d => d[xCol] !== undefined && d[yCol] !== undefined)
    .map(d => ({
      name: String(d[xCol]),
      y: Number(d[yCol])
    }));

  const options = {
    chart: { type: 'area' },
    title: { text: 'Area Chart' },
    xAxis: {
      categories: seriesData.map(d => d.name),
      title: { text: xCol }
    },
    yAxis: {
      title: { text: yCol }
    },
    tooltip: {
      headerFormat: '', // Removes the bold title label
      pointFormat: `<b>${xCol}:</b> {point.name}<br/><b>${yCol}:</b> {point.y}`
    },
    series: [{
      name: `${yCol} vs ${xCol}`,
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
else if (chartType === 'areaspline') {
  if (!xCol || !yCol) {
    return <p className="text-gray-500">X and Y columns are required for Area Spline chart.</p>;
  }
  data = getSortedData(data, xCol);
  const seriesData = data
    .filter(d => d[xCol] !== undefined && d[yCol] !== undefined)
    .map(d => ({
      name: String(d[xCol]),
      y: Number(d[yCol])
    }));

  const options = {
    chart: { type: 'areaspline' },
    title: { text: 'Area Spline Chart' },
    xAxis: {
      categories: seriesData.map(d => d.name),
      title: { text: xCol }
    },
    yAxis: {
      title: { text: yCol }
    },
    tooltip: {
      headerFormat: '', // remove default title
      pointFormat: `<b>${xCol}:</b> {point.name}<br/><b>${yCol}:</b> {point.y}`
    },
    series: [{
      name: `${yCol} vs ${xCol}`,
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
else if (chartType === 'column') {
  data = getSortedData(data, xCol); // Sort by X for clarity

  const seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol])
  }));

  const columnOptions = {
    chart: { type: 'column' },
    title: { text: 'Column Chart' },
    xAxis: {
      type: 'category',
      title: { text: xCol }
    },
    yAxis: {
      title: { text: yCol },
      allowDecimals: true
    },
    tooltip: {
      headerFormat: '', // Removes the bold title label
      pointFormat: `<b>${xCol}:</b> {point.name}<br/><b>${yCol}:</b> {point.y}`
    },
    series: [{
      name: yCol,
      data: seriesData,
      colorByPoint: true
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={columnOptions} />;
}

else if (chartType === 'bar') {
  data = getSortedData(data, xCol); // Optional: Sort by X

  const seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol])
  }));

  const barOptions = {
    chart: { type: 'bar' },
    title: { text: 'Bar Chart' },
    xAxis: {
      type: 'category',
      title: { text: xCol }
    },
    yAxis: {
      title: { text: yCol },
      allowDecimals: true
    },
    tooltip: {
      headerFormat: '', // Removes the bold title label
      pointFormat: `<b>${xCol}:</b> {point.name}<br/><b>${yCol}:</b> {point.y}`
    },
    series: [{
      name: yCol,
      data: seriesData,
      colorByPoint: true
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={barOptions} />;
}

else if (chartType === 'spline') {
  if (!xCol || !yCol) {
    return <p className="text-gray-500">X and Y columns are required for Spline chart.</p>;
  }
data = getSortedData(data, xCol);
  const seriesData = data
    .filter(d => d[xCol] !== undefined && d[yCol] !== undefined)
    .map(d => ({
      name: String(d[xCol]),
      y: Number(d[yCol])
    }));

  const options = {
    chart: { type: 'spline' },
    title: { text: 'Spline Chart' },
    xAxis: {
      categories: seriesData.map(d => d.name),
      title: { text: xCol }
    },
    yAxis: {
      title: { text: yCol }
    },
    tooltip: {
      headerFormat: '', // Remove bold label like "B"
      pointFormat: `<b>${xCol}:</b> {point.name}<br/><b>${yCol}:</b> {point.y}`
    },
    series: [{
      name: `${yCol} vs ${xCol}`,
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}


else if (chartType === 'area3d') {
  if (!xCol || !yCol) {
    return <p className="text-gray-500">X and Y columns are required for Area 3D chart.</p>;
  }

  // Sort data by X column if it's a date or number
  data = getSortedData(data, xCol);

  // Prepare series data
  const seriesData = data
    .filter(d => d[xCol] !== undefined && d[yCol] !== undefined)
    .map(d => ({
      name: d[xCol],
      y: Number(d[yCol])
    }));

  const options = {
    chart: {
      type: 'area',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      },
      height: 500
    },
    title: {
      text: '3D Area Chart'
    },
    xAxis: {
      type: 'category',
      title: { text: xCol },
      labels: {
        rotation: 0
      }
    },
    yAxis: {
      title: { text: yCol }
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        return `<b>${this.point.name}</b><br/>${yCol}: <b>${this.point.y}</b>`;
      }
    },
    plotOptions: {
      area: {
        depth: 25
      }
    },
    series: [{
      name: yCol,
      data: seriesData
    }]
  };

  return (
    <div className="h-[500px] w-full">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
else if (chartType === 'funnel3d') {
  seriesData = data.map(d => ({
    name: d[xCol],
    y: Number(d[yCol])
  }));

  const options = {
    chart: {
      type: 'funnel3d',
      options3d: {
        enabled: true,
        alpha: 10,
        depth: 50,
        viewDistance: 50
      }
    },
    title: {
      text: 'Funnel 3D Chart'
    },
    tooltip: {
      pointFormat: '<b>{point.name}</b>: {point.y}'
    },
    plotOptions: {
      funnel3d: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y}',
          style: {
            fontWeight: 'bold',
            color: '#333',
            textOutline: 'none'
          }
        },
        neckWidth: '30%',
        neckHeight: '25%',
        width: '80%',
        height: '80%'
      }
    },
    series: [{
      name: 'Stages',
      data: seriesData
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
else if (chartType === 'cylinder') {
  if (!xCol || !yCol) {
    return <p className="text-gray-500">X and Y columns are required for Cylinder chart.</p>;
  }

  // Prepare series data
  const seriesData = data
    .filter(d => d[xCol] !== undefined && d[yCol] !== undefined)
    .map(d => ({
      name: String(d[xCol]),
      y: Number(d[yCol])
    }));

  const options = {
    chart: {
      type: 'cylinder',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 100,
        viewDistance: 25
      },
      height: 500
    },
    title: {
      text: '3D Cylinder Chart'
    },
    xAxis: {
      type: 'category',
      title: { text: xCol },
      labels: { rotation: 0 }
    },
    yAxis: {
      title: { text: yCol }
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        return `<b>${this.point.name}</b><br/>${yCol}: <b>${this.point.y}</b>`;
      }
    },
    plotOptions: {
      series: {
        depth: 50,
        colorByPoint: true
      }
    },
    series: [{
      name: yCol,
      data: seriesData
    }]
  };

  return (
    <div className="h-[500px] w-full">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
if (chartType === 'hlc') {
  data = getSortedData(data, xCol);
  seriesData = data.map(d => ({
    x: Date.parse(d[xCol]),
    high: Number(d.High),
    low: Number(d.Low),
    close: Number(d.Close)
    
  }));
}
  else {
    data = getSortedData(data, xCol);
    const yData = data.map(d => Number(d[yCol]));
    seriesData = yData;
  }

  const chartTypesMap = {
    // Basic Charts
    line: 'line',
    spline: 'spline',
    area: 'area',
    areaspline: 'areaspline',
    column: 'column',
    bar: 'bar',
    scatter: 'scatter',
    pie: 'pie',
    donut: 'pie',
    bubble: 'bubble',

    // Financial
    candlestick: 'candlestick',
    ohlc: 'ohlc',

    // Range/Statistical
    arearange: 'arearange',
    areasplinerange: 'areasplinerange',
    columnrange: 'columnrange',
    boxplot: 'boxplot',
    errorbar: 'errorbar',
    histogram: 'histogram',
    bellcurve: 'bellcurve',
    pareto: 'pareto',
    dumbbell: 'dumbbell',

    // Advanced
    heatmap: 'heatmap',
    waterfall: 'waterfall',
    funnel: 'funnel',
    variablepie: 'variablepie',
    timeline: 'timeline',
    bullet: 'bullet',
    lollipop: 'lollipop',
    streamgraph: 'streamgraph',
    // Hierarchical / Network
    treemap: 'treemap',
    sunburst: 'sunburst',
    sankey: 'sankey',
    dependencywheel: 'dependencywheel',
    organization: 'organization',
    networkgraph: 'networkgraph',
    packedbubble: 'packedbubble',
    venn: 'venn',
    arcdiagram: 'arcdiagram',
    treegraph: 'treegraph',

    // Maps
    tilemap: 'tilemap',
    map: 'map',
    mapbubble: 'mapbubble',

    // Others
    wordcloud: 'wordcloud',
    windbarb: 'windbarb',
    vector: 'vector',
    xrange: 'xrange',
    variwide: 'variwide',
  // 3D Charts
  scatter3d: 'scatter3d',
  pyramid3d: 'pyramid3d',
  pyramid: 'pyramid',
  pie3d: 'pie',
  funnel3d: 'funnel3d',
  column3d: 'column',
  area3d: 'area',
  cylinder: 'cylinder',

  // Financial Charts
  hlc: 'hlc',

  // Pyramid & Polygon
  columnpyramid: 'columnpyramid',

  // Advanced / Statistical
  dotplot: 'dotplot',
  gauge: 'gauge',
  gantt: 'gantt',
  flags: 'flags',


  // Map & Geo
  mappoint: 'mappoint',
  mapline: 'mapline',
  geoheatmap: 'geoheatmap',
  item: 'item'
  };

  const chartTypeLabels = {
    line: 'Line Chart',
    spline: 'Spline Chart',
    area: 'Area Chart',
    areaspline: 'Area Spline Chart',
    column: 'Column Chart',
    bar: 'Bar Graph',
    scatter: 'Scatter Chart',
    pie: 'Pie Chart',
    donut: 'Donut Chart',
    bubble: 'Bubble Chart',
    candlestick: 'Candlestick Chart',
    ohlc: 'OHLC Chart',
    arearange: 'Area Range Chart',
    areasplinerange: 'Area Spline Range Chart',
    columnrange: 'Column Range Chart',
    boxplot: 'Box Plot',
    errorbar: 'Error Bar',
    histogram: 'Histogram',
    bellcurve: 'Bell Curve',
    pareto: 'Pareto Chart',
    dumbbell: 'Dumbbell Chart',
    heatmap: 'Heatmap',
    waterfall: 'Waterfall Chart',
    funnel: 'Funnel Chart',
    variablepie: 'Variable Pie Chart',
    timeline: 'Timeline Chart',
    bullet: 'Bullet Chart',
    lollipop: 'Lolipop Chart',
    treemap: 'Treemap',
    sunburst: 'Sunburst Chart',
    sankey: 'Sankey Diagram',
    dependencywheel: 'Dependency Wheel',
    organization: 'Organization Chart',
    networkgraph: 'Network Graph',
    packedbubble: 'Packed Bubble Chart',
    venn: 'Venn Diagram',
    arcdiagram: 'Arc Diagram',
    treegraph: 'Tree Graph',
    tilemap: 'Tile Map',
    map: 'Map',
    mapbubble: 'Map Bubble Chart',
    wordcloud: 'Word Cloud',
    windbarb: 'Wind Barb',
    vector: 'Vector Chart',
    xrange: 'XRange Chart',
    variwide: 'Variwide Chart',
    streamgraph: 'Streamgraph',
     // 3D Charts
  scatter3d:  '3D Scatter',
  pyramid3d: '3D Pyramid',
  pie3d: '3D Pie Chart',
  funnel3d: '3D Funnel Chart',
  column3d: '3D Column Chart',
  area3d: '3D Area Chart',
  cylinder: 'Cylinder Chart',

  // Financial Charts
  hlc: 'HLC Chart',

  // Pyramid & Polygon

  columnpyramid: 'Column Pyramid Chart',
  pyramid: 'Pyramid Chart',

  // Advanced / Statistical
  dotplot: 'Dot Plot',
  gauge: 'Gauge Chart',
  gantt: 'Gantt Chart',
  flags: 'Flags Chart',

  // Map & Geo
  mappoint: 'Map Point',
  mapline: 'Map Line',
  geoheatmap: 'Geo Heatmap',
  item: 'Item' 
  };

  const hcType = chartTypesMap[chartType];
  const labels = chartTypeLabels[chartType];

  const defaultXAxis = optionsAxis?.xAxisCategories
  ? {
      categories: optionsAxis.xAxisCategories,
      title: { text: xCol }
    }
  : {
      type: ['candlestick', 'ohlc', 'xrange'].includes(chartType) ? 'datetime' : 'category',
      categories: ['pie', 'donut', 'candlestick', 'ohlc', 'xrange'].includes(chartType)
        ? undefined
        : data.map(d => d[xCol]),
      title: { text: xCol }
    };

const defaultYAxis = yAxisConfig || (optionsAxis?.yAxisCategories
  ? {
      categories: optionsAxis.yAxisCategories,
      title: { text: yCol }
    }
  : {
      title: { text: requirements?.needsY ? yCol : '' },
      visible: requirements?.needsY
    });

options = {
  chart: {
  type:
    chartType === 'column3d'
      ? 'column'
      : chartType === 'area3d'
      ? 'area'
      : chartType === 'pie3d'
      ? 'pie'
      : chartType === 'funnel3d'
      ? 'funnel3d'
      : chartType === 'cylinder'
      ? 'cylinder'
      : chartType === 'pyramid'
      ? 'pyramid'
      : hcType,

  ...(chartType === 'column3d' && {
    options3d: {
      enabled: true,
      alpha: 15,
      beta: 15,
      depth: 50,
      viewDistance: 25
    }
  }),
  ...(chartType === 'area3d' && {
    options3d: {
      enabled: true,
      alpha: 15,
      beta: 15,
      depth: 50,
      viewDistance: 25
    }
  }),

  ...(chartType === 'pyramid3d' && {
    options3d: {
      enabled: true,
      alpha: 10,
      depth: 50,
      viewDistance: 50
    }
  }),

  ...(chartType === 'funnel3d' && {
    options3d: {
      enabled: true,
      alpha: 10,
      depth: 100,
      viewDistance: 50
    }
  }),
  ...(chartType === 'cylinder' && {
  options3d: {
    enabled: true,
    alpha: 15,
    beta: 15,
    depth: 50,
    viewDistance: 25
  }
})

},

  title: {
  text:
  chartType === 'histogrambellcurve'
    ? `${labels} of ${xCol}`
    : chartType === 'solidgauge'
    ? 'Solid Gauge Chart'
    : chartType === 'pyramid'
    ? 'Pyramid Chart'
    : `${labels}`


},

  ...(chartType === 'solidgauge' && { pane }),

  xAxis: chartType === 'timeline'
    ? {
        type: 'category',
        gridLineWidth: 1,
        lineWidth: 0,
        margin: 20,
        tickLength: 0
      }
    : defaultXAxis,

  yAxis:
  chartType === 'solidgauge'
    ? yAxisConfig
    : chartType === 'timeline'
    ? { visible: false }
    : defaultYAxis,

  ...(chartType === 'scatter3d' && {
    zAxis: {
      title: { text: zCol }
    }
  }),

  tooltip: {
    pointFormat:
      chartType === 'scatter3d'
        ? `${xCol}: {point.x}<br>${yCol}: {point.y}<br>${zCol}: {point.z}`
        : undefined
  },

  colorAxis: colorAxisConfig,

  plotOptions: {
    column: {
      depth: chartType === 'column3d' ? 25 : undefined
    },
    area: {
      depth: chartType === 'area3d' ? 25 : undefined
    },
    pie: {
      depth: chartType === 'pie3d' ? 45 : 0,
      innerSize: chartType === 'donut' ? '50%' : '0%',
      dataLabels: { enabled: true,
        format: '<b>{point.name}</b>: {point.y}'
       }
    },
    funnel: {
      neckWidth: '30%',
      neckHeight: '25%',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y}'
      }
    },
      pyramid: {
    dataLabels: {
      enabled: true,
      format: '<b>{point.name}</b>: {point.y}',
      color: '#000000'
    }
  },
    scatter3d: {
      width: 10,
      height: 10,
      depth: 10
    },
    cylinder: {
      depth: 25
    },
    

    ...(plotOptionsConfig || {})
  },

  series:
    chartType === 'histogrambellcurve'
      ? seriesData
      : chartType === 'pareto'
  ? seriesData
      : chartType === 'dumbbell'
      ? [
          {
            type: 'dumbbell',
            name: `${yCol} vs ${zCol}`,
            data: seriesData,
            tooltip: {
              pointFormat:
                '<b>{point.name}</b><br>Before: {point.low}<br>After: {point.high}'
            }
          }
        ]
      : chartType === 'timeline'
      ? [
          {
            type: 'timeline',
            data: seriesData,
            showInLegend: false
          }
        ]
      : chartType === 'streamgraph'
      ? seriesData.map(series => ({
          type: 'streamgraph',
          name: series.name,
          data: series.data
        }))
      : chartType === 'sunburst'
      ? [
          {
            type: 'sunburst',
            data: seriesData,
            allowDrillToNode: true,
            cursor: 'pointer',
            dataLabels: {
              format: '{point.name}',
              filter: {
                property: 'innerArcLength',
                operator: '>',
                value: 16
              }
            },
            levels: [
              {
                level: 1,
                levelIsConstant: false,
                dataLabels: { rotationMode: 'parallel' }
              },
              {
                level: 2,
                colorByPoint: true
              },
              {
                level: 3,
                colorVariation: {
                  key: 'brightness',
                  to: -0.5
                }
              }
            ]
          }
        ]
      : chartType === 'venn'
      ? [
          {
            type: 'venn',
            name: 'Venn Data',
            data: seriesData
          }
        ]
      : chartType === 'arcdiagram'
      ? [
          {
            type: 'networkgraph',
            name: 'Arc Diagram',
            data: seriesData,
            marker: {
              radius: 8
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          }
        ]
      : chartType === 'windbarb'
      ? [
          {
            type: 'windbarb',
            name: 'Wind',
            data: seriesData,
            showInLegend: false
          }
        ]
      : chartType === 'funnel3d'
      ? [
          {
            type: 'funnel3d',
            name: yCol || 'Funnel',
            data: seriesData
          }
          
        ]: chartType === 'pyramid'
      ? [
      {
        name: yCol || 'Pyramid Data',
        data: seriesData
      }
        ]: chartType === 'cylinder'
      ? [
          {
            type: 'cylinder',
            name: yCol || 'Cylinder Chart',
            data: seriesData
          }
        ]
      : chartType === 'solidgauge'
  ? series

  : chartType === 'packedbubble'
  ? [
      {
        type: 'packedbubble',
        name: yCol || 'Bubbles',
        data: seriesData,
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          style: {
            color: 'black',
            textOutline: 'none',
            fontWeight: 'normal'
          }
        }
      }
    ] : chartType === 'hlc'
  ? [
      {
        type: 'hlc',
        name: yCol || 'HLC',
        data: seriesData,
        tooltip: {
          pointFormat: 'High: {point.high}<br>Low: {point.low}<br>Close: {point.close}'
        }
      }
    ]

: 
      [
          {
            type: hcType,
            name: yCol || 'Series',
            borderColor: 'gray',
            pointWidth: 20,
            data: seriesData
          }
        ]
};

if (!options) {
  return <div className="text-red-500">Chart Error: Unsupported or incomplete chart config</div>;
}

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={
        ['candlestick', 'ohlc', 'xrange', 'hlc'].includes(chartType) ? 'stockChart' : 'chart'
      }
      options={options}
    />
  );
}

export default HighchartsChart;
