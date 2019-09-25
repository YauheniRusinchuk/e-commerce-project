from django.urls import path
from .views import OrderView


urlpatterns = [
    path('api/v1/all', OrderView.as_view()),
]
