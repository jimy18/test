"use strict"
//function mensaje()
//{
//  var m1,m2,m3,g, n,a,c;
//  m1 = document.getElementById("pn");
//  m1.innerHTML = "";
//  n= document.getElementById("name").value;
//  a= document.getElementById("last").value;
//  try
//    {
//      if (n == ""||a=="") throw "Nombre o Apellido esta Vacio";
//    }
//  catch (err)
//    {
//      m1.innerHTML = err;
//    }
//}

function validar()
{
  var valido, x, y;
  valido=document.getElementById("pn");
  x=document.getElementById("name").value;
  y=document.getElementById("last").value;

try {
  if (x=="" || y=="")
  {
    throw   "Falta Nombre o Apellido";
  }
  else {
    throw "";
  }

} catch (err) {
  valido.innerHTML=err;

} finally {

}

//  document.getElementById("pn").innerHTML=valido;
}
