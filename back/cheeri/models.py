import uuid
from django.db import models

# Create your models here.

class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event_feed_id = models.CharField(max_length=400)
    name = models.CharField(max_length=200)
    start = models.DateTimeField(blank=True, null=True)
    end = models.DateTimeField(blank=True, null=True)
    description = models.CharField(max_length=500)
    location = models.CharField(max_length=200)

class Feed(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    profile = models.CharField(max_length=2000, default="")
    calendar_id = models.CharField(max_length=200, default="")
    color = models.CharField(max_length=200)
    last_updated = models.CharField(max_length=100)
    events = models.ManyToManyField("Event", blank=True, related_name="feed")


class Calendar(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    feeds = models.ManyToManyField("Feed", blank=True, related_name="calendars")
