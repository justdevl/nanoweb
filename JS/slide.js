var slides= document.querySelectorAll('.slide')

var index= 0;


window.setInterval(function(){

    slides[index].classList.remove('active');
    if(index == slides.length-1){
        index= -1;
    }
    
    slides[index+1].classList.add('active');
    index +=1;
},5000)
