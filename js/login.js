const loginEndpoint = "";
const _loginForm = {
    user: document.querySelector("#userName_input"),
    password: document.querySelector("#password_input"),
    submit: document.querySelector("#logSubmit")
}
console.log(_loginForm)

_loginForm.submit.addEventListener("click", validateLogin);

function validateLogin(e)
{
    
    console.log(_loginForm.user.value, _loginForm.password.value);
    if(_loginForm.user.value.length > 3 && _loginForm.password.value.length > 5)
    {
        return;
    }

    e.preventDefault();
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