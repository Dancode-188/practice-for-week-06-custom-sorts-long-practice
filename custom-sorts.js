function ageSort(users) {
  // Your code here
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  // Your code here
  let odd = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  let even = arr.filter((num) => num % 2 === 0).sort((a, b) => a - b);
  return odd.concat(even);
}

function validAnagrams(s, t) {
  // Your code here
  if (s.length !== t.length) return false;

  let sObj = {};
  let tObj = {};
  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = (sObj[s[i]] || 0) + 1;
    tObj[t[i]] = (tObj[t[i]] || 0) + 1;
  }

  for (let key in sObj) {
    if (sObj[key] !== tObj[key]) return false;
  }

  return true;
}

function reverseBaseSort(arr) {
  // Your code here
  // // Step 1: Group numbers by their number of digits
  // const groups = arr.reduce((acc, num) => {
  //   const digits = num.toString().length;
  //   if (!acc[digits]) {
  //     acc[digits] = [];
  //   }
  //   acc[digits].push(num);
  //   return acc;
  // }, {});

  // // Step 2: Sort each group of numbers in ascending order
  // for (const key in groups) {
  //   groups[key].sort((a, b) => a - b);
  // }

  // // Step 3: Sort the groups by the number of digits in descending order
  // const sortedGroups = Object.keys(groups)
  //   .sort((a, b) => b - a)
  //   .map((key) => groups[key]);

  // // Step 4: Concatenate the sorted groups to form the final sorted array
  // return [].concat(...sortedGroups);

  return arr
    .sort((a, b) => a - b) // Step 2: Sort all numbers in ascending order first
    .sort((a, b) => b.toString().length - a.toString().length); // Step 3: Sort by number of digits in descending order
}

function frequencySort(arr) {
  // Your code here
   let freq = {};
   for (let num of arr) {
     freq[num] = (freq[num] || 0) + 1;
   }

   return arr.sort((a, b) => {
     if (freq[a] === freq[b]) return b - a;
     return freq[a] - freq[b];
   });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];