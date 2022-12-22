# Server docs

This project stack: [Django](https://www.djangoproject.com/), [DRF](https://www.django-rest-framework.org/), [PostgreSQL](https://www.postgresql.org/)

## Steps to start the server:

Setting up virtual environment:
* `python -m venv venv`

Get in to the virtual environment:
* `source ./venv/bin/activate` (macOs)
* `.\venv\Scripts\activate` (windows)
* `pip install -r requirements.txt`

Run migrates:
* `python manage.py migrate`

Run server:
* `python manage.py runserver`

## Available Scripts

* `pip freeze > requirements.txt`
* `python manage.py makemigrations`

        "django_extensions",
        "django_prometheus",
        "corsheaders",
        "rest_framework",  # utilities for rest apis
        "djoser",
        "recurrence",
        # "rest_framework.authtoken",  # token authentication
        "django_filters",  # for filtering rest endpoints
