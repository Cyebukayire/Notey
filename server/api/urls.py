from importlib.resources import path
from django.urls import path

from . import views
urlpatterns = [
    path("", views.getRoutes, name = 'routes')
]
