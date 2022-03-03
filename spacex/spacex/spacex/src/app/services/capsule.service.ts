import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Capsule } from '../models/Capsule';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class CapsuleService {

  capsulesapiUrl: string = "capsules";

  constructor(private http: HttpClient, private abstractService: AbstractService){}

  public getAllCapsules<Response>() {
    
     return this.http.get<Capsule[]>(this.abstractService.getUrl(this.capsulesapiUrl), { headers: this.abstractService.getOption().headers, observe: 'response' });
  }

}
