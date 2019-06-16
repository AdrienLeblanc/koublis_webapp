import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WineService } from '../service/wine.service';
import { Wine } from '../model/wine';
 
@Component({
  selector: 'app-wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.css']
})
export class WineFormComponent {
 
  wine: Wine;
 
  constructor(private route: ActivatedRoute, private router: Router, private wineService: WineService) {
    this.wine = new Wine();
  }
 
  onSubmit() {
    this.wineService.save(this.wine).subscribe(result => this.gotoWineList());
  }
 
  gotoWineList() {
    this.router.navigate(['/wines']);
  }
}