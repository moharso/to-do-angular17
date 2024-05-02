import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()">
      Toggle Theme
    </button>
  `,
  styles: [
    `
      button {
        background-color: #ccc;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
      }
    `,
  ],
})
export class ThemeToggleComponent {
  isDarkMode: boolean = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
