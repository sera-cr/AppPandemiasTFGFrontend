import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Comunidad, ComunidadRestriccion, Restriccion } from '../interfaces/travel';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.sass']
})
export class RegionsComponent implements OnInit {

  @ViewChild('table') dataTable: MatTable<any>;
  @ViewChild('target') target: ElementRef;

  comunidades: Comunidad[] = [];
  restricciones: Restriccion[] = [];
  comunidadRestricciones: ComunidadRestriccion[] = [];
  selectedRestricciones: Restriccion[] = [];

  displayedColumns: string[] = ['id', 'information', 'category'];

  comunidad = undefined;

  form: FormGroup;

  datasource: MatTableDataSource<Restriccion>;

  categories = {
    't': 'Toque queda',
    'm': 'Movilidad',
    'r': 'Reuniones',
    'o': 'Ocio',
    'h': 'Hosteleria'
  };

  constructor(private travelService: TravelService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getComunidades();
    this.getRestricciones();
    this.getComunidadRestriccion();
    this.datasource = new MatTableDataSource<Restriccion>(this.selectedRestricciones);
    this.form = this.fb.group({
      'comunidad': [undefined, Validators.required ]
    });
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

  public comunidadChange(comunidad: Comunidad): void {
    this.selectedRestricciones = [];
    this.comunidadRestricciones.forEach(comRes => {
      if (comRes.comunidad_id == comunidad.id) {
        this.selectedRestricciones.push(this.restricciones.find(restriccion => {
          return restriccion.id == comRes.restriccion_id
        }));
      }
    });
    this.dataTable.renderRows();
    this.target.nativeElement.scrollIntoView({ behavior: "smooth", block: "end" });
  }
}