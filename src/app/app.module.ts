import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ACompComponent } from './a-comp/a-comp.component';
import { BCompComponent } from './b-comp/b-comp.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        ACompComponent,
        BCompComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'a', component: ACompComponent },
            { path: 'b/:name', component: BCompComponent },
            { path: 'b', component: BCompComponent },
            { path: '**', component: NotFoundComponent }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
