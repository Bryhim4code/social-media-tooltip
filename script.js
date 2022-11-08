var myNodelist = document.getElementById('li');
var i;
for (let i = 0; i < myNodelist.length; i++) {
   var span = document.createElement('span');
   var text = document.createTextNode('close')
   span.className ='close';
   span.appendChild(text);
   myNodelist[i].appendChild(span);
    
}

var close = document.getElementById('close')
var i;
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = 'none';
        
    }
    
}