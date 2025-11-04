import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { 
  Tab, 
  DogResponse, 
  RandomUser, 
  Country, 
  Quote, 
  Planet, 
  FakeNews, 
  Joke 
} from '../../models/api.model';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.css']
})
export class TabsComponent implements OnInit {
  constructor(private http: HttpClient) { }

  tabs: Tab[] = [
    { id: 'api1', label: 'Perros', active: true },
    { id: 'api2', label: 'Gatos', active: false },
    { id: 'api3', label: 'Paises', active: false },
    { id: 'api4', label: 'Usuarios', active: false },
    { id: 'api5', label: 'Frases', active: false },
    { id: 'api6', label: 'Planetas', active: false },
    { id: 'api7', label: 'Noticias', active: false },
    { id: 'api8', label: 'Chistes', active: false }
  ];

  activeTabId: string = 'api1';
  loading: boolean = false;

  dashboardData: DogResponse[] = [];
  postsData: any[] = [];
  videosData: Country[] = [];
  contactsData: RandomUser[] = [];
  weatherData: Quote[] = [];
  newsData: Planet[] = [];
  usersData: FakeNews[] = [];
  productsData: Joke[] = [];

  ngOnInit(): void {
    this.loadDashboardData();
  }

  selectTab(tabId: string): void {
    this.tabs.forEach(tab => tab.active = tab.id === tabId);
    this.activeTabId = tabId;

    switch (tabId) {
      case 'api1': this.loadDashboardData(); break;
      case 'api2': this.loadPostsData(); break;
      case 'api3': this.loadVideosData(); break;
      case 'api4': this.loadContactsData(); break;
      case 'api5': this.loadWeatherData(); break;
      case 'api6': this.loadNewsData(); break;
      case 'api7': this.loadUsersData(); break;
      case 'api8': this.loadProductsData(); break;
    }
  }

  loadDashboardData(): void {
    this.loading = true;
    this.http.get<DogResponse>('https://dog.ceo/api/breeds/image/random').subscribe({
      next: (response) => {
        this.dashboardData = [response];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar la imagen de perro:', err);
        this.loading = false;
      }
    });
  }

  loadPostsData(): void {
    this.loading = true;
    this.http.get<any[]>('https://api.thecatapi.com/v1/images/search').subscribe({
      next: (response) => {
        this.postsData = response;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar la imagen de gato:', err);
        this.loading = false;
      }
    });
  }

  loadVideosData(): void {
    this.loading = true;
    this.http.get<any>('https://countriesnow.space/api/v0.1/countries/flag/images').subscribe({
      next: (res) => {
        if (res.data) {
          this.videosData = res.data.slice(0, 20).map((country: any) => ({
            name: country.name,
            capital: 'N/A',
            region: 'N/A',
            population: 0,
            flag: country.flag
          }));
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar países:', err);
        this.loading = false;
      }
    });
  }

  loadContactsData(): void {
    this.loading = true;
    this.http.get<{ results: RandomUser[] }>('https://randomuser.me/api/?results=10').subscribe({
      next: (res) => {
        this.contactsData = res.results;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar usuarios:', err);
        this.loading = false;
      }
    });
  }

  async loadWeatherData() {
    this.loading = true;
    try {
      const data = await this.http.get<any>('https://dummyjson.com/quotes/random').toPromise();
      if (data) {
        this.weatherData = [{
          id: data.id,
          quote: data.quote,
          author: data.author
        }];
      } else {
        this.weatherData = [];
      }
    } catch (error) {
      console.error('Error al cargar frases:', error);
      this.weatherData = [];
    } finally {
      this.loading = false;
    }
  }

  async loadNewsData() {
    this.loading = true;
    try {
      const data: any = await this.http.get('https://api.spacexdata.com/v4/launches/latest').toPromise();
      if (data) {
        this.newsData = [
          { id: '1', name: 'Mercurio', description: 'El planeta más cercano al Sol', image: '' },
          { id: '2', name: 'Venus', description: 'El planeta más caliente del sistema solar', image: '' },
          { id: '3', name: 'Tierra', description: 'Nuestro hogar', image: '' },
          { id: '4', name: 'Marte', description: 'El planeta rojo', image: '' },
          { id: '5', name: 'Júpiter', description: 'El planeta más grande', image: '' },
          { id: '6', name: 'Saturno', description: 'El planeta de los anillos', image: '' },
          { id: '7', name: 'Urano', description: 'El gigante de hielo', image: '' },
          { id: '8', name: 'Neptuno', description: 'El planeta más lejano', image: '' }
        ];
      } else {
        this.newsData = [];
      }
    } catch (error) {
      console.error('Error al cargar planetas:', error);
      this.newsData = [];
    } finally {
      this.loading = false;
    }
  }

  async loadUsersData(): Promise<void> {
    this.loading = true;
    try {
      const data = await this.http.get<FakeNews[]>('https://jsonplaceholder.typicode.com/posts').toPromise();
      if (data) {
        this.usersData = data.slice(0, 10);
      } else {
        this.usersData = [];
      }
    } catch (error) {
      console.error('Error al cargar fake news:', error);
      this.usersData = [];
    } finally {
      this.loading = false;
    }
  }

  async loadProductsData(): Promise<void> {
    this.loading = true;
    try {
      const data = await this.http.get<Joke[]>('https://official-joke-api.appspot.com/random_ten').toPromise();
      if (data) {
        this.productsData = data;
      } else {
        this.productsData = [];
      }
    } catch (error) {
      console.error('Error al cargar chistes:', error);
      this.productsData = [];
    } finally {
      this.loading = false;
    }
  }
}