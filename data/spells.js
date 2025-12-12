"use strict";

const spells = [
  { id: 1, name: "ホイミ", mp_cost: 3, type: "回復", effect: "味方1人のHPを約30回復", learner: "僧侶，賢者", level: 1 },
  { id: 2, name: "ベホイミ", mp_cost: 5, type: "回復", effect: "味方1人のHPを約80回復", learner: "僧侶，賢者", level: 14 },
  { id: 3, name: "ベホマ", mp_cost: 7, type: "回復", effect: "味方1人のHPを全回復", learner: "僧侶，賢者", level: 27 },
  { id: 4, name: "メラ", mp_cost: 2, type: "攻撃", effect: "敵1体に約10ダメージ", learner: "魔法使い，賢者", level: 1 },
  { id: 5, name: "メラミ", mp_cost: 4, type: "攻撃", effect: "敵1体に約80ダメージ", learner: "魔法使い，賢者", level: 19 },
  { id: 6, name: "ギラ", mp_cost: 4, type: "攻撃", effect: "敵全体に約20ダメージ", learner: "魔法使い，賢者", level: 4 },
  { id: 7, name: "ベギラマ", mp_cost: 6, type: "攻撃", effect: "敵全体に約40ダメージ", learner: "魔法使い，賢者", level: 14 },
  { id: 8, name: "ルーラ", mp_cost: 1, type: "移動", effect: "訪れた町に瞬時に移動", learner: "勇者，魔法使い，賢者", level: 7 },
  { id: 9, name: "リレミト", mp_cost: 8, type: "移動", effect: "ダンジョンから脱出", learner: "勇者，魔法使い，賢者", level: 12 },
  { id: 10, name: "スカラ", mp_cost: 3, type: "補助", effect: "味方1人の守備力を上げる", learner: "僧侶，賢者", level: 8 }
];

module.exports = spells;