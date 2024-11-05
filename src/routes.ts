import { Router, Request, Response } from 'express';
import { recipesData } from './data';

const routes = Router();

// Exemplo de endpoint GET
routes.get('/recipes/:name', (req: Request, res: Response) => {
    const { name } = req.params;
    const recipe = recipesData.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());

    if (recipe) {
        return res.json(recipe);
    } else {
        return res.status(404).json({ message: 'Receita não encontrada' });
    }
});

// Exemplo de endpoint POST
routes.post('/recipes', (req: Request, res: Response) => {
    const { name, ingredients, boosts, npcPreferences, rarity } = req.body;

    if (!name || !ingredients || !boosts || !npcPreferences || !rarity) {
        return res.status(400).json({ message: 'Por favor, forneça todos os campos necessários' });
    }

    const newRecipe = { name, ingredients, boosts, npcPreferences, rarity };
    recipesData.push(newRecipe);

    return res.status(201).json({ message: 'Receita adicionada com sucesso', recipe: newRecipe });
});

export { routes };
