import { Component } from '@angular/core';
import { WishItem } from '../../models/wishItem';
import { EventService } from '../../services/event.service';
import { WishService } from '../../services/wish.service';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from '../wish-list/wish-list.component';
import { AddWishFormComponent } from '../add-wish-form/add-wish-form.component';
import { WishFilterComponent } from '../wish-filter/wish-filter.component';


@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
})
export class WishComponent {
  items: WishItem[] = [];

  constructor(events: EventService, private wishService: WishService) {
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
