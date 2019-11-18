function insert(num){
form.textview.value +=num;
}
function equal(){
    form.textview.value=eval(form.textview.value)
}

function clearAll(){
    form.textview.value=" "
}
function back(){
    var exp=form.textview.value;
    form.textview.value=exp.substring(0,exp.length-1);
}
