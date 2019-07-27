class EventFeed(ICalFeed):
    """
    A simple event calender
    """
    product_id = '-//hazelfire.net//Horizon//EN'
    timezone = 'UTC'
    file_name = "event.ics"

    def items(self, request):
        return Event.objects.all().order_by('-start_datetime')

    def item_title(self, item):
        return item.title

    def item_description(self, item):
        return item.description

    def item_start_datetime(self, item):
        return item.start_datetime

