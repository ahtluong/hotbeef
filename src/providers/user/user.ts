import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {
  constructor(public http: Http) {
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

}
