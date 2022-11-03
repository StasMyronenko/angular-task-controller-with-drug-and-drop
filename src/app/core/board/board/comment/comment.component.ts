import { Component, OnInit, Input } from '@angular/core';
import {Comment} from "../board.model";
import {HttpService} from "../../../../shared/services/http/http.service";
import {Store} from "@ngrx/store";
import {removeComment} from "../../../../state/comments/comments.actions";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  // todo update delete without reload
  constructor(private http: HttpService, private store: Store) { }
  getCommentUrl() {
    return 'http://localhost:3000/comments/' + this.comment.id.toString()
  }
  ngOnInit(): void {
  }

  deleteComment() {
    this.http.sendRequest(this.getCommentUrl(), {}, 'DELETE').subscribe(info => {
      this.store.dispatch(removeComment({commentId: this.comment?.id}))
    })
  }

}
