from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Event, Calendar


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = (
            "id",
            "name",
            "start",
            "end",
            "description"
        )

class CalendarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendar
        fields = (
            "id",
            "events"
        )

