import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { 
  Tab, 
  DogResponse, 
  CatResponse,
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
  constructor(private apiService: ApiService) { }

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
  postsData: CatResponse[] = [];
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
    this.apiService.getDogImage().subscribe({
      next: (response: DogResponse) => {
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
    this.apiService.getCatImage().subscribe({
      next: (response: CatResponse[]) => {
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
    this.apiService.getCountries().subscribe({
      next: (response) => {
        if (response.data) {
          this.videosData = response.data.slice(0, 20).map((country) => ({
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
    this.apiService.getRandomUsers().subscribe({
      next: (response) => {
        this.contactsData = response.results;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar usuarios:', err);
        this.loading = false;
      }
    });
  }

  loadWeatherData(): void {
    this.loading = true;
    this.apiService.getRandomQuote().subscribe({
      next: (data: Quote) => {
        this.weatherData = [data];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar frases:', error);
        this.weatherData = [];
        this.loading = false;
      }
    });
  }

  loadNewsData(): void {
    this.loading = true;
    this.apiService.getLatestSpaceXLaunch().subscribe({
      next: (data) => {
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
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar planetas:', error);
        this.newsData = [];
        this.loading = false;
      }
    });
  }

  loadUsersData(): void {
    this.loading = true;
    this.apiService.getFakePosts().subscribe({
      next: (data: FakeNews[]) => {
        this.usersData = data.slice(0, 10);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar fake news:', error);
        this.usersData = [];
        this.loading = false;
      }
    });
  }

  loadProductsData(): void {
    this.loading = true;
    this.apiService.getRandomJokes().subscribe({
      next: (data: Joke[]) => {
        this.productsData = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar chistes:', error);
        this.productsData = [];
        this.loading = false;
      }
    });
  }
}