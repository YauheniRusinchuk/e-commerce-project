from src.models.product.models import Product
from .serializers import ProductSerializer
from rest_framework import viewsets, permissions




class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
    ]
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()
