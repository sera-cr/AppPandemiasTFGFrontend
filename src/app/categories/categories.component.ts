import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { CategoriesService } from '../categories.service';
import { Category } from '../interfaces/category';
import { Comunidad, ComunidadRestriccion, Restriccion } from '../interfaces/travel';

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
  catRestric: Restriccion[] = [];

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

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getComunidades();
    this.getRestricciones();
    this.getComunidadRestriccion();
  }

  getComunidades(): void {
    this.categoriesService.getComunidades()
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
    this.categoriesService.getRestricciones()
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
    this.categoriesService.getComunidadRestriccion()
        .subscribe(comres => {
          comres.forEach(value => {
            this.comunidadRestricciones.push({
              comunidad_id: value.comunidad_id,
              restriccion_id: value.restriccion_id
            })
          });
        });
  }
}
