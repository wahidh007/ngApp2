import { Injectable } from '@angular/core';
import { Appareil } from './appareil.class';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
                new Appareil("Climatiseur", "éteint"),
                new Appareil("Refrigerateur", "allumé"),
                new Appareil("Ordinateur", "allumé"),
                new Appareil("Machine à laver", "éteint")
              ];

  constructor() { }

  switchOnAll() {
    this.appareils.forEach(app => {
      app.status = 'allumé';
    });
  }

  switchOffAll() {
    this.appareils.forEach(app => {
      app.status = 'éteint';
    });
  }

  switchApp(i: number) {
    if (this.appareils[i].status === 'éteint') {
      this.appareils[i].status = 'allumé';
    } else if (this.appareils[i].status === 'allumé'){
      this.appareils[i].status = 'éteint'
    }
  }
}
