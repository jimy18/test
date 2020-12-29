var menu, i, x="";
menu=
{
  //creamos el JSON Del menu
  "menus":[
      {"uno":"INICIO"},
      {"uno":"NOSOTROS"},
      {"uno":"EQUIPO"},
      {"uno":"TRABAJOS"},
      {"uno":"HISTORIA"}
    ]
}
//creamos una condicion donde mientras i sea igual al contenido de menu.menus
for ( i in menu.menus)
{
//x = document.createElement("LI");
/*la condicion if nos sirve para agregar un href a cada elemento
ya que con el for vamos seleccionando elemento por elemento */
  if(i==0)
  {
    //a de a href
  x=document.createElement("a");
    x.id= "in";
    x.className="nav-link active";
    x.href="inicio.html";

  }
  if(i==1)
  {

    x=document.createElement("a");
    x.className="nos";
     x.href="nosotros.html";

  }
  if(i==2)
  {
    x=document.createElement("a");
    x.href="equipo.html";
  }
  if(i==3)
  {
    x=document.createElement("a");
    x.href="contacto.html";
  }
  if(i==4)
  {
    x=document.createElement("a");
    x.href="contacto.html";
  }
  //asignamos a la variable tel contenido de menu.menus.uno dependiendo el lugar en el que se encuentr la variable i
  var t = document.createTextNode(menu.menus[i].uno);
//agregamos el contenido de t en x como si fuera un hijo
  x.appendChild(t);
  //en nav vamos a agregar el contenido de x
  document.getElementById("nav").appendChild(x);
}



var foot, a, b="";
foot=
{
  //creamos el JSON Del menu
  "footer":[
      {"uno":"P1"},
      {"uno":"P2"},
      {"uno":"P3"},
      {"uno":"Contactanos"},
    ]
}
//creamos una condicion donde mientras i sea igual al contenido de menu.menus
for ( a in foot.footer)
{
//x = document.createElement("LI");
/*la condicion if nos sirve para agregar un href a cada elemento
ya que con el for vamos seleccionando elemento por elemento */
  if(a==0)
  {
  b=document.createElement("a");
    b.href="inicio.html";
  }
  if(a==1)
  {
    b=document.createElement("a");
    b.href="nosotros.html";
  }
  if(a==2)
  {
    b=document.createElement("a");
    b.href="equipo.html";
  }
  if(a==3)
  {
    b=document.createElement("a");
    b.href="mailto:adan.ordonezc@gmail.com";
  }
  //asignamos a la variable tel contenido de menu.menus.uno dependiendo el lugar en el que se encuentr la variable i
  var j = document.createTextNode(foot.footer[a].uno);
//agregamos el contenido de t en x como si fuera un hijo
  b.appendChild(j);
  //en nav vamos a agregar el contenido de x
  document.getElementById("fo").appendChild(b);
}
