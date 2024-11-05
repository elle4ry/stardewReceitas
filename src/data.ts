interface Recipe {
    name: string;
    ingredients: { name: string; quantity: number; rarity: string }[];
    boosts: { description: string; effectDuration: string }[];
    npcPreferences: { likedBy: string[]; lovedBy: string[] };
    rarity: string;
}

export const recipesData: Recipe[] = [
    {
        name: "Salmon Dinner",
        ingredients: [
            { name: "Salmon", quantity: 1, rarity: "comum" },
            { name: "Amaranth", quantity: 1, rarity: "comum" },
            { name: "Kale", quantity: 1, rarity: "comum" }
        ],
        boosts: [
            { description: "Aumenta a Defesa", effectDuration: "5m" }
        ],
        npcPreferences: {
            likedBy: ["Elliot", "Leah"],
            lovedBy: ["Emily", "Linus"]
        },
        rarity: "raro"
    },
    {
        name: "Pumpkin Soup",
        ingredients: [
            { name: "Pumpkin", quantity: 1, rarity: "comum" },
            { name: "Milk", quantity: 1, rarity: "comum" }
        ],
        boosts: [
            { description: "Aumenta a Força", effectDuration: "3m" }
        ],
        npcPreferences: {
            likedBy: ["Shane", "Pam"],
            lovedBy: ["Abigail", "Jas"]
        },
        rarity: "muito raro"
    }
];
