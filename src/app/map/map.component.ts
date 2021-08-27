import { Component, AfterViewInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';
import data from '../json/regions.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements AfterViewInit {

  private map: any;

  @ViewChild('mapEvent') target: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 40.4167, -3.70325 ],
      zoom: 6
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    L.geoJson(data, {onEachFeature: this.popup}).addTo(this.map);
  }

  private popup(feature, layer) {
    if (feature.properties && feature.properties.NAME_1) {
      layer.bindPopup(feature.properties.NAME_1);
    }
  }
}