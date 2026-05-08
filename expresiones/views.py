from django.shortcuts import render
from pyswip import Prolog

def vista_expresiones(request):
    consulta_original = request.GET.get('consulta', '').strip()
    consulta_limpia = consulta_original.lower().replace('ñ', 'n').replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u').replace('ü', 'u')
    
    video_encontrado = None
    mensaje = ""
    titulo_video = ""

    if consulta_limpia:
        prolog = Prolog()
        prolog.consult("expresiones/prolog/sentimientos.pl")
        try:
            # Usamos consulta_limpia exclusivamente para Prolog
            resultados = list(prolog.query(f"buscar({consulta_limpia}, ID)"))
            if resultados:
                video_encontrado = resultados[0]["ID"]
                # Usamos consulta_original para la interfaz del usuario
                titulo_video = consulta_original.title()
                mensaje = f"Si deseas aprender la expresión {consulta_original.lower()} es de la siguiente manera:"
            else:
                mensaje = "No encontré esa expresión en la base de datos."
        except:
            mensaje = "Error al procesar la palabra."

    return render(request, 'expresiones.html', {
        'video_id': video_encontrado,
        'mensaje_ia': mensaje,
        'titulo_video': titulo_video
    })