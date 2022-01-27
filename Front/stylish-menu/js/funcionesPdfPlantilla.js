var inputBox =
	"<label for='validationDefault01'>Numero del lote</label> \
<input \
    type='text' \
    class='form-control' \
    id='validationDefault01' \
    value='contenido' \
/>";

function desplegarBoxes() {
	var valor = document.getElementById("usarplantillacheck");
	if (valor.value == 0) {
		valor.value = 1;
		document.getElementById("box-parrafo-1").innerHTML = "";
		console.log(valor.value);
		return 0;
	}
	valor.value = 0;
	document.getElementById("box-parrafo-1").innerHTML = inputBox;
}
