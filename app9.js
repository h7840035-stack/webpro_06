"use strict";

const express = require('express');
const app = express();
const PORT = 8080;

// データの読み込み
let monsters = require('./data/monsters');
let items = require('./data/items');
let spells = require('./data/spells');

// ミドルウェア設定
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// ==================== ポータルページ ====================
app.get('/', (req, res) => {
  res.render('index');
});

// ==================== モンスター管理システム ====================

// 一覧表示
app.get('/monsters/index', (req, res) => {
  res.render('monsters/index', { monsters: monsters });
});

// 詳細表示
app.get('/monsters/show/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const monster = monsters.find(m => m.id === id);
  if (monster) {
    res.render('monsters/show', { monster: monster });
  } else {
    res.status(404).send('モンスターが見つかりません');
  }
});

// 追加画面
app.get('/monsters/new', (req, res) => {
  res.render('monsters/new');
});

// 追加処理
app.post('/monsters/create', (req, res) => {
  const newId = monsters.length > 0 ? Math.max(...monsters.map(m => m.id)) + 1 : 1;
  const newMonster = {
    id: newId,
    name: req.body.name,
    hp: parseInt(req.body.hp),
    mp: parseInt(req.body.mp),
    attack: parseInt(req.body.attack),
    defense: parseInt(req.body.defense),
    exp: parseInt(req.body.exp),
    gold: parseInt(req.body.gold),
    habitat: req.body.habitat
  };
  monsters.push(newMonster);
  res.redirect('/monsters/index');
});

// 編集画面
app.get('/monsters/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const monster = monsters.find(m => m.id === id);
  if (monster) {
    res.render('monsters/edit', { monster: monster });
  } else {
    res.status(404).send('モンスターが見つかりません');
  }
});

// 更新処理
app.post('/monsters/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = monsters.findIndex(m => m.id === id);
  if (index !== -1) {
    monsters[index] = {
      id: id,
      name: req.body.name,
      hp: parseInt(req.body.hp),
      mp: parseInt(req.body.mp),
      attack: parseInt(req.body.attack),
      defense: parseInt(req.body.defense),
      exp: parseInt(req.body.exp),
      gold: parseInt(req.body.gold),
      habitat: req.body.habitat
    };
    res.redirect('/monsters/show/' + id);
  } else {
    res.status(404).send('モンスターが見つかりません');
  }
});

// 削除処理
app.post('/monsters/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = monsters.findIndex(m => m.id === id);
  if (index !== -1) {
    monsters.splice(index, 1);
    res.redirect('/monsters/index');
  } else {
    res.status(404).send('モンスターが見つかりません');
  }
});

// ==================== アイテム管理システム ====================

// 一覧表示
app.get('/items/index', (req, res) => {
  res.render('items/index', { items: items });
});

// 詳細表示
app.get('/items/show/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (item) {
    res.render('items/show', { item: item });
  } else {
    res.status(404).send('アイテムが見つかりません');
  }
});

// 追加画面
app.get('/items/new', (req, res) => {
  res.render('items/new');
});

// 追加処理
app.post('/items/create', (req, res) => {
  const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
  const newItem = {
    id: newId,
    name: req.body.name,
    type: req.body.type,
    price: parseInt(req.body.price),
    effect: req.body.effect,
    equipable: req.body.equipable
  };
  items.push(newItem);
  res.redirect('/items/index');
});

// 編集画面
app.get('/items/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (item) {
    res.render('items/edit', { item: item });
  } else {
    res.status(404).send('アイテムが見つかりません');
  }
});

// 更新処理
app.post('/items/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index !== -1) {
    items[index] = {
      id: id,
      name: req.body.name,
      type: req.body.type,
      price: parseInt(req.body.price),
      effect: req.body.effect,
      equipable: req.body.equipable
    };
    res.redirect('/items/show/' + id);
  } else {
    res.status(404).send('アイテムが見つかりません');
  }
});

// 削除処理
app.post('/items/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.redirect('/items/index');
  } else {
    res.status(404).send('アイテムが見つかりません');
  }
});

// ==================== 呪文管理システム ====================

// 一覧表示
app.get('/spells/index', (req, res) => {
  res.render('spells/index', { spells: spells });
});

// 詳細表示
app.get('/spells/show/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const spell = spells.find(s => s.id === id);
  if (spell) {
    res.render('spells/show', { spell: spell });
  } else {
    res.status(404).send('呪文が見つかりません');
  }
});

// 追加画面
app.get('/spells/new', (req, res) => {
  res.render('spells/new');
});

// 追加処理
app.post('/spells/create', (req, res) => {
  const newId = spells.length > 0 ? Math.max(...spells.map(s => s.id)) + 1 : 1;
  const newSpell = {
    id: newId,
    name: req.body.name,
    mp_cost: parseInt(req.body.mp_cost),
    type: req.body.type,
    effect: req.body.effect,
    learner: req.body.learner,
    level: parseInt(req.body.level)
  };
  spells.push(newSpell);
  res.redirect('/spells/index');
});

// 編集画面
app.get('/spells/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const spell = spells.find(s => s.id === id);
  if (spell) {
    res.render('spells/edit', { spell: spell });
  } else {
    res.status(404).send('呪文が見つかりません');
  }
});

// 更新処理
app.post('/spells/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = spells.findIndex(s => s.id === id);
  if (index !== -1) {
    spells[index] = {
      id: id,
      name: req.body.name,
      mp_cost: parseInt(req.body.mp_cost),
      type: req.body.type,
      effect: req.body.effect,
      learner: req.body.learner,
      level: parseInt(req.body.level)
    };
    res.redirect('/spells/show/' + id);
  } else {
    res.status(404).send('呪文が見つかりません');
  }
});

// 削除処理
app.post('/spells/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = spells.findIndex(s => s.id === id);
  if (index !== -1) {
    spells.splice(index, 1);
    res.redirect('/spells/index');
  } else {
    res.status(404).send('呪文が見つかりません');
  }
});

// サーバ起動
app.listen(PORT, () => {
  console.log(`サーバ起動中: http://localhost:${PORT}`);
});

