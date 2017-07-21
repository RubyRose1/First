from django.conf.urls import url, include
import Studio
from Studio import views

urlpatterns = [
      url(r'^$', Studio.views.start, name='start'),
      url(r'^price/$', Studio.views.price, name='price'),
      url(r'^contacts/$', Studio.views.contacts, name='contacts'),
]