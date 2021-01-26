var menu, i, x="";
menu=
[
  //creamos el JSON Del menu

      {"uno":"INICIO","link":"equipo.html"},
      {"uno":"NOSOTROS","link":"#about"},
      {"uno":"EQUIPO","link":"#continuamos"},
      {"uno":"SERVICIOS","link":"#servicios"},
      {"uno":"CONTACTANOS","link":"#contacto"}
]
//creamos una condicion donde mientras i sea igual al contenido de menu.menus
for ( i in menu)
{
      //x = document.createElement("LI");
      x=document.createElement("a");
      //asignamos a la variable tel contenido de menu.menus.uno dependiendo el lugar en el que se encuentr la variable i
      var t = document.createTextNode(menu[i].uno);
      //referenciamos el nombre link a la variable x con el nombre que sigue despues de link
      x.href = (menu[i].link)
      //agregamos el contenido de t en x como si fuera un hijo
      x.appendChild(t);
      //en nav vamos a agregar el contenido de x
      document.getElementById("nav").appendChild(x);

}
