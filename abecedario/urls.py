from django.urls import path
from . import views

urlpatterns = [
    path('abecedario/', views.vista_abecedario, name='ruta_abecedario'),
]