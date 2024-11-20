import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-item-card.component.html',
  styleUrl: './budget-item-card.component.scss'
})
export class BudgetItemCardComponent {
  isIncome = input.required<Boolean>()
}
