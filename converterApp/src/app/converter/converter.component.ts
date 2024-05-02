import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
  standalone: true,
  imports: [FormsModule]
  
})
export class ConverterComponent {
  @Input() meterValue: number = 0;
  @Input() feetValue: number = 0;
  @Input() celsiusValue: number = 0;
  @Input() fahrenheitValue: number = 0;

  resetLength() {

    this.meterValue = 0;
    this.feetValue = 0;
  }

  resetTemperature() {
    this.celsiusValue = 0;
    this.fahrenheitValue = 0;
  }

  updateLength() {
    if (this.meterValue) {
      this.feetValue = this.meterValue * 3.28084;
    } else {
      this.meterValue = this.feetValue / 3.28084;
    }
  }

  updateTemperature() {
    if (this.celsiusValue) {
      this.fahrenheitValue = (this.celsiusValue * 9/5) + 32;
    } else {
      this.celsiusValue = (this.fahrenheitValue - 32) * 5/9;
    }
  }
}
