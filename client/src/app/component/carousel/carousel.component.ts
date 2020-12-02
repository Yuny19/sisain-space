import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html'
})

export class CarouselComponent {

  constructor(private router: Router) { }

  link(link: string) {
    this.router.navigateByUrl('/'+link);
  }
}