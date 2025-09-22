import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Button'; // Texto do botão
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // Tamanho do botão
  @Input() disabled: boolean = false;
  @Input() status: 'primary' | 'secondary' = 'primary'; // cor
  @Output() click = new EventEmitter<void>();

  
  get sizeClass() {
    return `button-${this.size}`;
  }

  get statusClass() {
    return `button-${this.status}`;
  }
}
