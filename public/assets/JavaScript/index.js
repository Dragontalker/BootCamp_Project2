const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const alertBox = document.querySelector('#errorBox')

function fetchJSON( url, method='get', data={} ){
    const fetchOptions = {
        method,
        headers: { 'Content-Type': 'application/json' },					
    }
    if( method==='post' || method==='put' )
        fetchOptions.body = JSON.stringify(data)
    return fetch(url, fetchOptions).then( r=>r.json() )
}

async function login(){
    const apiLogin = {username: usernameInput.value, password: passwordInput.value}

    // const result = { status: "fail", message: "", accesskey:"pass123"}
    const result = await fetchJSON( `/api/login`, 'post', apiLogin );


    if (result.status === 'success'){
        sessionStorage.accesskey = result.accesskey
        console.log('login valid')
        window.location.replace("/chatroom.html");
    }
    else{
        alertBox.classList.remove('d-none')
        setTimeout(function (){
            alertBox.classList.add('d-none')
        }, 5000)
    }
}
