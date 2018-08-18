import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { BuildingService } from '../../services/building.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [UserService, BuildingService]
})
export class DashboardComponent {
    building : any;
    persons : any = [];
    showImages = false;
    selectedRoom : any = {}
    selectedPersons : any = [];

    constructor(private route: ActivatedRoute,
        private router: Router,
        vcRef: ViewContainerRef,
        private buildingService : BuildingService) {
    }
    ngOnInit(){
        this.getBuilding();
    }

    getBuilding() {
        this.buildingService.getBuilding()
            .subscribe(
            result => {
                this.building = result.building;
                this.persons = result.persons || [];
            },
            error => {
                console.log(error);
            });
    }

    getPersons(n : number){
        return this.persons.filter(x => x.number === n).length;
    }
    showPersons(n : number){
        this.selectedPersons = this.persons.filter(x => x.number === n);
        this.showImages = true;
    }
}
