import { Injectable } from '@angular/core' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  apiUrl: string = 'https://limitless-cliffs-56066.herokuapp.com/api';
  // apiUrl: string = 'http://localhost:3000/api';
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
        ingredient: ingredient,
        username: 'sasha'
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
      this.http.get(url, {headers: new HttpHeaders().set('username', username)}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUserInventory(username) {
    let url = this.apiUrl + '/api/user/inventory';
    console.log(username);
    return new Promise(resolve => {
      this.http.get(url, 
        {headers: new HttpHeaders().set('username', username)})
        .subscribe(data => {
          resolve(data[0].inventory);
        })
    })
  }

}
