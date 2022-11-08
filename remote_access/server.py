from http import server
import webbrowser
import socket
import subprocess



server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((socket.gethostbyname_ex(socket.gethostname())[-1][-1], 1234))

server.listen()

while True:
    user, adres = server.accept()

    while True:
        data = user.recv(1024).decode("utf-8").lower()
        print(data)

        if data == "youtube":
            webbrowser.open("https://www.youtube.com/"),
        if data == "vk":
            webbrowser.open("https://vk.com/"),
        if data == "github":
            webbrowser.open("https://github.com/"),
        if data == "netlify":
            webbrowser.open("https://www.netlify.com/"),
        if data == "hack you!":
            webbrowser.open("https://www.google.com/search?q=hackyou")
        if data == "hello!":
            webbrowser.open("https://www.google.com/search?q=hello&rlz=1C5CHFA_enRU898RU898&sxsrf=ALiCzsb0BOonzaAro_8u9eIKf5PwlK_STA:1666804497442&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi7nevPsv76AhXqpIsKHfOaAbUQ_AUoAXoECAIQAw&cshid=1666804570952551&biw=1440&bih=705&dpr=2#imgrc=qO0S-Nq1QjAjkM")
        if data == "terminal1":
            command = "touch hello.txt"
            p = subprocess.Popen(command, shell=True, bufsize=0, stdout=subprocess.PIPE, universal_newlines=True, executable='/bin/bash')
            p.wait()
            output = p.stdout.read()
            print(output )
            p.stdout.close()
            
