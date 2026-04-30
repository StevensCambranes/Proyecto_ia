# Proyecto: IA Lenguaje de Señas Guatemaltecas (Web App)

## 1. Configuración Inicial (Solo la primera vez)

**A. Clonar el repositorio**
Clonar directamente en la raíz (Ej. disco C:). No crear subcarpetas.
- `git clone https://github.com/StevensCambranes/Proyecto_ia.git`
- `cd Proyecto_IA`

> [!IMPORTANT]
> versión python: 3.13.1
> versión Django: 6.0.3

**B. Instalar y activar Entorno Virtual**
- `pip install virtualenv`
- `virtualenv venv`
- `.\venv\Scripts\activate`

**C. Instalar dependencias**
Asegúrense de estar dentro del entorno virtual antes de ejecutar:
`pip install -r requirements.txt`

**D. Instalar paquetes adicionales**
- `pip install django-cloudinary-storage`
- `pip install cloudinary`
- `pip install python-dotenv`

## 2. Flujo de Trabajo Diario
Cada vez que vuelvan a trabajar, ejecuten en este orden estos comandos:
1. Activar entorno: `.\venv\Scripts\activate`
2. Bajar últimos cambios: `git pull`
3. Iniciar servidor: `python manage.py runserver`

## 3. Reglas de Arquitectura Frontend
- El .env lo tenemos los coordinadores.
- No usemos mas archivos js y css que no sean los que estan en este directorio: `/static/`.
- No modifiquen los archivos de: `/tamplates/base.html` y `/main/`.

## 4. Asignación de Módulos (Apps)
- **Grupo Stevens:** Expresiones / Sentimientos
- **Grupo Cesar:** Abecedario / Cortesía
- **Grupo Pablo:** Colores