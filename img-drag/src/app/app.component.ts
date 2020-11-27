import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'img-drag';
  selectedFile!: string | Blob;
  photos = []
  selectedPhoto = null
  error = undefined;

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  onFileSelected = (event) => {
    this.selectedFile = <File>event.target.files[0];


    const reader = new FileReader()
    reader.addEventListener('load', (e) => {
      // @ts-ignore
      this.photos.unshift(e.target.result);
    })
    reader.readAsDataURL(<Blob>this.selectedFile)

    const formData = new FormData()
    formData.append('file', this.selectedFile)
    this.http.post('http://localhost:3000/photo', formData)
      .subscribe(res => {
        // @ts-ignore
        if (res.error) {
          // @ts-ignore
          this.error = res.error
        } else {
          this.error = undefined
        }


      })
  }

  onUpload = () => {

  }

  async ngOnInit() {
    await this.http.get('http://localhost:3000/photo')
      .subscribe(res => {
          // @ts-ignore
          this.photos = res;
          // this.photos.reverse()
          // console.log(this.photos)
        }
      )
    console.log('hello')
    // console.log(this.photos)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.photos, event.previousIndex, event.currentIndex)
  }

  onClick(item: null) {
    this.selectedPhoto = item;
  }
}
