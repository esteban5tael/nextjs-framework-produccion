export interface PokemonsResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  SimplePokemon[];
}

export interface SimplePokemon {
    id:   string;
    name: string;
    url:  string;
}
