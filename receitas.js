const receitas = [
    {
        titulo: "Brownie fitness",
        imagem: "assets/Browniefitness.jpg",
        preparo: "Bata os ovos e o açúcar mascavo. Adicione os demais ingredientes. até formarem uma massa de bolo. Acrescente as nozes por último. Despeje a massa na forma forrada e leve ao forno com a temperatura de 180°C sem preaquecer o forno. Deixe 30 minutos no forno, retire e sirva quente. ",
        ingredientes: ["1 e 1/2 xícaras de aveia",
        "1 e 1/2 xícaras de cacau em pó ou achocolatado",
        "4 ovos inteiros" ,
        "1 xícara de açúcar mascavo" ,
        "3 colheres de sopa de margarina sem sal",
        "nozes picadas"]
    },
    {
        titulo: "Brigadeiro fitness (sem leite condensado)",
        imagem: "assets/Brigadeirofitness.webp",
        preparo: "Coloque todos os ingredientes em uma panela (menos o granulado). Deixe em fogo alto de 15 a 20 minutos, sempre mexendo. Quando tiver uma consistência apropriada de brigadeiro, desligue o fogo. Coloque na geladeira para esfriar ou coma quentinho (e não se esqueça do granulado).",
        ingredientes: ["1 xícara (chá) de leite desnatado",
        "15 a 20 gotas de adoçante",
        " 3 e 1/2 colheres de cacau em pó (de 50% a 100%)",
        "1 a 2 colheres de manteiga ou margarina",
        " Chocolate granulado (opcional)"]
    },
    {
        titulo: "Panqueca de banana fit",
        imagem: "assets/Panquecadebananafit.jpg",
        preparo: "Amasse a banana, depois coloque em um recipiente fundo, bata com o garfo os 2 ovos junto com a banana, depois acrescente a aveia e o cacau. Bata tudo com o garfo e depois coloque na frigideira untada e antiaderente, tampe a frigideira e vire após dourar. Minha dica é fazer panquecas pequenas, fica mais fácil de virar. E quando tiver pronta, você pode polvilhar coco ralado sobre as panquecas.",
        ingredientes: ["1 banana",           
        "2 colheres de aveia",            
        "1 colher de cacau em pó 100%",            
        "2 ovos"]
    }
];

function getListaIngredientes(receita) {
    const lista = receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li mb-3>`).reduce((accumulator, current) => accumulator + current, "");
    return `<ul mb-2>${lista}</ul>`;
}

function getCard(receita) {
    return `
        <div class="card rounded-3" style="width: 250px;">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title text-center fw-bolder p-1 fs-4">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita)}
                    <hr>
                    <p class='card-text p-1'>${receita.preparo}</p>
                </div>
            </div>
        </div>
    `;
}

function preencheCatalogo() {
  const html = receitas
    .map(receita => getCard(receita))
    .reduce((acumulador, item) => acumulador + item, "")
  document.getElementById("pnlCatalogo").innerHTML = html
}
onload = preencheCatalogo()
