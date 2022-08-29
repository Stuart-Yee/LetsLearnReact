import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import BaseURLContext from "../context/URLContext";

const StatCard = (props) => {

    const {monster} = props;
    const [monsterData, setMonsterData] = useState();

    const baseURL = useContext(BaseURLContext);

    useEffect(()=>{
        console.log(monster);
        axios.get(`${baseURL}${monster}/`)
        .then(res=>{
            console.log(res.data);
            setMonsterData(res.data);
            res.data.actions.forEach(action => {
                for (const key in action){
                    console.log(key, action[key])
                }
                
            });
        })
        .catch(err=>console.log("API Error:", err))
    },[monster]);

    return (
        monsterData == null ? 
        <div className="stat-card">
            <p>Loading monster data...</p>
        </div>
        :
        <div className="stat-card">
            <h2>{monsterData.name}</h2>
            <table className="center">
                    <tbody>
                        <tr>
                            <td><span className="bold">Type: </span>{monsterData.type}</td>
                            <td><span className="bold">Alignment: </span>{monsterData.alignment}</td>
                        </tr>
                        <tr>
                            <td><span className="bold">Armor Class: </span>{monsterData.armor_class}</td>
                            <td><span className="bold">Challenge Rating: </span>{monsterData.challenge_rating}</td>
                        </tr>
                        <tr>
                            <td><span className="bold">Hit Dice: </span>{monsterData.hit_dice}</td>
                            <td><span className="bold">Hit Points: </span>{monsterData.hit_points}</td>
                        </tr>
                    </tbody>
            </table>
            

        </div>
    )

}

export default StatCard;