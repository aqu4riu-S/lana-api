let albums = [
  {
    id: "1",
    title: "Born To Die",
    genre: ["Alternative pop", "baroque pop", "trip hop", "indie pop"],
    releasedYear: 2012,
  },
  {
    id: "2",
    title: "Paradise",
    genre: ["Baroque pop", "trip hop"],
    releasedYear: 2012,
  },
  {
    id: "3",
    title: "Ultraviolence",
    genre: ["Psychedelic rock", "desert rock", "dream pop"],
    releasedYear: 2014,
  },
  {
    id: "4",
    title: "Honeymoon",
    genre: ["Baroque pop", "dream pop", "trip hop", "ambient"],
    releasedYear: 2015,
  },
  {
    id: "5",
    title: "Lust for Life",
    genre: ["Pop", "alt-pop", "folk", "trap-pop"],
    releasedYear: 2017,
  },
  {
    id: "6",
    title: "Norman Fucking Rockwell",
    genre: [
      "Soft rock",
      "pop",
      "psychedelic rock",
      "folk rock",
      "psychedelic pop",
    ],
    releasedYear: 2019,
  },
  {
    id: "7",
    title: "Chemtrails over the country club",
    genre: ["Folk", "Americana", "country folk"],
    releasedYear: 2021,
  },
  {
    id: "8",
    title: "Blue Banisters",
    genre: ["Folk", "pop", "jazz", "Americana"],
    releasedYear: 2021,
  },
  {
    id: "9",
    title: "Did You Know",
    genre: ["Americana", "alt-pop"],
    releasedYear: 2023,
  },
];

let reviews = [
  {
    id: "1",
    source: "NOW Magazine",
    rating: 100,
    content:
      "Piano, reverb and guitar fuzz make it Del Rey’s dreamiest and most cohesive album since 2015’s Honeymoon and her most rock-inspired since 2014’s Ultraviolence. The National Anthem singer adds new shade to her ongoing California period, re-evaluating the narrative of life in the United States that she’s built her brand on.",
    album_id: 6,
  },
  {
    id: "2",
    source: "New Musical Express (NME)",
    rating: 100,
    content:
      "Lana Del Rey is large – she contains multitudes, and the way she balances and embodies them on her fifth album is nothing short of stunning.",
    album_id: 6,
  },
  {
    id: "3",
    source: "Pitchfork",
    rating: 94,
    content:
      "On her elegant and complex fifth album, Lana Del Rey sings exquisitely of freedom and transformation and the wreckage of being alive. It establishes her as one of America’s greatest living songwriters.",
    album_id: 6,
  },
  {
    id: "4",
    source: "Variety",
    rating: 91,
    content:
      "This album is a rich feast. Even if, to get the full gist of things, it does call for research and multitasking. ... As for the writing itself, there’s not an unfascinating moment on the album, whether she’s making characteristically quotable, glaringly bold declarations or leading attentive superfans into obscure rabbit holes.",
    album_id: 9,
  },
  {
    id: "5",
    source: "Los Angeles Times",
    rating: 90,
    content:
      "Line by line, her lyrics deliver a staggering blend of the profound and the vernacular. ... At 77 minutes in length, “Ocean Blvd” risks tiring the listener’s ear, which is why Del Rey and her co-producers — Antonoff along with Drew Erickson, Zach Dawes and Mike Hermosa — keep folding unexpected sounds and textures into the album’s largely piano-based arrangements.",
    album_id: 9,
  },
  {
    id: "6",
    source: "Exclaim",
    rating: 90,
    content: "It's a lurid, scuzzy, electrifying return to form.",
    album_id: 9,
  },
  {
    id: "7",
    source: "The A.V. Club",
    rating: 83,
    content:
      "While Chemtrails was cause for concern that Del Rey had perhaps lost her magic touch, Banisters is a reminder that when the singer-songwriter is in charge of her vision and fully taps into her emotions, she’s still capable of crafting breathtaking beauty.",
    album_id: 8,
  },
  {
    id: "8",
    source: "Variety",
    rating: 82,
    content:
      "“Blue Banisters” might lack the majesty of “Norman Fucking Rockwell” or the commercial sheen of “Born To Die,” but it offers a rare glimpse of an artist securing her legacy, one song at a time.",
    album_id: 8,
  },
  {
    id: "9",
    source: "Rolling Stone",
    rating: 80,
    content:
      "She has often made intimacy seem transactional. But here, it feels pure.",
    album_id: 8,
  },
];

let authors = [
  {
    id: "1",
    name: "The A.V. Club",
  },
  {
    id: "2",
    name: "Variety",
  },
  {
    id: "3",
    name: "Rolling Stone",
  },
  {
    id: "4",
    name: "Los Angeles Time",
  },
  {
    id: "5",
    name: "Exclaim",
  },
  {
    id: "6",
    name: "NOW Magazine",
  },
  {
    id: "7",
    name: "New Musical Express (NME)",
  },
  {
    id: "8",
    name: "Pitchfork",
  },
];

export default { albums, reviews, authors };
