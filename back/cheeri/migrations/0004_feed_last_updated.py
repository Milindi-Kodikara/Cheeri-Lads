# Generated by Django 2.2.3 on 2019-07-27 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cheeri', '0003_auto_20190727_0833'),
    ]

    operations = [
        migrations.AddField(
            model_name='feed',
            name='last_updated',
            field=models.CharField(default='2019-07-27 18:38:45.233228466+10:00', max_length=100),
            preserve_default=False,
        ),
    ]
