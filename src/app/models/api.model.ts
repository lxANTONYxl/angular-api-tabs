export interface Tab {
  id: string;
  label: string;
  active: boolean;
}

export interface DogResponse {
  message: string;
  status: string;
}

export interface CatResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CountriesApiResponse {
  error: boolean;
  msg: string;
  data: CountryFlag[];
}

export interface CountryFlag {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

export interface Country {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
}

export interface RandomUserResponse {
  results: RandomUser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export interface RandomUser {
  name: { 
    title: string;
    first: string; 
    last: string;
  };
  email: string;
  location: { 
    street: {
      number: number;
      name: string;
    };
    city: string; 
    state: string;
    country: string;
    postcode: string | number;
  };
  picture: { 
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface Quote {
  id: number;
  quote: string;
  author: string;
}

export interface SpaceXLaunch {
  id: string;
  name: string;
  date_utc: string;
  details: string | null;
  links: {
    patch: {
      small: string | null;
      large: string | null;
    };
    webcast: string | null;
  };
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