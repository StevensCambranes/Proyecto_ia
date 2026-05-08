from django.urls import path
from . import views

urlpatterns = [
    path('colores/', views.vista_colores, name='ruta_colores'),
]