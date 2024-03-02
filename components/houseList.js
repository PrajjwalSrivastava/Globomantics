import { useState } from "react";
import HouseRow from "./houseRow";

const housesArray = [
    {
        id: 1,
        address: "Address 1",
        country: "Country 1",
        price: 9000000,
    },
    {
        id: 2,
        address: "Address 2",
        country: "Country 2",
        price: 8000000,
    },
    {
        id: 3,
        address: "Address 3",
        country: "Country 3",
        price: 7000000,
    },
]

const HouseList = () => {
    const [houses, setHouses] = useState(housesArray);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 4,
                address: "Address 4",
                country: "Country 4",
                price: 6000000,
            }
        ])
    }

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market.
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(house => (
                        <HouseRow key={house.id} house={house}/>
                    ))}
                </tbody> 
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
}

export default HouseList;