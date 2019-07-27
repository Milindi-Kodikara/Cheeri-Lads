
import graphene
from graphene import relay
from graphene_django.types import ObjectType, DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from cheeri.models import Calendar, Event, Feed
from cheeri.api import update_feed

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



class SubscribeMutation(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        token = graphene.String(required=True)
        calendar_id = graphene.ID(required=True)
        name = graphene.String(required=True)
        color = graphene.String(required=True)
    
    ok = graphene.Boolean()

    def mutate(self, info, token, calendar_id, name, color):
        calendar = Calendar.objects.get(pk=calendar_id)        
        calendar.feeds.create(token=token, calendar_id=calendar_id, name=name, color=color, events=[])
        return SubscribeMutation(ok=True)

class UpdateFeed(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        feed_id = graphene.ID(required=True)
    
    ok = graphene.Boolean()

    def mutate(self, info, feed_id):
        feed = Feed.objects.get(pk=feed_id)
        update_feed(feed)
        return SubscribeMutation(ok=True)


class Mutation(ObjectType):
    subscribe = SubscribeMutation.Field()
    update = UpdateFeed.Field()
           
schema = graphene.Schema(query=Query, mutation=Mutation)
