var article_a_propos = document.querySelectorAll('.article-a-propos')

var changeAnim = 0

var anim = [    
    "fade-left",
    "fade-right"
]

window.onresize = function(){ removeData()}

function removeData(){

    if(window.pageYOffset < 600){
        article_a_propos.forEach(element => {
            element.dataset.aos = "none"
        });    
    }else{
        article_a_propos.forEach(element => {
            element.dataset.aos = anim[changeAnim]
            changeAnim++
        });    
        changeAnim = 0
    }    

}    

removeData()




