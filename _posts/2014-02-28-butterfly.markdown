---
layout: post
title:  "butterfly your everyday terminal in your web browser"
tags: [projects, butterfly, websocket, coffeescript, python]
class: butterfly
---


There's something I've been working on recently, at start just for fun but it turned out I use it everyday, so here it is:

![butterfly screen cast](/assets/butterfly_1.gif)
#### **butterfly** your everyday terminal right in your browser


## Try it

To try it, it's as simple as:

{% highlight bash %}
$ sudo pip install butterfly # Install butterfly
$ butterfly.server.py        # Launch the web server
{% endhighlight %}

Then all you have to do is go to : [localhost:57575](http://localhost:57575)


## Use it

### Server side

#### Run at start-up with systemd

As it relies on a server running in background, you can download the systemd file from here [butterfly.service](https://github.com/paradoxxxzero/butterfly/raw/master/butterfly.service) put it in `/etc/systemd/system/` or equivalent and:

{% highlight bash %}
$ sudo systemctl enable butterfly
$ sudo systemctl start butterfly
{% endhighlight %}

Now the server will always be running.


#### Running as root and multiple users

butterfly is made to work as the terminal user and as root. When running as root the privileges are dropped to the user that initiated the connection, i.e. the user that opened the web page. You can change the terminal user by going to  [localhost:57575/user/\<user\>](http://localhost:57575/user/user).


#### Access from a remote machine

You can set the bind host with `butterfly.server.py --host="0.0.0.0"` which will allow other users to connect to your terminal.
A password will be asked but IT IS NOT SECURE! So it's recommended as of now to run this only on local network for testing purposes.


#### Run a specific shell

Use the **shell** command line option: `butterfly.server.py --shell=/bin/fish`


### Client side

butterfly works like any other terminal but it has some specific features.


#### Enter browser shortcuts

When the terminal is focused all the hot-keys are caught (except from those the browser prevent to catch).
If you want to access the address bar with **CTRL + L** it won't work. That why the **ALT + Z** combination is here to tell butterfly that the next key combination must not be caught. In other word accessing the address bar is done by doing **ALT + Z** then **CTRL + L**. (If your browser support css3 filters the screen will turn sepia).


#### Quick selection of history text

This is a feature I've always wanted to find in a terminal, quick history selection. I've started to implement some ideas you can try by hitting **CTRL + SHIFT + up** and then navigating the selection with **CTRL + SHIFT + up/down** and the arrow keys. When you got it right, hit **ENTER** and butterfly will enter the selection right into the prompt:

![butterfly selection](/assets/butterfly_2.gif)


## Other features

* The visual style is done using css so it's entirely editable.
* You can easily extend the in-browser terminal behavior by writing javascript (like it's done for the quick selection).
* As apparently it's trendy to use a "modern" text editor based on a browser, so...

![butterfly modern editors](/assets/butterfly_3.gif)


## Missing features

* The scroll-back is actually limited to 100 000 lines as of now in order to limit the memory footprint. It would be a good idea to store the scroll-back on the disk using the server.

* Embedding html directly into the terminal is possible and partially supported with the `ESC]99;<html>BELL` command. It can lead to some [interesting features](https://github.com/paradoxxxzero/butterfly/tree/master/bin).

* 16.7 millions of color is not yet supported but it's one hack away using the `ESC[38;2;r;g;bm` escape.
* An in-terminal css/js editing options with why not a package repository for theme and extensions.


## That's all

[The repository is hosted on github](https://github.com/paradoxxxzero/butterfly).

So let me know what do you think of it, I had a lot of fun writing it anyway.
