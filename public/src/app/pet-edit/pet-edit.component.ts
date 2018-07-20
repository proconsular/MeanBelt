import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  model: any;
  unique = true;

  constructor(private _pets: PetService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._pets.get(params.id).subscribe(pet => {
        this.model = pet;
        for (let i = pet['skills'].length; i < 3; i++) {
          this.model.skills.push({name: ''});
        }
      });
    });
  }

  onSubmit() {
    const ss = this.model.skills;
    for (let i = ss.length - 1; i >= 0; i--) {
      if (!ss[i].name) {
        ss.splice(i, 1);
      }
    }
    this._pets.update(this.model._id, this.model).subscribe(data => {
      this._router.navigate(['/pets', this.model._id]);
    });
  }

  onNameInput() {
    this.unique = true;
    const name = this.model.name;
    this._pets.all().subscribe(pets => {
      for (const pet of pets as Array<Object>) {
        if (this.model._id !== pet['_id'] && pet['name'].toLowerCase() === name.toLowerCase()) {
          this.unique = false;
        }
      }
    });
  }

}
