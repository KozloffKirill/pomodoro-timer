import React from "react";
import styles from "./PomodoroInfo.module.css";

const PomodoroInfo = () => {

   return (
      <section className={styles.PomodoroInfo}>
         <div className={styles.wrapper}>
            <h1>An online Pomodoro Timer to boost your productivity</h1>
            <article className={styles.article}>
               <h2 className={styles.header}>What is this?</h2>
               <p className={styles.content}>
                  This is a customizable pomodoro timer that works on desktop &
                  mobile browser. The aim of this app is to help you focus on any task you
                  are working on, such as study, writing, or coding. This app is inspired by <a href="https://francescocirillo.com/pages/pomodoro-technique" target="_blank">Pomodoro Technique</a> which
                  is a time management method developed by
                  Francesco Cirillo.
               </p>
            </article>
            <article className={styles.article}>
               <h2 className={styles.header}>What is Pomodoro Technique?</h2>
               <p className={styles.content}>
                  The Pomodoro Technique is created by Francesco Cirillo for a more
                  productive way to work and study. The technique uses a timer to break
                  down work into intervals, traditionally 25 minutes in length, separated by
                  short breaks. Each interval is known as a pomodoro, from the Italian word
                  for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a
                  university student.
               </p>
            </article>
            <article className={styles.article}>
               <h2 className={styles.header}>How to use the Pomodoro Timer?</h2>
               <p className={styles.content}>
                  <ol className={styles.sequencingList}>
                     <li className={styles.sequencingItem}><strong>Add task</strong> to work on today</li>
                     <li className={styles.sequencingItem}><strong>Start timer</strong> and focus on the task for 25 minutes</li>
                     <li className={styles.sequencingItem}><strong>Take a break</strong> for 5 minutes when the alarm ring</li>
                  </ol>
               </p>
            </article>
            <article className={styles.article}>
               <h2 className={styles.header}>Features</h2>
               <p className={styles.content}>
                  <ul className={styles.featureList}>
                     <li className={styles.featureItem}><strong>Responsive design</strong> that works with desktop and mobile</li>
                     <li className={styles.featureItem}><strong>Color transition</strong> to switch moods between work time and rest time</li>
                     <li className={styles.featureItem}><strong>Customizable timer</strong> intervals to suit your preference</li>
                  </ul>
               </p>
            </article>
         </div >
      </section >
   );
};

export default PomodoroInfo;