# DVA – A Data Visualizer App



## Table of Contents
1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
6. [Manual Setup](#manual-setup)
7. [Supported Files and Data Format](#supported-files-and-data-format)  
8. [Project Structure](#project-structure)  

---

## Overview
DVA accepts an Excel spreadsheet upload, parses the data, and generates interactive visualizations. It supports fast exploration of tabular datasets and helps users convert sheets into charts without manual chart building.


---

## Key Features
- Upload Excel files (.xlsx, .xls, .csv)
- Auto-detect numeric and categorical columns
- Generate interactive charts using:
  - Plotly (quick analytics + rich interactivity)
  - Highcharts (high-performance charting + advanced chart types)
- Multiple chart types (based on data): line, bar, column, area, scatter, pie (if supported)
- Data preview table before chart generation
- Download/export charts (depends on configuration and library settings)
- Basic validation and user-friendly error handling (missing columns, invalid sheet, empty data)
- 
---

## Tech Stack
- Frontend: Web UI (supports Excel upload + chart rendering)
- Plotly and Highcharts Charting Libraries
- Excel Parsing
- Flask backend
---

## Manual Setup

### Prerequisites
- Python
- Node.js and npm  
- Git  

Clone the repositories and proceed with the following steps:
### Backend Setup

1. Navigate to the backend directory
```bash
   cd Data-Visualizer-App/Data Visualizer App Backend 
```
2. Create and activate virtual environment  
```bash
   python3 -m venv venv
   source venv/bin/activate
```
3. Install dependencies and flask modules
```bash
   pip install flask flask-cors pandas openpyxl plotly
```
4. Execute the file 
```bash
   python app.py
```

### Frontend Setup

1. Navigate to the frontend directory
```bash 
   cd ../Data-Visualizer-App/Data Visualizer App Frontend/DVA
```
2. Install frontend dependencies
```bash
   npm install
```
3. Run the development server
```bash
   npm run dev
```
4. If any vulnerabilities are reported
```bash
   npm audit fix
```
---

## Supported Files and Data Format

Supported file types are: .xlsx, .xls, .csv

For best results:
- Keep column headers in the first row
- Columns are consistent (numbers in numeric columns, categories in categorical columns)
- No merged header cells

## Project Structure
```bash
Data-Visualizer-App/
├── Data Visualizer App Backend/ # Flask backend
│   └── ...
├── Data Visualizer App Frontend/ # React frontend
│   └── DVA
     └── ...
├── README.md
```