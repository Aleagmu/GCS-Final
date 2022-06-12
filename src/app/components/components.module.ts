import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TopComponent } from "./top/top.component";

@NgModule({
    declarations:[
        TopComponent
    ],
    exports: [
        TopComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})

export class ComponentsModule {}