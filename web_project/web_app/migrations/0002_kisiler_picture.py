# Generated by Django 4.1.5 on 2023-10-04 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='kisiler',
            name='picture',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]