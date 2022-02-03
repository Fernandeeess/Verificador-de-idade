function verificarIdade() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById("anoNascimento");
    var res = document.getElementById("res")
    console.log(ano);
    if (fano.value.length == 0 || fano.value > ano || fano.value < 0 || fano.value < 1888) {
        alert("Ano Invalido");
    } else {
        let fsex = document.getElementsByName("radsex");
        let idade = ano - fano.value;
        let img = document.createElement("img");
        img.setAttribute("id", "foto");
        genero = '';
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "img/foto-bebe-m.png")
            } else if (idade < 15) {
                img.setAttribute("src", "img/foto-adolescente-m.jpg")
            } else if (idade < 30) {
                img.setAttribute("src", "img/foto-jovem-m.png")
            } else if (idade < 50) {
                img.setAttribute("src", "img/foto-adulto-m.png")
            } else {
                img.setAttribute("src", "img/foto-idoso-m.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "img/foto-bebe-f.png")
            } else if (idade < 15) {
                img.setAttribute("src", "img/foto-adolescente-f.png")
            } else if (idade < 30) {
                img.setAttribute("src", "img/foto-jovem-f.png")
            } else if (idade < 50) {
                img.setAttribute("src", "img/foto-adulto-f.png")
            } else {
                img.setAttribute("src", "img/foto-idoso-f.png")
            }
        }
        res.style.textAlign = "center";
        res.style.padding = "10px";
        res.innerHTML = "Detectamos " + genero + " com " + idade;

        res.appendChild(img);

    }
}