var tabs = document.querySelectorAll('#nav-entete a')
for (var i=0 ; i < tabs.length ; i++){
    tabs[i].addEventListener('click' , function(e){

        var li = this.parentNode                          // cette variable represente l'onglet actuel
        var div = this.parentNode.parentNode.parentNode   // dans cette variable div on a selectionner la div parent principale

       if (li.classList.contains('active')){
            return false
        }

        //on retire la class active de l'onglet actif
        div.querySelector('#nav-entete .active').classList.remove('active')

        //on ajoute la class active a l'onglet actuel
        li.classList.add('active')

        //on retire la class active sur le contenu actif
        div.querySelector('.content.active').classList.remove('active')
 
        //on ajoute la class active au contenu actuel
        div.querySelector(this.getAttribute(herf)).classList.add('active')

    })
} 