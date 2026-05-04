from django.shortcuts import render
from pyswip import Prolog

def vista_expresiones(request):
    consulta = request.GET.get('consulta', '').lower().strip()
    video_encontrado = None
    mensaje = ""

    if consulta:
        prolog = Prolog()
        prolog.consult("expresiones/prolog/sentimientos.pl")
        # Ejecuta la regla buscar/2 inyectando la palabra del usuario
        try:
            resultados = list(prolog.query(f"buscar({consulta}, ID)"))
            if resultados:
                video_encontrado = resultados[0]["ID"]
                mensaje = f"Si deseas aprender la expresión {consulta} es de la siguiente manera:"
            else:
                mensaje = "No encontré esa expresión en la base de datos."
        except:
            mensaje = "Error al procesar la palabra."

    return render(request, 'expresiones.html', {
        'video_id': video_encontrado,
        'mensaje_ia': mensaje
    })