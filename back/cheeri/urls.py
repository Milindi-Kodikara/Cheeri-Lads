from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path("calendars/", TemplateView.as_view(template_name="calendars.html"))
]
