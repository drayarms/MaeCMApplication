"""
from flask import Flask, request
from MaeCMBackend.mae_cm_backend import some_function  
import os 

app = Flask("MaeCM")

@app.route("/")
def home():
	return "Hello World!"

"""

"""
from flask import Flask, send_from_directory, jsonify
from MaeCMBackend.mae_cm_backend import some_function
import os

# Path to React build folder
REACT_BUILD_DIR = os.path.join(os.path.dirname(__file__), "../frontend/build")

app = Flask(__name__, static_folder=REACT_BUILD_DIR, static_url_path="/")

# -------------------
# API ROUTES
# -------------------
@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask API!"})


# -------------------
# FRONTEND ROUTE (Production Only)
# -------------------
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
	
	#In production, Flask serves the React build folder.
	#In development, this is unused because CRA dev server is used instead.
	
	full_path = os.path.join(REACT_BUILD_DIR, path)

	if path != "" and os.path.exists(full_path):
		return send_from_directory(REACT_BUILD_DIR, path)

	# Fallback to index.html for React Router
	return send_from_directory(REACT_BUILD_DIR, "index.html")


if __name__ == "__main__":
	port = int(os.environ.get("PORT", 5000))  # defaults to 5000 if PORT isn't set
	#app.run(host="0.0.0.0", port=5000)
	app.run(host="0.0.0.0", port=port)
"""
#First GHA run
#Try again
#Fixed pass key in secrets


#FOR DEV SERVER
"""
from flask import Flask, send_from_directory, jsonify
import os
from flask_cors import CORS

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
REACT_BUILD_DIR = os.path.abspath(os.path.join(BASE_DIR, "../frontend/build"))

app = Flask(__name__, static_folder=REACT_BUILD_DIR, static_url_path="/")
CORS(app)  # allow cross origin during dev; safe if you're using proxy

@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask API!"})

# Serve React build (production)
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join(REACT_BUILD_DIR, path)):
        return send_from_directory(REACT_BUILD_DIR, path)
    return send_from_directory(REACT_BUILD_DIR, "index.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
"""


#FOR PROD. ONLY SERVES API. NGINX WILL SERVE FRONTEND
from MaeCMEmail.mae_cm_email import send_home_contact_email 
from MaeCMEmail.mae_cm_email import send_footer_contact_email 
from MaeCMEmail.mae_cm_email import send_contact_email 

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask API!"})

@app.route("/api/home-contact-form", methods=["POST"])
def handle_home_contact_form():
	data = request.get_json()

	#firstName = data["firstName"]
	#lastName = data["lastName"]
	#email = data["email"]
	#phone = data["phone"]

	required = ["firstName", "lastName", "email", "phone"]
	for field in required:
		if field not in data or not data[field]:
			return jsonify({"message": f"{field} is required"}), 400

	send_home_contact_email(data)

	return jsonify({
		"status": "success",
		"message": "Thank you! Your message has been sent."
	}), 200   


@app.route("/api/footer-contact-form", methods=["POST"])
def handle_footer_contact_form():
	data = request.get_json()

	required = ["name", "email", "message"]
	for field in required:
		if field not in data or not data[field]:
			return jsonify({"message": f"{field} is required"}), 400

	send_footer_contact_email(data)

	return jsonify({
		"status": "success",
		"message": "Thank you! Your message has been sent."
	}), 200  


@app.route("/api/contact-form", methods=["POST"])
def handle_contact_form():
	data = request.get_json()

	required = ["name", "email", "subject", "message"]
	for field in required:
		if field not in data or not data[field]:
			return jsonify({"message": f"{field} is required"}), 400

	send_contact_email(data)

	return jsonify({
		"status": "success",
		"message": "Thank you! Your message has been sent."
	}), 200 


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

