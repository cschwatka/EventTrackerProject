import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Run } from '../models/run';

@Injectable({
  providedIn: 'root'
})
export class RunService {

  private url = environment.baseUrl + 'api/runs';

  constructor(private http: HttpClient) {}

  index() {
    return this.http.get<Run[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  create(run: Run) {
    return this.http.post<Run>(this.url, run).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('httpClient threw error creating run.');
      })
    );
  }

  update(updateRun: Run) {
    return this.http
      .put<Run>(this.url + '/' + updateRun.id, updateRun)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('httpClient threw error updating run.');
        })
      );
  }

  destroy(id: number) {
    return this.http.delete<void>(this.url +'/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('RunService: error deleting run');
      })
    );
  }



}
