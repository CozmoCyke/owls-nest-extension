module.exports = async function (helper) {
  if (
    !helper.validationFields.answer1 ||
    helper.validationFields.answer1 !== 'true'
  ) {
    return helper.fail(`
    La première réponse est incorrecte. Les logiciels installés sur votre ordinateur
    ont souvent un accès privilégié à vos données et fichiers personnels. Vous devez donc
    faire attention à ce que vous téléchargez et installez sur votre ordinateur !
    `);
  }

  if (
    !helper.validationFields.answer2 ||
    helper.validationFields.answer2 !== 'false'
  ) {
    return helper.fail(`
    La deuxième réponse est incorrecte. Le code que vous copiez et collez depuis l'Internet
    Internet peut être utile, mais assurez-vous de savoir ce qu'il fait avant de l'exécuter !
    `);
  }

  if (
    !helper.validationFields.answer3 ||
    helper.validationFields.answer3 !== 'false'
  ) {
    return helper.fail(`
    La troisième réponse est incorrecte. Il est risqué de conserver des données personnelles comme
    adresses électroniques ou les mots de passe dans un fichier codé. Vous pourriez accidentellement
    partager le code avec quelqu'un d'autre, ce qui violerait votre vie privée ou celle d'autres personnes.
    Soyez prudent avec les données personnelles ! Assurez-vous de savoir
    comment elles seront stockées, et que votre code ne permet pas à une autre personne de les voir sans raison valable.
  `) ;
  }

  helper.success(`
  Vous l'avez fait ! Après avoir confirmé tes connaissances en matière de sécurité informatique, le coffre
  s'ouvre et tu récupères l'extincteur dont tu auras besoin pour sauver Ryan.
  `);
};
