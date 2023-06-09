// Função para trocar os valores de duas posições de um vetor
const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
  }
  
  // Função para embaralhar os elementos de um vetor
  const shuffle = (vetor, qtd) => {
    for (let i = 0; i < qtd; i++) {
      const pos1 = Math.floor(Math.random() * vetor.length);
      const pos2 = Math.floor(Math.random() * vetor.length);
      swap(vetor, pos1, pos2);
    }
  }
  
  // Função para ordenar um vetor de inteiros com o algoritmo Bubble Sort
  const bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (vetor[j] > vetor[j+1]) {
          [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];
        }
      }
    }
    return vetor;
  }

  
  // Função para ordenar um vetor de inteiros com o algoritmo Selection Sort
  const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n-1; i++) {
      let indiceMenor = i;
      for (let j = i+1; j < n; j++) {
        if (vetor[j] < vetor[indiceMenor]) {
          indiceMenor = j;
        }
      }
      if (indiceMenor !== i) {
        [vetor[i], vetor[indiceMenor]] = [vetor[indiceMenor], vetor[i]];
      }
    }
  
    return vetor;
  }
  
  // Função para ordenar um vetor de inteiros com o algoritmo Quick Sort
  const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
      const indicePivo = particionar(vetor, inicio, fim);
      quick_sort(vetor, inicio, indicePivo-1);
      quick_sort(vetor, indicePivo+1, fim);
    }
    return vetor;
  }
  
  // Função auxiliar para particionar o vetor em quick_sort
  const particionar = (vetor, inicio, fim) => {
    const indicePivo = vetor[fim];
    let i = inicio;
    for (let j = inicio; j < fim; j++) {
      if (vetor[j] < indicePivo) {
        swap(vetor, i, j);
        i++;
      }
    }
    swap(vetor, i, fim);
    return i;
  }


 function add() {
    const valor = document.getElementById("valor").value;
    const lista = document.getElementById("valores");
    const node = document.createElement("li");
    const textNode = document.createTextNode(valor);
    node.appendChild(textNode);
    lista.appendChild(node);
	
	//Adicionado para o código ficar em branco após colocar o número
    let num = document.querySelector('input#valor')
    num.value= ''
    num.focus()

  }

  function ordenar() {
    const lista = document.getElementById("valores");
    const algoritmo = document.getElementById("algoritmo").value;
    const valores = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    if (algoritmo === "bubble") {
      bubble_sort(valores);
    } else if (algoritmo === "selection") {
      selection_sort(valores);
    } else if (algoritmo === "quick") {
      quick_sort(valores, 0, valores.length - 1);
    }
    lista.innerHTML = valores.map(item => `<li>${item}</li>`).reduce((a, b) => a + b, "");
  }

  function misturar() {
    const lista = document.getElementById("valores");
    const valores = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    shuffle(valores, valores.length * 2);
    lista.innerHTML = valores.map(item => `<li>${item}</li>`).reduce((a, b) => a + b, "");
  }
  

  function limpar() {
    let listaDeValores = document.getElementById('valores')
    listaDeValores.innerHTML = '';

    let input = document.getElementById('valor');
    input.value = '';
  }

  