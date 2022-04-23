from itertools import product
from multiprocessing import context
from django.shortcuts import get_object_or_404, render
from .models import Producto

# Create your views here.
def index(request):
    product_list = Producto.objects.order_by('nombre')[:6]
    context = {'product_list': product_list}
    return render(request, 'index.html', context)

def producto(request, prodcuto_id):
    producto = get_object_or_404(Producto, pk=prodcuto_id)
    return render(request, 'producto.html', {'producto': producto})
