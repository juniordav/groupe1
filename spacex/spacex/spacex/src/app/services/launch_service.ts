import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import {Launch} from "src/app/models/Launch"

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  lauchesapiUrl: string = "launches";

  constructor(private http: HttpClient, private abstractService: AbstractService){}

  public getAllLaunches<Response>() {
     return this.http.get<Launch[]>(this.abstractService.getUrl(this.lauchesapiUrl));
  }

}
