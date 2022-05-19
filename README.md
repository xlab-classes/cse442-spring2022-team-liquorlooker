# cse442-spring2022-team-liquorlooker

## Initialization
Clone the repository with `git clone <name>` or by downloading as zip.

You need to install dependencies for both the api and the frontend. Enter the frontend folder and run `npm install`, then repeat in the api folder.

## Configuration
Both the frontend and the api use environment variables to store important data which should not be exposed to the public.

Under `/api` create a file called `.env`. Within `.env` you will need the following environment variables:
- `DB_HOST` The host name of the database server you will connect to.
- `DB_NAME` The database name. It does not require prior table initiaizion.
- `DB_PORT` The port on which your database is running.
- `DB_USERNAME` Database login credentials
- `DB_PASSWORD`
- `PORT` On which the app will run on the machine.
- `JWT_SECRET` Random string for access token generation.

Under `/frontend` create `.env.development` and `.env.production`. Both of these files must contain the following variables:
- `REACT_APP_DEV_URL` The URL at which you can view the website. The development URL should be `localhost:<port>`, while the production URL should be the hostname on which it is run.
- `REACT_APP_GOOGLE_MAPS_API_KEY` First you must [obtain a Google api key](https://developers.google.com/maps/documentation/javascript/get-api-key) then place it here.

## Running the app
With dependencies installed and environment variables populated in the necessary files, you are ready to run the app. This is a two-step process, and requires two terminal windows. Make sure your database is running and visible.

In the first window `cd` into `/api` and run `npm run start`.

In the second window `cd` into `/frontend` and run `npm start`. For more detailed instructions on testing and production, look [here](frontend/README.md)

If you would like these processes to continue running after you close your terminal, add an `&` after each command, such as `npm run start &` and `npm start &`.

You can view the website by placing the `REACT_APP_DEV_URL` into your browser.

## Testing
See testing instructions [here](TESTING.md)