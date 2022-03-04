import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { Launch } from 'src/app/models/Launch';
import { LaunchService } from 'src/app/services/launch_service';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss']
})
export class LaunchDetailComponent implements OnInit {


  @Input() launch! : Launch;

  constructor(private route : ActivatedRoute, private launchService : LaunchService) { }

  ngOnInit(): void {



  }


}
