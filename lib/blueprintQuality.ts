export const BLUEPRINT_QUALITY = Object.freeze({
  ASCENDANT: "Ascendant",
  MASTERCRAFT: "Mastercraft",
  JOURNEYMAN: "Journeyman",
  RAMSHACKLE: "Ramshackle",
  PRIMITIVE: "Primitive",
});

export const BLUEPRINT_COLOR = Object.freeze({
  ASCENDANT:
    "radial-gradient(circle, rgba(4,251,251,0.9178046218487395) 50%, rgba(60,65,71,1) 100%)",
  MASTERCRAFT:
    "radial-gradient(circle, rgba(247,251,4,0.9178046218487395) 50%, rgba(60,65,71,1) 100%)",
  JOURNEYMAN:
    "radial-gradient(circle, rgba(134,4,251,0.9178046218487395) 50%, rgba(60,65,71,1) 100%)",
  RAMSHACKLE:
    "radial-gradient(circle, rgba(4,251,30,0.9178046218487395) 50%, rgba(60,65,71,1) 100%)",
  PRIMITIVE:
    "radial-gradient(circle, rgba(157,157,157,0.9178046218487395) 50%, rgba(60,65,71,1) 100%)",
});

export const BLUEPRINT_QUALITY_AND_COLOR = Object.freeze({
  [BLUEPRINT_QUALITY.ASCENDANT]: {
    name: BLUEPRINT_QUALITY.ASCENDANT,
    color: BLUEPRINT_COLOR.ASCENDANT,
    english_name: "Ascendant",
  },
  [BLUEPRINT_QUALITY.MASTERCRAFT]: {
    name: BLUEPRINT_QUALITY.MASTERCRAFT,
    color: BLUEPRINT_COLOR.MASTERCRAFT,
    english_name: "Mastercraft",
  },
  [BLUEPRINT_QUALITY.JOURNEYMAN]: {
    name: BLUEPRINT_QUALITY.JOURNEYMAN,
    color: BLUEPRINT_COLOR.JOURNEYMAN,
    english_name: "Journeyman",
  },
  [BLUEPRINT_QUALITY.RAMSHACKLE]: {
    name: BLUEPRINT_QUALITY.RAMSHACKLE,
    color: BLUEPRINT_COLOR.RAMSHACKLE,
    english_name: "Ramshackle",
  },
  [BLUEPRINT_QUALITY.PRIMITIVE]: {
    name: BLUEPRINT_QUALITY.PRIMITIVE,
    color: BLUEPRINT_COLOR.PRIMITIVE,
    english_name: "Primitive",
  },
});

export const blueprintQualitiesAndColors = Object.values(
  BLUEPRINT_QUALITY_AND_COLOR
);
