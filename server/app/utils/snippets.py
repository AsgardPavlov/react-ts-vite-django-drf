from rest_framework import viewsets
from rest_framework.mixins import (CreateModelMixin, DestroyModelMixin,
                                   ListModelMixin, RetrieveModelMixin,
                                   UpdateModelMixin)
from rest_framework.permissions import IsAuthenticated

from app.settings.throttles import BurstRateThrottle, SustainedRateThrottle


class ModelViewSet(
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
    ListModelMixin,
    viewsets.GenericViewSet,
):
    permission_classes = [IsAuthenticated]
    throttle_classes = [BurstRateThrottle, SustainedRateThrottle]

    def get_serializer_class(self):
        if self.request.method == "POST" and hasattr(self, "serializer_create_class"):
            return self.serializer_create_class
        if self.request.method == "PUT" and hasattr(self, "serializer_update_class"):
            return self.serializer_update_class
        if self.request.method == "DELETE" and hasattr(
            self, "serializer_destroy_class"
        ):
            return self.serializer_destroy_class
        if "auto_complete" in self.request.get_full_path() and hasattr(
            self, "serializer_auto_complete_class"
        ):
            return self.serializer_auto_complete_class
        return self.serializer_class
