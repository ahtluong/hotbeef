import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IngredientProvider {
  constructor(public http: Http) {
  }

  getIngredientList() {
    this.http.get('http://localhost:3000/api/user/all_ingredient_list')
      .toPromise()
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
  }
}
