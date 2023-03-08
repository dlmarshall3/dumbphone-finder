import { Component, OnInit, Input } from '@angular/core';
import { IPhone } from 'src/app/phone-data/IPhone.interface';
import { PhoneService } from 'src/app/services/phone.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {
  public index = 0;
  public phoneData!: any;
  public selectedPhone = {} as IPhone;
  public imagePath = '';

  constructor(private phoneService: PhoneService, private route: ActivatedRoute) { }

  ngOnInit() {
    let allPhones = this.phoneService.getAllPhones;
    this.index = this.phoneService.getSelectedPhoneIndex;
    this.phoneData = allPhones[this.index];
    this.setImagePath();
  }

  private setImagePath() {
    let fileName = this.phoneData.name.replace(/\s/g, "");
    this.imagePath = `assets/images/${fileName}.png`
  }

}
