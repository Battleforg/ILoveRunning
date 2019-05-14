import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = '/api/v1/';

  constructor(
    private http: HttpClient
  ) { }

  getUID(): Observable<any> {
    return this.http.get(this.baseUrl + 'generate_uid');
  }

  createUser(data: object): Observable<any> {
    return this.http.post(this.baseUrl + 'customer', data);
  }

  getUserById(uid: any): Observable<any> {
    return this.http.get(this.baseUrl + 'customer/' + uid).pipe(
      catchError(this.handleError<any>('Get a customer', ''))
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
      // log to console instead
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * Log activities in this service
   * @param message - content to be logged
   */
  private log(message: string) {
    // 2019/2/11TODO: use better solution later
    console.log('Message:' + message);
  }
}
