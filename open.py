import pyautogui as pg

import webbrowser
# import time
# time.sleep(5)
# f = open('text.txt', 'r')
# for line in f:
#     pyautogui.typewrite(line)
#     pyautogui.press('enter') 


pg.screenshot('pic.png')
pg.click(590, 870)
pg.typewrite('hello!')
pg.typewrite(['enter'])
webbrowser.open('https://github.com/alexfeklin1234', new=2)
pg.alert('Hello')
