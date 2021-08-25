import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Category } from '../interfaces/category';
import { Comunidad, ComunidadRestriccion, Restriccion } from '../interfaces/travel';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  comunidades: Comunidad[] = [];
  restricciones: Restriccion[] = [];
  comunidadRestricciones: ComunidadRestriccion[] = [];

  comunidadRestrictions: {} = {};

  restrictionsLoaded = false;

  categories: Category[] = [
    {
      identifier: 't',
      name: 'Toque queda'
    },
    {
      identifier: 'm',
      name: 'Movilidad'
    },
    {
      identifier: 'r',
      name: 'Reuniones'
    },
    {
      identifier: 'o',
      name: 'Ocio'
    },
    {
      identifier: 'h',
      name: 'Hosteleria'
    },
    {
      identifier: 'v',
      name: 'Viaje'
    }
  ];

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.getComunidades();
    this.getRestricciones();
    this.getComunidadRestriccion();
  }

  getComunidades(): void {
    this.travelService.getComunidades()
        .subscribe(comunidades => {
          comunidades.forEach(value => {
            this.comunidades.push({
              id: value.id,
              name: value.nombre
            });
          });
        });
  }

  getRestricciones(): void {
    this.travelService.getRestricciones()
        .subscribe(restricciones => {
          restricciones.forEach(value => {
            this.restricciones.push({
              id: value.id,
              active: value.activa,
              information: value.informacion,
              category: value.categoria
            });
          });
        });
  }

  getComunidadRestriccion(): void {
    this.travelService.getComunidadRestriccion()
        .subscribe(comres => {
          comres.forEach(value => {
            this.comunidadRestricciones.push({
              comunidad_id: value.comunidad_id,
              restriccion_id: value.restriccion_id
            })
          });
        });
  }

  getRestriccionComunidad() {
    if (!this.restrictionsLoaded) {
      this.comunidades.forEach(comunidad => {
        var restrictions = [];
        this.comunidadRestricciones.forEach(comres => {
          if (comres.comunidad_id == comunidad.id) {
            restrictions.push(
              this.restricciones.find(element => {
                return element.id == comres.restriccion_id
              })
            );
          }
        });
        this.comunidadRestrictions[comunidad.id] = restrictions;
      });
    }
  }
}
