import { useSelector } from "react-redux";

const Home = () => {

    const state = useSelector(state => state);
    console.log(state)

   

    return(
        <>
        <h1>HOME PAGE</h1>
        <h1>{state.name}</h1>
        </>
    );
}

export default Home;