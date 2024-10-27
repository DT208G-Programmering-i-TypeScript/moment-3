import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter', // Komponentens selektor, används för att inkludera komponenten i en HTML-fil
  templateUrl: './converter.component.html', // HTML-mallen för komponenten
  styleUrls: ['./converter.component.css'], // CSS-filstilar som används för komponenten
  standalone: true, // Standalone-komponent som inte är beroende av en modul
  imports: [FormsModule] // Importerar FormsModule för att hantera formulärbindningar
})
export class ConverterComponent {
  @Input() meterValue: number | null = null;
  @Input() feetValue: number | null = null;
  @Input() celsiusValue: number | null = null;
  @Input() fahrenheitValue: number | null = null;

  // Nollställer längdenheter (meter och feet)
  resetLength() {
    this.meterValue = null;
    this.feetValue = null;
  }

  // Nollställer temperaturenheter (celsius och fahrenheit)
  resetTemperature() {
    this.celsiusValue = null;
    this.fahrenheitValue = null;
  }

  // Uppdaterar längdenheterna beroende på inmatningskälla (meter eller feet)
  updateLength(source: 'meter' | 'feet') {
    if (source === 'meter' && this.meterValue !== null) {
      this.feetValue = this.meterValue * 3.28084;
    } else if (source === 'feet' && this.feetValue !== null) {
      this.meterValue = this.feetValue / 3.28084;
    }
  }

   // Uppdaterar temperaturenheterna beroende på inmatningskälla (celsius eller fahrenheit)
  updateTemperature(source: 'celsius' | 'fahrenheit') {
    if (source === 'celsius' && this.celsiusValue !== null) {
      this.fahrenheitValue = (this.celsiusValue * 9/5) + 32;
    } else if (source === 'fahrenheit' && this.fahrenheitValue !== null) {
      this.celsiusValue = (this.fahrenheitValue - 32) * 5/9;
    }
  }
}