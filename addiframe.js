(function(){
    let toInsertIframe = document.createElement("iframe");
    toInsertIframe.src = prompt("Please enter the URL for the IFrame (you can still switch to another tab during this time):");
    toInsertIframe.width = `${prompt("Enter a number (in pixels) for how wide the iframe should be: ")}px`;
    toInsertIframe.height = `${prompt("Enter a number (in pixels) for how high the iframe should be: ")}px`;
    document.getElementById("edit-body_ifr").contentDocument.getElementById("tinymce").appendChild(toInsertIframe);

    alert("After it shows up (give some time to load), press post. Some sites don't allow you to put them in iframes (most sites actually), but I'm pretty sure Github Pages is a safe bet.");

    

    /* 
    document.head.appendChild(document.createElement('script')).src = 'https://bubbybabur.github.io/SchoologyHacks/addiframe.js'
    */
    
})();
