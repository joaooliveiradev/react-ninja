'use strict'

import React from 'react';

// const Title = ({name, lastname}) => {
//     return (
//         <h1>Meu nome é {`${name}`} e meu sobrenome é {`${lastname}`}</h1>
//     )
// }

// Title.defaultProps = {
//     name: 'não informado',
//     lastname: 'não informado'
// }


const Title = ({buttonClick}) => {
    return (
        <h1>{"O botão selecionado foi o "+buttonClick}</h1>
    )
}

Title.defaultProps = {
    buttonClick: 'Nenhum botão selecionado.'
    
}

export default Title;