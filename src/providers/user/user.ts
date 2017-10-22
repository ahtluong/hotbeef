import { Injectable } from '@angular/core' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  // apiUrl: string = 'https://limitless-cliffs-56066.herokuapp.com/api';
  apiUrl: string = 'http://localhost:3000/api';
  data: any;

  constructor(public http: HttpClient) {
  }

  createUser(username, password): boolean {
    let data = {
      username: username,
      password: password
    }
    
    this.http.post('http://localhost:3000/api/auth/register', data)
    .subscribe((data) => {
        return true;
    }, (error) => {
        return error;
    });
    return false;
  }

  updateUserIngredient(ingredient) {
    let url = this.apiUrl + '/user/select_ingredient';
    return new Promise((resolve, reject) => {
      this.http.put(url, {
        ingredient: ingredient
      }, {headers: new HttpHeaders().set('username', 'sasha')}).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  fetchPotentialMatch() {
    let url = this.apiUrl + '/user/nearby';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(data => {
        let i;
        this.data = data;
        if (this.data.length)
          i = Math.floor(Math.random() * this.data.length);
        else i = 0;
        resolve(data[i]);
      }, err => {
        reject(err);
      });
    });
  }

  getUserPortion(username) {
    let url = this.apiUrl + '/user/portion/';
    return new Promise(resolve => {
      this.http.get(url, {headers: new HttpHeaders().set('username', username)})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUserInventory(username) {
    let url = this.apiUrl + '/user/inventory';
    return new Promise(resolve => {
      this.http.get(url, 
        {headers: new HttpHeaders().set('username', username)})
        .subscribe(data => {
          var dishes = [];
          console.log(data);
          // resolve(data[0].inventory);
          for (var obj in data) {
            var dish = {}
            dish['name'] = data[obj].dish_name;
            var count = 0;
            var ingredients = data[obj].ingredients;
    
            // for each ingredient in the dish
            for (var item in ingredients) {
              if (ingredients[item].acquired == true) {
                count += 1;
              }
            }
            // calculate the percentage
            var percentage = ((count * 1.0) / (ingredients.length * 1.0)) * 100
            // this.dishPercentages.push(percentage);
            dish['amount'] = percentage;
            dishes.push(dish);
          }
          console.log(dishes);
          resolve(dishes);
        }, err => {
          console.log(err);
        });
    });
  }

}
