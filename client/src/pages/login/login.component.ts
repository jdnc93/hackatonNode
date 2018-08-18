import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserService]
})
export class LoginComponent {
    newUser: any = {};
    loading = false;

    constructor(private route: ActivatedRoute,
        private router: Router,
        vcRef: ViewContainerRef,
        private userService : UserService) {
    }

    login(newUser) {
        this.userService.login(newUser)
            .subscribe(
            result => {
                if(result){
                    this.router.navigateByUrl('/dashboard');
                }
            },
            error => {
                console.log(error);
            });
    }
}
