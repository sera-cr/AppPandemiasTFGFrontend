import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Comunidad, ComunidadRestriccion, Limitrofe, Restriccion } from '../interfaces/travel';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-travel-route',
  templateUrl: './travel-route.component.html',
  styleUrls: ['./travel-route.component.sass']
})
export class TravelRouteComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  comunidades: Comunidad[] = [];
  comunidadesSet: Set<Comunidad> = new Set();
  selectedComunidades: Comunidad[] = [];
  limitrofes: Limitrofe[] = [];
  lastSelected: Comunidad;
  restricciones: Restriccion[] = [];
  comunidadRestricciones: ComunidadRestriccion[] = [];
  selectedRestrictions: {} = {};

  hideForm = true;

  disableComunidadInicial = false;
  routeFinished = false;

  form: FormGroup;
  form2: FormGroup;

  categories = {
    't': 'Toque queda',
    'm': 'Movilidad',
    'r': 'Reuniones',
    'o': 'Ocio',
    'h': 'Hosteleria'
  }

  constructor(private travelService: TravelService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getComunidades();
    this.getLimitrofes();
    this.getRestricciones();
    this.getComunidadRestriccion();
    this.form = this.fb.group({
      'comunidad': [undefined, Validators.required ]
    });
    this.form2 = this.fb.group({
      'limitrofe': [undefined, Validators.pattern(/^(0|[1-9][0-9]*)$/)]
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

  getLimitrofes(): void {
    this.travelService.getLimitrofes()
        .subscribe(limitrofes => {
          limitrofes.forEach(value => {
            this.limitrofes.push({
              comunidad1_id: value.comunidad1_id,
              comunidad2_id: value.comunidad2_id
            });
          })
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

  clearFields(): void {
    this.hideForm = true;
    this.disableComunidadInicial = false;
    this.form.reset();
    this.lastSelected = undefined;
    this.selectedComunidades = [];
    this.comunidadesSet.clear();
    this.form2.reset();
    this.routeFinished = false;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.hideForm = false;
      this.disableComunidadInicial = true;
      this.limitrofes.forEach(limitrofe => {
        if (limitrofe.comunidad1_id == this.form.value.comunidad) {
          this.comunidadesSet.add(this.comunidades[limitrofe.comunidad2_id-1]);
        } else if (limitrofe.comunidad2_id == this.form.value.comunidad) {
          this.comunidadesSet.add(this.comunidades[limitrofe.comunidad1_id-1]);
        }
      });
      this.selectedComunidades.push(this.comunidades[this.form.value.comunidad-1]);
    } else {
      console.log('invalid');
    }
  }

  addComunidad():void {
    this.lastSelected = this.comunidades[this.form2.value.limitrofe-1];
    this.comunidadesSet.clear();
    this.limitrofes.forEach(limitrofe => {
      if (limitrofe.comunidad1_id == this.lastSelected.id && !this.selectedComunidades.includes(this.comunidades[limitrofe.comunidad2_id-1])) {
        this.comunidadesSet.add(this.comunidades[limitrofe.comunidad2_id-1]);
      } else if (limitrofe.comunidad2_id == this.lastSelected.id && !this.selectedComunidades.includes(this.comunidades[limitrofe.comunidad1_id-1])) {
        this.comunidadesSet.add(this.comunidades[limitrofe.comunidad1_id-1]);
      }
    });
    this.selectedComunidades.push(this.comunidades[this.form2.value.limitrofe-1]);
  }

  onFinish(): void {
    this.disableComunidadInicial = false;
    this.form2.reset();
    this.routeFinished = true;
    this.selectedComunidades.forEach(comunidad => {
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
      this.selectedRestrictions[comunidad.id] = restrictions;
    });
  }

  get comunidad() { return this.form.get('comunidad') }
}
