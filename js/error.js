function mensaje()
{
  var m1,m2,m3,g, n,a,c;
  m1 = document.getElementById("pn");
  m1.innerHTML = "";
  n= document.getElementById("name").value;
  a= document.getElementById("last").value;
  try
    {
      if (n == ""||a=="") throw "Nombre o Apellido esta Vacio";
    }
  catch (err)
    {
      m1.innerHTML = err;
    }


}
