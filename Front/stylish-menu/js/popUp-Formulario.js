$('#popUp-Formulario').click(function(){
    swal({   
        title: "¿Qué tipo de ingreso va a realizar?",   
        text: "Usted puede ingresar un nuevo Bien ya sea por Unidad o por conjunto de Unidades",   
        type: "question",   
        showCancelButton: true,   
        confirmButtonColor: "#aaa",   
        confirmButtonText: "Unidad",   
        cancelButtonText: "Conjunto de Unidades",   
        closeOnConfirm: false,   
        closeOnCancel: false
    }, function(){   
        swal("", "", "success"); z
    });
});