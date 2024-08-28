"use strict"

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    pswordConfirm = document.querySelector("#psword-confirm"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){

    if(!id.value)return alert("아이디를 입력해주세요")
    if(psword !== pswordConfirm)return alert("패스워드가 일치하지 않습니다.")
    const req={
        id :id.value,
        name : name.value,
        psword: psword.value,
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