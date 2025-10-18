import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def summarize_text(request):
    print("🔥 Request hit Django backend!", request.method)
    print("🔹 Raw body:", request.body)
    if request.method == 'POST':
        data = json.loads(request.body)
        print("📩 Data received:", data)
        text = data.get('text', '')
        print("📝 Text received:", text)

        if not text:
            return JsonResponse({'error': 'No text provided'}, status=400)

        return JsonResponse({'message': 'Data received successfully!'})

