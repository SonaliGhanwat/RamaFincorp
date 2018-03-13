
function validateEmployee(){
	
	function isValidFirstName() {
		 var firstName = document.getElementById("name");
		document.getElementById("firstName_validation").innerHTML = "Your Name Required";
		firstName.style.borderColor = "red";
		/*firstName.focus();*/
	var firstName_len = firstName.value.length;
	if (firstName_len <= 3) {
		document.getElementById("firstName_validation").innerHTML="First Name should be 3 character";
		/*firstName.focus();*/
		return false;
	}
	document.getElementById("firstName_validation").innerHTML = "";
	firstName.style.borderColor = "";
	return true;
	}


function isValidPhoneNumber() {
	 var phoneNumber = document.getElementById("mobile");
	if (phoneNumber.value == "") {
		document.getElementById("phoneNumber_validation").innerHTML = "Phone Number Required";
		phoneNumber.style.borderColor = "red";
		return false;
	}
	var phoneno = /^\d{10}$/;
	if ((phoneNumber.value.match(phoneno))) {
	} else {
		document.getElementById("phoneNumber_validation").innerHTML = "Phone Number must have 10 number only";
		phoneNumber.style.borderColor = "red";
		return false;
	}
	document.getElementById("phoneNumber_validation").innerHTML = "";
	phoneNumber.style.borderColor = "";
	return true;
}

function isValidEmailid() {
	 var emailid = document.getElementById("email");
	if (emailid.value == "") {
		document.getElementById("emailid_validation").innerHTML = " Your EmailId  Required";
		emailid.style.borderColor = "red";
		return false;
	}
	var email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{3})$/;
	if ((emailid.value.match(email))) {
	} else {
		document.getElementById("emailid_validation").innerHTML = "Invalid Email Address";
		emailid.style.borderColor = "red";
		return false;
	}
	document.getElementById("emailid_validation").innerHTML = "";
	emailid.style.borderColor = "";
	return true;
}
function isValidSalary() {
	var salary = document.getElementById("salary");
	if (salary.value == "") {
		document.getElementById("salary_validation").innerHTML = " Please Enter Loan amount ";
		salary.style.borderColor = "red";
		return false;
	}
	document.getElementById("salary_validation").innerHTML = "";
	salary.style.borderColor = "";
	return true;
}
}
