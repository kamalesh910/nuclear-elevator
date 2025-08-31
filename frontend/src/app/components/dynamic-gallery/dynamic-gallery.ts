import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-dynamic-gallery',
  imports: [CommonModule],
  templateUrl: './dynamic-gallery.html',
  styleUrl: './dynamic-gallery.css'
})
export class DynamicGallery implements OnInit, OnChanges {
  @Input() sectionName: string = '';
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  images: string[] = [];
  sectionTitle: string = '';
  loading: boolean = false;

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    if (this.sectionName && this.isVisible) {
      this.loadImages();
    }
  }

  ngOnChanges() {
    if (this.sectionName && this.isVisible) {
      this.loadImages();
    }
  }

  closeGallery() {
    this.isVisibleChange.emit(false);
  }

  private loadImages() {
    this.loading = true;
    this.galleryService.getGalleryConfig().subscribe(config => {
      const section = config[this.sectionName];
      if (section) {
        this.sectionTitle = section.title;
        this.images = this.galleryService.getImageUrls(this.sectionName, section.imageCount);
        console.log(this.images);
        console.log("images showin");
        //this.images = ['assets/images/modern-office/img-1.jpeg']//this.images.map(url => url.replace('XXXXXXXXXXXXXXXXXXXXX', ''));
      }
      this.loading = false;
    });
  }

  onImageError(event: any) {
    event.target.style.display = 'none';
  }

  trackByImage(index: number, item: string): string {
    return item;
  }
}
