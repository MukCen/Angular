import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: IUser = { id: 0, name: '', username: '', email: '' };
  isEdit: boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.isEdit = true;
      this.apiService.getUserById(+userId).subscribe(user => {
        this.user = user;
      });
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.apiService.updateUser(this.user.id, this.user).subscribe(() => {
        this.router.navigate(['/users', this.user.id]);
      });
    } else {
      this.apiService.createUser(this.user).subscribe(user => {
        this.router.navigate(['/users', user.id]);
      });
    }
  }

cancel() {
  if (this.isEdit) {
    this.router.navigate(['/users', this.user.id]);
  } else {
    this.router.navigate(['/users']);
  }
}

}
