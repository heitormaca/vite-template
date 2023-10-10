import { NumberInput, NumberInputProps } from '@mantine/core';

const CurrencyInput: React.FC<NumberInputProps> = (props) => {
  return (
    <NumberInput
      precision={2}
      decimalSeparator=","
      thousandsSeparator="."
      hideControls
      parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      formatter={(value) =>
        !Number.isNaN(parseFloat(value))
          ? `R$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
          : ''
      }
      {...props}
    />
  );
};
export default CurrencyInput;
