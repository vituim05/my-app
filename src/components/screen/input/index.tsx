import React from "react";

import { Container } from './styles';

import { TextInput, TextInputProps } from "react-native";

import { PropsWithChildren } from "react";

// Linha 11 - Aqui definimos um componente chamado Input, que é uma função que recebe um conjunto de propriedades (props).
// Essas propriedades são desestruturadas e armazenadas na variável otherProps.
// O operador de propagação (...) permite que todas as propriedades passadas ao componente Input sejam repassadas para o componente TextInput da linha 15.
// Isso facilita a configuração do componente Input com várias propriedades que são passadas diretamente para o componente TextInput.

export const Input: React.FunctionComponent<TextInputProps> = ({ ...otherProps }: PropsWithChildren<TextInputProps>) => {

    return (
    <Container>
            {/* ...otherProps - frequentemente chamado de "spread" - passa todas as propriedades do TextInput para o componente TextInput da linha 14. */}
                    <TextInput placeholderTextColor="rgb(192, 192, 192)" {...otherProps} />
    </Container>
    );
};


