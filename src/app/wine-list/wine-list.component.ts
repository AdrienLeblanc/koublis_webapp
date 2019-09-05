import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';
import { WineService } from '../service/wine.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  wines: Wine[];
  wine: Wine;
  public popoverTitle: string = 'Suppression';
  public popoverMessage: string = 'Supprimer le vin ?';
  public confirmText: string = 'Confirmer';
  public cancelText: string = 'Annuler';

  constructor(private wineService: WineService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
      this.wineService.findAll().subscribe(data => {
        this.wines = data;
      });
  }

  changeBouteillesAchetees(wine: Wine) {
    wine.nbBouteillesStock = wine.nbBouteillesAchetees - wine.destockage;
  }

  changeDestockage(wine: Wine) {
    wine.nbBouteillesStock = wine.nbBouteillesAchetees - wine.destockage;
  }

  changeBouteillesStock(wine: Wine) {
    wine.destockage = wine.nbBouteillesAchetees - wine.nbBouteillesStock;
  }

  edit(wine: Wine) {
    wine.onEdit = !wine.onEdit;
    if (!wine.onEdit) { // Si on termine l'édition on sauvegarde
      this.wineService.save(wine).subscribe(() => this.fetchData(), throwable => this.onError());
      this.notificationService.success("Modification effectuée");
      this.fetchData();
    }
  }

  isOnEdit(wine: Wine): boolean {
    return wine.onEdit;
  }

  delete(wine: Wine) {
    this.wineService.delete(wine).subscribe(() => this.fetchData(), throwable => this.onError());
    this.notificationService.success("Vin supprimé : " + wine.appellation);
  }

  onError() {
    this.notificationService.error("Une erreur est survenue pendant l'opération");
  }
}
