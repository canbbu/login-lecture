"use strict"

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    pswordConfirm = document.querySelector("#psword-confirm"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){
    const req={
        id :id.value,
        name : name.value,
        psword: psword.value,
        pswordConfirm : pswordConfirm.value,
    }
    console.log(req)

    fetch("/register", {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href="/login"
        }else{
            console.error(res.msg)
        }
    })
    .catch((err) =>{
        console.error("로그인중 에러 발생")
    })
}