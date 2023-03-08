import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-phone-card',
  templateUrl: './phone-card.component.html',
  styleUrls: ['./phone-card.component.scss'],
})
export class PhoneCardComponent implements OnInit {
  @Input() phoneName = '';
  @Input() phoneCategory = '';
  @Input() imagePath = '';
  @Input() index = 0;

  public starIcon = 'star-outline';
  public starIconFlag!: boolean;

  constructor(private phoneService: PhoneService, private router: Router) { }

  ngOnInit() {
    console.log(this.index, 'this is an index');
  }

  public onClick(){
    this.starIconFlag = !this.starIconFlag;
    this.starIconFlag ? this.starIcon = 'star' : this.starIcon = 'star-outline';
  }

  public onMoreInfoClick(index: number){
    this.phoneService.setSelectedPhoneIndex = index;
    this.router.navigate([`phone/${index}`]);
  }

}
