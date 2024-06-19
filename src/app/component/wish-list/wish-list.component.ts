import { Component, Input } from '@angular/core';
import { WishItem } from '../../models/wishItem';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [FormsModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
}
