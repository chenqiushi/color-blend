import separableBlend from './separable-blend'
import * as separableBlendModes from './separable-modes'

import nonSeparableBlend from './non-separable-blend'
import * as nonSeparableBlendModes from './non-separable-modes'

import { performBlend } from './helpers'
import { RGBA } from './types'

/**
 * Blend two colors with the "normal" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function normal(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.normal,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "multiply" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function multiply(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.multiply,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "screen" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function screen(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.screen,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "overlay" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function overlay(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.overlay,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "darken" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function darken(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.darken,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "lighten" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function lighten(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.lighten,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "color dodge" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function colorDodge(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.colorDodge,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "color burn" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function colorBurn(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.colorBurn,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "hard light" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function hardLight(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.hardLight,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "soft light" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function softLight(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.softLight,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "difference" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function difference(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.difference,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "exclusion" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function exclusion(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    separableBlend,
    separableBlendModes.exclusion,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "hue" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function hue(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    nonSeparableBlend,
    nonSeparableBlendModes.hue,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "saturation" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function saturation(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    nonSeparableBlend,
    nonSeparableBlendModes.saturation,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "color" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function color(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    nonSeparableBlend,
    nonSeparableBlendModes.color,
    { unitInput: true, unitOutput: true }
  )
}

/**
 * Blend two colors with the "luminosity" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function luminosity(backdrop: RGBA, source: RGBA) {
  return performBlend(
    backdrop,
    source,
    nonSeparableBlend,
    nonSeparableBlendModes.luminosity,
    { unitInput: true, unitOutput: true }
  )
}

/* **************************************************** */
/* THE FOLLOWING BLEND MODES ARE NOT YET IN W3C STANDARD */
/* **************************************************** */

/**
 * Blend two colors with the "linearBurn" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
 export function linearBurn(backdrop: RGBA, source: RGBA) {
  return performBlend(backdrop, source, separableBlend, separableBlendModes.linearBurn, {
    unitInput: true,
    unitOutput: true,
  });
}

/**
 * Blend two colors with the "linearDodge" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function linearDodge(backdrop: RGBA, source: RGBA) {
  return performBlend(backdrop, source, separableBlend, separableBlendModes.linearDodge, {
    unitInput: true,
    unitOutput: true,
  });
}

/**
 * Blend two colors with the "darkerColor" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function darkerColor(backdrop: RGBA, source: RGBA) {
  return performBlend(backdrop, source, nonSeparableBlend, nonSeparableBlendModes.darkerColor, {
    unitInput: true,
    unitOutput: true,
  });
}

/**
 * Blend two colors with the "lighterColor" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function lighterColor(backdrop: RGBA, source: RGBA) {
  return performBlend(backdrop, source, nonSeparableBlend, nonSeparableBlendModes.lighterColor, {
    unitInput: true,
    unitOutput: true,
  });
}

/**
 * Blend two colors with the "vividLight" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function vividLight(backdrop: RGBA, source: RGBA) {
  return performBlend(backdrop, source, separableBlend, separableBlendModes.vividLight, {
    unitInput: true,
    unitOutput: true,
  });
}

/**
 * Blend two colors with the "linearLight" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function linearLight(backdrop: RGBA, source: RGBA) {
  return performBlend(backdrop, source, separableBlend, separableBlendModes.linearLight, {
    unitInput: true,
    unitOutput: true,
  });
}

/**
 * Blend two colors with the "pinLight" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function pinLight(backdrop: RGBA, source: RGBA) {
  return performBlend(backdrop, source, separableBlend, separableBlendModes.pinLight, {
    unitInput: true,
    unitOutput: true,
  });
}

/**
 * Blend two colors with the "hardMix" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function hardMix(backdrop: RGBA, source: RGBA) {
  return performBlend(backdrop, source, separableBlend, separableBlendModes.hardMix, {
    unitInput: true,
    unitOutput: true,
  });
}

/**
 * Blend two colors with the "subtract" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function subtract(backdrop: RGBA, source: RGBA) {
  return performBlend(backdrop, source, separableBlend, separableBlendModes.subtract, {
    unitInput: true,
    unitOutput: true,
  });
}

/**
 * Blend two colors with the "divide" blend mode
 *
 * @param backdrop The background color object { r,g,b,a } with all channels in the [0..1] range
 * @param source   The foreground color object { r,g,b,a } with all channels in the [0..1] range
 * @return The blended color
 */
export function divide(backdrop: RGBA, source: RGBA) {
  return performBlend(backdrop, source, separableBlend, separableBlendModes.divide, {
    unitInput: true,
    unitOutput: true,
  });
}
