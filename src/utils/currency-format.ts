/**
 * Formata um valor numérico para o padrão monetário brasileiro (BRL) ou outra moeda especificada.
 *
 * @param value - O valor numérico a ser formatado.
 * @param currency - Código da moeda (padrão: "BRL").
 * @param locale - Localidade utilizada na formatação (padrão: "pt-BR").
 * @returns Valor formatado como moeda (ex: "R$ 150,00").
 */
export const formatCurrency = (
  value: number = 0,
  currency: string = "BRL",
  locale: string = "pt-BR"
): string => {
  const safeValue = typeof value === "number" && !Number.isNaN(value) ? value : 0;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(safeValue);
};

export const currencyFormat = formatCurrency;

export default formatCurrency;
