import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../models/wishItem';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { EventService } from '../../services/event.service';
import { TestService } from '../../../test.service';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  get cssClasses() {
    /*ternary
    return this.fulfilled ? ['strikeout', 'text-muted'] : []; */

    return { 'strikeout text-muted': this.wish.isComplete };
  }

  constructor(private events: EventService, private testService: TestService) { }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  send() {
    this.testService.sendNumber();
  }
}
