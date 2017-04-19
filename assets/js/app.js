window.addEventListener('load', function (e){
	e.preventDefault();

	var contenedor = document.getElementById('contenedor');

	var divCancha = document.createElement('div');
	var divlineaCancha = document.createElement('div');
	var divArco1 = document.createElement('div');
	var divArco2 = document.createElement('div');
	var divCircle = document.createElement('div');

	for (var i = 1; i <= 3; i++){
		var divPelotas = document.createElement('div');

		divPelotas.setAttribute('class','divPelotas'+' circle'+i);
		divCancha.appendChild(divPelotas);
	};
	
	divCircle.setAttribute('id','divCircle');
	divCancha.appendChild(divCircle);

	divArco1.setAttribute('id','divArco1');
	divCancha.appendChild(divArco1);

	divArco2.setAttribute('id','divArco2');
	divCancha.appendChild(divArco2);
	divlineaCancha.setAttribute('id','divlineaCancha')
	divCancha.appendChild(divlineaCancha);

	divCancha.setAttribute('id','cancha');
	contenedor.appendChild(divCancha);
})