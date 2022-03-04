import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'src/app/app-config';


@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  constructor(public http: HttpClient, public appConfig: AppConfig) {
  }

  getOption() {
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return httpOptions;
}

getUrl(url: string) {
  console.log("url:"+this.appConfig.baseApiPath + url);
    return this.appConfig.baseApiPath + url;
  }

}
