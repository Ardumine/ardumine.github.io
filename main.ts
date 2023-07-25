let Cores_branco = {
    "Fundo": "#c0a9cf",
    "Caixa_login": "#F5f5f5",
    "Btn_fundo": "#9c4ed4",
    "Btn_txt": "#ffffff",

};
let Cores_preto = {
    "Fundo": "#1f0630",
    "Caixa_login": "#2f1541",

    "Btn_fundo": "#50286D",
    "Btn_txt": "#ffffff",

};

var Caixa_login = document.getElementById("Caixa_login");
var Btn_login = document.getElementById("btn_login");

var itens = document.getElementsByClassName("item");


async function Trocar_cores(tema) {
    document.body.style.background = tema["Fundo"];
    Caixa_login.style.background = tema["Caixa_login"];

    Btn_login.style.backgroundColor = tema["Btn_fundo"];
    Btn_login.style.color = tema["Btn_txt"];

    for (let index = 0; index < itens.length; index++) {
    }

}

async function branco() {
    await Trocar_cores(Cores_branco);
}

async function preto() {
    await Trocar_cores(Cores_preto);

}

window.onload = function () {
    Caixa_login = document.getElementById("Caixa_login");
    Btn_login = document.getElementById("btn_login");

    Btn_login.onclick = async function () {
        await preto();
    }
    branco();


}

