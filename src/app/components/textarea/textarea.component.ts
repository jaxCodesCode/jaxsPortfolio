import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jax-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
  @Input()
  label!: string;

  @ViewChild('input')
  textArea!: ElementRef;

  @Output()
  change: EventEmitter<void> = new EventEmitter();

  getValue = (): string => {
    return this.textArea.nativeElement.value;
  } 
}
