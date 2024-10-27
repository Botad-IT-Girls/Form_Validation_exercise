function validateForm() {
  //first name
  const fName = document.forms["myform"]["first-name"].value;
  if (fName === "" || fName === null) {
    document.getElementById("first-errormsg").innerHTML =
      "*Pls Enter first name";
    return false;
  } else if (!isNaN(fName)) {
    document.getElementById("first-errormsg").innerHTML = "*Enter valid name";
    return false;
  } else {
    document.getElementById("first-errormsg").innerHTML = "";
    document.getElementById("firstname").innerHTML = fName;
  }

  //lname
  const lName = document.forms["myform"]["last-name"].value;
  if (lName === "" || lName === null) {
    document.getElementById("last-name-errormsg").innerHTML =
      "*Pls Enter last name";
    return false;
  } else if (!isNaN(lName)) {
    document.getElementById("last-name-errormsg").innerHTML =
      "*Enter valid  last name";
    return false;
  } else {
    document.getElementById("last-name-errormsg").innerHTML = "";
    document.getElementById("lastname").innerHTML = lName;
  }

  //dob
  const dob = document.forms["myform"]["dob"].value;
  if (dob === "") {
    document.getElementById("dob-errormsg").innerHTML =
      "*pls Enter date of birth";
    return false;
  } else {
    document.getElementById("dob-errormsg").innerHTML = "";
    document.getElementById("dateofbirth").innerHTML = dob;
  }

  //university
  const university = document.forms["myform"]["university"].value;
  if (university === "") {
    document.getElementById("university-errormsg").innerHTML =
      "* select your university";
    return false;
  } else {
    document.getElementById("university-erroemsg").innerHTML = "";
    document.getElementById("university-display").innerHTML = university;
  }

  //gender
  const gender = document.forms["myform"]["Gender"].value;
  if (gender === "") {
    document.getElementById("gender-errormsg").innerHTML = "* select gender";
    return false;
  } else {
    document.getElementById("gender-errormsg").innerHTML = "";
    document.getElementById("gen").innerHTML = gender;
  }

  //mobileno
  const mobileno = document.forms["myform"]["mobile-no"].value;
  if (mobileno === "" || mobileno === null) {
    document.getElementById("mobile-errormsg").innerHTML =
      "*enter mobile number";
    return false;
  } else if (isNaN(mobileno)) {
    document.getElementById("mobile-errormsg").innerHTML =
      "*enter valid mobile no";
    return false;
  } else if (mobileno.length < 10 || mobileno.length > 10) {
    document.getElementById("mobile-errormsg").innerHTML = "*enter 10 digit";
  } else {
    document.getElementById("mobile-errormsg").innerHTML = "";
    document.getElementById("mobile").innerHTML = mobileno;
  }

  //emailid
  const emailid = document.forms["myform"]["email-id"].value;
  if (emailid === "" || emailid) {
    document.getElementById("email-id-errormsg").innerHTML = "*enter email id";
    return false;
  } else {
    document.getElementById("email-id-errormsg").innerHTML = "";
    document.getElementById("email").innerHTML = emailid;
  }

  //password
  const password = document.forms["myform"]["password"].value;
  if (password === "" || password) {
    document.getElementById("password-errormsg").innerHTML = "*enter password";
    return false;
  } else {
    document.getElementById("password-errormsg").innerHTML = "";
    document.getElementById("pass").innerHTML = password;
  }

  //confirm password
  const confirmpassword = document.forms["myform"]["Confirm-password"].value;
  if (confirmpassword === "" || confirmpassword === null) {
    document.getElementById("confirm-password-errormsg").innerHTML =
      "* enter confirm password";
  } else if (password != confirmpassword) {
    document.getElementById("confirm-password-errormsg").innerHTML =
      "*enter same password";
  } else {
    document.getElementById("password-errormsg").innerHTML = "";
    document.getElementById("confirm").innerHTML = confirmpassword;
  }
}
