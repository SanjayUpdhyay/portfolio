import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: any;

  constructor(private sanitizer: DomSanitizer) {}

  getDescription(): SafeHtml {
    if (!this.data || !this.data.Description) return '';
    // Replace <br> with newlines and sanitize the HTML
    const formattedDescription = this.data.Description
      .replace(/<br>/g, '\n')
      .replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(formattedDescription);
  }
}
