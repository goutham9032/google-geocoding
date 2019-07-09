from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include

from app import views as app_views

urlpatterns = [
    path("admin/", admin.site.urls),
    url(r"^$", app_views.upload_exel, name="upload_exel"),
    url(
        r"download_results/(?P<file_id>[\w-]+)/$",
        app_views.download_results,
        name="download_results",
    ),
]
