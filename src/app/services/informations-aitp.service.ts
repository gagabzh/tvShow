import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Information } from '../models/information.model';
import { flatMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InformationsAitpService {
  constructor(private httpClient: HttpClient) {}

  public getInfomationDetail(id: string): Promise<Information> {
    let headers = new HttpHeaders();
    headers = headers.append(
      'X-Auth-Token',
      ''
    );
    return this.httpClient
      .get<any>(
        `https://accessadministrateuraitp.aneo.fr/api/actualites/${id}`,
        { headers }
      )
      .pipe(
        map((objects: any) => {
          console.log(objects);
          const temp = new Information();
          temp.description = objects.descriptionLongue;
          return temp;
        })
      )
      .toPromise();
  }

  public list(): Promise<Information[]> {
    let headers = new HttpHeaders();
    headers = headers.append(
      'X-Auth-Token',
      ''
    );
    return this.httpClient
      .get<any[]>('https://accessadministrateuraitp.aneo.fr/api/actualites', {
        headers
      })
      .pipe(
        map((objects: any[]) => {
          const dateMoinsUnMois = new Date();
          dateMoinsUnMois.setDate(dateMoinsUnMois.getDate() - 45);
          console.log(dateMoinsUnMois.getTime());
          return objects.filter(o => {
            return Date.parse(o.dateCreation) > dateMoinsUnMois.getTime();
          });
        })
      )
      .pipe(
        flatMap((objects: any[]) => {
          return Promise.all(
            objects.map(async o => {
              const temp = await this.getInfomationDetail(o.id);
              temp.title = o.titre;
              temp.date = o.dateCreation;
              temp.id = o.id;
              return temp;
            })
          );
        })
      )
      .toPromise();
  }
}
