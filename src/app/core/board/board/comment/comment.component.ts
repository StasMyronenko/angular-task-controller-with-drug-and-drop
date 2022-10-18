import { Component, OnInit, Input } from '@angular/core';
import {Comment} from "../board.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;

  constructor() { }

  ngOnInit(): void {
  }
  deleteComment() {
    console.log('delete comment')
  }

}
