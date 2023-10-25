from django.db import models
from ckeditor.fields import RichTextField

class Urunler(models.Model):
    name=models.CharField(max_length=150)
    category=models.CharField(max_length=150)

    def __str__(self):
        return self.name

class Kisiler(models.Model):
    picture=models.ImageField(null=True,blank=True,upload_to='resimler/')
    name=models.CharField(max_length=150)
    position=models.CharField(max_length=150)
    phone_number=models.CharField(max_length=150)
    gmail=models.CharField(max_length=150)
    linkdln=models.CharField(max_length=150)

    def __str__(self):
        return self.name


class Articles(models.Model):
    about=RichTextField(null=True,blank=True)  
    index_about=RichTextField(null=True,blank=True) 
    mission=RichTextField(null=True,blank=True)
    vision=RichTextField(null=True,blank=True)
    values=RichTextField(null=True,blank=True)
    our_skills=RichTextField(null=True,blank=True)

    
class Quetstions(models.Model):
    question=models.TextField(max_length=250)
    answer=models.TextField(max_length=250)

    def __str__(self):
        return self.question    


class News(models.Model):
    author=models.CharField(max_length=150)
    date=models.DateTimeField(null=True,blank=True,auto_now_add=True)
    subject=RichTextField(null=True,blank=True)
    title=models.CharField(max_length=150)
    image=models.ImageField(null=True,blank=True,upload_to='news_pic/')

    def __str__(self):
        return self.author
    

