import { Injectable } from '@angular/core';
import { Move } from './move.model';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { UtilService } from '../utilService/util.service';

const moves = []

@Injectable({
  providedIn: 'root'
})

export class MoveService {

  constructor(private utilService: UtilService) { }

  private _moves: Move[] = this.getMoves()
  private _moves$ = new BehaviorSubject<Array<Move>>([])
  public moves$ = this._moves$.asObservable()

  public saveMove(from, to, amount) {
    const at = Date.now()
    const newMove = new Move(from, to, at, amount);
    this._moves.push(newMove)
    // this._moves$.next(this._moves)
    console.log('moves:', this._moves);

    this.utilService.storeToStorage('moves', this._moves)
  }

  public getMoves() {
    return this.utilService.loadFromStorage('moves')
  }
}
