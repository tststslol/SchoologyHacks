# Schoology Hacks

Have you ever wanted to put random web pages in your Schoology posts? Have you ever wanted to lock down your Schoology account's posts with a janky password that anyone who is competent at HTML/JS can find but if you don't do programming you can't find? Have you ever just wanted to destroy other people's Schoology workflows and probably get in trouble for it? Well, if your answers to any of those questions were yes, no, maybe so, or anything in between, this is the Github repo for you!

So how do you do this? Well, navigate to your profile or any group forum where you see the posting box. Now, right click anywhere and click **"Inspect"**. A lot of random gibberish should suddenly pop up, and click "Console" (should be somewhere on top). In that console, you'll see a lot more random gibberish. But the important thing is you can type in:
`document.head.appendChild(document.createElement('script')).src = 'https://bubbybabur.github.io/SchoologyHacks/addiframe.js'`
After you type it in, hit enter- **BUT FIRST**

**Make sure to go to the file https://github.com/BubbyBabur/SchoologyHacks/blob/master/addiframe.js. *MAKE SURE YOU UNDERSTAND WHAT IT DOES,*** because I could've totally put something in there than sends all your personal info to my own server or something. Rule of thumb, don't do anything that you don't understand because rip personal info.

Also, you can lock down any page or group with a janky password. This password can be found with some JS knowledge, but for the average user, it's rather difficult to find. Open a group or your profile, and put in your console: 
`document.head.appendChild(document.createElement('script')).src = 'https://bubbybabur.github.io/SchoologyHacks/addlock.js'`
**Again, go to https://github.com/BubbyBabur/SchoologyHacks/blob/master/addlock.js to verify the code! Be careful!**

## NOTES:

**Troubleshooting:**
If it doesn't work, make sure you're in somewhere you can post, like a group, a course (not recommended because teachers), or your profile. Comments don't work.
If it still doesn't work and the above wasn't helpful in any shape way or form, try reloading and trying it again. Avoid clicking on anything with your cursor after you inspect (there's a few details about how the HTML structure works that make it not very cool).

If it still doesn't work, I don't know what to tell you.

## Schoology Portfolios
This process is amazingly easy in Schoology portfolios. In a page inside any of your portfolios, there'll be two dots on the top right corner of the rich text editor, underneath the "preview button". Click that to toggle the HTML editor. Inside that editor, put:
`<p><iframe src="https://bubbybabur.github.io/SchoologyHacks/rickroll" width="320" height="240" style="width: 100%; height: 500px;"></iframe></p>`
Then, wait maybe 5 seconds for it to autosave and click Preview. You may need to click it a couple times for it to work. Then, you should have a button inside your page. 
You can change the "https://bubbybabur.github.io/SchoologyHacks/rickroll" inside the HTML code above to anything you want. It seems like it doesn't work for http, though. You can change the "width:100%" or "height:500px" to anything too (it's inline css). 
And yes, you can literally put any html element there, except it checks for xss and stuff.

**Ok bye**

So yeah, put whatever in your Schoology posts, lock down your content, so yeah. Need some suggestions? Maybe put https://bubbybabur.github.io/SchoologyHacks/rickroll/ in. It's, uh, ok yes it's a rickroll. Rickroll your teachers, whatever.

I'm not responsible if you get yourself into trouble ok? ok understand understood.

EDIT: I submitted a bug report about this, and it seems like this is actually fine since iframes can't exactly steal user data. They can only be super annoying.
