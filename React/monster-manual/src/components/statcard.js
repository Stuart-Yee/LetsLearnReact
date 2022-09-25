import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import BaseURLContext from "../context/URLContext";
import DiceRoller from "../utils/polydice";

const StatCard = (props) => {
    console.log("Time to render...")

    const {monster} = props;
    const [monsterData, setMonsterData] = useState();
    const [hitPoints, setHitPoints] = useState()

    const baseURL = useContext(BaseURLContext);

    const rollHitDice = () => {
        const result = DiceRoller.rollDieCode(monsterData.hit_dice);
        console.log(`Rolling ${monsterData.hit_dice} for hit points and got a ${result}`)
        


        setHitPoints(`${result} (Default: ${monsterData.hit_points} )`)
    }

    useEffect(()=>{
        console.log(monster);
        axios.get(`${baseURL}${monster}/`)
        .then(res=>{
            console.log(res.data);
            setMonsterData(res.data);
            setHitPoints(res.data.hit_points);
            // console.log(`Rolling hit dice ${res.data.hit_dice}`, DiceRoller.rollDieCode(res.data.hit_dice))

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
                            <td><span className="bold">Hit Points: </span>{hitPoints}</td>
                        </tr>
                    </tbody>
            </table>
            <button onClick={rollHitDice}>Roll for Hit Points</button>
            

        </div>
    )

}

export default StatCard;