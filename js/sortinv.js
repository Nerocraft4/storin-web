function sort(value){
  var by = ""
  if(value.split(' ')[0]=="Name"){
    by = "h4"
  }else{
    by = "#units"
  }
  var gr = value.split(' ')[1]

  var list, i, swithing, shouldswitch;
  list = document.getElementById("invlist");
  switching = true;
  while(switching){
    switching = false;
    b = list.querySelectorAll(".invelem");
    for(i=0; i<(b.length-1); i++){
      shouldswitch=false;
      var p = b[i].querySelector(by).innerHTML.toLowerCase()
      var q = b[i+1].querySelector(by).innerHTML.toLowerCase()
      if(by=="#units"){
        p = parseInt(p);
        q = parseInt(q);
      }
      if(gr=="ASC"){
        if(p > q){
          shouldswitch = true;
          break;
        }
      }else{
        if(p < q){
          shouldswitch = true;
          break;
        }
      }
    }
    if(shouldswitch){
      b[i].parentNode.insertBefore(b[i+1], b[i]);
      switching=true;
    }
  }
}

function search(){
  var list = document.getElementById("invlist");
  var i;
  var b = list.querySelectorAll(".invelem");
  for(i=0; i<(b.length-1); i++){
    console.log(b.innerHTML);
  }
}
