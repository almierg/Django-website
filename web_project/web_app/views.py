from django.shortcuts import render
from.models import Kisiler,Urunler,Articles,Quetstions
from django.shortcuts import render, get_object_or_404


def index(request):
    people_pic=Kisiler.objects.all()
    writing=Articles.objects.all()
    question=Quetstions.objects.all()

    context={
        'picture':people_pic,
        'writing1':writing,
        'questions1':question,
    }
    return render(request,'index.html',context)

def about(request):
    writing=Articles.objects.all()
    kisiler=Kisiler.objects.all()

    context={
        'writing1':writing,
        'kisiler1':kisiler,
    }
    return render (request,'about.html',context)

def products(request):
    urunler=Urunler.objects.all()
    context={
        'urunler1':urunler
    }
    return render (request,'products.html',context)


def products_item(request):
    return render (request,'products_item.html')

def contact(request):
    return render (request,'contact.html')
