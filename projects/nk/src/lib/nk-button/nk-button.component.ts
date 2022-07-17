import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nk-button',
  templateUrl: './nk-button.component.html',
  styleUrls: ['./nk-button.component.scss']
})
export class NkButtonComponent implements OnInit {

  @Input() label!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
