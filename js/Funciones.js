
loading = function(toggle, texto){
	if(toggle == true){
    $("#textoLoading").text(texto);
    $("#loadingPrincipal").show();
    $("#overflow").show();
	}else{
		$("#loadingPrincipal").hide();
		$("#overflow").hide();
	}
};

mostrarError = function(toggle){
	if(toggle == true){
		$("#contenedorVistas").hide();
		$("#menuOpciones").hide();
		$("#errorPrincipal").show();
	}else{
		$("#errorPrincipal").hide();
		$("#contenedorVistas").show();
		$("#menuOpciones").show();
	}
};

ocultarElemento = function(id){
	$("#"+id).hide();
};

mostrarMensajeModal = function(titulo, mensaje){
	if(mensaje !== false){
	mensaje = mensaje.replace(/(?:\r\n|\r|\n)/g, '<br />');
	}
	$("#tituloMensajeModal").text(titulo);
	$("#bodyMensajeModal").html(mensaje);
	$("#mensajeModal").modal('show');
};


mostrarAlerta = function(titulo , mensaje , callback ){
			swal({
		title: 'Error!',
		text: 'Do you want to continue',
		type: 'error',
		confirmButtonText: 'Cool'
		})
}

function SoloNumeros(evt,input){
		// Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46, ‘-’ = 43
		var key = window.Event ? evt.which : evt.keyCode;
		var chark = String.fromCharCode(key);
		var tempValue = input.value+chark;
		if(key >= 48 && key <= 57){
				if(filter(tempValue)=== false){
						return false;
				}else{
						return true;
				}
		}else{
					if(key == 8 || key == 13 || key == 0) {
							return true;
					}else if(key == 46){
								if(filter(tempValue)=== false){
										return false;
								}else{
										return true;
								}
					}else{
							return false;
					}
		}
}


function filter(__val__){
		var preg = /^([0-9]+\.?[0-9]{0,2})$/;
		if(preg.test(__val__) === true){
				return true;
		}else{
			 return false;
		}

}
