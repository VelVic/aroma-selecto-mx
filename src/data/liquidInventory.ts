export interface LiquidInventory {
  perfumeId: string;
  totalMl: number;
  decantsSold: Array<{
    decantId: string;
    size: number;
    quantity: number;
  }>;
}

export const liquidInventories: LiquidInventory[] = [
  {
    perfumeId: 'nautica_voyage',
    totalMl: 200,
    decantsSold: [
      { decantId: 'decant_nautica_voyage_3ml', size: 3, quantity: 2 },
      { decantId: 'decant_nautica_voyage_5ml', size: 5, quantity: 1 }
    ]
  }
  // ...otros inventarios...
];
