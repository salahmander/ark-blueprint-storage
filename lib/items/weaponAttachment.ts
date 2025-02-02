import { ITEM_CATEGORY } from "./items";

export const WEAPON_ATTACHMENTS = Object.freeze({
  FLASHLIGHT_ATTACHMENT: "Flashlight Attachment",
  HOLO_SCOPE_ATTACHMENT: "Holo-Scope Attachment",
  LASER_ATTACHMENT: "Laser Attachment",
  SCOPE_ATTACHMENT: "Scope Attachment",
  SILENCER_ATTACHMENT: "Silencer Attachment",
});

export const CATEGORISED_WEAPON_ATTACHMENTS = Object.freeze([
  {
    name: WEAPON_ATTACHMENTS.FLASHLIGHT_ATTACHMENT,
    category: ITEM_CATEGORY.WEAPON_ATTACHMENT,
    english_name: "Flashlight Attachment",
  },
  {
    name: WEAPON_ATTACHMENTS.HOLO_SCOPE_ATTACHMENT,
    category: ITEM_CATEGORY.WEAPON_ATTACHMENT,
    english_name: "Holo-Scope Attachment",
  },
  {
    name: WEAPON_ATTACHMENTS.LASER_ATTACHMENT,
    category: ITEM_CATEGORY.WEAPON_ATTACHMENT,
    english_name: "Laser Attachment",
  },
  {
    name: WEAPON_ATTACHMENTS.SCOPE_ATTACHMENT,
    category: ITEM_CATEGORY.WEAPON_ATTACHMENT,
    english_name: "Scope Attachment",
  },
  {
    name: WEAPON_ATTACHMENTS.SILENCER_ATTACHMENT,
    category: ITEM_CATEGORY.WEAPON_ATTACHMENT,
    english_name: "Silencer Attachment",
  },
]);
