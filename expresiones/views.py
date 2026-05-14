from django.shortcuts import render
from pyswip import Prolog

# Inicialización única al arrancar el servidor
prolog = Prolog()
prolog.consult("expresiones/prolog/sentimientos.pl")

def vista_expresiones(request):
    consulta_original = request.GET.get('consulta', '').strip()
    # Estandariza vocales con tilde y ñ, luego elimina puntuación y espacios
    consulta_limpia = consulta_original.lower().replace('ñ', 'n').replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u').replace('ü', 'u')
    # consulta_limpia = "".join(filter(str.isalpha, consulta_limpia))
    
    video_encontrado = None
    mensaje = ""
    titulo_video = ""

    if consulta_limpia:
        try:
            # Consulta sobre la instancia cargada en memoria
            resultados = list(prolog.query(f"buscar({consulta_limpia}, ID)"))
            if resultados:
                video_encontrado = resultados[0]["ID"]
                titulo_video = consulta_original.title()
                mensaje = f"Si deseas aprender la expresión {consulta_original.lower()} es de la siguiente manera:"
            else:
                mensaje = "Sigo aprendiendo, prueba con las opciones que están aquí."
        except Exception:
            mensaje = "Error técnico al procesar la consulta."

    return render(request, 'expresiones.html', {
        'video_id': video_encontrado,
        'mensaje_ia': mensaje,
        'titulo_video': titulo_video
    })