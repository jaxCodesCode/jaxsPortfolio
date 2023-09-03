import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jax-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input()
  label!: string;

  @ViewChild('input')
  input!: ElementRef;

  @Output()
  change: EventEmitter<void> = new EventEmitter();

  getValue = (): string => {
    return this.input.nativeElement.value;
  }
}
