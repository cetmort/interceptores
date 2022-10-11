import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import StorageHelper from '../../libs/helpers/storage.helper';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  public username: string = ''
  public password: string = ''

  constructor(public apiService: ApiService, private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
  }
  
  onClick(){  
    this.apiService.login(this.username,this.password).subscribe({next:(resp) =>{ 
      StorageHelper.setItem('session',resp)  
      this.router.navigate(['search'])
    }})
  }
}
