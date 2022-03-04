import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Launch } from 'src/app/models/Launch';
import { LaunchService } from 'src/app/services/launch_service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {

  launches!: Launch[];
  urlDetail = '/launch-list/launch-detail'
  
  constructor(private launchService: LaunchService, private router: Router) { }

  ngOnInit(): void {
   
    this.getAllLaunches();
    

  }

  async getAllLaunches() {

    await this.launchService.getAllLaunches().subscribe(
      data => this.launches = data
    )


  }


  detail(id: number){
    this.router.navigate([this.urlDetail , id  ]);

  }

  
  

}