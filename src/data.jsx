const data = [
  {
    Id: 1,
    Title: "Coca-Cola",
    Description: "Famous Soda Drink",
    Price: 2.5,
  },
  {
    Id: 2,
    Title: "Beer",
    Description: "Rolotes from sporting superbock beer",
    Price: 3.99,
  },
  {
    Id: 3,
    Title: "Bifana",
    Description: "Pork sandwich with mustard on it",
    Price: 4.99,
  },
];

const listItems = data.map((items) => {
  const item = ` ${items.Title} - ${items.Price}`;
  return <li>{item}</li>;
});

export default function App() {
  return (
    <div>
      List of items
      <div>
        <ul key={data.Id}>{listItems}</ul>
      </div>
    </div>
  );
}
