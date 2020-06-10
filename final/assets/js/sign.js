	
	/*sign in form*/
	var modal = document.getElementById('sign');
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}


	/*paswword invisable*/
    var demoImg = document.getElementById("demo_img");
    var demoInput = document.getElementById("demo_input");
    function hideShowPsw(){
        if (demoInput.type == "password") {
            demoInput.type = "text";
            demoImg.className = "fas fa-eye-slash"
        }else {
            demoInput.type = "password";
            demoImg.className = "fa fa-eye ml-2"
        }
    }
