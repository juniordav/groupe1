import { Component, OnInit } from '@angular/core';
import { CapsuleService } from './services/capsule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spacex';
  capsules: any;

  constructor(private capsuleservice: CapsuleService){}

  ngOnInit(): void {

    this.getAllCapsules();
    
  }

  getAllCapsules(){
      this.capsules = this.capsuleservice.getAllCapsules().subscribe();
      console.log("launches", this.capsules );


  }




}
