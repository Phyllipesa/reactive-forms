import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
        HttpClientModule,
        AngularMaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
