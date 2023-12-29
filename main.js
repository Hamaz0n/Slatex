function isMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
  }
  document.addEventListener("DOMContentLoaded", function() {

      
      
      if (!(isMobile())) {
          var elements = document.getElementsByClassName("title");
          for (var i = 0; i < elements.length;i++){
              elements.item(i).style.fontSize = "1.5rem";
            }
        }
        else{
        document.getElementsByClassName("title_container").item(0).style.height = "40vh";
        let buttons = document.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++){
            buttons.item(i).style.fontSize = "1rem";
        }
        document.getElementsByClassName("button_text").item(0).style.fontSize = "3.5vw";
    }
});


function gitButton(event) {
    if (event.button === 0){
        location.href = "https://github.com/Hamaz0n/Slatex";
    } else if (event.button === 1){
        window.open("https://github.com/Hamaz0n/Slatex", '_blank').focus();
    }
};

function contact_button(event){
    if (event.button === 0){
        location.href = "contact/contact-page.html";
    } else if (event.button === 1){
        window.open("contact/contact-page.html", '_blank').focus();
    }
}