import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';
import { WineService } from '../service/wine.service';
 
@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
 
  wines: Wine[];
  wine: Wine;
 
  constructor(private wineService: WineService) {
  }
 
  ngOnInit() {
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
  }

  isOnEdit(wine: Wine): boolean {
    return wine.onEdit;
  }
}