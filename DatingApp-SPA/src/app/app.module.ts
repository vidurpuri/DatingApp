import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_services/Auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { AlertifyService } from "./_services/alertify.service";
import { BsDropdownModule, TabsModule } from "ngx-bootstrap";
import { MemberListsComponent } from "./members/member-lists/member-lists.component";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { AuthGuard } from "./_guards/auth.guard";
import { UserService } from "./_services/User.service";
import { MemberCardComponent } from "./members/member-card/member-card.component";
import { JwtModule } from "@auth0/angular-jwt";
import { MembersDetailComponent } from "./members/members-detail/members-detail.component";
import { MemberDetailResolver } from "./_resolvers/member-details.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { NgxGalleryModule } from "ngx-gallery";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListsComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MembersDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxGalleryModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: ["localhost:5000/api/auth"]
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
