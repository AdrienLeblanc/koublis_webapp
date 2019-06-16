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
 
  constructor(private wineService: WineService) {
  }
 
  ngOnInit() {
    this.wineService.findAll().subscribe(data => {
      this.wines = data;
    });
  }
}