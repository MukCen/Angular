
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: IUser[] = [];
  constructor (private  apiservice : ApiService){}
ngOnInit(): void {
  this.getUsers();
    }
  getUsers(): void{
    this.apiservice.getAllUsers().subscribe(users => { this.users = users; });
  }
  deleteUser(id:number): void{
    this.apiservice.deleteUser(id).subscribe(() => { this.getUsers(); })
  }

  }

