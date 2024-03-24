import { ICurrency } from "./ICurrency";
import { ILanguage } from "./ILanguage";

export interface ILanguageState {
    headerConfig: {
      logo: string;
      supportedLanguages: ILanguage[];
      supportedCurrencies: ICurrency[];
      title: string;
    };
    footerConfig: {
      logo: string;
      companyName: string;
    };
    loading: boolean;
    error: string | null;
}