import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

// Encaminhamento de refs
// 1) Transformar o componente em uma constante
// 2) Criar um componente que vai ser o principal
// 3) Usar o método do React "ForwardRefRenderFunction", para o encaminhamento de ref

// const InputBase = ({name, label, ...rest}: InputProps, ref) => { // sem TypeScript
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
    = ({ name, label, error = null, ...rest }, ref) => {
        return (
            <FormControl isInvalid={!!error}>
                {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

                <ChakraInput
                    id={name}
                    name={name}
                    focusBorderColor="pink.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{
                        bgColor: "gray.900"
                    }}
                    size="lg"
                    ref={ref}
                    {...rest}
                />

                { !!error && (
                    <FormErrorMessage>
                        {error.message}
                    </FormErrorMessage>  
                )}
            </FormControl>
        )
    }

export const Input = forwardRef(InputBase)