import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  API = 'https://jsonplaceholder.typicode.com/';

  getAllData(): Observable<Post[]> {

    return this.httpClient.get<Post[]>(this.API + 'posts');
  }
}
