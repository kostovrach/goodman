document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".main__card"));

  const pattern = [
    { type: "topical", column: "1 / span 2" },
    { type: "common", column: "4" },
    { type: "common", column: "1" },
    { type: "common", column: "3" },
    { type: "topical", column: "2 / span 2" },
    { type: "common", column: "4" },
    { type: "common", column: "1" },
    { type: "topical", column: "3 / span 2" },
    { type: "common", column: "1" },
    { type: "common", column: "2" },
    { type: "common", column: "4" },
  ];

  let topicalQueue = cards.filter((card) => card.hasAttribute("data-topical"));
  let commonQueue = cards.filter((card) => card.hasAttribute("data-common"));

  const totalGroups = Math.floor(cards.length / 6);

  let groupIndex = 0;
  let allPlaced = [];

  while (topicalQueue.length + commonQueue.length > 0) {
    for (let i = 0; i < 6; i++) {
      const patternItem = pattern[i];
      let targetCard;

      if (patternItem.type === "topical") {
        targetCard = topicalQueue.shift();
      } else {
        targetCard = commonQueue.shift();
      }

      if (targetCard) {
        targetCard.style.gridColumn = patternItem.column;
        allPlaced.push(targetCard);
      }
    }

    groupIndex++;
  }

  const container = document.querySelector(".main__content");
  container.innerHTML = "";
  allPlaced.forEach((card) => container.appendChild(card));
});
