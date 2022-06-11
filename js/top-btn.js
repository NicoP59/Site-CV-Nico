window.onscroll = function(){affichageTopBtn()}

var btn_top = document.getElementById('top-button')

function affichageTopBtn(){

    if(window.pageYOffset < 600){
        btn_top.style.visibility = "hidden"
    }else{
        btn_top.style.visibility = "visible"
    }
}

affichageTopBtn()