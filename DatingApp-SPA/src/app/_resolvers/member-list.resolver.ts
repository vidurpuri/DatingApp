import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/User.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers().pipe(
      catchError(error => {
        this.alertify.error("Problem in retreiving data");
        this.route.navigate(["/home"]);
        return of(null);
      })
    );
  }
}
