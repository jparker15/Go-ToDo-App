Go To Do App

## Tech Used

* [Go](https://go.dev/) - Server
* [Fiber](https://github.com/gofiber/fiber) - Go web server
* [Vite](https://vitejs.dev/) - Client
* [Mantine](https://mantine.dev/) - React component library
* [TypeScript](https://www.typescriptlang.org/) - Static types

### Steps to Build
## Initialize Go app
go mod init github.com/jparker15/Go-ToDo-App 

## Install Fiber v2
go get -u github.com/gofiber/fiber/v2

## Create client app with Vite
yarn create vite client -- --template react-ts

## Install dependencies
yarn add @mantine/hooks @mantine/core swr @primer/octicons-react