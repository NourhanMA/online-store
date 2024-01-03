import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() categories: string[]

  @Output() selectedCategroy: EventEmitter<string> = new EventEmitter()

  getSelectedCategory(event) {
    this.selectedCategroy.emit(event.target.value)
  }
}
