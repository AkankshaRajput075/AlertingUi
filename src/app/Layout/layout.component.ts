import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent {

  top: number;
  left: number;
  bottom: number;
  alignment: string;
  bottomStart: number;

  public constructor(private configService: ConfigService) {

    this.top = this.configService.numberOfBedsInTopRow;
    this.left = this.configService.numberOfBedsInLeftSide;
    this.bottom = this.configService.numberOfBedsInLastRow;
    this.bottomStart = this.top + this.left;
  }

}
