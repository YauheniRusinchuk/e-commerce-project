from django.urls import path
from .views import OrderView, OrderCreateView


urlpatterns = [
    path('api/v1/all', OrderView.as_view()),
    path('api/v1/create', OrderCreateView.as_view()),
]
