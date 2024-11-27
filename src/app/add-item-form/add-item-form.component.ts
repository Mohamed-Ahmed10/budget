import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BudgetItem } from '../shared/budget-item/budget-item.module';

@Component({
  selector: 'app-add-item-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-item-form.component.html',
  styleUrl: './add-item-form.component.scss'
})
export class AddItemFormComponent {

  @Input() item: BudgetItem = new BudgetItem("", undefined);
  @Output() formData: EventEmitter<BudgetItem> = new EventEmitter()

  onSubmit(form: any) {
    this.formData.emit(form.value)
    form.reset()
  }
}
