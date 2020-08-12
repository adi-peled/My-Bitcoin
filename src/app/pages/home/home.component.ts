import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service'
import { BitcoinService } from '../../services/bitcoinService/bitcoin.service'
import { UtilService } from 'src/app/services/utilService/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value: number;
  rate: number;
  constructor(
    private userService: UserService,
    private utilService: UtilService,
    private bitcoinService: BitcoinService) { }

  get loggedinUser() {
    return this.userService.getLoggedinUser()
  }


  get moves() {
    const allMoves = this.utilService.loadFromStorage('moves')
    if (!allMoves) return
    const userMoves = allMoves.filter(move => move.from === this.loggedinUser.name)
    const sortedMoves = userMoves.sort((moveA, moveB) => (moveA.at < moveB.at) ? 1 : -1)
    return sortedMoves.slice(0, 4)
  }

  ngOnInit(): void {
    if (this.loggedinUser) {
      this.bitcoinService.getRate(this.loggedinUser.currency).subscribe((data: number) => {
        this.value = this.loggedinUser.coins / data
        this.rate = 1 / data
      })
    }
    
  }

}
