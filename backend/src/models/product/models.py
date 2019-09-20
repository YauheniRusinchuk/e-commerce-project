from django.db import models


class Product(models.Model):

    title       = models.CharField(max_length=255, blank=False)
    description = models.TextField(blank=False)
    price       = models.IntegerField()
    photo       = models.ImageField(upload_to='photos/', blank=False)

    def __str__(self):
        return f"{self.title}"
