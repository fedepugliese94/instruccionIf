function Mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementsByTagName('edad').value;
	/*if (edad < 13 && edad > 17) {}
	else {alert("Usted NO es adolescente");}
	esta es una de las formas correctas de hacerlo
	*/

	if (edad < 13) 
			{
				alert("Usted NO es adolescente");
			}


	else 
		{
			if (edad > 17) 
				{
					alert("Usted NO es adolescente");
				}
				else
					{
						alert("Usted NO es adolescente");	
					}
		}
		
}//FIN DE LA FUNCIÓN