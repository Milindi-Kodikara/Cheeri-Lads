from django.contrib import admin
from .models import Feed, Calendar, Event

# Register your models here.
admin.site.register(Feed)
admin.site.register(Calendar)
admin.site.register(Event)
