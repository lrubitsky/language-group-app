# lingosquads

Contributors: Lilly Rubitsky

This app is geared toward non-native English speakers who wish to practice their conversational English. Users are able to join and create conversation groups.

In the app, user can:

- update their profile, and view others profiles, with fields specifying native language, English level, location, age, and an introduction
- view language group details for location, language levels, topic, size, and current participants in the group
- join and leave language groups
  Work in progress:
- create language groups
- message members in the group

To install, type the following into the terminal:
yarn install
createdb lingosquads_development
cd server
yarn migrate:latest
yarn db:seed
yarn run dev

You can navigate to the homepage with <http://localhost:3000/>.

Sign-in with this username/password:
username:
password: password

Technologies used in the site include:

- React framework
- Express node js framework
- Foundation for styling
- Google Maps Api
- Faker library for seeded data
- Gravatar for constructing image URLs for default profile pictures
