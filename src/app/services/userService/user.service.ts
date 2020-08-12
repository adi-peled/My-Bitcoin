import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from './user.model';
import { MoveService } from '../moveService/move.service'
import { UtilService } from '../utilService/util.service';

const users = [
  {
    name: "Ochoa Hyde",
    password: '123',
    coins: 6,
    moves: [],
    currency: 'GBP'
  },
  {
    name: "adi",
    password: '222',
    coins: 777,
    moves: [],
    currency: 'USD'
  },
  {
    name: "Ochoa Hyde",
    password: '564',
    coins: 12,
    moves: [],
    currency: 'USD'
  },
  {
    name: "Hallie Mclean",
    password: '123',
    coins: 55,
    moves: [],
    currency: 'USD'
  },
  {
    name: "Parsons Norris",
    password: '978',
    coins: 65,
    moves: [],
    currency: 'GBP'
  },
  {
    name: "Rachel Lowe",
    password: '789',
    coins: 99,
    moves: [],
    currency: 'GBP'
  },
  {
    name: "Dominique Soto",
    password: '789',
    coins: 140,
    moves: [],
    currency: 'USD'
  },
  {
    name: "Shana Pope",
    password: '789',
    coins: 2,
    moves: [],
    currency: 'USD'
  },
  {
    name: "Faulkner Flores",
    password: '789',
    coins: 17,
    moves: [],
    currency: 'USD'
  },
  {
    name: "Holder Bean",
    password: '789',
    coins: 33,
    moves: [],
    currency: 'USD'
  },
  {
    name: "Rosanne Shelton",
    password: '123',
    coins: 77,
    moves: [],
    currency: 'GBP'
  },
  {
    "name": "Pamela Nolan",
    password: '789',
    coins: 234,
    moves: [],
    currency: 'GBP'
  },
  {
    "name": "Roy Cantu",
    password: '546',
    coins: 34,
    moves: [],
    currency: 'GBP'
  },
  {
    "name": "Ollie Christian",
    password: '879',
    coins: 123,
    moves: [],
    currency: 'GBP'
  },
  {
    "name": "Nguyen Walls",
    password: '234',
    coins: 12,
    moves: [],
    currency: 'GBP'
  },
  {

    "name": "Glenna Santana",
    password: '234',
    coins: 24,
    moves: [],
    currency: 'GBP'
  },
  {
    "name": "Malone Clark",
    password: '546',
    coins: 345,
    moves: [],
    currency: 'GBP'
  },
  {
    "name": "Floyd Rutledge",
    password: '456',
    coins: 3,
    moves: [],
    currency: 'GBP'
  },
  {
    name: "Grace James",
    password: '234',
    coins: 77,
    moves: [],
    currency: 'GBP'
  },
  {
    name: "Tanner Gates",
    password: '543',
    coins: 6,
    moves: [],
    currency: 'GBP'
  },
  {
    name: "Lilly Conner",
    password: '654',
    coins: 54,
    moves: [],
    currency: 'GBP'
  }
]


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private moveService: MoveService,
    private utilService: UtilService) { }
  private _users: User[] = users;
  private _users$ = new BehaviorSubject<Array<User>>([])
  public users$ = this._users$.asObservable()
  public loggedinUser: User = this.getLoggedinUser()

  public signup(user) {
    const newUser = new User(user.name, user.password);
    this._users.push(newUser)
    // this._users$.next(this._sort(this._users))
    // this._users$.next(this._users)
    this.utilService.storeToStorage('loggedUser', newUser)
    this.utilService.storeToStorage('users', this._users)
  }

  public getLoggedinUser() {
    return this.utilService.loadFromStorage('loggedUser')
  }


  public logout() {
    this.loggedinUser = null
    this.utilService.storeToStorage('loggedUser', null)
  }

  public login(user) {
    var loggedUser = this._users.find(_user => _user.name === user.name)
    if (!loggedUser) return
    if (loggedUser.password === user.password) {
      this.utilService.storeToStorage('loggedUser', loggedUser)
    }
  }

  public transferFunds(transfer, contact) {
    const user = this.getUserByContact(contact)
    console.log('users:', user);
    if (this.loggedinUser.coins >= transfer.amount) {
      this.loggedinUser.coins -= transfer.amount
      user.coins += transfer.amount
      this.moveService.saveMove(this.loggedinUser.name, user.name, transfer.amount)
      this._updateUser(this.loggedinUser)
      this.utilService.storeToStorage('loggedUser', this.loggedinUser)
      this.utilService.storeToStorage('users', this._users)
    } else {
      console.log('u dont have enoght amount');
    }
  }

  private _updateUser(currUser) {
    const idx = this._users.findIndex(user => user.name === currUser.name)
    this._users.splice(idx, 1, currUser)
  }

  private getUserByContact(contact) {
    return this._users.find(user => user.name === contact.name)
  }



}


// private _sort(users: User[]): User[] {
//   return contacts.sort((a, b) => {
//     if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
//       return -1;
//     }
//     if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
//       return 1;
//     }
//     return 0;
//   })
// }




