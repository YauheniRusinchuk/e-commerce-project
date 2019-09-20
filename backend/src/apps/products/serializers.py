from rest_framework import serializers
from src.models.product.models import Product



class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'
