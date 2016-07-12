function Mostrar()
{
//tomo la edad  
	var estadoCivil;
	estadoCivil = document.getElementById('estadoCivil').value;
	//alert(estadoCivil);
	var edad;
	edad = document.getElementById('edad').value;
	if (edad > 17) 
		{
			if (estadoCivil == "Casado" && estadoCivil == "Divorciado") 
				{
					alert("Usted es muy pequeño para NO ser soltero");
				}
		}
	


}//FIN DE LA FUNCIÓN