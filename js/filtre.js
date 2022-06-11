var filtre_btn = document.querySelectorAll(".btn-filtre")

var all_projet = document.querySelectorAll('.div-carte-projet')


filtre_btn.forEach(element => {
    element.addEventListener('click', changementFiltre)
});

function changementFiltre(){

    filtre_btn.forEach(element => {
        element.classList.remove("active")
    });

    this.classList.toggle("active") 

    dataProjet = this.dataset.projet 

    if(dataProjet == "all"){

        for(i = 0; i < all_projet.length; i++){

            all_projet[i].style.display = ""
    
        }
    }else{
        
        for(i = 0; i < all_projet.length; i++){
    
            if(all_projet[i].dataset.projet != dataProjet){
                all_projet[i].style.display = "none"
            }else{
                all_projet[i].style.display = ""
            }
    
        }
    }


}

