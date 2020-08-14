# Ok bug report time.

I've discovered like a really annoying way to render Schoology useless for all users in a group, which is definitely a nonzero bug, so I've submitted a bug report.

Previously, we only thought you could put iframes in, but then we realized alerts went through iframes, so yeah, that's a lot of trouble.

**Make sure to go to the file https://github.com/BubbyBabur/SchoologyHacks/blob/master/addiframe.js. *MAKE SURE YOU UNDERSTAND WHAT IT DOES,*** because I could've totally put something in there than sends all your personal info to my own server or something. Rule of thumb, don't do anything that you don't understand because rip personal info.

Also, you can lock down any page or group with a janky password. This password can be found with some JS knowledge, but for the average user, it's rather difficult to find. Open a group or your profile, and put in your console: 
`document.head.appendChild(document.createElement('script')).src = 'https://bubbybabur.github.io/SchoologyHacks/addlock.js'`
**Again, go to https://github.com/BubbyBabur/SchoologyHacks/blob/master/addlock.js to verify the code! Be careful!**

So yeah, put whatever in your Schoology posts, lock down your content, so yeah. Need some suggestions? Maybe put https://bubbybabur.github.io/SchoologyHacks/rickroll/ in. It's, uh, ok yes it's a rickroll. Rickroll your teachers, whatever.

I'm not responsible if you get yourself into trouble ok? ok understand understood.

EDIT: I submitted a bug report about this, and it seems like this is actually fine since iframes can't exactly steal user data. They can only be super annoying.
