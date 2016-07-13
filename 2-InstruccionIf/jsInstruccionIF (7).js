function Mostrar()
{
//tomo la edad  
	var estadoCivil;
	estadoCivil = document.getElementById('estadoCivil').value;
	//alert(estadoCivil);
	var edad;
	edad = document.getElementById('edad').value;
	if (edad < 18 && estadoCivil == "Casado") {alert("Usted es muy pequeño para NO estar soltero");}
	if (edad < 18 && estadoCivil == "Divorciado") {alert("Usted es muy pequeño para NO estar soltero");}


}//FIN DE LA FUNCIÓN