import {Component, Input, OnInit} from '@angular/core';
import {User} from './user';
import {timer} from 'rxjs';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.min.css']
})

export class AppComponent implements OnInit {

  constructor(private data: UserService) {
  }

  title = 'UserApp';

  users: User[];

  @Input() user: User;

  ngOnInit() {
    timer(0, 2500 ).subscribe(() => {
      this.data.getUsers()
        .subscribe(data => this.users = data);
    });
  }

  onSelect(user: User): void {
    console.log('selecting ' + user.firstname);
    this.user = user;
  }

  onUpdate(user: User): void {
    this.data.updateUser(user);
  }
}
