import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageHandlingService {
  private readonly placeholderImage: string = '../../../assets/images/404 3.png';

  constructor() {
  }

  public handleImageError(event: Event): void {
    if(event.target instanceof HTMLImageElement) {
      event.target.src = this.placeholderImage;
    }
  }
}
