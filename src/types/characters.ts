export interface ICharacter {
  id: number;
  name: string;
  status: "alive" | "dead" | unknown;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
}
