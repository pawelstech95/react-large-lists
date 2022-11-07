// @todo check types
//@todo loading
export interface RecipeData {
    recipes: Recipe[]
}
export interface Recipe {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number;
    cookingMinutes: number;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: ExtendedIngredient[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image?: string;
    imageType?: string;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: any[];
    winePairing: WinePairing;
    instructions: string; //@todo był null
    analyzedInstructions: any[];
    originalId: null;
    spoonacularSourceUrl: string;
}

export interface ExtendedIngredient {
    id: number;
    aisle: null | string;
    image: null | string;
    consistency: string;
    name: string;
    nameClean: null | string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    measures: Measures;
}

export interface Measures {
    us: Metric;
    metric: Metric;
}

export interface Metric {
    amount: number;
    unitShort: string;
    unitLong: string;
}

export interface WinePairing {
    pairedWines: any[];
    pairingText: string;
    productMatches: any[];
}