/**
 * Count the number of prime numbers less than a non-negative number, n.
 */

const isPrime = function(x) {
  // Corner case
  if (x <= 1)
      return false;

  // Check from 2 to n-1
  for (let i = 2; i < x; i++)
      if (x % i == 0)
          return false;

  return true;
}
const countPrimes = function(n) {
  let count = 0;
  let x = 2;
  if (n == 0 || n == 1) return 0;
  
  while ( x < n) {
      if (isPrime(x)) {
          count += 1
      }
      x += 1;
  }
  
  return count;
};
