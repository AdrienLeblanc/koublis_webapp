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

  onChange(wine: Wine) {
    this.wineService.save(wine).subscribe();
  }

  changeBouteillesAchetees(wine: Wine) {
    wine.nbBouteillesStock = wine.nbBouteillesAchetees - wine.destockage;
    this.wineService.save(wine).subscribe();
  }

  changeDestockage(wine: Wine) {
    wine.nbBouteillesStock = wine.nbBouteillesAchetees - wine.destockage;
    this.wineService.save(wine).subscribe();
  }

  changeBouteillesStock(wine: Wine) {
    wine.destockage = wine.nbBouteillesAchetees - wine.nbBouteillesStock;
    this.wineService.save(wine).subscribe();
  }

  edit(wine: Wine) {
    wine.onEdit = !wine.onEdit;
    if (!wine.onEdit) {
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
