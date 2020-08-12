import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {


  @Input() currContact;
  @Output() onTransfer = new EventEmitter;

  transfer = {
    amount: ''
  }
  constructor() { }

  transferFunds() {
    this.onTransfer.emit(this.transfer)
  }

  ngOnInit(): void {
  }

}
