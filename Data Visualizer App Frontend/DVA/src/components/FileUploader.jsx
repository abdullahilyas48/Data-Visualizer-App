import React, { useState } from 'react';
import axios from 'axios';
import { FiUpload, FiCheckCircle, FiXCircle, FiFile } from 'react-icons/fi';

const FileUploader = ({ onDataLoaded }) => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setUploadStatus(null);
    uploadFile(selectedFile);
  };

  const uploadFile = async (selectedFile) => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    setIsUploading(true);

    try {
      const res = await axios.post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('success');
      onDataLoaded?.(res.data);
    } catch (err) {
      console.error('Upload failed:', err);
      setUploadStatus('error');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label className="cursor-pointer inline-flex items-center px-4 py-3 border border-dashed border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150">
          <FiUpload className="mr-2 text-blue-500" />
          Choose Excel File
          <input
            type="file"
            onChange={handleFileChange}
            accept=".xlsx,.xls,.csv"
            className="hidden"
            // aria-hidden="true"
          />
        </label>

        {file && (
          <div className="flex items-center px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
            <FiFile className="text-gray-500 mr-2" />
            <span className="text-sm text-gray-700 truncate max-w-xs">
              {file.name}
            </span>
          </div>
        )}

        {isUploading && (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"></div>
            <span className="text-sm text-gray-500">Processing...</span>
          </div>
        )}

        {uploadStatus === 'success' && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <FiCheckCircle className="mr-1.5" /> Upload successful
          </span>
        )}

        {uploadStatus === 'error' && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            <FiXCircle className="mr-1.5" /> Upload failed
          </span>
        )}
      </div>
    </div>
  );
};

export default FileUploader;