import { Component, OnInit } from '@angular/core';
import { Capsule } from './models/Capsule';
import { Launch } from './models/Launch';
import { CapsuleService } from './services/capsule.service';
import { LaunchService } from './services/launch_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spacex';
  capsules!: Capsule[];
  launches!: Launch[];

  constructor(private capsuleservice: CapsuleService, private launchService: LaunchService) { }

  ngOnInit(): void {

   

  }


}
