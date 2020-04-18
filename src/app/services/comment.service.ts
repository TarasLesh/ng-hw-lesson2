import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentModel} from '../models/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  API = 'https://jsonplaceholder.typicode.com/';

  getAllData(): Observable<CommentModel[]> {

    return this.httpClient.get<CommentModel[]>(this.API + 'comments');
  }
}
