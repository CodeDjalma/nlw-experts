const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação",
      "Uma linguagem de programação",
      "Um banco de dados"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Comparação estrita de valor e tipo",
      "Atribuição de valor",
      "Comparação de valor"
    ],
    correta: 0
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "let myVar = 10;",
      "const myVar = 'Hello';",
      "Ambas as opções anteriores"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um método de manipulação de dados",
      "Um modelo de objeto de documento",
      "Um tipo de dado em JavaScript"
    ],
    correta: 1
  },
  {
    pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
    respostas: [
      "console.log()",
      "print()",
      "log.console()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a finalidade do método 'parseInt()' em JavaScript?",
    respostas: [
      "Converter uma string para um número inteiro",
      "Arredondar um número decimal",
      "Converter uma string para um número decimal"
    ],
    correta: 0
  },
  {
    pergunta: "O que é um callback em JavaScript?",
    respostas: [
      "Uma função que é passada como argumento para outra função",
      "Uma variável global",
      "Uma declaração de loop"
    ],
    correta: 0
  },
  {
    pergunta: "Como se faz um comentário de uma linha em JavaScript?",
    respostas: [
      "// Isso é um comentário",
      "/* Isso é um comentário */",
      "# Isso é um comentário"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a diferença entre 'let' e 'const' ao declarar variáveis em JavaScript?",
    respostas: [
      "'let' é usado para variáveis que não mudarão, 'const' é para variáveis mutáveis",
      "'let' permite reatribuição, enquanto 'const' não permite",
      "'const' é usado apenas para números, 'let' para strings"
    ],
    correta: 1
  },
  {
    pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
    respostas: [
      "A elevação de variáveis para o topo de seu escopo",
      "Uma técnica de animação em páginas web",
      "Um método para criar loops"
    ],
    correta: 0
  }
];

//LOOP OU LAÇO DE REPETIÇÃO COM ALERT 
//  for(const item of perguntas) {
//    alert(item.pergunta)
//  }

const quiz = document.querySelector('#quiz') //usar (#) para pegar id (QUERYSELECTOR PARA PEGAR ELEMENTO HTML).
const template = document.querySelector('template')  

const corretas = new Set() //O NEW É UMA PALAVRA RESERVADA DO JS, Portanto, o Set em JavaScript é um objeto que fornece uma maneira eficiente de armazenar e manipular coleções de valores únicos. 

const totalDePerguntas = perguntas.length
const mostrartotal = document.querySelector('#acertos span') 
mostrartotal.textContent = corretas.size + ' de ' + totalDePerguntas

//LOOP OU LAÇO DE REPETIÇÃO
for(const item of perguntas) {
const quizitem = template.content.cloneNode(true)
quizitem.querySelector('h3').textContent = item.pergunta  


for(let resposta of item.respostas) {
  const dt = quizitem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta 
  dt.querySelector('input').setAttribute('name','pergunta-'+perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estacorreta = event.target.value == item.correta //TRUE OU FALSE OS DOIS ( = = )
    if (estacorreta){
      corretas.add(item)

    }
    alert(corretas.size)//CONTA O TAMANHO DESSA VARIAVEL E SOMA
    mostrartotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }


quizitem.querySelector('dl').appendChild(dt)
}

quizitem.querySelector('dl dt').remove()

quiz.appendChild(quizitem)
}