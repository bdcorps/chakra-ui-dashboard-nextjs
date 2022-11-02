import { Badge, Input, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";

interface InputWithHintsProps {
  inputValue: string;
  hints: string[];
  onChange: (value: string) => void;
}

const InputWithHints: FunctionComponent<InputWithHintsProps> = ({
  inputValue,
  hints,
  onChange,
}: InputWithHintsProps) => {
  const [value, setValue] = useState<string>(inputValue);
  return (
    <VStack spacing={2} w="full" align="flex-start">
      <Input
        w="full"
        value={value}
        onChange={(evt) => {
          const newValue = evt.target.value;
          setValue(newValue);
          onChange(newValue);
        }}
      ></Input>

      {hints && (
        <Wrap>
          {hints.map((hint: string, i: number) => (
            <WrapItem key={`hint_${i}`}>
              <Badge
                colorScheme="brand"
                cursor="pointer"
                _hover={{ bgColor: "brand.200" }}
                onClick={() => {
                  const newValue = value + `{{${hint}}}`;
                  setValue(newValue);
                  onChange(newValue);
                }}
              >
                {hint}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </VStack>
  );
};

export default InputWithHints;
