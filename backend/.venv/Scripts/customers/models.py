# from django.db import models
from django.shortcuts import render

# class Customers(models.Model):
#     name = models.CharField(max_length=200)
#     industry = models.CharField(max_length=200)
    
def index(request):
	return render(request,'index.html')