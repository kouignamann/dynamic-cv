import {ModuleWithProviders, NgModule} from "@angular/core";
import {DataService} from "./service/data.service";
import {CommonModule} from "@angular/common";

@NgModule({
    exports: [
        CommonModule
    ]
})
export class CoreModule {

    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                DataService
            ]
        };
    }
}
