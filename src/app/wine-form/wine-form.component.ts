import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WineService } from '../service/wine.service';
import { Wine } from '../model/wine';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.css']
})
export class WineFormComponent {

  wine: Wine;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private wineService: WineService,
              private notificationService: NotificationService) {
    this.wine = new Wine();
  }

  onSubmit() {
    this.wine.nbBouteillesStock = this.wine.nbBouteillesAchetees;
    this.wineService.save(this.wine).subscribe(result => this.onSuccess(), throwable => this.onError());
  }

  onSuccess() {
    this.notificationService.success("Vin ajouté : " + this.wine.appellation);
    this.router.navigate(['/wines']);
  }

  onError() {
    this.notificationService.error("Une erreur est survenue pendant l'opération");
  }
}
