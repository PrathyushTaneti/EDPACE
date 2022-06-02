import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {

  public readingIcon = "../../assets/images/hero-image.svg";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToFeaturesModule() {
    this.router.navigate(['/features']);
  }

}
