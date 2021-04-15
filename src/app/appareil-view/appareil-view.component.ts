import { Component } from "@angular/core";
import { AppareilService } from "../services/appareil.service";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html'
})
export class AppareilViewComponent {
  isAuth = false;
  lastUpadte = new Date();

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    console.log("tout allumer !");
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes vous sur ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
}
