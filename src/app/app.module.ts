import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {RouterModule} from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { HelloComponent } from './components/hello/hello.component';
import {HttpClientModule} from '@angular/common/http';
import {UserResolverService} from './services/resolvers/user-resolver.service';
import {PostResolverService} from './services/resolvers/post-resolver.service';
import {CommentResolverService} from './services/resolvers/comment-resolver.service';
import { UserComponent } from './components/single-component/user/user.component';
import { PostComponent } from './components/single-component/post/post.component';
import { CommentComponent } from './components/single-component/comment/comment.component';
import {CommentsResolverService} from './services/resolvers/comments-resolver.service';


const routes = [
  {path: '', component: HelloComponent},
  {path: 'users', component: AllUsersComponent, resolve: {list: UserResolverService}, children: [
    {path: ':id/posts', component: AllPostsComponent}
    ]},
  {path: 'posts', component: AllPostsComponent, resolve: {list: PostResolverService}, children: [
      {path: ':id/comments', component: AllCommentsComponent, resolve: {comments: CommentsResolverService}}
    ]},
  {path: 'comments', component: AllCommentsComponent, resolve: {list: CommentResolverService}},
];

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    HelloComponent,
    UserComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
