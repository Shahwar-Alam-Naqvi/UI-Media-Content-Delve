import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedular-setting',
  templateUrl: './schedular-setting.component.html',
  styleUrls: ['./schedular-setting.component.less']
})
export class SchedularSettingComponent implements OnInit {
  mode:any = "auto";
  period:any = "daily";
  hour:any = "06"
  minute:any = "00"
  today = new Date();
  publishedTime = new Date(this.today.getTime()-3238832);
  constructor() { }

  ngOnInit(): void {
  }

}
