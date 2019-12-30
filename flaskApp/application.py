import datetime
from flask import Flask,request, render_template 

app = Flask(__name__)

# @app.route("/")
# def index():
#     headline="Hello world"
#     return render_template("index.html",headline=headline)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello",methods=['GET','POST'])
def hello():
    if request.method == "GET":
        return "Please submit the form instead"
    else:
        name = request.form.get("name")
    return render_template("hello.html",name=name)

# @app.route("/eva")
# def david():
#     return "hello eva "

# @app.route("/<string:name>")
# def hello(name):
#     name = name.capitalize()
#     return f"hello, {name}!"