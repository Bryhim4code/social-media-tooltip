var myNodelist = document.getElementsByTagName('LI');

var i;
for (let i = 0; i < myNodelist.length; i++) {
   var span = document.createElement('SPAN');
   var text = document.createTextNode('cancel');
   span.className = 'close';
   span.appendChild(text);
   myNodelist[i].appendChild(span);
    
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement ;
    div.style.display = "none";
  }
}


function newElement() {
    var todos = [];
    var li = document.createElement('li');
    var inputvalue = document.getElementById('input').value;
    var t = document.createTextNode(inputvalue);
    li.appendChild(t);

    if (inputvalue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement('SPAN');
   var text = document.createTextNode('cancel');
   span.className = 'close';
   span.appendChild(text);
    li.appendChild(span);

    
    var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}

