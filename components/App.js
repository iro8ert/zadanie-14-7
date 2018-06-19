var contacts = [
  {
    id: 1,
    firstName: 'Robert',
    lastName: 'Nowaczyk',
    email: 'robert.nowaczyk@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Adam',
    lastName: 'Nowak',
    email: 'nowak@nowakadam.pl',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  render: function() {
    return (
      <div className={'app'}>
        <ContactForm contact={contactForm} />
        <Contacts items={contacts} />
      </div>
    );
  }
});