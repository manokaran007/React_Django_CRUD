from django.contrib import admin
from django.urls import path,include

from rest_framework.routers import DefaultRouter
from myapp.views import ItemViewSet

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),

    path('admin/', admin.site.urls),
]
