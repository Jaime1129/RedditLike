/**
 * Angular
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { TopicComponent } from './components/topic.component';

/**
 * Services
 */
import {REDDIT_PROVIDERS, API_URL} from './services/RedditService';
import {VOTE_PROVIDERS} from './services/VoteService';

/**
 * Value of url is determined by whether it's under production environment
 */
const isProduction: boolean = false;

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    REDDIT_PROVIDERS,
    VOTE_PROVIDERS,
    {
      provide: API_URL, 
      useValue: isProduction ? 
        "https://" :
        "https://localhost:4200"
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
