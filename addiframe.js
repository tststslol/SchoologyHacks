(function(){
    let toInsertIframe = document.createElement("iframe");
    toInsertIframe.src = prompt("Please enter the URL for the IFrame (you can still switch to another tab during this time):");
    toInsertIframe.width = `${prompt("Enter a number (in pixels) for how wide the iframe should be: ")}px`;
    toInsertIframe.height = `${prompt("Enter a number (in pixels) for how high the iframe should be: ")}px`;
    document.getElementById("edit-body_ifr").contentDocument.getElementById("tinymce").appendChild(toInsertIframe);

    alert("After it shows up (give some time to load), press post.");

    

    /* 
    document.head.appendChild(document.createElement('script')).src = 'https://bubbybabur.github.io/SchoologyHacks/addiframe.js'
    */
    
})();