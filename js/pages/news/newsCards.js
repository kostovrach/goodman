document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".main__content");
  const tags = document.querySelectorAll(".main__tag");

  const allCards = Array.from(document.querySelectorAll(".main__card"));
  const topicalQueue = allCards.filter((card) =>
    card.hasAttribute("data-topical")
  );
  const commonQueue = allCards.filter((card) =>
    card.hasAttribute("data-common")
  );

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

  let allPlaced = [];
  let topicalQ = [...topicalQueue];
  let commonQ = [...commonQueue];

  while (topicalQ.length + commonQ.length > 0) {
    for (let i = 0; i < pattern.length; i++) {
      const p = pattern[i];
      let card = p.type === "topical" ? topicalQ.shift() : commonQ.shift();
      if (card) {
        card.style.gridColumn = p.column;
        allPlaced.push(card);
      }
    }
  }

  container.innerHTML = "";
  allPlaced.forEach((card) => container.appendChild(card));

  function filterCards(type) {
    allPlaced.forEach((card) => {
      const cardType = card.dataset.type;
      if (type === "all" || cardType === type) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      tags.forEach((t) => t.classList.remove("active"));
      tag.classList.add("active");
      const type = tag.dataset.type;
      filterCards(type);
    });
  });
});
