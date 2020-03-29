import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class SecurePage implements CanActivate {


    constructor(private router: Router) {

    }
    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            var a =localStorage.getItem('accessToken')
            if (localStorage.getItem('accessToken')) {
                console.log(a);
                return true;
            }
            this.router.navigate(['/login']);
        }
}
