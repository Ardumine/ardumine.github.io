var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function Trocar_cores(tema) {
    return __awaiter(this, void 0, void 0, function* () {
        document.body.style.background = tema["Fundo"];
        Caixa_login.style.background = tema["Caixa_login"];
        Btn_login.style.backgroundColor = tema["Btn_fundo"];
        Btn_login.style.color = tema["Btn_txt"];
        for (let index = 0; index < itens.length; index++) {
        }
    });
}
function branco() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Trocar_cores(Cores_branco);
    });
}
function preto() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Trocar_cores(Cores_preto);
    });
}
window.onload = function () {
    Caixa_login = document.getElementById("Caixa_login");
    Btn_login = document.getElementById("btn_login");
    Btn_login.onclick = function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield preto();
        });
    };
    branco();
};
