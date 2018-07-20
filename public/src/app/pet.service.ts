import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private _http: HttpClient) {}

  all() {
    return this._http.get('/api/pets');
  }

  get(id) {
    return this._http.get(`/api/pets/${id}`);
  }

  create(pet) {
    return this._http.post('/api/pets', pet);
  }

  delete(id) {
    return this._http.delete(`/api/pets/${id}`);
  }

  update(id, pet) {
    return this._http.put(`/api/pets/${id}`, pet);
  }
}
