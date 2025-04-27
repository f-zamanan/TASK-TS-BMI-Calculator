/**
 * Calculate BMI
 * - Accepts weight in KG as a parameter (type number)
 * - Accepts height in CM as a parameter (type number)
 * - returns the calculated BMI (type number)
 * - The equation for BMI is (weight (kg) / height^2(m)).
 */
function calculateBMI(weight: number, height: number): number {
  // Write your code here 👇🏼
  height = height / 100;
  const BMI = weight / (height * height); // convert to m
  // Stop making changes here!
  return BMI;
}

/**
 * Get BMI State
 * - Accepts BMI as a parameter (type number)
 * - returns a BMIStatus type indicating the BMI category (type BMIStatus)
 */

// Don't change this type
type BMIStatus = "underweight" | "healthy" | "overweight" | "obese";

function getBMIState(BMI: number): BMIStatus {
  // Don't change this variable
  let BMIState: BMIStatus = "obese";
  // Write your code here 👇🏼
  if (BMI < 18.5) {
    BMIState = "underweight";
  } else if (BMI >= 18.5 && BMI < 25.0) {
    BMIState = "healthy";
  } else if (BMI >= 25.0 && BMI < 30.0) {
    BMIState = "overweight";
  } else if (BMI >= 30.0) {
    BMIState = "obese";
  }
  // Stop making changes here!
  return BMIState;
}

/**
 * Get BMI State by Age
 * - Accepts BMI as a parameter (type number)
 * - Accepts age as a parameter (type number)
 * - returns a HealthStatus type indicating the BMI state (type HealthStatus)
 */

// Don't change this type
type HealthStatus = "not healthy" | "healthy";

function getBMIStateByAge(BMI: number, age: number): HealthStatus {
  // Don't change this variable
  let BMIState: HealthStatus = "not healthy";
  // Write your code here 👇🏼

  if (age >= 19 && age < 25) {
    // range (19-24, both included)
    if (BMI >= 19 && BMI < 25) {
      // range (19-24, both included) // ex: age = 35, bmi = 30 expected: not healthy, it's not running as expected
      BMIState = "healthy";
    }
  } else if (age >= 25 && age < 35) {
    // range (25-34, both included)
    if (BMI >= 20 && BMI < 26) {
      BMIState = "healthy";
    }
  } else if (age >= 35 && age < 45) {
    // range (35-44, both included)
    if (BMI >= 21 && BMI < 27) {
      BMIState = "healthy";
    }
  } else if (age >= 45 && age < 55) {
    // range (45-54, both included)
    if (BMI >= 22 && BMI < 28) {
      BMIState = "healthy";
    }
  } else if (age >= 55 && age < 65) {
    // range (55-64, both included)
    if (BMI >= 23 && BMI < 29) {
      BMIState = "healthy";
    }
  } else if (age >= 65 && BMI >= 24) {
    // range ( equal or ggreater to 65)
    if (BMI >= 24 && BMI < 30) {
      BMIState = "healthy";
    }
  }

  // Stop making changes here!
  return BMIState;
}

export { calculateBMI, getBMIState, getBMIStateByAge };
