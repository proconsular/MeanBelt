import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {
  model = {name: '', type: '', description: '', likes: 0, skills: []};
  unique = true;

  constructor(private _pets: PetService, private _router: Router) { }

  ngOnInit() {
    this.model.skills.push({name: ''});
    this.model.skills.push({name: ''});
    this.model.skills.push({name: ''});
  }

  onSubmit() {
    const ss = this.model.skills;
    for (let i = ss.length - 1; i >= 0; i--) {
      if (!ss[i].name) {
        ss.splice(i, 1);
      }
    }
    this.model.skills = ss;
    this._pets.create(this.model).subscribe(data => {
      if ('errors' in data) {
        
      } else {
        this._router.navigate(['/']);
      }
    });
  }

  onNameInput() {
    this.unique = true;
    const name = this.model.name;
    this._pets.all().subscribe(pets => {
      for (const pet of pets as Array<Object>) {
        if (pet['name'].toLowerCase() === name.toLowerCase()) {
          this.unique = false;
        }
      }
    });
  }

}
