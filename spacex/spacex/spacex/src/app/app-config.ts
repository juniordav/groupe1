import { API_URL } from 'src/app/app-constants';
import { Injectable } from '@angular/core';

/**
 * This is a singleton class
 */
@Injectable()
export class AppConfig {

    public version: string = "1.0.0";
    public locale: string = "fr-FR";
    public currencyFormat = { style: "currency", currency: "USD" };
    public apiProtocol: string | undefined;
    public apiHostName: string | undefined;
    public baseApiPath: string;

    constructor() {
        if (this.apiProtocol === undefined) {
            this.apiProtocol = window.location.protocol;
        }

        this.baseApiPath = this.apiProtocol + "//" + GlobalVariables.appContext + "/";
        if (this.locale === undefined) {
            this.locale = navigator.language;
        }
    }
}

export const GlobalVariables = Object.freeze({
    //inProduction: true,
    appContext: API_URL,
});
