import { Rocket } from "./Rocket";

export class Launch {
    

     flight_number!: number;
     nationality!: string;
     customer!: string;
     land_success! : boolean;
     land_vehicule! : boolean;
     launch_date_local! : Date;
     mission_name! : string;
     rocket! : Rocket;
     
  }