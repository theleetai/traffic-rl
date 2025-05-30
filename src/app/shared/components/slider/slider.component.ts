import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    }
  ],
  template: `
    <div class="slider-container">
      <label [for]="id" class="block text-sm font-medium text-gray-700 mb-2">
        {{ label }}
        <span class="text-gray-500 ml-1">({{ value }}{{ unit }})</span>
      </label>
      
      <div class="relative">
        <input
          [id]="id"
          type="range"
          [min]="min"
          [max]="max"
          [step]="step"
          [value]="value"
          [disabled]="disabled"
          [class]="sliderClasses"
          (input)="onInput($event)"
          (change)="onChange($event)"
        />
        
        <!-- Track markers -->
        <div class="flex justify-between text-xs text-gray-400 mt-1" *ngIf="showMarkers">
          <span>{{ min }}{{ unit }}</span>
          <span>{{ max }}{{ unit }}</span>
        </div>
      </div>
      
      <p class="text-xs text-gray-500 mt-1" *ngIf="description">
        {{ description }}
      </p>
    </div>
  `,
  styles: [`
    .slider-container {
      @apply w-full;
    }
  `]
})
export class SliderComponent implements ControlValueAccessor {
  @Input() id = `slider-${Math.random().toString(36).substring(2, 9)}`;
  @Input() label = '';
  @Input() description = '';
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() value = 0;
  @Input() unit = '';
  @Input() disabled = false;
  @Input() showMarkers = true;
  @Input() color: 'blue' | 'green' | 'red' | 'purple' = 'blue';
  
  @Output() valueChange = new EventEmitter<number>();

  private onChangeFn = (value: number) => {};
  private onTouched = () => {};

  get sliderClasses(): string {
    const baseClasses = 'w-full h-2 rounded-lg appearance-none cursor-pointer transition-all';
    const colorClasses = {
      blue: 'bg-gray-200 slider-blue',
      green: 'bg-gray-200 slider-green',
      red: 'bg-gray-200 slider-red',
      purple: 'bg-gray-200 slider-purple'
    };
    
    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    
    return [baseClasses, colorClasses[this.color], disabledClass].filter(Boolean).join(' ');
  }

  onInput(event: Event): void {
    if (this.disabled) return;
    
    const target = event.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    this.value = newValue;
    this.valueChange.emit(newValue);
    this.onChangeFn(newValue);
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.value = parseFloat(target.value);
      this.valueChange.emit(this.value);
    }
    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(value: number): void {
    this.value = value || 0;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}