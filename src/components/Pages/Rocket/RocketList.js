/*eslint-disable*/
import "./Rocket.css"
import FetchApi from "../../../Redux/rockets/Api";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleRocketStatus } from "../../../Redux/rockets/rocketsSlice";
import styles from './rocket.module.css';

export const RocketList = () => {
    const { error, rocketStatus, rockets } = useSelector((state) => state.rockets);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchApi());
    }, [dispatch]);
    
    if (error) {
        return "There is an error";
    }
    if (!rocketStatus) {
        return "...Loading";
    }

    return (
        <div className="container">
            {rockets.map((rocket) => {
                return (
                    <section className="section" key={rocket.id}>
                        <div className='img'>
                        <img src={rocket.RocketImages} alt="" />
                        </div>
                        <div className="details">
                            <h2>{rocket.RocketName}</h2>
                            <p> <span className={rocket.rocketStatus ? styles.badge : ''}>{rocket.rocketStatus? "Reseved" : ""}</span> {rocket.description}</p>
                            <button className={`${rocket.rocketStatus ? styles.reserve : styles.unreserve}`} onClick={() => dispatch(toggleRocketStatus(rocket.RocketId))}>
                            {rocket.rocketStatus ? 'Cancel reservation' : 'Reserve Rocket'}
                            </button>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};
