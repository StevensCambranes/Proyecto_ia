from django.shortcuts import render
# se tendria que importar todos los models de las apps

# Create your views here.
def index(request):
    return render(request, 'index.html')