from rest_framework import routers
from .views import ProductViewSet

router = routers.DefaultRouter()
router.register('api/v1/products/all', ProductViewSet, 'products')

urlpatterns = router.urls
