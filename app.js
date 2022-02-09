

function generatePassword() {
    let result = ''
    let password1 = document.getElementById("password-1")
    let password2 = document.getElementById("password-2")
    let password3 = document.getElementById("password-3")
    let password4 = document.getElementById("password-4")

    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    let charactersLength = characters.length;
        for ( let i = 0; i < 81; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            password1.textContent = result.slice(0,20)
            password2.innerHTML = result.slice(20,40)
            password3.innerHTML = result.slice(40,60)
            password4.innerHTML = result.slice(60,80)
           }
    return password1
}
        


function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }