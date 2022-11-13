from http import client
import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(("10.10.10.92", 1234))

while True:
    client.send(input().encode("utf-8"))