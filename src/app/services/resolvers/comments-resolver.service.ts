import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentModel} from '../../models/CommentModel';
import {Observable} from 'rxjs';
import {CommentService} from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolverService implements Resolve<CommentModel[]>{

  constructor(private commentService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<CommentModel[]> | Promise<CommentModel[]> | CommentModel[] {
    const postId = route.queryParamMap.get('postId');
    return this.commentService.getAllCommentOfPost(postId);
  }
}
