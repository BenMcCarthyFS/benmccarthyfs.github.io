const loginEndpoint = "";
const _loginForm = {
    user: document.querySelector("#logUser"),
    password: document.querySelector("#logPassword"),
    submit: document.querySelector("#logSubmit")
}
console.log(_loginForm)

_loginForm.submit.addEventListener("click", validateLogin);

function validateLogin(e)
{
    e.preventDefault();
    console.log(_loginForm.user.value, _loginForm.password.value);
}

async function formSend()
{
    fetch(loginEndpoint, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: _loginForm.user.value,
            password: _loginForm.password.value
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if(data.error){
            alert("pass or username");
        } else {
            alert("all good");
        }
    })
    .catch((error) => {
        console.log(error);
    });
        
};