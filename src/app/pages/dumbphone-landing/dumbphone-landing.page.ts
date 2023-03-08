import { Component, OnInit } from '@angular/core';
import { PhoneService } from 'src/app/services/phone.service';
import { IPhone } from 'src/app/phone-data/IPhone.interface';

@Component({
  selector: 'app-dumbphone-landing',
  templateUrl: './dumbphone-landing.page.html',
  styleUrls: ['./dumbphone-landing.page.scss'],
})
export class DumbphoneLandingPage implements OnInit {
  public phoneData = [] as IPhone[];

  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.phoneData = this.phoneService.getAllPhones;
  }

  public generateImagePath(phone: string): string {
    let fileName = phone.replace(/\s/g, "");
    return `assets/images/${fileName}.png`
  }

}
