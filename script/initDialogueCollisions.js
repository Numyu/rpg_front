
let cityDialogueCollisions = [


];

let coffeeDialogueCollisions = [
    // Pnj Bar
    {x:maleCitizen.position[0], y:maleCitizen.position[1], width: 50, height: 120, pnj: maleCitizen, dialogue: "yo broooo"},
]

let parcRightMapDialogueCollisions = [
    {x:engineer.position[0], y:engineer.position[1], width: 50, height: 120, pnj: engineer, dialogue: "yo broooo"},
];
let parcLeftMapDialogueCollisions = [
    {x:mayorWife.position[0], y:mayorWife.position[1], width: 50, height: 120, pnj: mayorWife, dialogue: "yo broooo"},
];
let parcMapDialogueCollisions = [
    // pnj piscine parc
    {x:femaleCitizen.position[0], y:femaleCitizen.position[1], width: 50, height: 120, pnj: femaleCitizen, dialogue: "yo broooo"},
];
let libraryMapDialogueCollisions = [
    // Message porte fermé
    {x:945, y:440, width: 16, height: 70, pnj: libraryBackDoor, dialogue:"Nécessite une clé pour ouvrir"},
    {x:librarian.position[0], y:librarian.position[1], width: 50, height: 120, pnj: librarian, dialogue: "yo broooo"},

];

let librarySecondMapDialogueCollisions = [
    {x:reader.position[0], y:reader.position[1], width: 50, height: 120, pnj: reader, dialogue: "yo broooo"},
];

let mapsDialogueCollisions = [cityDialogueCollisions, coffeeDialogueCollisions, parcRightMapDialogueCollisions, parcLeftMapDialogueCollisions, parcMapDialogueCollisions, libraryMapDialogueCollisions, librarySecondMapDialogueCollisions]

let pnjTalk;
let whichText;

function drawAllDialogueCollisionsBox() {
    ctx.fillStyle = "rgba(0,255,0,0.8)";

    mapsDialogueCollisions[currentMap].forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
    });
}

