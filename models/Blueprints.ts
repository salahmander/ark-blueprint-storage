import { Schema, model, models } from "mongoose";

const BlueprintsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quality: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    durability: {
      type: Number,
      required: true,
    },
    damage: {
      type: Number,
      required: true,
    },
    armor: {
      type: Number,
      required: true,
    },
    resources: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Blueprints = models.Blueprints || model("Blueprints", BlueprintsSchema);

export default Blueprints;
