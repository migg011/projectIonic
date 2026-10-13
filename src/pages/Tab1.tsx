import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonAvatar } from '@ionic/react';
import './Tab1.css';
import React from "react";
import foto from '../imagens/photo.jpeg';


const Tab1: React.FC = () => {
  return (
    <IonPage>

        <IonHeader className="cabecalho">
            <IonAvatar className="avatar">
                <img src={foto} alt="photo" />
            </IonAvatar>
            <span className="texto-avatar">Miguel</span>
        </IonHeader>


      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard className="sobre-mim">
          <IonCardHeader>
            <IonCardTitle>Sobre mim</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Estudante de Desenvolvimento de Software com foco na construção de aplicações web funcionais utilizando Angular, TypeScript e Python. Atualmente aprimorando minhas habilidades em arquitetura
            de código, consumo de APIs REST e boas práticas de desenvolvimento frontend e backend.
          </IonCardContent>
        </IonCard>

      </IonContent>

    </IonPage>

  );
};

export default Tab1;
