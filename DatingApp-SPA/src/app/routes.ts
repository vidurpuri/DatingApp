import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MemberListsComponent } from "./members/member-lists/member-lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListsComponent } from "./lists/lists.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MembersDetailComponent } from "./members/members-detail/members-detail.component";
import { MemberDetailResolver } from "./_resolvers/member-details.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { PreventChanges } from "./_guards/prevent-changes.guard";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      {
        path: "members",
        component: MemberListsComponent,
        resolve: { users: MemberListResolver }
      },
      {
        path: "members/:id",
        component: MembersDetailComponent,
        resolve: { user: MemberDetailResolver }
      },
      {
        path: "member/edit",
        component: MemberEditComponent,
        canDeactivate: [PreventChanges],
        resolve: { user: MemberEditResolver }
      },
      { path: "messages", component: MessagesComponent },
      { path: "list", component: ListsComponent }
    ]
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
