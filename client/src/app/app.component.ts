import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  obs: Observable<Object>;
    constructor(private http: HttpClient) {}

    ngOnInit(): void {}
    visuaLista():void {
      this.obs=this.http.get('https://3000-bfa47f7e-6766-43fa-adf9-15fa06db4a54.ws-eu01.gitpod.io/api/products');
      this.obs.subscribe(this.getData)

    }

    getData = data =>{
      this.results = data['products'];
    }

}
