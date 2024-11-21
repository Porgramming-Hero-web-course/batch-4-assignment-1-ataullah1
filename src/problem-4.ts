type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(obj: Shape): number {
  if (obj.shape === "circle") {
    const area: string = (Math.PI * obj.radius ** 2).toFixed(2);
    return parseFloat(area);
  } else if (obj.shape === "rectangle") {
    return obj.width * obj.height;
  }
  throw new Error("please input valid shape");
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(circleArea);
console.log(rectangleArea);
