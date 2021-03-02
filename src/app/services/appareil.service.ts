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
}
