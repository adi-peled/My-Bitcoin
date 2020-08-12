import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContactService } from '../../services/contactService/contact.service'
import { Contact } from 'src/app/services/contactService/contact.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact: Contact;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService) { }

  saveContact(contact) {
    this.contactService.saveContact(contact)
    this.router.navigate(['/contact']);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.contactService.getContactById(id)
        .subscribe(contact => this.contact = contact);
    } else {
      this.contact = new Contact
    }
  }

}
