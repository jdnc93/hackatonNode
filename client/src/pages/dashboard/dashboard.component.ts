import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [UserService]
})
export class DashboardComponent {
    newUser: any = {};
    loading = false;

    constructor(private route: ActivatedRoute,
        private router: Router,
        vcRef: ViewContainerRef,
        private userService : UserService) {
    }
}
