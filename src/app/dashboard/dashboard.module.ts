import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {CoreModule} from "../core/core.module";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CoreModule,
        RouterModule.forChild([
            {path: '', component: DashboardComponent}
        ])
    ]
})
export class DashboardModule {
}
