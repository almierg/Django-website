from django.contrib import admin
from.models import Urunler,Kisiler,Articles,Quetstions,News
from django.utils.html import format_html

admin.site.register(Urunler)
admin.site.register(Kisiler)
admin.site.register(Articles)
admin.site.register(Quetstions)
admin.site.register(News)