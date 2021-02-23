var menu, i, x="";
menu=
[
  //creamos el JSON Del menu

      {"tit":"INICIO","link":"#"},
      {"tit":"NOSOTROS","link":"#about"},
      {"tit":"EQUIPO","link":"#continuamos"},
      {"tit":"SERVICIOS","link":"#servicios"},
      {"tit":"CONTACTANOS","link":"#contacto"},
      {"tit":"BOLSA DE TRABAJO", "link":"index.html"}
]
//creamos una condicion donde mientras i sea igual al contenido de menu.menus
for ( i in menu)
{
      //x = document.createElement("LI");
      x=document.createElement("a");
      //asignamos a la variable tel contenido de menu.menus.uno dependiendo el lugar en el que se encuentr la variable i
      var t = document.createTextNode(menu[i].tit);
      //referenciamos el nombre link a la variable x con el nombre que sigue despues de link
      x.href = (menu[i].link)
      //agregamos el contenido de t en x como si fuera un hijo
      x.appendChild(t);
      //en nav vamos a agregar el contenido de x
      document.getElementById("nav").appendChild(x);

}
