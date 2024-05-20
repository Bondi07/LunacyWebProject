import pyodbc
from flask import Flask, request, jsonify, redirect, url_for, render_template, flash
import re

app = Flask(__name__)

# Definirea detaliilor de conectare la baza de date
server = 'localhost'
database = 'PROIECT_WEB'

# Construirea stringului de conexiune
conn_str = (
    'DRIVER={SQL Server};'
    f'SERVER={server};'
    f'DATABASE={database};'
    'Trusted_Connection=yes;'
)

# Route to render the signup form
@app.route('/')
def index():
    return render_template('LoginForm.html')  # Make sure your HTML form is in the templates folder

# Route to handle form submissions
@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']
    confirm_password = request.form['confirm_password']

    # Password validation
    if password != confirm_password:
        flash('Passwords do not match.')
        return redirect(url_for('index'))

    # Check if password meets criteria (e.g., at least 8 characters, contains numbers and letters)
    if len(password) < 8 or not re.search(r"[a-zA-Z]", password) or not re.search(r"\d", password):
        flash('Password must be at least 8 characters long and contain both letters and numbers.')
        return redirect(url_for('index'))

    try:
        # Connect to the database
        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()

        # Insert the form data into the SIGNUP table
        cursor.execute('''
            INSERT INTO SIGNUP (Fname, Lname, Username, Email, Password)
            VALUES (?, ?, ?, ?, ?)
            ''', 
            (first_name, last_name, username, email, password))

        # Commit the transaction
        conn.commit()

        # Close the connection
        cursor.close()
        conn.close()

        # Redirect to a success page (create a success.html in the templates folder)
        return redirect(url_for('success'))

    except Exception as e:
        flash(f"Error inserting data into the database: {e}")
        return redirect(url_for('index'))

# Route to render the success page
@app.route('/success')
def success():
    return render_template('success.html')

# Pentru prima tabelă
conn = pyodbc.connect(conn_str)
cursor = conn.cursor()

cursor.execute('SELECT * FROM SIGNUP')
rows_primul_tabel = cursor.fetchall()

# Pentru a doua tabelă
cursor.execute('SELECT * FROM LOGIN')
rows_al_doilea_tabel = cursor.fetchall()

# Închiderea conexiunii cu baza de date
conn.close()

if __name__ == '__main__':
    app.run(debug=True)
