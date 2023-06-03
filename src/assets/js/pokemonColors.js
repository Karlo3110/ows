export function getBackgroundColor(type) {
  switch (type) {
    case "normal":
      return "#9FA876";
    case "fire":
      return "#FF8019";
    case "water":
      return "#6990F6";
    case "grass":
      return "#3EC85E";
    case "electric":
      return "#EAD026";
    case "ice":
      return "#7CD8E2";
    case "fighting":
      return "#FD300B";
    case "poison":
      return "#DD408C";
    case "ground":
      return "#DDC060";
    case "flying":
      return "#C590EA";
    case "psychic":
      return "#FF5868";
    case "bug":
      return "#83B821";
    case "rock":
      return "#AEA032";
    case "ghost":
      return "#875892";
    case "dark":
      return "#775842";
    case "dragon":
      return "#AE38EC";
    case "steel":
      return "#BDB8CE";
    case "fairy":
      return "#FFB6AF";
    default:
      return "#A8A878";
  }
}
