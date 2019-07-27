import uuid
from django.db import models

# Create your models here.

class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    start = models.DateTimeField(blank=True, null=True)
    end = models.DateTimeField(blank=True, null=True)
    description = models.CharField(max_length=500)
    location = models.CharField(max_length=200)

class Feed(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    events = models.ManyToManyField("Event", blank=False, related_name="feed")


class Calendar(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    feeds = models.ManyToManyField("Feed", blank=False, related_name="calendars")
