# Proyecto: IA Lenguaje de Señas Guatemaltecas (Web App)

## 1. Configuración Inicial (Solo la primera vez)

**A. Clonar el repositorio**
Clonar directamente en la raíz (Ej. disco C:). No crear subcarpetas.
`git clone https://github.com/StevensCambranes/Proyecto_ia.git`
`cd Proyecto_IA`

**B. Instalar y activar Entorno Virtual**
`pip install virtualenv`
`virtualenv venv`
`.\venv\Scripts\activate`

## 2. Flujo de Trabajo Diario
Tutorial de referencia: [Video Tutorial de Django](https://youtu.be/T1intZyhXDU?si=hpdGUAsPyVGKRX8S)

Cada vez que retomen el trabajo, ejecutar estrictamente en este orden:
1. Activar entorno: `.\venv\Scripts\activate`
2. Bajar últimos cambios: `git pull`
3. Iniciar servidor: `python manage.py runserver`

## 3. Reglas de Arquitectura Frontend
- Los recursos estáticos globales se ubican en la raíz: `/static/css` y `/templates/base.html`.
- Queda prohibido modificar el archivo `base.html` sin autorización técnica para evitar conflictos de fusión.
- Toda nueva interfaz creada por los grupos debe iniciar obligatoriamente con `{% extends 'base.html' %}` y colocar su código dentro del bloque `{% block contenido %}`.

## 4. Asignación de Módulos (Apps)
- **Grupo Stevens:** Expresiones / Sentimientos
- **Grupo Cesar:** Abecedario / Cortesía
- **Grupo Pablo:** Colores