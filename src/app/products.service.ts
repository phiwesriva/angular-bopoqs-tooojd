import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Products } from './products';


@Injectable({ providedIn: 'root' })
export class ProductsService {
  private productUrl = 'api/product';  // URL to web api

httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
  private messageService: MessageService) { }

    /** GET Product from the server */
  getProduct(): Observable<Products> {
  return this.http.get<Products>(this.productUrl)
    .pipe(
      catchError(this.handleError<Products>('getProduct', []))
    );
}

 /* GET Product whose name contains search term */
  searchProduct(term: string): Observable<Products[]> {
    if (!term.trim()) {
      // if not search term, return empty Product array.
      return of([]);
    }
    return this.http.get<Products[]>(`${this.productUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found product matching "${term}"`) :
         this.log(`no product matching "${term}"`)),
      catchError(this.handleError<Products[]>('searchProduct', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

 /** Log a ProductsService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProductsService: ${message}`);
  }
  }