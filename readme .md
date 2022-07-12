Prepare database (PostgreSQL 12.0)
docker run --name travel-log-postgres -e POSTGRES_PASSWORD=thisispassword -p 5432:5432 -d postgres:12.0

Running the backend application
From project root execute the following command:

gradlew run

Running the frontend application

ng serve

