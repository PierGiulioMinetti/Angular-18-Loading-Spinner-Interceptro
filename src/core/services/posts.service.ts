import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(){
    return of(['empty array']).pipe(delay(5000));
  }
}
