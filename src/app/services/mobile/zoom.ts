import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MobileDetectionService } from './detection';

@Injectable({
  providedIn: 'root',
})
export class PageZoomService {
  constructor(
    private meta: Meta,
    private mobileService: MobileDetectionService
  ) {}

  init(): void {
    if (this.mobileService.isMobile()) {
      this.disableZoom();
    } else {
      this.enableZoom();
    }
  }

  private enableZoom(): void {
    const viewportContent = this.meta.getTag('name=viewport').content;
    const newContent = 'width=device-width, initial-scale=1';
    if (viewportContent !== newContent) {
      this.meta.updateTag({ name: 'viewport', content: newContent });
    }
  }

  private disableZoom(): void {
    const viewportContent = this.meta.getTag('name=viewport').content;
    const newContent =
      'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1';
    if (viewportContent !== newContent) {
      this.meta.updateTag({ name: 'viewport', content: newContent });
    }
  }
}
