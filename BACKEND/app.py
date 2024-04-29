from flask import Flask

# Crearea instanței Flask
app = Flask(__name__)

# Definirea unei rute și a unei funcții asociate
@app.route('/')
def index():
    return 'Hello, world!'

# Punctul de intrare în aplicație
if __name__ == '__main__':
    # Pornirea serverului Flask
    app.run(debug=True)
