import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };
  
  

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  postUser(user: User){
    return this.http.post('http://localhost:3000/api'+'/register',user,this.noAuthHeader);
  }

  postTutorial(user: User){
    return this.http.post('http://localhost:3000/api'+'/register',user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post('http://localhost:3000/api' + '/authenticate', authCredentials,this.noAuthHeader);
  }

  Admin(authCredential){
    return this.http.post('http://localhost:3000/api' + '/authenticateAdmin', authCredential,this.noAuthHeader);
 
  }
  getUserProfile() {
    return this.http.get('http://localhost:3000/api' + '/userProfile');
  }

  getAdminProfile(){
    return this.http.get('http://localhost:3000/api'+'/adminProfile');
  }

  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
