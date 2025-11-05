import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  DogResponse, 
  CatResponse, 
  CountriesApiResponse,
  RandomUserResponse, 
  Quote, 
  SpaceXLaunch,
  FakeNews, 
  Joke 
} from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URLS = {
    DOG: 'https://dog.ceo/api/breeds/image/random',
    CAT: 'https://api.thecatapi.com/v1/images/search',
    COUNTRIES: 'https://countriesnow.space/api/v0.1/countries/flag/images',
    RANDOM_USER: 'https://randomuser.me/api/?results=10',
    QUOTES: 'https://dummyjson.com/quotes/random',
    SPACEX: 'https://api.spacexdata.com/v4/launches/latest',
    FAKE_NEWS: 'https://jsonplaceholder.typicode.com/posts',
    JOKES: 'https://official-joke-api.appspot.com/random_ten'
  };

  constructor(private http: HttpClient) { }

  getDogImage(): Observable<DogResponse> {
    return this.http.get<DogResponse>(this.API_URLS.DOG);
  }

  getCatImage(): Observable<CatResponse[]> {
    return this.http.get<CatResponse[]>(this.API_URLS.CAT);
  }

  getCountries(): Observable<CountriesApiResponse> {
    return this.http.get<CountriesApiResponse>(this.API_URLS.COUNTRIES);
  }

  getRandomUsers(): Observable<RandomUserResponse> {
    return this.http.get<RandomUserResponse>(this.API_URLS.RANDOM_USER);
  }

  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.API_URLS.QUOTES);
  }

  getLatestSpaceXLaunch(): Observable<SpaceXLaunch> {
    return this.http.get<SpaceXLaunch>(this.API_URLS.SPACEX);
  }

  getFakePosts(): Observable<FakeNews[]> {
    return this.http.get<FakeNews[]>(this.API_URLS.FAKE_NEWS);
  }

  getRandomJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.API_URLS.JOKES);
  }
}