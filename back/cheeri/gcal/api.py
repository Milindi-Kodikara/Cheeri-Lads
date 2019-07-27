from datetime import datetime, timezone
from oauth2client import file, client, tools
from googleapiclient.discovery import build
from httplib2 import Http


def build_service(creds):
    return build('calendar', 'v3', http=creds.authorize(Http()))


class CalendarApi:
    """ A class for interacting with the calendar API """

    def __init__(self, profile):
        self.service = build_service(file.Storage(profile).get())

    def get_schedule(self, start=datetime.now(), end=None):
        """ Returns a schedule of all events """
        calendars = self.service.calendarList().list().execute()
        batch = self.service.new_batch_http_request()

        events = []

        def add_events(sth, current_events, error):
            nonlocal events
            events += current_events["items"]

        for calendar in calendars["items"]:
            batch.add(
                self.service.events().list(
                    calendarId=calendar["id"],
                    timeMin=start.astimezone(timezone.utc).replace(
                        tzinfo=None).isoformat() + "Z",
                    timeMax=end.astimezone(timezone.utc).replace(tzinfo=None).isoformat() + "Z" if end
                    else None,
                ), callback=add_events)
        batch.execute()
        return events

    def add_events(self, calendar, events):
        batch = self.service.new_batch_http_request()
        for event in events:
            batch.add(self.service.events().insert(
                calendarId=calendar, body=event))
        batch.execute()
