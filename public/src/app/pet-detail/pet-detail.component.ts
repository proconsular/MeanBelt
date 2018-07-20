import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: any;
  liked = false;

  constructor(private _pets: PetService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.getPet();
  }

  getPet() {
    this._route.params.subscribe(params => {
      this._pets.get(params.id).subscribe(pet => {
        this.pet = pet;
      });
    });
  }

  adopt() {
    this._pets.delete(this.pet._id).subscribe(data => {
      this._router.navigate(['/']);
    });
  }

  like() {
    if (!this.liked) {
      this.liked = true;
      this.pet.likes += 1;
      this._pets.update(this.pet._id, this.pet).subscribe(data => {
        this.getPet();
      });
    }
  }

}
