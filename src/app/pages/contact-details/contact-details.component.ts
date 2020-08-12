import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContactService } from '../../services/contactService/contact.service'
import { UserService } from 'src/app/services/userService/user.service';
import { UtilService } from 'src/app/services/utilService/util.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router,
    private userService: UserService,
    private utilService: UtilService
  ) { }

  id = this.route.snapshot.params.id
  currContact = null

  get moves() {

    const allMoves = this.utilService.loadFromStorage('moves')
    if (!allMoves) return
    return allMoves.filter(move => move.to === this.currContact.name)
  }



  loadContact() {
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    const id = this.route.snapshot.params.id;
    this.contactService.getContactById(id)
      .subscribe(contact => this.currContact = contact);
  }

  transferFunds(transfer) {
    this.userService.transferFunds(transfer, this.currContact)
  }

  ngOnInit(): void {
    this.loadContact()
  }

}
