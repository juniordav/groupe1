import { Component, Input, OnInit } from '@angular/core';
import { Capsule } from '../../../models/capsule.model';

@Component({
  selector: 'app-capsule-detail',
  templateUrl: './capsule-detail.component.html',
  styleUrls: ['./capsule-detail.component.scss']
})
export class CapsuleDetailComponent implements OnInit {
  // Inject datas of to the component
  @Input() capsule!: Capsule;
  
  constructor() { }

  ngOnInit(): void {
  }

}
