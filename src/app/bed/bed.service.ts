import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BedService {

public constructor(private httpClient: HttpClient) {
}

public getAllBeds(): Observable<any> {
 return this.httpClient.get('http://localhost:8080/beds');
}

public changeBedStatus(bedId: number): Observable<any> {
 return this.httpClient.get('http://localhost:8080/bedStatus/' + bedId);
}
}
