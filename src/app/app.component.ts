import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { AddWishFormComponent } from './component/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './component/wish-filter/wish-filter.component';
import { TestService } from '../test.service';
import {
  Observable,
  catchError,
  debounceTime,
  filter,
  map,
  switchMap,
  throwError,
} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { WishComponent } from './component/wish/wish.component';
import { ContactComponent } from './component/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    WishComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  //create an obs so we can store the value
  value$!: Observable<any>;
  // number!: number;

  // this.value$.subscribe((number) => {
  //   this.number = number;
  // })

  constructor(private testService: TestService) {
    this.value$ = this.testService.number$.pipe(
      filter((number) => number > 99),
      catchError((err) => {
        return throwError(err);
      }),
      debounceTime(200)
    );
  }

  ngOnInit(): void {

  }


}
