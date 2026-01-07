import React, { useState, useEffect } from 'react';
import FileUploader from './components/FileUploader';
import Charts from './components/Charts';
import { FiUpload } from 'react-icons/fi';
//import AnimatedCursor from "react-animated-cursor";
import './index.css';

const App = () => {
  const [selectedLibrary, setSelectedLibrary] = useState('plotly');
  const [chartRenderKey, setChartRenderKey] = useState(0);
  const handleLibrarySwitch = (library) => {
  setSelectedLibrary(library);
  setChartConfig({
    chartType: '',
    xCol: '',
    yCol: '',
    zCol: '',
    uCol: '',
    vCol: '',
    wCol: '',
    openCol: '',
    highCol: '',
    lowCol: '',
    closeCol: '',
    valueCol: '',
    parentCol: '',
    directionCol: '',
    lengthCol: '',
    progressCol: '',
    labelCol: '',
  });
  setChartRenderKey(prev => prev + 1);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const [uploadedData, setUploadedData] = useState(null);
  const [activeTab, setActiveTab] = useState('preview');
  const [chartConfig, setChartConfig] = useState({
  chartType: '',
  xCol: '',
  yCol: '',
  zCol: '',
  uCol: '',
  vCol: '',
  wCol: '',
  openCol: '',
  highCol: '',
  lowCol: '',
  closeCol: '',
  valueCol: '',
  parentCol: '',
  directionCol: '',
  lengthCol: '',
  progressCol: '',
  labelCol: '', 
});


  const handleDataLoaded = (data) => {
    console.log('✅ Received from backend:', data);

    if (data.columns && data.preview && data.fullData) {
      setUploadedData(data);
      setChartConfig({  // ✅ Reset here only once when file is uploaded
      chartType: '',
      xCol: '',
      yCol: '',
      zCol: '',
      uCol: '',
      vCol: '',
      wCol: '',
      openCol: '',
      highCol: '',
      lowCol: '',
      closeCol: '',
      valueCol: '',
      parentCol: '',
      directionCol: '',
      lengthCol: '',
      progressCol: '',
      labelCol: '',
    });
      setActiveTab('preview');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.warn('⚠️ Incomplete data structure received:', data);
    }
  };

  return (
    <>
    {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="66, 165, 245"
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={2.5}
      /> */}
    <div className="min-h-screen bg-gray-900 p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-900 opacity-20 mix-blend-screen filter blur-3xl animate-float1"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-900 opacity-20 mix-blend-screen filter blur-3xl animate-float2"></div>
        
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-3">
            Data Visualizer Pro
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transform your raw data into interactive visualizations with our analytics tool.
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white/5 rounded-2xl shadow-xl overflow-hidden border border-white/10 backdrop-blur-sm">
          {/* File Upload Section - Only shown when no data is uploaded */}
         {!uploadedData && (
  <div className="p-6 border-b border-white/10 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 text-center">
    <h2 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
      <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      Upload Your Data
    </h2>
    <div className="flex justify-center">
      <FileUploader onDataLoaded={handleDataLoaded} />
    </div>
  </div>
)}

          {uploadedData && (
            <div>

              <div className="flex border-b border-white/10">
                <button
                  onClick={() => {
                    setActiveTab('preview');
                    // Force chart cleanup when switching to preview
                    setChartRenderKey(prev => prev + 1);
                  }}
                  className={`px-6 py-4 font-medium text-sm flex items-center transition-all duration-200 ${activeTab === 'preview' ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Data Preview
                </button>
                <button
                  onClick={() => {
                    setActiveTab('visualization');
                    // Force chart re-render when switching to visualization
                    setChartRenderKey(prev => prev + 1);
                  }}
                  className={`px-6 py-4 font-medium text-sm flex items-center transition-all duration-200 ${activeTab === 'visualization' ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                  Visualization
                </button>
              </div>


              <div className="p-6">
                <div style={{ display: activeTab === 'preview' ? 'block' : 'none' }}>
                  <div className="overflow-x-auto">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Data Preview
                        {uploadedData.filename && (
                          <span className="ml-3 px-2 py-0.5 text-xs font-medium rounded-full bg-white/10 text-gray-300">
                            {uploadedData.filename}
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-200">
                          {uploadedData.columns.length} columns
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/50 text-green-200">
                          {uploadedData.preview.length} of {uploadedData.fullData.length} rows
                        </span>
                      </div>
                    </div>
                    <div className="shadow-sm rounded-lg overflow-hidden border border-white/10 bg-gray-900/50">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-white/10">
                          <thead className="bg-gray-800/50">
                            <tr>
                              {uploadedData.columns.map((col, index) => (
                                <th
                                  key={index}
                                  scope="col"
                                  className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                                >
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            {uploadedData.preview.map((row, rowIndex) => (
                              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-900/20' : 'bg-gray-800/20'}>
                                {uploadedData.columns.map((col, colIndex) => (
                                  <td
                                    key={colIndex}
                                    className="px-4 py-3 whitespace-nowrap text-sm text-gray-200"
                                  >
                                    {row[col] !== null ? (
                                      <span className="truncate max-w-xs inline-block">{row[col].toString()}</span>
                                    ) : (
                                      <span className="text-gray-500">—</span>
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: activeTab === 'visualization' ? 'block' : 'none' }}>
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                        Create Visualization
                        {uploadedData.filename && (
                          <span className="ml-3 px-2 py-0.5 text-xs font-medium rounded-full bg-white/10 text-gray-300">
                            {uploadedData.filename}
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center space-x-4">
                        <label className="text-sm font-medium text-gray-300">Chart Library:</label>
                        <div className="relative">
                        <div className="mb--1 flex space-x-4">
  <div className="inline-flex space-x-2">
<button
  type="button"
  onClick={() => handleLibrarySwitch('plotly')}
  className={`relative group inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-md overflow-hidden
    ${selectedLibrary === 'plotly'
      ? 'bg-blue-900/50 text-blue-200'
      : 'bg-gray-700/50 text-gray-400 hover:text-gray-200'}
  `}
>
  <span className="z-10">Plotly</span>
</button>

<button
  type="button"
  onClick={() => handleLibrarySwitch('highcharts')}
  className={`relative group inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-md overflow-hidden
    ${selectedLibrary === 'highcharts'
      ? 'bg-blue-900/50 text-blue-200'
      : 'bg-gray-700/50 text-gray-400 hover:text-gray-200'}
  `}
>
  <span className="z-10">Highcharts</span>
</button>
</div>

</div>
                        </div>
                      </div>
                    </div>
                    <Charts
                      key={chartRenderKey} 
                      data={uploadedData.fullData}
                      columns={uploadedData.columns}
                      library={selectedLibrary}
                      chartConfig={chartConfig}
                      setChartConfig={setChartConfig}
                    />
                  </div>
                </div>
                {/* Upload new file button */}
<div className="mt-10 text-center">
  <button
   onClick={() => {
  setUploadedData(null);
  setChartConfig({
    chartType: '',
    xCol: '',
    yCol: '',
    zCol: '',
    uCol: '',
    vCol: '',
    wCol: '',
    openCol: '',
    highCol: '',
    lowCol: '',
    closeCol: '',
  });
  setActiveTab('preview');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}}

    className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white font-medium rounded-lg transition-colors duration-200"
  >
    <FiUpload className="mr-2" />
    Upload New File
  </button>
</div>

              </div>
            </div>
          )}
        </div>

        {!uploadedData && (
          <div className="mt-12 text-center">
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-full flex items-center justify-center mb-4 shadow-inner backdrop-blur-sm">
              <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ready to visualize your data?</h3>
            <p className="text-gray-300 max-w-md mx-auto mb-6">
              Upload your Excel spreadsheet to get started with data visualization.
            </p>
            <div className="mt-6 text-xs text-gray-400 flex flex-col items-center justify-center text-center">
  <div className="flex items-center">
    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Supports .xlsx, .xls & .csv files.
  </div>
  <div className="mt-1 text-blue-400 font-medium">Created by AFA 🚀</div>
</div>

          </div>
        )}
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -20px) rotate(2deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(-2deg); }
        }
        .animate-float1 {
          animation: float1 15s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 18s ease-in-out infinite;
        }
      `}</style>
    </div>
    </>
  );
};

export default App;