import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import StorageHelper from '../libs/helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  
  login(username: string, password:string): Observable<any>{
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/login',{
      username,
      password
    })
  }

  searchPokemon(name: string){
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/mirror/pokemon',{
      endpoint: "pokemon/"+name
    })

    // return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name,{
    //   headers: {
    //     Authorization: 'bearer'+localStorage.getItem('session')
    //   }
    // })

    // return this.http.get('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/check',{
    //   headers: {
    //     Authorization: 'bearer fdkhfs'+this.getToken
    //   }
    // })

  }

  // checkStatus(): Observable<any>{
  //   return this.http.get('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/check',{
  //       headers: {
  //         Authorization: 'Bearer '+this.getSession('token')
  //       }
  //   })
  // }

  // getSession(option: string){
  //   let session: any = JSON.parse(localStorage.getItem('session')!)
  //   if(option === 'username') return session.username;
  //   return session.token
  // }

  refreshToken(){
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/refresh',{
      session: StorageHelper.getItem('session')
    })
  }
}
