alert("Hello World")

function abrirPopup() {

    var linkURL = "https://www.youtube.com/embed/pHMH408ltEM?si=9nKpbFlS0sZayPpL&amp;controls=0&amp;start=12";
    
    var popupConfig = "width=600, height=400, top=100, left=100, resizable=yes, scrollbars=yes, autoplay";
    
    window.open(linkURL, "PopupName", popupConfig);
}

document.getElementById("openPopupButton").addEventListener("click", function() {
    abrirPopup();
});


