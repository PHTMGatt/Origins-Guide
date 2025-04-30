import React, { useContext } from 'react';
import { EffectsContext } from '../Layout/Effects';
import './FireStaff.css';
import ReviveIcon from '../../assets/Pictures/Skull2.png';
import FireCode from '../../assets/Pictures/fire_staff_code.png';

const FireStaff = () => {
  const { showEffects } = useContext(EffectsContext);
  const sectionClass = showEffects ? 'staff-section fire-glow' : 'staff-section';
  const iconClass = showEffects ? 'revive-icon-fire' : 'revive-icon';

  return (
    <div className="fire-staff">
      <div className="staff-grid">
        <div className="left-column">
          <section className={sectionClass}>
            <h2><img src={ReviveIcon} className={iconClass} /> Fire Staff Parts</h2>
            <ul>
              <li>Part 1: Dropped by Panzer at round 8</li>
              <li>Part 2: In the tank path at Church — jump off to reach it</li>
              <li>Part 3: In the tank path at spawn — jump off to reach it</li>
              <li>Red Record: Near tank station or church</li>
              <li>Gramophone: Inside Excavation Site</li>
            </ul>
          </section>

          <section className={sectionClass}>
            <h2><img src={ReviveIcon} className={iconClass} /> Crazy Place Puzzle</h2>
            <ul>
              <li>Go through Fire Tunnel with Gramophone</li>
              <li>Place Gramophone on red pedestal and enter the portal</li>
              <li>Shoot the correct fire symbols on the wall</li>
              <li>Use code: 11 - 5 - 9 - 7 - 6 - 3 - 4</li>
            </ul>
            <img src={FireCode} alt="Fire Staff Code" className="fire-code" />
          </section>
        </div>

        <div className="right-column">
          <section className={sectionClass}>
            <h2><img src={ReviveIcon} className={iconClass} /> Fire Staff Upgrade</h2>
            <ul>
              <li>Fill four fire cauldrons in Agartha with zombie souls</li>
              <li>Return to the Excavation Site</li>
              <li>Turn all rings to RED using the levers</li>
              <li>Shoot the glowing orb beneath with Fire Staff</li>
              <li>Return to Crazy Place and place the staff on red pedestal</li>
              <li>Kill zombies nearby to upgrade the staff</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FireStaff;
