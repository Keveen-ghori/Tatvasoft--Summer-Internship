// Using Index Signature we can create Dynamic Property and also get Type checking

class SeatAssignment{
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Kevin'; // OR
seats['A1'] = 'Kevin';
seats.A2 = 'Hello';

console.log(seats);