import { Component } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactDetails: any[] = [];

  constructor(private dataService: DataServiceService) {
    this.contactDetails = this.dataService.getContactDetails();
  }
}
