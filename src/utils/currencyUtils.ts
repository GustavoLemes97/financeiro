export const formatCurrency = (value: number) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(value);
};

export const stringCurrencyToNumber = (value: string) => {
  const cleanedString = value.replace(/[^\d,]/g, "");
  const decimalString = cleanedString.replace(",", ".");
  const numberValue = parseFloat(decimalString);

  return numberValue;
};
