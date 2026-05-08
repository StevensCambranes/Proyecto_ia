FROM python:3.13.1-slim

# Actualiza las firmas y aplica todos los parches de seguridad antes de instalar Prolog
RUN apt-get update && apt-get upgrade -y && apt-get install -y \
    swi-prolog \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN python manage.py collectstatic --noinput

CMD gunicorn principal.wsgi:application --bind 0.0.0.0:$PORT