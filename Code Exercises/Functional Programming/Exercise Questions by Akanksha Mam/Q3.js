const family = [
    {
      name    : 'Tanay',
      haveCycle : true
    },
    {
      name     : 'Akanksha',
      haveCycle : false
    },
    {
      name     : 'Tanvi',
      haveCycle : true
    },
      {
      name     : 'Kanak',
      haveCycle : false
    }
  ];
  
  
//   Your output should be: ['Tanay', 'Tanvi']
const res = family.filter(member => member.haveCycle).map(person => person.name);
console.log(res);