export interface ICurrencyState {
    exchangeRates: Record<string, number>;
    loading: boolean;
    error: string | null;
    selectedCurrency: string;
    selectedCurrencySymbol: string
}