import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1280555077405638656/tuC3DRcL_400x400.jpg" alt="Matheus" />
            <div>
                <strong>Matheus Oliveira</strong>
                <p>
                    <img src="icons\level.svg" alt="Level" />
                    {level}
                </p>
            </div>
        </div>
    );
}