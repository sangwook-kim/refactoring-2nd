export type Play = {
  name: string;
  type: string;
};

export type Plays = {
  [k: string]: Play;
};

type Performance = {
  playID: string;
  audience: number;
};

export type Invoice = {
  customer: string;
  performances: Performance[];
};

export type Invoices = Invoice[];
