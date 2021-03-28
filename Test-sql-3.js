const rooms = [
  {
    id: 260944,
    title: 'Room1',
    caster_uid: 'uab123',
    is_pk_rooms: true,
  },
  {
    id: 260945,
    title: 'Room2',
    caster_uid: 'uab124',
    is_pk_rooms: true,
  },
  {
    id: 260946,
    title: 'Room3',
    caster_uid: 'uab125',
    is_pk_rooms: false,
  },
  {
    id: 260947,
    title: 'Room4',
    caster_uid: 'uab128',
    is_pk_rooms: false,
  },
];

const casters = [
  {
    caster_uid: 'uab123',
    display_name: 'Bob',
    rank: 7,
  },
  {
    caster_uid: 'uab124',
    display_name: 'Alice',
    rank: 3,
  },
  {
    caster_uid: 'uab125',
    display_name: 'Bob',
    rank: 8,
  },
  {
    caster_uid: 'uab128',
    display_name: 'Bob',
    rank: 1,
  },
];

const roomsSortCondition = (a, b) => {
  if (a.is_pk_rooms && !b.is_pk_rooms) {
    return -1;
  }
  if (!a.is_pk_rooms && b.is_pk_rooms) {
    return 1;
  }
  if ((a.is_pk_rooms && b.is_pk_rooms) || (!a.is_pk_rooms && !b.is_pk_rooms)) {
    const casterA = casters.find((e) => e.caster_uid === a.caster_uid);
    const casterB = casters.find((e) => e.caster_uid === b.caster_uid);
    if (casterA.rank < casterB.rank) {
      return -1;
    }
    if (casterA.rank > casterB.rank) {
      return 1;
    }
  }
  return 0;
};

function feed() {
  /* 
    Write your code here 
    */
  const results = [];
  rooms.sort(roomsSortCondition);
  let index = 0;
  for (const room of rooms) {
    const caster = casters.find((e) => e.caster_uid === room.caster_uid);
    results.push({
      id: index,
      title: room.title,
      caster_uid: room.caster_uid,
      is_pk_rooms: room.is_pk_rooms,
      score: 'xxxxx',
      user: {
        caster_uid: caster.caster_uid,
        display_name: caster.display_name,
        rank: caster.rank,
      },
    });
    index += 1;
  }

  /* Response format
    [
      {
        id: xxxx,
        title: 'xxxx
        caster_uid: 'xxxx,
        is_pk_rooms: false,
        score: xxxxx
        user: {
          caster_uid: 'xxxx',
          display_name: 'xxx'
          rank: xxx
        }
      },
      ....
    ]
    */
  return results;
}
