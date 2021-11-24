const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map( title => {
    const titles = title.split(' ');
    const capitalizedTitles =
      titles.map( titles => titles.charAt(0).toUpperCase() + titles.slice(1) );
    const response = capitalizedTitles.join(' ');
    return response;
  });
}
