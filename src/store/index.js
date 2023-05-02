import {
    ADD_ADDITION,
    ADD_FILLING,
    CHOOSE_SIZE
} from './actions.js'

export const initialState = {
    burger: null,
    fillings: [],
    additions: [],
  };

export const reducer = (state, action) => {
    switch (action.type) {
      case CHOOSE_SIZE:
        return {
          ...state,
          burger: action.payload,
        };
      case ADD_FILLING:
        return {
          ...state,
          fillings: [...state.fillings, action.payload],
        };
      case ADD_ADDITION:
        return {
          ...state,
          additions: [...state.additions, action.payload],
        };
      default:
        return state;
    }
  };










// const goods = {
//     burgers: [{
//             id: 1,
//             name: "big hamburger",
//             src: "/src/assets/big-hamburger.png",
//             count: 0,
//             selected: false
//         },
//         {
//             id: 2,
//             name: "small hamburger",
//             src: "/src/assets/small-hamburger.png",
//             count: 0,
//             selected: false
//         },
//     ],
//     fillings: [{
//             id: 1,
//             name: "cheese",
//             src: "/src/assets/cheese.png",
//             selected: false,
//         },
//         {
//             id: 2,
//             name: "lettuce",
//             src: "/src/assets/lettuce.png",
//             selected: false,
//         },
//         {
//             id: 3,
//             name: "french fry",
//             src: "/src/assets/French-Fries.png",
//             selected: false,
//         },
//     ],
//     added: [{
//             id: 1,
//             name: "spices",
//             src: "/src/assets/spices.webp",
//             selected: false,
//         },
//         {
//             id: 2,
//             name: "mayo",
//             src: "/src/assets/Mayo.png",
//             selected: false,
//         },
//     ],
// };