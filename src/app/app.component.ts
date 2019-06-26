import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  fileList : any = [];

  onFilesAdded(files: File[]) {
    console.log(files);

    files.forEach(file => {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent) => {
        const content = (e.target as FileReader).result;

        // this content string could be used directly as an image source
        // or be uploaded to a webserver via HTTP request.
        console.log(content);
      };

      // use this for basic text files like .txt or .csv
      //reader.readAsText(file);

      // use this for images
      reader.readAsDataURL(file);
      this.fileList.push(file);
    });
  }

  onFilesRejected(files: File[]) {
    console.log(files);
  }
}
