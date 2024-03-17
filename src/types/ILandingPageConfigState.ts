import { ISearchForm } from "./ISearchForm";

export interface ILandingPageConfigState {
    bannerImageURL: string;
    searchForm: ISearchForm;
    loading: boolean;
    error: string | null;
}