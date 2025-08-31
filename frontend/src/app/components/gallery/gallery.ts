import { Component } from '@angular/core';
import { DynamicGallery } from '../dynamic-gallery/dynamic-gallery';

@Component({
  selector: 'app-gallery',
  imports: [DynamicGallery],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  selectedSection: string = '';
  showGallery: boolean = false;

  openGallery(sectionName: string) {
    this.selectedSection = sectionName;
    this.showGallery = true;
  }

  onGalleryClose() {
    this.showGallery = false;
  }
}
