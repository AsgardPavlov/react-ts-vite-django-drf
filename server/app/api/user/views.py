from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from app.api.user.models import User
from app.utils.snippets import ModelViewSet


class UserViewSet(ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = User.objects.all()

    @action(detail=False, url_path="user")
    def user(self, request, *args, **kwargs):
        data = {"user_name": "Hello word", "max_value": 10, "value": request.data}
        headers = self.get_success_headers(data)
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)
