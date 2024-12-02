List of React Fundamental concepts used in the project=>

React Router

useLoaderData This hook is used to load data when the page is opened as part of a routing setup.

React Hooks
useStateThis hook creates and manages data state inside the component.

useEffect This hook runs code when the component is first shown on the screen  when certain data change.

Props
cart information is passed as a property to display details about each products.

JSX
The project uses JSX which allows  to write HTML code inside JavaScript to create UI elements.

Event Handling
onClick Functions like handleAddToCart and handleDelete are triggered when buttons are clicked.

Array Methods
map Used to show a list of items in the wish list.
filter Used to remove items from the list when deleting.
includes Checks if an item is already in the list.

Conditional Rendering
The component shows either the list of products or a message like Your wish list is empty based on whether there are items in the list.

Side Effects and Data Fetching
The useEffect hook fetches data and runs code when the component first loads.


Local Storage

The component uses the browsers localStorage to save and read the wish list so it stays even if the page is refreshed.



5 features of My project.
1. Wish List Management :
Users can view and manage their wish list, seeing all products they have added and having the option to remove items.

2. Add to Cart Functionality :
Users can move items from their wish list to the shopping cart with a simple button click

3. Persistent Data Storage: 
The project uses localStorage to save the wish list data ensure that users selections are preserved  when they refresh or close the page.

4. Dynamic Rendering:
The component dynamically displays products from the wish list with images descriptions and prices.

6. Product Details and User Actions:
Users can take quick actions such as adding the item to their cart.

 Live Website Link : distinct-fiction.surge.sh