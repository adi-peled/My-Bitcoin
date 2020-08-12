import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { HomeComponent } from './pages/home/home.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ChartComponent } from './components/chart/chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailsComponent,
    HomeComponent,
    StatisticComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ContactFilterComponent,
    ChartComponent,
    ContactEditComponent,
    HeaderComponent,
    SignupComponent,
    TransferFundComponent,
    MovesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
