import { API_URL } from 'src/app/app-constants';
import { Injectable } from '@angular/core';

/**
 * This is a singleton class
 */
@Injectable()
export class AppConfig {

    public baseApiPath: string;
    constructor() {
        this.baseApiPath = "https://" + GlobalVariables.appContext + "/";

    }
}

export const GlobalVariables = Object.freeze({
    appContext: API_URL,
});
