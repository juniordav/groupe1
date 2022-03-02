import { Component, OnInit } from '@angular/core';
import { Capsule } from '../../models/capsule.model';

@Component({
  selector: 'app-capsule-list',
  templateUrl: './capsule-list.component.html',
  styleUrls: ['./capsule-list.component.scss']
})
export class CapsuleListComponent implements OnInit {
  
  capsules!: Capsule[];

  constructor() { }

  ngOnInit(): void {
  }

}
