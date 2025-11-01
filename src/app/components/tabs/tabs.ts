import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab {
  id: string;
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.css']
})
export class TabsComponent implements OnInit {
  tabs: Tab[] = [
    { id: 'api1', label: 'api1', active: true },
    { id: 'api2', label: 'api2', active: false },
    { id: 'api3', label: 'api3', active: false },
    { id: 'api4', label: 'api4', active: false },
    { id: 'api5', label: 'api5', active: false },
    { id: 'api6', label: 'api6', active: false },
    { id: 'api7', label: 'api7', active: false },
    { id: 'api8', label: 'api8', active: false }
  ];

  activeTabId: string = 'api1';
  loading: boolean = false;
  dashboardData: any[] = [];
  postsData: any[] = [];
  videosData: any[] = [];
  contactsData: any[] = [];
  weatherData: any[] = [];
  newsData: any[] = [];
  usersData: any[] = [];
  productsData: any[] = [];

  ngOnInit(): void {
    this.loadDashboardData();
  }

  selectTab(tabId: string): void {
    this.tabs.forEach(tab => tab.active = tab.id === tabId);
    this.activeTabId = tabId;

    switch(tabId) {
      case 'api1':
        this.loadDashboardData();
        break;
      case 'api2':
        this.loadPostsData();
        break;
      case 'api3':
        this.loadVideosData();
        break;
      case 'api4':
        this.loadContactsData();
        break;
      case 'api5':
        this.loadWeatherData();
        break;
      case 'api6':
        this.loadNewsData();
        break;
      case 'api7':
        this.loadUsersData();
        break;
      case 'api8':
        this.loadProductsData();
        break;
    }
  }

  loadDashboardData(): void {
    console.log('Cargando datos de api1');
  }

  loadPostsData(): void {
    console.log('Cargando datos de api2');
  }

  loadVideosData(): void {
    console.log('Cargando datos de api3');
  }

  loadContactsData(): void {
    console.log('Cargando datos de api4');
  }

  loadWeatherData(): void {
    console.log('Cargando datos de api5');
  }

  loadNewsData(): void {
    console.log('Cargando datos de api6');
  }

  loadUsersData(): void {
    console.log('Cargando datos de api7');
  }

  loadProductsData(): void {
    console.log('Cargando datos de api8');
  }
}