import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatNavList, MatListModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatDialogModule, MatSelectModule, MatSliderModule, MatBottomSheetModule, MatCardModule} from '@angular/material';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchPageComponent, filterComponent, sortlist } from './search-page/search-page.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    filterComponent,
    sortlist,
    SearchPipe
  ],
  entryComponents:[
    filterComponent,
    sortlist
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    FlexLayoutModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatSliderModule,
    MatBottomSheetModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
