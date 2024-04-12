import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div id="presentation">
        <div className="h-container">
          <h2>
            Développeur·euse, il t'est déjà arrivé d'avoir des difficultés
            pour...
          </h2>
        </div>
        <ul>
          <li>Te sentir légitime dans le monde de la tech&nbsp;?</li>
          <li>Évaluer ton niveau réel&nbsp;?</li>,
          <li>Exprimer tes insécurités au travail&nbsp;?</li>
          <li>Te motiver pour continuer à monter en compétences&nbsp;?</li>
        </ul>
        <div id="animation-wrapper"></div>
      </div>
    </main>
  );
}
