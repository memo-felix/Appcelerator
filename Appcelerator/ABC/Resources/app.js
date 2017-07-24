var ventana = Ti.UI.createWindow({backgroundColor: "black",
 layout:"vertical", title: "Estacionamiento"});

Ti.Database.install("Autos.sqlite","prueba");

var db = Ti.Database.open("prueba");
var a = db.execute("select * from Automoviles");

var array = [];

while(a.isValidRow()){
	var n= a.fieldByName("Nombre");
	var m= a.fieldByName("Marca");
	var ml= a.fieldByName("Modelo");
	var c= a.fieldByName("Color");
	
	array.push({
		title: 'Nombre'+n+'\nMarca'+m+'\nModelo'+ml+'\nColor'+c,
		color: "white",
		height: 90,
		borderColor : "red"
	
	});a.next();
}

db.close();

var tabla = Ti.UI.createTableView();

tabla.setData(array);

ventana.add(tabla);

ventana.open();
