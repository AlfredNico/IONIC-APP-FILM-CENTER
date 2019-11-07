import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;
  public isSearchBarOpened = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged() {
      this.results = this.movieService.searchData(this.searchTerm, this.type);
      //console.log('My reslt: ', this.results);
      
      // this.results.subscribe(res =>{

      // })
  }
  onSearch(event){
    this.searchTerm = event.target.value;
    this.results = this.movieService.searchData(this.searchTerm, this.type);
    console.log("value is :", event.target.value);
    
  }

}
