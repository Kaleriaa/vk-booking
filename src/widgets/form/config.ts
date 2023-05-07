const floors = []
const rooms = []
for (let i = 3; i < 28; i++) floors.push(i)
for (let i = 1; i < 11; i++) rooms.push(i)

export const times = [
    '15 минут',
    '20 минут',
    '30 минут',
    '1 час',
    '2 часа',
    '3 часа',
]

export const selects = [
    {
        id: 'tower',
        title: 'Выберите башню',
        values: ['A', 'B'],
    },
    {
        id: 'floor',
        title: 'Выберите этаж',
        values: [...floors],
    },
    {
        id: 'room',
        title: 'Выберите комнату',
        values: [...rooms],
    },
]
