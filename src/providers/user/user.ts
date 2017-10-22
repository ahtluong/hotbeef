import { Injectable } from '@angular/core' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  apiUrl: string = 'http://localhost:3000/api';

  constructor(public http: HttpClient) {
  }

  createUser(username, password) : boolean {
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
    // console.log(ingredient);
    let url = this.apiUrl + '/user/select_ingredient';
    return new Promise((resolve, reject) => {
      this.http.put(url, {
        ingredient: ingredient,
        username: 'sasha'
      }).subscribe(data => {
        console.log(data);
        resolve(data);
      }, err => {
        console.log(err);  
        reject(err);
      });
    });
  }

  fetchPotentialMatch() {
    let url = this.apiUrl + '/user/select_ingredient';
  }

  getUserPortion(username) {
    let url = 'http://localhost:3000/api/user/portion';

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
    let url = 'http://localhost:3000/api/user/inventory';
    return new Promise(resolve => {
      this.http.get(url, 
        {headers: new HttpHeaders().set('username', username)})
        .subscribe(data => {
          resolve(data[0].inventory);
        })
    })
  }

}
