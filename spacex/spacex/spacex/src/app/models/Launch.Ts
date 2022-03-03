export class Launch {
    constructor(
     public rocket_id: string,
     public rocket_name: string,
     public rocket_type : string,
     public nationality: string,
     public customer: string,
     public land_success : boolean,
     public land_vehicule : boolean,
     public launch_date_local : Date
     
    ) { }
  }