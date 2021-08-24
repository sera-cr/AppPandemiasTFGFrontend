import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { Information } from '../interfaces/information';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.sass']
})
export class InformationComponent implements OnInit {

  public information: Information[] = [];

  constructor(private informationService: InformationService) { }

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation(): void {
    this.informationService.getInformation()
        .subscribe(information => {
          information.forEach(value => {
            this.information.push({
              title: value.titulo,
              subtitle: value.subtitulo,
              content: value.descripcion,
              iconName: value.icono_referencia,
              imgUrl: value.url_imagen
            });
          })
        });
  }

}
