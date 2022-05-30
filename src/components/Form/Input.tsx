import { forwardRef, ForwardRefRenderFunction } from "react";
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

// Encaminhamento de refs
// 1) Transformar o componente em uma constante
// 2) Criar um componente que vai ser o principal
// 3) Usar o método do React "ForwardRefRenderFunction", para o encaminhamento de ref

// const InputBase = ({name, label, ...rest}: InputProps, ref) => { // sem TypeScript
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
    = ({ name, label, ...rest }, ref) => {
        return (
            <FormControl>
                {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

                <ChakraInput
                    id={name}
                    name={name}
                    type="email"
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
            </FormControl>
        )
    }

export const Input = forwardRef(InputBase)