import { Component } from '@angular/core';
import { AddItemFormComponent } from "../add-item-form/add-item-form.component";
import { BudgetItemListComponent } from "../budget-item-list/budget-item-list.component";
import { BudgetItem } from '../shared/budget-item/budget-item.module';
import { EditItemModalComponent } from "../edit-item-modal/edit-item-modal.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AddItemFormComponent, BudgetItemListComponent, EditItemModalComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  items: BudgetItem[] = []


  addItem(item: BudgetItem) {
    this.items.push(item)
  }
}
