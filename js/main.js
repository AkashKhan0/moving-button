const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitInput = document.getElementById("submit");


submitInput.addEventListener("mouseover" , (button) => {
    let email = emailInput.value;
    let password = passwordInput.value;
    let validate = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/.test(email) && /[a-zA-Z0-9]{8}/.test(password);

    if(!validate){
        button.target.classList.toggle("move");
        submitInput.style.background="red";
        document.getElementById("submit").innerText="red";
    }else{
        button.target.classList.add("stop");
        submitInput.style.background="green";
    }
})