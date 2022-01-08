import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDescriptionComponent } from './quote-description/quote-description.component';
import { ListQuoteComponent } from './list-quote/list-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteDescriptionComponent,
    ListQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
