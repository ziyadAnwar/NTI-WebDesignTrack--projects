for(let input of document.querySelectorAll('form div input')){
    input.onkeyup = function(){
       if(event.target.value.length < 4){
         event.target.nextElementSibling.textContent = event.target.placeholder+' charachers is week';

         event.target.nextElementSibling.className = 'alert alert-danger';
        }else{
            event.target.nextElementSibling.textContent = '';

         event.target.nextElementSibling.className = '';
        }
    }
}