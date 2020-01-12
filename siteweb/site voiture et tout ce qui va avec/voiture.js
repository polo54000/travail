var btn = document.querySelector('toggle_btn');  
var nav = document.querySelector('nav');  

btn.onClick = function(){
	nav.classlist.toggle('nav open');
}
