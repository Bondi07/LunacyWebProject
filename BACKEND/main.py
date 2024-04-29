import pyodbc
from app import app



# Definirea detaliilor de conectare la baza de date
server = 'localhost'
database = 'PROIECT_WEB'

# Construirea stringului de conexiune
conn_str = (
    'DRIVER={SQL Server};'
    f'SERVER={server};'
    f'DATABASE={database};'
    'Trusted_Connection=yes;'  # Aceasta specifică utilizarea autentificării Windows
)


# Conectarea la baza de date
conn = pyodbc.connect(conn_str)

# Crearea unui cursor pentru execuția interogărilor SQL
cursor = conn.cursor()

# Pentru prima tabelă
cursor.execute('SELECT * FROM SIGNUP')
rows_primul_tabel = cursor.fetchall()

# Pentru a doua tabelă
cursor.execute('SELECT * FROM LOGIN')
rows_al_doilea_tabel = cursor.fetchall()

# Pentru prima tabelă
for row in rows_primul_tabel:
    # Procesează fiecare rând din rezultatele primei tabele
    print(row)

# Pentru a doua tabelă
for row in rows_al_doilea_tabel:
    # Procesează fiecare rând din rezultatele celei de-a doua tabele
    print(row)


# Închiderea conexiunii cu baza de date
conn.close()



if __name__ == '__main__':
    app.run(debug=True)

