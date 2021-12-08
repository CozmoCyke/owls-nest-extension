<%
const worldState = levelState['com.twilioquest.owls_nest'];
%>

# Apprendre l'interface Hack

<div class="aside">
<h3>Liste de tâches à accomplir</h3>
<ul>
  <li>Prenez l'outil de piratage sur le piédestal dans cette pièce.</li>
  <li>Trouvez le code secret dans l'onglet "Objective" (cet écran).</li>
  <li>Saisissez le code d'accès dans le champ situé à droite, puis cliquez sur <em>HACK</em>.</li>
</ul>
</div>

Le monde de TwilioQuest est rempli d'**objets piratables**, comme ce terminal. En utilisant l'outil de piratage de pointe développé par le programme TwilioQuest, vous pourrez pirater ces objets en relevant des défis techniques (et non techniques). Ces défis peuvent consister à répondre à des questions, à écrire du code dans un fichier sur votre ordinateur, et bien plus encore.

Pour relever ce défi, vous devez **acquérir le dispositif de piratage qui se trouve sur le piédestal dans cette pièce**. Le code d'accès requis pour contourner la barrière laser apparaîtra alors dans la case ci-dessous. Tapez le code dans le champ de texte à droite et cliquez sur *HACK* pour faire tomber la barrière laser.

<style>
.passcode {
  color: #eee;
  padding: 10px;
  text-align: center;
}

.passcode h3 {
  font-size: 1.5em;
  border-bottom: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-weight: bold;
  text-transform: uppercase;
}

.passcode p {
  margin: 0 0 5px 0;
  padding: 0;
}

.passcode-locked {
  border: 5px solid #8B0000;
  background-color: #DC143C;
}

.passcode-open {
  border: 5px solid #8FBC8F;
  background-color: #7FFF00;
  color: #232323;
}
</style>

<% if (worldState.hackingToolAcquired) { %>
<div class="passcode passcode-open">
<h3>CODE D'ACCÈS DISPONIBLE</h3>
<p>
Le code de contournement du laser est : <b>LEVEL UP</b>
</p>
<p>
<i>Saisissez ce code dans le champ de texte situé à droite et cliquez sur "HACK".</i>
</p>
</div>
<% } else { %>
<div class="passcode passcode-locked">
<h3>CODE D'ACCÈS VERROUILLÉ</h3>
<p>
L'outil de piratage est nécessaire pour contourner ce système et voir le code d'accès. <b>Trouve-le sur le piédestal dans cette pièce</b>.
</p>
</div>
<% } %>
