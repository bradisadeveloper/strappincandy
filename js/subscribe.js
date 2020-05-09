const btn = document.querySelector(".subbing");
let subInput = document.querySelector(".inputSub");

btn.addEventListener("click", subbed);

function subbed() {
    let mailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // subInput.innerHTML = "Thank you For Subscribing!";
    if (subInput.value.match(mailValid)) {
        let newSub = document.createElement('p');
        newSub.innerHTML = "<h3>Thank you for subscribing!</h3>";
        subInput.parentNode.replaceChild(newSub, subInput);
        newSub.style.textShadow = "1px 1px #000000aa";
        newSub.style.animation = "fadein 5s";
        return true;

    } else {
        //invalid email rejection notice
        alert("Invalid Email Entry!");
        subInput.value = "";
        return false;
    }
}