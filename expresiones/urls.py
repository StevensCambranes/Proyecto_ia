from django.urls import path
from . import views

urlpatterns = [
    path('expresiones/', views.vista_expresiones, name='ruta_expresiones'),
]