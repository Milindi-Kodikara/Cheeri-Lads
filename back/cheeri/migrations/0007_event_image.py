# Generated by Django 2.2.3 on 2019-07-27 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cheeri', '0006_auto_20190727_1649'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='image',
            field=models.CharField(default='', max_length=1000),
            preserve_default=False,
        ),
    ]
