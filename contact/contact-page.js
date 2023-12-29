function home_button(event){
    if (event.button === 0){
        location.href = "../index.html";
    } else if (event.button === 1){
        window.open("../index.html", '_blank').focus();
    }
}