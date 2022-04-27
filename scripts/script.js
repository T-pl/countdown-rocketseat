

function sleep(miliseconds) {
  return new Promise(callback => setTimeout(callback, miliseconds))
}

async function counter() {
  let x = 10;
  while (x >= 0) {
    let countdowOficial = document.querySelector('#horarioOficial')
    countdowOficial.innerHTML = `00 : 00 : 00 : ${x}`;
    countdowOficial.style.color = '#4D4C59';
    countdowOficial.style.fontSize = '60px';
    let button = document.querySelector(".btnInsc");
    button.disabled = true;
    if (x != 0) {
      button.disabled = true;
      button.style.cursor = 'not-allowed';
    } else if (x == 0) {
      button.disabled = false;
      button.style.cursor = 'pointer';
      countdowOficial.innerHTML = `00 : 00 : 00 : 00`;

    }

    await sleep(1000);
    // O código abaixo deixa o botão desabilitado enquanto estiver na contagem

  
    x = x - 1
  }

}

// counter();


//A função abaixo deixar o modal disponível após o click no button

function mostrarModal() {
  document.querySelector(".secao-modal").classList.add("modal-active")

}


//A função abaixo deixar o modal oculto após o click no X
function fecharModal() {
  document.querySelector(".secao-modal").classList.remove("modal-active")

}