import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/http-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos: any[] = [];
  displayedPhotos: any[] = [];
  totalRecords: number = 0;
  pageSize: number = 5;
  currentPage: number = 0;
  filteredPhotos: any[] = [];
  searchQuery: any;
  datas: any;
  constructor(private http: HttpClient, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.fetchPhotos();
  }


  async fetchPhotos() {
    const postapi = '/photos';
    (await this.ApiService.getApi(postapi)).subscribe((res: any) => {
      if (res) {
        this.photos = res;
        this.totalRecords = res.length;
        this.updateDisplayedPhotos()
      }
    });
  }

  applyFilter() {
    // Filter photos based on the search query
    this.displayedPhotos = this.photos.filter((photo) =>
      photo.id.toString().includes(this.searchQuery)
    );
    this.totalRecords = this.displayedPhotos.length;
    this.displayedPhotos = this.displayedPhotos.slice(0, this.pageSize);
  }

  updateDisplayedPhotos(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedPhotos = this.photos.slice(startIndex, endIndex);
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedPhotos();
  }

}
