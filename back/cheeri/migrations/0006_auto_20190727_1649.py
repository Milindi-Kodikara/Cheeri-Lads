# Generated by Django 2.2.3 on 2019-07-27 16:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cheeri', '0005_auto_20190727_1208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='feed',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='events', to='cheeri.Feed'),
        ),
    ]
