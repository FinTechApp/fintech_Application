
import './Items.css';


const items = [
  "Home",
  "About",
  "Contact",
];

const Items = () => (
  <ul>
    {items.map((item) => (
      <li className="item" key={item}>{item}</li>
    ))}
  </ul>
);

export default Items;
