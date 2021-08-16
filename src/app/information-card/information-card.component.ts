import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationDialogComponent } from '../information-dialog/information-dialog.component';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.sass']
})
export class InformationCardComponent implements OnInit {

  @Input()
  iconName: string = "masks"

  @Input()
  title: string = "Wear a mask"

  @Input()
  subtitle: string = "Always wear a mask in outdoor and indoor places"

  @Input()
  imgUrl: string = "https://scx2.b-cdn.net/gfx/news/hires/2020/6-mask.jpg"

  @Input()
  content: string = "content"

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(InformationDialogComponent, {data: {title: this.title, subtitle: this.subtitle, content: this.content}});
  }

}
