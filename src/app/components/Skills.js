import Image from "next/image";
import styles from '../page.module.css';
import React, { useState } from "react";
import AllIconsComponent from "./AllIconsComponent";
import FrontEndComponent from "./FrontEndComponent";
import BackEndComponent from "./BackEndComponent";
import DatabaseComponent from "./DatabaseComponent";
import HostingComponent from "./HostingComponent";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    
  };

  const TechIcons = {
    'Todos': AllIconsComponent,
    'Front-end': FrontEndComponent,
    'Back-end': BackEndComponent,
    'Banco de dados': DatabaseComponent,
    'Hospedagem': HostingComponent,
  };

  return (
    <div className={styles.skills}>
      <h2>Tecnologias</h2>

      <div className={styles.techHeader}>
        <div
          onClick={() => handleCategoryChange('Todos')}
          className={selectedCategory === 'Todos' ? styles.selectedCategory : ''}
      
    >
          Todos
        </div>

        <div
          onClick={() => handleCategoryChange('Front-end')}
          className={selectedCategory === 'Front-end' ? styles.selectedCategory : ''}
        >
          Front-End
        </div>

        <div
          onClick={() => handleCategoryChange('Back-end')}
          className={selectedCategory === 'Back-end' ? styles.selectedCategory : ''}
        >
          Back-End
        </div>

        <div
          onClick={() => handleCategoryChange('Banco de dados')}
          className={selectedCategory === 'Banco de dados' ? styles.selectedCategory : ''}
        >
          Banco de dados
        </div>

        <div
          onClick={() => handleCategoryChange('Hospedagem')}
          className={selectedCategory === 'Hospedagem' ? styles.selectedCategory : ''}
        >
          Hospedagem
        </div>
      </div>

      <div className={styles.techIconsContainer}>
        {React.createElement(TechIcons[selectedCategory])}
      </div>
    </div>
  );
}
