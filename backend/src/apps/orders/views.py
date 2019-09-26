from rest_framework import serializers, viewsets, permissions
from src.models.order.models import Order
from .serializers import OrderSerializer
from rest_framework.generics import ListAPIView,CreateAPIView
from rest_framework.response import Response



class OrderView(ListAPIView):

    serializer_class    = OrderSerializer
    model               = Order

    def get_queryset(self):
        return Order.objects.all()


class OrderCreateView(CreateAPIView):
    model               = Order
    serializer_class    = OrderSerializer


    def post(self, *args, **kwargs):
        print(self.request.data)
        return Response({'Hi': 'good'})
