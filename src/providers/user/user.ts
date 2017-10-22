import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {
  constructor(public http: HttpClient) {
  }

  createUser(username, password) : boolean {
    // let data = JSON.stringify({username: username, password: password});
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
  	this.http.put('http://localhost:3000/api/user/update', ingredient)
  	.subscribe((data) => {
  		console.log(data);
  	}, (error) => {
  		console.log(error);
  	});
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
