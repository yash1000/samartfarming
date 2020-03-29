import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private router: Router) {

    }
    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            console.log(localStorage.getItem('accessToken'));
            if (localStorage.getItem('accessToken')) {
                this.router.navigate(['/dash-board']);
            }
            return true;
    }

}
