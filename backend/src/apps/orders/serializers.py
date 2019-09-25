from rest_framework import serializers
from src.models.order.models import Order
from src.apps.products.serializers import ProductSerializer



class OrderSerializer(serializers.ModelSerializer):

    products = ProductSerializer(read_only=True, many=True, source='list_products')

    class Meta:
        model = Order
        fields = [
            'id',
            'who',
            'number',
            'products',
            'status',
            'price',
        ]
