const db = require('./database');

beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

test('create team', async () => {
  expect.assertions(1);
  const team = await db.Team.create({
      id: 1,
      name: 'Pies',
  });
  expect(team.id).toEqual(1);
});

test('get team', async () => {
  expect.assertions(1);
  const team = await db.Team.findByPk(1);
  expect(team.name).toEqual('Pies');
});

test('create bet', async () => {
  expect.assertions(1);
  const bet = await db.Bet.create({
      TeamId: 1,
      amount: 300,
  });
  expect(bet.id).toEqual(1);
});

test('get bet', async () => {
  expect.assertions(2);
  const bet = await db.Bet.findByPk(1, { include: [{
    model: db.Team
    }]}
  );
  expect(bet.amount).toEqual(300);
  expect(bet.Team.name).toEqual('Pies');
});

test('delete bet', async () => {
  expect.assertions(1);
  await db.Bet.destroy({
      where: {
          id: 1
      }
  });
  const bet = await db.Bet.findByPk(1);
  expect(bet).toBeNull();
});

test('delete team', async () => {
  expect.assertions(1);
  await db.Team.destroy({
      where: {
          id: 1
      }
  });
  const team = await db.Team.findByPk(1);
  expect(team).toBeNull();
});

afterAll(async () => {
  await db.sequelize.close();
});