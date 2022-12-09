import {Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import {HttpService} from "../../../../core/services/http/http.service";
import {debounce, timer} from "rxjs";
import {queryParametersModel} from "./boards.model";
import {Store} from "@ngrx/store";
import {selectFilteredBoards} from "../../../../state/boards/boards.selector";
import {CookieService} from "../../../../core/services/cookie/cookie.service";
import {sortOptionsEnumerateBoard} from "../dashboard.model";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit{
  // todo check ref. I think it works without it
  @Input() queryData!: queryParametersModel;
  boards$ = this.store.select(selectFilteredBoards())
  constructor(private http: HttpService, private ref: ChangeDetectorRef, private store: Store, private cookie: CookieService) {}

  ngOnInit(): void {
    this.queryData.search.valueChanges
      .pipe(debounce(() => timer(1000)))
      .subscribe((value: string ) => {
        this.boards$ = this.store.select(selectFilteredBoards(
          this.queryData.search.value,
          +this.queryData.sortBy.value,
          this.queryData.reverse.value
        ))
        this.ref.detectChanges();
    })
    this.queryData.reverse.valueChanges
      .pipe(debounce(() => timer(1000)))
      .subscribe((value: boolean ) => {
        this.boards$ = this.store.select(selectFilteredBoards(
          this.queryData.search.value,
          +this.queryData.sortBy.value,
          this.queryData.reverse.value
        ))
        this.ref.detectChanges();
    })
    this.queryData.sortBy.valueChanges
      .pipe(debounce(() => timer(1000)))
      .subscribe((value: sortOptionsEnumerateBoard ) => {
        this.boards$ = this.store.select(selectFilteredBoards(
          this.queryData.search.value,
          +this.queryData.sortBy.value,
          this.queryData.reverse.value
        ))
        this.ref.detectChanges();
    })
  }
}
