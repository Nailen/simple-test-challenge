import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  constructor(private http: HttpClient) {
  }

  public convert(srcCurrency: string, srcAmount: number, targetCurrency: string): Observable<number> {
    const subject = new Subject<number>();
    this.http.get<any[]>('api/currencies', {}).subscribe(response => {
        const src = response.find(value => value.id === srcCurrency).value;
        const target = response.find(value => value.id === targetCurrency).value;
        subject.next((target / src) * srcAmount);
      }
    );
    return subject.asObservable();
  }
}
