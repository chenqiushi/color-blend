/**
 * Algorithms for separable blend modes (i.e. where the same algorithms is applied to each color channel)
 * @see https://www.w3.org/TR/compositing-1/#blendingseparable
 */

/**
 * Blend two color channels with the "normal" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
// @ts-ignore the unused first parameter to comply with the interface
export function normal(backdrop: number, source: number) {
  return source
}

/**
 * Blend two color channels with the "multiply" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
export function multiply(backdrop: number, source: number) {
  return backdrop * source
}

/**
 * Blend two color channels with the "screen" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
export function screen(backdrop: number, source: number) {
  return backdrop + source - backdrop * source
}

/**
 * Blend two color channels with the "overlay" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
export function overlay(backdrop: number, source: number) {
  return hardLight(source, backdrop)
}

/**
 * Blend two color channels with the "darken" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
export function darken(backdrop: number, source: number) {
  return Math.min(backdrop, source)
}

/**
 * Blend two color channels with the "lighten" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
export function lighten(backdrop: number, source: number) {
  return Math.min(Math.max(backdrop, source), 1)
}

/**
 * Blend two color channels with the "color dodge" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
export function colorDodge(backdrop: number, source: number) {
  return backdrop === 0
    ? 0
    : source === 1
    ? 1
    : Math.min(1, backdrop / (1 - source))
}

/**
 * Blend two color channels with the "color burn" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
export function colorBurn(backdrop: number, source: number) {
  return backdrop === 1
    ? 1
    : source === 0
    ? 0
    : 1 - Math.min(1, (1 - backdrop) / source)
}

/**
 * Blend two color channels with the "hard light" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
export function hardLight(backdrop: number, source: number) {
  return source <= 0.5
    ? multiply(backdrop, 2 * source)
    : screen(backdrop, 2 * source - 1)
}

/**
 * Blend two color channels with the "soft light" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
export function softLight(backdrop: number, source: number) {
  return source <= 0.5
    ? backdrop - (1 - 2 * source) * backdrop * (1 - backdrop)
    : backdrop +
        (2 * source - 1) *
          ((backdrop <= 0.25
            ? ((16 * backdrop - 12) * backdrop + 4) * backdrop
            : Math.sqrt(backdrop)) -
            backdrop)
}

/**
 * Blend two color channels with the "difference" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
export function difference(backdrop: number, source: number) {
  return Math.abs(backdrop - source)
}

/**
 * Blend two color channels with the "exclusion" blend mode
 *
 * @param backdrop The background color channel as an integer from 0 to 255
 * @param source   The foreground color channel as an integer from 0 to 255
 * @return The blended channel value
 */
export function exclusion(backdrop: number, source: number) {
  return backdrop + source - 2 * backdrop * source
}

/**
 * Blend two color channels with the "linearBurn" blend mode
 * (NOT yet in W3C standard)
 *
 * @param backdrop The background color channel
 * @param source   The foreground color channel
 * @return The blended channel value
 */
 export function linearBurn(backdrop: number, source: number) {
  return backdrop + source < 1 ? 0 : backdrop + source - 1;
}

/**
 * Blend two color channels with the "linearDodge" blend mode
 * (NOT yet in W3C standard)
 *
 * @param backdrop The background color channel
 * @param source   The foreground color channel
 * @return The blended channel value
 */
export function linearDodge(backdrop: number, source: number) {
  return Math.min(1, backdrop + source);
}

/**
 * Blend two color channels with the "vividLight" blend mode
 * (NOT yet in W3C standard)
 *
 * @param backdrop The background color channel
 * @param source   The foreground color channel
 * @return The blended channel value
 */
export function vividLight(backdrop: number, source: number) {
  let result;

  if (source > 0.5) {
    if (2 * (source - 0.5) === 1) {
      result = 2 * (source - 0.5);
    } else {
      result = Math.min(1, backdrop / (1 - 2 * (source - 0.5)));
    }
  } else if (source === 0) {
    result = 0;
  } else {
    result = Math.max(0, 1 - (1 - backdrop) / (2 * source));
  }

  return result;
}

/**
 * Blend two color channels with the "linearLight" blend mode
 * (NOT yet in W3C standard)
 *
 * @param backdrop The background color channel
 * @param source   The foreground color channel
 * @return The blended channel value
 */
export function linearLight(backdrop: number, source: number) {
  return Math.min(1, Math.max(0, backdrop + 2 * source - 1));
}

/**
 * Blend two color channels with the "pinLight" blend mode
 * (NOT yet in W3C standard)
 *
 * @param backdrop The background color channel
 * @param source   The foreground color channel
 * @return The blended channel value
 */
export function pinLight(backdrop: number, source: number) {
  return Math.min(Math.max(backdrop, 2 * source - 1), 2 * source);
}

/**
 * Blend two color channels with the "hardMix" blend mode
 * (NOT yet in W3C standard)
 *
 * @param backdrop The background color channel
 * @param source   The foreground color channel
 * @return The blended channel value
 */
export function hardMix(backdrop: number, source: number) {
  return vividLight(backdrop, source) < 0.5 ? 0 : 1;
}

/**
 * Blend two color channels with the "subtract" blend mode
 * (NOT yet in W3C standard)
 *
 * @param backdrop The background color channel
 * @param source   The foreground color channel
 * @return The blended channel value
 */
export function subtract(backdrop: number, source: number) {
  return Math.max(backdrop - source, 0);
}

/**
 * Blend two color channels with the "divide" blend mode
 * (NOT yet in W3C standard)
 *
 * @param backdrop The background color channel
 * @param source   The foreground color channel
 * @return The blended channel value
 */
export function divide(backdrop: number, source: number) {
  return source === 0 ? 1 : Math.min(backdrop / source, 1);
}
