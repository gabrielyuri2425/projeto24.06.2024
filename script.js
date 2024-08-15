const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Você acha que tirar a CNH A ou a CNH B uma por uma seria mais vantajoso do que tirar CNH AB? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Sim",
            },
            {
                texto: "Não",
                afirmacao: "Não",
            }
        ]
    },
    {
        enunciado: "Por ser um pouco mais caro tirar a CNH AB, muita pessoas preferem tirar a CNH A ou a B pois economizam mais, você acha que isso certo? ",
        alternativas: [
            {
                texto: "Sim, pois a CNH AB é mais cara e nem todos tem condições financeiras para pagar. ",
                afirmacao: "Sim, pois a CNH AB é mais cara e nem todos tem condições financeiras para pagar.",
            },
            {
                texto: "Não, pois a CNH AB tem mais vantagem por ser mais barato do que tirar a CNH A e B uma por uma",
                afirmacao: "Não, pois a CNH AB tem mais vantagens, por ser mais barata do que tirar a CNH A e B uma por uma",
            }
        ]
    },

    {
    enunciado: "Ao completar 18 anos, por um certo preço, as pessoas podem tentar tirar sua primeira carteira de motorista, após passar por provas e testes mentais. Quanto tempo leva para tirar a CNH?",
        alternativas: [
            {
                texto: "Aproximadamente 90 dias",
                afirmacao: "Aproximadamente 90 dias",
            },
            {
                texto: "Aproximadamente 60 dias",
                afirmacao: "Aproximadamente 60 dias",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "Muitas pessoas tem pressa para completar seus 18 anos de idade para conseguir tirar sua primeira CNH, mas não pensam na mudança total da vida, como tudo vai ser diferente e como muitas responsabilidades vem a tona ao completar 18 anos, por isso, aproveite enquanto a vida é simples e sem as complicações da vida adulta.";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sem pressa...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();