import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/models/Launch';
import { LaunchService } from 'src/app/services/launch_service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {

  launches!: Launch[];
  constructor(private launchService: LaunchService) { }

  ngOnInit(): void {
  }

  getAllLaunches() {

    this.launchService.getAllLaunches().subscribe(
      data => this.launches = data
    )

    console.log("launches", this.launches);

  }

}
