export interface StationI {
    key?: string;
    id: number;
    bat: number;
    hum: number;
    lat: number;
    lon: number;
    ping: number;
    pot: number;
    state: boolean;
    temp: number;
}
