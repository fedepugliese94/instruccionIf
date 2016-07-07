function Mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;
	/*if (edad > 17) 
		{
			alert("Usted es un ADULTO");
		}
	if (edad < 13) 
		{
			alert("Usted es un NIÑO");
		}
	if (edad < 17 && edad > 13) 
		{
			alert("Usted es un adolescente");
		}
	*/


	/*if (edad < 13) 
		{
			alert("Usted es MENOR");
		}
	if (edad <17 && edad >12) 
		{
			alert("Usted es adolescente");
		}
	else
		{
			alert("Usted es MAYOR");
		}

	ESTO NO HAY QUE HACERLO JAMAS, ESTA MAL, MUY MAL! 	
	*/


	if (edad < 13) 
		{
			alert("Usted es MENOR");
		}	
	else 
		{
			if (edad > 18) 
				{
					alert("Usted es MAYOR");
				}
			else 
				{
					alert("Usted es ADOLESCENTE");
				}	
		}	

}//FIN DE LA FUNCIÓN