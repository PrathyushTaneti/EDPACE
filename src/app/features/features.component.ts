import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToQuotations() {
    this.router.navigate(['/quotations']);
  }

}
