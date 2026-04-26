// TypeScript type definitions

type Player = {
    id: number;
    name: string;
    level: number;
    experience: number;
};

type Enemy = {
    id: number;
    type: string;
    health: number;
};

export type { Player, Enemy };