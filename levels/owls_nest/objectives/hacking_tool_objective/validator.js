module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const passcode = helper.getNormalizedInput('passcode');
  const worldState = helper.context.levelState['com.twilioquest.owls_nest'];

  if (!worldState.hackingToolAcquired) {
    return helper.fail(`
      Le contournement de ce système nécessite l'<strong>outil de piratage</strong>. 
      Obtenez l'outil de piratage en marchant vers le piédestal dans cette pièce et en appuyant sur 
      la barre d'espacement.
    `);
  }

  if (!passcode) {
    return helper.fail('BZZZT ! Le code d\'annulation du laser est requis.');
  }

  if (passcode !== 'level up') {
    return helper.fail(`
      Le code d'accès n'est pas reconnu. Veuillez lire la section "Objectif" de l'interface de
      interface de piratage pour révéler le bon code d'accès.
    `);
  }

  // The way we usually write validators is to fail fast, and then if we reach
  // the end, we know the user got all the answers right!
  helper.success(`
    Vous entrez le code d'accès nécessaire pour contourner les lasers. Peu après, les lasers
    se rétractent et libèrent votre chemin vers le Fog Owl!
  `);
};
