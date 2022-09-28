import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile.component";
import {RouterModule} from "@angular/router";
import {CoreModule} from "../core/core.module";

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CoreModule,
        RouterModule.forChild([
            {path: '', component: ProfileComponent}
        ])
    ]
})
export class ProfileModule {
}
