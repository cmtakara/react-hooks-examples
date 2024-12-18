import Counter from "../components/Counter";
import ControlledForm from "../components/ControlledForm";
import FocusForm from "../components/FocusForm";
import Stopwatch from "../components/Stopwatch";
import UncontrolledForm from "../components/UncontrolledForm";
import Carousel from '../components/Carousel';
import ScrollExample from '../components/ScrollExample';
import ScrollExample2 from '../components/ScrollExample2';

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

function UseRefPage() {
  return (
    <>
    <h1>useRef examples</h1>
    <Counter/>
    <Stopwatch />
    <FocusForm />
    <ControlledForm />
    <UncontrolledForm />
    <Carousel list={catList}/>
    <ScrollExample />
    <ScrollExample2 />
    </>
  )
}

export default UseRefPage