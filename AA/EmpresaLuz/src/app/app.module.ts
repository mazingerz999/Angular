import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ContenidoHideComponent } from './contenido-hide/contenido-hide.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [							
    AppComponent,
      HeaderComponent,
      FooterComponent,
      ContenidoComponent,
      ContenidoHideComponent
   ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
