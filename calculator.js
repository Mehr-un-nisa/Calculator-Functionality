function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}
function equal(){
    var num=document.form.textview.value;
    if(num){
    document.form.textview.value=eval(num)
}
}
function clean(){
    document.form.textview.value="";
}
function percent(){
    var number=document.form.textview.value;
    if(number){
    document.form.textview.value=number/100;
    }
}
function back(){
    var num=document.form.textview.value;
    document.form.textview.value =num.substring(0,num.length-1)
}
