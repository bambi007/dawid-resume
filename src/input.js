import Photo from './assets/images/profilepic.jpg'

const profilePicture = Photo;

const info = {
  name: 'Dawid Górszczyk',
  phone: '507 804 924',
  email: 'dawidg25@gmail.com'

}

const about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."


const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'Git', 'Angielski B2'];

const experience = [

  {
    title: 'Fullstack Web Developer',
    company: 'Extremelab',
    location: 'Kraków, Poland',
    started: 2018,
    ended: 'present',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
];

const education = [

  {
    major: 'Informatyka Stosowana',
    school: 'PWSZ w Nowym Sączu',
    title: 'inżynier Informatyk',
    started: 2012,
    ended: 2016,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },

];

const consent = "I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the European Parliament's and Council of the European Union Regulation on the Protection of Natural Persons as of 27 April 2016, with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (Data Protection Directive).";




export { info, profilePicture, about, skills, experience, education, consent };