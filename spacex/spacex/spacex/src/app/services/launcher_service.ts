import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class CapsuleService {

  lauchesapiUrl: string = "/launches";

  constructor(private http: HttpClient, private abstractService: AbstractService){}

  public getAllCapsules<Response>() {
     return this.http.get<Launch[]>(this.abstractService.getUrl(this.lauchesapiUrl));
  }

}
