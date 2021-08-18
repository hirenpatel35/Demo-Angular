import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { User } from '../models/user';
import { Post } from '../models/post';


@Injectable()
export class UserpostsService {

  constructor(private _httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users/");
  }

  public getUserPosts(userId: number): Observable<Post[]> {
    return this._httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }


  public getUserPostsbyMergeMap(userId: number): Observable<Post[]> {
    return this._httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`).pipe(
      mergeMap((user: User) => this._httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)));
  }

  public getUsersPostsByforkJoin(): Observable<[User[], Post[]]> {
    let users = this._httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
    let posts = this._httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)

    return forkJoin([users, posts]);
  }

}
