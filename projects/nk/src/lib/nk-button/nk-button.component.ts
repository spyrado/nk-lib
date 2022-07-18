import { Component, Input, OnInit } from '@angular/core';
import { ButtonSizeEnum } from './shared/enums/nk-button.enum';
import { ButtonSizeType } from './shared/types/nk-button.type';

@Component({
  selector: 'nk-button',
  templateUrl: './nk-button.component.html',
  styleUrls: ['./nk-button.component.scss']
})
export class NkButtonComponent implements OnInit {

  @Input() label!: string;
  @Input() type!: string;
  @Input() size: ButtonSizeEnum | ButtonSizeType = ButtonSizeEnum.MEDIUM;

  ButtonSizeEnum = ButtonSizeEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
