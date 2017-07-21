from django.shortcuts import render
from Studio.models import News


def start(request):
    new = News.objects.order_by('-pk')
    context = {
        "new": new
    }
    return render(request, 'Tatoo/index.html', context)


def price(request):
    return render(request, 'Tatoo/journal.html')


def contacts(request):
    return render(request, 'Tatoo/contacts.html')
