import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../Redux/missions/missionsSlice';
import styles from '../Style/displayMissions.module.css';

function DisplayMission() {
  const dispatch = useDispatch();

  const missionsData = useSelector((state) => state.missions.missions);
  const missionsStatus = useSelector((state) => state.missions.status);
  const missionsError = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (missionsStatus === 'loading') {
    return (
      <h1 style={{ textAlign: 'center' }}>Loading...</h1>
    );
  }

  if (missionsError !== null) {
    return (
      <h1 style={{ textAlign: 'center' }}>{missionsError}</h1>
    );
  }
  return (
    <>
      <table className={styles.table}>
        <colgroup width="10%" />
        <colgroup width="65%" />
        <colgroup width="10%" />
        <colgroup width="10%" />
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          {missionsData.map((item) => (
            <tr key={item.mission_id}>
              <td>{item.mission_name}</td>
              <td>{item.description}</td>
              <td><div>Active Member</div></td>
              <td><button type="button">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DisplayMission;
