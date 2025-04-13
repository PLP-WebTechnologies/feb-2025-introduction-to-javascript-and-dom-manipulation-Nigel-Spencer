function changeHeading() {
    const heading = document.getElementById("dynamic-heading");
    heading.textContent = "Let's Learn Chess Together!";
    heading.style.color = "darkgreen";
    heading.style.fontSize = "28px";
    heading.style.fontWeight = "bold";
  }
  
  const quotes = [
    `"Chess is the gymnasium of the mind." – Blaise Pascal`,
    `"When you see a good move, look for a better one." – Emanuel Lasker`,
    `"In life, as in chess, forethought wins." – Charles Buxton`,
    `"Chess is life in miniature." – Garry Kasparov`,
    `"Every chess master was once a beginner." – Irving Chernev`,
    `"Chess holds its master in its own bonds." – Albert Einstein`,
    `"The beauty of a move lies not in its appearance but in the thought behind it." – Aron Nimzowitsch`,
    `"Play the opening like a book, the middlegame like a magician, and the endgame like a machine." – Rudolf Spielmann`,
    `"I don't believe in psychology. I believe in good moves." – Bobby Fischer`,
    `"You must take your opponent into a deep dark forest..." – Mikhail Tal`,
    `"Even a poor plan is better than no plan at all." – Mikhail Chigorin`,
    `"To avoid losing a piece, many a player has lost the game." – Savielly Tartakower`,
    `"The hardest game to win is a won game." – Emanuel Lasker`,
    `"Help your pieces so they can help you." – Paul Morphy`,
    `"Without error there can be no brilliancy." – Emanuel Lasker`,
    `"Chess is everything: art, science, and sport." – Anatoly Karpov`,
    `"The winner of the game is the player who makes the next-to-last mistake." – Savielly Tartakower`,
    `"One doesn’t have to play well – it’s enough to play better than your opponent." – Siegbert Tarrasch`,
    `"Chess is mental torture." – Garry Kasparov`,
    `"A sacrifice is best refuted by accepting it." – Wilhelm Steinitz`,
  ];
  
  let quoteIndex = 0;
  
  function toggleQuote() {
    const container = document.getElementById("quote-container");
  
    let quoteEl = document.getElementById("chess-quote");
    if (!quoteEl) {
      quoteEl = document.createElement("blockquote");
      quoteEl.id = "chess-quote";
      quoteEl.style.marginTop = "15px";
      quoteEl.style.fontStyle = "italic";
      container.appendChild(quoteEl);
    }
  
    quoteEl.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }