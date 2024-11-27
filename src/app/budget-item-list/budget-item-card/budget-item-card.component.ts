import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { BudgetItem } from '../../shared/budget-item/budget-item.module';

@Component({
  selector: 'app-budget-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-item-card.component.html',
  styleUrl: './budget-item-card.component.scss'
})
export class BudgetItemCardComponent {

  @Input() item?: BudgetItem;
  @Output() selectedItem!: EventEmitter<BudgetItem>;
  @Output() cardClick: EventEmitter<BudgetItem> = new EventEmitter()


  handleDelete() {
    this.selectedItem.emit()
  }
  onCardClick(item: any) {
    this.cardClick.emit(item)
  }
}
