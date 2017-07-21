from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

class News(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    user = models.ForeignKey(User)
    published_date = models.DateField(
        auto_now_add=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title



