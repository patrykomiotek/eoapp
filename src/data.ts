// ala, ma, kota

// interface Boss {
//   name: string;
// }

type Boss = {
  name: number;
  age: number;
}

// interface Worker {
//   name: string;
// }

type Worker = {
  name: string;
}

type WorkingBoss = Boss & Worker;
type NotWorkingBoss = Boss | Worker;

function sth(param: number | string) {
  return param.toString();
}


export interface User<T> {
  name: string;
  surname: string;
  role: T
}

type Response = {
  status: number;
  data: {
    count: number;
    orderValue: number; // {} Object, [] Array
    //items: string[] // // ala, ma, kota
    // ZŁY: items: [string] // // ala, ma, kota
    items: Array<string>
  }
}