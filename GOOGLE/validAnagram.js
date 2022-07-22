/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var map = {};
  if (s.length !== t.length) return false;
  for (var i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]]++ || 0) + 1;
    map[t[i]] = (map[t[i]]-- || 0) - 1;
  }
  return Object.values(map).every((c) => c === 0);
};

Input: (s = "anagram"), (t = "nagaram");
Output: true;
