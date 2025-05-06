// show-code.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-code',
  templateUrl: './show-code.component.html',
  styleUrl: './show-code.component.css',
  standalone: true
})
export class ShowCodeComponent {
  @Input() htmlCode: string = '';
  @Input() tsCode: string = '';
  @Input() cssCode: string = '';

  copiedSection: string | null = null;

  copyCode(section: 'html' | 'ts' | 'css') {
    const codeMap = { html: this.htmlCode, ts: this.tsCode, css: this.cssCode };
    navigator.clipboard.writeText(codeMap[section] || '').then(() => {
      this.copiedSection = section;
      setTimeout(() => this.copiedSection = null, 1500);
    });
  }

  castSection(section: string): 'html' | 'ts' | 'css' {
    if (section === 'html' || section === 'ts' || section === 'css') {
      return section;
    }
    throw new Error('Invalid section');
  }
}
