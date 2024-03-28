FROM python:3.10.12-slim

# Establece el directorio de trabajo en /backend
WORKDIR /backend

# Copia el archivo requirements.txt al contenedor
COPY requirements.txt requirements.txt
COPY prodigy.json prodigy.json

# Instala las dependencias definidas en requirements.txt
RUN pip install -r requirements.txt

COPY . .
EXPOSE 5100

# Define el comando a ejecutar cuando el contenedor se inicie
CMD ["python", "main.py"]