from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "✅ DVA Backend is running!"

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in request"}), 400

    file = request.files['file']

    if file.filename.strip() == '':
        return jsonify({"error": "No file selected"}), 400

    try:
        # Determine file type
        filename = file.filename.lower().strip()
        if filename.endswith('.csv'):
            df = pd.read_csv(file)
        elif filename.endswith(('.xlsx', '.xls')):
            df = pd.read_excel(file)
        else:
            return jsonify({"error": "Unsupported file type"}), 400

        # Replace NaN/NaT with None for JSON compatibility
        df = df.where(pd.notnull(df), None)

        # Return structured response
        return jsonify({
            "columns": df.columns.tolist(),
            "preview": df.head(10).to_dict(orient='records'),
            "fullData": df.to_dict(orient='records'),
            "filename": file.filename  # ✅ Added here
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=4000)