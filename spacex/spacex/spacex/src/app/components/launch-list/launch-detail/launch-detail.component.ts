import { Component, OnInit } from '@angular/core';
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

  launch! : Launch;

  constructor(private route : ActivatedRoute, private launchService : LaunchService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.launch = this.getOneLaunch(id);


  }


  getOneLaunch(id : number) : Launch {
    let oneLaunch! : Launch ;
    this.launchService.getOneLaunch(id).subscribe(
      data => oneLaunch = data
    );
    console.log("getOneLaunch", oneLaunch);

    return oneLaunch;

    

  }

}
