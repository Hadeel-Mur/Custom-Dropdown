var dropdown = document.getElementById('d');
var options = document.getElementById('o');
var input = document.getElementById('v');

dropdown.addEventListener('click',function(){
    this.classList.toggle('show');
    console.log(dropdown);
   
})
options.addEventListener('click',function(event){
    const listItem = event.target;
    const value = listItem.attributes.class.value;
    input.value = value;
})