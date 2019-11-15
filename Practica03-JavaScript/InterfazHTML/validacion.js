var cedula = " ";
function validarCampos() {
    var nombres, apellidos, direccion, telefono, fechaDeNacimiento, correoElectronico, password;
    cedula = document.getElementById("cedula").value;
    nombres = document.getElementById("nombres").value;
    apellidos = document.getElementById("apellidos").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    fechaDeNacimiento = document.getElementById("fD").value;
    correoElectronico = document.getElementById("correo").value;
    password = document.getElementById("password").value;
    vcedula(cedula);
    /*
    vnombres();
    vapellidos();
    vdireccion();
    vtelefono();
    vfechaDeNacimiento();
    vcorreoElectronico();
    spassword();*/
}
function vcedula(cedula) {
    if (!/^([0-9])*$/.test(cedula)) {
        alert("el valor" + " "+ cedula + " " + "no es un numero");
    } else {
        var v = [];
        var strReverse = [cedula.split('').join(',')]; 
        for (let i = 0; i < cedula.length; i++) {
            v.push(parseInt(cedula[i]));
            
        }
        var a = 0
        for (let i = 1; i < v.length-1; i+=2) {
            a = a + v[i];
            
        }
        var b = 0
        for (let j = 0; j < v.length; j+=2) {
            v[j] = v[j]*2;
			if(v[j] > 9) {
				v[j] = v[j]-9;
			}
			b = b + v[j];
            
        }
        var c = (a+b)%10;
		var h = v[v.length-1];
		if(h==0) {
			if(c==h) {
				var valBolc = true;
			}else {
				alert("cedula incorrecta")
			}
		}else {
			var x = 10-c;
			if(x==h) {
				var valBolc = true;
			}else {
				alert("cedula incorrecta")
			}
		}
          
        
    }
    
}
