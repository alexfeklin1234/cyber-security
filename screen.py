import rotatescreen
import time



screen = rotatescreen.get_primary_display()
while True:
    screen.rotate_to(90)
    time.sleep(2)
    screen.rotate_to(0)
