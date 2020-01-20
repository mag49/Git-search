import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProfileService {
  public username:string;
  public clientid="af59a886926a3c41b772";
  public clientsecret="a345424c81e1eee3ffc3b2509fc644a0736f5e8c";
  constructor(private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'mag49';
  }
 getProfileInfo(){ 
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
  getProfileRepos(){ 
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }


updateProfile(username: string){
  this.username = username;
}

}
