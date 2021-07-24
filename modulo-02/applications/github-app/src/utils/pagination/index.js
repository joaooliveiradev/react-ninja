'use strict';

import { render } from "react-dom";

const pagination = ({ total, activePage }) => {
    if (activePage > total) throw new RangeError('activePage is invalid');
    if (total <= 5) {
        return Array.from({ length: total }, (_, i) => (i + 1))
    }
    const totalPages = Array.from({ length: total }, (items, i) => (i + 1), '...');
    //console.log(Number(array.length - (activePage + 1)))
    //[1,'..',4,5,6,'..',10]


    //pega o active page e coloca - o ultimo item - 1 para achar o range entre esses dois, e se for maior do que dois, vai
    //cair os numeros que passaram e você substitui por ...
    //talvez n precise vc usar um for para pegar o range dos numeros
    console.log(activePage)
    for (let i = totalPages[activePage - 1]; i < totalPages.length; i++) {
        if (Math.abs(totalPages[i] - totalPages.length) >= 2) {
            console.log(totalPages[i])
        }
    }

    return [1, 2, 3, 4, "...", 6, 7]

    // pegar número atual array[activePage - 1];
    //primeiros fazer os testes depois mudar o return para retornar as divs e fazer os testes visuais
    // pense em active page e mudança de estado, active page pode ter uma classe css com uma cor diferente
    // para o usuario pensar que está mudando.
    // precisamos fazer um map em array para gerar uma lista com todas as posições da paginação.

    return array

}

export default pagination