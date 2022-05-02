import { FormControl, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
        <ChakraInput
          id={name}
          name={name}
          // type="number"
          focusBorderColor="#007565"
          backgroundColor="white"
          variant="outline"
          placeholder={label}
          _placeholder={{ color: "inherit" }}
          size="lg"
          {...rest}
        />
    </FormControl>      
  );
}

{/* <FormControl>
  <Input
    id='2'
    name="password"
    type="password"
    focusBorderColor="green.700"
    backgroundColor="white"
    variant="outline"
    placeholder="CPF"
    _placeholder={{ color: "inherit" }}
    size="lg"
  />
</FormControl> */}