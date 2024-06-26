import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { AddWishFormComponent } from './component/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './component/wish-filter/wish-filter.component';
import { AsyncPipe } from '@angular/common';
import { WishComponent } from './component/wish/wish.component';
import { ContactComponent } from './component/contact/contact.component';
import { EventService } from './services/event.service';
import { WishService } from './services/wish.service';
import { WishItem } from './models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    WishComponent,
    ContactComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  items: WishItem[] = [];

  constructor(
    events: EventService,
    private wishService: WishService
  ) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  filtered: any = () => {};
}
