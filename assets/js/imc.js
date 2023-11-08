const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = document.getElementById("weigth").value;

    const altura = document.getElementById("height").value;




    const imc = peso / (altura * altura)

    document.getElementById("infos").classList.remove("hidden")

    let descricao;
    const campoImc = document.getElementById("value");

    // campoImc.classList.add("attention")

    campoImc.style.color = 'red'

    //condições do imc

    if (imc < 18.5) {
        descricao = "você, está abaixo do peso!"
        campoImc.style.color = "green";

    }
    else if ((imc > 18.5) && (imc <= 25)) {
        descricao = "voce está no peso ideal "
        campoImc.style.color = "green";

    }
    else if ((imc > 25) & (imc <= 30)) {
        descricao = "cuidado! você está com sobrepeso!"
        campoImc.style.color = "yellow";
    }
    else if ((imc > 30) & (imc <= 35)) {
        descricao = "cuidado você está com obesidade moderada "
        campoImc.style.color = "orange";
    }
    else if ((imc > 35) & (imc <= 40)) {
        descricao = "cuidado você está com obesidade severa"
        campoImc.style.color = "red";
         }
         else{
            descricao="cuidado você está com obesidade morbida "
            campoImc.style.color="black";
         }
    












        campoImc.textContent = imc.toFixed(2);
        document.getElementById("description").textContent = descricao









    });