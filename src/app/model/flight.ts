export interface Flight {
    id: number;     // int + double 2^52
    from: string;
    to: string;
    date: string;   // 2022-12-24T17:00+01:00
    delayed: boolean;
}