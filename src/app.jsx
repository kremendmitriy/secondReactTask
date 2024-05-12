import { useState } from 'react';
import styles from './app.module.css';
import data from '../data.json';

export const App = () => {
   const [activeStep, setActiveStep] = useState(0);

   function clickForward() {
      if (activeStep < data.length - 1)
         setActiveStep((prevIndex) => prevIndex + 1);
   }
   function clickBack() {
      if (activeStep > 0) setActiveStep((prevIndex) => prevIndex - 1);
   }
   function clickOnTheBeginning() {
      setActiveStep(0);
   }

   const startButton = (
      <button className={styles.button} onClick={clickOnTheBeginning}>
         Начать сначала
      </button>
   );
   const forwardButton = (
      <button className={styles.button} onClick={clickForward}>
         Далее
      </button>
   );

   return (
      <div className={styles.container}>
         <div className={styles.card}>
            <h1>Инструкция по готовке пельменей</h1>
            <div className={styles.steps}>
               <div className={styles['steps-content']}>
                  {data[activeStep].content}
               </div>
               <ul className={styles['steps-list']}>
                  {data.map((step, index) => {
                     return (
                        <li
                           key={step.id}
                           className={
                              index === activeStep
                                 ? styles['steps-item'] +
                                   ' ' +
                                   styles.active +
                                   ' ' +
                                   styles.done
                                 : index <= activeStep
                                 ? styles['steps-item'] + ' ' + styles.done
                                 : styles['steps-item']
                           }
                        >
                           <button
                              className={styles['steps-item-button']}
                              onClick={() => setActiveStep(index)}
                           >
                              {Math.floor(step.id)}
                           </button>
                           {step.title}
                        </li>
                     );
                  })}
               </ul>
               <div className={styles['buttons-container']}>
                  <button className={styles.button} onClick={clickBack}>
                     Назад
                  </button>

                  {activeStep === data.length - 1 ? startButton : forwardButton}
               </div>
            </div>
         </div>
      </div>
   );
};
