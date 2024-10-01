const universities = {
  osu: {
    name: 'Ohio State University',
    location: 'Columbus, Ohio',
    majors: ['business', 'biology', 'psychology', 'marketing', 'computer science'],
    graduationRate: 0.82,
    enrollment: 61369
  },
  csu: {
    name: 'Colorado State University',
    location: 'Fort Collins, Colorado',
    majors: ['business', 'human development', 'psychology', 'kinesiology', 'mechanical engineering'],
    graduationRate: 0.71,
    enrollment: 33413
  },
  ucsb: {
    name: 'University of California, Santa Barbara',
    location: 'Santa Barbara, California',
    majors: ['sociology', 'business', 'communication', 'psycology', 'biology'],
    graduationRate: 0.85,
    enrollment: 24346
  }
};

// Write a function that takes a parameter of a school code
// and returns that school's enrollment
// (Hint: You DO NOT need Object.keys() for this one - why??)


console.log(findSchoolEnrollment('osu'))
// 'Ohio State University has 61369 students.'

console.log(findSchoolEnrollment('ucsb'))
// 'University of California, Santa Barbara has 24346 students.'





