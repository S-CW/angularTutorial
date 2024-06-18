import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from './models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { AddWishFormComponent } from './component/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './component/wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Laundry'),
    new WishItem('Play games', true),
    new WishItem('Learn Angular', true),
  ];

  filter: any = () => {};
}
