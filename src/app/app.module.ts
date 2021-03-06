/**
 * Angular
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
const isProduction: boolean = true;

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    REDDIT_PROVIDERS,
    VOTE_PROVIDERS,
    {
      provide: API_URL, 
      useValue: isProduction ? 
        "https://redditlike.herokuapp.com":
        "http://localhost:8080"
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
