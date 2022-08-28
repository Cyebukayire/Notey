from dataclasses import fields
from tkinter.messagebox import NO
from rest_framework.serializers import ModelSerializer
from .models import Note

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        # fields = ['body', 'updated'] 
        fields = '__all__'
