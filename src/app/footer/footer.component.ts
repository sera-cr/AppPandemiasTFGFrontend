import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  /* How to resize a component
  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    console.log("MEOW");
  }
  */

  constructor() { }

  ngOnInit(): void {
  }

}
