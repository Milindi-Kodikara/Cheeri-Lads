from oauth2client.client import GoogleCredentials
from datetime import datetime
from googleapiclient.discovery import build
from httplib2 import Http
from .models import Event


def build_service(creds):
    return build('calendar', 'v3', http=creds.authorize(Http()))


def update_feed(feed):
    profile_string = feed.profile
    calendar_id = feed.calendar_id
    creds = GoogleCredentials.from_json(profile_string)
    service = build_service(creds)

    events = service.events().list(calendarId=calendar_id, updatedMin=feed.last_updated).execute()
    

    print(feed.id)
    for event in events["items"]:
        feed.events.create(
            name=event["summary"],
            event_feed_id=event["id"],
            start=event["start"]["dateTime"],
            end=event["end"]["dateTime"],
            location=event["location"] if "location" in event else "",
            description=event["description"] if "description" in event else ""
            )

    feed.last_updated = datetime.now().isoformat() + "Z"
    feed.save()
