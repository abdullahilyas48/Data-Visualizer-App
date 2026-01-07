import React, { useState, useEffect } from 'react';
// ErrorBoundary for chart rendering
class ChartErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    // Log the error for debugging
    console.error('Chart error caught by boundary:', error, errorInfo);
  }
  
  componentDidUpdate(prevProps) {
    // Reset error state when children change (e.g., when switching tabs)
    if (this.state.hasError && prevProps.children !== this.props.children) {
      this.setState({ hasError: false, error: null });
    }
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-900 text-red-100 p-4 rounded-lg">
          <strong>Chart Error:</strong> {this.state.error?.message || 'An error occurred while rendering the chart.'}
          <br />
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-2 px-3 py-1 bg-red-700 hover:bg-red-600 rounded text-sm"
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
import PlotlyChart from './plotly';
import HighchartsChart from './highcharts';
import PlotlyChartRequirements from './PlotlyChartRequirements';
import HighchartsChartRequirements from './highchartsChartRequirements';
import worldMap from '@highcharts/map-collection/custom/world.geo.json';
import worldMapLine from '@highcharts/map-collection/custom/world-highres2.geo.json';
import Select from 'react-select';

function ChartArea({ data, columns, library, chartConfig, setChartConfig }) {
  const {
  chartType,
  xCol,
  yCol,
  zCol,
  uCol,
  vCol,
  wCol,
  openCol,
  highCol,
  lowCol,
  closeCol,
  medianCol,
  q3Col,
  q1Col,
  labelCol, 
  valueCol,
  directionCol,
  lengthCol,
  progressCol,
} = chartConfig;

  // Chart types supported by Plotly
  const plotlyChartTypes = [
    { value: 'scatter', label: 'Scatter', group: 'Basic Charts' },
    { value: 'bar', label: 'Bar', group: 'Basic Charts' },
    { value: 'line', label: 'Line', group: 'Basic Charts' },
    { value: 'area', label: 'Area', group: 'Basic Charts' },
    { value: 'pie', label: 'Pie', group: 'Basic Charts' },
    { value: 'heatmap', label: 'Heatmap', group: 'Advanced', needsZ: true },
    { value: 'contour', label: 'Contour', group: 'Advanced', needsZ: true },
    { value: 'box', label: 'Box', group: 'Statistical' },
    { value: 'violin', label: 'Violin', group: 'Statistical' },
    { value: 'histogram', label: 'Histogram', group: 'Statistical' },
    { value: 'scatter3d', label: '3D Scatter', group: '3D', needsZ: true },
    { value: 'surface3d', label: '3D Surface', group: '3D', needsZ: true },
    { value: 'choropleth', label: 'Choropleth', group: 'Maps' },
    { value: 'densitytilemap', label: 'Density Map', group: 'Maps' },
    { value: 'candlestick', label: 'Candlestick', group: 'Financial', needsOpen: true, needsHigh: true, needsLow: true, needsClose: true },
    { value: 'ohlc', label: 'OHLC', group: 'Financial', needsOpen: true, needsHigh: true, needsLow: true, needsClose: true },
    { value: 'sunburst', label: 'Sunburst', group: 'Hierarchical' },
    { value: 'treemap', label: 'Treemap', group: 'Hierarchical' },
    { value: 'sankey', label: 'Sankey', group: 'Hierarchical', needsZ: true },
  ];

  // Chart types supported by Highcharts
const highchartsChartTypes = [
  // Basic Charts
  { value: 'line', label: 'Line', group: 'Basic Charts' },
  { value: 'spline', label: 'Spline', group: 'Basic Charts' },
  { value: 'area', label: 'Area', group: 'Basic Charts' },
  { value: 'areaspline', label: 'Area Spline', group: 'Basic Charts' },
  { value: 'column', label: 'Column', group: 'Basic Charts' },
  { value: 'bar', label: 'Bar', group: 'Basic Charts' },
  { value: 'scatter', label: 'Scatter', group: 'Basic Charts' },
  { value: 'pie', label: 'Pie', group: 'Basic Charts' },
  { value: 'bubble', label: 'Bubble', group: 'Basic Charts' },

  // Financial Charts (Highcharts Stock)
  { value: 'candlestick', label: 'Candlestick', group: 'Financial', needsOpen: true, needsHigh: true, needsLow: true, needsClose: true },
  { value: 'ohlc', label: 'OHLC', group: 'Financial', needsOpen: true, needsHigh: true, needsLow: true, needsClose: true },

  // Range & Statistical
  { value: 'arearange', label: 'Area Range', group: 'Statistical' },
  { value: 'areasplinerange', label: 'Area Spline Range', group: 'Statistical' },
  { value: 'columnrange', label: 'Column Range', group: 'Statistical' },
  { value: 'boxplot', label: 'Box Plot', group: 'Statistical' },
  { value: 'errorbar', label: 'Error Bar', group: 'Statistical' },
  { value: 'histogram', label: 'Histogram', group: 'Statistical' },
  { value: 'bellcurve', label: 'Bell Curve', group: 'Statistical' },
  { value: 'pareto', label: 'Pareto', group: 'Statistical' },

  // Advanced Charts
  // { value: 'heatmap', label: 'Heatmap', group: 'Advanced' },
  { value: 'waterfall', label: 'Waterfall', group: 'Advanced' },
  { value: 'variwide', label: 'Variwide', group: 'Advanced' },
  { value: 'funnel', label: 'Funnel', group: 'Advanced' },
  { value: 'variablepie', label: 'Variable Pie', group: 'Advanced' },
  { value: 'timeline', label: 'Timeline', group: 'Advanced' },
  { value: 'bullet', label: 'Bullet', group: 'Advanced' },
  { value: 'lollipop', label: 'Lollipop', group: 'Advanced' },

  // Hierarchical & Network
  { value: 'treemap', label: 'Treemap', group: 'Hierarchical' },
  { value: 'sunburst', label: 'Sunburst', group: 'Hierarchical' },
  { value: 'sankey', label: 'Sankey', group: 'Network' },
  { value: 'dependencywheel', label: 'Dependency Wheel', group: 'Network' },
  { value: 'organization', label: 'Organization Chart', group: 'Network' },
  { value: 'networkgraph', label: 'Network Graph', group: 'Network' },
  { value: 'packedbubble', label: 'Packed Bubble', group: 'Network' },
  { value: 'venn', label: 'Venn Diagram', group: 'Network' },
  { value: 'arcdiagram', label: 'Arc Diagram', group: 'Network' },
  { value: 'treegraph', label: 'Tree Graph', group: 'Network' },

  // Map Charts
  { value: 'tilemap', label: 'Tile Map', group: 'Maps' },
  { value: 'map', label: 'Map', group: 'Maps' },
  { value: 'mapbubble', label: 'Map Bubble', group: 'Maps' },
  // Others
  { value: 'wordcloud', label: 'Word Cloud', group: 'Others' },
  { value: 'windbarb', label: 'Wind Barb', group: 'Others' },
  { value: 'vector', label: 'Vector', group: 'Others' },
  { value: 'solidgauge', label: 'Solid Gauge', group: 'Others' },
  { value: 'xrange', label: 'X-Range', group: 'Statistical' },
{ value: 'dumbbell', label: 'Dumbbell', group: 'Statistical' },
{ value: 'streamgraph', label: 'Streamgraph', group: 'Advanced' },

//NEWLY ADDED GRAPHS:
// 3D Charts
{ value: 'scatter3d', label: 'Scatter 3D', group: '3D Charts' },
{ value: 'pyramid3d', label: 'Pyramid 3D', group: '3D Charts' },
{ value: 'column3d', label: 'Column 3D', group: '3D Charts' },
{ value: 'area3d', label: 'Area 3D', group: '3D Charts' },
{ value: 'pie3d', label: 'Pie 3D', group: '3D Charts' },
{ value: 'funnel3d', label: 'Funnel 3D', group: '3D Charts' },
{ value: 'cylinder', label: 'Cylinder', group: '3D Charts' },

// Maps
// { value: 'mapline', label: 'Map Line', group: 'Maps' },
// { value: 'mappoint', label: 'Map Point', group: 'Maps' },
{ value: 'geoheatmap', label: 'Geo Heatmap', group: 'Maps' },

// Technical / Financial Charts
{ value: 'hlc', label: 'HLC', group: 'Financial Charts' },

// Statistical / Custom Charts
{ value: 'dotplot', label: 'Dot Plot', group: 'Statistical' },
// { value: 'item', label: 'Item Chart', group: 'Statistical' },
{ value: 'flags', label: 'Flags', group: 'Statistical' },
{ value: 'gauge', label: 'Gauge', group: 'Statistical' },

// Project Management
{ value: 'gantt', label: 'Gantt', group: 'Project Management' },

// Pyramid / Funnel Variants
{ value: 'pyramid', label: 'Pyramid', group: 'Pyramid' },
{ value: 'columnpyramid', label: 'Column Pyramid', group: 'Pyramid' },
];

  const chartTypes = library === 'plotly' ? plotlyChartTypes : highchartsChartTypes;
  const groupedChartTypes = chartTypes.reduce((acc, type) => {
    if (!acc[type.group]) acc[type.group] = [];
    acc[type.group].push(type);
    return acc;
  }, {});

  // Find selected chart info to check if it needs Z axis
  const selectedChart = library === 'plotly'
    ? PlotlyChartRequirements[chartType]
    : HighchartsChartRequirements[chartType];

  const needsValue = selectedChart?.needsValue;
  const needsDirection = selectedChart?.needsDirection;
const needsLength = selectedChart?.needsLength;

  const needsX = selectedChart?.needsX ?? true;
  const needsY = selectedChart?.needsY ?? true;
  const needsZ = selectedChart?.needsZ ?? false;
  const needsU = selectedChart?.needsU ?? false;
  const needsV = selectedChart?.needsV ?? false;
  const needsW = selectedChart?.needsW ?? false;
  const needsOpen = selectedChart?.needsOpen ?? false;
  const needsHigh = selectedChart?.needsHigh ?? false;
  const needsLow = selectedChart?.needsLow ?? false;
  const needsClose = selectedChart?.needsClose ?? false;
  const needsQ1 = selectedChart?.needsQ1 ?? false;
  const needsQ3 = selectedChart?.needsQ3 ?? false;
  const needsMedian = selectedChart?.needsMedian ?? false;
  const needsStart = selectedChart?.needsStart ?? false;
  const needsEnd =  selectedChart?.needsEnd ?? false;
  const dropdownArrow = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNjYmQ0ZGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtNiA5IDYgNiA2LTYiLz48L3N2Zz4=')";
  const needsLabel = selectedChart?.needsLabel

  const groupedOptions = Object.entries(groupedChartTypes).map(
  ([label, options]) => ({
    label,
    options: options.map((opt) => ({
      value: opt.value,
      label: opt.label,
    })),
  })
);

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Chart Configuration
        </h3>
        
        <div className="space-y-6">
          {/* Chart Type Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              Chart Type
            </label>
            <Select
  options={groupedOptions}
  value={groupedOptions
    .flatMap((group) => group.options)
    .find((option) => option.value === chartConfig.chartType)}
  onChange={(selectedOption) =>
    setChartConfig((prev) => ({
      ...prev,
      chartType: selectedOption?.value || '',
    }))
  }
  placeholder="Select a chart type"
  isSearchable
  isClearable
  className="text-sm z-50" // ← This helps
  classNamePrefix="react-select"
  menuPlacement="auto"
  menuPortalTarget={document.body} // ← Attach to body to avoid clipping
  styles={{
  control: (base) => ({
    ...base,
    backgroundColor: '#374151',
    borderColor: '#4B5563',
    color: '#fff',
    padding: '0.375rem 0.75rem',
    borderRadius: '0.5rem',
    zIndex: 50,
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#1F2937',
    color: '#fff',
    zIndex: 9999,
  }),
  option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? '#2563EB' : '#1F2937',
    color: '#fff',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#fff',
  }),
  input: (base) => ({
    ...base,
    color: '#fff',
  }),
  placeholder: (base) => ({
    ...base,
    color: '#ffffff', // ← this line makes placeholder white
  }),
  menuPortal: base => ({ ...base, zIndex: 9999 }),
}}
/>

          </div>

          {/* Axis Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {needsX && (
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  X-Axis
                </label>
                <select
                  value={chartConfig.xCol}
                  onChange={(e) => setChartConfig(prev => ({ ...prev, xCol: e.target.value }))}
                  className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
                  style={{ backgroundImage: dropdownArrow }}
                >
                  <option value="" className="text-gray-400">Select column</option>
                  {columns.map((col) => (
                    <option key={col} value={col} className="text-white">
                      {col}
                    </option>
                  ))}
                </select>
              </div>
            )}
            


            {needsY && (
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                  Y-Axis
                </label>
                <select
                  value={chartConfig.yCol}
                  onChange={(e) => setChartConfig(prev => ({ ...prev, yCol: e.target.value }))}
                  className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
                  style={{ backgroundImage: dropdownArrow }}
                >
                  <option value="" className="text-gray-400">Select column</option>
                  {columns.map((col) => (
                    <option key={col} value={col} className="text-white">
                      {col}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {needsZ && (
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Z-Axis
                </label>
                <select
                  value={chartConfig.zCol}
                  onChange={(e) => setChartConfig(prev => ({ ...prev, zCol: e.target.value }))}
                  className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
                  style={{ backgroundImage: dropdownArrow }}
                >
                  <option value="" className="text-gray-400">Select column</option>
                  {columns.map((col) => (
                    <option key={col} value={col} className="text-white">
                      {col}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {needsU && (
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <label className="block text-sm font-medium text-gray-300 mb-2">U Component</label>
                <select
                  value={chartConfig.uCol}
                  onChange={(e) => setChartConfig(prev => ({ ...prev, uCol: e.target.value }))}
                  className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
                  style={{ backgroundImage: dropdownArrow }}
                >
                  <option value="" className="text-gray-400">Select column</option>
                  {columns.map((col) => (
                    <option key={col} value={col} className="text-white">
                      {col}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {needsV && (
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <label className="block text-sm font-medium text-gray-300 mb-2">V Component</label>
                <select
                  value={chartConfig.vCol}
                  onChange={(e) => setChartConfig(prev => ({ ...prev, vCol: e.target.value }))}
                  className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
                  style={{ backgroundImage: dropdownArrow }}
                >
                  <option value="" className="text-gray-400">Select column</option>
                  {columns.map((col) => (
                    <option key={col} value={col} className="text-white">
                      {col}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {needsW && (
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <label className="block text-sm font-medium text-gray-300 mb-2">W Component</label>
                <select
                  value={chartConfig.wCol}
                  onChange={(e) => setChartConfig(prev => ({ ...prev, wCol: e.target.value }))}
                  className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
                  style={{ backgroundImage: dropdownArrow }}
                >
                  <option value="" className="text-gray-400">Select column</option>
                  {columns.map((col) => (
                    <option key={col} value={col} className="text-white">
                      {col}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {needsValue && (
  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
    <label className="block text-sm font-medium text-gray-300 mb-2">Value</label>
    <select
      value={chartConfig.valueCol}
      onChange={(e) => setChartConfig(prev => ({ ...prev, valueCol: e.target.value }))}
      className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
    >
      <option value="" className="text-gray-400">Select column</option>
      {columns.map((col) => (
        <option key={col} value={col} className="text-white">
          {col}
        </option>
      ))}
    </select>
  </div>
)}


            {needsOpen && (
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <label className="block text-sm font-medium text-gray-300 mb-2">Open</label>
                <select
                  value={chartConfig.openCol}
                  onChange={(e) => setChartConfig(prev => ({ ...prev, openCol: e.target.value }))}
                  className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
                  style={{ backgroundImage: dropdownArrow }}
                >
                  <option value="" className="text-gray-400">Select column</option>
                  {columns.map((col) => (
                    <option key={col} value={col} className="text-white">
                      {col}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {needsHigh && (
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <label className="block text-sm font-medium text-gray-300 mb-2">High</label>
                <select
                  value={chartConfig.highCol}
                  onChange={(e) => setChartConfig(prev => ({ ...prev, highCol: e.target.value }))}
                  className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
                  style={{ backgroundImage: dropdownArrow }}
                >
                  <option value="" className="text-gray-400">Select column</option>
                  {columns.map((col) => (
                    <option key={col} value={col} className="text-white">
                      {col}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {needsLow && (
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <label className="block text-sm font-medium text-gray-300 mb-2">Low</label>
                <select
                  value={chartConfig.lowCol}
                  onChange={(e) => setChartConfig(prev => ({ ...prev, lowCol: e.target.value }))}
                  className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
                  style={{ backgroundImage: dropdownArrow }}
                >
                  <option value="" className="text-gray-400">Select column</option>
                  {columns.map((col) => (
                    <option key={col} value={col} className="text-white">
                      {col}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {needsClose && (
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <label className="block text-sm font-medium text-gray-300 mb-2">Close</label>
                <select
                  value={chartConfig.closeCol}
                  onChange={(e) => setChartConfig(prev => ({ ...prev, closeCol: e.target.value }))}
                  className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
                  style={{ backgroundImage: dropdownArrow }}
                >
                  <option value="" className="text-gray-400">Select column</option>
                  {columns.map((col) => (
                    <option key={col} value={col} className="text-white">
                      {col}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {needsQ1 && (
  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
    <label className="block text-sm font-medium text-gray-300 mb-2">Q1</label>
    <select
      value={chartConfig.q1Col}
      onChange={(e) => setChartConfig(prev => ({ ...prev, q1Col: e.target.value }))}
      className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
      style={{ backgroundImage: dropdownArrow }}
    >
      <option value="" className="text-gray-400">Select column</option>
      {columns.map((col) => (
        <option key={col} value={col} className="text-white">{col}</option>
      ))}
    </select>
  </div>
)}

{needsMedian && (
  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
    <label className="block text-sm font-medium text-gray-300 mb-2">Median</label>
    <select
      value={chartConfig.medianCol}
      onChange={(e) => setChartConfig(prev => ({ ...prev, medianCol: e.target.value }))}
      className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
      style={{ backgroundImage: dropdownArrow }}
    >
      <option value="" className="text-gray-400">Select column</option>
      {columns.map((col) => (
        <option key={col} value={col} className="text-white">{col}</option>
      ))}
    </select>
  </div>
)}
{needsDirection && (
  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
    <label className="block text-sm font-medium text-gray-300 mb-2">Direction</label>
    <select
      value={chartConfig.directionCol}
      onChange={(e) =>
        setChartConfig((prev) => ({
          ...prev,
          directionCol: e.target.value
        }))
      }
      className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm text-white"
    >
      <option value="">Select column</option>
      {columns.map((col) => (
        <option key={col} value={col}>
          {col}
        </option>
      ))}
    </select>
  </div>
)}

{needsLength && (
  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
    <label className="block text-sm font-medium text-gray-300 mb-2">Length</label>
    <select
      value={chartConfig.lengthCol}
      onChange={(e) =>
        setChartConfig((prev) => ({
          ...prev,
          lengthCol: e.target.value
        }))
      }
      className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm text-white"
    >
      <option value="">Select column</option>
      {columns.map((col) => (
        <option key={col} value={col}>
          {col}
        </option>
      ))}
    </select>
  </div>
)}

 {needsLabel && (
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <label className="block text-sm font-medium text-gray-300 mb-2">Label</label>
                <select
                  value={chartConfig.labelCol}
                  onChange={(e) => setChartConfig(prev => ({ ...prev, labelCol: e.target.value }))}
                  className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
                  style={{ backgroundImage: dropdownArrow }}
                >
                  <option value="" className="text-gray-400">Select column</option>
                  {columns.map((col) => (
                    <option key={col} value={col} className="text-white">
                      {col}
                    </option>
                  ))}
                </select>
              </div>
            )}
{needsQ3 && (
  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
    <label className="block text-sm font-medium text-gray-300 mb-2">Q3</label>
    <select
      value={chartConfig.q3Col}
      onChange={(e) => setChartConfig(prev => ({ ...prev, q3Col: e.target.value }))}
      className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-white appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1em_1em]"
      style={{ backgroundImage: dropdownArrow }}
    >
      <option value="" className="text-gray-400">Select column</option>
      {columns.map((col) => (
        <option key={col} value={col} className="text-white">{col}</option>
      ))}
    </select>
  </div>
)}
{chartType === 'xrange' && (
  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
    <label className="block text-sm font-medium text-gray-300 mb-2">
      Progress Column
    </label>
    <select
      value={chartConfig.progressCol}
      onChange={(e) => setChartConfig(prev => ({ ...prev, progressCol: e.target.value }))}
      className="block w-full pl-3 pr-8 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md text-white"
    >
      <option value="">Select column</option>
      {columns.map((col) => (
        <option key={col} value={col}>{col}</option>
      ))}
    </select>
  </div>
)}

          </div>
        </div>
      </div>

      {chartType &&
        data &&
        Array.isArray(data) &&
        data.length > 0 &&
        (!needsX || (xCol && columns.includes(xCol))) &&
        (!needsY || (yCol && columns.includes(yCol))) &&
        (!needsZ || (zCol && columns.includes(zCol))) && (
        <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-white">Chart Preview</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
              {library === 'plotly' ? 'Plotly' : 'Highcharts'}
            </span>
          </div>
          <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
            <ChartErrorBoundary>
              {library === 'plotly' ? (
                <PlotlyChart
                  data={data}
                  xCol={xCol}
                  yCol={yCol}
                  zCol={zCol}
                  uCol={uCol}
                  vCol={vCol}
                  wCol={wCol}
                  openCol={openCol}
                  highCol={highCol}
                  lowCol={lowCol}
                  closeCol={closeCol}
                  q1Col={q1Col}
                  medianCol={medianCol}
                  q3Col={q3Col}
                  chartType={chartType}
                />
              ) : (
                <HighchartsChart
                  key={`${chartType}-${xCol}-${yCol}-${zCol}-${library}-${chartConfig.labelCol || ''}-${chartConfig.valueCol || ''}-${chartConfig.parentCol || ''}-${chartConfig.openCol || ''}-${chartConfig.highCol || ''}-${chartConfig.lowCol || ''}-${chartConfig.closeCol || ''}-${chartConfig.medianCol || ''}-${chartConfig.q1Col || ''}-${chartConfig.q3Col || ''}`}
                  data={data}
                  xCol={xCol}
                  yCol={yCol}
                  zCol={zCol}
                  openCol={openCol}
                  highCol={highCol}
                  lowCol={lowCol}
                  closeCol={closeCol}
                  chartType={chartType}
                  medianCol={medianCol}
                  q1Col={q1Col}
                  q3Col={q3Col}
                  labelCol={labelCol}
                  valueCol = {valueCol}
                  directionCol={directionCol}  
                  lengthCol={lengthCol} 
                  progressCol={progressCol}
                  geoJson={
                    chartType === 'map' || chartType === 'mapbubble' || chartType === 'flowmap'
                    ? worldMap
                    : chartType === 'mapline'
                    ? worldMapLine
                    : undefined
                  }
                />
              )}
            </ChartErrorBoundary>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChartArea;