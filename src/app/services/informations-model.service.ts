import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Information} from '../models/information.model';

@Injectable({
  providedIn: 'root'
})
export class InformationsModelService {

  constructor(private httpClient: HttpClient) { }
  public list(): Promise<Information[]> {
    return this.httpClient.get<Information[]>("URL").toPromise();
  }
}
