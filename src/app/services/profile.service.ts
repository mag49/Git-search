import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  private username:string;
  private clientid="";
  private clientsecret="";
  constructor(private http:Http) { 
    console.log("service is now ready!");
    this.username = 'mag49';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
}
