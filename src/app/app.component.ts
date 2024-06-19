import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from './models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { AddWishFormComponent } from './component/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './component/wish-filter/wish-filter.component';
import { EventService } from './services/event.service';
import { WishService } from './services/wish.service';
import { TestService } from '../test.service';
import { Observable, catchError, debounceTime, filter, map, switchMap, throwError } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  items!: WishItem[];

  //create an obs so we can store the value
  value$!: Observable<any>
  // number!: number;

  constructor(events: EventService, private wishService: WishService,
    private testService: TestService
  ) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });

    this.value$ = this.testService.number$.pipe(
      filter(number => number > 99),
      catchError(err => {
       return throwError(err)
      }),
      debounceTime(200);
      );

    // this.value$.subscribe((number) => {
    //   this.number = number;
    // })

  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    });
  }

  filtered: any;
}
