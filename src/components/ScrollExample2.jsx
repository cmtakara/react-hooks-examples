import { useRef } from "react";

export default function CatFriends() {
  const itemsRef = useRef(null);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToId(0)}>Tom</button>
        <button onClick={() => scrollToId(5)}>Maru</button>
        <button onClick={() => scrollToId(9)}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img src={cat.imageUrl} alt={"Cat #" + cat.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// this api wasn't working
// const catList = [];
// for (let i = 0; i < 10; i++) {
//   catList.push({
//     id: i,
//     imageUrl: "https://placekitten.com/250/200?image=" + i
//   });
// }

const catList = [
    {
        id: 0,
        imageUrl: "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 1,
        imageUrl: "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 2,
        imageUrl: "https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 3,
        imageUrl: "https://images.pexels.com/photos/2835623/pexels-photo-2835623.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 4,
        imageUrl: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 5,
        imageUrl: "https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 6,
        imageUrl: "https://images.pexels.com/photos/3616232/pexels-photo-3616232.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 7,
        imageUrl: "https://images.pexels.com/photos/460985/pexels-photo-460985.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 8,
        imageUrl: "https://images.pexels.com/photos/4601871/pexels-photo-4601871.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 9,
        imageUrl: "https://images.pexels.com/photos/1353916/pexels-photo-1353916.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
]