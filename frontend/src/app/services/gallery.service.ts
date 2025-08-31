import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GallerySection {
  title: string;
  description: string;
  imageCount: number;
}

export interface GalleryConfig {
  [key: string]: GallerySection;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  getGalleryConfig(): Observable<GalleryConfig> {
    return this.http.get<GalleryConfig>('/assets/gallery-config.json');
  }

  getImageUrls(sectionName: string, imageCount: number): string[] {
    const urls: string[] = [];
    for (let i = 1; i <= imageCount; i++) {
      urls.push(`/assets/images/${sectionName}/img-${i}.jpeg`);
    }
    return urls;
  }
}
