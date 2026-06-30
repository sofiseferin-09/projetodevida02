const botoes=document.querySelectorAll(".botao");
const textos=document.querySelectorAll(".aba-conteudo");
for(let i =0;i <botoes.length; i++){ 
    botoes[i].onclick =function(){
      
        for(let i =0; i <botoes.length; j++){ 
            botoes[j].classList.remover("ativo");
            textos[j].classList.remover("ativo");

    }
botoes[i].classList.add("ativo");
textos[i].classList
}

