import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.sass']
})
export class BigButtonComponent implements OnInit {

  @Input()
  name: string = "Regiones"

  @Input()
  icon: string = "map"

  constructor() { }

  ngOnInit(): void {
  }

}
