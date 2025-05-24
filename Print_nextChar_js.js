function a()
{
   var s=document.getElementById("a").value;
   var i="";
   for(var i=0;i<s.length;i++)
   {
   document.writeln(String.fromCharCode(s.charCodeAt(i)+1));
   }
}