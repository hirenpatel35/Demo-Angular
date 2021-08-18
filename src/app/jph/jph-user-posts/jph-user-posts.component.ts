import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post';
import { User } from '../models/user';
import { UserpostsService } from '../services/userposts.service';

@Component({
  selector: 'app-jph-user-posts',
  templateUrl: './jph-user-posts.component.html',
  styleUrls: ['./jph-user-posts.component.css']
})
export class JphUserPostsComponent implements OnInit, OnDestroy {

  constructor(private _userpostsService: UserpostsService) { }

  private _userpostsServiceSubscription: Subscription;
  public posts: Post[];
  public users: User[];
  public userId: number;
  ngOnInit(): void {

    this._userpostsServiceSubscription = this._userpostsService.getUsers().subscribe(
      data => this.users = data,
      error => console.log(error),
      () => console.log("all service completed")
    );

    /*
    this._userpostsServiceSubscription = this._userpostsService.getUserPostsbyMergeMap(2).subscribe(
      data => {
        //User Posts
        console.log(data)
      },
      error => console.log(error),
    );

    this._userpostsServiceSubscription = this._userpostsService.getUsersPostsByforkJoin().subscribe(
      data => {

        //Users
        console.log(data[0]);

        //Post
        console.log(data[1]);
      },
      error => console.log(error),
    );*/


  }

  public userSelected(event) {

    //console.log(event)

    if (event && event.target.value) {
      this.userId = Number(event.target.value)
      if (this.userId) {
        this._userpostsServiceSubscription = this._userpostsService.getUserPosts(this.userId).subscribe(
          data => {
            this.posts = data
            console.log(this.posts)
          },
          error => console.log(error),
          () => console.log("all service completed")
        )
      } else {
        this.posts = [];
      }
    }

  }

  ngOnDestroy(): void {
    if (this._userpostsServiceSubscription) {
      this._userpostsServiceSubscription
    }
  }

}
