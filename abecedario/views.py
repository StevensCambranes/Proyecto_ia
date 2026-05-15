from django.shortcuts import render
from pyswip import Prolog

def vista_abecedario(request):
    consulta = request.GET.get('consulta', '').lower().strip()
    video_encontrado = None
    mensaje = ""
    titulo_video = ""

    if consulta:
        prolog = Prolog()
        prolog.consult("abecedario/prolog/abecedario.pl")
        # Ejecuta la regla buscar/2 inyectando la palabra del usuario
        try:
            resultados = list(prolog.query(f"buscar_abecedario({consulta}, ID)"))
            if resultados:
                video_encontrado = resultados[0]["ID"]
                titulo_video = consulta.title()
                mensaje = f"Si deseas aprender la letra \"{consulta}\" es de la siguiente manera:"
            else:
                mensaje = "No encontré esa letra en la base de datos."
        except:
            mensaje = "Error al procesar la letra."

    return render(request, 'abecedario.html', {
        'video_id': video_encontrado,
        'mensaje_ia': mensaje,
        'titulo_video': titulo_video
    })
