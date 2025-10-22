import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'progressive-image',
  imports: [CommonModule],
  templateUrl: './progressive-image.html',
  styleUrl: './progressive-image.css'
})
export class ProgressiveImage {

  
  @Input({required: true})
  imageUrl!: string

  @Input({required: true})
  imageSmallUrl!: string

  isLoaded = false


  onImageLoad(){
    this.isLoaded = true
  }


}
