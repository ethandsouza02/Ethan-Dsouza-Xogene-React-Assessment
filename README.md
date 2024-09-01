# Instructions for making the file functional

1. Git clone the following repository link:
   - [https://github.com/ethandsouza02/Ethan-Dsouza-Xogene-React-Assessment](https://github.com/ethandsouza02/Ethan-Dsouza-Xogene-React-Assessment)

2. On the Terminal, run the command `npm i` or `npm install` in order to install the JSON packages.

3. Then, run the command `npm run dev`.

## Brief Explanation of Development Process

### Packages used:
- React Router

### Hooks used:
- `useState`
- `useEffect`

### Application of `useState`:
- For `const name` and `const drugData`, the hook helps store the name of the drug that is being searched for and compares it to the data being fetched from the API. `drugData` enables the storage of the drug name that is fetched from the API.

### Application of `useEffect`:
- Based on the user input, `useEffect` helps fetch data from the API. For example, for URL search parameters, if the searched `nameParam` exists, it updates the name using `setName`.
- In the `getDrugs` function, once the data is obtained from the API, it updates the `drugData` state using `setDrugData`.

### Using Asynchronous functions:
- For fetching data from an external API, we need an asynchronous method for conducting other operations while the request for fetching data is made.
