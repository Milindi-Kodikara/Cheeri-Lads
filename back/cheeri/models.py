import uuid
from django.db import models

# Create your models here.

class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event_feed_id = models.CharField(max_length=400)
    image = models.CharField(max_length=1000)
    name = models.CharField(max_length=200)
    start = models.DateTimeField(blank=True, null=True)
    end = models.DateTimeField(blank=True, null=True)
    description = models.CharField(max_length=500)
    location = models.CharField(max_length=200)
    feed = models.ForeignKey("Feed", blank=True, related_name="events", on_delete=models.CASCADE)

class Feed(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    profile = models.CharField(max_length=2000, default="")
    calendar_id = models.CharField(max_length=200, default="")
    color = models.CharField(max_length=200)
    category = models.CharField(max_length=200)
    last_updated = models.CharField(max_length=100)


class Calendar(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    feeds = models.ManyToManyField("Feed", blank=True, related_name="calendars")
