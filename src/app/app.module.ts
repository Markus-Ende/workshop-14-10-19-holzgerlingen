import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AboutModule, HttpClientModule],
  providers: [
    // {
    //   provide: BookDataService,
    //   useValue: { getBooks: () => [{ title: 'TITLE' }] }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
