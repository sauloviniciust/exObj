const listaDeCompras = []

while (true) {
  item = prompt('Digite um item para a lista de comrpas. Digite "esc" para finalizar')
  listaDeCompras.push(item)
  if(item === 'esc'){
    listaDeCompras.pop()
    break;
  }

  


}


const remove = prompt('Redigite um item digitado anteriormente para remover da lista')
  const remover = listaDeCompras.indexOf(remove)
  listaDeCompras.splice(remover, (remover + 1))
  
console.log(listaDeCompras.join(", "));

alert('A lista de compra é: ' + listaDeCompras.join(", ") + '.');
