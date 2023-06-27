import { Observable } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUser } from 'src/app/interfaces/user';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser={id:0, name:"", username:"",email:""};
   // Одна з можливостей - зробити поле user необов'язковим у типі IUser, за допомогою оператора ?:

  constructor(
    private route: ActivatedRoute,
    private   apiService : ApiService ) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
  const idParam = this.route.snapshot.paramMap.get('id');
  const userId = idParam ? +idParam : 0;

  if (userId === 0) {
    console.log('userId = 0');
  } else {
    this.apiService.getUserById(userId).subscribe({
      next: (user: IUser) => {
        this.user = user;
      },
      error: (error: any) => {
        console.log('Помилка при отриманні користувача:', error);
        // Додайте необхідну обробку помилки тут
      }
    });
  }
}

  // loadUser(): void {
  //   const idParam = this.route.snapshot.paramMap.get('id');
  //   const userId = idParam ? +idParam : 0;

  //   if (userId === 0) {
  //     console.log('userId = 0');
  //   } else {
  //     this.apiService.getUserById(userId).subscribe(
  //       user => {
  //         this.user = user;
  //       },
  //       error => {
  //         console.log('Помилка при отриманні користувача:', error);
  //         // Додайте необхідну обробку помилки тут
  //       }
  //     );
  //   }
  // }

  }

  //  loadUser(): void {
  //   const idParam = this.route.snapshot.paramMap.get('id');
  //   const userId = idParam ? +idParam : 0;

  //   if (userId === 0) {
  //     console.log('userId = 0');
  //   } else {
  //     const observer: Observable<IUser> = {
  //       next: (user: IUser) => {
  //         this.user = user;
  //       },
  //       error: (error: any) => {
  //         console.log('Помилка при отриманні користувача:', error);
  //         // Додайте необхідну обробку помилки тут
  //       },
  //       complete: () => {
  //         // Обробка завершення
  //       }
  //     };

  //     this.apiService.getUserById(userId).subscribe(observer);
  //   }
  // }
