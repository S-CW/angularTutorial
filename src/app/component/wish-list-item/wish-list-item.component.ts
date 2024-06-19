import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wishText!: string;

  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }
}
