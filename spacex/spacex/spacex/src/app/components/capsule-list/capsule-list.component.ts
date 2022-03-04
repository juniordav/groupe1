import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capsule } from 'src/app/models/Capsule';
import { CapsuleService } from 'src/app/services/capsule.service';
import { CapsuleDetailComponent } from './capsule-detail/capsule-detail.component';

@Component({
  selector: 'app-capsule-list',
  templateUrl: './capsule-list.component.html',
  styleUrls: ['./capsule-list.component.scss']
})
export class CapsuleListComponent implements OnInit {

  capsules!: Capsule[];
  constructor(private router: Router, private capsuleservice: CapsuleService) { }

  ngOnInit(): void {

    this.getAllCapsules();
  }

  async getAllCapsules() {

    await this.capsuleservice.getAllCapsules().subscribe(
      data => this.capsules = data
     
    )
    console.log(this.capsules);

  }


  

}