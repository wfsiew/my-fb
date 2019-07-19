import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { TodoService } from './service/todo.service';

const fb = {
  apiKey: 'AIzaSyDSwhzc4fWwTPujDjdtJ1zdxEBsXXy_N5o',
    authDomain: 'todotask-97f36.firebaseapp.com',
      databaseURL: 'https://todotask-97f36.firebaseio.com',
        projectId: 'todotask-97f36',
          storageBucket: 'todotask-97f36.appspot.com',
            messagingSenderId: '936411203688',
              appId: '1:936411203688:web:487e3c872f134640'
}

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
    AngularFirestoreModule,
    AngularFireModule.initializeApp(fb)
  ],
  providers: [
    AngularFirestore,
    TodoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
