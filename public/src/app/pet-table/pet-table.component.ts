import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent implements OnInit {
  pets = [];

  constructor(private _pets: PetService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this._pets.all().subscribe(pets => {
      this.pets = pets as Array<Object>;
      this.pets.sort((a, b) => {
        if (a.type < b.type) {
          return -1;
        }
        if (a.type > b.type) {
          return 1;
        }
        return 0;
      });
    });
  }

}
