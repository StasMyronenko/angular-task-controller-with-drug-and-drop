import { Component, OnInit, Input } from '@angular/core';
import {Comment} from "../board.model";
import {HttpService} from "../../../../core/services/http/http.service";
import {Store} from "@ngrx/store";
import {removeComment} from "../../../../state/comments/comments.actions";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment!: Comment;
  // todo update delete without reload. mb it works. Need to check
  constructor(private http: HttpService, private store: Store) { }
  getCommentUrl() {
    return 'http://localhost:3000/comments/' + this.comment.id.toString()
  }

  deleteComment() {
    this.http.sendRequest(this.getCommentUrl(), {}, 'DELETE').subscribe(info => {
      this.store.dispatch(removeComment({commentId: this.comment?.id}))
    })
  }

}
