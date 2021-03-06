import {Injectable} from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { MemberEditComponent } from "../members/member-edit/member-edit.component";

@Injectable()
export class PreventChanges implements CanDeactivate<MemberEditComponent> {
    canDeactivate(component: MemberEditComponent) {
        if(component.editFormId.dirty) {
            return confirm("Are you sure want to continue? Any unsaved changes will be lost!!");
        }
        return true;
    }
}
