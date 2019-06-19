# Widget factory web store

The Uber of Widgets.

## Widget types
The company sells different types of Widgets.

* Widget Prime
* Widget Elite
* Widget Extreme Edition

Each widget can have a **size** and a **color** and NOT all Widgets are available in all **sizes** and **colors**.

## Inventory
Classify the Widgets by types and styles and shows the number of available products.

## Shopping cart
You can create **orders** and make **purchases** without authentication.

## Front End Goals
1. A customer should be able to browse Widgets.
2. A customer should be able to select a size or finish.
3. A customer should be able to add a Widget to their order.
4. A customer should be able to view their order.

## Back End
1. Create a datastore that allows for the storing of inventory and orders
2. Implement an API that supports the frontend

# Installation

You can setup and install the whole project services (backend, frontend and database) by running one docker-compose command.

## Requeriments

Install `docker` and `docker-compose` in your machine.
- [Install Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

## Proccess
1. Clone the project in your local machine.
    ```
    $ git clone git@github.com:panduroab/widget-store.git
    $ cd widget-store
    ```
2. Be sure that you have the ports `8080`, `8888`, `27017` and `8081` availables in your machine. Also you can modify this ports in the `docker-compose.yml` file.

    Run docker-compose. This command will install the docker images and build the containers.
    ```
    $ docker-compose up -d && docker-compose logs -f
    ```
3. When the installation and build process is completed go to your browser at [http://localhost:8080](http://localhost:8080). You should see the widgets in the store.