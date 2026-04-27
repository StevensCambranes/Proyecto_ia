from django.http import HttpResponse, JsonResponse # modulo para petisiones HTTP y JSON
from django.shortcuts import render
# se tendria que importar todos los models de las apps

# Create your views here.
def index(request):
    return render(request, 'index.html')