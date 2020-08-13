# Ok bug report time.

I've discovered like a really annoying way to render Schoology useless for all users in a group, which is definitely a nonzero bug, so I've submitted a bug report.

Previously, we only thought you could put iframes in, but then we realized alerts went through iframes, so yeah, that's a lot of trouble.

Go to https://github.com/BubbyBabur/SchoologyHacks/blob/master/addiframe.js to see the code we used for injecting an iframe.
The website that we put in the iframe was https://bubbybabur.github.io/SchoologyHacks/janktest/. Currently, it only alerts once, but you could see how we can change it so it alerts constantly or alerts until you insert the right password.
