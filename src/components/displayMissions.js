import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../Redux/missions/missionsSlice';
import styles from '../Style/displayMissions.module.css';

function DisplayMission() {
  const dispatch = useDispatch();

  const missionsData = useSelector((state) => state.missions.missions);
  const missionsStatus = useSelector((state) => state.missions.status);
  const missionsError = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

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
        <colgroup width="12%" />
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
              <td>
                <div style={item.reserved ? { backgroundColor: 'green' } : { backgroundColor: 'grey' }} className={styles.status}>
                  {item.reserved ? 'Active Member' : 'Not A Member'}
                </div>
              </td>
              <td>
                {item.reserved ? (
                  <button
                    type="button"
                    className={styles.missionbtn}
                    style={{ border: '1px solid red', color: 'red' }}
                    onClick={() => handleLeaveMission(item.mission_id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className={styles.missionbtn}
                    onClick={() => handleJoinMission(item.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DisplayMission;
