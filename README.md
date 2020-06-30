# SchoologyHacks

Schoology is a bad version of Social Media sites like Instagram and Facebook. However, it has a exploit when you post things.

When you post something, it seems like you can only post images and links. This is because it doesn't let you put in other elements like iframes and scripts and whatnot (for obvious reasons). Instead, I found a way to post HTML elements using the console, including iframes which are the most useful to me personally.

## How to:

Open up the console and create a new HTML element. It can be whatever you want. 
If you're a noob, here's the syntax:
`var creativeName = document.createElement("p");`
(The p can be replaced with img to make an image element, iframe to make an inline frame, or even script.)

Next, change the properties of the element. For example:
`creativeName.innerHTML = "Big hacks.";`

Finally, append it to the schoology post box. This is tricky, as you'll have to find the ID for the box. In my experience, it usually is `tinymce`.
`document.querySelectorAll("#tinymce").appendChild(creativeName);`

And ta-da! You've gotten a p element into the box! This is useless with paragraph elements, but *much* more useful with elements like iframe, which you cannot import manually.

I'll give a quick example of how to import Google maps into your personal schoology page. This is just a proof of concept, and you can do this with any website.

First, go to your personal page. Don't do it on a group page or anything, since it doesn't work. Then, read these instructions and memorize them, because once you start you can't leave the Schoology page.

1. Go to Schoology - But wait, not yet, finish reading the instructions first. You *will* go to Schoology and click on the box that normally allows you to enter text.

2. Open the console and type in: 
`var target = document.getElementById("tinymce")`
`var insertion = document.createElement("iframe");`
`insertion.src = "https://www.google.com/maps/@15.8950774,15.9430727,3z"`
`insertion.width="100%"`
`insertion,.height="500px"`
`target.appendChild(insertion)`

3. Do steps 1 and 2. (You should copy the code in step 2.)

Note that the link on the third line can be changed to anything in general. For example, a custom website telling more about yourself, or maybe a video explaining who you are, or maybe even a rick-ro- sorry, what?

It seems that Schoology takes the HTML in that box and copies it. Then, it saves it and probably pastes it on an user's site. There is no intermediate step that checks for valid elements, which allows us to put in some pretty great content cough cough totally didn't plug my Github page cough cough.

Of course, iframes are safe and you won't be able to post any malicious content, so don't even try. This exploit is mostly just to make your Schoology profile awesome and terrific and fantastically gorgeous and, yeah I should stop. If you can't code HTML yet, you can use Google Sites or Wix to build and publish a website about yourself, then paste it into Schoology you n00b. If you can code HTML, I'd really like to hear from you and what you've done with this.

I have a couple folders in this repo that I use. The rickroll folder includes an autoplaying rick roll, which I had for a while on my own Schoology profile. I took it down later because I felt like teachers might not be as *appreciative* of my artwork as others.
