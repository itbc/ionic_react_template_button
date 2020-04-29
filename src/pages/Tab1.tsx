import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { star } from 'ionicons/icons';
import { IonButton, IonIcon } from '@ionic/react';
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonContent>
    {/*-- Default --*/}
    <IonButton>Default</IonButton>

    {/*-- Anchor --*/}
    <IonButton href="#">Anchor</IonButton>

    {/*-- Colors --*/}
    <IonButton color="primary">Primary</IonButton>
    <IonButton color="secondary">Secondary</IonButton>
    <IonButton color="tertiary">Tertiary</IonButton>
    <IonButton color="success">Success</IonButton>
    <IonButton color="warning">Warning</IonButton>
    <IonButton color="danger">Danger</IonButton>
    <IonButton color="light">Light</IonButton>
    <IonButton color="medium">Medium</IonButton>
    <IonButton color="dark">Dark</IonButton>

    {/*-- Expand --*/}
    <IonButton expand="full">Full Button</IonButton>
    <IonButton expand="block">Block Button</IonButton>

    {/*-- Round --*/}
    <IonButton shape="round">Round Button</IonButton>

    {/*-- Fill --*/}
    <IonButton expand="full" fill="outline">Outline + Full</IonButton>
    <IonButton expand="block" fill="outline">Outline + Block</IonButton>
    <IonButton shape="round" fill="outline">Outline + Round</IonButton>

    {/*-- Icons --*/}
    <IonButton>
      <IonIcon slot="start" icon={star} />
      Left Icon
    </IonButton>

    <IonButton>
      Right Icon
      <IonIcon slot="end" icon={star} />
    </IonButton>

    <IonButton>
      <IonIcon slot="icon-only" icon={star} />
    </IonButton>

    {/*-- Sizes --*/}
    <IonButton size="large">Large</IonButton>
    <IonButton>Default</IonButton>
    <IonButton size="small">Small</IonButton>
  </IonContent>
      </IonContent>
    </IonPage>



  );
};


export default Tab1;
