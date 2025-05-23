function a(){
    var a=document.getElementById("a").value;
    var res="";
    for(var i=0;i<=a.length;i++)
{
    res=a.charAt(i)+res;
}
document.write(res);
}