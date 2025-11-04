export interface Tab {
  id: string;
  label: string;
  active: boolean;
}

export interface DogResponse {
  message: string;
  status: string;
}

export interface RandomUser {
  name: { first: string; last: string };
  email: string;
  location: { city: string; country: string };
  picture: { thumbnail: string };
}

export interface Country {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
}

export interface Quote {
  id: number;
  quote: string;
  author: string;
}

export interface Planet {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface FakeNews {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}