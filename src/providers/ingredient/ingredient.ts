import { Injectable } from '@angular/core' ;
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientProvider {

  // apiUrl: string = 'https://limitless-cliffs-56066.herokuapp.com/api';
  apiUrl: string = 'http://localhost:3000/api';

  constructor(public http: HttpClient) {
  }

  getIngredientList() {
    let url = this.apiUrl + '/user/all_ingredient_list';
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
