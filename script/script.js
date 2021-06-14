let btn1 = document.getElementById("submit1")
let btn2 = document.getElementById("deposit-btn")
btn1.onclick = function() {
    
    let username = document.getElementById("user").value
    let password = document.getElementById("pass").value

    if (username=="user" && password=="111" )
    {
        document.getElementById("display-balance").style.display = "block"
    }
    else 
    {
        document.getElementById("error").textContent = "*Username or password incorrect"
    }
}

btn2.onclick = function() {
let deposit = document.getElementById("dep").value

if (deposit == "" || deposit <=0) {
    document.getElementById("error2").textContent = "*Invalid deposit amount"
    } 
else {
         document.getElementById("confirm-dep").style.display = "block"
         document.getElementById("dep-confirm").innerHTML = deposit
    }


}

let confirmYes = document.getElementById("yes")
let confirmNo = document.getElementById("no")

confirmYes.onclick = function() {
    let deposit = Number(document.getElementById("dep").value)
    let bal = Number(document.getElementById("bal").textContent)
    let newBal = deposit + bal

    document.getElementById("bal").innerHTML = newBal

    document.getElementById("confirm-dep").style.display = "none"

    console.log("deposit: "+ deposit + typeof(deposit)+"   bal"+bal+typeof(bal));
}

confirmNo.onclick = function() {

    document.getElementById("confirm-dep").style.display = "none"
}
