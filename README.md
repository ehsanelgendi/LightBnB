# LightBnB Project

A simple multi-page Airbnb clone that uses a server side Javascript to display the information from queries to web pages via SQL queries, search listings, create an account, create new properties, view your reservations and your listings.

# Getting Started

1. Clone this repository into your local machine.
2. Install dependencies using the `npm install` command.
3. Create database (lightbnb) and connect to it
4. Add tables and data using Postgres.
    - Run migrations to create the tables using:
    ```
    \i migrations/01_schema.sql
    ```
    - Run schema to add data to tables using:
    ```
    \i seeds/01_seeds.sql
    \i seeds/02_seeds.sql
    ```
4. In LightBnB_WebApp folder, start the web server using the `npm run local` command. The app will be served at <http://localhost:3000/>.

# Dependencies
- bcrypt
- body-parser
- cookie-session
- dotenv
- express
- pg

## Dev Dependencies
- nodemon


# Final Product



