from rest_framework import serializers, viewsets, permissions
from src.models.order.models import Order
from .serializers import OrderSerializer
from rest_framework.generics import ListAPIView



class OrderView(ListAPIView):

    serializer_class    = OrderSerializer
    model               = Order

    def get_queryset(self):
        return Order.objects.all()
