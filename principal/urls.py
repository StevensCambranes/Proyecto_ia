from django.contrib import admin
from django.urls import path, include

# asi se hacen las url
urlpatterns = [
    path('', include('main.urls')),
    # llamar a mi modulo
    path('', include('expresiones.urls')),
    path('', include('abecedario.urls')),
]