import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  constructor() { }
  @Output() onFilter = new EventEmitter();

  setFilter(ev) {
    let filterBy = {
      term: ev.target.value
    }
    this.onFilter.emit(filterBy)
  }

  ngOnInit(): void {
  }

}
