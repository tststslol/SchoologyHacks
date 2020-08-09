
// This line means define a function, then run it.
// If you're confused why this is necessary, it's because it keeps the variables out of the global namespace. 
// If you don't know what that means, GO LEARN JAVASCRIPT you absolute fool of a homo sapien
(function(){
    
    // First line: we create a variable called "toInsertIframe" and let it be a new element, an iframe.
    // Iframes are elements that can store websites basically.
    let toInsertIframe = document.createElement("iframe");
    
    // Then, we prompt the user for the URL of the iframe, then let the src (shorthand for "source")
    // of the iframe to be the user's input.
    toInsertIframe.src = prompt("Please enter the URL for the IFrame (you can still switch to another tab during this time):");
    
    // We then ask the user for the width of the iframe, and assign that to the iframe's width.
    toInsertIframe.width = `${prompt("Enter a number (in pixels) for how wide the iframe should be: ")}px`;
    
    // Same for height.
    toInsertIframe.height = `${prompt("Enter a number (in pixels) for how high the iframe should be: ")}px`;
    
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
    // document.head.appendChild(document.createElement('script')).src = 'https://bubbybabur.github.io/SchoologyHacks/addiframe.js'
    
})();
