import { Rocket } from "./Rocket";

 
export class Launch {
    
 
     flight_number!: number;
     launch_date_utc!: Date;
     mission_name! : string;
     rocket! : Rocket;
     launch_site!: any;
     launch_success!: boolean;
     links!: any;
 
     
  }