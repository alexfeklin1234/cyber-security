# CamPhish
Grab cam shots from target's phone front camera or PC webcam just sending a link.


# What is CamPhish?
<p>CamPhish is techniques to take cam shots of target's phone front camera or PC webcam. CamPhish Hosts a fake website on in built PHP server and uses ngrok & serveo to generate a link which we will forward to the target, which can be used on over internet. website asks for camera permission and if the target allows it, this tool grab camshots of target's device</p>

## This Tool Tested On :
<ul>
  <li>Kali Linux</li>
  <li>Termux</li>
  <li>MacOS</li>
  <li>Ubuntu</li>
  <li>Parrot Sec OS</li>
</ul>

# Installing and requirements
<p>This tool require PHP for webserver, SSH or serveo link. First run following command on your terminal</p>

```
apt-get -y install php openssh git wget
```

## Installing (Kali Linux/Termux):

```
git clone https://github.com/techchipnet/CamPhish
cd CamPhish
bash camphish.sh
```

## Change Log:

<p><b>Version: 1.5:</b> Add new online meeting template</p>
<p><b>Version: 1.4:</b> Ngrok authtoken update</p>
<p><b>Version: 1.3:</b> Fix ngrok direct link</p>

### Video Demo
[![CamPhish Update demo](https://img.youtube.com/vi/i7tvDJx3-yw/0.jpg)](https://www.youtube.com/watch?v=i7tvDJx3-yw)
#### For More Video subcribe <a href="http://youtube.com/techchipnet">TechChip YouTube Channel</a>
<p>CamPhish is created to help in penetration testing and it's not responsible for any misuse or illegal purposes.</p>
<p>CamPhish is inspired by https://github.com/thelinuxchoice/ Big thanks to @thelinuxchoice</p>
