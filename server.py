from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/data', methods = ['POST'])
def post_data():
    # Get the data from the request
    data = request.get_json()
    
    return jsonify({'message': f"Server Received:: {data['message']}"})



if __name__ == '__main__':
    app.run(debug=True)