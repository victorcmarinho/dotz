import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() image: string = 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsbCUyMHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  @Input() name: string = 'Phone'
  @Input() price: string = '1000'
  @Input() isSelect: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
