import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import {Launch} from "src/app/models/Launch"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  lauchesapiUrl: string = "launches";

  constructor(private http: HttpClient, private abstractService: AbstractService){}

  public getAllLaunches<Response>() {
     return this.http.get<Launch[]>(this.abstractService.getUrl(this.lauchesapiUrl));
  }

  public getOneLaunch<Response>(id : number) {
    return this.http.get<Launch[]>(this.abstractService.getUrl(this.lauchesapiUrl + '/' + `?flight_number=${id}`));
 }

}
