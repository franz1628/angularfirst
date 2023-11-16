import { Injectable } from "@angular/core";
import { Design } from "../interfaces/design.interface";

@Injectable({
    providedIn: 'root'
})
export class DesignService {
    public designs: Design[] = [{
        id: 1,
        description: 'design 1',
        state: 1,
        created_at: new Date()
    }]

    public add(design:Design):void{
        this.designs.push({
            id:this.designs.length+1,
            description:design.description,
            state:design.state,
            created_at:design.created_at
        })
    }

    public delete(id:number):void{
        console.log(id);
        
        this.designs = this.designs.filter(x=>x.id!=id)
    }

}