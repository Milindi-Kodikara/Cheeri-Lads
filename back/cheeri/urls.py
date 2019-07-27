from cheeri.views import EventViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'events', EventViewSet)
urlpatterns = router.urls
