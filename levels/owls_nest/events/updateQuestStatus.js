const LEVEL = 'owls_nest';
const TITLE = `Leaving the Owl's Nest`;

// Based on the current level state, determine what 
function updateQuestStatus(event, world, worldState) {
  let description = `
  Utilisez ZQSD ou les touches fléchées pour vous déplacer, la barre d'espace pour interagir. Retournez l'interrupteur bleu !
  `;
  let complete = false;

  if (worldState.movementSwitch) {
    description = `
    Prends l'outil de piratage sur le piédestal et utilise-le pour contourner le terminal de sécurité.
    du terminal.
    `;
  }

  if (worldState.firstObjectiveHacked) {
    description = `
    Parlez à Kevin et Cedric, puis prenez le commandement du Fog Owl!
    `;
  }

  if (worldState.fredricThreatReceived) {
    description = `
    Obtenez les codes d'autodestruction de Ryan ! Tu auras besoin d'un extincteur.
    `;
  }

  if (worldState.ryanSaved) {
    description = `
    Utilisez les codes d'annulation pour annuler la séquence d'autodestruction du Fog Owl !
    `;
  }

  if (worldState.missionComplete) {
    description = `
    Embarquez à bord du Fog Owl et commencez votre aventure !
    `;
    complete = true;
  }

  world.updateQuestStatus(LEVEL, TITLE, description, complete);
}

module.exports = updateQuestStatus