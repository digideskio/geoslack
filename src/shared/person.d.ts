interface Person {
    user: string;
    color: string;
    date_started: Date;
    lat: number;
    lng: number;
}

type UserToPerson = { [user: string]: Person };