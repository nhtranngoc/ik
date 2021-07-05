export default function normalizeSize([px = 0, py = 0, pz = 0]) {
  return ([ox = 1, oy = 1, oz = 1]) => [px * ox, py * oy, pz * oz];
}
