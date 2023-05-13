from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pandas as pd

# source backenv/bin/activate

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
cros = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def home():
    return 'HomePage, Hello, World!'

def read_extra_csv_file(filename):
    data = pd.read_csv(filename)
    first_column_values = data.iloc[:, 1].tolist()
    return first_column_values

@app.route('/data', methods=['POST'])
@cross_origin()
def process_data():
		print('Backend received the post request')
		if request.method == 'POST':
				# data = request.get_json()
				csv_file = request.files['file']
				# Process the received data
				data = read_extra_csv_file(csv_file)
				# Return a response
				response = {'message': 'Data processed successfully',
				'result':data}
				return jsonify(response)

# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


if __name__ == '__main__':
    app.run(debug=True)