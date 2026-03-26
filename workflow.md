# Proyecto: IA Lenguaje de Señas Guatemaltecas

## 1. Configuración Inicial (Solo la primera vez)

**A. Clonar el repositorio**
Clonar directamente en la raíz (Ej. disco C:). No crear subcarpetas.
`git clone https://github.com/StevensCambranes/Proyecto_ia.git`
`cd Proyecto_IA`

**B. Instalar y activar Entorno Virtual**
`pip install virtualenv`
`virtualenv venv`
`.\venv\Scripts\activate`

**C. Preparar Base de Datos**
`python manage.py migrate`

## 2. Flujo de Trabajo Diario
se pueden guiar con este tutorial de YouTube:
- [Video Tutorial de Django](https://youtu.be/T1intZyhXDU?si=hpdGUAsPyVGKRX8S)

Cada vez que retomen el trabajo, ejecutar estrictamente en este orden:
1. Activar entorno: `.\venv\Scripts\activate`
2. Bajar últimos cambios: `git pull`
3. Iniciar servidor: `python manage.py runserver`

## 3. Asignación de Módulos (Apps)

- **Grupo Stevens:** Expresiones / Sentimientos
- **Grupo Cesar:** Abecedario / Cortesía
- **Grupo Pablo:** Colores