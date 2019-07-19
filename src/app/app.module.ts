import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
// import { AngularFirestore } from '@angular/fire/firestore';
import { TodoService } from './service/todo.service';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    // AngularFirestore,
    TodoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
