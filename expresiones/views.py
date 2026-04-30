from django.shortcuts import render
import cloudinary.api

def vista_expresiones(request):
    # Llama a la API de Cloudinary para buscar en la carpeta
    respuesta = cloudinary.api.resources(
        type="upload",
        resource_type="video",
        prefix="emociones-sentimientos/" # carpeta de cloudinary
    )
    
    # pedir las listas de videos
    videos_lista = respuesta.get('resources', [])
    
    return render(request, 'expresiones.html', {'videos': videos_lista})