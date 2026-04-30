from django.contrib import admin
from django.urls import path, include

# asi se hacen las url
urlpatterns = [
    path('', include('main.urls')),
    path('', include('expresiones.urls')),
]