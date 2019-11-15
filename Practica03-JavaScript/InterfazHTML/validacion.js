
function validarCampos() {
  var cedula =  document.getElementById("cedula").value;
    vcedula(cedula);
    form.addEventListener("submit", function(evt) {
        if (form.checkValidity() === false) {
          evt.preventDefault();
          alert("Form is invalid - submission prevented!");
          return false;
        } else {
          // To prevent data from being sent, we've prevented submission
          // here, but normally this code block would not exist.
          evt.preventDefault();
          alert("Form is valid - submission prevented to protect privacy.");
          
          return false;
        }
      });

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
				alert("cedula correcta");
			}else {
                alert("cedula incorrecta")
                document.getElementById("cedula") = "";
                return false
			}
		}else {
			var x = 10-c;
			if(x==h) {
				var valBolc = true;
			}else {
                alert("cedula incorrecta")
                document.getElementById("cedula") = "";
                return false
			}
		} 
        
    }
}

