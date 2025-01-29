# net-simple

## Description

`net-simple` is a simple .NET project designed to demonstrate basic CRUD operations with a database and a frontend interface.

## Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)

## How to Run Docker Database

1. Ensure Docker is installed and running on your machine.
2. Navigate to the project directory.
3. Run the following command to start the database container:

    ```sh
    cd net-simple-local
    docker-compose up -d
    ```

## How to Set Up Database in Entity Framework

1. Open the project in your preferred IDE.
2. Open the Package Manager Console.
3. Run the following commands to apply migrations and update the database:

    ```sh
    dotnet ef database update --project NetSimple.Infrastructure --startup-project NetSimple.API
    ```

## How to Run the Frontend

1. Navigate to the frontend directory:
2. Install the necessary dependencies:
3. Start the frontend application:

    ```sh
    cd frontend
    npm i
    npm run dev
    ```
