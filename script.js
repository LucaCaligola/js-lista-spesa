// Consegna:
// Data una lista della spesa, stampare sulla pagina 
// (anche brutalmente, basta che si vedano) gli elementi della lista 
// individualmente con un ciclo while.

const lista = ["latte", "uova", "pane", "mele", "pere"];


let i = 0;



while (i < lista.length) {

    console.log(lista[i]);

    // creiamo una variabile assegnandogli un div già presente nell'HTML 
    const wrapper = document.querySelector ('div')

    // creiamo una variabile con un nuovo elemento p
    const cardElement = document.createElement ('p');

    // all'elemento div (cioè la variavile wrapper) inseriamo la p creat in precedenza
    wrapper.appendChild (cardElement)

    // all'elemento p (cioè la variabile cardElement) inseriamo la i della lista
    cardElement.append(lista[i])


    i++
    
}

