import { Component, Input } from '@angular/core';
import { BudgetItemCardComponent } from "./budget-item-card/budget-item-card.component";
import { BudgetItem } from '../shared/budget-item/budget-item.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-item-list',
  standalone: true,
  imports: [BudgetItemCardComponent, CommonModule],
  templateUrl: './budget-item-list.component.html',
  styleUrl: './budget-item-list.component.scss'
})
export class BudgetItemListComponent {
  @Input() items: BudgetItem[] = []

  onCardClick(data: any) {
    console.log(data)
  }
}
