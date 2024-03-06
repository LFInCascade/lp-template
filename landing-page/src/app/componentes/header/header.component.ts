import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: '../../styles/index.scss'
  
})
export class HeaderComponent {
  isMenuVisible = false;

  toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
  }
}
