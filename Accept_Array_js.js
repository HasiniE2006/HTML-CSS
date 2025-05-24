function a()
{
   var s=document.getElementById("a").value;
   var i=s.split(",").map(Number);
   document.getElementById("p").innerHTML=(i);
   document.getElementById("p1").innerHTML=(JSON.stringify(i));
   
}