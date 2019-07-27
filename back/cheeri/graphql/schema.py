
import graphene
from graphene import relay
from graphene_django.types import ObjectType, DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from cheeri.models import Calendar, Event, Feed

class EventNode(DjangoObjectType):
    class Meta:
        name = "Event"
        model = Event
        filter_fields = ["id", "name", "description", "start", "end", "location"]
        interfaces = (relay.Node,)

class FeedNode(DjangoObjectType):
    class Meta:
        name = "Feed"
        model = Feed
        filter_fields = ["id", "name", "color"]
        interfaces = (relay.Node,)

class CalendarNode(DjangoObjectType):
    class Meta:
        name = "Calendar"
        model = Calendar
        filter_fields = ["id", "name"]
        interfaces = (relay.Node,)

class Query(ObjectType):
    event = relay.Node.Field(EventNode)
    all_events = DjangoFilterConnectionField(EventNode)

    feed = relay.Node.Field(FeedNode)
    all_feeds = DjangoFilterConnectionField(FeedNode)

    calendar = relay.Node.Field(CalendarNode)
    all_calendars = DjangoFilterConnectionField(CalendarNode)
    

schema = graphene.Schema(query=Query)
