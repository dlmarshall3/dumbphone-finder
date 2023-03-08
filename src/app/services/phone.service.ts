import { Injectable } from '@angular/core';

import { IPhone } from '../phone-data/IPhone.interface';
import { PhoneList } from '../phone-data/phones';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  public allPhones: IPhone[] = PhoneList;
  public selectedPhones: IPhone[] = [];
  private selectedPhoneIndex = 0;

  constructor() { }

  public get getAllPhones(): IPhone[] {
    return this.allPhones;
  }

  public get returnSelectedPhones(): IPhone {
    return this.allPhones[0];
  }

  public get getSelectedPhoneIndex(): number {
    return this.selectedPhoneIndex;
  }

  public set setSelectedPhoneIndex(index: number){
    this.selectedPhoneIndex = index;
  }

}
