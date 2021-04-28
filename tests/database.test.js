const db = require('./../models/database');

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

// TEACHERS TEST
test('create teacher', async () => {
  expect.assertions(1);
  const teacher = await db.teachers.create({
    first_name: 'Wuttinun',
    last_name: 'Chanfar',
  });
  expect(teacher.id).toEqual(1);
});

test('create teachers', async () => {
  expect.assertions(2);
  const teacher2 = await db.teachers.create({
    first_name: 'Wuttinun2',
    last_name: 'Chanfar2',
  });
  const teacher3 = await db.teachers.create({
    first_name: 'Wuttinun3',
    last_name: 'Chanfar3',
  });
  expect(teacher2.id).toEqual(2);
  expect(teacher3.id).toEqual(3);
});

test('get teacher', async () => {
  expect.assertions(2);
  const teacher = await db.teachers.findByPk(1);
  expect(teacher.first_name).toEqual('Wuttinun');
  expect(teacher.last_name).toEqual('Chanfar');
});

test('delete person', async () => {
  expect.assertions(1);
  await db.teachers.destroy({
    where: {
      id: 1,
    },
  });
  const teacher = await db.teachers.findByPk(1);
  expect(teacher).toBeNull();
});

afterAll(async () => {
  await db.sequelize.close();
});
