let check = false;

function validate(htmlobj, format, message) {
    if (htmlobj.value.match(format)) {
        htmlobj.setAttribute("class", "signupInput");
        document.getElementById("error").innerHTML = null
        check = true;
    }
    else {
        htmlobj.setAttribute("class", "signupInput invalidInput");
        document.getElementById("error").innerHTML = `<p style='color:red'>${message}</p>`
        check = false;
    }
}

function name_validation(htmlobj){
    const nameFormat = /^[a-zA-Z]*$/
    const message = "Only alphabets supports"
    validate(htmlobj, nameFormat, message)
}

function email_validation(htmlobj) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const message = "Email Id invalid"
    validate(htmlobj, mailformat, message)
}

function phone_validation(htmlobj) {
    const phoneno = /^\d{10}$/;
    const message = "Phone Number invalid"
    validate(htmlobj, phoneno, message)
}

function strong_password(htmlobj) {
    const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).{8,}$/
    const message = "Weak Password"
    
    validate(htmlobj, password, message)
}

function password_validation(htmlobj) {
    const password = document.getElementById("password").value;
    const confirm_password = htmlobj.value;

    if (password == confirm_password) {
        htmlobj.setAttribute("class", "signupInput");
        document.getElementById("error").innerHTML = null
    }
    else {
        htmlobj.setAttribute("class", "signupInput invalidInput");
        document.getElementById("error").innerHTML = `<p style='color:red'>Confirm Password not matched</p>`
    }
}

function Signup() {
    let check = false;

    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    countryCode = document.getElementById("countryCode").value;
    mobileNo = document.getElementById("mobileNo").value;
    emailId = document.getElementById("emailId").value;
    password = document.getElementById("password").value;
    confirm_password = document.getElementById("confirm_password").value;

    let mess = ""
    if (!firstname.match(/^[a-zA-Z]*$/) || firstname=="" ){
        mess+="First Name invalid\n";
        check = true;
    }
    
    if (!lastname.match(/^[a-zA-Z]*$/)  || lastname=="" ){
        mess+="Last Name invalid\n"
        check = true;
    }
    
    if (!mobileNo.match( /^\d{10}$/)){
        mess+="Mobile No invalid\n"
        check = true;
    }
    
    if (!emailId.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        mess+="Email Id invalid\n"
        check = true;
    }

    if (!password.match(/^[a-zA-Z]*$/) || password == ""){
        mess+="Password invalid\n"
        check = true;
    }

    if ((password != confirm_password) && (password != "") && (confirm_password != "")) {
        mess+="Confirm Password does not match\n"
    }

    mess+=""

    if (check){
        alert(mess);
        return false;
    }



    // fetch('http://localhost:5248/users', {
    //     mode: 'no-cors',
    //     method: 'POST',
    //     headers: {
    //         'Accept': '*/*',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         "id": 0,
    //         "fName": firstname,
    //         "lName": lastname,
    //         "username": emailId,
    //         "emailId": emailId,
    //         "phoneNo": mobileNo,
    //         "password": password
    //     })
    // })
    //     .then(response => response.json())
    //     .then(response => console.log(JSON.stringify(response)))


    // if (password != confirm_password) {
    //     console.log("hello world ji");
    //     alert("password does not match...")
    // }
    // console.log(confirm_password, password);
}

// 200 -- success
// 201 -- created
// 204 -- no content
// 304 -- not modified
// 400 -- back request
// 401 -- unauthorized
// 403 -- access forbidden
// 404 -- not found
// 409 -- duplicate conflict
// 500 -- internal server error 