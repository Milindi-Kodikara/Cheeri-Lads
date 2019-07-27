from django.shortcuts import render
from .serializers import EventSerializer
from django.views.generic import TemplateView
from .models import Event

# Create your views here.
class EventViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = EventSerializer
    queryset = Event.objects.all()

class SubscribeView(TemplateView):
    template_name = "subscribe.html"
