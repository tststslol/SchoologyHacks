# SchoologyHacks

Schoology is a bad version of Social Media sites like Instagram and Facebook. However, it has **LOTS** of security issues.

When you post something, it seems like you can only post images and links. This is because you cannot manually put in other elements like iframe and script and whatnot. Instead, you must use the console.

## How to:

Open up the console and create a new HTML element. It can be whatever you want. 
If you're a noob, here's the syntax:
`var creativeName = document.createElement("p");`
(The p can be replaced with img to make an image element, iframe to make an inline frame, or even script.)

Next, change the properties of the element. For example:
`creativeName.innerHTML = "Big hacks.";`

Finally, append it to the schoology post box. This is tricky, as you'll have to find the ID for the box. In my experience, it usually is `tinymce`.
`document.querySelectorAll("#tinymce").appendChild(creativeName);`

And Voila! You've gotten a p element into the box! This is useless with paragraph elements, but *much* more useful with elements like iframe, which you cannot import manually.

It seems that Schoology takes the HTML in that box and copies it. Then, it saves it and probably pastes it on an user's site. There is no intermediate step that checks for valid elements, which allows us to put in some pretty great content cough cough totally didn't plug my Github page cough cough.

The purpose of this repository is to make a reference that can be accessed in the Schoology site.

Awesome!

