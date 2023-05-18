import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookedMissions } from '../Redux/missions/missionsSlice';
import styles from '../Style/activeMission.module.css';

function MissionProfile() {
  const reservedMission = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookedMissions());
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>My Missions</h2>
        {reservedMission.reservedMission?.map((item) => (
          <ul key={item.mission_id} className={styles.missionlist}>
            <li>{item.mission_name}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default MissionProfile;
