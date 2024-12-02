# Car Dealer App

This is a Car Dealer App that allows users to select a vehicle make and model year to view related information. It fetches available vehicle makes from an external API and dynamically generates a list of model years from 2015 to the current year.

## Features

- **Vehicle Mark Selection**: Allows users to choose a vehicle make from a list fetched from an external API.
- **Model Year Selection**: Users can select a model year from 2015 to the current year.
- **Navigation**: Once both a make and a model year are selected, the user can click the "NEXT" button to navigate to a results page displaying relevant car information.

## Technologies Used

- **React**: For building the user interface and handling state.
- **Next.js**: For routing and server-side rendering.
- **Tailwind CSS**: For styling the components.

- # ResultPage Component - Vehicle Models

This component displays a list of vehicle models based on the selected vehicle make and model year. It fetches the available models for the given make and year from an external API.

## Features

- **Loading State**: While the vehicle models are being fetched, a loading message is displayed.
- **Display Vehicle Models**: After the data is fetched, the available vehicle models are listed.
- **No Models Found**: If no models are found for the selected make and year, a message is shown to inform the user.
  
## Technologies Used

- **React**: For building the user interface and managing state.
- **Next.js**: For routing and server-side rendering.
- **Tailwind CSS**: For styling the components.

## Functionality

1. **Vehicle Models Display**: Fetches vehicle models based on the selected make (`markId`) and year, and displays them in a list format.
2. **Error Handling**: If an error occurs while fetching data, it is logged in the console.
3. **Conditional Rendering**: If models are found, they are displayed; otherwise, a message is shown to the user.

## API

The component uses the following API to fetch specific vehicle models for a given make and year:

- `vehicleAPI.loadSpecificVehicle(markId, year)`: Fetches the list of vehicle models for the specified vehicle make (`markId`) and model year (`year`).
  
## Setup

Clone the repository:
```
   git clone https://github.com/yourusername/car-dealer-app.git
```

## .env.local
create .env.local and put here NEXT_PUBLIC_API_BASE_URL=https://vpic.nhtsa.dot.gov/api
```
.env.local = NEXT_PUBLIC_API_BASE_URL=https://vpic.nhtsa.dot.gov/api
```
```
npm i
```
```
npm run dev
```
##Photos:
#Home page
![image](https://github.com/user-attachments/assets/874f676d-5c62-4852-aecc-9c8bf03e00a9)

#Result page
![image](https://github.com/user-attachments/assets/85b059f3-1d11-4c9d-a88f-5c0dd49f21dc)




