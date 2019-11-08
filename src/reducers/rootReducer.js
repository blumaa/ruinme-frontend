const initState = {
  users: [
    {age: 53,
      bio: "Dead on the inside, dead on the outside",
      created_at: "2019-11-07T17:33:43.112Z",
      display_name: "Tom Jumbo-Grumbo",
      email: "ernie@zemlaklittle.co",
      gender: "Jacked Forrester",
      id: 5,
      looking_for: "0101",
      updated_at: "2019-11-07T17:33:43.112Z",
      zip_code: "60647"},
    {age: 26,
      bio: "For a lot of people, life is just one long, hard kick in the urethra",
      created_at: "2019-11-07T17:33:43.132Z",
      display_name: "Rutabaga Rabbitowitz",
      email: "elton@carroll.io",
      gender: "Reg's Select",
      id: 9,
      looking_for: "0101",
      updated_at: "2019-11-07T17:33:43.132Z",
      zip_code: "60647"},
    {age: 39,
      bio: "Spaghetti or not, here I come",
      created_at: "2019-11-07T17:33:43.149Z",
      display_name: "BoJack Horseman",
      email: "hilaria@welch.info",
      gender: "Express Bean",
      id: 12,
      looking_for: "0101",
      updated_at: "2019-11-07T17:33:43.149Z",
      zip_code: "60647"}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer
