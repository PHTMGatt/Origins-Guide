import React, { useContext } from 'react';
import { EffectsContext } from '../Layout/Effects';
import './WindStaff.css';
import ReviveIcon from '../../assets/Pictures/Skull2.png';
import WindCode from '../../assets/Pictures/wind_staff_code.png';

const WindStaff = () => {
  const { showEffects } = useContext(EffectsContext);
  const sectionClass = showEffects ? 'staff-section wind-glow' : 'staff-section';
  const iconClass = showEffects ? 'revive-icon-wind' : 'revive-icon';

  return (
    <div className="wind-staff">
      <div className="staff-grid">
        <div className="left-column">
          <section className={sectionClass}>
            <h2><img src={ReviveIcon} className={iconClass} /> Wind Staff Parts</h2>
            <ul>
              <li>Part 1: Inside the robot that steps near spawn</li>
              <li>Part 2: Inside the robot that steps middle (excavation)</li>
              <li>Part 3: Inside the robot that steps near church</li>
              <li>Yellow Record: Near Generator 5 (Stamin-Up or around wind tunnel)</li>
              <li>Gramophone: Inside Excavation Site</li>
            </ul>
          </section>

          <section className={`${sectionClass} image-section`}>
            <h2><img src={ReviveIcon} className={iconClass} /> Wind Puzzle Code</h2>
            <img src={WindCode} alt="Wind Code Chart" className="wind-code" />
          </section>
        </div>

        <div className="right-column">
          <section className={sectionClass}>
            <h2><img src={ReviveIcon} className={iconClass} /> Puzzle Notes</h2>
            <ul>
              <li>Open the Wind Tunnel with the Gramophone</li>
              <li>Enter the Crazy Place</li>
              <li>Shoot the Wind Puzzle Code on the wall</li>
              <li>Align yellow rings in Excavation Site</li>
              <li>Shoot the orb below with Wind Staff</li>
              <li>Place Wind Staff in pedestal and kill zombies to upgrade</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WindStaff;
