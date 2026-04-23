/**
 * Robust utility layer to prevent Three.js NaN crashes
 */

/**
 * Safely converts any value to a number, falling back to a default if invalid.
 */
export const safeNumber = (value: any, fallback = 0): number => {
  const num = Number(value);
  return isNaN(num) || !isFinite(num) ? fallback : num;
};

/**
 * Sanitizes an array of numbers (like positions) to ensure no NaN values exist.
 * Replaces NaN or Infinity with the specified fallback.
 */
export const sanitizeBuffer = (array: Float32Array | number[], fallback = 0): Float32Array => {
  const result = array instanceof Float32Array ? array : new Float32Array(array);
  
  for (let i = 0; i < result.length; i++) {
    if (isNaN(result[i]) || !isFinite(result[i])) {
      result[i] = fallback;
    }
  }
  
  return result;
};

/**
 * Validates a position vector [x, y, z]
 */
export const safeVector3 = (x: any, y: any, z: any): [number, number, number] => {
  return [safeNumber(x), safeNumber(y), safeNumber(z)];
};
