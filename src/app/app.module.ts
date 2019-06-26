import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppComponent } from './app.component';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxDropzoneModule ],
  declarations: [ AppComponent, FileSizePipe ],
  bootstrap:    [ AppComponent ],
  exports: [FileSizePipe]
})
export class AppModule { }
