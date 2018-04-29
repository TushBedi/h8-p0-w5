/*
  Logic Challenge - Naik Angkot
*/

function naikAngkot(arrpassenger) {
  if (arrpassenger.length === 0) {
    return [];
  }
  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  const output = [];

  arrpassenger.forEach(person => {
    if (person.length === 3) {
      const personObj = {};
      const from = rute.indexOf(person[1]);
      const to = rute.indexOf(person[2]);
      const distance = to - from;
      const cost = Math.abs(2000 * distance);
      [personObj.passenger, personObj.from, personObj.to] = person;
      personObj.price = cost;
      output.push(personObj);
    }
  });

  return output;
}

// TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { passenger: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { passenger: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([['Aloy', 'C', 'A'], ['Nathan', 'F', 'B']]));
// [ { passenger: 'Aloy', naikDari: 'C', tujuan: 'A', bayar: 4000 },
//   { passenger: 'Nathan', naikDari: 'F', tujuan: 'B', bayar: 8000 } ]

console.log(naikAngkot([])); // []
