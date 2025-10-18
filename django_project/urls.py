from django.contrib import admin
from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('summarize/', views.summarize_text, name='summarize'),
    path('', TemplateView.as_view(template_name='index.html')),
]





