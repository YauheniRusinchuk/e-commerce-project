from django.db import models
from src.models.product.models import Product

class Order(models.Model):

    STATE = [
        ('N', 'Не подтвержденно'),
        ('Y', 'Подтвержденно'),
    ]


    who             = models.CharField(max_length=255, blank=False)
    number          = models.CharField(max_length=255, blank=False)
    price           = models.IntegerField()
    list_products   = models.ManyToManyField(Product)
    status          = models.CharField(
        max_length=255,
        choices=STATE,
        default='N',
    )


    def __str__(self):
        return f"{self.pk}"
