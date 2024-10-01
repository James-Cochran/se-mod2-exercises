/*
Applicants - JS Iteration Station practive

To run the code in this file, run the command:
  node practice_sessions/applicants.js
*/ 
// console.log("scratchie.js is running")

//Data

const applicants = [
  {
    name: ["Emily", "Chen"],
    yearsExperience: 5,
    yearsEducation: 4,
    techStack: ["JavaScript", "React", "Node.js", "MongoDB"],
    previousJobTitle: "Junior Software Engineer"
  },
  {
    name: ["Michael", "Green"],
    yearsExperience: 8,
    yearsEducation: 2,
    techStack: ["JavaScript", "Vue.js", "TypeScript", "Docker"],
    previousJobTitle: "Front-end Developer"
  },
  {
    name: ["Aisha", "Patel"],
    yearsExperience: 3,
    yearsEducation: 1,
    techStack: ["HTML", "CSS", "JavaScript", "Angular"],
    previousJobTitle: "Web Designer"
  },
  {
    name: ["David", "Smith"],
    yearsExperience: 10,
    yearsEducation: 2,
    techStack: ["JavaScript", "React", "Redux", "AWS"],
    previousJobTitle: "Full Stack Developer"
  },
  {
    name: ["Sophia", "Martinez"],
    yearsExperience: 6,
    yearsEducation: 0,
    techStack: ["JavaScript", "Svelte", "Node.js", "GraphQL"],
    previousJobTitle: "Software Engineer"
  },
  {
    name: ["Carlos", "Garcia"],
    yearsExperience: 4,
    yearsEducation: 8,
    techStack: ["JavaScript", "Next.js", "TypeScript", "Firebase"],
    previousJobTitle: "Mobile App Developer"
  }
];


/*  LEVEL ONE:
Write a function sortApplicants that takes in 2 arguments: an array of applicants and a sortBy parameter. 
The function should sort the applicants based on the sortBy argument that is passed to it. Any sorting should be done from most to least.
*/


// console.log(sortApplicants(applicants, 'yearsExperience'))  
// console.log(sortApplicants(applicants, 'yearsEducation'))


//  Example 1: sortApplicants(applicants, 'yearsExperience')  
/* Expected Result (Open with dropdown)
  [
    {
      name: ["David", "Smith"],
      yearsExperience: 10,
      ... (should be the full objects, just abbreviated here for space)
    },
    {
      name: ["Michael", "Green"],
      yearsExperience: 8,
      ...
    },
    {
      name: ["Sophia", "Martinez"],
      yearsExperience: 6,
      ...
    },
    {
      name: ["Emily", "Chen"],
      yearsExperience: 5,
      ...
    },
    {
      name: ["Carlos", "Garcia"],
      yearsExperience: 4,
      ...
    },
    {
      name: ["Aisha", "Patel"],
      yearsExperience: 3,
      ...
    }
  ]
*/

// Example 2: sortApplicants(applicants, 'yearsEducation')
/* Expected Result (Open with dropdown)
    [
      {
        name: ["Carlos", "Garcia"],
        ... (should be the full objects, just abbreviated here for space)
        yearsEducation: 8,
        ... (should be the full objects, just abbreviated here for space)
      },
      {
        name: ["Emily", "Chen"],
        ...
        yearsEducation: 4,
        ...
      },
      {
        name: ["Michael", "Green"],
        ...
        yearsEducation: 2,
        ...
      },
      {
        name: ["David", "Smith"],
        ...
        yearsEducation: 2,
        ...
      },
      {
        name: ["Aisha", "Patel"],
        ...
        yearsEducation: 1,
        ...
      },
      {
        name: ["Sophia", "Martinez"],
        ...
        yearsEducation: 0,
        ...
      }
    ]
*/





/*  LEVEL TWO:
Write a function findQualified that takes in 2 arguments: an array of applicants and a technology. The function should return the names of applicants who are familiar with that technology.
*/


/* 
Example 1: findQualified(applicants, 'TypeScript')  
  Expected Result => ["Michael Green", "Carlos Garcia"]

Example 2: findQualified(applicants, 'AWS')  
  Expected Result => ["David Smith"]
*/




/*  LEVEL THREE:
Modify your findQualified function so that if no applicants are familiar with the technology passed, the function returns a string of "No applicants found for <the technology>".
*/

/* 
Example 1: findQualified(applicants, 'Python')  
  Expected Result => "No applicants found for Python"

Example 2: findQualified(applicants, 'C++')  
  Expected Result => "No applicants found for C++"
*/


/*  LEVEL FOUR:
Write a function called doNepotism that takes in  2 arguments: an array of applicants and the last name of the company's CEO. The function should return  an array with the names of applicants who share the same last name as the CEO as strings.
*/

/* 
Example 1: doNepotism(applicants, 'Smith')  
  Expected Result => ["David Smith"]
*/



/*  LEVEL FIVE:
Write a function called organizeApplicants that takes in the array of applicants and organizes the applicant objects into an object that has 3 keys - "React", "Angular" and "TypeScript". Its ok to hardcode these three keys in your object.  The value of each key will be an array that holds the applicant objects that possess that skill.  Some applicants might not appear in the object if they dont possess any of these skills.
*/

/* 
Example 1: organizeApplicants()
  Expected Result => {
  React: [
    {
      name: ["Emily", "Chen"],
      yearsExperience: 5,
      yearsEducation: 4,
      techStack: ["JavaScript", "React", "Node.js", "MongoDB"],
      previousJobTitle: "Junior Software Engineer"
    },
    {
      name: ["David", "Smith"],
      yearsExperience: 10,
      yearsEducation: 2,
      techStack: ["JavaScript", "React", "Redux", "AWS"],
      previousJobTitle: "Full Stack Developer"
    }
  ],
  Angular: [
    {
      name: ["Aisha", "Patel"],
      yearsExperience: 3,
      yearsEducation: 1,
      techStack: ["HTML", "CSS", "JavaScript", "Angular"],
      previousJobTitle: "Web Designer"
    }
  ],
  TypeScript: [
    {
      name: ["Michael", "Green"],
      yearsExperience: 8,
      yearsEducation: 2,
      techStack: ["JavaScript", "Vue.js", "TypeScript", "Docker"],
      previousJobTitle: "Front-end Developer"
    },
    {
      name: ["Carlos", "Garcia"],
      yearsExperience: 4,
      yearsEducation: 8,
      techStack: ["JavaScript", "Next.js", "TypeScript", "Firebase"],
      previousJobTitle: "Mobile App Developer"
    }
  ]
}

*/